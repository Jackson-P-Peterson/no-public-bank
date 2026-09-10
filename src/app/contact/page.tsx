import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { COMMITTEE_NAME, contactJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact No on Prop B San Francisco",
  description:
    "Contact campaign manager Jackson Peterson and NO on Proposition B – San Franciscans for Fiscal Responsibility, the official opposition committee on the public bank measure.",
  path: "/contact",
});

const social = [
  { name: "Facebook", href: "https://www.facebook.com/nopropbsf" },
  { name: "Instagram", href: "https://www.instagram.com/nopropb" },
  { name: "X", href: "https://x.com/nopublicbank" },
];

export default function ContactPage() {
  return (
    <div>
      <JsonLd data={contactJsonLd()} />
      <Nav overlay={false} />
      <main className="bg-paper">
        <article className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
          <p className="font-display text-[18px] font-bold tracking-[0.18em] text-orange">
            THE OFFICIAL NO COMMITTEE
          </p>
          <h1 className="font-display mt-3 text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-[0.9] tracking-[-0.02em]">
            CONTACT
          </h1>
          <p className="mt-6 text-[20px] font-medium leading-relaxed text-ink">
            Press, volunteers, and neighbors can reach the official No
            committee — {COMMITTEE_NAME} — here.
          </p>

          <dl className="mt-10 space-y-8 border-t-4 border-black pt-8">
            <div>
              <dt className="font-display text-[18px] font-bold tracking-[0.16em] text-orange">
                CAMPAIGN MANAGER
              </dt>
              <dd className="mt-2 text-[22px] font-semibold text-ink">
                Jackson Peterson
              </dd>
            </div>
            <div>
              <dt className="font-display text-[18px] font-bold tracking-[0.16em] text-orange">
                EMAIL
              </dt>
              <dd className="mt-2">
                <a
                  href="mailto:campaign@nopropb.com"
                  className="text-[22px] font-semibold text-ink underline decoration-orange decoration-2 underline-offset-4 hover:text-orange"
                >
                  campaign@nopropb.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-display text-[18px] font-bold tracking-[0.16em] text-orange">
                SOCIAL
              </dt>
              <dd className="mt-3 flex flex-wrap gap-3">
                {social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-black px-4 py-2 font-display text-[16px] font-extrabold tracking-wide text-black transition hover:bg-black hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="font-display text-[18px] font-bold tracking-[0.16em] text-orange">
                THE OFFICIAL NO COMMITTEE
              </dt>
              <dd className="mt-2 text-[20px] font-medium leading-relaxed text-ink">
                {COMMITTEE_NAME}
                <br />
                FPPC #1494608
                <br />
                San Francisco, California
              </dd>
            </div>
          </dl>

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
