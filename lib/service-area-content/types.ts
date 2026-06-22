import type { ReactNode } from "react"

export interface AreaFaq {
  question: string
  answer: string
}

export interface AreaSeo {
  title: string
  description: string
  h1: string
  primaryKeyword: string
  imageAlts: string[]
}

export interface RichAreaPage {
  slug: string
  seo: AreaSeo
  faqs: AreaFaq[]
  relatedAreaSlugs: string[]
  /** Approximate distance/travel from Roermond, used in proximity proof and schema. */
  proximity: string
  renderArticle: () => ReactNode
}
