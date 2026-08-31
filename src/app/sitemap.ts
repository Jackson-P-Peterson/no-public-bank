import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-08-25"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/donate`,
      lastModified: new Date("2026-08-31"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contribution-rules`,
      lastModified: new Date("2026-08-31"),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
