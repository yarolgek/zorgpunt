import { AlertCircle, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { opdrachtgeverBoxHover } from "@/lib/role-hover"
import { siteContact } from "@/lib/site"

export function SpoedCallout() {
  return (
    <section
      className="py-6 border-y border-brand-secondary/20 bg-brand-secondary/5"
      aria-label="Spoedhulp voor opdrachtgevers"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 rounded-xl border border-border bg-background/80 p-5 shadow-sm",
            opdrachtgeverBoxHover
          )}
        >
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-secondary/15">
              <AlertCircle className="h-5 w-5 text-brand-secondary" aria-hidden />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm sm:text-base">
                Acute personeelsuitval of spoed?
              </p>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                Voor opdrachtgevers met urgente behoefte: bel ons direct of vraag
                met spoed een gesprek aan. Wij schakelen vaak sneller dan een
                traditioneel bureau.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:shrink-0 w-full sm:w-auto">
            <Button
              asChild
              variant="outline"
              className="border-brand-secondary/40 text-brand-secondary hover:bg-brand-secondary/10 font-semibold"
            >
              <a href={`tel:${siteContact.phone}`}>
                <Phone className="h-4 w-4" />
                {siteContact.phoneDisplay}
              </a>
            </Button>
            <Button asChild className="font-semibold">
              <a href="#contact-form?role=opdrachtgever">Spoed aanvragen</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-brand-primary/40 text-brand-primary hover:bg-brand-primary/10 font-semibold"
            >
              <a
                href={siteContact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp chat
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
