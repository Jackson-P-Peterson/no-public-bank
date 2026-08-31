import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { COMMITTEE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contribution rules",
  description:
    "Eligibility and disclosure rules for political contributions to NO on Proposition B.",
};

export default function ContributionRulesPage() {
  return (
    <div>
      <Nav overlay={false} />
      <main className="bg-paper">
        <article className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-16">
          <p className="font-display text-[18px] font-bold tracking-[0.18em] text-orange">
            CAMPAIGN FINANCE
          </p>
          <h1 className="font-display mt-3 text-[clamp(2.5rem,7vw,4.5rem)] font-black leading-[0.9] tracking-[-0.02em]">
            CONTRIBUTION RULES
          </h1>
          <p className="mt-6 text-[20px] font-medium leading-relaxed text-ink">
            Contributions to {COMMITTEE_NAME} are political contributions. They
            are not tax deductible. By contributing, you certify the following.
          </p>

          <section className="mt-10 space-y-4">
            <h2 className="font-display text-[28px] font-black tracking-tight">
              Who can give
            </h2>
            <ul className="list-disc space-y-2 pl-6 text-[18px] font-medium leading-relaxed text-ink">
              <li>
                You are a U.S. citizen or a lawful permanent resident (green
                card holder). Federal law prohibits contributions from foreign
                nationals.
              </li>
              <li>
                This contribution is from your own funds, not those of another
                person or entity unless that is disclosed as required by law.
              </li>
              <li>
                You are otherwise eligible to make political contributions under
                federal law and San Francisco campaign finance law.
              </li>
            </ul>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="font-display text-[28px] font-black tracking-tight">
              What we must collect
            </h2>
            <p className="text-[18px] font-medium leading-relaxed text-ink">
              San Francisco and California law require committees to obtain a
              contributor’s name, street address, occupation, and employer
              before depositing contributions of $100 or more. We collect that
              information on every online contribution so records are complete.
            </p>
            <ul className="list-disc space-y-2 pl-6 text-[18px] font-medium leading-relaxed text-ink">
              <li>Street address is required. A P.O. box is not a street address.</li>
              <li>
                If you are self-employed, list your occupation and the name of
                your business as employer.
              </li>
              <li>
                If you are retired, a student, or unemployed, enter that status
                in both occupation and employer.
              </li>
            </ul>
          </section>

          <p className="mt-10 text-[16px] font-medium leading-relaxed text-muted">
            This page is the contribution certification linked from our Stripe
            checkout. It is not legal advice. Questions about reporting go to
            the San Francisco Ethics Commission at{" "}
            <a
              href="https://sfethics.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-orange decoration-2 underline-offset-2 hover:text-orange"
            >
              sfethics.org
            </a>
            .
          </p>

          <p className="mt-8">
            <Link
              href="/donate"
              className="inline-block bg-orange px-6 py-3 font-display text-[18px] font-extrabold tracking-wide text-white transition hover:bg-black"
            >
              DONATE
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
