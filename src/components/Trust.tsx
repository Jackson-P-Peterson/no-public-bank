export function Trust() {
  return (
    <section id="trust" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="font-display text-[14px] font-bold tracking-[0.22em] text-red">
          WHO CONTROLS THE MONEY?
        </p>
        <h2 className="font-display mt-3 max-w-5xl text-[clamp(2.5rem,6.5vw,4.75rem)] font-black leading-[0.92] tracking-[-0.02em] text-black">
          THEIR EXPERTS SAID NO.
          <br />
          <span className="text-red">THEY DID IT ANYWAY.</span>
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div className="space-y-5 text-[18px] font-medium leading-relaxed text-ink">
            <p>
              Financial consultants told City Hall: keep politicians{" "}
              <strong>advisory-only</strong> — or risk failing federal bank
              approval.
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
            <p className="font-display text-[clamp(1.5rem,3.2vw,2.15rem)] font-extrabold leading-[1.05] tracking-tight text-black">
              “ASKING VOTERS TO COMMIT SAN FRANCISCO TO POTENTIALLY RUNNING A
              FINANCIAL INSTITUTION IS ASKING FOR TRUST THE CITY HAS NOT YET
              EARNED.”
            </p>
            <footer className="mt-6 font-display text-[16px] font-bold tracking-[0.14em] text-red">
              — SUPERVISOR ALAN WONG
            </footer>
          </blockquote>
        </div>

        <div className="mt-14 border-4 border-black bg-black p-6 text-white md:p-8">
          <p className="font-display text-[14px] font-bold tracking-[0.2em] text-red">
            NORTH DAKOTA IS NOT A MODEL — IT’S A WARNING
          </p>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {[
              ["191 OF 755", "Early loans an audit said should never have been made"],
              ["$8.8M LOST", "By 1936 — then rescued with bailouts from other state funds"],
              ["DIFFERENT RULES", "ND has captive deposits & no FDIC premiums. SF won’t."],
            ].map(([t, d]) => (
              <div key={t}>
                <p className="font-display text-[28px] font-black leading-none tracking-tight md:text-[32px]">
                  {t}
                </p>
                <p className="mt-2 text-[15px] font-medium leading-snug text-white/85">
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
