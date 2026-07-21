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
  href?: string;
};

export type Service = {
  title: string;
  description: string;
  features: string[];
};

export type ClientLogo = {
  name: string;
  src: string;
};

export type AboutContent = {
  title: string;
  description: string;
  points: string[];
  founderLabel: string;
  founderName: string;
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
    testimonials: string;
    contacts: string;
  };
  sectionLead: {
    cases: string;
    services: string;
    clients: string;
    about: string;
    testimonials: string;
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

const clientLogos: ClientLogo[] = [
  { name: "Profftech", src: "/images/client-logos/profftech.png" },
  { name: "Dunven", src: "/images/client-logos/dunven.png" },
  { name: "Baltic Business Club", src: "/images/client-logos/baltic-business-club.png" },
  { name: "EduDo", src: "/images/client-logos/edu-do.png" },
  { name: "StenVarg", src: "/images/client-logos/stenvarg.jpg" },
  { name: "Cruise Craft", src: "/images/client-logos/cruise-craft.png" },
  { name: "Megateh", src: "/images/client-logos/megateh.jpg" },
  { name: "Sky Autokool", src: "/images/client-logos/sky-autokool.png" },
  { name: "Prime Tour", src: "/images/client-logos/prime-tour.png" },
  { name: "Iluproff", src: "/images/client-logos/iluproff.png" },
  { name: "Eho Clinic", src: "/images/client-logos/eho-clinic.svg" },
  { name: "Bliss Dental Clinic", src: "/images/client-logos/bliss-dental-clinic.png" },
  { name: "LeSaar Atelier", src: "/images/client-logos/lesaar.svg" },
  { name: "Arttek", src: "/images/client-logos/arttek.webp" },
];

const casesRu: CaseStudy[] = [
  {
    title: "ROMI 2500% в строительных работах",
    category: "Lead generation / renovation & construction",
    result: "€450 за клиента при выручке около €90 000",
    summary:
      "5,5 лет системно привлекали клиентов для компании комплексного ремонта: от дизайн-проекта и ремонтных работ до комплектации материалами и производства мебели. За 5 лет компания вышла из эконом-сегмента в элитный сегмент, сохранив поток заявок даже в низкий сезон.",
    href: "/cases/romi-2500-construction",
  },
  {
    title: "Детские спортивные секции EDU.DO",
    category: "Lead generation / sports education",
    result: "561 заявка за месяц по €3.4 за лида",
    summary:
      "Работаем с проектом 3 года и стабильно приводим от 370 заявок каждый месяц. Максимум - 561 заявка за месяц по €3.4 за лид, средняя цена держится около €4, а до начала работы лид стоил €20-60.",
    href: "/cases/edu-do",
  },
  {
    title: "Женская спортивная одежда",
    category: "E-commerce / worldwide sales",
    result: "ROAS до 15 в Black Friday",
    summary:
      "До Черной пятницы реклама принесла $8 881 при бюджете $868 и ROAS 10. Во время Black Friday за 3 дня реклама дала $4 690 продаж при бюджете $311, ROAS 15 и цене клиента $10.",
  },
  {
    title: "Интернет-магазин косметики",
    category: "Beauty retail / Estonia",
    result: "€8 387 выручки при бюджете €277",
    summary:
      "Для магазина косметики кампания со скидкой 20% на Medic8 принесла 114 продаж. Стоимость продажи составила €2.43, средний чек €73.57, а ROAS достиг 30.23.",
  },
  {
    title: "Турагенство Prime Tour",
    category: "Travel / Estonia",
    result: "11 броней при бюджете €390",
    summary:
      "Настроили таргет на обычные и авторские туры для русско- и эстоноговорящей аудитории. Лучший результат дали яркие видео и карусели с CTR 5-8%, что принесло 10 броней горячих туров и 1 бронь авторского тура.",
  },
  {
    title: "Салон красоты ILUPROFF",
    category: "Салон красоты / Estonia",
    result: "34 клиента по €17.50",
    summary:
      "Продвижение SMAS-лифтинга с тестированием форматов, языков и сегментов позволило найти самую сильную связку. При бюджете €600 привлекли 34 клиента на маржинальную процедуру стоимостью €125-537.",
  },
  {
    title: "Детские лагеря Suvelaagrid",
    category: "Lead generation / children camps",
    result: "от 565 лидов в месяц за 2,7 евро за лид",
    summary:
      "С апреля до середины августа ведем набор в дневной городской детский лагерь и выездные лагеря в Эстонии. Сначала трафик шел только на лид-форму, затем часть бюджета оставили на лиды, а часть перевели на прямую регистрацию на сайте. В результате проект получает от 565 лидов в месяц за 2,7 евро за лид.",
    href: "/cases/suvelaagrid",
  },
  {
    title: "Магазин досок для гвоздестояния Sadhu Boards",
    category: "E-commerce / Moldova",
    result: "300-500 лидов ежемесячно",
    summary:
      "Для магазина досок для гвоздестояния снизили цену лида в 15 раз и выстроили стабильный поток заявок. При бюджете €750 в месяц проект получает 300-500 лидов и 30-50 покупок ежемесячно.",
  },
];

const casesEn: CaseStudy[] = [
  {
    title: "2500% ROMI in renovation services",
    category: "Lead generation / renovation & construction",
    result: "€450 customer cost with about €90,000 revenue",
    summary:
      "For 5.5 years we built a predictable acquisition system for a full-cycle renovation company: design projects, renovation works, material sourcing and custom furniture production. In 5 years the company moved from the economy segment to the premium segment while keeping client flow stable even in low season.",
    href: "/cases/romi-2500-construction",
  },
  {
    title: "EDU.DO Children’s Sports Programs",
    category: "Lead generation / sports education",
    result: "561 leads in one month at €3.4 per lead",
    summary:
      "We have worked with the project for 3 years and consistently generate at least 370 leads every month. The best month brought 561 leads at €3.4 per lead, with the average cost now around €4 versus €20-60 before our work.",
    href: "/cases/edu-do",
  },
  {
    title: "Women’s Activewear Brand",
    category: "E-commerce / worldwide sales",
    result: "ROAS up to 15 during Black Friday",
    summary:
      "Before Black Friday, campaigns generated $8,881 in sales on an $868 budget with ROAS 10. During the 3-day Black Friday period, ads delivered $4,690 in sales on $311 spend, ROAS 15 and a $10 customer cost.",
  },
  {
    title: "Cosmetics E-commerce Store",
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
    title: "ILUPROFF",
    category: "Beauty services / Estonia",
    result: "34 clients at €17.50 each",
    summary:
      "SMAS lifting campaigns tested multiple languages, segments and ad formats to identify the strongest combination. With a €600 budget, the project attracted 34 clients for a high-margin service priced at €125-537.",
  },
  {
    title: "Suvelaagrid Children's Camps",
    category: "Lead generation / children camps",
    result: "at least 565 leads per month at €2.7 per lead",
    summary:
      "From April to mid-August, we run enrollment for a daytime city camp and away camps across Estonia. We started with lead forms only, then split the budget between lead forms and direct website registrations. The project now receives at least 565 leads per month at €2.7 per lead.",
    href: "/cases/suvelaagrid",
  },
  {
    title: "Sadhu Boards",
    category: "E-commerce / Moldova",
    result: "300-500 leads every month",
    summary:
      "For the nail board brand, lead cost was reduced 15x while building a stable acquisition engine. On a €750 monthly budget the project now receives 300-500 leads and 30-50 purchases per month.",
  },
];

const casesEt: CaseStudy[] = [
  {
    title: "2500% ROMI renoveerimistöödes",
    category: "Lead generation / renovation & construction",
    result: "€450 kliendi hind ja umbes €90 000 käivet",
    summary:
      "5,5 aasta jooksul ehitasime tervikliku kliendihanke süsteemi täisteenust pakkuvale remondiettevõttele: sisekujundusprojektid, remonditööd, materjalide komplekteerimine ja eritellimusmööbli tootmine. 5 aastaga liikus ettevõte säästusegmendist premium-segmenti ning säilitas kliendivoo ka madalhooajal.",
    href: "/cases/romi-2500-construction",
  },
  {
    title: "EDU.DO laste spordiringid",
    category: "Lead generation / sports education",
    result: "561 päringut kuus hinnaga €3.4",
    summary:
      "Oleme projektiga töötanud 3 aastat ja toome stabiilselt vähemalt 370 päringut kuus. Parim kuu tõi 561 päringut hinnaga €3.4, keskmine hind on nüüd umbes €4 võrreldes varasema €20-60 päringu hinnaga.",
    href: "/cases/edu-do",
  },
  {
    title: "Naiste spordiriiete bränd",
    category: "E-commerce / worldwide sales",
    result: "ROAS kuni 15 Black Friday ajal",
    summary:
      "Enne Black Fridayd tõi reklaam $8,881 müüki $868 eelarvega ja ROAS 10. Black Friday 3 päeva jooksul tõi kampaania $4,690 müüki $311 kuluga, ROAS 15 ning kliendi hind oli $10.",
  },
  {
    title: "Kosmeetika e-pood",
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
    title: "ILUPROFF",
    category: "Beauty services / Estonia",
    result: "34 klienti hinnaga €17.50",
    summary:
      "SMAS-liftingu kampaanias testiti erinevaid formaate, keeli ja sihtgruppe, et leida tugevaim kombinatsioon. €600 eelarvega toodi 34 klienti kõrge marginaaliga teenusele hinnaga €125-537.",
  },
  {
    title: "Suvelaagrid laste laagrid",
    category: "Lead generation / children camps",
    result: "alates 565 päringust kuus hinnaga 2,7 eurot",
    summary:
      "Aprillist augusti keskpaigani juhime registreerimist linna päevalaagrisse ja väljasõidulaagritesse Eestis. Alustasime ainult lead-vormidega, seejärel jätsime osa eelarvest vormidele ja suunasime osa otse veebilehe registreerimisele. Projekt saab nüüd alates 565 päringust kuus hinnaga 2,7 eurot päringu kohta.",
    href: "/cases/suvelaagrid",
  },
  {
    title: "Sadhu Boards",
    category: "E-commerce / Moldova",
    result: "300-500 leadi iga kuu",
    summary:
      "Naelalaua brändi jaoks vähendati leadi hinda 15 korda ja ehitati stabiilne müügilehter. €750 kuueelarvega saab projekt nüüd 300-500 leadi ja 30-50 ostu kuus.",
  },
];

export const siteContent: Record<Language, SiteDictionary> = {
  en: {
    localeLabel: "+37257843293",
    nav: [
      { href: "#cases", label: "Cases" },
      { href: "#services", label: "Services" },
      { href: "#about", label: "About" },
      { href: "#testimonials", label: "Reviews" },
      { href: "#contacts", label: "Contacts" },
    ],
    hero: {
      eyebrow: "Conscious marketing with measurable results",
      title: "We bring *qualified clients* through *targeted ads* on FB and Inst",
      description: "while your competitors are still asleep",
      primaryCta: "Start a conversation",
      secondaryCta: "Explore cases",
      dashboardTitle: "Growth command center",
      dashboardStatus: "Active",
      dashboardChartLabel: "Performance overview",
      dashboardChartStatus: "Live",
      stats: [
        { value: "2923%", label: "Peak campaign return" },
        { value: "578", label: "Leads per month" },
        { value: "30.23", label: "Best ROAS" },
      ],
    },
    sections: {
      cases: "Cases",
      services: "Services",
      clients: "Clients",
      about: "About us",
      testimonials: "Video reviews",
      contacts: "Contacts",
    },
    sectionLead: {
      cases: "",
      services: "",
      clients: "",
      about: "",
      testimonials: "",
      contacts: "",
    },
    cases: casesEn,
    services: [
      {
        title: "META ADS TARGETED ADVERTISING SETUP",
        description: "We build campaign architecture, creatives and testing logic around the real economics of your offer.",
        features: [
          "Niche and competitor analysis",
          "Meta Ads account setup",
          "Audience setup",
          "Campaign strategy and structure",
          "Ad copywriting",
          "Creative production or filming brief",
          "Campaign launch",
          "A/B testing",
          "Optimization and scaling",
        ],
      },
    ],
    clients: clientLogos,
    about: {
      title: "11 years of attracting clients for businesses across 18 different industries",
      description:
        "We help businesses generate high-quality leads and turn advertising into a predictable growth tool. Our work is not just about launching campaigns — it is built on a deep understanding of your project’s economics. We do not do ‘advertising for the sake of advertising’; we focus on making every euro invested return as profit.",
      points: [
        "Honest selection. We only enter a project when we are confident in its financial potential. Usually these are high-ticket niches where 1–5 clients fully cover the advertising costs.",
        "Experience across 18+ industries. From аппаратной косметологии to complex construction services. We understand the specifics of different markets, so we do not waste time testing obviously weak hypotheses.",
        "Results in numbers. Our record is ROMI 2305%. We know how to build a clear acquisition system and scale the result.",
        "We value your peace of mind and build our work on mutual trust. Instead of chaotic actions, we offer a transparent system and attention to every nuance of your business so that marketing becomes a reliable support for your growth.",
      ],
      founderLabel: "FOUNDER",
      founderName: "Kseniia Ignateva",
    },
    contacts: {
      title: "Let’s discuss the next campaign.",
      description: "Share your goal, market and current bottleneck, and we will propose a realistic next step.",
      labels: {
        email: "Email",
        phone: "Phone",
        address: "Address",
        company: "Company",
      },
      email: "ceo@domarketing.ee",
      phone: "+37257843293",
      address: "Tallinn, Estonia",
      company: "OÜ Turundusagendid Reg.number 16881379",
      cta: "Start a conversation",
    },
    footer: {
      brand: "Do.Marketing",
      text: "Conscious performance marketing for brands that need clarity, stronger decisions and predictable growth.",
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
      description: "Modern bilingual marketing landing page with real cases, dark premium UI and clear contact details.",
    },
  },
  et: {
    localeLabel: "+37257843293",
    nav: [
      { href: "#cases", label: "Tööd" },
      { href: "#services", label: "Teenused" },
      { href: "#about", label: "Meist" },
      { href: "#testimonials", label: "Tagasiside" },
      { href: "#contacts", label: "Kontakt" },
    ],
    hero: {
      eyebrow: "Teadlik turundus, mis viib tulemusteni",
      title: "Toome *sihtkliendid* kohale *FB ja Insti suunatud reklaamiga*",
      description: "samal ajal kui konkurendid alles magavad",
      primaryCta: "Alusta vestlust",
      secondaryCta: "Vaata töid",
      dashboardTitle: "Kasvu juhtimiskeskus",
      dashboardStatus: "Aktiivne",
      dashboardChartLabel: "Tulemuste ülevaade",
      dashboardChartStatus: "Live",
      stats: [
        { value: "2923%", label: "Parim kampaania tasuvus" },
        { value: "578", label: "Leadi kuus" },
        { value: "30.23", label: "Parim ROAS" },
      ],
    },
    sections: {
      cases: "Tööd",
      services: "Teenused",
      clients: "Kliendid",
      about: "Meist",
      testimonials: "Videotagasiside",
      contacts: "Kontakt",
    },
    sectionLead: {
      cases: "",
      services: "",
      clients: "",
      about: "",
      testimonials: "",
      contacts: "",
    },
    cases: casesEt,
    services: [
      {
        title: "META ADS SIHITUD REKLAAMI SEADISTUS",
        description: "Ehitasime kampaania arhitektuuri, loovlahendused ja testimise päris pakkumise majandusloogika ümber.",
        features: [
          "Niši ja konkurentide analüüs",
          "Meta Ads konto seadistus",
          "Auditooriumide seadistus",
          "Kampaania strateegia ja struktuur",
          "Reklaamtekstid",
          "Loovlahendused või võtme-TK võtteks",
          "Kampaania käivitamine",
          "A/B testimine",
          "Optimeerimine ja skaleerimine",
        ],
      },
    ],
    clients: clientLogos,
    about: {
      title: "11 aastat klientide toomist ettevõtetele 18 erinevas valdkonnas",
      description:
        "Aitame ettevõtetel saada kvaliteetseid päringuid ja muuta reklaami prognoositavaks kasvutööriistaks. Meie töö ei tähenda ainult kampaaniate käivitamist — selle aluseks on teie projekti majandusloogika sügav mõistmine. Me ei tee «reklaami reklaami pärast», vaid keskendume sellele, et iga investeeritud euro tooks tagasi kasumina.",
      points: [
        "Aus valik. Liitume projektiga ainult siis, kui oleme kindlad selle finantsilises potentsiaalis. Tavaliselt on need kõrge keskmise ostuga nišid, kus 1–5 klienti katavad täielikult reklaamikulud.",
        "Kogemus 18+ valdkonnas. Alates aparaadikosmetoloogiast kuni keerukate ehitusteenusteni. Me mõistame erinevate turgude eripära ega raiska aega ilmselgelt nõrkade hüpoteeside testimisele.",
        "Tulemus numbrites. Meie rekord on ROMI 2305%. Oskame ehitada selge kliendihanke süsteemi ja tulemust skaleerida.",
        "Hindame teie meelerahu ja ehitame töö üles vastastikusele usaldusele. Kaootiliste tegevuste asemel pakume läbipaistvat süsteemi ja tähelepanu teie äri igale nüansile, et turundusest saaks teie kasvu usaldusväärne tugi.",
      ],
      founderLabel: "ASUTAJA",
      founderName: "Kseniia Ignateva",
    },
    contacts: {
      title: "Arutame järgmist kampaaniat.",
      description: "Kirjelda oma eesmärki, turgu ja peamist kitsaskohta ning pakume välja realistliku järgmise sammu.",
      labels: {
        email: "E-post",
        phone: "Telefon",
        address: "Aadress",
        company: "Ettevõte",
      },
      email: "ceo@domarketing.ee",
      phone: "+37257843293",
      address: "Tallinn, Eesti",
      company: "OÜ Turundusagendid Reg.number 16881379",
      cta: "Alusta vestlust",
    },
    footer: {
      brand: "Do.Marketing",
      text: "Teadlik tulemusturundus brändidele, kes soovivad täpsemaid otsuseid ja tugevamat kasvu.",
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
      description: "Kaasaegne agentuuri landing leht päris keyside, tumeda premium-visuaali ja selgete kontaktidega.",
    },
  },
  ru: {
    localeLabel: "+37257843293",
    nav: [
      { href: "#cases", label: "Кейсы" },
      { href: "#services", label: "Услуги" },
      { href: "#about", label: "О нас" },
      { href: "#testimonials", label: "Отзывы" },
      { href: "#contacts", label: "Контакты" },
    ],
    hero: {
      eyebrow: "Делаем осознанный маркетинг. Приводим к результатам",
      title: "Приводим целевых клиентов через рекламу *Meta Ads* (Fb, Inst)\nи *Google Ads*",
      description: "Пока конкуренты спят",
      primaryCta: "Начать диалог",
      secondaryCta: "Посмотреть кейсы",
      dashboardTitle: "Центр управления ростом",
      dashboardStatus: "Активно",
      dashboardChartLabel: "Обзор результатов",
      dashboardChartStatus: "Live",
      stats: [
        { value: "2923%", label: "Максимальный ROAS" },
        { value: "578", label: "Лидов в месяц" },
        { value: "30.23", label: "Лучший ROAS" },
      ],
    },
    sections: {
      cases: "Кейсы",
      services: "Услуги",
      clients: "Клиенты",
      about: "О нас",
      testimonials: "Видео отзывы",
      contacts: "Контакты",
    },
    sectionLead: {
      cases: "",
      services: "",
      clients: "",
      about: "",
      testimonials: "Отзывы клиентов, с которыми мы работали над ростом, упаковкой и рекламой.",
      contacts: "Свяжитесь с нами, чтобы обсудить проект, рекламную кампанию или постоянное маркетинговое сопровождение.",
    },
    cases: casesRu,
    services: [
      {
        title: "НАСТРОЙКА ТАРГЕТИРОВАННОЙ РЕКЛАМЫ META ADS",
        description:
          "Настраиваем рекламу в Meta Ads с фокусом на рост прибыли, прозрачную структуру кампаний и устойчивый рост.",
        features: [
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
      },
    ],
    clients: clientLogos,
    about: {
      title: "11 лет привлекаем клиентов для бизнеса в 18 различных сферах",
      description:
        "Помогаем бизнесу получать качественные заявки и превращать рекламу в предсказуемый инструмент роста. В основе работы — не просто запуск кампаний, а глубокое понимание экономики вашего проекта. Мы не делаем «рекламу ради рекламы», а фокусируемся на том, чтобы каждый вложенный евро возвращался прибылью.",
      points: [
        "Честный отбор. Мы заходим в проект только когда уверены в его финансовом успехе. Обычно это ниши с высоким чеком, где 1–5 клиентов полностью окупают рекламные расходы.",
        "Опыт в 18+ направлениях. От аппаратной косметологии до сложных строительных услуг. Мы знаем специфику разных рынков, поэтому не тратим время на тесты заведомо слабых гипотез.",
        "Результат в цифрах. Наш рекорд — ROMI 2305%. Мы умеем выстраивать понятную систему привлечения и масштабировать результат.",
        "Мы ценим ваше спокойствие и строим работу на взаимном доверии. Вместо хаотичных действий мы предлагаем прозрачную систему и внимание к каждому нюансу вашего бизнеса, чтобы маркетинг стал надежной опорой для вашего развития.",
      ],
      founderLabel: "FOUNDER",
      founderName: "Kseniia Ignateva",
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
      email: "ceo@domarketing.ee",
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
      description: "Современный лендинг агентства с реальными кейсами, темным премиальным интерфейсом и понятными контактами.",
    },
  },
};
