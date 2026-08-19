import type {
  CaseCta,
  CaseFact,
  CaseFaqItem,
  CaseStat,
  CaseTableColumn,
  CaseTableRow,
} from "@/components/cases/case-sections";
import type { Language } from "@/data/site-content";

/** Медиа — не зависит от языка. */
export const profftechCreativeImages = [
  { src: "/images/cases/profftech/creative-marketing-light.png", altKey: 0 },
  { src: "/images/cases/profftech/creative-marketing-blue.png", altKey: 1 },
  { src: "/images/cases/profftech/creative-marketing-neon.png", altKey: 2 },
  { src: "/images/cases/profftech/creative-ai-job.png", altKey: 3 },
] as const;

export type ProfftechContent = {
  badge: string;
  category: string;
  heroTitle: string;
  heroDescription: string;
  primaryCta: CaseCta;
  secondaryCta: CaseCta;
  heroStats: CaseStat[];
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
    total: CaseTableRow;
    note: string;
  };
  mechanics: { label: string; title: string; steps: string[] };
  creatives: { label: string; title: string; description: string; imageAlts: string[] };
  faq: { label: string; title: string; items: CaseFaqItem[] };
  nextStep: { label: string; title: string; text: string; cta: string };
};

const ru: ProfftechContent = {
  badge: "Реальный кейс",
  category: "Professional courses / lead generation",
  heroTitle: "751 заявка на профессиональные курсы по €1,48",
  heroDescription:
    "Profftech — центр профессионального обучения в Таллинне. С апреля по сентябрь 2026 мы вели 8 рекламных кампаний на 5 направлений: повар, бармен, швея, искусственный интеллект и digital-маркетинг. За €1 113 рекламного бюджета получили 751 заявку — при стоимости курса €2 400.",
  primaryCta: { label: "Хочу также", href: "#contacts" },
  secondaryCta: { label: "Смотреть цифры", href: "#numbers" },
  heroStats: [
    { value: "751", label: "заявка на курсы" },
    { value: "€1,48", label: "средняя цена заявки" },
    { value: "€0,56", label: "лучшая цена заявки" },
    { value: "−79%", label: "цена заявки на курсе повара" },
  ],
  heroPanel: {
    label: "Экономика",
    title: "Во что превращается 751 заявка",
    badge: "ROAS ≈4 700%",
    segments: [
      { label: "Рекламный бюджет", value: "€1 113" },
      { label: "Стоимость курса", value: "€2 400" },
      { label: "Конверсия в оплату", value: "3% — модель" },
    ],
    economyBadge: "Выручка при 22 оплатах",
    economyValue: "€1 113 → €52 800",
    economyNote:
      "ROAS ≈4 700%, ROMI ≈4 600%, привлечение одного ученика ≈€49. Заявки и бюджет — фактические данные рекламного кабинета. Конверсию из заявки в оплату мы взяли консервативно: при 5% выручка составила бы ≈€88 800 и ROAS ≈8 000%.",
  },
  facts: [
    { label: "Клиент", value: "Profftech, центр профессионального обучения" },
    { label: "География", value: "Таллинн, Эстония" },
    { label: "Направления", value: "Повар, бармен, швея, ИИ, digital-маркетинг" },
    { label: "Период", value: "Апрель — сентябрь 2026, наборы на потоки" },
    { label: "Канал", value: "Meta Ads, лид-формы" },
    { label: "Стоимость курса", value: "€2 400" },
    { label: "Кампаний", value: "8 кампаний на 5 направлений" },
    { label: "Аудитория", value: "Русскоязычные жители Эстонии" },
  ],
  main: {
    label: "Главное в кейсе",
    title: "Дешёвая заявка на продукт за €2 400",
    paragraphs: [
      "У профессионального обучения сложная экономика: чек высокий, решение долгое, а набор идёт потоками с фиксированными датами старта. Поэтому задача была не в разовом всплеске заявок, а в том, чтобы к каждому старту приходил предсказуемый объём кандидатов по цене, которая не съедает маржу.",
      "Мы развели направления по отдельным кампаниям, перенесли сбор контактов в лид-формы Meta и построили коммуникацию вокруг главного мотиватора аудитории: сменить профессию, а при статусе безработного пройти обучение без оплаты. За 5 месяцев средняя цена заявки составила €1,48 — при стоимости самого курса €2 400.",
      "Даже если из заявки в оплату конвертируется всего 3%, привлечение одного ученика стоит около €49. Это 2% от чека и ROAS порядка 4 700%.",
    ],
    ctaLabel: "Хочу также",
  },
  cards: [
    {
      label: "Задача",
      title: "Набирать группы сразу на 5 разных курсов",
      text: "У каждого направления своя аудитория и свой мотив: повар и бармен — быстрый вход в профессию, швея — ремесло, ИИ и digital-маркетинг — переквалификация в цифру. Общей рекламой такие группы не набираются.",
    },
    {
      label: "Подход",
      title: "Отдельная кампания и отдельный оффер на курс",
      text: "Каждый поток получал собственную кампанию с датой старта в названии, своим креативом и своей лид-формой. Так видно цену заявки по каждому направлению и можно быстро перекладывать бюджет.",
    },
    {
      label: "Результат",
      title: "751 заявка за €1 113 бюджета",
      text: "Самое дешёвое направление — курсы бармана с ценой заявки €0,56. Самое объёмное — курсы по ИИ: 419 заявок за два потока. Дороже €3 за заявку остались только первые тестовые кампании в апреле.",
    },
  ],
  table: {
    label: "Цифры",
    title: "Результат по каждой кампании",
    description:
      "Данные из рекламного кабинета Meta по всем 8 кампаниям за период с апреля по сентябрь 2026. Кампании названы по дате старта потока.",
    columns: [
      { key: "campaign", label: "Кампания" },
      { key: "leads", label: "Заявки", align: "right" },
      { key: "cpl", label: "Цена заявки", align: "right" },
    ],
    rows: [
      { campaign: "Курсы швеи, старт 20.04", leads: "51", cpl: "€2,90" },
      { campaign: "Курсы повара, старт 27.04", leads: "44", cpl: "€3,92" },
      { campaign: "Курсы по ИИ, старт 27.04", leads: "106", cpl: "€1,12" },
      { campaign: "Курсы по ИИ, старт 19.05", leads: "313", cpl: "€1,57" },
      { campaign: "Курсы бармана, старт 01.06", leads: "133", cpl: "€0,56" },
      { campaign: "Курсы повара, старт 15.06", leads: "45", cpl: "€1,09" },
      { campaign: "Курсы повара, старт 07.09", leads: "42", cpl: "€0,82" },
      { campaign: "Digital-маркетинг, старт 14.09", leads: "17", cpl: "€1,44" },
    ],
    total: { campaign: "Итого", leads: "751", cpl: "€1,48" },
    note: "Курс повара — наглядная динамика обучения алгоритма и офферов: €3,92 в апреле, €1,09 в июне, €0,82 в сентябре. Кампания на digital-маркетинг на момент выгрузки ещё работала.",
  },
  mechanics: {
    label: "Что сделали",
    title: "Как получили заявку дешевле €1,5",
    steps: [
      "Разделили пять направлений на отдельные кампании: у повара, бармена, швеи, курса по ИИ и digital-маркетинга разные аудитории, разные возражения и разная цена клика.",
      "Перенесли сбор контактов в лид-формы Meta: заявка оставляется в два касания внутри ленты, без перехода на сайт и без потерь на загрузке страницы.",
      "Построили оффер вокруг главного мотива аудитории — сменить профессию, а тем, кто сейчас без работы, пройти обучение без оплаты. Этот блок вынесен на первый экран каждого креатива.",
      "Тестировали визуальные подачи одного и того же оффера: светлый минимализм, плотный синий, неоновый градиент и провокационный чёрно-жёлтый макет с вопросом об AI.",
      "Перекладывали бюджет в направления с лучшей ценой заявки и масштабировали курс по ИИ, который дал самый большой объём — 419 заявок за два потока.",
      "От потока к потоку снижали цену заявки на повторяющихся курсах: по курсу повара цена упала с €3,92 до €0,82 за пять месяцев.",
    ],
  },
  creatives: {
    label: "Креативы",
    title: "Один оффер — четыре визуальные подачи",
    description:
      "Для набора на курс digital-маркетинга мы протестировали четыре макета с одинаковой сутью, но разной подачей: от спокойного светлого минимализма до провокации «AI заберёт работу маркетолога?». В каждом макете — город, дата старта потока и блок про обучение без оплаты.",
    imageAlts: [
      "Светлый креатив Profftech: курс Digital Marketing в новых реалиях, старт 14.09.26 в Таллинне",
      "Синий креатив Profftech: курс digital-маркетинга с блоком об обучении без оплаты",
      "Неоновый креатив Profftech: digital-маркетинг со знанием AI, SMM, Meta Ads, Google Ads и SEO",
      "Чёрно-жёлтый креатив Profftech с вопросом «AI заберёт работу маркетолога?»",
    ],
  },
  faq: {
    label: "Вопросы",
    title: "Частые вопросы по кейсу",
    items: [
      {
        question: "Сколько заявок получил Profftech и по какой цене?",
        answer:
          "751 заявка за 8 кампаний с апреля по сентябрь 2026 при рекламном бюджете €1 113. Средняя цена заявки — €1,48, лучшая — €0,56 на курсах бармана, самая дорогая — €3,92 в первой тестовой кампании.",
      },
      {
        question: "Какой ROAS и ROMI в этом кейсе?",
        answer:
          "При стоимости курса €2 400 и консервативной конверсии из заявки в оплату 3% выручка составляет €52 800, ROAS ≈4 700%, ROMI ≈4 600%. При конверсии 5% — ≈€88 800 выручки и ROAS ≈8 000%.",
      },
      {
        question: "Сколько стоит привлечь одного ученика?",
        answer:
          "При конверсии 3% привлечение одного ученика стоит около €49 — это примерно 2% от стоимости курса €2 400. При конверсии 5% стоимость ученика падает до ≈€30.",
      },
      {
        question: "Почему заявки на курс за €2 400 стоят меньше €2?",
        answer:
          "Работают три вещи вместе: лид-формы Meta вместо перехода на сайт, отдельная кампания и отдельный оффер на каждое направление, и сильный мотив аудитории — возможность пройти обучение без оплаты при отсутствии работы. Дешёвая заявка при этом требует последующей квалификации отделом продаж.",
      },
      {
        question: "Как быстро снижается цена заявки?",
        answer:
          "На повторяющихся потоках — быстро. По курсу повара цена заявки упала с €3,92 в апреле до €1,09 в июне и €0,82 в сентябре, то есть на 79% за пять месяцев работы.",
      },
    ],
  },
  nextStep: {
    label: "Следующий шаг",
    title: "Набираете группы на курсы или программы обучения?",
    text: "Расскажите про свои направления, даты стартов и стоимость обучения. Мы посчитаем целевую цену заявки, допустимый бюджет на поток и предложим структуру кампаний под каждое направление.",
    cta: "Обсудить проект",
  },
};

