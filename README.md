# Softmelody

Landing page for **Softmelody** — the independent AI consultancy of [Daniel Caldera](https://github.com/dancaldera). Enterprise-grade AI, engineered to ship.

## Stack

[Astro](https://astro.build) — static site, zero client framework. Vanilla TS + scoped CSS with:

- Minimal light palette with a single accent; subtle fade-in and hover transitions only
- Scroll-reveal animations and counters
- Contact section with copy-email and mailto composer
- `prefers-reduced-motion` fully respected

## Structure

```
src/
├── layouts/Layout.astro     # head, meta, fonts, ambient background, reveal observer
├── pages/index.astro        # page composition
├── components/              # Nav, Hero, Products, Services, About, Contact, Footer
└── styles/global.css        # design tokens + shared utilities
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

The `base` path is set in `astro.config.mjs` for the project Pages URL. When moving to a custom domain (e.g. `softmelody.dev`), update `site` and remove `base`.

## Products featured

| Product | What it is |
| --- | --- |
| [Melody](https://app.softmelody.dev/) | Voice AI services & workflows |
| [Authia](https://authia.softmelody.dev/) | Security-first AI identity integration |
| [OpenPOS](https://www.openpos.xyz/) | Intelligent, offline-first POS |
| [Flow](https://github.com/dancaldera/flow) | Push-to-talk dictation for macOS |
| [XDB](https://github.com/dancaldera/xdb) | Local DB client for Postgres/MySQL/SQLite |

## Contact

[d@softmelody.dev](mailto:d@softmelody.dev)
