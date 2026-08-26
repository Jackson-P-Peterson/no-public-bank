import Image from "next/image";

export function Trust() {
  return (
    <section id="trust" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="font-display text-[18px] font-bold tracking-[0.18em] text-orange">
          WHO CONTROLS THE MONEY?
        </p>
        <h2 className="font-display mt-3 max-w-5xl text-[clamp(2.85rem,6.8vw,5.25rem)] font-black leading-[0.92] tracking-[-0.02em] text-black">
          THEIR EXPERTS SAID NO.
          <br />
          <span className="text-orange">THEY DID IT ANYWAY.</span>
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div className="space-y-5 text-[22px] font-medium leading-relaxed text-ink">
            <p>
              Financial consultants told City Hall: keep politicians{" "}
              <strong>advisory-only</strong> — or risk failing federal bank
              approval. Prop B does the opposite.
            </p>
            <p>
              The working group overruled them. The plan puts a politically
              appointed commission in binding control over hundreds of millions
              in public capital.
            </p>
            <p className="font-semibold text-black">
              When political loans go bad, taxpayers eat the loss.
            </p>
          </div>

          <blockquote className="border-4 border-black bg-paper p-6 md:p-8">
            <p className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold leading-[1.08] tracking-tight text-black">
              “ASKING VOTERS TO COMMIT SAN FRANCISCO TO POTENTIALLY RUNNING A
              FINANCIAL INSTITUTION IS ASKING FOR TRUST THE CITY HAS NOT YET
              EARNED.”
            </p>
            <footer className="mt-6 font-display text-[20px] font-bold tracking-[0.12em] text-orange">
              — SUPERVISOR ALAN WONG
            </footer>
          </blockquote>
        </div>

        <div className="relative mt-14 overflow-hidden border-4 border-black">
          <Image
            src="/sf-skyline.jpg"
            alt="San Francisco downtown skyline including Salesforce Tower"
            fill
            className="object-cover object-[center_20%]"
            sizes="100vw"
          />
          <div className="photo-overlay absolute inset-0" />
          <div className="relative z-10 p-6 text-white md:p-8">
            <p className="font-display text-[18px] font-bold tracking-[0.16em] text-orange">
              NORTH DAKOTA IS NOT A MODEL — IT’S A WARNING
            </p>
            <div className="mt-5 grid gap-6 md:grid-cols-3">
              {[
                [
                  "191 OF 755",
                  "Early loans an audit said should never have been made",
                ],
                [
                  "$8.8M LOST",
                  "By 1936 — then rescued with bailouts from other state funds",
                ],
                [
                  "DIFFERENT RULES",
                  "ND has captive deposits & no FDIC premiums. SF won’t.",
                ],
              ].map(([t, d]) => (
                <div key={t}>
                  <p className="font-display text-[34px] font-black leading-none tracking-tight md:text-[40px]">
                    {t}
                  </p>
                  <p className="mt-2 text-[18px] font-medium leading-snug text-white/85">
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
