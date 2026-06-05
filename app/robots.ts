import type { MetadataRoute } from "next"

// Required for static export — pre-renders at build time
export const dynamic = "force-static"

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zorgpuntconnect.nl"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
