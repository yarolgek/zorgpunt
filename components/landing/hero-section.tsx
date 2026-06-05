import Image from "next/image"
import { ContactForm } from "./contact-form"
import { brand } from "@/lib/brand"
import { cn } from "@/lib/utils"

const audienceCards = [
  {
    role: "opdrachtgever" as const,
    title: "Voor Zorgorganisaties",
    description:
      "Snel gekwalificeerde zzp'ers nodig voor uw afdeling of instelling? Wij koppelen u snel aan gescreende professionals.",
    cta: "Vind zorgpersoneel",
    accent: "primary" as const,
  },
  {
    role: "freelancer" as const,
    title: "Voor zzp'ers",
    description:
      "Op zoek naar flexibele en goedbetaalde opdrachten in de zorg? Bepaal zelf je uurtarief en waar je werkt.",
    cta: "Meld je aan als zzp'er",
    accent: "secondary" as const,
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

            <div className="grid sm:grid-cols-2 gap-4">
              {audienceCards.map((card) => (
                <a
                  key={card.role}
                  href={`#contact-form?role=${card.role}`}
                  className={cn(
                    "group p-5 rounded-xl border border-border bg-card/80 backdrop-blur-sm flex flex-col justify-between gap-3 cursor-pointer block",
                    "shadow-sm transition-all duration-200",
                    "hover:shadow-md hover:-translate-y-0.5",
                    card.accent === "primary"
                      ? "hover:border-[#759940]/50 hover:bg-[#759940]/[0.03]"
                      : "hover:border-[#006aa5]/50 hover:bg-[#006aa5]/[0.03]"
                  )}
                >
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {card.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "text-xs font-semibold group-hover:underline inline-flex items-center gap-1 mt-1 transition-colors",
                      card.accent === "primary"
                        ? "text-[#759940]"
                        : "text-[#006aa5]"
                    )}
                  >
                    {card.cta} &rarr;
                  </span>
                </a>
              ))}
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
