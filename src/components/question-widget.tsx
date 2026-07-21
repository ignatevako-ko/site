"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import type { Language } from "@/data/site-content";

type Channel = "telegram" | "whatsapp";
type Step = "question" | "channel" | "contact" | "success";

type Copy = {
  bubbleLabel: string;
  title: string;
  intro: string;
  questionPlaceholder: string;
  sendQuestion: string;
  thanksTitle: string;
  chooseChannel: string;
  telegram: string;
  whatsapp: string;
  contactLabelTelegram: string;
  contactPlaceholderTelegram: string;
  contactLabelWhatsapp: string;
  contactPlaceholderWhatsapp: string;
  namePlaceholder: string;
  send: string;
  successTitle: string;
  successNote: string;
  close: string;
  back: string;
  errorContact: string;
  errorQuestion: string;
  errorGeneric: string;
};

const COPY: Record<Language, Copy> = {
  ru: {
    bubbleLabel: "Задать вопрос",
    title: "Есть вопрос по рекламе?",
    intro:
      "Здравствуйте! Напишите ваш вопрос — мы подскажем по рекламе Meta Ads или Google Ads.",
    questionPlaceholder: "Напишите ваш вопрос…",
    sendQuestion: "Отправить вопрос",
    thanksTitle:
      "Спасибо за вопрос! Чтобы мы могли ответить вам подробнее и не потерять переписку, где вам удобнее продолжить общение?",
    chooseChannel: "Выберите удобный канал связи",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    contactLabelTelegram: "Укажите ваш Telegram username или номер телефона",
    contactPlaceholderTelegram: "@username или +372...",
    contactLabelWhatsapp: "Укажите номер WhatsApp",
    contactPlaceholderWhatsapp: "+372...",
    namePlaceholder: "Ваше имя (необязательно)",
    send: "Отправить",
    successTitle: "Спасибо! Мы получили ваш вопрос и свяжемся с вами в ближайшее время.",
    successNote: "Обычно отвечаем в течение рабочего дня.",
    close: "Закрыть",
    back: "Назад",
    errorContact: "Пожалуйста, укажите контакт, чтобы мы могли ответить вам.",
    errorQuestion: "Пожалуйста, напишите вопрос — хотя бы несколько слов.",
    errorGeneric: "Не получилось отправить. Попробуйте ещё раз чуть позже.",
  },
  en: {
    bubbleLabel: "Ask a question",
    title: "Got a question about ads?",
    intro:
      "Hi! Send us your question — we'll help with Meta Ads or Google Ads advertising.",
    questionPlaceholder: "Write your question…",
    sendQuestion: "Send question",
    thanksTitle:
      "Thanks for your question! To answer in more detail and not lose the conversation, where's it easiest to continue talking?",
    chooseChannel: "Choose a channel",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    contactLabelTelegram: "Your Telegram username or phone number",
    contactPlaceholderTelegram: "@username or +372...",
    contactLabelWhatsapp: "Your WhatsApp number",
    contactPlaceholderWhatsapp: "+372...",
    namePlaceholder: "Your name (optional)",
    send: "Send",
    successTitle: "Thank you! We've received your question and will get back to you soon.",
    successNote: "We usually reply within one business day.",
    close: "Close",
    back: "Back",
    errorContact: "Please leave a contact so we can get back to you.",
    errorQuestion: "Please write a question — at least a few words.",
    errorGeneric: "Couldn't send it. Please try again in a moment.",
  },
  et: {
    bubbleLabel: "Küsi küsimust",
    title: "Kas on küsimus reklaami kohta?",
    intro:
      "Tere! Kirjuta oma küsimus — aitame Meta Ads või Google Ads reklaamiga.",
    questionPlaceholder: "Kirjuta oma küsimus…",
    sendQuestion: "Saada küsimus",
    thanksTitle:
      "Aitäh küsimuse eest! Et saaksime vastata põhjalikumalt ja kirjavahetus ei kaoks, kus on sul mugavam suhtlust jätkata?",
    chooseChannel: "Vali sobiv kanal",
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    contactLabelTelegram: "Sisesta oma Telegrami kasutajanimi või telefoninumber",
    contactPlaceholderTelegram: "@kasutajanimi või +372...",
    contactLabelWhatsapp: "Sisesta WhatsAppi number",
    contactPlaceholderWhatsapp: "+372...",
    namePlaceholder: "Sinu nimi (valikuline)",
    send: "Saada",
    successTitle: "Aitäh! Saime sinu küsimuse kätte ja võtame peagi ühendust.",
    successNote: "Tavaliselt vastame ühe tööpäeva jooksul.",
    close: "Sulge",
    back: "Tagasi",
    errorContact: "Palun jäta kontakt, et saaksime sulle vastata.",
    errorQuestion: "Palun kirjuta küsimus — vähemalt paar sõna.",
    errorGeneric: "Saatmine ebaõnnestus. Proovi mõne hetke pärast uuesti.",
  },
};

