/** Canonical product branding */
import { activeRegionLabel } from "@/lib/regions"

export const brand = {
  /** Display name: only Z and C are capital letters */
  name: "ZorgpuntConnect",
  shortName: "ZPC",
  colors: {
    wordmarkGreen: "#759940",
    wordmarkBlue: "#006AA5",
  },
  tagline: `ZorgpuntConnect brengt gekwalificeerde zzp'ers en zorgorganisaties samen in ${activeRegionLabel}. Snel, persoonlijk en betrouwbaar.`,
  metaTitle: "ZorgpuntConnect (ZPC), Zorgbemiddeling voor zzp'ers",
} as const
