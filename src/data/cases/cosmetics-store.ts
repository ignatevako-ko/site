import type {
  CaseCta,
  CaseFact,
  CaseFaqItem,
  CaseRelatedLink,
  CaseTableColumn,
  CaseTableRow,
} from "@/components/cases/case-sections";
import type { Language } from "@/data/site-content";

export type CosmeticsStoreContent = {
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
    total: CaseTableRow;
    note: string;
  };
  mechanics: { label: string; title: string; steps: string[] };
  faq: { label: string; title: string; items: CaseFaqItem[] };
  related: { label: string; title: string; links: CaseRelatedLink[] };
  nextStep: { label: string; title: string; text: string; cta: string };
};

const ru: CosmeticsStoreContent = {
  badge: "Реальный кейс",
  category: "E-commerce / косметика, Эстония",
  heroTitle: "ROAS 30 на одной акции в интернет-магазине косметики",
  heroDescription:
    "Эстонский интернет-магазин косметики хотел проверить, может ли реклама продавать уходовые средства напрямую, без длинного прогрева. Мы собрали кампанию вокруг одного понятного оффера — скидки 20% на линейку Medic8 — и получили 114 продаж.",
  primaryCta: { label: "Хочу также", href: "#contacts" },
  secondaryCta: { label: "Смотреть цифры", href: "#numbers" },
  heroPanel: {
    label: "Экономика кампании",
    title: "Одна акция, один сегмент, один канал",
    badge: "−20% на Medic8",
    segments: [
      { label: "Оффер", value: "скидка 20% на линейку" },
      { label: "Гео", value: "Эстония" },
      { label: "Канал", value: "Meta Ads" },
    ],
    economyBadge: "Экономика акции",
    economyValue: "€277 → €8 387",
    economyNote:
      "Одна продажа обошлась в €2,43 при среднем чеке €73,57 — реклама забирала около 3% выручки.",
  },
  facts: [
    { label: "Ниша", value: "Интернет-магазин косметики и уходовых средств" },
    { label: "География", value: "Эстония" },
    { label: "Канал", value: "Meta Ads: Facebook и Instagram" },
    { label: "Оффер", value: "Скидка 20% на линейку Medic8" },
    { label: "Модель", value: "Прямые продажи через сайт" },
    { label: "Исполнитель", value: "Do.Marketing, агентство в Таллинне" },
    { label: "Источник данных", value: "Рекламный кабинет Meta Ads и статистика магазина" },
  ],
  main: {
    label: "Главное в кейсе",
    title: "Один конкретный оффер продает лучше, чем весь каталог сразу",
    paragraphs: [
      "Агентство Do.Marketing (Таллинн, Эстония) провело для эстонского интернет-магазина косметики одну кампанию в Meta Ads со скидкой 20% на линейку Medic8: бюджет €277, 114 продаж по €2,43, средний чек €73,57, выручка €8 387, ROAS 30,23.",
      "В косметике легко утонуть в ассортименте: сотни позиций, десятки брендов и одинаковые обещания. Поэтому вместо продвижения магазина целиком мы взяли одну линейку — Medic8 — и одно понятное условие: скидка 20%. Такой оффер не нужно объяснять, он считывается за секунду в ленте.",
      "Кампания принесла 114 продаж при рекламном бюджете €277. Продажа обошлась в €2,43, средний чек составил €73,57, а выручка от рекламы — €8 387. Окупаемость рекламы (ROAS) — 30,23, то есть каждый вложенный евро вернулся тридцатью.",
    ],
    ctaLabel: "Обсудить свой магазин",
  },
  cards: [
    {
      label: "Задача",
      title: "Проверить, продает ли реклама косметику напрямую",
      text: "Нужно было понять, окупается ли реклама на прямых продажах уходовых средств, а не только на подписчиках и трафике на сайт.",
    },
    {
      label: "Подход",
      title: "Одна линейка вместо всего каталога",
      text: "Сфокусировали кампанию на линейке Medic8 со скидкой 20%: понятный продукт, понятная выгода, понятный следующий шаг — покупка.",
    },
    {
      label: "Результат",
      title: "114 продаж по €2,43",
      text: "При среднем чеке €73,57 стоимость продажи составила €2,43, а реклама заняла около 3% выручки — такая экономика позволяет масштабировать бюджет.",
    },
  ],
  table: {
    label: "Цифры",
    title: "Экономика кампании: 114 продаж по €2,43",
    description:
      "Данные рекламного кабинета и магазина за период акции. Выручка — от продаж, которые пришли из рекламы.",
    columns: [
      { key: "metric", label: "Показатель" },
      { key: "value", label: "Значение", align: "right" },
    ],
    rows: [
      { metric: "Рекламный бюджет", value: "€277" },
      { metric: "Продажи", value: "114" },
      { metric: "Стоимость продажи", value: "€2,43" },
      { metric: "Средний чек", value: "€73,57" },
      { metric: "Выручка от рекламы", value: "€8 387" },
    ],
    total: { metric: "ROAS", value: "30,23" },
    note: "Доля рекламных расходов в выручке — около 3,3%. ROAS посчитан как выручка от рекламы, деленная на рекламный бюджет.",
  },
  mechanics: {
    label: "Что сделали",
    title: "Как собрали кампанию на прямые продажи",
    steps: [
      "Выбрали одну линейку с понятным результатом для покупателя и достаточной маржой, чтобы скидка 20% не съедала прибыль.",
      "Собрали креативы вокруг конкретного продукта и условия акции, а не вокруг ассортимента магазина: покупатель сразу понимает, что он покупает и за сколько.",
      "Настроили кампанию на покупку, а не на трафик или переписку, чтобы алгоритм искал людей, которые доводят заказ до оплаты.",
      "Сузили географию до Эстонии и работали с сегментами, которые уже интересовались уходовой косметикой.",
      "Считали экономику по стоимости продажи и среднему чеку, а не по стоимости клика — только так видно, окупается ли акция.",
    ],
  },
  faq: {
    label: "Вопросы и ответы",
    title: "Частые вопросы про рекламу интернет-магазина косметики",
    items: [
      {
        question: "Какой ROAS дала реклама интернет-магазина косметики в Эстонии?",
        answer:
          "ROAS составил 30,23: рекламный бюджет €277 принес €8 387 выручки. Это результат одной кампании со скидкой 20% на линейку Medic8.",
      },
      {
        question: "Сколько стоила одна продажа косметики из рекламы?",
        answer:
          "€2,43 при среднем чеке €73,57. То есть реклама забирала около 3% выручки с заказа.",
      },
      {
        question: "Сколько продаж принесла кампания?",
        answer:
          "114 продаж за период акции при бюджете €277 в Meta Ads на аудиторию в Эстонии.",
      },
      {
        question: "Почему кампания строилась вокруг одного оффера?",
        answer:
          "В косметике широкий каталог размывает сообщение. Одна линейка со скидкой 20% дает мгновенно понятный оффер, поэтому конверсия в покупку выше, а стоимость продажи ниже.",
      },
      {
        question: "Подойдет ли такой подход другому интернет-магазину?",
        answer:
          "Да, если есть продукт с понятным результатом и достаточной маржой. Мы обычно начинаем с одного оффера, доводим стоимость продажи до приемлемой и только потом расширяем ассортимент в рекламе.",
      },
      {
        question: "Какое агентство вело эту рекламу?",
        answer:
          "Кампанию вел Do.Marketing — агентство перформанс-маркетинга из Таллинна (OÜ Turundusagendid). Мы ведем Meta Ads и Google Ads для бизнеса в Эстонии на русском, эстонском и английском языках.",
      },
      {
        question: "Откуда взяты цифры этого кейса?",
        answer:
          "Бюджет, количество продаж и выручка — данные рекламного кабинета Meta Ads и статистики магазина за период акции. ROAS 30,23 посчитан как выручка от рекламы, деленная на рекламный бюджет.",
      },
    ],
  },
  related: {
    label: "Связанные материалы",
    title: "Что почитать дальше",
    links: [
      {
        href: "/ru/meta-ads",
        label: "Настройка Meta Ads для e-commerce в Эстонии",
        note: "Кампании на покупки для интернет-магазинов",
      },
      {
        href: "/ru/smm",
        label: "SMM для бьюти-бренда",
        note: "Контент, который поддерживает продажи между акциями",
      },
      {
        href: "/cases/iluproff",
        label: "Кейс ILUPROFF: клиент за €17,50",
        note: "34 клиента на SMAS-лифтинг при бюджете €600",
      },
      {
        href: "/cases/womens-activewear",
        label: "Кейс: ROAS 15 в Black Friday",
        note: "$13 571 выручки при бюджете $1 179",
      },
    ],
  },
  nextStep: {
    label: "Следующий шаг",
    title: "Хотите проверить, окупится ли реклама на вашем ассортименте?",
    text: "Пришлите ассортимент, средний чек и маржинальность. Посчитаем, при какой стоимости продажи реклама будет прибыльной, и предложим первый оффер для теста.",
    cta: "Обсудить проект",
  },
};

