import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { AdditionalServicePage } from "@/components/additional-service-page";
import type { Language } from "@/data/site-content";
import {
  type AdditionalServiceSlug,
  getAdditionalServicePageCopy,
} from "@/lib/additional-service-pages";
import { isSupportedLanguage, localizedPath, supportedLanguages } from "@/lib/locales";
import { buildLocalizedPageMetadata, buildServiceStructuredData } from "@/lib/seo";

export function generateAdditionalServiceStaticParams() {
  return supportedLanguages.map((language) => ({ language }));
}

function resolveLanguage(value: string): Language {
  if (!isSupportedLanguage(value)) {
    notFound();
  }

  return value;
}

export async function generateAdditionalServiceMetadata({
  slug,
  params,
}: {
  slug: AdditionalServiceSlug;
  params: Promise<{ language: string }>;
}): Promise<Metadata> {
  const { language: rawLanguage } = await params;
  const language = resolveLanguage(rawLanguage);
  const copy = getAdditionalServicePageCopy(slug, language);

  return buildLocalizedPageMetadata({
    title: copy.metadata.title,
    description: copy.metadata.description,
    path: `/${slug}`,
    language,
    keywords: copy.metadata.keywords,
  });
}

export async function renderAdditionalServiceRoute({
  slug,
  params,
}: {
  slug: AdditionalServiceSlug;
  params: Promise<{ language: string }>;
}) {
  const { language: rawLanguage } = await params;
  const language = resolveLanguage(rawLanguage);
  const copy = getAdditionalServicePageCopy(slug, language);
  const path = localizedPath(language, `/${slug}`);

  return (
    <>
      <AdditionalServicePage slug={slug} language={language} />
      <Script id={`${slug}-structured-data-${language}`} type="application/ld+json">
        {JSON.stringify(
          buildServiceStructuredData({
            path,
            name: copy.metadata.serviceName,
            description: copy.metadata.serviceDescription,
            serviceType: copy.metadata.serviceType,
            price: copy.metadata.price,
            keywords: copy.metadata.keywords,
            faq: copy.faq.items,
          }),
        )}
      </Script>
    </>
  );
}
