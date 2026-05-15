import type { Metadata } from "next";
import { KreoPageContent } from "@/components/kreo-page-content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Креативы для Meta Ads и Google Ads | Do.Marketing",
  description:
    "Примеры статических и видео креативов Do.Marketing для Meta Ads и Google Ads: форматы, подача и рекламные идеи для бизнеса в Эстонии.",
  path: "/kreo",
  keywords: [
    "креативы для Meta Ads",
    "advertising creatives Estonia",
    "Do.Marketing creatives",
  ],
});

export default function KreoPage() {
  return <KreoPageContent />;
}
