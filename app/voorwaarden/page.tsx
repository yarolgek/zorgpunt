import type { Metadata } from "next"
import { LegalPage } from "@/components/landing/legal-page"
import { VoorwaardenAppendices } from "@/components/landing/voorwaarden-appendices"
import { VoorwaardenContent } from "@/components/landing/voorwaarden-content"
import { brand } from "@/lib/brand"

export const metadata: Metadata = {
  title: `Algemene voorwaarden — ${brand.name}`,
  robots: { index: false, follow: true },
}

export default function VoorwaardenPage() {
  return (
    <LegalPage title="Algemene voorwaarden">
      <VoorwaardenContent />
      <VoorwaardenAppendices />
    </LegalPage>
  )
}
