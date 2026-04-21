"use client";

import type { Language } from "@/data/site-content";

const labels: Record<Language, string> = {
  ru: "RU",
  en: "EN",
  et: "ET",
};

type PageLanguageSwitcherProps = {
  currentLanguage: Language;
  onChange: (language: Language) => void;
};

export function PageLanguageSwitcher({
  currentLanguage,
  onChange,
}: PageLanguageSwitcherProps) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/12 bg-white/6 p-1">
      {(["ru", "en", "et"] as Language[]).map((language) => {
        const isActive = currentLanguage === language;

        return (
          <button
            key={language}
            type="button"
            onClick={() => onChange(language)}
            className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${
              isActive
                ? "bg-violet-300 text-slate-950"
                : "text-slate-300 hover:text-white"
            }`}
          >
            {labels[language]}
          </button>
        );
      })}
    </div>
  );
}
