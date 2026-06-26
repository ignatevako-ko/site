"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { CreativeGallery, type CreativeGalleryItem } from "@/components/creative-gallery";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { defaultLanguage, localizedPath } from "@/lib/locales";
import { getLandingAdditionalServices } from "@/lib/services";
import { siteContent, type CaseStudy, type Language } from "@/data/site-content";

const casesUiCopy: Record<Language, { badge: string; more: string }> = {
  en: { badge: "Case", more: "See more" },
  et: { badge: "Töö", more: "Vaata veel" },
  ru: { badge: "Кейс", more: "Смотреть еще" },
};

const caseBackgrounds = [
  "from-[#14192f] via-[#1c2342] to-[#3b1d52]",
  "from-[#1a172d] via-[#2a2042] to-[#4b2a5d]",
  "from-[#131b34] via-[#1d2947] to-[#304e6c]",
  "from-[#17162d] via-[#2a1e43] to-[#443661]",
  "from-[#171f38] via-[#203057] to-[#22536b]",
  "from-[#1d1730] via-[#31214b] to-[#5b2d54]",
] as const;

const pricingByLanguage: Record<
  Language,
  {
    priceLabel: string;
    budgetBadge: string;
    pricingLabel: string;
    managementLabel: string;
    prices: Array<{ budget: string; price: string }>;
    cta: string;
  }
> = {
  en: {
    priceLabel: "650€",
    budgetBadge: "+ ad budget: from 350€",
    pricingLabel: "Pricing",
    managementLabel: "MANAGEMENT FEE FOR AD BUDGET",
    prices: [
      { budget: "up to 1500€", price: "650€" },
      { budget: "up to 2500€", price: "770€" },
      { budget: "from 2500€", price: "990€" },
    ],
    cta: "Start a conversation",
  },
  et: {
    priceLabel: "650€",
    budgetBadge: "+ reklaamieelarve: alates 350€",
    pricingLabel: "Hinnad",
    managementLabel: "HALDUSE HIND REKLAAMIEELARVE KORRAL",
    prices: [
      { budget: "kuni 1500€", price: "650€" },
      { budget: "kuni 2500€", price: "770€" },
      { budget: "alates 2500€", price: "990€" },
    ],
    cta: "Alusta vestlust",
  },
  ru: {
    priceLabel: "650€",
    budgetBadge: "+ рекламный бюджет: от 350€",
    pricingLabel: "РАСЦЕНКИ",
    managementLabel: "СТОИМОСТЬ ВЕДЕНИЯ ПРИ БЮДЖЕТЕ",
    prices: [
      { budget: "до 1500€", price: "650€" },
      { budget: "до 2500€", price: "770€" },
      { budget: "от 2500€", price: "990€" },
    ],
    cta: "Оставить заявку",
  },
};

const googleServicesByLanguage: Record<
  Language,
  {
    title: string;
    features: string[];
    priceLabel: string;
    budgetBadge: string;
    managementLabel: string;
    prices: Array<{ budget: string; price: string }>;
  }
> = {
  en: {
    title: "GOOGLE ADS CAMPAIGN SETUP AND MANAGEMENT",
    features: [
      "Niche and competitor analysis",
      "Google Ads account structure setup",
      "Keyword and negative keyword research",
      "Campaign strategy and budget planning",
      "Ad copywriting and extension setup",
      "Creative guidance for Display campaigns",
      "Launch of Search and Display campaigns",
      "A/B testing and bid optimisation",
      "Ongoing campaign management and scaling",
    ],
    priceLabel: "550€",
    budgetBadge: "+ ad budget: from 350€",
    managementLabel: "GOOGLE ADS MANAGEMENT FEE",
    prices: [
      { budget: "up to 1000€", price: "550€" },
      { budget: "up to 2000€", price: "650€" },
      { budget: "from 2000€", price: "custom" },
    ],
  },
  et: {
    title: "GOOGLE ADS REKLAAMI SEADISTUS JA HALDUS",
    features: [
      "Niši ja konkurentide analüüs",
      "Google Ads konto struktuuri seadistus",
      "Märksõnade ja negatiivsete märksõnade valik",
      "Kampaania strateegia ja eelarve planeerimine",
      "Reklaamtekstide kirjutamine ja laienduste seadistus",
      "Loovlahenduste juhised Display kampaaniate jaoks",
      "Searchi ja Display kampaaniate käivitamine",
      "A/B testimine ja pakkumiste optimeerimine",
      "Jooksev haldus ja skaleerimine",
    ],
    priceLabel: "550€",
    budgetBadge: "+ reklaamieelarve: alates 350€",
    managementLabel: "GOOGLE ADS HALDUSE HIND",
    prices: [
      { budget: "kuni 1000€", price: "550€" },
      { budget: "kuni 2000€", price: "650€" },
      { budget: "alates 2000€", price: "personaalselt" },
    ],
  },
  ru: {
    title: "НАСТРОЙКА И ВЕДЕНИЕ РЕКЛАМЫ GOOGLE ADS",
    features: [
      "анализ ниши и конкурентов",
      "настройка структуры рекламного кабинета Google Ads",
      "сбор ключевых слов и минус-слов",
      "разработка стратегии кампаний и логики бюджета",
      "написание текстов объявлений и настройка расширений",
      "подготовка креативов или ТЗ для КМС",
      "запуск поисковых и медийных кампаний",
      "A/B тестирование и оптимизация ставок",
      "регулярное ведение, масштабирование и отчётность",
    ],
    priceLabel: "550€",
    budgetBadge: "+ рекламный бюджет: от 350€",
    managementLabel: "СТОИМОСТЬ ВЕДЕНИЯ GOOGLE ADS",
    prices: [
      { budget: "до 1000€", price: "550€" },
      { budget: "до 2000€", price: "650€" },
      { budget: "от 2000€", price: "индивидуально" },
    ],
  },
};

