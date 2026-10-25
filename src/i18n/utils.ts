import { ui } from '@/i18n/ui';

export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

// Text that is the same in every locale, or translated per locale.
export type Localized = string | Record<Locale, string>;

export function toLocale(value: string | undefined): Locale {
  return locales.find((locale) => locale === value) ?? defaultLocale;
}

export function localize(value: Localized, locale: Locale): string {
  return typeof value === 'string' ? value : value[locale];
}

export function useTranslations(locale: Locale) {
  return ui[locale];
}
