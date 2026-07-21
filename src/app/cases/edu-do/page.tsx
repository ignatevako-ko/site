import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { siteContent } from "@/data/site-content";

const footerContent = {
  ...siteContent.ru,
  footer: {
    ...siteContent.ru.footer,
    links: [
      { href: "/ru#cases", label: "Кейсы" },
      { href: "/ru#services", label: "Услуги" },
      { href: "/ru#about", label: "О нас" },
      { href: "/ru#contacts", label: "Контакты" },
    ],
  },
};

const resultStats = [
  { value: "370+", label: "заявок стабильно каждый месяц" },
  { value: "561", label: "максимум заявок за месяц" },
  { value: "€3.4", label: "цена лида в лучший месяц" },
  { value: "€4", label: "средняя цена лида сейчас" },
];

const heroStats = [
  ...resultStats,
  { value: "€1.8", label: "самая низкая цена лида" },
  { value: "€20-60", label: "стоимость лида до работы" },
];

const caseFacts = [
  { label: "Клиент", value: "EDU.DO, спортивная школа в Таллинне" },
  { label: "Направления", value: "карате, плавание, общая физическая подготовка" },
  { label: "Период", value: "3 года стабильной работы" },
  { label: "География", value: "Таллинн, Эстония" },
  { label: "Канал", value: "Meta Ads и креативы для лид-форм" },
  { label: "До нас", value: "€20-60 за лид" },
  { label: "Минимум", value: "€1.8 за лид" },
  { label: "Стабильный уровень", value: "от 370 заявок в месяц" },
];

const strategySteps = [
  "Разделили рекламу по направлениям: карате, плавание и ОФП для детей разного возраста.",
  "Собрали офферы вокруг понятного действия для родителей: записаться на первое бесплатное занятие.",
  "Регулярно обновляли креативы, чтобы удерживать цену заявки в сезонных колебаниях.",
  "Оптимизировали кампании по стоимости лида и фактическому объему заявок, а не по охватам.",
  "Масштабировали рабочие связки без резкого роста CPL, чтобы школа получала набор каждый месяц.",
];

const creativeImages = [
  {
    src: "/images/cases/edu-do/creative-karate.png",
    alt: "Рекламный сторис-креатив EDU.DO для набора детей на карате",
  },
  {
    src: "/images/cases/edu-do/creative-swimming.png",
    alt: "Рекламный сторис-креатив EDU.DO для набора детей на плавание",
  },
  {
    src: "/images/cases/edu-do/creative-ofp.png",
    alt: "Рекламный сторис-креатив EDU.DO для общей физической подготовки детей",
  },
];

const creativeVideos = [
  {
    src: "/videos/cases/edu-do/creative-video-01.m4v",
    title: "Видео-креатив для набора в спортивную школу",
  },
  {
    src: "/videos/cases/edu-do/creative-video-02.m4v",
    title: "Вертикальный креатив для лид-формы",
  },
  {
    src: "/videos/cases/edu-do/creative-video-03.m4v",
    title: "Видео для прогрева родителей перед заявкой",
  },
];

