export const LOCALES = ["en", "pt-BR"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const AUDIENCES = ["player", "gm"] as const;
export type Audience = (typeof AUDIENCES)[number];

export const DEFAULT_AUDIENCE: Audience = "player";

export const AUDIENCE_STORAGE_KEY = "rotn:audience";

export const ROUTE_PARAMS = {
  lang: "lang",
} as const;

export const LOCALE_ROUTE_PATTERN = `/{${ROUTE_PARAMS.lang}}/...`;

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function isAudience(value: string): value is Audience {
  return AUDIENCES.includes(value as Audience);
}

export function getLocaleOrDefault(value?: string): Locale {
  return value && isLocale(value) ? value : DEFAULT_LOCALE;
}

export function getAudienceOrDefault(value?: string | null): Audience {
  return value && isAudience(value) ? value : DEFAULT_AUDIENCE;
}