const en: CosmeticsStoreContent = {
  badge: "Real case study",
  category: "E-commerce / cosmetics, Estonia",
  heroTitle: "ROAS 30 from a single promotion in a cosmetics store",
  heroDescription:
    "An Estonian cosmetics store wanted to find out whether advertising can sell skincare directly, without a long warm-up. We built the campaign around one clear offer — 20% off the Medic8 line — and got 114 sales.",
  primaryCta: { label: "I want this too", href: "#contacts" },
  secondaryCta: { label: "See the numbers", href: "#numbers" },
  heroPanel: {
    label: "Campaign economics",
    title: "One promotion, one segment, one channel",
    badge: "−20% on Medic8",
    segments: [
      { label: "Offer", value: "20% off the line" },
      { label: "Geography", value: "Estonia" },
      { label: "Channel", value: "Meta Ads" },
    ],
    economyBadge: "Promotion economics",
    economyValue: "€277 → €8,387",
    economyNote:
      "One sale cost €2.43 at an average order value of €73.57 — advertising took about 3% of revenue.",
  },
  facts: [
    { label: "Niche", value: "Online store of cosmetics and skincare" },
    { label: "Geography", value: "Estonia" },
    { label: "Channel", value: "Meta Ads: Facebook and Instagram" },
    { label: "Offer", value: "20% off the Medic8 line" },
    { label: "Model", value: "Direct sales through the website" },
    { label: "Agency", value: "Do.Marketing, agency based in Tallinn" },
    { label: "Data source", value: "Meta Ads account and store analytics" },
  ],
  main: {
    label: "Case highlights",
    title: "One specific offer sells better than the whole catalogue at once",
    paragraphs: [
      "Do.Marketing, a performance marketing agency based in Tallinn, Estonia, ran a single Meta Ads campaign for an Estonian cosmetics store with 20% off the Medic8 line: a €277 budget, 114 sales at €2.43, a €73.57 average order value, €8,387 in revenue and a ROAS of 30.23.",
      "In cosmetics it is easy to drown in the assortment: hundreds of items, dozens of brands and identical promises. So instead of promoting the entire store we took one line — Medic8 — and one clear condition: 20% off. That kind of offer needs no explanation, it reads in a second in the feed.",
      "The campaign brought 114 sales on a €277 ad budget. A sale cost €2.43, the average order value was €73.57 and ad-driven revenue reached €8,387. Return on ad spend was 30.23 — every euro invested came back thirtyfold.",
    ],
    ctaLabel: "Discuss my store",
  },
  cards: [
    {
      label: "Challenge",
      title: "Check whether advertising sells cosmetics directly",
      text: "We needed to see whether ads pay off on direct skincare sales, not only on followers and website traffic.",
    },
    {
      label: "Approach",
      title: "One product line instead of the whole catalogue",
      text: "We focused the campaign on the Medic8 line with 20% off: a clear product, a clear benefit and a clear next step — the purchase.",
    },
    {
      label: "Result",
      title: "114 sales at €2.43 each",
      text: "At a €73.57 average order value the cost per sale was €2.43 and advertising took about 3% of revenue — economics that allow the budget to scale.",
    },
  ],
  table: {
    label: "The numbers",
    title: "Campaign economics: 114 sales at €2.43",
    description:
      "Data from the ad account and the store for the promotion period. Revenue covers the sales that came from advertising.",
    columns: [
      { key: "metric", label: "Metric" },
      { key: "value", label: "Value", align: "right" },
    ],
    rows: [
      { metric: "Ad budget", value: "€277" },
      { metric: "Sales", value: "114" },
      { metric: "Cost per sale", value: "€2.43" },
      { metric: "Average order value", value: "€73.57" },
      { metric: "Ad-driven revenue", value: "€8,387" },
    ],
    total: { metric: "ROAS", value: "30.23" },
    note: "Advertising accounted for about 3.3% of revenue. ROAS is calculated as ad-driven revenue divided by ad budget.",
  },
  mechanics: {
    label: "What we did",
    title: "How we built a campaign for direct sales",
    steps: [
      "Picked one product line with a clear result for the buyer and enough margin so that 20% off would not eat the profit.",
      "Built creatives around the specific product and the promotion terms rather than around the store's assortment: the buyer immediately understands what they are buying and for how much.",
      "Optimised the campaign for purchases, not traffic or messages, so the algorithm looked for people who complete the checkout.",
      "Narrowed the geography to Estonia and worked with segments that had already shown interest in skincare.",
      "Measured the economics by cost per sale and average order value, not by cost per click — that is the only way to see whether a promotion pays off.",
    ],
  },
  faq: {
    label: "Questions and answers",
    title: "Common questions about advertising a cosmetics store",
    items: [
      {
        question: "What ROAS did advertising deliver for the cosmetics store in Estonia?",
        answer:
          "ROAS was 30.23: a €277 ad budget brought €8,387 in revenue. That is the result of a single campaign offering 20% off the Medic8 line.",
      },
      {
        question: "How much did one cosmetics sale from advertising cost?",
        answer:
          "€2.43 at an average order value of €73.57 — advertising took about 3% of the revenue per order.",
      },
      {
        question: "How many sales did the campaign generate?",
        answer:
          "114 sales during the promotion period on a €277 Meta Ads budget targeting an audience in Estonia.",
      },
      {
        question: "Why was the campaign built around a single offer?",
        answer:
          "In cosmetics a wide catalogue dilutes the message. One line with 20% off gives an instantly clear offer, so conversion to purchase is higher and cost per sale is lower.",
      },
      {
        question: "Will this approach work for another online store?",
        answer:
          "Yes, if you have a product with a clear result and enough margin. We usually start with one offer, bring the cost per sale to an acceptable level and only then expand the assortment in advertising.",
      },
      {
        question: "Which agency ran this advertising?",
        answer:
          "The campaign was run by Do.Marketing — a performance marketing agency based in Tallinn, Estonia (OÜ Turundusagendid). We run Meta Ads and Google Ads in Russian, Estonian and English.",
      },
      {
        question: "Where do the figures in this case study come from?",
        answer:
          "Budget, number of sales and revenue come from the Meta Ads account and the store analytics for the promotion period. The ROAS of 30.23 is calculated as ad-driven revenue divided by ad budget.",
      },
    ],
  },
  related: {
    label: "Related",
    title: "What to read next",
    links: [
      {
        href: "/en/meta-ads",
        label: "Meta Ads for e-commerce in Estonia",
        note: "Purchase-optimised campaigns for online stores",
      },
      {
        href: "/en/smm",
        label: "SMM for a beauty brand",
        note: "Content that supports sales between promotions",
      },
      {
        href: "/cases/iluproff",
        label: "Case ILUPROFF: a client for €17.50",
        note: "34 SMAS lifting clients on a €600 budget",
      },
      {
        href: "/cases/womens-activewear",
        label: "Case: ROAS 15 on Black Friday",
        note: "$13,571 in revenue on a $1,179 budget",
      },
    ],
  },
  nextStep: {
    label: "Next step",
    title: "Want to check whether advertising pays off on your assortment?",
    text: "Send us your product range, average order value and margin. We will calculate the cost per sale at which advertising becomes profitable and propose the first offer to test.",
    cta: "Discuss a project",
  },
};

