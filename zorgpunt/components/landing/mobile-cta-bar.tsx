"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function MobileCtaBar() {
  const [formInView, setFormInView] = useState(false)

  useEffect(() => {
    const form = document.getElementById("contact-form")
    if (!form) return

    const observer = new IntersectionObserver(
      ([entry]) => setFormInView(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    )

    observer.observe(form)
    return () => observer.disconnect()
  }, [])

  if (formInView) return null

  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur-sm supports-[padding:max(0px)]:pb-[max(0.75rem,env(safe-area-inset-bottom))]"
      role="region"
      aria-label="Snel contact opnemen"
    >
      <div className="px-4 py-3">
        <Button asChild size="lg" className="w-full font-semibold shadow-md">
          <a href="#contact-form">Gratis gesprek aanvragen</a>
        </Button>
      </div>
    </div>
  )
}
