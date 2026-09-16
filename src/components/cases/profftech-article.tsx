"use client";

import { useState } from "react";
import { CaseChrome } from "@/components/case-chrome";
import {
  CaseCreatives,
  CaseFacts,
  CaseFaq,
  CaseHero,
  CaseHeroPanel,
  CaseMain,
  CaseMechanics,
  CaseNextStep,
  CaseTable,
  CaseThreeCards,
} from "@/components/cases/case-sections";
import {
  profftechContent,
  profftechCreativeImages,
  profftechTableImages,
} from "@/data/cases/profftech";
import type { Language } from "@/data/site-content";

export function ProfftechArticle() {
  const [language, setLanguage] = useState<Language>("ru");
  const c = profftechContent[language];

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
        panel={<CaseHeroPanel panel={c.heroPanel} />}
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
        imagesCaption={c.table.imagesCaption}
        images={profftechTableImages.map((item) => ({
          src: item.src,
          ratio: item.ratio,
          alt: c.table.imageAlts[item.altKey],
        }))}
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
        images={profftechCreativeImages.map((item) => ({
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
