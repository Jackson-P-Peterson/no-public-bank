export function Cost() {
  return (
    <section id="cost" className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <p className="font-display text-[14px] font-bold tracking-[0.22em] text-red">
              THE COST
            </p>
            <h2 className="font-display mt-3 text-[clamp(4rem,14vw,9rem)] font-black leading-[0.82] tracking-[-0.04em]">
              $310
              <span className="block text-[clamp(2rem,6vw,4rem)] tracking-[-0.02em]">
                MILLION
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-[20px] font-medium leading-snug text-white">
              San Francisco is staring down a billion-dollar deficit. This measure
              asks you to approve a City Hall bank{" "}
              <strong className="text-red">before</strong> anyone tells you how to
              pay for it.
            </p>
          </div>

          <div className="border-2 border-white bg-white p-6 text-black md:p-8">
            <p className="font-display text-[13px] font-bold tracking-[0.2em] text-red">
              TAXPAYER CHECK
            </p>
            <p className="font-display mt-2 text-[42px] font-black leading-none tracking-tight text-red md:text-5xl">
              $310,000,000
            </p>
            <dl className="mt-6 space-y-3 border-t-2 border-black pt-5 text-[16px] font-semibold">
              <div className="flex justify-between gap-4">
                <dt>Pay to</dt>
                <dd className="tracking-widest">__________</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>To start</dt>
                <dd>$90M</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>To finish</dt>
                <dd>$220M</dd>
              </div>
              <div className="flex justify-between gap-4 border-t-2 border-black pt-3">
                <dt>Funding on ballot</dt>
                <dd className="font-display text-[22px] font-black text-red">
                  NONE
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-[13px] font-medium text-muted">
              Source: SF Reinvestment Working Group Business Plan, 2023.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 border-t-2 border-white/25 pt-10 sm:grid-cols-3">
          {[
            ["$1B", "Structural deficit already on the books"],
            ["WITHDRAWN", "The tax meant to fund the bank — gone March 2026"],
            ["$0", "Appropriated by this charter amendment"],
          ].map(([k, v]) => (
            <div key={k} className="border-l-4 border-red pl-4">
              <p className="font-display text-[2rem] font-black leading-none tracking-tight md:text-[2.4rem]">
                {k}
              </p>
              <p className="mt-2 text-[15px] font-medium leading-snug text-white/85">
                {v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
