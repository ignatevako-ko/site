import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { BrandLogo } from "@/components/brand-logo";

const caseFacts = [
  { label: "Клиент", value: "EDU.DO, детские спортивные секции" },
  { label: "Ниша", value: "Lead generation / sports education" },
  { label: "География", value: "Эстония, русскоязычная и локальная аудитория" },
  { label: "Период работы", value: "больше 2 лет" },
  { label: "Канал", value: "performance-реклама и креативы для заявок" },
  { label: "Результат", value: "350-580 заявок ежемесячно" },
  { label: "Стоимость лида", value: "€5.7 в среднем" },
  { label: "До работы", value: "около €42 за лид" },
];

const resultStats = [
  { value: "350-580", label: "заявок в месяц" },
  { value: "€5.7", label: "средняя цена лида" },
  { value: "€42", label: "стоимость лида до работы" },
  { value: "2+ года", label: "стабильной работы с проектом" },
];

const strategySteps = [
  "Уточнили, какие группы родителей дают более качественные заявки и быстрее принимают решение.",
  "Собрали рекламную коммуникацию вокруг понятной пользы: спорт, дисциплина, развитие ребенка и удобство для родителей.",
  "Разделили кампании по аудиториям, языкам и гипотезам, чтобы не смешивать разные типы спроса.",
  "Регулярно обновляли креативы и тексты, чтобы удерживать стабильную стоимость заявки в сезонных колебаниях.",
  "Оптимизировали кампании по фактической цене лида, а не по поверхностным метрикам охвата.",
];

const creativeAssets = [
  {
    src: "/images/creative-examples/stories/story-01.png",
    alt: "Пример вертикального рекламного креатива для Meta Ads",
  },
  {
    src: "/images/creative-examples/stories/story-02.png",
    alt: "Пример сторис-креатива для лидогенерации",
  },
  {
    src: "/images/creative-examples/stories/story-03.png",
    alt: "Пример рекламного макета для детской аудитории и родителей",
  },
  {
    src: "/images/creative-examples/kreo-video-posters/video-19.webp",
    alt: "Постер видео креатива для спортивной секции",
  },
];

const faqItems = [
  {
    question: "Какой результат получил EDU.DO от рекламы?",
    answer:
      "EDU.DO получает 350-580 заявок ежемесячно по средней цене €5.7 за лид. До начала работы с Do.Marketing один лид стоил около €42.",
  },
  {
    question: "Почему кейс важен для локального бизнеса в Эстонии?",
    answer:
      "Кейс показывает, что локальный проект с регулярным набором клиентов может получать стабильный поток заявок, если рекламная структура, оффер и креативы адаптированы под реальные сегменты аудитории.",
  },
  {
    question: "Можно ли повторить такую механику для другой детской секции?",
    answer:
      "Да, но цифры будут зависеть от города, расписания, цены услуги, сезонности, посадочной страницы и скорости обработки заявок. Поэтому сначала оценивается экономика проекта и спрос.",
  },
];

export const metadata: Metadata = {
  title: "Кейс EDU.DO: 350-580 заявок в месяц по €5.7 | Do.Marketing",
  description:
    "Кейс Do.Marketing: как EDU.DO получает 350-580 заявок ежемесячно по €5.7 за лид вместо €42 до начала работы.",
  keywords: [
    "кейс EDU.DO",
    "детские спортивные секции реклама",
    "lead generation Estonia",
    "Meta Ads для детских секций",
    "Do.Marketing кейсы",
    "performance marketing Tallinn",
  ],
  alternates: {
    canonical: "https://domarketing.ee/cases/edu-do",
  },
  openGraph: {
    title: "Кейс EDU.DO: 350-580 заявок в месяц по €5.7",
    description:
      "Как Do.Marketing снизил стоимость заявки для детских спортивных секций с €42 до €5.7 и выстроил стабильный поток лидов.",
    url: "https://domarketing.ee/cases/edu-do",
    siteName: "Do.Marketing",
    locale: "ru_EE",
    type: "article",
  },
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[13px] font-semibold uppercase tracking-[0.28em] text-amber-200">
      {children}
    </p>
  );
}

