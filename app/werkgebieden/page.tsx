import type { Metadata } from "next"
import Link from "next/link"
import { brand } from "@/lib/brand"
import { serviceAreas } from "@/lib/service-areas"
import { getServiceBySlug } from "@/lib/services"
import { HUB_FEATURED_SERVICE_SLUGS } from "@/lib/service-area-links"
import { werkgebiedenHubSeo } from "@/lib/subpage-seo"
import { getSiteUrl } from "@/lib/site-url"
import { Footer } from "@/components/landing/footer"
import { CtaSection } from "@/components/landing/cta-section"
import { breadcrumbJsonLd } from "@/lib/structured-data"

const BASE_URL = getSiteUrl()

export const metadata: Metadata = {
  title: werkgebiedenHubSeo.title,
  description: werkgebiedenHubSeo.description,
  alternates: {
    canonical: "/werkgebieden/",
  },
  openGraph: {
    title: werkgebiedenHubSeo.title,
    description: werkgebiedenHubSeo.description,
    type: "website",
    url: `${BASE_URL}/werkgebieden/`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, type: "image/png" }],
  },
}

export default function WerkgebiedenPage() {
  const featuredServices = HUB_FEATURED_SERVICE_SLUGS.map((slug) =>
    getServiceBySlug(slug)
  ).filter((service): service is NonNullable<typeof service> => service != null)

  const jsonLd = breadcrumbJsonLd([
    { name: brand.name, url: `${BASE_URL}/` },
    { name: "Werkgebieden", url: `${BASE_URL}/werkgebieden/` },
  ])

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-border bg-card">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-2">
          <Link
            href="/"
            className="text-sm font-medium text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline w-fit"
          >
            &larr; Terug naar {brand.name}
          </Link>
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1">
              <li>
                <Link href="/" className="hover:text-foreground">
                  {brand.name}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground font-medium">Werkgebieden</li>
            </ol>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <p className="text-xs font-semibold tracking-wider uppercase text-primary mb-3">
          Werkgebieden
        </p>
        <h1 className="text-3xl font-semibold text-foreground mb-6 text-balance">
          {werkgebiedenHubSeo.h1}
        </h1>

        <div className="prose prose-neutral max-w-none text-muted-foreground space-y-4 text-sm leading-relaxed">
          <p className="text-base text-foreground">
            {brand.name} is gevestigd in Roermond (Zwartbroekpoort 2) en bemiddelt
            en detacheert zorgprofessionals voor opdrachtgevers in Limburg en
            Noord-Brabant, waar we als top 3 speler actief zijn. Vanuit onze
            centrale ligging bedienen we de grootste steden binnen een straal van
            ongeveer 100 kilometer.
          </p>
          <p>
            Hieronder vindt u onze werkgebieden. Per stad leest u meer over de
            lokale zorgvraag, onze diensten en hoe snel we kunnen schakelen.
            Bekijk ook ons volledige{" "}
            <Link
              href="/diensten"
              className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
            >
              dienstenoverzicht
            </Link>
            .
          </p>

          <section className="pt-4">
            <h2 className="text-lg font-semibold text-foreground pt-2">
              Onze belangrijkste diensten
            </h2>
            <ul className="flex flex-col gap-2 list-none pl-0">
              {featuredServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/diensten/${service.slug}`}
                    className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <h2 className="text-lg font-semibold text-foreground pt-4">
            Steden die wij bedienen
          </h2>
          <ul className="grid gap-2 sm:grid-cols-2 list-none pl-0">
            {serviceAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/werkgebieden/${area.slug}`}
                  className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
                >
                  {area.city}
                </Link>
                <span className="text-muted-foreground"> , {area.province}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <CtaSection />
      <Footer />
    </div>
  )
}
