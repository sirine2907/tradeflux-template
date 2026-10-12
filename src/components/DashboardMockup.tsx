import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const PRICE_PATH =
  "M0 150 L30 138 L60 144 L90 120 L120 126 L150 98 L180 106 L210 82 L240 90 L270 64 L300 72 L330 50 L360 58 L390 36 L420 44 L450 24 L480 30";

const CANDLES = Array.from({ length: 16 }, (_, i) => {
  const up = [0, 2, 3, 5, 7, 8, 10, 12, 13, 15].includes(i);
  const base = 150 - i * 7;
  return { x: 14 + i * 29, up, open: base + (up ? 8 : -6), close: base + (up ? -10 : 8), high: base - 18, low: base + 18 };
});

const ASSETS = [
  { symbol: "BTC", name: "Bitcoin", price: "67,482.10", change: 2.84 },
  { symbol: "ETH", name: "Ethereum", price: "3,512.47", change: 1.92 },
  { symbol: "SOL", name: "Solana", price: "178.33", change: -0.74 },
  { symbol: "ADA", name: "Cardano", price: "0.6241", change: 4.15 },
];

export function DashboardMockup() {
  return (
    <div className="glass relative overflow-hidden p-3 shadow-[0_40px_120px_-30px_rgba(139,92,246,0.55)] sm:p-4">
      {/* window chrome */}
      <div className="flex items-center gap-2 px-2 pb-3">
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <span className="h-3 w-3 rounded-full bg-white/15" />
        <div className="mx-auto hidden h-6 w-64 rounded-lg bg-white/5 sm:block" />
      </div>

      <div className="grid gap-3 lg:grid-cols-[1fr_260px]">
        {/* chart panel */}
        <div className="rounded-xl border border-white/10 bg-navy/60 p-4 text-left">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-medium text-muted-foreground">BTC / USDT</p>
              <p className="mt-1 text-2xl font-bold sm:text-3xl">$67,482.10</p>
            </div>
            <div className="flex gap-1 rounded-lg bg-white/5 p-1 text-xs">
              {["1H", "4H", "1D", "1W"].map((t) => (
                <span
                  key={t}
                  className={t === "1D" ? "rounded-md bg-brand-gradient px-2.5 py-1 font-semibold text-white" : "px-2.5 py-1 text-muted-foreground"}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 480 180" className="mt-4 h-40 w-full sm:h-52" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="area-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#8B5CF6" stopOpacity="0.45" />
                <stop offset="1" stopColor="#22D3EE" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="line-stroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#22D3EE" />
              </linearGradient>
            </defs>
            {[40, 80, 120, 160].map((y) => (
              <line key={y} x1="0" x2="480" y1={y} y2={y} stroke="rgba(255,255,255,0.06)" strokeDasharray="4 6" />
            ))}
            {CANDLES.map((c) => (
              <g key={c.x} opacity="0.35">
                <line x1={c.x} x2={c.x} y1={c.high} y2={c.low} stroke={c.up ? "#22D3EE" : "#A78BFA"} />
                <rect
                  x={c.x - 5}
                  width="10"
                  y={Math.min(c.open, c.close)}
                  height={Math.abs(c.open - c.close)}
                  rx="2"
                  fill={c.up ? "#22D3EE" : "#A78BFA"}
                />
              </g>
            ))}
            <path d={`${PRICE_PATH} L480 180 L0 180 Z`} fill="url(#area-fill)" />
            <path d={PRICE_PATH} fill="none" stroke="url(#line-stroke)" strokeWidth="3" strokeLinejoin="round" />
            <circle cx="480" cy="30" r="5" fill="#22D3EE" />
          </svg>
        </div>

        {/* side panel */}
        <div className="flex flex-col gap-3">
          <div className="rounded-xl border border-white/10 bg-navy/60 p-4 text-left">
            <p className="text-xs font-medium text-muted-foreground">Portfolio value</p>
            <p className="mt-1 text-xl font-bold">$128,940.55</p>
            <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-cyan">
              <ArrowUpRight className="h-3.5 w-3.5" /> +$3,214.20 today
            </p>
            <div className="mt-3 flex h-2 overflow-hidden rounded-full">
              <span className="w-[46%] bg-violet" />
              <span className="w-[28%] bg-cyan" />
              <span className="w-[16%] bg-indigo-400" />
              <span className="w-[10%] bg-white/20" />
            </div>
          </div>

          <div className="hidden rounded-xl border border-white/10 bg-navy/60 p-2 sm:block">
            {ASSETS.map((a) => (
              <div key={a.symbol} className="flex items-center justify-between rounded-lg px-2 py-2 text-left">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-[10px] font-bold">{a.symbol}</span>
                  <div>
                    <p className="text-sm font-semibold leading-tight">{a.name}</p>
                    <p className="text-xs text-muted-foreground">${a.price}</p>
                  </div>
                </div>
                <span
                  className={`flex items-center text-xs font-semibold ${a.change >= 0 ? "text-cyan" : "text-violet-300"}`}
                >
                  {a.change >= 0 ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
                  {Math.abs(a.change).toFixed(2)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
