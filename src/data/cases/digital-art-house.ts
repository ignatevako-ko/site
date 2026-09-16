import type {
  CaseCta,
  CaseFact,
  CaseFaqItem,
  CaseRelatedLink,
  CaseTableColumn,
  CaseTableRow,
} from "@/components/cases/case-sections";
import type { Language } from "@/data/site-content";

/** Оригинальные рекламные креативы из рабочего Telegram-чата проекта. */
export const digitalArtHouseCreativeImages = [
  { src: "/images/cases/digital-art-house/van-gogh-en.webp", altKey: 0 },
  { src: "/images/cases/digital-art-house/michelangelo-en-01.webp", altKey: 1 },
  {
    src: "/images/cases/digital-art-house/van-gogh-michelangelo-1plus1-lv.webp",
    altKey: 2,
  },
] as const;

export const digitalArtHouseCreativeVideos = [
  {
    src: "/images/cases/digital-art-house/immersive-projection-video.mp4",
    poster: "/images/cases/digital-art-house/immersive-projection-poster.webp",
    titleKey: 0,
  },
  {
    src: "/images/cases/digital-art-house/immersive-blue-video.mp4",
    poster: "/images/cases/digital-art-house/immersive-blue-poster.webp",
    titleKey: 1,
  },
  {
    src: "/images/cases/digital-art-house/lecture-event-video.mp4",
    poster: "/images/cases/digital-art-house/lecture-event-poster.webp",
    titleKey: 2,
  },
] as const;

export type DigitalArtHouseContent = {
  badge: string;
  category: string;
  heroTitle: string;
  heroDescription: string;
  primaryCta: CaseCta;
  secondaryCta: CaseCta;
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
  table: {
    label: string;
    title: string;
    description: string;
    columns: CaseTableColumn[];
    rows: CaseTableRow[];
    note: string;
    proofAlt: string;
    proofCaption: string;
  };
  mechanics: { label: string; title: string; steps: string[] };
  creatives: {
    label: string;
    title: string;
    description: string;
    imageAlts: string[];
    videoTitles: string[];
  };
  faq: { label: string; title: string; items: CaseFaqItem[] };
  related: { label: string; title: string; links: CaseRelatedLink[] };
  nextStep: { label: string; title: string; text: string; cta: string };
};

