import type { MetadataRoute } from "next"

import { getSiteUrl } from "@/lib/site-url"

export const dynamic = "force-static"

const BASE_URL = getSiteUrl()

/** AI and search crawlers we explicitly allow (also covered by User-agent: *). */
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "anthropic-ai",
] as const

export default function robots(): MetadataRoute.Robots {
  const allowAll = { allow: "/" as const }

  return {
    rules: [
      { userAgent: "*", ...allowAll },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, ...allowAll })),
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
