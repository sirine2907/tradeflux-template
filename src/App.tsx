import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PartnerLogos } from "@/components/PartnerLogos";
import { Pricing } from "@/components/Pricing";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-navy">
      <Navbar />
      <main>
        <Hero />
        <PartnerLogos />
        <Features />
        <Pricing />
      </main>
    </div>
  );
}
