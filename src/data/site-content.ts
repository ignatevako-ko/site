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

export type Certification = {
  issuer: string;
  title: string;
  description: string;
  scope: string;
  logo: string;
  logoAlt: string;
};

export type CertificationsContent = {
  eyebrow: string;
  title: string;
  description: string;
  programLabel: string;
  items: Certification[];
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
  certifications: CertificationsContent;
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
    title: "ROMI 2500% на ремонте под ключ",
    category: "Lead generation / renovation & construction",
    result: "€450 за клиента при выручке около €90 000",
    summary:
      "5,5 лет системно привлекали клиентов для компании комплексного ремонта: от дизайн-проекта и ремонтных работ до комплектации материалами и производства мебели. Компания вышла из эконом-сегмента в элитный и сохранила поток заявок даже в низкий сезон.",
    href: "/cases/romi-2500-construction",
  },
  {
    title: "561 заявка за месяц по €3,4 в детский спорт",
    category: "Lead generation / sports education",
    result: "цена лида упала с €20–60 до €4",
    summary:
      "Работаем с EDU.DO 3 года и стабильно приводим от 370 заявок каждый месяц на плавание, карате и ОФП. Рекордный месяц дал 561 заявку, средняя цена лида держится около €4, а до начала работы доходила до €60.",
    href: "/cases/edu-do",
  },
  {
    title: "751 заявка на курсы по €1,48",
    category: "Lead generation / professional courses",
    result: "ROAS около 4 700% при чеке курса €2 400",
    summary:
      "8 кампаний на 5 направлений: повар, бармен, швея, ИИ и digital-маркетинг. Рекламный бюджет €1 113 полностью окупается уже на первых оплатах: при конверсии в оплату 3% один ученик обходится примерно в €49.",
    href: "/cases/profftech",
  },
  {
    title: "ROAS 15 в Black Friday на женской спортивной одежде",
    category: "E-commerce / worldwide sales",
    result: "$10 за покупателя в пик распродажи",
    summary:
      "До Черной пятницы реклама принесла $8 881 продаж при бюджете $868. В три дня распродажи магазин заработал еще $4 690 при бюджете $311 — самая эффективная связка за весь период работы.",
    href: "/cases/womens-activewear",
  },
  {
    title: "ROAS 30 и 114 продаж косметики",
    category: "E-commerce / beauty retail",
    result: "€8 387 выручки при бюджете €277",
    summary:
      "Для эстонского интернет-магазина косметики собрали кампанию вокруг одного оффера — скидки 20% на линейку Medic8. Продажа обошлась в €2.43 при среднем чеке €73.57, то есть реклама забирала около 3% выручки.",
    href: "/cases/cosmetics-store",
  },
  {
    title: "ROAS 3790%: €252 превратили в €9 560",
    category: "Travel / Estonia",
    result: "8 купленных туров за 2 недели",
    summary:
      "Для Prime Tour настроили Meta Ads на авторский тур по Грузии и другие туристические направления для русско- и эстоноязычной аудитории. Кейс показывает финансовый результат через ROAS, выручку и стоимость купленного тура.",
    href: "/cases/prime-tour",
  },
  {
    title: "565 лидов в месяц в детские лагеря",
    category: "Lead generation / children camps",
    result: "€2,7 за лид с апреля по август",
    summary:
      "С апреля до середины августа ведем набор в дневной городской лагерь и выездные лагеря в Эстонии. Сначала трафик шел только на лид-форму, затем часть бюджета перевели на прямую регистрацию на сайте — это дало и заявки, и оплаты.",
    href: "/cases/suvelaagrid",
  },
  {
    title: "34 клиента по €17,50 на SMAS-лифтинг",
    category: "Beauty services / Estonia",
    result: "€600 бюджета на процедуру за €125–537",
    summary:
      "Салон красоты ILUPROFF в Эстонии продвигал SMAS-лифтинг. Тестирование форматов, языков и сегментов позволило найти самую сильную связку и привлекать клиентов на маржинальную процедуру дешевле стоимости одного визита в 7–30 раз.",
    href: "/cases/iluproff",
  },
  {
    title: "Цена лида ниже в 15 раз: 300–500 лидов в месяц",
    category: "E-commerce / Moldova",
    result: "30–50 покупок в месяц при бюджете €750",
    summary:
      "Для магазина досок для гвоздестояния Sadhu Boards перестроили рекламу так, что лид стал дешевле в 15 раз. Проект получает стабильный поток заявок и покупок каждый месяц без роста бюджета.",
    href: "/cases/sadhu-boards",
  },
  {
    title: "ROAS 7,19 в Meta Ads для 5+ событий",
    category: "Events / Meta Ads + Google Ads / Riga",
    result: "фактический ROAS выше из-за офлайн-посетителей",
    summary:
      "Для Digital Art House в Риге параллельно ведем рекламу выставок, спектаклей, art dinner, комедии и живой музыки. Лучший ROAS в Meta Ads достиг 7,19, а отдельная кампания принесла 39 покупок по €6,56.",
    href: "/cases/digital-art-house",
  },
];

