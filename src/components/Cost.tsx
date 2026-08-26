import Image from "next/image";

export function Cost() {
  return (
    <section id="cost" className="relative overflow-hidden text-white">
      <Image
        src="/hero-sf.jpg"
        alt="San Francisco skyline"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="photo-overlay absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <p className="font-display text-[18px] font-bold tracking-[0.18em] text-orange">
              THE COST
            </p>
            <h2 className="font-display mt-3 text-[clamp(2.6rem,9vw,6.75rem)] font-black leading-[0.82] tracking-[-0.04em]">
              $310 - 460
              <span className="block text-[clamp(2.1rem,5.5vw,4.25rem)] tracking-[-0.02em]">
                MILLION DOLLARS
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-[24px] font-medium leading-snug text-white">
              San Francisco is staring down a{" "}
              <span className="text-orange">$1,000,000,000+</span> deficit. Prop B
              asks you to approve a City Hall bank{" "}
              <span className="text-orange">before</span> anyone explains
              how to pay for it.
            </p>
          </div>

          <div className="border-2 border-white bg-white p-6 text-black md:p-8">
            <p className="font-display text-[16px] font-bold tracking-[0.16em] text-black">
              TAXPAYER CHECK
            </p>
            <p className="font-display mt-2 text-[48px] font-black leading-none tracking-tight text-black md:text-[56px]">
              $460,000,000
            </p>
            <dl className="mt-6 space-y-3 border-t-2 border-black pt-5 text-[20px] font-semibold">
              <div className="flex justify-between gap-4">
                <dt>Pay to</dt>
                <dd className="text-right">San Francisco City Hall</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>From</dt>
                <dd className="text-right">San Francisco Taxpayers</dd>
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
                <dd className="font-display text-[26px] font-black text-orange">
                  NONE
                </dd>
              </div>
            </dl>
            <p className="relative z-10 mt-6 text-[16px] font-medium text-muted">
              Source:{" "}
              <a
                href="https://www.sf.gov/reinvestment-working-group"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-orange decoration-2 underline-offset-4 hover:text-orange"
              >
                SF Reinvestment Working Group Business Plan, 2023.
              </a>
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 border-t-2 border-white/25 pt-10 sm:grid-cols-3">
          {[
            ["$1,000,000,000+", "Structural deficit already on the books"],
            ["WITHDRAWN", "The tax meant to fund the bank — gone March 2026"],
            ["$0", "Appropriated by this charter amendment"],
          ].map(([k, v]) => (
            <div key={k} className="border-l-4 border-orange pl-4">
              <p className="font-display text-[clamp(1.65rem,4.2vw,2.85rem)] font-black leading-none tracking-tight">
                {k}
              </p>
              <p className="mt-2 text-[18px] font-medium leading-snug text-white/85">
                {v}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
