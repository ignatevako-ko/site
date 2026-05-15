"use client";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteContent } from "@/data/site-content";

const pageContent = {
  ...siteContent.ru,
  nav: [
    { href: "/meta-ads", label: "Услуги" },
    { href: "#offer", label: "Оффер" },
    { href: "#cases", label: "Кейсы" },
    { href: "#process", label: "Этапы" },
    { href: "#pricing", label: "Цены" },
    { href: "#contacts", label: "Контакты" },
  ],
  footer: {
    ...siteContent.ru.footer,
    links: [
      { href: "#offer", label: "Оффер" },
      { href: "#cases", label: "Кейсы" },
      { href: "#process", label: "Этапы" },
      { href: "#pricing", label: "Цены" },
      { href: "#contacts", label: "Контакты" },
    ],
  },
};

const heroBullets = [
  "запускаем Meta Ads для Facebook и Instagram под реальные заявки, звонки и продажи",
  "собираем аудитории, офферы и креативы под Таллинн и рынок Эстонии",
  "ведем кампании с фокусом на стоимость лида, окупаемость и масштабирование",
];

const resultCards = [
  {
    title: "Локальный спрос в Таллинне",
    text: "Собираем структуру кампаний так, чтобы реклама точно работала по географии, языкам и сегментам аудитории в Эстонии.",
  },
  {
    title: "Понятная воронка заявок",
    text: "Не просто запускаем объявления, а связываем оффер, посадочную страницу, форму и сообщения в одну систему.",
  },
  {
    title: "Креативы под услугу",
    text: "Готовим рекламные тексты, статические макеты, видеоидеи и ТЗ на съемку под ваш продукт и нишу.",
  },
  {
    title: "Оптимизация без хаоса",
    text: "Отслеживаем цену лида, CTR, частоту, качество аудиторий и усиливаем работающие связки, а не сливаем бюджет в тесты ради тестов.",
  },
];

const casePoints = [
  "11 броней для Prime Tour при бюджете €390 на эстонском и русском сегментах",
  "34 клиента для ILUPROFF по €17.50 на высокомаржинальную услугу",
  "114 продаж для косметического e-commerce проекта в Эстонии при ROAS 30.23",
];

const processItems = [
  {
    title: "Аудит и экономика",
    text: "Разбираем нишу, средний чек, спрос, конкурентную среду и точки роста, чтобы не запускать рекламу в отрыве от экономики проекта.",
  },
  {
    title: "Стратегия кампаний",
    text: "Собираем структуру кабинета, воронку офферов, сегменты аудиторий и сценарии тестов под Meta Ads.",
  },
  {
    title: "Креативы и запуск",
    text: "Готовим тексты, визуалы, ТЗ на съемку и стартуем кампании с понятной логикой гипотез и приоритетов.",
  },
  {
    title: "Ведение и рост",
    text: "Оптимизируем связки, масштабируем рабочие сегменты и регулярно обновляем рекламные материалы по данным кабинета.",
  },
];

const faqItems = [
  {
    question: "Подходит ли Meta Ads для локального бизнеса в Таллинне?",
    answer:
      "Да. Для салонов, образования, услуг, e-commerce и локальных проектов Meta Ads хорошо работает, если правильно собрать оффер, гео, языки и креативы под аудиторию Эстонии.",
  },
  {
    question: "Сколько стоит ведение рекламы Meta Ads?",
    answer:
      "Базовая стоимость ведения начинается от 549€. Финальная цена зависит от объема кампаний, числа сегментов, количества креативов и темпа тестирования.",
  },
  {
    question: "Вы делаете только настройку или и креативы тоже?",
    answer:
      "Мы можем взять и стратегию, и настройку кабинета, и тексты, и креативы, и ТЗ на съемку. Это позволяет быстрее находить рабочие связки и не терять темп.",
  },
];

