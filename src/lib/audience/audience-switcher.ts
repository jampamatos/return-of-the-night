import { isAudience, type Audience } from "../../config/site";
import {
  readAudiencePreference,
  writeAudiencePreference,
} from "./audience-preference";

const AUDIENCE_SELECTOR = "[data-audience-selector]";
const AUDIENCE_OPTION_SELECTOR = "[data-audience-option]";

function applyAudience(buttons: HTMLButtonElement[], value: Audience): void {
  buttons.forEach((button) => {
    const isActive = button.dataset.audienceOption === value;

    button.dataset.active = String(isActive);
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.documentElement.dataset.audience = value;
}

export function initAudienceSwitchers(root: ParentNode = document): void {
  const selectors = Array.from(
    root.querySelectorAll<HTMLElement>(AUDIENCE_SELECTOR),
  );

  if (selectors.length === 0) return;

  const buttons = selectors.flatMap((selector) =>
    Array.from(
      selector.querySelectorAll<HTMLButtonElement>(AUDIENCE_OPTION_SELECTOR),
    ),
  );

  const initialAudience = readAudiencePreference();
  writeAudiencePreference(initialAudience);
  applyAudience(buttons, initialAudience);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextAudience = button.dataset.audienceOption;

      if (!nextAudience || !isAudience(nextAudience)) return;

      writeAudiencePreference(nextAudience);
      applyAudience(buttons, nextAudience);
    });
  });
}
