import { Smartphone, Bell, Calendar, Clock, ArrowRight } from "lucide-react"
import { brand } from "@/lib/brand"

const appFeatures = [
  {
    icon: Calendar,
    title: "Plan je diensten",
    description: "Bekijk en beheer al je opdrachten op één plek.",
  },
  {
    icon: Bell,
    title: "Direct notificaties",
    description: "Ontvang meldingen bij nieuwe opdrachten die bij jou passen.",
  },
  {
    icon: Clock,
    title: "Urenregistratie",
    description: "Registreer je uren eenvoudig en snel via de app.",
  },
]

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.app.mijnzpc"

export function AppDownloadSection() {
  return (
    <section
      id="app"
      className="relative py-16 lg:py-24 overflow-hidden"
      aria-labelledby="app-heading"
    >
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-brand-secondary/[0.08]"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left – Text content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-primary">
              <Smartphone className="h-4 w-4" />
              Gratis app
            </div>

            <h2
              id="app-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-foreground text-balance"
            >
              MijnZPC — altijd en overal toegang
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              Download de gratis {brand.name} app en beheer je opdrachten,
              diensten en communicatie gemakkelijk vanaf je telefoon. Beschikbaar
              op Google Play.
            </p>

            {/* Feature list */}
            <div className="flex flex-col gap-4 mt-2">
              {appFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {feature.title}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download button */}
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 mt-4 px-6 py-3.5 bg-foreground text-background rounded-xl font-semibold text-sm
                         shadow-lg shadow-foreground/10 transition-all duration-200
                         hover:shadow-xl hover:shadow-foreground/15 hover:-translate-y-0.5
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                         w-fit"
              id="app-download-button"
            >
              {/* Google Play icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 flex-shrink-0"
                fill="currentColor"
                aria-hidden
              >
                <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92ZM14.852 13.06l2.79 1.613-2.31 2.31L14.852 13.06Zm2.79-3.733-2.79 1.613.48-3.924 2.31 2.31ZM5.024.96l9.39 9.39.48-3.923L5.023.96ZM5.024 23.04l9.87-5.467-.48-3.924-9.39 9.39Z" />
              </svg>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-normal opacity-80">
                  Downloaden via
                </span>
                <span className="text-base font-semibold -mt-0.5">
                  Google Play
                </span>
              </div>
              <ArrowRight className="h-4 w-4 ml-1 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
            </a>

            <p className="text-xs text-muted-foreground">
              ✓ Gratis &nbsp; ✓ Geen advertenties &nbsp; ✓ Veilig
            </p>
          </div>

          {/* Right – Phone mockup */}
          <div className="flex justify-center lg:justify-end" aria-hidden>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />

              {/* Phone frame */}
              <div className="relative w-[260px] h-[520px] rounded-[3rem] border-[6px] border-foreground/90 bg-background shadow-2xl overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-foreground/90 rounded-b-2xl z-10" />

                {/* Screen content */}
                <div className="h-full w-full flex flex-col">
                  {/* Status bar area */}
                  <div className="h-10" />

                  {/* App header */}
                  <div className="px-5 py-3 bg-primary text-primary-foreground">
                    <p className="text-xs font-semibold">MijnZPC</p>
                    <p className="text-[10px] opacity-80">
                      Welkom terug, zorgverlener
                    </p>
                  </div>

                  {/* Mock content */}
                  <div className="flex-1 px-4 py-3 flex flex-col gap-3">
                    {/* Stats row */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-xl bg-primary/10 p-3 text-center">
                        <p className="text-lg font-bold text-primary">3</p>
                        <p className="text-[9px] text-muted-foreground">
                          Actieve diensten
                        </p>
                      </div>
                      <div className="rounded-xl bg-brand-secondary/10 p-3 text-center">
                        <p className="text-lg font-bold text-brand-secondary">
                          1
                        </p>
                        <p className="text-[9px] text-muted-foreground">
                          Nieuwe aanbieding
                        </p>
                      </div>
                    </div>

                    {/* Mock list items */}
                    <div className="flex flex-col gap-2">
                      <p className="text-[10px] font-semibold text-foreground mt-1">
                        Aankomende diensten
                      </p>
                      {[
                        {
                          day: "Ma",
                          date: "9 jun",
                          loc: "GGZ Breburg",
                          time: "07:00 – 15:00",
                        },
                        {
                          day: "Di",
                          date: "10 jun",
                          loc: "Thuiszorg Plus",
                          time: "08:00 – 16:30",
                        },
                        {
                          day: "Do",
                          date: "12 jun",
                          loc: "De Zorgboog",
                          time: "07:30 – 15:30",
                        },
                      ].map((shift) => (
                        <div
                          key={shift.date}
                          className="flex items-center gap-2.5 rounded-lg border border-border bg-card p-2.5"
                        >
                          <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex flex-col items-center justify-center leading-none">
                            <span className="text-[8px] font-bold text-primary">
                              {shift.day}
                            </span>
                            <span className="text-[7px] text-muted-foreground">
                              {shift.date}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <p className="text-[10px] font-medium text-foreground truncate">
                              {shift.loc}
                            </p>
                            <p className="text-[8px] text-muted-foreground">
                              {shift.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom nav */}
                  <div className="px-4 py-2 border-t border-border flex justify-around">
                    {["Home", "Diensten", "Berichten", "Profiel"].map(
                      (label) => (
                        <div
                          key={label}
                          className="flex flex-col items-center gap-0.5"
                        >
                          <div
                            className={`w-4 h-4 rounded-full ${label === "Home" ? "bg-primary" : "bg-muted"}`}
                          />
                          <span
                            className={`text-[7px] ${label === "Home" ? "text-primary font-semibold" : "text-muted-foreground"}`}
                          >
                            {label}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
