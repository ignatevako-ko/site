export type Language = "en" | "et" | "ru";

export type NavItem = {
  href: string;
  label: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  dashboardTitle: string;
  dashboardStatus: string;
  dashboardChartLabel: string;
  dashboardChartStatus: string;
  stats: Array<{ value: string; label: string }>;
};

export type CaseStudy = {
  title: string;
  category: string;
  result: string;
  summary: string;
};

export type Service = {
  title: string;
  description: string;
  features: string[];
};

export type ClientLogo = {
  name: string;
};

export type AboutContent = {
  title: string;
  description: string;
  points: string[];
};

export type ContactContent = {
  title: string;
  description: string;
  labels: {
    email: string;
    phone: string;
    address: string;
    company: string;
  };
  email: string;
  phone: string;
  address: string;
  company: string;
  cta: string;
};

export type SeoContent = {
  title: string;
  description: string;
};

export type SiteDictionary = {
  localeLabel: string;
  nav: NavItem[];
  hero: HeroContent;
  sections: {
    cases: string;
    services: string;
    clients: string;
    about: string;
    contacts: string;
  };
  sectionLead: {
    cases: string;
    services: string;
    clients: string;
    about: string;
    contacts: string;
  };
  cases: CaseStudy[];
  services: Service[];
  clients: ClientLogo[];
  about: AboutContent;
  contacts: ContactContent;
  footer: {
    brand: string;
    text: string;
    links: NavItem[];
    copyright: string;
  };
  seo: SeoContent;
};

const casesRu: CaseStudy[] = [
  {
    title: "Женская спортивная одежда",
    category: "E-commerce / worldwide sales",
    result: "ROAS до 15 в Black Friday",
    summary:
      "До Черной пятницы реклама принесла $8 881 при бюджете $868 и ROAS 10. Во время Black Friday за 3 дня реклама дала $4 690 продаж при бюджете $311, ROAS 15 и цене клиента $10.",
  },
  {
    title: "Интернет-магазин косметики в Эстонии",
    category: "Beauty retail / Estonia",
    result: "€8 387 выручки при бюджете €277",
    summary:
      "Для магазина косметики в Эстонии кампания со скидкой 20% на Medic8 принесла 114 продаж. Стоимость продажи составила €2.43, средний чек €73.57, а окупаемость достигла 30.23.",
  },
  {
    title: "Prime Tour",
    category: "Travel / Estonia",
    result: "11 броней при бюджете €390",
    summary:
      "Настроили таргет на обычные и авторские туры для русско- и эстоноговорящей аудитории. Лучший результат дали яркие видео и карусели с CTR 5-8%, что принесло 10 броней горячих туров и 1 бронь авторского тура.",
  },
  {
    title: "ILUPROFF Ilusalong",
    category: "Beauty services / Estonia",
    result: "34 клиента по €17.50",
    summary:
      "Продвижение SMAS-лифтинга с тестированием форматов, языков и сегментов позволило найти самую сильную связку. При бюджете €600 привлекли 34 клиентов на маржинальную процедуру стоимостью €125-537.",
  },
  {
    title: "Sadhu Boards",
    category: "E-commerce / Moldova",
    result: "300-500 лидов ежемесячно",
    summary:
      "Для магазина досок для гвоздестояния снизили цену лида в 15 раз и выстроили стабильный поток заявок. При бюджете €750 в месяц проект получает 300-500 лидов и 30-50 покупок ежемесячно.",
  },
  {
    title: "Мужская психотерапевтическая группа",
    category: "Lead generation / education",
    result: "10 участников за 1.5 месяца",
    summary:
      "С нуля собрали полную группу из 10 мужчин за 1.5 месяца. Стоимость клиента составила €34, при вложении €345 реклама принесла €5 600 выручки и окупаемость 1523%.",
  },
];

