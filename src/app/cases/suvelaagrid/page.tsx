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
  { value: "565+", label: "лидов в месяц в сезон набора" },
  { value: "€2.7", label: "стоимость лида в сильном периоде" },
  { value: "56", label: "завершенных регистраций на сайте" },
  { value: "2", label: "воронки: лид-форма и сайт" },
];

const heroStats = [
  ...resultStats,
  { value: "328", label: "лидов за 5 дней теста" },
  { value: "€15.15", label: "лучшая цена регистрации" },
];

const caseFacts = [
  { label: "Клиент", value: "Suvelaagrid, детские лагеря в Эстонии" },
  { label: "Сезон", value: "с апреля до середины августа" },
  { label: "Продукт", value: "дневной городской лагерь и выездные лагеря" },
  { label: "География", value: "Эстония, русско- и эстоноязычная аудитория" },
  { label: "Канал", value: "Meta Ads: лид-формы и регистрация на сайте" },
  { label: "Лучший срез", value: "328 лидов по €2.7 за 5 дней" },
  { label: "Месячный объем", value: "от 565 лидов в месяц" },
  { label: "Регистрации", value: "до €15.15 за завершенную регистрацию" },
];

const strategySteps = [
  "Разделили кампании по языку и типу лагеря: отдельно городской дневной лагерь, отдельно выездные детские лагеря.",
  "Сначала вели весь трафик на лид-форму, чтобы быстро набирать заявки и дать менеджеру понятный поток обращений.",
  "После накопления данных часть бюджета оставили на лид-формах, а часть перевели на прямую регистрацию на сайте.",
  "Сравнивали не только цену лида, но и стоимость завершенной регистрации, чтобы видеть более качественный спрос.",
  "Масштабировали рабочие связки в самый активный сезон набора, не ломая стоимость заявки при росте объема.",
];

const creativeImages = [
  {
    type: "image",
    src: "/images/creative-examples/static/static-17-laager-est.png",
    alt: "Рекламный креатив для набора детей в лагерь Suvelaagrid",
  },
  {
    type: "image",
    src: "/images/cases/suvelaagrid/creative-day-camp-district-ru.jpeg",
    alt: "Рекламный креатив Suvelaagrid: дневной лагерь в вашем районе",
  },
  {
    type: "image",
    src: "/images/cases/suvelaagrid/creative-day-camp-tallinn-ru.jpeg",
    alt: "Рекламный креатив Suvelaagrid: дневной лагерь в Таллинне",
  },
  {
    type: "image",
    src: "/images/cases/suvelaagrid/creative-away-camp-et.jpeg",
    alt: "Рекламный креатив Suvelaagrid на эстонском языке: laager lastele alates 7. eluaastast",
  },
  {
    type: "video",
    src: "/videos/cases/suvelaagrid/creative-video-01.mov",
    alt: "Видео-креатив Suvelaagrid для рекламы детского лагеря",
  },
  {
    type: "video",
    src: "/videos/cases/suvelaagrid/creative-video-02.mov",
    alt: "Видео-креатив Suvelaagrid для набора детей в лагерь",
  },
  {
    type: "image",
    src: "/images/cases/suvelaagrid/camp-gallery-city.jpg",
    alt: "Фотография детей из городского лагеря Suvelaagrid",
  },
  {
    type: "image",
    src: "/images/cases/suvelaagrid/camp-gallery-away.jpg",
    alt: "Фотография детей из выездного лагеря Suvelaagrid",
  },
];

