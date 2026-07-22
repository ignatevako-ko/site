import type {
  CaseCta,
  CaseFact,
  CaseStat,
} from "@/components/cases/case-sections";
import type { Language } from "@/data/site-content";

/** Медиа — не зависит от языка. */
export const romiCreativeVideos = [
  { src: "/videos/cases/romi-2500-construction/creative-01-klever-reels.mp4", titleKey: 0 },
  { src: "/videos/cases/romi-2500-construction/creative-02.mp4", titleKey: 1 },
  { src: "/videos/cases/romi-2500-construction/creative-03.mp4", titleKey: 2 },
  { src: "/videos/cases/romi-2500-construction/creative-04.mp4", titleKey: 3 },
  { src: "/videos/cases/romi-2500-construction/creative-05.mp4", titleKey: 4 },
  { src: "/videos/cases/romi-2500-construction/creative-07.mp4", titleKey: 5 },
] as const;

export type RomiContent = {
  badge: string;
  category: string;
  heroTitle: string;
  heroDescription: string;
  primaryCta: CaseCta;
  secondaryCta: CaseCta;
  resultStats: CaseStat[];
  heroPanel: {
    label: string;
    title: string;
    badge: string;
    segments: Array<{ label: string; value: string }>;
    economyBadge: string;
    economyValue: string;
    economyNote: string;
  };
  facts: CaseFact[];
  main: { label: string; title: string; paragraphs: string[]; ctaLabel: string };
  cards: Array<{ label: string; title: string; text: string }>;
  mechanics: { label: string; title: string; steps: string[] };
  creatives: { label: string; title: string; description: string; videoTitles: string[] };
  nextStep: { label: string; title: string; text: string; cta: string };
};

