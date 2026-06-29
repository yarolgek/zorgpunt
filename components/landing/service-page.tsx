import Link from "next/link"
import type { Service } from "@/lib/services"
import { getServiceBySlug, serviceCategories } from "@/lib/services"
import { brand } from "@/lib/brand"
import { Footer } from "@/components/landing/footer"
import { CtaSection } from "@/components/landing/cta-section"
import { ServiceAreaLinksSection } from "@/components/landing/service-area-links-section"
import type { EnhancedSubpageSeo } from "@/lib/subpage-seo"
import type { RichServicePage } from "@/lib/service-content/types"
import { limitSlugs, MAX_RELATED_SERVICE_LINKS } from "@/lib/subpage-links"

interface ServicePageContentProps {
  service: Service
  rich?: RichServicePage
  seo: EnhancedSubpageSeo
}

export function ServicePageContent({
  service,
  rich,
  seo,
}: ServicePageContentProps) {
  const categoryLabel = serviceCategories.find(
    (c) => c.id === service.category
  )?.label

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
                <Link href="/diensten" className="hover:text-foreground">
                  Diensten
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground font-medium">{service.title}</li>
            </ol>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <p className="text-xs font-semibold tracking-wider uppercase text-primary mb-3">
          {categoryLabel ?? "Onze diensten"}
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
                  Veelgestelde vragen
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

              {rich.relatedSlugs.length > 0 ? (
                <section className="pt-10 border-t border-border mt-10">
                  <h2 className="text-lg font-semibold text-foreground mb-4">
                    Gerelateerde diensten
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {limitSlugs(rich.relatedSlugs, MAX_RELATED_SERVICE_LINKS).map((slug) => {
                      const related = getServiceBySlug(slug)
                      if (!related) return null
                      return (
                        <li key={slug}>
                          <Link
                            href={`/diensten/${slug}`}
                            className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
                          >
                            {related.title}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </section>
              ) : null}

              <ServiceAreaLinksSection
                serviceSlug={service.slug}
                serviceTitle={service.title}
                relatedAreaSlugs={rich.relatedAreaSlugs}
              />
            </>
          ) : (
            <>
              <p className="text-base text-foreground">{service.intro}</p>
              {service.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
              <h2 className="text-lg font-semibold text-foreground pt-4">
                Wat u kunt verwachten
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                {service.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
              <h2 className="text-lg font-semibold text-foreground pt-4">
                Voor wie
              </h2>
              <p>{service.audience}</p>

              <ServiceAreaLinksSection
                serviceSlug={service.slug}
                serviceTitle={service.title}
              />
            </>
          )}
        </div>
      </main>
      <CtaSection />
      <Footer />
    </div>
  )
}
