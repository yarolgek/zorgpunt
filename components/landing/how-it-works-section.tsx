"use client"

import { Briefcase, User } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const opdrachtgeverSteps = [
  {
    title: "Vraag een gratis gesprek aan",
    description:
      "Vul het formulier in en vertel kort wat u zoekt. Geen verplichtingen.",
  },
  {
    title: "Persoonlijk contact binnen 24 uur",
    description:
      "Lieke belt u om uw situatie, planning en wensen door te nemen.",
  },
  {
    title: "Ontvang passende zzp'ers",
    description:
      "Wij stellen geverifieerde professionals voor die aansluiten bij uw organisatie.",
  },
  {
    title: "Start met de juiste match",
    description:
      "Kies de professional die het beste past en ga snel aan de slag.",
  },
]

const freelancerSteps = [
  {
    title: "Meld je aan via het formulier",
    description:
      "Kies je vakgebied en laat kort weten wat je zoekt. Aanmelden is gratis.",
  },
  {
    title: "Persoonlijk contact binnen 24 uur",
    description:
      "Lieke belt je om je profiel, beschikbaarheid en voorkeuren te bespreken.",
  },
  {
    title: "Ontvang passende opdrachten",
    description:
      "Wij matchen je met opdrachten die passen bij jouw expertise en regio.",
  },
  {
    title: "Ga aan de slag op jouw voorwaarden",
    description:
      "Jij bepaalt je tarief en planning — wij ontzorgen waar nodig.",
  },
]

function StepList({ steps }: { steps: typeof opdrachtgeverSteps }) {
  return (
    <ol className="flex flex-col gap-6">
      {steps.map((step, index) => (
        <li key={step.title} className="flex gap-4">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
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

        <Tabs defaultValue="opdrachtgever" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 h-auto p-1">
            <TabsTrigger value="opdrachtgever" className="gap-2 py-2.5">
              <Briefcase className="w-4 h-4" />
              Opdrachtgever
            </TabsTrigger>
            <TabsTrigger value="freelancer" className="gap-2 py-2.5">
              <User className="w-4 h-4" />
              ZZP&apos;er
            </TabsTrigger>
          </TabsList>
          <TabsContent value="opdrachtgever" className="mt-8">
            <StepList steps={opdrachtgeverSteps} />
          </TabsContent>
          <TabsContent value="freelancer" className="mt-8">
            <StepList steps={freelancerSteps} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
