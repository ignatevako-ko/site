"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Language } from "@/data/site-content";
import { siteContent } from "@/data/site-content";

type SmmCopy = {
  nav: Array<{ href: string; label: string }>;
  footerLinks: Array<{ href: string; label: string }>;
  heroLabel: string;
  heroTitle: string;
  heroDescription: string;
  month1Title: string;
  month1Description: string;
  week1Title: string;
  packagingTitle: string;
  automationTitle: string;
  contentTitle: string;
  setupBadge: string;
  month1Price: string;
  month2Title: string;
  month2Description: string;
  includedTitle: string;
  month2Price: string;
  month3Note: string;
  month3Title: string;
  month3Description: string;
  targetingTitle: string;
  budgetBadge: string;
  processTitle: string;
  pricingRows: Array<{ budget: string; price: string }>;
  foundationWeek: string[];
  packaging: string[];
  automation: string[];
  monthOneContent: string[];
  monthTwo: string[];
  targeting: string[];
  process: string[];
};

const smmCopy: Record<Language, SmmCopy> = {
  ru: {
    nav: [
      { href: "#month-3", label: "Таргет" },
      { href: "#process", label: "Процесс" },
      { href: "#contacts", label: "Контакты" },
    ],
    footerLinks: [
      { href: "#offer", label: "Оффер" },
      { href: "#month-1", label: "1 месяц" },
      { href: "#month-2", label: "Ведение" },
      { href: "#month-3", label: "Таргет" },
      { href: "#contacts", label: "Контакты" },
    ],
    heroLabel: "SMM",
    heroTitle: "Instagram + Facebook + TikTok + YouTube Shorts",
    heroDescription:
      "Система контента, упаковки и масштабирования: сначала строим фундамент, потом ведем аккаунты регулярно и усиливаем результат таргетированной рекламой.",
    month1Title: "1 месяц — фундамент и упаковка",
    month1Description:
      "Цель: создать сильную основу аккаунта, подготовить систему контента и начать рост охватов.",
    week1Title: "1 неделя — аналитика и стратегия",
    packagingTitle: "Упаковка аккаунта",
    automationTitle: "Настройка автоматизации",
    contentTitle: "Контент",
    setupBadge: "Оформление Instagram, Facebook, TikTok, YouTube",
    month1Price: "Стоимость 1 месяца: 1390€",
    month2Title: "Со 2 месяца — регулярное ведение",
    month2Description:
      "Цель: системный рост охватов, доверия и заявок через короткие видео.",
    includedTitle: "Что входит",
    month2Price: "Стоимость ведения: 1000€ / месяц",
    month3Note: "С 3-го месяца: 12 Reels в месяц + 8 дней сторис.",
    month3Title: "С 3 месяца — подключение таргетированной рекламы",
    month3Description:
      "Цель: масштабировать охваты, привлекать подписчиков и получать заявки.",
    targetingTitle: "Что входит в таргетинг",
    budgetBadge: "+ рекламный бюджет: от 350€",
    processTitle: "Как выглядит процесс работы",
    pricingRows: [
      { budget: "до 1500€", price: "650€" },
      { budget: "до 2500€", price: "770€" },
      { budget: "от 2500€", price: "990€" },
    ],
    foundationWeek: [
      "анализ ниши и конкурентов",
      "определение позиционирования",
      "стратегия контента на 3 месяца",
      "определение рубрик и форматов Reels",
      "составление контент-плана",
    ],
    packaging: [
      "шапка профиля: позиционирование и оффер",
      "структура актуальных сторис",
      "оформление обложек актуальных",
      "закрепленные посты: прогрев, экспертность и продажа",
    ],
    automation: [
      "подключение ManyChat",
      "базовые автоворонки",
      "автоответы в директ",
      "сбор заявок через сообщения",
    ],
    monthOneContent: [
      "12 Reels",
      "сценарии",
      "ТЗ на съемку",
      "монтаж",
      "постинг в Instagram, Facebook, TikTok и Shorts",
      "оформление обложек",
    ],
    monthTwo: [
      "контент-план",
      "написание сценариев",
      "ТЗ на съемку",
      "монтаж видео",
      "оформление обложек",
      "публикация в Instagram, Facebook, TikTok и YouTube Shorts",
      "адаптация контента под каждую платформу",
    ],
    targeting: [
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
    ],
    process: [
      "создаем стратегию",
      "упаковываем аккаунт",
      "запускаем регулярный контент",
      "масштабируем через блогеров",
      "усиливаем результат рекламой",
    ],
  },
  en: {
    nav: [
      { href: "#month-3", label: "Ads" },
      { href: "#process", label: "Process" },
      { href: "#contacts", label: "Contacts" },
    ],
    footerLinks: [
      { href: "#offer", label: "Offer" },
      { href: "#month-1", label: "Month 1" },
      { href: "#month-2", label: "Management" },
      { href: "#month-3", label: "Ads" },
      { href: "#contacts", label: "Contacts" },
    ],
    heroLabel: "SMM",
    heroTitle: "Instagram + Facebook + TikTok + YouTube Shorts",
    heroDescription:
      "A content, packaging and scaling system: first we build the foundation, then we manage the accounts consistently and strengthen the result with paid advertising.",
    month1Title: "Month 1 — foundation and packaging",
    month1Description:
      "Goal: build a strong account foundation, prepare the content system and start growing reach.",
    week1Title: "Week 1 — analytics and strategy",
    packagingTitle: "Account packaging",
    automationTitle: "Automation setup",
    contentTitle: "Content",
    setupBadge: "Instagram, Facebook, TikTok, YouTube setup",
    month1Price: "Month 1 price: 1390€",
    month2Title: "From month 2 — ongoing management",
    month2Description:
      "Goal: systematic growth of reach, trust and leads through short-form video.",
    includedTitle: "What is included",
    month2Price: "Management fee: 1000€ / month",
    month3Note: "From month 3: 12 Reels per month + 8 days of stories.",
    month3Title: "From month 3 — targeted advertising",
    month3Description:
      "Goal: scale reach, attract followers and generate leads.",
    targetingTitle: "What is included in targeting",
    budgetBadge: "+ ad budget: from 350€",
    processTitle: "How the process works",
    pricingRows: [
      { budget: "up to 1500€", price: "650€" },
      { budget: "up to 2500€", price: "770€" },
      { budget: "from 2500€", price: "990€" },
    ],
    foundationWeek: [
      "niche and competitor analysis",
      "positioning definition",
      "3-month content strategy",
      "defining content pillars and Reels formats",
      "content plan creation",
    ],
    packaging: [
      "profile bio with positioning and offer",
      "highlight stories structure",
      "highlight cover design",
      "pinned posts for warm-up, expertise and sales",
    ],
    automation: [
      "ManyChat connection",
      "basic automation funnels",
      "auto-replies in direct messages",
      "lead collection through messages",
    ],
    monthOneContent: [
      "12 Reels",
      "scripts",
      "filming briefs",
      "editing",
      "posting to Instagram, Facebook, TikTok and Shorts",
      "cover design",
    ],
    monthTwo: [
      "content plan",
      "scriptwriting",
      "filming briefs",
      "video editing",
      "cover design",
      "publishing to Instagram, Facebook, TikTok and YouTube Shorts",
      "content adaptation for each platform",
    ],
    targeting: [
      "niche and competitor analysis",
      "Meta Ads account setup",
      "audience setup",
      "campaign strategy development",
      "ad structure creation",
      "ad copywriting",
      "creative production or filming brief",
      "campaign launch",
      "A/B testing",
      "campaign optimisation",
    ],
    process: [
      "build the strategy",
      "package the account",
      "launch regular content",
      "scale through influencers",
      "strengthen the result with ads",
    ],
  },
  et: {
    nav: [
      { href: "#month-3", label: "Reklaam" },
      { href: "#process", label: "Protsess" },
      { href: "#contacts", label: "Kontakt" },
    ],
    footerLinks: [
      { href: "#offer", label: "Pakkumine" },
      { href: "#month-1", label: "1. kuu" },
      { href: "#month-2", label: "Haldus" },
      { href: "#month-3", label: "Reklaam" },
      { href: "#contacts", label: "Kontakt" },
    ],
    heroLabel: "SMM",
    heroTitle: "Instagram + Facebook + TikTok + YouTube Shorts",
    heroDescription:
      "Sisu, pakendamise ja skaleerimise süsteem: esmalt ehitame vundamendi, seejärel haldame kontosid järjepidevalt ja võimendame tulemust tasulise reklaamiga.",
    month1Title: "1. kuu — vundament ja pakendamine",
    month1Description:
      "Eesmärk: luua kontole tugev alus, valmistada ette sisusüsteem ja alustada nähtavuse kasvatamist.",
    week1Title: "1. nädal — analüütika ja strateegia",
    packagingTitle: "Konto pakendamine",
    automationTitle: "Automatiseerimise seadistus",
    contentTitle: "Sisu",
    setupBadge: "Instagrami, Facebooki, TikToki ja YouTube'i vormistus",
    month1Price: "1. kuu hind: 1390€",
    month2Title: "Alates 2. kuust — regulaarne haldus",
    month2Description:
      "Eesmärk: süsteemne nähtavuse, usalduse ja päringute kasv läbi lühivideote.",
    includedTitle: "Mis sisaldub",
    month2Price: "Haldustasu: 1000€ / kuu",
    month3Note: "Alates 3. kuust: 12 Reelsi kuus + 8 päeva storysid.",
    month3Title: "Alates 3. kuust — sihitud reklaam",
    month3Description:
      "Eesmärk: kasvatada katvust, tuua jälgijaid ja saada päringuid.",
    targetingTitle: "Mida targeting sisaldab",
    budgetBadge: "+ reklaamieelarve: alates 350€",
    processTitle: "Kuidas tööprotsess välja näeb",
    pricingRows: [
      { budget: "kuni 1500€", price: "650€" },
      { budget: "kuni 2500€", price: "770€" },
      { budget: "alates 2500€", price: "990€" },
    ],
    foundationWeek: [
      "niši ja konkurentide analüüs",
      "positsioneerimise määratlemine",
      "3 kuu sisustrateegia",
      "rubriikide ja Reelsi formaatide määratlemine",
      "sisukava koostamine",
    ],
    packaging: [
      "profiili päis: positsioneerimine ja pakkumine",
      "story highlight'ide struktuur",
      "highlight cover'ite kujundus",
      "kinnitatud postitused: soojendus, ekspertsus ja müük",
    ],
    automation: [
      "ManyChati ühendamine",
      "baas-autovoorud",
      "autovastused directis",
      "päringute kogumine sõnumite kaudu",
    ],
    monthOneContent: [
      "12 Reelsi",
      "stsenaariumid",
      "võtteülesanded",
      "montaaž",
      "postitamine Instagrami, Facebooki, TikToki ja Shortsi",
      "cover'ite kujundus",
    ],
    monthTwo: [
      "sisukava",
      "stsenaariumide kirjutamine",
      "võtteülesanded",
      "videomontaaž",
      "cover'ite kujundus",
      "postitamine Instagrami, Facebooki, TikToki ja YouTube Shortsi",
      "sisu kohandamine iga platvormi jaoks",
    ],
    targeting: [
      "niši ja konkurentide analüüs",
      "Meta Ads konto seadistus",
      "auditooriumide seadistus",
      "reklaamikampaania strateegia loomine",
      "reklaamistruktuuri loomine",
      "reklaamtekstide kirjutamine",
      "loovmaterjalide tegemine või võtteülesanne",
      "kampaania käivitamine",
      "A/B testimine",
      "kampaaniate optimeerimine",
    ],
    process: [
      "loome strateegia",
      "pakendame konto",
      "käivitame regulaarse sisu",
      "skaleerime läbi influencer'ite",
      "võimendame tulemust reklaamiga",
    ],
  },
};

