import { HeroSection } from "@/components/landing/hero-section"
import { MetricsSection } from "@/components/landing/metrics-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FaqSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"

export default function Page() {
  return (
    <>
      {/* Skip to main content - Accessibility */}
      <a
        href="#contact-form"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Direct naar contactformulier
      </a>

      <main>
        <HeroSection />
        <MetricsSection />
        <TestimonialsSection />
        <FaqSection />
      </main>

      <Footer />
    </>
  )
}
