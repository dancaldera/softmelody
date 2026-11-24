# Softmelody

Landing page for **Softmelody** — an independent AI consultancy. Enterprise-grade AI, engineered to ship.

## Stack

[Astro](https://astro.build) — static site, zero client framework. Vanilla TS + scoped CSS with:

- A neutral graphite palette (near-white type, one restrained blue accent) with a single inverted light block for the closing CTA; Geist for display and text, Geist Mono for labels
- A typographic hero over a faint engineering grid, with a facts band (products shipped, live, industries) read from the product data
- A bento of product cards, each with its own small animated scene and a cursor-following border light
- Scroll-reveal animations
- Contact section with copy-email and mailto composer; Cal.com booking embed and the Melody voice agent dialog
- `prefers-reduced-motion` fully respected

## Structure

```
src/
├── layouts/Layout.astro     # head, meta, fonts, reveal observer
├── pages/index.astro        # page composition
├── components/              # Nav, Hero, Melody, Products (+ ProductVisual), Services, About, BookCall, Contact, Footer
├── data/products.ts         # the product list — cards, footer links, hero facts and the tally all read from it
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
