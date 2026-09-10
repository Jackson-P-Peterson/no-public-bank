import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { aboutJsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About the official No on Prop B committee",
  description:
    "San Franciscans for Fiscal Responsibility is the official opposition committee against San Francisco Proposition B, the November 2026 public bank charter amendment.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div>
      <JsonLd data={aboutJsonLd()} />
      <Nav overlay={false} />
      <main className="bg-paper">
        <article className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
          <p className="font-display text-[18px] font-bold tracking-[0.18em] text-orange">
            THE OFFICIAL NO COMMITTEE
          </p>
          <h1 className="font-display mt-3 text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-[0.9] tracking-[-0.02em]">
            ABOUT
          </h1>

          <div className="mt-8 space-y-6 text-[20px] font-medium leading-relaxed text-ink">
            <p>
              San Franciscans for Fiscal Responsibility — No on Prop B is the
              official No committee. We are a citywide coalition of homeowners,
              renters, small-business owners, neighborhood leaders, and fiscal
              watchdogs who believe San Francisco should not write an unfunded
              bank into the City Charter while City Hall is closing a
              hundreds-of-millions-of-dollars deficit.
            </p>
            <p>
              We are not opposed to better lending for housing or small
              business. We are opposed to locking a first-of-its-kind municipal
              bank into the Charter with no funding plan, no consumer accounts
              for residents, and the general fund on the hook if the loans go
              bad.
            </p>
            <p>
              Proposition B was placed on the November 3, 2026 ballot by a 9–2
              Board of Supervisors vote. Supervisors Alan Wong and Stephen
              Sherrill voted no. The San Francisco Chronicle editorial board
              recommends no. Mayor Daniel Lurie has said creating a new
              institution instead of putting those resources directly into
              housing and small businesses is “irresponsible.”
            </p>
            <p>
              Our standard is simple: if a proposal cannot show where the money
              comes from, who is accountable when it fails, and why it belongs
              in the Charter rather than ordinary legislation, voters should
              reject it. Prop B fails all three tests.
            </p>
            <p className="font-display text-[clamp(1.75rem,4vw,2.35rem)] font-black leading-[1.05] tracking-tight text-black">
              Vote No on Proposition B.
            </p>
          </div>

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
