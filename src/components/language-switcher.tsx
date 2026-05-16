"use client";

import Link from "next/link";
import type { Language } from "@/data/site-content";

type LanguageSwitcherProps = {
  currentLanguage: Language;
  onChange?: (language: Language) => void;
  hrefs?: Partial<Record<Language, string>>;
};

const languages: Array<{ code: Language; label: string }> = [
  { code: "en", label: "EN" },
  { code: "et", label: "ET" },
  { code: "ru", label: "RU" },
];

export function LanguageSwitcher({
  currentLanguage,
  onChange,
  hrefs,
}: LanguageSwitcherProps) {
  return (
    <div
      className="inline-flex rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur"
      aria-label="Language switcher"
      role="group"
    >
      {languages.map((language) => {
        const isActive = language.code === currentLanguage;
        const href = hrefs?.[language.code];
        const className = `rounded-full px-3 py-2 text-xs font-semibold tracking-[0.24em] transition ${
          isActive
            ? "bg-violet-400 text-slate-950"
            : "text-slate-300 hover:text-white"
        }`;

        if (href) {
          return (
            <Link
              key={language.code}
              href={href}
              className={className}
              aria-current={isActive ? "page" : undefined}
            >
              {language.label}
            </Link>
          );
        }

        return (
          <button
            key={language.code}
            type="button"
            onClick={() => onChange?.(language.code)}
            className={className}
            disabled={!onChange}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
}
