"use client";

import { useState } from "react";
import { CaseChrome } from "@/components/case-chrome";
import {
  CaseCreatives,
  CaseFacts,
  CaseFaq,
  CaseHero,
  CaseMain,
  CaseMechanics,
  CaseNextStep,
  CaseTable,
  CaseThreeCards,
} from "@/components/cases/case-sections";
import { profftehContent, profftehCreativeImages } from "@/data/cases/proffteh";
import type { Language } from "@/data/site-content";

export function ProfftehArticle() {
  const [language, setLanguage] = useState<Language>("ru");
  const c = profftehContent[language];

  return (
    <CaseChrome language={language} onLanguageChange={setLanguage}>
      <CaseHero
        badge={c.badge}
        category={c.category}
        title={c.heroTitle}
        description={c.heroDescription}
        primaryCta={c.primaryCta}
        secondaryCta={c.secondaryCta}
        stats={c.heroStats}
        panel={
          <div className="glass-shell relative overflow-hidden rounded-[2rem] p-6 sm:p-7">
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-[12px] uppercase tracking-[0.28em] text-violet-200/90">
                    {c.heroPanel.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">{c.heroPanel.title}</p>
                </div>
                <div className="shrink-0 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3.5 py-1.5 text-sm font-semibold text-emerald-200">
                  {c.heroPanel.badge}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {c.heroPanel.segments.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.25rem] border border-white/10 bg-slate-900/70 p-4"
                  >
                    <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-[15px] font-semibold leading-snug text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.25rem] border border-white/10 bg-slate-950/50 p-5">
                <p className="text-[11px] uppercase tracking-[0.22em] text-violet-100/70">
                  {c.heroPanel.economyBadge}
                </p>
                <p className="mt-3 text-[26px] font-light leading-none tracking-[-0.03em] text-white sm:text-[30px]">
                  {c.heroPanel.economyValue}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-400">{c.heroPanel.economyNote}</p>
              </div>
            </div>
          </div>
        }
      />

      <CaseFacts facts={c.facts} />
      <CaseMain
        label={c.main.label}
        title={c.main.title}
        paragraphs={c.main.paragraphs}
        cta={{ label: c.main.ctaLabel, href: "#contacts" }}
      />
      <CaseThreeCards cards={c.cards} />
      <CaseTable
        id="numbers"
        label={c.table.label}
        title={c.table.title}
        description={c.table.description}
        columns={c.table.columns}
        rows={c.table.rows}
        total={c.table.total}
        note={c.table.note}
      />
      <CaseMechanics
        label={c.mechanics.label}
        title={c.mechanics.title}
        steps={c.mechanics.steps}
      />
      <CaseCreatives
        label={c.creatives.label}
        title={c.creatives.title}
        description={c.creatives.description}
        images={profftehCreativeImages.map((item) => ({
          src: item.src,
          alt: c.creatives.imageAlts[item.altKey],
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
