import { bemiddelingZzpContent } from "@/lib/service-content/core/bemiddeling-zzp-zorgprofessionals"
import { tussenkomstZzpContent } from "@/lib/service-content/core/tussenkomst-zzp-zorgprofessionals"
import { detacheringContent } from "@/lib/service-content/core/detachering-zorgpersoneel"
import { onderaannemingContent } from "@/lib/service-content/core/onderaanneming-zorgopdrachten"
import { wervingSelectieContent } from "@/lib/service-content/core/werving-en-selectie"
import { ggzPersoneelContent } from "@/lib/service-content/sector/ggz-personeel"
import { vvtPersoneelContent } from "@/lib/service-content/sector/vvt-personeel"
import { ghzPersoneelContent } from "@/lib/service-content/sector/ghz-personeel"
import { zorgbeveiligingContent } from "@/lib/service-content/sector/zorgbeveiliging"
import { jeugdzorgPersoneelContent } from "@/lib/service-content/sector/jeugdzorg-personeel"
import { sociaalWerkContent } from "@/lib/service-content/sector/sociaal-werk"
import { roosterplanningContent } from "@/lib/service-content/operational/roosterplanning-personeelsbezetting"
import { documentbeheerContent } from "@/lib/service-content/operational/documentbeheer-verificatie-zorgprofessionals"
import { facturatieContent } from "@/lib/service-content/operational/geautomatiseerde-facturatie-selfbilling"
import { portaalContent } from "@/lib/service-content/operational/zpc-online-portaal-opdrachtgevers"
import { apiKoppelingenContent } from "@/lib/service-content/operational/api-koppelingen-zorgsystemen"
import { rapportageContent } from "@/lib/service-content/operational/rapportage-analyse-personeelsinzet"
import { wetDbaContent } from "@/lib/service-content/compliance/wet-dba-conforme-plaatsingen"
import { snaContent } from "@/lib/service-content/compliance/sna-nen-4400-1-gecertificeerde-bemiddeling"
import { nbbuContent } from "@/lib/service-content/compliance/nbbu-gecertificeerde-uitzendbureau-diensten"
import { kwaliteitscontroleContent } from "@/lib/service-content/compliance/kwaliteitscontrole-screening-zorgprofessionals"
import { klachtenContent } from "@/lib/service-content/compliance/klachtenafhandeling-klachtenportaal-zorg"
import type { RichServicePage } from "@/lib/service-content/types"

const richContentBySlug: Record<string, RichServicePage> = {
  [bemiddelingZzpContent.slug]: bemiddelingZzpContent,
  [tussenkomstZzpContent.slug]: tussenkomstZzpContent,
  [detacheringContent.slug]: detacheringContent,
  [onderaannemingContent.slug]: onderaannemingContent,
  [wervingSelectieContent.slug]: wervingSelectieContent,
  [ggzPersoneelContent.slug]: ggzPersoneelContent,
  [vvtPersoneelContent.slug]: vvtPersoneelContent,
  [ghzPersoneelContent.slug]: ghzPersoneelContent,
  [zorgbeveiligingContent.slug]: zorgbeveiligingContent,
  [jeugdzorgPersoneelContent.slug]: jeugdzorgPersoneelContent,
  [sociaalWerkContent.slug]: sociaalWerkContent,
  [roosterplanningContent.slug]: roosterplanningContent,
  [documentbeheerContent.slug]: documentbeheerContent,
  [facturatieContent.slug]: facturatieContent,
  [portaalContent.slug]: portaalContent,
  [apiKoppelingenContent.slug]: apiKoppelingenContent,
  [rapportageContent.slug]: rapportageContent,
  [wetDbaContent.slug]: wetDbaContent,
  [snaContent.slug]: snaContent,
  [nbbuContent.slug]: nbbuContent,
  [kwaliteitscontroleContent.slug]: kwaliteitscontroleContent,
  [klachtenContent.slug]: klachtenContent,
}

export function getRichServiceContent(slug: string): RichServicePage | undefined {
  return richContentBySlug[slug]
}

export function getAllRichServiceSlugs(): string[] {
  return Object.keys(richContentBySlug)
}
