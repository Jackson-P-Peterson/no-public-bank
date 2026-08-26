import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "Googlebot",
  "Bingbot",
  "PerplexityBot",
  "ClaudeBot",
  "Anthropic-Ai",
  "Applebot",
  "Applebot-Extended",
  "CCBot",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
