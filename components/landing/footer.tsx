import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 lg:py-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* CTA #3 */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-lg font-medium text-foreground">
              Klaar om de juiste zorg te vinden?
            </p>
            <Button asChild size="lg" className="font-semibold">
              <a href="#contact-form">Start uw gratis gesprek</a>
            </Button>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-border my-4" />

          {/* Legal/Trust text */}
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              ZorgMatch respecteert uw privacy. Wij verwerken uw gegevens conform
              de AVG/GDPR.
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} ZorgMatch. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
