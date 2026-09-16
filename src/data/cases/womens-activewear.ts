import type {
  CaseCta,
  CaseFact,
  CaseFaqItem,
  CaseRelatedLink,
  CaseTableColumn,
  CaseTableRow,
} from "@/components/cases/case-sections";
import type { Language } from "@/data/site-content";

/** Медиа — не зависит от языка. */
export const womensActivewearCreativeImages = [
  { src: "/images/cases/womens-activewear/creative-yoga-collection-en.jpg", altKey: 0 },
  { src: "/images/cases/womens-activewear/creative-jumpsuit-long.jpg", altKey: 1 },
  { src: "/images/cases/womens-activewear/creative-leggings-push-up.jpg", altKey: 2 },
  { src: "/images/cases/womens-activewear/creative-jumpsuit-colors.jpg", altKey: 3 },
  { src: "/images/cases/womens-activewear/creative-jumpsuit-skin-base.jpg", altKey: 4 },
  { src: "/images/cases/womens-activewear/creative-thermal-set.jpg", altKey: 5 },
] as const;

export type WomensActivewearContent = {
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
  creatives: { label: string; title: string; description: string; imageAlts: string[] };
  faq: { label: string; title: string; items: CaseFaqItem[] };
  related: { label: string; title: string; links: CaseRelatedLink[] };
  nextStep: { label: string; title: string; text: string; cta: string };
};

