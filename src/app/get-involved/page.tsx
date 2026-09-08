import type { Metadata } from "next";
import { RedirectToAct } from "@/components/RedirectToAct";

export const metadata: Metadata = {
  title: "Get involved",
  robots: { index: false, follow: true },
};

export default function GetInvolvedPage() {
  return <RedirectToAct />;
}
