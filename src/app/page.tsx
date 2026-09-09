import { Act } from "@/components/Act";
import { Cost } from "@/components/Cost";
import { Facts } from "@/components/Facts";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Reality } from "@/components/Reality";
import { Trust } from "@/components/Trust";
import { Truth } from "@/components/Truth";
import { parseWantParam } from "@/lib/involve";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ want?: string | string[] }>;
}) {
  const params = await searchParams;

  return (
    <div className="relative">
      <Nav />
      <main>
        <Hero />
        <Facts />
        <Cost />
        <Reality />
        <Trust />
        <Truth />
        <Act initialIntents={parseWantParam(params.want)} />
      </main>
      <Footer />
    </div>
  );
}
