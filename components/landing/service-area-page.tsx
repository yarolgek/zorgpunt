import Link from "next/link"
import type { ServiceArea } from "@/lib/service-areas"
import { getServiceAreaBySlug } from "@/lib/service-areas"
import { getServicesByCategory, serviceCategories } from "@/lib/services"
import { brand } from "@/lib/brand"
import { Footer } from "@/components/landing/footer"
import type { RichAreaPage } from "@/lib/service-area-content/types"
import type { EnhancedSubpageSeo } from "@/lib/subpage-seo"

interface ServiceAreaPageContentProps {
  area: ServiceArea
  rich?: RichAreaPage
  seo: EnhancedSubpageSeo
}

export function ServiceAreaPageContent({
  area,
  rich,
  seo,
}: ServiceAreaPageContentProps) {
  const h1 = seo.h1

  return (
    <div className="min-h-screen bg-background">
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
              <li>
                <Link href="/werkgebieden" className="hover:text-foreground">
                  Werkgebieden
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground font-medium">{area.city}</li>
            </ol>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <p className="text-xs font-semibold tracking-wider uppercase text-primary mb-3">
          Zorgbemiddeling · Werkgebied {area.province}
        </p>
        <h1 className="text-3xl font-semibold text-foreground mb-8 text-balance">
          {h1}
        </h1>

        <div className="prose prose-neutral max-w-none text-muted-foreground space-y-4 text-sm leading-relaxed">
          {rich ? (
            <>
              {rich.renderArticle()}

              <section className="pt-10 border-t border-border mt-10">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Veelgestelde vragen over zorgpersoneel in {area.city}
                </h2>
                <div className="space-y-6">
                  {rich.faqs.map((faq) => (
                    <div key={faq.question}>
                      <h3 className="text-base font-semibold text-foreground mb-2">
                        {faq.question}
                      </h3>
                      <p>{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {rich.relatedAreaSlugs.length > 0 ? (
                <section className="pt-10 border-t border-border mt-10">
                  <h2 className="text-lg font-semibold text-foreground mb-4">
                    Andere werkgebieden
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {rich.relatedAreaSlugs.map((slug) => {
                      const related = getServiceAreaBySlug(slug)
                      if (!related) return null
                      return (
                        <li key={slug}>
                          <Link
                            href={`/werkgebieden/${slug}`}
                            className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
                          >
                            {related.city}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </section>
              ) : null}
            </>
          ) : (
            <>
              <p className="text-base text-foreground">{area.intro}</p>
              <p>
                Vanuit onze basis in Roermond zijn wij goed bekend met de
                zorgarbeidsmarkt in {area.province} en omliggende regio&apos;s.
                Voor zorginstellingen in {area.city} bemiddelen en detacheren wij
                gekwalificeerde zorgprofessionals, met persoonlijk contact en
                korte lijnen.
              </p>

              <h2 className="text-lg font-semibold text-foreground pt-4">
                Onze diensten in {area.city}
              </h2>
              {serviceCategories.map((category) => (
                <div key={category.id}>
                  <h3 className="text-base font-semibold text-foreground pt-3">
                    {category.label}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
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
                </div>
              ))}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
