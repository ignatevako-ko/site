"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export type CreativeGalleryItem = {
  src: string;
  alt: string;
  kind: "image" | "video";
  poster?: string;
};

type CreativeGalleryProps = {
  title: string;
  staticItems: CreativeGalleryItem[];
  videoItems: CreativeGalleryItem[];
  showMoreLink?: boolean;
  showMoreLabel?: string;
  dense?: boolean;
  embedded?: boolean;
  duplicateVideoItems?: boolean;
};

function CreativePreview({
  item,
  index,
  onOpen,
  duplicate = false,
}: {
  item: CreativeGalleryItem;
  index: number;
  onOpen: (item: CreativeGalleryItem) => void;
  duplicate?: boolean;
}) {
  const isVideo = item.kind === "video";

  return (
    <button
      type="button"
      aria-hidden={duplicate}
      tabIndex={duplicate ? -1 : 0}
      onClick={() => onOpen(item)}
      className="group relative aspect-[9/16] w-[8.5rem] shrink-0 overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/5 text-left shadow-[0_20px_50px_rgba(2,6,23,0.22)] transition hover:-translate-y-1 hover:border-violet-300/35 sm:w-[10rem] lg:w-[11.25rem]"
    >
      {isVideo ? (
        <video
          src={item.src}
          poster={item.poster}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />
      ) : (
        <Image
          src={item.src}
          alt={duplicate ? "" : item.alt}
          fill
          sizes="(min-width: 1024px) 180px, 150px"
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/82 via-slate-950/8 to-transparent" />
      {isVideo ? (
        <>
          <div className="absolute inset-x-3 top-3 h-1 overflow-hidden rounded-full bg-white/20">
            <span
              className="creative-video-progress block h-full rounded-full bg-violet-200"
              style={{ animationDelay: `${index * 180}ms` }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-lg text-violet-500 shadow-[0_12px_36px_rgba(255,255,255,0.18)]">
              ▶
            </span>
          </div>
        </>
      ) : null}
    </button>
  );
}

export function CreativeGallery({
  title,
  staticItems,
  videoItems,
  showMoreLink = false,
  showMoreLabel = "Еще",
  dense = false,
  embedded = false,
  duplicateVideoItems = true,
}: CreativeGalleryProps) {
  const [activeItem, setActiveItem] = useState<CreativeGalleryItem | null>(null);
  const visibleVideoItems = duplicateVideoItems ? [...videoItems, ...videoItems] : videoItems;

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
    <section
      id="kreo"
      className={`relative mx-auto w-full ${embedded ? "max-w-none px-0" : "max-w-7xl px-6 lg:px-10"} ${
        dense ? "py-12" : "pb-20"
      }`}
    >
      <div className="max-w-2xl space-y-4">
        <p className="text-[20px] font-semibold uppercase tracking-[0.3em] text-violet-300">
          {title}
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4 overflow-hidden sm:gap-5">
        <div className="creative-marquee">
          <div className="creative-marquee__track creative-marquee__track--left">
            {[...staticItems, ...staticItems].map((item, index) => (
              <CreativePreview
                key={`static-${item.src}-${index}`}
                item={item}
                index={index}
                duplicate={index >= staticItems.length}
                onOpen={setActiveItem}
              />
            ))}
          </div>
        </div>

        <div className="creative-marquee">
          <div className="creative-marquee__track creative-marquee__track--right">
            {visibleVideoItems.map((item, index) => (
              <CreativePreview
                key={`video-${item.src}-${index}`}
                item={item}
                index={index}
                duplicate={duplicateVideoItems && index >= videoItems.length}
                onOpen={setActiveItem}
              />
            ))}
          </div>
        </div>
      </div>

      {showMoreLink ? (
        <div className="mt-8 flex justify-center">
          <Link
            href="/kreo"
            className="inline-flex items-center justify-center text-[20px] font-extralight text-white underline decoration-white/80 underline-offset-[10px] transition hover:text-white/85 hover:decoration-white"
          >
            {showMoreLabel}
          </Link>
        </div>
      ) : null}

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
    </section>
  );
}
