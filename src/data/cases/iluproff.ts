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

export type IluproffContent = {
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

const ru: IluproffContent = {
  badge: "Реальный кейс",
  category: "Beauty / салон красоты, Эстония",
  heroTitle: "ILUPROFF: 34 клиента на SMAS-лифтинг по €17,50",
  heroDescription:
    "Салон красоты ILUPROFF в Эстонии продвигал SMAS-лифтинг — дорогую аппаратную процедуру, которую нельзя продать одним постом. Мы перебрали форматы, языки и сегменты аудитории, нашли рабочую связку и привели 34 клиента при бюджете €600.",
  primaryCta: { label: "Хочу также", href: "#contacts" },
  secondaryCta: { label: "Смотреть цифры", href: "#numbers" },
  heroPanel: {
    label: "Что тестировали",
    title: "Три плоскости теста",
    badge: "Meta Ads",
    segments: [
      { label: "Форматы", value: "видео и статика" },
      { label: "Языки", value: "русский и эстонский" },
      { label: "Сегменты", value: "по возрасту и интересам" },
    ],
    economyBadge: "Бюджет и чек",
    economyValue: "€600 → чек €125–537",
    economyNote:
      "Привлечение клиента стоило от 3% до 14% стоимости самой процедуры — в премиальной косметологии это очень комфортная экономика.",
  },
  facts: [
    { label: "Клиент", value: "Салон красоты ILUPROFF" },
    { label: "Услуга", value: "SMAS-лифтинг, аппаратная косметология" },
    { label: "География", value: "Эстония" },
    { label: "Канал", value: "Meta Ads: Facebook и Instagram" },
    { label: "Языки рекламы", value: "Русский и эстонский" },
    { label: "Исполнитель", value: "Do.Marketing, агентство в Таллинне" },
    { label: "Источник данных", value: "Рекламный кабинет Meta Ads и записи салона" },
  ],
  main: {
    label: "Главное в кейсе",
    title: "Дорогую процедуру продает не скидка, а точная связка",
    paragraphs: [
      "Агентство Do.Marketing (Таллинн, Эстония) привлекло для салона красоты ILUPROFF 34 клиента на процедуру SMAS-лифтинга по €17,50 при рекламном бюджете €600 в Meta Ads на русском и эстонском языках.",
      "SMAS-лифтинг стоит от €125 до €537 в зависимости от зоны, поэтому решение о записи принимается не импульсивно. Такая услуга требует не одного универсального объявления, а перебора: какой формат объясняет эффект, на каком языке говорит аудитория, какой сегмент вообще готов платить за аппаратную косметологию.",
      "Мы последовательно тестировали форматы, языки и сегменты, отключали слабые связки и переливали бюджет в те, что давали записи. В итоге при бюджете €600 салон получил 34 клиента — по €17,50 за клиента на процедуру, которая стоит в 7–30 раз дороже привлечения.",
    ],
    ctaLabel: "Обсудить свой салон",
  },
  cards: [
    {
      label: "Задача",
      title: "Загрузить дорогую аппаратную процедуру",
      text: "Нужны были не подписчики и не переписки, а записи на конкретную услугу — SMAS-лифтинг с чеком €125–537.",
    },
    {
      label: "Подход",
      title: "Тест форматов, языков и сегментов",
      text: "Вместо одного универсального объявления мы искали сильнейшую связку: разные креативы, русский и эстонский язык, разные сегменты аудитории.",
    },
    {
      label: "Результат",
      title: "Клиент за €17,50",
      text: "34 клиента при бюджете €600. Стоимость привлечения составила от 3% до 14% чека процедуры в зависимости от выбранной зоны.",
    },
  ],
  table: {
    label: "Цифры",
    title: "Экономика привлечения клиента на SMAS-лифтинг",
    description:
      "Бюджет и количество клиентов — фактические данные кампании. Выручка и ROAS показаны диапазоном, потому что чек процедуры зависит от зоны.",
    columns: [
      { key: "metric", label: "Показатель" },
      { key: "value", label: "Значение", align: "right" },
    ],
    rows: [
      { metric: "Рекламный бюджет", value: "€600" },
      { metric: "Привлеченные клиенты", value: "34" },
      { metric: "Стоимость клиента", value: "€17,50" },
      { metric: "Чек процедуры", value: "€125–537" },
      { metric: "Выручка (расчет по чеку)", value: "€4 250–18 258" },
    ],
    total: { metric: "ROAS (расчет)", value: "×7–30" },
    note: "Выручка и ROAS рассчитаны как 34 клиента, умноженные на нижнюю и верхнюю границу чека процедуры. Фактическая сумма зависит от того, какие зоны выбрали клиенты.",
  },
  mechanics: {
    label: "Что сделали",
    title: "Как искали рабочую связку",
    steps: [
      "Разобрали услугу с точки зрения клиента: какой эффект дает SMAS-лифтинг, кому он подходит и чем отличается от более дешевых процедур.",
      "Запустили параллельно несколько форматов креативов — видео с процедурой и статичные макеты с объяснением результата.",
      "Продублировали кампании на русском и эстонском языках, чтобы не терять ни один из сегментов эстонского рынка.",
      "Тестировали сегменты аудитории по возрасту и интересам и отключали те, что давали дорогие или нецелевые обращения.",
      "Оставили бюджет на самой сильной связке формата, языка и сегмента — именно она и дала основную часть из 34 записей.",
    ],
  },
  faq: {
    label: "Вопросы и ответы",
    title: "Частые вопросы про рекламу салона красоты в Эстонии",
    items: [
      {
        question: "Сколько стоит привлечь клиента на SMAS-лифтинг через рекламу в Эстонии?",
        answer:
          "В этом кейсе клиент обошелся в €17,50: бюджет €600 принес 34 клиента. При стоимости процедуры €125–537 это от 3% до 14% чека.",
      },
      {
        question: "Какой бюджет нужен салону красоты для старта?",
        answer:
          "Этот результат получен на бюджете €600. Такой суммы хватает, чтобы протестировать несколько форматов, два языка и несколько сегментов и найти рабочую связку.",
      },
      {
        question: "Почему рекламу дублировали на двух языках?",
        answer:
          "В Эстонии часть аудитории ищет процедуры на русском, часть — на эстонском. Дублирование кампаний на двух языках позволяет не терять половину рынка и сравнить, какой сегмент дешевле.",
      },
      {
        question: "Какой ROAS у рекламы косметологических процедур?",
        answer:
          "В этом кейсе расчетный ROAS составляет от ×7 до ×30 в зависимости от того, какую зону выбрал клиент: 34 клиента при чеке €125–537 дают выручку от €4 250 до €18 258 при бюджете €600.",
      },
      {
        question: "Сколько времени занимает поиск рабочей связки?",
        answer:
          "Обычно первые выводы по форматам и сегментам видны на первой-второй неделе открутки. Дальше бюджет переливается в лучшие связки, и стоимость записи снижается.",
      },
      {
        question: "Какое агентство вело эту рекламу?",
        answer:
          "Кампании вел Do.Marketing — агентство перформанс-маркетинга из Таллинна (OÜ Turundusagendid). Мы ведем Meta Ads и Google Ads для бизнеса в Эстонии на русском, эстонском и английском языках.",
      },
      {
        question: "Откуда взяты цифры этого кейса?",
        answer:
          "Бюджет €600, 34 клиента и стоимость клиента €17,50 — данные рекламного кабинета Meta Ads и записей салона. Выручка и ROAS показаны диапазоном и посчитаны из стоимости процедуры €125–537.",
      },
    ],
  },
  related: {
    label: "Связанные материалы",
    title: "Что почитать дальше",
    links: [
      {
        href: "/ru/meta-ads",
        label: "Реклама салона красоты в Meta Ads",
        note: "Записи на процедуры вместо подписчиков",
      },
      {
        href: "/ru/smm",
        label: "SMM для салона красоты в Таллинне",
        note: "Контент, который догревает до записи",
      },
      {
        href: "/ru/seo",
        label: "SEO-продвижение в Эстонии",
        note: "Чтобы салон находили в поиске, а не только в рекламе",
      },
      {
        href: "/cases/cosmetics-store",
        label: "Кейс: ROAS 30 в магазине косметики в Эстонии",
        note: "114 продаж по €2,43 при бюджете €277",
      },
    ],
  },
  nextStep: {
    label: "Следующий шаг",
    title: "Хотите загрузить дорогие процедуры записями?",
    text: "Расскажите, какие услуги нужно продвигать, какой у них чек и на каких языках говорит ваша аудитория. Посчитаем допустимую стоимость записи и предложим план теста.",
    cta: "Обсудить проект",
  },
};

const en: IluproffContent = {
  badge: "Real case study",
  category: "Beauty / beauty salon, Estonia",
  heroTitle: "ILUPROFF: 34 clients for SMAS lifting at €17.50 each",
  heroDescription:
    "Estonian beauty salon ILUPROFF promoted SMAS lifting — an expensive device-based procedure you cannot sell with a single post. We tested formats, languages and audience segments, found the winning combination and brought in 34 clients on a €600 budget.",
  primaryCta: { label: "I want this too", href: "#contacts" },
  secondaryCta: { label: "See the numbers", href: "#numbers" },
  heroPanel: {
    label: "What we tested",
    title: "Three test dimensions",
    badge: "Meta Ads",
    segments: [
      { label: "Formats", value: "video and static" },
      { label: "Languages", value: "Russian and Estonian" },
      { label: "Segments", value: "by age and interests" },
    ],
    economyBadge: "Budget and price point",
    economyValue: "€600 → €125–537 price point",
    economyNote:
      "Acquiring a client cost between 3% and 14% of the procedure price — very comfortable economics for premium aesthetics.",
  },
  facts: [
    { label: "Client", value: "ILUPROFF beauty salon" },
    { label: "Service", value: "SMAS lifting, device-based aesthetics" },
    { label: "Geography", value: "Estonia" },
    { label: "Channel", value: "Meta Ads: Facebook and Instagram" },
    { label: "Ad languages", value: "Russian and Estonian" },
    { label: "Agency", value: "Do.Marketing, agency based in Tallinn" },
    { label: "Data source", value: "Meta Ads account and salon bookings" },
  ],
  main: {
    label: "Case highlights",
    title: "An expensive procedure is sold by precision, not by discounts",
    paragraphs: [
      "Do.Marketing, a performance marketing agency based in Tallinn, Estonia, brought 34 clients for SMAS lifting to the ILUPROFF beauty salon at €17.50 per client on a €600 Meta Ads budget, running campaigns in Russian and Estonian.",
      "SMAS lifting costs between €125 and €537 depending on the treated area, so booking is never an impulse decision. A service like this needs more than one universal ad — it needs testing: which format explains the effect, which language the audience speaks and which segment is genuinely ready to pay for device-based aesthetics.",
      "We tested formats, languages and segments one after another, switched off the weak combinations and moved the budget into the ones that produced bookings. On a €600 budget the salon received 34 clients — at €17.50 per client for a procedure that costs 7 to 30 times more than the acquisition.",
    ],
    ctaLabel: "Discuss my salon",
  },
  cards: [
    {
      label: "Challenge",
      title: "Fill the schedule for an expensive device procedure",
      text: "The goal was not followers or chats, but bookings for one specific service — SMAS lifting priced at €125–537.",
    },
    {
      label: "Approach",
      title: "Testing formats, languages and segments",
      text: "Instead of one universal ad we searched for the strongest combination: different creatives, Russian and Estonian, different audience segments.",
    },
    {
      label: "Result",
      title: "A client for €17.50",
      text: "34 clients on a €600 budget. Acquisition cost between 3% and 14% of the procedure price depending on the treated area.",
    },
  ],
  table: {
    label: "The numbers",
    title: "Client acquisition economics for SMAS lifting",
    description:
      "Budget and client count are actual campaign data. Revenue and ROAS are shown as a range because the procedure price depends on the treated area.",
    columns: [
      { key: "metric", label: "Metric" },
      { key: "value", label: "Value", align: "right" },
    ],
    rows: [
      { metric: "Ad budget", value: "€600" },
      { metric: "Clients acquired", value: "34" },
      { metric: "Cost per client", value: "€17.50" },
      { metric: "Procedure price", value: "€125–537" },
      { metric: "Revenue (calculated)", value: "€4,250–18,258" },
    ],
    total: { metric: "ROAS (calculated)", value: "×7–30" },
    note: "Revenue and ROAS are calculated as 34 clients multiplied by the lower and upper bound of the procedure price. The actual amount depends on which areas clients chose.",
  },
  mechanics: {
    label: "What we did",
    title: "How we searched for the winning combination",
    steps: [
      "Broke the service down from the client's point of view: what effect SMAS lifting gives, who it suits and how it differs from cheaper procedures.",
      "Launched several creative formats in parallel — video of the procedure and static designs explaining the result.",
      "Duplicated campaigns in Russian and Estonian so that neither segment of the Estonian market was lost.",
      "Tested audience segments by age and interests and switched off the ones producing expensive or irrelevant enquiries.",
      "Concentrated the budget on the strongest combination of format, language and segment — that is what delivered most of the 34 bookings.",
    ],
  },
  faq: {
    label: "Questions and answers",
    title: "Common questions about advertising a beauty salon in Estonia",
    items: [
      {
        question: "How much does it cost to acquire a SMAS lifting client through advertising in Estonia?",
        answer:
          "In this case a client cost €17.50: a €600 budget brought 34 clients. At a procedure price of €125–537 that is between 3% and 14% of the ticket.",
      },
      {
        question: "What budget does a beauty salon need to start?",
        answer:
          "This result was achieved on a €600 budget. That is enough to test several formats, two languages and several segments and to find a working combination.",
      },
      {
        question: "Why were the ads duplicated in two languages?",
        answer:
          "In Estonia part of the audience searches for treatments in Russian and part in Estonian. Running campaigns in both languages avoids losing half the market and shows which segment is cheaper.",
      },
      {
        question: "What ROAS do ads for aesthetic procedures deliver?",
        answer:
          "In this case the calculated ROAS is between ×7 and ×30 depending on the treated area: 34 clients at €125–537 give €4,250 to €18,258 in revenue on a €600 budget.",
      },
      {
        question: "How long does it take to find the winning combination?",
        answer:
          "The first conclusions about formats and segments usually appear within the first or second week of delivery. After that the budget shifts into the best combinations and the cost per booking goes down.",
      },
      {
        question: "Which agency ran this advertising?",
        answer:
          "The campaigns were run by Do.Marketing — a performance marketing agency based in Tallinn, Estonia (OÜ Turundusagendid). We run Meta Ads and Google Ads in Russian, Estonian and English.",
      },
      {
        question: "Where do the figures in this case study come from?",
        answer:
          "The €600 budget, 34 clients and the €17.50 cost per client come from the Meta Ads account and the salon's bookings. Revenue and ROAS are shown as a range and calculated from the €125–537 procedure price.",
      },
    ],
  },
  related: {
    label: "Related",
    title: "What to read next",
    links: [
      {
        href: "/en/meta-ads",
        label: "Beauty salon advertising in Meta Ads",
        note: "Bookings for treatments instead of followers",
      },
      {
        href: "/en/smm",
        label: "SMM for a beauty salon in Tallinn",
        note: "Content that warms clients up to a booking",
      },
      {
        href: "/en/seo",
        label: "SEO in Estonia",
        note: "So the salon is found in search, not only in ads",
      },
      {
        href: "/cases/cosmetics-store",
        label: "Case: ROAS 30 in a cosmetics store in Estonia",
        note: "114 sales at €2.43 on a €277 budget",
      },
    ],
  },
  nextStep: {
    label: "Next step",
    title: "Want to fill your schedule with high-ticket treatments?",
    text: "Tell us which services you need to promote, what they cost and which languages your audience speaks. We will calculate the acceptable cost per booking and propose a test plan.",
    cta: "Discuss a project",
  },
};

const et: IluproffContent = {
  badge: "Reaalne juhtum",
  category: "Beauty / ilusalong, Eesti",
  heroTitle: "ILUPROFF: 34 klienti SMAS-liftingule hinnaga €17,50",
  heroDescription:
    "Eesti ilusalong ILUPROFF reklaamis SMAS-liftingut — kallist aparaatset protseduuri, mida ei saa müüa ühe postitusega. Testisime formaate, keeli ja sihtrühmi, leidsime töötava kombinatsiooni ja tõime €600 eelarvega 34 klienti.",
  primaryCta: { label: "Soovin sama", href: "#contacts" },
  secondaryCta: { label: "Vaata numbreid", href: "#numbers" },
  heroPanel: {
    label: "Mida testisime",
    title: "Kolm testitasandit",
    badge: "Meta Ads",
    segments: [
      { label: "Formaadid", value: "video ja staatiline" },
      { label: "Keeled", value: "vene ja eesti" },
      { label: "Segmendid", value: "vanuse ja huvide järgi" },
    ],
    economyBadge: "Eelarve ja hind",
    economyValue: "€600 → hind €125–537",
    economyNote:
      "Kliendi hankimine maksis 3–14% protseduuri hinnast — premium-iluteenustes on see väga mugav ökonoomika.",
  },
  facts: [
    { label: "Klient", value: "Ilusalong ILUPROFF" },
    { label: "Teenus", value: "SMAS-lifting, aparaatne kosmetoloogia" },
    { label: "Geograafia", value: "Eesti" },
    { label: "Kanal", value: "Meta Ads: Facebook ja Instagram" },
    { label: "Reklaami keeled", value: "Vene ja eesti" },
    { label: "Teostaja", value: "Do.Marketing, agentuur Tallinnas" },
    { label: "Andmete allikas", value: "Meta Ads konto ja salongi broneeringud" },
  ],
  main: {
    label: "Juhtumi tuum",
    title: "Kallist protseduuri müüb täpsus, mitte soodustus",
    paragraphs: [
      "Agentuur Do.Marketing (Tallinn, Eesti) tõi ilusalongile ILUPROFF 34 klienti SMAS-liftingu protseduurile hinnaga €17,50 €600 Meta Ads eelarvega, kampaaniad käisid vene ja eesti keeles.",
      "SMAS-lifting maksab piirkonnast sõltuvalt €125 kuni €537, seega ei tehta broneerimisotsust impulsiivselt. Selline teenus ei vaja ühte universaalset kuulutust, vaid testimist: milline formaat selgitab efekti, mis keeles sihtrühm räägib ja milline segment on üldse valmis aparaatse kosmetoloogia eest maksma.",
      "Testisime järjest formaate, keeli ja segmente, lülitasime nõrgad kombinatsioonid välja ja suunasime eelarve nendesse, mis tõid broneeringuid. Lõpuks sai salong €600 eelarvega 34 klienti — €17,50 kliendi kohta protseduurile, mis maksab hankimisest 7–30 korda rohkem.",
    ],
    ctaLabel: "Aruta oma salongi",
  },
  cards: [
    {
      label: "Ülesanne",
      title: "Täita kalli aparaatse protseduuri graafik",
      text: "Vaja ei olnud jälgijaid ega vestlusi, vaid broneeringuid ühele konkreetsele teenusele — SMAS-liftingule hinnaga €125–537.",
    },
    {
      label: "Lähenemine",
      title: "Formaatide, keelte ja segmentide test",
      text: "Ühe universaalse kuulutuse asemel otsisime tugevaimat kombinatsiooni: erinevad kreatiivid, vene ja eesti keel, erinevad sihtrühmad.",
    },
    {
      label: "Tulemus",
      title: "Klient hinnaga €17,50",
      text: "34 klienti €600 eelarvega. Hankimine maksis 3–14% protseduuri hinnast sõltuvalt valitud piirkonnast.",
    },
  ],
  table: {
    label: "Numbrid",
    title: "SMAS-liftingu kliendi hankimise ökonoomika",
    description:
      "Eelarve ja klientide arv on kampaania tegelikud andmed. Käive ja ROAS on esitatud vahemikuna, sest protseduuri hind sõltub piirkonnast.",
    columns: [
      { key: "metric", label: "Näitaja" },
      { key: "value", label: "Väärtus", align: "right" },
    ],
    rows: [
      { metric: "Reklaamieelarve", value: "€600" },
      { metric: "Hangitud kliendid", value: "34" },
      { metric: "Kliendi hind", value: "€17,50" },
      { metric: "Protseduuri hind", value: "€125–537" },
      { metric: "Käive (arvutuslik)", value: "€4 250–18 258" },
    ],
    total: { metric: "ROAS (arvutuslik)", value: "×7–30" },
    note: "Käive ja ROAS on arvutatud 34 kliendi korrutamisel protseduuri hinna alumise ja ülemise piiriga. Tegelik summa sõltub sellest, milliseid piirkondi kliendid valisid.",
  },
  mechanics: {
    label: "Mida me tegime",
    title: "Kuidas otsisime töötavat kombinatsiooni",
    steps: [
      "Analüüsisime teenust kliendi vaatest: millist efekti SMAS-lifting annab, kellele see sobib ja mille poolest erineb odavamatest protseduuridest.",
      "Käivitasime paralleelselt mitu kreatiiviformaati — protseduuri video ja staatilised maketid tulemuse selgitusega.",
      "Dubleerisime kampaaniad vene ja eesti keeles, et mitte kaotada kumbagi Eesti turu segmenti.",
      "Testisime sihtrühmi vanuse ja huvide järgi ning lülitasime välja need, mis andsid kalleid või mittesihipäraseid pöördumisi.",
      "Jätsime eelarve tugevaimale formaadi, keele ja segmendi kombinatsioonile — just see andis suurema osa 34 broneeringust.",
    ],
  },
  faq: {
    label: "Küsimused ja vastused",
    title: "Levinud küsimused ilusalongi reklaami kohta Eestis",
    items: [
      {
        question: "Kui palju maksab SMAS-liftingu kliendi hankimine reklaamiga Eestis?",
        answer:
          "Selles töös maksis klient €17,50: €600 eelarve tõi 34 klienti. Protseduuri hinnaga €125–537 on see 3–14% ostukorvist.",
      },
      {
        question: "Millist eelarvet vajab ilusalong alustamiseks?",
        answer:
          "See tulemus saavutati €600 eelarvega. Sellest piisab, et testida mitut formaati, kahte keelt ja mitut segmenti ning leida töötav kombinatsioon.",
      },
      {
        question: "Miks dubleeriti reklaam kahes keeles?",
        answer:
          "Eestis otsib osa sihtrühmast protseduure vene, osa eesti keeles. Kampaaniate dubleerimine kahes keeles hoiab ära poole turu kaotamise ja näitab, milline segment on odavam.",
      },
      {
        question: "Milline on kosmetoloogiliste protseduuride reklaami ROAS?",
        answer:
          "Selles töös on arvutuslik ROAS ×7 kuni ×30 sõltuvalt valitud piirkonnast: 34 klienti hinnaga €125–537 annavad €600 eelarvega käivet €4 250 kuni €18 258.",
      },
      {
        question: "Kui kaua võtab töötava kombinatsiooni leidmine?",
        answer:
          "Esimesed järeldused formaatide ja segmentide kohta on tavaliselt näha esimesel-teisel näitamisnädalal. Seejärel liigub eelarve parimatesse kombinatsioonidesse ja broneeringu hind langeb.",
      },
      {
        question: "Milline agentuur seda reklaami juhtis?",
        answer:
          "Kampaaniaid juhtis Do.Marketing — Tallinnas asuv tulemusturunduse agentuur (OÜ Turundusagendid). Teeme Meta Ads ja Google Ads kampaaniaid vene, eesti ja inglise keeles.",
      },
      {
        question: "Kust pärinevad selle töö numbrid?",
        answer:
          "Eelarve €600, 34 klienti ja kliendi hind €17,50 pärinevad Meta Ads kontost ja salongi broneeringutest. Käive ja ROAS on esitatud vahemikuna ning arvutatud protseduuri hinnast €125–537.",
      },
    ],
  },
  related: {
    label: "Seotud materjalid",
    title: "Mida edasi lugeda",
    links: [
      {
        href: "/et/meta-ads",
        label: "Ilusalongi reklaam Meta Adsis",
        note: "Broneeringud protseduuridele, mitte jälgijad",
      },
      {
        href: "/et/smm",
        label: "SMM ilusalongile Tallinnas",
        note: "Sisu, mis soojendab kliendi broneeringuni",
      },
      {
        href: "/et/seo",
        label: "SEO Eestis",
        note: "Et salongi leitaks otsingust, mitte ainult reklaamist",
      },
      {
        href: "/cases/cosmetics-store",
        label: "Töö: ROAS 30 kosmeetika e-poes Eestis",
        note: "114 müüki hinnaga €2,43 €277 eelarvega",
      },
    ],
  },
  nextStep: {
    label: "Järgmine samm",
    title: "Kas soovite täita graafiku kallite protseduuridega?",
    text: "Rääkige, milliseid teenuseid on vaja reklaamida, milline on nende hind ja mis keeltes teie sihtrühm räägib. Arvutame lubatava broneeringu hinna ja pakume testiplaani.",
    cta: "Aruta projekti",
  },
};

export const iluproffContent: Record<Language, IluproffContent> = {
  ru,
  en,
  et,
};
