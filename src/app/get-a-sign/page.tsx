import type { Metadata } from "next";
import { RedirectToAct } from "@/components/RedirectToAct";

export const metadata: Metadata = {
  title: "Get A Sign",
  robots: { index: false, follow: true },
};

export default function GetASignPage() {
  return <RedirectToAct want="sign" />;
}
