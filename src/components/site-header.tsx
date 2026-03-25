"use client";

import { BrandLogo } from "@/components/brand-logo";
import type { Language, SiteDictionary } from "@/data/site-content";
import { LanguageSwitcher } from "@/components/language-switcher";

type SiteHeaderProps = {
  content: SiteDictionary;
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
};

export function SiteHeader({
  content,
  currentLanguage,
  onLanguageChange,
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <a href="#" aria-label="Do.Marketing home" className="flex items-center">
          <BrandLogo compact className="w-[420px] sm:w-[520px]" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {content.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-violet-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden text-xs uppercase tracking-[0.24em] text-slate-500 sm:block">
            {content.localeLabel}
          </span>
          <LanguageSwitcher
            currentLanguage={currentLanguage}
            onChange={onLanguageChange}
          />
        </div>
      </div>
    </header>
  );
}
