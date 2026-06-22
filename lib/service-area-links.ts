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
    "breda",
    "s-hertogenbosch",
  ],
  "onderaanneming-zorgopdrachten": [
    "roermond",
    "eindhoven",
    "tilburg",
    "nijmegen",
    "s-hertogenbosch",
  ],
  "werving-en-selectie": [
    "roermond",
    "eindhoven",
    "nijmegen",
    "tilburg",
    "maastricht",
  ],
  "ggz-personeel": [
    "roermond",
    "eindhoven",
    "nijmegen",
    "arnhem",
    "maastricht",
  ],
  "vvt-personeel": [
    "roermond",
    "venlo",
    "tilburg",
    "breda",
    "maastricht",
  ],
  "ghz-personeel": [
    "roermond",
    "venlo",
    "maastricht",
    "eindhoven",
    "tilburg",
  ],
  "zorgbeveiliging": [
    "roermond",
    "eindhoven",
    "nijmegen",
    "arnhem",
    "s-hertogenbosch",
  ],
  "jeugdzorg-personeel": [
    "roermond",
    "eindhoven",
    "nijmegen",
    "tilburg",
    "s-hertogenbosch",
  ],
  "sociaal-werk": [
    "roermond",
    "nijmegen",
    "eindhoven",
    "tilburg",
    "s-hertogenbosch",
  ],
  "roosterplanning-personeelsbezetting": [
    "roermond",
    "eindhoven",
    "tilburg",
    "venlo",
    "maastricht",
  ],
  "documentbeheer-verificatie-zorgprofessionals": [
    "roermond",
    "eindhoven",
    "tilburg",
    "nijmegen",
    "maastricht",
  ],
  "geautomatiseerde-facturatie-selfbilling": [
    "roermond",
    "eindhoven",
    "tilburg",
    "venlo",
    "s-hertogenbosch",
  ],
  "zpc-online-portaal-opdrachtgevers": [
    "roermond",
    "eindhoven",
    "tilburg",
    "nijmegen",
    "maastricht",
  ],
  "api-koppelingen-zorgsystemen": [
    "roermond",
    "eindhoven",
    "tilburg",
    "nijmegen",
    "s-hertogenbosch",
  ],
  "rapportage-analyse-personeelsinzet": [
    "roermond",
    "eindhoven",
    "tilburg",
    "breda",
    "maastricht",
  ],
  "wet-dba-conforme-plaatsingen": [
    "roermond",
    "eindhoven",
    "tilburg",
    "venlo",
    "nijmegen",
  ],
  "sna-nen-4400-1-gecertificeerde-bemiddeling": [
    "roermond",
    "eindhoven",
    "tilburg",
    "maastricht",
    "venlo",
  ],
  "nbbu-gecertificeerde-uitzendbureau-diensten": [
    "roermond",
    "eindhoven",
    "tilburg",
    "s-hertogenbosch",
    "breda",
  ],
  "kwaliteitscontrole-screening-zorgprofessionals": [
    "roermond",
    "eindhoven",
    "tilburg",
    "nijmegen",
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
