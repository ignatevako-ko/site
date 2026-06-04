import type { Language } from "@/data/site-content";
import { localizedPath } from "@/lib/locales";

export function getServicesMenuItems(language?: Language) {
  const servicesSectionHref = language
    ? `${localizedPath(language, "/")}#services`
    : "/ru#services";

  return [
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
      href: servicesSectionHref,
      label:
        language === "ru"
          ? "Другие услуги"
          : language === "et"
            ? "Muud teenused"
            : "Other services",
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
      { label: "Google Ads", href: googleAdsHref },
      { label: "SEO", href: seoHref },
      { label: "Meta Ads", href: metaAdsHref },
      { label: "Website development", href: websiteDevelopmentHref },
      { label: "SMM", href: smmHref },
    ],
    et: [
      { label: "Turundusaudit", href: marketingAuditHref },
      { label: "Google Ads", href: googleAdsHref },
      { label: "SEO", href: seoHref },
      { label: "Meta Ads", href: metaAdsHref },
      { label: "Veebilehe arendus", href: websiteDevelopmentHref },
      { label: "SMM", href: smmHref },
    ],
    ru: [
      { label: "Аудит маркетинга", href: marketingAuditHref },
      { label: "Google реклама", href: googleAdsHref },
      { label: "SEO оптимизация", href: seoHref },
      { label: "Meta Ads", href: metaAdsHref },
      { label: "Разработка сайта", href: websiteDevelopmentHref },
      { label: "SMM", href: smmHref },
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
