# Guillermo Castillo · Portfolio

Personal portfolio built with [Astro](https://astro.build) and deployed to GitHub Pages.

Live site: https://guillercp93.github.io/portfolio/

## Development

```sh
npm install
npm run dev      # http://localhost:4321/portfolio/
npm run build    # outputs to dist/
npm run preview
```

## Updating content

- Experience, projects, skills and education are content collections in `src/content/*.json`,
  validated by the schemas in `src/content.config.ts`. Entries are sorted by `order`.
- Profile data and stats live in `src/data/profile.ts`.
- Technology icons are mapped in `src/data/tech-icons.ts`.
- The downloadable CV is `public/cv-guillermo-castillo.pdf`.

`npm run build` type-checks the project (`astro check`) before building.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages. In the repository settings, set
**Settings → Pages → Source** to **GitHub Actions**.

If the repository is renamed, update `base` in `astro.config.mjs` to match.
