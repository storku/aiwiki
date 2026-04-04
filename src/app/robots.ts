import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/wiki/*/edit",
          "/wiki/*/history",
          "/wiki/*/revisions/",
          "/api/",
          "/search?",
        ],
      },
    ],
    sitemap: "https://aiwiki.ai/sitemap.xml",
  };
}
