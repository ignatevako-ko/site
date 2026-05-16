import type { Language } from "@/data/site-content";
import { ServicePageShell } from "@/components/service-page-shell";
import { getMetaAdsRelatedServices } from "@/lib/services";
import { getServicePageCopy, getServicePageDictionary } from "@/lib/service-pages";

type MetaAdsPageProps = {
  language?: Language;
  homeHref?: string;
  languageLinks?: Partial<Record<Language, string>>;
};

export function MetaAdsPage({
  language = "ru",
  homeHref = "/",
  languageLinks = {},
}: MetaAdsPageProps) {
  return (
    <ServicePageShell
      language={language}
      content={getServicePageDictionary("meta-ads", language)}
      copy={getServicePageCopy("meta-ads", language)}
      homeHref={homeHref}
      languageLinks={languageLinks}
      relatedServices={getMetaAdsRelatedServices(language)}
    />
  );
}