const casesEn: CaseStudy[] = [
  {
    title: "2500% ROMI in full-service renovation",
    category: "Lead generation / renovation & construction",
    result: "€450 per client with about €90,000 revenue",
    summary:
      "For 5.5 years we built a predictable acquisition system for a full-cycle renovation company: design projects, renovation works, material sourcing and custom furniture production. The company moved from the economy segment to the premium segment while keeping client flow stable even in low season.",
    href: "/cases/romi-2500-construction",
  },
  {
    title: "561 leads in a month at €3.4 in kids' sports",
    category: "Lead generation / sports education",
    result: "lead cost dropped from €20–60 to €4",
    summary:
      "We have worked with EDU.DO for 3 years and consistently generate at least 370 leads every month for swimming, karate and general fitness. The record month brought 561 leads, and the average lead cost now holds around €4 versus up to €60 before our work.",
    href: "/cases/edu-do",
  },
  {
    title: "751 course leads at €1.48",
    category: "Lead generation / professional courses",
    result: "about 4,700% ROAS at a €2,400 course price",
    summary:
      "8 campaigns across 5 programmes: chef, bartender, seamstress, AI and digital marketing. The €1,113 ad budget pays for itself on the first payments: at a 3% lead-to-payment rate one student costs about €49.",
    href: "/cases/profftech",
  },
  {
    title: "ROAS 15 on Black Friday for women's activewear",
    category: "E-commerce / worldwide sales",
    result: "$10 per customer at the peak of the sale",
    summary:
      "Before Black Friday, campaigns generated $8,881 in sales on an $868 budget. During the three sale days the store earned another $4,690 on $311 spend — the strongest combination of the whole engagement.",
    href: "/cases/womens-activewear",
  },
  {
    title: "ROAS 30 and 114 cosmetics orders",
    category: "E-commerce / beauty retail",
    result: "€8,387 revenue on a €277 budget",
    summary:
      "For an Estonian cosmetics store we built the campaign around a single offer — 20% off the Medic8 line. A sale cost €2.43 at an average order value of €73.57, so advertising took about 3% of revenue.",
    href: "/cases/cosmetics-store",
  },
  {
    title: "3790% ROAS: €252 turned into €9,560",
    category: "Travel / Estonia",
    result: "8 tours purchased in 2 weeks",
    summary:
      "We set up Meta Ads for a custom tour through Georgia and other travel directions for Russian- and Estonian-speaking audiences. The case presents the financial result through ROAS, revenue and cost per purchased tour.",
    href: "/en/cases/prime-tour",
  },
  {
    title: "565 leads a month for children's camps",
    category: "Lead generation / children camps",
    result: "€2.7 per lead from April to August",
    summary:
      "From April to mid-August we run enrollment for a daytime city camp and away camps across Estonia. We started with lead forms only, then moved part of the budget to direct website registration — which brought both leads and payments.",
    href: "/cases/suvelaagrid",
  },
  {
    title: "34 clients at €17.50 for SMAS lifting",
    category: "Beauty services / Estonia",
    result: "€600 budget for a €125–537 procedure",
    summary:
      "Estonian beauty salon ILUPROFF promoted SMAS lifting. Testing formats, languages and segments identified the strongest combination and brought clients to a high-margin procedure for 7–30 times less than a single visit is worth.",
    href: "/cases/iluproff",
  },
  {
    title: "15x cheaper leads: 300–500 leads a month",
    category: "E-commerce / Moldova",
    result: "30–50 purchases a month on a €750 budget",
    summary:
      "For the Sadhu Boards nail-board store we rebuilt the advertising so the lead became 15 times cheaper. The project now receives a steady flow of leads and purchases every month without increasing the budget.",
    href: "/cases/sadhu-boards",
  },
  {
    title: "7.19 Meta Ads ROAS across 5+ events",
    category: "Events / Meta Ads + Google Ads / Riga",
    result: "actual ROAS is higher because of walk-in visitors",
    summary:
      "For Digital Art House in Riga we run exhibitions, theatre, art dinners, comedy and live-music campaigns in parallel. The best Meta Ads ROAS reached 7.19, while one campaign generated 39 purchases at €6.56 each.",
    href: "/cases/digital-art-house",
  },
];

