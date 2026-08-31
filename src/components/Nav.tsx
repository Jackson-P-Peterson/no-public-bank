import Link from "next/link";

export function Nav({ overlay = true }: { overlay?: boolean }) {
  return (
    <header
      className={
        overlay
          ? "absolute inset-x-0 top-0 z-50 bg-transparent text-white"
          : "bg-navy text-white"
      }
    >
      <div className="mx-auto flex min-h-[4.5rem] max-w-6xl items-center justify-between gap-3 px-5 py-3 md:h-[4.5rem] md:px-8 md:py-0">
        <Link
          href="/#top"
          className="font-display min-w-0 text-[15px] font-extrabold leading-[1.08] tracking-wide sm:text-[20px] md:text-[22px]"
        >
          <span className="block md:inline">NO ON PROP B</span>
          <span className="mt-0.5 block text-orange md:mt-0 md:inline">
            <span className="hidden md:inline"> </span>
            YOU’LL PAY THE TAX
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-[17px] font-semibold tracking-wide md:flex">
          <Link href="/#facts" className="opacity-90 hover:opacity-100">
            Facts
          </Link>
          <Link href="/#cost" className="opacity-90 hover:opacity-100">
            Cost
          </Link>
          <Link href="/#truth" className="opacity-90 hover:opacity-100">
            Truth
          </Link>
          <Link href="/#act" className="opacity-90 hover:opacity-100">
            Act
          </Link>
        </nav>
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Link
            href="/donate"
            className="whitespace-nowrap border-2 border-white px-2.5 py-2 font-display text-[13px] font-extrabold leading-none tracking-wide text-white transition hover:bg-white hover:text-navy sm:px-4 sm:text-[18px]"
          >
            DONATE
          </Link>
          <Link
            href="/#act"
            className="whitespace-nowrap bg-orange px-2.5 py-2 font-display text-[13px] font-extrabold leading-none tracking-wide text-white transition hover:bg-orange-deep sm:px-4 sm:py-2.5 sm:text-[18px]"
          >
            GET INVOLVED
          </Link>
        </div>
      </div>
    </header>
  );
}
