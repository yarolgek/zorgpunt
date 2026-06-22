import Link from "next/link"
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteContact } from "@/lib/site"
import { brand } from "@/lib/brand"
import { BrandLogo } from "@/components/landing/brand-logo"
import { getServicesByCategory, serviceCategories } from "@/lib/services"
import { serviceAreas } from "@/lib/service-areas"

const footerNav = [
  { label: "Hoe het werkt", href: "#hoe-het-werkt" },
  { label: "Sectoren", href: "#sectoren" },
  { label: "Tarieven", href: "#tarieven" },
  { label: "Ervaringen", href: "#ervaringen" },
  { label: "Veelgestelde vragen", href: "#faq" },
]

const legalLinks = [
  { label: "Privacy Statement", href: "/privacy" },
  { label: "Algemene voorwaarden", href: "/voorwaarden" },
  { label: "Cookiebeleid", href: "/cookies" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      {/* CTA strip */}
      <div className="py-12 lg:py-16 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4 text-center">
          <p className="text-xl font-semibold text-foreground text-balance">
            Klaar om de juiste match te vinden?
          </p>
          <p className="text-muted-foreground max-w-md">
            Gratis adviesgesprek. Geen verplichtingen. Lieke helpt u persoonlijk
            verder.
          </p>
          <Button asChild size="lg" className="font-semibold mt-2">
            <a href="#contact-form">Start uw gratis gesprek</a>
          </Button>
        </div>
      </div>

      {/* Contact & links */}
      <div className="py-10 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <BrandLogo size={44} wordmarkSize="sm" />
            <ul className="mt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={`tel:${siteContact.phone}`}
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {siteContact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteContact.email}`}
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {siteContact.email}
                </a>
              </li>
              <li>
                <a
                  href={siteContact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  WhatsApp chat
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  {brand.name}
                  <br />
                  {siteContact.street}
                  <br />
                  {siteContact.postalCode} {siteContact.city}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  Ma t/m vr: {siteContact.openingHours[0].opens}&ndash;
                  {siteContact.openingHours[0].closes}
                  <br />
                  Za &amp; zo: gesloten
                </span>
              </li>
              <li className="text-xs">KvK: {siteContact.kvk}</li>
            </ul>
            <nav aria-label="Social media" className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {siteContact.socialProfiles.map((profile) => (
                <a
                  key={profile.url}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {profile.label}
                </a>
              ))}
            </nav>
          </div>

          <nav aria-label="Voetnavigatie" className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-foreground mb-1">Pagina</p>
            {footerNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <nav aria-label="Juridisch" className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-foreground mb-1">Juridisch</p>
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <nav
          aria-label="Onze diensten"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-10 border-t border-border"
        >
          <p className="text-sm font-semibold text-foreground mb-6">
            <Link href="/diensten" className="hover:text-primary transition-colors">
              Onze diensten
            </Link>
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((category) => (
              <div key={category.id}>
                <p className="text-xs font-semibold text-foreground mb-3">
                  {category.label}
                </p>
                <ul className="flex flex-col gap-2">
                  {getServicesByCategory(category.id).map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/diensten/${service.slug}`}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors leading-snug"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        <nav
          aria-label="Werkgebieden"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-10 border-t border-border"
        >
          <p className="text-sm font-semibold text-foreground mb-6">
            <Link href="/werkgebieden" className="hover:text-primary transition-colors">
              Werkgebieden
            </Link>
          </p>
          <ul className="grid gap-x-8 gap-y-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {serviceAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/werkgebieden/${area.slug}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors leading-snug"
                >
                  {area.city}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {brand.name}
          </p>
          <p className="text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground underline-offset-4 hover:underline">
              AVG/GDPR conform
            </Link>
            {" "}
            , zie privacy statement
          </p>
        </div>
      </div>
    </footer>
  )
}
