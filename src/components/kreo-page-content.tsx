"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { CreativeGallery, type CreativeGalleryItem } from "@/components/creative-gallery";
import { PageLanguageSwitcher } from "@/components/page-language-switcher";
import type { Language } from "@/data/site-content";

const staticItems: CreativeGalleryItem[] = Array.from({ length: 7 }, (_, index) => ({
  src: `/images/creative-examples/stories/story-${String(index + 1).padStart(2, "0")}.png`,
  alt: `Static creative ${index + 1}`,
  kind: "image",
}));

const videoItems: CreativeGalleryItem[] = [
  {
    src: "/videos/creative-examples/video-06.mp4",
    alt: "Video creative 6",
    kind: "video",
  },
  {
    src: "/videos/creative-examples/video-10.mp4",
    alt: "Video creative 10",
    kind: "video",
  },
  {
    src: "/videos/creative-examples/video-03.mp4",
    alt: "Video creative 3",
    kind: "video",
  },
  {
    src: "/videos/creative-examples/video-08.mp4",
    alt: "Video creative 8",
    kind: "video",
  },
  {
    src: "/videos/creative-examples/video-01.mp4",
    alt: "Video creative 1",
    kind: "video",
  },
  {
    src: "/videos/creative-examples/video-11.mp4",
    alt: "Video creative 11",
    kind: "video",
  },
  {
    src: "/videos/creative-examples/video-04.mp4",
    alt: "Video creative 4",
    kind: "video",
  },
  {
    src: "/videos/creative-examples/video-02.mp4",
    alt: "Video creative 2",
    kind: "video",
  },
  {
    src: "/videos/creative-examples/video-09.mp4",
    alt: "Video creative 9",
    kind: "video",
  },
  {
    src: "/videos/creative-examples/video-05.mp4",
    alt: "Video creative 5",
    kind: "video",
  },
  {
    src: "/videos/creative-examples/video-07.mp4",
    alt: "Video creative 7",
    kind: "video",
  },
];

const kreoCopy: Record<
  Language,
  {
    metaTitle: string;
    metaDescription: string;
    home: string;
    title: string;
    description: string;
    galleryTitle: string;
  }
> = {
  ru: {
    metaTitle: "Примеры креативов | Do.Marketing",
    metaDescription: "Статические и видео креативы Do.Marketing для рекламных кампаний.",
    home: "На главную",
    title: "Больше примеров рекламных креативов",
    description:
      "Статические макеты и видеоформаты для Meta Ads. Нажмите на любой креатив, чтобы открыть его крупнее.",
    galleryTitle: "Статика и видео",
  },
  en: {
    metaTitle: "Creative examples | Do.Marketing",
    metaDescription: "Static and video creatives by Do.Marketing for advertising campaigns.",
    home: "Back to home",
    title: "More examples of ad creatives",
    description:
      "Static layouts and video formats for Meta Ads. Click any creative to open it larger.",
    galleryTitle: "Static and video",
  },
  et: {
    metaTitle: "Loovlahenduste näited | Do.Marketing",
    metaDescription: "Do.Marketingu staatilised ja videoloovlahendused reklaamikampaaniate jaoks.",
    home: "Tagasi avalehele",
    title: "Rohkem reklaamiloovlahenduste näiteid",
    description:
      "Staatilised kujundused ja videoformaadid Meta Ads kampaaniate jaoks. Klõpsa loovlahendusel, et seda suuremalt vaadata.",
    galleryTitle: "Staatika ja video",
  },
};

export function KreoPageContent() {
  const [language, setLanguage] = useState<Language>("ru");
  const copy = useMemo(() => kreoCopy[language], [language]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = copy.metaTitle;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", copy.metaDescription);
    }
  }, [copy, language]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6rem] top-[-3rem] h-[20rem] w-[20rem] rounded-full bg-amber-200/20 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-violet-400/12 blur-3xl" />
        <div className="absolute right-[-9rem] top-32 h-[26rem] w-[26rem] rounded-full bg-fuchsia-200/12 blur-3xl" />
        <div className="grid-overlay absolute inset-0 opacity-40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
        <header className="glass-shell flex flex-wrap items-center justify-between gap-5 rounded-full px-5 py-4 lg:px-8">
          <Link href="/" aria-label="Do.Marketing home">
            <BrandLogo compact />
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 text-sm font-semibold text-white transition hover:border-violet-300/60 hover:bg-white/10"
            >
              {copy.home}
            </Link>
            <PageLanguageSwitcher currentLanguage={language} onChange={setLanguage} />
          </div>
        </header>

        <section className="py-16 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <h1 className="text-[28px] font-extralight leading-[1.05] tracking-[-0.04em] text-white sm:text-[2.075rem] lg:text-[56px]">
              {copy.title}
            </h1>
            <p className="max-w-4xl text-base leading-8 text-slate-400 sm:text-lg">
              {copy.description}
            </p>
          </div>
        </section>

        <CreativeGallery
          title={copy.galleryTitle}
          staticItems={staticItems}
          videoItems={videoItems}
          dense
          embedded
          duplicateVideoItems={false}
        />
      </div>
    </main>
  );
}
