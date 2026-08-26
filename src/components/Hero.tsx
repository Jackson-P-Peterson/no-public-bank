import Image from "next/image";
import { CostTicker } from "./CostTicker";

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
      <div className="photo-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-32 md:px-8 md:py-36">
        <p className="anim-rise font-display text-[18px] font-bold tracking-[0.22em] text-orange md:text-[20px]">
          SAN FRANCISCO · NOVEMBER 3, 2026 · PROPOSITION B
        </p>

        <h1 className="anim-rise-2 mt-5 font-display font-black leading-[0.78] tracking-[-0.04em]">
          <span className="block text-[clamp(2.4rem,10vw,7.5rem)]">
            <CostTicker />
          </span>
          <span className="mt-2 block max-w-5xl text-[clamp(2.1rem,6.5vw,4.75rem)] font-extrabold leading-[0.95] tracking-[-0.02em]">
            MILLION DOLLARS
          </span>
        </h1>

        <p className="anim-rise-3 mt-8 max-w-3xl border-l-4 border-orange pl-5 text-[clamp(1.45rem,2.8vw,2.05rem)] font-semibold leading-snug text-white">
          That’s the estimated cost of San Francisco’s unfunded public bank
          controlled by City Hall politicians. Vote{" "}
          <span className="text-orange">NO</span> on{" "}
          <span className="text-orange">Prop B</span> by{" "}
          <span className="text-orange">Nov 3</span>.
        </p>

        <div className="anim-flash mt-10 flex flex-wrap gap-3">
          <a
            href="#act"
            className="bg-orange px-9 py-5 font-display text-[26px] font-extrabold tracking-wide text-white transition hover:bg-orange-deep"
          >
            GET INVOLVED
          </a>
          <a
            href="mailto:campaign@nopropb.com"
            className="border-2 border-white bg-transparent px-9 py-5 font-display text-[26px] font-extrabold tracking-wide text-white transition hover:bg-white hover:text-navy"
          >
            DONATE
          </a>
        </div>

        <p className="anim-flash mt-6 max-w-2xl text-[22px] font-semibold leading-snug text-white md:text-[24px]">
          You’ll pay the bill when this experiment fails.
          <br />
          <a
            href="#facts"
            className="underline decoration-orange decoration-2 underline-offset-4 hover:text-orange"
          >
            See the facts below.
          </a>
        </p>
      </div>
    </section>
  );
}