function JsonLd() {
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
        headline: "Кейс EDU.DO: 350-580 заявок в месяц по €5.7",
        description:
          "Как Do.Marketing выстроил стабильную лидогенерацию для детских спортивных секций EDU.DO.",
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function EduDoCasePrototypePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070914] text-white">
      <JsonLd />
      <style>{`
        @page {
          size: 1440px 2200px;
          margin: 0;
        }

        @media print {
          html,
          body {
            background: #070914 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .case-pdf-block,
          .case-pdf-card {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          .hero-creative-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          }

          .creative-approval-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          }

          .hero-creative-item {
            margin-top: 0 !important;
          }

          .case-site-nav {
            display: flex !important;
          }
        }
      `}</style>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-7rem] top-[-7rem] h-[24rem] w-[24rem] rounded-full bg-amber-300/18 blur-3xl" />
        <div className="absolute right-[-7rem] top-24 h-[24rem] w-[24rem] rounded-full bg-cyan-300/12 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-violet-300/12 blur-3xl" />
        <div className="grid-overlay absolute inset-0 opacity-35" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-8 lg:px-10">
        <header className="sticky top-0 z-50 -mx-2 px-0 pt-0">
          <div className="glass-shell mx-auto flex w-full max-w-7xl items-center justify-between gap-6 rounded-full px-5 py-4 lg:px-8">
            <Link href="/ru" aria-label="Do.Marketing home">
              <BrandLogo compact />
            </Link>

            <nav className="case-site-nav hidden items-center gap-8 md:flex">
              <Link href="/ru#cases" className="text-sm text-slate-300 transition hover:text-violet-300">
                Кейсы
              </Link>
              <Link href="/ru#services" className="text-sm text-slate-300 transition hover:text-violet-300">
                Услуги
              </Link>
              <Link href="/ru#about" className="text-sm text-slate-300 transition hover:text-violet-300">
                О нас
              </Link>
              <Link href="/ru#testimonials" className="text-sm text-slate-300 transition hover:text-violet-300">
                Отзывы
              </Link>
              <Link href="/ru#contacts" className="text-sm text-slate-300 transition hover:text-violet-300">
                Контакты
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden text-right sm:block">
                <a
                  href="tel:+37257843293"
                  className="block text-[14px] uppercase tracking-[0.24em] text-slate-400 transition hover:text-violet-300"
                >
                  +37257843293
                </a>
                <a
                  href="mailto:ceo@domarketing.ee"
                  className="mt-1 block text-[13.5px] text-slate-500 transition hover:text-violet-300"
                >
                  ceo@domarketing.ee
                </a>
              </div>

              <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur" aria-label="Language switcher" role="group">
                <Link className="rounded-full px-3 py-2 text-xs font-semibold tracking-[0.24em] text-slate-300 transition hover:text-white" href="/en">
                  EN
                </Link>
                <Link className="rounded-full px-3 py-2 text-xs font-semibold tracking-[0.24em] text-slate-300 transition hover:text-white" href="/et">
                  ET
                </Link>
                <Link className="rounded-full bg-violet-400 px-3 py-2 text-xs font-semibold tracking-[0.24em] text-slate-950 transition" aria-current="page" href="/ru">
                  RU
                </Link>
              </div>
            </div>
          </div>
        </header>

        <div className="pt-8">
          <Link
            href="/cases"
            className="inline-flex min-h-13 items-center justify-center rounded-full bg-amber-200 px-7 text-base font-semibold text-slate-950 shadow-[0_18px_50px_rgba(251,191,36,0.2)] transition hover:bg-amber-100"
          >
            Вернуться назад
          </Link>
        </div>

        <section className="grid gap-10 py-12 lg:grid-cols-[1.03fr_0.97fr] lg:items-end lg:py-16">
          <div className="space-y-7">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-amber-200/30 bg-amber-200/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.24em] text-amber-100">
                Реальный кейс
              </span>
              <span className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-[12px] font-medium text-slate-300">
                Lead generation / sports education
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-[44px] font-light leading-[0.95] tracking-[-0.055em] text-white sm:text-[62px] lg:text-[76px]">
                Как EDU.DO получает 350-580 заявок в месяц на детские спортивные секции
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                До начала работы заявка стоила около €42. После перестройки
                рекламной системы EDU.DO больше 2 лет получает стабильный поток
                обращений по средней цене €5.7 за лид.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/ru#contacts"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-amber-200 px-7 text-base font-semibold text-slate-950 transition hover:bg-amber-100"
              >
                Хочу также
              </Link>
              <Link
                href="#mechanics"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-base font-semibold text-white transition hover:border-amber-200/60 hover:bg-white/10"
              >
                Как это сделали
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-4">
              {resultStats.map((item) => (
                <div key={item.label} className="rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-4">
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-sm leading-5 text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[34rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_90px_rgba(2,6,23,0.38)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.22),transparent_34%),linear-gradient(160deg,rgba(34,211,238,0.12),rgba(7,9,20,0.15))]" />
            <div className="relative flex items-center justify-between">
              <div className="rounded-2xl bg-white p-4">
                <Image
                  src="/images/client-logos/edu-do.png"
                  alt="EDU.DO logo"
                  width={118}
                  height={54}
                  className="h-auto w-[7.25rem]"
                  priority
                />
              </div>
              <div className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-200">
                CPL -86%
              </div>
            </div>

            <div className="hero-creative-grid relative mt-8 grid grid-cols-2 gap-4">
              {creativeAssets.map((item, index) => (
                <div
                  key={item.src}
                  className={`hero-creative-item relative aspect-[9/16] overflow-hidden rounded-[1.25rem] border border-white/12 bg-white/5 ${
                    index % 2 === 1 ? "mt-10" : ""
                  }`}
                >
                  <Image src={item.src} alt={item.alt} fill sizes="220px" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-pdf-block grid gap-5 border-y border-white/10 py-8 md:grid-cols-4">
          {caseFacts.map((item) => (
            <div key={item.label} className="space-y-2">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
              <p className="text-base leading-6 text-slate-100">{item.value}</p>
            </div>
          ))}
        </section>

        <section className="case-pdf-block grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <SectionLabel>Главное в кейсе</SectionLabel>
            <h2 className="text-[34px] font-light leading-tight tracking-[-0.04em] text-white sm:text-[46px]">
              Реклама стала не разовой акцией, а системой набора
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              EDU.DO - пример локального проекта, где реклама работает не как разовая
              акция, а как постоянная система набора заявок. После перестройки
              рекламной логики средняя стоимость лида снизилась с €42 до €5.7.
            </p>
            <p>
              В основе результата не один удачный креатив, а связка из оффера,
              сегментации, регулярного обновления объявлений и оптимизации по
              реальной стоимости обращения.
            </p>
            <Link
              href="/ru#contacts"
              className="inline-flex min-h-13 items-center justify-center rounded-full bg-white px-6 text-base font-semibold text-slate-950 transition hover:bg-amber-100"
            >
              Хочу также
            </Link>
          </div>
        </section>

        <section className="case-pdf-block grid gap-6 py-4 lg:grid-cols-3">
          <article className="case-pdf-card rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-6">
            <SectionLabel>Задача</SectionLabel>
            <h3 className="mt-4 text-2xl font-light text-white">Снизить стоимость заявки и масштабировать набор</h3>
            <p className="mt-4 text-base leading-7 text-slate-400">
              До начала работы лид стоил около €42. Для детских секций такая цена
              ограничивает рост, особенно когда набор зависит от сезона, расписания
              и доверия родителей.
            </p>
          </article>
          <article className="case-pdf-card rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-6">
            <SectionLabel>Подход</SectionLabel>
            <h3 className="mt-4 text-2xl font-light text-white">Связать оффер, аудитории и креативы</h3>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Кампании строились вокруг понятной пользы для семьи: развитие ребенка,
              регулярные занятия, удобная запись и ясный следующий шаг после клика.
            </p>
          </article>
          <article className="case-pdf-card rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-6">
            <SectionLabel>Результат</SectionLabel>
            <h3 className="mt-4 text-2xl font-light text-white">350-580 заявок ежемесячно</h3>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Проект больше 2 лет получает стабильный поток лидов по средней цене
              €5.7, что примерно в 7 раз ниже стартовой стоимости заявки.
            </p>
          </article>
        </section>

        <section id="mechanics" className="case-pdf-block grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <SectionLabel>Что сделали</SectionLabel>
            <h2 className="text-[34px] font-light leading-tight tracking-[-0.04em] text-white sm:text-[46px]">
              Рабочая механика кампаний
            </h2>
          </div>
          <div className="space-y-3">
            {strategySteps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-[1.25rem] border border-white/10 bg-slate-950/55 p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-200 text-sm font-semibold text-slate-950">
                  {index + 1}
                </span>
                <p className="text-base leading-7 text-slate-300">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="case-pdf-block py-10">
          <div className="max-w-3xl space-y-4">
            <SectionLabel>Креативы</SectionLabel>
            <h2 className="text-[34px] font-light leading-tight tracking-[-0.04em] text-white sm:text-[46px]">
              Креативы, которые помогают заявке случиться
            </h2>
            <p className="text-base leading-7 text-slate-400">
              Визуалы помогают быстро объяснить предложение родителям и довести
              человека до понятного действия: оставить заявку на пробное занятие
              или уточнить расписание.
            </p>
          </div>
          <div className="creative-approval-grid mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {creativeAssets.map((item) => (
              <div key={`gallery-${item.src}`} className="relative aspect-[9/16] overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/5">
                <Image src={item.src} alt={item.alt} fill sizes="260px" className="object-cover" />
              </div>
            ))}
          </div>
        </section>

        <section className="case-pdf-block grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-[34px] font-light leading-tight tracking-[-0.04em] text-white sm:text-[46px]">
              Вопросы перед запуском похожей кампании
            </h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <article key={item.question} className="case-pdf-card rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-6">
                <h3 className="text-xl font-semibold text-white">{item.question}</h3>
                <p className="mt-3 text-base leading-7 text-slate-400">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-pdf-block mb-10 rounded-[1.75rem] border border-amber-200/20 bg-amber-200/10 p-7 sm:p-9">
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-3">
              <SectionLabel>Следующий шаг</SectionLabel>
              <h2 className="text-[32px] font-light tracking-[-0.04em] text-white">
                Хотите стабильный поток заявок в своей нише?
              </h2>
              <p className="max-w-3xl text-base leading-7 text-slate-300">
                Покажите нам ваш продукт, географию и текущую цену заявки. Мы
                посмотрим экономику проекта и предложим реалистичный следующий шаг.
              </p>
            </div>
            <Link href="/ru#contacts" className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 text-base font-semibold text-slate-950 transition hover:bg-amber-100">
              Хочу также
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
