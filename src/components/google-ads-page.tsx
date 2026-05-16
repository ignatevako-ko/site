import type { Language } from "@/data/site-content";
import { ServicePageShell } from "@/components/service-page-shell";
import { getGoogleAdsRelatedServices } from "@/lib/services";
import { getServicePageCopy, getServicePageDictionary } from "@/lib/service-pages";

type GoogleAdsPageProps = {
  language?: Language;
  homeHref?: string;
  languageLinks?: Partial<Record<Language, string>>;
};

export function GoogleAdsPage({
  language = "ru",
  homeHref = "/",
  languageLinks = {},
}: GoogleAdsPageProps) {
  return (
    <ServicePageShell
      language={language}
      content={getServicePageDictionary("google-ads", language)}
      copy={getServicePageCopy("google-ads", language)}
      homeHref={homeHref}
      languageLinks={languageLinks}
      relatedServices={getGoogleAdsRelatedServices(language)}
    />
  );
}
