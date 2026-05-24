"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Check, AlertCircle } from "lucide-react"

interface FormData {
  naam: string
  email: string
  telefoon: string
  zorgType: string
}

interface FormErrors {
  naam?: string
  email?: string
  telefoon?: string
  zorgType?: string
}

const zorgTypes = [
  { value: "thuiszorg", label: "Thuiszorg" },
  { value: "persoonlijke-verzorging", label: "Persoonlijke verzorging" },
  { value: "huishoudelijke-hulp", label: "Huishoudelijke hulp" },
  { value: "begeleiding", label: "Begeleiding" },
  { value: "verpleging", label: "Verpleging" },
  { value: "anders", label: "Anders / Weet ik nog niet" },
]

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    naam: "",
    email: "",
    telefoon: "",
    zorgType: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.naam || formData.naam.trim().length < 2) {
      newErrors.naam = "Vul uw naam in (minimaal 2 tekens)"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Vul een geldig e-mailadres in"
    }

    // Dutch phone number validation (accepts various formats)
    const phoneRegex = /^(\+31|0031|0)[1-9][0-9]{8}$/
    const cleanPhone = formData.telefoon.replace(/[\s\-\(\)]/g, "")
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      newErrors.telefoon = "Vul een geldig Nederlands telefoonnummer in"
    }

    if (!formData.zorgType) {
      newErrors.zorgType = "Selecteer een type zorg"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call - will be replaced with webhook later
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("Form submitted:", formData)
      setIsSuccess(true)
      setFormData({ naam: "", email: "", telefoon: "", zorgType: "" })
    } catch {
      setErrors({ naam: "Er is iets misgegaan. Probeer het later opnieuw." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (isSuccess) {
    return (
      <Card className="border-2 border-primary/20 shadow-lg">
        <CardContent className="pt-8 pb-8">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Bedankt voor uw aanvraag!
              </h3>
              <p className="text-muted-foreground mt-2">
                Sanne neemt binnen 24 uur contact met u op.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsSuccess(false)}
              className="mt-4"
            >
              Nog een aanvraag doen
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-2 border-primary/20 shadow-lg" id="contact-form">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-foreground">
          Vraag een gratis adviesgesprek aan
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Naam */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="naam" className="text-sm font-medium">
              Uw naam
            </Label>
            <Input
              id="naam"
              type="text"
              placeholder="Bijv. Jan de Vries"
              value={formData.naam}
              onChange={(e) => handleInputChange("naam", e.target.value)}
              disabled={isSubmitting}
              className={errors.naam ? "border-destructive" : ""}
              aria-describedby={errors.naam ? "naam-error" : undefined}
            />
            {errors.naam && (
              <p id="naam-error" className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.naam}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-sm font-medium">
              E-mailadres
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="uw@email.nl"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              disabled={isSubmitting}
              className={errors.email ? "border-destructive" : ""}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Telefoon */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="telefoon" className="text-sm font-medium">
              Telefoonnummer
            </Label>
            <Input
              id="telefoon"
              type="tel"
              placeholder="06 12345678"
              value={formData.telefoon}
              onChange={(e) => handleInputChange("telefoon", e.target.value)}
              disabled={isSubmitting}
              className={errors.telefoon ? "border-destructive" : ""}
              aria-describedby={errors.telefoon ? "telefoon-error" : undefined}
            />
            {errors.telefoon && (
              <p id="telefoon-error" className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.telefoon}
              </p>
            )}
          </div>

          {/* Type zorg */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="zorgType" className="text-sm font-medium">
              Type zorg
            </Label>
            <Select
              value={formData.zorgType}
              onValueChange={(value) => handleInputChange("zorgType", value)}
              disabled={isSubmitting}
            >
              <SelectTrigger
                id="zorgType"
                className={errors.zorgType ? "border-destructive" : ""}
                aria-describedby={errors.zorgType ? "zorgType-error" : undefined}
              >
                <SelectValue placeholder="Selecteer type zorg" />
              </SelectTrigger>
              <SelectContent>
                {zorgTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.zorgType && (
              <p id="zorgType-error" className="text-sm text-destructive flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.zorgType}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full mt-2 font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Versturen...
              </>
            ) : (
              "Gratis Adviesgesprek Aanvragen"
            )}
          </Button>

          {/* Trust indicators */}
          <p className="text-sm text-muted-foreground text-center mt-2">
            <Check className="w-4 h-4 inline-block text-primary mr-1" />
            Binnen 24 uur een reactie
            <span className="mx-2">•</span>
            Geheel vrijblijvend
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
