"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { StarRating } from "@/components/ui/star-rating"
import { Button } from "@/components/ui/button"
import { useReducedMotion } from "@/hooks/use-reduced-motion"
import { cn } from "@/lib/utils"
import { googleReviewsUrl, testimonials } from "@/lib/testimonials"

const SLIDE_DURATION = 5000
const TRANSITION_MS = 500

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [paused, setPaused] = useState(false)
  const reducedMotion = useReducedMotion()
  const regionRef = useRef<HTMLDivElement>(null)

  const goTo = useCallback(
    (index: number, animate = true) => {
      const next = (index + testimonials.length) % testimonials.length
      if (!animate || reducedMotion) {
        setCurrentIndex(next)
        setVisible(true)
        return
      }
      setVisible(false)
      setTimeout(() => {
        setCurrentIndex(next)
        setVisible(true)
      }, TRANSITION_MS)
    },
    [reducedMotion]
  )

  const advance = useCallback(() => {
    goTo(currentIndex + 1)
  }, [currentIndex, goTo])

  useEffect(() => {
    if (reducedMotion || paused) return
    const timer = setTimeout(advance, SLIDE_DURATION)
    return () => clearTimeout(timer)
  }, [currentIndex, advance, reducedMotion, paused])

  const current = testimonials[currentIndex]

  return (
    <section
      className="py-16 lg:py-24"
      id="ervaringen"
      aria-labelledby="ervaringen-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="ervaringen-heading"
            className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 text-balance"
          >
            Wat anderen over ons zeggen
          </h2>
          <p className="text-muted-foreground">
            Echte ervaringen van zorginstellingen en freelance zorgprofessionals
          </p>
        </div>

        <div
          className="max-w-2xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
              setPaused(false)
            }
          }}
        >
          <Card className="overflow-hidden card-elevated shadow-md">
            <div className="h-0.5 bg-muted" aria-hidden>
              <div
                key={reducedMotion ? "static" : currentIndex}
                className={cn(
                  "h-full bg-primary",
                  !reducedMotion && "animate-progress-bar"
                )}
                style={
                  reducedMotion
                    ? { width: "100%" }
                    : ({ "--animation-duration": `${SLIDE_DURATION}ms` } as React.CSSProperties)
                }
              />
            </div>

            <CardContent className="p-8 lg:p-10 relative">
              <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between pointer-events-none sm:pointer-events-auto">
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="pointer-events-auto h-9 w-9 rounded-full bg-background/90 shadow-sm"
                  onClick={() => goTo(currentIndex - 1)}
                  aria-label="Vorige ervaring"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="pointer-events-auto h-9 w-9 rounded-full bg-background/90 shadow-sm ml-auto"
                  onClick={() => goTo(currentIndex + 1)}
                  aria-label="Volgende ervaring"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div
                ref={regionRef}
                aria-live="polite"
                aria-atomic="true"
                className={cn(
                  "flex flex-col items-center text-center gap-5 transition-opacity duration-500",
                  visible ? "opacity-100" : "opacity-0"
                )}
              >
                <StarRating rating={current.rating} />

                <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed px-8 sm:px-10">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                <div className="flex flex-col items-center gap-0.5">
                  <p className="font-semibold text-foreground">{current.name}</p>
                  <p className="text-sm text-muted-foreground">{current.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div
            className="flex justify-center gap-2 mt-5"
            role="tablist"
            aria-label="Selecteer een ervaring"
          >
            {testimonials.map((t, index) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Ervaring ${index + 1}: ${t.name}`}
                onClick={() => goTo(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/25 w-2.5 hover:bg-muted-foreground/40"
                )}
              />
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
            >
              Bekijk meer reviews op Google
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
