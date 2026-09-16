import type { Metadata } from "next";
import { IluproffArticle } from "@/components/cases/iluproff-article";
import { iluproffContent } from "@/data/cases/iluproff";
import { absoluteUrl, buildCaseStructuredData } from "@/lib/seo";

const casePath = "/cases/iluproff";
const pageUrl = absoluteUrl(casePath);
const ogImage = "/images/og/cases/iluproff.jpg";
const publishedAt = "2026-08-19";

/** Единственный источник FAQ — data-файл, чтобы разметка совпадала с текстом на странице. */
const faqItems = iluproffContent.ru.faq.items;

const title = "ILUPROFF: 34 клиента на SMAS-лифтинг, €17,50 | Do.Marketing";
const description =
  "Кейс Do.Marketing для салона красоты ILUPROFF в Эстонии: 34 клиента на SMAS-лифтинг по €17,50 при бюджете €600 и чеке процедуры €125–537.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "реклама салона красоты в Эстонии",
    "продвижение косметологии Таллинн",
    "кейс ILUPROFF",
    "реклама SMAS-лифтинга",
    "привлечение клиентов в салон красоты",
    "двуязычная реклама на русском и эстонском",
    "Do.Marketing кейсы",
  ],
  alternates: {
    canonical: casePath,
  },
  openGraph: {
    title: "Кейс ILUPROFF: 34 клиента на SMAS-лифтинг по €17,50",
    description:
      "Тест форматов, языков и сегментов дал 34 клиента при бюджете €600 на процедуру стоимостью €125–537.",
    url: pageUrl,
    siteName: "Do.Marketing",
    locale: "ru_EE",
    alternateLocale: ["en_EE", "et_EE"],
    type: "article",
    images: [
      {
        url: absoluteUrl(ogImage),
        width: 1200,
        height: 630,
        alt: "Кейс Do.Marketing: 34 клиента на SMAS-лифтинг для салона красоты ILUPROFF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ILUPROFF: 34 клиента на SMAS-лифтинг по €17,50 | Do.Marketing",
    description:
      "Тест форматов, языков и сегментов дал 34 клиента при бюджете €600 на процедуру стоимостью €125–537.",
    images: [absoluteUrl(ogImage)],
  },
};

const structuredData = buildCaseStructuredData({
  path: casePath,
  headline: "Кейс ILUPROFF: 34 клиента на SMAS-лифтинг по €17,50",
  description:
    "Как Do.Marketing нашел рабочую связку для салона красоты ILUPROFF в Эстонии: тест форматов, языков и сегментов, 34 клиента при бюджете €600 и стоимость клиента €17,50.",
  breadcrumbName: "ILUPROFF: 34 клиента на SMAS-лифтинг по €17,50",
  datePublished: publishedAt,
  image: ogImage,
  areaServed: "Estonia",
  about: [
    { name: "Реклама в Meta Ads", sameAs: "https://en.wikipedia.org/wiki/Meta_Platforms" },
    { name: "Салон красоты", sameAs: "https://en.wikipedia.org/wiki/Beauty_salon" },
    {
      name: "SMAS-лифтинг",
      sameAs: "https://en.wikipedia.org/wiki/High-intensity_focused_ultrasound",
    },
    { name: "Эстония", sameAs: "https://en.wikipedia.org/wiki/Estonia" },
  ],
  mentions: [
    { name: "ILUPROFF" },
    { name: "Facebook", sameAs: "https://en.wikipedia.org/wiki/Facebook" },
    { name: "Instagram", sameAs: "https://en.wikipedia.org/wiki/Instagram" },
    { name: "Таллинн", sameAs: "https://en.wikipedia.org/wiki/Tallinn" },
  ],
  keywords: [
    "реклама салона красоты Эстония",
    "реклама SMAS-лифтинга",
    "продвижение косметологии Таллинн",
  ],
  faq: faqItems,
});

export default function IluproffCasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <IluproffArticle />
    </>
  );
}
