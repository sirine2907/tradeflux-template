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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
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
