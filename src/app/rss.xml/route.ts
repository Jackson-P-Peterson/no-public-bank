import { NEWS, newsPath } from "@/lib/news";
import { SITE_URL } from "@/lib/seo";

export async function GET() {
  const items = NEWS.map((item) => {
    const url = `${SITE_URL}${newsPath(item)}`;
    return `    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
      <source url="${item.href}">${item.outlet}</source>
      <description><![CDATA[${item.take.join(" ")}]]></description>
    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Prop B San Francisco public bank news — No on Proposition B</title>
    <link>${SITE_URL}/news</link>
    <description>Coverage and official No-committee briefs on San Francisco Proposition B, the November 3, 2026 public bank charter amendment.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date(NEWS[0]?.date ?? Date.now()).toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