const extraServices = [
  { label: "Google Ads", href: "/google-ads" },
  { label: "SMM", href: "/smm" },
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

export function MetaAdsPage() {
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
              Meta Ads Tallinn для рекламы в Facebook и Instagram
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-[34px] font-light leading-[1.02] tracking-[-0.06em] text-white sm:text-[50px] lg:text-[68px]">
                Настройка и ведение Meta Ads, которые приводят клиентов в Таллинне и по всей Эстонии
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Запускаем рекламу в Facebook и Instagram с фокусом на заявки, продажи и окупаемость. Собираем структуру кабинета, креативы, аудитории и логику тестов под ваш реальный рынок.
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

          <div
            id="pricing"
            className="glass-shell rounded-[2rem] p-6 sm:p-8"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-[12px] uppercase tracking-[0.28em] text-violet-200/90">
                    Meta Ads
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">
                    Facebook + Instagram + оптимизация
                  </p>
                </div>
                <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  Active
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { value: "549€", label: "старт ведения" },
                  { value: "350€+", label: "рекомендованный бюджет" },
                  { value: "ROAS", label: "фокус на окупаемости" },
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
                <div className="inline-flex rounded-full border border-violet-300/22 bg-violet-300/10 px-3.5 py-1 text-[13px] font-medium text-violet-100">
                  + рекламный бюджет: от 350€
                </div>
                <div className="mt-4 flex items-end gap-3">
                  <span className="pb-2 text-sm uppercase tracking-[0.18em] text-white/60">
                    от
                  </span>
                  <p className="text-[56px] font-light leading-none tracking-[-0.08em] text-white sm:text-[68px]">
                    549€
                  </p>
                </div>
                <div className="mt-5 space-y-3 rounded-[1.4rem] border border-white/8 bg-slate-950/35 p-4 text-sm text-slate-200">
                  {[
                    { budget: "до 1000€", fee: "549€" },
                    { budget: "до 2000€", fee: "670€" },
                    { budget: "от 2000€", fee: "890€" },
                  ].map((row) => (
                    <div
                      key={`${row.budget}-${row.fee}`}
                      className="grid grid-cols-[1fr_auto] gap-3 border-b border-white/8 pb-3 last:border-b-0 last:pb-0"
                    >
                      <span>{row.budget}</span>
                      <span className="font-semibold text-white">{row.fee}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cases" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeading
            eyebrow="Результат"
            title="Что получает бизнес от Meta Ads в Эстонии"
            description="Сильная реклама в Meta начинается не с кнопки запуска, а с правильной связки оффера, аудитории, креатива и посадочной страницы."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {resultCards.map((card) => (
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

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(19,26,53,0.88),rgba(35,21,51,0.82))] p-7 sm:p-8">
            <SectionHeading
              eyebrow="Кейсы"
              title="На что мы опираемся в работе с проектами"
              description="В портфеле уже есть проекты из Эстонии, где реклама приносила заявки, брони и продажи в локальных нишах."
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {casePoints.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-white/8 bg-slate-950/35 p-4 text-sm leading-7 text-slate-200 sm:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeading
            eyebrow="Этапы"
            title="Как выглядит запуск и ведение Meta Ads"
            description="Двигаемся от экономики и стратегии к креативам, тестам и масштабированию, чтобы реклама росла вместе с проектом."
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
                eyebrow="FAQ"
                title="Частые вопросы перед запуском Meta Ads"
                description="Собрали короткие ответы на вопросы, которые чаще всего возникают перед стартом рекламы в Facebook и Instagram."
              />
              <div className="mt-8 space-y-4">
                {faqItems.map((item) => (
                  <article
                    key={item.question}
                    className="rounded-[1.4rem] border border-white/8 bg-slate-900/70 p-5"
                  >
                    <h3 className="text-[20px] font-medium tracking-[-0.03em] text-white">
                      {item.question}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                      {item.answer}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-violet-300/16 bg-[linear-gradient(160deg,rgba(57,29,92,0.62),rgba(9,14,31,0.9))] p-7 shadow-[0_30px_90px_rgba(76,29,149,0.18)] sm:p-8">
              <p className="text-[14px] uppercase tracking-[0.28em] text-slate-300">
                Что входит в ведение
              </p>
              <div className="mt-6 grid gap-4">
                {[
                  "анализ ниши и конкурентов",
                  "настройка рекламного кабинета Meta Ads",
                  "сегментация и настройка аудиторий",
                  "разработка структуры кампаний и офферов",
                  "написание текстов объявлений",
                  "создание креативов или ТЗ на съемку",
                  "A/B тестирование и оптимизация",
                  "масштабирование рабочих связок",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] border border-white/8 bg-slate-950/28 px-5 py-4 text-sm leading-7 text-slate-100 sm:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <a
                href="#contacts"
                className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-violet-400 px-7 text-[18px] font-semibold text-slate-950 transition hover:bg-violet-300"
              >
                Обсудить проект
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10">
          <p className="text-[20px] font-semibold uppercase tracking-[0.3em] text-violet-300">
            Дополнительные услуги
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {extraServices.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-5 py-2.5 text-[18px] font-light text-slate-100 transition hover:border-violet-300/35 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter content={pageContent} language="ru" />
    </div>
  );
}
