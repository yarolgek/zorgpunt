/** Default werkgebieden linked from service pages (Limburg + Noord-Brabant focus). */
export const DEFAULT_SERVICE_AREA_SLUGS = [
  "roermond",
  "venlo",
  "eindhoven",
  "tilburg",
  "maastricht",
] as const

/**
 * SEO-focused city lists per dienst (search demand & sector clusters).
 * Not operational restrictions — all diensten remain broadly available.
 */
const SERVICE_AREA_OVERRIDES: Record<string, string[]> = {
  "bemiddeling-zzp-zorgprofessionals": [
    "roermond",
    "venlo",
    "eindhoven",
    "tilburg",
    "maastricht",
  ],
  "tussenkomst-zzp-zorgprofessionals": [
    "roermond",
    "venlo",
    "eindhoven",
    "tilburg",
    "s-hertogenbosch",
  ],
  "detachering-zorgpersoneel": [
    "roermond",
    "eindhoven",
    "tilburg",
    "venlo",
    "helmond",
  ],
  "onderaanneming-zorgopdrachten": [
    "roermond",
    "eindhoven",
    "tilburg",
    "venlo",
    "s-hertogenbosch",
  ],
  "werving-en-selectie": [
    "roermond",
    "eindhoven",
    "nijmegen",
    "tilburg",
    "arnhem",
  ],
  "ggz-personeel": [
    "roermond",
    "eindhoven",
    "nijmegen",
    "tilburg",
    "arnhem",
  ],
  "vvt-personeel": [
    "roermond",
    "venlo",
    "tilburg",
    "eindhoven",
    "maastricht",
  ],
  "ghz-personeel": [
    "roermond",
    "venlo",
    "maastricht",
    "eindhoven",
    "sittard-geleen",
  ],
  "zorgbeveiliging": [
    "roermond",
    "eindhoven",
    "nijmegen",
    "tilburg",
    "arnhem",
  ],
  "jeugdzorg-personeel": [
    "roermond",
    "eindhoven",
    "nijmegen",
    "tilburg",
    "arnhem",
  ],
  "sociaal-werk": [
    "roermond",
    "nijmegen",
    "eindhoven",
    "arnhem",
    "tilburg",
  ],
  "roosterplanning-personeelsbezetting": [
    "roermond",
    "eindhoven",
    "tilburg",
    "venlo",
    "helmond",
  ],
  "documentbeheer-verificatie-zorgprofessionals": [
    "roermond",
    "eindhoven",
    "tilburg",
    "venlo",
    "maastricht",
  ],
  "geautomatiseerde-facturatie-selfbilling": [
    "roermond",
    "eindhoven",
    "tilburg",
    "venlo",
    "helmond",
  ],
  "zpc-online-portaal-opdrachtgevers": [
    "roermond",
    "eindhoven",
    "tilburg",
    "venlo",
    "helmond",
  ],
  "api-koppelingen-zorgsystemen": [
    "roermond",
    "eindhoven",
    "tilburg",
    "venlo",
    "helmond",
  ],
  "rapportage-analyse-personeelsinzet": [
    "roermond",
    "eindhoven",
    "tilburg",
    "venlo",
    "helmond",
  ],
  "wet-dba-conforme-plaatsingen": [
    "roermond",
    "eindhoven",
    "tilburg",
    "venlo",
    "maastricht",
  ],
  "sna-nen-4400-1-gecertificeerde-bemiddeling": [
    "roermond",
    "eindhoven",
    "tilburg",
    "venlo",
    "maastricht",
  ],
  "nbbu-gecertificeerde-uitzendbureau-diensten": [
    "roermond",
    "eindhoven",
    "tilburg",
    "venlo",
    "maastricht",
  ],
  "kwaliteitscontrole-screening-zorgprofessionals": [
    "roermond",
    "eindhoven",
    "tilburg",
    "venlo",
    "maastricht",
  ],
  "klachtenafhandeling-klachtenportaal-zorg": [
    "roermond",
    "eindhoven",
    "tilburg",
    "venlo",
    "maastricht",
  ],
}

export function getServiceAreaSlugsForService(
  slug: string,
  explicit?: string[]
): string[] {
  if (explicit?.length) return explicit
  return SERVICE_AREA_OVERRIDES[slug] ?? [...DEFAULT_SERVICE_AREA_SLUGS]
}

/** Core diensten highlighted on the homepage. */
export const FEATURED_SERVICE_SLUGS = [
  "bemiddeling-zzp-zorgprofessionals",
  "detachering-zorgpersoneel",
  "werving-en-selectie",
  "tussenkomst-zzp-zorgprofessionals",
  "ggz-personeel",
  "vvt-personeel",
] as const

/** Featured diensten on hub pages (capped for subpage link budget). */
export const HUB_FEATURED_SERVICE_SLUGS = FEATURED_SERVICE_SLUGS.slice(0, 5)
