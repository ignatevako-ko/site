import type { Metadata } from "next";
import Script from "next/script";
import { PrimeTourCasePage, primeTourCaseCopy } from "@/components/prime-tour-case-page";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo";

const language = "ru";
const copy = primeTourCaseCopy[language];

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "ROAS 3790%: €252 превратили в €9 560 за 2 недели | Do.Marketing",
    description:
      "Кейс Do.Marketing для Prime Tour: за 2 недели рекламы 8 купленных туров, €252 расходов, €31 за купленный тур, €9 560 выручки, 91 лид и ROAS 3790%.",
    path: "/cases/prime-tour",
    keywords: [
      "Prime Tour кейс",
      "реклама туров Эстония",
      "Meta Ads для турагентства",
      "ROAS 3790",
      "реклама авторских туров",
    ],
  }),
  alternates: {
    canonical: "/cases/prime-tour",
    languages: {
      ru: "/cases/prime-tour",
      en: "/en/cases/prime-tour",
      et: "/et/cases/prime-tour",
      "x-default": "/cases/prime-tour",
    },
  },
  openGraph: {
    title: "ROAS 3790%: €252 превратили в €9 560 за 2 недели",
    description:
      "Как Do.Marketing продвигал авторские и чартерные туры Prime Tour через Meta Ads для русско- и эстоноязычной аудитории.",
    url: absoluteUrl("/cases/prime-tour"),
    siteName: "Do.Marketing",
    images: [
      {
        url: absoluteUrl("/images/client-logos/prime-tour.png"),
        width: 1200,
        height: 630,
        alt: "Prime Tour",
      },
    ],
    locale: "ru_EE",
    type: "article",
  },
};

function PrimeTourStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Do.Marketing", item: absoluteUrl("/ru") },
          { "@type": "ListItem", position: 2, name: "Кейсы", item: absoluteUrl("/cases") },
          { "@type": "ListItem", position: 3, name: "Prime Tour", item: absoluteUrl("/cases/prime-tour") },
        ],
      },
      {
        "@type": "Article",
        headline: copy.title,
        description: copy.lead,
        image: absoluteUrl("/images/client-logos/prime-tour.png"),
        inLanguage: "ru",
        about: ["Meta Ads", "travel marketing", "tour agency", "ROAS", "Estonia"],
        provider: { "@type": "Organization", name: "Do.Marketing", url: "https://domarketing.ee" },
        mainEntityOfPage: absoluteUrl("/cases/prime-tour"),
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
    <Script id="prime-tour-case-structured-data-ru" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  );
}

export default function PrimeTourRoute() {
  return (
    <>
      <PrimeTourCasePage language={language} />
      <PrimeTourStructuredData />
    </>
  );
}