const ru: WomensActivewearContent = {
  badge: "Реальный кейс",
  category: "E-commerce / женская спортивная одежда",
  heroTitle: "ROAS 15 в Black Friday на женской спортивной одежде",
  heroDescription:
    "Интернет-магазин женской спортивной одежды продает на несколько стран. Мы вели Meta Ads на каталог и отдельные модели, а к Черной пятнице подготовили распродажу, которая дала самую высокую окупаемость за весь период работы.",
  primaryCta: { label: "Хочу также", href: "#contacts" },
  secondaryCta: { label: "Смотреть цифры", href: "#numbers" },
  heroPanel: {
    label: "Экономика кампании",
    title: "Два периода одной кампании",
    badge: "Black Friday",
    segments: [
      { label: "Бюджет", value: "$1 179" },
      { label: "Выручка", value: "$13 571" },
      { label: "Покупатель", value: "$10" },
    ],
    economyBadge: "Пик распродажи",
    economyValue: "$311 → $4 690 за 3 дня",
    economyNote:
      "В обычные недели реклама возвращала около 10 долларов на каждый вложенный, в дни распродажи — около 15.",
  },
  facts: [
    { label: "Ниша", value: "Женская спортивная одежда, собственное производство" },
    { label: "География", value: "Продажи на несколько стран" },
    { label: "Канал", value: "Meta Ads: Facebook и Instagram" },
    { label: "Модель", value: "Прямые продажи через интернет-магазин" },
    { label: "Ключевой период", value: "3 дня Black Friday" },
    { label: "Исполнитель", value: "Do.Marketing, агентство в Таллинне" },
    { label: "Источник данных", value: "Рекламный кабинет Meta Ads и статистика магазина" },
  ],
  main: {
    label: "Главное в кейсе",
    title: "Распродажа сработала, потому что спрос грели заранее",
    paragraphs: [
      "Агентство Do.Marketing (Таллинн, Эстония) вело Meta Ads для интернет-магазина женской спортивной одежды: $1 179 бюджета принесли $13 571 выручки, а в три дня Black Friday ROAS достиг 15 при стоимости покупателя $10.",
      "Черная пятница в одежде — это не отдельная кампания на три дня, а финал предыдущих недель. До распродажи реклама уже приносила $8 881 продаж при бюджете $868, то есть возвращала около десяти долларов на каждый вложенный. Аудитория успела посмотреть каталог, примерить размерную сетку и сохранить любимые модели.",
      "В три дня распродажи мы работали с уже прогретой базой и добавили короткий понятный оффер. Реклама принесла еще $4 690 продаж при бюджете $311, покупатель обошелся в $10, а окупаемость выросла с 10 до 15. Суммарно за оба периода магазин получил $13 571 выручки при $1 179 рекламных расходов.",
    ],
    ctaLabel: "Обсудить свой магазин",
  },
  cards: [
    {
      label: "Задача",
      title: "Продавать одежду без скидочной зависимости",
      text: "Магазину нужен был стабильный поток заказов в обычные недели, а не только всплески в распродажи, и понятная стоимость покупателя, с которой можно масштабироваться.",
    },
    {
      label: "Подход",
      title: "Каталог, модели и отдельная логика на распродажу",
      text: "Мы разделили рекламу на продвижение каталога, отдельных бестселлеров и сезонных коллекций, а к Черной пятнице подготовили отдельные креативы и оффер.",
    },
    {
      label: "Результат",
      title: "Лучшая окупаемость за весь период работы",
      text: "Три дня распродажи дали ROAS 15 и покупателя за $10 — при том, что база покупателей была собрана рекламой предыдущих недель.",
    },
  ],
  table: {
    label: "Цифры",
    title: "Два периода: до распродажи и в дни Black Friday",
    description:
      "Все суммы — данные рекламного кабинета и магазина: расход, выручка от рекламы и окупаемость за каждый период.",
    columns: [
      { key: "period", label: "Период" },
      { key: "budget", label: "Бюджет", align: "right" },
      { key: "revenue", label: "Выручка", align: "right" },
      { key: "roas", label: "ROAS", align: "right" },
    ],
    rows: [
      { period: "До Black Friday", budget: "$868", revenue: "$8 881", roas: "×10" },
      { period: "Black Friday, 3 дня", budget: "$311", revenue: "$4 690", roas: "×15" },
    ],
    total: { period: "Итого", budget: "$1 179", revenue: "$13 571", roas: "×11,5" },
    note: "Стоимость покупателя в дни распродажи — $10. Итоговый ROAS ×11,5 посчитан как отношение суммарной выручки к суммарному бюджету.",
  },
  mechanics: {
    label: "Что сделали",
    title: "Как готовили магазин к Черной пятнице",
    steps: [
      "Разделили кампании по назначению: каталог для холодной аудитории, отдельные модели для тех, кто уже знаком с брендом, и ретаргетинг на просмотры карточек товара.",
      "Собрали креативы вокруг характеристик ткани, посадки и размерной сетки — в одежде именно это снимает главное возражение при покупке онлайн.",
      "Заранее нарастили аудитории для ретаргетинга, чтобы к распродаже было кому показывать оффер, а не покупать внимание с нуля в самый дорогой аукцион года.",
      "Подготовили отдельные креативы и коммуникацию на три дня Black Friday: короткий срок, понятная выгода, минимум шагов до корзины.",
      "Держали бюджет распродажи компактным ($311) и выкупали в основном теплую аудиторию — за счет этого стоимость покупателя осталась на уровне $10.",
    ],
  },
  creatives: {
    label: "Креативы",
    title: "Креативы, которые продавали одежду онлайн",
    description:
      "В одежде креатив должен ответить на три вопроса до клика: как сидит, из чего сшито и сколько стоит. Поэтому в макетах — модели на фигуре, характеристики ткани, палитра цветов, размерный ряд и цена.",
    imageAlts: [
      "Рекламный креатив Meta Ads: йога-коллекция женской спортивной одежды с ценой и составом ткани",
      "Креатив Instagram Ads: спортивный комбинезон с характеристиками итальянской ткани и размерным рядом",
      "Креатив Facebook Ads: женские легинсы с push-up эффектом и палитрой цветов",
      "Рекламный креатив: спортивный комбинезон в пяти цветах с размерным рядом",
      "Креатив короткого спортивного комбинезона с акцентом на свободу движений в тренировке",
      "Креатив женского термокомплекта для зимних тренировок на улице",
    ],
  },
  faq: {
    label: "Вопросы и ответы",
    title: "Частые вопросы про рекламу интернет-магазина одежды",
    items: [
      {
        question: "Какой ROAS дала реклама женской спортивной одежды в Black Friday?",
        answer:
          "В три дня Черной пятницы ROAS составил 15: при бюджете $311 реклама принесла $4 690 продаж. До распродажи ROAS держался около 10 — $8 881 выручки при бюджете $868.",
      },
      {
        question: "Сколько стоило привлечение одного покупателя в интернет-магазине одежды?",
        answer:
          "В дни распродажи покупатель обходился в $10. Это стоимость именно покупки, а не заявки или перехода на сайт.",
      },
      {
        question: "Сколько всего заработал магазин за оба периода?",
        answer:
          "$13 571 выручки от рекламы при суммарном бюджете $1 179. Это средняя окупаемость около ×11,5 за весь период работы.",
      },
      {
        question: "Почему распродажа сработала лучше обычных недель?",
        answer:
          "Потому что аудиторию грели заранее. В дни Black Friday реклама показывалась людям, которые уже смотрели каталог и карточки товаров, а короткий оффер снял последнее сомнение.",
      },
      {
        question: "Такой результат повторим для другого интернет-магазина одежды?",
        answer:
          "Повторима сама механика: прогрев каталогом, работа с возражениями про посадку и ткань, накопленные аудитории и отдельная логика на распродажу. Конкретные цифры зависят от маржинальности, среднего чека и конкуренции в вашей нише.",
      },
      {
        question: "Какое агентство вело эту рекламу?",
        answer:
          "Кампании вел Do.Marketing — агентство перформанс-маркетинга из Таллинна (OÜ Turundusagendid). Мы ведем Meta Ads и Google Ads для бизнеса в Эстонии и за ее пределами на русском, эстонском и английском языках.",
      },
      {
        question: "Откуда взяты цифры этого кейса?",
        answer:
          "Бюджет, выручка и стоимость покупателя — данные рекламного кабинета Meta Ads и статистики магазина за оба периода. Итоговый ROAS ×11,5 посчитан как суммарная выручка, деленная на суммарный бюджет.",
      },
    ],
  },
  related: {
    label: "Связанные материалы",
    title: "Что почитать дальше",
    links: [
      {
        href: "/ru/meta-ads",
        label: "Реклама в Meta Ads для интернет-магазина",
        note: "Как мы настраиваем кампании на продажи, а не на клики",
      },
      {
        href: "/ru/website-development",
        label: "Сайт интернет-магазина под рекламу",
        note: "Что должно быть на сайте, чтобы трафик доходил до корзины",
      },
      {
        href: "/cases/cosmetics-store",
        label: "Кейс: ROAS 30 в интернет-магазине косметики",
        note: "114 продаж по €2,43 при бюджете €277",
      },
      {
        href: "/cases/sadhu-boards",
        label: "Кейс Sadhu Boards: лид дешевле в 15 раз",
        note: "300–500 заявок в месяц при бюджете €750",
      },
    ],
  },
  nextStep: {
    label: "Следующий шаг",
    title: "Хотите так же подготовить магазин к сезону распродаж?",
    text: "Расскажите про ассортимент, средний чек и географию продаж. Мы посчитаем, при какой стоимости покупателя реклама будет прибыльной, и предложим план на обычные недели и на распродажу.",
    cta: "Обсудить проект",
  },
};

