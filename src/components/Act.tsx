"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { DonateForm } from "./DonateForm";

type Intent = "volunteer" | "sign" | "updates" | "donate";

export function Act() {
  const [intent, setIntent] = useState<Intent>("volunteer");
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/api/involve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          intent: data.get("intent"),
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
      setDone(true);
    } catch {
      setError("Could not submit. Try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="act" className="relative overflow-hidden text-white">
      <Image
        src="/sf-cable-car.jpg"
        alt="San Francisco cable car on a steep residential hill"
        fill
        className="object-cover object-[center_30%]"
        sizes="100vw"
      />
      <div className="photo-overlay absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="font-display text-[18px] font-bold tracking-[0.18em] text-orange">
              THE ASK
            </p>
            <h2 className="font-display mt-3 text-[clamp(3.25rem,8.5vw,6rem)] font-black leading-[0.88] tracking-[-0.02em]">
              FIX THE DEFICIT.
              <br />
              PROTECT SERVICES.
              <br />
              <span className="text-orange">VOTE NO ON B.</span>
            </h2>
            <p className="mt-6 max-w-lg text-[22px] font-medium leading-relaxed text-white">
              Tell every neighbor three facts:{" "}
              <strong>$460 million. No funding plan. Politicians picking loans.</strong>{" "}
              Then ask them to vote No on Proposition B on November 3.
            </p>
            <ul className="mt-8 space-y-3 text-[20px] font-semibold">
              {[
                "Share the facts with friends and family",
                "Put a sign in your yard or window",
                "Volunteer before Election Day",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 bg-orange" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div id="donate" className="border-4 border-white bg-white p-5 text-black md:p-7">
            {done ? (
              <div className="flex min-h-[340px] flex-col justify-center">
                <p className="font-display text-[56px] font-black leading-none text-orange">
                  YOU’RE IN.
                </p>
                <p className="mt-4 text-[21px] font-medium leading-relaxed text-ink">
                  We’ll follow up with next steps on volunteering, signs, and
                  neighborhood outreach.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="font-display text-[28px] font-black leading-none tracking-tight md:text-[36px]">
                  {intent === "donate" ? "DONATE" : "GET INVOLVED"}
                </p>
                <fieldset>
                  <legend className="text-[15px] font-bold uppercase tracking-[0.16em] text-muted">
                    I want to
                  </legend>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setIntent("volunteer")}
                      className={`border-2 px-3 py-3 text-[17px] font-bold transition ${
                        intent === "volunteer"
                          ? "border-orange bg-orange text-white"
                          : "border-black bg-white text-black hover:bg-paper"
                      }`}
                    >
                      Volunteer
                    </button>
                    <button
                      type="button"
                      onClick={() => setIntent("donate")}
                      className={`border-2 px-3 py-3 text-[17px] font-bold transition ${
                        intent === "donate"
                          ? "border-orange bg-orange text-white"
                          : "border-black bg-white text-black hover:bg-paper"
                      }`}
                    >
                      Donate
                    </button>
                    <button
                      type="button"
                      onClick={() => setIntent("sign")}
                      className={`border-2 px-3 py-3 text-[17px] font-bold transition ${
                        intent === "sign"
                          ? "border-orange bg-orange text-white"
                          : "border-black bg-white text-black hover:bg-paper"
                      }`}
                    >
                      Get a Sign
                    </button>
                    <button
                      type="button"
                      onClick={() => setIntent("updates")}
                      className={`border-2 px-3 py-3 text-[17px] font-bold transition ${
                        intent === "updates"
                          ? "border-orange bg-orange text-white"
                          : "border-black bg-white text-black hover:bg-paper"
                      }`}
                    >
                      Get Updates
                    </button>
                  </div>
                </fieldset>

                {intent === "donate" ? (
                  <DonateForm />
                ) : (
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <label className="block text-[15px] font-bold uppercase tracking-wide text-muted">
                        First name
                        <input
                          required
                          name="first"
                          className="mt-1 w-full border-2 border-black px-3 py-3 text-[18px] font-medium text-black outline-none focus:border-orange"
                        />
                      </label>
                      <label className="block text-[15px] font-bold uppercase tracking-wide text-muted">
                        Last name
                        <input
                          required
                          name="last"
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

                    <input type="hidden" name="intent" value={intent} />

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
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
