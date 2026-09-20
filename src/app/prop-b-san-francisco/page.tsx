import type { Metadata } from "next";
import { GuideView, getGuideOrThrow } from "@/components/GuidePage";
import { pageMeta } from "@/lib/seo";

const guide = getGuideOrThrow("prop-b-san-francisco");

export const metadata: Metadata = pageMeta({
  title: guide.title,
  description: guide.description,
  path: "/prop-b-san-francisco",
  type: "article",
  publishedTime: "2026-09-20",
});

export default function PropBSanFranciscoPage() {
  return <GuideView guide={guide} />;
}
