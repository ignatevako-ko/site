import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SectionLabel } from "@/components/section-label";

/* ─────────────────────────  Общие токены кейсов  ───────────────────────── */

export const caseHeroTitleClass =
  "max-w-3xl text-[32px] font-light leading-[1.07] tracking-[-0.03em] text-white sm:text-[40px] lg:text-[50px]";
export const caseSectionTitleClass =
  "text-[32px] font-light leading-[1.05] tracking-[-0.04em] text-white sm:text-[46px]";
export const casePrimaryButtonClass =
  "inline-flex min-h-14 items-center justify-center rounded-full bg-violet-400 px-7 text-base font-semibold text-slate-950 transition hover:bg-violet-300";
export const caseSecondaryButtonClass =
  "inline-flex min-h-14 items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 text-base font-semibold text-white transition hover:border-violet-300/40 hover:bg-white/10";
export const caseWhiteButtonClass =
  "inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 text-base font-semibold text-slate-950 transition hover:bg-violet-100";

/* ─────────────────────────────  Типы данных  ──────────────────────────── */

export type CaseStat = { value: string; label: string };
export type CaseFact = { label: string; value: string };
export type CaseFaqItem = { question: string; answer: string };
export type CaseCta = { label: string; href: string };
export type CaseProofImage = { src: string; alt: string; ratio: string };
export type CaseCard = { label: string; title: string; text: string };
export type CaseCreativeImage = { src: string; alt: string };
export type CaseCreativeVideo = { src: string; title: string };

/* ────────────────────────────  Секции кейса  ──────────────────────────── */

export function CaseHeroBadges({ badge, category }: { badge: string; category: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="rounded-full border border-violet-300/30 bg-violet-400/10 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.24em] text-violet-100">
        {badge}
      </span>
      <span className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-[12px] font-medium text-slate-300">
        {category}
      </span>
    </div>
  );
}

export function CaseHeroButtons({ primary, secondary }: { primary: CaseCta; secondary: CaseCta }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Link href={primary.href} className={casePrimaryButtonClass}>
        {primary.label}
      </Link>
      <Link href={secondary.href} className={caseSecondaryButtonClass}>
        {secondary.label}
      </Link>
    </div>
  );
}

/**
 * Эталонный hero-каркас страницы-кейса: слева — нарратив (бейджи, H1,
 * описание, кнопки, опциональные мини-статы), справа — панель-результат (слот).
 * Использовать на всех кейсах, чтобы hero был единым. Числа не дублировать:
 * либо мини-статы слева, либо цифры в панели справа — но не одно и то же дважды.
 */
export function CaseHero({
  badge,
  category,
  title,
  description,
  primaryCta,
  secondaryCta,
  stats,
  panel,
  align = "start",
}: {
  badge: string;
  category: string;
  title: string;
  description: string;
  primaryCta: CaseCta;
  secondaryCta: CaseCta;
  stats?: CaseStat[];
  panel: ReactNode;
  align?: "start" | "center" | "end";
}) {
  const alignClass =
    align === "center" ? "lg:items-center" : align === "end" ? "lg:items-end" : "lg:items-start";

  return (
    <section className={`grid gap-10 py-10 lg:grid-cols-[1.02fr_0.98fr] ${alignClass} lg:py-14`}>
      <div className="space-y-7">
        <CaseHeroBadges badge={badge} category={category} />
        <div className="space-y-5">
          <h1 className={caseHeroTitleClass}>{title}</h1>
          <p className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
        </div>
        <CaseHeroButtons primary={primaryCta} secondary={secondaryCta} />
        {stats && stats.length > 0 ? <CaseStatsGrid stats={stats} /> : null}
      </div>
      {panel}
    </section>
  );
}

