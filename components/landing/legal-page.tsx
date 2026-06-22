import Link from "next/link"
import type { ReactNode } from "react"
import { brand } from "@/lib/brand"
import { Footer } from "@/components/landing/footer"

export function LegalPage({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
          <Link
            href="/"
            className="text-sm font-medium text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
          >
            &larr; Terug naar {brand.name}
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <h1 className="text-3xl font-semibold text-foreground mb-6">{title}</h1>
        <div className="prose prose-neutral max-w-none text-muted-foreground space-y-4 text-sm leading-relaxed">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
