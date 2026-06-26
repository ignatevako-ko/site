import type { Language } from "@/data/site-content";
import { localizedPath } from "@/lib/locales";

export function getAllServiceLinks(language?: Language) {
  const routeLanguage = language ?? "ru";
  const pathFor = (path: string) =>
    language ? localizedPath(routeLanguage, path) : path.startsWith("/meta-ads") || path.startsWith("/google-ads") ? path : `/ru${path}`;

  return [
    {
      href: pathFor("/meta-ads"),
      label: "Meta Ads",
      slug: "meta-ads",
    },
    {
      href: pathFor("/google-ads"),
      label: "Google Ads",
      slug: "google-ads",
    },
    {
      href: pathFor("/marketing-audit"),
      label:
        language === "en"
          ? "Marketing audit"
          : language === "et"
            ? "Turundusaudit"
            : "Аудит маркетинга",
      slug: "marketing-audit",
    },
    {
      href: pathFor("/smm"),
      label: "SMM",
      slug: "smm",
    },
    {
      href: pathFor("/seo"),
      label:
        language === "en"
          ? "SEO optimisation"
          : language === "et"
            ? "SEO optimeerimine"
            : "SEO оптимизация",
      slug: "seo",
    },
    {
      href: pathFor("/website-development"),
      label:
        language === "en"
          ? "Website development"
          : language === "et"
            ? "Veebilehe arendus"
            : "Разработка сайта",
      slug: "website-development",
    },
  ] as const;
}

export function getServicesMenuItems(language?: Language) {
  const servicesSectionHref = language
    ? `${localizedPath(language, "/")}#services`
    : "/ru#services";

  return [
    ...getAllServiceLinks(language).map(({ href, label }) => ({ href, label })),
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
  const linkLanguage = routeLanguage ?? language;

  return getAllServiceLinks(linkLanguage).map(({ href, label, slug }) => ({
    href,
    label: language === "ru" && slug === "google-ads" ? "Google реклама" : label,
  }));
}

export function getMetaAdsRelatedServices(language?: Language) {
  return getAllServiceLinks(language).filter((item) => item.slug !== "meta-ads");
}

export function getGoogleAdsRelatedServices(language?: Language) {
  return getAllServiceLinks(language).filter((item) => item.slug !== "google-ads");
}
