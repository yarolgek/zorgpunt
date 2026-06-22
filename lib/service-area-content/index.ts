import { roermondContent } from "@/lib/service-area-content/roermond"
import { eindhovenContent } from "@/lib/service-area-content/eindhoven"
import { tilburgContent } from "@/lib/service-area-content/tilburg"
import { bredaContent } from "@/lib/service-area-content/breda"
import { nijmegenContent } from "@/lib/service-area-content/nijmegen"
import { arnhemContent } from "@/lib/service-area-content/arnhem"
import { denBoschContent } from "@/lib/service-area-content/s-hertogenbosch"
import { maastrichtContent } from "@/lib/service-area-content/maastricht"
import { venloContent } from "@/lib/service-area-content/venlo"
import { sittardGeleenContent } from "@/lib/service-area-content/sittard-geleen"
import { helmondContent } from "@/lib/service-area-content/helmond"
import type { RichAreaPage } from "@/lib/service-area-content/types"

const richAreaBySlug: Record<string, RichAreaPage> = {
  [roermondContent.slug]: roermondContent,
  [eindhovenContent.slug]: eindhovenContent,
  [tilburgContent.slug]: tilburgContent,
  [bredaContent.slug]: bredaContent,
  [nijmegenContent.slug]: nijmegenContent,
  [arnhemContent.slug]: arnhemContent,
  [denBoschContent.slug]: denBoschContent,
  [maastrichtContent.slug]: maastrichtContent,
  [venloContent.slug]: venloContent,
  [sittardGeleenContent.slug]: sittardGeleenContent,
  [helmondContent.slug]: helmondContent,
}

export function getRichAreaContent(slug: string): RichAreaPage | undefined {
  return richAreaBySlug[slug]
}

export function getAllRichAreaSlugs(): string[] {
  return Object.keys(richAreaBySlug)
}
