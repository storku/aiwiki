import { getAllPages, getAllCategories, getPageTimestamps } from "@/lib/content";
import type { MetadataRoute } from "next";

const POPULAR_SLUGS = new Set([
  "chatgpt", "ai", "dall-e", "gpt-4", "large_language_model",
  "midjourney", "claude", "anthropic", "transformer", "neural_network",
  "deep_learning", "machine_learning", "openai", "stable_diffusion",
  "reinforcement_learning", "natural_language_processing",
]);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pages, categories, timestamps] = await Promise.all([
    getAllPages(),
    getAllCategories(),
    getPageTimestamps(),
  ]);

  const baseUrl = "https://aiwiki.ai";

  const wikiPages = pages.map((page) => ({
    url: `${baseUrl}/wiki/${page.slug}`,
    lastModified: timestamps.get(page.slug) || new Date(),
    changeFrequency: "monthly" as const,
    priority: POPULAR_SLUGS.has(page.slug) ? 0.9 : 0.7,
  }));

  const categoryPages = categories.map((cat) => ({
    url: `${baseUrl}/categories/${encodeURIComponent(cat.name)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/wiki`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...categoryPages,
    ...wikiPages,
  ];
}
