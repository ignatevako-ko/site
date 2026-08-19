import type { Metadata } from "next";
import { ProfftehArticle } from "@/components/cases/proffteh-article";

const pageUrl = "https://domarketing.ee/cases/proffteh";

const faqItems = [
  {
    question: "Сколько заявок получил Proffteh и по какой цене?",
    answer:
      "751 заявка за 8 кампаний с апреля по сентябрь 2026 при рекламном бюджете €1 113. Средняя цена заявки — €1,48, лучшая — €0,56 на курсах бармана, самая дорогая — €3,92 в первой тестовой кампании.",
  },
  {
    question: "Какой ROAS и ROMI в этом кейсе?",
    answer:
      "При стоимости курса €2 400 и консервативной конверсии из заявки в оплату 3% выручка составляет €52 800, ROAS ≈4 700%, ROMI ≈4 600%. При конверсии 5% — около €88 800 выручки и ROAS ≈8 000%.",
  },
  {
    question: "Сколько стоит привлечь одного ученика на курс за €2 400?",
    answer:
      "При конверсии из заявки в оплату 3% привлечение одного ученика стоит около €49 — примерно 2% от стоимости курса. При конверсии 5% стоимость ученика падает до €30.",
  },
  {
    question: "Почему заявки на курс за €2 400 стоят меньше €2?",
    answer:
      "Работают вместе лид-формы Meta вместо перехода на сайт, отдельная кампания и отдельный оффер на каждое направление и сильный мотив аудитории — возможность пройти обучение без оплаты при отсутствии работы.",
  },
  {
    question: "Как быстро снижается цена заявки на повторяющихся потоках?",
    answer:
      "По курсу повара цена заявки упала с €3,92 в апреле до €1,09 в июне и €0,82 в сентябре — на 79% за пять месяцев работы.",
  },
];

export const metadata: Metadata = {
  title: "Кейс Proffteh: 751 заявка на курсы по €1,48 | Do.Marketing",
  description:
    "Кейс Do.Marketing для учебного центра Proffteh в Таллинне: 751 заявка на курсы по €1,48 за €1 113 бюджета и ROAS около 4 700% при чеке €2 400.",
  keywords: [
    "кейс Proffteh",
    "реклама курсов",
    "лидогенерация обучение",
    "Meta Ads для учебного центра",
    "набор на курсы Таллинн",
    "ROAS реклама курсов",
    "Do.Marketing кейсы",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Кейс Proffteh: 751 заявка на курсы по €1,48",
    description:
      "8 кампаний на 5 направлений, 751 заявка за €1 113 бюджета и ROAS около 4 700% при стоимости курса €2 400.",
    url: pageUrl,
    siteName: "Do.Marketing",
    locale: "ru_EE",
    type: "article",
    images: [
      {
        url: "https://domarketing.ee/images/cases/proffteh/creative-marketing-neon.png",
        width: 1080,
        height: 1920,
        alt: "Креатив Proffteh для набора на курс digital-маркетинга",
      },
    ],
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
          name: "Proffteh: 751 заявка на курсы по €1,48",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Кейс Proffteh: 751 заявка на профессиональные курсы по €1,48",
      description:
        "Как Do.Marketing выстроил набор на 5 направлений профессионального обучения: 8 кампаний, 751 заявка, средняя цена лида €1,48 и ROAS около 4 700%.",
      inLanguage: "ru",
      about: [
        "lead generation",
        "professional courses",
        "Meta Ads",
        "education marketing",
        "cost per lead",
      ],
      provider: { "@type": "Organization", name: "Do.Marketing", url: "https://domarketing.ee" },
      mainEntityOfPage: pageUrl,
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

export default function ProfftehCasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ProfftehArticle />
    </>
  );
}
