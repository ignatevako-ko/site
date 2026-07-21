import type {
  CaseCta,
  CaseFact,
  CaseFaqItem,
  CaseStat,
} from "@/components/cases/case-sections";
import type { Language } from "@/data/site-content";

export const suvelaagridProofImages = [
  { src: "/images/cases/suvelaagrid/chat-may-results.jpeg", ratio: "aspect-[1280/309]", altKey: 0 },
  { src: "/images/cases/suvelaagrid/chat-june-july-results.jpeg", ratio: "aspect-[1280/736]", altKey: 1 },
  { src: "/images/cases/suvelaagrid/ads-est-city-camp-leads.png", ratio: "aspect-[1900/88]", altKey: 2 },
  { src: "/images/cases/suvelaagrid/ads-ru-away-camp-leads.png", ratio: "aspect-[1894/94]", altKey: 3 },
  { src: "/images/cases/suvelaagrid/ads-est-away-camp-leads.png", ratio: "aspect-[1902/90]", altKey: 4 },
  { src: "/images/cases/suvelaagrid/ads-site-and-leads-results.png", ratio: "aspect-[1930/650]", altKey: 5 },
] as const;

export type SuvelaagridContent = {
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
    leadFormLabel: string;
    leadFormValue: string;
    leadFormNote: string;
    siteLabel: string;
    siteValue: string;
    siteNote: string;
    imageAlt: string;
  };
  facts: CaseFact[];
  main: { label: string; title: string; paragraphs: string[]; ctaLabel: string };
  funnelCards: Array<{ label: string; title: string; text: string }>;
  mechanics: { label: string; title: string; steps: string[] };
  proof: { label: string; title: string; description: string; imageAlts: string[] };
  faq: { label: string; title: string; items: CaseFaqItem[] };
  nextStep: { label: string; title: string; text: string; cta: string };
};