const casesEn: CaseStudy[] = [
  {
    title: "Women’s Activewear Brand",
    category: "E-commerce / worldwide sales",
    result: "ROAS up to 15 during Black Friday",
    summary:
      "Before Black Friday, campaigns generated $8,881 in sales on an $868 budget with ROAS 10. During the 3-day Black Friday period, ads delivered $4,690 in sales on $311 spend, ROAS 15 and a $10 customer cost.",
  },
  {
    title: "Cosmetics E-commerce Store in Estonia",
    category: "Beauty retail / Estonia",
    result: "€8,387 revenue on €277 spend",
    summary:
      "A focused campaign around a 20% Medic8 offer generated 114 sales for the online store. Cost per sale reached €2.43, average order value €73.57 and overall ROAS 30.23.",
  },
  {
    title: "Prime Tour",
    category: "Travel / Estonia",
    result: "11 bookings on a €390 budget",
    summary:
      "Targeted campaigns for standard and premium tours reached both Russian- and Estonian-speaking audiences. Bright video ads and carousel creatives became the winning setup with CTR between 5% and 8%.",
  },
  {
    title: "ILUPROFF Ilusalong",
    category: "Beauty services / Estonia",
    result: "34 clients at €17.50 each",
    summary:
      "SMAS lifting campaigns tested multiple languages, segments and ad formats to identify the strongest combination. With a €600 budget, the project attracted 34 clients for a high-margin service priced at €125-537.",
  },
  {
    title: "Sadhu Boards",
    category: "E-commerce / Moldova",
    result: "300-500 leads every month",
    summary:
      "For the nail board brand, lead cost was reduced 15x while building a stable acquisition engine. On a €750 monthly budget the project now receives 300-500 leads and 30-50 purchases per month.",
  },
  {
    title: "Men’s Psychotherapy Group",
    category: "Lead generation / education",
    result: "10 participants in 1.5 months",
    summary:
      "The launch campaign filled the full 10-person group in 1.5 months. Customer acquisition cost was €34, and €345 in ad spend produced €5,600 in revenue with 1523% return.",
  },
];

const casesEt: CaseStudy[] = [
  {
    title: "Naiste spordiriiete bränd",
    category: "E-commerce / globaalsed müügid",
    result: "ROAS kuni 15 Black Friday ajal",
    summary:
      "Enne Black Fridayd tõi reklaam $8,881 müüki $868 eelarvega ja ROAS 10. Black Friday 3 päeva jooksul tõi kampaania $4,690 müüki $311 kuluga, ROAS 15 ning kliendi hind oli $10.",
  },
  {
    title: "Kosmeetika e-pood Eestis",
    category: "Beauty retail / Estonia",
    result: "€8 387 käivet €277 eelarvega",
    summary:
      "20% Medic8 pakkumisega kampaania tõi e-poele 114 müüki. Müügi hind oli €2.43, keskmine ost €73.57 ning kogu kampaania tasuvus ulatus 30.23-ni.",
  },
  {
    title: "Prime Tour",
    category: "Travel / Estonia",
    result: "11 broneeringut €390 eelarvega",
    summary:
      "Turundasime nii tavareise kui autorituure vene- ja eestikeelsele sihtrühmale. Parima tulemuse tõid erksad videod ja karussellid CTR-iga 5-8%, mis tõid 10 kuuma reisi broneeringut ja 1 autorituuri broneeringu.",
  },
  {
    title: "ILUPROFF Ilusalong",
    category: "Beauty services / Estonia",
    result: "34 klienti hinnaga €17.50",
    summary:
      "SMAS-liftingu kampaanias testiti erinevaid formaate, keeli ja sihtgruppe, et leida tugevaim kombinatsioon. €600 eelarvega toodi 34 klienti kõrge marginaaliga teenusele hinnaga €125-537.",
  },
  {
    title: "Sadhu Boards",
    category: "E-commerce / Moldova",
    result: "300-500 leadi iga kuu",
    summary:
      "Naelalaua brändi jaoks vähendati leadi hinda 15 korda ja ehitati stabiilne müügilehter. €750 kuueelarvega saab projekt nüüd 300-500 leadi ja 30-50 ostu kuus.",
  },
  {
    title: "Meeste psühhoteraapia grupp",
    category: "Lead generation / education",
    result: "10 osalejat 1.5 kuuga",
    summary:
      "Kampaania täitis 10-liikmelise grupi 1.5 kuuga. Kliendi hind oli €34 ning €345 reklaamieelarve tõi €5,600 käivet ja 1523% tasuvuse.",
    },
];

