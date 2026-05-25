import type { Metadata } from "next"
import { LegalPage } from "@/components/landing/legal-page"
import { brand } from "@/lib/brand"

export const metadata: Metadata = {
  title: `Algemene voorwaarden — ${brand.name}`,
  robots: { index: false, follow: true },
}

export default function VoorwaardenPage() {
  return (
    <LegalPage title="Algemene voorwaarden">
      <p>
        Dit is een tijdelijke placeholder. Leg hier aansprakelijkheid,
        bemiddelingsvoorwaarden, tarieven en geschillenbeslechting vast vóór
        productie.
      </p>
      <p>
        Door gebruik te maken van {brand.name} gaat u akkoord met deze voorwaarden
        zodra de definitieve versie is gepubliceerd.
      </p>
    </LegalPage>
  )
}
