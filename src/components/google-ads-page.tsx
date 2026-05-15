"use client";

import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { googleAdsRelatedServices } from "@/lib/services";
import { siteContent } from "@/data/site-content";

const pageContent = {
  ...siteContent.ru,
  nav: [
    { href: "/meta-ads", label: "Услуги" },
    { href: "#offer", label: "Оффер" },
    { href: "#benefits", label: "Преимущества" },
    { href: "#results", label: "Что получите" },
    { href: "#process", label: "Этапы" },
    { href: "#pricing", label: "Цены" },
    { href: "#contacts", label: "Контакты" },
  ],
  footer: {
    ...siteContent.ru.footer,
    links: [
      { href: "#offer", label: "Оффер" },
      { href: "#results", label: "Что получите" },
      { href: "#process", label: "Этапы" },
      { href: "#pricing", label: "Цены" },
      { href: "#contacts", label: "Контакты" },
    ],
  },
};

const heroBullets = [
  "настроим эффективную рекламную кампанию в Google Ads",
  "обеспечим стабильный приток трафика на сайт",
  "приведем максимум целевых клиентов в рамках согласованного бюджета",
];

const advantageCards = [
  {
    title: "Быстрый результат",
    text: "Показы можно запустить уже в день старта. Вы начинаете получать переходы и первые обращения без ожидания долгой органики.",
  },
  {
    title: "Точная настройка",
    text: "Собираем кампанию по ключевым словам, гео, минус-словам и стратегии ставок так, чтобы реклама работала на реальный спрос.",
  },
  {
    title: "Грамотная оптимизация",
    text: "Постоянно отслеживаем промежуточные результаты, снижаем стоимость клика, усиливаем CTR и доводим кампании до лучших связок.",
  },
  {
    title: "Фокус на конверсии",
    text: "Смотрим не только на трафик, но и на то, как сайт превращает пользователя в заявку, звонок или продажу.",
  },
];

const setupFactors = [
  "правильный выбор стратегии ставок и цели кампании",
  "корректно подобранные ключевые слова и минус-слова",
  "правильный выбор геолокации",
  "понимание конкуренции по заданным ключам",
  "качественно составленные объявления и оффер",
];

const websiteFactors = [
  "страница должна быть удобной, понятной и содержать привлекательный контент",
  "сайт должен быстро загружаться и исправно работать",
  "цели кампании должны совпадать с реальной бизнес-задачей",
  "на странице должны быть формы, кликабельный телефон и другие инструменты конверсии",
];

const resultItems = [
  "точное таргетирование по ключевым словам, местоположению, устройствам и другим параметрам",
  "быстрый запуск кампаний и трафик из потенциальных клиентов в течение нескольких часов после настройки",
  "гибкая работа с бюджетом под ваши финансовые возможности",
  "максимальная отслеживаемость эффективности, включая конверсии и ROI",
  "географическая настройка для конкретных рынков и городов",
  "разные форматы объявлений: текст, графика, видео и mobile",
  "тестирование различных объявлений и стратегий для роста эффективности",
  "управление ключевыми словами и постоянная оптимизация семантики",
];

const processItems = [
  {
    title: "Аудит и бриф",
    text: "Анализируем нишу, текущий кабинет, сайт и собираем вводные, чтобы стратегия опиралась на реальные ограничения и возможности проекта.",
  },
  {
    title: "Стратегия и прогноз",
    text: "Готовим структуру кампаний, прогноз по бюджетам и сценарий запуска. После согласования переходим к реализации.",
  },
  {
    title: "Контент",
    text: "Пишем заголовки и тексты объявлений, подготавливаем креативы для КМС и при необходимости составляем ТЗ на съемку.",
  },
  {
    title: "Запуск и оптимизация",
    text: "Запускаем первую кампанию, следим за промежуточными результатами, масштабируем рабочие связки и регулярно отчитываемся.",
  },
];

const targetingItems = [
  "ключевые слова как основной инструмент таргетинга",
  "демографические данные",
  "местоположение",
  "интересы и дополнительные сигналы аудитории",
];

const startSteps = [
  {
    title: "Встреча-знакомство",
    text: "На первой онлайн-встрече разбираем задачу, заполняем бриф и фиксируем ключевые ориентиры проекта.",
  },
  {
    title: "Обсуждение условий",
    text: "Готовим подробное коммерческое предложение с учетом ниши, конкурентов и объема задач, затем презентуем план работ.",
  },
  {
    title: "Принятие решения",
    text: "Предлагаем удобный формат сотрудничества: от тестового месяца до более длинной работы на масштабирование результата.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-[13px] font-semibold uppercase tracking-[0.34em] text-violet-300">
        {eyebrow}
      </p>
      <h2 className="text-[30px] font-light leading-[1.06] tracking-[-0.05em] text-white sm:text-[44px]">
        {title}
      </h2>
      <p className="text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
    </div>
  );
}

