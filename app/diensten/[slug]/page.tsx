import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ServicePageContent } from "@/components/landing/service-page"
import { getRichServiceContent } from "@/lib/service-content"
import { brand } from "@/lib/brand"
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services"

type PageProps = {
  params: Promise<{ slug: string }>
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zorgpuntconnect.nl"

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

  const title = rich?.seo.title ?? `${service.title}, ${brand.name}`
  const description = rich?.seo.description ?? service.metaDescription

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `${BASE_URL}/diensten/${slug}/`,
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

  const faqJsonLd = rich
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: rich.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: rich?.seo.h1 ?? service.title,
    description: rich?.seo.description ?? service.metaDescription,
    provider: {
      "@type": "Organization",
      name: brand.name,
      url: BASE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Nederland",
    },
    url: `${BASE_URL}/diensten/${slug}/`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
      <ServicePageContent service={service} rich={rich} />
    </>
  )
}
