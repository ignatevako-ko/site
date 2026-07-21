import type {
  CaseCta,
  CaseFact,
  CaseFaqItem,
  CaseStat,
} from "@/components/cases/case-sections";
import type { Language } from "@/data/site-content";

/** Медиа — не зависит от языка. */
export const eduDoCreativeImages = [
  {
    src: "/images/cases/edu-do/creative-karate.png",
    altKey: 0,
  },
  {
    src: "/images/cases/edu-do/creative-swimming.png",
    altKey: 1,
  },
  {
    src: "/images/cases/edu-do/creative-ofp.png",
    altKey: 2,
  },
] as const;

export const eduDoCreativeVideos = [
  { src: "/videos/cases/edu-do/creative-video-01.m4v", titleKey: 0 },
  { src: "/videos/cases/edu-do/creative-video-02.m4v", titleKey: 1 },
  { src: "/videos/cases/edu-do/creative-video-03.m4v", titleKey: 2 },
] as const;

export const eduDoProofImages = [
  { src: "/images/cases/edu-do/ads-dashboard-results.png", ratio: "aspect-[1908/282]", altKey: 0 },
  { src: "/images/cases/edu-do/chat-561-leads.jpeg", ratio: "aspect-[1280/174]", altKey: 1 },
  { src: "/images/cases/edu-do/chat-401-leads.jpeg", ratio: "aspect-[1280/280]", altKey: 2 },
  { src: "/images/cases/edu-do/chat-520-context.jpeg", ratio: "aspect-[1280/320]", altKey: 3 },
  { src: "/images/cases/edu-do/chat-520-reaction.jpeg", ratio: "aspect-[1280/674]", altKey: 4 },
] as const;

export type EduDoContent = {
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
    stats: CaseStat[];
    note: string;
  };
  facts: CaseFact[];
  main: { label: string; title: string; paragraphs: string[] };
  cards: Array<{ label: string; title: string; text: string }>;
  mechanics: { label: string; title: string; steps: string[] };
  creatives: {
    label: string;
    title: string;
    description: string;
    imageAlts: string[];
    videoTitles: string[];
  };
  proof: { label: string; title: string; description: string; imageAlts: string[] };
  faq: { label: string; title: string; items: CaseFaqItem[] };
  nextStep: { label: string; title: string; text: string; cta: string };
};

