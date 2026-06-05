import type { Metadata } from "next"
import { LegalPage } from "@/components/landing/legal-page"
import { brand } from "@/lib/brand"

export const metadata: Metadata = {
  title: `Cookiebeleid — ${brand.name}`,
  robots: { index: false, follow: true },
}

export default function CookiesPage() {
  return (
    <LegalPage title="Cookiebeleid">
      <p>
        Dit is een tijdelijke placeholder. Beschrijf welke cookies en vergelijkbare
        technieken worden gebruikt (bijv. analytics), met opt-in waar vereist.
      </p>
      <p>
        De landingpagina gebruikt momenteel alleen functionele en analytische
        cookies waar van toepassing — werk dit document bij vóór livegang.
      </p>
    </LegalPage>
  )
}
