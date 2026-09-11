import { isTheme, type Theme } from "../../config/site";
import { readThemePreference, writeThemePreference } from "./theme-preference";

const THEME_SELECTOR = "[data-theme-selector]";
const THEME_OPTION_SELECTOR = "[data-theme-option]";

function applyTheme(buttons: HTMLButtonElement[], theme: Theme): void {
  document.documentElement.dataset.theme = theme;

  buttons.forEach((button) => {
    const isActive = button.dataset.themeOption === theme;

    button.dataset.active = String(isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

export function initThemeSwitchers(root: ParentNode = document): void {
  const selectors = Array.from(
    root.querySelectorAll<HTMLElement>(THEME_SELECTOR),
  );

  if (selectors.length === 0) return;

  const supportsPaperTheme = selectors.some(
    (selector) => selector.dataset.supportsPaperTheme === "true",
  );
  const buttons = selectors.flatMap((selector) =>
    Array.from(
      selector.querySelectorAll<HTMLButtonElement>(THEME_OPTION_SELECTOR),
    ),
  );
  const initialTheme = readThemePreference(supportsPaperTheme);

  applyTheme(buttons, initialTheme);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextTheme = button.dataset.themeOption;

      if (!nextTheme || !isTheme(nextTheme)) return;
      if (nextTheme === "paper" && !supportsPaperTheme) return;

      writeThemePreference(nextTheme);
      applyTheme(buttons, nextTheme);
    });
  });
}
