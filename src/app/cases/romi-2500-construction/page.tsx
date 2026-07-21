import type { Metadata } from "next";
import { RomiArticle } from "@/components/cases/romi-article";

export const metadata: Metadata = {
  title: "Кейс: ROMI 2500% в строительных работах | Do.Marketing",
  description:
    "Кейс Do.Marketing для компании комплексного ремонта: ROMI 2500% по прибыли, стоимость клиента €450, выручка с клиента €90 000 и стабильные заявки даже в январе.",
  keywords: [
    "кейс ремонт строительные работы",
    "ROMI 2500",
    "реклама комплексного ремонта",
    "лидогенерация строительство",
    "маркетинг ремонтных услуг",
    "Do.Marketing кейсы",
  ],
  alternates: {
    canonical: "https://domarketing.ee/cases/romi-2500-construction",
  },
  openGraph: {
    title: "Кейс: ROMI 2500% в строительных работах",
    description:
      "Как системное привлечение клиентов помогло компании комплексного ремонта выйти из эконом-сегмента в элитный и получать заявки даже в низкий сезон.",
    url: "https://domarketing.ee/cases/romi-2500-construction",
    siteName: "Do.Marketing",
    locale: "ru_EE",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Do.Marketing", item: "https://domarketing.ee/ru" },
        { "@type": "ListItem", position: 2, name: "Кейсы", item: "https://domarketing.ee/cases" },
        {
          "@type": "ListItem",
          position: 3,
          name: "ROMI 2500% в строительных работах",
          item: "https://domarketing.ee/cases/romi-2500-construction",
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Кейс: ROMI 2500% в строительных работах",
      description:
        "Как Do.Marketing выстроил системное привлечение клиентов для компании комплексного ремонта.",
      inLanguage: "ru",
      about: ["lead generation", "renovation services", "construction marketing", "premium segment"],
      provider: { "@type": "Organization", name: "Do.Marketing", url: "https://domarketing.ee" },
      mainEntityOfPage: "https://domarketing.ee/cases/romi-2500-construction",
    },
  ],
};

export default function ConstructionRomiCasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <RomiArticle />
    </>
  );
}
