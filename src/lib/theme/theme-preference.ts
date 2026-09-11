import {
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  getThemeOrDefault,
  type Theme,
} from "../../config/site";

function hasBrowserStorage(): boolean {
  return (
    typeof window !== "undefined" && typeof window.localStorage !== "undefined"
  );
}

export function readThemePreference(supportsPaperTheme = false): Theme {
  if (!hasBrowserStorage()) return DEFAULT_THEME;

  return getThemeOrDefault(
    window.localStorage.getItem(THEME_STORAGE_KEY),
    supportsPaperTheme,
  );
}

export function writeThemePreference(theme: Theme): void {
  if (!hasBrowserStorage()) return;

  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
}
