"use client"

import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
}

export function ScrollReveal({ children, className }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const [revealed, setRevealed] = useState(false)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (reducedMotion) {
      setRevealed(true)
      return
    }

    const rect = el.getBoundingClientRect()
    const belowFold = rect.top > window.innerHeight * 0.15

    if (!belowFold) {
      setRevealed(true)
      return
    }

    setShouldAnimate(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [reducedMotion])

  return (
    <div
      ref={ref}
      className={cn(
        shouldAnimate && !revealed && "scroll-reveal-hidden",
        shouldAnimate && revealed && "scroll-reveal-shown",
        className
      )}
    >
      {children}
    </div>
  )
}
