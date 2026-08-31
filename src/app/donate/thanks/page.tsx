import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Thank you for contributing to NO on Proposition B.",
  robots: { index: false, follow: false },
};

export default function DonateThanksPage() {
  return (
    <div>
      <Nav overlay={false} />
      <main className="bg-navy text-white">
        <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
          <p className="font-display text-[56px] font-black leading-none text-orange md:text-[72px]">
            THANK YOU.
          </p>
          <p className="mt-6 text-[22px] font-medium leading-relaxed">
            Your contribution is helping tell San Francisco the truth about Prop
            B: $460 million, no funding plan, politicians picking loans.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/#act"
              className="bg-orange px-6 py-3 font-display text-[18px] font-extrabold tracking-wide text-white transition hover:bg-orange-deep"
            >
              GET INVOLVED
            </Link>
            <Link
              href="/"
              className="border-2 border-white px-6 py-3 font-display text-[18px] font-extrabold tracking-wide text-white transition hover:bg-white hover:text-navy"
            >
              BACK HOME
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
