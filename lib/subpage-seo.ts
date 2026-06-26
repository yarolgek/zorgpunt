import { brand } from "@/lib/brand"
import type { RichAreaPage } from "@/lib/service-area-content/types"
import type { RichServicePage } from "@/lib/service-content/types"
import type { ServiceArea } from "@/lib/service-areas"
import type { Service, ServiceCategoryId } from "@/lib/services"

const REGION_LABEL = "Limburg en Noord-Brabant"
const HQ_CITY = "Roermond"
const SECTOR_CITY_HINT =
  "Eindhoven, Tilburg, Venlo, Roermond en omgeving"

export interface EnhancedSubpageSeo {
  title: string
  description: string
  h1: string
  primaryKeyword: string
}

function splitH1(h1: string): { head: string; tail: string } {
  const idx = h1.indexOf(":")
  if (idx === -1) return { head: h1, tail: "" }
  return { head: h1.slice(0, idx).trim(), tail: h1.slice(idx + 1).trim() }
}

function capitalizeFirst(text: string): string {
  if (!text) return text
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function hasRegionalMention(text: string): boolean {
  const lower = text.toLowerCase()
  return (
    lower.includes("roermond") ||
    lower.includes("limburg") ||
    lower.includes("noord-brabant") ||
    lower.includes("zuid-nederland")
  )
}

function buildServiceTitle(
  category: ServiceCategoryId,
  keyword: string,
  fallback: string
): string {
  switch (category) {
    case "core-staffing":
      return `Beste ${keyword} ${HQ_CITY} | ${brand.name} · Zorgpersoneel inhuren in ${REGION_LABEL}`
    case "sector-specific":
      return `Beste ${keyword} | ${brand.name} · Inzet in ${SECTOR_CITY_HINT}`
    case "operational-support":
      return `${keyword} | ${brand.name} · ${REGION_LABEL} vanuit ${HQ_CITY}`
    case "compliance-quality":
      return `${keyword} | ${brand.name} · Gecertificeerde zorgbemiddeling ${HQ_CITY} & ${REGION_LABEL}`
    default:
      return fallback
  }
}

function buildServiceH1(
  category: ServiceCategoryId,
  keyword: string,
  baseH1: string
): string {
  const { tail } = splitH1(baseH1)
  const suffix = tail ? `: ${tail}` : ""

  let h1: string
  switch (category) {
    case "core-staffing":
      h1 = `${keyword} in ${HQ_CITY} en regio${suffix}`
      break
    case "sector-specific":
      h1 = `${keyword} in Zuid-Nederland${suffix}`
      break
    case "operational-support":
      h1 = `${keyword} voor zorgorganisaties in ${REGION_LABEL}${suffix}`
      break
    case "compliance-quality":
      h1 = `${keyword} bij ${brand.name}${suffix}`
      break
    default:
      h1 = baseH1
  }
  return capitalizeFirst(h1)
}

function buildServiceDescription(
  category: ServiceCategoryId,
  base: string,
): string {
  if (hasRegionalMention(base)) return base

  if (category === "sector-specific") {
    return `${base} Actief in ${SECTOR_CITY_HINT}.`
  }

  return `${base} Vanuit ${HQ_CITY} actief in ${REGION_LABEL}.`
}

export function getEnhancedServiceSeo(
  service: Service,
  rich?: RichServicePage
): EnhancedSubpageSeo {
  const keyword = rich?.seo.primaryKeyword ?? service.title
  const baseTitle = rich?.seo.title ?? `${service.title}, ${brand.name}`
  const baseDescription = rich?.seo.description ?? service.metaDescription
  const baseH1 = rich?.seo.h1 ?? service.title

  return {
    title: buildServiceTitle(service.category, keyword, baseTitle),
    description: buildServiceDescription(service.category, baseDescription),
    h1: buildServiceH1(service.category, keyword, baseH1),
    primaryKeyword: keyword,
  }
}

export function getEnhancedAreaSeo(
  area: ServiceArea,
  rich?: RichAreaPage
): EnhancedSubpageSeo {
  const keyword = rich?.seo.primaryKeyword ?? `zorgpersoneel ${area.city}`
  const baseTitle = rich?.seo.title ?? `Zorgpersoneel ${area.city}, ${brand.name}`
  const baseDescription = rich?.seo.description ?? area.metaDescription
  const baseH1 = rich?.seo.h1 ?? `Zorgpersoneel in ${area.city}`

  const description = baseDescription.toLowerCase().includes("in de buurt")
    ? baseDescription
    : `${baseDescription} Zorgpersoneel in ${area.city} en omgeving, bij u in de buurt.`

  return {
    title: baseTitle,
    description,
    h1: baseH1,
    primaryKeyword: keyword,
  }
}

export const dienstenHubSeo = {
  title: `Beste zorgbemiddeling ${HQ_CITY} | Diensten ${brand.name} · ${REGION_LABEL}`,
  description: `Alle diensten van ${brand.name}: bemiddeling, detachering en werving van zorgprofessionals vanuit ${HQ_CITY}. Actief in ${REGION_LABEL} en omgeving.`,
  h1: `Zorgbemiddeling en detachering in ${HQ_CITY} en ${REGION_LABEL}`,
} as const

export const werkgebiedenHubSeo = {
  title: `Beste zorgbemiddeling werkgebieden | Zorgpersoneel in ${REGION_LABEL}, ${brand.name}`,
  description: `Zorgpersoneel nodig bij u in de buurt? ${brand.name} bemiddelt vanuit ${HQ_CITY} in Roermond, Eindhoven, Tilburg, Venlo, Maastricht en meer steden in ${REGION_LABEL}.`,
  h1: `Zorgpersoneel in ${HQ_CITY}, Limburg en Noord-Brabant`,
} as const
