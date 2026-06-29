import type { LucideIcon } from "lucide-react"
import {
  Accessibility,
  Brain,
  Building2,
  HeartPulse,
  Home,
  Users,
} from "lucide-react"

export const opdrachtgeverNiches = [
  { value: "thuiszorg", label: "Thuiszorg" },
  { value: "verpleging", label: "Verpleging & Verzorging" },
  { value: "gehandicaptenzorg", label: "Gehandicaptenzorg" },
  { value: "ggz", label: "GGZ / Psychische zorg" },
  { value: "jeugdzorg", label: "Jeugdzorg" },
  { value: "ouderenzorg", label: "Ouderenzorg" },
  { value: "anders", label: "Anders" },
] as const

/** Service types shown in the contact form for both opdrachtgever and zzp'er. */
export const serviceCategories = [
  { value: "bemiddeling", label: "Bemiddeling" },
  { value: "detacheren", label: "Detacheren" },
  { value: "onderaanneming", label: "Onderaanneming" },
  { value: "bemiddeling-met-tussenkomst", label: "Bemiddeling met tussenkomst" },
] as const

export const freelancerNiches = [
  { value: "verpleegkundige", label: "Verpleegkundige" },
  { value: "verzorgende", label: "Verzorgende IG" },
  { value: "begeleider", label: "Begeleider / SPH" },
  { value: "psycholoog", label: "Psycholoog / GZ" },
  { value: "fysiotherapeut", label: "Fysiotherapeut" },
  { value: "jeugdhulpverlener", label: "Jeugdhulpverlener" },
  { value: "anders", label: "Anders" },
] as const

const sectorIcons: Record<string, LucideIcon> = {
  thuiszorg: Home,
  verpleging: HeartPulse,
  gehandicaptenzorg: Accessibility,
  ggz: Brain,
  jeugdzorg: Users,
  ouderenzorg: Building2,
}

/** Sectors shown on the landing page (matches opdrachtgever form niches). */
export const landingSectors = opdrachtgeverNiches
  .filter((n) => n.value !== "anders")
  .map((niche) => ({
    ...niche,
    icon: sectorIcons[niche.value] ?? HeartPulse,
  }))

/** Landing sector tiles → diensten detail pages. */
export const sectorServiceLinks: Record<string, string> = {
  thuiszorg: "/diensten/vvt-personeel",
  verpleging: "/diensten/vvt-personeel",
  gehandicaptenzorg: "/diensten/ghz-personeel",
  ggz: "/diensten/ggz-personeel",
  jeugdzorg: "/diensten/jeugdzorg-personeel",
  ouderenzorg: "/diensten/vvt-personeel",
}
