"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { CONTRIBUTION_RULES_PATH, DONATE_PRESETS, MAX_CENTS, MIN_CENTS } from "@/lib/donate";

type Preset = (typeof DONATE_PRESETS)[number] | "other";

export function DonateForm() {
  const [preset, setPreset] = useState<Preset>(100);
  const [other, setOther] = useState("");
  const [certified, setCertified] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    let amountCents: number;
    if (preset === "other") {
      const dollars = Number(other);
      if (!Number.isFinite(dollars)) {
        setError("Enter a valid amount.");
        return;
      }
      amountCents = Math.round(dollars * 100);
    } else {
      amountCents = preset * 100;
    }

    if (amountCents < MIN_CENTS || amountCents > MAX_CENTS) {
      setError("Enter an amount between $1 and $100,000.");
      return;
    }

    if (!certified) {
      setError("You must certify that you are eligible to contribute.");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amountCents, certified: true }),
      });
      const json = (await res.json()) as {
        ok?: boolean;
        url?: string;
        error?: string;
        hint?: string;
      };
      if (!res.ok || !json.ok || !json.url) {
        setError(json.hint || json.error || "Could not start checkout. Try again.");
        return;
      }
      window.location.assign(json.url);
    } catch {
      setError("Could not start checkout. Try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <fieldset>
        <legend className="text-[15px] font-bold uppercase tracking-[0.16em] text-muted">
          Amount
        </legend>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {DONATE_PRESETS.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setPreset(value)}
              className={`border-2 px-3 py-3 text-[17px] font-bold transition ${
                preset === value
                  ? "border-orange bg-orange text-white"
                  : "border-black bg-white text-black hover:bg-paper"
              }`}
            >
              ${value}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setPreset("other")}
          className={`mt-2 w-full border-2 px-3 py-3 text-[17px] font-bold transition ${
            preset === "other"
              ? "border-orange bg-orange text-white"
              : "border-black bg-white text-black hover:bg-paper"
          }`}
        >
          Other amount
        </button>
        {preset === "other" ? (
          <label className="mt-3 block text-[15px] font-bold uppercase tracking-wide text-muted">
            Custom amount
            <input
              required
              type="number"
              min={MIN_CENTS / 100}
              max={MAX_CENTS / 100}
              step="1"
              inputMode="decimal"
              value={other}
              onChange={(e) => setOther(e.target.value)}
              placeholder="150"
              className="mt-1 w-full border-2 border-black px-3 py-3 text-[18px] font-medium text-black outline-none focus:border-orange"
            />
          </label>
        ) : null}
      </fieldset>

      <p className="text-[16px] font-medium leading-snug text-ink">
        Stripe will require your street address, occupation, and employer. Those
        fields are required to accept political contributions in San Francisco.
      </p>

      <label className="flex cursor-pointer gap-3 text-[16px] font-medium leading-snug text-ink">
        <input
          required
          type="checkbox"
          checked={certified}
          onChange={(e) => setCertified(e.target.checked)}
          className="mt-1 h-5 w-5 shrink-0 accent-orange"
        />
        <span>
          I certify that this contribution is from my own funds, I am a U.S.
          citizen or lawful permanent resident, and I am eligible to make
          political contributions under federal and San Francisco law.{" "}
          <Link
            href={CONTRIBUTION_RULES_PATH}
            className="underline decoration-orange decoration-2 underline-offset-2 hover:text-orange"
          >
            Read the rules
          </Link>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={sending}
        className="w-full bg-orange py-3.5 font-display text-[20px] font-black tracking-wide text-white transition hover:bg-black disabled:opacity-60 md:py-5 md:text-[26px]"
      >
        {sending ? "REDIRECTING…" : "CONTINUE TO CHECKOUT"}
      </button>
      <p className="text-[15px] font-medium text-muted">
        Political contribution. Not tax deductible. You will also check a
        required certification box on the Stripe payment page.
      </p>
      {error ? <p className="text-[16px] font-medium text-orange">{error}</p> : null}
    </form>
  );
}
