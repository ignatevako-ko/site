import type {
  CaseCta,
  CaseFact,
  CaseFaqItem,
  CaseRelatedLink,
  CaseHeroPanelContent,
  CaseTableColumn,
  CaseTableRow,
} from "@/components/cases/case-sections";
import type { Language } from "@/data/site-content";

export type SadhuBoardsContent = {
  badge: string;
  category: string;
  heroTitle: string;
  heroDescription: string;
  primaryCta: CaseCta;
  secondaryCta: CaseCta;
  heroPanel: CaseHeroPanelContent;
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
  faq: { label: string; title: string; items: CaseFaqItem[] };
  related: { label: string; title: string; links: CaseRelatedLink[] };
  nextStep: { label: string; title: string; text: string; cta: string };
};

const ru: SadhuBoardsContent = {
  badge: "Реальный кейс",
  category: "E-commerce / Молдова",
  heroTitle: "Sadhu Boards: цена лида ниже в 15 раз и 300–500 заявок в месяц",
  heroDescription:
    "Магазин досок для гвоздестояния Sadhu Boards продавал нишевый товар, о котором большая часть аудитории узнает впервые. Мы перестроили рекламу так, что заявка стала дешевле в 15 раз, а поток заявок и покупок стал предсказуемым каждый месяц.",
  primaryCta: { label: "Хочу также", href: "#contacts" },
  secondaryCta: { label: "Смотреть цифры", href: "#numbers" },
  heroPanel: {
    label: "Экономика месяца",
    title: "Стабильный поток вместо всплесков",
    badge: "Sadhu Boards",
    segments: [
      { label: "Гео", value: "Молдова" },
      { label: "Канал", value: "Meta Ads" },
      { label: "Товар", value: "доски для гвоздестояния" },
    ],
    economyBadge: "Результат месяца",
    economyValue: "€750 → 30–50 покупок",
    economyNote:
      "Заявка обходится в €1,5–2,5, покупка — в €15–25, а конверсия из заявки в покупку держится около 10%.",
  },
  facts: [
    { label: "Клиент", value: "Sadhu Boards, магазин досок для гвоздестояния" },
    { label: "География", value: "Молдова" },
    { label: "Канал", value: "Meta Ads: Facebook и Instagram" },
    { label: "Бюджет", value: "€750 в месяц" },
    { label: "Главный результат", value: "Цена заявки снизилась в 15 раз" },
    { label: "Исполнитель", value: "Do.Marketing, агентство в Таллинне" },
    { label: "Источник данных", value: "Рекламный кабинет Meta Ads и статистика магазина" },
  ],
  main: {
    label: "Главное в кейсе",
    title: "Нишевый товар продается, когда реклама объясняет, а не просто показывает",
    paragraphs: [
      "Агентство Do.Marketing (Таллинн, Эстония) снизило стоимость заявки для магазина досок садху Sadhu Boards в 15 раз: при бюджете €750 в месяц проект получает 300–500 заявок по €1,5–2,5 и 30–50 покупок по €15–25.",
      "Доска для гвоздестояния — товар, который сложно продать «в лоб»: человек либо уже в теме практик, либо видит доску впервые и не понимает, зачем она нужна. Из-за этого лид на старте стоил дорого — реклама била в широкую аудиторию, которой сначала нужно объяснить смысл, а не предложить купить.",
      "Мы перестроили кампании и креативы под два разных состояния аудитории: тем, кто уже знает практику, — товар, цену и доставку; тем, кто видит доску впервые, — объяснение эффекта. В результате цена заявки снизилась в 15 раз, а проект стабильно получает 300–500 заявок и 30–50 покупок в месяц при бюджете €750.",
    ],
    ctaLabel: "Обсудить свой товар",
  },
  cards: [
    {
      label: "Задача",
      title: "Сделать нишевый товар предсказуемо продаваемым",
      text: "Заявки были дорогими и нерегулярными: реклама не различала тех, кто уже знаком с практикой, и тех, кто видит доску впервые.",
    },
    {
      label: "Подход",
      title: "Разные сообщения для разных состояний аудитории",
      text: "Объяснение эффекта для холодной аудитории и конкретика по товару, цене и доставке — для тех, кто уже готов покупать.",
    },
    {
      label: "Результат",
      title: "Лид дешевле в 15 раз",
      text: "При бюджете €750 в месяц проект получает 300–500 заявок и 30–50 покупок — стабильно, а не всплесками.",
    },
  ],
  table: {
    label: "Цифры",
    title: "Экономика месяца: €750 бюджета, 300–500 заявок",
    description:
      "Бюджет, заявки и покупки — фактические ежемесячные показатели проекта. Цена заявки и покупки посчитаны из этих значений.",
    columns: [
      { key: "metric", label: "Показатель" },
      { key: "value", label: "Значение", align: "right" },
    ],
    rows: [
      { metric: "Рекламный бюджет в месяц", value: "€750" },
      { metric: "Заявки в месяц", value: "300–500" },
      { metric: "Цена заявки (расчет)", value: "€1,5–2,5" },
      { metric: "Покупки в месяц", value: "30–50" },
      { metric: "Цена покупки (расчет)", value: "€15–25" },
    ],
    total: { metric: "Конверсия из заявки в покупку", value: "≈10%" },
    note: "Цена заявки и цена покупки посчитаны как месячный бюджет, деленный на нижнюю и верхнюю границу количества заявок и покупок.",
  },
  mechanics: {
    label: "Что сделали",
    title: "Как снизили цену заявки в 15 раз",
    steps: [
      "Разделили аудиторию на тех, кто уже знаком с практикой гвоздестояния, и тех, кто видит доску впервые: этим двум группам нужны совершенно разные сообщения.",
      "Для холодной аудитории сделали креативы, которые сначала объясняют эффект и снимают страх, и только потом ведут к покупке.",
      "Для теплой аудитории убрали лишние объяснения и оставили конкретику: модель, цена, доставка, следующий шаг.",
      "Убрали связки, которые приносили дешевые, но нецелевые обращения, — экономику проекта определяет цена покупки, а не цена заявки.",
      "Зафиксировали бюджет на уровне €750 в месяц и держали объем заявок и покупок стабильным, не разгоняя расходы ради разовых всплесков.",
    ],
  },
  faq: {
    label: "Вопросы и ответы",
    title: "Частые вопросы про рекламу нишевого товара",
    items: [
      {
        question: "Насколько удалось снизить цену лида для Sadhu Boards?",
        answer:
          "В 15 раз по сравнению со стартовыми показателями. Сейчас при бюджете €750 в месяц проект получает 300–500 заявок, то есть €1,5–2,5 за заявку.",
      },
      {
        question: "Сколько покупок приносит реклама каждый месяц?",
        answer:
          "30–50 покупок в месяц при бюджете €750. Это около €15–25 за покупку и примерно 10% конверсии из заявки в покупку.",
      },
      {
        question: "Как продавать нишевый товар, о котором аудитория ничего не знает?",
        answer:
          "Разделить коммуникацию по состоянию аудитории. Холодной аудитории креатив сначала объясняет эффект и снимает возражения, а теплой сразу дает модель, цену и условия доставки.",
      },
      {
        question: "Почему в e-commerce важно смотреть не только на цену заявки?",
        answer:
          "Дешевая заявка часто оказывается нецелевой. Мы отключали связки, которые давали много дешевых обращений без покупок, и ориентировались на стоимость покупки.",
      },
      {
        question: "Можно ли повторить результат для другого нишевого товара?",
        answer:
          "Да, если товар решает понятную задачу и его можно объяснить в креативе. Механика та же: сегментация по осведомленности аудитории, разные сообщения и оптимизация по покупкам, а не по кликам.",
      },
      {
        question: "Какое агентство вело эту рекламу?",
        answer:
          "Кампании вел Do.Marketing — агентство перформанс-маркетинга из Таллинна (OÜ Turundusagendid). Мы ведем Meta Ads и Google Ads для интернет-магазинов в Эстонии и за ее пределами.",
      },
      {
        question: "Откуда взяты цифры этого кейса?",
        answer:
          "Бюджет €750 в месяц, 300–500 заявок и 30–50 покупок — фактические данные рекламного кабинета Meta Ads и статистики магазина. Цена заявки €1,5–2,5 и цена покупки €15–25 посчитаны из этих значений.",
      },
    ],
  },
  related: {
    label: "Связанные материалы",
    title: "Что почитать дальше",
    links: [
      {
        href: "/ru/meta-ads",
        label: "Meta Ads для интернет-магазина",
        note: "Кампании на покупки и снижение стоимости заказа",
      },
      {
        href: "/ru/marketing-audit",
        label: "Аудит рекламы: где теряется бюджет",
        note: "Разбор кампаний до того, как менять бюджет",
      },
      {
        href: "/cases/womens-activewear",
        label: "Кейс: ROAS 15 в Black Friday",
        note: "$13 571 выручки при бюджете $1 179",
      },
      {
        href: "/cases/profftech",
        label: "Кейс Profftech: 751 заявка по €1,48",
        note: "8 кампаний на 5 направлений обучения",
      },
    ],
  },
  nextStep: {
    label: "Следующий шаг",
    title: "Продаете нишевый товар и заявки стоят дорого?",
    text: "Расскажите про товар, средний чек и текущую стоимость заявки. Разберем, на каком этапе теряются деньги, и предложим план по снижению стоимости покупки.",
    cta: "Обсудить проект",
  },
};

