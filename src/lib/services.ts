import type { Language } from "@/data/site-content";
import { localizedPath } from "@/lib/locales";

export function getServicesMenuItems(language?: Language) {
  return [
    {
      href: language ? localizedPath(language, "/marketing-audit") : "/ru/marketing-audit",
      label:
        language === "en"
          ? "Marketing audit"
          : language === "et"
            ? "Turundusaudit"
            : "Аудит маркетинга",
    },
    {
      href: language ? localizedPath(language, "/smm") : "/ru/smm",
      label: "SMM",
    },
    {
      href: language ? localizedPath(language, "/meta-ads") : "/meta-ads",
      label: "Meta Ads",
    },
    {
      href: language ? localizedPath(language, "/google-ads") : "/google-ads",
      label: "Google Ads",
    },
    {
      href: language ? localizedPath(language, "/seo") : "/ru/seo",
      label:
        language === "ru"
          ? "SEO оптимизация"
          : language === "et"
            ? "SEO optimeerimine"
            : "SEO optimisation",
    },
    {
      href: language
        ? localizedPath(language, "/website-development")
        : "/ru/website-development",
      label:
        language === "ru"
          ? "Разработка сайта"
          : language === "et"
            ? "Veebilehe arendus"
            : "Website development",
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
  const marketingAuditHref = routeLanguage
    ? localizedPath(routeLanguage, "/marketing-audit")
    : "/ru/marketing-audit";
  const smmHref = routeLanguage ? localizedPath(routeLanguage, "/smm") : "/ru/smm";
  const seoHref = routeLanguage ? localizedPath(routeLanguage, "/seo") : "/ru/seo";
  const websiteDevelopmentHref = routeLanguage
    ? localizedPath(routeLanguage, "/website-development")
    : "/ru/website-development";

  const byLanguage: Record<Language, Array<{ label: string; href?: string }>> = {
    en: [
      { label: "Marketing audit", href: marketingAuditHref },
      { label: "SMM", href: smmHref },
      { label: "Google Ads", href: googleAdsHref },
      { label: "SEO", href: seoHref },
      { label: "Meta Ads", href: metaAdsHref },
      { label: "Website development", href: websiteDevelopmentHref },
    ],
    et: [
      { label: "Turundusaudit", href: marketingAuditHref },
      { label: "SMM", href: smmHref },
      { label: "Google Ads", href: googleAdsHref },
      { label: "SEO", href: seoHref },
      { label: "Meta Ads", href: metaAdsHref },
      { label: "Veebilehe arendus", href: websiteDevelopmentHref },
    ],
    ru: [
      { label: "Аудит маркетинга", href: marketingAuditHref },
      { label: "SMM", href: smmHref },
      { label: "Google реклама", href: googleAdsHref },
      { label: "SEO оптимизация", href: seoHref },
      { label: "Meta Ads", href: metaAdsHref },
      { label: "Разработка сайта", href: websiteDevelopmentHref },
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
    { label: "SMM", href: language ? localizedPath(language, "/smm") : "/ru/smm" },
  ] as const;
}

export function getGoogleAdsRelatedServices(language?: Language) {
  return [
    { label: "SMM", href: language ? localizedPath(language, "/smm") : "/ru/smm" },
    {
      label: "Meta Ads",
      href: language ? localizedPath(language, "/meta-ads") : "/meta-ads",
    },
  ] as const;
}

