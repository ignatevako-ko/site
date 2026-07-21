import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { SiteFooter } from "@/components/site-footer";
import { siteContent } from "@/data/site-content";

const targetingFeatures = [
  "анализ ниши и конкурентов",
  "настройка рекламного кабинета Meta Ads",
  "настройка аудиторий",
  "разработка стратегии рекламной кампании",
  "создание структуры рекламы",
  "написание текстов объявлений",
  "создание креативов или ТЗ на съемку",
  "запуск рекламы",
  "A/B тестирование",
  "оптимизация рекламных кампаний",
];

const googleFeatures = [
  "анализ ниши и конкурентов",
  "настройка структуры рекламного кабинета Google Ads",
  "сбор ключевых слов и минус-слов",
  "разработка стратегии кампаний и логики бюджета",
  "написание текстов объявлений и настройка расширений",
  "подготовка креативов или ТЗ для КМС",
  "запуск поисковых и медийных кампаний",
  "A/B тестирование и оптимизация ставок",
  "регулярное ведение, масштабирование и отчетность",
];

const strategyLinks = [
  {
    title: "Анализ и стратегия по таргетингу",
    href: "https://docs.google.com/document/d/1zWQClIpgamonpnDuiB1HNVFH9qChh2sSwXSPHptet_U/edit?tab=t.0",
  },
  {
    title: "Анализ и план работ по Google Ads",
    href: "https://docs.google.com/document/d/1SaK9vzAxBU2YUD1VTqLOGaQU91_Ig_6YRLN0xPuKKSA/edit?tab=t.0",
  },
];

