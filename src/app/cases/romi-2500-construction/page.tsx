import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { BrandLogo } from "@/components/brand-logo";
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

const caseFacts = [
  { label: "Ниша", value: "Комплексный ремонт жилых и коммерческих объектов" },
  { label: "Период работы", value: "5,5 лет" },
  { label: "Клиент", value: "Компания полного цикла в ремонтно-строительных работах" },
  { label: "Услуги клиента", value: "Дизайн-проект, ремонт, комплектация, мебель" },
  { label: "Сезонность", value: "Январь перестал быть месяцем без заявок" },
];

const resultStats = [
  { value: "2500%", label: "ROMI по прибыли" },
  { value: "€450", label: "стоимость привлеченного клиента" },
  { value: "€90 000", label: "выручка с 1 клиента" },
  { value: "200x", label: "выручка к стоимости клиента" },
];

const strategySteps = [
  "Упаковали комплексный ремонт не как набор работ, а как понятный путь клиента: от дизайн-проекта до готового объекта с материалами и мебелью.",
  "Развели коммуникацию для разных уровней спроса: дизайн-проект, комплексный ремонт, комплектация материалами и производство мебели.",
  "Стабилизировали привлечение в периоды, когда рынок обычно проседает, чтобы команда продаж не зависела только от высокого сезона.",
  "Постепенно повышали качество заявок и средний чек, чтобы компания могла выйти из эконом-сегмента в элитный сегмент.",
  "Поддерживали регулярную оптимизацию рекламы, офферов и посадочных связок, чтобы привлечение оставалось системным на длинной дистанции.",
];

const creativeVideos = [
  {
    src: "/videos/cases/romi-2500-construction/creative-01-klever-reels.mp4",
    title: "Reels-креатив для комплексного ремонта",
  },
  {
    src: "/videos/cases/romi-2500-construction/creative-02.mp4",
    title: "Видео-креатив для заявки на ремонт",
  },
  {
    src: "/videos/cases/romi-2500-construction/creative-03.mp4",
    title: "Видео-креатив для дизайн-проекта",
  },
  {
    src: "/videos/cases/romi-2500-construction/creative-04.mp4",
    title: "Креатив для премиального ремонта",
  },
  {
    src: "/videos/cases/romi-2500-construction/creative-05.mp4",
    title: "Креатив для комплексной услуги",
  },
  {
    src: "/videos/cases/romi-2500-construction/creative-07.mp4",
    title: "Видео-креатив для сезонного спроса",
  },
];

