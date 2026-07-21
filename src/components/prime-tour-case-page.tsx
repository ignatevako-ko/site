import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { siteContent, type Language } from "@/data/site-content";

type Stat = {
  value: string;
  label: string;
};

type Fact = {
  label: string;
  value: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type CaseCopy = {
  badge: string;
  category: string;
  title: string;
  lead: string;
  primaryCta: string;
  secondaryCta: string;
  statsTitle: string;
  statsBadge: string;
  proofNote: string;
  facts: Fact[];
  stats: Stat[];
  mainLabel: string;
  mainTitle: string;
  mainParagraphs: string[];
  taskLabel: string;
  taskTitle: string;
  taskText: string;
  approachLabel: string;
  approachTitle: string;
  approachText: string;
  resultLabel: string;
  resultTitle: string;
  resultText: string;
  mechanicsLabel: string;
  mechanicsTitle: string;
  steps: string[];
  creativesLabel: string;
  creativesTitle: string;
  creativesText: string;
  creativeCaptionPrefix: string;
  faqLabel: string;
  faqTitle: string;
  faq: FaqItem[];
  nextLabel: string;
  nextTitle: string;
  nextText: string;
  nextCta: string;
};

export const primeTourCaseCopy = {
  ru: {
    badge: "Реальный кейс",
    category: "Travel / Meta Ads",
    title: "ROAS 3790% для Prime Tour: 11 броней при бюджете €390",
    lead:
      "Prime Tour - агентство авторских и чартерных туров. Мы настроили Meta Ads для русско- и эстоноязычной аудитории в Эстонии: разделили обычные туры, горячие предложения и авторские маршруты, протестировали яркие видео и карусели и довели лучший срез до ROAS 3790%.",
    primaryCta: "Хочу также",
    secondaryCta: "Смотреть цифры",
    statsTitle: "Ключевые показатели",
    statsBadge: "ROAS 3790%",
    proofNote:
      "Цифры собраны из отчетности: майский срез, Грузия 2 апреля - 13 мая и авторский тур на Мадейру.",
    facts: [
      { label: "Клиент", value: "Prime Tour, агентство авторских и чартерных туров" },
      { label: "География", value: "Эстония, русско- и эстоноязычная аудитория" },
      { label: "Канал", value: "Meta Ads: видео, Reels и карусели" },
      { label: "Продукт", value: "Обычные туры, горячие туры и авторские маршруты" },
      { label: "Лучший срез", value: "ROAS 3790% по направлению Грузия" },
      { label: "Мадейра", value: "8 проданных мест, €45 за бронь, ROAS 3500%" },
      { label: "Май", value: "94 лида по €6.07 за лид" },
      { label: "Креативы", value: "Лучше всего сработали видео и карусели с CTR 5-8%" },
    ],
    stats: [
      { value: "11", label: "броней из рекламных кампаний" },
      { value: "€390", label: "рекламный бюджет в основном срезе" },
      { value: "3790%", label: "ROAS по направлению Грузия" },
      { value: "€31.53", label: "стоимость брони в лучшем срезе" },
      { value: "94", label: "лида за майский период" },
      { value: "5-8%", label: "CTR у сильных видео и каруселей" },
    ],
    mainLabel: "Главное",
    mainTitle: "Туры продавались через конкретные направления, а не через общую рекламу",
    mainParagraphs: [
      "В туристической нише людям важно быстро увидеть маршрут, даты, настроение поездки и понятную причину оставить заявку. Поэтому рекламу не собирали в одну широкую кампанию, а разложили по направлениям и типу спроса.",
      "Для обычных и горячих туров работали более прямые объявления с датами и ценой, для авторских маршрутов - визуальные видео и карусели, которые показывали впечатления от поездки. Такой подход дал 10 броней горячих туров и 1 бронь авторского тура.",
    ],
    taskLabel: "Задача",
    taskTitle: "Получить брони на туры без внешних ссылок в коммуникации",
    taskText:
      "Нужно было продвигать обычные, чартерные и авторские туры для аудитории в Эстонии и считать не клики ради кликов, а заявки, брони и ROAS.",
    approachLabel: "Подход",
    approachTitle: "Разделили спрос по языку и направлению",
    approachText:
      "Отдельно тестировали русско- и эстоноязычные аудитории, обычные туры, экзотические страны и авторские маршруты. Креативы показывали направление и эмоцию поездки сразу в первом экране.",
    resultLabel: "Результат",
    resultTitle: "ROAS 3790% и 11 броней в лучшем направлении",
    resultText:
      "По направлению Грузия отчетность показала €252.23 расходов, 8 броней, €31.53 за бронь и ROAS 3790%. По Мадейре зафиксировано 8 проданных мест при €45 за бронь и ROAS 3500%.",
    mechanicsLabel: "Что сделали",
    mechanicsTitle: "Собрали рекламу вокруг маршрутов, языка и готовности купить",
    steps: [
      "Разделили кампании по типу тура: обычные предложения, горячие туры, экзотические направления и авторские маршруты.",
      "Сделали отдельные коммуникации для русско- и эстоноязычной аудитории, чтобы объявление звучало естественно для каждого сегмента.",
      "Поставили в тест видео, Reels и карусели: форматы, где можно быстро показать маршрут, атмосферу и даты поездки.",
      "Оценивали не только CTR и клики, а путь дальше: лиды, стоимость брони, количество броней и ROAS.",
      "Оставили в масштабе связки, где яркий визуал давал высокий CTR и приводил к реальным бронированиям.",
    ],
    creativesLabel: "Креативы",
    creativesTitle: "Видео и карусели для авторских и чартерных туров",
    creativesText:
      "На странице показываем сами рекламные материалы без внешних ссылок на исходные файлы.",
    creativeCaptionPrefix: "Креатив Prime Tour",
    faqLabel: "FAQ",
    faqTitle: "Коротко о цифрах",
    faq: [
      {
        question: "Почему в кейсе указан ROAS, а не окупаемость?",
        answer:
          "Потому что в отчетности показатель отражает возврат рекламных расходов. Для направления Грузия он составил 3790%, поэтому на странице используется формулировка ROAS 3790%.",
      },
      {
        question: "Что лучше всего сработало в рекламе Prime Tour?",
        answer:
          "Лучший результат дали яркие видео и карусели с CTR 5-8%. Они быстро показывали маршрут, визуальную ценность тура и следующий шаг для заявки.",
      },
      {
        question: "Какие направления использовались в отчетности?",
        answer:
          "В данных есть майский срез по Мадейре, Грузии, обычным турам и турам в экзотические страны, а также отдельные расчеты по Грузии и Мадейре.",
      },
    ],
    nextLabel: "Следующий шаг",
    nextTitle: "Хотите продавать туры через понятную performance-систему?",
    nextText:
      "Покажите нам направления, сезонность и текущие цифры. Мы оценим, какие туры стоит выводить в отдельные кампании и где можно считать брони и ROAS точнее.",
    nextCta: "Обсудить проект",
  },
  en: {
    badge: "Real case",
    category: "Travel / Meta Ads",
    title: "3790% ROAS for Prime Tour: 11 bookings on a €390 budget",
    lead:
      "Prime Tour is an agency for custom and charter tours. We set up Meta Ads for Russian- and Estonian-speaking audiences in Estonia, separated standard tours, last-minute offers and custom routes, tested vivid videos and carousels, and reached 3790% ROAS in the best segment.",
    primaryCta: "I want this too",
    secondaryCta: "See the numbers",
    statsTitle: "Key metrics",
    statsBadge: "3790% ROAS",
    proofNote:
      "The numbers come from reporting: the May overview, Georgia from April 2 to May 13, and the Madeira custom tour.",
    facts: [
      { label: "Client", value: "Prime Tour, custom and charter tour agency" },
      { label: "Market", value: "Estonia, Russian- and Estonian-speaking audiences" },
      { label: "Channel", value: "Meta Ads: video, Reels and carousels" },
      { label: "Product", value: "Standard tours, last-minute tours and custom routes" },
      { label: "Best segment", value: "3790% ROAS for Georgia" },
      { label: "Madeira", value: "8 seats sold, €45 per booking, 3500% ROAS" },
      { label: "May", value: "94 leads at €6.07 per lead" },
      { label: "Creatives", value: "Videos and carousels with 5-8% CTR performed best" },
    ],
    stats: [
      { value: "11", label: "bookings from ad campaigns" },
      { value: "€390", label: "ad budget in the main snapshot" },
      { value: "3790%", label: "ROAS for the Georgia segment" },
      { value: "€31.53", label: "cost per booking in the best segment" },
      { value: "94", label: "leads during May" },
      { value: "5-8%", label: "CTR for strong videos and carousels" },
    ],
    mainLabel: "Core idea",
    mainTitle: "Tours were sold through specific destinations, not generic travel ads",
    mainParagraphs: [
      "In travel, people need to quickly see the route, dates, mood and a clear reason to leave a request. So we did not put everything into one broad campaign; we split the work by destination and demand type.",
      "For standard and last-minute tours, the ads were more direct with dates and price. For custom routes, visual videos and carousels showed the experience of the trip. This setup brought 10 last-minute tour bookings and 1 custom tour booking.",
    ],
    taskLabel: "Task",
    taskTitle: "Generate bookings for tours and keep the reporting tied to business outcomes",
    taskText:
      "The goal was to promote standard, charter and custom tours to audiences in Estonia and optimize for leads, bookings and ROAS, not clicks for their own sake.",
    approachLabel: "Approach",
    approachTitle: "Split demand by language and destination",
    approachText:
      "We tested Russian- and Estonian-speaking audiences separately, along with standard tours, exotic destinations and custom routes. Creatives showed the destination and travel emotion immediately.",
    resultLabel: "Result",
    resultTitle: "3790% ROAS and 11 bookings in the best destination",
    resultText:
      "For Georgia, the report showed €252.23 spend, 8 bookings, €31.53 cost per booking and 3790% ROAS. For Madeira, 8 seats were sold at €45 per booking and 3500% ROAS.",
    mechanicsLabel: "What we did",
    mechanicsTitle: "Built the ad system around routes, language and readiness to buy",
    steps: [
      "Split campaigns by tour type: standard offers, last-minute tours, exotic destinations and custom routes.",
      "Created separate communication for Russian- and Estonian-speaking audiences so each ad sounded natural.",
      "Tested video, Reels and carousels where the route, atmosphere and dates could be shown quickly.",
      "Looked beyond CTR and clicks to leads, cost per booking, booking count and ROAS.",
      "Scaled combinations where strong visuals delivered high CTR and real bookings.",
    ],
    creativesLabel: "Creatives",
    creativesTitle: "Videos and carousels for custom and charter tours",
    creativesText:
      "The page shows the ad materials themselves without external links to source files.",
    creativeCaptionPrefix: "Prime Tour creative",
    faqLabel: "FAQ",
    faqTitle: "Numbers in brief",
    faq: [
      {
        question: "Why does the case use ROAS instead of payback wording?",
        answer:
          "Because the report reflects return on ad spend. For Georgia, the metric reached 3790%, so the page uses 3790% ROAS.",
      },
      {
        question: "What performed best for Prime Tour?",
        answer:
          "Vivid videos and carousels with 5-8% CTR performed best because they showed the route, the value of the trip and the next step quickly.",
      },
      {
        question: "Which destinations were included in the reporting?",
        answer:
          "The data includes a May snapshot for Madeira, Georgia, standard tours and exotic destinations, plus separate calculations for Georgia and Madeira.",
      },
    ],
    nextLabel: "Next step",
    nextTitle: "Want to sell tours through a clear performance system?",
    nextText:
      "Show us your destinations, seasonality and current numbers. We will assess which tours should become separate campaigns and where bookings and ROAS can be measured more accurately.",
    nextCta: "Discuss the project",
  },
  et: {
    badge: "Päris töö",
    category: "Travel / Meta Ads",
    title: "3790% ROAS Prime Tourile: 11 broneeringut €390 eelarvega",
    lead:
      "Prime Tour on autori- ja tšarterreiside agentuur. Seadistasime Meta Adsi vene- ja eestikeelsele sihtrühmale Eestis, eraldasime tavareisid, viimase hetke pakkumised ja autorimarsruudid, testisime erksaid videoid ja karusselle ning jõudsime parimas lõigus 3790% ROAS-ini.",
    primaryCta: "Soovin sama",
    secondaryCta: "Vaata numbreid",
    statsTitle: "Põhinäitajad",
    statsBadge: "ROAS 3790%",
    proofNote:
      "Numbrid pärinevad aruandlusest: mai ülevaade, Gruusia 2. aprillist 13. maini ning Madeira autorireis.",
    facts: [
      { label: "Klient", value: "Prime Tour, autori- ja tšarterreiside agentuur" },
      { label: "Turg", value: "Eesti, vene- ja eestikeelne sihtrühm" },
      { label: "Kanal", value: "Meta Ads: video, Reels ja karussellid" },
      { label: "Toode", value: "Tavareisid, viimase hetke reisid ja autorimarsruudid" },
      { label: "Parim lõik", value: "3790% ROAS Gruusia suunal" },
      { label: "Madeira", value: "8 müüdud kohta, €45 broneering, 3500% ROAS" },
      { label: "Mai", value: "94 päringut hinnaga €6.07" },
      { label: "Loovlahendused", value: "Parimad olid videod ja karussellid CTR-iga 5-8%" },
    ],
    stats: [
      { value: "11", label: "broneeringut reklaamikampaaniatest" },
      { value: "€390", label: "reklaamieelarve põhilõigus" },
      { value: "3790%", label: "ROAS Gruusia suunal" },
      { value: "€31.53", label: "broneeringu hind parimas lõigus" },
      { value: "94", label: "päringut mais" },
      { value: "5-8%", label: "CTR tugevamatel videotel ja karussellidel" },
    ],
    mainLabel: "Põhiline",
    mainTitle: "Reise müüdi konkreetsete sihtkohtade, mitte üldise reisireklaami kaudu",
    mainParagraphs: [
      "Reisivaldkonnas peab inimene kiiresti nägema marsruuti, kuupäevi, reisi meeleolu ja selget põhjust päring jätta. Seetõttu ei pannud me kõike ühte laia kampaaniasse, vaid jagasime reklaami sihtkoha ja nõudluse tüübi järgi.",
      "Tava- ja viimase hetke reisidel kasutasime otsesemaid sõnumeid kuupäevade ja hinnaga. Autorimarsruutidel näitasid videod ja karussellid reisi kogemust. See tõi 10 viimase hetke reisi broneeringut ja 1 autorireisi broneeringu.",
    ],
    taskLabel: "Ülesanne",
    taskTitle: "Tuua reisidele broneeringuid ja siduda aruandlus äritulemusega",
    taskText:
      "Eesmärk oli reklaamida tava-, tšarter- ja autorireise Eesti sihtrühmale ning hinnata päringuid, broneeringuid ja ROAS-i, mitte lihtsalt klikke.",
    approachLabel: "Lähenemine",
    approachTitle: "Jagasime nõudluse keele ja sihtkoha järgi",
    approachText:
      "Testisime eraldi vene- ja eestikeelseid sihtrühmi, tavareise, eksootilisi sihtkohti ja autorimarsruute. Loovlahendused näitasid sihtkohta ja reisi emotsiooni kohe esimesel hetkel.",
    resultLabel: "Tulemus",
    resultTitle: "3790% ROAS ja 11 broneeringut parimas suunas",
    resultText:
      "Gruusia aruandes oli kulu €252.23, 8 broneeringut, broneeringu hind €31.53 ja ROAS 3790%. Madeira puhul müüdi 8 kohta, broneeringu hind oli €45 ja ROAS 3500%.",
    mechanicsLabel: "Mida tegime",
    mechanicsTitle: "Ehitasime reklaami marsruutide, keele ja ostuvalmiduse ümber",
    steps: [
      "Jagasime kampaaniad reisitüübi järgi: tavapakkumised, viimase hetke reisid, eksootilised sihtkohad ja autorimarsruudid.",
      "Tegime eraldi sõnumid vene- ja eestikeelsele sihtrühmale, et reklaam kõlaks loomulikult.",
      "Testisime videoid, Reelse ja karusselle, kus sai kiiresti näidata marsruuti, atmosfääri ja kuupäevi.",
      "Hindasime lisaks CTR-ile ja klikkidele ka päringuid, broneeringu hinda, broneeringute arvu ja ROAS-i.",
      "Jätsime skaleerimisse seosed, kus tugev visuaal tõi kõrge CTR-i ja päris broneeringud.",
    ],
    creativesLabel: "Loovlahendused",
    creativesTitle: "Videod ja karussellid autori- ja tšarterreisidele",
    creativesText:
      "Lehel kuvame reklaammaterjalid ise, ilma väliste linkideta algfailidele.",
    creativeCaptionPrefix: "Prime Touri loovlahendus",
    faqLabel: "FAQ",
    faqTitle: "Numbrid lühidalt",
    faq: [
      {
        question: "Miks on töös kirjas ROAS, mitte tasuvus?",
        answer:
          "Sest aruandluses mõõdetakse reklaamikulu tootlust. Gruusia suunal oli näitaja 3790%, seetõttu kasutab leht sõnastust ROAS 3790%.",
      },
      {
        question: "Mis Prime Touri reklaamis kõige paremini töötas?",
        answer:
          "Parimad olid erksad videod ja karussellid CTR-iga 5-8%, sest need näitasid kiiresti marsruuti, reisi väärtust ja järgmist sammu.",
      },
      {
        question: "Millised suunad olid aruandluses?",
        answer:
          "Andmetes on mai ülevaade Madeira, Gruusia, tavareiside ja eksootiliste reiside kohta ning eraldi arvutused Gruusia ja Madeira kohta.",
      },
    ],
    nextLabel: "Järgmine samm",
    nextTitle: "Tahad müüa reise selge performance-süsteemiga?",
    nextText:
      "Näita meile sihtkohti, hooajalisust ja praeguseid numbreid. Hindame, millised reisid vajavad eraldi kampaaniat ning kus saab broneeringuid ja ROAS-i täpsemalt mõõta.",
    nextCta: "Arutame projekti",
  },
} satisfies Record<Language, CaseCopy>;

const languageLabels: Record<Language, string> = {
  ru: "RU",
  en: "EN",
  et: "ET",
};

const caseUrls: Record<Language, string> = {
  ru: "/cases/prime-tour",
  en: "/en/cases/prime-tour",
  et: "/et/cases/prime-tour",
};

const navItems: Record<Language, Array<{ href: string; label: string }>> = {
  ru: [
    { href: "/ru#cases", label: "Кейсы" },
    { href: "/ru#services", label: "Услуги" },
    { href: "/ru#about", label: "О нас" },
    { href: "/ru#testimonials", label: "Отзывы" },
    { href: "/ru#contacts", label: "Контакты" },
  ],
  en: [
    { href: "/en#cases", label: "Cases" },
    { href: "/en#services", label: "Services" },
    { href: "/en#about", label: "About" },
    { href: "/en#testimonials", label: "Reviews" },
    { href: "/en#contacts", label: "Contacts" },
  ],
  et: [
    { href: "/et#cases", label: "Tööd" },
    { href: "/et#services", label: "Teenused" },
    { href: "/et#about", label: "Meist" },
    { href: "/et#testimonials", label: "Tagasiside" },
    { href: "/et#contacts", label: "Kontakt" },
  ],
};

const homeLabels: Record<Language, string> = {
  ru: "Вернуться на главную",
  en: "Back to home",
  et: "Tagasi avalehele",
};

const creativeVideos = [
  {
    src: "/videos/cases/prime-tour/web/creative-01.mp4",
    type: "video/mp4",
    title: "Prime Tour creative 01",
  },
  {
    src: "/videos/cases/prime-tour/web/creative-02.mp4",
    type: "video/mp4",
    title: "Prime Tour creative 02",
  },
  {
    src: "/videos/cases/prime-tour/web/creative-03.mp4",
    type: "video/mp4",
    title: "Prime Tour creative 03",
  },
  {
    src: "/videos/cases/prime-tour/web/creative-04.mp4",
    type: "video/mp4",
    title: "Prime Tour creative 04",
  },
  {
    src: "/videos/cases/prime-tour/web/creative-05.mp4",
    type: "video/mp4",
    title: "Prime Tour creative 05",
  },
  {
    src: "/videos/cases/prime-tour/web/creative-06.mp4",
    type: "video/mp4",
    title: "Prime Tour creative 06",
  },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[13px] font-semibold uppercase tracking-[0.24em] text-violet-300">
      {children}
    </p>
  );
}

