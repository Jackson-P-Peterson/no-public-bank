import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  serverExternalPackages: ["stripe"],
  async redirects() {
    return [
      { source: "/prop-b", destination: "/prop-b-san-francisco", permanent: true },
      { source: "/proposition-b", destination: "/prop-b-san-francisco", permanent: true },
      { source: "/sf-prop-b", destination: "/prop-b-san-francisco", permanent: true },
      { source: "/propb", destination: "/prop-b-san-francisco", permanent: true },
      { source: "/public-bank", destination: "/san-francisco-public-bank", permanent: true },
      { source: "/sf-public-bank", destination: "/san-francisco-public-bank", permanent: true },
      { source: "/voters-guide", destination: "/what-is-prop-b", permanent: true },
      { source: "/voter-guide", destination: "/what-is-prop-b", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Link",
            value: `<https://nopropb.com/llms.txt>; rel="describedby"; type="text/plain", <https://nopropb.com/llms-full.txt>; rel="alternate"; type="text/plain", <https://nopropb.com/rss.xml>; rel="alternate"; type="application/rss+xml"; title="Prop B San Francisco news", <https://nopropb.com/sitemap.xml>; rel="sitemap"; type="application/xml"`,
          },
        ],
      },
      {
        source: "/share.jpg",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "Content-Type", value: "image/jpeg" },
        ],
      },
      {
        source: "/llms.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
      {
        source: "/llms-full.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
    ];
  },
};

export default nextConfig;
