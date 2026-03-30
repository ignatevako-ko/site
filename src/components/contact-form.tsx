"use client";

import { useState } from "react";
import { footerContactCopy } from "@/data/footer-contact-copy";
import type { Language } from "@/data/site-content";

type ContactFormProps = {
  language: Language;
};

type FormState = {
  email: string;
  phone: string;
  brief: string;
};

const initialState: FormState = {
  email: "",
  phone: "",
  brief: "",
};

export function ContactForm({ language }: ContactFormProps) {
  const copy = footerContactCopy[language];
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const handleChange =
    (field: keyof FormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((current) => ({ ...current, [field]: event.target.value }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Lead submission failed");
      }

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
        <h2 className="max-w-lg whitespace-pre-line text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
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
            <span className="sr-only">{copy.labels.brief}</span>
            <textarea
              value={formState.brief}
              onChange={handleChange("brief")}
              placeholder={copy.placeholders.brief}
              rows={4}
              className="mt-3 w-full resize-none bg-transparent text-lg font-medium text-white placeholder:text-white/35 focus:outline-none"
            />
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-violet-400 px-7 text-sm font-semibold text-slate-950 transition hover:bg-violet-300 disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2"
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
