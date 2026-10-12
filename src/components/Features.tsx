import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Check,
  CandlestickChart,
  Fingerprint,
  KeyRound,
  LineChart,
  Lock,
  PieChart,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Feature {
  value: string;
  label: string;
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
  visual: ReactNode;
}

function TradingVisual() {
  const bids = [72, 58, 64, 40, 52, 30];
  const asks = [34, 48, 60, 44, 70, 56];
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-brand-gradient py-3 text-center text-sm font-semibold text-white">Buy BTC</div>
        <div className="rounded-xl border border-white/10 bg-white/5 py-3 text-center text-sm font-semibold">Sell BTC</div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-xs">
        <div className="space-y-1.5">
          {bids.map((w, i) => (
            <div key={i} className="relative flex justify-between rounded px-2 py-1">
              <span className="absolute inset-y-0 right-0 rounded bg-cyan/15" style={{ width: `${w}%` }} />
              <span className="relative text-cyan">{(67480 - i * 4.5).toFixed(1)}</span>
              <span className="relative text-muted-foreground">{(0.12 + i * 0.07).toFixed(3)}</span>
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          {asks.map((w, i) => (
            <div key={i} className="relative flex justify-between rounded px-2 py-1">
              <span className="absolute inset-y-0 left-0 rounded bg-violet/20" style={{ width: `${w}%` }} />
              <span className="relative text-violet-300">{(67485 + i * 4.5).toFixed(1)}</span>
              <span className="relative text-muted-foreground">{(0.09 + i * 0.05).toFixed(3)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PortfolioVisual() {
  const slices = [
    { label: "Bitcoin", pct: 46, color: "#8B5CF6" },
    { label: "Ethereum", pct: 28, color: "#22D3EE" },
    { label: "Solana", pct: 16, color: "#818CF8" },
    { label: "Other", pct: 10, color: "rgba(255,255,255,0.25)" },
  ];
  const circumference = 2 * Math.PI * 40;
  let offset = 0;
  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row">
      <svg viewBox="0 0 100 100" className="h-40 w-40 -rotate-90" aria-hidden="true">
        {slices.map((s) => {
          const len = (s.pct / 100) * circumference;
          const el = (
            <circle
              key={s.label}
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke={s.color}
              strokeWidth="14"
              strokeDasharray={`${len - 1.5} ${circumference - len + 1.5}`}
              strokeDashoffset={-offset}
            />
          );
          offset += len;
          return el;
        })}
      </svg>
      <ul className="w-full space-y-3">
        {slices.map((s) => (
          <li key={s.label} className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.color }} />
              {s.label}
            </span>
            <span className="font-semibold">{s.pct}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SecurityVisual() {
  const items = [
    { icon: Fingerprint, label: "Biometric login", status: "Enabled" },
    { icon: KeyRound, label: "Hardware key (FIDO2)", status: "Connected" },
    { icon: Lock, label: "Withdrawal allowlist", status: "3 addresses" },
    { icon: ShieldCheck, label: "Cold storage reserve", status: "98%" },
  ];
  return (
    <ul className="space-y-3">
      {items.map(({ icon: Icon, label, status }) => (
        <li key={label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <span className="flex items-center gap-3 text-sm font-medium">
            <Icon className="h-5 w-5 text-cyan" />
            {label}
          </span>
          <span className="rounded-full bg-cyan/10 px-2.5 py-1 text-xs font-semibold text-cyan">{status}</span>
        </li>
      ))}
    </ul>
  );
}

function AnalyticsVisual() {
  const bars = [38, 52, 44, 66, 58, 80, 72, 92];
  return (
    <div>
      <div className="grid grid-cols-3 gap-3 text-center">
        {[
          ["Win rate", "64%"],
          ["Avg. return", "+8.2%"],
          ["Sharpe", "1.84"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="text-lg font-bold">{v}</p>
            <p className="text-xs text-muted-foreground">{k}</p>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 320 120" className="mt-5 h-32 w-full" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="bar-fill" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        {bars.map((h, i) => (
          <rect key={i} x={i * 40 + 8} y={120 - h} width="24" height={h} rx="6" fill="url(#bar-fill)" opacity={0.5 + i * 0.06} />
        ))}
      </svg>
    </div>
  );
}

const FEATURES: Feature[] = [
  {
    value: "trading",
    label: "Trading",
    icon: CandlestickChart,
    title: "A trading interface that stays out of your way",
    description: "Place market, limit and stop orders in two clicks with a live order book and depth chart beside you.",
    points: ["Sub-50ms order execution", "Advanced orders: OCO, trailing stop, TWAP", "Customizable multi-chart layouts"],
    visual: <TradingVisual />,
  },
  {
    value: "portfolio",
    label: "Portfolio",
    icon: PieChart,
    title: "Every asset, one clear picture",
    description: "Connect wallets and exchanges to see balances, allocation and real P&L across everything you hold.",
    points: ["Auto-sync with 40+ wallets and exchanges", "Cost basis and tax-lot tracking", "Rebalancing suggestions"],
    visual: <PortfolioVisual />,
  },
  {
    value: "security",
    label: "Security",
    icon: ShieldCheck,
    title: "Security built in at every layer",
    description: "Your funds sit behind multi-party computation, cold storage and hardware-key authentication.",
    points: ["98% of assets in offline cold storage", "SOC 2 Type II and ISO 27001 certified", "Real-time anomaly detection"],
    visual: <SecurityVisual />,
  },
  {
    value: "analytics",
    label: "Analytics",
    icon: BarChart3,
    title: "Analytics that explain your performance",
    description: "Understand what's working with trade journaling, risk metrics and performance attribution.",
    points: ["Win rate, drawdown and Sharpe ratio", "Strategy-level performance breakdowns", "Exportable reports (CSV, PDF)"],
    visual: <AnalyticsVisual />,
  },
];

export function Features() {
  return (
    <section id="features" className="section relative">
      <div className="container">
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              Everything you need to <span className="text-gradient">trade with confidence</span>
            </>
          }
          description="Built for first-time buyers and seasoned traders alike — powerful when you need it, simple when you don't."
        />

        <Tabs defaultValue="trading" className="mt-12 flex flex-col items-center">
          <div className="w-full overflow-x-auto pb-1 sm:w-auto">
            <TabsList className="mx-auto flex w-max">
              {FEATURES.map(({ value, label, icon: Icon }) => (
                <TabsTrigger key={value} value={value}>
                  <Icon className="h-4 w-4" />
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {FEATURES.map((f) => (
            <TabsContent key={f.value} value={f.value} className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="glass grid items-center gap-10 p-6 md:grid-cols-2 md:p-10"
              >
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient">
                    <f.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">{f.title}</h3>
                  <p className="mt-3 text-muted-foreground">{f.description}</p>
                  <ul className="mt-6 space-y-3">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan/15">
                          <Check className="h-3 w-3 text-cyan" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-navy/60 p-5 shadow-[0_20px_80px_-30px_rgba(34,211,238,0.35)]">
                  {f.visual}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { icon: LineChart, stat: "$24B+", label: "Quarterly trading volume" },
            { icon: ShieldCheck, stat: "2.1M", label: "Verified traders" },
            { icon: CandlestickChart, stat: "300+", label: "Supported assets" },
          ].map(({ icon: Icon, stat, label }) => (
            <div key={label} className="glass flex items-center gap-4 p-5">
              <Icon className="h-6 w-6 text-violet" />
              <div>
                <p className="text-2xl font-bold">{stat}</p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
