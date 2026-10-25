const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

// Prefix a public asset path with the site base.
export const withBase = (path: string) => `${base}${path.replace(/^\//, '')}`;
