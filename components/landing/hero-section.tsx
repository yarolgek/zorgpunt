import Image from "next/image"
import { Briefcase, User } from "lucide-react"
import { ContactForm } from "./contact-form"
import { brand } from "@/lib/brand"
import { cn } from "@/lib/utils"

const audienceCards = [
  {
    role: "opdrachtgever" as const,
    title: "Voor Zorgorganisaties",
    description:
      "Snel gekwalificeerde zzp'ers voor uw afdeling of instelling — wij koppelen u aan gescreende professionals.",
    cta: "Vind zorgpersoneel",
    accent: "primary" as const,
    icon: Briefcase,
  },
  {
    role: "freelancer" as const,
    title: "Voor Zzp'ers",
    description:
      "Flexibele, goedbetaalde opdrachten in de zorg — bepaal zelf je uurtarief en waar je werkt.",
    cta: "Meld je aan",
    accent: "secondary" as const,
    icon: User,
  },
]

export function HeroSection() {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-brand-secondary/[0.06]"
        aria-hidden
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="flex flex-col gap-6 lg:max-w-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight text-foreground text-balance">
              De match die wél werkt in de zorg
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {brand.tagline}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {audienceCards.map((card) => {
                const Icon = card.icon
                const isPrimary = card.accent === "primary"
                return (
                  <a
                    key={card.role}
                    href={`#contact-form?role=${card.role}`}
                    className={cn(
                      "group flex flex-col rounded-2xl border-2 p-6 lg:p-7 min-h-[220px] sm:min-h-[240px]",
                      "shadow-md transition-all duration-200",
                      "hover:shadow-xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                      isPrimary
                        ? "border-primary/30 bg-primary/[0.06] hover:border-primary hover:bg-primary/[0.1] focus-visible:ring-primary"
                        : "border-brand-secondary/30 bg-brand-secondary/[0.06] hover:border-brand-secondary hover:bg-brand-secondary/[0.1] focus-visible:ring-brand-secondary"
                    )}
                  >
                    <div
                      className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors",
                        isPrimary
                          ? "bg-primary/15 group-hover:bg-primary/25"
                          : "bg-brand-secondary/15 group-hover:bg-brand-secondary/25"
                      )}
                    >
                      <Icon
                        className={cn(
                          "w-7 h-7",
                          isPrimary ? "text-primary" : "text-brand-secondary"
                        )}
                        strokeWidth={2}
                        aria-hidden
                      />
                    </div>
                    <h3
                      className={cn(
                        "text-lg font-bold leading-tight",
                        isPrimary ? "text-primary" : "text-brand-secondary"
                      )}
                    >
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">
                      {card.description}
                    </p>
                    <span
                      className={cn(
                        "mt-5 w-full inline-flex items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold transition-colors",
                        isPrimary
                          ? "bg-primary text-primary-foreground group-hover:bg-primary/90"
                          : "bg-brand-secondary text-white group-hover:bg-brand-secondary/90"
                      )}
                    >
                      {card.cta}
                    </span>
                  </a>
                )
              })}
            </div>

            <div className="flex items-center gap-4 pt-1">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/25 shadow-md flex-shrink-0 ring-2 ring-background">
                <Image
                  src="/images/lieke-avatar.jpg"
                  alt="Lieke - Persoonlijke zorgadviseur bij ZorgpuntConnect"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <p className="text-sm font-medium text-foreground">Lieke</p>
                <p className="text-xs text-muted-foreground italic leading-relaxed">
                  &quot;Ik help u persoonlijk om de perfecte match te vinden.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="lg:pl-4 xl:pl-8 lg:sticky lg:top-24">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
