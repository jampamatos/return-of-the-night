import { isLocale, type Locale } from "../../config/site";

const LAST_READER_STORAGE_KEY_PREFIX = "rotn:last-reader-path:";

export function getLastReaderStorageKey(lang: Locale): string {
  return `${LAST_READER_STORAGE_KEY_PREFIX}${lang}`;
}

export function isReaderPathForLocale(pathname: string, lang: Locale): boolean {
  const escapedLang = lang.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const slugSegment = "[a-z0-9]+(?:-[a-z0-9]+)*";
  const readerPath = new RegExp(
    `^/${escapedLang}/book/${slugSegment}(?:/${slugSegment})*/$`,
  );

  return readerPath.test(pathname);
}

export function getLastReaderPath(lang: Locale): string | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }

  try {
    const pathname = window.localStorage.getItem(getLastReaderStorageKey(lang));

    return pathname && isReaderPathForLocale(pathname, lang)
      ? pathname
      : undefined;
  } catch {
    return undefined;
  }
}

export function rememberLastReaderPath(lang: Locale, pathname: string): void {
  if (typeof window === "undefined" || !isReaderPathForLocale(pathname, lang)) {
    return;
  }

  try {
    window.localStorage.setItem(getLastReaderStorageKey(lang), pathname);
  } catch {
    // Reading remains fully usable when storage is unavailable.
  }
}

export function initResumeBookLinks(root: ParentNode = document): void {
  root
    .querySelectorAll<HTMLAnchorElement>("[data-open-book]")
    .forEach((link) => {
      const locale = link.dataset.bookLocale;

      if (!locale || !isLocale(locale)) {
        return;
      }

      const lastReaderPath = getLastReaderPath(locale);

      if (lastReaderPath) {
        link.href = lastReaderPath;
      }
    });
}
