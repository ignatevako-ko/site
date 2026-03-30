import { ContactForm } from "@/components/contact-form";
import type { Language, SiteDictionary } from "@/data/site-content";
import { BrandLogo } from "@/components/brand-logo";

type SiteFooterProps = {
  content: SiteDictionary;
  language: Language;
};

export function SiteFooter({ content, language }: SiteFooterProps) {
  const telegramUrl = "https://t.me/ignateva_ko";
  const instagramUrl = "https://www.instagram.com/do.market.ng/";

  return (
    <footer id="contacts" className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-10 lg:pt-20">
        <div className="rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-400/10 via-white/5 to-fuchsia-500/10 p-8 lg:p-12">
          <ContactForm language={language} />
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-12 lg:grid-cols-[1.05fr_0.4fr_0.75fr] lg:px-10">
        <div className="space-y-4">
          <BrandLogo />

          <div className="flex items-center gap-3 pt-2">
            <a
              href={telegramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-violet-300/40 hover:bg-violet-300/10 hover:text-white"
            >
              <TelegramIcon />
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-violet-300/40 hover:bg-violet-300/10 hover:text-white"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <nav className="space-y-3 self-start">
          {content.footer.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-slate-300 transition hover:text-violet-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="grid content-start gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
              {content.contacts.labels.email}
            </p>
            <a
              href={`mailto:${content.contacts.email}`}
              className="text-base text-white transition hover:text-violet-300"
            >
              {content.contacts.email}
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
              {content.contacts.labels.phone}
            </p>
            <a
              href={`tel:${content.contacts.phone}`}
              className="text-base text-white transition hover:text-violet-300"
            >
              {content.contacts.phone}
            </a>
          </div>

          <div className="space-y-2 sm:col-span-2">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">
              {content.contacts.labels.company}
            </p>
            <div className="max-w-sm text-base leading-8 text-white">
              <p>OÜ Turundusagendid</p>
              <p>Reg.number 16881379</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl border-t border-white/10 px-6 py-6 text-sm text-slate-500 lg:px-10">
        <p>{content.footer.copyright}</p>
      </div>
    </footer>
  );
}

function TelegramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 4L3 11.53l6.22 2.18L17 7l-5.65 7.17v5.83l3.14-3.42L19.5 20 21 4Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5 fill-none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
