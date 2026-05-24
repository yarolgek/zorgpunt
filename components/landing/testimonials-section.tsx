"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { StarRating } from "@/components/ui/star-rating"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Annelies",
    location: "Utrecht",
    rating: 5,
    quote:
      "Binnen twee dagen had Sanne de perfecte hulp voor mijn moeder gevonden. De persoonlijke aanpak maakte het verschil. Ik voelde me eindelijk gehoord.",
  },
  {
    id: 2,
    name: "Henk",
    location: "Eindhoven",
    rating: 5,
    quote:
      "Na maanden zoeken via andere kanalen, loste ZorgMatch het binnen een week op. De zorgverlener die ze vonden past perfect bij onze situatie.",
  },
  {
    id: 3,
    name: "Maria",
    location: "Amsterdam",
    rating: 5,
    quote:
      "Heel fijn dat Sanne de tijd nam om echt te luisteren naar wat we nodig hadden. De match met onze huidige hulp is perfect.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 text-balance">
            Wat andere mantelzorgers over ons zeggen
          </h2>
          <p className="text-muted-foreground">
            Echte ervaringen van families die we hebben geholpen
          </p>
        </div>

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-sm flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Vorige testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-muted-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 w-10 h-10 rounded-full bg-card border border-border shadow-sm flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Volgende testimonial"
          >
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* Testimonial Card */}
          <Card className="overflow-hidden">
            <CardContent className="p-8 lg:p-10">
              <div className="flex flex-col items-center text-center gap-4">
                <StarRating rating={testimonials[currentIndex].rating} />
                <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed italic">
                  &quot;{testimonials[currentIndex].quote}&quot;
                </blockquote>
                <div className="mt-2">
                  <p className="font-medium text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ga naar testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