const liveTestimonialsCopy: Record<
  Language,
  {
    title: string;
    items: Array<{
      name: string;
      subtitle: string;
      quote: string;
      image: string;
      video?: string;
      poster?: string;
    }>;
  }
> = {
  en: {
    title: "Live feedback from our clients",
    items: [
      {
        name: "Alexander",
        subtitle: "Business owner",
        quote:
          "We have been working together for a long time. The process is calm, clear and genuinely supportive. Most importantly, advertising started bringing predictable sales instead of chaos.",
        image: "/images/testimonial-portrait.jpg",
      },
      {
        name: "Artem",
        subtitle: "Founder",
        quote:
          "The team helped structure the offer, clean up campaign logic and focus on the metrics that actually matter. It became easier to make decisions and scale with confidence.",
        image: "/images/testimonial-2.jpg",
      },
      {
        name: "Elena",
        subtitle: "Brand owner",
        quote:
          "What I value most is the mix of comfort and competence. Communication is easy, reporting is clear and the marketing work feels thoughtful instead of noisy.",
        image: "/images/testimonial-3.jpg",
      },
    ],
  },
  et: {
    title: "Meie klientide päris tagasiside",
    items: [
      {
        name: "Alexander",
        subtitle: "Ettevõtja",
        quote:
          "Oleme koos töötanud juba pikemat aega. Kogu protsess on rahulik, selge ja toetav. Kõige olulisem on see, et reklaam hakkas lõpuks tooma prognoositavat müüki, mitte lihtsalt müra.",
        image: "/images/testimonial-portrait.jpg",
      },
      {
        name: "Artem",
        subtitle: "Asutaja",
        quote:
          "Meeskond aitas pakkumise struktureerida, kampaania loogika paika saada ja keskenduda numbritele, mis päriselt loevad. Otsuseid on nüüd palju lihtsam teha ja kasvada kindlamalt.",
        image: "/images/testimonial-2.jpg",
      },
      {
        name: "Elena",
        subtitle: "Brändi omanik",
        quote:
          "Kõige rohkem hindan ma seda, et siin on koos nii mugav suhtlus kui ka päris kompetents. Turundus tundub läbimõeldud, mitte lärmakas.",
        image: "/images/testimonial-3.jpg",
      },
    ],
  },
  ru: {
    title: "Живые отзывы наших клиентов",
    items: [
      {
        name: "Петр",
        subtitle: "Владелец строительной фирмы StenVarg",
        quote:
          "Мне нравится, что здесь сочетаются системность, спокойная коммуникация и реальная вовлечённость. Реклама стала понятнее, решения — точнее, а результат наконец-то начал ощущаться в цифрах.",
        image: "/images/testimonial-2.jpg",
        poster: "/images/testimonial-2.jpg",
        video: "/videos/testimonials/petr.mp4",
      },
      {
        name: "Константин",
        subtitle: "Владелец детской спортивной школы EDU.DO",
        quote:
          "С ребятами я работаю уже более трёх лет. Это лучшие ребята! Поверьте, с ними очень комфортно. Они вас всегда услышат и помогут. А самое главное — они увеличили мои продажи. Я им очень благодарен. Ребята действительно знают своё дело.",
        image: "/images/testimonial-portrait.jpg",
      },
      {
        name: "Светлана",
        subtitle: "Представитель туристической фирмы Prime Tour",
        quote:
          "Для меня ценно, что всё делается без суеты и лишнего шума. Есть стратегия, есть ясность по действиям, и при этом всегда остаётся ощущение, что проектом правда занимаются с вниманием.",
        image: "/images/testimonial-3.jpg",
      },
    ],
  },
};

const creativeExamplesCopy: Record<Language, { title: string; more: string }> = {
  en: {
    title: "Creative examples",
    more: "See more",
  },
  et: {
    title: "Loovlahenduste näited",
    more: "Vaata veel",
  },
  ru: {
    title: "Примеры креативов",
    more: "Смотреть еще",
  },
};

const additionalServicesTitle: Record<Language, string> = {
  en: "Additional services",
  et: "Lisateenused",
  ru: "Дополнительные услуги",
};

const fromLabelByLanguage: Record<Language, string> = {
  en: "from",
  et: "alates",
  ru: "от",
};

const customPricingByLanguage: Record<Language, string> = {
  en: "calculated individually for each project",
  et: "arvutatakse iga projekti jaoks personaalselt",
  ru: "рассчитывается индивидуально под каждый проект",
};

const videoReviewLabelByLanguage: Record<Language, string> = {
  en: "Video review",
  et: "Video tagasiside",
  ru: "Видео отзыв",
};

const targetAudienceByLanguage: Record<
  Language,
  {
    eyebrow: string;
    title: string;
    lead: string;
    criteriaTitle: string;
    criteria: string[];
    signals: Array<{ value: string; label: string }>;
    niches: Array<{ title: string; text: string }>;
  }