const en: SadhuBoardsContent = {
  badge: "Real case study",
  category: "E-commerce / Moldova",
  heroTitle: "Sadhu Boards: 15x cheaper leads and 300–500 enquiries a month",
  heroDescription:
    "Sadhu Boards sells nail boards — a niche product most of the audience encounters for the first time. We rebuilt the advertising so the lead became 15 times cheaper, and the flow of leads and purchases became predictable every month.",
  primaryCta: { label: "I want this too", href: "#contacts" },
  secondaryCta: { label: "See the numbers", href: "#numbers" },
  heroPanel: {
    label: "Monthly economics",
    title: "A steady flow instead of spikes",
    badge: "Sadhu Boards",
    segments: [
      { label: "Geography", value: "Moldova" },
      { label: "Channel", value: "Meta Ads" },
      { label: "Product", value: "nail boards" },
    ],
    economyBadge: "Monthly result",
    economyValue: "€750 → 30–50 purchases",
    economyNote:
      "A lead costs €1.5–2.5, a purchase €15–25, and lead-to-purchase conversion holds at around 10%.",
  },
  facts: [
    { label: "Client", value: "Sadhu Boards, nail board store" },
    { label: "Geography", value: "Moldova" },
    { label: "Channel", value: "Meta Ads: Facebook and Instagram" },
    { label: "Budget", value: "€750 per month" },
    { label: "Key result", value: "Lead cost reduced 15 times" },
    { label: "Agency", value: "Do.Marketing, agency based in Tallinn" },
    { label: "Data source", value: "Meta Ads account and store analytics" },
  ],
  main: {
    label: "Case highlights",
    title: "A niche product sells when advertising explains, not just displays",
    paragraphs: [
      "Do.Marketing, a performance marketing agency based in Tallinn, Estonia, cut the cost per lead for the Sadhu Boards nail board store by 15 times: on a €750 monthly budget the project receives 300–500 leads at €1.5–2.5 and 30–50 purchases at €15–25.",
      "A nail board is hard to sell head-on: a person is either already into the practice or sees the board for the first time and does not understand what it is for. That is why leads were expensive at the start — the ads hit a broad audience that first needs the point explained, not a purchase offered.",
      "We rebuilt campaigns and creatives around two different audience states: for people who already know the practice — the product, the price and delivery; for people seeing the board for the first time — an explanation of the effect. As a result the lead cost dropped 15 times, and the project consistently receives 300–500 leads and 30–50 purchases a month on a €750 budget.",
    ],
    ctaLabel: "Discuss my product",
  },
  cards: [
    {
      label: "Challenge",
      title: "Make a niche product sell predictably",
      text: "Leads were expensive and irregular: the ads did not distinguish people already familiar with the practice from people seeing the board for the first time.",
    },
    {
      label: "Approach",
      title: "Different messages for different audience states",
      text: "An explanation of the effect for cold audiences, and specifics about product, price and delivery for people already ready to buy.",
    },
    {
      label: "Result",
      title: "A lead 15 times cheaper",
      text: "On a €750 monthly budget the project receives 300–500 leads and 30–50 purchases — steadily, not in spikes.",
    },
  ],
  table: {
    label: "The numbers",
    title: "Monthly economics: €750 budget, 300–500 leads",
    description:
      "Budget, leads and purchases are the project's actual monthly figures. Cost per lead and per purchase are calculated from them.",
    columns: [
      { key: "metric", label: "Metric" },
      { key: "value", label: "Value", align: "right" },
    ],
    rows: [
      { metric: "Monthly ad budget", value: "€750" },
      { metric: "Leads per month", value: "300–500" },
      { metric: "Cost per lead (calculated)", value: "€1.5–2.5" },
      { metric: "Purchases per month", value: "30–50" },
      { metric: "Cost per purchase (calculated)", value: "€15–25" },
    ],
    total: { metric: "Lead-to-purchase conversion", value: "≈10%" },
    note: "Cost per lead and per purchase are calculated as the monthly budget divided by the lower and upper bound of leads and purchases.",
  },
  mechanics: {
    label: "What we did",
    title: "How we cut the lead cost 15 times",
    steps: [
      "Split the audience into people already familiar with the nail-board practice and people seeing the board for the first time: these two groups need completely different messages.",
      "For cold audiences we built creatives that first explain the effect and remove the fear, and only then lead to a purchase.",
      "For warm audiences we removed the extra explanations and kept the specifics: model, price, delivery, next step.",
      "Switched off combinations that produced cheap but irrelevant enquiries — the project's economics are defined by cost per purchase, not cost per lead.",
      "Fixed the budget at €750 per month and kept the volume of leads and purchases stable instead of inflating spend for one-off spikes.",
    ],
  },
  faq: {
    label: "Questions and answers",
    title: "Common questions about advertising a niche product",
    items: [
      {
        question: "How much was the lead cost reduced for Sadhu Boards?",
        answer:
          "15 times compared with the starting figures. On a €750 monthly budget the project now receives 300–500 leads, which is €1.5–2.5 per lead.",
      },
      {
        question: "How many purchases does advertising bring every month?",
        answer:
          "30–50 purchases a month on a €750 budget. That is about €15–25 per purchase and roughly 10% lead-to-purchase conversion.",
      },
      {
        question: "How do you sell a niche product the audience knows nothing about?",
        answer:
          "Split communication by audience awareness. For cold audiences the creative first explains the effect and answers objections; for warm audiences it goes straight to model, price and delivery terms.",
      },
      {
        question: "Why is cost per lead not the only metric to watch in e-commerce?",
        answer:
          "A cheap lead is often an irrelevant one. We switched off combinations that produced many cheap enquiries without purchases and steered by cost per purchase instead.",
      },
      {
        question: "Can this result be repeated for another niche product?",
        answer:
          "Yes, if the product solves a clear problem and can be explained in a creative. The mechanics are the same: segmentation by audience awareness, different messages and optimisation for purchases rather than clicks.",
      },
      {
        question: "Which agency ran this advertising?",
        answer:
          "The campaigns were run by Do.Marketing — a performance marketing agency based in Tallinn, Estonia (OÜ Turundusagendid). We run Meta Ads and Google Ads for online stores in Estonia and beyond.",
      },
      {
        question: "Where do the figures in this case study come from?",
        answer:
          "The €750 monthly budget, 300–500 leads and 30–50 purchases are actual data from the Meta Ads account and the store analytics. The €1.5–2.5 cost per lead and €15–25 cost per purchase are calculated from them.",
      },
    ],
  },
  related: {
    label: "Related",
    title: "What to read next",
    links: [
      {
        href: "/en/meta-ads",
        label: "Meta Ads for an online store",
        note: "Purchase campaigns and a lower cost per order",
      },
      {
        href: "/en/marketing-audit",
        label: "Advertising audit: where the budget leaks",
        note: "A campaign review before changing the budget",
      },
      {
        href: "/cases/womens-activewear",
        label: "Case: ROAS 15 on Black Friday",
        note: "$13,571 in revenue on a $1,179 budget",
      },
      {
        href: "/cases/profftech",
        label: "Case Profftech: 751 leads at €1.48",
        note: "8 campaigns across 5 training programmes",
      },
    ],
  },
  nextStep: {
    label: "Next step",
    title: "Selling a niche product and paying too much per lead?",
    text: "Tell us about the product, the average order value and your current cost per lead. We will find where the money is lost and propose a plan to bring the cost per purchase down.",
    cta: "Discuss a project",
  },
};

