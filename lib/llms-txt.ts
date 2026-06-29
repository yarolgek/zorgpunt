import { brand } from "@/lib/brand"
import { siteContact } from "@/lib/site"
import { serviceCategories, services } from "@/lib/services"
import { serviceAreas } from "@/lib/service-areas"
import { getSiteUrl } from "@/lib/site-url"

function truncate(text: string, max = 120): string {
  if (text.length <= max) return text
  return `${text.slice(0, max - 1).trimEnd()}…`
}

function link(
  baseUrl: string,
  path: string,
  title: string,
  note?: string
): string {
  const url = `${baseUrl}${path}`
  return note ? `- [${title}](${url}): ${note}` : `- [${title}](${url})`
}

/** Markdown discovery file for AI crawlers and agents (llms.txt convention). */
export function generateLlmsTxt(): string {
  const baseUrl = getSiteUrl()
  const lines: string[] = []

  lines.push(`# ${brand.name}`)
  lines.push("")
  lines.push(`> ${brand.tagline}`)
  lines.push("")
  lines.push(
    `${brand.name} is een SNA-gecertificeerde zorgbemiddelaar in Roermond. Wij bemiddelen, detacheren en werven ZZP-zorgprofessionals voor zorgorganisaties in Limburg, Noord-Brabant en Gelderland.`
  )
  lines.push("")
  lines.push(`- Website: ${baseUrl}/`)
  lines.push(`- Telefoon: ${siteContact.phoneDisplay}`)
  lines.push(`- E-mail: ${siteContact.email}`)
  lines.push(
    `- Adres: ${siteContact.street}, ${siteContact.postalCode} ${siteContact.city}`
  )
  lines.push(`- KvK: ${siteContact.kvk}`)
  lines.push("")

  lines.push("## Belangrijkste pagina's")
  lines.push("")
  lines.push(
    link(
      baseUrl,
      "/",
      "Homepage",
      "Zorgbemiddeling Roermond, Limburg en Noord-Brabant"
    )
  )
  lines.push(link(baseUrl, "/diensten/", "Diensten overzicht"))
  lines.push(link(baseUrl, "/werkgebieden/", "Werkgebieden overzicht"))
  lines.push(
    link(
      baseUrl,
      "/contact/",
      "Contact",
      `NAP en contactformulier, ${siteContact.city}`
    )
  )
  lines.push("")

  for (const category of serviceCategories) {
    const categoryServices = services.filter((s) => s.category === category.id)
    if (categoryServices.length === 0) continue

    lines.push(`## ${category.label}`)
    lines.push("")
    for (const service of categoryServices) {
      lines.push(
        link(
          baseUrl,
          `/diensten/${service.slug}/`,
          service.title,
          truncate(service.metaDescription)
        )
      )
    }
    lines.push("")
  }

  lines.push("## Werkgebieden")
  lines.push("")
  for (const area of serviceAreas) {
    lines.push(
      link(
        baseUrl,
        `/werkgebieden/${area.slug}/`,
        `Zorgbemiddeling ${area.city}`,
        truncate(area.metaDescription)
      )
    )
  }
  lines.push("")

  lines.push("## Technisch")
  lines.push("")
  lines.push(`- [XML sitemap](${baseUrl}/sitemap.xml)`)
  lines.push(`- [robots.txt](${baseUrl}/robots.txt)`)
  lines.push("")

  return lines.join("\n")
}
