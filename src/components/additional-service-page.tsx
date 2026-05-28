import { ServicePageShell } from "@/components/service-page-shell";
import type { Language } from "@/data/site-content";
import {
  type AdditionalServiceSlug,
  getAdditionalServicePageCopy,
  getAdditionalServicePageDictionary,
  homeButtonLabels,
} from "@/lib/additional-service-pages";
import { localizedPath } from "@/lib/locales";

const relatedLabels: Record<Language, Record<AdditionalServiceSlug, string>> = {
  ru: {
    "marketing-audit": "Аудит маркетинга",
    smm: "SMM",
    seo: "SEO оптимизация",
    "website-development": "Разработка сайта",
  },
  en: {
    "marketing-audit": "Marketing audit",
    smm: "SMM",
    seo: "SEO optimisation",
    "website-development": "Website development",
  },
  et: {
    "marketing-audit": "Turundusaudit",
    smm: "SMM",
    seo: "SEO optimeerimine",
    "website-development": "Veebilehe arendus",
  },
};

const relatedSlugs: AdditionalServiceSlug[] = [
  "marketing-audit",
  "smm",
  "seo",
  "website-development",
];

export function AdditionalServicePage({
  slug,
  language,
}: {
  slug: AdditionalServiceSlug;
  language: Language;
}) {
  const copy = getAdditionalServicePageCopy(slug, language);
  const content = getAdditionalServicePageDictionary(slug, language);
  const relatedServices = relatedSlugs
    .filter((item) => item !== slug)
    .map((item) => ({
      href: localizedPath(language, `/${item}`),
      label: relatedLabels[language][item],
    }));

  return (
    <ServicePageShell
      language={language}
      content={content}
      copy={copy}
      homeHref={localizedPath(language)}
      homeButtonLabel={homeButtonLabels[language]}
      languageLinks={{
        ru: localizedPath("ru", `/${slug}`),
        en: localizedPath("en", `/${slug}`),
        et: localizedPath("et", `/${slug}`),
      }}
      relatedServices={relatedServices}
    />
  );
}

