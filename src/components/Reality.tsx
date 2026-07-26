import Image from "next/image";

const points = [
  {
    title: "NO ACCOUNT FOR YOU",
    body: "By state law, you cannot open a checking account. This is not a bank for residents.",
  },
  {
    title: "NO DIRECT SMALL-BUSINESS LOAN",
    body: "It cannot lend to your shop or restaurant. It buys slices of other lenders’ loans.",
  },
  {
    title: "CITY CASH LOCKED OUT FOR YEARS",
    body: "The Treasurer’s pool can’t capitalize it for at least five years — then only with 110% collateral.",
  },
  {
    title: "ZERO HOMES THIS DECADE",
    body: "A bank that can’t touch city deposits and can’t lend directly builds no housing now.",
  },
];

export function Reality() {
  return (
    <section id="reality" className="paper-grid">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="font-display text-[14px] font-bold tracking-[0.22em] text-red">
              READ THE FINE PRINT
            </p>
            <h2 className="font-display mt-3 text-[clamp(2.75rem,7vw,5rem)] font-black leading-[0.9] tracking-[-0.02em] text-black">
              THIS ISN’T
              <br />
              A BANK
              <br />
              <span className="text-red">FOR YOU.</span>
            </h2>
            <p className="mt-6 max-w-md text-[18px] font-medium leading-relaxed text-ink">
              California law (AB 857) forces a wholesale model. You’re being sold
              a people’s bank. You’re being asked to fund a finance office most
              San Franciscans will never touch.
            </p>
          </div>

          <div className="relative min-h-[280px] overflow-hidden border-4 border-black lg:min-h-full">
            <Image
              src="/city-hall.jpg"
              alt="San Francisco City Hall"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/35" />
            <p className="absolute bottom-0 left-0 right-0 bg-red px-4 py-3 font-display text-[18px] font-extrabold tracking-wide text-white md:text-[22px]">
              CITY HALL WANTS THE POWER. YOU PAY THE BILL.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {points.map((p) => (
            <div
              key={p.title}
              className="border-4 border-black bg-white p-5 md:p-6"
            >
              <h3 className="font-display text-[22px] font-black leading-none tracking-tight text-black md:text-[26px]">
                {p.title}
              </h3>
              <p className="mt-3 text-[16px] font-medium leading-relaxed text-muted">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
