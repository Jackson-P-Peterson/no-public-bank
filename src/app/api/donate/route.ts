import { NextResponse } from "next/server";
import Stripe from "stripe";
import {
  CONTRIBUTION_RULES_PATH,
  parseAmountCents,
} from "@/lib/donate";
import { COMMITTEE_NAME, SITE_URL } from "@/lib/seo";

function stripeClient() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key);
}

function originFrom(request: Request) {
  const header = request.headers.get("origin");
  if (header) return header.replace(/\/$/, "");
  return SITE_URL;
}

export async function POST(request: Request) {
  const stripe = stripeClient();
  if (!stripe) {
    return NextResponse.json(
      { ok: false, error: "Donations are not configured yet." },
      { status: 503 },
    );
  }

  let body: { amountCents?: unknown; certified?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (body.certified !== true) {
    return NextResponse.json(
      { ok: false, error: "You must certify that you are eligible to contribute." },
      { status: 400 },
    );
  }

  const amountCents = parseAmountCents(body.amountCents);
  if (amountCents == null) {
    return NextResponse.json(
      { ok: false, error: "Enter an amount between $1 and $100,000." },
      { status: 400 },
    );
  }

  const origin = originFrom(request);
  const rulesUrl = `${SITE_URL}${CONTRIBUTION_RULES_PATH}`;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      submit_type: "donate",
      billing_address_collection: "required",
      consent_collection: {
        terms_of_service: "required",
      },
      custom_fields: [
        {
          key: "occupation",
          label: { type: "custom", custom: "Occupation" },
          type: "text",
          text: { maximum_length: 255 },
        },
        {
          key: "employer",
          label: { type: "custom", custom: "Employer" },
          type: "text",
          text: { maximum_length: 255 },
        },
      ],
      custom_text: {
        submit: {
          message:
            "Street address, occupation, and employer are required for San Francisco campaign finance reporting. If you are retired, a student, or unemployed, enter that in both Occupation and Employer.",
        },
        terms_of_service_acceptance: {
          message: `I certify this contribution is from my own funds, I am a U.S. citizen or lawful permanent resident, and I am eligible to make political contributions under federal and San Francisco law. [Contribution rules](${rulesUrl})`,
        },
      },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: amountCents,
            product_data: {
              name: `Contribution — ${COMMITTEE_NAME}`,
              description: "Political contribution. Not tax deductible.",
            },
          },
        },
      ],
      payment_intent_data: {
        description: "Political contribution to NO on Proposition B. Not tax deductible.",
        statement_descriptor: "NO ON PROP B",
        metadata: {
          purpose: "political_contribution",
          measure: "SF_Prop_B",
          certified_on_site: "true",
        },
      },
      success_url: `${origin}/donate/thanks?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/donate`,
    });

    if (!session.url) {
      return NextResponse.json(
        { ok: false, error: "Could not start checkout." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, url: session.url });
  } catch (err) {
    const message = err instanceof Stripe.errors.StripeError ? err.message : "";
    if (/terms of service/i.test(message)) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Stripe needs a Terms of service URL before we can require the certification checkbox. In Stripe Dashboard go to Settings → Public details and set Terms of service to this site’s /contribution-rules page.",
        },
        { status: 502 },
      );
    }
    console.error("Stripe checkout error", err);
    return NextResponse.json(
      { ok: false, error: "Could not start checkout. Try again." },
      { status: 502 },
    );
  }
}
