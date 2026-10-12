import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

import { DashboardMockup } from "@/components/DashboardMockup";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-24">
      {/* animated gradient blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-[420px] w-[420px] -translate-x-[70%] md:h-[560px] md:w-[560px]">
          <div className="h-full w-full animate-blob rounded-full bg-violet/40 blur-[120px]" />
        </div>
        <div className="absolute left-1/2 top-32 h-[380px] w-[380px] -translate-x-[20%] md:h-[500px] md:w-[500px]">
          <div className="h-full w-full animate-blob rounded-full bg-cyan/30 blur-[120px] [animation-delay:-7s]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0B1020_75%)]" />
      </div>

      <div className="container flex flex-col items-center text-center">
        <motion.a
          href="#features"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-cyan" />
          New: AI-assisted smart orders are live
          <ArrowRight className="h-3.5 w-3.5" />
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Trade crypto with <span className="text-gradient">clarity</span>, not chaos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          One calm, powerful workspace to buy, sell and track 300+ digital assets. Pro-grade charts, instant execution
          and bank-level security — without the noise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <a href="#get-started">
              Start trading free <ArrowRight />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
            <a href="#features">
              <PlayCircle /> See how it works
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="relative mt-16 w-full max-w-5xl"
        >
          <div aria-hidden="true" className="absolute -inset-px -z-10 rounded-2xl bg-brand-gradient opacity-40 blur-2xl" />
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
