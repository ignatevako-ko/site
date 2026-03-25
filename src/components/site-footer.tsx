import { BrandLogo } from "@/components/brand-logo";
import type { SiteDictionary } from "@/data/site-content";

type SiteFooterProps = {
  content: SiteDictionary;
};

export function SiteFooter({ content }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.3fr_0.7fr] lg:px-10">
        <div className="space-y-4">
          <BrandLogo className="w-[280px] sm:w-[340px]" />
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            {content.footer.text}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
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
          <p className="text-sm text-slate-500">{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
