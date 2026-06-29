import Link from "next/link"
import { Award, BadgeCheck, Building2 } from "lucide-react"
import { siteContact } from "@/lib/site"

const certifications = [
  {
    icon: Award,
    label: "SNA NEN 4400-1",
    description: "Gecertificeerde bemiddeling",
    href: "/diensten/sna-nen-4400-1-gecertificeerde-bemiddeling",
  },
  {
    icon: BadgeCheck,
    label: "NBBU-aangesloten",
    description: "Erkend uitzendbureau",
    href: "/diensten/nbbu-gecertificeerde-uitzendbureau-diensten",
  },
  {
    icon: Building2,
    label: `KvK ${siteContact.kvk}`,
    description: "Statutaire vestiging Roermond",
    href: "/contact",
  },
] as const

export function CertificationsSection() {
  return (
    <section
      className="py-10 lg:py-12 border-y border-border bg-background"
      aria-labelledby="certifications-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          id="certifications-heading"
          className="text-center text-xs font-semibold tracking-wider uppercase text-primary mb-6"
        >
          Gecertificeerd &amp; gecontroleerd
        </p>
        <ul className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
          {certifications.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex flex-col items-center text-center gap-2 rounded-xl border border-border bg-card p-4 h-full shadow-sm transition-colors hover:border-primary/30 hover:bg-card/80 no-underline hover:no-underline"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" aria-hidden />
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {item.label}
                  </span>
                  <span className="text-xs text-muted-foreground leading-snug">
                    {item.description}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