const ru: EduDoContent = {
  badge: "Реальный кейс",
  category: "Sports school / lead generation",
  heroTitle: "561 заявка за месяц для EDU.DO по €3.4 за лид",
  heroDescription:
    "EDU.DO — спортивная школа в Таллинне с направлениями карате, плавания и общей физической подготовки. За 3 года работы мы выстроили стабильный поток заявок: от 370 лидов каждый месяц, средняя цена около €4, минимум — €1.8 за лид.",
  primaryCta: { label: "Хочу также", href: "#contacts" },
  secondaryCta: { label: "Смотреть доказательства", href: "#proof" },
  heroPanel: {
    label: "Цифры кейса",
    title: "Ключевые показатели",
    badge: "CPL до -97%",
    stats: [
      { value: "370+", label: "заявок стабильно каждый месяц" },
      { value: "561", label: "максимум заявок за месяц" },
      { value: "€3.4", label: "цена лида в лучший месяц" },
      { value: "€4", label: "средняя цена лида сейчас" },
      { value: "€1.8", label: "самая низкая цена лида" },
      { value: "€20-60", label: "стоимость лида до работы" },
    ],
    note: "Результат подтвержден скринами из рекламного кабинета и перепиской с клиентом: 401, 520 и 561 заявка в месяц.",
  },
  facts: [
    { label: "Клиент", value: "EDU.DO, спортивная школа в Таллинне" },
    { label: "Направления", value: "карате, плавание, общая физическая подготовка" },
    { label: "Период", value: "3 года стабильной работы" },
    { label: "География", value: "Таллинн, Эстония" },
    { label: "Канал", value: "Meta Ads и креативы для лид-форм" },
    { label: "До нас", value: "€20-60 за лид" },
    { label: "Минимум", value: "€1.8 за лид" },
    { label: "Стабильный уровень", value: "от 370 заявок в месяц" },
  ],
  main: {
    label: "Главное",
    title: "Реклама стала постоянной системой набора",
    paragraphs: [
      "До сотрудничества с Do.Marketing заявка для клиента стоила от €20 до €60. Для регулярного набора в детские секции такая экономика сильно ограничивала масштабирование.",
      "Мы перестроили рекламные связки вокруг конкретных направлений школы и понятного оффера: первое бесплатное занятие. В результате проект 3 года стабильно получает заявки, а средняя стоимость лида держится около €4.",
    ],
  },
  cards: [
    {
      label: "Задача",
      title: "Снизить цену заявки и не потерять объем",
      text: "EDU.DO нужны были регулярные заявки от родителей на спортивные занятия для детей: карате, плавание и ОФП.",
    },
    {
      label: "Подход",
      title: "Отдельные офферы под разные секции",
      text: "Вместо одной общей рекламы мы показывали родителям конкретные сценарии: спорт вместо экранного времени, плавание рядом с домом, карате для дисциплины и уверенности.",
    },
    {
      label: "Результат",
      title: "370+ заявок стабильно каждый месяц",
      text: "Лучший месяц дал 561 заявку по €3.4 за лид. В отдельные периоды цена заявки опускалась до €1.8.",
    },
  ],
  mechanics: {
    label: "Что сделали",
    title: "Лаконичная система для стабильного набора",
    steps: [
      "Разделили рекламу по направлениям: карате, плавание и ОФП для детей разного возраста.",
      "Собрали офферы вокруг понятного действия для родителей: записаться на первое бесплатное занятие.",
      "Регулярно обновляли креативы, чтобы удерживать цену заявки в сезонных колебаниях.",
      "Оптимизировали кампании по стоимости лида и фактическому объему заявок, а не по охватам.",
      "Масштабировали рабочие связки без резкого роста CPL, чтобы школа получала набор каждый месяц.",
    ],
  },
  creatives: {
    label: "Креативы",
    title: "Рекламные материалы для родителей",
    description:
      "Креативы сразу объясняют направление, возраст, город и следующий шаг. Это снижает лишние клики и помогает получать заявки по стабильной цене.",
    imageAlts: [
      "Рекламный сторис-креатив EDU.DO для набора детей на карате",
      "Рекламный сторис-креатив EDU.DO для набора детей на плавание",
      "Рекламный сторис-креатив EDU.DO для общей физической подготовки детей",
    ],
    videoTitles: [
      "Видео-креатив для набора в спортивную школу",
      "Вертикальный креатив для лид-формы",
      "Видео для прогрева родителей перед заявкой",
    ],
  },
  proof: {
    label: "Доказательства",
    title: "Скрины из кабинета и переписки",
    description:
      "В кейсе оставлены реальные скрины: результаты кампаний, месяцы с 401, 520 и 561 заявкой, а также реакция клиента на рост объема.",
    imageAlts: [
      "Скриншот рекламного кабинета EDU.DO с результатами кампаний",
      "Скрин переписки: 561 заявка за месяц по 3,4 евро за лид",
      "Скрин переписки: 401 заявка за месяц по 4,5 евро",
      "Скрин переписки: обсуждение 520 лидов",
      "Скрин переписки с реакцией клиента на 520 лидов",
    ],
  },
  faq: {
    label: "FAQ",
    title: "Коротко о цифрах",
    items: [
      {
        question: "Какой результат получил EDU.DO?",
        answer:
          "Проект стабильно получает от 370 заявок каждый месяц. Максимальный результат - 561 заявка за месяц по средней цене €3.4 за лид.",
      },
      {
        question: "Какая средняя стоимость лида сейчас?",
        answer:
          "Средняя стоимость лида держится в районе €4. Самая низкая цена одного лида за время работы была €1.8.",
      },
      {
        question: "Что было до работы с Do.Marketing?",
        answer:
          "До начала сотрудничества стоимость лида у клиента была от €20 до €60. После перестройки рекламы лидогенерация стала стабильной и предсказуемой.",
      },
    ],
  },
  nextStep: {
    label: "Следующий шаг",
    title: "Хотите такую же систему заявок для своей ниши?",
    text: "Покажите нам текущую цену заявки, географию и продукт. Мы оценим экономику и предложим реалистичный план роста.",
    cta: "Обсудить проект",
  },
};

