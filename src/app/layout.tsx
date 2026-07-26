import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const sans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://no-city-hall-bank.vercel.app";

const title = "NO CITY HALL BANK — You Pay the Tax";
const description =
  "$310 million. No funding plan. Politicians picking the loans. You pay the TAX for it. Vote No on November 3, 2026.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | NO CITY HALL BANK",
  },
  description,
  applicationName: "NO CITY HALL BANK",
  keywords: [
    "San Francisco",
    "public bank",
    "City Hall Bank",
    "Vote No",
    "November 2026",
    "blank check",
  ],
  authors: [{ name: "NO CITY HALL BANK" }],
  creator: "NO CITY HALL BANK",
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "NO CITY HALL BANK",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "NO CITY HALL BANK — You Pay the Tax. Vote No November 3, 2026.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
