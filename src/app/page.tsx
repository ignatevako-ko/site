import type { Metadata } from "next";
import Script from "next/script";
import { LandingPage } from "@/components/landing-page";
import { buildHomePageStructuredData, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Meta Ads и Google Ads агентство в Tallinn | Do.Marketing",
  description:
    "Do.Marketing — агентство рекламы в Таллинне, которое ведет Meta Ads и Google Ads для бизнеса в Эстонии: стратегия, креативы, кейсы и рост заявок.",
  path: "/",
  keywords: [
    "Meta Ads agency Tallinn",
    "Google Ads agency Tallinn",
    "реклама в Таллинне",
    "performance marketing Tallinn",
  ],
});

const homePageStructuredData = buildHomePageStructuredData();

export default function Home() {
  return (
    <>
      <LandingPage />
      <Script id="home-structured-data" type="application/ld+json">
        {JSON.stringify(homePageStructuredData)}
      </Script>
    </>
  );
}
