import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-navy">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
