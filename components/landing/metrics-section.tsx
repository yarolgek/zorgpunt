import { Clock, Users, Star } from "lucide-react"
import { brand } from "@/lib/brand"
import { activeRegionShort, networkStats } from "@/lib/regions"
import { cn } from "@/lib/utils"
import {
  greenToBlueGroup,
  greenToBlueIcon,
  greenToBlueIconCircle,
  greenToBlueText,
} from "@/lib/role-hover"

const metrics = [
  {
    icon: Clock,
    value: "Binnen 24 uur",
    label: "Persoonlijk contact door Lieke",
  },
  {
    icon: Users,
    value: networkStats.activeProfessionals,
    label: networkStats.activeLabel,
  },
  {
    icon: Star,
    value: "4,5 / 5",
    label: "Gemiddelde waardering door opdrachtgevers en zzp'ers",
  },
]

export function MetricsSection() {
  return (
    <section
      id="vertrouwen"
      className="py-16 lg:py-24 bg-card section-band"
      aria-labelledby="vertrouwen-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2
            id="vertrouwen-heading"
            className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 text-balance"
          >
            Waarom {brand.name}
          </h2>
          <p className="text-muted-foreground">
            Betrouwbare bemiddeling met persoonlijke begeleiding in{" "}
            {activeRegionShort}
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className={cn(
                "flex flex-col items-center text-center gap-3",
                greenToBlueGroup
              )}
            >
              <div
                className={cn(
                  "w-14 h-14 rounded-full flex items-center justify-center",
                  greenToBlueIconCircle
                )}
              >
                <metric.icon className={cn("w-7 h-7", greenToBlueIcon)} />
              </div>
              <p
                className={cn(
                  "text-2xl lg:text-3xl font-semibold",
                  greenToBlueText
                )}
              >
                {metric.value}
              </p>
              <p className="text-muted-foreground text-sm lg:text-base max-w-[220px]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
