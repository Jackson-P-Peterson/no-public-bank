import { Act } from "@/components/Act";
import { Cost } from "@/components/Cost";
import { Endorsements } from "@/components/Endorsements";
import { Facts } from "@/components/Facts";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { Reality } from "@/components/Reality";
import { Trust } from "@/components/Trust";
import { Truth } from "@/components/Truth";
import { parseWantParam } from "@/lib/involve";
import { DESCRIPTION, homeJsonLd, pageMeta, TITLE } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: "",
  absoluteTitle: true,
});

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ want?: string | string[] }>;
}) {
  const params = await searchParams;

  return (
    <div className="relative">
      <JsonLd data={homeJsonLd()} />
      <Nav />
      <main>
        <Hero />
        <Facts />
        <Cost />
        <Endorsements />
        <Reality />
        <Trust />
        <Truth />
        <Act initialIntents={parseWantParam(params.want)} />
      </main>
      <Footer />
    </div>
  );
}
