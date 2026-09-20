import Link from "next/link";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";

export function CampaignArticle({
  jsonLd,
  kicker,
  title,
  lede,
  children,
}: {
  jsonLd?: unknown;
  kicker: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      {jsonLd ? <JsonLd data={jsonLd} /> : null}
      <Nav overlay={false} />
      <main className="bg-paper">
        <article className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
          <p className="font-display text-[18px] font-bold tracking-[0.18em] text-orange">
            {kicker}
          </p>
          <h1 className="font-display mt-3 text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-[0.9] tracking-[-0.02em]">
            {title}
          </h1>
          {lede ? (
            <p className="mt-6 text-[20px] font-medium leading-relaxed text-ink">
              {lede}
            </p>
          ) : null}
          {children}
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
        </article>
      </main>
      <Footer />
    </div>
  );
}
