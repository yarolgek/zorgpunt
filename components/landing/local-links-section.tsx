import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FEATURED_SERVICE_SLUGS } from "@/lib/service-area-links"
import { getServiceBySlug } from "@/lib/services"
import { serviceAreas } from "@/lib/service-areas"
import { activeRegionShort } from "@/lib/regions"

export function LocalLinksSection() {
  const featuredServices = FEATURED_SERVICE_SLUGS.map((slug) =>
    getServiceBySlug(slug)
  ).filter((service): service is NonNullable<typeof service> => service != null)

  return (
    <section
      className="py-16 lg:py-24 bg-muted/30 border-t border-border"
      aria-labelledby="local-links-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold tracking-wider uppercase text-primary mb-3">
            Lokaal bereikbaar
          </p>
          <h2
            id="local-links-heading"
            className="text-2xl sm:text-3xl font-semibold text-foreground text-balance"
          >
            Diensten en werkgebieden
          </h2>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            Vanuit Roermond bemiddelen wij zorgpersoneel in {activeRegionShort}.
            Ontdek onze kern diensten en de steden waar wij actief zijn.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Onze belangrijkste diensten
            </h3>
            <ul className="flex flex-col gap-2">
              {featuredServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/diensten/${service.slug}`}
                    className="text-sm text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline leading-snug"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild variant="link" className="px-0 mt-4 h-auto font-semibold">
              <Link href="/diensten">
                Alle diensten bekijken
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Werkgebieden
            </h3>
            <ul className="grid gap-2 grid-cols-2 sm:grid-cols-3">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/werkgebieden/${area.slug}`}
                    className="text-sm text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline leading-snug"
                  >
                    {area.city}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild variant="link" className="px-0 mt-4 h-auto font-semibold">
              <Link href="/werkgebieden">
                Overzicht werkgebieden
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
