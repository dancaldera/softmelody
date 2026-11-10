# Softmelody

Landing page for **Softmelody** — an independent AI consultancy. Enterprise-grade AI, engineered to ship.

## Stack

[Astro](https://astro.build) — static site, zero client framework. Vanilla TS + scoped CSS with:

- A warm-dark "hi-fi at night" palette (ivory type, one amber accent) with a single inverted paper block for the closing CTA; Fraunces for display, Geist + Geist Mono for text
- A playable hero: five canvas strings (a treble staff tuned to Em9) that pluck when the cursor crosses them, when the page scrolls past a resting cursor, or on tap — with opt-in WebAudio sound, off by default
- A bento of product cards, each with its own small animated scene and a cursor-following border light
- Scroll-reveal animations and a word-by-word statement in About
- Contact section with copy-email and mailto composer; Cal.com booking embed and the Melody voice agent dialog
- `prefers-reduced-motion` fully respected

## Structure

```
src/
├── layouts/Layout.astro     # head, meta, fonts, film grain, reveal observer
├── pages/index.astro        # page composition
├── components/              # Nav, Hero, Ticker, Melody, Products (+ ProductVisual), Services, About, BookCall, Contact, Footer
├── data/products.ts         # the product list — cards, footer links and the tally all read from it
├── scripts/sound.ts         # opt-in WebAudio pluck synth shared by the hero strings and product cards
└── styles/global.css        # design tokens + shared utilities
public/
├── favicon.svg
└── og.png                   # 1200×630 social preview
```

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:4321/softmelody
pnpm build      # outputs to dist/
pnpm preview    # preview the production build
```

## Deploy

Deploys to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main` → https://dancaldera.github.io/softmelody/

`astro.config.mjs` applies `base: "/softmelody"` only when `GITHUB_ACTIONS` is set, so Pages keeps its project path while Vercel and other hosts serve from the domain root. The non-CI `site` is `softmelody.dev` — update it if the production domain differs.

## Products featured

| Product | What it is |
| --- | --- |
| [Softmelody App](https://app.softmelody.dev/) | Voice AI services & workflows |
| [ID](https://id.softmelody.dev/) | Private AI security workspace — agentic triage, threat modeling & detections |
| [Relay](https://relay.softmelody.dev/) | Signed, expiring file-share links — signups are agent-only (AI agents follow `/agents.txt`) |
| [Creator Vault](https://cv.softmelody.dev/) | Gated posts & paid memberships for creators |
| [OpenPOS](https://www.openpos.xyz/) | Intelligent, offline-first POS |
| [Flow](https://github.com/dancaldera/flow) | Push-to-talk dictation for macOS |
| [XDB](https://github.com/dancaldera/xdb) | Local DB client for Postgres/MySQL/SQLite |

## Contact

[d@softmelody.dev](mailto:d@softmelody.dev)
