import { brand } from "@/lib/brand"
import { siteContact } from "@/lib/site"
import { faqs } from "@/components/landing/faq-section"

export function organizationJsonLd(params: { baseUrl: string }) {
  const { baseUrl } = params

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    url: baseUrl,
    logo: `${baseUrl}/logo-zpc.png`,
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
  }
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

