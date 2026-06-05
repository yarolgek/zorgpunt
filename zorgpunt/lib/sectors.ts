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
