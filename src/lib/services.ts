import type { Language } from "@/data/site-content";

export const servicesMenuItems = [
  { href: "/meta-ads", label: "Meta Ads" },
  { href: "/google-ads", label: "Google Ads" },
  { href: "/smm", label: "SMM" },
] as const;

export const landingAdditionalServices: Record<
  Language,
  Array<{ label: string; href?: string }>
> = {
  en: [
    { label: "Marketing audit" },
    { label: "SMM", href: "/smm" },
    { label: "Google Ads", href: "/google-ads" },
    { label: "SEO" },
    { label: "Meta Ads", href: "/meta-ads" },
  ],
  et: [
    { label: "Turundusaudit" },
    { label: "SMM", href: "/smm" },
    { label: "Google Ads", href: "/google-ads" },
    { label: "SEO" },
    { label: "Meta Ads", href: "/meta-ads" },
  ],
  ru: [
    { label: "Аудит маркетинга" },
    { label: "SMM", href: "/smm" },
    { label: "Google реклама", href: "/google-ads" },
    { label: "SEO оптимизация" },
    { label: "Meta Ads", href: "/meta-ads" },
  ],
};

export const metaAdsRelatedServices = [
  { label: "Google Ads", href: "/google-ads" },
  { label: "SMM", href: "/smm" },
] as const;

export const googleAdsRelatedServices = [
  { label: "SMM", href: "/smm" },
  { label: "Meta Ads", href: "/meta-ads" },
] as const;
