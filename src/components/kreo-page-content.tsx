"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteContent, type Language, type SiteDictionary } from "@/data/site-content";

type CreativeItem = {
  src: string;
  alt: string;
  kind: "image" | "video";
  poster?: string;
};

const staticItems: CreativeItem[] = [
  { src: "/images/creative-examples/stories/story-01.png", alt: "Story creative 1", kind: "image" },
  { src: "/images/creative-examples/stories/story-02.png", alt: "Story creative 2", kind: "image" },
  { src: "/images/creative-examples/stories/story-03.png", alt: "Story creative 3", kind: "image" },
  { src: "/images/creative-examples/stories/story-04.png", alt: "Story creative 4", kind: "image" },
  { src: "/images/creative-examples/stories/story-05.png", alt: "Story creative 5", kind: "image" },
  { src: "/images/creative-examples/stories/story-06.png", alt: "Story creative 6", kind: "image" },
  { src: "/images/creative-examples/static/static-01-sky-autokool.jpg", alt: "Sky Autokool creative", kind: "image" },
  { src: "/images/creative-examples/stories/story-07.png", alt: "Story creative 7", kind: "image" },
  { src: "/images/creative-examples/static/static-17-laager-est.png", alt: "Laager Estonia creative", kind: "image" },
  { src: "/images/creative-examples/static/static-05-eho-clinic-laser.jpg", alt: "EHO Clinic laser creative", kind: "image" },
  { src: "/images/creative-examples/static/static-02-victor-fit-black.jpg", alt: "Victor Fit black creative", kind: "image" },
  { src: "/images/creative-examples/static/static-14-grand-woman-2.jpg", alt: "Grand Woman creative two", kind: "image" },
  { src: "/images/creative-examples/static/static-11-sky-autokool-2.jpg", alt: "Sky Autokool creative two", kind: "image" },
  { src: "/images/creative-examples/static/static-03-victor-fit-home.jpg", alt: "Victor Fit home creative", kind: "image" },
  { src: "/images/creative-examples/static/static-15-eho-clinic-2.jpg", alt: "EHO Clinic creative two", kind: "image" },
  { src: "/images/creative-examples/static/static-04-grand-woman-red.jpg", alt: "Grand Woman red creative", kind: "image" },
  { src: "/images/creative-examples/static/static-12-victor-fit-2.jpg", alt: "Victor Fit creative two", kind: "image" },
  { src: "/images/creative-examples/static/static-16-grand-woman-3.jpg", alt: "Grand Woman creative three", kind: "image" },
  { src: "/images/creative-examples/static/static-13-victor-fit-3.jpg", alt: "Victor Fit creative three", kind: "image" },
  { src: "/images/creative-examples/static/static-06-grand-woman-hood.jpg", alt: "Grand Woman hood creative", kind: "image" },
  { src: "/images/creative-examples/static/static-07-creative.jpg", alt: "Creative seven", kind: "image" },
  { src: "/images/creative-examples/static/static-09-creative.jpg", alt: "Creative nine", kind: "image" },
  { src: "/images/creative-examples/static/static-08-creative.jpg", alt: "Creative eight", kind: "image" },
  { src: "/images/creative-examples/static/static-10-creative.jpg", alt: "Creative ten", kind: "image" },
];

