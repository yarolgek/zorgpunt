import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServiceAreaPageContent } from "@/components/landing/service-area-page"
import { brand } from "@/lib/brand"
import { getAllServiceAreaSlugs, getServiceAreaBySlug } from "@/lib/service-areas"
import { getRichAreaContent } from "@/lib/service-area-content"
import { getEnhancedAreaSeo } from "@/lib/subpage-seo"
import { getSiteUrl } from "@/lib/site-url"
import {
  breadcrumbJsonLd,
  faqJsonLd,
  localBusinessJsonLd,
} from "@/lib/structured-data"

type PageProps = {
  params: Promise<{ slug: string }>
}

const BASE_URL = getSiteUrl()

export function generateStaticParams() {
  return getAllServiceAreaSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const area = getServiceAreaBySlug(slug)
  const rich = getRichAreaContent(slug)

  if (!area) {
    return { title: `Werkgebied niet gevonden, ${brand.name}` }
  }

  const seo = getEnhancedAreaSeo(area, rich)

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `/werkgebieden/${slug}/`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
      url: `${BASE_URL}/werkgebieden/${slug}/`,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, type: "image/png" }],
    },
  }
}

export default async function ServiceAreaPage({ params }: PageProps) {
  const { slug } = await params
  const area = getServiceAreaBySlug(slug)
  const rich = getRichAreaContent(slug)

  if (!area) {
    notFound()
  }

  const seo = getEnhancedAreaSeo(area, rich)

  const jsonLd: object[] = [
    localBusinessJsonLd({ baseUrl: BASE_URL, slug, area, rich }),
    breadcrumbJsonLd([
      { name: brand.name, url: `${BASE_URL}/` },
      { name: "Werkgebieden", url: `${BASE_URL}/werkgebieden/` },
      { name: area.city, url: `${BASE_URL}/werkgebieden/${slug}/` },
    ]),
  ]

  if (rich) {
    jsonLd.push(faqJsonLd(rich.faqs))
  }

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceAreaPageContent area={area} rich={rich} seo={seo} />
    </>
  )
}
