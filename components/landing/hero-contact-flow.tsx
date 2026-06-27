"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Briefcase, User } from "lucide-react"
import { ContactForm } from "@/components/landing/contact-form"
import {
  type ContactRole,
  parseRoleFromLocation,
  scrollToContactForm,
  syncRoleToUrl,
} from "@/lib/contact-form-url"
import { cn } from "@/lib/utils"

const audienceCards = [
  {
    role: "opdrachtgever" as const,
    title: "Voor Zorgorganisaties",
    description:
      "Snel gekwalificeerde zzp'ers voor uw afdeling of instelling, wij koppelen u aan gescreende professionals.",
    cta: "Vind zorgpersoneel",
    accent: "primary" as const,
    icon: Briefcase,
  },
  {
    role: "freelancer" as const,
    title: "Voor Zzp'ers",
    description:
      "Flexibele, goedbetaalde opdrachten in de zorg, bepaal zelf je uurtarief en waar je werkt.",
    cta: "Meld je aan",
    accent: "secondary" as const,
    icon: User,
  },
]

export function HeroContactFlow() {
  const [role, setRole] = useState<ContactRole | null>(null)

  useEffect(() => {
    const applyFromUrl = (shouldScroll: boolean) => {
      const roleFromUrl = parseRoleFromLocation()
      if (roleFromUrl) {
        setRole(roleFromUrl)
        if (shouldScroll && window.location.hash.includes("contact-form")) {
          scrollToContactForm(true)
        }
      }
    }

    applyFromUrl(false)

    const onHashChange = () => {
      const roleFromUrl = parseRoleFromLocation()
      if (roleFromUrl) {
        setRole(roleFromUrl)
        scrollToContactForm(true)
      } else if (!window.location.hash.includes("contact-form")) {
        setRole(null)
      }
    }

    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  const selectRole = (selected: ContactRole) => {
    setRole(selected)
    syncRoleToUrl(selected)
    scrollToContactForm(true)
  }

  const clearRole = () => {
    setRole(null)
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}#contact-form`
    )
  }

  return (
    <div id="contact-form" className="scroll-mt-24 flex flex-col gap-6 lg:gap-8">
      {!role ? (
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
              Stap 1 van 3
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
              Wie bent u?
            </h2>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              Zoekt u zorgprofessionals, of bent u er zelf een?
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {audienceCards.map((card) => {
              const Icon = card.icon
              const isPrimary = card.accent === "primary"
              return (
                <button
                  key={card.role}
                  type="button"
                  onClick={() => selectRole(card.role)}
                  className={cn(
                    "group flex flex-col rounded-2xl border-2 p-6 lg:p-8 min-h-[220px] sm:min-h-[240px] text-left",
                    "shadow-md transition-all duration-200",
                    "hover:shadow-xl hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                    isPrimary
                      ? "border-brand-primary/30 bg-background/90 backdrop-blur-sm hover:border-brand-primary hover:bg-background/95 focus-visible:ring-brand-primary"
                      : "border-brand-secondary/30 bg-background/90 backdrop-blur-sm hover:border-brand-secondary hover:bg-background/95 focus-visible:ring-brand-secondary"
                  )}
                >
                  <div
                    className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors",
                      isPrimary
                        ? "bg-brand-primary/15 group-hover:bg-brand-primary/25"
                        : "bg-brand-secondary/15 group-hover:bg-brand-secondary/25"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-7 h-7",
                        isPrimary ? "text-brand-primary" : "text-brand-secondary"
                      )}
                      strokeWidth={2}
                      aria-hidden
                    />
                  </div>
                  <h3
                    className={cn(
                      "text-lg font-bold leading-tight",
                      isPrimary ? "text-brand-primary" : "text-brand-secondary"
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
                        ? "bg-brand-primary text-white group-hover:bg-brand-primary/90"
                        : "bg-brand-secondary text-white group-hover:bg-brand-secondary/90"
                    )}
                  >
                    {card.cta}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      ) : (
        <ContactForm role={role} onRoleClear={clearRole} />
      )}

      <div className="flex items-center gap-4 rounded-xl border border-border/60 bg-background/70 backdrop-blur-sm px-4 py-3 max-w-xl">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-primary/25 shadow-sm ring-2 ring-background">
          <Image
            src="/images/lieke-avatar.jpg"
            alt="Lieke - Persoonlijke zorgadviseur bij ZorgpuntConnect"
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-foreground">Lieke</p>
          <p className="text-xs text-muted-foreground italic leading-relaxed">
            &quot;Ik help u persoonlijk om de perfecte match te vinden.&quot;
          </p>
        </div>
      </div>
    </div>
  )
}
