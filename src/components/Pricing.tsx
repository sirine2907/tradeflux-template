import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getBillingNote, getMonthlyPrice, YEARLY_DISCOUNT } from "@/lib/pricing";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Starter",
    monthly: 0,
    description: "For new traders getting to know the market.",
    features: ["Spot trading on 100+ assets", "0.20% trading fee", "Basic charts and alerts", "Mobile and web apps"],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Pro",
    monthly: 19,
    description: "For active traders who want an edge.",
    features: [
      "Everything in Starter",
      "0.08% trading fee",
      "Advanced orders and TWAP",
      "Portfolio analytics and tax reports",
      "Priority support",
    ],
    cta: "Start 14-day trial",
    featured: true,
  },
  {
    name: "Institutional",
    monthly: 99,
    description: "For funds, desks and high-volume teams.",
    features: ["Everything in Pro", "Custom fee tiers", "FIX and REST API access", "Sub-accounts and permissions", "Dedicated account manager"],
    cta: "Contact sales",
    featured: false,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="section relative isolate">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-violet/15 blur-[120px]" />
      <div className="container">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Simple plans, <span className="text-gradient">no surprises</span>
            </>
          }
          description="Start free and upgrade when you're ready. Cancel any time."
        />

        <div className="mt-10 flex items-center justify-center gap-3 text-sm">
          <span className={cn(!yearly ? "text-foreground" : "text-muted-foreground")}>Monthly</span>
          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            aria-label="Toggle yearly billing"
            onClick={() => setYearly((v) => !v)}
            className="relative h-7 w-12 rounded-full border border-white/10 bg-white/10 transition-colors aria-checked:bg-brand-gradient"
          >
            <span
              className={cn(
                "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all",
                yearly ? "left-[calc(100%-1.5rem)]" : "left-0.5",
              )}
            />
          </button>
          <span className={cn(yearly ? "text-foreground" : "text-muted-foreground")}>
            Yearly <span className="ml-1 rounded-full bg-cyan/15 px-2 py-0.5 text-xs font-semibold text-cyan">-{YEARLY_DISCOUNT * 100}%</span>
          </span>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => {
            const price = getMonthlyPrice(plan.monthly, yearly);
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn("relative", plan.featured && "lg:-mt-4")}
              >
                {plan.featured && (
                  <div aria-hidden="true" className="absolute -inset-px rounded-2xl bg-brand-gradient opacity-70 blur-[2px]" />
                )}
                <Card className={cn("relative flex h-full flex-col", plan.featured && "bg-navy/95")}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{plan.name}</CardTitle>
                      {plan.featured && (
                        <span className="rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white">Most popular</span>
                      )}
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                    <p className="pt-4">
                      <span className="text-5xl font-extrabold tracking-tight">${price}</span>
                      <span className="text-muted-foreground"> / month</span>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {getBillingNote(plan.monthly, yearly)}
                    </p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={plan.featured ? "default" : "outline"} asChild>
                      <a href="#get-started">{plan.cta}</a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
