export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://nopropb.com"
).replace(/\/$/, "");

export const COMMITTEE_NAME =
  "NO on Proposition B – San Franciscans for Fiscal Responsibility";

export const SITE_NAME = "NO ON B";

export const TITLE = "Vote No on San Francisco Prop B | Nov 3, 2026";

export const DESCRIPTION =
  "Official No on Prop B committee. San Francisco’s public bank: $310–$460 million, no funding plan, politicians picking the loans. Vote No November 3, 2026.";

export const SHARE_IMAGE_ALT =
  "Vote No on San Francisco Prop B, November 3, 2026. $310–$460 million public bank. You’ll pay the tax.";

export const KEYWORDS = [
  "San Francisco Prop B",
  "Proposition B San Francisco",
  "Prop B SF",
  "Prop B November 2026",
  "San Francisco public bank",
  "vote no on Prop B",
  "NO on Proposition B",
  "San Franciscans for Fiscal Responsibility",
  "public bank charter amendment",
  "File 260535",
  "November 3 2026 San Francisco election",
  "City Hall public bank",
];

export function jsonLdGraph() {
  const committeeId = `${SITE_URL}/#committee`;
  const websiteId = `${SITE_URL}/#website`;
  const webpageId = `${SITE_URL}/#webpage`;
  const electionId = `${SITE_URL}/#election`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": committeeId,
        name: COMMITTEE_NAME,
        legalName: COMMITTEE_NAME,
        alternateName: [
          "NO ON B",
          "No on Prop B",
          "No on Proposition B",
          "San Franciscans for Fiscal Responsibility",
        ],
        url: SITE_URL,
        email: "campaign@nopropb.com",
        slogan: "NO ON PROP B. YOU’LL PAY THE TAX.",
        description: DESCRIPTION,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/icon.png`,
        },
        image: `${SITE_URL}/opengraph-image`,
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
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: SITE_NAME,
        alternateName: [
          "No on Prop B San Francisco",
          "Vote No on San Francisco Proposition B",
        ],
        description: DESCRIPTION,
        inLanguage: "en-US",
        publisher: { "@id": committeeId },
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: SITE_URL,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: "en-US",
        isPartOf: { "@id": websiteId },
        about: [
          {
            "@type": "Thing",
            name: "San Francisco Proposition B",
            description:
              "November 3, 2026 San Francisco charter amendment to create a City Hall–controlled public bank. Distinct from the June 2026 Proposition B on term limits.",
            identifier: "File No. 260535",
          },
          {
            "@type": "Thing",
            name: "San Francisco public bank",
            description:
              "Proposed Municipal Finance Corporation / public bank with an estimated $310–$460 million cost, no funding plan on the ballot, and political control of lending.",
          },
        ],
        mentions: [
          "Proposition B",
          "Prop B",
          "San Francisco",
          "public bank",
          "November 3, 2026",
          "AB 857",
          "Reinvestment Working Group",
        ],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_URL}/opengraph-image`,
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2"],
        },
        dateModified: "2026-08-25",
      },
      {
        "@type": "Election",
        "@id": electionId,
        name: "San Francisco Municipal Election, November 3, 2026",
        description:
          "City and County of San Francisco election that includes Proposition B, the public bank charter amendment.",
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
      },
    ],
  };
}
