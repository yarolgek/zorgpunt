import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { SpoedCallout } from "@/components/landing/spoed-callout"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { MetricsSection } from "@/components/landing/metrics-section"
import { SectorsSection } from "@/components/landing/sectors-section"
import { PricingTrustSection } from "@/components/landing/pricing-trust-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FaqSection } from "@/components/landing/faq-section"
import { AppDownloadSection } from "@/components/landing/app-download-section"
import { Footer } from "@/components/landing/footer"
import { MobileCtaBar } from "@/components/landing/mobile-cta-bar"
import { LocalLinksSection } from "@/components/landing/local-links-section"
import { CertificationsSection } from "@/components/landing/certifications-section"
import { CtaSection } from "@/components/landing/cta-section"
import { OfficeMapSection } from "@/components/landing/office-map-section"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import {
  faqPageJsonLd,
  localBusinessHomeJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/structured-data"
import { getSiteUrl } from "@/lib/site-url"

export default function Page() {
  const baseUrl = getSiteUrl()
  const jsonLd = [
    organizationJsonLd({ baseUrl }),
    localBusinessHomeJsonLd({ baseUrl }),
    websiteJsonLd({ baseUrl }),
    faqPageJsonLd(),
  ]

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Naar hoofdinhoud
      </a>
      <a
        href="#contact-form"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-52 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Direct naar contactformulier
      </a>

      <Header />

      <main id="main" className="pb-24 md:pb-0">
        <ScrollReveal>
          <HeroSection />
        </ScrollReveal>
        <ScrollReveal>
          <SpoedCallout />
        </ScrollReveal>
        <ScrollReveal>
          <HowItWorksSection />
        </ScrollReveal>
        <ScrollReveal>
          <MetricsSection />
        </ScrollReveal>
        <ScrollReveal>
          <CertificationsSection />
        </ScrollReveal>
        <ScrollReveal>
          <SectorsSection />
        </ScrollReveal>
        <ScrollReveal>
          <PricingTrustSection />
        </ScrollReveal>
        <ScrollReveal>
          <TestimonialsSection />
        </ScrollReveal>
        <ScrollReveal>
          <LocalLinksSection />
        </ScrollReveal>
        <ScrollReveal>
          <FaqSection />
        </ScrollReveal>
        <ScrollReveal>
          <OfficeMapSection />
        </ScrollReveal>
        <ScrollReveal>
          <AppDownloadSection />
        </ScrollReveal>
      </main>

      <MobileCtaBar />
      <CtaSection />
      <Footer />
    </>
  )
}
