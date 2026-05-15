import type { Metadata } from "next";
import Script from "next/script";
import { MetaAdsPage } from "@/components/meta-ads-page";
import { buildPageMetadata, buildServiceStructuredData } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Meta Ads Tallinn | Реклама Facebook и Instagram в Эстонии | Do.Marketing",
  description:
    "Настройка и ведение Meta Ads в Tallinn и по всей Эстонии: Facebook Ads, Instagram Ads, креативы, аудитории, оптимизация и рост заявок для бизнеса.",
  path: "/meta-ads",
  keywords: [
    "Meta Ads Tallinn",
    "Facebook Ads Tallinn",
    "Instagram Ads Estonia",
    "таргетированная реклама Таллинн",
  ],
});

const metaAdsStructuredData = buildServiceStructuredData({
  path: "/meta-ads",
  name: "Meta Ads management in Tallinn",
  description:
    "Настройка и ведение рекламы Meta Ads для бизнеса в Таллинне и по всей Эстонии.",
  serviceType: "Meta Ads advertising",
  price: "549",
  faq: [
    {
      question: "Подходит ли Meta Ads для локального бизнеса в Таллинне?",
      answer:
        "Да. Для салонов, образования, услуг, e-commerce и локальных проектов Meta Ads хорошо работает, если правильно собрать оффер, гео, языки и креативы под аудиторию Эстонии.",
    },
    {
      question: "Сколько стоит ведение рекламы Meta Ads?",
      answer:
        "Базовая стоимость ведения начинается от 549€. Финальная цена зависит от объема кампаний, числа сегментов, количества креативов и темпа тестирования.",
    },
    {
      question: "Вы делаете только настройку или и креативы тоже?",
      answer:
        "Мы можем взять и стратегию, и настройку кабинета, и тексты, и креативы, и ТЗ на съемку. Это позволяет быстрее находить рабочие связки и не терять темп.",
    },
  ],
});

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
