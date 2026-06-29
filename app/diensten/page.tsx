import type { Metadata } from "next"
import Link from "next/link"
import { brand } from "@/lib/brand"
import { activeRegionLabel, networkStats } from "@/lib/regions"
import { getServicesByCategory, serviceCategories } from "@/lib/services"
import { Footer } from "@/components/landing/footer"
import { CtaSection } from "@/components/landing/cta-section"
import { breadcrumbJsonLd } from "@/lib/structured-data"
import { dienstenHubSeo } from "@/lib/subpage-seo"
import { getSiteUrl } from "@/lib/site-url"

const BASE_URL = getSiteUrl()

export const metadata: Metadata = {
  title: dienstenHubSeo.title,
  description: dienstenHubSeo.description,
  alternates: {
    canonical: "/diensten/",
  },
  openGraph: {
    title: dienstenHubSeo.title,
    description: dienstenHubSeo.description,
    type: "website",
    url: `${BASE_URL}/diensten/`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, type: "image/png" }],
  },
}

export default function DienstenPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: brand.name, url: `${BASE_URL}/` },
    { name: "Diensten", url: `${BASE_URL}/diensten/` },
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
              <li className="text-foreground font-medium">Diensten</li>
            </ol>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <p className="text-xs font-semibold tracking-wider uppercase text-primary mb-3">
          Diensten
        </p>
        <h1 className="text-3xl font-semibold text-foreground mb-6 text-balance">
          {dienstenHubSeo.h1}
        </h1>

        <div className="prose prose-neutral max-w-none text-muted-foreground space-y-4 text-sm leading-relaxed">
          <p className="text-base text-foreground">
            {brand.name} ontzorgt zorgorganisaties van personeel tot
            administratie. Van{" "}
            <Link
              href="/diensten/bemiddeling-zzp-zorgprofessionals"
              className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
            >
              bemiddeling van ZZP-zorgprofessionals
            </Link>{" "}
            en{" "}
            <Link
              href="/diensten/detachering-zorgpersoneel"
              className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
            >
              detachering
            </Link>{" "}
            tot operationele ondersteuning en compliance. Vanuit Roermond zijn we
            actief in {activeRegionLabel}, met {networkStats.activeProfessionals}{" "}
            direct inzetbare zorgprofessionals.
            zorgprofessionals.
          </p>
          <p>
            Hieronder vindt u al onze diensten, geordend per categorie. Bekijk ook
            onze{" "}
            <Link href="/werkgebieden" className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline">
              werkgebieden
            </Link>{" "}
            voor de steden waar wij bemiddelen.
          </p>

          {serviceCategories.map((category) => (
            <section key={category.id} className="pt-4">
              <h2 className="text-lg font-semibold text-foreground pt-2">
                {category.label}
              </h2>
              <ul className="grid gap-2 sm:grid-cols-2 list-none pl-0">
                {getServicesByCategory(category.id).map((service) => (
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
          ))}
        </div>
      </main>
      <CtaSection />
      <Footer />
    </div>
  )
}
