"use client";

import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Language, SiteDictionary } from "@/data/site-content";
import type { ServicePageCopy } from "@/lib/service-pages";

type ServicePageShellProps = {
  language: Language;
  content: SiteDictionary;
  copy: ServicePageCopy;
  homeHref: string;
  homeButtonLabel?: string;
  languageLinks: Partial<Record<Language, string>>;
  relatedServices: ReadonlyArray<{ href: string; label: string }>;
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-[13px] font-semibold uppercase tracking-[0.34em] text-violet-300">
        {eyebrow}
      </p>
      <h2 className="text-[30px] font-light leading-[1.06] tracking-[-0.05em] text-white sm:text-[44px]">
        {title}
      </h2>
      <p className="text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
    </div>
  );
}

export function ServicePageShell({
  language,
  content,
  copy,
  homeHref,
  homeButtonLabel,
  languageLinks,
  relatedServices,
}: ServicePageShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-7rem] top-[-4rem] h-[22rem] w-[22rem] rounded-full bg-amber-200/14 blur-3xl" />
        <div className="absolute left-1/2 top-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-violet-400/10 blur-3xl" />
        <div className="absolute right-[-8rem] top-28 h-[24rem] w-[24rem] rounded-full bg-fuchsia-300/12 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-6rem] h-[24rem] w-[24rem] rounded-full bg-violet-200/8 blur-3xl" />
        <div className="grid-overlay absolute inset-0 opacity-40" />
      </div>

      <SiteHeader
        content={content}
        currentLanguage={language}
        onLanguageChange={() => {}}
        homeHref={homeHref}
        showLanguageSwitcher
        languageLinks={languageLinks}
        servicesRouteLanguage={language}
      />

      {homeButtonLabel ? (
        <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-end px-6 pt-5 lg:px-10">
          <Link
            href={homeHref}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 bg-white/6 px-5 text-sm font-medium text-white transition hover:border-violet-300/40 hover:bg-white/10"
          >
            {homeButtonLabel}
          </Link>
        </div>
      ) : null}

      <main className="relative z-10">
        <section
          id="offer"
          className="mx-auto grid w-full max-w-7xl gap-10 px-6 pb-20 pt-14 lg:grid-cols-[1.06fr_0.94fr] lg:px-10 lg:pb-28 lg:pt-20"
        >
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-violet-300/20 bg-violet-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-violet-100">
              {copy.hero.badge}
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-[34px] font-light leading-[1.02] tracking-[-0.06em] text-white sm:text-[50px] lg:text-[68px]">
                {copy.hero.title}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {copy.hero.description}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {copy.hero.bullets.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacts"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-violet-400 px-7 text-[18px] font-semibold text-slate-950 transition hover:bg-violet-300"
              >
                {copy.hero.primaryCta}
              </a>
              <a
                href="#process"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 text-[18px] font-semibold text-white transition hover:border-violet-300/40 hover:bg-white/10"
              >
                {copy.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div id="pricing" className="glass-shell rounded-[2rem] p-6 sm:p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-[12px] uppercase tracking-[0.28em] text-violet-200/90">
                    {copy.pricing.serviceLabel}
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">
                    {copy.pricing.serviceName}
                  </p>
                </div>
                <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
                  {copy.pricing.status}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {copy.pricing.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-4"
                  >
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.5rem] border border-white/8 bg-slate-950/50 p-5">
                <div className="inline-flex rounded-full border border-violet-300/22 bg-violet-300/10 px-3.5 py-1 text-[13px] font-medium text-violet-100">
                  {copy.pricing.budgetBadge}
                </div>
                <div className="mt-4 flex items-end gap-3">
                  <span className="pb-2 text-sm uppercase tracking-[0.18em] text-white/60">
                    {copy.pricing.fromLabel}
                  </span>
                  <p className="text-[56px] font-light leading-none tracking-[-0.08em] text-white sm:text-[68px]">
                    {copy.pricing.priceLabel}
                  </p>
                </div>
                <div className="mt-5 space-y-3 rounded-[1.4rem] border border-white/8 bg-slate-950/35 p-4 text-sm text-slate-200">
                  {copy.pricing.tiers.map((row) => (
                    <div
                      key={`${row.budget}-${row.fee}`}
                      className="grid grid-cols-[1fr_auto] gap-3 border-b border-white/8 pb-3 last:border-b-0 last:pb-0"
                    >
                      <span>{row.budget}</span>
                      <span className="font-semibold text-white">{row.fee}</span>
                    </div>
                  ))}
                </div>
                {copy.pricing.note ? (
                  <p className="mt-4 text-sm leading-7 text-slate-300">{copy.pricing.note}</p>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section id="proof" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeading
            eyebrow={copy.benefits.eyebrow}
            title={copy.benefits.title}
            description={copy.benefits.description}
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {copy.benefits.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(2,6,23,0.24)]"
              >
                <h3 className="text-[24px] font-medium tracking-[-0.04em] text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-300">{card.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(19,26,53,0.88),rgba(35,21,51,0.82))] p-7 sm:p-8">
            <SectionHeading
              eyebrow={copy.proof.eyebrow}
              title={copy.proof.title}
              description={copy.proof.description}
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {copy.proof.points.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-white/8 bg-slate-950/35 p-4 text-sm leading-7 text-slate-200 sm:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeading
            eyebrow={copy.process.eyebrow}
            title={copy.process.title}
            description={copy.process.description}
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {copy.process.items.map((item, index) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-[1.85rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6"
              >
                <div className="absolute right-4 top-4 text-[64px] font-light leading-none tracking-[-0.08em] text-white/7">
                  {index + 1}
                </div>
                <p className="text-[14px] font-semibold uppercase tracking-[0.28em] text-violet-300">
                  {item.title}
                </p>
                <p className="mt-5 text-base leading-8 text-slate-300">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 sm:p-8">
              <SectionHeading
                eyebrow={copy.faq.eyebrow}
                title={copy.faq.title}
                description={copy.faq.description}
              />
              <div className="mt-8 space-y-4">
                {copy.faq.items.map((item) => (
                  <article
                    key={item.question}
                    className="rounded-[1.4rem] border border-white/8 bg-slate-900/70 p-5"
                  >
                    <h3 className="text-[20px] font-medium tracking-[-0.03em] text-white">
                      {item.question}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                      {item.answer}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-violet-300/16 bg-[linear-gradient(160deg,rgba(57,29,92,0.62),rgba(9,14,31,0.9))] p-7 shadow-[0_30px_90px_rgba(76,29,149,0.18)] sm:p-8">
              <p className="text-[14px] uppercase tracking-[0.28em] text-slate-300">
                {copy.included.eyebrow}
              </p>
              <div className="mt-6 grid gap-4">
                {copy.included.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] border border-white/8 bg-slate-950/28 px-5 py-4 text-sm leading-7 text-slate-100 sm:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="#contacts"
                className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-violet-400 px-7 text-[18px] font-semibold text-slate-950 transition hover:bg-violet-300"
              >
                {copy.included.cta}
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10">
          <p className="text-[20px] font-semibold uppercase tracking-[0.3em] text-violet-300">
            {copy.relatedTitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {relatedServices.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-5 py-2.5 text-[18px] font-light text-slate-100 transition hover:border-violet-300/35 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter content={content} language={language} />
    </div>
  );
}
