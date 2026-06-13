"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { BrandLogo } from "@/components/landing/brand-logo"

const navLinks = [
  { label: "Hoe het werkt", href: "#hoe-het-werkt", sectionId: "hoe-het-werkt" },
  { label: "Sectoren", href: "#sectoren", sectionId: "sectoren" },
  { label: "Tarieven", href: "#tarieven", sectionId: "tarieven" },
  { label: "Ervaringen", href: "#ervaringen", sectionId: "ervaringen" },
  { label: "Vragen", href: "#faq", sectionId: "faq" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.sectionId)
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
      "text-sm font-medium transition-colors",
      activeSection === sectionId
        ? "text-foreground"
        : "text-muted-foreground hover:text-foreground"
    )

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <BrandLogo size={36} />

          <nav className="hidden lg:flex items-center gap-6" aria-label="Hoofdnavigatie">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={navLinkClass(link.sectionId)}
                aria-current={activeSection === link.sectionId ? "true" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild size="sm" className="font-semibold">
              <a href="#app">Download de app</a>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden pb-4 flex flex-col gap-3 border-t border-border pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(navLinkClass(link.sectionId), "py-1")}
                aria-current={activeSection === link.sectionId ? "true" : undefined}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm" className="font-semibold w-full mt-2">
              <a href="#app" onClick={() => setMobileOpen(false)}>
                Download de app
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
