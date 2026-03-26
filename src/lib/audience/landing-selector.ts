import { isAudience, type Audience } from "../../config/site";
import {
  readAudiencePreference,
  writeAudiencePreference,
} from "./audience-preference";

const AUDIENCE_SELECTOR = "[data-audience-selector]";
const AUDIENCE_OPTION_SELECTOR = "[data-audience-option]";

export function initLandingAudienceSelector(root: ParentNode = document): void {
  const selector = root.querySelector(AUDIENCE_SELECTOR);

  if (!(selector instanceof HTMLElement)) {
    return;
  }

  const buttons = Array.from(
    selector.querySelectorAll<HTMLButtonElement>(AUDIENCE_OPTION_SELECTOR),
  );

  const applyAudience = (value: Audience) => {
    buttons.forEach((button) => {
      const isActive = button.dataset.audienceOption === value;

      button.dataset.active = String(isActive);
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    document.documentElement.dataset.audience = value;
  };

  const initialAudience = readAudiencePreference();
  writeAudiencePreference(initialAudience);
  applyAudience(initialAudience);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextAudience = button.dataset.audienceOption;

      if (!nextAudience || !isAudience(nextAudience)) {
        return;
      }

      writeAudiencePreference(nextAudience);
      applyAudience(nextAudience);
    });
  });
}
