import type { MetadataRoute } from "next";

const baseUrl = "https://domarketing.ee";
const lastModified = new Date("2026-05-15T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/meta-ads`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/google-ads`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/smm`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/smm/eng`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.55,
    },
    {
      url: `${baseUrl}/cases`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kreo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