> = {
  en: {
    eyebrow: "Who we work with",
    title: "We work with businesses we can bring real clients to",
    lead:
      "We care about advertising becoming a clear source of growth, not just a campaign launch.",
    criteriaTitle: "Projects where",
    criteria: [
      "The business is already stable and ready to grow systematically",
      "There is a clear service or product clients genuinely need",
      "One client brings meaningful value through ticket size, repeat purchases or long-term work",
      "The team is ready to process leads and turn them into sales",
      "The goal is not just more inquiries, but a predictable client flow",
    ],
    signals: [
      { value: "Stable", label: "sales and a clear product already exist" },
      { value: "Value", label: "each new client matters for revenue" },
      { value: "LTV", label: "clients return or stay for longer" },
    ],
    niches: [
      {
        title: "Construction, renovation and real estate",
        text: "We help attract people already planning a renovation, construction project, purchase or sale and looking for a specialist they can trust.",
      },
      {
        title: "Dental clinics",
        text: "We build advertising around trust, expertise and specific services so patients leave real inquiries.",
      },
      {
        title: "Beauty and aesthetics",
        text: "We show the value of procedures through results, safety and expertise so people want to book with you.",
      },
      {
        title: "Travel and VIP services",
        text: "We package the offer so it reaches people who connect with your format, service level and approach.",
      },
      {
        title: "And more",
        text: "We also work with other niches when there is clear demand, a strong offer and a path from lead to sale.",
      },
      {
        title: "Fitness / Wellness / Health",
        text: "We communicate the value of a program, membership or specialist so people come for trials and return.",
      },
    ],
  },
  et: {
    eyebrow: "Kellega töötame",
    title: "Töötame ettevõtetega, kellele saame tuua päris kliente",
    lead:
      "Meile on oluline, et reklaam oleks arusaadav kasvuallikas, mitte lihtsalt kampaania käivitamine.",
    criteriaTitle: "Projektid, kus",
    criteria: [
      "Ettevõte töötab stabiilselt ja on valmis süsteemselt kasvama",
      "On selge teenus või toode, mida kliendid päriselt vajavad",
      "Üks klient loob ärile olulist väärtust läbi ostu, kordusostude või pika koostöö",
      "Tiim on valmis päringuid töötlema ja müügini viima",
      "Eesmärk ei ole lihtsalt rohkem päringuid, vaid prognoositav kliendivoog",
    ],
    signals: [
      { value: "Tugi", label: "müük ja selge toode on olemas" },
      { value: "Väärtus", label: "uus klient mõjutab käivet" },
      { value: "LTV", label: "kliendid naasevad või jäävad kauemaks" },
    ],
    niches: [
      {
        title: "Ehitus, remont ja kinnisvara",
        text: "Toome inimesi, kes planeerivad remonti, ehitust, ostu või müüki ja otsivad usaldusväärset spetsialisti.",
      },
      {
        title: "Hambakliinikud",
        text: "Ehitame reklaami usalduse, ekspertsuse ja konkreetsete teenuste ümber, et tuleksid päris pöördumised.",
      },
      {
        title: "Kosmetoloogia ja esteetika",
        text: "Näitame protseduuride väärtust tulemuse, turvalisuse ja ekspertsuse kaudu.",
      },
      {
        title: "Reisid ja VIP-teenused",
        text: "Pakendame pakkumise nii, et see kõnetaks inimesi, kellele sobib teie formaat ja teenusetase.",
      },
      {
        title: "Ja muud valdkonnad",
        text: "Töötame ka teiste niššidega, kui on selge nõudlus, tugev pakkumine ja tee päringust müügini.",
      },
      {
        title: "Fitness / Wellness / Health",
        text: "Anname edasi programmi, liikmesuse või spetsialisti väärtuse, et inimesed tuleksid ja naaseksid.",
      },
    ],
  },
  ru: {
    eyebrow: "С кем мы работаем",
    title: "Работаем с бизнесами, которым можем привести реальных клиентов",
    lead:
      "Нам важно, чтобы реклама была не просто запуском кампаний, а понятным источником роста.",
    criteriaTitle: "Проекты, где",
    criteria: [
      "Бизнес стабильно работает и готов расти системно",
      "Есть понятная услуга или продукт, который нужен клиентам",
      "Один клиент приносит бизнесу хорошую ценность: за счёт чека, повторных покупок или долгой работы с вами",
      "Команда готова обрабатывать заявки и доводить их до продажи",
      "Важно не просто получить больше обращений, а выстроить предсказуемый поток клиентов",
    ],
    signals: [
      { value: "Опора", label: "уже есть продажи и понятный продукт" },
      { value: "Чек", label: "новый клиент заметно влияет на выручку" },
      { value: "LTV", label: "клиенты возвращаются, покупают повторно или остаются надолго" },
    ],
    niches: [
      {
        title: "Строительство, ремонт и недвижимость",
        text: "Помогаем получать заявки от людей, которые уже планируют ремонт, строительство, покупку или продажу недвижимости и ищут специалиста, которому можно доверять.",
      },
      {
        title: "Стоматологии",
        text: "Выстраиваем рекламу вокруг доверия, экспертности и конкретных услуг, чтобы пациенты оставляли обращения, а не просто переходили на сайт.",
      },
      {
        title: "Косметология и эстетика",
        text: "Помогаем показать ценность процедур через результат, безопасность и экспертность, чтобы человек захотел записаться именно к вам.",
      },
      {
        title: "Туризм и VIP-услуги",
        text: "Упаковываем предложение так, чтобы приходили люди, которым близок ваш формат отдыха, уровень сервиса и подход.",
      },
      {
        title: "И другое",
        text: "Работаем и с другими нишами, если у бизнеса есть понятный спрос, сильное предложение и возможность превращать заявки в продажи.",
      },
      {
        title: "Fitness / Wellness / Health",
        text: "Доносим ценность программы, абонемента или специалиста так, чтобы люди приходили на пробные визиты, консультации и возвращались дальше.",
      },
    ],
  },
};

