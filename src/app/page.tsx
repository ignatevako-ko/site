import type { Metadata } from "next";
import Script from "next/script";
import { LandingPage } from "@/components/landing-page";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Meta Ads и Google Ads агентство в Tallinn | Do.Marketing",
  description:
    "Do.Marketing — агентство рекламы в Таллинне, которое ведет Meta Ads и Google Ads для бизнеса в Эстонии: стратегия, креативы, кейсы и рост заявок.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Meta Ads и Google Ads агентство в Tallinn | Do.Marketing",
    description:
      "Локальное агентство в Таллинне для Meta Ads и Google Ads: реальные кейсы, креативы и реклама с фокусом на окупаемость.",
    url: "https://domarketing.ee",
    siteName: "Do.Marketing",
    type: "website",
  },
};

const homePageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://domarketing.ee/#webpage",
      url: "https://domarketing.ee",
      name: "Meta Ads и Google Ads агентство в Tallinn | Do.Marketing",
      description:
        "Агентство рекламы в Таллинне для бизнеса в Эстонии: Meta Ads, Google Ads, креативы, кейсы и рост заявок.",
      inLanguage: "ru",
    },
    {
      "@type": "Service",
      serviceType: "Performance marketing",
      provider: {
        "@id": "https://domarketing.ee/#organization",
      },
      areaServed: ["Tallinn", "Estonia"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Advertising services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Meta Ads management",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Google Ads management",
            },
          },
        ],
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <LandingPage />
      <Script id="home-structured-data" type="application/ld+json">
        {JSON.stringify(homePageStructuredData)}
      </Script>
    </>
  );
}
