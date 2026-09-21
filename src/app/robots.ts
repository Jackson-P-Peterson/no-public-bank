import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "Google-Extended",
  "Google-CloudVertexBot",
  "Googlebot",
  "Bingbot",
  "PerplexityBot",
  "Perplexity-User",
  "GoogleOther",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Anthropic-Ai",
  "Applebot",
  "Applebot-Extended",
  "CCBot",
  "meta-externalagent",
  "FacebookBot",
  "facebookexternalhit",
  "Twitterbot",
  "Amazonbot",
  "DuckAssistBot",
  "Bytespider",
  "YouBot",
  "Cohere-AI",
  "MistralAI-User",
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