const ru: SuvelaagridContent = {
  badge: "Реальный кейс",
  category: "Children camps / lead generation",
  heroTitle: "От 565 лидов в месяц для детских лагерей Suvelaagrid по €2.7 за лид",
  heroDescription:
    "С апреля до середины августа ведем набор детей в дневной городской лагерь и выездные лагеря в Эстонии. Сначала весь трафик шел на лид-форму и заявки обрабатывал менеджер, затем протестировали смешанную систему: часть бюджета оставили на лид-формы, часть перевели на прямую регистрацию на сайте.",
  primaryCta: { label: "Хочу также", href: "#contacts" },
  secondaryCta: { label: "Смотреть доказательства", href: "#proof" },
  resultStats: [
    { value: "565+", label: "лидов в месяц в сезон набора" },
    { value: "€2.7", label: "стоимость лида в сильном периоде" },
    { value: "56", label: "завершенных регистраций на сайте" },
    { value: "2", label: "воронки: лид-форма и сайт" },
  ],
  heroPanel: {
    label: "Suvelaagrid",
    title: "Набор детей в лагерь",
    leadFormLabel: "Лид-форма",
    leadFormValue: "328 лидов",
    leadFormNote: "По €2.7 за лид в срезе с 12.05 по 16.05.",
    siteLabel: "Сайт",
    siteValue: "56 регистраций",
    siteNote: "По €20.62 за завершенную регистрацию в месячном срезе.",
    imageAlt: "Рекламный креатив для детского лагеря Suvelaagrid",
  },
  facts: [
    { label: "Клиент", value: "Suvelaagrid, детские лагеря в Эстонии" },
    { label: "Сезон", value: "с апреля до середины августа" },
    { label: "Продукт", value: "дневной городской лагерь и выездные лагеря" },
    { label: "География", value: "Эстония, русско- и эстоноязычная аудитория" },
    { label: "Канал", value: "Meta Ads: лид-формы и регистрация на сайте" },
    { label: "Лучший срез", value: "328 лидов по €2.7 за 5 дней" },
    { label: "Месячный объем", value: "от 565 лидов в месяц" },
    { label: "Регистрации", value: "до €15.15 за завершенную регистрацию" },
  ],
  main: {
    label: "Главное",
    title: "Сезонный набор стал управляемой системой",
    paragraphs: [
      "В лагере короткое окно спроса: родители выбирают смены весной и летом, а места нужно заполнять быстро. Поэтому сначала мы сделали ставку на лид-формы, чтобы дать менеджеру стабильный поток контактов без лишних шагов для родителя.",
      "Затем подключили регистрацию на сайте и разделили бюджет между двумя сценариями. Так проект сохранил объем лидов и начал получать более горячие действия, где родитель сразу завершает регистрацию.",
    ],
    ctaLabel: "Обсудить сезонный набор",
  },
  funnelCards: [
    {
      label: "Старт",
      title: "Лид-форма",
      text: "Быстрый путь для родителей: оставить контакты, после чего менеджер обрабатывал заявку и доводил до записи.",
    },
    {
      label: "Тест",
      title: "Прямая регистрация",
      text: "Часть бюджета перевели на сайт, чтобы получать более осознанные заявки и считать цену завершенной регистрации.",
    },
    {
      label: "Система",
      title: "Две воронки одновременно",
      text: "Лид-формы поддерживали объем, а сайт показывал качество спроса и помогал закрывать родителей без лишнего шага.",
    },
  ],
  mechanics: {
    label: "Что сделали",
    title: "Развели спрос по языку, формату лагеря и глубине готовности",
    steps: [
      "Разделили кампании по языку и типу лагеря: отдельно городской дневной лагерь, отдельно выездные детские лагеря.",
      "Сначала вели весь трафик на лид-форму, чтобы быстро набирать заявки и дать менеджеру понятный поток обращений.",
      "После накопления данных часть бюджета оставили на лид-формах, а часть перевели на прямую регистрацию на сайте.",
      "Сравнивали не только цену лида, но и стоимость завершенной регистрации, чтобы видеть более качественный спрос.",
      "Масштабировали рабочие связки в самый активный сезон набора, не ломая стоимость заявки при росте объема.",
    ],
  },
  proof: {
    label: "Доказательства",
    title: "Скрины из кабинета и переписки",
    description:
      "В кейсе оставлены реальные срезы по лид-формам и регистрациям: 328 лидов по €2.7, 360 лидов по €3.44, 56 завершенных регистраций, а также кампании по русской и эстонской аудитории.",
    imageAlts: [
      "Скрин переписки: 328 лидов по 2,7 евро за лид по лагерям с 12.05 по 16.05",
      "Скрин переписки: 360 лидов по 3,44 евро и 56 завершенных регистраций по 20,62 евро",
      "Скрин рекламного кабинета: эстонская кампания городского лагеря, 237 лидов по 2,74 евро",
      "Скрин рекламного кабинета: русская кампания выездного лагеря, 184 лида по 3,26 евро",
      "Скрин рекламного кабинета: эстонская кампания выездного лагеря, 144 лида по 2,08 евро",
      "Скрин рекламного кабинета: сайт-регистрации и лид-формы по городскому и выездному лагерю",
    ],
  },
  faq: {
    label: "FAQ",
    title: "Коротко о цифрах",
    items: [
      {
        question: "Какой результат получил Suvelaagrid?",
        answer:
          "В сезон набора проект получает от 565 лидов в месяц. В отдельном срезе с 12.05 по 16.05 получили 328 лидов по €2.7 за лид.",
      },
      {
        question: "Почему использовали и лид-форму, и регистрацию на сайте?",
        answer:
          "Лид-форма давала быстрый объем заявок для менеджера, а регистрация на сайте помогала проверять более осознанный спрос и считать цену завершенной регистрации.",
      },
      {
        question: "Какие лагеря продвигались?",
        answer:
          "Реклама работала на набор детей в дневной городской лагерь и выездные детские лагеря в Эстонии для русско- и эстоноязычной аудитории.",
      },
    ],
  },
  nextStep: {
    label: "Следующий шаг",
    title: "Хотите набрать группы к сезону без хаоса в рекламе?",
    text: "Покажите нам сезонность, географию и текущую стоимость заявки. Мы оценим, где лучше вести трафик на лид-форму, а где уже переводить пользователя на регистрацию или покупку.",
    cta: "Обсудить проект",
  },
};

