import { Button } from "@/components/ui/button"

const footerLinks = [
  { label: "Hoe het werkt", href: "#hoe-het-werkt" },
  { label: "Ervaringen", href: "#ervaringen" },
  { label: "Veelgestelde vragen", href: "#faq" },
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
            Gratis adviesgesprek. Geen verplichtingen. Lieke helpt u persoonlijk verder.
          </p>
          <Button asChild size="lg" className="font-semibold mt-2">
            <a href="#contact-form">Start uw gratis gesprek</a>
          </Button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="font-semibold text-base text-foreground hover:text-primary transition-colors">
            <span className="text-primary font-bold">Zorg</span>Match
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Voetnav">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Legal */}
          <p className="text-xs text-muted-foreground text-center sm:text-right">
            &copy; {currentYear} ZorgMatch &middot; AVG/GDPR conform
          </p>
        </div>
      </div>
    </footer>
  )
}