function Header({ language }: { language: Language }) {
  const homeHref = language === "ru" ? "/ru" : `/${language}`;

  return (
    <header className="sticky top-0 z-50 -mx-2 px-0 pt-0">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 rounded-full border border-white/10 bg-slate-950/80 px-3 py-3 shadow-[0_20px_70px_rgba(2,6,23,0.38)] backdrop-blur-xl sm:gap-4 sm:px-5 lg:gap-6 lg:px-8 lg:py-4">
        <Link href={homeHref} aria-label="Do.Marketing home" className="shrink-0">
          <Image
            src="/brand/logo-white-site-cropped.png"
            alt="Do.Marketing"
            width={165}
            height={55}
            priority
            className="block h-10 w-auto sm:h-12 lg:h-[3.375rem]"
            sizes="(max-width: 640px) 124px, 165px"
          />
        </Link>

        <Link
          href={homeHref}
          aria-label={homeLabels[language]}
          title={homeLabels[language]}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-violet-300/60 hover:bg-white/10"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems[language].map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-violet-300">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <a
              href="tel:+37257843293"
              className="block text-[14px] uppercase tracking-[0.2em] text-slate-400 transition hover:text-violet-300"
            >
              +37257843293
            </a>
            <a
              href="mailto:ceo@domarketing.ee"
              className="mt-1 block text-[13.5px] text-slate-500 transition hover:text-violet-300"
            >
              ceo@domarketing.ee
            </a>
          </div>

          <div className="inline-flex shrink-0 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur" aria-label="Language switcher" role="group">
            {(["en", "et", "ru"] as const).map((item) => (
              <Link
                key={item}
                className={`rounded-full px-2.5 py-2 text-xs font-semibold tracking-[0.12em] transition sm:px-3 ${
                  item === language
                    ? "bg-violet-400 text-slate-950"
                    : "text-slate-300 hover:text-white"
                }`}
                aria-current={item === language ? "page" : undefined}
                href={caseUrls[item]}
              >
                {languageLabels[item]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export function PrimeTourCasePage({ language }: { language: Language }) {
  const copy = primeTourCaseCopy[language];
  const footerContent = {
    ...siteContent[language],
    footer: {
      ...siteContent[language].footer,
      links: navItems[language].filter((item) => !item.href.includes("testimonials")),
    },
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6rem] top-[-3rem] h-[20rem] w-[20rem] rounded-full bg-amber-200/20 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-violet-400/12 blur-3xl" />
        <div className="absolute right-[-9rem] top-32 h-[26rem] w-[26rem] rounded-full bg-fuchsia-200/12 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[-6rem] h-[24rem] w-[24rem] rounded-full bg-violet-200/10 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-6rem] h-[20rem] w-[20rem] rounded-full bg-amber-100/16 blur-3xl" />
        <div className="grid-overlay absolute inset-0 opacity-40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-8 lg:px-10">
        <Header language={language} />

        <section className="grid gap-10 py-12 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:py-16">
          <div className="space-y-7">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-violet-300/30 bg-violet-400/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-violet-100">
                {copy.badge}
              </span>
              <span className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-[12px] font-medium text-slate-300">
                {copy.category}
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-[38px] font-light leading-[1.02] text-white sm:text-[56px] lg:text-[70px]">
                {copy.title}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">{copy.lead}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contacts"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-violet-400 px-7 text-base font-semibold text-slate-950 transition hover:bg-violet-300"
              >
                {copy.primaryCta}
              </Link>
              <Link
                href="#results"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-base font-semibold text-white transition hover:border-violet-300/60 hover:bg-white/10"
              >
                {copy.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="glass-shell relative overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 shadow-[0_30px_90px_rgba(2,6,23,0.42)] sm:p-8">
            <div className="relative flex flex-col gap-6">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-violet-200">
                    {copy.statsTitle}
                  </p>
                  <h2 className="text-[28px] font-light leading-tight text-white sm:text-[34px]">
                    Prime Tour
                  </h2>
                </div>
                <div className="shrink-0 rounded-full border border-violet-300/30 bg-violet-400/10 px-4 py-2 text-sm font-semibold text-violet-100">
                  {copy.statsBadge}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {copy.stats.map((item) => (
                  <div
                    key={item.label}
                    className="flex min-h-[8.25rem] flex-col justify-between rounded-[1.1rem] border border-white/10 bg-slate-900/80 p-5 backdrop-blur"
                  >
                    <p className="text-[32px] font-semibold leading-none text-white">{item.value}</p>
                    <p className="text-sm leading-5 text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.1rem] border border-white/10 bg-slate-950/45 px-5 py-4">
                <p className="text-sm leading-6 text-slate-300">{copy.proofNote}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="results" className="grid gap-5 border-y border-white/10 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {copy.facts.map((item) => (
            <div key={item.label} className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
              <p className="text-base leading-6 text-slate-100">{item.value}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <SectionLabel>{copy.mainLabel}</SectionLabel>
            <h2 className="text-[34px] font-light leading-tight text-white sm:text-[46px]">
              {copy.mainTitle}
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            {copy.mainParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="grid gap-6 py-4 lg:grid-cols-3">
          {[
            { label: copy.taskLabel, title: copy.taskTitle, text: copy.taskText },
            { label: copy.approachLabel, title: copy.approachTitle, text: copy.approachText },
            { label: copy.resultLabel, title: copy.resultTitle, text: copy.resultText },
          ].map((item) => (
            <article key={item.label} className="rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-6">
              <SectionLabel>{item.label}</SectionLabel>
              <h3 className="mt-4 text-2xl font-light text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-400">{item.text}</p>
            </article>
          ))}
        </section>

        <section id="mechanics" className="grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <SectionLabel>{copy.mechanicsLabel}</SectionLabel>
            <h2 className="text-[34px] font-light leading-tight text-white sm:text-[46px]">
              {copy.mechanicsTitle}
            </h2>
          </div>
          <div className="space-y-3">
            {copy.steps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-[1.25rem] border border-white/10 bg-slate-950/55 p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-400 text-sm font-semibold text-slate-950">
                  {index + 1}
                </span>
                <p className="text-base leading-7 text-slate-300">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10">
          <div className="max-w-3xl space-y-4">
            <SectionLabel>{copy.creativesLabel}</SectionLabel>
            <h2 className="text-[34px] font-light leading-tight text-white sm:text-[46px]">
              {copy.creativesTitle}
            </h2>
            <p className="text-base leading-7 text-slate-400">{copy.creativesText}</p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {creativeVideos.map((item, index) => (
              <figure
                key={item.src}
                className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.045]"
              >
                <div className="relative aspect-[9/16] bg-slate-950">
                  <video
                    className="h-full w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    muted
                    aria-label={`${copy.creativeCaptionPrefix} ${index + 1}`}
                  >
                    <source src={item.src} type={item.type} />
                  </video>
                </div>
                <figcaption className="min-h-14 px-4 py-3 text-sm leading-5 text-slate-300">
                  {copy.creativeCaptionPrefix} {index + 1}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <SectionLabel>{copy.faqLabel}</SectionLabel>
            <h2 className="text-[34px] font-light leading-tight text-white sm:text-[46px]">
              {copy.faqTitle}
            </h2>
          </div>
          <div className="space-y-4">
            {copy.faq.map((item) => (
              <article key={item.question} className="rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-6">
                <h3 className="text-xl font-semibold text-white">{item.question}</h3>
                <p className="mt-3 text-base leading-7 text-slate-400">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-[1.75rem] border border-violet-300/20 bg-violet-400/10 p-7 sm:p-9">
          <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-3">
              <SectionLabel>{copy.nextLabel}</SectionLabel>
              <h2 className="text-[32px] font-light text-white">{copy.nextTitle}</h2>
              <p className="max-w-3xl text-base leading-7 text-slate-300">{copy.nextText}</p>
            </div>
            <Link
              href="#contacts"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 text-base font-semibold text-slate-950 transition hover:bg-violet-100"
            >
              {copy.nextCta}
            </Link>
          </div>
        </section>
      </div>

      <SiteFooter content={footerContent} language={language} />
    </main>
  );
}
