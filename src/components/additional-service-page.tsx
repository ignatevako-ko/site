import { ServicePageShell } from "@/components/service-page-shell";
import type { Language } from "@/data/site-content";
import {
  type AdditionalServiceSlug,
  getAdditionalServicePageCopy,
  getAdditionalServicePageDictionary,
  homeButtonLabels,
} from "@/lib/additional-service-pages";
import { localizedPath } from "@/lib/locales";
import { getAllServiceLinks } from "@/lib/services";

export function AdditionalServicePage({
  slug,
  language,
}: {
  slug: AdditionalServiceSlug;
  language: Language;
}) {
  const copy = getAdditionalServicePageCopy(slug, language);
  const content = getAdditionalServicePageDictionary(slug, language);
  const relatedServices = getAllServiceLinks(language).filter((item) => item.slug !== slug);

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
