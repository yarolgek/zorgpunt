import type { ReactNode } from "react"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { siteContact } from "@/lib/site"
import { brand } from "@/lib/brand"
import { BrandLogo } from "@/components/landing/brand-logo"
import { WhatsAppIcon } from "@/components/landing/whatsapp-icon"
import { getServicesByCategory, serviceCategories } from "@/lib/services"
import { serviceAreas } from "@/lib/service-areas"

const footerNav = [
  { label: "Hoe het werkt", href: "/#hoe-het-werkt" },
  { label: "Sectoren", href: "/#sectoren" },
  { label: "Tarieven", href: "/#tarieven" },
  { label: "Ervaringen", href: "/#ervaringen" },
  { label: "Contact", href: "/contact" },
  { label: "Veelgestelde vragen", href: "/#faq" },
]

const legalLinks = [
  { label: "Privacy Statement", href: "/privacy" },
  { label: "Algemene voorwaarden", href: "/voorwaarden" },
  { label: "Cookiebeleid", href: "/cookies" },
]

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const className =
    "text-sm text-muted-foreground hover:text-foreground transition-colors leading-snug"

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}

function FooterSection({
  title,
  children,
  className,
}: {
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={className}>
      <h2 className="text-sm font-semibold text-foreground mb-3">{title}</h2>
      {children}
    </section>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { opens, closes } = siteContact.openingHours[0]

  return (
    <footer className="border-t border-border bg-card">
      <div className="py-10 lg:py-12 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <BrandLogo href="/" size={44} wordmarkSize="sm" />

          <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-12">
            <FooterSection title="Contact" className="sm:col-span-2 lg:col-span-6">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10 lg:gap-14">
                <ul className="min-w-0 space-y-2.5 text-sm text-muted-foreground">
                  <li>
                    <a
                      href={`tel:${siteContact.phone}`}
                      className="inline-flex items-center gap-2.5 hover:text-foreground transition-colors whitespace-nowrap"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-foreground/70" />
                      {siteContact.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${siteContact.email}`}
                      className="inline-flex items-center gap-2.5 hover:text-foreground transition-colors break-all sm:break-normal"
                    >
                      <Mail className="h-4 w-4 shrink-0 text-foreground/70" />
                      {siteContact.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={siteContact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 hover:text-foreground transition-colors whitespace-nowrap"
                    >
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center text-[#25D366]">
                        <WhatsAppIcon className="h-4 w-4" />
                      </span>
                      WhatsApp chat
                    </a>
                  </li>
                </ul>

                <div className="shrink-0 text-sm text-muted-foreground leading-relaxed">
                  <address className="not-italic">
                    {siteContact.street}
                    <br />
                    {siteContact.postalCode} {siteContact.city}
                  </address>
                  <p className="mt-2 whitespace-nowrap">
                    Ma t/m vr: {opens}&ndash;{closes}
                    <br />
                    Za &amp; zo: gesloten
                  </p>
                </div>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">KvK: {siteContact.kvk}</p>

              <nav
                aria-label="Social media"
                className="mt-4 flex flex-wrap gap-x-3 gap-y-1"
              >
                {siteContact.socialProfiles.map((profile, index) => (
                  <span key={profile.url} className="inline-flex items-center gap-3">
                    {index > 0 ? (
                      <span className="text-border" aria-hidden>
                        |
                      </span>
                    ) : null}
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {profile.label}
                    </a>
                  </span>
                ))}
              </nav>
            </FooterSection>

            <FooterSection title="Pagina" className="lg:col-span-3">
              <nav aria-label="Voetnavigatie" className="flex flex-col gap-2">
                {footerNav.map((link) => (
                  <FooterLink key={link.href} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </nav>
            </FooterSection>

            <FooterSection title="Juridisch" className="lg:col-span-3">
              <nav aria-label="Juridisch" className="flex flex-col gap-2">
                {legalLinks.map((link) => (
                  <FooterLink key={link.href} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </nav>
            </FooterSection>
          </div>
        </div>

        <nav
          aria-label="Onze diensten"
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-10 border-t border-border"
        >
          <h2 className="text-sm font-semibold text-foreground mb-6">
            <Link href="/diensten" className="hover:text-primary transition-colors">
              Onze diensten
            </Link>
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((category) => (
              <div key={category.id}>
                <p className="text-xs font-semibold uppercase tracking-wide text-foreground/80 mb-3">
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
          <h2 className="text-sm font-semibold text-foreground mb-4">
            <Link href="/werkgebieden" className="hover:text-primary transition-colors">
              Werkgebieden
            </Link>
          </h2>
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

      <div className="py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {brand.name}
          </p>
          <p className="text-xs text-muted-foreground">
            <Link
              href="/privacy"
              className="hover:text-foreground underline-offset-4 hover:underline"
            >
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
