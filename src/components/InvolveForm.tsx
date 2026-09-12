"use client";

import { FormEvent, useState, useSyncExternalStore } from "react";
import {
  INVOLVE_CHOICES,
  getClientWantKey,
  parseWantParam,
  subscribeInvolveWant,
  withDefaultUpdates,
  type InvolveIntent,
} from "@/lib/involve";

export const INVOLVE_SUBMITTED_KEY = "involveSubmitted";

export function InvolveForm({
  initialIntents = [],
  idPrefix = "",
  onSuccess,
  showTitle = true,
}: {
  initialIntents?: InvolveIntent[];
  idPrefix?: string;
  onSuccess?: () => void;
  showTitle?: boolean;
}) {
  const wantKey = useSyncExternalStore(
    subscribeInvolveWant,
    getClientWantKey,
    () => initialIntents[0] ?? "",
  );
  const urlIntents = withDefaultUpdates(
    parseWantParam(wantKey || initialIntents[0]),
  );
  const [overrides, setOverrides] = useState<InvolveIntent[] | null>(null);
  const intents = overrides ?? urlIntents;
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  function toggleIntent(id: InvolveIntent) {
    setOverrides((current) => {
      const selected = current ?? urlIntents;
      return selected.includes(id)
        ? selected.filter((item) => item !== id)
        : [...selected, id];
    });
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    if (intents.length === 0) {
      setError("Select at least one option.");
      return;
    }
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/api/involve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intents,
          first: data.get("first"),
          last: data.get("last"),
          email: data.get("email"),
          phone: data.get("phone"),
          zip: data.get("zip"),
        }),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setError(json.error || "Could not submit. Try again.");
        return;
      }
      try {
        sessionStorage.setItem(INVOLVE_SUBMITTED_KEY, "1");
      } catch {
        // ignore
      }
      setDone(true);
      onSuccess?.();
    } catch {
      setError("Could not submit. Try again.");
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div className="flex min-h-[340px] flex-col justify-center">
        <p className="font-display text-[56px] font-black leading-none text-orange">
          YOU’RE IN.
        </p>
        <p className="mt-4 text-[21px] font-medium leading-relaxed text-ink">
          We’ll follow up with next steps on volunteering, endorsing, signs, and
          neighborhood outreach.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {showTitle ? (
        <p className="font-display text-[28px] font-black leading-none tracking-tight md:text-[36px]">
          GET INVOLVED
        </p>
      ) : null}
      <fieldset>
        <legend className="text-[15px] font-bold uppercase tracking-[0.16em] text-muted">
          I want to
        </legend>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {INVOLVE_CHOICES.map((choice) => {
            const selected = intents.includes(choice.id);
            return (
              <button
                id={`${idPrefix}${choice.id}`}
                key={choice.id}
                type="button"
                aria-pressed={selected}
                onClick={() => toggleIntent(choice.id)}
                className={`border-2 px-3 py-3 text-[17px] font-bold transition ${
                  selected
                    ? "border-orange bg-orange text-white"
                    : "border-black bg-white text-black hover:bg-paper"
                }`}
              >
                {choice.label}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-[15px] font-bold uppercase tracking-wide text-muted">
          First name
          <input
            required
            name="first"
            autoComplete="given-name"
            className="mt-1 w-full border-2 border-black px-3 py-3 text-[18px] font-medium text-black outline-none focus:border-orange"
          />
        </label>
        <label className="block text-[15px] font-bold uppercase tracking-wide text-muted">
          Last name
          <input
            required
            name="last"
            autoComplete="family-name"
            className="mt-1 w-full border-2 border-black px-3 py-3 text-[18px] font-medium text-black outline-none focus:border-orange"
          />
        </label>
      </div>

      <label className="block text-[15px] font-bold uppercase tracking-wide text-muted">
        Email
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className="mt-1 w-full border-2 border-black px-3 py-3 text-[18px] font-medium text-black outline-none focus:border-orange"
        />
      </label>

      <label className="block text-[15px] font-bold uppercase tracking-wide text-muted">
        Phone number
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          className="mt-1 w-full border-2 border-black px-3 py-3 text-[18px] font-medium text-black outline-none focus:border-orange"
        />
      </label>

      <label className="block text-[15px] font-bold uppercase tracking-wide text-muted">
        ZIP code
        <input
          name="zip"
          inputMode="numeric"
          autoComplete="postal-code"
          placeholder="94118"
          className="mt-1 w-full border-2 border-black px-3 py-3 text-[18px] font-medium text-black outline-none focus:border-orange"
        />
      </label>

      <button
        type="submit"
        disabled={sending}
        className="w-full bg-orange py-3.5 font-display text-[20px] font-black tracking-wide text-white transition hover:bg-black disabled:opacity-60 md:py-5 md:text-[26px]"
      >
        {sending ? "SUBMITTING…" : "SUBMIT"}
      </button>
      {error ? (
        <p className="text-[16px] font-medium text-orange">{error}</p>
      ) : null}
    </form>
  );
}
