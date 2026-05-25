import { landingSectors } from "@/lib/sectors"

export function SectorsSection() {
  return (
    <section
      id="sectoren"
      className="py-16 lg:py-24 bg-background border-t border-border"
      aria-labelledby="sectoren-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2
            id="sectoren-heading"
            className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 text-balance"
          >
            Actief in heel Nederland
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Wij bemiddelen in de sectoren die u in het formulier kunt kiezen — en
            voor zzp&apos;ers in diverse vakgebieden van verpleegkundige tot
            begeleider.
          </p>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {landingSectors.map((sector) => (
            <li key={sector.value}>
              <div className="flex flex-col items-center text-center gap-3 rounded-xl card-elevated-hover p-4 h-full hover:border-primary/30">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <sector.icon className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <span className="text-xs sm:text-sm font-medium text-foreground leading-snug">
                  {sector.label}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
