import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { MetaAdsPage } from "@/components/meta-ads-page";
import type { Language } from "@/data/site-content";
import { buildLanguageHrefMap, isSupportedLanguage, localizedPath, supportedLanguages } from "@/lib/locales";
import { getServicePageCopy } from "@/lib/service-pages";
import { buildLocalizedPageMetadata, buildServiceStructuredData } from "@/lib/seo";

function resolveLanguage(value: string): Language {
  if (!isSupportedLanguage(value)) {
    notFound();
  }

  return value;
}

export function generateStaticParams() {
  return supportedLanguages.map((language) => ({ language }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ language: string }>;
}): Promise<Metadata> {
  const { language: rawLanguage } = await params;
  const language = resolveLanguage(rawLanguage);
  const copy = getServicePageCopy("meta-ads", language);

  return buildLocalizedPageMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    path: "/meta-ads",
    language,
    keywords: copy.metadata.keywords,
  });
}

export default async function LocalizedMetaAdsRoute({
  params,
}: {
  params: Promise<{ language: string }>;
}) {
  const { language: rawLanguage } = await params;
  const language = resolveLanguage(rawLanguage);
  const copy = getServicePageCopy("meta-ads", language);
  const path = localizedPath(language, "/meta-ads");

  return (
    <>
      <MetaAdsPage
        language={language}
        homeHref={localizedPath(language)}
        languageLinks={buildLanguageHrefMap("/meta-ads")}
      />
      <Script id={`meta-ads-structured-data-${language}`} type="application/ld+json">
        {JSON.stringify(
          buildServiceStructuredData({
            path,
            name: copy.metadata.serviceName,
            description: copy.metadata.serviceDescription,
            serviceType: copy.metadata.serviceType,
            price: copy.metadata.price,
            faq: copy.faq.items,
          }),
        )}
      </Script>
    </>
  );
}