function SectionCard({
  id,
  title,
  description,
  children,
}: {
  id?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.28)] backdrop-blur sm:p-8"
    >
      <div className="space-y-3">
        <h2 className="text-[28px] font-semibold tracking-[-0.04em] text-white sm:text-[34px]">
          {title}
        </h2>
        {description ? (
          <p className="max-w-3xl text-[17px] leading-7 text-slate-300">
            {description}
          </p>
        ) : null}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 rounded-[1.4rem] border border-white/8 bg-slate-950/20 px-4 py-3 text-slate-100"
        >
          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-violet-300/30 bg-violet-300/10 text-xs text-violet-200">
            ✓
          </span>
          <span className="leading-6">{item}</span>
        </div>
      ))}
    </div>
  );
}

export default function SmmPage() {
  const [language, setLanguage] = useState<Language>("ru");

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const copy = smmCopy[language];
  const pageContent = useMemo(
    () => ({
      ...siteContent[language],
      nav: copy.nav,
      footer: {
        ...siteContent[language].footer,
        links: copy.footerLinks,
      },
    }),
    [copy.footerLinks, copy.nav, language],
  );

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(167,139,250,0.18),transparent_28%),linear-gradient(180deg,#080714_0%,#0c1020_35%,#0a0f1a_100%)] text-white">
      <SiteHeader
        content={pageContent}
        currentLanguage={language}
        onLanguageChange={setLanguage}
        homeHref="/"
      />

      <div className="mx-auto flex w-full max-w-6xl justify-end px-6 pt-5 lg:px-10">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 bg-white/6 px-5 text-sm font-medium text-white transition hover:border-violet-300/40 hover:bg-white/10"
        >
          {language === "ru" ? "На главную" : language === "en" ? "Home" : "Avalehele"}
        </Link>
      </div>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 lg:px-10 lg:py-14">
        <section
          id="offer"
          className="rounded-[2.4rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03),rgba(15,23,42,0.3))] p-8 shadow-[0_40px_100px_rgba(8,7,20,0.45)] sm:p-10 lg:p-12"
        >
          <div className="max-w-4xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-300">
              {copy.heroLabel}
            </p>
            <h1 className="text-[40px] font-semibold leading-none tracking-[-0.06em] text-white sm:text-[58px]">
              {copy.heroTitle}
            </h1>
            <p className="max-w-3xl text-[18px] leading-8 text-slate-300 sm:text-[20px]">
              {copy.heroDescription}
            </p>
          </div>
        </section>

        <SectionCard
          id="month-1"
          title={copy.month1Title}
          description={copy.month1Description}
        >
          <div className="space-y-8">
            <div>
              <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-white">
                {copy.week1Title}
              </h3>
              <div className="mt-4">
                <BulletList items={copy.foundationWeek} />
              </div>
            </div>

            <div>
              <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-white">
                {copy.packagingTitle}
              </h3>
              <div className="mt-4">
                <BulletList items={copy.packaging} />
              </div>
            </div>

            <div>
              <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-white">
                {copy.automationTitle}
              </h3>
              <div className="mt-4">
                <BulletList items={copy.automation} />
              </div>
            </div>

            <div>
              <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-white">
                {copy.contentTitle}
              </h3>
              <div className="mt-4">
                <BulletList items={copy.monthOneContent} />
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-violet-300/18 bg-violet-300/10 px-5 py-4 text-[18px] font-medium text-violet-50 sm:text-[20px]">
              {copy.setupBadge}
            </div>
            <div className="rounded-full border border-white/10 bg-white/6 px-6 py-4 text-[22px] font-semibold tracking-[-0.04em] text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
              {copy.month1Price}
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="month-2"
          title={copy.month2Title}
          description={copy.month2Description}
        >
          <div className="space-y-8">
            <div className="rounded-[1.6rem] border border-white/8 bg-slate-950/20 p-5 text-[20px] font-semibold text-white">
              20 Reels {language === "ru" ? "в месяц" : language === "en" ? "per month" : "kuus"}
            </div>
            <div>
              <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-white">
                {copy.includedTitle}
              </h3>
              <div className="mt-4">
                <BulletList items={copy.monthTwo} />
              </div>
            </div>
            <div className="rounded-full border border-white/10 bg-white/6 px-6 py-4 text-[22px] font-semibold tracking-[-0.04em] text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
              {copy.month2Price}
            </div>
            <div className="rounded-[1.6rem] border border-white/8 bg-slate-950/20 p-5 text-[18px] leading-7 text-slate-200">
              <p>{copy.month3Note}</p>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="month-3"
          title={copy.month3Title}
          description={copy.month3Description}
        >
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_22rem] xl:items-start">
            <div>
              <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-white">
                {copy.targetingTitle}
              </h3>
              <div className="mt-4">
                <BulletList items={copy.targeting} />
              </div>
            </div>

            <div className="xl:mt-[3.25rem] rounded-[1.9rem] border border-violet-300/18 bg-[linear-gradient(155deg,rgba(167,139,250,0.18),rgba(255,255,255,0.04),rgba(15,23,42,0.35))] p-5 shadow-[0_24px_70px_rgba(76,29,149,0.18)] sm:p-6">
              <div className="flex min-h-full flex-col items-center text-center">
                <p className="mt-0 text-[48px] font-light tracking-[-0.08em] text-white sm:text-[58px]">
                  650€
                </p>
                <div className="mt-5 inline-flex items-center justify-center rounded-full border border-violet-300/22 bg-violet-300/10 px-3.5 py-1 text-[13px] font-medium text-violet-100 shadow-[0_12px_40px_rgba(167,139,250,0.12)]">
                  {copy.budgetBadge}
                </div>
                <div className="mt-5 w-full max-w-[19rem] rounded-[1.2rem] border border-white/8 bg-slate-950/22 px-4 py-3 text-left">
                  <div className="space-y-2">
                    {copy.pricingRows.map((row) => (
                      <div
                        key={`${row.budget}-${row.price}`}
                        className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-white/8 pb-2 text-[14px] text-slate-200 last:border-b-0 last:pb-0"
                      >
                        <span>{row.budget}</span>
                        <span className="font-semibold text-white">{row.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard id="process" title={copy.processTitle}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {copy.process.map((step, index) => (
              <div
                key={step}
                className="rounded-[1.6rem] border border-white/8 bg-slate-950/24 p-5 text-slate-100"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-[18px] leading-7">{step}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </main>

      <SiteFooter content={pageContent} language={language} />
    </div>
  );
}
