"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { siteContent, type CaseStudy, type Language } from "@/data/site-content";

const caseBackgrounds = [
  "from-[#14192f] via-[#1c2342] to-[#3b1d52]",
  "from-[#1a172d] via-[#2a2042] to-[#4b2a5d]",
  "from-[#131b34] via-[#1d2947] to-[#304e6c]",
  "from-[#17162d] via-[#2a1e43] to-[#443661]",
  "from-[#171f38] via-[#203057] to-[#22536b]",
  "from-[#1d1730] via-[#31214b] to-[#5b2d54]",
] as const;

const casesPageCopy: Record<
  Language,
  {
    metaTitle: string;
    metaDescription: string;
    home: string;
    section: string;
    title: string;
    description: string;
    badge: string;
  }
> = {
  ru: {
    metaTitle: "Кейсы | Do.Marketing",
    metaDescription:
      "Кейсы Do.Marketing: результаты рекламных кампаний и привлечения заявок.",
    home: "Вернуться на главную",
    section: "Кейсы",
    title: "Результаты рекламных кампаний",
    description:
      "Здесь собраны те же кейсы, которые представлены на главной странице: заявки, продажи, ROAS и стоимость привлечения клиентов.",
    badge: "Кейс",
  },
  en: {
    metaTitle: "Cases | Do.Marketing",
    metaDescription:
      "Do.Marketing case studies: advertising campaign results, leads, sales and ROAS.",
    home: "Back to home",
    section: "Cases",
    title: "Advertising campaign results",
    description:
      "Here you can see the same case studies presented on the main page: leads, sales, ROAS and customer acquisition costs.",
    badge: "Case",
  },
  et: {
    metaTitle: "Tööd | Do.Marketing",
    metaDescription:
      "Do.Marketingu tööd: reklaamikampaaniate tulemused, päringud, müük ja ROAS.",
    home: "Tagasi avalehele",
    section: "Tööd",
    title: "Reklaamikampaaniate tulemused",
    description:
      "Siia on koondatud samad tööd, mis on näha avalehel: päringud, müük, ROAS ja kliendi hankimise maksumus.",
    badge: "Töö",
  },
};

function CaseCard({
  item,
  index,
  badge,
}: {
  item: CaseStudy;
  index: number;
  badge: string;
}) {
  const palette = caseBackgrounds[index % caseBackgrounds.length];
  const categoryParts = item.category.split("/").map((part) => part.trim());
  const isWideCase = index === 0 || item.category.toLowerCase().includes("psychotherapy");
  const card = (
    <>
      <div
        className={`relative min-h-[17rem] bg-gradient-to-br ${palette} p-5 sm:min-h-[18.5rem] sm:p-6`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_28%),linear-gradient(180deg,rgba(2,6,23,0.05),rgba(2,6,23,0.78))]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />

        <div className="relative flex h-full flex-col justify-between gap-8">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/95">
              {badge}
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
    </>
  );

  return (
    <article
      className={`group overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-violet-300/35 ${
        isWideCase ? "xl:col-span-2" : ""
      }`}
    >
      {item.href ? (
        <Link href={item.href} className="block h-full">
          {card}
        </Link>
      ) : (
        card
      )}
    </article>
  );
}

export default function CasesPage() {
  const [language, setLanguage] = useState<Language>("ru");

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = casesPageCopy[language].metaTitle;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", casesPageCopy[language].metaDescription);
    }
  }, [language]);

  const content = siteContent[language];
  const copy = casesPageCopy[language];
  const casesForGrid = content.cases;

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6rem] top-[-3rem] h-[20rem] w-[20rem] rounded-full bg-amber-200/20 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-violet-400/12 blur-3xl" />
        <div className="absolute right-[-9rem] top-32 h-[26rem] w-[26rem] rounded-full bg-fuchsia-200/12 blur-3xl" />
        <div className="grid-overlay absolute inset-0 opacity-40" />
      </div>

      <div className="relative z-10">
        <SiteHeader
          content={{
            ...content,
            nav: content.nav.filter((item) => item.href !== "#audience"),
          }}
          currentLanguage={language}
          onLanguageChange={setLanguage}
          homeHref="/"
          homeButtonLabel={copy.home}
          anchorHrefPrefix="/"
        />

        <div className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
        <section className="py-16 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <p className="text-[20px] font-semibold uppercase tracking-[0.3em] text-violet-300">
              {copy.section}
            </p>
            <h1 className="text-[42px] font-light leading-none tracking-[-0.06em] text-white sm:text-[64px]">
              {copy.title}
            </h1>
            <p className="text-base leading-8 text-slate-400 sm:text-lg">
              {copy.description}
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {casesForGrid.map((item, index) => (
              <CaseCard key={item.title} item={item} index={index} badge={copy.badge} />
            ))}
          </div>
        </section>
        </div>
      </div>
    </main>
  );
}
