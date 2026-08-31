import { NextResponse } from "next/server";
import Stripe from "stripe";
import {
  CONTRIBUTION_RULES_PATH,
  parseAmountCents,
} from "@/lib/donate";
import { COMMITTEE_NAME, SITE_URL } from "@/lib/seo";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function stripeEnvNames() {
  return Object.keys(process.env)
    .filter((name) => /stripe/i.test(name))
    .sort();
}

function stripeSecretKey() {
  // Dynamic lookup so the key is read at request time, not inlined empty at build.
  for (const [name, value] of Object.entries(process.env)) {
    if (!value?.trim()) continue;
    const normalized = name.replace(/[^a-z0-9]/gi, "").toLowerCase();
    if (
      normalized === "stripesecretkey" ||
      normalized === "stripesecret" ||
      normalized === "stripeapikey"
    ) {
      return value.trim();
    }
  }
  return "";
}

function stripeClient() {
  const key = stripeSecretKey();
  if (!key) return null;
  return new Stripe(key);
}

function originFrom(request: Request) {
  const header = request.headers.get("origin");
  if (header) return header.replace(/\/$/, "");
  return SITE_URL;
}

export async function POST(request: Request) {
  const secret = stripeSecretKey();
  if (secret.startsWith("pk_")) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Vercel has a Stripe publishable key (pk_…). Use the Secret key from Developers → API keys (it starts with sk_).",
      },
      { status: 503 },
    );
  }

  const stripe = stripeClient();
  if (!stripe) {
    const names = stripeEnvNames();
    console.error("Donate missing Stripe secret key", {
      vercelEnv: process.env.VERCEL_ENV,
      stripeEnvNames: names,
    });
    return NextResponse.json(
      {
        ok: false,
        error: "Donations are not configured yet.",
        hint: `This ${process.env.VERCEL_ENV || "server"} deploy does not have a Stripe secret key. Stripe variable names present: ${names.join(", ") || "(none)"}. Add STRIPE_SECRET_KEY to Production and Redeploy.`,
      },
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
      customer_creation: "always",
      billing_address_collection: "required",
      phone_number_collection: { enabled: true },
      name_collection: {
        individual: { enabled: true, optional: false },
      },
      consent_collection: {
        terms_of_service: "required",
      },
      custom_fields: [
        {
          key: "occupation",
          label: { type: "custom", custom: "Occupation" },
          type: "text",
          optional: false,
          text: { maximum_length: 255 },
        },
        {
          key: "employer",
          label: { type: "custom", custom: "Employer" },
          type: "text",
          optional: false,
          text: { maximum_length: 255 },
        },
      ],
      custom_text: {
        submit: {
          message:
            "Name, email, phone, street address, occupation, and employer are required. If you are retired, a student, or unemployed, enter that in both Occupation and Employer.",
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
