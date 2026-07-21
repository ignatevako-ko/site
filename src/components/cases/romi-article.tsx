"use client";

import { useState } from "react";
import { CaseChrome } from "@/components/case-chrome";
import {
  CaseCreatives,
  CaseFacts,
  CaseHeroBadges,
  CaseHeroButtons,
  CaseMain,
  CaseMechanics,
  CaseNextStep,
  CaseStatsGrid,
  CaseThreeCards,
  caseHeroTitleClass,
} from "@/components/cases/case-sections";
import { romiContent, romiCreativeVideos } from "@/data/cases/romi";
import type { Language } from "@/data/site-content";

export function RomiArticle() {
  const [language, setLanguage] = useState<Language>("ru");
  const c = romiContent[language];

  return (
    <CaseChrome language={language} onLanguageChange={setLanguage}>
      <section className="grid gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-end lg:py-16">
        <div className="space-y-7">
          <CaseHeroBadges badge={c.badge} category={c.category} />
          <div className="space-y-5">
            <h1 className={caseHeroTitleClass}>{c.heroTitle}</h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">{c.heroDescription}</p>
          </div>
          <CaseHeroButtons primary={c.primaryCta} secondary={c.secondaryCta} />
          <CaseStatsGrid stats={c.resultStats} />
        </div>

        <div className="glass-shell relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-[12px] uppercase tracking-[0.28em] text-violet-200/90">
                  {c.heroPanel.label}
                </p>
                <p className="mt-3 text-xl font-semibold text-white">{c.heroPanel.title}</p>
              </div>
              <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
                {c.heroPanel.badge}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {c.heroPanel.segments.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-base font-semibold leading-snug text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[1.5rem] border border-white/8 bg-slate-950/50 p-5">
              <div className="inline-flex rounded-full border border-violet-300/22 bg-violet-300/10 px-3.5 py-1 text-[13px] font-medium text-violet-100">
                {c.heroPanel.economyBadge}
              </div>
              <p className="mt-4 text-[32px] font-light leading-none tracking-[-0.05em] text-white sm:text-[40px]">
                {c.heroPanel.economyValue}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{c.heroPanel.economyNote}</p>
            </div>
          </div>
        </div>
      </section>

      <CaseFacts facts={c.facts} />
      <CaseMain
        label={c.main.label}
        title={c.main.title}
        paragraphs={c.main.paragraphs}
        cta={{ label: c.main.ctaLabel, href: "#contacts" }}
      />
      <CaseThreeCards cards={c.cards} />
      <CaseMechanics
        label={c.mechanics.label}
        title={c.mechanics.title}
        steps={c.mechanics.steps}
      />
      <CaseCreatives
        label={c.creatives.label}
        title={c.creatives.title}
        description={c.creatives.description}
        videos={romiCreativeVideos.map((item) => ({
          src: item.src,
          title: c.creatives.videoTitles[item.titleKey],
        }))}
        videoCols={4}
      />
      <CaseNextStep
        label={c.nextStep.label}
        title={c.nextStep.title}
        text={c.nextStep.text}
        cta={{ label: c.nextStep.cta, href: "#contacts" }}
      />
    </CaseChrome>
  );
}
