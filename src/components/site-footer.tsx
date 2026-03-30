import { ContactForm } from "@/components/contact-form";
import type { Language, SiteDictionary } from "@/data/site-content";
import { BrandLogo } from "@/components/brand-logo";

type SiteFooterProps = {
  content: SiteDictionary;
  language: Language;
};

export function SiteFooter({ content, language }: SiteFooterProps) {
  return (
    <footer id="contacts" className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-10 lg:pt-20">
        <div className="rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-400/10 via-white/5 to-fuchsia-500/10 p-8 lg:p-12">
          <ContactForm language={language} />
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div className="space-y-4">
          <BrandLogo />
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            {content.footer.text}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr]">
          <div className="space-y-3">
            {content.footer.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-slate-300 transition hover:text-violet-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              {content.sections.contacts}
            </p>
            <div className="mt-4 grid gap-5 sm:grid-cols-3">
              <div>
                <p className="text-sm text-slate-500">{content.contacts.labels.email}</p>
                <a
                  href={`mailto:${content.contacts.email}`}
                  className="mt-2 block text-white"
                >
                  {content.contacts.email}
                </a>
              </div>
              <div>
                <p className="text-sm text-slate-500">{content.contacts.labels.phone}</p>
                <a href={`tel:${content.contacts.phone}`} className="mt-2 block text-white">
                  {content.contacts.phone}
                </a>
              </div>
              <div>
                <p className="text-sm text-slate-500">{content.contacts.labels.company}</p>
                <p className="mt-2 text-white">{content.contacts.company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl justify-end px-6 pb-10 lg:px-10">
        <p className="text-sm text-slate-500">{content.footer.copyright}</p>
      </div>
    </footer>
  );
}
