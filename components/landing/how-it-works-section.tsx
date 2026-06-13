import { Briefcase, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { freelancerBoxHover, opdrachtgeverBoxHover } from "@/lib/role-hover"

const opdrachtgeverSteps = [
  {
    title: "Vraag een gratis gesprek aan",
    description: "Vul het formulier in en vertel kort wat u zoekt. Geen verplichtingen.",
  },
  {
    title: "Persoonlijk contact binnen 24 uur",
    description: "Lieke belt u om uw situatie, planning en wensen door te nemen.",
  },
  {
    title: "Ontvang passende zzp'ers",
    description: "Wij stellen geverifieerde professionals voor die aansluiten bij uw organisatie.",
  },
  {
    title: "Start met de juiste match",
    description: "Kies de professional die het beste past en ga snel aan de slag.",
  },
] as const

const freelancerSteps = [
  {
    title: "Meld je aan via het formulier",
    description: "Kies je vakgebied en laat kort weten wat je zoekt. Aanmelden is gratis.",
  },
  {
    title: "Persoonlijk contact binnen 24 uur",
    description: "Lieke belt je om je profiel, beschikbaarheid en voorkeuren te bespreken.",
  },
  {
    title: "Ontvang passende opdrachten",
    description: "Wij matchen je met opdrachten die passen bij jouw expertise en regio.",
  },
  {
    title: "Ga aan de slag op jouw voorwaarden",
    description: "Jij bepaalt je tarief en planning — wij ontzorgen waar nodig.",
  },
] as const

type Step = (typeof opdrachtgeverSteps)[number]
type Accent = "primary" | "secondary"

function StepList({ steps, accent }: { steps: Step[]; accent: Accent }) {
  const numberCircle =
    accent === "primary"
      ? "bg-brand-primary text-white"
      : "bg-brand-secondary text-white"

  return (
    <ol className="flex flex-col gap-6">
      {steps.map((step, index) => (
        <li key={step.title} className="flex gap-4">
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${numberCircle}`}
            aria-hidden
          >
            {index + 1}
          </span>
          <div>
            <h3 className="font-semibold text-foreground">{step.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function HowItWorksSection() {
  return (
    <section
      id="hoe-het-werkt"
      className="py-16 lg:py-24 border-b border-border section-elevated"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2
            id="how-it-works-heading"
            className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 text-balance"
          >
            Hoe het werkt
          </h2>
          <p className="text-muted-foreground">
            In vier stappen naar de juiste match — voor zorgorganisaties en zzp&apos;ers
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div
            className={cn(
              "rounded-xl border border-border bg-card p-6 lg:p-8",
              opdrachtgeverBoxHover
            )}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10">
                <Briefcase className="h-5 w-5 text-brand-primary" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Opdrachtgever</h3>
            </div>
            <div className="mt-6">
              <StepList steps={[...opdrachtgeverSteps] as Step[]} accent="primary" />
            </div>
          </div>

          <div
            className={cn(
              "rounded-xl border border-border bg-card p-6 lg:p-8",
              freelancerBoxHover
            )}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-secondary/10">
                <User className="h-5 w-5 text-brand-secondary" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-foreground">ZZP&apos;er</h3>
            </div>
            <div className="mt-6">
              <StepList steps={[...freelancerSteps] as Step[]} accent="secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