export const siteContent: Record<Language, SiteDictionary> = {
  en: {
    localeLabel: "Language",
    nav: [
      { href: "#cases", label: "Cases" },
      { href: "#services", label: "Services" },
      { href: "#clients", label: "Clients" },
      { href: "#about", label: "About" },
      { href: "#contacts", label: "Contacts" },
    ],
    hero: {
      eyebrow: "Conscious marketing with measurable results",
      title: "We bring *qualified clients* through *targeted ads* on FB and Inst",
      description: "while your competitors are still asleep",
      primaryCta: "Book a strategy call",
      secondaryCta: "Explore cases",
      dashboardTitle: "Growth command center",
      dashboardStatus: "Active",
      dashboardChartLabel: "Performance overview",
      dashboardChartStatus: "Live",
      stats: [
        { value: "1523%", label: "Peak campaign return" },
        { value: "500", label: "Leads per month" },
        { value: "30.23", label: "Best recorded ROAS" },
      ],
    },
    sections: {
      cases: "Cases",
      services: "Services",
      clients: "Clients",
      about: "About us",
      contacts: "Contacts",
    },
    sectionLead: {
      cases: "",
      services:
        "A compact service stack built around paid traffic, creative production and performance optimization.",
      clients:
        "Selected brands and businesses represented in the portfolio and campaign archive.",
      about:
        "Senior-led execution focused on practical outcomes, transparent process and a calm, disciplined growth approach.",
      contacts:
        "Reach out directly to discuss a project, campaign support or ongoing marketing partnership.",
    },
    cases: casesEn,
    services: [
      {
        title: "Strategy and Launch Planning",
        description:
          "Research, offer shaping and launch architecture aligned with the real buying journey.",
        features: ["Competitor analysis", "Promotion strategy", "Messaging structure"],
      },
      {
        title: "Targeted Advertising",
        description:
          "Full-cycle campaign setup, testing and scaling across audiences, offers and creative formats.",
        features: ["Ad setup and testing", "Creative iteration", "Weekly optimization"],
      },
      {
        title: "Creative and Funnel Support",
        description:
          "Static creatives, video editing, campaign copy and conversion support tailored to each offer.",
        features: ["Static and video creatives", "Ad copywriting", "Lead handling recommendations"],
      },
    ],
    clients: [
      { name: "Prime Tour" },
      { name: "ILUPROFF" },
      { name: "Sadhu Boards" },
      { name: "Ben's Insurance" },
      { name: "VOIAJ" },
      { name: "Medic8 Retail" },
    ],
    about: {
      title: "We make marketing more conscious, structured and result-oriented.",
      description:
        "Do.Marketing combines competitor analysis, media buying, creative production and performance analytics into one practical growth system. The focus is not on noise, but on stable numbers and decisions that make sense.",
      points: [
        "Strategy, ad setup, analytics and scaling in one workflow",
        "Static creatives, carousels and video assets for performance campaigns",
        "Hands-on work with Estonian, Russian-speaking and international audiences",
      ],
    },
    contacts: {
      title: "Let’s discuss the next campaign.",
      description:
        "Share your business goal, market and current bottleneck, and we will propose a realistic next step.",
      labels: {
        email: "Email",
        phone: "Phone",
        address: "Address",
        company: "Company",
      },
      email: "ignatevako@gmail.com",
      phone: "+37257843293",
      address: "Tallinn, Estonia",
      company: "OÜ Turundusagendid Reg.number 16881379",
      cta: "Start a conversation",
    },
    footer: {
      brand: "Do.Marketing",
      text: "Conscious performance marketing for brands that want sharper decisions and stronger results.",
      links: [
        { href: "#cases", label: "Cases" },
        { href: "#services", label: "Services" },
        { href: "#about", label: "About" },
        { href: "#contacts", label: "Contacts" },
      ],
      copyright: "© 2026 Do.Marketing. All rights reserved.",
    },
    seo: {
      title: "Do.Marketing | Premium Marketing Agency",
      description:
        "Bilingual marketing agency landing page with real portfolio cases, premium dark UI and clear contact details.",
    },
  },
  et: {
    localeLabel: "Keel",
    nav: [
      { href: "#cases", label: "Tööd" },
      { href: "#services", label: "Teenused" },
      { href: "#clients", label: "Kliendid" },
      { href: "#about", label: "Meist" },
      { href: "#contacts", label: "Kontakt" },
    ],
    hero: {
      eyebrow: "Teadlik turundus, mis viib tulemusteni",
      title: "Toome *sihtkliendid* kohale *FB ja Insti suunatud reklaamiga*",
      description: "samal ajal kui konkurendid alles magavad",
      primaryCta: "Broneeri strateegiakõne",
      secondaryCta: "Vaata töid",
      dashboardTitle: "Kasvu juhtimiskeskus",
      dashboardStatus: "Aktiivne",
      dashboardChartLabel: "Tulemuste ülevaade",
      dashboardChartStatus: "Live",
      stats: [
        { value: "1523%", label: "Parim kampaania tasuvus" },
        { value: "500", label: "Leadi kuus" },
        { value: "30.23", label: "Kõrgeim ROAS" },
      ],
    },
    sections: {
      cases: "Tööd",
      services: "Teenused",
      clients: "Kliendid",
      about: "Meist",
      contacts: "Kontakt",
    },
    sectionLead: {
      cases: "",
      services:
        "Kompaktne teenuste süsteem, mis ühendab tasulise liikluse, loovlahendused ja tulemusoptimeerimise.",
      clients:
        "Valitud brändid ja ettevõtted, mis on esindatud portfoolios ja kampaaniate arhiivis.",
      about:
        "Senior-tasemel teostus, mis keskendub praktilistele tulemustele, läbipaistvale protsessile ja rahulikule kasvuloogikale.",
      contacts:
        "Võta ühendust, et arutada uut projekti, kampaaniat või pikaajalist turunduskoostööd.",
    },
    cases: casesEt,
    services: [
      {
        title: "Strateegia ja launch planeerimine",
        description:
          "Uuringud, pakkumise teravdamine ja launch-struktuur, mis arvestab päris ostuteekonnaga.",
        features: ["Konkurentide analüüs", "Turundusstrateegia", "Sõnumite struktuur"],
      },
      {
        title: "Tulemusturundus",
        description:
          "Kampaaniate täielik ülesehitus, testimine ja skaleerimine erinevate auditooriumide ja pakkumiste lõikes.",
        features: ["Reklaami seadistus ja testid", "Loovlahenduste iteratsioon", "Iganädalane optimeerimine"],
      },
      {
        title: "Loovlahendused ja funneli tugi",
        description:
          "Staatilised kujundused, videomontaaž, reklaamtekstid ja konversioonitugi vastavalt pakkumisele.",
        features: ["Staatika ja videokreatiivid", "Reklaamtekstid", "Soovitused leadide töötlemiseks"],
      },
    ],
    clients: [
      { name: "Prime Tour" },
      { name: "ILUPROFF" },
      { name: "Sadhu Boards" },
      { name: "Ben's Insurance" },
      { name: "VOIAJ" },
      { name: "Medic8 Retail" },
    ],
    about: {
      title: "Muudame turunduse teadlikumaks, struktureeritumaks ja tulemuslikumaks.",
      description:
        "Do.Marketing ühendab konkurentide analüüsi, reklaamihalduse, loovlahendused ja analüütika üheks praktiliseks kasvusüsteemiks. Fookus ei ole müral, vaid numbritel ja otsustel, millel on päris mõju.",
      points: [
        "Strateegia, reklaami seadistus, analüütika ja skaleerimine ühes protsessis",
        "Staatika, karussellid ja videokreatiivid tulemusturunduse jaoks",
        "Praktiline kogemus Eesti, venekeelse ja rahvusvahelise sihtrühmaga",
      ],
    },
    contacts: {
      title: "Arutame järgmist kampaaniat.",
      description:
        "Kirjelda oma eesmärki, turgu ja peamist kitsaskohta ning pakume välja realistliku järgmise sammu.",
      labels: {
        email: "E-post",
        phone: "Telefon",
        address: "Aadress",
        company: "Ettevõte",
      },
      email: "ignatevako@gmail.com",
      phone: "+37257843293",
      address: "Tallinn, Eesti",
      company: "OÜ Turundusagendid Reg.number 16881379",
      cta: "Alusta vestlust",
    },
    footer: {
      brand: "Do.Marketing",
      text: "Teadlik tulemusturundus brändidele, kes soovivad täpsemaid otsuseid ja tugevamaid tulemusi.",
      links: [
        { href: "#cases", label: "Tööd" },
        { href: "#services", label: "Teenused" },
        { href: "#about", label: "Meist" },
        { href: "#contacts", label: "Kontakt" },
      ],
      copyright: "© 2026 Do.Marketing. Kõik õigused kaitstud.",
    },
    seo: {
      title: "Do.Marketing | Premium turundusagentuur",
      description:
        "Kaasaegne agentuuri maandumisleht päris portfooliokeyside, tumeda premium visuaali ja selgete kontaktidega.",
    },
  },
  ru: {
    localeLabel: "Язык",
    nav: [
      { href: "#cases", label: "Кейсы" },
      { href: "#services", label: "Услуги" },
      { href: "#clients", label: "Клиенты" },
      { href: "#about", label: "О нас" },
      { href: "#contacts", label: "Контакты" },
    ],
    hero: {
      eyebrow: "Делаем осознанный маркетинг. Приводим к результатам",
      title:
        "Приводим *целевых клиентов* через *таргетированную рекламу* FB и Inst",
      description: "Пока конкуренты спят",
      primaryCta: "Начать диалог",
      secondaryCta: "Посмотреть кейсы",
      dashboardTitle: "Центр управления ростом",
      dashboardStatus: "Активно",
      dashboardChartLabel: "Обзор результатов",
      dashboardChartStatus: "Live",
      stats: [
        { value: "2923%", label: "Максимальная окупаемость" },
        { value: "578", label: "Лидов в месяц" },
        { value: "30.23", label: "Лучший ROAS" },
      ],
    },
    sections: {
      cases: "Кейсы",
      services: "Услуги",
      clients: "Клиенты",
      about: "О нас",
      contacts: "Контакты",
    },
    sectionLead: {
      cases: "",
      services:
        "Компактная система услуг, которая объединяет paid traffic, креатив и performance-оптимизацию.",
      clients:
        "Выбранные бренды и бизнесы, представленные в портфолио и архиве рекламных кампаний.",
      about:
        "Работа senior-уровня с акцентом на практический результат, прозрачный процесс и спокойный дисциплинированный рост.",
      contacts:
        "Свяжитесь с нами, чтобы обсудить проект, рекламную кампанию или постоянное маркетинговое сопровождение.",
    },
    cases: casesRu,
    services: [
      {
        title: "Стратегия и запуск",
        description:
          "Исследование рынка, формирование оффера и архитектура запуска, построенная вокруг реального пути клиента.",
        features: ["Анализ конкурентов", "Стратегия продвижения", "Структура сообщений"],
      },
      {
        title: "Таргетированная реклама",
        description:
          "Полный цикл настройки, тестирования и масштабирования рекламных кампаний под разные аудитории и офферы.",
        features: ["Настройка и тесты рекламы", "Итерации креативов", "Еженедельная оптимизация"],
      },
      {
        title: "Креатив и поддержка воронки",
        description:
          "Статичные макеты, видеомонтаж, тексты для рекламы и практическая поддержка конверсии под конкретную задачу.",
        features: ["Статика и видео-креативы", "Тексты для рекламы", "Рекомендации по обработке лидов"],
      },
    ],
    clients: [
      { name: "Prime Tour" },
      { name: "ILUPROFF" },
      { name: "Sadhu Boards" },
      { name: "Ben's Insurance" },
      { name: "VOIAJ" },
      { name: "Medic8 Retail" },
    ],
    about: {
      title: "Делаем маркетинг более осознанным, структурным и результативным.",
      description:
        "Do.Marketing объединяет анализ конкурентов, закупку трафика, продакшн креативов и аналитику в одну рабочую систему роста. Фокус не на шуме, а на цифрах и решениях, которые действительно двигают бизнес вперед.",
      points: [
        "Стратегия, запуск рекламы, аналитика и масштабирование в одном процессе",
        "Статика, карусели и видео-креативы для performance-кампаний",
        "Практический опыт работы с эстонской, русскоязычной и международной аудиторией",
      ],
    },
    contacts: {
      title: "Обсудим следующую кампанию.",
      description:
        "Расскажите о своей цели, рынке и текущем узком месте, и мы предложим реалистичный следующий шаг.",
      labels: {
        email: "Email",
        phone: "Телефон",
        address: "Адрес",
        company: "Компания",
      },
      email: "ignatevako@gmail.com",
      phone: "+37257843293",
      address: "Таллин, Эстония",
      company: "OÜ Turundusagendid Reg.number 16881379",
      cta: "Начать диалог",
    },
    footer: {
      brand: "Do.Marketing",
      text: "Осознанный performance-маркетинг для брендов, которым нужны более точные решения и сильные результаты.",
      links: [
        { href: "#cases", label: "Кейсы" },
        { href: "#services", label: "Услуги" },
        { href: "#about", label: "О нас" },
        { href: "#contacts", label: "Контакты" },
      ],
      copyright: "© 2026 Do.Marketing. Все права защищены.",
    },
    seo: {
      title: "Do.Marketing | Премиальное маркетинговое агентство",
      description:
        "Современный лендинг агентства с реальными кейсами из портфолио, темным премиальным интерфейсом и понятными контактами.",
    },
  },
};
