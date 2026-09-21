import type { Metadata } from "next";
import { FAQS } from "@/lib/faq";
import { NEWS, newsPath } from "@/lib/news";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://nopropb.com"
).replace(/\/$/, "");

export const COMMITTEE_NAME =
  "NO on Proposition B – San Franciscans for Fiscal Responsibility";

export const SITE_NAME = "NO ON B";

export const TITLE =
  "Prop B San Francisco: Vote No on the Public Bank | Nov 3, 2026";

export const DESCRIPTION =
  "Official No campaign on Prop B San Francisco (November 3, 2026). The San Francisco public bank / Municipal Finance Corporation charter amendment has no funding plan and a Controller cost of $310–$460 million. Distinct from June 2026 Prop B on term limits.";

export const SHARE_IMAGE_ALT =
  "Golden Gate Bridge and San Francisco Bay";

/** Twitter/X does not reliably follow apex→www 308s on image URLs. */
function shareImageOrigin() {
  const origin = new URL(SITE_URL);
  if (origin.hostname === "nopropb.com") {
    origin.hostname = "www.nopropb.com";
  }
  return origin.origin;
}

export const SHARE_IMAGE_URL = `${shareImageOrigin()}/share.jpg`;

export const SHARE_IMAGE = {
  url: SHARE_IMAGE_URL,
  width: 1200,
  height: 630,
  alt: SHARE_IMAGE_ALT,
  type: "image/jpeg" as const,
};

export const KEYWORDS = [
  "prop b san francisco",
  "Prop B San Francisco",
  "san francisco public bank",
  "San Francisco public bank",
  "proposition b san francisco",
  "Proposition B San Francisco",
  "San Francisco Prop B",
  "Prop B SF",
  "SF public bank",
  "public bank San Francisco",
  "Prop B November 2026",
  "San Francisco public bank ballot measure",
  "Municipal Finance Corporation San Francisco",
  "vote no on Prop B",
  "NO on Proposition B",
  "San Franciscans for Fiscal Responsibility",
  "public bank charter amendment",
  "File 260535",
  "November 3 2026 San Francisco election",
  "City Hall public bank",
  "AB 857 public bank",
  "what is prop b san francisco",
  "what is Prop B SF",
  "November 2026 Prop B San Francisco",
  "San Francisco public bank ballot",
];

const committeeId = `${SITE_URL}/#committee`;
const websiteId = `${SITE_URL}/#website`;
const electionId = `${SITE_URL}/#election`;

export function pageMeta({
  title,
  description,
  path,
  type = "website",
  absoluteTitle,
  publishedTime,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  absoluteTitle?: boolean;
  publishedTime?: string;
}): Metadata {
  const url = path ? `${SITE_URL}${path}` : SITE_URL;
  const ogTitle = title;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: KEYWORDS,
    alternates: {
      canonical: url,
      types: {
        "application/rss+xml": `${SITE_URL}/rss.xml`,
        "text/plain": `${SITE_URL}/llms.txt`,
      },
    },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [SHARE_IMAGE],
      ...(publishedTime ? { publishedTime, modifiedTime: publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [SHARE_IMAGE_URL],
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path ? `${SITE_URL}${item.path}` : SITE_URL,
    })),
  };
}

export function articleJsonLd({
  path,
  headline,
  description,
  datePublished,
  image,
}: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}${path}#article`,
    url: `${SITE_URL}${path}`,
    headline,
    description,
    datePublished,
    dateModified: datePublished,
    inLanguage: "en-US",
    isPartOf: { "@id": websiteId },
    about: propBAbout(),
    author: { "@id": committeeId },
    publisher: { "@id": committeeId },
    image: image
      ? image.startsWith("http")
        ? image
        : `${SITE_URL}${image}`
      : SHARE_IMAGE_URL,
    mainEntityOfPage: `${SITE_URL}${path}`,
  };
}

function organizationNode() {
  return {
    "@type": "Organization",
    "@id": committeeId,
    name: COMMITTEE_NAME,
    legalName: COMMITTEE_NAME,
    alternateName: [
      "NO ON B",
      "No on Prop B",
      "No on Prop B San Francisco",
      "No on Proposition B",
      "San Franciscans for Fiscal Responsibility",
      "Official opposition committee opposing San Francisco Proposition B",
    ],
    knowsAbout: [
      "Prop B San Francisco",
      "San Francisco Proposition B",
      "San Francisco public bank",
      "Municipal Finance Corporation",
    ],
    url: SITE_URL,
    email: "campaign@nopropb.com",
    slogan: "VOTE NO ON PROP B. YOU’LL PAY THE BILL.",
    description: DESCRIPTION,
    foundingLocation: {
      "@type": "City",
      name: "San Francisco",
    },
    employee: {
      "@type": "Person",
      name: "Jackson Peterson",
      jobTitle: "Campaign Manager",
    },
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icon.png`,
      width: 512,
      height: 512,
    },
    image: SHARE_IMAGE_URL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: "San Francisco",
      containedInPlace: {
        "@type": "State",
        name: "California",
      },
    },
    sameAs: [
      "https://www.facebook.com/nopropbsf",
      "https://www.instagram.com/nopropb",
      "https://x.com/nopublicbank",
    ],
    identifier: [
      {
        "@type": "PropertyValue",
        name: "FPPC",
        value: "1494608",
      },
      {
        "@type": "PropertyValue",
        name: "Board of Supervisors File",
        value: "260535",
      },
    ],
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: SITE_URL,
    name: SITE_NAME,
    alternateName: [
      "Prop B San Francisco",
      "No on Prop B San Francisco",
      "Vote No on San Francisco Proposition B",
      "San Francisco public bank",
      "nopropb.com",
    ],
    description: DESCRIPTION,
    inLanguage: "en-US",
    publisher: { "@id": committeeId },
    about: propBAbout(),
    hasPart: [
      { "@type": "WebPage", "@id": `${SITE_URL}/#webpage`, url: SITE_URL },
      { "@type": "WebPage", url: `${SITE_URL}/prop-b-san-francisco`, name: "Prop B San Francisco" },
      { "@type": "WebPage", url: `${SITE_URL}/what-is-prop-b`, name: "What is Prop B?" },
      { "@type": "WebPage", url: `${SITE_URL}/san-francisco-public-bank`, name: "San Francisco public bank" },
      { "@type": "WebPage", url: `${SITE_URL}/faq`, name: "FAQ" },
      { "@type": "WebPage", url: `${SITE_URL}/news`, name: "News" },
      { "@type": "WebPage", url: `${SITE_URL}/about`, name: "About" },
    ],
  };
}

