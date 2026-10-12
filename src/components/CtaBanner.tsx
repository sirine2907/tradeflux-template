import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section id="get-started" className="section pt-0">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative isolate overflow-hidden rounded-2xl border border-white/10 px-6 py-16 text-center sm:px-12 md:py-20"
        >
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-brand-gradient opacity-90" />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(11,16,32,0.55),transparent_50%)]"
          />
          <svg aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full opacity-20" preserveAspectRatio="none">
            <defs>
              <pattern id="cta-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M32 0H0V32" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>

          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Your next trade deserves a better platform
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/85 sm:text-lg">
            Create a free account in under two minutes. No minimum deposit, no hidden fees.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="w-full bg-white bg-none text-navy shadow-xl hover:bg-white/90 sm:w-auto" asChild>
              <a href="#top">
                Create free account <ArrowRight />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white/40 bg-white/10 text-white hover:bg-white/20 sm:w-auto"
              asChild
            >
              <a href="#pricing">Compare plans</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