const videoItems: CreativeItem[] = [
  { src: "/videos/creative-examples/kreo/video-17.mp4", alt: "Video creative 17", kind: "video", poster: "/images/creative-examples/kreo-video-posters/video-17.webp" },
  { src: "/videos/creative-examples/video-03.mp4", alt: "Video creative 3", kind: "video", poster: "/images/creative-examples/kreo-video-posters/video-03.webp" },
  { src: "/videos/creative-examples/video-07.mp4", alt: "Video creative 7", kind: "video", poster: "/images/creative-examples/kreo-video-posters/video-07.webp" },
  { src: "/videos/creative-examples/video-08.mp4", alt: "Video creative 8", kind: "video", poster: "/images/creative-examples/kreo-video-posters/video-08.webp" },
  { src: "/videos/creative-examples/kreo/video-15.mp4", alt: "Video creative 15", kind: "video", poster: "/images/creative-examples/kreo-video-posters/video-15.webp" },
  { src: "/videos/creative-examples/video-01.mp4", alt: "Video creative 1", kind: "video", poster: "/images/creative-examples/kreo-video-posters/video-01.webp" },
  { src: "/videos/creative-examples/kreo/video-14.mp4", alt: "Video creative 14", kind: "video", poster: "/images/creative-examples/kreo-video-posters/video-14.webp" },
  { src: "/videos/creative-examples/video-06.mp4", alt: "Video creative 6", kind: "video", poster: "/images/creative-examples/kreo-video-posters/video-06.webp" },
  { src: "/videos/creative-examples/kreo/video-19.mp4", alt: "Karate creative", kind: "video", poster: "/images/creative-examples/kreo-video-posters/video-19.webp" },
  { src: "/videos/creative-examples/video-09.mp4", alt: "Video creative 9", kind: "video", poster: "/images/creative-examples/kreo-video-posters/video-09.webp" },
  { src: "/videos/creative-examples/kreo/video-10.mp4", alt: "Video creative 10", kind: "video", poster: "/images/creative-examples/kreo-video-posters/video-10.webp" },
  { src: "/videos/creative-examples/video-04.mp4", alt: "Video creative 4", kind: "video", poster: "/images/creative-examples/kreo-video-posters/video-04.webp" },
  { src: "/videos/creative-examples/kreo/video-16.mp4", alt: "Video creative 16", kind: "video", poster: "/images/creative-examples/kreo-video-posters/video-16.webp" },
  { src: "/videos/creative-examples/video-02.mp4", alt: "Video creative 2", kind: "video", poster: "/images/creative-examples/kreo-video-posters/video-02.webp" },
  { src: "/videos/creative-examples/kreo/video-18.mp4", alt: "Video creative 18", kind: "video", poster: "/images/creative-examples/kreo-video-posters/video-18.webp" },
  { src: "/videos/creative-examples/kreo/video-20.mp4", alt: "Estonian trip voiceover creative", kind: "video", poster: "/images/creative-examples/kreo-video-posters/video-20.webp" },
  { src: "/videos/creative-examples/kreo/video-12.mp4", alt: "Video creative 12", kind: "video", poster: "/images/creative-examples/kreo-video-posters/video-12.webp" },
  { src: "/videos/creative-examples/video-05.mp4", alt: "Video creative 5", kind: "video", poster: "/images/creative-examples/kreo-video-posters/video-05.webp" },
  { src: "/videos/creative-examples/kreo/video-11.mp4", alt: "Video creative 11", kind: "video", poster: "/images/creative-examples/kreo-video-posters/video-11.webp" },
  { src: "/videos/creative-examples/kreo/video-13.mp4", alt: "Video creative 13", kind: "video", poster: "/images/creative-examples/kreo-video-posters/video-13.webp" },
];

const copyByLanguage: Record<
  Language,
  {
    metaTitle: string;
    metaDescription: string;
    home: string;
    eyebrow: string;
    title: string;
    description: string;
    staticTitle: string;
    videoTitle: string;
    more: string;
    top: string;
  }
> = {
  ru: {
    metaTitle: "Примеры креативов | Do.Marketing",
    metaDescription: "Статические и видео креативы Do.Marketing для рекламных кампаний.",
    home: "На главную",
    eyebrow: "Креативы",
    title: "Больше примеров рекламных креативов",
    description: "Статические макеты и видеоформаты для Meta Ads. Нажмите на любой креатив, чтобы открыть его крупнее.",
    staticTitle: "Статика",
    videoTitle: "Видео",
    more: "Смотреть еще",
    top: "Наверх",
  },
  en: {
    metaTitle: "Creative examples | Do.Marketing",
    metaDescription: "Static and video creatives by Do.Marketing for advertising campaigns.",
    home: "Back to home",
    eyebrow: "Creatives",
    title: "More examples of ad creatives",
    description: "Static layouts and video formats for Meta Ads. Click any creative to open it larger.",
    staticTitle: "Static",
    videoTitle: "Video",
    more: "See more",
    top: "Top",
  },
  et: {
    metaTitle: "Loovlahenduste näited | Do.Marketing",
    metaDescription: "Do.Marketingu staatilised ja videoloovlahendused reklaamikampaaniate jaoks.",
    home: "Tagasi avalehele",
    eyebrow: "Loovad",
    title: "Rohkem reklaamiloovlahenduste näiteid",
    description: "Staatilised kujundused ja videoformaadid Meta Ads kampaaniate jaoks. Klõpsa loovlahendusel, et seda suuremalt vaadata.",
    staticTitle: "Staatika",
    videoTitle: "Video",
    more: "Vaata veel",
    top: "Üles",
  },
};

