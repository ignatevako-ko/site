import type { Metadata } from "next";
import type { Language } from "@/data/site-content";
import { buildLanguageAlternates, localizedPath } from "@/lib/locales";

export const siteUrl = "https://domarketing.ee";
export const siteName = "Do.Marketing";
export const siteTitle = "Do.Marketing | Meta Ads и Google Ads агентство в Европе";
export const siteDescription =
  "Do.Marketing помогает бизнесу в Европе привлекать клиентов через Meta Ads и Google Ads: стратегия, запуск, ведение, креативы и рост заявок.";

export const defaultKeywords = [
  "Meta Ads Tallinn",
  "Google Ads Tallinn",
  "marketing agency Tallinn",
  "performance marketing Estonia",
  "Facebook Ads Estonia",
  "Instagram Ads Tallinn",
  "Do.Marketing",
];

const contactPoint = {
  "@type": "ContactPoint",
  telephone: "+37257843293",
  contactType: "customer support",
  availableLanguage: ["ru", "en", "et"],
  email: "ceo@domarketing.ee",
};

const servedAreas = [
  {
    "@type": "City",
    name: "Tallinn",
  },
  {
    "@type": "Country",
    name: "Estonia",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export type IndexedRoute = {
  path: string;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
};

export const indexedRoutes: IndexedRoute[] = [
  { path: "/ru", changeFrequency: "weekly", priority: 1 },
  { path: "/en", changeFrequency: "weekly", priority: 0.95 },
  { path: "/et", changeFrequency: "weekly", priority: 0.95 },
  { path: "/ru/meta-ads", changeFrequency: "weekly", priority: 0.95 },
  { path: "/en/meta-ads", changeFrequency: "weekly", priority: 0.9 },
  { path: "/et/meta-ads", changeFrequency: "weekly", priority: 0.9 },
  { path: "/ru/google-ads", changeFrequency: "weekly", priority: 0.95 },
  { path: "/en/google-ads", changeFrequency: "weekly", priority: 0.9 },
  { path: "/et/google-ads", changeFrequency: "weekly", priority: 0.9 },
  { path: "/ru/marketing-audit", changeFrequency: "weekly", priority: 0.86 },
  { path: "/en/marketing-audit", changeFrequency: "weekly", priority: 0.82 },
  { path: "/et/marketing-audit", changeFrequency: "weekly", priority: 0.82 },
  { path: "/ru/smm", changeFrequency: "weekly", priority: 0.86 },
  { path: "/en/smm", changeFrequency: "weekly", priority: 0.82 },
  { path: "/et/smm", changeFrequency: "weekly", priority: 0.82 },
  { path: "/ru/seo", changeFrequency: "weekly", priority: 0.86 },
  { path: "/en/seo", changeFrequency: "weekly", priority: 0.95 },
  { path: "/et/seo", changeFrequency: "weekly", priority: 0.82 },
  { path: "/ru/website-development", changeFrequency: "weekly", priority: 0.86 },
  { path: "/en/website-development", changeFrequency: "weekly", priority: 0.82 },
  { path: "/et/website-development", changeFrequency: "weekly", priority: 0.82 },
  { path: "/smm", changeFrequency: "weekly", priority: 0.85 },
  { path: "/cases", changeFrequency: "weekly", priority: 0.8 },
  { path: "/cases/edu-do", changeFrequency: "monthly", priority: 0.78 },
  { path: "/cases/romi-2500-construction", changeFrequency: "monthly", priority: 0.78 },
  { path: "/cases/suvelaagrid", changeFrequency: "monthly", priority: 0.78 },
  { path: "/cases/prime-tour", changeFrequency: "monthly", priority: 0.78 },
  { path: "/cases/proffteh", changeFrequency: "monthly", priority: 0.78 },
  { path: "/en/cases/prime-tour", changeFrequency: "monthly", priority: 0.72 },
  { path: "/et/cases/prime-tour", changeFrequency: "monthly", priority: 0.72 },
  { path: "/kreo", changeFrequency: "monthly", priority: 0.55 },
];

const localeByLanguage: Record<Language, string> = {
  ru: "ru_EE",
  en: "en_EE",
  et: "et_EE",
};

const homeStructuredDataCopy: Record<Language, { name: string; description: string }> = {
  ru: {
    name: "Meta Ads и Google Ads агентство в Европе | Do.Marketing",
    description:
      "Агентство рекламы для бизнеса в Европе: Meta Ads, Google Ads, креативы, кейсы и рост заявок.",
  },
  en: {
    name: "Meta Ads and Google Ads Agency in Europe | Do.Marketing",
    description:
      "Advertising agency for businesses in Europe: Meta Ads, Google Ads, creatives, case studies and lead growth.",
  },
  et: {
    name: "Meta Ads ja Google Ads agentuur Euroopas | Do.Marketing",
    description:
      "Reklaamiagentuur Euroopa ettevõtetele: Meta Ads, Google Ads, loovlahendused, case'id ja päringute kasv.",
  },
};

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  locale = "ru_EE",
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  locale?: string;
}): Metadata {
  return {
    title,
    description,
    keywords: Array.from(new Set([...defaultKeywords, ...keywords])),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName,
      type: "website",
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function buildLocalizedPageMetadata({
  title,
  description,
  path,
  language,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  language: Language;
  keywords?: string[];
}): Metadata {
  const localizedCanonical = localizedPath(language, path);

  return {
    ...buildPageMetadata({
      title,
      description,
      path: localizedCanonical,
      keywords,
      locale: localeByLanguage[language],
    }),
    alternates: {
      ...buildLanguageAlternates(path),
      canonical: localizedCanonical,
    },
  };
}

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      legalName: "OÜ Turundusagendid",
      url: siteUrl,
      logo: absoluteUrl("/brand/logo-white.png"),
      email: "ceo@domarketing.ee",
      telephone: "+37257843293",
      sameAs: [
        "https://www.instagram.com/do.market.ng/",
        "https://t.me/ignateva_ko",
      ],
      areaServed: servedAreas,
      contactPoint,
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: siteName,
      legalName: "OÜ Turundusagendid",
      url: siteUrl,
      image: absoluteUrl("/brand/logo-white.png"),
      email: "ceo@domarketing.ee",
      telephone: "+37257843293",
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tallinn",
        addressRegion: "Harju County",
        addressCountry: "EE",
      },
      areaServed: servedAreas,
      availableLanguage: ["ru", "en", "et"],
      knowsAbout: [
        "Meta Ads",
        "Facebook Ads",
        "Instagram Ads",
        "Google Ads",
        "Performance marketing",
        "SMM",
        "SEO",
        "SEO optimisation Tallinn",
        "Local SEO Tallinn",
        "Marketing audit",
        "Website development",
      ],
    },
  ],
};