const en: WomensActivewearContent = {
  badge: "Real case study",
  category: "E-commerce / women's activewear",
  heroTitle: "ROAS 15 on Black Friday for women's activewear",
  heroDescription:
    "An online store selling women's activewear across several countries. We ran Meta Ads for the catalogue and individual products, and prepared a Black Friday sale that delivered the highest return of the whole engagement.",
  primaryCta: { label: "I want this too", href: "#contacts" },
  secondaryCta: { label: "See the numbers", href: "#numbers" },
  heroPanel: {
    label: "Campaign economics",
    title: "Two periods of one campaign",
    badge: "Black Friday",
    segments: [
      { label: "Budget", value: "$1,179" },
      { label: "Revenue", value: "$13,571" },
      { label: "Customer", value: "$10" },
    ],
    economyBadge: "Peak of the sale",
    economyValue: "$311 → $4,690 in 3 days",
    economyNote:
      "In regular weeks advertising returned about ten dollars for every dollar spent; during the sale days it returned about fifteen.",
  },
  facts: [
    { label: "Niche", value: "Women's activewear, own production" },
    { label: "Geography", value: "Sales across several countries" },
    { label: "Channel", value: "Meta Ads: Facebook and Instagram" },
    { label: "Model", value: "Direct sales through the online store" },
    { label: "Key period", value: "3 days of Black Friday" },
    { label: "Agency", value: "Do.Marketing, agency based in Tallinn" },
    { label: "Data source", value: "Meta Ads account and store analytics" },
  ],
  main: {
    label: "Case highlights",
    title: "The sale worked because demand was warmed up in advance",
    paragraphs: [
      "Do.Marketing, a performance marketing agency based in Tallinn, Estonia, ran Meta Ads for an online women's activewear store: $1,179 of budget generated $13,571 in revenue, and during the three Black Friday days ROAS reached 15 at a customer cost of $10.",
      "In fashion, Black Friday is not a standalone three-day campaign — it is the finale of the preceding weeks. Before the sale, advertising already generated $8,881 in sales on an $868 budget, returning about ten dollars for every dollar spent. The audience had time to browse the catalogue, check the size chart and save their favourite pieces.",
      "During the three sale days we worked with an already warm audience and added a short, clear offer. Advertising brought another $4,690 in sales on a $311 budget, a customer cost $10 and the return grew from 10 to 15. Across both periods the store earned $13,571 in revenue on $1,179 of ad spend.",
    ],
    ctaLabel: "Discuss my store",
  },
  cards: [
    {
      label: "Challenge",
      title: "Sell clothing without depending on discounts",
      text: "The store needed a steady flow of orders in regular weeks, not just spikes during sales, plus a predictable customer cost it could scale on.",
    },
    {
      label: "Approach",
      title: "Catalogue, hero products and separate sale logic",
      text: "We split advertising into catalogue promotion, individual bestsellers and seasonal collections, and prepared dedicated creatives and an offer for Black Friday.",
    },
    {
      label: "Result",
      title: "The best return of the whole engagement",
      text: "The three sale days delivered ROAS 15 and a $10 customer — built on an audience collected by the advertising of the previous weeks.",
    },
  ],
  table: {
    label: "The numbers",
    title: "Two periods: before the sale and during Black Friday",
    description:
      "All figures come from the ad account and the store: spend, ad-driven revenue and return for each period.",
    columns: [
      { key: "period", label: "Period" },
      { key: "budget", label: "Budget", align: "right" },
      { key: "revenue", label: "Revenue", align: "right" },
      { key: "roas", label: "ROAS", align: "right" },
    ],
    rows: [
      { period: "Before Black Friday", budget: "$868", revenue: "$8,881", roas: "×10" },
      { period: "Black Friday, 3 days", budget: "$311", revenue: "$4,690", roas: "×15" },
    ],
    total: { period: "Total", budget: "$1,179", revenue: "$13,571", roas: "×11.5" },
    note: "Customer cost during the sale days was $10. The total ROAS of ×11.5 is calculated as combined revenue divided by combined budget.",
  },
  mechanics: {
    label: "What we did",
    title: "How we prepared the store for Black Friday",
    steps: [
      "Split campaigns by purpose: the catalogue for cold audiences, individual products for people already familiar with the brand, and retargeting for product-page viewers.",
      "Built creatives around fabric properties, fit and the size chart — in clothing this is exactly what removes the main objection to buying online.",
      "Grew retargeting audiences in advance so there was someone to show the offer to during the sale, instead of buying attention from scratch in the most expensive auction of the year.",
      "Prepared dedicated creatives and messaging for the three Black Friday days: a short deadline, a clear benefit and the fewest possible steps to the cart.",
      "Kept the sale budget compact ($311) and bought mostly warm audiences — which is why the customer cost stayed at $10.",
    ],
  },
  creatives: {
    label: "Creatives",
    title: "Creatives that sold clothing online",
    description:
      "In fashion the creative has to answer three questions before the click: how it fits, what it is made of and how much it costs. So the designs show the product on a body, fabric properties, the colour palette, the size range and the price.",
    imageAlts: [
      "Meta Ads creative: women's activewear yoga collection with price and fabric details",
      "Instagram Ads creative: sports jumpsuit with Italian fabric properties and size range",
      "Facebook Ads creative: women's push-up leggings with the colour palette",
      "Ad creative: sports jumpsuit shown in five colours with the size range",
      "Ad creative: short sports jumpsuit focused on freedom of movement during training",
      "Ad creative: women's thermal set for winter outdoor training",
    ],
  },
  faq: {
    label: "Questions and answers",
    title: "Common questions about advertising an online clothing store",
    items: [
      {
        question: "What ROAS did women's activewear advertising deliver on Black Friday?",
        answer:
          "During the three Black Friday days ROAS was 15: a $311 budget brought $4,690 in sales. Before the sale ROAS held around 10 — $8,881 in revenue on an $868 budget.",
      },
      {
        question: "How much did it cost to acquire one customer in the online clothing store?",
        answer:
          "During the sale days a customer cost $10. That is the cost of an actual purchase, not of a lead or a website visit.",
      },
      {
        question: "How much did the store earn across both periods?",
        answer:
          "$13,571 of ad-driven revenue on a combined budget of $1,179. That is an average return of about ×11.5 for the whole engagement.",
      },
      {
        question: "Why did the sale perform better than regular weeks?",
        answer:
          "Because the audience was warmed up in advance. During Black Friday the ads were shown to people who had already browsed the catalogue and product pages, and the short offer removed the last doubt.",
      },
      {
        question: "Can this result be repeated for another clothing store?",
        answer:
          "The mechanics can: warming up with the catalogue, answering fit and fabric objections, accumulating audiences and running separate sale logic. The exact figures depend on your margin, average order value and competition in your niche.",
      },
      {
        question: "Which agency ran this advertising?",
        answer:
          "The campaigns were run by Do.Marketing — a performance marketing agency based in Tallinn, Estonia (OÜ Turundusagendid). We run Meta Ads and Google Ads in Russian, Estonian and English.",
      },
      {
        question: "Where do the figures in this case study come from?",
        answer:
          "Budget, revenue and customer cost come from the Meta Ads account and the store analytics for both periods. The total ROAS of ×11.5 is calculated as combined revenue divided by combined budget.",
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
        note: "How we set up campaigns for sales rather than clicks",
      },
      {
        href: "/en/website-development",
        label: "An online store built for advertising",
        note: "What a site needs so traffic reaches the cart",
      },
      {
        href: "/cases/cosmetics-store",
        label: "Case: ROAS 30 in a cosmetics store",
        note: "114 sales at €2.43 on a €277 budget",
      },
      {
        href: "/cases/sadhu-boards",
        label: "Case Sadhu Boards: 15x cheaper leads",
        note: "300–500 leads a month on a €750 budget",
      },
    ],
  },
  nextStep: {
    label: "Next step",
    title: "Want to prepare your store for the sales season the same way?",
    text: "Tell us about your product range, average order value and sales geography. We will calculate the customer cost at which advertising becomes profitable and propose a plan for both regular weeks and the sale.",
    cta: "Discuss a project",
  },
};

