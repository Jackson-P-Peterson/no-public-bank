import { Act } from "@/components/Act";
import { Cost } from "@/components/Cost";
import { Facts } from "@/components/Facts";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Reality } from "@/components/Reality";
import { Trust } from "@/components/Trust";
import { Truth } from "@/components/Truth";

export default function Home() {
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
        <Act />
      </main>
      <Footer />
    </div>
  );
}
