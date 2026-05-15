import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAdsPage } from "@/components/google-ads-page";
import { buildPageMetadata, buildServiceStructuredData } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Google Ads Tallinn | Контекстная реклама в Эстонии | Do.Marketing",
  description:
    "Настройка и ведение Google Ads в Tallinn и по всей Эстонии: поиск, КМС, структура кампаний, оптимизация ставок и рост обращений для бизнеса.",
  path: "/google-ads",
  keywords: [
    "Google Ads Tallinn",
    "контекстная реклама Таллинн",
    "Google Ads Estonia",
    "PPC Tallinn",
  ],
});

const googleAdsStructuredData = buildServiceStructuredData({
  path: "/google-ads",
  name: "Google Ads management in Tallinn",
  description:
    "Настройка и ведение контекстной рекламы Google Ads для бизнеса в Таллинне и по всей Эстонии.",
  serviceType: "Google Ads advertising",
  price: "500",
  faq: [
    {
      question: "Можно ли точно таргетировать аудиторию в Google Ads?",
      answer:
        "Да. В Google Ads можно работать не только по ключевым словам, но и по дополнительным параметрам, чтобы сужать аудиторию под конкретную задачу бизнеса.",
    },
  ],
});

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
