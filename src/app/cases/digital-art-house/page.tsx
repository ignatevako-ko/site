import type { Metadata } from "next";
import { DigitalArtHouseArticle } from "@/components/cases/digital-art-house-article";
import { digitalArtHouseContent } from "@/data/cases/digital-art-house";
import { absoluteUrl, siteUrl } from "@/lib/seo";

const casePath = "/cases/digital-art-house";
const pageUrl = absoluteUrl(casePath);
const ogImage = "/images/cases/digital-art-house/michelangelo-en-01.webp";
const publishedAt = "2026-09-14";
const modifiedAt = "2026-09-16";
const faqItems = digitalArtHouseContent.ru.faq.items;

const title = "Кейс Digital Art House: ROAS 7,19 в Meta Ads | Do.Marketing";
const description =
  "Кейс Digital Art House в Риге: Meta Ads для 5+ событий в активном месяце, лучший ROAS 7,19, до 39 покупок на кампанию и учёт офлайн-посетителей.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "реклама мероприятий",
    "реклама выставки",
    "продвижение культурных событий",
    "Meta Ads для мероприятий",
    "Google Ads для мероприятий",
    "Digital Art House Riga",
    "реклама событий Рига",
    "ROAS рекламы мероприятий",
    "performance marketing для ивентов",
    "Do.Marketing кейсы",
  ],
  alternates: {
    canonical: casePath,
  },
  openGraph: {
    title: "Digital Art House: ROAS 7,19 в Meta Ads для мероприятий",
    description:
      "Как Meta Ads продаёт выставки, спектакли, art dinner и музыкальные вечера — до 39 покупок на кампанию и с учётом билетов, оплаченных на месте.",
    url: pageUrl,
    siteName: "Do.Marketing",
    locale: "ru_EE",
    alternateLocale: ["en_EE", "et_EE"],
    type: "article",
    images: [
      {
        url: absoluteUrl(ogImage),
        width: 941,
        height: 1672,
        alt: "Кейс Do.Marketing: реклама выставки Michelangelo для Digital Art House в Риге",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Art House: ROAS 7,19 в Meta Ads",
    description:
      "Meta Ads для 5+ мероприятий в активном месяце. До 39 покупок на кампанию, а фактический ROAS выше кабинетного из-за офлайн-покупок.",
    images: [absoluteUrl(ogImage)],
  },
};

const imageUrl = absoluteUrl(ogImage);
const graph: Array<Record<string, unknown>> = [
  {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description,
    inLanguage: "ru",
    availableLanguage: ["ru", "en", "et"],
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    primaryImageOfPage: { "@id": `${pageUrl}#image` },
    isPartOf: { "@id": `${siteUrl}/#organization` },
  },
  {
    "@type": "ImageObject",
    "@id": `${pageUrl}#image`,
    url: imageUrl,
    contentUrl: imageUrl,
    width: 941,
    height: 1672,
    caption: "Рекламный креатив выставки Michelangelo для Digital Art House",
  },
  {
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: "Кейс Digital Art House: ROAS 7,19 в Meta Ads для мероприятий в Риге",
    description,
    url: pageUrl,
    inLanguage: "ru",
    datePublished: publishedAt,
    dateModified: modifiedAt,
    image: { "@id": `${pageUrl}#image` },
    author: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` },
    isPartOf: { "@id": `${pageUrl}#webpage` },
    mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
    articleSection: "Кейсы",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "main section:first-of-type p", "#numbers"],
    },
    about: [
      { "@type": "Thing", name: "Event marketing" },
      { "@type": "Thing", name: "Meta Ads" },
      { "@type": "Thing", name: "Google Ads" },
      { "@type": "Thing", name: "Return on ad spend (ROAS)" },
      { "@type": "Thing", name: "Cultural events" },
    ],
    mentions: [
      {
        "@type": "Organization",
        name: "Digital Art House",
        url: "https://www.digitalarthouse.eu/",
        sameAs: "https://lv.linkedin.com/company/digitalarthouse",
      },
      { "@type": "City", name: "Riga" },
      { "@type": "Country", name: "Latvia" },
    ],
    spatialCoverage: { "@type": "Place", name: "Riga, Latvia" },
    keywords:
      "реклама мероприятий, Meta Ads для событий, Google Ads для выставок, Digital Art House Riga, ROAS рекламы мероприятий",
  },
  {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Do.Marketing", item: absoluteUrl("/ru") },
      { "@type": "ListItem", position: 2, name: "Кейсы", item: absoluteUrl("/cases") },
      { "@type": "ListItem", position: 3, name: "Digital Art House", item: pageUrl },
    ],
  },
  {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    inLanguage: "ru",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  },
];

const structuredData = { "@context": "https://schema.org", "@graph": graph };

export default function DigitalArtHouseCasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <DigitalArtHouseArticle />
    </>
  );
}
