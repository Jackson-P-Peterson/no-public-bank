import type { Metadata } from "next";
import { GuideView, getGuideOrThrow } from "@/components/GuidePage";
import { pageMeta } from "@/lib/seo";

const guide = getGuideOrThrow("what-is-prop-b");

export const metadata: Metadata = pageMeta({
  title: guide.title,
  description: guide.description,
  path: "/what-is-prop-b",
  type: "article",
  publishedTime: "2026-09-20",
});

export default function WhatIsPropBPage() {
  return <GuideView guide={guide} />;
}
