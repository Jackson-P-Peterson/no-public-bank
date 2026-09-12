"use client";

import Image from "next/image";
import { InvolveForm } from "./InvolveForm";
import type { InvolveIntent } from "@/lib/involve";

export function Act({ initialIntents = [] }: { initialIntents?: InvolveIntent[] }) {
  return (
    <section id="act" className="relative scroll-mt-[4.5rem] overflow-hidden text-white">
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
            <p className="font-display text-[28px] font-bold tracking-[0.1em] text-orange md:text-[32px] md:tracking-[0.14em]">
              THE ASK
            </p>
            <h2 className="font-display mt-3 text-[clamp(4.15rem,16vw,7.25rem)] font-black leading-[0.82] tracking-[-0.04em]">
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
            <InvolveForm initialIntents={initialIntents} />
          </div>
        </div>
      </div>
    </section>
  );
}
