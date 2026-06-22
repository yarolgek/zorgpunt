import type { ReactNode } from "react"

export interface ServiceFaq {
  question: string
  answer: string
}

export interface ServiceSeo {
  title: string
  description: string
  h1: string
  primaryKeyword: string
  imageAlts: string[]
}

export interface RichServicePage {
  slug: string
  seo: ServiceSeo
  faqs: ServiceFaq[]
  relatedSlugs: string[]
  /** Optional werkgebied overrides; defaults apply when omitted. */
  relatedAreaSlugs?: string[]
  renderArticle: () => ReactNode
}
