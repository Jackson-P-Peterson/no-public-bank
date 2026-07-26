"use client";

import { FormEvent, useState } from "react";

type Intent = "volunteer" | "donate" | "sign" | "updates";

export function Act() {
  const [intent, setIntent] = useState<Intent>("volunteer");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <section id="act" className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="font-display text-[14px] font-bold tracking-[0.22em] text-red">
              THE ASK
            </p>
            <h2 className="font-display mt-3 text-[clamp(3rem,8vw,5.5rem)] font-black leading-[0.88] tracking-[-0.02em]">
              FIX THE DEFICIT.
              <br />
              PROTECT SERVICES.
              <br />
              <span className="text-red">VOTE NO.</span>
            </h2>
            <p className="mt-6 max-w-md text-[18px] font-medium leading-relaxed text-white">
              Tell every neighbor three facts:{" "}
              <strong>$310 million. No funding plan. Politicians picking loans.</strong>{" "}
              Then ask them to vote No on November 3.
            </p>
            <ul className="mt-8 space-y-3 text-[16px] font-semibold">
              {[
                "Share the facts with friends and family",
                "Put a sign in your yard or window",
                "Volunteer before Election Day",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 shrink-0 bg-red" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-4 border-white bg-white p-5 text-black md:p-7">
            {done ? (
              <div className="flex min-h-[340px] flex-col justify-center">
                <p className="font-display text-[48px] font-black leading-none text-red">
                  YOU’RE IN.
                </p>
                <p className="mt-4 text-[17px] font-medium leading-relaxed text-ink">
                  We’ll follow up with next steps on volunteering, signs, and
                  neighborhood outreach.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <p className="font-display text-[28px] font-black leading-none tracking-tight">
                  COUNT ME IN
                </p>
                <fieldset>
                  <legend className="text-[12px] font-bold uppercase tracking-[0.16em] text-muted">
                    I want to
                  </legend>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {(
                      [
                        ["volunteer", "Volunteer"],
                        ["donate", "Contribute"],
                        ["sign", "Get a Sign"],
                        ["updates", "Get Updates"],
                      ] as const
                    ).map(([value, label]) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setIntent(value)}
                        className={`border-2 px-3 py-2.5 text-[14px] font-bold transition ${
                          intent === value
                            ? "border-red bg-red text-white"
                            : "border-black bg-white text-black hover:bg-paper"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block text-[12px] font-bold uppercase tracking-wide text-muted">
                    First name
                    <input
                      required
                      name="first"
                      className="mt-1 w-full border-2 border-black px-3 py-2.5 text-[15px] font-medium text-black outline-none focus:border-red"
                    />
                  </label>
                  <label className="block text-[12px] font-bold uppercase tracking-wide text-muted">
                    Last name
                    <input
                      required
                      name="last"
                      className="mt-1 w-full border-2 border-black px-3 py-2.5 text-[15px] font-medium text-black outline-none focus:border-red"
                    />
                  </label>
                </div>

                <label className="block text-[12px] font-bold uppercase tracking-wide text-muted">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-1 w-full border-2 border-black px-3 py-2.5 text-[15px] font-medium text-black outline-none focus:border-red"
                  />
                </label>

                <label className="block text-[12px] font-bold uppercase tracking-wide text-muted">
                  ZIP / Neighborhood
                  <input
                    name="zip"
                    placeholder="94118"
                    className="mt-1 w-full border-2 border-black px-3 py-2.5 text-[15px] font-medium text-black outline-none focus:border-red"
                  />
                </label>

                <input type="hidden" name="intent" value={intent} />

                <button
                  type="submit"
                  className="w-full bg-red py-4 font-display text-[22px] font-black tracking-wide text-white transition hover:bg-black"
                >
                  SUBMIT
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