const en: ProfftechContent = {
  badge: "Real case study",
  category: "Professional courses / lead generation",
  heroTitle: "751 leads for professional courses at €1.48 each",
  heroDescription:
    "Profftech is a professional training centre in Tallinn. Between April and September 2026 we ran 8 campaigns across 5 programmes: chef, bartender, seamstress, artificial intelligence and digital marketing. A €1,113 ad budget brought in 751 leads — for a course priced at €2,400.",
  primaryCta: { label: "I want this too", href: "#contacts" },
  secondaryCta: { label: "See the numbers", href: "#numbers" },
  heroStats: [
    { value: "751", label: "leads for courses" },
    { value: "€1.48", label: "average cost per lead" },
    { value: "€0.56", label: "best cost per lead" },
    { value: "−79%", label: "cost per lead on the chef course" },
  ],
  heroPanel: {
    label: "Economics",
    title: "What 751 leads turn into",
    badge: "ROAS ≈4,700%",
    segments: [
      { label: "Ad budget", value: "€1,113" },
      { label: "Course price", value: "€2,400" },
      { label: "Lead-to-payment rate", value: "3% — modelled" },
    ],
    economyBadge: "Revenue from 22 payments",
    economyValue: "€1,113 → €52,800",
    economyNote:
      "ROAS ≈4,700%, ROMI ≈4,600%, cost per enrolled student ≈€49. Leads and spend are actual ad-account data. We took a deliberately conservative lead-to-payment rate: at 5% the revenue would be ≈€88,800 and ROAS ≈8,000%.",
  },
  facts: [
    { label: "Client", value: "Profftech, professional training centre" },
    { label: "Geography", value: "Tallinn, Estonia" },
    { label: "Programmes", value: "Chef, bartender, seamstress, AI, digital marketing" },
    { label: "Period", value: "April — September 2026, intake by cohorts" },
    { label: "Channel", value: "Meta Ads, lead forms" },
    { label: "Course price", value: "€2,400" },
    { label: "Campaigns", value: "8 campaigns across 5 programmes" },
    { label: "Audience", value: "Russian-speaking residents of Estonia" },
  ],
  main: {
    label: "Case highlights",
    title: "A cheap lead for a €2,400 product",
    paragraphs: [
      "Professional training has demanding economics: a high price tag, a slow decision and intakes tied to fixed start dates. So the goal was not a one-off spike in leads, but a predictable volume of candidates before every cohort start, at a price that doesn't eat the margin.",
      "We split the programmes into separate campaigns, moved contact collection into Meta lead forms and built the messaging around the audience's main driver: change your profession — and if you are currently unemployed, the training can be free of charge. Over five months the average cost per lead came to €1.48, against a €2,400 course price.",
      "Even if only 3% of leads convert into a payment, acquiring one student costs about €49. That is 2% of the price tag and a ROAS of roughly 4,700%.",
    ],
    ctaLabel: "I want this too",
  },
  cards: [
    {
      label: "Challenge",
      title: "Fill cohorts for five different courses at once",
      text: "Each programme has its own audience and its own motive: chef and bartender are a fast way into a trade, seamstress is craftsmanship, AI and digital marketing are a switch into tech. One generic campaign cannot fill all of them.",
    },
    {
      label: "Approach",
      title: "A separate campaign and offer per course",
      text: "Every cohort got its own campaign with the start date in the name, its own creative and its own lead form. That makes the cost per lead visible per programme and lets us move budget quickly.",
    },
    {
      label: "Result",
      title: "751 leads on a €1,113 budget",
      text: "The cheapest programme was the bartender course at €0.56 per lead. The largest was AI: 419 leads across two cohorts. Only the first test campaigns in April stayed above €3 per lead.",
    },
  ],
  table: {
    label: "Numbers",
    title: "Results per campaign",
    description:
      "Meta ad-account data for all 8 campaigns between April and September 2026. Campaigns are named after the start date of the cohort.",
    columns: [
      { key: "campaign", label: "Campaign" },
      { key: "leads", label: "Leads", align: "right" },
      { key: "cpl", label: "Cost per lead", align: "right" },
    ],
    rows: [
      { campaign: "Seamstress course, start 20.04", leads: "51", cpl: "€2.90" },
      { campaign: "Chef course, start 27.04", leads: "44", cpl: "€3.92" },
      { campaign: "AI course, start 27.04", leads: "106", cpl: "€1.12" },
      { campaign: "AI course, start 19.05", leads: "313", cpl: "€1.57" },
      { campaign: "Bartender course, start 01.06", leads: "133", cpl: "€0.56" },
      { campaign: "Chef course, start 15.06", leads: "45", cpl: "€1.09" },
      { campaign: "Chef course, start 07.09", leads: "42", cpl: "€0.82" },
      { campaign: "Digital marketing, start 14.09", leads: "17", cpl: "€1.44" },
    ],
    total: { campaign: "Total", leads: "751", cpl: "€1.48" },
    note: "The chef course shows how the algorithm and the offers learn over time: €3.92 in April, €1.09 in June, €0.82 in September. The digital marketing campaign was still running when the data was exported.",
  },
  mechanics: {
    label: "What we did",
    title: "How we got a lead below €1.5",
    steps: [
      "Split the five programmes into separate campaigns: chef, bartender, seamstress, AI and digital marketing have different audiences, different objections and different click prices.",
      "Moved contact collection into Meta lead forms: the request is submitted in two taps inside the feed, with no site visit and no drop-off on page load.",
      "Built the offer around the audience's main driver — change your profession, and if you are currently out of work the training can be free of charge. That block sits on the first screen of every creative.",
      "Tested visual takes on the very same offer: light minimalism, dense blue, a neon gradient and a provocative black-and-yellow layout asking about AI.",
      "Shifted budget into the programmes with the best cost per lead and scaled the AI course, which delivered the largest volume — 419 leads across two cohorts.",
      "Drove the cost per lead down from cohort to cohort on recurring courses: on the chef course it fell from €3.92 to €0.82 over five months.",
    ],
  },
  creatives: {
    label: "Creatives",
    title: "One offer, four visual takes",
    description:
      "For the digital marketing intake we tested four layouts with identical substance but different delivery: from calm light minimalism to the provocation “Will AI take the marketer's job?”. Every layout carries the city, the cohort start date and the free-training block.",
    imageAlts: [
      "Light Profftech creative: Digital Marketing course in the new reality, starting 14.09.26 in Tallinn",
      "Blue Profftech creative: digital marketing course with the free-training block",
      "Neon Profftech creative: digital marketing with AI skills, SMM, Meta Ads, Google Ads and SEO",
      "Black-and-yellow Profftech creative asking “Will AI take the marketer's job?”",
    ],
  },
  faq: {
    label: "Questions",
    title: "Frequently asked questions about the case",
    items: [
      {
        question: "How many leads did Profftech get and at what price?",
        answer:
          "751 leads across 8 campaigns from April to September 2026 on a €1,113 ad budget. The average cost per lead was €1.48, the best €0.56 on the bartender course, the highest €3.92 in the first test campaign.",
      },
      {
        question: "What are the ROAS and ROMI in this case?",
        answer:
          "With a €2,400 course price and a conservative 3% lead-to-payment rate, revenue is €52,800, ROAS ≈4,700% and ROMI ≈4,600%. At a 5% rate it would be ≈€88,800 in revenue and ROAS ≈8,000%.",
      },
      {
        question: "How much does it cost to enrol one student?",
        answer:
          "At a 3% conversion rate, acquiring one student costs about €49 — roughly 2% of the €2,400 course price. At 5% the cost per student drops to ≈€30.",
      },
      {
        question: "Why do leads for a €2,400 course cost under €2?",
        answer:
          "Three things work together: Meta lead forms instead of a site visit, a separate campaign and offer per programme, and a strong audience driver — the option to train free of charge while out of work. A cheap lead still has to be qualified by the sales team afterwards.",
      },
      {
        question: "How fast does the cost per lead come down?",
        answer:
          "On recurring cohorts, fast. On the chef course it dropped from €3.92 in April to €1.09 in June and €0.82 in September — 79% over five months.",
      },
    ],
  },
  nextStep: {
    label: "Next step",
    title: "Filling cohorts for courses or training programmes?",
    text: "Tell us about your programmes, start dates and course prices. We'll calculate the target cost per lead, the budget each cohort can carry and propose a campaign structure for every programme.",
    cta: "Discuss a project",
  },
};

