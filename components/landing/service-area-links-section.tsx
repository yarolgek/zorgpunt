import Link from "next/link"
import { getServiceAreaBySlug } from "@/lib/service-areas"
import { getServiceAreaSlugsForService } from "@/lib/service-area-links"
import { activeRegionShort } from "@/lib/regions"
import { limitSlugs, MAX_SERVICE_AREA_LINKS } from "@/lib/subpage-links"

interface ServiceAreaLinksSectionProps {
  serviceSlug: string
  serviceTitle: string
  relatedAreaSlugs?: string[]
}

export function ServiceAreaLinksSection({
  serviceSlug,
  serviceTitle,
  relatedAreaSlugs,
}: ServiceAreaLinksSectionProps) {
  const slugs = limitSlugs(
    getServiceAreaSlugsForService(serviceSlug, relatedAreaSlugs),
    MAX_SERVICE_AREA_LINKS
  )
  const areas = slugs
    .map((slug) => getServiceAreaBySlug(slug))
    .filter((area): area is NonNullable<typeof area> => area != null)

  if (areas.length === 0) return null

  const [first, second, ...rest] = areas
  const listAreas = rest

  return (
    <section className="pt-10 border-t border-border mt-10">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Werkgebieden waar wij {serviceTitle.toLowerCase()} leveren
      </h2>
      <p>
        Wij ondersteunen zorgorganisaties met {serviceTitle.toLowerCase()} in
        onder meer{" "}
        {first ? (
          <Link
            href={`/werkgebieden/${first.slug}`}
            className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
          >
            {first.city}
          </Link>
        ) : null}
        {second ? (
          <>
            {" "}
            en{" "}
            <Link
              href={`/werkgebieden/${second.slug}`}
              className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
            >
              {second.city}
            </Link>
          </>
        ) : null}
        . Vanuit ons kantoor in Roermond bedienen wij {activeRegionShort}.
      </p>
      {listAreas.length > 0 ? (
        <div className="mt-4">
          <p className="text-sm font-medium text-foreground mb-2">
            Ook actief in:
          </p>
          <ul className="flex flex-col gap-2">
            {listAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/werkgebieden/${area.slug}`}
                  className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
                >
                  Zorgpersoneel in {area.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  )
}
