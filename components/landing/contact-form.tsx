"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Check, AlertCircle, Briefcase, User } from "lucide-react"
import { cn } from "@/lib/utils"

// ─── Types ────────────────────────────────────────────────────────────────────

type Role = "opdrachtgever" | "freelancer" | null
type Niche = string | null

interface FormData {
  naam: string
  email: string
  telefoon: string
  bericht: string
}

interface FormErrors {
  naam?: string
  email?: string
  telefoon?: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const opdrachtgeverNiches = [
  { value: "thuiszorg", label: "Thuiszorg" },
  { value: "verpleging", label: "Verpleging & Verzorging" },
  { value: "gehandicaptenzorg", label: "Gehandicaptenzorg" },
  { value: "ggz", label: "GGZ / Psychische zorg" },
  { value: "jeugdzorg", label: "Jeugdzorg" },
  { value: "ouderenzorg", label: "Ouderenzorg" },
  { value: "anders", label: "Anders" },
]

const freelancerNiches = [
  { value: "verpleegkundige", label: "Verpleegkundige" },
  { value: "verzorgende", label: "Verzorgende IG" },
  { value: "begeleider", label: "Begeleider / SPH" },
  { value: "psycholoog", label: "Psycholoog / GZ" },
  { value: "fysiotherapeut", label: "Fysiotherapeut" },
  { value: "jeugdhulpverlener", label: "Jeugdhulpverlener" },
  { value: "anders", label: "Anders" },
]

// ─── Sub-components ────────────────────────────────────────────────────────────

function StepIndicator({ step, total }: { step: number; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className={cn(
              "w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-colors",
              i < step
                ? "bg-primary text-primary-foreground"
                : i === step
                  ? "bg-primary text-primary-foreground ring-2 ring-primary/30"
                  : "bg-muted text-muted-foreground"
            )}
          >
            {i < step ? <Check className="w-3.5 h-3.5" /> : i + 1}
          </div>
          {i < total - 1 && (
            <div
              className={cn(
                "h-px flex-1 w-8 transition-colors",
                i < step ? "bg-primary" : "bg-border"
              )}
            />
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────

export function ContactForm() {
  const [step, setStep] = useState(0) // 0 = role, 1 = niche, 2 = form
  const [role, setRole] = useState<Role>(null)
  const [niche, setNiche] = useState<Niche>(null)
  const [formData, setFormData] = useState<FormData>({
    naam: "",
    email: "",
    telefoon: "",
    bericht: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const niches = role === "opdrachtgever" ? opdrachtgeverNiches : freelancerNiches

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (!hash) return
      
      if (hash.includes("role=freelancer") || hash.includes("role=zzp")) {
        setRole("freelancer")
        setNiche(null)
        setStep(1)
      } else if (hash.includes("role=opdrachtgever") || hash.includes("role=werkgever")) {
        setRole("opdrachtgever")
        setNiche(null)
        setStep(1)
      }
    }

    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  // ── Validation ──────────────────────────────────────────────────────────────

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.naam || formData.naam.trim().length < 2) {
      newErrors.naam = "Vul uw naam in (minimaal 2 tekens)"
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Vul een geldig e-mailadres in"
    }
    const phoneRegex = /^(\+31|0031|0)[1-9][0-9]{8}$/
    const cleanPhone = formData.telefoon.replace(/[\s\-\(\)]/g, "")
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      newErrors.telefoon = "Vul een geldig Nederlands telefoonnummer in"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // ── Handlers ────────────────────────────────────────────────────────────────

  const handleRoleSelect = (selected: Role) => {
    setRole(selected)
    setNiche(null)
    setStep(1)
  }

  const handleNicheSelect = (selected: Niche) => {
    setNiche(selected)
    setStep(2)
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSuccess(true)
    } catch {
      setErrors({ naam: "Er is iets misgegaan. Probeer het later opnieuw." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setStep(0)
    setRole(null)
    setNiche(null)
    setFormData({ naam: "", email: "", telefoon: "", bericht: "" })
    setErrors({})
    setIsSuccess(false)
  }

  // ── Success ──────────────────────────────────────────────────────────────────

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
                Lieke neemt binnen 24 uur contact met u op.
              </p>
            </div>
            <Button variant="outline" onClick={handleReset} className="mt-4">
              Nog een aanvraag doen
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  // ── Step 0: Role selection ───────────────────────────────────────────────────

  if (step === 0) {
    return (
      <Card className="border-2 border-primary/20 shadow-lg" id="contact-form">
        <CardHeader className="pb-2">
          <StepIndicator step={0} total={3} />
          <CardTitle className="text-xl font-semibold text-foreground">
            Wie bent u?
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Zoekt u zorgprofessionals, of bent u er zelf een?
          </p>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleRoleSelect("opdrachtgever")}
              className="group flex flex-col items-center gap-3 rounded-xl border-2 border-border bg-background p-6 text-center transition-all hover:border-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Opdrachtgever</p>
                <p className="text-xs text-muted-foreground mt-0.5">Ik zoek zorgprofessionals</p>
              </div>
            </button>

            <button
              onClick={() => handleRoleSelect("freelancer")}
              className="group flex flex-col items-center gap-3 rounded-xl border-2 border-border bg-background p-6 text-center transition-all hover:border-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Freelancer</p>
                <p className="text-xs text-muted-foreground mt-0.5">Ik ben een zorgprofessional</p>
              </div>
            </button>
          </div>
        </CardContent>
      </Card>
    )
  }

  // ── Step 1: Niche selection ──────────────────────────────────────────────────

  if (step === 1) {
    return (
      <Card className="border-2 border-primary/20 shadow-lg" id="contact-form">
        <CardHeader className="pb-2">
          <StepIndicator step={1} total={3} />
          <CardTitle className="text-xl font-semibold text-foreground">
            {role === "opdrachtgever" ? "In welke sector zoekt u?" : "In welk vakgebied werkt u?"}
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Zo brengen wij u in contact met de juiste match.
          </p>
        </CardHeader>
        <CardContent className="pt-4 flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-2">
            {niches.map((n) => (
              <button
                key={n.value}
                onClick={() => handleNicheSelect(n.value)}
                className="rounded-lg border-2 border-border bg-background px-4 py-3 text-left text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {n.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => setStep(0)}
            className="text-xs text-muted-foreground hover:text-foreground mt-1 transition-colors self-start"
          >
            &larr; Terug
          </button>
        </CardContent>
      </Card>
    )
  }

  // ── Step 2: Contact form ─────────────────────────────────────────────────────

  const selectedNicheLabel = niches.find((n) => n.value === niche)?.label ?? ""
  const roleLabel = role === "opdrachtgever" ? "Opdrachtgever" : "Freelancer"

  return (
    <Card className="border-2 border-primary/20 shadow-lg" id="contact-form">
      <CardHeader className="pb-2">
        <StepIndicator step={2} total={3} />
        {/* Context confirmation chip */}
        <div className="flex items-center gap-2 mb-1">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Check className="w-3 h-3" />
            {roleLabel} &middot; {selectedNicheLabel}
          </span>
        </div>
        <CardTitle className="text-xl font-semibold text-foreground">
          Vraag een gratis adviesgesprek aan
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-1">
          Lieke neemt binnen 24 uur telefonisch contact met u op.
        </p>
      </CardHeader>
      <CardContent className="pt-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Naam */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="naam" className="text-sm font-medium">Uw naam</Label>
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
              <p id="naam-error" className="text-xs text-destructive flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />{errors.naam}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email" className="text-sm font-medium">E-mailadres</Label>
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
              <p id="email-error" className="text-xs text-destructive flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />{errors.email}
              </p>
            )}
          </div>

          {/* Telefoon */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="telefoon" className="text-sm font-medium">Telefoonnummer</Label>
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
              <p id="telefoon-error" className="text-xs text-destructive flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />{errors.telefoon}
              </p>
            )}
          </div>

          {/* Optioneel bericht */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="bericht" className="text-sm font-medium">
              Bericht <span className="text-muted-foreground font-normal">(optioneel)</span>
            </Label>
            <textarea
              id="bericht"
              rows={3}
              placeholder="Vertel ons kort over uw situatie..."
              value={formData.bericht}
              onChange={(e) => handleInputChange("bericht", e.target.value)}
              disabled={isSubmitting}
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full mt-1 font-semibold"
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

          <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground mt-1">
            <span className="flex items-center gap-1">
              <Check className="w-3 h-3 text-primary" />
              Binnen 24 uur reactie
            </span>
            <span>&middot;</span>
            <span>Geheel vrijblijvend</span>
          </div>

          <button
            type="button"
            onClick={() => setStep(1)}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors self-start"
          >
            &larr; Terug
          </button>
        </form>
      </CardContent>
    </Card>
  )
}
