import { GoogleMapEmbed } from "@/components/landing/google-map-embed"
import { activeRegionLabel } from "@/lib/regions"

export function OfficeMapSection() {
  return (
    <section
      id="kantoor"
      aria-labelledby="office-map-heading"
      className="py-16 lg:py-20 border-t border-border bg-card/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <p className="text-xs font-semibold tracking-wider uppercase text-primary mb-3">
            Bezoek of bel ons
          </p>
          <h2
            id="office-map-heading"
            className="text-2xl sm:text-3xl font-semibold text-foreground text-balance"
          >
            Ons kantoor in Roermond
          </h2>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            ZorgpuntConnect is gevestigd in het centrum van Roermond. Kom langs
            voor een vrijblijvend gesprek, of neem telefonisch contact op. Wij
            bedienen opdrachtgevers in {activeRegionLabel} vanuit deze locatie.
          </p>
        </div>

        <GoogleMapEmbed className="max-w-3xl" />
      </div>
    </section>
  )
}
