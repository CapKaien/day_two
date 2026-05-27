# Ember Coffee

A single-page React landing site for a fictional neighborhood roastery — editorial / warm aesthetic, cream + espresso palette, Fraunces display type, scroll-linked motion in the Emil Kowalski idiom.

## Stack

- **React 18** + **Vite 6**
- **Tailwind CSS 3** with a custom theme
- **Framer Motion 11** for scroll-linked parallax and staggered reveals

## Run locally

```powershell
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle into dist/
npm run preview  # serve the built bundle
```

## What's inside

| Section   | File                                                            |
| --------- | --------------------------------------------------------------- |
| Nav       | [src/components/Nav.jsx](src/components/Nav.jsx)               |
| Hero      | [src/components/Hero.jsx](src/components/Hero.jsx)             |
| Marquee   | [src/components/Marquee.jsx](src/components/Marquee.jsx)       |
| Products  | [src/components/Products.jsx](src/components/Products.jsx)     |
| Story     | [src/components/Story.jsx](src/components/Story.jsx)           |
| Beans     | [src/components/Beans.jsx](src/components/Beans.jsx)           |
| Visit     | [src/components/Visit.jsx](src/components/Visit.jsx)           |
| Footer    | [src/components/Footer.jsx](src/components/Footer.jsx)         |

Shared motion primitives live in [src/components/Reveal.jsx](src/components/Reveal.jsx); content lives in [src/data.js](src/data.js).

See [CLAUDE.md](CLAUDE.md) for architecture and conventions.

## Design

- **Palette** — cream `#F2EAD9`, espresso `#231410`, terracotta `#B8492A` accent, sage secondary.
- **Type** — Fraunces (display), Instrument Sans (body), Instrument Serif (italic accents), JetBrains Mono (micro-labels & tabular numerals).
- **Motion** — shared ease-out-expo `[0.16, 1, 0.3, 1]`, word-by-word mask reveals on headlines, `useScroll` + `useTransform` for parallax.

Images are stable Unsplash CDN URLs (configured in `src/data.js`).
