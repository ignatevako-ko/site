"use client";

import { useEffect, useState } from "react";
import { footerContactCopy } from "@/data/footer-contact-copy";
import type { Language } from "@/data/site-content";

type ContactFormProps = {
  language: Language;
};

// Records which CTA button carried the visitor to the contact form so the lead
// notification can show it. Any link pointing at the #contacts anchor counts.
const CTA_STORAGE_KEY = "domarketing_lead_cta";
const UTM_STORAGE_KEY = "domarketing_lead_utm";
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

type LeadUtm = Partial<Record<(typeof UTM_KEYS)[number], string>>;

type LeadCta = {
  label: string;
  href: string;
  page: string;
};

function readLeadCta(): LeadCta | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.sessionStorage.getItem(CTA_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as LeadCta) : null;
  } catch {
    return null;
  }
}

function getCurrentUtm(): LeadUtm {
  if (typeof window === "undefined") {
    return {};
  }

  const searchParams = new URLSearchParams(window.location.search);

  return Object.fromEntries(
    UTM_KEYS.map((key) => [key, searchParams.get(key)?.trim() || ""]).filter(
      ([, value]) => value,
    ),
  ) as LeadUtm;
}

function readStoredUtm(): LeadUtm {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as LeadUtm) : {};
  } catch {
    return {};
  }
}

function readLeadUtm() {
  return {
    ...readStoredUtm(),
    ...getCurrentUtm(),
  };
}

type FormState = {
  email: string;
  phone: string;
  website: string;
  brief: string;
  company: string;
};

const initialState: FormState = {
  email: "",
  phone: "",
  website: "",
  brief: "",
  company: "",
};

function trackCompleteRegistration() {
  if (typeof window === "undefined") {
    return;
  }

  const fbq = (window as Window & {
    fbq?: (command: string, eventName: string) => void;
  }).fbq;

  fbq?.("track", "CompleteRegistration");
}

export function ContactForm({ language }: ContactFormProps) {
  const copy = footerContactCopy[language];
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const currentUtm = getCurrentUtm();
    if (Object.keys(currentUtm).length) {
      try {
        window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(currentUtm));
      } catch {
        // sessionStorage may be unavailable (private mode) — ignore.
      }
    }

    const handleCtaClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.(
        'a[href*="#contacts"]',
      ) as HTMLAnchorElement | null;

      if (!anchor) {
        return;
      }

      const cta: LeadCta = {
        label: (anchor.dataset.leadCtaLabel || anchor.textContent || "")
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 120),
        href: anchor.getAttribute("href") || "",
        page: `${window.location.pathname}${window.location.search}`,
      };

      try {
        window.sessionStorage.setItem(CTA_STORAGE_KEY, JSON.stringify(cta));
      } catch {
        // sessionStorage may be unavailable (private mode) — ignore.
      }
    };

    document.addEventListener("click", handleCtaClick, true);
    return () => document.removeEventListener("click", handleCtaClick, true);
  }, []);

  const handleChange =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    const cta = readLeadCta();
    const utm = readLeadUtm();

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          language,
          source: "site_contact_form",
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
          referrer: typeof document !== "undefined" ? document.referrer : "",
          ctaLabel: cta?.label ?? "",
          ctaHref: cta?.href ?? "",
          ctaPage: cta?.page ?? "",
          utm,
        }),
      });

      if (!response.ok) {
        throw new Error("Lead submission failed");
      }

      trackCompleteRegistration();
      setFormState(initialState);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
          {copy.sectionLabel}
        </p>
        <h2 className="max-w-lg whitespace-pre-line text-3xl font-light tracking-[-0.05em] text-white sm:text-5xl">
          {copy.title}
        </h2>
        {copy.description ? (
          <p className="max-w-xl text-base leading-8 text-slate-300">
            {copy.description}
          </p>
        ) : null}
      </div>

      <div className="space-y-4">
        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          <label className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5">
            <span className="text-sm text-slate-500">{copy.labels.email}</span>
            <input
              type="email"
              required
              value={formState.email}
              onChange={handleChange("email")}
              placeholder={copy.placeholders.email}
              className="mt-3 w-full bg-transparent text-lg font-medium text-white placeholder:text-white/35 focus:outline-none"
            />
          </label>

          <label className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5">
            <span className="text-sm text-slate-500">{copy.labels.phone}</span>
            <input
              type="tel"
              required
              value={formState.phone}
              onChange={handleChange("phone")}
              placeholder={copy.placeholders.phone}
              className="mt-3 w-full bg-transparent text-lg font-medium text-white placeholder:text-white/35 focus:outline-none"
            />
          </label>

          <label className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5 sm:col-span-2">
            <span className="text-sm text-slate-500">
              {copy.labels.website || "У вас есть сайт?"}
            </span>
            <input
              type="text"
              value={formState.website}
              onChange={handleChange("website")}
              placeholder={copy.placeholders.website || "Да: ссылка на сайт / пока нет"}
              className="mt-3 w-full bg-transparent text-lg font-medium text-white placeholder:text-white/35 focus:outline-none"
            />
          </label>

          <label className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5 sm:col-span-2">
            <span className="sr-only">{copy.labels.brief}</span>
            <textarea
              value={formState.brief}
              onChange={handleChange("brief")}
              placeholder={copy.placeholders.brief}
              rows={4}
              className="mt-3 w-full resize-none bg-transparent text-lg font-medium text-white placeholder:text-white/35 focus:outline-none"
            />
          </label>

          <input
            type="text"
            name="company"
            value={formState.company}
            onChange={handleChange("company")}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-violet-400 px-7 text-[20px] font-semibold text-slate-950 transition hover:bg-violet-300 disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2"
          >
            {status === "loading" ? "..." : copy.submit}
          </button>
        </form>

        {status === "success" ? (
          <p className="text-sm text-emerald-300">{copy.success}</p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm text-rose-300">{copy.error}</p>
        ) : null}
      </div>
    </div>
  );
}
