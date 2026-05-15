import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAdsPage } from "@/components/google-ads-page";

export const metadata: Metadata = {
  title: "Google Ads Tallinn | Контекстная реклама в Эстонии | Do.Marketing",
  description:
    "Настройка и ведение Google Ads в Tallinn и по всей Эстонии: поиск, КМС, структура кампаний, оптимизация ставок и рост обращений для бизнеса.",
  keywords: [
    "Google Ads Tallinn",
    "контекстная реклама Таллинн",
    "Google Ads Estonia",
    "PPC Tallinn",
  ],
  alternates: {
    canonical: "/google-ads",
  },
  openGraph: {
    title: "Google Ads Tallinn | Do.Marketing",
    description:
      "Контекстная реклама Google Ads для бизнеса в Таллинне и Эстонии: запуск, ведение, оптимизация и рост горячего спроса.",
    url: "https://domarketing.ee/google-ads",
    siteName: "Do.Marketing",
    type: "website",
  },
};

const googleAdsStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://domarketing.ee/google-ads#service",
      name: "Google Ads management in Tallinn",
      serviceType: "Google Ads advertising",
      areaServed: ["Tallinn", "Estonia"],
      provider: {
        "@id": "https://domarketing.ee/#organization",
      },
      url: "https://domarketing.ee/google-ads",
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: "500",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://domarketing.ee/google-ads#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Можно ли точно таргетировать аудиторию в Google Ads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. В Google Ads можно работать не только по ключевым словам, но и по дополнительным параметрам, чтобы сужать аудиторию под конкретную задачу бизнеса.",
          },
        },
      ],
    },
  ],
};

export default function GoogleAdsRoute() {
  return (
    <>
      <GoogleAdsPage />
      <Script id="google-ads-structured-data" type="application/ld+json">
        {JSON.stringify(googleAdsStructuredData)}
      </Script>
    </>
  );
}
