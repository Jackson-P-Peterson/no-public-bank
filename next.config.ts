import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  serverExternalPackages: ["stripe"],
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
            value: `<https://nopropb.com/llms.txt>; rel="describedby"; type="text/plain", <https://nopropb.com/llms-full.txt>; rel="alternate"; type="text/plain", <https://nopropb.com/rss.xml>; rel="alternate"; type="application/rss+xml"; title="Prop B San Francisco news"`,
          },
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
