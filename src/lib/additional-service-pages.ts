import type { Language, NavItem, SiteDictionary } from "@/data/site-content";
import { siteContent } from "@/data/site-content";
import type { ServicePageCopy } from "@/lib/service-pages";

export type AdditionalServiceSlug =
  | "marketing-audit"
  | "smm"
  | "seo"
  | "website-development";

export const additionalServiceSlugs = [
  "marketing-audit",
  "smm",
  "seo",
  "website-development",
] as const satisfies readonly AdditionalServiceSlug[];

export const homeButtonLabels: Record<Language, string> = {
  ru: "Вернуться на главную",
  en: "Back to home",
  et: "Tagasi avalehele",
};

function buildDictionary(language: Language, copy: ServicePageCopy): SiteDictionary {
  const base = siteContent[language];
  const nav: NavItem[] = [
    { href: "#proof", label: copy.navigation.proof },
    { href: "#process", label: copy.navigation.process },
    { href: "#pricing", label: copy.navigation.pricing },
    { href: "#contacts", label: base.sections.contacts },
  ];

  return {
    ...base,
    nav,
    footer: {
      ...base.footer,
      links: nav,
    },
  };
}

const copy: Record<AdditionalServiceSlug, Record<Language, ServicePageCopy>> = {
  "marketing-audit": {
    ru: {
      metadata: {
        title: "Аудит маркетинга в Европе | Do.Marketing",
        description:
          "Маркетинговый аудит для бизнеса в Таллинне и Эстонии: реклама, сайт, воронка, аналитика и план роста без лишних тестов.",
        keywords: ["аудит маркетинга Таллинн", "marketing audit Tallinn", "аудит рекламы Estonia"],
        serviceName: "Маркетинговый аудит",
        serviceDescription:
          "Аудит рекламы, сайта, оффера и аналитики для бизнеса в Таллинне и по всей Эстонии.",
        serviceType: "Marketing audit",
        price: "350",
      },
      navigation: { proof: "Что проверяем", process: "Процесс", pricing: "Цена" },
      hero: {
        badge: "Marketing audit Europe",
        title: "Аудит маркетинга, который показывает, где теряются заявки и бюджет",
        description:
          "Разбираем рекламу, сайт, оффер, аналитику и путь клиента. На выходе вы получаете понятную карту проблем, быстрых правок и следующих шагов для роста.",
        bullets: ["локальный спрос Tallinn и Estonia", "разбор рекламных кабинетов и сайта", "приоритетный план действий"],
        primaryCta: "Заказать аудит",
        secondaryCta: "Как проходит аудит",
      },
      pricing: {
        serviceLabel: "Аудит",
        serviceName: "Реклама + сайт + воронка",
        status: "Available",
        stats: [
          { value: "350€", label: "старт аудита" },
          { value: "7-10", label: "рабочих дней" },
          { value: "PDF", label: "план действий" },
        ],
        budgetBadge: "подходит перед запуском рекламы",
        fromLabel: "от",
        priceLabel: "350€",
        tiers: [
          { budget: "экспресс-аудит", fee: "350€" },
          { budget: "аудит + созвон", fee: "500€" },
          { budget: "аудит + план внедрения", fee: "750€" },
        ],
      },
      benefits: {
        eyebrow: "Диагностика",
        title: "Что входит в аудит маркетинга",
        description:
          "Проверяем точки, которые чаще всего мешают бизнесу в Эстонии получать заявки дешевле и стабильнее.",
        cards: [
          { title: "Реклама", text: "Структура кампаний, аудитории, креативы, частота, цели и логика бюджета." },
          { title: "Сайт", text: "Первый экран, оффер, формы, скорость принятия решения и доверие." },
          { title: "Аналитика", text: "События, конверсии, источники, качество данных и видимость результата." },
          { title: "План роста", text: "Приоритеты: что исправить сразу, что тестировать, что отложить." },
        ],
      },
      proof: {
        eyebrow: "Local SEO intent",
        title: "Аудит адаптирован под европейские рынки",
        description:
          "Мы смотрим не абстрактный маркетинг, а конкретную нишу, язык аудитории и конкуренцию в локальном поиске и рекламе.",
        points: ["оценка русской, эстонской и английской коммуникации", "поиск слабых мест в воронке", "рекомендации по Meta Ads, Google Ads и SEO"],
      },
      process: {
        eyebrow: "Этапы",
        title: "Как проходит аудит",
        description: "Работаем быстро и предметно: собираем вводные, проверяем систему и отдаем список решений.",
        items: [
          { title: "Бриф", text: "Уточняем нишу, цели, географию, средний чек и текущие каналы." },
          { title: "Проверка", text: "Анализируем рекламу, сайт, аналитику, оффер и конкурентов." },
          { title: "Приоритеты", text: "Разделяем задачи по влиянию на заявки, продажи и доверие." },
          { title: "План", text: "Передаем документ и обсуждаем внедрение на созвоне при необходимости." },
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title: "Частые вопросы про маркетинговый аудит",
        description: "Коротко о формате и результате.",
        items: [
          { question: "Можно ли заказать аудит перед запуском рекламы?", answer: "Да. Это самый полезный момент: аудит помогает не тратить бюджет на слабую посадочную страницу или неясный оффер." },
          { question: "Вы даете конкретные правки?", answer: "Да. В отчете есть список действий по приоритету, а не только общие наблюдения." },
          { question: "Подходит ли аудит локальному бизнесу?", answer: "Да. Мы учитываем Tallinn, Estonia, языки аудитории и локальные поисковые сценарии." },
        ],
      },
      included: {
        eyebrow: "В результате",
        items: ["аудит рекламы", "аудит сайта", "проверка аналитики", "разбор оффера", "локальный SEO/GEO взгляд", "приоритетный план действий"],
        cta: "Обсудить аудит",
      },
      relatedTitle: "Другие услуги",
    },
    en: {
      metadata: {
        title: "Marketing Audit in Europe | Do.Marketing",
        description:
          "Marketing audit for businesses in Tallinn and Estonia: ads, website, funnel, analytics and a practical growth action plan.",
        keywords: ["marketing audit Tallinn", "advertising audit Estonia", "website audit Tallinn"],
        serviceName: "Marketing audit",
        serviceDescription: "Audit of advertising, website, offer and analytics for businesses in Tallinn and Estonia.",
        serviceType: "Marketing audit",
        price: "350",
      },
      navigation: { proof: "Scope", process: "Process", pricing: "Pricing" },
      hero: {
        badge: "Marketing audit Europe",
        title: "A marketing audit that shows where leads and budget are leaking",
        description:
          "We review ads, website, offer, analytics and customer journey, then turn the findings into a clear action plan.",
        bullets: ["Tallinn and Estonia demand", "ads and website review", "prioritised action plan"],
        primaryCta: "Book an audit",
        secondaryCta: "See the process",
      },
      pricing: {
        serviceLabel: "Audit",
        serviceName: "Ads + website + funnel",
        status: "Available",
        stats: [
          { value: "350€", label: "audit starts from" },
          { value: "7-10", label: "business days" },
          { value: "PDF", label: "action plan" },
        ],
        budgetBadge: "best before scaling ads",
        fromLabel: "from",
        priceLabel: "350€",
        tiers: [
          { budget: "express audit", fee: "350€" },
          { budget: "audit + call", fee: "500€" },
          { budget: "audit + implementation plan", fee: "750€" },
        ],
      },
      benefits: {
        eyebrow: "Diagnosis",
        title: "What the marketing audit covers",
        description: "We inspect the points that usually block cheaper and more stable leads in Estonia.",
        cards: [
          { title: "Ads", text: "Campaign structure, audiences, creatives, frequency, goals and budget logic." },
          { title: "Website", text: "Hero screen, offer, forms, trust signals and decision speed." },
          { title: "Analytics", text: "Events, conversions, sources, data quality and visibility of results." },
          { title: "Growth plan", text: "What to fix now, what to test next and what can wait." },
        ],
      },
      proof: {
        eyebrow: "Local intent",
        title: "Built around European market reality",
        description: "We evaluate the niche, languages, local competition and search/ad demand.",
        points: ["Russian, Estonian and English messaging review", "funnel friction points", "Meta Ads, Google Ads and SEO recommendations"],
      },
      process: {
        eyebrow: "Steps",
        title: "How the audit works",
        description: "A focused process from inputs to a ranked action plan.",
        items: [
          { title: "Brief", text: "We clarify niche, goals, geography, average order value and current channels." },
          { title: "Review", text: "We audit ads, website, analytics, offer and competitors." },
          { title: "Priorities", text: "We rank tasks by likely impact on leads, sales and trust." },
          { title: "Plan", text: "You receive the document and can discuss implementation on a call." },
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title: "Questions before a marketing audit",
        description: "What to expect from the format.",
        items: [
          { question: "Is this useful before launching ads?", answer: "Yes. It helps avoid sending budget to a weak page, unclear offer or broken tracking." },
          { question: "Do you give specific fixes?", answer: "Yes. The report is action-oriented and prioritised." },
          { question: "Is it suitable for local businesses?", answer: "Yes. We factor in Tallinn, Estonia and multilingual audience behavior." },
        ],
      },
      included: {
        eyebrow: "You receive",
        items: ["ads audit", "website audit", "analytics check", "offer review", "local SEO/GEO view", "prioritised action plan"],
        cta: "Discuss the audit",
      },
      relatedTitle: "Related services",
    },
    et: {
      metadata: {
        title: "Turundusaudit Euroopas | Do.Marketing",
        description:
          "Turundusaudit Tallinna ja Eesti ettevõtetele: reklaam, veebileht, müügilehter, analüütika ja praktiline kasvukava.",
        keywords: ["turundusaudit Tallinn", "reklaamiaudit Eesti", "veebilehe audit Tallinn"],
        serviceName: "Turundusaudit",
        serviceDescription: "Reklaami, veebilehe, pakkumise ja analüütika audit Tallinna ja Eesti ettevõtetele.",
        serviceType: "Marketing audit",
        price: "350",
      },
      navigation: { proof: "Mida vaatame", process: "Protsess", pricing: "Hind" },
      hero: {
        badge: "Turundusaudit Euroopas",
        title: "Turundusaudit, mis näitab, kuhu päringud ja eelarve kaovad",
        description:
          "Vaatame üle reklaami, veebilehe, pakkumise, analüütika ja klienditeekonna ning paneme kokku selge tegevusplaani.",
        bullets: ["Tallinna ja Eesti nõudlus", "reklaami ja veebilehe audit", "prioriteetne tegevusplaan"],
        primaryCta: "Telli audit",
        secondaryCta: "Vaata protsessi",
      },
      pricing: {
        serviceLabel: "Audit",
        serviceName: "Reklaam + veebileht + lehter",
        status: "Available",
        stats: [
          { value: "350€", label: "auditi algus" },
          { value: "7-10", label: "tööpäeva" },
          { value: "PDF", label: "tegevusplaan" },
        ],
        budgetBadge: "hea enne reklaami skaleerimist",
        fromLabel: "alates",
        priceLabel: "350€",
        tiers: [
          { budget: "kiiraudit", fee: "350€" },
          { budget: "audit + kõne", fee: "500€" },
          { budget: "audit + rakendusplaan", fee: "750€" },
        ],
      },
      benefits: {
        eyebrow: "Diagnostika",
        title: "Mida turundusaudit sisaldab",
        description: "Kontrollime kohti, mis tavaliselt takistavad Eestis odavamaid ja stabiilsemaid päringuid.",
        cards: [
          { title: "Reklaam", text: "Kampaaniad, sihtrühmad, loovlahendused, sagedus, eesmärgid ja eelarve." },
          { title: "Veebileht", text: "Esimene ekraan, pakkumine, vormid, usaldus ja otsustamise kiirus." },
          { title: "Analüütika", text: "Sündmused, konversioonid, allikad, andmekvaliteet ja tulemuse nähtavus." },
          { title: "Kasvuplaan", text: "Mida parandada kohe, mida testida ja mida edasi lükata." },
        ],
      },
      proof: {
        eyebrow: "Kohalik kavatsus",
        title: "Audit lähtub Euroopa turgudest",
        description: "Hindame nišši, keeli, konkurentsi ning otsingu- ja reklaaminõudlust.",
        points: ["vene, eesti ja inglise sõnumite ülevaatus", "lehtri nõrgad kohad", "Meta Ads, Google Ads ja SEO soovitused"],
      },
      process: {
        eyebrow: "Etapid",
        title: "Kuidas audit toimub",
        description: "Fookusega protsess sisenditest prioriteetse tegevusplaanini.",
        items: [
          { title: "Brief", text: "Täpsustame niši, eesmärgid, geograafia, keskmise ostu ja kanalid." },
          { title: "Kontroll", text: "Auditeerime reklaami, veebilehte, analüütikat, pakkumist ja konkurente." },
          { title: "Prioriteedid", text: "Reastame ülesanded mõju järgi päringutele, müügile ja usaldusele." },
          { title: "Plaan", text: "Saate dokumendi ja vajadusel arutame rakendamist kõnes." },
        ],
      },
      faq: {
        eyebrow: "KKK",
        title: "Küsimused enne turundusauditit",
        description: "Mida formaadilt oodata.",
        items: [
          { question: "Kas see sobib enne reklaami käivitamist?", answer: "Jah. Audit aitab vältida eelarve suunamist nõrgale lehele, ebaselgele pakkumisele või katkisele mõõtmisele." },
          { question: "Kas annate konkreetsed parandused?", answer: "Jah. Raport on tegevuspõhine ja prioriseeritud." },
          { question: "Kas see sobib kohalikule ettevõttele?", answer: "Jah. Arvestame Tallinna, Eesti ja mitmekeelse auditooriumiga." },
        ],
      },
      included: {
        eyebrow: "Saate",
        items: ["reklaamiaudit", "veebilehe audit", "analüütika kontroll", "pakkumise ülevaatus", "kohalik SEO/GEO vaade", "prioriteetne tegevusplaan"],
        cta: "Arutame auditit",
      },
      relatedTitle: "Teised teenused",
    },
  },
  smm: {
    ru: {
      metadata: {
        title: "SMM в Европе | Ведение Instagram, Facebook, TikTok | Do.Marketing",
        description:
          "SMM ведение для бизнеса в Таллинне и Эстонии: стратегия, Reels, упаковка аккаунта, контент-план и заявки из соцсетей.",
        keywords: ["SMM Tallinn", "ведение Instagram Таллинн", "SMM агентство Estonia"],
        serviceName: "SMM ведение",
        serviceDescription: "Ведение социальных сетей для бизнеса в Таллинне и Эстонии.",
        serviceType: "Social media marketing",
        price: "1000",
      },
      navigation: { proof: "Результат", process: "Процесс", pricing: "Цена" },
      hero: {
        badge: "SMM Europe",
        title: "SMM, который превращает соцсети в понятный канал доверия и заявок",
        description:
          "Строим систему контента для Instagram, Facebook, TikTok и YouTube Shorts: стратегия, упаковка, Reels, сторис и регулярное ведение.",
        bullets: ["контент под Tallinn и Estonia", "короткие видео и сторис", "ведение от 1000€ в месяц"],
        primaryCta: "Обсудить SMM",
        secondaryCta: "Как работаем",
      },
      pricing: {
        serviceLabel: "SMM",
        serviceName: "Instagram + Facebook + TikTok + Shorts",
        status: "Available",
        stats: [
          { value: "1000€", label: "ведение в месяц" },
          { value: "20", label: "Reels в месяц" },
          { value: "4", label: "платформы" },
        ],
        budgetBadge: "можно усилить Meta Ads бюджетом от 350€",
        fromLabel: "от",
        priceLabel: "1000€",
        tiers: [
          { budget: "SMM ведение", fee: "1000€ / месяц" },
          { budget: "первый месяц упаковки", fee: "1390€" },
          { budget: "SMM + реклама", fee: "индивидуально" },
        ],
      },
      benefits: {
        eyebrow: "Соцсети",
        title: "Что получает бизнес от SMM",
        description: "SMM помогает не просто публиковаться, а регулярно объяснять ценность и прогревать аудиторию.",
        cards: [
          { title: "Стратегия", text: "Позиционирование, рубрики, контент-план и логика прогрева." },
          { title: "Упаковка", text: "Шапка профиля, актуальные, закрепы и визуальная подача." },
          { title: "Reels", text: "Сценарии, ТЗ, монтаж, обложки и адаптация под платформы." },
          { title: "Заявки", text: "Связка контента, direct, автоматизаций и рекламы при необходимости." },
        ],
      },
      proof: {
        eyebrow: "Локальный фокус",
        title: "SMM под русскую, эстонскую и английскую аудиторию",
        description: "Контент строится с учетом языка, ниши и реального спроса в Эстонии.",
        points: ["Instagram, Facebook, TikTok и Shorts", "контент для доверия и продаж", "связка с Meta Ads и сайтом"],
      },
      process: {
        eyebrow: "Этапы",
        title: "Как выглядит SMM сопровождение",
        description: "Сначала собираем основу, потом ведем аккаунты регулярно и усиливаем результат.",
        items: [
          { title: "Стратегия", text: "Определяем позиционирование, аудиторию, рубрики и цели контента." },
          { title: "Упаковка", text: "Оформляем профиль и точки доверия перед регулярным продвижением." },
          { title: "Контент", text: "Готовим сценарии, Reels, сторис, обложки и публикации." },
          { title: "Рост", text: "Смотрим реакцию аудитории и подключаем рекламу или блогеров." },
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title: "Вопросы про SMM",
        description: "Что важно знать перед стартом.",
        items: [
          { question: "Сколько стоит SMM?", answer: "Регулярное ведение стоит от 1000€ в месяц. Первый месяц упаковки может стоить 1390€ при полном запуске системы." },
          { question: "Вы делаете Reels?", answer: "Да. В работу входят сценарии, ТЗ на съемку, монтаж и публикация коротких видео." },
          { question: "Можно ли подключить рекламу?", answer: "Да. SMM можно усилить Meta Ads, когда контент и посадочная логика готовы." },
        ],
      },
      included: {
        eyebrow: "Входит",
        items: ["стратегия контента", "контент-план", "Reels и сторис", "оформление профиля", "постинг", "анализ реакции аудитории"],
        cta: "Обсудить SMM",
      },
      relatedTitle: "Другие услуги",
    },
    en: {
      metadata: {
        title: "SMM in Europe | Instagram, Facebook, TikTok Management | Do.Marketing",
        description:
          "SMM management for businesses in Tallinn and Estonia: strategy, Reels, account packaging, content planning and social media leads.",
        keywords: ["SMM Tallinn", "social media management Estonia", "Instagram management Tallinn"],
        serviceName: "SMM management",
        serviceDescription: "Social media management for businesses in Tallinn and Estonia.",
        serviceType: "Social media marketing",
        price: "1000",
      },
      navigation: { proof: "Results", process: "Process", pricing: "Pricing" },
      hero: {
        badge: "SMM Europe",
        title: "SMM that turns social media into trust, attention and leads",
        description:
          "We build a content system for Instagram, Facebook, TikTok and YouTube Shorts: strategy, packaging, Reels, stories and ongoing management.",
        bullets: ["content for Tallinn and Estonia", "short video and stories", "management from 1000€ per month"],
        primaryCta: "Discuss SMM",
        secondaryCta: "See the process",
      },
      pricing: {
        serviceLabel: "SMM",
        serviceName: "Instagram + Facebook + TikTok + Shorts",
        status: "Available",
        stats: [
          { value: "1000€", label: "monthly management" },
          { value: "20", label: "Reels per month" },
          { value: "4", label: "platforms" },
        ],
        budgetBadge: "can be supported with Meta Ads from 350€",
        fromLabel: "from",
        priceLabel: "1000€",
        tiers: [
          { budget: "SMM management", fee: "1000€ / month" },
          { budget: "first month packaging", fee: "1390€" },
          { budget: "SMM + ads", fee: "custom" },
        ],
      },
      benefits: {
        eyebrow: "Social media",
        title: "What SMM gives the business",
        description: "SMM is not just posting. It explains value, builds trust and prepares people to enquire.",
        cards: [
          { title: "Strategy", text: "Positioning, content pillars, plan and warm-up logic." },
          { title: "Packaging", text: "Bio, highlights, pinned posts and visual presentation." },
          { title: "Reels", text: "Scripts, briefs, editing, covers and platform adaptation." },
          { title: "Leads", text: "Content, direct messages, automation and ads can work together." },
        ],
      },
      proof: {
        eyebrow: "Local focus",
        title: "SMM for multilingual audiences",
        description: "Content is planned around language, niche and real demand in Estonia.",
        points: ["Instagram, Facebook, TikTok and Shorts", "content for trust and sales", "connected with Meta Ads and the website"],
      },
      process: {
        eyebrow: "Steps",
        title: "How SMM management works",
        description: "We build the foundation first, then manage the channels consistently.",
        items: [
          { title: "Strategy", text: "We define positioning, audience, content pillars and goals." },
          { title: "Packaging", text: "We prepare the profile and trust points before growth." },
          { title: "Content", text: "We create scripts, Reels, stories, covers and posts." },
          { title: "Growth", text: "We analyse response and connect ads or influencers when useful." },
        ],
      },
      faq: {
        eyebrow: "FAQ",
        title: "Questions about SMM",
        description: "What to know before starting.",
        items: [
          { question: "How much does SMM cost?", answer: "Ongoing management starts from 1000€ per month. A full first-month packaging setup can cost 1390€." },
          { question: "Do you create Reels?", answer: "Yes. Scripts, filming briefs, editing and publishing can be included." },
          { question: "Can ads be added?", answer: "Yes. SMM can be supported with Meta Ads once the content and funnel are ready." },
        ],
      },
      included: {
        eyebrow: "Included",
        items: ["content strategy", "content plan", "Reels and stories", "profile packaging", "publishing", "audience response analysis"],
        cta: "Discuss SMM",
      },
      relatedTitle: "Related services",
    },
    et: {
      metadata: {
        title: "SMM Euroopas | Instagrami, Facebooki ja TikToki haldus | Do.Marketing",
        description:
          "SMM haldus Tallinna ja Eesti ettevõtetele: strateegia, Reels, konto pakendamine, sisukava ja päringud sotsiaalmeediast.",
        keywords: ["SMM Tallinn", "sotsiaalmeedia haldus Eesti", "Instagrami haldus Tallinn"],
        serviceName: "SMM haldus",
        serviceDescription: "Sotsiaalmeedia haldus Tallinna ja Eesti ettevõtetele.",
        serviceType: "Social media marketing",
        price: "1000",
      },
      navigation: { proof: "Tulemus", process: "Protsess", pricing: "Hind" },
      hero: {
        badge: "SMM Euroopas",
        title: "SMM, mis muudab sotsiaalmeedia usalduse ja päringute kanaliks",
        description:
          "Ehitame sisusüsteemi Instagrami, Facebooki, TikToki ja YouTube Shortsi jaoks: strateegia, pakendamine, Reels, storyd ja haldus.",
        bullets: ["sisu Tallinna ja Eesti jaoks", "lühivideod ja storyd", "haldus alates 1000€ kuus"],
        primaryCta: "Arutame SMMi",
        secondaryCta: "Vaata protsessi",
      },
      pricing: {
        serviceLabel: "SMM",
        serviceName: "Instagram + Facebook + TikTok + Shorts",
        status: "Available",
        stats: [
          { value: "1000€", label: "kuuhaldus" },
          { value: "20", label: "Reelsi kuus" },
          { value: "4", label: "platvormi" },
        ],
        budgetBadge: "saab toetada Meta Ads eelarvega alates 350€",
        fromLabel: "alates",
        priceLabel: "1000€",
        tiers: [
          { budget: "SMM haldus", fee: "1000€ / kuu" },
          { budget: "esimese kuu pakendamine", fee: "1390€" },
          { budget: "SMM + reklaam", fee: "personaalselt" },
        ],
      },
      benefits: {
        eyebrow: "Sotsiaalmeedia",
        title: "Mida SMM ettevõttele annab",
        description: "SMM ei ole ainult postitamine. See selgitab väärtust, kasvatab usaldust ja valmistab päringuid ette.",
        cards: [
          { title: "Strateegia", text: "Positsioneerimine, rubriigid, sisukava ja soojendusloogika." },
          { title: "Pakendamine", text: "Bio, highlight'id, kinnitatud postitused ja visuaalne esitus." },
          { title: "Reels", text: "Stsenaariumid, ülesanded, montaaž, cover'id ja kohandamine." },
          { title: "Päringud", text: "Sisu, sõnumid, automaatika ja reklaam saavad töötada koos." },
        ],
      },
      proof: {
        eyebrow: "Kohalik fookus",
        title: "SMM vene, eesti ja inglise publikule",
        description: "Sisu planeeritakse keele, niši ja Eesti tegeliku nõudluse järgi.",
        points: ["Instagram, Facebook, TikTok ja Shorts", "sisu usalduse ja müügi jaoks", "ühendus Meta Adsi ja veebilehega"],
      },
      process: {
        eyebrow: "Etapid",
        title: "Kuidas SMM haldus töötab",
        description: "Esmalt ehitame aluse, seejärel haldame kanaleid järjepidevalt.",
        items: [
          { title: "Strateegia", text: "Määratleme positsioneerimise, auditooriumi, rubriigid ja eesmärgid." },
          { title: "Pakendamine", text: "Valmistame profiili ja usalduspunktid kasvuks ette." },
          { title: "Sisu", text: "Loome stsenaariumid, Reelsid, storyd, cover'id ja postitused." },
          { title: "Kasv", text: "Analüüsime reaktsiooni ja lisame reklaami või influencer'id." },
        ],
      },
      faq: {
        eyebrow: "KKK",
        title: "Küsimused SMMi kohta",
        description: "Mida enne alustamist teada.",
        items: [
          { question: "Kui palju SMM maksab?", answer: "Regulaarne haldus algab 1000€ kuus. Täielik esimese kuu pakendamine võib maksta 1390€." },
          { question: "Kas teete Reelse?", answer: "Jah. Stsenaariumid, võtteülesanded, montaaž ja avaldamine võivad kuuluda töösse." },
          { question: "Kas reklaami saab lisada?", answer: "Jah. SMMi saab toetada Meta Adsiga, kui sisu ja lehter on valmis." },
        ],
      },
      included: {
        eyebrow: "Sisaldub",
        items: ["sisustrateegia", "sisukava", "Reels ja storyd", "profiili pakendamine", "postitamine", "auditooriumi reaktsiooni analüüs"],
        cta: "Arutame SMMi",
      },
      relatedTitle: "Teised teenused",
    },
  },
  seo: {
    ru: createSeoCopy("ru"),
    en: createSeoCopy("en"),
    et: createSeoCopy("et"),
  },
  "website-development": {
    ru: createWebsiteCopy("ru"),
    en: createWebsiteCopy("en"),
    et: createWebsiteCopy("et"),
  },
};

function createSeoCopy(language: Language): ServicePageCopy {
  if (language === "en") {
    return {
      metadata: {
        title: "SEO Optimisation in Europe | Do.Marketing",
        description: "SEO optimisation for businesses in Tallinn and Estonia: technical SEO, content, local intent and search visibility.",
        keywords: ["SEO Tallinn", "SEO agency Estonia", "local SEO Tallinn"],
        serviceName: "SEO optimisation",
        serviceDescription: "SEO optimisation for businesses in Tallinn and Estonia.",
        serviceType: "SEO",
        price: "650",
      },
      navigation: { proof: "SEO scope", process: "Process", pricing: "Pricing" },
      hero: {
        badge: "SEO Europe",
        title: "SEO optimisation that helps local demand find your business",
        description: "We improve structure, metadata, content, internal links and local intent so pages can rank for relevant searches in Estonia.",
        bullets: ["technical and on-page SEO", "Tallinn and Estonia keywords", "content and internal links"],
        primaryCta: "Discuss SEO",
        secondaryCta: "See the process",
      },
      pricing: {
        serviceLabel: "SEO",
        serviceName: "Technical + content + local search",
        status: "Available",
        stats: [{ value: "650€", label: "monthly start" }, { value: "3", label: "languages possible" }, { value: "GEO", label: "AI search ready" }],
        budgetBadge: "recommended for 3+ months",
        fromLabel: "from",
        priceLabel: "650€",
        tiers: [{ budget: "SEO audit", fee: "450€" }, { budget: "monthly SEO", fee: "650€+" }, { budget: "SEO + content", fee: "custom" }],
      },
      benefits: { eyebrow: "Search", title: "What SEO work includes", description: "We cover the technical and content signals that help pages become understandable and rankable.", cards: [{ title: "Metadata", text: "Titles, descriptions, H1/H2 structure and snippet quality." }, { title: "Technical SEO", text: "Indexability, canonical logic, sitemap, redirects and page structure." }, { title: "Content", text: "Search intent, service depth, FAQs and local proof." }, { title: "Internal links", text: "Clear links between services, cases and conversion pages." }] },
      proof: { eyebrow: "SEO", title: "Built for European search intent", description: "SEO pages need to match how people search by country, service and language.", points: ["Russian, English and Estonian keyword coverage", "service pages for commercial intent", "structured data and crawlable pages"] },
      process: { eyebrow: "Steps", title: "How SEO optimisation works", description: "We start with crawlability, then improve pages and content around real search intent.", items: [{ title: "Audit", text: "We check indexability, metadata, structure, duplicates and page intent." }, { title: "Keyword map", text: "We map services to search queries by language and location." }, { title: "Implementation", text: "We improve copy, headings, internal links and schema." }, { title: "Growth", text: "We expand useful pages and monitor rankings and leads." }] },
      faq: { eyebrow: "FAQ", title: "SEO questions", description: "What to know before starting.", items: [{ question: "How fast does SEO work?", answer: "Most service SEO needs several months, but technical and metadata fixes can improve visibility faster." }, { question: "Do you do local SEO?", answer: "Yes. We focus on Tallinn, Estonia and multilingual commercial intent." }, { question: "Can SEO work with ads?", answer: "Yes. SEO pages can also improve paid traffic quality and conversion." }] },
      included: { eyebrow: "Included", items: ["SEO audit", "keyword map", "metadata", "content structure", "internal links", "structured data"], cta: "Discuss SEO" },
      relatedTitle: "Related services",
    };
  }

  if (language === "et") {
    return {
      metadata: { title: "SEO optimeerimine Euroopas | Do.Marketing", description: "SEO optimeerimine Euroopa ettevõtetele: tehniline SEO, sisu, otsing ja nähtavus.", keywords: ["SEO Tallinn", "SEO agentuur Eesti", "kohalik SEO Tallinn"], serviceName: "SEO optimeerimine", serviceDescription: "SEO optimeerimine Euroopa ettevõtetele.", serviceType: "SEO", price: "650" },
      navigation: { proof: "SEO maht", process: "Protsess", pricing: "Hind" },
      hero: { badge: "SEO Euroopas", title: "SEO optimeerimine, mis aitab nõudlusel teie ettevõtte leida", description: "Parandame struktuuri, metat, sisu, siselinke ja otsingukavatsust, et lehed saaksid Euroopas paremini nähtavaks.", bullets: ["tehniline ja on-page SEO", "Euroopa märksõnad", "sisu ja siselingid"], primaryCta: "Arutame SEOd", secondaryCta: "Vaata protsessi" },
      pricing: { serviceLabel: "SEO", serviceName: "Tehniline + sisu + kohalik otsing", status: "Available", stats: [{ value: "650€", label: "kuuhalduse algus" }, { value: "3", label: "keelt võimalik" }, { value: "GEO", label: "AI otsinguks valmis" }], budgetBadge: "soovitame vähemalt 3 kuud", fromLabel: "alates", priceLabel: "650€", tiers: [{ budget: "SEO audit", fee: "450€" }, { budget: "igakuine SEO", fee: "650€+" }, { budget: "SEO + sisu", fee: "personaalselt" }] },
      benefits: { eyebrow: "Otsing", title: "Mida SEO töö sisaldab", description: "Katame tehnilised ja sisulised signaalid, mis teevad lehed otsingule arusaadavaks.", cards: [{ title: "Metadata", text: "Title, description, H1/H2 struktuur ja snippet." }, { title: "Tehniline SEO", text: "Indekseerimine, canonical, sitemap, redirectid ja struktuur." }, { title: "Sisu", text: "Otsingukavatsus, teenuse sügavus, KKK ja kohalik tõestus." }, { title: "Siselingid", text: "Selged lingid teenuste, tööde ja kontaktini." }] },
      proof: { eyebrow: "SEO", title: "Euroopa otsingukavatsuse jaoks", description: "SEO lehed peavad vastama sellele, kuidas inimesed otsivad riigi, teenuse ja keele järgi.", points: ["vene, inglise ja eesti märksõnad", "teenuselehed ärilise kavatsuse jaoks", "struktureeritud andmed ja crawlable lehed"] },
      process: { eyebrow: "Etapid", title: "Kuidas SEO optimeerimine töötab", description: "Alustame indekseerimisest, seejärel parandame lehed otsingukavatsuse järgi.", items: [{ title: "Audit", text: "Kontrollime indekseerimist, metat, struktuuri, duplikaate ja lehe kavatsust." }, { title: "Märksõnad", text: "Seome teenused päringutega keele ja asukoha järgi." }, { title: "Rakendus", text: "Parandame teksti, pealkirju, siselinke ja schema't." }, { title: "Kasv", text: "Laiendame kasulikke lehti ning jälgime positsioone ja päringuid." }] },
      faq: { eyebrow: "KKK", title: "SEO küsimused", description: "Mida enne alustamist teada.", items: [{ question: "Kui kiiresti SEO töötab?", answer: "Teenuse SEO vajab enamasti mitu kuud, kuid tehnilised ja metadata parandused võivad nähtavust kiirendada." }, { question: "Kas teete kohalikku SEOd?", answer: "Jah. Keskendume Tallinnale, Eestile ja mitmekeelsele ärilisele kavatsusele." }, { question: "Kas SEO töötab koos reklaamiga?", answer: "Jah. SEO lehed parandavad sageli ka tasulise liikluse kvaliteeti ja konversiooni." }] },
      included: { eyebrow: "Sisaldub", items: ["SEO audit", "märksõnade kaart", "metadata", "sisu struktuur", "siselingid", "struktureeritud andmed"], cta: "Arutame SEOd" },
      relatedTitle: "Teised teenused",
    };
  }

  return {
    metadata: { title: "SEO оптимизация в Европе | Do.Marketing", description: "SEO оптимизация для бизнеса в Европе: техническое SEO, контент, поиск и видимость.", keywords: ["SEO Таллинн", "SEO агентство Эстония", "локальное SEO Tallinn"], serviceName: "SEO оптимизация", serviceDescription: "SEO оптимизация для бизнеса в Европе.", serviceType: "SEO", price: "650" },
    navigation: { proof: "Что делаем", process: "Процесс", pricing: "Цена" },
    hero: { badge: "SEO Europe", title: "SEO оптимизация, чтобы спрос находил ваш бизнес", description: "Улучшаем структуру, метаданные, контент, внутренние ссылки и поисковый интент, чтобы страницы могли ранжироваться в Европе.", bullets: ["техническое и on-page SEO", "европейские ключи", "контент и внутренние ссылки"], primaryCta: "Обсудить SEO", secondaryCta: "Как работаем" },
    pricing: { serviceLabel: "SEO", serviceName: "Техника + контент + локальный поиск", status: "Available", stats: [{ value: "650€", label: "старт в месяц" }, { value: "3", label: "языка возможно" }, { value: "GEO", label: "готовность к AI поиску" }], budgetBadge: "рекомендуемый срок от 3 месяцев", fromLabel: "от", priceLabel: "650€", tiers: [{ budget: "SEO аудит", fee: "450€" }, { budget: "ежемесячное SEO", fee: "650€+" }, { budget: "SEO + контент", fee: "индивидуально" }] },
    benefits: { eyebrow: "Поиск", title: "Что входит в SEO работу", description: "Закрываем технические и контентные сигналы, которые помогают страницам стать понятными для поиска.", cards: [{ title: "Метаданные", text: "Title, description, H1/H2 структура и качество сниппета." }, { title: "Техническое SEO", text: "Индексация, canonical, sitemap, редиректы и структура страниц." }, { title: "Контент", text: "Поисковый интент, глубина услуги, FAQ и локальное доверие." }, { title: "Внутренние ссылки", text: "Связь между услугами, кейсами и конверсионными страницами." }] },
    proof: { eyebrow: "SEO", title: "Под поисковый спрос в Европе", description: "SEO-страницы должны совпадать с тем, как люди ищут услугу по стране, языку и намерению.", points: ["русские, английские и эстонские ключевые слова", "страницы услуг под коммерческий интент", "структурированные данные и индексируемые URL"] },
    process: { eyebrow: "Этапы", title: "Как проходит SEO оптимизация", description: "Сначала проверяем индексируемость, затем усиливаем страницы вокруг реального спроса.", items: [{ title: "Аудит", text: "Проверяем индексацию, метаданные, структуру, дубли и интент страниц." }, { title: "Карта ключей", text: "Связываем услуги с запросами по языку и географии." }, { title: "Внедрение", text: "Улучшаем тексты, заголовки, внутренние ссылки и schema." }, { title: "Рост", text: "Расширяем полезные страницы и отслеживаем позиции и заявки." }] },
    faq: { eyebrow: "FAQ", title: "Вопросы про SEO", description: "Что важно знать перед стартом.", items: [{ question: "Как быстро работает SEO?", answer: "Обычно SEO для услуг требует нескольких месяцев, но технические и мета-правки могут улучшить видимость быстрее." }, { question: "Вы делаете локальное SEO?", answer: "Да. Мы фокусируемся на Tallinn, Estonia и мультиязычном коммерческом интенте." }, { question: "SEO можно совмещать с рекламой?", answer: "Да. SEO-страницы часто улучшают качество платного трафика и конверсию." }] },
    included: { eyebrow: "Входит", items: ["SEO аудит", "карта ключевых слов", "метаданные", "структура контента", "внутренние ссылки", "структурированные данные"], cta: "Обсудить SEO" },
    relatedTitle: "Другие услуги",
  };
}

function createWebsiteCopy(language: Language): ServicePageCopy {
  if (language === "en") {
    return {
      metadata: { title: "Website Development in Europe | Do.Marketing", description: "Conversion-focused website development for businesses in Europe: landing pages, service pages, SEO structure and lead forms.", keywords: ["website development Tallinn", "landing page Estonia", "web design Tallinn"], serviceName: "Website development", serviceDescription: "Conversion-focused website and landing page development for businesses in Europe.", serviceType: "Website development", price: "1200" },
      navigation: { proof: "Website scope", process: "Process", pricing: "Pricing" },
      hero: { badge: "Website development Europe", title: "Website development for businesses that need leads, not just a pretty page", description: "We design and build landing pages and service pages with clear offer, SEO structure, trust blocks and contact flow.", bullets: ["conversion-first structure", "SEO-ready service pages", "forms and analytics logic"], primaryCta: "Discuss a website", secondaryCta: "See the process" },
      pricing: { serviceLabel: "Website", serviceName: "Landing pages + service pages", status: "Available", stats: [{ value: "1200€", label: "landing page from" }, { value: "3", label: "languages possible" }, { value: "SEO", label: "structure included" }], budgetBadge: "scope depends on pages and content", fromLabel: "from", priceLabel: "1200€", tiers: [{ budget: "landing page", fee: "1200€+" }, { budget: "service website", fee: "2200€+" }, { budget: "multilingual website", fee: "custom" }] },
      benefits: { eyebrow: "Conversion", title: "What a business website needs", description: "A strong website should explain the offer, build trust and make the next step obvious.", cards: [{ title: "Offer", text: "Clear first screen, service value and reasons to choose you." }, { title: "SEO structure", text: "Pages, metadata, headings and internal links prepared for search." }, { title: "Trust", text: "Cases, proof blocks, FAQs, contacts and company details." }, { title: "Leads", text: "Forms, calls, buttons and analytics events aligned with conversion." }] },
      proof: { eyebrow: "European market", title: "Websites for European demand", description: "We build pages that can support ads, SEO and multilingual communication.", points: ["Russian, English and Estonian versions", "service pages for search", "ready for Meta Ads and Google Ads traffic"] },
      process: { eyebrow: "Steps", title: "How website development works", description: "From offer and structure to launch-ready pages.", items: [{ title: "Brief", text: "We define goals, audience, service list, languages and conversion points." }, { title: "Structure", text: "We plan sections, page hierarchy, SEO targets and internal links." }, { title: "Build", text: "We create responsive pages with clear content and forms." }, { title: "Launch", text: "We check metadata, sitemap, analytics and mobile layout." }] },
      faq: { eyebrow: "FAQ", title: "Website development questions", description: "Useful details before starting.", items: [{ question: "Can you build a multilingual site?", answer: "Yes. We can plan Russian, English and Estonian pages with hreflang logic." }, { question: "Is SEO included?", answer: "Basic SEO structure, metadata and service-page logic are included in the page plan." }, { question: "Can the site be used for ads?", answer: "Yes. The structure is built to support Meta Ads and Google Ads traffic." }] },
      included: { eyebrow: "Included", items: ["page structure", "responsive design", "SEO metadata", "lead forms", "trust blocks", "launch checklist"], cta: "Discuss a website" },
      relatedTitle: "Related services",
    };
  }

  if (language === "et") {
    return {
      metadata: { title: "Veebilehe arendus Euroopas | Do.Marketing", description: "Konversioonile suunatud veebilehe arendus Euroopa ettevõtetele: landing lehed, teenuselehed, SEO struktuur ja vormid.", keywords: ["veebilehe arendus Tallinn", "kodulehe tegemine Eesti", "landing page Tallinn"], serviceName: "Veebilehe arendus", serviceDescription: "Konversioonile suunatud veebilehed Euroopa ettevõtetele.", serviceType: "Website development", price: "1200" },
      navigation: { proof: "Maht", process: "Protsess", pricing: "Hind" },
      hero: { badge: "Veebilehe arendus Euroopas", title: "Veebilehe arendus ettevõtetele, kes vajavad päringuid, mitte lihtsalt ilusat lehte", description: "Loome landing lehti ja teenuselehti selge pakkumise, SEO struktuuri, usaldusplokkide ja kontaktiteekonnaga.", bullets: ["konversioonile suunatud struktuur", "SEO-valmis teenuselehed", "vormid ja analüütika"], primaryCta: "Arutame veebilehte", secondaryCta: "Vaata protsessi" },
      pricing: { serviceLabel: "Veebileht", serviceName: "Landing + teenuselehed", status: "Available", stats: [{ value: "1200€", label: "landing alates" }, { value: "3", label: "keelt võimalik" }, { value: "SEO", label: "struktuur sees" }], budgetBadge: "maht sõltub lehtedest ja sisust", fromLabel: "alates", priceLabel: "1200€", tiers: [{ budget: "landing page", fee: "1200€+" }, { budget: "teenuse veebileht", fee: "2200€+" }, { budget: "mitmekeelne veeb", fee: "personaalselt" }] },
      benefits: { eyebrow: "Konversioon", title: "Mida tugev veebileht vajab", description: "Hea veebileht selgitab pakkumist, kasvatab usaldust ja teeb järgmise sammu lihtsaks.", cards: [{ title: "Pakkumine", text: "Selge esimene ekraan, teenuse väärtus ja valiku põhjused." }, { title: "SEO struktuur", text: "Lehed, meta, pealkirjad ja siselingid otsingu jaoks." }, { title: "Usaldus", text: "Tööd, tõestusplokid, KKK, kontaktid ja ettevõtte info." }, { title: "Päringud", text: "Vormid, kõned, nupud ja analüütika konversiooni järgi." }] },
      proof: { eyebrow: "Euroopa turg", title: "Veebilehed Euroopa nõudluse jaoks", description: "Ehitame lehed, mis toetavad reklaami, SEOd ja mitmekeelset suhtlust.", points: ["vene, inglise ja eesti versioonid", "teenuselehed otsingu jaoks", "valmis Meta Ads ja Google Ads liikluseks"] },
      process: { eyebrow: "Etapid", title: "Kuidas veebilehe arendus toimub", description: "Pakkumisest ja struktuurist launch-valmis lehtedeni.", items: [{ title: "Brief", text: "Määratleme eesmärgid, auditooriumi, teenused, keeled ja konversioonid." }, { title: "Struktuur", text: "Planeerime sektsioonid, lehtede hierarhia, SEO sihid ja lingid." }, { title: "Arendus", text: "Loome responsive lehed selge sisu ja vormidega." }, { title: "Launch", text: "Kontrollime metadata, sitemap'i, analüütika ja mobiilivaate." }] },
      faq: { eyebrow: "KKK", title: "Küsimused veebilehe kohta", description: "Mida enne alustamist teada.", items: [{ question: "Kas teete mitmekeelse veebilehe?", answer: "Jah. Saame planeerida vene, inglise ja eesti lehed hreflang loogikaga." }, { question: "Kas SEO on sees?", answer: "Põhiline SEO struktuur, meta ja teenuselehtede loogika on plaanis sees." }, { question: "Kas leht sobib reklaamile?", answer: "Jah. Struktuur toetab Meta Ads ja Google Ads liiklust." }] },
      included: { eyebrow: "Sisaldub", items: ["lehe struktuur", "responsive disain", "SEO metadata", "päringuvormid", "usaldusplokid", "launch checklist"], cta: "Arutame veebilehte" },
      relatedTitle: "Teised teenused",
    };
  }

  return {
    metadata: { title: "Разработка сайта в Европе | Do.Marketing", description: "Разработка сайта для бизнеса в Европе: лендинги, страницы услуг, SEO структура, формы заявок и аналитика.", keywords: ["разработка сайта Таллинн", "создание сайта Эстония", "лендинг Tallinn"], serviceName: "Разработка сайта", serviceDescription: "Разработка конверсионных сайтов и лендингов для бизнеса в Европе.", serviceType: "Website development", price: "1200" },
    navigation: { proof: "Что входит", process: "Процесс", pricing: "Цена" },
    hero: { badge: "Website development Europe", title: "Разработка сайта для бизнеса, которому нужны заявки, а не просто красивая страница", description: "Проектируем и собираем лендинги и страницы услуг с понятным оффером, SEO-структурой, блоками доверия и формами заявок.", bullets: ["структура под конверсию", "SEO-ready страницы услуг", "формы и аналитика"], primaryCta: "Обсудить сайт", secondaryCta: "Как работаем" },
    pricing: { serviceLabel: "Сайт", serviceName: "Лендинги + страницы услуг", status: "Available", stats: [{ value: "1200€", label: "лендинг от" }, { value: "3", label: "языка возможно" }, { value: "SEO", label: "структура включена" }], budgetBadge: "стоимость зависит от страниц и контента", fromLabel: "от", priceLabel: "1200€", tiers: [{ budget: "лендинг", fee: "1200€+" }, { budget: "сайт услуг", fee: "2200€+" }, { budget: "мультиязычный сайт", fee: "индивидуально" }] },
    benefits: { eyebrow: "Конверсия", title: "Что нужно сильному сайту", description: "Сайт должен объяснять оффер, вызывать доверие и быстро вести к заявке.", cards: [{ title: "Оффер", text: "Понятный первый экран, ценность услуги и причины выбрать вас." }, { title: "SEO структура", text: "Страницы, метаданные, заголовки и внутренние ссылки под поиск." }, { title: "Доверие", text: "Кейсы, доказательства, FAQ, контакты и данные компании." }, { title: "Заявки", text: "Формы, звонки, кнопки и события аналитики вокруг конверсии." }] },
    proof: { eyebrow: "Европейский рынок", title: "Сайты под спрос в Европе", description: "Собираем страницы, которые поддерживают рекламу, SEO и мультиязычную коммуникацию.", points: ["русская, английская и эстонская версии", "страницы услуг для поиска", "готовность к Meta Ads и Google Ads трафику"] },
    process: { eyebrow: "Этапы", title: "Как проходит разработка сайта", description: "От оффера и структуры до готовых к запуску страниц.", items: [{ title: "Бриф", text: "Определяем цели, аудиторию, список услуг, языки и точки конверсии." }, { title: "Структура", text: "Планируем секции, иерархию страниц, SEO-цели и внутренние ссылки." }, { title: "Сборка", text: "Создаем адаптивные страницы с понятным контентом и формами." }, { title: "Запуск", text: "Проверяем metadata, sitemap, аналитику и мобильную верстку." }] },
    faq: { eyebrow: "FAQ", title: "Вопросы про разработку сайта", description: "Что важно знать перед стартом.", items: [{ question: "Можно сделать сайт на 3 языках?", answer: "Да. Мы можем спланировать русские, английские и эстонские страницы с hreflang логикой." }, { question: "SEO входит в работу?", answer: "Базовая SEO-структура, метаданные и логика страниц услуг входят в план страницы." }, { question: "Сайт подойдет для рекламы?", answer: "Да. Структура делается так, чтобы принимать трафик из Meta Ads и Google Ads." }] },
    included: { eyebrow: "Входит", items: ["структура страницы", "адаптивный дизайн", "SEO метаданные", "формы заявок", "блоки доверия", "проверка перед запуском"], cta: "Обсудить сайт" },
    relatedTitle: "Другие услуги",
  };
}

export function getAdditionalServicePageCopy(slug: AdditionalServiceSlug, language: Language) {
  return copy[slug][language];
}

export function getAdditionalServicePageDictionary(slug: AdditionalServiceSlug, language: Language) {
  return buildDictionary(language, getAdditionalServicePageCopy(slug, language));
}
