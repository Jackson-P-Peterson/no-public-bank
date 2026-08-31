import type { Metadata } from "next";
import { DonateForm } from "@/components/DonateForm";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Contribute to NO on Proposition B. Political contribution. Not tax deductible.",
};

export default function DonatePage() {
  return (
    <div>
      <Nav overlay={false} />
      <main className="bg-navy text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1fr_1fr] md:px-8 md:py-20">
          <div>
            <p className="font-display text-[18px] font-bold tracking-[0.18em] text-orange">
              CONTRIBUTE
            </p>
            <h1 className="font-display mt-3 text-[clamp(3rem,8vw,5.5rem)] font-black leading-[0.88] tracking-[-0.02em]">
              HELP DEFEAT
              <br />
              PROP B.
            </h1>
            <p className="mt-6 max-w-lg text-[20px] font-medium leading-relaxed">
              $460 million. No funding plan. Politicians picking loans. Your
              contribution funds voter contact to stop it.
            </p>
            <p className="mt-4 max-w-lg text-[17px] font-medium leading-relaxed text-white/80">
              Political contribution. Not tax deductible. Occupation, employer,
              and street address are required.
            </p>
          </div>
          <div className="border-4 border-white bg-white p-5 text-black md:p-7">
            <p className="font-display text-[28px] font-black leading-none tracking-tight md:text-[36px]">
              DONATE
            </p>
            <div className="mt-4">
              <DonateForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
