import type { Metadata } from "next";
import { EduDoArticle } from "@/components/cases/edu-do-article";

const faqItems = [
  {
    question: "Какой результат получил EDU.DO?",
    answer:
      "Проект стабильно получает от 370 заявок каждый месяц. Максимальный результат - 561 заявка за месяц по средней цене €3.4 за лид.",
  },
  {
    question: "Какая средняя стоимость лида сейчас?",
    answer:
      "Средняя стоимость лида держится в районе €4. Самая низкая цена одного лида за время работы была €1.8.",
  },
  {
    question: "Что было до работы с Do.Marketing?",
    answer:
      "До начала сотрудничества стоимость лида у клиента была от €20 до €60. После перестройки рекламы лидогенерация стала стабильной и предсказуемой.",
  },
];

export const metadata: Metadata = {
  title: "Кейс EDU.DO: 561 заявка за месяц по €3.4 | Do.Marketing",
  description:
    "Кейс Do.Marketing для спортивной школы EDU.DO в Таллинне: 3 года работы, от 370 заявок ежемесячно, максимум 561 заявка за месяц и средняя цена лида около €4.",
  keywords: [
    "кейс EDU.DO",
    "реклама спортивной школы",
    "реклама детских секций",
    "лидогенерация Tallinn",
    "Meta Ads для спортивной школы",
    "Do.Marketing кейсы",
  ],
  alternates: {
    canonical: "https://domarketing.ee/cases/edu-do",
  },
  openGraph: {
    title: "Кейс EDU.DO: 561 заявка за месяц по €3.4",
    description:
      "Как Do.Marketing 3 года стабильно привлекает заявки для спортивной школы EDU.DO в Таллинне.",
    url: "https://domarketing.ee/cases/edu-do",
    siteName: "Do.Marketing",
    images: [
      {
        url: "https://domarketing.ee/images/cases/edu-do/creative-karate.png",
        width: 1080,
        height: 1920,
        alt: "Креатив EDU.DO для рекламы детского карате",
      },
    ],
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
        { "@type": "ListItem", position: 3, name: "EDU.DO", item: "https://domarketing.ee/cases/edu-do" },
      ],
    },
    {
      "@type": "Article",
      headline: "Кейс EDU.DO: 561 заявка за месяц по €3.4",
      description:
        "Как Do.Marketing выстроил стабильную лидогенерацию для спортивной школы EDU.DO в Таллинне.",
      image: "https://domarketing.ee/images/cases/edu-do/creative-karate.png",
      inLanguage: "ru",
      about: ["Meta Ads", "lead generation", "children sports programs", "performance marketing Estonia"],
      provider: { "@type": "Organization", name: "Do.Marketing", url: "https://domarketing.ee" },
      mainEntityOfPage: "https://domarketing.ee/cases/edu-do",
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

export default function EduDoCasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <EduDoArticle />
    </>
  );
}
