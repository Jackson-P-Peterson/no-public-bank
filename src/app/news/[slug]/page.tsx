import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CampaignArticle } from "@/components/CampaignArticle";
import { NEWS, getNewsBySlug, newsPath } from "@/lib/news";
import { articleJsonLd, breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return NEWS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) return {};
  return pageMeta({
    title: `${item.title} — Prop B San Francisco`,
    description: item.take[0] || item.dek,
    path: newsPath(item),
    type: "article",
    publishedTime: item.date,
  });
}

export default async function NewsBriefPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  const path = newsPath(item);
  const jsonLd = [
    {
      ...articleJsonLd({
        path,
        headline: item.title,
        description: item.dek,
        datePublished: item.date,
        image: item.image,
      }),
      "@type": "NewsArticle",
      citation: item.href,
    },
    breadcrumbJsonLd([
      { name: "Home", path: "" },
      { name: "News", path: "/news" },
      { name: item.outlet, path },
    ]),
  ];

  return (
    <CampaignArticle
      jsonLd={jsonLd}
      kicker={`${item.outlet} · ${item.dateLabel}`}
      title={item.title}
      lede={item.dek}
    >
      <div className="relative mt-8 aspect-[16/9] overflow-hidden border-2 border-black bg-white">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          className={item.imageClass ?? "object-cover"}
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
      <div className="mt-8 space-y-4 text-[19px] font-medium leading-relaxed text-ink">
        {item.take.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <p className="mt-6 text-[18px] font-medium text-ink">
        Original reporting:{" "}
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-orange underline decoration-2 underline-offset-4 hover:text-black"
        >
          {item.outlet}
        </a>
        .
      </p>
      <p className="mt-6 text-[18px] font-bold">
        <Link
          href="/news"
          className="underline decoration-orange decoration-2 underline-offset-4 hover:text-orange"
        >
          All Prop B San Francisco news
        </Link>
        {" · "}
        <Link
          href="/prop-b-san-francisco"
          className="underline decoration-orange decoration-2 underline-offset-4 hover:text-orange"
        >
          What Prop B is
        </Link>
      </p>
    </CampaignArticle>
  );
}
