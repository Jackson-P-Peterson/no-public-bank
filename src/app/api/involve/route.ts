import { NextResponse } from "next/server";

const INTENTS: Record<string, string> = {
  volunteer: "Volunteer",
  sign: "Get a Sign",
  updates: "Get Updates",
};

function clean(value: unknown, max: number) {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

export async function POST(request: Request) {
  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const secret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;

  if (!webhook || !secret) {
    return NextResponse.json(
      { ok: false, error: "Form is not configured yet." },
      { status: 503 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const intentKey = clean(body.intent, 32);
  const intent = INTENTS[intentKey];
  const first = clean(body.first, 80);
  const last = clean(body.last, 80);
  const email = clean(body.email, 120);
  const phone = clean(body.phone, 40);
  const zip = clean(body.zip, 16);

  if (!intent || !first || !last || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Please fill out the required fields." }, { status: 400 });
  }

  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      secret,
      intent,
      first,
      last,
      email,
      phone,
      zip,
    }),
    redirect: "follow",
  });

  const text = await res.text();
  let parsed: { ok?: boolean } = {};
  try {
    parsed = JSON.parse(text);
  } catch {
    parsed = {};
  }

  if (!parsed.ok) {
    return NextResponse.json(
      { ok: false, error: "Could not save your info. Try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