export function buildHomePageStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "Meta Ads и Google Ads агентство в Европе | Do.Marketing",
        description:
          "Агентство рекламы для бизнеса в Европе: Meta Ads, Google Ads, креативы, кейсы и рост заявок.",
        inLanguage: "ru",
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/#service-catalog`,
        serviceType: "Performance marketing",
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
        areaServed: servedAreas,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Advertising services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Meta Ads management",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Google Ads management",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "SMM management",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Marketing audit",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "SEO optimisation",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Website development",
              },
            },
          ],
        },
      },
    ],
  };
}

export function buildLocalizedHomePageStructuredData(language: Language) {
  const path = localizedPath(language);
  const copy = homeStructuredDataCopy[language];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl(path)}#webpage`,
        url: absoluteUrl(path),
        name: copy.name,
        description: copy.description,
        inLanguage: language,
      },
      {
        "@type": "Service",
        "@id": `${absoluteUrl(path)}#service-catalog`,
        serviceType: "Performance marketing",
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
        areaServed: servedAreas,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Advertising services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Meta Ads management",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Google Ads management",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "SMM management",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Marketing audit",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "SEO optimisation",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Website development",
              },
            },
          ],
        },
      },
    ],
  };
}

export function buildServiceStructuredData({
  path,
  name,
  description,
  serviceType,
  price,
  keywords = [],
  faq = [],
}: {
  path: string;
  name: string;
  description: string;
  serviceType: string;
  price?: string;
  keywords?: string[];
  faq?: FaqItem[];
}) {
  const url = absoluteUrl(path);
  const graph: Array<Record<string, unknown>> = [
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name,
      description,
      serviceType,
      ...(keywords.length > 0
        ? {
            alternateName: keywords,
            keywords: keywords.join(", "),
          }
        : {}),
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: servedAreas,
      availableLanguage: ["ru", "en", "et"],
      url,
      ...(price
        ? {
            offers: {
              "@type": "Offer",
              priceCurrency: "EUR",
              price,
            },
          }
        : {}),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: siteName,
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name,
          item: url,
        },
      ],
    },
  ];

  if (faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
