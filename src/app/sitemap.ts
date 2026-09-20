import type { MetadataRoute } from "next";
import { NEWS, newsPath } from "@/lib/news";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const newsDate = new Date(NEWS[0]?.date ?? "2026-09-20");
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-09-20"),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE_URL}/prop-b-san-francisco`,
      lastModified: new Date("2026-09-20"),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/what-is-prop-b`,
      lastModified: new Date("2026-09-20"),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/san-francisco-public-bank`,
      lastModified: new Date("2026-09-20"),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: new Date("2026-09-20"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/news`,
      lastModified: newsDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...NEWS.map((item) => ({
      url: `${SITE_URL}${newsPath(item)}`,
      lastModified: new Date(item.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date("2026-09-10"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date("2026-09-10"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/donate`,
      lastModified: new Date("2026-08-31"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contribution-rules`,
      lastModified: new Date("2026-08-31"),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/rss.xml`,
      lastModified: newsDate,
      changeFrequency: "daily",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/news.json`,
      lastModified: newsDate,
      changeFrequency: "daily",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/llms.txt`,
      lastModified: new Date("2026-09-20"),
      changeFrequency: "weekly",
      priority: 0.3,
    },
  ];
}
