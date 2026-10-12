import { CtaBanner } from "@/components/CtaBanner";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PartnerLogos } from "@/components/PartnerLogos";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-navy">
      <Navbar />
      <main>
        <Hero />
        <PartnerLogos />
        <Features />
        <Pricing />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
