import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteContact } from "@/lib/site"
import { brand } from "@/lib/brand"
import { BrandLogo } from "@/components/landing/brand-logo"

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
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                {siteContact.region}
              </li>
              <li className="text-xs">KvK: {siteContact.kvk}</li>
            </ul>
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
            — zie privacy statement
          </p>
        </div>
      </div>
    </footer>
  )
}
