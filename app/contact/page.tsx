import type { Metadata } from "next"
import { ContactPageContent } from "@/components/landing/contact-page"
import { contactPageJsonLd } from "@/lib/structured-data"
import { contactSeo } from "@/lib/subpage-seo"
import { getSiteUrl } from "@/lib/site-url"

const BASE_URL = getSiteUrl()

export const metadata: Metadata = {
  title: contactSeo.title,
  description: contactSeo.description,
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    title: contactSeo.title,
    description: contactSeo.description,
    type: "website",
    url: `${BASE_URL}/contact/`,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, type: "image/png" }],
  },
}

export default function ContactPage() {
  const jsonLd = contactPageJsonLd({ baseUrl: BASE_URL })

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactPageContent />
    </>
  )
}
