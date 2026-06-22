/** Canonical site URL for metadata, sitemap, schema and OG tags. */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
  }

  return process.env.NODE_ENV === "production"
    ? "https://www.zorgpuntconnect.nl"
    : "http://localhost:3000"
}
