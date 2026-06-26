import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServicePageContent } from "@/components/landing/service-page"
import { getRichServiceContent } from "@/lib/service-content"
import { brand } from "@/lib/brand"
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services"
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
} from "@/lib/structured-data"

import { getEnhancedServiceSeo } from "@/lib/subpage-seo"
import { getSiteUrl } from "@/lib/site-url"

type PageProps = {
  params: Promise<{ slug: string }>
}

const BASE_URL = getSiteUrl()

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  const rich = getRichServiceContent(slug)

  if (!service) {
    return { title: `Dienst niet gevonden, ${brand.name}` }
  }

  const seo = getEnhancedServiceSeo(service, rich)

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `/diensten/${slug}/`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: "website",
      url: `${BASE_URL}/diensten/${slug}/`,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, type: "image/png" }],
    },
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  const rich = getRichServiceContent(slug)

  if (!service) {
    notFound()
  }

  const seo = getEnhancedServiceSeo(service, rich)

  const jsonLd: object[] = [
    serviceJsonLd({ baseUrl: BASE_URL, service, rich, seo }),
    breadcrumbJsonLd([
      { name: brand.name, url: `${BASE_URL}/` },
      { name: "Diensten", url: `${BASE_URL}/diensten/` },
      { name: service.title, url: `${BASE_URL}/diensten/${slug}/` },
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
      <ServicePageContent service={service} rich={rich} seo={seo} />
    </>
  )
}
