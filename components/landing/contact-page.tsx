import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { Header } from "@/components/landing/header"
import { HeroContactFlow } from "@/components/landing/hero-contact-flow"
import { GoogleMapEmbed } from "@/components/landing/google-map-embed"
import { Footer } from "@/components/landing/footer"
import { WhatsAppIcon } from "@/components/landing/whatsapp-icon"
import { brand } from "@/lib/brand"
import { siteContact } from "@/lib/site"
import { activeRegionLabel } from "@/lib/regions"
import { contactSeo } from "@/lib/subpage-seo"

export function ContactPageContent() {
  const { opens, closes } = siteContact.openingHours[0]

  return (
    <>
      <Header />

      <div className="min-h-screen bg-background">
        <div className="border-b border-border bg-card">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
            <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
              <ol className="flex flex-wrap items-center gap-1">
                <li>
                  <Link href="/" className="hover:text-foreground">
                    {brand.name}
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-foreground font-medium">Contact</li>
              </ol>
            </nav>
          </div>
        </div>

        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          <p className="text-xs font-semibold tracking-wider uppercase text-primary mb-3">
            Contact · Roermond
          </p>
          <h1 className="text-3xl font-semibold text-foreground mb-4 text-balance">
            {contactSeo.h1}
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed mb-10">
            Heeft u personeelsvraag in de zorg, of bent u zelfstandige
            zorgprofessional? Neem contact op — wij reageren doorgaans binnen één
            werkdag. Vanuit Roermond zijn wij actief in {activeRegionLabel}.
          </p>

          <section aria-labelledby="contact-form-heading">
            <h2
              id="contact-form-heading"
              className="text-lg font-semibold text-foreground mb-4"
            >
              Stuur ons een bericht
            </h2>
            <HeroContactFlow />
          </section>

          <section
            aria-labelledby="contact-quick-heading"
            className="pt-10 mt-10 border-t border-border"
          >
            <h2
              id="contact-quick-heading"
              className="text-lg font-semibold text-foreground mb-4"
            >
              Liever direct contact?
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${siteContact.phone}`}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:border-primary/30 transition-colors no-underline hover:no-underline"
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden />
                {siteContact.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteContact.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:border-primary/30 transition-colors no-underline hover:no-underline"
              >
                <Mail className="h-4 w-4 text-primary" aria-hidden />
                E-mail
              </a>
              <a
                href={siteContact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:border-primary/30 transition-colors no-underline hover:no-underline"
              >
                <span className="text-[#25D366]">
                  <WhatsAppIcon className="h-4 w-4" />
                </span>
                WhatsApp
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Ma t/m vr: {opens}&ndash;{closes} · Za &amp; zo: gesloten · KvK:{" "}
              {siteContact.kvk}
            </p>
          </section>

          <section
            aria-labelledby="contact-map-heading"
            className="pt-10 mt-10 border-t border-border"
          >
            <h2
              id="contact-map-heading"
              className="text-lg font-semibold text-foreground mb-4"
            >
              Route naar ons kantoor
            </h2>
            <GoogleMapEmbed
              title="Zwartbroekpoort 2, Roermond"
              description={`Vanuit ons kantoor in Roermond bedienen wij opdrachtgevers in ${activeRegionLabel}.`}
            />
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
