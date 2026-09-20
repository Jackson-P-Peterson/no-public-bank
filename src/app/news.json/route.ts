import { NEWS } from "@/lib/news";
import { DESCRIPTION, SITE_URL } from "@/lib/seo";

export async function GET() {
  const body = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "News on Prop B San Francisco public bank",
    description: DESCRIPTION,
    url: `${SITE_URL}/news`,
    numberOfItems: NEWS.length,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    itemListElement: NEWS.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: item.href,
      name: item.title,
      item: {
        "@type": "NewsArticle",
        headline: item.title,
        datePublished: item.date,
        url: item.href,
        description: item.dek,
        image: `${SITE_URL}${item.image}`,
        publisher: { "@type": "Organization", name: item.outlet },
      },
    })),
  };

  return Response.json(body, {
    headers: {
      "Cache-Control": "public, max-age=3600",
    },
  });
}
