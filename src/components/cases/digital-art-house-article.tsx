"use client";

import Image from "next/image";
import { useState } from "react";
import { CaseChrome } from "@/components/case-chrome";
import {
  CaseCreatives,
  CaseHero,
  CaseHeroPanel,
  CaseMechanics,
  CaseNextStep,
} from "@/components/cases/case-sections";
import {
  digitalArtHouseContent,
  digitalArtHouseCreativeImages,
  digitalArtHouseCreativeVideos,
} from "@/data/cases/digital-art-house";
import type { Language } from "@/data/site-content";

export function DigitalArtHouseArticle() {
  const [language, setLanguage] = useState<Language>("ru");
  const c = digitalArtHouseContent[language];

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

      <section id="numbers" className="py-10">
        <h2 className="sr-only">{c.table.title}</h2>
        <figure className="space-y-3">
          <div className="relative aspect-[40/11] overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.045]">
            <Image
              src="/images/cases/digital-art-house/meta-ads-results.webp"
              alt={c.table.proofAlt}
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
            />
          </div>
          <figcaption className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
            {c.table.proofCaption}
          </figcaption>
        </figure>
      </section>
      <CaseCreatives
        label={c.creatives.label}
        title={c.creatives.title}
        description={c.creatives.description}
        images={digitalArtHouseCreativeImages.map((item) => ({
          src: item.src,
          alt: c.creatives.imageAlts[item.altKey],
        }))}
        videos={digitalArtHouseCreativeVideos.map((item) => ({
          src: item.src,
          poster: item.poster,
          title: c.creatives.videoTitles[item.titleKey],
        }))}
        compact
      />
      <CaseMechanics
        label={c.mechanics.label}
        title={c.mechanics.title}
        steps={c.mechanics.steps}
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