const en: SuvelaagridContent = {
  badge: "Real case study",
  category: "Children camps / lead generation",
  heroTitle: "From 565 leads a month for the Suvelaagrid children's camps at €2.7 per lead",
  heroDescription:
    "From April to mid-August we run enrolment for a day city camp and away camps in Estonia. At first all traffic went to a lead form and a manager processed the requests, then we tested a mixed system: we kept part of the budget on lead forms and moved part to direct registration on the website.",
  primaryCta: { label: "I want this too", href: "#contacts" },
  secondaryCta: { label: "See the proof", href: "#proof" },
  resultStats: [
    { value: "565+", label: "leads a month during enrolment season" },
    { value: "€2.7", label: "cost per lead in a strong period" },
    { value: "56", label: "completed registrations on the website" },
    { value: "2", label: "funnels: lead form and website" },
  ],
  heroPanel: {
    label: "Suvelaagrid",
    title: "Enrolling children into camp",
    leadFormLabel: "Lead form",
    leadFormValue: "328 leads",
    leadFormNote: "At €2.7 per lead in the 12.05–16.05 snapshot.",
    siteLabel: "Website",
    siteValue: "56 registrations",
    siteNote: "At €20.62 per completed registration in the monthly snapshot.",
    imageAlt: "Ad creative for the Suvelaagrid children's camp",
  },
  facts: [
    { label: "Client", value: "Suvelaagrid, children's camps in Estonia" },
    { label: "Season", value: "from April to mid-August" },
    { label: "Product", value: "day city camp and away camps" },
    { label: "Geography", value: "Estonia, Russian- and Estonian-speaking audience" },
    { label: "Channel", value: "Meta Ads: lead forms and website registration" },
    { label: "Best snapshot", value: "328 leads at €2.7 in 5 days" },
    { label: "Monthly volume", value: "from 565 leads a month" },
    { label: "Registrations", value: "as low as €15.15 per completed registration" },
  ],
  main: {
    label: "Key point",
    title: "Seasonal enrolment became a manageable system",
    paragraphs: [
      "A camp has a short demand window: parents choose sessions in spring and summer, and the spots need to be filled fast. That is why we first bet on lead forms, to give the manager a steady flow of contacts without extra steps for the parent.",
      "Then we added registration on the website and split the budget between the two scenarios. This let the project keep its lead volume and start getting warmer actions, where the parent completes the registration right away.",
    ],
    ctaLabel: "Discuss seasonal enrolment",
  },
  funnelCards: [
    {
      label: "Start",
      title: "Lead form",
      text: "A fast path for parents: leave their contacts, after which the manager processed the request and drove it to a booking.",
    },
    {
      label: "Test",
      title: "Direct registration",
      text: "We moved part of the budget to the website to get more deliberate requests and measure the cost of a completed registration.",
    },
    {
      label: "System",
      title: "Two funnels at once",
      text: "Lead forms sustained the volume, while the website showed the quality of demand and helped close parents without an extra step.",
    },
  ],
  mechanics: {
    label: "What we did",
    title: "We separated demand by language, camp format and depth of readiness",
    steps: [
      "We split campaigns by language and camp type: the city day camp separately, the away children's camps separately.",
      "At first we drove all traffic to the lead form to gather requests quickly and give the manager a clear flow of enquiries.",
      "Once we had gathered data, we kept part of the budget on lead forms and moved part to direct registration on the website.",
      "We compared not only the cost per lead but also the cost of a completed registration, to see higher-quality demand.",
      "We scaled the working combinations during the most active enrolment season without breaking the cost per request as volume grew.",
    ],
  },
  proof: {
    label: "Proof",
    title: "Screenshots from the ad account and chats",
    description:
      "The case keeps real snapshots for lead forms and registrations: 328 leads at €2.7, 360 leads at €3.44, 56 completed registrations, as well as campaigns for the Russian and Estonian audiences.",
    imageAlts: [
      "Chat screenshot: 328 leads at €2.7 per lead for the camps from 12.05 to 16.05",
      "Chat screenshot: 360 leads at €3.44 and 56 completed registrations at €20.62",
      "Ad account screenshot: Estonian city camp campaign, 237 leads at €2.74",
      "Ad account screenshot: Russian away camp campaign, 184 leads at €3.26",
      "Ad account screenshot: Estonian away camp campaign, 144 leads at €2.08",
      "Ad account screenshot: website registrations and lead forms for the city and away camps",
    ],
  },
  faq: {
    label: "FAQ",
    title: "The numbers in brief",
    items: [
      {
        question: "What result did Suvelaagrid get?",
        answer:
          "During the enrolment season the project gets from 565 leads a month. In a separate snapshot from 12.05 to 16.05 we got 328 leads at €2.7 per lead.",
      },
      {
        question: "Why did you use both a lead form and website registration?",
        answer:
          "The lead form gave the manager a fast volume of requests, while website registration helped test more deliberate demand and measure the cost of a completed registration.",
      },
      {
        question: "Which camps were promoted?",
        answer:
          "The ads worked to enrol children into a day city camp and away children's camps in Estonia for Russian- and Estonian-speaking audiences.",
      },
    ],
  },
  nextStep: {
    label: "Next step",
    title: "Want to fill your groups for the season without chaos in your ads?",
    text: "Show us your seasonality, geography and current cost per request. We will assess where it is better to drive traffic to a lead form and where it already makes sense to move the user on to registration or purchase.",
    cta: "Discuss a project",
  },
};

