import type { Language, NavItem, SiteDictionary } from "@/data/site-content";
import { siteContent } from "@/data/site-content";

export type ServiceSlug = "meta-ads" | "google-ads";

export type ServicePageMetadata = {
  title: string;
  description: string;
  keywords: string[];
  serviceName: string;
  serviceDescription: string;
  serviceType: string;
  price: string;
};

export type ServicePageCopy = {
  metadata: ServicePageMetadata;
  navigation: {
    proof: string;
    process: string;
    pricing: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    bullets: string[];
    primaryCta: string;
    secondaryCta: string;
  };
  pricing: {
    serviceLabel: string;
    serviceName: string;
    status: string;
    stats: Array<{ value: string; label: string }>;
    budgetBadge: string;
    fromLabel: string;
    priceLabel: string;
    tiers: Array<{ budget: string; fee: string }>;
    note?: string;
  };
  benefits: {
    eyebrow: string;
    title: string;
    description: string;
    cards: Array<{ title: string; text: string }>;
  };
  proof: {
    eyebrow: string;
    title: string;
    description: string;
    points: string[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ title: string; text: string }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ question: string; answer: string }>;
  };
  included: {
    eyebrow: string;
    items: string[];
    cta: string;
  };
  relatedTitle: string;
};

function buildServicePageDictionary(
  language: Language,
  copy: ServicePageCopy,
): SiteDictionary {
  const base = siteContent[language];
  const nav: NavItem[] = [
    { href: "#services", label: base.sections.services },
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
      links: nav.slice(1),
    },
  };
}