const et: ProfftechContent = {
  badge: "Reaalne juhtum",
  category: "Professional courses / lead generation",
  heroTitle: "751 päringut kutsekursustele hinnaga €1,48",
  heroDescription:
    "Profftech on kutseõppekeskus Tallinnas. Aprillist septembrini 2026 juhtisime 8 reklaamikampaaniat 5 suunal: kokk, baarmen, õmbleja, tehisintellekt ja digiturundus. €1 113 reklaamieelarve tõi 751 päringut — kursuse hind on €2 400.",
  primaryCta: { label: "Soovin sama", href: "#contacts" },
  secondaryCta: { label: "Vaata numbreid", href: "#numbers" },
  heroStats: [
    { value: "751", label: "päringut kursustele" },
    { value: "€1,48", label: "keskmine päringu hind" },
    { value: "€0,56", label: "parim päringu hind" },
    { value: "−79%", label: "päringu hind koka kursusel" },
  ],
  heroPanel: {
    label: "Ökonoomika",
    title: "Milleks muutub 751 päringut",
    badge: "ROAS ≈4 700%",
    segments: [
      { label: "Reklaamieelarve", value: "€1 113" },
      { label: "Kursuse hind", value: "€2 400" },
      { label: "Konversioon makseks", value: "3% — mudel" },
    ],
    economyBadge: "Käive 22 makse pealt",
    economyValue: "€1 113 → €52 800",
    economyNote:
      "ROAS ≈4 700%, ROMI ≈4 600%, ühe õppija hankimine ≈€49. Päringud ja eelarve on reklaamikonto tegelikud andmed. Konversiooni päringust makseks võtsime teadlikult konservatiivselt: 5% korral oleks käive ≈€88 800 ja ROAS ≈8 000%.",
  },
  facts: [
    { label: "Klient", value: "Profftech, kutseõppekeskus" },
    { label: "Geograafia", value: "Tallinn, Eesti" },
    { label: "Suunad", value: "Kokk, baarmen, õmbleja, AI, digiturundus" },
    { label: "Periood", value: "Aprill — september 2026, vastuvõtt gruppidesse" },
    { label: "Kanal", value: "Meta Ads, päringuvormid" },
    { label: "Kursuse hind", value: "€2 400" },
    { label: "Kampaaniad", value: "8 kampaaniat 5 suunal" },
    { label: "Sihtrühm", value: "Eesti venekeelsed elanikud" },
  ],
  main: {
    label: "Juhtumi tuum",
    title: "Odav päring €2 400 maksvale tootele",
    paragraphs: [
      "Kutseõppel on keeruline ökonoomika: kõrge hind, pikk otsus ja vastuvõtt kindlate alguskuupäevadega gruppidesse. Seetõttu ei olnud eesmärk ühekordne päringute hüpe, vaid prognoositav kandidaatide maht iga grupi alguseks hinnaga, mis ei söö marginaali.",
      "Jagasime suunad eraldi kampaaniateks, viisime kontaktide kogumise Meta päringuvormidesse ja ehitasime sõnumi sihtrühma peamise motiivi ümber: vaheta elukutset, ja kui oled hetkel tööta, võib õpe olla tasuta. Viie kuuga kujunes keskmiseks päringu hinnaks €1,48 — kursuse enda hind on €2 400.",
      "Isegi kui päringust makseks konverteerub vaid 3%, maksab ühe õppija hankimine umbes €49. See on 2% kursuse hinnast ja ROAS umbes 4 700%.",
    ],
    ctaLabel: "Soovin sama",
  },
  cards: [
    {
      label: "Ülesanne",
      title: "Täita grupid korraga viiel erineval kursusel",
      text: "Igal suunal on oma sihtrühm ja oma motiiv: kokk ja baarmen on kiire sisenemine ametisse, õmbleja on käsitöö, AI ja digiturundus on ümberõpe digivaldkonda. Ühe üldise reklaamiga selliseid gruppe ei täida.",
    },
    {
      label: "Lähenemine",
      title: "Eraldi kampaania ja eraldi pakkumine iga kursuse jaoks",
      text: "Iga grupp sai oma kampaania, mille nimes on alguskuupäev, oma kreatiivi ja oma päringuvormi. Nii on iga suuna päringu hind nähtav ja eelarvet saab kiiresti ümber tõsta.",
    },
    {
      label: "Tulemus",
      title: "751 päringut €1 113 eelarvega",
      text: "Kõige odavam suund oli baarmeni kursus päringu hinnaga €0,56. Kõige mahukam oli AI kursus: 419 päringut kahe grupi peale. Üle €3 päringu kohta jäid ainult esimesed testkampaaniad aprillis.",
    },
  ],
  table: {
    label: "Numbrid",
    title: "Tulemus iga kampaania kohta",
    description:
      "Meta reklaamikonto andmed kõigi 8 kampaania kohta perioodil aprill — september 2026. Kampaaniad on nimetatud grupi alguskuupäeva järgi.",
    columns: [
      { key: "campaign", label: "Kampaania" },
      { key: "leads", label: "Päringud", align: "right" },
      { key: "cpl", label: "Päringu hind", align: "right" },
    ],
    rows: [
      { campaign: "Õmbleja kursus, algus 20.04", leads: "51", cpl: "€2,90" },
      { campaign: "Koka kursus, algus 27.04", leads: "44", cpl: "€3,92" },
      { campaign: "AI kursus, algus 27.04", leads: "106", cpl: "€1,12" },
      { campaign: "AI kursus, algus 19.05", leads: "313", cpl: "€1,57" },
      { campaign: "Baarmeni kursus, algus 01.06", leads: "133", cpl: "€0,56" },
      { campaign: "Koka kursus, algus 15.06", leads: "45", cpl: "€1,09" },
      { campaign: "Koka kursus, algus 07.09", leads: "42", cpl: "€0,82" },
      { campaign: "Digiturundus, algus 14.09", leads: "17", cpl: "€1,44" },
    ],
    total: { campaign: "Kokku", leads: "751", cpl: "€1,48" },
    note: "Koka kursus näitab hästi algoritmi ja pakkumiste õppimist: €3,92 aprillis, €1,09 juunis, €0,82 septembris. Digiturunduse kampaania oli andmete väljavõtte hetkel veel töös.",
  },
  mechanics: {
    label: "Mida me tegime",
    title: "Kuidas saime päringu alla €1,5",
    steps: [
      "Jagasime viis suunda eraldi kampaaniateks: kokal, baarmenil, õmblejal, AI ja digiturunduse kursusel on erinevad sihtrühmad, erinevad vastuväited ja erinev kliki hind.",
      "Viisime kontaktide kogumise Meta päringuvormidesse: päringu saab jätta kahe puutega otse voos, ilma saidile minemata ja ilma lehe laadimisel kaotusteta.",
      "Ehitasime pakkumise sihtrühma peamise motiivi ümber — vaheta elukutset, ja kui oled praegu tööta, võib õpe olla tasuta. See plokk on iga kreatiivi esimesel ekraanil.",
      "Testisime sama pakkumise erinevaid visuaalseid esitusi: hele minimalism, tihe sinine, neoongradient ja provokatiivne must-kollane makett küsimusega AI kohta.",
      "Tõstsime eelarvet parema päringu hinnaga suundadele ja skaleerisime AI kursust, mis andis kõige suurema mahu — 419 päringut kahe grupi peale.",
      "Langetasime korduvatel kursustel päringu hinda grupist gruppi: koka kursusel kukkus see viie kuuga €3,92 pealt €0,82 peale.",
    ],
  },
  creatives: {
    label: "Kreatiivid",
    title: "Üks pakkumine — neli visuaalset esitust",
    description:
      "Digiturunduse grupi täitmiseks testisime nelja maketti, mille sisu on sama, aga esitus erinev: rahulikust heledast minimalismist kuni provokatsioonini „Kas AI võtab turundaja töö?”. Igal makettil on linn, grupi alguskuupäev ja tasuta õppe plokk.",
    imageAlts: [
      "Profftech hele kreatiiv: Digital Marketing kursus uues reaalsuses, algus 14.09.26 Tallinnas",
      "Profftech sinine kreatiiv: digiturunduse kursus koos tasuta õppe plokiga",
      "Profftech neoonkreatiiv: digiturundus AI oskustega, SMM, Meta Ads, Google Ads ja SEO",
      "Profftech must-kollane kreatiiv küsimusega „Kas AI võtab turundaja töö?”",
    ],
  },
  faq: {
    label: "Küsimused",
    title: "Korduma kippuvad küsimused juhtumi kohta",
    items: [
      {
        question: "Mitu päringut Profftech sai ja millise hinnaga?",
        answer:
          "751 päringut 8 kampaaniaga aprillist septembrini 2026, reklaamieelarve €1 113. Keskmine päringu hind oli €1,48, parim €0,56 baarmeni kursusel, kõrgeim €3,92 esimeses testkampaanias.",
      },
      {
        question: "Milline on selle juhtumi ROAS ja ROMI?",
        answer:
          "Kursuse hinnaga €2 400 ja konservatiivse 3% konversiooniga päringust makseks on käive €52 800, ROAS ≈4 700% ja ROMI ≈4 600%. 5% konversiooni korral oleks käive ≈€88 800 ja ROAS ≈8 000%.",
      },
      {
        question: "Kui palju maksab ühe õppija hankimine?",
        answer:
          "3% konversiooni korral maksab ühe õppija hankimine umbes €49 — see on ligikaudu 2% kursuse hinnast €2 400. 5% korral langeb õppija hind ≈€30 peale.",
      },
      {
        question: "Miks maksavad päringud €2 400 kursusele alla €2?",
        answer:
          "Koos töötavad kolm asja: Meta päringuvormid saidile mineku asemel, eraldi kampaania ja pakkumine iga suuna jaoks ning sihtrühma tugev motiiv — võimalus õppida tasuta, kui oled hetkel tööta. Odav päring vajab siiski müügimeeskonna järelkvalifitseerimist.",
      },
      {
        question: "Kui kiiresti päringu hind langeb?",
        answer:
          "Korduvatel gruppidel kiiresti. Koka kursusel langes päringu hind €3,92 pealt aprillis €1,09 peale juunis ja €0,82 peale septembris — 79% viie kuuga.",
      },
    ],
  },
  nextStep: {
    label: "Järgmine samm",
    title: "Kas täidate gruppe kursustele või õppeprogrammidele?",
    text: "Rääkige oma suundadest, alguskuupäevadest ja õppe hinnast. Arvutame sihtpäringu hinna, ühe grupi lubatava eelarve ja pakume kampaaniate struktuuri iga suuna jaoks.",
    cta: "Aruta projekti",
  },
};

export const profftechContent: Record<Language, ProfftechContent> = {
  ru,
  en,
  et,
};
