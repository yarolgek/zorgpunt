export interface ServiceArea {
  slug: string
  city: string
  province: string
  /** City-centre coordinates for local SEO schema (contentLocation / areaServed). */
  geo: { latitude: number; longitude: number }
  metaDescription: string
  intro: string
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: "roermond",
    city: "Roermond",
    province: "Limburg",
    geo: { latitude: 51.19339, longitude: 5.988265 },
    metaDescription:
      "Zorgpersoneel nodig in Roermond? ZorgpuntConnect bemiddelt en detacheert gekwalificeerde zorgprofessionals vanuit ons kantoor in het centrum van Roermond.",
    intro:
      "ZorgpuntConnect is gevestigd in Roermond en bemiddelt zorgprofessionals voor zorgorganisaties in de stad en Midden-Limburg.",
  },
  {
    slug: "eindhoven",
    city: "Eindhoven",
    province: "Noord-Brabant",
    geo: { latitude: 51.448557, longitude: 5.450122 },
    metaDescription:
      "Zorgpersoneel nodig in Eindhoven? ZorgpuntConnect bemiddelt gekwalificeerde zorgprofessionals voor instellingen in en rond Eindhoven.",
    intro:
      "ZorgpuntConnect bemiddelt en detacheert zorgprofessionals voor zorgorganisaties in Eindhoven en omgeving.",
  },
  {
    slug: "tilburg",
    city: "Tilburg",
    province: "Noord-Brabant",
    geo: { latitude: 51.585619, longitude: 5.066062 },
    metaDescription:
      "Zorgpersoneel nodig in Tilburg? ZorgpuntConnect bemiddelt gekwalificeerde zorgprofessionals voor instellingen in en rond Tilburg.",
    intro:
      "ZorgpuntConnect bemiddelt en detacheert zorgprofessionals voor zorgorganisaties in Tilburg en omgeving.",
  },
  {
    slug: "breda",
    city: "Breda",
    province: "Noord-Brabant",
    geo: { latitude: 51.588785, longitude: 4.776024 },
    metaDescription:
      "Zorgpersoneel nodig in Breda? ZorgpuntConnect bemiddelt gekwalificeerde zorgprofessionals voor instellingen in en rond Breda.",
    intro:
      "ZorgpuntConnect bemiddelt en detacheert zorgprofessionals voor zorgorganisaties in Breda en omgeving.",
  },
  {
    slug: "nijmegen",
    city: "Nijmegen",
    province: "Gelderland",
    geo: { latitude: 51.842575, longitude: 5.838961 },
    metaDescription:
      "Zorgpersoneel nodig in Nijmegen? ZorgpuntConnect bemiddelt gekwalificeerde zorgprofessionals voor instellingen in en rond Nijmegen.",
    intro:
      "ZorgpuntConnect bemiddelt en detacheert zorgprofessionals voor zorgorganisaties in Nijmegen en omgeving.",
  },
  {
    slug: "arnhem",
    city: "Arnhem",
    province: "Gelderland",
    geo: { latitude: 51.984257, longitude: 5.910857 },
    metaDescription:
      "Zorgpersoneel nodig in Arnhem? ZorgpuntConnect bemiddelt gekwalificeerde zorgprofessionals voor instellingen in en rond Arnhem.",
    intro:
      "ZorgpuntConnect bemiddelt en detacheert zorgprofessionals voor zorgorganisaties in Arnhem en omgeving.",
  },
  {
    slug: "s-hertogenbosch",
    city: "'s-Hertogenbosch",
    province: "Noord-Brabant",
    geo: { latitude: 51.688939, longitude: 5.303116 },
    metaDescription:
      "Zorgpersoneel nodig in 's-Hertogenbosch? ZorgpuntConnect bemiddelt gekwalificeerde zorgprofessionals voor instellingen in en rond Den Bosch.",
    intro:
      "ZorgpuntConnect bemiddelt en detacheert zorgprofessionals voor zorgorganisaties in 's-Hertogenbosch en omgeving.",
  },
  {
    slug: "maastricht",
    city: "Maastricht",
    province: "Limburg",
    geo: { latitude: 50.857985, longitude: 5.696988 },
    metaDescription:
      "Zorgpersoneel nodig in Maastricht? ZorgpuntConnect bemiddelt gekwalificeerde zorgprofessionals voor instellingen in en rond Maastricht.",
    intro:
      "ZorgpuntConnect bemiddelt en detacheert zorgprofessionals voor zorgorganisaties in Maastricht en omgeving.",
  },
  {
    slug: "venlo",
    city: "Venlo",
    province: "Limburg",
    geo: { latitude: 51.392449, longitude: 6.151172 },
    metaDescription:
      "Zorgpersoneel nodig in Venlo? ZorgpuntConnect bemiddelt gekwalificeerde zorgprofessionals voor instellingen in en rond Venlo.",
    intro:
      "ZorgpuntConnect bemiddelt en detacheert zorgprofessionals voor zorgorganisaties in Venlo en omgeving.",
  },
  {
    slug: "sittard-geleen",
    city: "Sittard-Geleen",
    province: "Limburg",
    geo: { latitude: 50.997423, longitude: 5.866663 },
    metaDescription:
      "Zorgpersoneel nodig in Sittard-Geleen? ZorgpuntConnect bemiddelt gekwalificeerde zorgprofessionals voor instellingen in en rond Sittard-Geleen.",
    intro:
      "ZorgpuntConnect bemiddelt en detacheert zorgprofessionals voor zorgorganisaties in Sittard-Geleen en omgeving.",
  },
  {
    slug: "helmond",
    city: "Helmond",
    province: "Noord-Brabant",
    geo: { latitude: 51.473602, longitude: 5.667032 },
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
