"use client";

import { useState } from "react";
import { CaseChrome } from "@/components/case-chrome";
import {
  CaseFacts,
  CaseFaq,
  CaseHeroBadges,
  CaseHeroButtons,
  CaseMain,
  CaseMechanics,
  CaseNextStep,
  CaseProof,
  CaseStatsGrid,
  CaseThreeCards,
  caseHeroTitleClass,
} from "@/components/cases/case-sections";
import {
  suvelaagridContent,
  suvelaagridProofImages,
} from "@/data/cases/suvelaagrid";
import type { Language } from "@/data/site-content";

export function SuvelaagridArticle() {
  const [language, setLanguage] = useState<Language>("ru");
  const c = suvelaagridContent[language];

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
          <CaseStatsGrid stats={c.resultStats} />
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 p-5 shadow-[0_30px_90px_rgba(2,6,23,0.38)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(132,204,22,0.22),transparent_34%),linear-gradient(160deg,rgba(250,204,21,0.12),rgba(7,9,20,0.15))]" />
          <div className="relative">
            <div>
              <p className="text-[12px] uppercase tracking-[0.28em] text-emerald-200/90">
                {c.heroPanel.label}
              </p>
              <p className="mt-2 text-xl font-semibold text-white">{c.heroPanel.title}</p>
            </div>
          </div>

          <div className="relative mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.35rem] border border-white/10 bg-slate-950/70 p-5">
              <p className="text-sm text-slate-400">{c.heroPanel.leadFormLabel}</p>
              <p className="mt-2 text-[34px] font-light leading-none tracking-[-0.05em] text-white">
                {c.heroPanel.leadFormValue}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{c.heroPanel.leadFormNote}</p>
            </div>
            <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.055] p-5">
              <p className="text-sm text-slate-400">{c.heroPanel.siteLabel}</p>
              <p className="mt-2 text-[34px] font-light leading-none tracking-[-0.05em] text-white">
                {c.heroPanel.siteValue}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{c.heroPanel.siteNote}</p>
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
      <CaseThreeCards cards={c.funnelCards} />
      <CaseMechanics
        label={c.mechanics.label}
        title={c.mechanics.title}
        steps={c.mechanics.steps}
      />
      <CaseProof
        label={c.proof.label}
        title={c.proof.title}
        description={c.proof.description}
        images={suvelaagridProofImages.map((item) => ({
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