export const metadata: Metadata = {
  title: "Ценовое предложение для Digital Art House | Do.Marketing",
  description:
    "Персональное предложение Do.Marketing по Meta Ads и Google Ads для Digital Art House.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function DigitalArtHouseOfferPage() {
  return (
    <>
    <main className="relative isolate overflow-x-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(167,139,250,0.2),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(244,114,182,0.12),transparent_24%),radial-gradient(circle_at_50%_60%,rgba(255,214,170,0.06),transparent_30%)]" />
      <div className="grid-overlay absolute inset-x-0 top-0 -z-10 h-[42rem] opacity-45" />

      <header className="mx-auto flex w-full max-w-[100vw] items-center justify-between gap-3 px-4 py-5 sm:max-w-7xl sm:px-6 lg:px-10">
        <Link href="/ru" aria-label="Do.Marketing home">
          <span className="flex items-center gap-2.5 sm:hidden">
            <span className="relative h-11 w-11 shrink-0 rounded-[1rem] border border-[#d9d9d9] bg-white shadow-[0_8px_22px_rgba(255,255,255,0.1)]">
              <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-[42%] rotate-45 border-r-[3px] border-t-[3px] border-black" />
            </span>
            <span className="font-display text-[1.45rem] font-light leading-none text-white">
              Do
              <br />
              Marketing
            </span>
          </span>
          <span className="hidden sm:block">
            <BrandLogo compact />
          </span>
        </Link>
        <Link
          href="/ru"
          className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/8 px-3 py-2 text-xs font-medium text-white shadow-[0_14px_40px_rgba(0,0,0,0.18)] backdrop-blur transition hover:border-white/24 hover:bg-white/12 sm:px-4 sm:py-2.5 sm:text-sm"
        >
          На главную
        </Link>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-6rem)] w-full max-w-[100vw] items-center gap-10 px-5 pb-16 pt-6 sm:max-w-7xl sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:pb-24 lg:pt-10">
        <div className="max-w-[calc(100vw-2.5rem)] sm:max-w-3xl">
          <div className="mb-8 flex items-center gap-4">
            <div className="rounded-[1.3rem] border border-white/10 bg-black/28 px-5 py-4 backdrop-blur">
              <img
                src="https://static.tildacdn.net/tild6632-3230-4362-b436-666566633239/dah_logo_white.png"
                alt="Digital Art House"
                className="h-12 w-auto object-contain sm:h-14"
              />
            </div>
            <div className="hidden h-px flex-1 bg-gradient-to-r from-white/28 to-transparent sm:block" />
          </div>

          <h1 className="max-w-[calc(100vw-2.5rem)] break-words font-display text-4xl font-light leading-tight tracking-normal text-white [overflow-wrap:anywhere] sm:max-w-3xl sm:text-balance sm:text-5xl sm:[overflow-wrap:normal] lg:text-5xl">
            Digital Art House: реклама для иммерсивных выставок, событий и спроса с высоким намерением
          </h1>
          <p className="mt-7 max-w-[calc(100vw-2.5rem)] text-base leading-7 text-slate-300 sm:max-w-2xl sm:text-lg sm:leading-8">
            Предлагаем связку Meta Ads и Google Ads: эмоциональный визуальный охват для новых аудиторий
            плюс контекстная реклама для людей, которые уже ищут выставки, билеты и необычный досуг в Риге.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {strategyLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[1.35rem] border border-white/10 bg-white/[0.06] p-5 text-sm font-medium text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-violet-300/45 hover:bg-violet-500/10"
              >
                <span className="block text-slate-400">Документ</span>
                <span className="mt-2 flex items-center justify-between gap-4">
                  {link.title}
                  <span className="text-violet-300 transition group-hover:translate-x-1">→</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-violet-500/12 blur-3xl" />
          <div className="overflow-hidden rounded-[1.6rem] border border-white/12 bg-black shadow-[0_30px_100px_rgba(0,0,0,0.42)]">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/l9zvk4H04_c?autoplay=1&mute=1&loop=1&playlist=l9zvk4H04_c&controls=0&modestbranding=1&playsinline=1"
              title="Digital Art House video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="mt-4 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
            {["HD projections", "360 Cinema", "Surround Sound"].map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-3 text-center backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.035]">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-14 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-20">
          <OfferCard
            title="Контекстная реклама Google Ads"
            price="550€ / месяц"
            description="Забираем сформированный спрос: выставки, билеты, Van Gogh, Michelangelo, immersive experience, events и смежные поисковые запросы."
            features={googleFeatures}
          />
          <OfferCard
            title="Таргетированная реклама Meta Ads"
            price="650€ / месяц"
            description="Показываем атмосферу Digital Art House через визуальные креативы, сегменты аудитории, ремаркетинг и тесты офферов."
            features={targetingFeatures}
            note="* После 3-го месяца сотрудничества можно отдельно обсудить бонусные условия, если динамика кампаний и выполнение KPI будут давать для этого понятную основу."
          />
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-24">
        <div>
          <h2 className="font-display text-4xl font-light leading-tight text-white sm:text-5xl">
            Как будем усиливать продажи билетов
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
            Для проекта с сильной визуальной частью важно не разделять рекламу на «охват» и «продажи»:
            креативы, поисковый спрос, ремаркетинг и аналитика должны работать как одна система.
          </p>
        </div>

        <div className="grid gap-4">
          {[
            ["01", "Собираем спрос", "Разделяем кампании по выставкам, языкам, географии и намерению пользователя."],
            ["02", "Тестируем визуальные связки", "Проверяем короткие видео, афиши, карусели и разные углы коммуникации для Meta Ads."],
            ["03", "Оптимизируем по данным", "Смотрим стоимость результата, качество трафика, поведение на сайте и продажи билетов."],
            [
              "04",
              "Обсуждаем рост",
              "После первых циклов тестов фиксируем рабочие связки, уточняем бюджет и планируем следующий этап масштабирования.",
            ],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="grid gap-4 rounded-[1.35rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur sm:grid-cols-[4rem_1fr]"
            >
              <div className="font-display text-2xl text-violet-300">{number}</div>
              <div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(167,139,250,0.24),transparent_26%),linear-gradient(135deg,rgba(30,27,75,0.98),rgba(8,12,28,0.96),rgba(88,28,135,0.78))] px-5 py-12 text-white sm:px-6 lg:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-3xl font-medium leading-tight sm:text-4xl">
              Готовы работать аккуратно: с понятной структурой, отчетностью и фокусом на билетах.
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
              Рекламный бюджет обсуждается отдельно и распределяется между Meta Ads и Google Ads после финального
              согласования стратегии.
            </p>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter content={siteContent.ru} language="ru" />
    </>
  );
}

function OfferCard({
  title,
  price,
  description,
  features,
  note,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  note?: string;
}) {
  return (
    <article className="flex h-full flex-col rounded-[1.7rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.28)] backdrop-blur lg:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-light leading-tight text-white sm:text-3xl">{title}</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">{description}</p>
        </div>
        <div className="rounded-[1.2rem] border border-violet-200/20 bg-[linear-gradient(135deg,rgba(167,139,250,0.18),rgba(255,255,255,0.07))] px-5 py-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur sm:text-right">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-200/75">Стоимость</div>
          <div className="mt-1 font-display text-2xl font-semibold text-white">{price}</div>
        </div>
      </div>

      <div className="mt-8 grid gap-3">
        {features.map((feature) => (
          <div key={feature} className="flex gap-3 text-sm leading-6 text-slate-200">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {note ? (
        <p className="mt-7 border-t border-white/10 pt-5 text-xs leading-5 text-slate-400">
          {note}
        </p>
      ) : null}
    </article>
  );
}
