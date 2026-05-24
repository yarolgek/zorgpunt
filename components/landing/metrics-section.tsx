import { Clock, Users, Star } from "lucide-react"

const metrics = [
  {
    icon: Clock,
    value: "Binnen 24 uur",
    label: "Persoonlijk en telefonisch contact",
  },
  {
    icon: Users,
    value: "150+ Professionals",
    label: "Geverifieerde zzp'ers actief in heel Nederland",
  },
  {
    icon: Star,
    value: "9.5 / 10",
    label: "Gemiddelde waardering door opdrachtgevers en zzp'ers",
  },
]

export function MetricsSection() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <metric.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-2xl lg:text-3xl font-semibold text-foreground">
                {metric.value}
              </p>
              <p className="text-muted-foreground text-sm lg:text-base max-w-[250px]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