const proofImages = [
  {
    src: "/images/cases/edu-do/ads-dashboard-results.png",
    alt: "Скриншот рекламного кабинета EDU.DO с результатами кампаний",
    ratio: "aspect-[1908/282]",
  },
  {
    src: "/images/cases/edu-do/chat-561-leads.jpeg",
    alt: "Скрин переписки: 561 заявка за месяц по 3,4 евро за лид",
    ratio: "aspect-[1280/174]",
  },
  {
    src: "/images/cases/edu-do/chat-401-leads.jpeg",
    alt: "Скрин переписки: 401 заявка за месяц по 4,5 евро",
    ratio: "aspect-[1280/280]",
  },
  {
    src: "/images/cases/edu-do/chat-520-context.jpeg",
    alt: "Скрин переписки: обсуждение 520 лидов",
    ratio: "aspect-[1280/320]",
  },
  {
    src: "/images/cases/edu-do/chat-520-reaction.jpeg",
    alt: "Скрин переписки с реакцией клиента на 520 лидов",
    ratio: "aspect-[1280/674]",
  },
];

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

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[13px] font-semibold uppercase tracking-[0.28em] text-violet-300">
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function EduDoCasePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070914] text-white">
      <JsonLd />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-7rem] top-[-7rem] h-[24rem] w-[24rem] rounded-full bg-violet-400/14 blur-3xl" />
        <div className="absolute right-[-7rem] top-24 h-[24rem] w-[24rem] rounded-full bg-cyan-300/12 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-yellow-300/10 blur-3xl" />
        <div className="grid-overlay absolute inset-0 opacity-35" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-8 lg:px-10">
        <header className="sticky top-0 z-50 -mx-2 px-0 pt-0">
          <div className="glass-shell mx-auto flex w-full max-w-7xl items-center justify-between gap-2 rounded-full px-3 py-3 sm:gap-4 sm:px-5 lg:gap-6 lg:px-8 lg:py-4">
            <Link href="/ru" aria-label="Do.Marketing home" className="shrink-0">
              <Image
                src="/brand/logo-white-site-cropped.png"
                alt="Do.Marketing"
                width={165}
                height={55}
                priority
                className="block h-10 w-auto sm:h-12 lg:h-[3.375rem]"
                sizes="(max-width: 640px) 124px, 165px"
              />
            </Link>

            <Link
              href="/ru"
              aria-label="Вернуться на главную"
              title="Вернуться на главную"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-violet-300/60 hover:bg-white/10"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
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

              <div className="inline-flex shrink-0 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur" aria-label="Language switcher" role="group">
                <Link className="rounded-full px-2.5 py-2 text-xs font-semibold tracking-[0.12em] text-slate-300 transition hover:text-white sm:px-3 sm:tracking-[0.24em]" href="/en">
                  EN
                </Link>
                <Link className="rounded-full px-2.5 py-2 text-xs font-semibold tracking-[0.12em] text-slate-300 transition hover:text-white sm:px-3 sm:tracking-[0.24em]" href="/et">
                  ET
                </Link>
                <Link className="rounded-full bg-violet-400 px-2.5 py-2 text-xs font-semibold tracking-[0.12em] text-slate-950 transition sm:px-3 sm:tracking-[0.24em]" aria-current="page" href="/ru">
                  RU
                </Link>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-10 py-12 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:py-16">
          <div className="space-y-7">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-violet-300/30 bg-violet-400/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.24em] text-violet-100">
                Реальный кейс
              </span>
              <span className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-[12px] font-medium text-slate-300">
                Sports school / lead generation
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-[38px] font-light leading-[0.98] text-white sm:text-[56px] lg:text-[70px]">
                561 заявка за месяц для EDU.DO по €3.4 за лид
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                EDU.DO - спортивная школа в Таллинне с направлениями карате,
                плавания и общей физической подготовки. За 3 года работы мы
                выстроили стабильный поток заявок: от 370 лидов каждый месяц,
                средняя цена около €4, минимум - €1.8 за лид.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/ru#contacts"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-violet-400 px-7 text-base font-semibold text-slate-950 transition hover:bg-violet-300"
              >
                Хочу также
              </Link>
              <Link
                href="#proof"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-base font-semibold text-white transition hover:border-violet-300/60 hover:bg-white/10"
              >
                Смотреть доказательства
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6 shadow-[0_30px_90px_rgba(2,6,23,0.38)] sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.22),transparent_34%),linear-gradient(160deg,rgba(34,211,238,0.12),rgba(7,9,20,0.15))]" />
            <div className="relative flex flex-col gap-6">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-violet-200">
                    Цифры кейса
                  </p>
                  <h2 className="text-[28px] font-light leading-tight text-white sm:text-[34px]">
                    Ключевые показатели
                  </h2>
                </div>
                <div className="shrink-0 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-200">
                  CPL до -97%
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {heroStats.map((item) => (
                  <div
                    key={item.label}
                    className="flex min-h-[8.25rem] flex-col justify-between rounded-[1.1rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur"
                  >
                    <p className="text-[32px] font-semibold leading-none text-white">{item.value}</p>
                    <p className="text-sm leading-5 text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.1rem] border border-white/10 bg-slate-950/45 px-5 py-4">
                <p className="text-sm leading-6 text-slate-300">
                  Результат подтвержден скринами из рекламного кабинета и
                  перепиской с клиентом: 401, 520 и 561 заявка в месяц.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 border-y border-white/10 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {caseFacts.map((item) => (
            <div key={item.label} className="space-y-2">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
              <p className="text-base leading-6 text-slate-100">{item.value}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <SectionLabel>Главное</SectionLabel>
            <h2 className="text-[34px] font-light leading-tight text-white sm:text-[46px]">
              Реклама стала постоянной системой набора
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              До сотрудничества с Do.Marketing заявка для клиента стоила от €20
              до €60. Для регулярного набора в детские секции такая экономика
              сильно ограничивала масштабирование.
            </p>
            <p>
              Мы перестроили рекламные связки вокруг конкретных направлений
              школы и понятного оффера: первое бесплатное занятие. В результате
              проект 3 года стабильно получает заявки, а средняя стоимость лида
              держится около €4.
            </p>
          </div>
        </section>

        <section className="grid gap-6 py-4 lg:grid-cols-3">
          <article className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-6">
            <SectionLabel>Задача</SectionLabel>
            <h3 className="mt-4 text-2xl font-light text-white">Снизить цену заявки и не потерять объем</h3>
            <p className="mt-4 text-base leading-7 text-slate-400">
              EDU.DO нужны были регулярные заявки от родителей на спортивные
              занятия для детей: карате, плавание и ОФП.
            </p>
          </article>
          <article className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-6">
            <SectionLabel>Подход</SectionLabel>
            <h3 className="mt-4 text-2xl font-light text-white">Отдельные офферы под разные секции</h3>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Вместо одной общей рекламы мы показывали родителям конкретные
              сценарии: спорт вместо экранного времени, плавание рядом с домом,
              карате для дисциплины и уверенности.
            </p>
          </article>
          <article className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-6">
            <SectionLabel>Результат</SectionLabel>
            <h3 className="mt-4 text-2xl font-light text-white">370+ заявок стабильно каждый месяц</h3>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Лучший месяц дал 561 заявку по €3.4 за лид. В отдельные периоды
              цена заявки опускалась до €1.8.
            </p>
          </article>
        </section>

        <section id="mechanics" className="grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <SectionLabel>Что сделали</SectionLabel>
            <h2 className="text-[34px] font-light leading-tight text-white sm:text-[46px]">
              Лаконичная система для стабильного набора
            </h2>
          </div>
          <div className="space-y-3">
            {strategySteps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-[1.25rem] border border-white/10 bg-slate-950/55 p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-400 text-sm font-semibold text-slate-950">
                  {index + 1}
                </span>
                <p className="text-base leading-7 text-slate-300">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-3xl space-y-4">
            <SectionLabel>Креативы</SectionLabel>
            <h2 className="text-[34px] font-light leading-tight text-white sm:text-[46px]">
              Рекламные материалы для родителей
            </h2>
            <p className="text-base leading-7 text-slate-400">
              Креативы сразу объясняют направление, возраст, город и следующий
              шаг. Это снижает лишние клики и помогает получать заявки по
              стабильной цене.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {creativeImages.map((item) => (
              <figure
                key={`gallery-${item.src}`}
                className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.045]"
              >
                <div className="relative aspect-[9/16] bg-slate-950">
                  <Image src={item.src} alt={item.alt} fill sizes="360px" className="object-cover" />
                </div>
              </figure>
            ))}
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {creativeVideos.map((item) => (
              <figure
                key={item.src}
                className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.045]"
              >
                <div className="relative aspect-[9/16] bg-slate-950">
                  <video
                    className="h-full w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    muted
                    aria-label={item.title}
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                </div>
                <figcaption className="min-h-16 px-4 py-3 text-sm leading-5 text-slate-300">
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="proof" className="py-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-4">
              <SectionLabel>Доказательства</SectionLabel>
              <h2 className="text-[34px] font-light leading-tight text-white sm:text-[46px]">
                Скрины из кабинета и переписки
              </h2>
              <p className="text-base leading-7 text-slate-400">
                В кейсе оставлены реальные скрины: результаты кампаний, месяцы
                с 401, 520 и 561 заявкой, а также реакция клиента на рост объема.
              </p>
            </div>
            <div className="space-y-4">
              {proofImages.map((item) => (
                <div
                  key={item.src}
                  className={`relative ${item.ratio} overflow-hidden rounded-[1.1rem] border border-white/10 bg-white/[0.045]`}
                >
                  <Image src={item.src} alt={item.alt} fill sizes="760px" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-[34px] font-light leading-tight text-white sm:text-[46px]">
              Коротко о цифрах
            </h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-6">
                <h3 className="text-xl font-semibold text-white">{item.question}</h3>
                <p className="mt-3 text-base leading-7 text-slate-400">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-[1.75rem] border border-violet-300/20 bg-violet-400/10 p-7 sm:p-9">
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-3">
              <SectionLabel>Следующий шаг</SectionLabel>
              <h2 className="text-[32px] font-light text-white">
                Хотите такую же систему заявок для своей ниши?
              </h2>
              <p className="max-w-3xl text-base leading-7 text-slate-300">
                Покажите нам текущую цену заявки, географию и продукт. Мы
                оценим экономику и предложим реалистичный план роста.
              </p>
            </div>
            <Link href="/ru#contacts" className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 text-base font-semibold text-slate-950 transition hover:bg-violet-100">
              Обсудить проект
            </Link>
          </div>
        </section>
      </div>

      <SiteFooter content={footerContent} language="ru" />
    </main>
  );
}
