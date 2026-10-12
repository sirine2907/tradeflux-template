import { BRAND } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("flex items-center gap-2.5 text-lg font-bold tracking-tight", className)}>
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
        <defs>
          <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill="url(#logo-gradient)" />
        <path
          d="M8 20l5-6 4 4 7-8"
          fill="none"
          stroke="#fff"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>{BRAND}</span>
    </a>
  );
}
