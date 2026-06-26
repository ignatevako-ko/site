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
  homeButtonLabel?: string;
  showLanguageSwitcher?: boolean;
  showServicesMenu?: boolean;
  serviceMenuLabel?: string;
  servicesRouteLanguage?: Language;
  languageLinks?: Partial<Record<Language, string>>;
  servicesMenuItemsOverride?: Array<{ href: string; label: string }>;
  anchorHrefPrefix?: string;
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

type MobileMenuProps = {
  content: SiteDictionary;
  items: Array<{ href: string; label: string }>;
  isOpen: boolean;
  menuId: string;
  servicesLabel: string;
  resolveNavHref: (href: string) => string;
  onClose: () => void;
};

export function SiteHeader({
  content,
  currentLanguage,
  onLanguageChange,
  homeHref = "#",
  homeButtonLabel,
  showLanguageSwitcher = true,
  showServicesMenu = true,
  serviceMenuLabel,
  servicesRouteLanguage,
  languageLinks,
  servicesMenuItemsOverride,
  anchorHrefPrefix,
}: SiteHeaderProps) {
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const servicesMenuId = useId();
  const resolvedServiceMenuLabel = serviceMenuLabel ?? content.sections.services;
  const servicesMenuItems =
    servicesMenuItemsOverride ?? [...getServicesMenuItems(servicesRouteLanguage)];
  const hasServicesItem = content.nav.some(
    (item) =>
      item.href === "#services" || item.label === content.sections.services,
  );
  const resolveNavHref = (href: string) =>
    anchorHrefPrefix && href.startsWith("#") ? `${anchorHrefPrefix}${href}` : href;

  useEffect(() => {
    const closeMenu = () => setIsServicesMenuOpen(false);

    window.addEventListener("scroll", closeMenu, { passive: true });

    return () => {
      window.removeEventListener("scroll", closeMenu);
    };
  }, []);

  return (
    <header className="relative z-50 px-4 pt-4 lg:px-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-0 py-0 md:flex-row md:flex-nowrap md:items-center md:gap-4 md:rounded-full md:border md:border-white/8 md:bg-[linear-gradient(180deg,rgba(10,16,39,0.82),rgba(8,12,28,0.72))] md:px-5 md:py-4 md:shadow-[0_20px_60px_rgba(2,6,23,0.32),inset_0_1px_0_rgba(255,255,255,0.04)] md:backdrop-blur-[18px] lg:gap-6 lg:px-8">
        <div className="flex w-full items-start justify-between gap-4 md:w-auto md:shrink-0 md:items-center">
          <Link href={homeHref} aria-label="Do.Marketing home" className="shrink-0">
            <BrandLogo compact />
          </Link>

          <div className="flex shrink-0 items-center gap-2 md:hidden">
            {showLanguageSwitcher ? (
              <LanguageSwitcher
                currentLanguage={currentLanguage}
                onChange={onLanguageChange}
                hrefs={languageLinks}
                compact
              />
            ) : null}

            {showServicesMenu ? (
              <button
                type="button"
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/12 bg-slate-950/40 text-white backdrop-blur transition hover:border-violet-300/45 hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-violet-300/45"
                aria-label={isServicesMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isServicesMenuOpen}
                aria-controls={`${servicesMenuId}-mobile-menu`}
                onClick={() => setIsServicesMenuOpen((current) => !current)}
              >
                <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
                  <span className="h-px w-full rounded-full bg-current" />
                  <span className="h-px w-full rounded-full bg-current" />
                  <span className="h-px w-full rounded-full bg-current" />
                </span>
              </button>
            ) : null}
          </div>
        </div>

        {homeButtonLabel ? (
          <Link
            href={homeHref}
            className="order-3 inline-flex min-h-[1.8rem] w-fit max-w-full shrink-0 self-center items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 text-[11px] font-semibold text-white transition hover:border-violet-300/60 hover:bg-white/10 md:order-none md:min-h-11 md:self-auto md:px-5 md:text-sm"
          >
            {homeButtonLabel}
          </Link>
        ) : null}

        {showServicesMenu ? (
          <MobileMenu
            content={content}
            items={[...servicesMenuItems]}
            isOpen={isServicesMenuOpen}
            menuId={`${servicesMenuId}-mobile-menu`}
            servicesLabel={resolvedServiceMenuLabel}
            resolveNavHref={resolveNavHref}
            onClose={() => setIsServicesMenuOpen(false)}
          />
        ) : null}

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-8 md:flex">
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
                href={resolveNavHref(item.href)}
                className="whitespace-nowrap text-sm text-slate-300 transition hover:text-violet-300"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 md:flex">
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

function MobileMenu({
  content,
  items,
  isOpen,
  menuId,
  servicesLabel,
  resolveNavHref,
  onClose,
}: MobileMenuProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const mobileServiceItems = [
    ...items.slice(0, 2),
    items[items.length - 1],
  ].filter(Boolean);

  return (
    <div
      id={menuId}
      className={`order-4 overflow-hidden rounded-[1.35rem] border border-white/10 bg-slate-950/88 backdrop-blur transition-all duration-200 md:hidden ${
        isOpen
          ? "max-h-[34rem] opacity-100"
          : "pointer-events-none max-h-0 border-transparent opacity-0"
      }`}
    >
      <div className="grid gap-1 p-2">
        {content.nav.map((item) => {
          const isServicesItem =
            item.href === "#services" || item.label === content.sections.services;

          if (isServicesItem) {
            return (
              <div key={`${item.href}-${item.label}`} className="rounded-[1rem] bg-white/[0.03] p-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-[0.85rem] px-3 py-2 text-left text-sm font-semibold uppercase tracking-[0.16em] text-violet-200 transition hover:bg-white/7 focus:bg-white/7 focus:outline-none"
                  aria-expanded={isServicesOpen}
                  onClick={() => setIsServicesOpen((current) => !current)}
                >
                  <span>{servicesLabel}</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className={`h-4 w-4 transition ${isServicesOpen ? "rotate-180" : ""}`}
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
                  className={`grid gap-1 overflow-hidden transition-all ${
                    isServicesOpen ? "max-h-52 pt-1 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {mobileServiceItems.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block rounded-[0.85rem] px-3 py-2.5 text-base text-slate-100 transition hover:bg-white/7 hover:text-violet-100"
                      onClick={onClose}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <Link
              key={`${item.href}-${item.label}`}
              href={resolveNavHref(item.href)}
              className="block rounded-[0.85rem] px-3 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-violet-200 transition hover:bg-white/7 focus:bg-white/7 focus:outline-none"
              onClick={onClose}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
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
        className="inline-flex items-center gap-2 whitespace-nowrap text-sm text-slate-300 transition hover:text-violet-300 focus:outline-none focus:text-violet-300"
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
