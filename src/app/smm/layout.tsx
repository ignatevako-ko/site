import type { Metadata } from "next";
import Script from "next/script";
import { buildPageMetadata, buildServiceStructuredData } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "SMM Tallinn | Instagram, Facebook, TikTok и Shorts для бизнеса | Do.Marketing",
  description:
    "SMM в Tallinn и по всей Эстонии: стратегия контента, упаковка аккаунта, Reels, Stories, автоматизация и масштабирование через таргетированную рекламу.",
  path: "/smm",
  keywords: [
    "SMM Tallinn",
    "Instagram marketing Tallinn",
    "social media marketing Estonia",
    "SMM Эстония",
  ],
});

const smmStructuredData = buildServiceStructuredData({
  path: "/smm",
  name: "SMM management in Tallinn",
  description:
    "SMM для бизнеса в Таллинне и по всей Эстонии: контент, упаковка, Reels, Stories и усиление через рекламу.",
  serviceType: "Social media marketing",
});

export default function SmmLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Script id="smm-structured-data" type="application/ld+json">
        {JSON.stringify(smmStructuredData)}
      </Script>
    </>
  );
}
