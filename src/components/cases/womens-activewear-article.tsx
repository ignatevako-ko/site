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
  CaseRelated,
  CaseTable,
  CaseThreeCards,
} from "@/components/cases/case-sections";
import {
  womensActivewearContent,
  womensActivewearCreativeImages,
} from "@/data/cases/womens-activewear";
import type { Language } from "@/data/site-content";

export function WomensActivewearArticle() {
  const [language, setLanguage] = useState<Language>("ru");
  const c = womensActivewearContent[language];

  return (
    <CaseChrome language={language} onLanguageChange={setLanguage}>
      <CaseHero
        badge={c.badge}
        category={c.category}
        title={c.heroTitle}
        description={c.heroDescription}
        primaryCta={c.primaryCta}
        secondaryCta={c.secondaryCta}
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
        images={womensActivewearCreativeImages.map((item) => ({
          src: item.src,
          alt: c.creatives.imageAlts[item.altKey],
        }))}
      />
      <CaseFaq label={c.faq.label} title={c.faq.title} items={c.faq.items} />
      <CaseRelated label={c.related.label} title={c.related.title} links={c.related.links} />
      <CaseNextStep
        label={c.nextStep.label}
        title={c.nextStep.title}
        text={c.nextStep.text}
        cta={{ label: c.nextStep.cta, href: "#contacts" }}
      />
    </CaseChrome>
  );
}
