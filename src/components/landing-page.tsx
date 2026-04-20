"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteContent, type CaseStudy, type Language } from "@/data/site-content";

const defaultLanguage: Language = "ru";

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
    prices: Array<{ budget: string; price: string }>;
    additional: string[];
    cta: string;
  }
> = {
  en: {
    priceLabel: "549€",
    budgetBadge: "+ ad budget: from 350€",
    pricingLabel: "Pricing",
    prices: [
      { budget: "up to 1000€", price: "549€" },
      { budget: "up to 2000€", price: "670€" },
      { budget: "from 2000€", price: "890€" },
    ],
    additional: ["Consultation", "Marketing audit", "SMM", "Google Ads", "SEO"],
    cta: "Start a conversation",
  },
  et: {
    priceLabel: "549€",
    budgetBadge: "+ reklaamieelarve: alates 350€",
    pricingLabel: "Hinnad",
    prices: [
      { budget: "kuni 1000€", price: "549€" },
      { budget: "kuni 2000€", price: "670€" },
      { budget: "alates 2000€", price: "890€" },
    ],
    additional: ["Konsultatsioon", "Turundusaudit", "SMM", "Google Ads", "SEO"],
    cta: "Alusta vestlust",
  },
  ru: {
    priceLabel: "549€",
    budgetBadge: "+ рекламный бюджет: от 350€",
    pricingLabel: "РАСЦЕНКИ",
    prices: [
      { budget: "до 1000€", price: "549€" },
      { budget: "до 2000€", price: "670€" },
      { budget: "от 2000€", price: "890€" },
    ],
    additional: ["Консультация", "Аудит маркетинга", "SMM", "Google реклама", "SEO оптимизация"],
    cta: "Оставить заявку",
  },
};

const testimonialCopy: Record<Language, Array<{ name: string; role: string; image: string }>> = {
  en: [
    { name: "Alexander", role: "Video review", image: "/images/testimonial-portrait.jpg" },
    { name: "Artem", role: "Video review", image: "/images/testimonial-2.jpg" },
    { name: "Elena", role: "Video review", image: "/images/testimonial-3.jpg" },
  ],
  et: [
    { name: "Alexander", role: "Videotagasiside", image: "/images/testimonial-portrait.jpg" },
    { name: "Artem", role: "Videotagasiside", image: "/images/testimonial-2.jpg" },
    { name: "Elena", role: "Videotagasiside", image: "/images/testimonial-3.jpg" },
  ],
  ru: [
    { name: "Александр", role: "Видео отзыв", image: "/images/testimonial-portrait.jpg" },
    { name: "Артем", role: "Видео отзыв", image: "/images/testimonial-2.jpg" },
    { name: "Елена", role: "Видео отзыв", image: "/images/testimonial-3.jpg" },
  ],
};

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