const proofImages = [
  {
    src: "/images/cases/suvelaagrid/chat-may-results.jpeg",
    alt: "Скрин переписки: 328 лидов по 2,7 евро за лид по лагерям с 12.05 по 16.05",
    ratio: "aspect-[1280/309]",
  },
  {
    src: "/images/cases/suvelaagrid/chat-june-july-results.jpeg",
    alt: "Скрин переписки: 360 лидов по 3,44 евро и 56 завершенных регистраций по 20,62 евро",
    ratio: "aspect-[1280/736]",
  },
  {
    src: "/images/cases/suvelaagrid/ads-est-city-camp-leads.png",
    alt: "Скрин рекламного кабинета: эстонская кампания городского лагеря, 237 лидов по 2,74 евро",
    ratio: "aspect-[1900/88]",
  },
  {
    src: "/images/cases/suvelaagrid/ads-ru-away-camp-leads.png",
    alt: "Скрин рекламного кабинета: русская кампания выездного лагеря, 184 лида по 3,26 евро",
    ratio: "aspect-[1894/94]",
  },
  {
    src: "/images/cases/suvelaagrid/ads-est-away-camp-leads.png",
    alt: "Скрин рекламного кабинета: эстонская кампания выездного лагеря, 144 лида по 2,08 евро",
    ratio: "aspect-[1902/90]",
  },
  {
    src: "/images/cases/suvelaagrid/ads-site-and-leads-results.png",
    alt: "Скрин рекламного кабинета: сайт-регистрации и лид-формы по городскому и выездному лагерю",
    ratio: "aspect-[1930/650]",
  },
];

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
        url: "https://domarketing.ee/images/creative-examples/static/static-17-laager-est.png",
        width: 1080,
        height: 1920,
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
    images: ["https://domarketing.ee/images/creative-examples/static/static-17-laager-est.png"],
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
          { "@type": "ListItem", position: 3, name: "Suvelaagrid", item: "https://domarketing.ee/cases/suvelaagrid" },
        ],
      },
      {
        "@type": "Article",
        headline: "Кейс Suvelaagrid: от 565 лидов в месяц по €2.7",
        description:
          "Как Do.Marketing выстроил сезонный поток заявок для детских лагерей Suvelaagrid в Эстонии.",
        image: "https://domarketing.ee/images/creative-examples/static/static-17-laager-est.png",
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function SuvelaagridCasePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070914] text-white">
      <JsonLd />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-[-8rem] h-[24rem] w-[24rem] rounded-full bg-violet-400/14 blur-3xl" />
        <div className="absolute right-[-7rem] top-24 h-[24rem] w-[24rem] rounded-full bg-emerald-300/12 blur-3xl" />
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
                Children camps / lead generation
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-[38px] font-light leading-[0.98] text-white sm:text-[56px] lg:text-[70px]">
                От 565 лидов в месяц для детских лагерей Suvelaagrid по €2.7 за лид
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                С апреля до середины августа ведем набор детей в дневной
                городской лагерь и выездные лагеря в Эстонии. Сначала весь
                трафик шел на лид-форму и заявки обрабатывал менеджер, затем
                протестировали смешанную систему: часть бюджета оставили на
                лид-формы, часть перевели на прямую регистрацию на сайте.
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(132,204,22,0.22),transparent_34%),linear-gradient(160deg,rgba(250,204,21,0.12),rgba(7,9,20,0.15))]" />
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
                  Сезонный набор
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
                  перепиской: лид-формы дали объем, а сайт показал стоимость
                  завершенных регистраций.
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
            <h2 className="text-[34px] font-light leading-tight tracking-[-0.04em] text-white sm:text-[46px]">
              Сезонный набор стал управляемой системой
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              В лагере короткое окно спроса: родители выбирают смены весной и
              летом, а места нужно заполнять быстро. Поэтому сначала мы сделали
              ставку на лид-формы, чтобы дать менеджеру стабильный поток
              контактов без лишних шагов для родителя.
            </p>
            <p>
              Затем подключили регистрацию на сайте и разделили бюджет между
              двумя сценариями. Так проект сохранил объем лидов и начал
              получать более горячие действия, где родитель сразу завершает
              регистрацию.
            </p>
          </div>
        </section>

        <section className="grid gap-6 py-4 lg:grid-cols-3">
          <article className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-6">
            <SectionLabel>Задача</SectionLabel>
            <h3 className="mt-4 text-2xl font-light text-white">Заполнить смены в короткий сезон</h3>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Suvelaagrid нужны были регулярные заявки от родителей на дневной
              городской лагерь и выездные лагеря в Эстонии.
            </p>
          </article>
          <article className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-6">
            <SectionLabel>Подход</SectionLabel>
            <h3 className="mt-4 text-2xl font-light text-white">Лид-формы плюс регистрация на сайте</h3>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Сначала весь трафик вели на лид-форму, затем разделили бюджет:
              часть оставили на быстрые заявки, часть перевели на сайт.
            </p>
          </article>
          <article className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-6">
            <SectionLabel>Результат</SectionLabel>
            <h3 className="mt-4 text-2xl font-light text-white">565+ лидов в месяц по €2.7</h3>
            <p className="mt-4 text-base leading-7 text-slate-400">
              В сильном периоде получили 328 лидов за 5 дней по €2.7 за лид.
              В месячном срезе сайт дал 56 завершенных регистраций.
            </p>
          </article>
        </section>

        <section id="mechanics" className="grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <SectionLabel>Что сделали</SectionLabel>
            <h2 className="text-[34px] font-light leading-tight tracking-[-0.04em] text-white sm:text-[46px]">
              Развели спрос по языку, формату лагеря и глубине готовности
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
              В коммуникации сразу показывали формат лагеря, возраст детей,
              понятную выгоду для родителей и следующий шаг: оставить заявку
              или забронировать место на сайте.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {creativeImages.map((item) => (
              <figure
                key={`gallery-${item.src}`}
                className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.045]"
              >
                <div className="relative aspect-[9/16] bg-slate-950">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      aria-label={item.alt}
                      className="h-full w-full object-cover"
                      controls
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <Image src={item.src} alt={item.alt} fill sizes="360px" className="object-cover" />
                  )}
                </div>
              </figure>
            ))}
          </div>
        </section>

        <section id="proof" className="py-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-4">
              <SectionLabel>Доказательства</SectionLabel>
              <h2 className="text-[34px] font-light leading-tight tracking-[-0.04em] text-white sm:text-[46px]">
                Скрины из кабинета и переписки
              </h2>
              <p className="text-base leading-7 text-slate-400">
                В кейсе оставлены реальные срезы по лид-формам и регистрациям:
                328 лидов по €2.7, 360 лидов по €3.44, 56 завершенных
                регистраций, а также кампании по русской и эстонской аудитории.
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
            <h2 className="text-[34px] font-light leading-tight tracking-[-0.04em] text-white sm:text-[46px]">
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
              <h2 className="text-[32px] font-light tracking-[-0.04em] text-white">
                Хотите набрать группы к сезону без хаоса в рекламе?
              </h2>
              <p className="max-w-3xl text-base leading-7 text-slate-300">
                Покажите нам сезонность, географию и текущую стоимость заявки.
                Мы оценим, где лучше вести трафик на лид-форму, а где уже
                переводить пользователя на регистрацию или покупку.
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
