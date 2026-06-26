import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Кейсы по Meta Ads и Google Ads в Европе | Do.Marketing",
  description:
    "Кейсы Do.Marketing по Meta Ads и Google Ads: заявки, продажи, ROAS и реальные результаты рекламных кампаний в Европе.",
  path: "/cases",
  keywords: [
    "кейсы Meta Ads",
    "кейсы Google Ads",
    "marketing cases Estonia",
    "Do.Marketing кейсы",
  ],
});

export default function CasesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