const en: EduDoContent = {
  badge: "Real case study",
  category: "Sports school / lead generation",
  heroTitle: "561 leads in a month for EDU.DO at €3.4 per lead",
  heroDescription:
    "EDU.DO is a sports school in Tallinn offering karate, swimming and general physical conditioning. Over 3 years of work we built a steady flow of leads: from 370 leads every month, an average cost of around €4, and a low of €1.8 per lead.",
  primaryCta: { label: "I want this too", href: "#contacts" },
  secondaryCta: { label: "See the proof", href: "#proof" },
  heroPanel: {
    label: "Case numbers",
    title: "Key metrics",
    badge: "CPL down to -97%",
    stats: [
      { value: "370+", label: "leads consistently every month" },
      { value: "561", label: "peak leads in a single month" },
      { value: "€3.4", label: "cost per lead in the best month" },
      { value: "€4", label: "average cost per lead now" },
      { value: "€1.8", label: "lowest cost per lead" },
      { value: "€20-60", label: "cost per lead before our work" },
    ],
    note: "The results are backed by screenshots from the ad account and client correspondence: 401, 520 and 561 leads per month.",
  },
  facts: [
    { label: "Client", value: "EDU.DO, a sports school in Tallinn" },
    { label: "Programs", value: "karate, swimming, general physical conditioning" },
    { label: "Timeframe", value: "3 years of steady work" },
    { label: "Location", value: "Tallinn, Estonia" },
    { label: "Channel", value: "Meta Ads and creatives for lead forms" },
    { label: "Before us", value: "€20-60 per lead" },
    { label: "Minimum", value: "€1.8 per lead" },
    { label: "Steady level", value: "from 370 leads per month" },
  ],
  main: {
    label: "Overview",
    title: "Advertising became a permanent enrollment system",
    paragraphs: [
      "Before working with Do.Marketing, a lead cost the client between €20 and €60. For steady enrollment into children's classes, that economics severely limited scaling.",
      "We rebuilt the ad campaigns around the school's specific programs and a clear offer: a first free class. As a result, the project has been generating leads steadily for 3 years, and the average cost per lead stays around €4.",
    ],
  },
  cards: [
    {
      label: "Challenge",
      title: "Lower the cost per lead without losing volume",
      text: "EDU.DO needed a steady stream of leads from parents for children's sports classes: karate, swimming and general physical conditioning.",
    },
    {
      label: "Approach",
      title: "Separate offers for different classes",
      text: "Instead of one generic ad, we showed parents specific scenarios: sport instead of screen time, swimming close to home, karate for discipline and confidence.",
    },
    {
      label: "Result",
      title: "370+ leads consistently every month",
      text: "The best month delivered 561 leads at €3.4 per lead. In some periods the cost per lead dropped to €1.8.",
    },
  ],
  mechanics: {
    label: "What we did",
    title: "A lean system for steady enrollment",
    steps: [
      "Split the advertising by program: karate, swimming and general physical conditioning for children of different ages.",
      "Built the offers around one clear action for parents: signing up for a first free class.",
      "Regularly refreshed the creatives to keep the cost per lead stable through seasonal swings.",
      "Optimized campaigns for cost per lead and actual lead volume, not for reach.",
      "Scaled the winning campaigns without spiking CPL, so the school gained new enrollments every month.",
    ],
  },
  creatives: {
    label: "Creatives",
    title: "Ad materials for parents",
    description:
      "The creatives immediately explain the program, age, city and next step. This cuts wasted clicks and helps bring in leads at a stable cost.",
    imageAlts: [
      "EDU.DO story ad creative for enrolling children in karate",
      "EDU.DO story ad creative for enrolling children in swimming",
      "EDU.DO story ad creative for children's general physical conditioning",
    ],
    videoTitles: [
      "Video creative for sports school enrollment",
      "Vertical creative for the lead form",
      "Video to warm up parents before they submit a lead",
    ],
  },
  proof: {
    label: "Proof",
    title: "Screenshots from the ad account and chats",
    description:
      "The case study includes real screenshots: campaign results, months with 401, 520 and 561 leads, and the client's reaction to the growth in volume.",
    imageAlts: [
      "Screenshot of the EDU.DO ad account with campaign results",
      "Chat screenshot: 561 leads in a month at €3.4 per lead",
      "Chat screenshot: 401 leads in a month at €4.5 each",
      "Chat screenshot: discussing 520 leads",
      "Chat screenshot with the client's reaction to 520 leads",
    ],
  },
  faq: {
    label: "FAQ",
    title: "The numbers in brief",
    items: [
      {
        question: "What results did EDU.DO get?",
        answer:
          "The project consistently receives from 370 leads every month. The peak result was 561 leads in a month at an average cost of €3.4 per lead.",
      },
      {
        question: "What is the average cost per lead now?",
        answer:
          "The average cost per lead stays around €4. The lowest cost for a single lead over the whole period was €1.8.",
      },
      {
        question: "What was it like before working with Do.Marketing?",
        answer:
          "Before the partnership, the client's cost per lead ranged from €20 to €60. After we rebuilt the advertising, lead generation became stable and predictable.",
      },
    ],
  },
  nextStep: {
    label: "Next step",
    title: "Want the same lead system for your niche?",
    text: "Show us your current cost per lead, location and product. We'll assess the economics and propose a realistic growth plan.",
    cta: "Discuss a project",
  },
};

