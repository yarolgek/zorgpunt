import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { freelancerBoxHover, opdrachtgeverBoxHover } from "@/lib/role-hover"

const comparisonRows = [
  {
    label: "Adviesgesprek",
    zpc: "Gratis & vrijblijvend",
    bureau: "Vaak intakekosten",
  },
  {
    label: "Wanneer betaalt opdrachtgever?",
    zpc: "Pas bij succesvolle match",
    bureau: "Vaak vooraf of per uur bemiddeling",
  },
  {
    label: "Kosten voor zzp'ers",
    zpc: "Volledig gratis aanmelden",
    bureau: "Niet altijd gratis",
  },
]

export function PricingTrustSection() {
  return (
    <section
      id="tarieven"
      className="py-16 lg:py-24"
      aria-labelledby="tarieven-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2
            id="tarieven-heading"
            className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 text-balance"
          >
            Geen verrassingen
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Heldere afspraken voor opdrachtgevers en zzp&apos;ers — u betaalt pas
            bij een geslaagde match, aanmelden als zzp&apos;er is gratis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div
            className={cn(
              "rounded-xl border border-border bg-card p-6 lg:p-8 shadow-sm",
              opdrachtgeverBoxHover
            )}
          >
            <h3 className="font-semibold text-foreground text-lg mb-4">
              Voor opdrachtgevers
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <Check className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                <span>
                  Het eerste adviesgesprek met Lieke is <strong className="text-foreground font-medium">gratis</strong> en vrijblijvend.
                </span>
              </li>
              <li className="flex gap-2">
                <Check className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                <span>
                  U betaalt pas wanneer een zzp&apos;er daadwerkelijk bij u aan de slag gaat.
                </span>
              </li>
              <li className="flex gap-2">
                <Check className="h-4 w-4 text-brand-primary shrink-0 mt-0.5" />
                <span>Geen verborgen kosten — vooraf heldere afspraken.</span>
              </li>
            </ul>
          </div>

          <div
            className={cn(
              "rounded-xl border border-border bg-card p-6 lg:p-8 shadow-sm",
              freelancerBoxHover
            )}
          >
            <h3 className="font-semibold text-foreground text-lg mb-4">
              Voor zzp&apos;ers
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <Check className="h-4 w-4 text-brand-secondary shrink-0 mt-0.5" />
                <span>
                  Aanmelden en bemiddeling naar opdrachten is{" "}
                  <strong className="text-foreground font-medium">volledig gratis</strong>.
                </span>
              </li>
              <li className="flex gap-2">
                <Check className="h-4 w-4 text-brand-secondary shrink-0 mt-0.5" />
                <span>
                  Je bepaalt zelf je tarief en beschikbaarheid bij passende opdrachten.
                </span>
              </li>
              <li className="flex gap-2">
                <Check className="h-4 w-4 text-brand-secondary shrink-0 mt-0.5" />
                <span>Persoonlijke begeleiding door Lieke, zonder verplichtingen.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[480px] text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-4 font-semibold text-foreground w-[40%]">
                  &nbsp;
                </th>
                <th className="text-left p-4 font-semibold text-primary">
                  ZPC
                </th>
                <th className="text-left p-4 font-semibold text-muted-foreground">
                  Traditioneel bureau
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-0">
                  <td className="p-4 font-medium text-foreground">{row.label}</td>
                  <td className="p-4 text-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="h-4 w-4 text-primary shrink-0" />
                      {row.zpc}
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <X className="h-4 w-4 text-muted-foreground/60 shrink-0" />
                      {row.bureau}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" className="font-semibold">
            <a href="#contact-form">Start gratis gesprek</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
