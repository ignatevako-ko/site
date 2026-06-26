"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { getServicesMenuItems } from "@/lib/services";
import type { Language, SiteDictionary } from "@/data/site-content";

type SiteHeaderProps = {
  content: SiteDictionary;
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
  homeHref?: string;
  showLanguageSwitcher?: boolean;
  showServicesMenu?: boolean;
  serviceMenuLabel?: string;
  servicesRouteLanguage?: Language;
  languageLinks?: Partial<Record<Language, string>>;
  servicesMenuItemsOverride?: Array<{ href: string; label: string }>;
};

type ServicesMenuProps = {
  label: string;
  items: Array<{ href: string; label: string }>;
  menuId: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  align?: "center" | "left";
};

export function SiteHeader({
  content,
  currentLanguage,
  onLanguageChange,
  homeHref = "#",
  showLanguageSwitcher = true,
  showServicesMenu = true,
  serviceMenuLabel,
  servicesRouteLanguage,
  languageLinks,
  servicesMenuItemsOverride,
}: SiteHeaderProps) {
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const servicesMenuId = useId();
  const resolvedServiceMenuLabel = serviceMenuLabel ?? content.sections.services;
  const servicesMenuItems = (
    servicesMenuItemsOverride ?? [...getServicesMenuItems(servicesRouteLanguage)]
  ).filter((item) => item.label !== "SMM");
  const hasServicesItem = content.nav.some(
    (item) =>
      item.href === "#services" || item.label === content.sections.services,
  );

  useEffect(() => {
    const closeMenu = () => setIsServicesMenuOpen(false);

    window.addEventListener("scroll", closeMenu, { passive: true });

    return () => {
      window.removeEventListener("scroll", closeMenu);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 lg:px-6">
      <div className="glass-shell mx-auto flex w-full max-w-7xl items-center justify-between gap-6 rounded-full px-5 py-4 lg:px-8">
        <Link href={homeHref} aria-label="Do.Marketing home">
          <BrandLogo compact />
        </Link>

        {showServicesMenu ? (
          <div className="md:hidden">
            <ServicesMenu
              label={resolvedServiceMenuLabel}
              items={[...servicesMenuItems]}
              menuId={`${servicesMenuId}-mobile`}
              isOpen={isServicesMenuOpen}
              onOpen={() => setIsServicesMenuOpen(true)}
              onClose={() => setIsServicesMenuOpen(false)}
              onToggle={() => setIsServicesMenuOpen((current) => !current)}
              align="left"
            />
          </div>
        ) : null}

        <nav className="hidden items-center gap-8 md:flex">
          {showServicesMenu && !hasServicesItem ? (
            <ServicesMenu
              label={resolvedServiceMenuLabel}
              items={[...servicesMenuItems]}
              menuId={servicesMenuId}
              isOpen={isServicesMenuOpen}
              onOpen={() => setIsServicesMenuOpen(true)}
              onClose={() => setIsServicesMenuOpen(false)}
              onToggle={() => setIsServicesMenuOpen((current) => !current)}
            />
          ) : null}

          {content.nav.map((item) =>
            item.href === "#services" || item.label === content.sections.services ? (
              <ServicesMenu
                key={`${item.href}-${item.label}`}
                label={item.label}
                items={[...servicesMenuItems]}
                menuId={servicesMenuId}
                isOpen={isServicesMenuOpen}
                onOpen={() => setIsServicesMenuOpen(true)}
                onClose={() => setIsServicesMenuOpen(false)}
                onToggle={() => setIsServicesMenuOpen((current) => !current)}
              />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-violet-300"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <a
              href={`tel:${content.contacts.phone}`}
              className="block text-[14px] uppercase tracking-[0.24em] text-slate-400 transition hover:text-violet-300"
            >
              {content.contacts.phone}
            </a>
            <a
              href={`mailto:${content.contacts.email}`}
              className="mt-1 block text-[13.5px] text-slate-500 transition hover:text-violet-300"
            >
              {content.contacts.email}
            </a>
          </div>

          {showLanguageSwitcher ? (
            <LanguageSwitcher
              currentLanguage={currentLanguage}
              onChange={onLanguageChange}
              hrefs={languageLinks}
            />
          ) : null}
        </div>
      </div>
    </header>
  );
}

function ServicesMenu({
  label,
  items,
  menuId,
  isOpen,
  onOpen,
  onClose,
  onToggle,
  align = "center",
}: ServicesMenuProps) {
  return (
    <div
      className="relative py-2"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-violet-300 focus:outline-none focus:text-violet-300"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={onToggle}
        onFocus={onOpen}
      >
        <span>{label}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m5 7.5 5 5 5-5" />
        </svg>
      </button>

      <div
        id={menuId}
        role="menu"
        className={`absolute top-[calc(100%-0.2rem)] z-50 w-52 rounded-[1.4rem] border border-white/10 bg-slate-950/95 p-2 shadow-[0_24px_80px_rgba(2,6,23,0.42)] backdrop-blur transition ${
          align === "left" ? "left-0 translate-x-0" : "left-1/2 -translate-x-1/2"
        } ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        onFocus={onOpen}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            onClose();
          }
        }}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            role="menuitem"
            className="block rounded-[1rem] px-4 py-3 text-sm text-slate-200 transition hover:bg-white/6 hover:text-violet-200 focus:bg-white/6 focus:text-violet-200 focus:outline-none"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
