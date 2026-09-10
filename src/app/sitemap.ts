import type { MetadataRoute } from "next";
import { NEWS } from "@/lib/news";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-09-10"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: new Date("2026-09-10"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/news`,
      lastModified: new Date(NEWS[0]?.date ?? "2026-09-10"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
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
      lastModified: new Date(NEWS[0]?.date ?? "2026-09-10"),
      changeFrequency: "weekly",
      priority: 0.4,
    },
  ];
}