const staticCreativeItems: CreativeGalleryItem[] = Array.from({ length: 7 }, (_, index) => ({
  src: `/images/creative-examples/stories/story-${String(index + 1).padStart(2, "0")}.png`,
  alt: `Static creative ${index + 1}`,
  kind: "image",
}));

const videoCreativeItems: CreativeGalleryItem[] = [
  {
    src: "/videos/creative-examples/video-01.mp4",
    alt: "Video creative 1",
    kind: "video",
    poster: "/images/creative-examples/kreo-video-posters/video-01.webp",
  },
  {
    src: "/videos/creative-examples/video-02.mp4",
    alt: "Video creative 2",
    kind: "video",
    poster: "/images/creative-examples/kreo-video-posters/video-02.webp",
  },
  {
    src: "/videos/creative-examples/video-03.mp4",
    alt: "Video creative 3",
    kind: "video",
    poster: "/images/creative-examples/kreo-video-posters/video-03.webp",
  },
  {
    src: "/videos/creative-examples/video-06.mp4",
    alt: "Video creative 6",
    kind: "video",
    poster: "/images/creative-examples/kreo-video-posters/video-06.webp",
  },
  {
    src: "/videos/creative-examples/video-07.mp4",
    alt: "Video creative 7",
    kind: "video",
    poster: "/images/creative-examples/kreo-video-posters/video-07.webp",
  },
  {
    src: "/videos/creative-examples/video-08.mp4",
    alt: "Video creative 8",
    kind: "video",
    poster: "/images/creative-examples/kreo-video-posters/video-08.webp",
  },
  {
    src: "/videos/creative-examples/video-09.mp4",
    alt: "Video creative 9",
    kind: "video",
    poster: "/images/creative-examples/kreo-video-posters/video-09.webp",
  },
];

const lightPlateClientLogos = new Set([
  "Cruise Craft",
  "Iluproff",
  "Eho Clinic",
  "Bliss Dental Clinic",
]);

