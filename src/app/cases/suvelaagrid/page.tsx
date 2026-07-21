import type { Metadata } from "next";
import { SuvelaagridArticle } from "@/components/cases/suvelaagrid-article";

const faqItems = [
  {
    question: "Какой результат получил Suvelaagrid?",
    answer:
      "В сезон набора проект получает от 565 лидов в месяц. В отдельном срезе с 12.05 по 16.05 получили 328 лидов по €2.7 за лид.",
  },
  {
    question: "Почему использовали и лид-форму, и регистрацию на сайте?",
    answer:
      "Лид-форма давала быстрый объем заявок для менеджера, а регистрация на сайте помогала проверять более осознанный спрос и считать цену завершенной регистрации.",
  },
  {
    question: "Какие лагеря продвигались?",
    answer:
      "Реклама работала на набор детей в дневной городской лагерь и выездные детские лагеря в Эстонии для русско- и эстоноязычной аудитории.",
  },
];

export const metadata: Metadata = {
  title: "Кейс Suvelaagrid: от 565 лидов в месяц по €2.7 | Do.Marketing",
  description:
    "Кейс Do.Marketing для детских лагерей Suvelaagrid в Эстонии: сезонный набор с апреля до середины августа, лид-формы, регистрация на сайте и от 565 лидов в месяц по €2.7.",
  keywords: [
    "кейс Suvelaagrid",
    "реклама детского лагеря",
    "реклама лагеря Эстония",
    "лидогенерация детские лагеря",
    "Meta Ads для детского лагеря",
    "Do.Marketing кейсы",
  ],
  alternates: {
    canonical: "https://domarketing.ee/cases/suvelaagrid",
  },
  openGraph: {
    title: "Кейс Suvelaagrid: от 565 лидов в месяц по €2.7",
    description:
      "Как Do.Marketing выстроил сезонный набор детей в городской и выездные лагеря Suvelaagrid в Эстонии.",
    url: "https://domarketing.ee/cases/suvelaagrid",
    siteName: "Do.Marketing",
    images: [
      {
        url: "https://domarketing.ee/images/cases/suvelaagrid/creative-day-camp-district-ru.jpeg",
        width: 720,
        height: 1280,
        alt: "Креатив для рекламы детского лагеря Suvelaagrid",
      },
    ],
    locale: "ru_EE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Кейс Suvelaagrid: от 565 лидов в месяц по €2.7",
    description:
      "Сезонный набор детей в городской и выездные лагеря через лид-формы и прямую регистрацию на сайте.",
    images: ["https://domarketing.ee/images/cases/suvelaagrid/creative-day-camp-district-ru.jpeg"],
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
        { "@type": "ListItem", position: 3, name: "Suvelaagrid", item: "https://domarketing.ee/cases/suvelaagrid" },
      ],
    },
    {
      "@type": "Article",
      headline: "Кейс Suvelaagrid: от 565 лидов в месяц по €2.7",
      description:
        "Как Do.Marketing выстроил сезонный поток заявок для детских лагерей Suvelaagrid в Эстонии.",
      image: "https://domarketing.ee/images/cases/suvelaagrid/creative-day-camp-district-ru.jpeg",
      inLanguage: "ru",
      about: ["Meta Ads", "lead generation", "children camps", "summer camps Estonia"],
      provider: { "@type": "Organization", name: "Do.Marketing", url: "https://domarketing.ee" },
      mainEntityOfPage: "https://domarketing.ee/cases/suvelaagrid",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function SuvelaagridCasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SuvelaagridArticle />
    </>
  );
}