export function GoogleAdsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-7rem] top-[-4rem] h-[22rem] w-[22rem] rounded-full bg-amber-200/14 blur-3xl" />
        <div className="absolute left-1/2 top-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-violet-400/10 blur-3xl" />
        <div className="absolute right-[-8rem] top-28 h-[24rem] w-[24rem] rounded-full bg-fuchsia-300/12 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-6rem] h-[24rem] w-[24rem] rounded-full bg-violet-200/8 blur-3xl" />
        <div className="grid-overlay absolute inset-0 opacity-40" />
      </div>

      <SiteHeader
        content={pageContent}
        currentLanguage="ru"
        onLanguageChange={() => {}}
        homeHref="/"
        showLanguageSwitcher={false}
      />

      <main className="relative z-10">
        <section
          id="offer"
          className="mx-auto grid w-full max-w-7xl gap-10 px-6 pb-20 pt-14 lg:grid-cols-[1.06fr_0.94fr] lg:px-10 lg:pb-28 lg:pt-20"
        >
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-violet-100">
              Google Ads в вашем стиле, а не шаблонная посадочная
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-[34px] font-light leading-[1.02] tracking-[-0.06em] text-white sm:text-[50px] lg:text-[68px]">
                Контекстная реклама Google, которая приводит горячих клиентов уже в день запуска
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Собираем поисковые и медийные кампании, выстраиваем корректную структуру, следим за окупаемостью и ведем рекламу так, чтобы бюджет работал на реальный спрос.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroBullets.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacts"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-violet-400 px-7 text-[18px] font-semibold text-slate-950 transition hover:bg-violet-300"
              >
                Оставить заявку
              </a>
              <a
                href="#process"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 text-[18px] font-semibold text-white transition hover:border-violet-300/40 hover:bg-white/10"
              >
                Посмотреть этапы
              </a>
            </div>
          </div>

          <div className="glass-shell rounded-[2rem] p-6 sm:p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-[12px] uppercase tracking-[0.28em] text-violet-200/90">
                    Google Ads
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">
                    Search + КМС + оптимизация
                  </p>
                </div>
                <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  Active
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { value: "500€", label: "старт ведения" },
                  { value: "350€+", label: "рекомендованный бюджет" },
                  { value: "ROI", label: "фокус на окупаемости" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-4"
                  >
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.5rem] border border-white/8 bg-slate-950/50 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  Стоимость услуг
                </p>
                <div className="mt-4 flex items-end gap-3">
                  <span className="pb-2 text-sm uppercase tracking-[0.18em] text-white/60">
                    от
                  </span>
                  <p className="text-[56px] font-light leading-none tracking-[-0.08em] text-white sm:text-[68px]">
                    500€
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Референсный оффер страницы адаптирован под ваш сайт. Цена переведена из долларов в евро и показана как базовая стоимость ведения.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeading
            eyebrow="Преимущества"
            title="Почему Google Ads дает быстрый и управляемый результат"
            description="Используем информацию и логику страницы-референса, но собираем экран в вашем визуальном языке и под ваш текущий сайт."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {advantageCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(2,6,23,0.24)]"
              >
                <h3 className="text-[24px] font-medium tracking-[-0.04em] text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-300">{card.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 sm:p-8">
              <SectionHeading
                eyebrow="Точная настройка"
                title="Что влияет на результат запуска"
                description="Чтобы привести на сайт именно целевую аудиторию, реклама должна быть собрана не по шаблону, а по реальной логике ниши."
              />
              <div className="mt-8 space-y-4">
                {setupFactors.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.4rem] border border-white/8 bg-slate-900/70 p-4"
                  >
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-violet-300/35 bg-violet-300/10 text-[11px] text-violet-200">
                      ✓
                    </span>
                    <span className="text-sm leading-7 text-slate-200 sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(19,26,53,0.88),rgba(35,21,51,0.82))] p-7 sm:p-8">
              <SectionHeading
                eyebrow="Сайт и конверсия"
                title="Перед запуском оцениваем готовность посадочной страницы"
                description="Пользователь должен не только кликнуть по объявлению, но и дойти до заявки, звонка или покупки. Поэтому мы смотрим на сайт как на часть рекламной системы."
              />
              <div className="mt-8 grid gap-4">
                {websiteFactors.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-white/8 bg-slate-950/35 p-4 text-sm leading-7 text-slate-200 sm:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="results" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeading
            eyebrow="Результат"
            title="Что вы получите в итоге"
            description="Собрали ключевые преимущества из референса и превратили их в ваш продающий блок без чужой стилистики."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {resultItems.map((item, index) => (
              <div
                key={item}
                className="rounded-[1.7rem] border border-white/10 bg-white/5 p-5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-300">
                  ({String(index + 1).padStart(2, "0")})
                </p>
                <p className="mt-4 text-base leading-8 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeading
            eyebrow="Этапы"
            title="Как выглядит настройка и ведение контекстной рекламы"
            description="Работаем по понятной схеме: аудит, стратегия, контент, запуск и регулярная оптимизация с отчетностью."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {processItems.map((item, index) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-[1.85rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6"
              >
                <div className="absolute right-4 top-4 text-[64px] font-light leading-none tracking-[-0.08em] text-white/7">
                  {index + 1}
                </div>
                <p className="text-[14px] font-semibold uppercase tracking-[0.28em] text-violet-300">
                  {item.title}
                </p>
                <p className="mt-5 text-base leading-8 text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 sm:p-8">
              <SectionHeading
                eyebrow="Таргетинг и мифы"
                title="Можно ли точно таргетировать аудиторию в Google Ads"
                description="Да. В Google Ads можно работать не только по ключевым словам, но и по дополнительным параметрам, чтобы сужать аудиторию под вашу задачу."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {targetingItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] border border-white/8 bg-white/4 px-5 py-4 text-sm text-slate-200 sm:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              id="pricing"
              className="rounded-[2rem] border border-violet-300/16 bg-[linear-gradient(160deg,rgba(57,29,92,0.62),rgba(9,14,31,0.9))] p-7 shadow-[0_30px_90px_rgba(76,29,149,0.18)] sm:p-8"
            >
              <div className="inline-flex rounded-full border border-violet-300/22 bg-violet-300/10 px-3.5 py-1 text-[13px] font-medium text-violet-100">
                + рекламный бюджет: от 350€
              </div>
              <p className="mt-7 text-[14px] uppercase tracking-[0.28em] text-slate-300">
                Стоимость ведения Google Ads
              </p>
              <div className="mt-4 flex items-end gap-3">
                <span className="pb-2 text-sm uppercase tracking-[0.18em] text-white/60">
                  от
                </span>
                <p className="text-[56px] font-light leading-none tracking-[-0.08em] text-white sm:text-[68px]">
                  500€
                </p>
              </div>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
                Базовая цена ведения адаптирована под евро. Финальная стоимость зависит от географии, конкуренции и объема задач.
              </p>

              <div className="mt-8 rounded-[1.5rem] border border-white/8 bg-slate-950/25 p-4">
                <div className="space-y-3">
                  {[
                    { budget: "до 1000€", fee: "500€" },
                    { budget: "до 2000€", fee: "650€" },
                    { budget: "от 2000€", fee: "индивидуально" },
                  ].map((row) => (
                    <div
                      key={`${row.budget}-${row.fee}`}
                      className="grid grid-cols-[1fr_auto] gap-3 border-b border-white/8 pb-3 text-sm text-slate-200 last:border-b-0 last:pb-0 sm:text-base"
                    >
                      <span>{row.budget}</span>
                      <span className="font-semibold text-white">{row.fee}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contacts"
                className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-violet-400 px-7 text-[18px] font-semibold text-slate-950 transition hover:bg-violet-300"
              >
                Оставить заявку
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeading
            eyebrow="Старт"
            title="3 шага, чтобы начать работу"
            description="Сделали отдельный блок на основе референса: сначала знакомство и бриф, затем обсуждение условий и после этого комфортный формат сотрудничества."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {startSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                  ({String(index + 1).padStart(2, "0")})
                </p>
                <h3 className="mt-4 text-[24px] font-medium tracking-[-0.04em] text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-300">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10">
          <p className="text-[20px] font-semibold uppercase tracking-[0.3em] text-violet-300">
            Дополнительные услуги
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {googleAdsRelatedServices.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-5 py-2.5 text-[18px] font-light text-slate-100 transition hover:border-violet-300/35 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter content={pageContent} language="ru" />
    </div>
  );
}
