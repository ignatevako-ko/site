import type { Metadata } from "next";
import Script from "next/script";
import { MetaAdsPage } from "@/components/meta-ads-page";

export const metadata: Metadata = {
  title: "Meta Ads Tallinn | Реклама Facebook и Instagram в Эстонии | Do.Marketing",
  description:
    "Настройка и ведение Meta Ads в Tallinn и по всей Эстонии: Facebook Ads, Instagram Ads, креативы, аудитории, оптимизация и рост заявок для бизнеса.",
  keywords: [
    "Meta Ads Tallinn",
    "Facebook Ads Tallinn",
    "Instagram Ads Estonia",
    "таргетированная реклама Таллинн",
  ],
  alternates: {
    canonical: "/meta-ads",
  },
  openGraph: {
    title: "Meta Ads Tallinn | Do.Marketing",
    description:
      "Meta Ads для бизнеса в Таллинне и Эстонии: стратегия, запуск, ведение и оптимизация рекламы Facebook и Instagram.",
    url: "https://domarketing.ee/meta-ads",
    siteName: "Do.Marketing",
    type: "website",
  },
};

const metaAdsStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://domarketing.ee/meta-ads#service",
      name: "Meta Ads management in Tallinn",
      serviceType: "Meta Ads advertising",
      areaServed: ["Tallinn", "Estonia"],
      provider: {
        "@id": "https://domarketing.ee/#organization",
      },
      url: "https://domarketing.ee/meta-ads",
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: "549",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://domarketing.ee/meta-ads#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Подходит ли Meta Ads для локального бизнеса в Таллинне?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Да. Для салонов, образования, услуг, e-commerce и локальных проектов Meta Ads хорошо работает, если правильно собрать оффер, гео, языки и креативы под аудиторию Эстонии.",
          },
        },
        {
          "@type": "Question",
          name: "Сколько стоит ведение рекламы Meta Ads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Базовая стоимость ведения начинается от 549 евро. Финальная цена зависит от объема кампаний, числа сегментов, количества креативов и темпа тестирования.",
          },
        },
      ],
    },
  ],
};

export default function MetaAdsRoute() {
  return (
    <>
      <MetaAdsPage />
      <Script id="meta-ads-structured-data" type="application/ld+json">
        {JSON.stringify(metaAdsStructuredData)}
      </Script>
    </>
  );
}
