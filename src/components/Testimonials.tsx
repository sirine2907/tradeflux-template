import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { BRAND } from "@/lib/site";

const TESTIMONIALS = [
  {
    quote: `I've tried every platform out there. ${BRAND} is the first one where I actually understand my own performance.`,
    name: "Amara Okafor",
    role: "Swing trader",
    initials: "AO",
  },
  {
    quote: "Execution is ridiculously fast and the fees on Pro paid for themselves in the first week.",
    name: "Daniel Reyes",
    role: "Day trader",
    initials: "DR",
  },
  {
    quote: "We moved our desk over for the API and sub-accounts. Onboarding took an afternoon.",
    name: "Lina Haddad",
    role: "Head of Trading, Meridian Fund",
    initials: "LH",
  },
  {
    quote: "Clean, calm and secure. My parents use it too, which says a lot about how simple it is.",
    name: "Kenji Watanabe",
    role: "Long-term investor",
    initials: "KW",
  },
  {
    quote: "The portfolio view finally pulls my wallets and exchanges into one place. Tax season was painless.",
    name: "Sofia Marin",
    role: "Product designer",
    initials: "SM",
  },
  {
    quote: "Support actually replies in minutes. That alone keeps me here.",
    name: "Youssef Ben Ali",
    role: "Crypto educator",
    initials: "YB",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Loved by <span className="text-gradient">2 million traders</span>
            </>
          }
          description="Rated 4.9/5 across the App Store and Google Play."
        />

        <div className="mt-14 columns-1 gap-6 md:columns-2 lg:columns-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="glass mb-6 break-inside-avoid p-6 transition-colors hover:border-white/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-cyan text-cyan" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-violet/50" />
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground/90">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
