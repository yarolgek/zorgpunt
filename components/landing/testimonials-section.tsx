"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { StarRating } from "@/components/ui/star-rating"

const testimonials = [
  {
    id: 1,
    name: "Annelies",
    location: "Utrecht",
    role: "Mantelzorger",
    rating: 5,
    quote:
      "Binnen twee dagen had Lieke de perfecte hulp voor mijn moeder gevonden. De persoonlijke aanpak maakte het verschil. Ik voelde me eindelijk gehoord.",
  },
  {
    id: 2,
    name: "Henk",
    location: "Eindhoven",
    role: "Opdrachtgever",
    rating: 5,
    quote:
      "Na maanden zoeken via andere kanalen, loste ZorgMatch het binnen een week op. De zorgverlener die ze vonden past perfect bij onze situatie.",
  },
  {
    id: 3,
    name: "Maria",
    location: "Amsterdam",
    role: "Mantelzorger",
    rating: 5,
    quote:
      "Heel fijn dat Lieke de tijd nam om echt te luisteren naar wat we nodig hadden. De match met onze huidige hulp is perfect.",
  },
  {
    id: 4,
    name: "Roos",
    location: "Rotterdam",
    role: "Freelance verpleegkundige",
    rating: 5,
    quote:
      "Als freelancer ben ik blij met ZorgMatch. Binnen een week had ik een nieuwe opdracht via hun netwerk. Professioneel en snel.",
  },
]

const SLIDE_DURATION = 5000
const TRANSITION_MS = 500

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  const advance = useCallback(() => {
    setVisible(false)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      setProgress(0)
      setVisible(true)
    }, TRANSITION_MS)
  }, [])

  // Auto-advance timer
  useEffect(() => {
    const timer = setTimeout(advance, SLIDE_DURATION)
    return () => clearTimeout(timer)
  }, [currentIndex, advance])

  // Progress bar ticker
  useEffect(() => {
    const tick = setInterval(() => {
      setProgress((prev) => Math.min(prev + (100 / (SLIDE_DURATION / 100)), 100))
    }, 100)
    return () => clearInterval(tick)
  }, [currentIndex])

  const current = testimonials[currentIndex]

  return (
    <section className="py-16 lg:py-24" id="ervaringen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 text-balance">
            Wat anderen over ons zeggen
          </h2>
          <p className="text-muted-foreground">
            Echte ervaringen van opdrachtgevers en professionals
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="overflow-hidden shadow-md">
            {/* Progress bar */}
            <div className="h-0.5 bg-muted">
              <div
                className="h-full bg-primary transition-none"
                style={{ width: `${progress}%` }}
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
