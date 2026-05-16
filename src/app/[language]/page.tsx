import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { LandingPage } from "@/components/landing-page";
import type { Language } from "@/data/site-content";
import { buildLanguageHrefMap, isSupportedLanguage, localizedPath, supportedLanguages } from "@/lib/locales";
import { buildLocalizedHomePageStructuredData, buildLocalizedPageMetadata } from "@/lib/seo";

const homeSeoByLanguage: Record<Language, { title: string; description: string; keywords: string[] }> = {
  ru: {
    title: "Meta Ads и Google Ads агентство в Tallinn | Do.Marketing",
    description:
      "Do.Marketing — агентство рекламы в Таллинне, которое ведет Meta Ads и Google Ads для бизнеса в Эстонии: стратегия, креативы, кейсы и рост заявок.",
    keywords: [
      "Meta Ads agency Tallinn",
      "Google Ads agency Tallinn",
      "реклама в Таллинне",
      "performance marketing Tallinn",
    ],
  },
  en: {
    title: "Meta Ads and Google Ads Agency in Tallinn | Do.Marketing",
    description:
      "Do.Marketing is a Tallinn-based agency managing Meta Ads and Google Ads for businesses in Estonia: strategy, creatives, case studies and lead growth.",
    keywords: [
      "Meta Ads agency Tallinn",
      "Google Ads agency Tallinn",
      "performance marketing Estonia",
      "advertising agency Tallinn",
    ],
  },
  et: {
    title: "Meta Ads ja Google Ads agentuur Tallinnas | Do.Marketing",
    description:
      "Do.Marketing on Tallinna reklaamiagentuur, mis juhib Meta Adsi ja Google Adsi kampaaniaid Eesti ettevõtetele: strateegia, loovlahendused, case'id ja päringute kasv.",
    keywords: [
      "Meta Ads agentuur Tallinn",
      "Google Ads agentuur Tallinn",
      "reklaamiagentuur Tallinn",
      "performance marketing Eesti",
    ],
  },
};

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
  const seo = homeSeoByLanguage[language];

  return buildLocalizedPageMetadata({
    title: seo.title,
    description: seo.description,
    path: "",
    language,
    keywords: seo.keywords,
  });
}

export default async function LocalizedHome({
  params,
}: {
  params: Promise<{ language: string }>;
}) {
  const { language: rawLanguage } = await params;
  const language = resolveLanguage(rawLanguage);
  const languageLinks = buildLanguageHrefMap();

  return (
    <>
      <LandingPage
        initialLanguage={language}
        homeHref={localizedPath(language)}
        languageLinks={languageLinks}
        servicesRouteLanguage={language}
      />
      <Script id={`home-structured-data-${language}`} type="application/ld+json">
        {JSON.stringify(buildLocalizedHomePageStructuredData(language))}
      </Script>
    </>
  );
}
