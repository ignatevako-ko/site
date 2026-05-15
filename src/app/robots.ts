import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/sergey"],
      },
    ],
    sitemap: "https://domarketing.ee/sitemap.xml",
    host: "https://domarketing.ee",
  };
}
