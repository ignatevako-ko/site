"use client";

import { useState } from "react";
import { CaseChrome } from "@/components/case-chrome";
import {
  CaseCreatives,
  CaseFacts,
  CaseFaq,
  CaseHeroBadges,
  CaseHeroButtons,
  CaseMain,
  CaseMechanics,
  CaseNextStep,
  CaseProof,
  CaseThreeCards,
  caseHeroTitleClass,
} from "@/components/cases/case-sections";
import {
  eduDoContent,
  eduDoCreativeImages,
  eduDoCreativeVideos,
  eduDoProofImages,
} from "@/data/cases/edu-do";
import type { Language } from "@/data/site-content";

export function EduDoArticle() {
  const [language, setLanguage] = useState<Language>("ru");
  const c = eduDoContent[language];

  return (
    <CaseChrome language={language} onLanguageChange={setLanguage}>
      <section className="grid gap-10 py-12 lg:grid-cols-[1fr_0.95fr] lg:items-start lg:py-16">
        <div className="space-y-7">
          <CaseHeroBadges badge={c.badge} category={c.category} />
          <div className="space-y-5">
            <h1 className={caseHeroTitleClass}>{c.heroTitle}</h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">{c.heroDescription}</p>
          </div>
          <CaseHeroButtons primary={c.primaryCta} secondary={c.secondaryCta} />
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-[0_30px_90px_rgba(2,6,23,0.38)] sm:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.22),transparent_34%),linear-gradient(160deg,rgba(34,211,238,0.12),rgba(7,9,20,0.15))]" />
          <div className="relative flex flex-col gap-6">
            <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-violet-200">
                  {c.heroPanel.label}
                </p>
                <h2 className="text-[28px] font-light leading-tight text-white sm:text-[34px]">
                  {c.heroPanel.title}
                </h2>
              </div>
              <div className="shrink-0 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-200">
                {c.heroPanel.badge}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {c.heroPanel.stats.map((item) => (
                <div
                  key={item.label}
                  className="flex min-h-[8.25rem] flex-col justify-between rounded-[1.25rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur"
                >
                  <p className="text-[32px] font-semibold leading-none text-white">{item.value}</p>
                  <p className="text-sm leading-5 text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/45 px-5 py-4">
              <p className="text-sm leading-6 text-slate-300">{c.heroPanel.note}</p>
            </div>
          </div>
        </div>
      </section>

      <CaseFacts facts={c.facts} />
      <CaseMain label={c.main.label} title={c.main.title} paragraphs={c.main.paragraphs} />
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
        images={eduDoCreativeImages.map((item) => ({
          src: item.src,
          alt: c.creatives.imageAlts[item.altKey],
        }))}
        videos={eduDoCreativeVideos.map((item) => ({
          src: item.src,
          title: c.creatives.videoTitles[item.titleKey],
        }))}
      />
      <CaseProof
        label={c.proof.label}
        title={c.proof.title}
        description={c.proof.description}
        images={eduDoProofImages.map((item) => ({
          src: item.src,
          ratio: item.ratio,
          alt: c.proof.imageAlts[item.altKey],
        }))}
      />
      <CaseFaq label={c.faq.label} title={c.faq.title} items={c.faq.items} />
      <CaseNextStep
        label={c.nextStep.label}
        title={c.nextStep.title}
        text={c.nextStep.text}
        cta={{ label: c.nextStep.cta, href: "#contacts" }}
      />
    </CaseChrome>
  );
}
