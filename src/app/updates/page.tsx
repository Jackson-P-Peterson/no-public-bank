import type { Metadata } from "next";
import { RedirectToAct } from "@/components/RedirectToAct";

export const metadata: Metadata = {
  title: "Get Updates",
  robots: { index: false, follow: true },
};

export default function UpdatesPage() {
  return <RedirectToAct want="updates" />;
}