function CaseCard({ item, index }: { item: CaseStudy; index: number }) {
  const palette = caseBackgrounds[index % caseBackgrounds.length];
  const categoryParts = item.category.split("/").map((part) => part.trim());

  return (
    <article
      className={`group overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-violet-300/35 ${
        index === 0 || index === 5 ? "xl:col-span-2" : ""
      }`}
    >
      <div
        className={`relative min-h-[17rem] bg-gradient-to-br ${palette} p-5 sm:min-h-[18.5rem] sm:p-6`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_28%),linear-gradient(180deg,rgba(2,6,23,0.05),rgba(2,6,23,0.78))]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />

        <div className="relative flex h-full flex-col justify-between gap-8">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/95">
              Кейс
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

export function LandingPage() {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const content = siteContent[language];
  const pricing = pricingByLanguage[language];
  const testimonials = testimonialCopy[language];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
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
      />

      <main className="relative z-10">
        <section className="mx-auto grid w-full max-w-7xl gap-14 px-6 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-28 lg:pt-24">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-violet-200">
              {content.hero.eyebrow}
            </div>

            <div className="space-y-6">
              <h1 className="max-w-3xl text-[27px] font-light tracking-[-0.05em] text-white sm:text-[34px] lg:text-[58px]">
                {renderHighlightedText(content.hero.title)}
              </h1>
              <p className="max-w-2xl text-lg font-medium uppercase tracking-[0.22em] text-violet-200/95 sm:text-xl">
                {content.hero.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/cases"
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

        <section id="cases" className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <BackgroundGlow className="left-[-8rem] top-20 h-[22rem] w-[22rem] bg-violet-300/10" />
          <BackgroundGlow className="right-[-10rem] bottom-8 h-[26rem] w-[26rem] bg-fuchsia-300/9" />
          <SectionHeading
            title={content.sections.cases}
            description={content.sectionLead.cases}
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {content.cases.map((item, index) => (
              <CaseCard key={item.title} item={item} index={index} />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="/cases"
              className="inline-flex items-center justify-center text-[20px] font-extralight text-white underline decoration-white/80 underline-offset-[10px] transition hover:text-white/85 hover:decoration-white"
            >
              Смотреть еще
            </a>
          </div>
        </section>

        <section id="services" className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <BackgroundGlow className="left-[8%] top-4 h-[24rem] w-[24rem] bg-amber-100/9" />
          <BackgroundGlow className="right-[-7rem] top-28 h-[25rem] w-[25rem] bg-violet-400/12" />
          <SectionHeading
            title={content.sections.services}
            description={content.sectionLead.services}
          />
          <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(12,18,42,0.92),rgba(16,20,42,0.84),rgba(32,22,51,0.88))] p-8 shadow-[0_40px_120px_rgba(7,10,24,0.32)] sm:p-10 lg:p-12">
            <BackgroundGlow className="right-8 top-[-8rem] h-[20rem] w-[20rem] bg-fuchsia-300/10" />
            <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_22rem] xl:items-start">
              <div className="space-y-8">
                <h3 className="text-[1.75rem] font-medium tracking-[0.08em] text-white sm:text-[2.2rem]">
                  {content.services[0].title}
                </h3>

                <div className="grid gap-3 sm:grid-cols-2">
                  {content.services[0].features.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-[1.4rem] border border-white/8 bg-slate-950/20 px-4 py-3 text-slate-100"
                    >
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-violet-300/30 bg-violet-300/10 text-xs text-violet-200">
                        ✓
                      </span>
                      <span className="leading-6">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {pricing.additional.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-violet-300/25 bg-violet-300/10 px-5 py-2.5 text-[20px] font-medium text-violet-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.9rem] border border-violet-300/18 bg-[linear-gradient(155deg,rgba(167,139,250,0.18),rgba(255,255,255,0.04),rgba(15,23,42,0.35))] p-5 shadow-[0_24px_70px_rgba(76,29,149,0.18)] sm:p-6">
                <div className="flex min-h-full flex-col items-center text-center">
                  <p className="mt-0 text-[48px] font-light tracking-[-0.08em] text-white sm:text-[58px]">
                    {pricing.priceLabel}
                  </p>
                  <div className="mt-5 inline-flex items-center justify-center rounded-full border border-violet-300/22 bg-violet-300/10 px-3.5 py-1 text-[13px] font-medium text-violet-100 shadow-[0_12px_40px_rgba(167,139,250,0.12)]">
                    {pricing.budgetBadge}
                  </div>
                  <div className="mt-5 w-full max-w-[19rem] rounded-[1.2rem] border border-white/8 bg-slate-950/22 px-4 py-4 text-left">
                    <p className="mb-4 text-[14px] uppercase tracking-[0.18em] text-slate-300">
                      {pricing.pricingLabel}
                    </p>
                    <div className="space-y-2">
                      {pricing.prices.map((row) => (
                        <div
                          key={`${row.budget}-${row.price}`}
                          className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-white/8 pb-2 text-[14px] text-slate-200 last:border-b-0 last:pb-0"
                        >
                          <span>{row.budget}</span>
                          <span className="font-semibold text-white">{row.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#contacts"
                    className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-violet-400 px-7 text-[20px] font-semibold text-slate-950 transition hover:bg-violet-300"
                  >
                    {pricing.cta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clients" className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <BackgroundGlow className="left-[-6rem] bottom-2 h-[22rem] w-[22rem] bg-cyan-200/8" />
          <BackgroundGlow className="right-[16%] top-10 h-[18rem] w-[18rem] bg-violet-300/8" />
          <SectionHeading
            title={content.sections.clients}
            description={content.sectionLead.clients}
          />
          <div className="client-marquee relative left-1/2 mt-10 w-screen -translate-x-1/2 overflow-hidden">
            <div className="client-marquee__track">
              {[...content.clients, ...content.clients].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  aria-hidden={index >= content.clients.length}
                  className="flex min-h-28 w-[13rem] flex-none items-center justify-center rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 sm:w-[14rem]"
                >
                  <Image
                    src={client.src}
                    alt={index >= content.clients.length ? "" : client.name}
                    width={140}
                    height={56}
                    className="h-auto max-h-12 w-auto object-contain opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <BackgroundGlow className="left-[24%] top-[-3rem] h-[22rem] w-[22rem] bg-amber-100/10" />
          <BackgroundGlow className="right-[-9rem] bottom-[-4rem] h-[26rem] w-[26rem] bg-fuchsia-300/9" />
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
              <SectionHeading
                title={content.sections.about}
                description={content.sectionLead.about}
              />
              <h2 className="max-w-xl text-3xl font-light tracking-[-0.05em] text-white sm:text-4xl lg:text-[3.4rem]">
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

        <section id="testimonials" className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <BackgroundGlow className="left-[-10rem] top-10 h-[26rem] w-[26rem] bg-violet-300/10" />
          <BackgroundGlow className="right-[-7rem] bottom-0 h-[22rem] w-[22rem] bg-amber-100/9" />
          <SectionHeading
            title={content.sections.testimonials}
            description={content.sectionLead.testimonials}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                  <div className="absolute left-6 top-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur">
                    <span className="ml-1 text-lg text-white">▶</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-300">
                      {item.role}
                    </p>
                    <p className="mt-3 text-2xl font-medium text-white">
                      {item.name}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter content={content} language={language} />
    </div>
  );
}