const ru: DigitalArtHouseContent = {
  badge: "Реальный кейс",
  category: "Events / Meta Ads + Google Ads / Riga",
  heroTitle: "Digital Art House: ROAS 7,19 в Meta Ads для мероприятий",
  heroDescription:
    "Ведём Meta Ads и Google Ads для культурного пространства Digital Art House в Риге. Параллельно продвигаем выставки, спектакли, art dinner, стендап и музыкальные вечера — каждое событие со своим оффером, аудиторией и коротким окном продаж.",
  primaryCta: { label: "Обсудить рекламу событий", href: "#contacts" },
  secondaryCta: { label: "Смотреть результаты", href: "#numbers" },
  heroPanel: {
    label: "Digital Art House",
    title: "Performance-маркетинг для событий",
    badge: "Работа продолжается",
    segments: [
      { label: "Meta Ads", value: "до 39 покупок на кампанию" },
      { label: "Цена покупки", value: "от €6,56" },
      { label: "Темп", value: "5+ событий в активном месяце" },
    ],
    economyBadge: "Лучший подтверждённый ROAS",
    economyValue: "×7,19 в Meta Ads",
    economyNote:
      "Это нижняя граница результата: часть людей видит рекламу, но не покупает билет онлайн — они приходят на выставку или событие и оплачивают посещение на месте.",
  },
  facts: [
    { label: "Клиент", value: "Digital Art House, культурное пространство" },
    { label: "География", value: "Рига, Латвия" },
    { label: "Каналы", value: "Meta Ads и Google Ads" },
    { label: "Формат", value: "Постоянное ведение и еженедельная оптимизация" },
    { label: "События", value: "Выставки, спектакли, art dinner, комедия и музыка" },
    { label: "Темп", value: "Не менее 5 параллельных событий в активном месяце" },
    { label: "Офферы", value: "От 3 вариантов текста для отдельного мероприятия" },
    { label: "Контроль", value: "Недельные отчёты, продажи билетов и заполняемость зала" },
  ],
  main: {
    label: "Главное в кейсе",
    title: "Кабинет показывает не весь эффект рекламы",
    paragraphs: [
      "Do.Marketing ведёт для Digital Art House два канала одновременно: Meta создаёт интерес к конкретным афишам и быстро тестирует подачу, а Google перехватывает сформированный спрос на события и билеты в Риге. Кампании приходится запускать и перестраивать быстро: у каждого мероприятия своя дата, аудитория и срок, за который нужно заполнить зал.",
      "Лучший подтверждённый ROAS в Meta Ads достиг ×7,19. Отдельные кампании принесли до 39 покупок на сайте при цене от €6,56 за покупку. Но для пространства с офлайн-посещением даже эти цифры не показывают всю экономику: часть людей знакомится с событием через рекламу, не оформляет билет на сайте, а приходит и оплачивает вход на месте. Такая выручка не возвращается в рекламный кабинет, поэтому фактический ROAS выше видимого.",
      "В переписке команда клиента отмечает не только цифры кабинета, но и бизнес-результат: зал на одном из выступлений был почти распродан, на другом оставалось совсем мало мест, а после оперативной смены оффера пошли продажи сразу по двум событиям. Это и есть рабочий формат проекта — смотреть на рекламу вместе с реальной заполняемостью, а не оптимизировать клики в отрыве от кассы.",
    ],
    ctaLabel: "Обсудить афишу и продажи",
  },
  cards: [
    {
      label: "Задача",
      title: "Продавать разные события без конкуренции между ними",
      text: "В одном календаре соседствуют выставки, детские спектакли, музыкальные вечера, art dinner и комедийные выступления. Для каждого события нужен отдельный спрос, а бюджеты и сроки нельзя смешивать.",
    },
    {
      label: "Формат работы",
      title: "От афиши до оптимизации — в недельном ритме",
      text: "Получаем материалы, собираем несколько офферов, запускаем кампании в Meta и Google, следим за продажами и быстро меняем подачу, если отдельное событие отстаёт от плана.",
    },
    {
      label: "Результат",
      title: "Не менее пяти событий параллельно",
      text: "В активном месяце одновременно обсуждались и продвигались пять и более афиш. Для Light Music подготовили три текста с разными офферами, а смена оффера по другим событиям сразу дала продажи.",
    },
  ],
  table: {
    label: "Цифры",
    title: "Результаты Meta Ads по отдельным мероприятиям",
    description:
      "Срез из Ads Manager: покупки на сайте, цена результата и ROAS по кампаниям разных форматов. Кампания концерта работала на узнаваемость, поэтому для неё показаны охват и стоимость 1 000 охваченных пользователей.",
    columns: [
      { key: "campaign", label: "Кампания" },
      { key: "result", label: "Результат", align: "right" },
      { key: "cost", label: "Цена результата", align: "right" },
      { key: "roas", label: "ROAS", align: "right" },
    ],
    rows: [
      {
        campaign: "Концерт 17.09 — узнаваемость",
        result: "33 564 охвата",
        cost: "€1,04 / 1 000",
        roas: "—",
      },
      {
        campaign: "Art dinner 04.10",
        result: "5 покупок",
        cost: "€18,12",
        roas: "×3,84",
      },
      {
        campaign: "Импровизация 23.09",
        result: "15 покупок",
        cost: "€8,15",
        roas: "×2,37",
      },
      {
        campaign: "Лекция: французское кино",
        result: "6 покупок",
        cost: "€13,56",
        roas: "×2,46",
      },
      {
        campaign: "Лекция: мужчины и женщины",
        result: "25 покупок",
        cost: "€7,19",
        roas: "×4,56",
      },
      {
        campaign: "Акция «1+1»",
        result: "38 покупок",
        cost: "€9,50",
        roas: "×3,39",
      },
      {
        campaign: "Mimrichi 2 days — архив",
        result: "39 покупок",
        cost: "€6,56",
        roas: "×7,19",
      },
    ],
    note:
      "Лучший результат в срезе — ROAS ×7,19 при 39 покупках и цене €6,56. Офлайн-покупки билетов и посещения без предварительной оплаты в эти цифры не попадают.",
    proofAlt:
      "Скриншот результатов кампаний Digital Art House в Meta Ads: покупки, цена результата и ROAS",
    proofCaption: "Исходный срез Meta Ads, предоставленный командой проекта",
  },
  mechanics: {
    label: "Что сделали",
    title: "Одна система для постоянно меняющейся афиши",
    steps: [
      "Собрали календарь мероприятий и расставили приоритеты по датам, оставшимся местам и скорости продаж.",
      "Разделили кампании по событиям и аудиториям: Meta Ads использовали для быстрого охвата и тестов, Google Ads — для уже сформированного спроса.",
      "Готовили несколько офферов на одно событие и быстро меняли слабые. Для Light Music протестировали три текста, а смена предложения принесла продажи по импровизации и выступлению Олега Пека.",
      "Каждую неделю сверяли показы, клики, расходы, конверсии и их ценность, учитывая позднюю дозапись конверсий и офлайн-посещения.",
    ],
  },
  creatives: {
    label: "Рекламные креативы",
    title: "Афиши, которые продавали впечатление, а не просто билет",
    description:
      "Оригинальные материалы из рабочего чата проекта: англоязычные афиши Van Gogh и Michelangelo, промо 1+1 на две выставки и три видео с мероприятий Digital Art House.",
    imageAlts: [
      "Англоязычный рекламный креатив иммерсивной выставки Van Gogh в Digital Art House",
      "Рекламный креатив immersive exhibition Michelangelo in Digital Art House на английском языке",
      "Латышский рекламный креатив акции 1+1 для выставок Van Gogh и Michelangelo в Digital Art House",
    ],
    videoTitles: [
      "Иммерсивная экспозиция Digital Art House",
      "Посетители мультимедийной выставки",
      "Видео с лекционного мероприятия",
    ],
  },
  faq: {
    label: "Вопросы и ответы",
    title: "Что важно знать о рекламе мероприятий",
    items: [
      {
        question: "Какой лучший ROAS получила Meta-реклама Digital Art House?",
        answer:
          "Лучший подтверждённый результат в представленном срезе Meta Ads — ROAS ×7,19: 39 покупок на сайте по €6,56 за покупку. Это только выручка, которую удалось связать с рекламой в системе аналитики.",
      },
      {
        question: "Почему фактический ROAS выше, чем в рекламном кабинете?",
        answer:
          "Не все посетители покупают билет онлайн. Часть людей видит рекламу и приходит на выставку, спектакль или музыкальный вечер без предварительной покупки, оплачивая вход на месте. Эта выручка не передаётся в Google Ads и Meta Ads.",
      },
      {
        question: "Сколько мероприятий продвигается в месяц?",
        answer:
          "В активном месяце команда параллельно ведёт рекламу как минимум пяти разных событий. Количество объявлений больше: только для Light Music были подготовлены три текста с разными офферами.",
      },
      {
        question: "Какие события рекламировались для Digital Art House?",
        answer:
          "В работе были мультимедийные выставки, детские спектакли, art dinner, комедийные и импровизационные выступления, а также вечера живой музыки.",
      },
      {
        question: "Какие рекламные каналы использует Digital Art House?",
        answer:
          "Мы ведём Meta Ads в Facebook и Instagram и Google Ads. Каналы работают вместе: Meta создаёт интерес к афише, Google помогает забрать сформированный спрос.",
      },
      {
        question: "Какие результаты, кроме ROAS, получила площадка?",
        answer:
          "По обратной связи клиента один зал был почти распродан, на другое выступление оставалось совсем мало мест, а после смены офферов пошли продажи по двум событиям.",
      },
      {
        question: "Откуда взяты цифры кейса?",
        answer:
          "Показатели взяты из среза Ads Manager и рабочей переписки команды проекта. Мы отделяем подтверждённые данные кабинета от офлайн-эффекта, который виден по продажам и заполняемости, но не полностью атрибутируется рекламой.",
      },
    ],
  },
  related: {
    label: "Связанные материалы",
    title: "Как продвигать события через два канала",
    links: [
      {
        href: "/ru/meta-ads",
        label: "Ведение Meta Ads",
        note: "Креативы, тесты офферов и быстрый спрос в Facebook и Instagram",
      },
      {
        href: "/ru/google-ads",
        label: "Ведение Google Ads",
        note: "Работа с поисковым спросом, конверсиями и окупаемостью рекламы",
      },
      {
        href: "/cases/prime-tour",
        label: "Кейс Prime Tour: ROAS 3790%",
        note: "Продажи продукта с фиксированными датами и ограниченным количеством мест",
      },
      {
        href: "/cases/womens-activewear",
        label: "Кейс: ROAS 15 в Black Friday",
        note: "Как прогретый спрос усиливает короткое окно продаж",
      },
    ],
  },
  nextStep: {
    label: "Следующий шаг",
    title: "Нужно заполнить зал к конкретной дате?",
    text: "Покажите нам календарь событий, вместимость площадки, цены и текущую аналитику. Мы предложим структуру Meta Ads и Google Ads, систему офферов и отчётность, которая учитывает не только онлайн-покупки.",
    cta: "Обсудить рекламу мероприятий",
  },
};

