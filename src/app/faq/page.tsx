import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { FAQS } from "@/lib/faq";
import { faqJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Prop B San Francisco public bank FAQ",
  description:
    "FAQ on Prop B San Francisco (November 3, 2026): the San Francisco public bank charter amendment, Controller cost estimate, no funding plan, wholesale-only lending, and why the official No committee says vote No.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <div>
      <JsonLd data={faqJsonLd()} />
      <Nav overlay={false} />
      <main className="bg-paper">
        <article className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
          <p className="font-display text-[18px] font-bold tracking-[0.18em] text-orange">
            THE OFFICIAL NO COMMITTEE
          </p>
          <h1 className="font-display mt-3 text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-[0.9] tracking-[-0.02em]">
            FAQ
          </h1>
          <p className="mt-4 font-display text-[22px] font-bold leading-snug tracking-wide text-muted md:text-[26px]">
            Frequently Asked Questions
          </p>

          <ol className="mt-10 space-y-10">
            {FAQS.map((item, i) => (
              <li key={item.q}>
                <h2 className="font-display text-[clamp(1.35rem,3vw,1.75rem)] font-black leading-[1.15] tracking-tight text-black">
                  {i + 1}. {item.q}
                </h2>
                <div className="mt-4 space-y-4 text-[19px] font-medium leading-relaxed text-ink">
                  {item.a.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-12 font-display text-[clamp(1.75rem,4vw,2.35rem)] font-black leading-[1.05] tracking-tight text-black">
            Vote No on Proposition B.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/#act"
              className="bg-orange px-6 py-3 font-display text-[18px] font-extrabold tracking-wide text-white transition hover:bg-orange-deep"
            >
              GET INVOLVED
            </Link>
            <Link
              href="/donate"
              className="border-2 border-black px-6 py-3 font-display text-[18px] font-extrabold tracking-wide text-black transition hover:bg-black hover:text-white"
            >
              DONATE
            </Link>
          </div>
          <p className="mt-8 text-[18px] font-bold leading-relaxed text-ink">
            <Link href="/prop-b-san-francisco" className="underline decoration-orange decoration-2 underline-offset-4 hover:text-orange">
              Prop B San Francisco
            </Link>
            {" · "}
            <Link href="/what-is-prop-b" className="underline decoration-orange decoration-2 underline-offset-4 hover:text-orange">
              What is Prop B?
            </Link>
            {" · "}
            <Link href="/san-francisco-public-bank" className="underline decoration-orange decoration-2 underline-offset-4 hover:text-orange">
              San Francisco public bank
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
