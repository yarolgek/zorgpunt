import { brand } from "@/lib/brand"
import { getGoogleMapsPlaceUrl, siteContact } from "@/lib/site"
import { faqs } from "@/components/landing/faq-section"
import { testimonials } from "@/lib/testimonials"
import type { Service } from "@/lib/services"
import type { ServiceArea } from "@/lib/service-areas"
import type { RichServicePage } from "@/lib/service-content/types"
import type { RichAreaPage } from "@/lib/service-area-content/types"
import type { EnhancedSubpageSeo } from "@/lib/subpage-seo"

type FaqItem = { question: string; answer: string }
type Crumb = { name: string; url: string }

/** Stable @id for the Organization so other nodes can reference it. */
function orgId(baseUrl: string) {
  return `${baseUrl}/#organization`
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: siteContact.street,
  postalCode: siteContact.postalCode,
  addressLocality: siteContact.city,
  addressCountry: "NL",
}

export function organizationJsonLd(params: { baseUrl: string }) {
  const { baseUrl } = params

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId(baseUrl),
    name: brand.name,
    url: baseUrl,
    logo: `${baseUrl}/logo-zpc.png`,
    image: `${baseUrl}/logo-zpc.png`,
    telephone: siteContact.phone,
    email: siteContact.email,
    address: postalAddress,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteContact.phone,
        email: siteContact.email,
        contactType: "customer support",
        areaServed: "NL",
        availableLanguage: ["nl"],
      },
    ],
    ...(siteContact.socialProfiles.length
      ? { sameAs: siteContact.socialProfiles.map((profile) => profile.url) }
      : {}),
  }
}

const openingHoursSpecification = siteContact.openingHours.map((spec) => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: spec.days,
  opens: spec.opens,
  closes: spec.closes,
}))

/** Primary LocalBusiness entity for the homepage / GBP landing page. */
export function localBusinessHomeJsonLd(params: { baseUrl: string }) {
  const { baseUrl } = params
  const total = testimonials.reduce((sum, t) => sum + t.rating, 0)
  const average = Math.round((total / testimonials.length) * 10) / 10

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    name: brand.name,
    description: brand.tagline,
    url: baseUrl,
    telephone: siteContact.phone,
    email: siteContact.email,
    logo: `${baseUrl}/logo-zpc.png`,
    image: `${baseUrl}/logo-zpc.png`,
    priceRange: "€€",
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteContact.geo.latitude,
      longitude: siteContact.geo.longitude,
    },
    openingHoursSpecification,
    hasMap: getGoogleMapsPlaceUrl(),
    areaServed: [
      { "@type": "AdministrativeArea", name: "Limburg" },
      { "@type": "AdministrativeArea", name: "Noord-Brabant" },
    ],
    parentOrganization: { "@id": orgId(baseUrl) },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: average,
      bestRating: 5,
      worstRating: 1,
      reviewCount: testimonials.length,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: t.quote,
    })),
    ...(siteContact.socialProfiles.length
      ? { sameAs: siteContact.socialProfiles.map((profile) => profile.url) }
      : {}),
  }
}

export function websiteJsonLd(params: { baseUrl: string }) {
  const { baseUrl } = params

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: brand.name,
    url: baseUrl,
    inLanguage: "nl-NL",
    publisher: { "@id": orgId(baseUrl) },
  }
}

/** FAQPage built from the homepage FAQ list. */
export function faqPageJsonLd() {
  return faqJsonLd(faqs)
}

/** Generic FAQPage builder for any list of questions/answers. */
export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

/** BreadcrumbList from an ordered list of crumbs (first = home, last = current page). */
export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function serviceJsonLd(params: {
  baseUrl: string
  service: Service
  rich?: RichServicePage
  seo?: Pick<EnhancedSubpageSeo, "h1" | "description">
}) {
  const { baseUrl, service, rich, seo } = params

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: seo?.h1 ?? rich?.seo.h1 ?? service.title,
    serviceType: service.title,
    description: seo?.description ?? rich?.seo.description ?? service.metaDescription,
    provider: {
      "@type": "Organization",
      "@id": orgId(baseUrl),
      name: brand.name,
      url: baseUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    url: `${baseUrl}/diensten/${service.slug}/`,
  }
}

export function localBusinessJsonLd(params: {
  baseUrl: string
  slug: string
  area: ServiceArea
  rich?: RichAreaPage
}) {
  const { baseUrl, slug, area, rich } = params

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/werkgebieden/${slug}/#localbusiness`,
    name: brand.name,
    description: rich?.seo.description ?? area.metaDescription,
    url: `${baseUrl}/werkgebieden/${slug}/`,
    telephone: siteContact.phone,
    email: siteContact.email,
    image: `${baseUrl}/images/werkgebieden/${slug}.webp`,
    logo: `${baseUrl}/logo-zpc.png`,
    priceRange: "€€",
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteContact.geo.latitude,
      longitude: siteContact.geo.longitude,
    },
    openingHoursSpecification,
    areaServed: {
      "@type": "City",
      name: area.city,
    },
    parentOrganization: { "@id": orgId(baseUrl) },
    ...(siteContact.socialProfiles.length
      ? { sameAs: siteContact.socialProfiles.map((profile) => profile.url) }
      : {}),
  }
}
