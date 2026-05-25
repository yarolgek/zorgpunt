import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { SpoedCallout } from "@/components/landing/spoed-callout"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { MetricsSection } from "@/components/landing/metrics-section"
import { SectorsSection } from "@/components/landing/sectors-section"
import { PricingTrustSection } from "@/components/landing/pricing-trust-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FaqSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"
import { MobileCtaBar } from "@/components/landing/mobile-cta-bar"

export default function Page() {
  return (
    <>
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
        <HeroSection />
        <SpoedCallout />
        <HowItWorksSection />
        <MetricsSection />
        <SectorsSection />
        <PricingTrustSection />
        <TestimonialsSection />
        <FaqSection />
      </main>

      <MobileCtaBar />
      <Footer />
    </>
  )
}
