import { AtSign, MessageCircle, Rss, Send } from "lucide-react";

import { Logo } from "@/components/Logo";
import { BRAND } from "@/lib/site";

const COLUMNS = [
  { title: "Product", links: ["Exchange", "Portfolio", "Analytics", "Mobile app", "API"] },
  { title: "Company", links: ["About", "Careers", "Press", "Blog"] },
  { title: "Resources", links: ["Help center", "Learn crypto", "Fees", "Status"] },
  { title: "Legal", links: ["Privacy", "Terms", "Cookies", "Licenses"] },
];

const SOCIALS = [
  { icon: AtSign, label: "X" },
  { icon: Send, label: "Telegram" },
  { icon: MessageCircle, label: "Discord" },
  { icon: Rss, label: "Blog" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/[0.02]">
      <div className="container grid gap-12 py-16 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm text-muted-foreground">
            The calm, powerful way to trade and track digital assets.
          </p>
          <div className="mt-6 flex gap-2">
            {SOCIALS.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:border-violet/50 hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-4">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </p>
          <p>Crypto assets are volatile. Trade responsibly.</p>
        </div>
      </div>
    </footer>
  );
}
