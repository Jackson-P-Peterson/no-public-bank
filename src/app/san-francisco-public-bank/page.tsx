import type { Metadata } from "next";
import { GuideView, getGuideOrThrow } from "@/components/GuidePage";
import { pageMeta } from "@/lib/seo";

const guide = getGuideOrThrow("san-francisco-public-bank");

export const metadata: Metadata = pageMeta({
  title: guide.title,
  description: guide.description,
  path: "/san-francisco-public-bank",
  type: "article",
  publishedTime: "2026-09-20",
});

export default function SanFranciscoPublicBankPage() {
  return <GuideView guide={guide} />;
}