const et: WomensActivewearContent = {
  badge: "Reaalne juhtum",
  category: "E-commerce / naiste spordiriided",
  heroTitle: "ROAS 15 Black Fridayl naiste spordiriietel",
  heroDescription:
    "Naiste spordiriiete e-pood müüb mitmesse riiki. Juhtisime Meta Ads kampaaniaid kataloogile ja üksikutele mudelitele ning valmistasime Black Fridayks ette allahindluse, mis andis kogu koostöö kõrgeima tasuvuse.",
  primaryCta: { label: "Soovin sama", href: "#contacts" },
  secondaryCta: { label: "Vaata numbreid", href: "#numbers" },
  heroPanel: {
    label: "Kampaania ökonoomika",
    title: "Ühe kampaania kaks perioodi",
    badge: "Black Friday",
    segments: [
      { label: "Eelarve", value: "$1 179" },
      { label: "Käive", value: "$13 571" },
      { label: "Ostja", value: "$10" },
    ],
    economyBadge: "Müügi tipp",
    economyValue: "$311 → $4 690 kolme päevaga",
    economyNote:
      "Tavanädalatel tõi reklaam tagasi umbes kümme dollarit iga kulutatud dollari kohta, allahindluspäevadel umbes viisteist.",
  },
  facts: [
    { label: "Nišš", value: "Naiste spordiriided, oma tootmine" },
    { label: "Geograafia", value: "Müük mitmesse riiki" },
    { label: "Kanal", value: "Meta Ads: Facebook ja Instagram" },
    { label: "Mudel", value: "Otsemüük e-poe kaudu" },
    { label: "Võtmeperiood", value: "3 Black Friday päeva" },
    { label: "Teostaja", value: "Do.Marketing, agentuur Tallinnas" },
    { label: "Andmete allikas", value: "Meta Ads konto ja poe statistika" },
  ],
  main: {
    label: "Juhtumi tuum",
    title: "Allahindlus töötas, sest nõudlust soojendati ette",
    paragraphs: [
      "Agentuur Do.Marketing (Tallinn, Eesti) juhtis Meta Ads reklaami naiste spordiriiete e-poele: $1 179 eelarvet tõi $13 571 käivet ja kolmel Black Friday päeval ulatus ROAS 15-ni ostja hinnaga $10.",
      "Rõivamüügis ei ole Black Friday eraldi kolmepäevane kampaania, vaid eelnevate nädalate finaal. Enne allahindlust tõi reklaam juba $8 881 müüki $868 eelarvega, ehk tagastas umbes kümme dollarit iga kulutatud dollari kohta. Sihtrühm jõudis kataloogi vaadata, suurustabelit kontrollida ja lemmikmudelid salvestada.",
      "Kolme allahindluspäeva jooksul töötasime juba soojendatud sihtrühmaga ja lisasime lühikese arusaadava pakkumise. Reklaam tõi veel $4 690 müüki $311 eelarvega, ostja maksis $10 ja tasuvus kasvas 10 pealt 15-le. Kokku teenis pood mõlemal perioodil $13 571 käivet $1 179 reklaamikulu juures.",
    ],
    ctaLabel: "Aruta oma poodi",
  },
  cards: [
    {
      label: "Ülesanne",
      title: "Müüa rõivaid ilma allahindlussõltuvuseta",
      text: "Pood vajas stabiilset tellimuste voogu ka tavanädalatel, mitte ainult allahindluste ajal, ning prognoositavat ostja hinda, millega saab skaleerida.",
    },
    {
      label: "Lähenemine",
      title: "Kataloog, mudelid ja eraldi loogika allahindluseks",
      text: "Jagasime reklaami kataloogi tutvustuseks, üksikute bestsellerite ja hooajakollektsioonide müügiks ning valmistasime Black Fridayks eraldi kreatiivid ja pakkumise.",
    },
    {
      label: "Tulemus",
      title: "Kogu koostöö parim tasuvus",
      text: "Kolm allahindluspäeva andsid ROAS 15 ja ostja hinnaga $10 — ja seda tänu eelnevate nädalate reklaamiga kogutud sihtrühmale.",
    },
  ],
  table: {
    label: "Numbrid",
    title: "Kaks perioodi: enne allahindlust ja Black Friday päevadel",
    description:
      "Kõik summad pärinevad reklaamikontost ja poest: kulu, reklaamist tulnud käive ja tasuvus iga perioodi kohta.",
    columns: [
      { key: "period", label: "Periood" },
      { key: "budget", label: "Eelarve", align: "right" },
      { key: "revenue", label: "Käive", align: "right" },
      { key: "roas", label: "ROAS", align: "right" },
    ],
    rows: [
      { period: "Enne Black Fridayd", budget: "$868", revenue: "$8 881", roas: "×10" },
      { period: "Black Friday, 3 päeva", budget: "$311", revenue: "$4 690", roas: "×15" },
    ],
    total: { period: "Kokku", budget: "$1 179", revenue: "$13 571", roas: "×11,5" },
    note: "Ostja hind allahindluspäevadel oli $10. Koond-ROAS ×11,5 on arvutatud kogukäibe ja kogueelarve suhtena.",
  },
  mechanics: {
    label: "Mida me tegime",
    title: "Kuidas valmistasime poe Black Fridayks ette",
    steps: [
      "Jagasime kampaaniad eesmärgi järgi: kataloog külmale sihtrühmale, üksikud mudelid brändi juba tundvatele inimestele ja taassihtimine tootelehe vaatajatele.",
      "Ehitasime kreatiivid kanga omaduste, istuvuse ja suurustabeli ümber — rõivastes just see eemaldab peamise vastuväite veebist ostmisel.",
      "Kasvatasime taassihtimise sihtrühmi ette, et allahindluse ajal oleks kellele pakkumist näidata ega peaks aasta kalleimal oksjonil tähelepanu nullist ostma.",
      "Valmistasime kolmeks Black Friday päevaks eraldi kreatiivid ja sõnumid: lühike tähtaeg, selge kasu ja minimaalselt samme ostukorvini.",
      "Hoidsime allahindluse eelarve kompaktsena ($311) ja ostsime peamiselt sooja sihtrühma — tänu sellele jäi ostja hind $10 juurde.",
    ],
  },
  creatives: {
    label: "Kreatiivid",
    title: "Kreatiivid, mis müüsid rõivaid veebis",
    description:
      "Rõivastes peab kreatiiv vastama kolmele küsimusele juba enne klikki: kuidas istub, millest on õmmeldud ja kui palju maksab. Seetõttu on makettidel mudel, kanga omadused, värvipalett, suurusvalik ja hind.",
    imageAlts: [
      "Meta Ads kreatiiv: naiste spordiriiete jooga-kollektsioon hinna ja kanga kirjeldusega",
      "Instagram Ads kreatiiv: spordikombinesoon itaalia kanga omaduste ja suurusvalikuga",
      "Facebook Ads kreatiiv: naiste push-up-legginsid värvipaletiga",
      "Reklaamikreatiiv: spordikombinesoon viies värvis koos suurusvalikuga",
      "Reklaamikreatiiv: lühike spordikombinesoon liikumisvabaduse rõhuasetusega",
      "Reklaamikreatiiv: naiste termokomplekt talviseks välitreeninguks",
    ],
  },
  faq: {
    label: "Küsimused ja vastused",
    title: "Levinud küsimused rõivapoe reklaami kohta",
    items: [
      {
        question: "Millise ROAS-i andis naiste spordiriiete reklaam Black Fridayl?",
        answer:
          "Kolmel Black Friday päeval oli ROAS 15: $311 eelarve tõi $4 690 müüki. Enne allahindlust püsis ROAS umbes 10 juures — $8 881 käivet $868 eelarvega.",
      },
      {
        question: "Kui palju maksis ühe ostja hankimine rõivapoes?",
        answer:
          "Allahindluspäevadel maksis ostja $10. See on just ostu, mitte päringu ega veebilehe külastuse hind.",
      },
      {
        question: "Kui palju teenis pood mõlemal perioodil kokku?",
        answer:
          "$13 571 reklaamist tulnud käivet $1 179 kogueelarvega. See teeb kogu perioodi keskmiseks tasuvuseks umbes ×11,5.",
      },
      {
        question: "Miks töötas allahindlus paremini kui tavanädalad?",
        answer:
          "Sest sihtrühma soojendati ette. Black Friday päevadel näidati reklaami inimestele, kes olid juba kataloogi ja tootelehti vaadanud, ning lühike pakkumine eemaldas viimase kahtluse.",
      },
      {
        question: "Kas sellist tulemust saab korrata teises rõivapoes?",
        answer:
          "Mehaanikat saab: kataloogiga soojendamine, istuvuse ja kanga vastuväidete lahendamine, sihtrühmade kogumine ja eraldi allahindlusloogika. Täpsed numbrid sõltuvad marginaalist, keskmisest ostukorvist ja konkurentsist teie nišis.",
      },
      {
        question: "Milline agentuur seda reklaami juhtis?",
        answer:
          "Kampaaniaid juhtis Do.Marketing — Tallinnas asuv tulemusturunduse agentuur (OÜ Turundusagendid). Teeme Meta Ads ja Google Ads kampaaniaid vene, eesti ja inglise keeles.",
      },
      {
        question: "Kust pärinevad selle töö numbrid?",
        answer:
          "Eelarve, käive ja ostja hind pärinevad Meta Ads kontost ja poe statistikast mõlema perioodi kohta. Koond-ROAS ×11,5 on arvutatud kogukäibe jagamisel kogueelarvega.",
      },
    ],
  },
  related: {
    label: "Seotud materjalid",
    title: "Mida edasi lugeda",
    links: [
      {
        href: "/et/meta-ads",
        label: "Meta Ads reklaam e-poele",
        note: "Kuidas seadistame kampaaniad müügile, mitte klikkidele",
      },
      {
        href: "/et/website-development",
        label: "E-poe veebileht reklaami jaoks",
        note: "Mis peab lehel olema, et liiklus jõuaks ostukorvini",
      },
      {
        href: "/cases/cosmetics-store",
        label: "Töö: ROAS 30 kosmeetika e-poes",
        note: "114 müüki hinnaga €2,43 €277 eelarvega",
      },
      {
        href: "/cases/sadhu-boards",
        label: "Töö Sadhu Boards: 15 korda odavam päring",
        note: "300–500 päringut kuus €750 eelarvega",
      },
    ],
  },
  nextStep: {
    label: "Järgmine samm",
    title: "Kas soovite oma poe samamoodi müügihooajaks ette valmistada?",
    text: "Rääkige oma tootevalikust, keskmisest ostukorvist ja müügigeograafiast. Arvutame välja, millise ostja hinna juures reklaam kasumlikuks muutub, ja pakume plaani nii tavanädalateks kui ka allahindluseks.",
    cta: "Aruta projekti",
  },
};

export const womensActivewearContent: Record<Language, WomensActivewearContent> = {
  ru,
  en,
  et,
};
