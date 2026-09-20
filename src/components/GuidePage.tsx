import Link from "next/link";
import { CampaignArticle } from "@/components/CampaignArticle";
import { GUIDES, type Guide } from "@/lib/guides";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";

const related = [
  { href: "/prop-b-san-francisco", label: "Prop B San Francisco" },
  { href: "/what-is-prop-b", label: "What is Prop B?" },
  { href: "/san-francisco-public-bank", label: "San Francisco public bank" },
  { href: "/faq", label: "FAQ" },
];

export function GuideView({ guide }: { guide: Guide }) {
  const path = `/${guide.slug}`;
  const jsonLd = [
    articleJsonLd({
      path,
      headline: guide.title,
      description: guide.description,
      datePublished: "2026-09-20",
    }),
    breadcrumbJsonLd([
      { name: "Home", path: "" },
      { name: guide.h1, path },
    ]),
  ];

  return (
    <CampaignArticle
      jsonLd={jsonLd}
      kicker={guide.kicker}
      title={guide.h1}
      lede={guide.lede}
    >
      <div className="mt-10 space-y-10">
        {guide.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-[clamp(1.35rem,3vw,1.75rem)] font-black leading-[1.15] tracking-tight text-black">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4 text-[19px] font-medium leading-relaxed text-ink">
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
      <nav
        aria-label="Related Prop B San Francisco pages"
        className="mt-10 border-t-4 border-black pt-6"
      >
        <p className="font-display text-[18px] font-bold tracking-[0.16em] text-orange">
          MORE ON PROP B SAN FRANCISCO
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[18px] font-bold">
          {related
            .filter((item) => item.href !== path)
            .map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="underline decoration-orange decoration-2 underline-offset-4 hover:text-orange">
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </CampaignArticle>
  );
}

export function getGuideOrThrow(slug: string) {
  const guide = GUIDES.find((item) => item.slug === slug);
  if (!guide) throw new Error(`Missing guide ${slug}`);
  return guide;
}
