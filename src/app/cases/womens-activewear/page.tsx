import type { Metadata } from "next";
import { WomensActivewearArticle } from "@/components/cases/womens-activewear-article";
import { womensActivewearContent } from "@/data/cases/womens-activewear";
import { absoluteUrl, buildCaseStructuredData } from "@/lib/seo";

const casePath = "/cases/womens-activewear";
const pageUrl = absoluteUrl(casePath);
const ogImage = "/images/og/cases/womens-activewear.jpg";
const publishedAt = "2026-08-19";

/** Единственный источник FAQ — data-файл, чтобы разметка совпадала с текстом на странице. */
const faqItems = womensActivewearContent.ru.faq.items;

const title = "Кейс: ROAS 15 в Black Friday, магазин одежды | Do.Marketing";
const description =
  "Кейс Do.Marketing: интернет-магазин женской спортивной одежды заработал $13 571 при бюджете $1 179 в Meta Ads, ROAS 15 и покупатель за $10 в Black Friday.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "реклама интернет-магазина одежды",
    "кейс Meta Ads для fashion e-commerce",
    "реклама на Black Friday для интернет-магазина",
    "ROAS 15",
    "динамический ретаргетинг каталога товаров",
    "стоимость покупателя в интернет-магазине",
    "агентство Meta Ads Таллинн",
    "Do.Marketing кейсы",
  ],
  alternates: {
    canonical: casePath,
  },
  openGraph: {
    title: "ROAS 15 в Black Friday на женской спортивной одежде",
    description:
      "$311 рекламного бюджета превратились в $4 690 продаж за 3 дня распродажи, покупатель обошелся в $10.",
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
        alt: "Кейс Do.Marketing: ROAS 15 в Black Friday для интернет-магазина женской спортивной одежды",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ROAS 15 в Black Friday на женской спортивной одежде | Do.Marketing",
    description:
      "$1 179 рекламного бюджета принесли $13 571 выручки, а в дни распродажи покупатель стоил $10.",
    images: [absoluteUrl(ogImage)],
  },
};

const structuredData = buildCaseStructuredData({
  path: casePath,
  headline: "Кейс: ROAS 15 в Black Friday на женской спортивной одежде",
  description:
    "Как Do.Marketing подготовил интернет-магазин женской спортивной одежды к Черной пятнице: $13 571 выручки при бюджете $1 179, ROAS 15 и покупатель за $10 в дни распродажи.",
  breadcrumbName: "ROAS 15 в Black Friday на женской спортивной одежде",
  datePublished: publishedAt,
  image: ogImage,
  about: [
    { name: "Реклама в Meta Ads", sameAs: "https://en.wikipedia.org/wiki/Meta_Platforms" },
    { name: "E-commerce", sameAs: "https://en.wikipedia.org/wiki/E-commerce" },
    {
      name: "Женская спортивная одежда",
      sameAs: "https://en.wikipedia.org/wiki/Sportswear_(activewear)",
    },
    { name: "Black Friday", sameAs: "https://en.wikipedia.org/wiki/Black_Friday_(shopping)" },
    { name: "Return on ad spend (ROAS)" },
  ],
  mentions: [
    { name: "Facebook", sameAs: "https://en.wikipedia.org/wiki/Facebook" },
    { name: "Instagram", sameAs: "https://en.wikipedia.org/wiki/Instagram" },
    { name: "Таллинн", sameAs: "https://en.wikipedia.org/wiki/Tallinn" },
  ],
  keywords: [
    "реклама интернет-магазина одежды",
    "реклама на Black Friday",
    "ROAS 15",
    "Meta Ads для e-commerce",
  ],
  faq: faqItems,
});

export default function WomensActivewearCasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <WomensActivewearArticle />
    </>
  );
}
