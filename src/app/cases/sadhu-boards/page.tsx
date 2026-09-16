import type { Metadata } from "next";
import { SadhuBoardsArticle } from "@/components/cases/sadhu-boards-article";
import { sadhuBoardsContent } from "@/data/cases/sadhu-boards";
import { absoluteUrl, buildCaseStructuredData } from "@/lib/seo";

const casePath = "/cases/sadhu-boards";
const pageUrl = absoluteUrl(casePath);
const ogImage = "/images/og/cases/sadhu-boards.jpg";
const publishedAt = "2026-08-19";

/** Единственный источник FAQ — data-файл, чтобы разметка совпадала с текстом на странице. */
const faqItems = sadhuBoardsContent.ru.faq.items;

const title = "Кейс Sadhu Boards: цена лида ниже в 15 раз | Do.Marketing";
const description =
  "Кейс Do.Marketing для магазина досок садху Sadhu Boards: цена заявки снижена в 15 раз, 300–500 заявок и 30–50 покупок в месяц при бюджете €750.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "кейс Sadhu Boards",
    "реклама нишевого товара",
    "как снизить цену лида в Meta Ads",
    "доска садху реклама",
    "оптимизация рекламы по покупкам",
    "лидогенерация для интернет-магазина",
    "Do.Marketing кейсы",
  ],
  alternates: {
    canonical: casePath,
  },
  openGraph: {
    title: "Кейс Sadhu Boards: цена лида ниже в 15 раз",
    description:
      "300–500 заявок и 30–50 покупок в месяц при бюджете €750 на нишевый товар в Молдове.",
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
        alt: "Кейс Do.Marketing: цена лида для Sadhu Boards снижена в 15 раз",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Кейс Sadhu Boards: цена лида ниже в 15 раз | Do.Marketing",
    description:
      "300–500 заявок и 30–50 покупок в месяц при бюджете €750 на нишевый товар в Молдове.",
    images: [absoluteUrl(ogImage)],
  },
};

const structuredData = buildCaseStructuredData({
  path: casePath,
  headline: "Кейс Sadhu Boards: цена лида ниже в 15 раз",
  description:
    "Как Do.Marketing перестроил рекламу нишевого товара: сегментация по осведомленности аудитории, 300–500 заявок и 30–50 покупок в месяц при бюджете €750.",
  breadcrumbName: "Sadhu Boards: цена лида ниже в 15 раз",
  datePublished: publishedAt,
  image: ogImage,
  areaServed: "Moldova",
  about: [
    { name: "Реклама в Meta Ads", sameAs: "https://en.wikipedia.org/wiki/Meta_Platforms" },
    { name: "E-commerce", sameAs: "https://en.wikipedia.org/wiki/E-commerce" },
    { name: "Cost per action", sameAs: "https://en.wikipedia.org/wiki/Cost_per_action" },
    { name: "Молдова", sameAs: "https://en.wikipedia.org/wiki/Moldova" },
  ],
  mentions: [
    { name: "Sadhu Boards" },
    { name: "Facebook", sameAs: "https://en.wikipedia.org/wiki/Facebook" },
    { name: "Instagram", sameAs: "https://en.wikipedia.org/wiki/Instagram" },
  ],
  keywords: [
    "реклама нишевого товара",
    "снижение цены лида",
    "доска садху реклама",
    "лидогенерация e-commerce",
  ],
  faq: faqItems,
});

export default function SadhuBoardsCasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SadhuBoardsArticle />
    </>
  );
}