const et: SadhuBoardsContent = {
  badge: "Reaalne juhtum",
  category: "E-commerce / Moldova",
  heroTitle: "Sadhu Boards: 15 korda odavam päring ja 300–500 päringut kuus",
  heroDescription:
    "Sadhu Boards müüb naelalaudu — nišitoodet, millega suurem osa sihtrühmast puutub kokku esimest korda. Ehitasime reklaami ümber nii, et päring muutus 15 korda odavamaks ning päringute ja ostude voog muutus iga kuu prognoositavaks.",
  primaryCta: { label: "Soovin sama", href: "#contacts" },
  secondaryCta: { label: "Vaata numbreid", href: "#numbers" },
  heroPanel: {
    label: "Kuu ökonoomika",
    title: "Stabiilne voog hüpete asemel",
    badge: "Sadhu Boards",
    segments: [
      { label: "Geograafia", value: "Moldova" },
      { label: "Kanal", value: "Meta Ads" },
      { label: "Toode", value: "naelalauad" },
    ],
    economyBadge: "Kuu tulemus",
    economyValue: "€750 → 30–50 ostu",
    economyNote:
      "Päring maksab €1,5–2,5, ost €15–25 ning konversioon päringust ostuks püsib umbes 10% juures.",
  },
  facts: [
    { label: "Klient", value: "Sadhu Boards, naelalaudade pood" },
    { label: "Geograafia", value: "Moldova" },
    { label: "Kanal", value: "Meta Ads: Facebook ja Instagram" },
    { label: "Eelarve", value: "€750 kuus" },
    { label: "Peamine tulemus", value: "Päringu hind langes 15 korda" },
    { label: "Teostaja", value: "Do.Marketing, agentuur Tallinnas" },
    { label: "Andmete allikas", value: "Meta Ads konto ja poe statistika" },
  ],
  main: {
    label: "Juhtumi tuum",
    title: "Nišitoode müüb siis, kui reklaam selgitab, mitte lihtsalt ei näita",
    paragraphs: [
      "Agentuur Do.Marketing (Tallinn, Eesti) langetas naelalaudade poe Sadhu Boards päringu hinda 15 korda: €750 kuueelarvega saab projekt 300–500 päringut hinnaga €1,5–2,5 ja 30–50 ostu hinnaga €15–25.",
      "Naelalauda on raske otse müüa: inimene kas juba tunneb praktikat või näeb lauda esimest korda ega saa aru, milleks see on. Seetõttu oli päring alguses kallis — reklaam tabas laia sihtrühma, kellele tuleb esmalt mõte selgitada, mitte ostu pakkuda.",
      "Ehitasime kampaaniad ja kreatiivid ümber kahe erineva sihtrühma seisundi järgi: neile, kes praktikat juba tunnevad — toode, hind ja tarne; neile, kes lauda esimest korda näevad — efekti selgitus. Selle tulemusel langes päringu hind 15 korda ja projekt saab €750 eelarvega stabiilselt 300–500 päringut ning 30–50 ostu kuus.",
    ],
    ctaLabel: "Aruta oma toodet",
  },
  cards: [
    {
      label: "Ülesanne",
      title: "Muuta nišitoote müük prognoositavaks",
      text: "Päringud olid kallid ja ebaregulaarsed: reklaam ei eristanud neid, kes praktikat juba tundsid, ja neid, kes lauda esimest korda nägid.",
    },
    {
      label: "Lähenemine",
      title: "Erinevad sõnumid erinevatele sihtrühma seisunditele",
      text: "Efekti selgitus külmale sihtrühmale ning konkreetsus toote, hinna ja tarne kohta neile, kes on juba ostuvalmis.",
    },
    {
      label: "Tulemus",
      title: "15 korda odavam päring",
      text: "€750 kuueelarvega saab projekt 300–500 päringut ja 30–50 ostu — stabiilselt, mitte hüpetena.",
    },
  ],
  table: {
    label: "Numbrid",
    title: "Kuu ökonoomika: €750 eelarve, 300–500 päringut",
    description:
      "Eelarve, päringud ja ostud on projekti tegelikud kuunäitajad. Päringu ja ostu hind on nendest arvutatud.",
    columns: [
      { key: "metric", label: "Näitaja" },
      { key: "value", label: "Väärtus", align: "right" },
    ],
    rows: [
      { metric: "Reklaamieelarve kuus", value: "€750" },
      { metric: "Päringud kuus", value: "300–500" },
      { metric: "Päringu hind (arvutuslik)", value: "€1,5–2,5" },
      { metric: "Ostud kuus", value: "30–50" },
      { metric: "Ostu hind (arvutuslik)", value: "€15–25" },
    ],
    total: { metric: "Konversioon päringust ostuks", value: "≈10%" },
    note: "Päringu ja ostu hind on arvutatud kuueelarve jagamisel päringute ja ostude arvu alumise ning ülemise piiriga.",
  },
  mechanics: {
    label: "Mida me tegime",
    title: "Kuidas langetasime päringu hinda 15 korda",
    steps: [
      "Jagasime sihtrühma nendeks, kes naelalaudade praktikat juba tunnevad, ja nendeks, kes lauda esimest korda näevad: need kaks rühma vajavad täiesti erinevaid sõnumeid.",
      "Külmale sihtrühmale tegime kreatiivid, mis kõigepealt selgitavad efekti ja maandavad hirmu ning alles seejärel viivad ostuni.",
      "Soojale sihtrühmale eemaldasime liigsed selgitused ja jätsime konkreetsuse: mudel, hind, tarne, järgmine samm.",
      "Lülitasime välja kombinatsioonid, mis tõid odavaid, kuid mittesihipäraseid pöördumisi — projekti ökonoomika määrab ostu, mitte päringu hind.",
      "Fikseerisime eelarve €750 kuus ja hoidsime päringute ning ostude mahu stabiilsena, ilma et oleksime kulusid ühekordsete hüpete nimel paisutanud.",
    ],
  },
  faq: {
    label: "Küsimused ja vastused",
    title: "Levinud küsimused nišitoote reklaami kohta",
    items: [
      {
        question: "Kui palju langes Sadhu Boardsi päringu hind?",
        answer:
          "15 korda võrreldes alguse näitajatega. Praegu saab projekt €750 kuueelarvega 300–500 päringut, mis teeb €1,5–2,5 päringu kohta.",
      },
      {
        question: "Kui palju oste toob reklaam igas kuus?",
        answer:
          "30–50 ostu kuus €750 eelarvega. See teeb umbes €15–25 ostu kohta ja ligikaudu 10% konversiooni päringust ostuks.",
      },
      {
        question: "Kuidas müüa nišitoodet, millest sihtrühm midagi ei tea?",
        answer:
          "Jagada kommunikatsioon sihtrühma teadlikkuse järgi. Külmale sihtrühmale selgitab kreatiiv esmalt efekti ja maandab vastuväited, soojale annab kohe mudeli, hinna ja tarnetingimused.",
      },
      {
        question: "Miks ei tohi e-kaubanduses vaadata ainult päringu hinda?",
        answer:
          "Odav päring osutub sageli mittesihipäraseks. Lülitasime välja kombinatsioonid, mis andsid palju odavaid pöördumisi ilma ostudeta, ja lähtusime ostu hinnast.",
      },
      {
        question: "Kas tulemust saab korrata teise nišitoote puhul?",
        answer:
          "Jah, kui toode lahendab arusaadava probleemi ja seda saab kreatiivis selgitada. Mehaanika on sama: segmenteerimine teadlikkuse järgi, erinevad sõnumid ja optimeerimine ostudele, mitte klikkidele.",
      },
      {
        question: "Milline agentuur seda reklaami juhtis?",
        answer:
          "Kampaaniaid juhtis Do.Marketing — Tallinnas asuv tulemusturunduse agentuur (OÜ Turundusagendid). Teeme Meta Ads ja Google Ads kampaaniaid e-poodidele Eestis ja väljaspool.",
      },
      {
        question: "Kust pärinevad selle töö numbrid?",
        answer:
          "€750 kuueelarve, 300–500 päringut ja 30–50 ostu on Meta Ads konto ja poe statistika tegelikud andmed. Päringu hind €1,5–2,5 ja ostu hind €15–25 on nendest arvutatud.",
      },
    ],
  },
  related: {
    label: "Seotud materjalid",
    title: "Mida edasi lugeda",
    links: [
      {
        href: "/et/meta-ads",
        label: "Meta Ads e-poe jaoks",
        note: "Ostukampaaniad ja madalam tellimuse hind",
      },
      {
        href: "/et/marketing-audit",
        label: "Reklaami audit: kus eelarve kaob",
        note: "Kampaaniate analüüs enne eelarve muutmist",
      },
      {
        href: "/cases/womens-activewear",
        label: "Töö: ROAS 15 Black Fridayl",
        note: "$13 571 käivet $1 179 eelarvega",
      },
      {
        href: "/cases/profftech",
        label: "Töö Profftech: 751 päringut hinnaga €1,48",
        note: "8 kampaaniat 5 õppesuunal",
      },
    ],
  },
  nextStep: {
    label: "Järgmine samm",
    title: "Kas müüte nišitoodet ja päringud on kallid?",
    text: "Rääkige tootest, keskmisest ostukorvist ja praegusest päringu hinnast. Vaatame, millises etapis raha kaob, ja pakume plaani ostu hinna langetamiseks.",
    cta: "Aruta projekti",
  },
};

export const sadhuBoardsContent: Record<Language, SadhuBoardsContent> = {
  ru,
  en,
  et,
};
