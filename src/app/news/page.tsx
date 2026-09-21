import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { NEWS } from "@/lib/news";
import { newsJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "News on Prop B San Francisco public bank",
  description:
    "News on Prop B San Francisco and the San Francisco public bank ballot measure — SFGate, Mission Local, Chronicle editorial, KQED, Axios, American Banker, and more.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <div>
      <JsonLd data={newsJsonLd()} />
      <Nav overlay={false} />
      <main className="bg-paper">
        <article className="mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-16">
          <p className="font-display text-[18px] font-bold tracking-[0.18em] text-orange">
            THE OFFICIAL NO COMMITTEE
          </p>
          <h1
            className="font-display mt-3 text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-[0.9] tracking-[-0.02em]"
            aria-label="News on Prop B San Francisco public bank"
          >
            NEWS
          </h1>
          <p className="mt-4 text-[20px] font-medium leading-relaxed text-ink">
            Coverage of Proposition B — newest first.
          </p>

          <ol className="mt-10 space-y-0 border-t-4 border-black">
            {NEWS.map((item) => (
              <li
                key={item.href}
                className="grid gap-5 border-b-2 border-line py-7 sm:grid-cols-[200px_1fr] sm:items-start md:grid-cols-[240px_1fr] md:gap-7"
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[16/10] overflow-hidden border-2 border-black bg-white"
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className={item.imageClass ?? "object-cover"}
                    sizes="(max-width: 640px) 100vw, 240px"
                  />
                </a>
                <div>
                  <p className="text-[15px] font-bold uppercase tracking-[0.14em] text-muted">
                    {item.outlet}
                    <span className="mx-2 text-orange" aria-hidden="true">
                      ·
                    </span>
                    <time dateTime={item.date}>{item.dateLabel}</time>
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block font-display text-[clamp(1.35rem,3vw,1.8rem)] font-black leading-[1.12] tracking-tight text-black hover:text-orange"
                  >
                    {item.title}
                  </a>
                  <p className="mt-3 text-[18px] font-medium leading-relaxed text-ink">
                    {item.dek}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                    <Link
                      href={`/news/${item.slug}`}
                      className="text-[16px] font-bold text-orange underline decoration-2 underline-offset-4 hover:text-black"
                    >
                      Campaign brief
                    </Link>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[16px] font-bold text-orange underline decoration-2 underline-offset-4 hover:text-black"
                    >
                      Read the story
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ol>

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
