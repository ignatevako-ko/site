import type { MetadataRoute } from "next";
import { absoluteUrl, indexedRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return indexedRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: route.lastModified ? new Date(route.lastModified) : lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