const en: DigitalArtHouseContent = {
  badge: "Real case study",
  category: "Events / Meta Ads + Google Ads / Riga",
  heroTitle: "Digital Art House: 7.19 ROAS from Meta Ads for events",
  heroDescription:
    "We run Meta Ads and Google Ads for Digital Art House, a cultural venue in Riga. Exhibitions, theatre, art dinners, comedy and live music are promoted in parallel, each with its own offer, audience and short sales window.",
  primaryCta: { label: "Discuss event advertising", href: "#contacts" },
  secondaryCta: { label: "See the results", href: "#numbers" },
  heroPanel: {
    label: "Digital Art House",
    title: "Performance marketing for events",
    badge: "Ongoing partnership",
    segments: [
      { label: "Meta Ads", value: "up to 39 purchases per campaign" },
      { label: "Cost per purchase", value: "from €6.56" },
      { label: "Cadence", value: "5+ events in an active month" },
    ],
    economyBadge: "Best confirmed ROAS",
    economyValue: "7.19× in Meta Ads",
    economyNote:
      "This is the lower bound: some people see the ads but do not buy online. They visit an exhibition or event and pay at the venue instead.",
  },
  facts: [
    { label: "Client", value: "Digital Art House, cultural venue" },
    { label: "Location", value: "Riga, Latvia" },
    { label: "Channels", value: "Meta Ads and Google Ads" },
    { label: "Engagement", value: "Ongoing management and weekly optimisation" },
    { label: "Events", value: "Exhibitions, theatre, art dinners, comedy and music" },
    { label: "Cadence", value: "At least 5 parallel events in an active month" },
    { label: "Offers", value: "3+ copy angles for an individual event" },
    { label: "Control", value: "Weekly reports, ticket sales and room occupancy" },
  ],
  main: {
    label: "Case highlight",
    title: "The ad platforms do not show the full business impact",
    paragraphs: [
      "Do.Marketing manages two channels for Digital Art House. Meta creates interest around individual posters and lets us test angles quickly, while Google captures existing demand for events and tickets in Riga. Campaigns have to be launched and rebuilt fast: every event has a different date, audience and deadline for filling the room.",
      "The best confirmed Meta Ads ROAS reached 7.19×. Individual campaigns generated up to 39 website purchases at a cost starting from €6.56 per purchase. Even that does not show the complete economics of a venue with walk-in traffic: some visitors discover an event through an ad, skip the website checkout and pay at the door. That revenue is not returned to the ad platform, so the actual ROAS is higher than the visible figure.",
      "The client team reports business outcomes alongside platform data: one performance was almost sold out, another had very few seats left, and a fast offer change triggered sales for two events. That is how this engagement is managed — advertising is evaluated together with real occupancy, not clicks in isolation.",
    ],
    ctaLabel: "Discuss your event calendar",
  },
  cards: [
    {
      label: "Challenge",
      title: "Sell different events without making them compete",
      text: "Exhibitions, children’s theatre, live music, art dinners and comedy share one calendar. Each needs a separate demand strategy, while deadlines and budgets must stay under control.",
    },
    {
      label: "Working model",
      title: "From poster to optimisation in a weekly rhythm",
      text: "We receive the assets, build several offers, launch Meta and Google campaigns, follow ticket sales and change the angle quickly when a particular event falls behind plan.",
    },
    {
      label: "Result",
      title: "At least five events promoted in parallel",
      text: "Five or more posters were actively discussed and promoted during the current active month. Light Music alone received three copy angles, while offer changes brought immediate sales to other events.",
    },
  ],
  table: {
    label: "Numbers",
    title: "Meta Ads results by event campaign",
    description:
      "A snapshot from Ads Manager showing website purchases, cost per result and ROAS across different event formats. The concert campaign used an awareness objective, so its row shows reach and cost per 1,000 people reached.",
    columns: [
      { key: "campaign", label: "Campaign" },
      { key: "result", label: "Result", align: "right" },
      { key: "cost", label: "Cost per result", align: "right" },
      { key: "roas", label: "ROAS", align: "right" },
    ],
    rows: [
      {
        campaign: "17 Sep concert — awareness",
        result: "33,564 reach",
        cost: "€1.04 / 1,000",
        roas: "—",
      },
      {
        campaign: "Art dinner — 4 Oct",
        result: "5 purchases",
        cost: "€18.12",
        roas: "3.84×",
      },
      {
        campaign: "Improvisation — 23 Sep",
        result: "15 purchases",
        cost: "€8.15",
        roas: "2.37×",
      },
      {
        campaign: "Lecture: French cinema",
        result: "6 purchases",
        cost: "€13.56",
        roas: "2.46×",
      },
      {
        campaign: "Lecture: men and women",
        result: "25 purchases",
        cost: "€7.19",
        roas: "4.56×",
      },
      {
        campaign: "1+1 offer",
        result: "38 purchases",
        cost: "€9.50",
        roas: "3.39×",
      },
      {
        campaign: "Mimrichi 2 days — archive",
        result: "39 purchases",
        cost: "€6.56",
        roas: "7.19×",
      },
    ],
    note:
      "The strongest result in the snapshot is 7.19× ROAS with 39 purchases at €6.56 each. Walk-in ticket purchases and visits without advance payment are not included.",
    proofAlt:
      "Digital Art House Meta Ads campaign results showing purchases, cost per result and ROAS",
    proofCaption: "Original Meta Ads snapshot supplied by the project team",
  },
  mechanics: {
    label: "What we did",
    title: "One system for a constantly changing programme",
    steps: [
      "Built an event calendar and prioritised campaigns by date, remaining capacity and sales pace.",
      "Separated campaigns by event and audience: Meta Ads handled fast reach and testing, while Google Ads captured existing demand.",
      "Tested several offers per event and replaced weak angles quickly. Light Music received three copy variants, while an offer change brought sales for the improv event and Oleg Peke’s performance.",
      "Reviewed impressions, clicks, spend, conversions and conversion value every week, allowing for delayed attribution and offline attendance.",
    ],
  },
  creatives: {
    label: "Advertising creatives",
    title: "Posters that sold an experience, not just a ticket",
    description:
      "Original assets from the project chat: English Van Gogh and Michelangelo posters, a Latvian 1+1 offer for both exhibitions and three videos from Digital Art House events.",
    imageAlts: [
      "English ad creative for the Van Gogh immersive exhibition at Digital Art House",
      "English ad creative for the Michelangelo immersive exhibition at Digital Art House",
      "Latvian 1+1 promotion for the Van Gogh and Michelangelo exhibitions at Digital Art House",
    ],
    videoTitles: [
      "Immersive exhibition at Digital Art House",
      "Visitors inside the multimedia exhibition",
      "Video from a lecture event",
    ],
  },
  faq: {
    label: "Questions and answers",
    title: "What matters in event advertising",
    items: [
      {
        question: "What was the best Meta Ads ROAS for Digital Art House?",
        answer:
          "The best confirmed result in the supplied Meta Ads snapshot was 7.19× ROAS: 39 website purchases at €6.56 per purchase. It includes only revenue the analytics system could attribute to advertising.",
      },
      {
        question: "Why is the actual ROAS higher than the ad-platform figure?",
        answer:
          "Not every visitor buys online. Some people see an ad and then pay at the door for an exhibition, performance or music night. This revenue is not passed back to Google Ads or Meta Ads.",
      },
      {
        question: "How many events are promoted each month?",
        answer:
          "During an active month the team runs advertising for at least five different events in parallel. The number of ads is higher: Light Music alone had three texts with different offers.",
      },
      {
        question: "What types of events were advertised?",
        answer:
          "The programme included multimedia exhibitions, children’s theatre, art dinners, comedy and improv performances, and live-music evenings.",
      },
      {
        question: "Which advertising channels does Digital Art House use?",
        answer:
          "We manage Meta Ads on Facebook and Instagram together with Google Ads. Meta creates interest in the programme, while Google captures established demand.",
      },
      {
        question: "What results were achieved besides ROAS?",
        answer:
          "According to the client’s feedback, one room was almost sold out, another performance had very few seats left, and offer changes triggered sales for two events.",
      },
      {
        question: "Where do the case-study figures come from?",
        answer:
          "The figures come from an Ads Manager snapshot and the project team’s working chat. We separate confirmed platform data from the offline effect visible in ticket sales and occupancy but not fully attributable to ads.",
      },
    ],
  },
  related: {
    label: "Related",
    title: "How to promote events through two channels",
    links: [
      {
        href: "/en/meta-ads",
        label: "Meta Ads management",
        note: "Creative testing, offer angles and fast demand across Facebook and Instagram",
      },
      {
        href: "/en/google-ads",
        label: "Google Ads management",
        note: "Capturing active demand and managing conversions and advertising payback",
      },
      {
        href: "/en/cases/prime-tour",
        label: "Prime Tour case: 3,790% ROAS",
        note: "Selling a date-specific product with limited availability",
      },
      {
        href: "/cases/womens-activewear",
        label: "Case: 15× ROAS on Black Friday",
        note: "How accumulated demand strengthens a short sales window",
      },
    ],
  },
  nextStep: {
    label: "Next step",
    title: "Need to fill a room by a specific date?",
    text: "Show us your event calendar, venue capacity, pricing and current analytics. We will propose a Meta Ads and Google Ads structure, an offer-testing system and reporting that accounts for more than online purchases.",
    cta: "Discuss event advertising",
  },
};

