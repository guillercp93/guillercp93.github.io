// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages user site.
export default defineConfig({
  site: 'https://guillercp93.github.io',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
});
