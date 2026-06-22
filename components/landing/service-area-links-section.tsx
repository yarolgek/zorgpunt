import Link from "next/link"
import { getServiceAreaBySlug } from "@/lib/service-areas"
import { getServiceAreaSlugsForService } from "@/lib/service-area-links"

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
  const slugs = getServiceAreaSlugsForService(serviceSlug, relatedAreaSlugs)
  const areas = slugs
    .map((slug) => getServiceAreaBySlug(slug))
    .filter((area): area is NonNullable<typeof area> => area != null)

  if (areas.length === 0) return null

  const [first, second, third] = areas

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
            ,{" "}
            <Link
              href={`/werkgebieden/${second.slug}`}
              className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
            >
              {second.city}
            </Link>
          </>
        ) : null}
        {third ? (
          <>
            {" "}
            en{" "}
            <Link
              href={`/werkgebieden/${third.slug}`}
              className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
            >
              {third.city}
            </Link>
          </>
        ) : null}
        . Vanuit ons kantoor in Roermond bedienen wij Limburg en Noord-Brabant.
      </p>
      <ul className="flex flex-col gap-2 mt-4">
        {areas.map((area) => (
          <li key={area.slug}>
            <Link
              href={`/werkgebieden/${area.slug}`}
              className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
            >
              {serviceTitle} in {area.city}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
