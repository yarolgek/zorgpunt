import type { MetadataRoute } from "next"
import { getAllServiceSlugs } from "@/lib/services"

// Required for static export — pre-renders at build time
export const dynamic = "force-static"

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zorgpuntconnect.nl"

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceEntries = getAllServiceSlugs().map((slug) => ({
    url: `${BASE_URL}/diensten/${slug}/`,
    lastModified: "2025-01-01",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: "2025-01-01",
      changeFrequency: "weekly",
      priority: 1,
    },
    ...serviceEntries,
    {
      url: `${BASE_URL}/privacy/`,
      lastModified: "2025-01-01",
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/voorwaarden/`,
      lastModified: "2025-01-01",
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/cookies/`,
      lastModified: "2025-01-01",
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ]
}
