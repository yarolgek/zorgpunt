export interface ServiceArea {
  slug: string
  city: string
  province: string
  metaDescription: string
  intro: string
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: "roermond",
    city: "Roermond",
    province: "Limburg",
    metaDescription:
      "Zorgpersoneel nodig in Roermond? ZorgpuntConnect bemiddelt en detacheert gekwalificeerde zorgprofessionals vanuit ons kantoor in het centrum van Roermond.",
    intro:
      "ZorgpuntConnect is gevestigd in Roermond en bemiddelt zorgprofessionals voor zorgorganisaties in de stad en Midden-Limburg.",
  },
  {
    slug: "eindhoven",
    city: "Eindhoven",
    province: "Noord-Brabant",
    metaDescription:
      "Zorgpersoneel nodig in Eindhoven? ZorgpuntConnect bemiddelt gekwalificeerde zorgprofessionals voor instellingen in en rond Eindhoven.",
    intro:
      "ZorgpuntConnect bemiddelt en detacheert zorgprofessionals voor zorgorganisaties in Eindhoven en omgeving.",
  },
  {
    slug: "tilburg",
    city: "Tilburg",
    province: "Noord-Brabant",
    metaDescription:
      "Zorgpersoneel nodig in Tilburg? ZorgpuntConnect bemiddelt gekwalificeerde zorgprofessionals voor instellingen in en rond Tilburg.",
    intro:
      "ZorgpuntConnect bemiddelt en detacheert zorgprofessionals voor zorgorganisaties in Tilburg en omgeving.",
  },
  {
    slug: "breda",
    city: "Breda",
    province: "Noord-Brabant",
    metaDescription:
      "Zorgpersoneel nodig in Breda? ZorgpuntConnect bemiddelt gekwalificeerde zorgprofessionals voor instellingen in en rond Breda.",
    intro:
      "ZorgpuntConnect bemiddelt en detacheert zorgprofessionals voor zorgorganisaties in Breda en omgeving.",
  },
  {
    slug: "nijmegen",
    city: "Nijmegen",
    province: "Gelderland",
    metaDescription:
      "Zorgpersoneel nodig in Nijmegen? ZorgpuntConnect bemiddelt gekwalificeerde zorgprofessionals voor instellingen in en rond Nijmegen.",
    intro:
      "ZorgpuntConnect bemiddelt en detacheert zorgprofessionals voor zorgorganisaties in Nijmegen en omgeving.",
  },
  {
    slug: "arnhem",
    city: "Arnhem",
    province: "Gelderland",
    metaDescription:
      "Zorgpersoneel nodig in Arnhem? ZorgpuntConnect bemiddelt gekwalificeerde zorgprofessionals voor instellingen in en rond Arnhem.",
    intro:
      "ZorgpuntConnect bemiddelt en detacheert zorgprofessionals voor zorgorganisaties in Arnhem en omgeving.",
  },
  {
    slug: "s-hertogenbosch",
    city: "'s-Hertogenbosch",
    province: "Noord-Brabant",
    metaDescription:
      "Zorgpersoneel nodig in 's-Hertogenbosch? ZorgpuntConnect bemiddelt gekwalificeerde zorgprofessionals voor instellingen in en rond Den Bosch.",
    intro:
      "ZorgpuntConnect bemiddelt en detacheert zorgprofessionals voor zorgorganisaties in 's-Hertogenbosch en omgeving.",
  },
  {
    slug: "maastricht",
    city: "Maastricht",
    province: "Limburg",
    metaDescription:
      "Zorgpersoneel nodig in Maastricht? ZorgpuntConnect bemiddelt gekwalificeerde zorgprofessionals voor instellingen in en rond Maastricht.",
    intro:
      "ZorgpuntConnect bemiddelt en detacheert zorgprofessionals voor zorgorganisaties in Maastricht en omgeving.",
  },
  {
    slug: "venlo",
    city: "Venlo",
    province: "Limburg",
    metaDescription:
      "Zorgpersoneel nodig in Venlo? ZorgpuntConnect bemiddelt gekwalificeerde zorgprofessionals voor instellingen in en rond Venlo.",
    intro:
      "ZorgpuntConnect bemiddelt en detacheert zorgprofessionals voor zorgorganisaties in Venlo en omgeving.",
  },
  {
    slug: "sittard-geleen",
    city: "Sittard-Geleen",
    province: "Limburg",
    metaDescription:
      "Zorgpersoneel nodig in Sittard-Geleen? ZorgpuntConnect bemiddelt gekwalificeerde zorgprofessionals voor instellingen in en rond Sittard-Geleen.",
    intro:
      "ZorgpuntConnect bemiddelt en detacheert zorgprofessionals voor zorgorganisaties in Sittard-Geleen en omgeving.",
  },
  {
    slug: "helmond",
    city: "Helmond",
    province: "Noord-Brabant",
    metaDescription:
      "Zorgpersoneel nodig in Helmond? ZorgpuntConnect bemiddelt gekwalificeerde zorgprofessionals voor instellingen in en rond Helmond.",
    intro:
      "ZorgpuntConnect bemiddelt en detacheert zorgprofessionals voor zorgorganisaties in Helmond en omgeving.",
  },
]

export function getServiceAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug)
}

export function getAllServiceAreaSlugs(): string[] {
  return serviceAreas.map((area) => area.slug)
}
