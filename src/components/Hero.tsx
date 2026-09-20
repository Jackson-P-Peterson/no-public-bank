import Image from "next/image";
import Link from "next/link";
import { CostTicker } from "./CostTicker";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Vote No on Prop B San Francisco, the November 3, 2026 public bank ballot measure"
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

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-28 md:px-8 md:py-36">
        <p className="anim-rise font-display text-[16px] font-bold tracking-[0.12em] text-orange sm:text-[18px] sm:tracking-[0.16em] md:text-[20px] md:tracking-[0.22em]">
          SAN FRANCISCO · NOVEMBER 3, 2026 · PROPOSITION B
        </p>

        <h1 className="anim-rise-2 mt-5 font-display font-black leading-[0.78] tracking-[-0.04em]">
          <span className="block text-[clamp(2.75rem,12vw,7.5rem)]">
            <CostTicker />
          </span>
          <span className="mt-2 block max-w-5xl text-[clamp(2.15rem,8.5vw,4.75rem)] font-extrabold leading-[0.95] tracking-[-0.02em]">
            MILLION DOLLARS
          </span>
        </h1>

        <p className="anim-rise-3 mt-6 max-w-3xl border-l-4 border-orange pl-4 text-[1.15rem] font-semibold leading-snug text-white sm:pl-5 md:mt-8 md:text-[clamp(1.45rem,2.8vw,2.05rem)]">
          That’s the estimated cost of San Francisco’s unfunded public bank
          controlled by City Hall politicians. Vote{" "}
          <span className="text-orange">NO</span> on{" "}
          <span className="text-orange">Prop B</span> by{" "}
          <span className="text-orange">Nov 3</span>.
        </p>

        <div className="anim-flash mt-7 flex flex-wrap gap-2 md:mt-10 md:gap-3">
          <a
            href="#act"
            className="bg-orange px-5 py-3 font-display text-[17px] font-extrabold tracking-wide text-white transition hover:bg-orange-deep md:px-9 md:py-5 md:text-[26px]"
          >
            GET INVOLVED
          </a>
          <Link
            href="/donate"
            className="border-2 border-white bg-transparent px-5 py-3 font-display text-[17px] font-extrabold tracking-wide text-white transition hover:bg-white hover:text-navy md:px-9 md:py-5 md:text-[26px]"
          >
            DONATE
          </Link>
        </div>

        <p className="anim-flash mt-5 max-w-2xl text-[18px] font-semibold leading-snug text-white md:mt-6 md:text-[24px]">
          You’ll pay the bill when this risky experiment fails.
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
