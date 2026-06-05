import type { Metadata } from "next"
import { LegalPage } from "@/components/landing/legal-page"
import { brand } from "@/lib/brand"

export const metadata: Metadata = {
  title: `Privacybeleid — ${brand.name}`,
  robots: { index: false, follow: true },
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacybeleid">
      <p>
        Dit is een tijdelijke placeholder. Vul dit document aan met uw
        verwerkingsgrondslagen, bewaartermijnen, rechten van betrokkenen en
        contactgegevens van de functionaris/gegevensbeheerder vóór productie.
      </p>
      <p>
        {brand.name} verwerkt persoonsgegevens uitsluitend in het kader van
        bemiddeling tussen zorgorganisaties en zzp&apos;ers in de zorg, conform
        de AVG/GDPR.
      </p>
    </LegalPage>
  )
}
