import type { ReactNode } from "react";

interface Partner {
  name: string;
  mark: ReactNode;
}

const PARTNERS: Partner[] = [
  {
    name: "Northwind",
    mark: <path d="M4 20V4l16 16V4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />,
  },
  {
    name: "Helix Labs",
    mark: (
      <path d="M6 3c0 6 12 6 12 9s-12 3-12 9M18 3c0 6-12 6-12 9s12 3 12 9" fill="none" stroke="currentColor" strokeWidth="2" />
    ),
  },
  {
    name: "Orbitly",
    mark: (
      <>
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" transform="rotate(-25 12 12)" />
      </>
    ),
  },
  {
    name: "Quanta",
    mark: (
      <>
        <rect x="3" y="3" width="8" height="8" rx="2" fill="currentColor" />
        <rect x="13" y="13" width="8" height="8" rx="2" fill="currentColor" />
        <rect x="13" y="3" width="8" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </>
    ),
  },
  {
    name: "Ledgerline",
    mark: <path d="M4 4v16h16M8 15l4-4 3 3 5-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    name: "Vaultic",
    mark: (
      <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    ),
  },
  {
    name: "Prismic Pay",
    mark: <path d="M12 2l10 18H2L12 2z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />,
  },
  {
    name: "Stratus",
    mark: (
      <path d="M3 8h13a3 3 0 100-6M3 14h17a3 3 0 110 6M3 11h9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    ),
  },
];

function PartnerItem({ partner }: { partner: Partner }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 px-8 text-muted-foreground/70 transition-colors hover:text-foreground md:px-12">
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        {partner.mark}
      </svg>
      <span className="text-lg font-bold tracking-tight">{partner.name}</span>
    </div>
  );
}

export function PartnerLogos() {
  return (
    <section aria-label="Partners" className="border-y border-white/5 bg-white/[0.02] py-10">
      <p className="container text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by teams and funds worldwide
      </p>
      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...PARTNERS, ...PARTNERS].map((partner, i) => (
            <PartnerItem key={`${partner.name}-${i}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
