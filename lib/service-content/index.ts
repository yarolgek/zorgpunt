import { ggzPersoneelContent } from "@/lib/service-content/sector/ggz-personeel"
import { vvtPersoneelContent } from "@/lib/service-content/sector/vvt-personeel"
import { ghzPersoneelContent } from "@/lib/service-content/sector/ghz-personeel"
import { zorgbeveiligingContent } from "@/lib/service-content/sector/zorgbeveiliging"
import { jeugdzorgPersoneelContent } from "@/lib/service-content/sector/jeugdzorg-personeel"
import { sociaalWerkContent } from "@/lib/service-content/sector/sociaal-werk"
import type { RichServicePage } from "@/lib/service-content/types"

const richContentBySlug: Record<string, RichServicePage> = {
  [ggzPersoneelContent.slug]: ggzPersoneelContent,
  [vvtPersoneelContent.slug]: vvtPersoneelContent,
  [ghzPersoneelContent.slug]: ghzPersoneelContent,
  [zorgbeveiligingContent.slug]: zorgbeveiligingContent,
  [jeugdzorgPersoneelContent.slug]: jeugdzorgPersoneelContent,
  [sociaalWerkContent.slug]: sociaalWerkContent,
}

export function getRichServiceContent(slug: string): RichServicePage | undefined {
  return richContentBySlug[slug]
}

export function getAllRichServiceSlugs(): string[] {
  return Object.keys(richContentBySlug)
}