const ru: RomiContent = {
  badge: "Реальный кейс",
  category: "Renovation & construction",
  heroTitle: "ROMI 2500% в строительных работах",
  heroDescription:
    "За 5,5 лет сотрудничества компания комплексного ремонта перешла из эконом-сегмента в элитный сегмент. Системное привлечение клиентов помогло каждый год увеличивать средний чек и получать заявки даже в январе, который раньше был пустым месяцем.",
  primaryCta: { label: "Хочу также", href: "#contacts" },
  secondaryCta: { label: "Как это сделали", href: "#mechanics" },
  resultStats: [
    { value: "2500%", label: "ROMI по прибыли" },
    { value: "€450", label: "стоимость привлеченного клиента" },
    { value: "€90 000", label: "выручка с 1 клиента" },
    { value: "200x", label: "выручка к стоимости клиента" },
  ],
  heroPanel: {
    label: "Unit economics",
    title: "Путь клиента за 5,5 лет",
    badge: "ROMI 2500%",
    segments: [
      { label: "Старт", value: "эконом-сегмент" },
      { label: "Система", value: "стабильные заявки" },
      { label: "Итог", value: "элитный сегмент" },
    ],
    economyBadge: "Экономика на клиента",
    economyValue: "€450 CAC → €90 000",
    economyNote: "≈200× по выручке. ROMI посчитан от прибыли после себестоимости.",
  },
  facts: [
    { label: "Ниша", value: "Комплексный ремонт жилых и коммерческих объектов" },
    { label: "Период работы", value: "5,5 лет" },
    { label: "Клиент", value: "Компания полного цикла в ремонтно-строительных работах" },
    { label: "Услуги клиента", value: "Дизайн-проект, ремонт, комплектация, мебель" },
    { label: "Сезонность", value: "Январь перестал быть месяцем без заявок" },
  ],
  main: {
    label: "Главное в кейсе",
    title: "Продажи дорогого ремонта стали предсказуемой системой",
    paragraphs: [
      "Клиент работает в сложной нише комплексного ремонта, где решение о покупке дорогое, длинное и связано с высоким уровнем доверия. Поэтому задача была не просто получить заявки, а создать поток клиентов, который выдерживает сезонность и помогает расти в цене.",
      "За время сотрудничества компания каждый год увеличивала средний чек на работы. Через 5 лет она вышла из эконом-сегмента в элитный сегмент, потому что привлечение клиентов стало стабильным, а не зависимым от случайного спроса.",
    ],
    ctaLabel: "Хочу также",
  },
  cards: [
    {
      label: "Задача",
      title: "Заполнить воронку качественными клиентами",
      text: "Нужно было привлекать людей не только на дизайн-проект, но и на комплексный ремонт с высоким чеком, где один клиент может принести около €90 000 выручки.",
    },
    {
      label: "Подход",
      title: "Системная реклама вместо сезонных всплесков",
      text: "Кампании поддерживали спрос круглый год: отдельно работали с интересом к дизайн-проекту, комплексному ремонту, материалам и мебели для жилых и коммерческих объектов.",
    },
    {
      label: "Результат",
      title: "Январь перестал быть пустым месяцем",
      text: "До сотрудничества январь проходил без заявок. Во время работы приходило по 3-5 клиентов на дизайн-проект и по 1 клиенту на комплексный ремонт.",
    },
  ],
  mechanics: {
    label: "Что сделали",
    title: "Как построили рост на длинной дистанции",
    steps: [
      "Упаковали комплексный ремонт не как набор работ, а как понятный путь клиента: от дизайн-проекта до готового объекта с материалами и мебелью.",
      "Развели коммуникацию для разных уровней спроса: дизайн-проект, комплексный ремонт, комплектация материалами и производство мебели.",
      "Стабилизировали привлечение в периоды, когда рынок обычно проседает, чтобы команда продаж не зависела только от высокого сезона.",
      "Постепенно повышали качество заявок и средний чек, чтобы компания могла выйти из эконом-сегмента в элитный сегмент.",
      "Поддерживали регулярную оптимизацию рекламы, офферов и посадочных связок, чтобы привлечение оставалось системным на длинной дистанции.",
    ],
  },
  creatives: {
    label: "Креативы",
    title: "Видео, которые помогали упаковать дорогой ремонт",
    description:
      "Для такой ниши креатив должен быстро показать уровень работ, доверие к подрядчику и понятный следующий шаг: оставить заявку на дизайн-проект или комплексный ремонт.",
    videoTitles: [
      "Reels-креатив для комплексного ремонта",
      "Видео-креатив для заявки на ремонт",
      "Видео-креатив для дизайн-проекта",
      "Креатив для премиального ремонта",
      "Креатив для комплексной услуги",
      "Видео-креатив для сезонного спроса",
    ],
  },
  nextStep: {
    label: "Следующий шаг",
    title: "Хотите привлекать клиентов на дорогие услуги системно?",
    text: "Покажите нам ваш средний чек, географию, сезонность и текущую стоимость заявки. Мы оценим экономику и предложим реалистичный план привлечения.",
    cta: "Обсудить проект",
  },
};