const et: CosmeticsStoreContent = {
  badge: "Reaalne juhtum",
  category: "E-commerce / kosmeetika, Eesti",
  heroTitle: "ROAS 30 ühest kampaaniast kosmeetika e-poes",
  heroDescription:
    "Eesti kosmeetika e-pood soovis kontrollida, kas reklaam suudab nahahooldustooteid otse müüa ilma pika soojenduseta. Ehitasime kampaania ühe selge pakkumise ümber — 20% soodustus Medic8 tootesarjale — ja saime 114 müüki.",
  primaryCta: { label: "Soovin sama", href: "#contacts" },
  secondaryCta: { label: "Vaata numbreid", href: "#numbers" },
  heroPanel: {
    label: "Kampaania ökonoomika",
    title: "Üks pakkumine, üks segment, üks kanal",
    badge: "−20% Medic8-le",
    segments: [
      { label: "Pakkumine", value: "20% soodustust sarjale" },
      { label: "Geograafia", value: "Eesti" },
      { label: "Kanal", value: "Meta Ads" },
    ],
    economyBadge: "Kampaania ökonoomika",
    economyValue: "€277 → €8 387",
    economyNote:
      "Üks müük maksis €2,43 keskmise ostukorviga €73,57 — reklaam võttis umbes 3% käibest.",
  },
  facts: [
    { label: "Nišš", value: "Kosmeetika ja nahahooldustoodete e-pood" },
    { label: "Geograafia", value: "Eesti" },
    { label: "Kanal", value: "Meta Ads: Facebook ja Instagram" },
    { label: "Pakkumine", value: "20% soodustust Medic8 sarjale" },
    { label: "Mudel", value: "Otsemüük veebilehe kaudu" },
    { label: "Teostaja", value: "Do.Marketing, agentuur Tallinnas" },
    { label: "Andmete allikas", value: "Meta Ads konto ja poe statistika" },
  ],
  main: {
    label: "Juhtumi tuum",
    title: "Üks konkreetne pakkumine müüb paremini kui kogu kataloog korraga",
    paragraphs: [
      "Agentuur Do.Marketing (Tallinn, Eesti) viis Eesti kosmeetika e-poe jaoks läbi ühe Meta Ads kampaania 20% soodustusega Medic8 sarjale: eelarve €277, 114 müüki hinnaga €2,43, keskmine ostukorv €73,57, käive €8 387 ja ROAS 30,23.",
      "Kosmeetikas on lihtne tootevalikusse ära uppuda: sadu tooteid, kümneid brände ja ühesugused lubadused. Seetõttu võtsime kogu poe reklaamimise asemel ühe sarja — Medic8 — ja ühe selge tingimuse: 20% soodustust. Sellist pakkumist ei pea seletama, see loetakse uudisvoos sekundiga.",
      "Kampaania tõi 114 müüki €277 reklaamieelarvega. Üks müük maksis €2,43, keskmine ostukorv oli €73,57 ja reklaamist tulnud käive €8 387. Reklaami tasuvus (ROAS) oli 30,23 — iga investeeritud euro tuli tagasi kolmekümnekordselt.",
    ],
    ctaLabel: "Aruta oma poodi",
  },
  cards: [
    {
      label: "Ülesanne",
      title: "Kontrollida, kas reklaam müüb kosmeetikat otse",
      text: "Oli vaja aru saada, kas reklaam tasub end ära otsemüügil, mitte ainult jälgijate ja veebilehe liikluse kaudu.",
    },
    {
      label: "Lähenemine",
      title: "Üks tootesari kogu kataloogi asemel",
      text: "Keskendusime kampaanias Medic8 sarjale 20% soodustusega: selge toode, selge kasu ja selge järgmine samm — ost.",
    },
    {
      label: "Tulemus",
      title: "114 müüki hinnaga €2,43",
      text: "Keskmise ostukorviga €73,57 oli müügi hind €2,43 ja reklaam võttis umbes 3% käibest — selline ökonoomika lubab eelarvet skaleerida.",
    },
  ],
  table: {
    label: "Numbrid",
    title: "Kampaania ökonoomika: 114 müüki hinnaga €2,43",
    description:
      "Reklaamikonto ja poe andmed kampaania perioodil. Käive hõlmab müüke, mis tulid reklaamist.",
    columns: [
      { key: "metric", label: "Näitaja" },
      { key: "value", label: "Väärtus", align: "right" },
    ],
    rows: [
      { metric: "Reklaamieelarve", value: "€277" },
      { metric: "Müügid", value: "114" },
      { metric: "Müügi hind", value: "€2,43" },
      { metric: "Keskmine ostukorv", value: "€73,57" },
      { metric: "Reklaamist tulnud käive", value: "€8 387" },
    ],
    total: { metric: "ROAS", value: "30,23" },
    note: "Reklaamikulu moodustas umbes 3,3% käibest. ROAS on arvutatud reklaamist tulnud käibe jagamisel reklaamieelarvega.",
  },
  mechanics: {
    label: "Mida me tegime",
    title: "Kuidas ehitasime otsemüügile suunatud kampaania",
    steps: [
      "Valisime ühe tootesarja, millel on ostjale selge tulemus ja piisav marginaal, et 20% soodustus kasumit ära ei sööks.",
      "Ehitasime kreatiivid konkreetse toote ja kampaania tingimuste ümber, mitte poe tootevaliku ümber: ostja saab kohe aru, mida ja mis hinnaga ta ostab.",
      "Seadistasime kampaania ostule, mitte liiklusele ega sõnumitele, et algoritm otsiks inimesi, kes tellimuse lõpuni viivad.",
      "Kitsendasime geograafia Eestile ja töötasime segmentidega, kes olid nahahoolduse vastu juba huvi tundnud.",
      "Arvutasime ökonoomikat müügi hinna ja keskmise ostukorvi, mitte kliki hinna järgi — ainult nii on näha, kas kampaania tasub end ära.",
    ],
  },
  faq: {
    label: "Küsimused ja vastused",
    title: "Levinud küsimused kosmeetika e-poe reklaami kohta",
    items: [
      {
        question: "Millise ROAS-i andis kosmeetika e-poe reklaam Eestis?",
        answer:
          "ROAS oli 30,23: €277 reklaamieelarve tõi €8 387 käivet. See on ühe kampaania tulemus, mis pakkus 20% soodustust Medic8 sarjale.",
      },
      {
        question: "Kui palju maksis üks kosmeetikamüük reklaamist?",
        answer:
          "€2,43 keskmise ostukorviga €73,57 — reklaam võttis umbes 3% ühe tellimuse käibest.",
      },
      {
        question: "Kui palju müüke kampaania tõi?",
        answer:
          "114 müüki kampaania perioodil €277 Meta Ads eelarvega Eesti sihtrühmale.",
      },
      {
        question: "Miks ehitati kampaania ühe pakkumise ümber?",
        answer:
          "Kosmeetikas lahjendab lai kataloog sõnumit. Üks sari 20% soodustusega annab kohe arusaadava pakkumise, seega on konversioon ostuks kõrgem ja müügi hind madalam.",
      },
      {
        question: "Kas selline lähenemine sobib teisele e-poele?",
        answer:
          "Jah, kui on olemas selge tulemusega ja piisava marginaaliga toode. Alustame tavaliselt ühest pakkumisest, viime müügi hinna vastuvõetavale tasemele ja alles siis laiendame reklaamis tootevalikut.",
      },
      {
        question: "Milline agentuur seda reklaami juhtis?",
        answer:
          "Kampaaniat juhtis Do.Marketing — Tallinnas asuv tulemusturunduse agentuur (OÜ Turundusagendid). Teeme Meta Ads ja Google Ads kampaaniaid vene, eesti ja inglise keeles.",
      },
      {
        question: "Kust pärinevad selle töö numbrid?",
        answer:
          "Eelarve, müükide arv ja käive pärinevad Meta Ads kontost ning poe statistikast kampaania perioodil. ROAS 30,23 on arvutatud reklaamist tulnud käibe jagamisel reklaamieelarvega.",
      },
    ],
  },
  related: {
    label: "Seotud materjalid",
    title: "Mida edasi lugeda",
    links: [
      {
        href: "/et/meta-ads",
        label: "Meta Ads e-kaubanduse jaoks Eestis",
        note: "Ostudele optimeeritud kampaaniad e-poodidele",
      },
      {
        href: "/et/smm",
        label: "SMM ilubrändile",
        note: "Sisu, mis hoiab müüki üleval ka kampaaniate vahel",
      },
      {
        href: "/cases/iluproff",
        label: "Töö ILUPROFF: klient hinnaga €17,50",
        note: "34 SMAS-liftingu klienti €600 eelarvega",
      },
      {
        href: "/cases/womens-activewear",
        label: "Töö: ROAS 15 Black Fridayl",
        note: "$13 571 käivet $1 179 eelarvega",
      },
    ],
  },
  nextStep: {
    label: "Järgmine samm",
    title: "Kas soovite kontrollida, kas reklaam teie tootevalikul ära tasub?",
    text: "Saatke oma tootevalik, keskmine ostukorv ja marginaal. Arvutame välja, millise müügihinna juures reklaam kasumlikuks muutub, ja pakume esimese testpakkumise.",
    cta: "Aruta projekti",
  },
};

export const cosmeticsStoreContent: Record<Language, CosmeticsStoreContent> = {
  ru,
  en,
  et,
};
