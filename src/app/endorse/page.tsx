import type { Metadata } from "next";
import { RedirectToAct } from "@/components/RedirectToAct";

export const metadata: Metadata = {
  title: "Endorse",
  robots: { index: false, follow: true },
};

export default function EndorsePage() {
  return <RedirectToAct />;
}
