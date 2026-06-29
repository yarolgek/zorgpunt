import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CtaSectionProps {
  className?: string
}

export function CtaSection({ className }: CtaSectionProps) {
  return (
    <section
      className={
        className ??
        "py-12 lg:py-14 border-t border-border bg-muted/30"
      }
      aria-labelledby="cta-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4 text-center">
        <h2
          id="cta-heading"
          className="text-xl sm:text-2xl font-semibold text-foreground text-balance"
        >
          Klaar om de juiste match te vinden?
        </h2>
        <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
          Gratis adviesgesprek. Geen verplichtingen. Lieke helpt u persoonlijk
          verder.
        </p>
        <Button asChild size="lg" className="font-semibold mt-1">
          <Link href="/contact#contact-form">Start uw gratis gesprek</Link>
        </Button>
      </div>
    </section>
  )
}