const et: EduDoContent = {
  badge: "Reaalne juhtum",
  category: "Sports school / lead generation",
  heroTitle: "561 liidi kuus EDU.DO jaoks hinnaga €3.4 liidi kohta",
  heroDescription:
    "EDU.DO on Tallinnas tegutsev spordikool, mis pakub karated, ujumist ja üldkehalist ettevalmistust. Kolme aasta jooksul oleme üles ehitanud stabiilse liidivoo: alates 370 liidist igas kuus, keskmine hind umbes €4 ja madalaim €1.8 liidi kohta.",
  primaryCta: { label: "Soovin sama", href: "#contacts" },
  secondaryCta: { label: "Vaata tõendeid", href: "#proof" },
  heroPanel: {
    label: "Juhtumi numbrid",
    title: "Peamised näitajad",
    badge: "CPL kuni -97%",
    stats: [
      { value: "370+", label: "liidi stabiilselt igas kuus" },
      { value: "561", label: "maksimum liide ühes kuus" },
      { value: "€3.4", label: "liidi hind parimal kuul" },
      { value: "€4", label: "praegune keskmine liidi hind" },
      { value: "€1.8", label: "madalaim liidi hind" },
      { value: "€20-60", label: "liidi hind enne meie tööd" },
    ],
    note: "Tulemusi kinnitavad ekraanipildid reklaamikontolt ja kirjavahetus kliendiga: 401, 520 ja 561 liidi kuus.",
  },
  facts: [
    { label: "Klient", value: "EDU.DO, spordikool Tallinnas" },
    { label: "Suunad", value: "karate, ujumine, üldkehaline ettevalmistus" },
    { label: "Periood", value: "3 aastat stabiilset tööd" },
    { label: "Geograafia", value: "Tallinn, Eesti" },
    { label: "Kanal", value: "Meta Ads ja kreatiivid liidivormidele" },
    { label: "Enne meid", value: "€20-60 liidi kohta" },
    { label: "Miinimum", value: "€1.8 liidi kohta" },
    { label: "Stabiilne tase", value: "alates 370 liidist kuus" },
  ],
  main: {
    label: "Peamine",
    title: "Reklaamist sai püsiv värbamissüsteem",
    paragraphs: [
      "Enne koostööd Do.Marketingiga maksis üks liid kliendile €20 kuni €60. Regulaarseks laste treeningrühmadesse värbamiseks piiras selline majandus tugevalt skaleerimist.",
      "Ehitasime reklaamikombinatsioonid ümber kooli konkreetsete suundade ja selge pakkumise ümber: esimene tasuta treening. Tänu sellele saab projekt juba 3 aastat stabiilselt liide ja keskmine liidi hind püsib umbes €4 juures.",
    ],
  },
  cards: [
    {
      label: "Ülesanne",
      title: "Langetada liidi hinda ilma mahtu kaotamata",
      text: "EDU.DO vajas regulaarseid liide vanematelt laste sporditreeningutele: karate, ujumine ja üldkehaline ettevalmistus.",
    },
    {
      label: "Lähenemine",
      title: "Eraldi pakkumised erinevatele suundadele",
      text: "Ühe üldise reklaami asemel näitasime vanematele konkreetseid stsenaariume: sport ekraaniaja asemel, ujumine kodu lähedal, karate distsipliini ja enesekindluse jaoks.",
    },
    {
      label: "Tulemus",
      title: "370+ liidi stabiilselt igas kuus",
      text: "Parim kuu andis 561 liidi hinnaga €3.4 liidi kohta. Mõnel perioodil langes liidi hind kuni €1.8-ni.",
    },
  ],
  mechanics: {
    label: "Mida tegime",
    title: "Lakooniline süsteem stabiilseks värbamiseks",
    steps: [
      "Jagasime reklaami suundade kaupa: karate, ujumine ja üldkehaline ettevalmistus eri vanuses lastele.",
      "Koostasime pakkumised ühe selge tegevuse ümber vanematele: registreeruda esimesele tasuta treeningule.",
      "Uuendasime kreatiive regulaarselt, et hoida liidi hinda stabiilsena hooajaliste kõikumiste ajal.",
      "Optimeerisime kampaaniaid liidi hinna ja tegeliku liidimahu, mitte katvuse järgi.",
      "Skaleerisime toimivaid kombinatsioone ilma CPL-i järsu tõusuta, et kool saaks igas kuus uusi õpilasi.",
    ],
  },
  creatives: {
    label: "Kreatiivid",
    title: "Reklaammaterjalid vanematele",
    description:
      "Kreatiivid selgitavad kohe suunda, vanust, linna ja järgmist sammu. See vähendab tarbetuid klikke ja aitab saada liide stabiilse hinnaga.",
    imageAlts: [
      "EDU.DO story-reklaamikreatiiv laste karatesse värbamiseks",
      "EDU.DO story-reklaamikreatiiv laste ujumisse värbamiseks",
      "EDU.DO story-reklaamikreatiiv laste üldkehaliseks ettevalmistuseks",
    ],
    videoTitles: [
      "Videokreatiiv spordikooli värbamiseks",
      "Vertikaalne kreatiiv liidivormile",
      "Video vanemate soojendamiseks enne päringu esitamist",
    ],
  },
  proof: {
    label: "Tõendid",
    title: "Ekraanipildid reklaamikontolt ja kirjavahetusest",
    description:
      "Juhtumis on säilitatud päris ekraanipildid: kampaaniate tulemused, kuud 401, 520 ja 561 liidiga ning kliendi reaktsioon mahu kasvule.",
    imageAlts: [
      "Ekraanipilt EDU.DO reklaamikontost kampaaniate tulemustega",
      "Kirjavahetuse ekraanipilt: 561 liidi kuus hinnaga €3.4 liidi kohta",
      "Kirjavahetuse ekraanipilt: 401 liidi kuus hinnaga €4.5",
      "Kirjavahetuse ekraanipilt: 520 liidi arutelu",
      "Kirjavahetuse ekraanipilt kliendi reaktsiooniga 520 liidile",
    ],
  },
  faq: {
    label: "FAQ",
    title: "Numbrid lühidalt",
    items: [
      {
        question: "Milliseid tulemusi EDU.DO sai?",
        answer:
          "Projekt saab stabiilselt alates 370 liidist igas kuus. Parim tulemus oli 561 liidi kuus keskmise hinnaga €3.4 liidi kohta.",
      },
      {
        question: "Milline on praegune keskmine liidi hind?",
        answer:
          "Keskmine liidi hind püsib umbes €4 juures. Madalaim ühe liidi hind kogu töö jooksul oli €1.8.",
      },
      {
        question: "Kuidas oli enne koostööd Do.Marketingiga?",
        answer:
          "Enne koostöö algust oli kliendi liidi hind €20 kuni €60. Pärast reklaami ümberehitamist muutus liidide genereerimine stabiilseks ja prognoositavaks.",
      },
    ],
  },
  nextStep: {
    label: "Järgmine samm",
    title: "Kas soovid oma nišile sama liidisüsteemi?",
    text: "Näita meile oma praegust liidi hinda, geograafiat ja toodet. Hindame majandust ja pakume realistliku kasvuplaani.",
    cta: "Aruta projekti",
  },
};

export const eduDoContent: Record<Language, EduDoContent> = {
  ru,
  en,
  et,
};
