import { DEFAULT_LOCALE, LOCALES, type Locale } from "../config/site";

export function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return "/";

  const [maybeLocale, ...rest] = segments;

  if (!LOCALES.includes(maybeLocale as Locale)) {
    return pathname.startsWith("/") ? pathname : `/${pathname}`;
  }

  if (rest.length === 0) return "/";

  return `/${rest.join("/")}`;
}

export function buildLocalHref(targetLocale: Locale, pathname: string): string {
  const suffix = getPathWithoutLocale(pathname);

  if (suffix === "/") return `/${targetLocale}/`;

  return `/${targetLocale}${suffix}`;
}

export function getDefaultLocaleHref(pathname = "/"): string {
  return buildLocalHref(DEFAULT_LOCALE, pathname);
}

export function getSafeLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0];

  if (LOCALES.includes(maybeLocale as Locale)) return maybeLocale as Locale;

  return DEFAULT_LOCALE;
}
