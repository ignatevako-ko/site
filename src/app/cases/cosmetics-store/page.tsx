import type { Metadata } from "next";
import { CosmeticsStoreArticle } from "@/components/cases/cosmetics-store-article";
import { cosmeticsStoreContent } from "@/data/cases/cosmetics-store";
import { absoluteUrl, buildCaseStructuredData } from "@/lib/seo";

const casePath = "/cases/cosmetics-store";
const pageUrl = absoluteUrl(casePath);
const ogImage = "/images/og/cases/cosmetics-store.jpg";
const publishedAt = "2026-08-19";

/** Единственный источник FAQ — data-файл, чтобы разметка совпадала с текстом на странице. */
const faqItems = cosmeticsStoreContent.ru.faq.items;

const title = "Кейс: ROAS 30 в магазине косметики в Эстонии | Do.Marketing";
const description =
  "Кейс Do.Marketing для интернет-магазина косметики в Эстонии: 114 продаж по €2,43 и €8 387 выручки при рекламном бюджете €277 в Meta Ads.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "реклама интернет-магазина косметики",
    "продвижение косметики в Эстонии",
    "Meta Ads для e-commerce Таллинн",
    "ROAS 30 кейс",
    "стоимость продажи в интернет-магазине",
    "реклама уходовой косметики",
    "Do.Marketing кейсы",
  ],
  alternates: {
    canonical: casePath,
  },
  openGraph: {
    title: "ROAS 30 в интернет-магазине косметики в Эстонии",
    description:
      "Одна акция со скидкой 20% на линейку Medic8: 114 продаж по €2,43 и €8 387 выручки при бюджете €277.",
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
        alt: "Кейс Do.Marketing: ROAS 30 для интернет-магазина косметики в Эстонии",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ROAS 30 в интернет-магазине косметики в Эстонии | Do.Marketing",
    description:
      "Одна акция со скидкой 20% на линейку Medic8: 114 продаж по €2,43 и €8 387 выручки при бюджете €277.",
    images: [absoluteUrl(ogImage)],
  },
};

const structuredData = buildCaseStructuredData({
  path: casePath,
  headline: "Кейс: ROAS 30 на одной акции в интернет-магазине косметики в Эстонии",
  description:
    "Как Do.Marketing собрал кампанию вокруг одного оффера для эстонского интернет-магазина косметики: 114 продаж по €2,43, средний чек €73,57 и ROAS 30,23 при бюджете €277.",
  breadcrumbName: "ROAS 30 в интернет-магазине косметики",
  datePublished: publishedAt,
  image: ogImage,
  areaServed: "Estonia",
  about: [
    { name: "Реклама в Meta Ads", sameAs: "https://en.wikipedia.org/wiki/Meta_Platforms" },
    { name: "E-commerce", sameAs: "https://en.wikipedia.org/wiki/E-commerce" },
    { name: "Косметика", sameAs: "https://en.wikipedia.org/wiki/Cosmetics" },
    { name: "Эстония", sameAs: "https://en.wikipedia.org/wiki/Estonia" },
    { name: "Return on ad spend (ROAS)" },
  ],
  mentions: [
    { name: "Facebook", sameAs: "https://en.wikipedia.org/wiki/Facebook" },
    { name: "Instagram", sameAs: "https://en.wikipedia.org/wiki/Instagram" },
    { name: "Таллинн", sameAs: "https://en.wikipedia.org/wiki/Tallinn" },
    { name: "Medic8" },
  ],
  keywords: [
    "реклама интернет-магазина косметики",
    "Meta Ads Эстония",
    "ROAS 30",
    "продвижение косметики Таллинн",
  ],
  faq: faqItems,
});

export default function CosmeticsStoreCasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CosmeticsStoreArticle />
    </>
  );
}
