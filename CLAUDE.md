# CLAUDE.md

Guidance for Claude Code working in this repo.

## Project — Ember Coffee Landing

A single-page React landing site for a fictional neighborhood roastery called **Ember**. The aesthetic is editorial / warm / cozy: cream + espresso palette, Fraunces serif display, Instrument Sans body, Instrument Serif for italic accents. Motion is in the Emil Kowalski idiom — smooth ease-out-expo, staggered word reveals on scroll, parallax images.

## Environment

- Platform: Windows 11 (`win32`)
- Shell: PowerShell (`;` chain, `$env:VAR`, backtick continuation). Bash is available for POSIX scripts.
- Working directory: `C:\Users\Ranniel\Desktop\day_two`

## Commands

```powershell
npm install        # one-time install
npm run dev        # start Vite dev server (port 5173, auto-opens)
npm run build      # production build into dist/
npm run preview    # serve the built bundle
```

There is no test runner or lint config configured yet.

## Stack

- **React 18** + **Vite 6** (JS, not TS)
- **Tailwind CSS 3** with a custom theme (see [tailwind.config.js](tailwind.config.js))
- **Framer Motion 11** for scroll-linked transforms (`useScroll` + `useTransform`), `whileInView` reveals, and `AnimatePresence` for the mobile menu

## Architecture

Everything lives in [src/](src/) and renders from a single root.

- [src/App.jsx](src/App.jsx) — composes all sections in order: Nav → Hero → Marquee → Products → Story → Beans → Visit → Footer
- [src/main.jsx](src/main.jsx) — React 18 root mount
- [src/index.css](src/index.css) — Tailwind layers + global tokens (CSS vars `--cream`, `--espresso`, `--terracotta`), the `.grain` SVG noise overlay, marquee keyframes, and the `.link-underline` / `.reveal-mask` utilities
- [src/data.js](src/data.js) — all content: product list, bean roasts, image URLs. Images are stable Unsplash photo IDs proxied through their CDN with `?auto=format&fit=crop&w=...&q=80`. To swap an image, only change the photo ID here.
- [src/components/Reveal.jsx](src/components/Reveal.jsx) — two shared motion primitives:
  - `<Reveal>` — fade + rise on scroll-in (used for blocks, paragraphs)
  - `<RevealText>` — splits a string by spaces and rises each word from `y:110%` inside an `overflow-hidden` mask (used for all big headlines)
- [src/components/](src/components/) — one file per section. They are pure presentational components reading from `data.js`; no router, no state management.

## Non-obvious conventions

- **Always import motion primitives from `./Reveal`** instead of writing ad-hoc `motion.div` blocks — keeps the easing curve (`[0.16, 1, 0.3, 1]`, ease-out-expo) and stagger timing consistent across the page. If you need a custom variant, add it to `Reveal.jsx`.
- **Headline pattern**: every section heading uses `font-display font-light tracking-ultratight` with a fluid `text-[12vw] md:text-[80px] xl:text-[112px]` clamp, and italicizes the second line via `font-italic italic`. Match this when adding a new section so the typographic rhythm holds.
- **Section labels**: each major section opens with a `font-mono text-[11px] uppercase tracking-[0.22em] text-espresso/50` numbered marker (e.g. `02 · The Menu`). Keep numbering sequential.
- **Color tokens** in [tailwind.config.js](tailwind.config.js): `cream`, `espresso`, `terracotta`, `sage`, plus numbered scales. Don't add raw hex values in JSX — extend the theme instead.
- **Fonts**: `font-display` (Fraunces), `font-italic` (Instrument Serif italic, for tasting-note phrases), `font-sans` (Instrument Sans, default body), `font-mono` (JetBrains Mono, only for tiny uppercase labels and tabular numerals). Don't introduce a fifth family.
- **`nums` utility** in [src/index.css](src/index.css) enables `tabular-nums` — apply it to any price, year, or stat so digits align.
- **`grain` class** adds a multiply-blended SVG noise overlay via `::after` — only useful on large solid-color blocks (Hero, Story, Beans, Footer), not on cards.
- Fonts come from Google Fonts in [index.html](index.html) — keep the `preconnect` + single `<link>` pattern; don't move to JS-side font loading.
