import type { Metadata } from "next";
import { GoogleAdsPage } from "@/components/google-ads-page";

export const metadata: Metadata = {
  title: "Google Ads | Do.Marketing",
  description:
    "Отдельный лендинг Do.Marketing по Google Ads: запуск, ведение, оптимизация и работа с платным трафиком в евро.",
};

export default function GoogleAdsRoute() {
  return <GoogleAdsPage />;
}
