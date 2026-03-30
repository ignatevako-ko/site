"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteContent, type Language } from "@/data/site-content";

const defaultLanguage: Language = "ru";

function renderHighlightedText(text: string) {
  return text.split(/(\*[^*]+\*)/g).map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <strong key={`${part}-${index}`} className="font-medium text-white">
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
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
        {title}
      </p>
      <p className="text-base leading-7 text-slate-400 sm:text-lg">{description}</p>
    </div>
  );
}

export function LandingPage() {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const handleLanguageChange = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  const content = siteContent[language];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6rem] top-[-3rem] h-[18rem] w-[18rem] rounded-full bg-amber-200/18 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-violet-400/12 blur-3xl" />
        <div className="absolute right-[-9rem] top-44 h-[24rem] w-[24rem] rounded-full bg-rose-200/16 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[-6rem] h-[22rem] w-[22rem] rounded-full bg-violet-200/12 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-6rem] h-[18rem] w-[18rem] rounded-full bg-amber-100/20 blur-3xl" />
        <div className="grid-overlay absolute inset-0 opacity-40" />
      </div>

      <SiteHeader
        content={content}
        currentLanguage={language}
        onLanguageChange={handleLanguageChange}
      />

      <main className="relative z-10">
        <section className="mx-auto grid w-full max-w-7xl gap-14 px-6 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-28 lg:pt-24">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-violet-200">
              {content.hero.eyebrow}
            </div>

            <div className="space-y-6">
              <h1 className="max-w-3xl text-[1.85rem] font-light tracking-[-0.05em] text-white sm:text-[2.25rem] lg:text-[3.75rem]">
                {renderHighlightedText(content.hero.title)}
              </h1>
              {content.hero.description ? (
                <p className="max-w-2xl text-base font-light leading-7 text-slate-300 sm:text-lg">
                  {content.hero.description}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contacts"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-violet-400 px-7 text-sm font-semibold text-slate-950 transition hover:bg-violet-300"
              >
                {content.hero.primaryCta}
              </a>
              <a
                href="#cases"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-sm font-semibold text-white transition hover:border-violet-300/60 hover:bg-white/10"
              >
                {content.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet-400/20 via-transparent to-fuchsia-500/20 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-2xl shadow-violet-500/10 backdrop-blur-xl sm:p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div className="space-y-3">
                    <BrandLogo compact />
                    <p className="text-xl font-semibold text-white">
                      {content.hero.dashboardTitle}
                    </p>
                  </div>
                  <div className="rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-200">
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

        <section id="cases" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeading
            title={content.sections.cases}
            description={content.sectionLead.cases}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {content.cases.map((item) => (
              <article
                key={item.title}
                className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-violet-300/40 hover:bg-white/7"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-violet-300">
                  {item.category}
                </p>
                <h3 className="mt-5 text-2xl font-light tracking-[-0.04em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.summary}</p>
                <p className="mt-8 text-sm font-semibold text-white">{item.result}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeading
            title={content.sections.services}
            description={content.sectionLead.services}
          />
          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {content.services.map((service) => (
              <article
                key={service.title}
                className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6"
              >
                <div className="mb-6 h-px w-full bg-gradient-to-r from-violet-300/90 to-transparent" />
                <h3 className="text-2xl font-light tracking-[-0.04em] text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>
                <div className="mt-8 space-y-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="clients" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeading
            title={content.sections.clients}
            description={content.sectionLead.clients}
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {content.clients.map((client) => (
              <div
                key={client.name}
                className="flex min-h-28 items-center justify-center rounded-[1.5rem] border border-white/10 bg-white/5 px-4 text-center text-lg font-medium tracking-[0.12em] text-slate-200"
              >
                {client.name}
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
            <SectionHeading
              title={content.sections.about}
              description={content.sectionLead.about}
            />
            <div className="space-y-6">
              <h2 className="text-3xl font-light tracking-[-0.05em] text-white sm:text-4xl">
                {content.about.title}
              </h2>
              <p className="text-base leading-8 text-slate-300">
                {content.about.description}
              </p>
              <div className="space-y-3">
                {content.about.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4 text-sm text-slate-200"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter content={content} language={language} />
    </div>
  );
}