const en: RomiContent = {
  badge: "Real case study",
  category: "Renovation & construction",
  heroTitle: "2500% ROMI in construction work",
  heroDescription:
    "Over 5.5 years of collaboration, a full-service renovation company moved from the budget segment to the premium segment. Systematic client acquisition helped raise the average order value every year and bring in leads even in January, which used to be an empty month.",
  primaryCta: { label: "I want this too", href: "#contacts" },
  secondaryCta: { label: "How we did it", href: "#mechanics" },
  resultStats: [
    { value: "2500%", label: "ROMI on profit" },
    { value: "€450", label: "cost per acquired client" },
    { value: "€90 000", label: "revenue from one client" },
    { value: "200x", label: "revenue to client cost" },
  ],
  heroPanel: {
    label: "Unit economics",
    title: "The client journey over 5.5 years",
    badge: "ROMI 2500%",
    segments: [
      { label: "Start", value: "budget segment" },
      { label: "System", value: "steady leads" },
      { label: "Outcome", value: "premium segment" },
    ],
    economyBadge: "Economics per client",
    economyValue: "€450 CAC → €90 000",
    economyNote: "≈200× on revenue. ROMI is calculated on profit after cost of goods.",
  },
  facts: [
    { label: "Niche", value: "Full-service renovation of residential and commercial properties" },
    { label: "Engagement period", value: "5.5 years" },
    { label: "Client", value: "A full-cycle company in renovation and construction work" },
    { label: "Client services", value: "Design project, renovation, sourcing, furniture" },
    { label: "Seasonality", value: "January is no longer a month without leads" },
  ],
  main: {
    label: "Case highlights",
    title: "Selling premium renovation became a predictable system",
    paragraphs: [
      "The client works in the demanding niche of full-service renovation, where the buying decision is expensive, drawn-out and built on a high level of trust. So the goal was not just to generate leads, but to build a flow of clients that withstands seasonality and helps raise prices.",
      "Over the course of our collaboration, the company raised its average order value every year. After 5 years it moved from the budget segment to the premium segment, because client acquisition had become stable rather than dependent on random demand.",
    ],
    ctaLabel: "I want this too",
  },
  cards: [
    {
      label: "Challenge",
      title: "Fill the funnel with quality clients",
      text: "We needed to attract people not only for a design project, but also for full-service renovation with a high order value, where a single client can bring in around €90 000 in revenue.",
    },
    {
      label: "Approach",
      title: "Systematic advertising instead of seasonal spikes",
      text: "The campaigns sustained demand year-round: we worked separately with interest in design projects, full-service renovation, materials and furniture for residential and commercial properties.",
    },
    {
      label: "Result",
      title: "January stopped being an empty month",
      text: "Before our collaboration, January went by without any leads. During our work, 3-5 clients came in for design projects and 1 client for full-service renovation.",
    },
  ],
  mechanics: {
    label: "What we did",
    title: "How we built growth over the long haul",
    steps: [
      "Packaged full-service renovation not as a set of jobs, but as a clear client journey: from the design project to a finished space with materials and furniture.",
      "Separated the messaging for different levels of demand: design project, full-service renovation, materials sourcing and furniture production.",
      "Stabilized acquisition during periods when the market usually dips, so the sales team wouldn't depend only on peak season.",
      "Gradually improved lead quality and average order value so the company could move from the budget segment to the premium segment.",
      "Kept up regular optimization of ads, offers and landing-page combinations so acquisition stayed systematic over the long haul.",
    ],
  },
  creatives: {
    label: "Creatives",
    title: "Videos that helped package premium renovation",
    description:
      "In a niche like this, the creative has to quickly show the quality of the work, trust in the contractor and a clear next step: submit a request for a design project or full-service renovation.",
    videoTitles: [
      "Reels creative for full-service renovation",
      "Video creative for a renovation request",
      "Video creative for a design project",
      "Creative for premium renovation",
      "Creative for the full-service offering",
      "Video creative for seasonal demand",
    ],
  },
  nextStep: {
    label: "Next step",
    title: "Want to attract clients for high-ticket services systematically?",
    text: "Show us your average order value, geography, seasonality and current cost per lead. We'll assess the economics and propose a realistic acquisition plan.",
    cta: "Discuss a project",
  },
};