const segmentShift = [
  { label: "Старт", value: "эконом-сегмент", description: "Больше чувствительности к цене и меньше пространства для роста среднего чека." },
  { label: "Система", value: "стабильные заявки", description: "Регулярный поток клиентов на дизайн-проект и комплексный ремонт даже в низкий сезон." },
  { label: "Итог", value: "элитный сегмент", description: "За 5 лет компания подняла средний чек и перешла к более дорогим объектам." },
];

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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function ConstructionRomiCasePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070914] text-white">
      <JsonLd />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-[-8rem] h-[25rem] w-[25rem] rounded-full bg-violet-400/14 blur-3xl" />
        <div className="absolute right-[-7rem] top-24 h-[24rem] w-[24rem] rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-violet-300/10 blur-3xl" />
        <div className="grid-overlay absolute inset-0 opacity-35" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-8 lg:px-10">
        <header className="sticky top-0 z-50 -mx-2 px-0 pt-0">
          <div className="glass-shell mx-auto flex w-full max-w-7xl items-center justify-between gap-6 rounded-full px-5 py-4 lg:px-8">
            <Link href="/ru" aria-label="Do.Marketing home">
              <BrandLogo compact />
            </Link>

            <Link
              href="/ru"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white transition hover:border-violet-300/60 hover:bg-white/10"
            >
              Вернуться на главную
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

        <section className="grid gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:py-16">
          <div className="space-y-7">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-violet-300/30 bg-violet-400/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.24em] text-violet-100">
                Реальный кейс
              </span>
              <span className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-[12px] font-medium text-slate-300">
                Renovation & construction
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-[44px] font-light leading-[0.95] tracking-[-0.055em] text-white sm:text-[62px] lg:text-[76px]">
                ROMI 2500% в строительных работах
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                За 5,5 лет сотрудничества компания комплексного ремонта перешла
                из эконом-сегмента в элитный сегмент. Системное привлечение
                клиентов помогло каждый год увеличивать средний чек и получать
                заявки даже в январе, который раньше был пустым месяцем.
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
                href="#mechanics"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-base font-semibold text-white transition hover:border-violet-300/60 hover:bg-white/10"
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

          <div className="glass-shell relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-[12px] uppercase tracking-[0.28em] text-violet-200/90">Unit economics</p>
                  <p className="mt-3 text-xl font-semibold text-white">Путь клиента за 5,5 лет</p>
                </div>
                <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  ROMI 2500%
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {segmentShift.map((item) => (
                  <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                    <p className="mt-2 text-base font-semibold leading-snug text-white">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.5rem] border border-white/8 bg-slate-950/50 p-5">
                <div className="inline-flex rounded-full border border-violet-300/22 bg-violet-300/10 px-3.5 py-1 text-[13px] font-medium text-violet-100">
                  Экономика на клиента
                </div>
                <p className="mt-4 text-[32px] font-light leading-none tracking-[-0.05em] text-white sm:text-[40px]">
                  €450 CAC → €90 000
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Около 200x по выручке. ROMI 2500% — от прибыли после себестоимости.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 border-y border-white/10 py-8 sm:grid-cols-2 lg:grid-cols-5">
          {caseFacts.map((item) => (
            <div key={item.label} className="space-y-2">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
              <p className="text-base leading-6 text-slate-100">{item.value}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <SectionLabel>Главное в кейсе</SectionLabel>
            <h2 className="text-[34px] font-light leading-tight tracking-[-0.04em] text-white sm:text-[46px]">
              Продажи дорогого ремонта стали предсказуемой системой
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              Клиент работает в сложной нише комплексного ремонта, где решение
              о покупке дорогое, длинное и связано с высоким уровнем доверия.
              Поэтому задача была не просто получить заявки, а создать поток
              клиентов, который выдерживает сезонность и помогает расти в цене.
            </p>
            <p>
              За время сотрудничества компания каждый год увеличивала средний
              чек на работы. Через 5 лет она вышла из эконом-сегмента в элитный
              сегмент, потому что привлечение клиентов стало стабильным, а не
              зависимым от случайного спроса.
            </p>
            <Link
              href="/ru#contacts"
              className="inline-flex min-h-13 items-center justify-center rounded-full bg-white px-6 text-base font-semibold text-slate-950 transition hover:bg-violet-100"
            >
              Хочу также
            </Link>
          </div>
        </section>

        <section className="grid gap-6 py-4 lg:grid-cols-3">
          <article className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-6">
            <SectionLabel>Задача</SectionLabel>
            <h3 className="mt-4 text-2xl font-light text-white">Заполнить воронку качественными клиентами</h3>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Нужно было привлекать людей не только на дизайн-проект, но и на
              комплексный ремонт с высоким чеком, где один клиент может принести
              около €90 000 выручки.
            </p>
          </article>
          <article className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-6">
            <SectionLabel>Подход</SectionLabel>
            <h3 className="mt-4 text-2xl font-light text-white">Системная реклама вместо сезонных всплесков</h3>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Кампании поддерживали спрос круглый год: отдельно работали с
              интересом к дизайн-проекту, комплексному ремонту, материалам и
              мебели для жилых и коммерческих объектов.
            </p>
          </article>
          <article className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-6">
            <SectionLabel>Результат</SectionLabel>
            <h3 className="mt-4 text-2xl font-light text-white">Январь перестал быть пустым месяцем</h3>
            <p className="mt-4 text-base leading-7 text-slate-400">
              До сотрудничества январь проходил без заявок. Во время работы
              приходило по 3-5 клиентов на дизайн-проект и по 1 клиенту на
              комплексный ремонт.
            </p>
          </article>
        </section>

        <section id="mechanics" className="grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <SectionLabel>Что сделали</SectionLabel>
            <h2 className="text-[34px] font-light leading-tight tracking-[-0.04em] text-white sm:text-[46px]">
              Как построили рост на длинной дистанции
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
            <h2 className="text-[34px] font-light leading-tight tracking-[-0.04em] text-white sm:text-[46px]">
              Видео, которые помогали упаковать дорогой ремонт
            </h2>
            <p className="text-base leading-7 text-slate-400">
              Для такой ниши креатив должен быстро показать уровень работ,
              доверие к подрядчику и понятный следующий шаг: оставить заявку
              на дизайн-проект или комплексный ремонт.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

        <section className="mb-10 rounded-[1.75rem] border border-violet-300/20 bg-violet-400/10 p-7 sm:p-9">
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-3">
              <SectionLabel>Следующий шаг</SectionLabel>
              <h2 className="text-[32px] font-light tracking-[-0.04em] text-white">
                Хотите привлекать клиентов на дорогие услуги системно?
              </h2>
              <p className="max-w-3xl text-base leading-7 text-slate-300">
                Покажите нам ваш средний чек, географию, сезонность и текущую
                стоимость заявки. Мы оценим экономику и предложим реалистичный
                план привлечения.
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