function CreativeCard({
  item,
  onOpen,
}: {
  item: CreativeItem;
  onOpen: (item: CreativeItem) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="group relative aspect-[9/16] overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/5 text-left shadow-[0_20px_50px_rgba(2,6,23,0.22)] transition hover:-translate-y-1 hover:border-violet-300/35"
    >
      {item.kind === "video" && item.poster ? (
        <Image
          src={item.poster}
          alt={item.alt}
          fill
          sizes="(min-width: 1280px) 280px, (min-width: 768px) 33vw, 50vw"
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
      ) : item.kind === "video" ? (
        <video
          src={item.src}
          muted
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />
      ) : (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(min-width: 1280px) 280px, (min-width: 768px) 33vw, 50vw"
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/82 via-slate-950/10 to-transparent" />
      {item.kind === "video" ? (
        <>
          <div className="absolute inset-x-4 top-4 h-1 rounded-full bg-white/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/92 text-xl text-violet-500 shadow-[0_12px_36px_rgba(255,255,255,0.18)]">
              ▶
            </span>
          </div>
        </>
      ) : null}
    </button>
  );
}

function GallerySection({
  title,
  items,
  moreLabel,
  onOpen,
}: {
  title: string;
  items: CreativeItem[];
  moreLabel: string;
  onOpen: (item: CreativeItem) => void;
}) {
  const [visibleCount, setVisibleCount] = useState(8);
  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  return (
    <section className="space-y-7">
      <h2 className="text-[20px] font-semibold uppercase tracking-[0.3em] text-violet-300">
        {title}
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
        {visibleItems.map((item) => (
          <CreativeCard key={item.src} item={item} onOpen={onOpen} />
        ))}
      </div>

      {hasMore ? (
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((current) => Math.min(current + 8, items.length))}
            className="inline-flex items-center justify-center text-[20px] font-extralight text-white underline decoration-white/80 underline-offset-[10px] transition hover:text-white/85 hover:decoration-white"
          >
            {moreLabel}
          </button>
        </div>
      ) : null}
    </section>
  );
}

export function KreoPageContent() {
  const [language, setLanguage] = useState<Language>("ru");
  const [activeItem, setActiveItem] = useState<CreativeItem | null>(null);
  const copy = useMemo(() => copyByLanguage[language], [language]);
  const pageContent = useMemo<SiteDictionary>(() => {
    const content = siteContent[language];
    const normalizeHref = (href: string) => (href.startsWith("#") ? `/${href}` : href);

    return {
      ...content,
      nav: content.nav.map((item) => ({
        ...item,
        href: normalizeHref(item.href),
      })),
      footer: {
        ...content.footer,
        links: content.footer.links.map((item) => ({
          ...item,
          href: normalizeHref(item.href),
        })),
      },
    };
  }, [language]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = copy.metaTitle;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", copy.metaDescription);
    }
  }, [copy, language]);

  useEffect(() => {
    if (!activeItem) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveItem(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeItem]);

  return (
    <div id="top" className="relative min-h-screen overflow-x-clip bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6rem] top-[-3rem] h-[20rem] w-[20rem] rounded-full bg-amber-200/20 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-violet-400/12 blur-3xl" />
        <div className="absolute right-[-9rem] top-32 h-[26rem] w-[26rem] rounded-full bg-fuchsia-200/12 blur-3xl" />
        <div className="grid-overlay absolute inset-0 opacity-40" />
      </div>

      <SiteHeader
        content={pageContent}
        currentLanguage={language}
        onLanguageChange={setLanguage}
        homeHref="/"
      />

      <main className="relative z-10 mx-auto w-full max-w-7xl px-6 py-10 lg:px-10 lg:py-14">

        <section className="py-16 lg:py-20">
          <div className="max-w-3xl space-y-5">
            <p className="text-[20px] font-semibold uppercase tracking-[0.3em] text-violet-300">
              {copy.eyebrow}
            </p>
            <h1 className="text-[28px] font-extralight leading-[1.08] tracking-[-0.04em] text-white sm:text-[2.075rem]">
              {copy.title}
            </h1>
            <p className="max-w-4xl text-base leading-8 text-slate-400 sm:text-lg">
              {copy.description}
            </p>
          </div>
        </section>

        <div className="space-y-16">
          <GallerySection
            title={copy.staticTitle}
            items={staticItems}
            moreLabel={copy.more}
            onOpen={setActiveItem}
          />

          <GallerySection
            title={copy.videoTitle}
            items={videoItems}
            moreLabel={copy.more}
            onOpen={setActiveItem}
          />
        </div>
      </main>

      <SiteFooter content={pageContent} language={language} />

      <a
        href="#top"
        aria-label={copy.top}
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/12 bg-slate-950/85 text-xl text-white shadow-[0_20px_50px_rgba(2,6,23,0.38)] backdrop-blur transition hover:border-violet-300/35 hover:bg-slate-900"
      >
        ↑
      </a>

      {activeItem ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/86 px-5 py-8 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveItem(null)}
        >
          <button
            type="button"
            aria-label="Close creative preview"
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl text-white transition hover:bg-white/18"
            onClick={() => setActiveItem(null)}
          >
            ×
          </button>
          <div
            className="relative aspect-[9/16] max-h-[86vh] w-full max-w-[24rem] overflow-hidden rounded-[2rem] border border-white/12 bg-slate-900 shadow-[0_36px_120px_rgba(2,6,23,0.55)]"
            onClick={(event) => event.stopPropagation()}
          >
            {activeItem.kind === "video" ? (
              <video
                src={activeItem.src}
                poster={activeItem.poster}
                controls
                autoPlay
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                sizes="384px"
                className="object-cover"
                priority
              />
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
