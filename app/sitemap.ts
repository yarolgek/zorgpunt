import type { MetadataRoute } from "next"
import { getAllServiceSlugs } from "@/lib/services"
import { getAllServiceAreaSlugs } from "@/lib/service-areas"
import { getSiteUrl } from "@/lib/site-url"

export const dynamic = "force-static"

const BASE_URL = getSiteUrl()

/** Snapshot at build time — signals freshness to crawlers. */
const LAST_MODIFIED = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceEntries = getAllServiceSlugs().map((slug) => ({
    url: `${BASE_URL}/diensten/${slug}/`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const areaEntries = getAllServiceAreaSlugs().map((slug) => ({
    url: `${BASE_URL}/werkgebieden/${slug}/`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/diensten/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...serviceEntries,
    {
      url: `${BASE_URL}/werkgebieden/`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...areaEntries,
  ]
}
