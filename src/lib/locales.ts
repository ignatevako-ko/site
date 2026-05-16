import type { Language } from "@/data/site-content";

export const supportedLanguages = ["ru", "en", "et"] as const satisfies readonly Language[];
export const defaultLanguage: Language = "ru";

export function isSupportedLanguage(value: string): value is Language {
  return supportedLanguages.includes(value as Language);
}

export function localizedPath(
  language: Language,
  pathname = "",
): string {
  const normalizedPath =
    pathname === "/" || pathname === "" ? "" : pathname.startsWith("/") ? pathname : `/${pathname}`;

  return `/${language}${normalizedPath}`;
}

export function buildLanguageHrefMap(pathname = ""): Record<Language, string> {
  return {
    ru: localizedPath("ru", pathname),
    en: localizedPath("en", pathname),
    et: localizedPath("et", pathname),
  };
}

export function buildLanguageAlternates(pathname = "") {
  const hrefs = buildLanguageHrefMap(pathname);

  return {
    canonical: hrefs.ru,
    languages: {
      ru: hrefs.ru,
      en: hrefs.en,
      et: hrefs.et,
      "x-default": hrefs.ru,
    },
  } as const;
}
