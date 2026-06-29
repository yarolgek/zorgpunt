/**
 * Max internal cross-links in subpage main content (SEO template sections).
 * Service pages: related diensten (3) + werkgebieden (5) = 8.
 * Area pages: diensten in article (≤5) + related werkgebieden (3) = 8.
 */
export const MAX_SUBPAGE_INTERNAL_LINKS = 8

export const MAX_RELATED_SERVICE_LINKS = 3
export const MAX_RELATED_AREA_LINKS = 3
export const MAX_SERVICE_AREA_LINKS = 5

export function limitSlugs<T>(slugs: readonly T[], max: number): T[] {
  return slugs.slice(0, max)
}
