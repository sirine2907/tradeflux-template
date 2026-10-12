# TradeFlux — Crypto Trading Landing Page

A responsive marketing landing page for **TradeFlux**, a fictional crypto trading platform. It has a dark navy theme with a violet-to-cyan accent gradient, glassmorphism cards and subtle motion.

**Sections:** sticky navigation with a mobile menu, a centered hero with an animated gradient background and a dashboard mockup, a scrolling partner-logo strip, a tabbed features section (trading, portfolio, security, analytics), 3-tier pricing with a monthly/yearly toggle, testimonials, a call-to-action banner and a footer.

The dashboard mockup, charts and partner logos are built with inline SVG and HTML, so the project ships no image files.

## Screenshots

![Desktop hero](docs/screenshots/desktop.png)

<p>
  <img src="docs/screenshots/mobile.png" alt="Mobile view" width="280">
</p>

<details>
<summary>Full page</summary>

![Full page](docs/screenshots/full-page.png)

</details>

## Getting started

Requires Node.js 18 or newer.

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
npm run build     # type-check and build for production into dist/
npm run preview   # serve the production build locally
```

## Tech stack

- [React 18](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) components (Button, Card, Tabs) on Radix UI primitives
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev) icons
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) from Google Fonts

## Project structure

```
src/
  components/
    ui/               shadcn/ui primitives
    Navbar.tsx        sticky nav and mobile menu
    Hero.tsx          hero section
    DashboardMockup.tsx
    PartnerLogos.tsx
    Features.tsx
    Pricing.tsx
    Testimonials.tsx
    CtaBanner.tsx
    Footer.tsx
  lib/
    site.ts           brand name and nav links
    utils.ts
  index.css           theme tokens and shared utility classes
```

## Customizing

- **Brand name:** change `BRAND` in `src/lib/site.ts`, plus the `<title>` and meta tags in `index.html`.
- **Colors:** `navy`, `violet`, `cyan` and the `brand-gradient` are defined in `tailwind.config.ts`.