const casesEt: CaseStudy[] = [
  {
    title: "ROMI 2500% terviklikus remondis",
    category: "Lead generation / renovation & construction",
    result: "€450 kliendi kohta ja ligi €90 000 käivet",
    summary:
      "5,5 aasta jooksul ehitasime tervikliku kliendihanke süsteemi täisteenust pakkuvale remondiettevõttele: sisekujundusprojektid, remonditööd, materjalide komplekteerimine ja eritellimusmööbli tootmine. Ettevõte liikus säästusegmendist premium-segmenti ning säilitas kliendivoo ka madalhooajal.",
    href: "/cases/romi-2500-construction",
  },
  {
    title: "561 päringut kuus hinnaga €3,4 lastespordis",
    category: "Lead generation / sports education",
    result: "päringu hind langes €20–60 pealt €4-le",
    summary:
      "Oleme EDU.DO-ga töötanud 3 aastat ja toome stabiilselt vähemalt 370 päringut kuus ujumisse, karatesse ja üldkehalisse ettevalmistusse. Rekordkuu tõi 561 päringut ning keskmine päringu hind püsib umbes €4 juures.",
    href: "/cases/edu-do",
  },
  {
    title: "751 kursusepäringut hinnaga €1,48",
    category: "Lead generation / professional courses",
    result: "ROAS umbes 4 700% kursuse hinnaga €2 400",
    summary:
      "8 kampaaniat 5 suunal: kokk, baarmen, õmbleja, AI ja digiturundus. €1 113 reklaamieelarve tasub end ära juba esimeste maksetega: 3% konversiooniga makseks maksab üks õpilane umbes €49.",
    href: "/cases/profftech",
  },
  {
    title: "ROAS 15 Black Fridayl naiste spordiriietel",
    category: "E-commerce / worldwide sales",
    result: "$10 ostja kohta müügitipul",
    summary:
      "Enne Black Fridayd tõi reklaam $8 881 müüki $868 eelarvega. Kolme allahindluspäeva jooksul teenis pood veel $4 690 juurde $311 kuluga — see oli kogu koostöö tugevaim kombinatsioon.",
    href: "/cases/womens-activewear",
  },
  {
    title: "ROAS 30 ja 114 kosmeetikamüüki",
    category: "E-commerce / beauty retail",
    result: "€8 387 käivet €277 eelarvega",
    summary:
      "Eesti kosmeetika e-poe jaoks ehitasime kampaania ühe pakkumise ümber — 20% soodustus Medic8 tootesarjale. Müük maksis €2.43 keskmise ostukorviga €73.57, seega reklaam võttis umbes 3% käibest.",
    href: "/cases/cosmetics-store",
  },
  {
    title: "ROAS 3790%: €252-st sai €9 560",
    category: "Travel / Estonia",
    result: "8 ostetud reisi 2 nädalaga",
    summary:
      "Seadistasime Meta Ads reklaami Gruusia autorireisile ja teistele reisisuundadele vene- ja eestikeelsele sihtrühmale. Töö näitab finantstulemust ROAS-i, käibe ja ostetud reisi hinna kaudu.",
    href: "/et/cases/prime-tour",
  },
  {
    title: "565 päringut kuus lastelaagritesse",
    category: "Lead generation / children camps",
    result: "€2,7 päringu kohta aprillist augustini",
    summary:
      "Aprillist augusti keskpaigani juhime registreerimist linna päevalaagrisse ja väljasõidulaagritesse Eestis. Alustasime ainult lead-vormidega, seejärel suunasime osa eelarvest otse veebilehe registreerimisele — see tõi nii päringuid kui ka makseid.",
    href: "/cases/suvelaagrid",
  },
  {
    title: "34 klienti hinnaga €17,50 SMAS-liftingule",
    category: "Beauty services / Estonia",
    result: "€600 eelarve protseduurile hinnaga €125–537",
    summary:
      "Eesti ilusalong ILUPROFF reklaamis SMAS-liftingut. Formaatide, keelte ja sihtgruppide testimine aitas leida tugevaima kombinatsiooni ja tuua kliente kõrge marginaaliga protseduurile 7–30 korda odavamalt kui ühe visiidi väärtus.",
    href: "/cases/iluproff",
  },
  {
    title: "15 korda odavam päring: 300–500 päringut kuus",
    category: "E-commerce / Moldova",
    result: "30–50 ostu kuus €750 eelarvega",
    summary:
      "Naelalaudade poe Sadhu Boards jaoks ehitasime reklaami ümber nii, et päring muutus 15 korda odavamaks. Projekt saab iga kuu stabiilse päringute ja ostude voo ilma eelarvet suurendamata.",
    href: "/cases/sadhu-boards",
  },
  {
    title: "Meta Adsi ROAS 7,19 ja 5+ sündmust",
    category: "Sündmused / Meta Ads + Google Ads / Riia",
    result: "tegelik ROAS on kohapealsete külastajate tõttu kõrgem",
    summary:
      "Digital Art House’i jaoks Riias reklaamime paralleelselt näitusi, teatrit, art dinner’eid, komöödiat ja elavat muusikat. Meta Adsi parim ROAS oli 7,19 ning üks kampaania tõi 39 ostu hinnaga €6,56.",
    href: "/cases/digital-art-house",
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
      title: "We bring qualified clients through *Meta Ads* (FB, Inst)\nand *Google Ads*",
      description: "While your competitors are asleep",
      primaryCta: "Start a conversation",
      secondaryCta: "Explore cases",
      dashboardTitle: "Growth command center",
      dashboardStatus: "Active",
      dashboardChartLabel: "Performance overview",
      dashboardChartStatus: "Live",
      stats: [
        { value: "2923%", label: "Maximum ROAS" },
        { value: "578", label: "Leads per month" },
        { value: "x35", label: "Payback" },
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
      testimonials: "Client feedback from projects where we worked on growth, positioning and advertising.",
      contacts: "Contact us to discuss a project, ad campaign or ongoing marketing support.",
    },
    cases: casesEn,
    services: [
      {
        title: "META ADS TARGETED ADVERTISING SETUP",
        description:
          "We set up Meta Ads with a focus on profit growth, transparent campaign structure and sustainable scaling.",
        features: [
          "niche and competitor analysis",
          "Meta Ads ad account setup",
          "audience setup",
          "advertising campaign strategy",
          "ad structure creation",
          "ad copywriting",
          "creative production or filming brief",
          "ad launch",
          "A/B testing",
          "campaign optimization",
        ],
      },
    ],
    clients: clientLogos,
    certifications: {
      eyebrow: "Platform certifications",
      title: "Expertise confirmed by Google and Meta programs",
      description:
        "Professional training in the advertising platforms we use every day to launch, measure and scale campaigns.",
      programLabel: "Official certification program",
      items: [
        {
          issuer: "Google Skillshop",
          title: "Google Ads Certification",
          description:
            "Search campaign setup, bidding strategy and performance measurement in Google Ads.",
          scope: "Search · Measurement · Optimisation",
          logo: "/images/certifications/google-ads.webp",
          logoAlt: "Google Ads",
        },
        {
          issuer: "Meta Blueprint",
          title: "Meta Ads Certification",
          description:
            "Media buying, campaign architecture and performance optimisation across Meta technologies.",
          scope: "Media buying · Campaigns · Scaling",
          logo: "/images/certifications/meta.svg",
          logoAlt: "Meta",
        },
      ],
    },
    about: {
      title: "11 years of attracting clients for businesses across 18 different industries",
      description:
        "We help businesses generate high-quality leads and turn advertising into a predictable growth tool. Our work is not just about launching campaigns — it is built on a deep understanding of your project’s economics. We do not do ‘advertising for the sake of advertising’; we focus on making every euro invested return as profit.",
      points: [
        "Honest selection. We only enter a project when we are confident in its financial potential. Usually these are high-ticket niches where 1–5 clients fully cover the advertising costs.",
        "Experience across 18+ industries. From hardware cosmetology to complex construction services. We understand the specifics of different markets, so we do not waste time testing obviously weak hypotheses.",
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
      text: "Conscious performance marketing for brands that need sharper decisions and stronger results.",
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
      title: "Toome sihtkliendid läbi *Meta Ads* reklaami (FB, Inst)\nja *Google Ads* reklaami",
      description: "Samal ajal kui konkurendid magavad",
      primaryCta: "Alusta vestlust",
      secondaryCta: "Vaata töid",
      dashboardTitle: "Kasvu juhtimiskeskus",
      dashboardStatus: "Aktiivne",
      dashboardChartLabel: "Tulemuste ülevaade",
      dashboardChartStatus: "Live",
      stats: [
        { value: "2923%", label: "Parim kampaania tasuvus" },
        { value: "578", label: "Leadi kuus" },
        { value: "x35", label: "Tasuvus" },
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
      testimonials: "Tagasiside klientidelt, kellega töötasime kasvu, pakendamise ja reklaami kallal.",
      contacts: "Võta meiega ühendust, et arutada projekti, reklaamikampaaniat või pidevat turundustuge.",
    },
    cases: casesEt,
    services: [
      {
        title: "META ADS SIHITUD REKLAAMI SEADISTUS",
        description:
          "Seadistame Meta Adsi reklaami kasumi kasvu, läbipaistva kampaaniastruktuuri ja stabiilse kasvu fookusega.",
        features: [
          "niši ja konkurentide analüüs",
          "Meta Ads reklaamikonto seadistus",
          "auditooriumide seadistus",
          "reklaamikampaania strateegia väljatöötamine",
          "reklaami struktuuri loomine",
          "reklaamtekstide kirjutamine",
          "loovlahenduste loomine või võtteülesanne",
          "reklaami käivitamine",
          "A/B testimine",
          "reklaamikampaaniate optimeerimine",
        ],
      },
    ],
    clients: clientLogos,
    certifications: {
      eyebrow: "Platvormide sertifikaadid",
      title: "Google'i ja Meta programmidega kinnitatud pädevus",
      description:
        "Professionaalne väljaõpe reklaamiplatvormidel, mida kasutame iga päev kampaaniate käivitamiseks, mõõtmiseks ja kasvatamiseks.",
      programLabel: "Ametlik sertifitseerimisprogramm",
      items: [
        {
          issuer: "Google Skillshop",
          title: "Google Ads sertifikaat",
          description:
            "Otsingukampaaniate seadistus, pakkumisstrateegia ja tulemuste mõõtmine Google Adsis.",
          scope: "Otsing · Mõõtmine · Optimeerimine",
          logo: "/images/certifications/google-ads.webp",
          logoAlt: "Google Ads",
        },
        {
          issuer: "Meta Blueprint",
          title: "Meta Ads sertifikaat",
          description:
            "Meediaost, kampaaniate struktuur ja tulemuste optimeerimine Meta tehnoloogiates.",
          scope: "Meediaost · Kampaaniad · Kasvatamine",
          logo: "/images/certifications/meta.svg",
          logoAlt: "Meta",
        },
      ],
    },
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
        { value: "x35", label: "Окупаемость" },
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
    certifications: {
      eyebrow: "Сертификации платформ",
      title: "Экспертиза, подтверждённая программами Google и Meta",
      description:
        "Профессиональная подготовка по рекламным платформам, которые мы каждый день используем для запуска, аналитики и масштабирования кампаний.",
      programLabel: "Официальная программа сертификации",
      items: [
        {
          issuer: "Google Skillshop",
          title: "Сертификация Google Ads",
          description:
            "Настройка поисковых кампаний, стратегии назначения ставок и оценка эффективности рекламы.",
          scope: "Поиск · Аналитика · Оптимизация",
          logo: "/images/certifications/google-ads.webp",
          logoAlt: "Google Ads",
        },
        {
          issuer: "Meta Blueprint",
          title: "Сертификация Meta Ads",
          description:
            "Медиабаинг, архитектура кампаний и performance-оптимизация в технологиях Meta.",
          scope: "Медиабаинг · Кампании · Масштабирование",
          logo: "/images/certifications/meta.svg",
          logoAlt: "Meta",
        },
      ],
    },
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
