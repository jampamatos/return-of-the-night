import {
  AUDIENCE_STORAGE_KEY,
  DEFAULT_AUDIENCE,
  getAudienceOrDefault,
  type Audience,
} from "../../config/site";

function hasBrowserStorage(): boolean {
  return (
    typeof window !== "undefined" && typeof window.localStorage !== "undefined"
  );
}

export function readAudiencePreference(): Audience {
  if (!hasBrowserStorage()) return DEFAULT_AUDIENCE;

  const rawValue = window.localStorage.getItem(AUDIENCE_STORAGE_KEY);
  return getAudienceOrDefault(rawValue);
}

export function writeAudiencePreference(audience: Audience): void {
  if (!hasBrowserStorage()) return;

  window.localStorage.setItem(AUDIENCE_STORAGE_KEY, audience);
}

export function clearAudiencePreference(): void {
  if (!hasBrowserStorage()) return;

  window.localStorage.removeItem(AUDIENCE_STORAGE_KEY);
}
