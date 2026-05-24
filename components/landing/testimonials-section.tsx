"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { StarRating } from "@/components/ui/star-rating"

const testimonials = [
  {
    id: 1,
    name: "Annelies",
    location: "Utrecht",
    role: "Zorgcoördinator Thuiszorg",
    rating: 5,
    quote:
      "Binnen twee dagen had ZorgMatch de perfecte freelance verpleegkundige voor ons team gevonden. De screening is grondig en de communicatie verloopt snel.",
  },
  {
    id: 2,
    name: "Henk",
    location: "Eindhoven",
    role: "Locatiemanager VVT",
    rating: 5,
    quote:
      "Bij acute personeelsuitval lost ZorgMatch het altijd snel op. De zzp'ers die ze voorstellen zijn uiterst vakkundig, flexibel en direct inzetbaar.",
  },
  {
    id: 3,
    name: "Maria",
    location: "Amsterdam",
    role: "Freelance Begeleider",
    rating: 5,
    quote:
      "Als zzp'er in de zorg vind ik via ZorgMatch de meest uitdagende opdrachten. Lieke luistert echt naar mijn wensen en matcht me op plekken waar ik pas.",
  },
  {
    id: 4,
    name: "Roos",
    location: "Rotterdam",
    role: "Freelance Verpleegkundige",
    rating: 5,
    quote:
      "Sinds ik samenwerk met ZorgMatch heb ik een constante stroom aan mooie opdrachten in de regio. De uitbetaling is snel en de begeleiding is persoonlijk.",
  },
]

const SLIDE_DURATION = 5000
const TRANSITION_MS = 500

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  const advance = useCallback(() => {
    setVisible(false)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      setVisible(true)
    }, TRANSITION_MS)
  }, [])

  // Auto-advance timer
  useEffect(() => {
    const timer = setTimeout(advance, SLIDE_DURATION)
    return () => clearTimeout(timer)
  }, [currentIndex, advance])

  const current = testimonials[currentIndex]

  return (
    <section className="py-16 lg:py-24" id="ervaringen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 text-balance">
            Wat anderen over ons zeggen
          </h2>
          <p className="text-muted-foreground">
            Echte ervaringen van zorginstellingen en freelance zorgprofessionals
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="overflow-hidden shadow-md">
            {/* Progress bar using smooth, GPU-accelerated CSS keyframe animation */}
            <div className="h-0.5 bg-muted">
              <div
                key={currentIndex}
                className="h-full bg-primary animate-progress-bar"
                style={{ "--animation-duration": `${SLIDE_DURATION}ms` } as React.CSSProperties}
              />
            </div>

            <CardContent className="p-8 lg:p-10">
              <div
                className="flex flex-col items-center text-center gap-5 transition-opacity duration-500"
                style={{ opacity: visible ? 1 : 0 }}
              >
                <StarRating rating={current.rating} />

                <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                <div className="flex flex-col items-center gap-0.5">
                  <p className="font-semibold text-foreground">{current.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {current.role} &middot; {current.location}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dot indicators - visual only, no click */}
          <div className="flex justify-center gap-2 mt-5" aria-hidden="true">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/25 w-1.5"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