function renderHighlightedText(text: string) {
  return text.split(/(\*[^*]+\*)/g).map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <strong key={`${part}-${index}`} className="font-semibold text-white">
          {part.slice(1, -1)}
        </strong>
      );
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-[20px] font-semibold uppercase tracking-[0.3em] text-violet-300">
        {title}
      </p>
      {description ? (
        <p className="text-base leading-7 text-slate-400 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

function BackgroundGlow({
  className,
}: {
  className: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    />
  );
}

function renderServiceTitle(title: string) {
  if (title.includes("META ADS")) {
    return (
      <>
        {title.replace("META ADS", "").trim()} <span className="text-[21px] tracking-[0.08em]">META ADS</span>
      </>
    );
  }

  if (title.includes("GOOGLE ADS")) {
    return (
      <>
        {title.replace("GOOGLE ADS", "").trim()} <span className="text-[21px] tracking-[0.08em]">GOOGLE ADS</span>
      </>
    );
  }

  return title;
}

function CaseCard({
  item,
  index,
  language,
  className = "",
}: {
  item: CaseStudy;
  index: number;
  language: Language;
  className?: string;
}) {
  const palette = caseBackgrounds[index % caseBackgrounds.length];
  const categoryParts = item.category.split("/").map((part) => part.trim());
  const normalizedCategory = item.category.toLowerCase();
  const normalizedTitle = item.title.toLowerCase();
  const isWideCase =
    index === 0 ||
    normalizedCategory.includes("psychotherapy") ||
    normalizedCategory.includes("children camps") ||
    normalizedTitle.includes("suvelaagrid");

  return (
    <article
      className={`group overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-violet-300/35 ${
        isWideCase ? "xl:col-span-2" : ""
      } ${className}`}
    >
      <div
        className={`relative min-h-[17rem] bg-gradient-to-br ${palette} p-5 sm:min-h-[18.5rem] sm:p-6`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_28%),linear-gradient(180deg,rgba(2,6,23,0.05),rgba(2,6,23,0.78))]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />

        <div className="relative flex h-full flex-col justify-between gap-8">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/95">
              {casesUiCopy[language].badge}
            </span>
            {categoryParts.map((part) => (
              <span
                key={part}
                className="rounded-full border border-white/16 bg-slate-950/20 px-3 py-1 text-[0.7rem] font-medium text-white/78"
              >
                {part}
              </span>
            ))}
          </div>

          <div className="max-w-2xl space-y-4">
            <h3 className="text-[28px] font-extralight tracking-[-0.04em] text-white sm:text-[2.075rem]">
              {item.title}
            </h3>
            <div className="inline-flex max-w-full rounded-[1.25rem] border border-white/18 bg-slate-950/28 px-4 py-3 text-base font-semibold text-white shadow-[0_18px_50px_rgba(2,6,23,0.28)] backdrop-blur-sm">
              {item.result}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-slate-950/55 p-5 sm:p-6">
        <p className="max-w-3xl text-sm leading-7 text-slate-300">{item.summary}</p>
      </div>
    </article>
  );
}

type LandingPageProps = {
  initialLanguage?: Language;
  homeHref?: string;
  languageLinks?: Partial<Record<Language, string>>;
  servicesRouteLanguage?: Language;
};

export function LandingPage({
  initialLanguage = defaultLanguage,
  homeHref = "#",
  languageLinks,
  servicesRouteLanguage,
}: LandingPageProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [activeTestimonialVideo, setActiveTestimonialVideo] = useState<{
    src: string;
    poster?: string;
    name: string;
  } | null>(null);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const content = siteContent[language];
  const targetAudience = targetAudienceByLanguage[language];
  const pricing = pricingByLanguage[language];
  const additionalServices = getLandingAdditionalServices(
    language,
    servicesRouteLanguage,
  );
  const serviceLinks = useMemo(
    () =>
      [
        servicesRouteLanguage
          ? localizedPath(servicesRouteLanguage, "/meta-ads")
          : "/meta-ads",
        servicesRouteLanguage
          ? localizedPath(servicesRouteLanguage, "/google-ads")
          : "/google-ads",
      ] as const,
    [servicesRouteLanguage],
  );
  const services = useMemo(
    () => [
      {
        ...content.services[0],
        priceLabel: pricing.priceLabel,
        budgetBadge: pricing.budgetBadge,
        managementLabel: pricing.managementLabel,
        prices: pricing.prices,
      },
      googleServicesByLanguage[language],
    ],
    [content.services, language, pricing.budgetBadge, pricing.managementLabel, pricing.priceLabel, pricing.prices],
  );
  const liveTestimonials = useMemo(() => liveTestimonialsCopy[language], [language]);
  const creativeExamples = useMemo(() => creativeExamplesCopy[language], [language]);
  const casesForGrid = useMemo(
    () =>
      content.cases.length > 6
        ? [...content.cases.slice(0, 5), content.cases[6], content.cases[5]]
        : content.cases,
    [content.cases],
  );
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    if (!activeTestimonialVideo) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveTestimonialVideo(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeTestimonialVideo]);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6rem] top-[-3rem] h-[20rem] w-[20rem] rounded-full bg-amber-200/20 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-violet-400/12 blur-3xl" />
        <div className="absolute right-[-9rem] top-32 h-[26rem] w-[26rem] rounded-full bg-fuchsia-200/12 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[-6rem] h-[24rem] w-[24rem] rounded-full bg-violet-200/10 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-6rem] h-[20rem] w-[20rem] rounded-full bg-amber-100/16 blur-3xl" />
        <div className="grid-overlay absolute inset-0 opacity-40" />
      </div>

      <SiteHeader
        content={content}
        currentLanguage={language}
        onLanguageChange={setLanguage}
        homeHref={homeHref}
        languageLinks={languageLinks}
        servicesRouteLanguage={servicesRouteLanguage}
      />

      <main className="relative z-10">
        <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 pb-12 pt-0 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-10 lg:pb-28 lg:pt-24">
          <div className="space-y-8">
            <div className="mt-1 flex flex-col items-center gap-1 text-center text-[20px] font-extralight text-slate-200 sm:hidden">
              <a
                href={`tel:${content.contacts.phone}`}
                className="transition hover:text-violet-200"
              >
                {content.contacts.phone}
              </a>
              <a
                href={`mailto:${content.contacts.email}`}
                className="transition hover:text-violet-200"
              >
                {content.contacts.email}
              </a>
            </div>

            <div className="hidden rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-violet-200 sm:inline-flex">
              {content.hero.eyebrow}
            </div>

            <div className="space-y-6">
              <h1
                className={`max-w-3xl whitespace-pre-line font-light tracking-[-0.05em] text-white ${
                  language === "ru"
                    ? "text-[39px] sm:text-[39px] md:text-[46px] lg:text-[58px]"
                    : "text-[27px] sm:text-[34px] lg:text-[58px]"
                }`}
              >
                {renderHighlightedText(content.hero.title)}
              </h1>
              <p className="hidden max-w-2xl text-lg font-medium uppercase tracking-[0.22em] text-violet-200/95 sm:block sm:text-xl">
                {content.hero.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacts"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-violet-400 px-7 text-[20px] font-semibold text-slate-950 transition hover:bg-violet-300"
              >
                {content.hero.primaryCta}
              </a>
              <a
                href="#cases"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-[20px] font-semibold text-white transition hover:border-violet-300/60 hover:bg-white/10"
              >
                {content.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet-400/24 via-transparent to-fuchsia-500/24 blur-2xl" />
            <div className="glass-shell relative rounded-[2rem] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 sm:p-8">
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                  <div className="space-y-3">
                    <BrandLogo compact />
                    <p className="text-xl font-semibold text-white">
                      {content.hero.dashboardTitle}
                    </p>
                  </div>
                  <div className="mt-1 rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-200">
                    {content.hero.dashboardStatus}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {content.hero.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-slate-900/80 p-4"
                    >
                      <p className="text-2xl font-semibold text-white">{stat.value}</p>
                      <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl border border-white/10 bg-slate-900/75 p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-200">
                      {content.hero.dashboardChartLabel}
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-violet-300">
                      {content.hero.dashboardChartStatus}
                    </p>
                  </div>
                  <div className="flex h-40 items-end gap-3">
                    {[28, 42, 54, 63, 88, 106, 124].map((height, index) => (
                      <div key={height} className="flex-1">
                        <div
                          className="rounded-t-2xl bg-gradient-to-t from-violet-400 to-fuchsia-500"
                          style={{ height }}
                        />
                        <p className="mt-3 text-center text-xs text-slate-500">
                          W{index + 1}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cases" className="relative mx-auto w-full max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
          <BackgroundGlow className="left-[-8rem] top-20 h-[22rem] w-[22rem] bg-violet-300/10" />
          <BackgroundGlow className="right-[-10rem] bottom-8 h-[26rem] w-[26rem] bg-fuchsia-300/9" />
          <SectionHeading
            title={content.sections.cases}
            description={content.sectionLead.cases}
          />
          <div className="mt-6 grid gap-5 lg:mt-10 lg:grid-cols-2 xl:grid-cols-3">
            {casesForGrid.map((item, index) => (
              <CaseCard
                key={item.title}
                item={item}
                index={index}
                language={language}
                className={index >= 3 ? "hidden sm:block" : ""}
              />
            ))}
          </div>

          <div className="mt-5 flex justify-center lg:mt-8">
            <Link
              href="/cases"
              className="inline-flex items-center justify-center text-[20px] font-extralight text-white underline decoration-white/80 underline-offset-[10px] transition hover:text-white/85 hover:decoration-white"
            >
              {casesUiCopy[language].more}
            </Link>
          </div>
        </section>

        <CreativeGallery
          title={creativeExamples.title}
          staticItems={staticCreativeItems}
          videoItems={videoCreativeItems}
          showMoreLink
          showMoreLabel={creativeExamples.more}
        />

        <section id="services" className="relative mx-auto w-full max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
          <BackgroundGlow className="left-[8%] top-4 h-[24rem] w-[24rem] bg-amber-100/9" />
          <BackgroundGlow className="right-[-7rem] top-28 h-[25rem] w-[25rem] bg-violet-400/12" />
          <SectionHeading
            title={content.sections.services}
            description={content.sectionLead.services}
          />
          <div className="mt-6 space-y-5 lg:mt-10 lg:space-y-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(12,18,42,0.92),rgba(16,20,42,0.84),rgba(32,22,51,0.88))] p-6 shadow-[0_40px_120px_rgba(7,10,24,0.32)] sm:p-10 lg:p-12"
              >
                <BackgroundGlow
                  className={index === 0 ? "right-8 top-[-8rem] h-[20rem] w-[20rem] bg-fuchsia-300/10" : "left-[-5rem] top-[-6rem] h-[18rem] w-[18rem] bg-violet-300/10"}
                />
                <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_22rem] xl:items-start">
                  <div className="space-y-5 lg:space-y-8">
                    <h3 className="text-[18px] font-semibold uppercase tracking-[0.16em] text-white">
                      {renderServiceTitle(service.title)}
                    </h3>

                    <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                      {service.features.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 text-[20px] font-light text-slate-100"
                        >
                          <span className="mt-[0.35rem] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-violet-300/30 bg-violet-300/10 text-[11px] text-violet-200">
                            ✓
                          </span>
                          <span className="leading-[1.45]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.9rem] border border-violet-300/18 bg-[linear-gradient(155deg,rgba(167,139,250,0.18),rgba(255,255,255,0.04),rgba(15,23,42,0.35))] p-5 shadow-[0_24px_70px_rgba(76,29,149,0.18)] sm:p-6">
                    <div className="flex min-h-full flex-col items-center text-center">
                      <div className="mt-0 flex items-baseline justify-center gap-2 text-white">
                        <span className="text-[14px] font-medium uppercase tracking-[0.04em] text-white/70 sm:text-[14px]">
                          {fromLabelByLanguage[language]}
                        </span>
                        <p className="text-[48px] font-light tracking-[-0.08em] text-white sm:text-[58px]">
                          {service.priceLabel}
                        </p>
                      </div>
                      <div className="mt-5 inline-flex items-center justify-center rounded-full border border-violet-300/22 bg-violet-300/10 px-3.5 py-1 text-[13px] font-medium text-violet-100 shadow-[0_12px_40px_rgba(167,139,250,0.12)]">
                        {service.budgetBadge}
                      </div>
                      <div className="mt-5 w-full max-w-[19rem] rounded-[1.2rem] border border-white/8 bg-slate-950/22 px-4 py-4 text-left">
                        <p className="mb-4 text-[11px] uppercase tracking-[0.12em] text-slate-300 sm:text-[12px]">
                          {service.managementLabel}
                        </p>
                        {service.title.includes("GOOGLE ADS") ? (
                          <p className="text-[16px] leading-7 text-slate-100 sm:text-[17px]">
                            {customPricingByLanguage[language]}
                          </p>
                        ) : (
                          <div className="space-y-2">
                            {service.prices.map((row) => (
                              <div
                                key={`${row.budget}-${row.price}`}
                                className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-white/8 pb-2 text-[14px] text-slate-200 last:border-b-0 last:pb-0"
                              >
                                <span>{row.budget}</span>
                                <span className="font-semibold text-white">{row.price}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <Link
                        href={serviceLinks[index] ?? "#contacts"}
                        className="mt-5 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-violet-400 px-7 text-[20px] font-semibold text-slate-950 transition hover:bg-violet-300 lg:mt-8"
                      >
                        {pricing.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-12 text-center sm:text-left lg:px-10 lg:pb-20">
          <div className="mx-auto max-w-2xl space-y-4 sm:mx-0">
            <p className="text-[18px] font-semibold uppercase tracking-[0.24em] text-violet-300 sm:text-[20px] sm:tracking-[0.3em]">
              {additionalServicesTitle[language]}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
            {additionalServices.map((item) => {
              const className =
                "inline-flex items-center rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[17px] font-light text-slate-100 transition hover:border-violet-300/35 hover:bg-white/10 sm:px-5 sm:py-2.5 sm:text-[20px]";

              return item.href ? (
                <Link key={item.label} href={item.href} className={className}>
                  {item.label}
                </Link>
              ) : (
                <span key={item.label} className={className}>
                  {item.label}
                </span>
              );
            })}
          </div>
        </section>

        <section id="testimonials" className="relative mx-auto w-full max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
          <BackgroundGlow className="left-[-10rem] top-10 h-[26rem] w-[26rem] bg-violet-300/10" />
          <BackgroundGlow className="right-[-7rem] bottom-0 h-[22rem] w-[22rem] bg-amber-100/9" />
          <div className="mt-6 grid gap-6 lg:mt-10 lg:grid-cols-[1.05fr_0.85fr] lg:items-center lg:gap-10">
            <div className="max-w-2xl">
              <h2 className="max-w-xl text-[28px] font-extralight leading-[1.08] tracking-[-0.04em] text-white sm:text-[2.075rem]">
                {liveTestimonials.title}
              </h2>

              <div className="mt-6 flex items-center gap-3 lg:mt-10">
                <button
                  type="button"
                  onClick={() =>
                    setActiveTestimonial((current) =>
                      current === 0 ? liveTestimonials.items.length - 1 : current - 1,
                    )
                  }
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/7 text-white transition hover:border-violet-300/40 hover:bg-white/10"
                  aria-label="Previous testimonial"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveTestimonial((current) =>
                      current === liveTestimonials.items.length - 1 ? 0 : current + 1,
                    )
                  }
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/7 text-white transition hover:border-violet-300/40 hover:bg-white/10"
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>

              <div className="mt-5 max-w-[36rem] lg:mt-8">
                <p className="text-[20px] font-light leading-[1.45] text-slate-100">
                  {liveTestimonials.items[activeTestimonial].quote}
                </p>
                <div className="mt-5 lg:mt-8">
                  <p className="text-lg font-medium text-white">
                    {liveTestimonials.items[activeTestimonial].name}
                  </p>
                  <p className="mt-1 text-sm text-slate-400 sm:text-base">
                    {liveTestimonials.items[activeTestimonial].subtitle}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 lg:mt-8">
                {liveTestimonials.items.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-3 w-3 rounded-full transition ${
                      index === activeTestimonial
                        ? "bg-violet-300 shadow-[0_0_18px_rgba(196,181,253,0.45)]"
                        : "bg-white/20 hover:bg-white/35"
                    }`}
                    aria-label={`Show testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[23rem] lg:mr-0 lg:-ml-[27px]">
              <div className="absolute left-4 top-6 h-full w-full rounded-[2rem] bg-violet-300/18 blur-md" />
              <div className="absolute -right-3 top-4 h-full w-full rounded-[2rem] border border-white/8 bg-white/4" />
              <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 shadow-[0_30px_80px_rgba(2,6,23,0.45)]">
                <div className="relative aspect-[0.66] overflow-hidden">
                  <Image
                    src={liveTestimonials.items[activeTestimonial].image}
                    alt={liveTestimonials.items[activeTestimonial].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex rounded-full border border-violet-300/25 bg-violet-300/15 px-3 py-1 text-xs font-medium text-violet-100 backdrop-blur">
                    {videoReviewLabelByLanguage[language]}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        const item = liveTestimonials.items[activeTestimonial];
                        if (item.video) {
                          setActiveTestimonialVideo({
                            src: item.video,
                            poster: item.poster || item.image,
                            name: item.name,
                          });
                        }
                      }}
                      disabled={!liveTestimonials.items[activeTestimonial].video}
                      className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white text-violet-500 shadow-[0_15px_40px_rgba(255,255,255,0.2)] transition hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                      aria-label="Play video review"
                    >
                      <span className="ml-1 text-3xl">▶</span>
                    </button>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[40px] font-semibold leading-none tracking-[-0.05em] text-white">
                      {liveTestimonials.items[activeTestimonial].name}
                    </p>
                    <p className="mt-2 text-sm text-slate-200/85 sm:text-base">
                      {liveTestimonials.items[activeTestimonial].subtitle}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="clients" className="relative mx-auto w-full max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
          <BackgroundGlow className="left-[-6rem] bottom-2 h-[22rem] w-[22rem] bg-cyan-200/8" />
          <BackgroundGlow className="right-[16%] top-10 h-[18rem] w-[18rem] bg-violet-300/8" />
          <SectionHeading
            title={content.sections.clients}
            description={content.sectionLead.clients}
          />
          <div className="client-marquee relative left-1/2 mt-6 w-screen -translate-x-1/2 overflow-hidden lg:mt-10">
            <div className="client-marquee__track">
              {[...content.clients, ...content.clients].map((client, index) => {
                const hasLightPlate = lightPlateClientLogos.has(client.name);
                const isSkyAutokool = client.name === "Sky Autokool";

                return (
                  <div
                    key={`${client.name}-${index}`}
                    aria-hidden={index >= content.clients.length}
                    className="flex min-h-28 w-[13rem] flex-none items-center justify-center rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 sm:w-[14rem]"
                  >
                    <div
                      className={`flex items-center justify-center ${
                        hasLightPlate
                          ? "rounded-xl bg-white px-5 py-3 shadow-[0_16px_38px_rgba(2,6,23,0.16)]"
                          : ""
                      }`}
                    >
                      <Image
                        src={client.src}
                        alt={index >= content.clients.length ? "" : client.name}
                        width={isSkyAutokool ? 170 : 140}
                        height={isSkyAutokool ? 120 : 56}
                        className={`h-auto w-auto object-contain ${
                          isSkyAutokool ? "max-h-[4.6rem]" : "max-h-12"
                        } ${hasLightPlate ? "opacity-100" : "opacity-90"}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="relative mx-auto w-full max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
          <BackgroundGlow className="left-[24%] top-[-3rem] h-[22rem] w-[22rem] bg-amber-100/10" />
          <BackgroundGlow className="right-[-9rem] bottom-[-4rem] h-[26rem] w-[26rem] bg-fuchsia-300/9" />
          <div className="mb-6 max-w-2xl space-y-4 lg:mb-10">
            <p className="text-[20px] font-semibold uppercase tracking-[0.3em] text-violet-300">
              {content.sections.about}
            </p>
            {content.sectionLead.about ? (
              <p className="text-base leading-7 text-slate-400 sm:text-lg">
                {content.sectionLead.about}
              </p>
            ) : null}
          </div>
          <div className="relative grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900">
              <Image
                src="/images/about-portrait.jpg"
                alt={content.about.founderName}
                width={1280}
                height={960}
                className="h-full min-h-[28rem] w-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-300">
                  {content.about.founderLabel}
                </p>
                <p className="mt-3 text-2xl font-medium text-white">
                  {content.about.founderName}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="max-w-xl text-[28px] font-extralight leading-[1.08] tracking-[-0.04em] text-white sm:text-[2.075rem]">
                {content.about.title}
              </h2>
              <p className="text-base leading-8 text-slate-300">
                {content.about.description}
              </p>
              <div className="space-y-5">
                {content.about.points.map((point) => (
                  <p key={point} className="text-base leading-8 text-slate-300">
                    {point}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="audience" className="relative mx-auto w-full max-w-7xl px-6 py-12 lg:px-10 lg:py-20">
          <BackgroundGlow className="left-[-7rem] top-12 h-[24rem] w-[24rem] bg-violet-300/10" />
          <BackgroundGlow className="right-[-8rem] bottom-[-2rem] h-[25rem] w-[25rem] bg-fuchsia-300/10" />
          <div className="mb-6 max-w-2xl space-y-4 lg:mb-10">
            <p className="text-[20px] font-semibold uppercase tracking-[0.3em] text-violet-300">
              {targetAudience.eyebrow}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(12,18,42,0.92),rgba(16,20,42,0.84),rgba(32,22,51,0.88))] p-8 shadow-[0_40px_120px_rgba(7,10,24,0.32)] sm:p-10 lg:p-12">
            <BackgroundGlow className="right-20 top-[-10rem] h-[22rem] w-[22rem] bg-fuchsia-300/12" />
            <div className="relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="max-w-xl text-[28px] font-extralight leading-[1.08] tracking-[-0.04em] text-white sm:text-[2.075rem]">
                    {targetAudience.title}
                  </h2>
                  <p className="max-w-xl text-base leading-8 text-slate-300">
                    {targetAudience.lead}
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-200">
                    {targetAudience.criteriaTitle}
                  </p>
                  <div className="space-y-4">
                    {targetAudience.criteria.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 text-[18px] font-light leading-[1.45] text-slate-100"
                      >
                        <span className="mt-[0.25rem] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-violet-300/30 bg-violet-300/10 text-[11px] text-violet-200">
                          ✓
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {targetAudience.signals.map((signal) => (
                    <div
                      key={signal.value}
                      className="rounded-[1.25rem] border border-white/8 bg-slate-950/28 p-4"
                    >
                      <p className="text-[24px] font-semibold tracking-[-0.05em] text-white">
                        {signal.value}
                      </p>
                      <p className="mt-2 text-sm leading-5 text-slate-400">
                        {signal.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {targetAudience.niches.map((niche) => (
                  <article
                    key={niche.title}
                    className="min-h-[10rem] rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5"
                  >
                    <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-white">
                      {niche.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-7 text-slate-300">
                      {niche.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      {activeTestimonialVideo ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/86 px-5 py-8 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveTestimonialVideo(null)}
        >
          <button
            type="button"
            aria-label="Close testimonial video"
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl text-white transition hover:bg-white/18"
            onClick={() => setActiveTestimonialVideo(null)}
          >
            ×
          </button>
          <div
            className="relative aspect-[9/16] max-h-[86vh] w-full max-w-[24rem] overflow-hidden rounded-[2rem] border border-white/12 bg-slate-900 shadow-[0_36px_120px_rgba(2,6,23,0.55)]"
            onClick={(event) => event.stopPropagation()}
          >
            <video
              src={activeTestimonialVideo.src}
              poster={activeTestimonialVideo.poster}
              controls
              autoPlay
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      ) : null}

      <style jsx global>{`
        .creative-marquee {
          width: 100%;
          overflow: hidden;
        }

        .creative-marquee__track {
          display: flex;
          flex-wrap: nowrap;
          width: max-content;
          min-width: max-content;
          gap: 0.875rem;
          padding: 0 1rem;
          will-change: transform;
        }

        .creative-marquee__track--left {
          animation: creative-marquee-left 28s linear infinite;
        }

        .creative-marquee__track--right {
          animation: creative-marquee-right 28s linear infinite;
        }

        @media (min-width: 640px) {
          .creative-marquee__track {
            gap: 1rem;
            padding: 0 1.5rem;
          }
        }

        .creative-marquee:hover .creative-marquee__track {
          animation-play-state: paused;
        }

        @keyframes creative-marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes creative-marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
      <SiteFooter content={content} language={language} />
    </div>
  );
}
