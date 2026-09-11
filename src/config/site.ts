export const LOCALES = ["en", "pt-BR"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const AUDIENCES = ["player", "gm"] as const;
export type Audience = (typeof AUDIENCES)[number];

export const DEFAULT_AUDIENCE: Audience = "player";

export const AUDIENCE_STORAGE_KEY = "rotn:audience";

export const THEMES = ["dark", "light", "paper"] as const;
export type Theme = (typeof THEMES)[number];

export const DEFAULT_THEME: Theme = "dark";

export const THEME_STORAGE_KEY = "rotn:theme";

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

export function isTheme(value: string): value is Theme {
  return THEMES.includes(value as Theme);
}

export function getLocaleOrDefault(value?: string): Locale {
  return value && isLocale(value) ? value : DEFAULT_LOCALE;
}

export function getAudienceOrDefault(value?: string | null): Audience {
  return value && isAudience(value) ? value : DEFAULT_AUDIENCE;
}

export function getThemeOrDefault(
  value?: string | null,
  supportsPaperTheme = false,
): Theme {
  if (value === "paper" && !supportsPaperTheme) return DEFAULT_THEME;

  return value && isTheme(value) ? value : DEFAULT_THEME;
}
