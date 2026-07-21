import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { PrimeTourCasePage, primeTourCaseCopy } from "@/components/prime-tour-case-page";
import type { Language } from "@/data/site-content";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo";

const localizedLanguages = ["en", "et"] as const satisfies readonly Language[];

const seoByLanguage: Record<(typeof localizedLanguages)[number], { title: string; description: string; keywords: string[] }> = {
  en: {
    title: "3790% ROAS for Prime Tour: 11 Bookings | Do.Marketing",
    description:
      "Do.Marketing case study for Prime Tour, a custom and charter tour agency: 11 bookings on a €390 budget, 3790% ROAS and €31.53 cost per booking for Georgia.",
    keywords: [
      "Prime Tour case study",
      "travel agency advertising Estonia",
      "Meta Ads for tour agency",
      "3790 ROAS",
      "custom tour advertising",
    ],
  },
  et: {
    title: "3790% ROAS Prime Tourile: 11 broneeringut | Do.Marketing",
    description:
      "Do.Marketingu töö Prime Tourile, autori- ja tšarterreiside agentuurile: 11 broneeringut €390 eelarvega, 3790% ROAS ja €31.53 broneeringu hind Gruusia suunal.",
    keywords: [
      "Prime Tour töö",
      "reisibüroo reklaam Eesti",
      "Meta Ads reisibüroole",
      "3790 ROAS",
      "autorireiside reklaam",
    ],
  },
};

function resolveLanguage(value: string): (typeof localizedLanguages)[number] {
  if (value !== "en" && value !== "et") {
    notFound();
  }

  return value;
}

export function generateStaticParams() {
  return localizedLanguages.map((language) => ({ language }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ language: string }>;
}): Promise<Metadata> {
  const { language: rawLanguage } = await params;
  const language = resolveLanguage(rawLanguage);
  const seo = seoByLanguage[language];
  const path = `/${language}/cases/prime-tour`;

  return {
    ...buildPageMetadata({
      title: seo.title,
      description: seo.description,
      path,
      keywords: seo.keywords,
      locale: language === "en" ? "en_EE" : "et_EE",
    }),
    alternates: {
      canonical: path,
      languages: {
        ru: "/cases/prime-tour",
        en: "/en/cases/prime-tour",
        et: "/et/cases/prime-tour",
        "x-default": "/cases/prime-tour",
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: absoluteUrl(path),
      siteName: "Do.Marketing",
      images: [
        {
          url: absoluteUrl("/images/client-logos/prime-tour.png"),
          width: 1200,
          height: 630,
          alt: "Prime Tour",
        },
      ],
      locale: language === "en" ? "en_EE" : "et_EE",
      type: "article",
    },
  };
}

function PrimeTourStructuredData({ language }: { language: (typeof localizedLanguages)[number] }) {
  const copy = primeTourCaseCopy[language];
  const path = `/${language}/cases/prime-tour`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Do.Marketing", item: absoluteUrl(`/${language}`) },
          { "@type": "ListItem", position: 2, name: language === "en" ? "Cases" : "Tööd", item: absoluteUrl(`/${language}#cases`) },
          { "@type": "ListItem", position: 3, name: "Prime Tour", item: absoluteUrl(path) },
        ],
      },
      {
        "@type": "Article",
        headline: copy.title,
        description: copy.lead,
        image: absoluteUrl("/images/client-logos/prime-tour.png"),
        inLanguage: language,
        about: ["Meta Ads", "travel marketing", "tour agency", "ROAS", "Estonia"],
        provider: { "@type": "Organization", name: "Do.Marketing", url: "https://domarketing.ee" },
        mainEntityOfPage: absoluteUrl(path),
      },
      {
        "@type": "FAQPage",
        mainEntity: copy.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <Script id={`prime-tour-case-structured-data-${language}`} type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  );
}

export default async function LocalizedPrimeTourRoute({
  params,
}: {
  params: Promise<{ language: string }>;
}) {
  const { language: rawLanguage } = await params;
  const language = resolveLanguage(rawLanguage);

  return (
    <>
      <PrimeTourCasePage language={language} />
      <PrimeTourStructuredData language={language} />
    </>
  );
}
