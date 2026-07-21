"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import { PageBackground } from "@/components/page-background";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteContent, type Language, type SiteDictionary } from "@/data/site-content";

type CaseChromeProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
  children: ReactNode;
};

const homeButtonLabels: Record<Language, string> = {
  ru: "Вернуться на главную",
  en: "Back to home",
  et: "Tagasi avalehele",
};

/**
 * Общий каркас для страниц-кейсов вне [language]:
 * фон + единый SiteHeader + единый SiteFooter + контейнер.
 * Переключение языка происходит на месте (client-side), URL не меняется —
 * так же, как на странице списка кейсов /cases.
 *
 * НЕ хардкодить хедер/футер в самих страницах-кейсах — использовать этот каркас.
 */
export function CaseChrome({ language, onLanguageChange, children }: CaseChromeProps) {
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const base = siteContent[language];
  const content: SiteDictionary = {
    ...base,
    nav: base.nav.filter((item) => item.href !== "#audience"),
    footer: {
      ...base.footer,
      links: base.nav
        .filter((item) => item.href !== "#testimonials")
        .map((item) => ({
          href: item.href.startsWith("#") ? `/${language}${item.href}` : item.href,
          label: item.label,
        })),
    },
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-slate-950 text-white">
      <PageBackground />

      <div className="relative z-10">
        <SiteHeader
          content={content}
          currentLanguage={language}
          onLanguageChange={onLanguageChange}
          homeHref={`/${language}`}
          homeButtonLabel={homeButtonLabels[language]}
          servicesRouteLanguage={language}
          anchorHrefPrefix={`/${language}`}
        />

        <main className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-10">{children}</main>
      </div>

      <SiteFooter content={content} language={language} />
    </div>
  );
}
