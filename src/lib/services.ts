import type { Language } from "@/data/site-content";
import { localizedPath } from "@/lib/locales";

export function getServicesMenuItems(language?: Language) {
  return [
    {
      href: language ? localizedPath(language, "/meta-ads") : "/meta-ads",
      label: "Meta Ads",
    },
    {
      href: language ? localizedPath(language, "/google-ads") : "/google-ads",
      label: "Google Ads",
    },
  ] as const;
}

export function getLandingAdditionalServices(
  language: Language,
  routeLanguage?: Language,
) {
  const metaAdsHref = routeLanguage
    ? localizedPath(routeLanguage, "/meta-ads")
    : "/meta-ads";
  const googleAdsHref = routeLanguage
    ? localizedPath(routeLanguage, "/google-ads")
    : "/google-ads";

  const byLanguage: Record<Language, Array<{ label: string; href?: string }>> = {
    en: [
      { label: "Marketing audit" },
      { label: "SMM", href: "/smm" },
      { label: "Google Ads", href: googleAdsHref },
      { label: "SEO" },
      { label: "Meta Ads", href: metaAdsHref },
    ],
    et: [
      { label: "Turundusaudit" },
      { label: "SMM", href: "/smm" },
      { label: "Google Ads", href: googleAdsHref },
      { label: "SEO" },
      { label: "Meta Ads", href: metaAdsHref },
    ],
    ru: [
      { label: "Аудит маркетинга" },
      { label: "SMM", href: "/smm" },
      { label: "Google реклама", href: googleAdsHref },
      { label: "SEO оптимизация" },
      { label: "Meta Ads", href: metaAdsHref },
    ],
  };

  return byLanguage[language];
}

export function getMetaAdsRelatedServices(language?: Language) {
  return [
    {
      label: "Google Ads",
      href: language ? localizedPath(language, "/google-ads") : "/google-ads",
    },
    { label: "SMM", href: "/smm" },
  ] as const;
}

export function getGoogleAdsRelatedServices(language?: Language) {
  return [
    { label: "SMM", href: "/smm" },
    {
      label: "Meta Ads",
      href: language ? localizedPath(language, "/meta-ads") : "/meta-ads",
    },
  ] as const;
}
