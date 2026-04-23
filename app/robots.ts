import type { MetadataRoute } from "next";

const BASE = "https://exitmedia.com.ar";

const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "Bytespider",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "FacebookBot",
  "DuckAssistBot",
  "CCBot",
  "YouBot",
  "cohere-ai",
  "Diffbot",
  "ImagesiftBot",
  "Timpibot",
  "Kagibot",
  "Mistral-AI",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin", "/rambla"],
      },
      {
        userAgent: aiCrawlers,
        allow: "/",
        disallow: ["/api/", "/rambla"],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