const et: SuvelaagridContent = {
  badge: "Päris juhtum",
  category: "Children camps / lead generation",
  heroTitle: "Alates 565 liidist kuus Suvelaagrid lastelaagritele hinnaga €2.7 liidi eest",
  heroDescription:
    "Aprillist augusti keskpaigani viime läbi laste värbamist päevasesse linnalaagrisse ja väljasõidulaagritesse Eestis. Alguses suunasime kogu liikluse liidivormile ja päringuid töötles haldur, seejärel katsetasime segasüsteemi: osa eelarvest jätsime liidivormidele, osa suunasime otseregistreerimisele veebilehel.",
  primaryCta: { label: "Soovin sama", href: "#contacts" },
  secondaryCta: { label: "Vaata tõendeid", href: "#proof" },
  resultStats: [
    { value: "565+", label: "liidi kuus värbamishooajal" },
    { value: "€2.7", label: "liidi hind tugeval perioodil" },
    { value: "56", label: "lõpetatud registreerimist veebilehel" },
    { value: "2", label: "lehtrit: liidivorm ja veebileht" },
  ],
  heroPanel: {
    label: "Suvelaagrid",
    title: "Laste värbamine laagrisse",
    leadFormLabel: "Liidivorm",
    leadFormValue: "328 liidi",
    leadFormNote: "Hinnaga €2.7 liidi kohta lõikes 12.05–16.05.",
    siteLabel: "Veebileht",
    siteValue: "56 registreerimist",
    siteNote: "Hinnaga €20.62 lõpetatud registreerimise kohta kuu lõikes.",
    imageAlt: "Reklaami kreatiiv Suvelaagrid lastelaagri jaoks",
  },
  facts: [
    { label: "Klient", value: "Suvelaagrid, lastelaagrid Eestis" },
    { label: "Hooaeg", value: "aprillist augusti keskpaigani" },
    { label: "Toode", value: "päevane linnalaager ja väljasõidulaagrid" },
    { label: "Geograafia", value: "Eesti, vene- ja eestikeelne sihtrühm" },
    { label: "Kanal", value: "Meta Ads: liidivormid ja registreerimine veebilehel" },
    { label: "Parim lõige", value: "328 liidi hinnaga €2.7 viie päevaga" },
    { label: "Kuu maht", value: "alates 565 liidist kuus" },
    { label: "Registreerimised", value: "kuni €15.15 lõpetatud registreerimise kohta" },
  ],
  main: {
    label: "Peamine",
    title: "Hooajalisest värbamisest sai juhitav süsteem",
    paragraphs: [
      "Laagril on lühike nõudlusaken: vanemad valivad vahetusi kevadel ja suvel ning kohad tuleb kiiresti täita. Seetõttu panustasime alguses liidivormidele, et anda haldurile stabiilne kontaktide vool ilma vanemale lisasammudeta.",
      "Seejärel lisasime registreerimise veebilehel ja jagasime eelarve kahe stsenaariumi vahel. Nii säilitas projekt liidide mahu ja hakkas saama kuumemaid tegevusi, kus vanem lõpetab registreerimise kohe.",
    ],
    ctaLabel: "Aruta hooajalist värbamist",
  },
  funnelCards: [
    {
      label: "Algus",
      title: "Liidivorm",
      text: "Kiire tee vanematele: jätta kontaktid, misjärel haldur töötles päringu ja viis selle registreerimiseni.",
    },
    {
      label: "Test",
      title: "Otseregistreerimine",
      text: "Osa eelarvest suunasime veebilehele, et saada teadlikumaid päringuid ja arvestada lõpetatud registreerimise hinda.",
    },
    {
      label: "Süsteem",
      title: "Kaks lehtrit korraga",
      text: "Liidivormid hoidsid mahtu, veebileht aga näitas nõudluse kvaliteeti ja aitas vanemaid sulgeda ilma lisasammuta.",
    },
  ],
  mechanics: {
    label: "Mida tegime",
    title: "Jagasime nõudluse keele, laagri formaadi ja valmisoleku sügavuse järgi",
    steps: [
      "Jagasime kampaaniad keele ja laagritüübi järgi: eraldi linna päevalaager, eraldi laste väljasõidulaagrid.",
      "Alguses suunasime kogu liikluse liidivormile, et koguda kiiresti päringuid ja anda haldurile selge pöördumiste vool.",
      "Pärast andmete kogunemist jätsime osa eelarvest liidivormidele ja osa suunasime otseregistreerimisele veebilehel.",
      "Võrdlesime mitte ainult liidi hinda, vaid ka lõpetatud registreerimise hinda, et näha kvaliteetsemat nõudlust.",
      "Skaleerisime töötavaid kombinatsioone kõige aktiivsemal värbamishooajal, lõhkumata päringu hinda mahu kasvades.",
    ],
  },
  proof: {
    label: "Tõendid",
    title: "Ekraanipildid reklaamikontolt ja vestlustest",
    description:
      "Juhtumisse on jäetud reaalsed lõiked liidivormide ja registreerimiste kohta: 328 liidi hinnaga €2.7, 360 liidi hinnaga €3.44, 56 lõpetatud registreerimist ning kampaaniad vene ja eesti sihtrühmale.",
    imageAlts: [
      "Vestluse ekraanipilt: 328 liidi hinnaga €2.7 liidi kohta laagritele 12.05–16.05",
      "Vestluse ekraanipilt: 360 liidi hinnaga €3.44 ja 56 lõpetatud registreerimist hinnaga €20.62",
      "Reklaamikonto ekraanipilt: eestikeelne linnalaagri kampaania, 237 liidi hinnaga €2.74",
      "Reklaamikonto ekraanipilt: venekeelne väljasõidulaagri kampaania, 184 liidi hinnaga €3.26",
      "Reklaamikonto ekraanipilt: eestikeelne väljasõidulaagri kampaania, 144 liidi hinnaga €2.08",
      "Reklaamikonto ekraanipilt: veebilehe registreerimised ja liidivormid linna- ja väljasõidulaagri kohta",
    ],
  },
  faq: {
    label: "FAQ",
    title: "Numbrid lühidalt",
    items: [
      {
        question: "Millise tulemuse sai Suvelaagrid?",
        answer:
          "Värbamishooajal saab projekt alates 565 liidist kuus. Eraldi lõikes 12.05–16.05 saime 328 liidi hinnaga €2.7 liidi kohta.",
      },
      {
        question: "Miks kasutasite nii liidivormi kui ka registreerimist veebilehel?",
        answer:
          "Liidivorm andis haldurile kiire päringute mahu, veebilehe registreerimine aga aitas kontrollida teadlikumat nõudlust ja arvestada lõpetatud registreerimise hinda.",
      },
      {
        question: "Milliseid laagreid reklaamiti?",
        answer:
          "Reklaam töötas laste värbamiseks päevasesse linnalaagrisse ja laste väljasõidulaagritesse Eestis vene- ja eestikeelsele sihtrühmale.",
      },
    ],
  },
  nextStep: {
    label: "Järgmine samm",
    title: "Kas soovite hooajaks rühmad täita ilma reklaamikaoseta?",
    text: "Näidake meile hooajalisust, geograafiat ja praegust päringu hinda. Hindame, kus on parem suunata liiklus liidivormile ja kus juba viia kasutaja registreerimisele või ostule.",
    cta: "Aruta projekti",
  },
};

export const suvelaagridContent: Record<Language, SuvelaagridContent> = {
  ru,
  en,
  et,
};
