import type { Metadata } from "next";

export const siteUrl = "https://domarketing.ee";
export const siteName = "Do.Marketing";
export const siteTitle = "Do.Marketing | Meta Ads и Google Ads агентство в Tallinn";
export const siteDescription =
  "Do.Marketing помогает бизнесу в Таллинне и по всей Эстонии привлекать клиентов через Meta Ads и Google Ads: стратегия, запуск, ведение, креативы и рост заявок.";

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
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/meta-ads", changeFrequency: "weekly", priority: 0.95 },
  { path: "/google-ads", changeFrequency: "weekly", priority: 0.95 },
  { path: "/smm", changeFrequency: "weekly", priority: 0.85 },
  { path: "/cases", changeFrequency: "weekly", priority: 0.8 },
  { path: "/kreo", changeFrequency: "monthly", priority: 0.55 },
];

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
        name: "Meta Ads и Google Ads агентство в Tallinn | Do.Marketing",
        description:
          "Агентство рекламы в Таллинне для бизнеса в Эстонии: Meta Ads, Google Ads, креативы, кейсы и рост заявок.",
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
  faq = [],
}: {
  path: string;
  name: string;
  description: string;
  serviceType: string;
  price?: string;
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
