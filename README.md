# Guillermo Castillo · Portfolio

Personal portfolio built with [Astro](https://astro.build) and deployed to GitHub Pages.

Live site: https://guillercp93.github.io/

## Development

```sh
npm install
npm run dev      # http://localhost:4321/
npm run build    # outputs to dist/
npm run preview
```

## Updating content

- Experience, projects, skills and education are content collections in `src/content/*.json`,
  validated by the schemas in `src/content.config.ts`. Entries are sorted by `order`.
- Profile data and stats live in `src/data/profile.ts`.
- The site is bilingual: Spanish at `/` and English at `/en/`. Translated fields use
  `{ "es": "...", "en": "..." }`; interface strings live in `src/i18n/ui.ts`.
- Technology icons are mapped in `src/data/tech-icons.ts`.
- The downloadable CVs are `public/cv-guillermo-castillo.pdf` (es) and `public/cv-guillermo-castillo-en.pdf` (en).

`npm run build` type-checks the project (`astro check`) before building.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages. In the repository settings, set
**Settings → Pages → Source** to **GitHub Actions**.

The repository must stay named `guillercp93.github.io` to serve the site from the root URL.