const metaAdsCopy: Record<Language, ServicePageCopy> = {
  ru: {
    metadata: {
      title: "Meta Ads Tallinn | Реклама Facebook и Instagram в Эстонии | Do.Marketing",
      description:
        "Настройка и ведение Meta Ads в Tallinn и по всей Эстонии: Facebook Ads, Instagram Ads, креативы, аудитории, оптимизация и рост заявок для бизнеса.",
      keywords: [
        "Meta Ads Tallinn",
        "Facebook Ads Tallinn",
        "Instagram Ads Estonia",
        "таргетированная реклама Таллинн",
      ],
      serviceName: "Meta Ads management in Tallinn",
      serviceDescription:
        "Настройка и ведение рекламы Meta Ads для бизнеса в Таллинне и по всей Эстонии.",
      serviceType: "Meta Ads advertising",
      price: "650",
    },
    navigation: {
      proof: "Результат",
      process: "Этапы",
      pricing: "Цены",
    },
    hero: {
      badge: "Meta Ads Tallinn для рекламы в Facebook и Instagram",
      title:
        "Настройка и ведение Meta Ads, которые приводят клиентов в Таллинне и по всей Эстонии",
      description:
        "Запускаем рекламу в Facebook и Instagram с фокусом на заявки, продажи и окупаемость. Собираем структуру кабинета, креативы, аудитории и логику тестов под ваш реальный рынок.",
      bullets: [
        "собираем кампании под локальный спрос в Tallinn и по Эстонии",
        "готовим офферы, тексты и креативы под конкретную нишу",
        "оптимизируем стоимость лида, частоту и окупаемость рекламы",
      ],
      primaryCta: "Оставить заявку",
      secondaryCta: "Посмотреть этапы",
    },
    pricing: {
      serviceLabel: "Meta Ads",
      serviceName: "Facebook + Instagram + оптимизация",
      status: "Active",
      stats: [
        { value: "650€", label: "старт ведения" },
        { value: "350€+", label: "рекомендуемый бюджет" },
        { value: "ROAS", label: "фокус на окупаемости" },
      ],
      budgetBadge: "+ рекламный бюджет: от 350€",
      fromLabel: "от",
      priceLabel: "650€",
      tiers: [
        { budget: "до 1500€", fee: "650€" },
        { budget: "до 2500€", fee: "770€" },
        { budget: "от 2500€", fee: "990€" },
      ],
    },
    benefits: {
      eyebrow: "Результат",
      title: "Что получает бизнес от Meta Ads в Эстонии",
      description:
        "Сильная реклама в Meta начинается не с кнопки запуска, а с правильной связки оффера, аудитории, креатива и посадочной страницы.",
      cards: [
        {
          title: "Локальный спрос",
          text: "Собираем структуру кампаний так, чтобы реклама точно работала по географии, языкам и сегментам аудитории в Эстонии.",
        },
        {
          title: "Понятная воронка",
          text: "Связываем оффер, посадочную страницу, форму и сообщения в одну систему, а не просто запускаем объявления.",
        },
        {
          title: "Креативы под услугу",
          text: "Готовим тексты, статику, видеоидеи и ТЗ на съемку под ваш продукт, спрос и скорость тестирования.",
        },
        {
          title: "Оптимизация без хаоса",
          text: "Следим за ценой лида, CTR, частотой и качеством аудитории, усиливая рабочие связки без слива бюджета.",
        },
      ],
    },
    proof: {
      eyebrow: "Кейсы",
      title: "На что мы опираемся в работе с Meta Ads",
      description:
        "В портфеле уже есть проекты из Эстонии, где реклама приносила заявки, брони и продажи в локальных нишах.",
      points: [
        "11 броней для Prime Tour при бюджете €390 на эстонском и русском сегментах",
        "34 клиента для ILUPROFF по €17.50 на высокомаржинальную услугу",
        "114 продаж для косметического e-commerce проекта в Эстонии при ROAS 30.23",
      ],
    },
    process: {
      eyebrow: "Этапы",
      title: "Как выглядит запуск и ведение Meta Ads",
      description:
        "Двигаемся от экономики и стратегии к креативам, тестам и масштабированию, чтобы реклама росла вместе с проектом.",
      items: [
        {
          title: "Аудит и экономика",
          text: "Разбираем нишу, средний чек, спрос, конкурентов и точки роста, чтобы реклама не жила отдельно от экономики бизнеса.",
        },
        {
          title: "Стратегия кампаний",
          text: "Собираем структуру кабинета, воронку офферов, сегменты аудиторий и сценарии тестов под ваш проект.",
        },
        {
          title: "Креативы и запуск",
          text: "Готовим тексты, визуалы и ТЗ на съемку, затем запускаем кампании с понятной логикой гипотез и приоритетов.",
        },
        {
          title: "Ведение и рост",
          text: "Оптимизируем связки, масштабируем рабочие сегменты и регулярно обновляем рекламные материалы по данным кабинета.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Частые вопросы перед запуском Meta Ads",
      description:
        "Короткие ответы на вопросы, которые чаще всего возникают перед стартом рекламы в Facebook и Instagram.",
      items: [
        {
          question: "Подходит ли Meta Ads для локального бизнеса в Таллинне?",
          answer:
            "Да. Для салонов, услуг, образования, e-commerce и локальных проектов Meta Ads хорошо работает, если правильно собрать оффер, гео, языки и креативы.",
        },
        {
          question: "Сколько стоит ведение рекламы Meta Ads?",
          answer:
            "Базовая стоимость ведения начинается от 650€. Финальная цена зависит от объема кампаний, числа сегментов и темпа тестирования.",
        },
        {
          question: "Вы делаете только настройку или и креативы тоже?",
          answer:
            "Мы можем взять стратегию, настройку кабинета, тексты, креативы и ТЗ на съемку, чтобы быстрее находить рабочие связки.",
        },
      ],
    },
    included: {
      eyebrow: "Что входит в ведение",
      items: [
        "анализ ниши и конкурентов",
        "настройка рекламного кабинета Meta Ads",
        "сегментация и настройка аудиторий",
        "разработка структуры кампаний и офферов",
        "написание рекламных текстов",
        "создание креативов или ТЗ на съемку",
        "A/B тестирование и оптимизация",
        "масштабирование рабочих связок",
      ],
      cta: "Обсудить проект",
    },
    relatedTitle: "Дополнительные услуги",
  },
  en: {
    metadata: {
      title: "Meta Ads Tallinn | Facebook and Instagram Ads in Estonia | Do.Marketing",
      description:
        "Meta Ads management in Tallinn and across Estonia: Facebook Ads, Instagram Ads, creatives, audience strategy, optimisation and lead growth for local businesses.",
      keywords: [
        "Meta Ads Tallinn",
        "Facebook Ads Tallinn",
        "Instagram Ads Estonia",
        "Meta advertising agency Estonia",
      ],
      serviceName: "Meta Ads management in Tallinn",
      serviceDescription:
        "Meta Ads setup and ongoing management for businesses in Tallinn and across Estonia.",
      serviceType: "Meta Ads advertising",
      price: "650",
    },
    navigation: {
      proof: "Results",
      process: "Process",
      pricing: "Pricing",
    },
    hero: {
      badge: "Meta Ads Tallinn for Facebook and Instagram growth",
      title:
        "Meta Ads setup and management that turns attention into leads and sales in Estonia",
      description:
        "We launch Facebook and Instagram campaigns with a clear focus on lead quality, revenue and repeatable scaling. Structure, creatives, audiences and testing logic all work as one system.",
      bullets: [
        "campaign structure aligned with Tallinn and Estonia demand",
        "offers, copy and creatives tailored to your niche",
        "ongoing optimisation around CPL, CTR, frequency and ROAS",
      ],
      primaryCta: "Start a conversation",
      secondaryCta: "See the process",
    },
    pricing: {
      serviceLabel: "Meta Ads",
      serviceName: "Facebook + Instagram + optimisation",
      status: "Active",
      stats: [
        { value: "650€", label: "management starts from" },
        { value: "350€+", label: "recommended ad spend" },
        { value: "ROAS", label: "profitability focus" },
      ],
      budgetBadge: "+ ad budget: from 350€",
      fromLabel: "from",
      priceLabel: "650€",
      tiers: [
        { budget: "up to 1500€", fee: "650€" },
        { budget: "up to 2500€", fee: "770€" },
        { budget: "from 2500€", fee: "990€" },
      ],
    },
    benefits: {
      eyebrow: "Results",
      title: "What businesses gain from Meta Ads in Estonia",
      description:
        "Strong Meta performance starts with the right connection between offer, audience, creative and landing page, not just with pressing launch.",
      cards: [
        {
          title: "Local demand coverage",
          text: "We build campaigns around city, language and audience segments so ads fit Tallinn and broader Estonia demand.",
        },
        {
          title: "Clear lead funnel",
          text: "Offer, landing page, form and ad message work together as a single conversion system.",
        },
        {
          title: "Creatives for the offer",
          text: "We prepare copy, static ideas, video concepts and production briefs aligned with your niche and testing speed.",
        },
        {
          title: "Stable optimisation",
          text: "We improve lead cost, CTR, frequency and audience quality without burning budget on random experiments.",
        },
      ],
    },
    proof: {
      eyebrow: "Proof",
      title: "How our Meta Ads work is grounded in real cases",
      description:
        "Our portfolio already includes Estonian projects where Meta campaigns generated bookings, leads and sales in local niches.",
      points: [
        "11 bookings for Prime Tour on a €390 budget across Estonian and Russian segments",
        "34 clients for ILUPROFF at €17.50 per client for a high-margin beauty service",
        "114 sales for an Estonian cosmetics e-commerce project at ROAS 30.23",
      ],
    },
    process: {
      eyebrow: "Process",
      title: "How Meta Ads launch and management works",
      description:
        "We move from business economics and strategy to creatives, testing and scaling so advertising grows together with the project.",
      items: [
        {
          title: "Audit and unit economics",
          text: "We review your niche, average order value, demand, competition and growth points before we spend anything on traffic.",
        },
        {
          title: "Campaign strategy",
          text: "We define account structure, audience segments, offer logic and testing scenarios around the real sales process.",
        },
        {
          title: "Creatives and launch",
          text: "Copy, visuals and production briefs are prepared before launch so the first campaigns start with a clear hypothesis map.",
        },
        {
          title: "Management and growth",
          text: "We optimise winning combinations, scale promising segments and refresh creatives based on actual account data.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions clients ask before starting Meta Ads",
      description:
        "A short overview of the questions that usually come up before launching Facebook and Instagram campaigns.",
      items: [
        {
          question: "Does Meta Ads work for local businesses in Tallinn?",
          answer:
            "Yes. Meta Ads works well for services, beauty, education, e-commerce and other local offers when the offer, geography, language and creatives are set up properly.",
        },
        {
          question: "How much does Meta Ads management cost?",
          answer:
            "Management starts from 650€. The final scope depends on campaign volume, number of segments and the testing pace we need.",
        },
        {
          question: "Do you also handle creatives?",
          answer:
            "Yes. We can take strategy, account setup, copy, creative direction and production briefs so testing moves faster and cleaner.",
        },
      ],
    },
    included: {
      eyebrow: "Included in the service",
      items: [
        "market and competitor analysis",
        "Meta Ads account setup",
        "audience segmentation and targeting",
        "campaign and offer architecture",
        "ad copywriting",
        "creative production guidance",
        "A/B testing and optimisation",
        "scaling winning combinations",
      ],
      cta: "Discuss the project",
    },
    relatedTitle: "Related services",
  },
  et: {
    metadata: {
      title: "Meta Ads Tallinn | Facebooki ja Instagrami reklaam Eestis | Do.Marketing",
      description:
        "Meta Ads haldus Tallinnas ja üle Eesti: Facebooki reklaam, Instagrami reklaam, loovlahendused, auditooriumid, optimeerimine ja päringute kasv ettevõtetele.",
      keywords: [
        "Meta Ads Tallinn",
        "Facebooki reklaam Tallinn",
        "Instagrami reklaam Eesti",
        "Meta reklaami agentuur Eesti",
      ],
      serviceName: "Meta Ads management in Tallinn",
      serviceDescription:
        "Meta Ads seadistamine ja haldus ettevõtetele Tallinnas ja üle Eesti.",
      serviceType: "Meta Ads advertising",
      price: "650",
    },
    navigation: {
      proof: "Tulemus",
      process: "Protsess",
      pricing: "Hinnad",
    },
    hero: {
      badge: "Meta Ads Tallinn Facebooki ja Instagrami reklaamiks",
      title:
        "Meta Ads seadistus ja haldus, mis toob Tallinnas ja Eestis päris päringuid ja müüki",
      description:
        "Käivitame Facebooki ja Instagrami kampaaniaid fookusega päringutele, müügile ja tasuvusele. Konto struktuur, loovlahendused, auditooriumid ja testimise loogika töötavad koos.",
      bullets: [
        "kampaaniad kohaliku nõudluse jaoks Tallinnas ja Eestis",
        "pakkumised, tekstid ja loovlahendused teie niši järgi",
        "pidev optimeerimine CPL-i, CTR-i, sageduse ja ROAS-i järgi",
      ],
      primaryCta: "Saada päring",
      secondaryCta: "Vaata protsessi",
    },
    pricing: {
      serviceLabel: "Meta Ads",
      serviceName: "Facebook + Instagram + optimeerimine",
      status: "Active",
      stats: [
        { value: "650€", label: "halduse alghind" },
        { value: "350€+", label: "soovituslik eelarve" },
        { value: "ROAS", label: "tasuvuse fookus" },
      ],
      budgetBadge: "+ reklaamieelarve: alates 350€",
      fromLabel: "alates",
      priceLabel: "650€",
      tiers: [
        { budget: "kuni 1500€", fee: "650€" },
        { budget: "kuni 2500€", fee: "770€" },
        { budget: "alates 2500€", fee: "990€" },
      ],
    },
    benefits: {
      eyebrow: "Tulemus",
      title: "Mida ettevõte Meta Adsist Eestis saab",
      description:
        "Hea tulemus Meta Adsis ei alga nupust Launch, vaid õigest seosest pakkumise, auditooriumi, loovlahenduse ja maandumislehe vahel.",
      cards: [
        {
          title: "Kohalik nõudlus",
          text: "Seadistame kampaaniad nii, et reklaam arvestab linna, keele ja auditooriumi segmentidega Tallinnas ja üle Eesti.",
        },
        {
          title: "Selge päringulehter",
          text: "Pakkumine, maandumisleht, vorm ja reklaamisõnum töötavad koos ühe süsteemina.",
        },
        {
          title: "Loovlahendused teenuse jaoks",
          text: "Loome tekstid, visuaalide ideed, video kontseptsioonid ja produktsiooni juhised vastavalt teie nišile.",
        },
        {
          title: "Stabiilne optimeerimine",
          text: "Parandame päringu hinda, CTR-i, sagedust ja auditooriumi kvaliteeti ilma eelarvet juhuslikult põletamata.",
        },
      ],
    },
    proof: {
      eyebrow: "Kogemus",
      title: "Millele me Meta Adsis tugineda saame",
      description:
        "Portfellis on juba Eesti projekte, kus Meta kampaaniad tõid broneeringuid, päringuid ja müüki kohalikes niššides.",
      points: [
        "11 broneeringut Prime Tourile €390 eelarvega eesti- ja venekeelsetes segmentides",
        "34 klienti ILUPROFFile hinnaga €17.50 kliendi kohta kõrgema marginaaliga teenusele",
        "114 müüki Eesti kosmeetika e-poele ROAS 30.23 juures",
      ],
    },
    process: {
      eyebrow: "Protsess",
      title: "Kuidas Meta Ads käivitamine ja haldus välja näeb",
      description:
        "Liigume majandusloogikast ja strateegiast loovlahenduste, testide ja skaleerimiseni, et reklaam kasvaks koos äriga.",
      items: [
        {
          title: "Audit ja majandus",
          text: "Vaatame üle niši, keskmise ostu, nõudluse, konkurendid ja kasvukohad enne kui hakkame eelarvet kasutama.",
        },
        {
          title: "Kampaaniastrateegia",
          text: "Paneme paika konto struktuuri, auditooriumi segmendid, pakkumiste loogika ja testimise stsenaariumid.",
        },
        {
          title: "Loovlahendused ja start",
          text: "Valmistame ette tekstid, visuaalid ja produktsiooni juhised, et esimesed kampaaniad algaksid selge hüpoteesikaardiga.",
        },
        {
          title: "Haldus ja kasv",
          text: "Optimeerime töötavaid kombinatsioone, skaleerime tugevamaid segmente ja uuendame loovmaterjale pärisandmete põhjal.",
        },
      ],
    },
    faq: {
      eyebrow: "KKK",
      title: "Korduma kippuvad küsimused enne Meta Adsi starti",
      description:
        "Lühikesed vastused küsimustele, mis tekivad kõige sagedamini enne Facebooki ja Instagrami reklaami käivitamist.",
      items: [
        {
          question: "Kas Meta Ads sobib kohalikele ettevõtetele Tallinnas?",
          answer:
            "Jah. Meta Ads töötab hästi teenuste, ilu, hariduse, e-kaubanduse ja teiste kohalike pakkumiste jaoks, kui pakkumine, geograafia, keel ja loovlahendused on õigesti paigas.",
        },
        {
          question: "Kui palju Meta Adsi haldus maksab?",
          answer:
            "Haldus algab 650€ juurest. Lõplik maht sõltub kampaaniate arvust, segmentidest ja sellest, kui kiire testimise tempoga peame töötama.",
        },
        {
          question: "Kas teete ka loovlahendused?",
          answer:
            "Jah. Võime võtta enda peale strateegia, konto seadistuse, tekstid, loovsuuna ja produktsiooni juhised, et testimine liiguks kiiremini.",
        },
      ],
    },
    included: {
      eyebrow: "Teenuses sees",
      items: [
        "turuanalüüs ja konkurendid",
        "Meta Ads konto seadistus",
        "auditooriumi segmenteerimine",
        "kampaaniate ja pakkumiste struktuur",
        "reklaamtekstide loomine",
        "loovlahenduste juhised",
        "A/B testimine ja optimeerimine",
        "töötavate kombinatsioonide skaleerimine",
      ],
      cta: "Arutame projekti",
    },
    relatedTitle: "Lisateenused",
  },
};

const googleAdsCopy: Record<Language, ServicePageCopy> = {
  ru: {
    metadata: {
      title: "Google Ads Tallinn | Контекстная реклама в Эстонии | Do.Marketing",
      description:
        "Настройка и ведение Google Ads в Tallinn и по всей Эстонии: поиск, КМС, структура кампаний, оптимизация ставок и рост обращений для бизнеса.",
      keywords: [
        "Google Ads Tallinn",
        "контекстная реклама Таллинн",
        "Google Ads Estonia",
        "PPC Tallinn",
      ],
      serviceName: "Google Ads management in Tallinn",
      serviceDescription:
        "Настройка и ведение контекстной рекламы Google Ads для бизнеса в Таллинне и по всей Эстонии.",
      serviceType: "Google Ads advertising",
      price: "550",
    },
    navigation: {
      proof: "Преимущества",
      process: "Этапы",
      pricing: "Цены",
    },
    hero: {
      badge: "Google Ads Tallinn для быстрого спроса и продаж",
      title:
        "Контекстная реклама Google, которая приводит горячих клиентов уже в день запуска",
      description:
        "Собираем поисковые и медийные кампании, выстраиваем корректную структуру, следим за окупаемостью и ведем рекламу так, чтобы бюджет работал на реальный спрос.",
      bullets: [
        "поисковые и медийные кампании под горячий спрос",
        "чистая структура аккаунта, семантика и минус-слова",
        "масштабирование по конверсиям, а не по кликам ради кликов",
      ],
      primaryCta: "Оставить заявку",
      secondaryCta: "Посмотреть этапы",
    },
    pricing: {
      serviceLabel: "Google Ads",
      serviceName: "Search + КМС + оптимизация",
      status: "Active",
      stats: [
        { value: "550€", label: "старт ведения" },
        { value: "350€+", label: "рекомендуемый бюджет" },
        { value: "ROI", label: "фокус на окупаемости" },
      ],
      budgetBadge: "+ рекламный бюджет: от 350€",
      fromLabel: "от",
      priceLabel: "550€",
      tiers: [
        { budget: "до 1000€", fee: "550€" },
        { budget: "до 2000€", fee: "650€" },
        { budget: "от 2000€", fee: "индивидуально" },
      ],
    },
    benefits: {
      eyebrow: "Преимущества",
      title: "Почему Google Ads дает быстрый и управляемый результат",
      description:
        "Google Ads хорошо работает там, где уже есть сформированный спрос и нужен прогнозируемый поток обращений с понятной аналитикой.",
      cards: [
        {
          title: "Быстрый старт",
          text: "Кампанию можно запустить уже в день старта и быстро получить первые переходы, звонки и заявки.",
        },
        {
          title: "Точная настройка",
          text: "Собираем кампании по ключевым словам, гео, минус-словам и стратегии ставок под реальный спрос.",
        },
        {
          title: "Прозрачная аналитика",
          text: "Следим не только за кликами, но и за конверсиями, ценой заявки, качеством трафика и ROI.",
        },
        {
          title: "Масштабирование",
          text: "После нахождения рабочих связок усиливаем их через семантику, ставки, объявления и структуру кампаний.",
        },
      ],
    },
    proof: {
      eyebrow: "Что влияет на результат",
      title: "Google Ads работает сильнее, когда сайт и оффер готовы к спросу",
      description:
        "Контекстная реклама не живет отдельно от страницы и предложения. Мы смотрим на воронку целиком.",
      points: [
        "подбираем ключевые слова, минус-слова и географию под реальные поисковые сценарии",
        "пишем объявления и расширения так, чтобы оффер был понятен уже в выдаче",
        "оцениваем посадочную страницу, формы, телефон и путь до конверсии до запуска",
      ],
    },
    process: {
      eyebrow: "Этапы",
      title: "Как выглядит настройка и ведение Google Ads",
      description:
        "Работаем по понятной схеме: аудит, стратегия, контент, запуск и регулярная оптимизация с отчетностью.",
      items: [
        {
          title: "Аудит и бриф",
          text: "Анализируем нишу, текущий кабинет, сайт и собираем вводные, чтобы стратегия опиралась на реальные ограничения и возможности проекта.",
        },
        {
          title: "Стратегия и прогноз",
          text: "Готовим структуру кампаний, прогноз по бюджетам и сценарий запуска. После согласования переходим к реализации.",
        },
        {
          title: "Контент и семантика",
          text: "Пишем заголовки и тексты объявлений, собираем ключевые слова и готовим креативы для КМС при необходимости.",
        },
        {
          title: "Запуск и оптимизация",
          text: "Запускаем кампании, следим за промежуточными результатами, масштабируем рабочие связки и регулярно отчитываемся.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Частые вопросы по Google Ads перед стартом",
      description:
        "Несколько важных ответов, которые помогают принять решение перед запуском поисковой и медийной рекламы.",
      items: [
        {
          question: "Можно ли точно таргетировать аудиторию в Google Ads?",
          answer:
            "Да. В Google Ads можно работать по ключевым словам, географии, устройствам, времени показа и дополнительным сигналам аудитории.",
        },
        {
          question: "Сколько стоит ведение Google Ads?",
          answer:
            "Базовая стоимость ведения начинается от 550€. Итог зависит от числа кампаний, географии, конкуренции и объема оптимизации.",
        },
        {
          question: "Вы помогаете и с посадочной страницей?",
          answer:
            "Да. Перед запуском мы оцениваем оффер, структуру страницы и точки конверсии, чтобы реклама не вела в слабую воронку.",
        },
      ],
    },
    included: {
      eyebrow: "Что входит в ведение",
      items: [
        "аудит ниши и спроса",
        "сбор семантики и минус-слов",
        "структура рекламного кабинета Google Ads",
        "написание объявлений и расширений",
        "настройка поиска и КМС",
        "анализ посадочной страницы",
        "оптимизация ставок и бюджета",
        "отчеты и масштабирование",
      ],
      cta: "Обсудить проект",
    },
    relatedTitle: "Дополнительные услуги",
  },
  en: {
    metadata: {
      title: "Google Ads Tallinn | PPC Campaign Management in Estonia | Do.Marketing",
      description:
        "Google Ads setup and management in Tallinn and across Estonia: search, display, account structure, bid optimisation and conversion growth for local businesses.",
      keywords: [
        "Google Ads Tallinn",
        "PPC agency Estonia",
        "search advertising Tallinn",
        "Google Ads management Estonia",
      ],
      serviceName: "Google Ads management in Tallinn",
      serviceDescription:
        "Google Ads setup and management for businesses in Tallinn and across Estonia.",
      serviceType: "Google Ads advertising",
      price: "550",
    },
    navigation: {
      proof: "Benefits",
      process: "Process",
      pricing: "Pricing",
    },
    hero: {
      badge: "Google Ads Tallinn for high-intent demand",
      title:
        "Google Ads campaigns that capture hot demand and turn search traffic into sales",
      description:
        "We build search and display campaigns, structure the account properly, monitor profitability and manage budgets around real buying intent.",
      bullets: [
        "search and display campaigns built around high-intent demand",
        "clean keyword structure, negative keywords and bidding logic",
        "scaling based on conversions instead of vanity click volume",
      ],
      primaryCta: "Start a conversation",
      secondaryCta: "See the process",
    },
    pricing: {
      serviceLabel: "Google Ads",
      serviceName: "Search + Display + optimisation",
      status: "Active",
      stats: [
        { value: "550€", label: "management starts from" },
        { value: "350€+", label: "recommended ad spend" },
        { value: "ROI", label: "profitability focus" },
      ],
      budgetBadge: "+ ad budget: from 350€",
      fromLabel: "from",
      priceLabel: "550€",
      tiers: [
        { budget: "up to 1000€", fee: "550€" },
        { budget: "up to 2000€", fee: "650€" },
        { budget: "from 2000€", fee: "custom" },
      ],
    },
    benefits: {
      eyebrow: "Benefits",
      title: "Why Google Ads gives fast and controllable growth",
      description:
        "Google Ads performs best when there is active demand and the business needs a measurable flow of leads or sales with clear reporting.",
      cards: [
        {
          title: "Fast launch",
          text: "Campaigns can go live the same day, bringing the first clicks, calls and enquiries quickly.",
        },
        {
          title: "Precise setup",
          text: "Keywords, negatives, geography and bidding strategy are aligned with how your customers actually search.",
        },
        {
          title: "Transparent data",
          text: "We look past clicks and monitor conversions, lead cost, traffic quality and ROI.",
        },
        {
          title: "Confident scaling",
          text: "Once winning combinations appear, we scale them through structure, bids, copy and deeper semantics.",
        },
      ],
    },
    proof: {
      eyebrow: "What drives results",
      title: "Google Ads performs stronger when the page and offer are conversion-ready",
      description:
        "Paid search does not work in isolation. We review the whole conversion path before we scale spend.",
      points: [
        "we map keywords, negatives and geo targeting to real search scenarios",
        "ad copy and extensions make the offer clear already inside the search results",
        "landing page, form, phone and conversion flow are checked before launch",
      ],
    },
    process: {
      eyebrow: "Process",
      title: "How Google Ads setup and management works",
      description:
        "Our workflow is clear: audit, strategy, copy and semantics, launch, reporting and optimisation.",
      items: [
        {
          title: "Audit and brief",
          text: "We review the niche, current account, landing page and business constraints before defining the plan.",
        },
        {
          title: "Strategy and forecast",
          text: "Campaign structure, budget expectations and launch logic are prepared before any ads go live.",
        },
        {
          title: "Copy and semantics",
          text: "We write ads, build keyword clusters and prepare display creative directions when needed.",
        },
        {
          title: "Launch and optimisation",
          text: "After launch we monitor early signals, strengthen high-performing segments and report on business outcomes.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions clients ask before starting Google Ads",
      description:
        "A few important answers that help decide whether paid search and display are the right next step.",
      items: [
        {
          question: "Can Google Ads target the right audience accurately?",
          answer:
            "Yes. We can target by search intent, geography, device, schedule and additional audience signals depending on the campaign type.",
        },
        {
          question: "How much does Google Ads management cost?",
          answer:
            "Management starts from 550€. Final scope depends on campaign count, geography, competition and optimisation depth.",
        },
        {
          question: "Do you also help with the landing page?",
          answer:
            "Yes. Before launch we assess the offer, page structure and conversion points so ads do not drive traffic into a weak funnel.",
        },
      ],
    },
    included: {
      eyebrow: "Included in the service",
      items: [
        "demand and market audit",
        "keyword and negative keyword research",
        "Google Ads account architecture",
        "ad copy and extension setup",
        "search and display configuration",
        "landing page review",
        "bid and budget optimisation",
        "reporting and scaling",
      ],
      cta: "Discuss the project",
    },
    relatedTitle: "Related services",
  },
  et: {
    metadata: {
      title: "Google Ads Tallinn | PPC reklaam ja haldus Eestis | Do.Marketing",
      description:
        "Google Ads seadistus ja haldus Tallinnas ja üle Eesti: otsing, display, konto struktuur, pakkumiste optimeerimine ja päringute kasv ettevõtetele.",
      keywords: [
        "Google Ads Tallinn",
        "PPC agentuur Eesti",
        "otsingureklaam Tallinn",
        "Google Ads haldus Eesti",
      ],
      serviceName: "Google Ads management in Tallinn",
      serviceDescription:
        "Google Ads seadistamine ja haldus ettevõtetele Tallinnas ja üle Eesti.",
      serviceType: "Google Ads advertising",
      price: "550",
    },
    navigation: {
      proof: "Eelised",
      process: "Protsess",
      pricing: "Hinnad",
    },
    hero: {
      badge: "Google Ads Tallinn kiire nõudluse püüdmiseks",
      title:
        "Google Ads kampaaniad, mis püüavad kuuma nõudlust ja toovad müüki juba stardipäeval",
      description:
        "Ehitatame otsingu- ja display-kampaaniaid, korrastame konto loogika, jälgime tasuvust ja juhime eelarvet päris ostuvalmiduse järgi.",
      bullets: [
        "otsingu- ja display-kampaaniad kõrge ostuvalmidusega nõudluse jaoks",
        "selge märksõna struktuur, miinusmärksõnad ja pakkumiste loogika",
        "skaleerimine konversioonide, mitte tühja klikimahu järgi",
      ],
      primaryCta: "Saada päring",
      secondaryCta: "Vaata protsessi",
    },
    pricing: {
      serviceLabel: "Google Ads",
      serviceName: "Search + Display + optimeerimine",
      status: "Active",
      stats: [
        { value: "550€", label: "halduse alghind" },
        { value: "350€+", label: "soovituslik eelarve" },
        { value: "ROI", label: "tasuvuse fookus" },
      ],
      budgetBadge: "+ reklaamieelarve: alates 350€",
      fromLabel: "alates",
      priceLabel: "550€",
      tiers: [
        { budget: "kuni 1000€", fee: "550€" },
        { budget: "kuni 2000€", fee: "650€" },
        { budget: "alates 2000€", fee: "personaalselt" },
      ],
    },
    benefits: {
      eyebrow: "Eelised",
      title: "Miks Google Ads annab kiire ja juhitava tulemuse",
      description:
        "Google Ads töötab eriti hästi siis, kui nõudlus on juba olemas ja ettevõte vajab mõõdetavat päringute või müügi voogu.",
      cards: [
        {
          title: "Kiire start",
          text: "Kampaaniad saab käivitada samal päeval ning esimesed klikid, kõned ja päringud tulevad kiiresti.",
        },
        {
          title: "Täpsus",
          text: "Märksõnad, miinusmärksõnad, geograafia ja pakkumisstrateegia lähtuvad päris otsingukäitumisest.",
        },
        {
          title: "Läbipaistev analüütika",
          text: "Jälgime klikkide kõrval ka konversioone, päringu hinda, liikluse kvaliteeti ja ROI-d.",
        },
        {
          title: "Kindel skaleerimine",
          text: "Kui tugevad kombinatsioonid on leitud, kasvatame tulemust struktuuri, pakkumiste ja semantika kaudu.",
        },
      ],
    },
    proof: {
      eyebrow: "Mis mõjutab tulemust",
      title: "Google Ads töötab tugevamalt siis, kui leht ja pakkumine on konversiooniks valmis",
      description:
        "Otsingureklaam ei tööta eraldi ülejäänud lehtrist. Enne käivitamist vaatame üle kogu tee klikist päringuni.",
      points: [
        "seome märksõnad, miinusmärksõnad ja geograafia reaalse otsingukäitumisega",
        "reklaamtekstid ja laiendused teevad pakkumise selgeks juba otsingutulemustes",
        "maandumisleht, vorm, telefon ja konversioonitee kontrollitakse enne käivitamist",
      ],
    },
    process: {
      eyebrow: "Protsess",
      title: "Kuidas Google Adsi seadistus ja haldus välja näeb",
      description:
        "Töö käib selge loogikaga: audit, strateegia, tekstid ja semantika, käivitamine, aruandlus ja optimeerimine.",
      items: [
        {
          title: "Audit ja brief",
          text: "Vaatame üle niši, olemasoleva konto, maandumislehe ja äri piirangud enne kui paika paneme plaani.",
        },
        {
          title: "Strateegia ja prognoos",
          text: "Määratleme kampaaniastruktuuri, eelarveootused ja käivituse loogika enne reklaamide avalikustamist.",
        },
        {
          title: "Tekstid ja semantika",
          text: "Kirjutame reklaamid, loome märksõnarühmad ja vajadusel valmistame ette display loovsuunad.",
        },
        {
          title: "Start ja optimeerimine",
          text: "Pärast käivitamist jälgime esimesi signaale, tugevdame toimivaid segmente ja anname aru ärilisest tulemusest.",
        },
      ],
    },
    faq: {
      eyebrow: "KKK",
      title: "Levinud küsimused enne Google Adsiga alustamist",
      description:
        "Mõned tähtsad vastused, mis aitavad otsustada, kas otsingu- ja display-reklaam on järgmine õige samm.",
      items: [
        {
          question: "Kas Google Adsiga saab sihtrühma täpselt tabada?",
          answer:
            "Jah. Sihime otsingu intentsiooni, geograafia, seadme, ajastuse ja lisasignaalide järgi olenevalt kampaania tüübist.",
        },
        {
          question: "Kui palju Google Adsi haldus maksab?",
          answer:
            "Haldus algab 550€ juurest. Lõplik maht sõltub kampaaniate arvust, geograafiast, konkurentsist ja optimeerimise sügavusest.",
        },
        {
          question: "Kas aitate ka maandumislehega?",
          answer:
            "Jah. Enne käivitamist hindame pakkumist, lehe struktuuri ja konversioonipunkte, et reklaam ei suunaks liiklust nõrka lehtrisse.",
        },
      ],
    },
    included: {
      eyebrow: "Teenuses sees",
      items: [
        "nõudluse ja turu audit",
        "märksõnade ja miinusmärksõnade uuring",
        "Google Ads konto arhitektuur",
        "reklaamtekstide ja laienduste seadistus",
        "otsingu- ja display-seadistus",
        "maandumislehe analüüs",
        "pakkumiste ja eelarve optimeerimine",
        "aruandlus ja skaleerimine",
      ],
      cta: "Arutame projekti",
    },
    relatedTitle: "Lisateenused",
  },
};

const serviceCopyBySlug: Record<ServiceSlug, Record<Language, ServicePageCopy>> = {
  "meta-ads": metaAdsCopy,
  "google-ads": googleAdsCopy,
};

export function getServicePageCopy(slug: ServiceSlug, language: Language) {
  return serviceCopyBySlug[slug][language];
}

export function getServicePageDictionary(slug: ServiceSlug, language: Language) {
  return buildServicePageDictionary(language, getServicePageCopy(slug, language));
}