export function CaseStatsGrid({ stats }: { stats: CaseStat[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-4"
        >
          <p className="text-2xl font-semibold text-white">{item.value}</p>
          <p className="mt-2 text-sm leading-5 text-slate-400">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export function CaseFacts({ facts }: { facts: CaseFact[] }) {
  const cols = facts.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";
  return (
    <section className={`grid gap-5 border-y border-white/10 py-8 sm:grid-cols-2 ${cols}`}>
      {facts.map((item) => (
        <div key={item.label} className="space-y-2">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
          <p className="text-base leading-6 text-slate-100">{item.value}</p>
        </div>
      ))}
    </section>
  );
}

export function CaseSectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="space-y-4">
      <SectionLabel>{label}</SectionLabel>
      <h2 className={caseSectionTitleClass}>{title}</h2>
    </div>
  );
}

export function CaseMain({
  label,
  title,
  paragraphs,
  cta,
}: {
  label: string;
  title: string;
  paragraphs: string[];
  cta?: CaseCta;
}) {
  return (
    <section className="grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
      <CaseSectionHeading label={label} title={title} />
      <div className="space-y-5 text-lg leading-8 text-slate-300">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {cta ? (
          <Link href={cta.href} className={caseWhiteButtonClass}>
            {cta.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}

export function CaseThreeCards({ cards }: { cards: CaseCard[] }) {
  return (
    <section className="grid gap-6 py-4 lg:grid-cols-3">
      {cards.map((card) => (
        <article
          key={card.title}
          className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6"
        >
          <SectionLabel>{card.label}</SectionLabel>
          <h3 className="mt-4 text-2xl font-light text-white">{card.title}</h3>
          <p className="mt-4 text-base leading-7 text-slate-400">{card.text}</p>
        </article>
      ))}
    </section>
  );
}

export function CaseCreatives({
  label,
  title,
  description,
  images,
  videos,
  videoCols = 3,
}: {
  label: string;
  title: string;
  description: string;
  images?: CaseCreativeImage[];
  videos?: CaseCreativeVideo[];
  videoCols?: 3 | 4;
}) {
  const videoGridClass =
    videoCols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="py-10">
      <div className="max-w-3xl space-y-4">
        <SectionLabel>{label}</SectionLabel>
        <h2 className={caseSectionTitleClass}>{title}</h2>
        <p className="text-base leading-7 text-slate-400">{description}</p>
      </div>

      {images && images.length > 0 ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((item) => (
            <figure
              key={item.src}
              className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.045]"
            >
              <div className="relative aspect-[9/16] bg-slate-950">
                <Image src={item.src} alt={item.alt} fill sizes="360px" className="object-cover" />
              </div>
            </figure>
          ))}
        </div>
      ) : null}

      {videos && videos.length > 0 ? (
        <div className={`mt-5 grid gap-4 ${videoGridClass}`}>
          {videos.map((item) => (
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
                  aria-label={item.title}
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              </div>
              <figcaption className="min-h-16 px-4 py-3 text-sm leading-5 text-slate-300">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}
    </section>
  );
}

export function CaseMechanics({
  label,
  title,
  steps,
}: {
  label: string;
  title: string;
  steps: string[];
}) {
  return (
    <section id="mechanics" className="grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr]">
      <CaseSectionHeading label={label} title={title} />
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex gap-4 rounded-[1.25rem] border border-white/10 bg-slate-950/55 p-5"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-400 text-sm font-semibold text-slate-950">
              {index + 1}
            </span>
            <p className="text-base leading-7 text-slate-300">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CaseProof({
  label,
  title,
  description,
  images,
}: {
  label: string;
  title: string;
  description: string;
  images: CaseProofImage[];
}) {
  return (
    <section id="proof" className="py-16">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          <SectionLabel>{label}</SectionLabel>
          <h2 className={caseSectionTitleClass}>{title}</h2>
          <p className="text-base leading-7 text-slate-400">{description}</p>
        </div>
        <div className="space-y-4">
          {images.map((item) => (
            <div
              key={item.src}
              className={`relative ${item.ratio} overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.045]`}
            >
              <Image src={item.src} alt={item.alt} fill sizes="760px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseFaq({
  label,
  title,
  items,
}: {
  label: string;
  title: string;
  items: CaseFaqItem[];
}) {
  return (
    <section className="grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr]">
      <CaseSectionHeading label={label} title={title} />
      <div className="space-y-4">
        {items.map((item) => (
          <article
            key={item.question}
            className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6"
          >
            <h3 className="text-xl font-semibold text-white">{item.question}</h3>
            <p className="mt-3 text-base leading-7 text-slate-400">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CaseNextStep({
  label,
  title,
  text,
  cta,
}: {
  label: string;
  title: string;
  text: string;
  cta: CaseCta;
}) {
  return (
    <section className="mb-10 rounded-[2rem] border border-violet-300/20 bg-violet-400/10 p-7 sm:p-9">
      <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="space-y-3">
          <SectionLabel>{label}</SectionLabel>
          <h2 className="text-[32px] font-light leading-[1.05] tracking-[-0.04em] text-white">
            {title}
          </h2>
          <p className="max-w-3xl text-base leading-7 text-slate-300">{text}</p>
        </div>
        <Link href={cta.href} className={caseWhiteButtonClass}>
          {cta.label}
        </Link>
      </div>
    </section>
  );
}
