import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { GoogleAdsPage } from "@/components/google-ads-page";
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
  const copy = getServicePageCopy("google-ads", language);

  return buildLocalizedPageMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    path: "/google-ads",
    language,
    keywords: copy.metadata.keywords,
  });
}

export default async function LocalizedGoogleAdsRoute({
  params,
}: {
  params: Promise<{ language: string }>;
}) {
  const { language: rawLanguage } = await params;
  const language = resolveLanguage(rawLanguage);
  const copy = getServicePageCopy("google-ads", language);
  const path = localizedPath(language, "/google-ads");

  return (
    <>
      <GoogleAdsPage
        language={language}
        homeHref={localizedPath(language)}
        languageLinks={buildLanguageHrefMap("/google-ads")}
      />
      <Script id={`google-ads-structured-data-${language}`} type="application/ld+json">
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