const DRAFT_KEY = "domarketing_widget_draft";
const UTM_STORAGE_KEY = "domarketing_lead_utm";
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

type Draft = {
  step: Step;
  name: string;
  question: string;
  channel: Channel | null;
  contact: string;
};

const emptyDraft: Draft = {
  step: "question",
  name: "",
  question: "",
  channel: null,
  contact: "",
};

function languageFromPathname(pathname: string | null): Language {
  if (pathname?.startsWith("/en")) {
    return "en";
  }
  if (pathname?.startsWith("/et")) {
    return "et";
  }
  return "ru";
}

function readDraft(): Draft {
  if (typeof window === "undefined") {
    return emptyDraft;
  }

  try {
    const raw = window.sessionStorage.getItem(DRAFT_KEY);
    if (!raw) {
      return emptyDraft;
    }
    return { ...emptyDraft, ...(JSON.parse(raw) as Partial<Draft>) };
  } catch {
    return emptyDraft;
  }
}

function saveDraft(draft: Draft) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.sessionStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
  } catch {
    // sessionStorage may be unavailable (private mode) — ignore.
  }
}

function clearDraft() {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.sessionStorage.removeItem(DRAFT_KEY);
  } catch {
    // ignore
  }
}

function readUtm() {
  if (typeof window === "undefined") {
    return {};
  }

  const searchParams = new URLSearchParams(window.location.search);
  const fromUrl = Object.fromEntries(
    UTM_KEYS.map((key) => [key, searchParams.get(key)?.trim() || ""]).filter(
      ([, value]) => value,
    ),
  );

  if (Object.keys(fromUrl).length) {
    return fromUrl;
  }

  try {
    const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

export function QuestionWidget() {
  const pathname = usePathname();
  const language = languageFromPathname(pathname);
  const copy = COPY[language];

  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [isHydrated, setIsHydrated] = useState(false);
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");
  const hasReportedIncomplete = useRef(false);

  useEffect(() => {
    setDraft(readDraft());
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated || draft.step === "success") {
      return;
    }
    saveDraft(draft);
  }, [draft, isHydrated]);

  const reportIncompleteIfNeeded = () => {
    if (hasReportedIncomplete.current) {
      return;
    }
    if (draft.step === "success" || !draft.question.trim()) {
      return;
    }

    hasReportedIncomplete.current = true;
    const body = JSON.stringify({
      question: draft.question,
      pageUrl: window.location.href,
      language,
    });

    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        "/api/question-widget/incomplete",
        new Blob([body], { type: "application/json" }),
      );
    } else {
      fetch("/api/question-widget/incomplete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch(() => {});
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setError("");
    reportIncompleteIfNeeded();
  };

  const handleSubmitQuestion = (event: React.FormEvent) => {
    event.preventDefault();
    if (draft.question.trim().length < 5) {
      setError(copy.errorQuestion);
      return;
    }
    setError("");
    setDraft((current) => ({ ...current, step: "channel" }));
  };

  const handlePickChannel = (channel: Channel) => {
    setError("");
    setDraft((current) => ({ ...current, channel, step: "contact" }));
  };

  const handleSubmitContact = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!draft.contact.trim()) {
      setError(copy.errorContact);
      return;
    }

    setStatus("loading");
    setError("");

    const utm = readUtm();

    try {
      const response = await fetch("/api/question-widget", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: draft.name,
          question: draft.question,
          channel: draft.channel,
          contact: draft.contact,
          company,
          pageUrl: window.location.href,
          referrer: document.referrer,
          language,
          userAgent: navigator.userAgent,
          utm,
        }),
      });

      if (!response.ok) {
        throw new Error("submit failed");
      }

      hasReportedIncomplete.current = true;
      clearDraft();
      setStatus("idle");
      setDraft((current) => ({ ...current, step: "success" }));
    } catch {
      setStatus("error");
      setError(copy.errorGeneric);
    }
  };

  return (
    <div className="fixed bottom-24 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-8 sm:right-6">
      {isOpen ? (
        <div className="w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white text-slate-900 shadow-[0_24px_60px_rgba(15,23,42,0.25)]">
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-5 py-4">
            <p className="text-sm font-semibold text-slate-800">{copy.title}</p>
            <button
              type="button"
              aria-label={copy.close}
              onClick={handleClose}
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="max-h-[70vh] overflow-y-auto px-5 py-5">
            {draft.step === "question" ? (
              <form onSubmit={handleSubmitQuestion} className="space-y-4">
                <p className="text-sm leading-6 text-slate-600">{copy.intro}</p>
                <textarea
                  autoFocus
                  value={draft.question}
                  onChange={(event) =>
                    setDraft((current) => ({ ...current, question: event.target.value }))
                  }
                  placeholder={copy.questionPlaceholder}
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-violet-400 focus:outline-none"
                />
                <input
                  type="text"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                {error ? <p className="text-sm text-rose-500">{error}</p> : null}
                <button
                  type="submit"
                  className="w-full rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-600"
                >
                  {copy.sendQuestion}
                </button>
              </form>
            ) : null}

            {draft.step === "channel" ? (
              <div className="space-y-4">
                <p className="text-sm leading-6 text-slate-700">{copy.thanksTitle}</p>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                  {copy.chooseChannel}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handlePickChannel("telegram")}
                    className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-400 hover:bg-sky-50"
                  >
                    <TelegramGlyph /> {copy.telegram}
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePickChannel("whatsapp")}
                    className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition hover:border-emerald-400 hover:bg-emerald-50"
                  >
                    <WhatsappGlyph /> {copy.whatsapp}
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setDraft((current) => ({ ...current, step: "question" }))}
                  className="text-xs font-medium text-slate-400 hover:text-slate-600"
                >
                  ← {copy.back}
                </button>
              </div>
            ) : null}

            {draft.step === "contact" && draft.channel ? (
              <form onSubmit={handleSubmitContact} className="space-y-4">
                <label className="block space-y-2">
                  <span className="text-sm font-medium text-slate-700">
                    {draft.channel === "telegram"
                      ? copy.contactLabelTelegram
                      : copy.contactLabelWhatsapp}
                  </span>
                  <input
                    autoFocus
                    type="text"
                    value={draft.contact}
                    onChange={(event) =>
                      setDraft((current) => ({ ...current, contact: event.target.value }))
                    }
                    placeholder={
                      draft.channel === "telegram"
                        ? copy.contactPlaceholderTelegram
                        : copy.contactPlaceholderWhatsapp
                    }
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-violet-400 focus:outline-none"
                  />
                </label>
                <input
                  type="text"
                  value={draft.name}
                  onChange={(event) =>
                    setDraft((current) => ({ ...current, name: event.target.value }))
                  }
                  placeholder={copy.namePlaceholder}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-violet-400 focus:outline-none"
                />
                {error ? <p className="text-sm text-rose-500">{error}</p> : null}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setDraft((current) => ({ ...current, step: "channel" }))}
                    className="text-xs font-medium text-slate-400 hover:text-slate-600"
                  >
                    ← {copy.back}
                  </button>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="ml-auto flex-1 rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading" ? "…" : copy.send}
                  </button>
                </div>
              </form>
            ) : null}

            {draft.step === "success" ? (
              <div className="space-y-2 py-2">
                <p className="text-sm leading-6 text-slate-700">{copy.successTitle}</p>
                <p className="text-xs text-slate-400">{copy.successNote}</p>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(124,58,237,0.35)] transition hover:bg-violet-600 ${
          isOpen ? "hidden" : ""
        }`}
      >
        <ChatIcon />
        {copy.bubbleLabel}
      </button>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function TelegramGlyph() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-sky-500" fill="currentColor">
      <path d="M21.9 3.5 2.6 11.1c-1.3.5-1.3 1.2-.2 1.5l4.9 1.5 1.9 5.8c.2.6.3.8.9.8.4 0 .6-.2.8-.4l2-1.9 4.1 3c.8.4 1.3.2 1.5-.7l2.7-13c.3-1.1-.4-1.6-1.3-1.2Zm-3.4 3.4-8 7.2-.3 3.3-1.6-4.8 9.4-6.3c.4-.3.8-.1.5.4Z" />
    </svg>
  );
}

function WhatsappGlyph() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-emerald-500" fill="currentColor">
      <path d="M17.5 14.4c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.1.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4.1-.2 0-.4 0-.5C10.4 9 10 8 9.8 7.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.2 0-.1-.2-.2-.5-.4Z" />
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5.1-1.3C8.5 21.5 10.2 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2Zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3C4 14.7 3.6 13.4 3.6 12c0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4-3.8 8.4-8.4 8.4Z" />
    </svg>
  );
}