function electionNode() {
  return {
    "@type": "Election",
    "@id": electionId,
    name: "San Francisco Municipal Election, November 3, 2026",
    description:
      "City and County of San Francisco election that includes Proposition B, the public bank charter amendment (File No. 260535). Not the June 2026 San Francisco Proposition B on term limits.",
    startDate: "2026-11-03",
    endDate: "2026-11-03",
    spatialCoverage: {
      "@type": "City",
      name: "San Francisco",
      containedInPlace: {
        "@type": "State",
        name: "California",
        containedInPlace: {
          "@type": "Country",
          name: "United States",
        },
      },
    },
  };
}

function propBAbout() {
  return [
    {
      "@type": "Thing",
      name: "San Francisco Proposition B (November 2026)",
      alternateName: [
        "Prop B",
        "Prop B San Francisco",
        "prop b san francisco",
        "Proposition B San Francisco public bank",
        "Municipal Finance Corporation charter amendment",
      ],
      description:
        "November 3, 2026 San Francisco charter amendment to create a City Hall–controlled public bank and Municipal Finance Corporation. Distinct from the June 2026 Proposition B on term limits.",
      identifier: "File No. 260535",
    },
    {
      "@type": "Thing",
      name: "San Francisco public bank",
      alternateName: [
        "SF public bank",
        "San Francisco city public bank",
        "public bank San Francisco",
      ],
      description:
        "Proposed Municipal Finance Corporation / public bank with an estimated $310–$460 million cost, no funding plan on the ballot, and political control of lending. California AB 857 requires a wholesale model: residents cannot open checking accounts.",
    },
  ];
}

export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), websiteNode(), electionNode()],
  };
}

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: TITLE,
    description: DESCRIPTION,
    inLanguage: "en-US",
    isPartOf: { "@id": websiteId },
    about: propBAbout(),
    mentions: [
      "Proposition B",
      "Prop B",
      "Prop B San Francisco",
      "San Francisco",
      "public bank",
      "San Francisco public bank",
      "Municipal Finance Corporation",
      "November 3, 2026",
      "AB 857",
      "Reinvestment Working Group",
      "Daniel Lurie",
      "Alan Wong",
      "Stephen Sherrill",
    ],
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: SHARE_IMAGE_URL,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2"],
    },
    dateModified: "2026-09-20",
    publisher: { "@id": committeeId },
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/faq#page`,
    url: `${SITE_URL}/faq`,
    name: "FAQ: Prop B San Francisco public bank",
    description:
      "Frequently asked questions about Prop B San Francisco, the November 2026 unfunded public bank charter amendment.",
    isPartOf: { "@id": websiteId },
    about: propBAbout(),
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a.join(" "),
      },
    })),
    publisher: { "@id": committeeId },
  };
}

export function newsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/news#page`,
    url: `${SITE_URL}/news`,
    name: "News on Prop B San Francisco public bank",
    description:
      "Coverage of Prop B San Francisco, the November 3, 2026 San Francisco public bank ballot measure.",
    isPartOf: { "@id": websiteId },
    about: propBAbout(),
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      numberOfItems: NEWS.length,
      itemListElement: NEWS.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}${newsPath(item)}`,
        name: item.title,
        item: {
          "@type": "NewsArticle",
          headline: item.title,
          datePublished: item.date,
          url: `${SITE_URL}${newsPath(item)}`,
          description: item.dek,
          image: `${SITE_URL}${item.image}`,
          about: propBAbout(),
          publisher: {
            "@type": "Organization",
            name: item.outlet,
          },
        },
      })),
    },
    publisher: { "@id": committeeId },
  };
}

export function aboutJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about#page`,
    url: `${SITE_URL}/about`,
    name: "About the official No on Prop B committee",
    description:
      "San Franciscans for Fiscal Responsibility is the official opposition committee against San Francisco Proposition B.",
    isPartOf: { "@id": websiteId },
    about: { "@id": committeeId },
    mainEntity: { "@id": committeeId },
  };
}

export function contactJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#page`,
    url: `${SITE_URL}/contact`,
    name: "Contact No on Prop B",
    isPartOf: { "@id": websiteId },
    about: { "@id": committeeId },
    mainEntity: { "@id": committeeId },
  };
}

/** @deprecated use siteJsonLd + page graphs */
export function jsonLdGraph() {
  return siteJsonLd();
}
