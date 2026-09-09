import type { Metadata } from "next";
import { RedirectToAct } from "@/components/RedirectToAct";

export const metadata: Metadata = {
  title: "Volunteer",
  robots: { index: false, follow: true },
};

export default function VolunteerPage() {
  return <RedirectToAct want="volunteer" />;
}
