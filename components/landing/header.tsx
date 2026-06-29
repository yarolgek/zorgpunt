"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { BrandLogo } from "@/components/landing/brand-logo"

/** Shown in the desktop header — keep this row short. */
const primaryNavLinks = [
  { label: "Diensten", href: "/diensten", sectionId: "diensten" },
  { label: "Werkgebieden", href: "/werkgebieden", sectionId: "werkgebieden" },
  { label: "Contact", href: "/contact", sectionId: "contact" },
] as const

/** Homepage sections + pages — mobile menu and footer. */
const secondaryNavLinks = [
  { label: "Hoe het werkt", href: "/#hoe-het-werkt", sectionId: "hoe-het-werkt" },
  { label: "Sectoren", href: "/#sectoren", sectionId: "sectoren" },
  { label: "Tarieven", href: "/#tarieven", sectionId: "tarieven" },
  { label: "Ervaringen", href: "/#ervaringen", sectionId: "ervaringen" },
  { label: "Veelgestelde vragen", href: "/#faq", sectionId: "faq" },
] as const

const allNavLinks = [...primaryNavLinks, ...secondaryNavLinks]

const headerCtaGreen =
  "font-semibold whitespace-nowrap bg-brand-primary text-white border border-brand-primary hover:bg-brand-secondary hover:border-brand-secondary hover:text-white transition-colors"
const headerCtaBlue =
  "font-semibold whitespace-nowrap bg-brand-secondary text-white border border-brand-secondary hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-colors"

function NavItem({
  href,
  sectionId,
  activeSection,
  className,
  onClick,
  children,
}: {
  href: string
  sectionId: string
  activeSection: string | null
  className?: string
  onClick?: () => void
  children: React.ReactNode
}) {
  const isPageLink = href.startsWith("/") && !href.includes("#")

  if (isPageLink) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={className}
      aria-current={activeSection === sectionId ? "true" : undefined}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const sectionIds = allNavLinks
      .map((link) => link.sectionId)
      .filter((id) => id !== "diensten" && id !== "contact")

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.15, 0.4] }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const navLinkClass = (sectionId: string) =>
    cn(
      "text-sm font-medium transition-colors whitespace-nowrap",
      activeSection === sectionId
        ? "text-foreground"
        : "text-muted-foreground hover:text-foreground"
    )

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-[auto_1fr_auto] items-center gap-x-4 h-16">
          <BrandLogo href="/" size={36} wordmarkSize="sm" className="min-w-0" />

          <nav
            className="hidden lg:flex items-center justify-center gap-x-8 min-w-0"
            aria-label="Hoofdnavigatie"
          >
            {primaryNavLinks.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                sectionId={link.sectionId}
                activeSection={activeSection}
                className={navLinkClass(link.sectionId)}
              >
                {link.label}
              </NavItem>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 shrink-0">
            <div className="hidden md:flex items-center gap-2">
              <Button asChild size="sm" className={headerCtaGreen}>
                <Link href="/contact">Gratis gesprek</Link>
              </Button>
              <Button asChild size="sm" className={headerCtaBlue}>
                <a href="/#app">Download de app</a>
              </Button>
            </div>

            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-4 flex flex-col gap-1 border-t border-border pt-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground px-1 pb-1">
              Pagina&apos;s
            </p>
            {primaryNavLinks.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                sectionId={link.sectionId}
                activeSection={activeSection}
                className={cn(navLinkClass(link.sectionId), "py-2 px-1")}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavItem>
            ))}

            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground px-1 pt-3 pb-1">
              Homepage
            </p>
            {secondaryNavLinks.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                sectionId={link.sectionId}
                activeSection={activeSection}
                className={cn(navLinkClass(link.sectionId), "py-2 px-1")}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavItem>
            ))}

            <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-border">
              <Button asChild size="sm" className={headerCtaGreen}>
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Gratis gesprek
                </Link>
              </Button>
              <Button asChild size="sm" className={headerCtaBlue}>
                <a href="/#app" onClick={() => setMobileOpen(false)}>
                  Download de app
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