const et: DigitalArtHouseContent = {
  badge: "Reaalne kliendilugu",
  category: "Sündmused / Meta Ads + Google Ads / Riia",
  heroTitle: "Digital Art House: sündmuste Meta Adsi ROAS 7,19",
  heroDescription:
    "Haldame Riias asuva kultuurikeskuse Digital Art House Meta Adsi ja Google Adsi reklaami. Paralleelselt reklaamime näitusi, teatrietendusi, art dinner’eid, komöödiat ja elava muusika õhtuid — igal sündmusel on oma pakkumine, sihtrühm ja lühike müügiaken.",
  primaryCta: { label: "Aruta sündmuste reklaami", href: "#contacts" },
  secondaryCta: { label: "Vaata tulemusi", href: "#numbers" },
  heroPanel: {
    label: "Digital Art House",
    title: "Tulemusturundus sündmustele",
    badge: "Koostöö jätkub",
    segments: [
      { label: "Meta Ads", value: "kuni 39 ostu kampaania kohta" },
      { label: "Ostu hind", value: "alates €6,56" },
      { label: "Tempo", value: "aktiivsel kuul 5+ sündmust" },
    ],
    economyBadge: "Parim kinnitatud ROAS",
    economyValue: "Meta Adsis ×7,19",
    economyNote:
      "See on tulemuse alumine piir: osa inimesi näeb reklaami, kuid ei osta veebist. Nad tulevad näitusele või sündmusele ja maksavad kohapeal.",
  },
  facts: [
    { label: "Klient", value: "Digital Art House, kultuurikeskus" },
    { label: "Asukoht", value: "Riia, Läti" },
    { label: "Kanalid", value: "Meta Ads ja Google Ads" },
    { label: "Koostöö", value: "Pidev haldus ja iganädalane optimeerimine" },
    { label: "Sündmused", value: "Näitused, teater, art dinner, komöödia ja muusika" },
    { label: "Tempo", value: "Aktiivsel kuul vähemalt 5 paralleelset sündmust" },
    { label: "Pakkumised", value: "Ühele sündmusele vähemalt 3 tekstinurka" },
    { label: "Kontroll", value: "Nädalaraportid, piletimüük ja saali täituvus" },
  ],
  main: {
    label: "Juhtumi põhisõnum",
    title: "Reklaamikonto ei näita kogu äritulemust",
    paragraphs: [
      "Do.Marketing haldab Digital Art House’i jaoks korraga kahte kanalit. Meta tekitab huvi konkreetsete sündmuste vastu ja võimaldab kiiresti sõnumeid testida, Google aga püüab kinni olemasoleva nõudluse Riia sündmuste ja piletite järele. Kampaaniaid tuleb kiiresti käivitada ja ümber teha, sest igal sündmusel on oma kuupäev, publik ja saali täitmise tähtaeg.",
      "Parim kinnitatud Meta Adsi ROAS oli ×7,19. Üksikud kampaaniad tõid kuni 39 veebiostu hinnaga alates €6,56 ostu kohta. Ka see ei näita kohapealse külastusega kultuurikeskuse kogu majanduslikku tulemust: osa inimesi avastab sündmuse reklaamist, jätab veebist ostmata ja tasub ukse peal. See tulu reklaamikontole tagasi ei jõua, seega on tegelik ROAS nähtavast suurem.",
      "Kliendi meeskond jälgib platvormiandmete kõrval ka äritulemust: üks esinemine oli peaaegu välja müüdud, teisele jäi väga vähe kohti ning kiire pakkumise muutus tõi müügi kahele sündmusele. Seetõttu hindame reklaami koos reaalse täituvusega, mitte eraldiseisvate klikkide järgi.",
    ],
    ctaLabel: "Aruta oma sündmuste kava",
  },
  cards: [
    {
      label: "Ülesanne",
      title: "Müüa eri sündmusi ilma omavahelise konkurentsita",
      text: "Ühes kalendris on näitused, lasteteater, elav muusika, art dinner’id ja komöödia. Iga sündmus vajab eraldi nõudluse strateegiat ning tähtajad ja eelarved peavad püsima kontrolli all.",
    },
    {
      label: "Töökorraldus",
      title: "Plakatist optimeerimiseni nädalase rütmiga",
      text: "Saame materjalid, loome mitu pakkumist, käivitame Meta ja Google’i kampaaniad, jälgime piletimüüki ning muudame sõnumit kiiresti, kui mõni sündmus jääb plaanist maha.",
    },
    {
      label: "Tulemus",
      title: "Vähemalt viis sündmust korraga reklaamis",
      text: "Aktiivsel kuul oli töös vähemalt viis eri sündmust. Light Musicu jaoks valmis kolm tekstinurka ning pakkumise muutmine tõi teistele sündmustele kiiresti müüki.",
    },
  ],
  table: {
    label: "Numbrid",
    title: "Meta Adsi tulemused sündmuste kaupa",
    description:
      "Ads Manageri väljavõte näitab eri sündmuste veebioste, tulemuse hinda ja ROAS-i. Kontserdikampaania eesmärk oli tuntus, seega on selle real katvus ja 1000 inimeseni jõudmise hind.",
    columns: [
      { key: "campaign", label: "Kampaania" },
      { key: "result", label: "Tulemus", align: "right" },
      { key: "cost", label: "Tulemuse hind", align: "right" },
      { key: "roas", label: "ROAS", align: "right" },
    ],
    rows: [
      {
        campaign: "17.09 kontsert — tuntus",
        result: "33 564 katvust",
        cost: "€1,04 / 1000",
        roas: "—",
      },
      {
        campaign: "Art dinner — 04.10",
        result: "5 ostu",
        cost: "€18,12",
        roas: "×3,84",
      },
      {
        campaign: "Improetendus — 23.09",
        result: "15 ostu",
        cost: "€8,15",
        roas: "×2,37",
      },
      {
        campaign: "Loeng: Prantsuse kino",
        result: "6 ostu",
        cost: "€13,56",
        roas: "×2,46",
      },
      {
        campaign: "Loeng: mehed ja naised",
        result: "25 ostu",
        cost: "€7,19",
        roas: "×4,56",
      },
      {
        campaign: "Pakkumine „1+1“",
        result: "38 ostu",
        cost: "€9,50",
        roas: "×3,39",
      },
      {
        campaign: "Mimrichi 2 days — arhiiv",
        result: "39 ostu",
        cost: "€6,56",
        roas: "×7,19",
      },
    ],
    note:
      "Väljavõtte parim tulemus on ROAS ×7,19: 39 ostu hinnaga €6,56 ostu kohta. Kohapealsed piletiostud ja eelneva veebimakseta külastused nendes numbrites ei kajastu.",
    proofAlt:
      "Digital Art House’i Meta Adsi kampaaniate tulemused: ostud, tulemuse hind ja ROAS",
    proofCaption: "Projektimeeskonna esitatud Meta Adsi algne väljavõte",
  },
  mechanics: {
    label: "Mida tegime",
    title: "Üks süsteem pidevalt muutuvale programmile",
    steps: [
      "Koostasime sündmuste kalendri ja seadsime prioriteedid kuupäeva, vabade kohtade ning müügitempo järgi.",
      "Eraldasime kampaaniad sündmuse ja sihtrühma järgi: Meta Ads tõi kiire katvuse ja testid, Google Ads püüdis kinni olemasoleva nõudluse.",
      "Testisime ühe sündmuse jaoks mitut pakkumist ja vahetasime nõrga sõnumi kiiresti välja. Light Music sai kolm tekstivarianti ning pakkumise muutmine tõi müügi improetendusele ja Oleg Peke esinemisele.",
      "Vaatasime igal nädalal üle näitamised, klikid, kulu, konversioonid ja nende väärtuse ning arvestasime hilise omistamise ja kohapealsete külastustega.",
    ],
  },
  creatives: {
    label: "Reklaamloovlahendused",
    title: "Plakatid, mis müüsid elamust, mitte ainult piletit",
    description:
      "Projekti töövestlusest pärit originaalmaterjalid: Van Goghi ja Michelangelo ingliskeelsed plakatid, mõlema näituse lätikeelne 1+1 pakkumine ning kolm videot Digital Art House’i sündmustelt.",
    imageAlts: [
      "Digital Art House’i Van Goghi immersiivse näituse ingliskeelne reklaam",
      "Digital Art House’i Michelangelo immersiivse näituse ingliskeelne reklaam",
      "Digital Art House’i Van Goghi ja Michelangelo näituste lätikeelne 1+1 pakkumine",
    ],
    videoTitles: [
      "Digital Art House’i immersiivne ekspositsioon",
      "Külastajad multimeedianäitusel",
      "Video loengusündmuselt",
    ],
  },
  faq: {
    label: "Küsimused ja vastused",
    title: "Mida sündmuste reklaamis arvestada",
    items: [
      {
        question: "Milline oli Digital Art House’i Meta Adsi parim ROAS?",
        answer:
          "Esitatud Meta Adsi väljavõtte parim kinnitatud tulemus oli ROAS ×7,19: 39 veebiostu hinnaga €6,56 ostu kohta. See sisaldab ainult tulu, mille analüütika suutis reklaamiga siduda.",
      },
      {
        question: "Miks on tegelik ROAS reklaamikonto näidust suurem?",
        answer:
          "Kõik külastajad ei osta veebist. Osa inimesi näeb reklaami ja maksab näituse, etenduse või muusikaõhtu eest kohapeal. Seda tulu ei edastata Google Adsi ega Meta Adsi.",
      },
      {
        question: "Mitu sündmust kuus reklaamitakse?",
        answer:
          "Aktiivsel kuul haldab meeskond paralleelselt vähemalt viie eri sündmuse reklaami. Reklaamvariantide arv on suurem: Light Musicu jaoks valmis kolm eri pakkumisega teksti.",
      },
      {
        question: "Milliseid sündmusi Digital Art House’ile reklaamiti?",
        answer:
          "Töös olid multimeedianäitused, lasteetendused, art dinner’id, komöödia- ja improetendused ning elava muusika õhtud.",
      },
      {
        question: "Milliseid reklaamikanaleid Digital Art House kasutab?",
        answer:
          "Haldame Meta Adsi Facebookis ja Instagramis koos Google Adsiga. Meta tekitab programmi vastu huvi ning Google püüab kinni juba tekkinud nõudluse.",
      },
      {
        question: "Milliseid tulemusi saadi lisaks ROAS-ile?",
        answer:
          "Kliendi tagasiside järgi oli üks saal peaaegu välja müüdud, teisele esinemisele jäi väga vähe kohti ning pakkumiste muutmine tõi müügi kahele sündmusele.",
      },
      {
        question: "Kust pärinevad juhtumi numbrid?",
        answer:
          "Numbrid pärinevad Ads Manageri väljavõttest ja projektimeeskonna töövestlusest. Eristame kinnitatud platvormiandmeid offline-mõjust, mis on nähtav müügis ja täituvuses, kuid ei ole täielikult reklaamile omistatav.",
      },
    ],
  },
  related: {
    label: "Seotud materjalid",
    title: "Kuidas reklaamida sündmusi kahe kanali kaudu",
    links: [
      {
        href: "/et/meta-ads",
        label: "Meta Adsi haldus",
        note: "Loovlahenduste testimine, pakkumised ja kiire nõudlus Facebookis ning Instagramis",
      },
      {
        href: "/et/google-ads",
        label: "Google Adsi haldus",
        note: "Aktiivse nõudluse püüdmine ning konversioonide ja reklaami tasuvuse juhtimine",
      },
      {
        href: "/et/cases/prime-tour",
        label: "Prime Touri juhtum: ROAS 3790%",
        note: "Kindla kuupäeva ja piiratud kohtade arvuga toote müük",
      },
      {
        href: "/cases/womens-activewear",
        label: "Juhtum: ROAS ×15 Black Fridayl",
        note: "Kuidas kogutud nõudlus tugevdab lühikest müügiakent",
      },
    ],
  },
  nextStep: {
    label: "Järgmine samm",
    title: "Kas saal tuleb kindlaks kuupäevaks täita?",
    text: "Näidake meile sündmuste kalendrit, saali mahutavust, hindu ja praegust analüütikat. Pakume Meta Adsi ja Google Adsi struktuuri, pakkumiste testimise süsteemi ning aruandlust, mis arvestab enamat kui veebioste.",
    cta: "Aruta sündmuste reklaami",
  },
};

export const digitalArtHouseContent: Record<Language, DigitalArtHouseContent> = {
  ru,
  en,
  et,
};