const et: RomiContent = {
  badge: "Reaalne juhtum",
  category: "Renovation & construction",
  heroTitle: "ROMI 2500% ehitustöödes",
  heroDescription:
    "5,5 aasta pikkuse koostöö jooksul liikus tervikliku remondi ettevõte ökonoomsegmendist eliitsegmenti. Süsteemne klientide hankimine aitas igal aastal tõsta keskmist tšekki ja saada päringuid isegi jaanuaris, mis varem oli tühi kuu.",
  primaryCta: { label: "Soovin sama", href: "#contacts" },
  secondaryCta: { label: "Kuidas me seda tegime", href: "#mechanics" },
  resultStats: [
    { value: "2500%", label: "ROMI kasumilt" },
    { value: "€450", label: "hangitud kliendi hind" },
    { value: "€90 000", label: "käive ühelt kliendilt" },
    { value: "200x", label: "käive kliendi hinna suhtes" },
  ],
  heroPanel: {
    label: "Unit economics",
    title: "Kliendi teekond 5,5 aasta jooksul",
    badge: "ROMI 2500%",
    segments: [
      { label: "Algus", value: "ökonoomsegment" },
      { label: "Süsteem", value: "stabiilsed päringud" },
      { label: "Tulemus", value: "eliitsegment" },
    ],
    economyBadge: "Ökonoomika kliendi kohta",
    economyValue: "€450 CAC → €90 000",
    economyNote: "≈200× käibe järgi. ROMI on arvutatud kasumilt pärast omahinda.",
  },
  facts: [
    { label: "Nišš", value: "Elu- ja äripindade terviklik remont" },
    { label: "Koostöö periood", value: "5,5 aastat" },
    { label: "Klient", value: "Täistsükli ettevõte remondi- ja ehitustöödes" },
    { label: "Kliendi teenused", value: "Disainiprojekt, remont, komplekteerimine, mööbel" },
    { label: "Hooajalisus", value: "Jaanuar ei ole enam päringuteta kuu" },
  ],
  main: {
    label: "Juhtumi tuum",
    title: "Kalli remondi müük muutus prognoositavaks süsteemiks",
    paragraphs: [
      "Klient tegutseb keerulises tervikliku remondi nišis, kus ostuotsus on kallis, pikk ja seotud kõrge usaldusega. Seetõttu ei olnud eesmärk lihtsalt päringuid saada, vaid luua kliendivoog, mis peab vastu hooajalisusele ja aitab hinda tõsta.",
      "Koostöö jooksul suurendas ettevõte igal aastal tööde keskmist tšekki. Viie aastaga liikus ta ökonoomsegmendist eliitsegmenti, sest klientide hankimine muutus stabiilseks, mitte juhuslikust nõudlusest sõltuvaks.",
    ],
    ctaLabel: "Soovin sama",
  },
  cards: [
    {
      label: "Ülesanne",
      title: "Täita müügitoru kvaliteetsete klientidega",
      text: "Oli vaja tuua kliente mitte ainult disainiprojektile, vaid ka kõrge tšekiga terviklikule remondile, kus üks klient võib tuua umbes €90 000 käivet.",
    },
    {
      label: "Lähenemine",
      title: "Süsteemne reklaam hooajaliste hüpete asemel",
      text: "Kampaaniad hoidsid nõudlust aasta läbi: töötasime eraldi huviga disainiprojekti, tervikliku remondi, materjalide ning elu- ja äripindade mööbli vastu.",
    },
    {
      label: "Tulemus",
      title: "Jaanuar lakkas olemast tühi kuu",
      text: "Enne koostööd möödus jaanuar päringuteta. Töö ajal tuli 3-5 klienti disainiprojektile ja 1 klient terviklikule remondile.",
    },
  ],
  mechanics: {
    label: "Mida me tegime",
    title: "Kuidas ehitasime pikaajalise kasvu",
    steps: [
      "Pakendasime tervikliku remondi mitte tööde kogumina, vaid selge kliendi teekonnana: disainiprojektist kuni valmis objektini koos materjalide ja mööbliga.",
      "Eristasime kommunikatsiooni erinevate nõudlustasemete jaoks: disainiprojekt, terviklik remont, materjalidega komplekteerimine ja mööbli tootmine.",
      "Stabiliseerisime hankimist perioodidel, mil turg tavaliselt vajub, et müügimeeskond ei sõltuks ainult kõrghooajast.",
      "Tõstsime järk-järgult päringute kvaliteeti ja keskmist tšekki, et ettevõte saaks liikuda ökonoomsegmendist eliitsegmenti.",
      "Hoidsime käigus reklaamide, pakkumiste ja maandumislehtede regulaarset optimeerimist, et hankimine püsiks pikas plaanis süsteemsena.",
    ],
  },
  creatives: {
    label: "Kreatiivid",
    title: "Videod, mis aitasid kallist remonti pakendada",
    description:
      "Sellises nišis peab kreatiiv kiiresti näitama tööde taset, usaldust töövõtja vastu ja selget järgmist sammu: jätta päring disainiprojektile või terviklikule remondile.",
    videoTitles: [
      "Reels-kreatiiv tervikliku remondi jaoks",
      "Videokreatiiv remondi päringu jaoks",
      "Videokreatiiv disainiprojekti jaoks",
      "Kreatiiv premium-remondi jaoks",
      "Kreatiiv tervikteenuse jaoks",
      "Videokreatiiv hooajalise nõudluse jaoks",
    ],
  },
  nextStep: {
    label: "Järgmine samm",
    title: "Kas soovite hankida kliente kallitele teenustele süsteemselt?",
    text: "Näidake meile oma keskmist tšekki, geograafiat, hooajalisust ja praegust päringu hinda. Hindame ökonoomikat ja pakume realistliku hankimisplaani.",
    cta: "Aruta projekti",
  },
};

export const romiContent: Record<Language, RomiContent> = {
  ru,
  en,
  et,
};
