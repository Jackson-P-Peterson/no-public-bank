import Image from "next/image";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden text-white"
    >
      <Image
        src="/hero-crisis.jpg"
        alt="San Francisco Financial District street with tents and people in crisis outside the Bank of California"
        fill
        priority
        className="object-cover object-[center_65%]"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.78) 42%, rgba(0,0,0,0.45) 68%, rgba(0,0,0,0.35) 100%), linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 45%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-28 md:px-8 md:py-32">
        <p className="anim-rise font-display text-[14px] font-bold tracking-[0.3em] text-red md:text-[15px]">
          SAN FRANCISCO · NOVEMBER 3, 2026
        </p>

        <h1 className="anim-rise-2 mt-5 font-display font-black leading-[0.78] tracking-[-0.04em]">
          <span className="block text-[clamp(7rem,28vw,16rem)]">NO</span>
          <span className="mt-2 block max-w-4xl text-[clamp(2rem,6.5vw,4.25rem)] font-extrabold leading-[0.95] tracking-[-0.02em]">
            ON THE CITY HALL BANK
          </span>
        </h1>

        <p className="anim-rise-3 mt-8 max-w-2xl border-l-4 border-red pl-5 text-[clamp(1.2rem,2.5vw,1.65rem)] font-semibold leading-snug text-white">
          $310 million. No funding plan. Politicians picking the loans. You pay
          the <span className="text-red">TAX</span> for it.
        </p>

        <div className="anim-flash mt-10 flex flex-wrap gap-3">
          <a
            href="#act"
            className="bg-red px-8 py-4 font-display text-[22px] font-extrabold tracking-wide text-white transition hover:bg-white hover:text-black"
          >
            JOIN THE FIGHT
          </a>
          <a
            href="#facts"
            className="border-2 border-white bg-transparent px-8 py-4 font-display text-[22px] font-extrabold tracking-wide text-white transition hover:bg-white hover:text-black"
          >
            LEARN THE FACTS
          </a>
        </div>

        <p className="anim-flash mt-6 max-w-xl text-[18px] font-semibold leading-snug text-white md:text-[20px]">
          You pay the bill.{" "}
          <a href="#facts" className="underline decoration-red decoration-2 underline-offset-4 hover:text-red">
            See the facts below.
          </a>
        </p>
      </div>
    </section>
  );
}
