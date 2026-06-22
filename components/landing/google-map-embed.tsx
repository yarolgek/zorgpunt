import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { brand } from "@/lib/brand"
import {
  getGoogleMapsDirectionsUrl,
  getGoogleMapsEmbedUrl,
  getGoogleMapsPlaceUrl,
  siteContact,
} from "@/lib/site"

interface GoogleMapEmbedProps {
  /** Shown above the map. Defaults to office NAP. */
  title?: string
  /** Optional short line under the title. */
  description?: string
  className?: string
}

export function GoogleMapEmbed({
  title = "Ons kantoor",
  description,
  className,
}: GoogleMapEmbedProps) {
  const embedUrl = getGoogleMapsEmbedUrl()
  const directionsUrl = getGoogleMapsDirectionsUrl()
  const placeUrl = getGoogleMapsPlaceUrl()

  return (
    <div className={className}>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {description ? (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        ) : null}
        <address className="not-italic text-sm text-muted-foreground mt-2 flex items-start gap-2">
          <MapPin className="h-4 w-4 shrink-0 mt-0.5" aria-hidden />
          <span>
            {brand.name}
            <br />
            {siteContact.street}
            <br />
            {siteContact.postalCode} {siteContact.city}
            <br />
            <a
              href={`tel:${siteContact.phone}`}
              className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
            >
              {siteContact.phoneDisplay}
            </a>
          </span>
        </address>
      </div>

      <div className="rounded-xl overflow-hidden border border-border shadow-sm">
        <iframe
          title={`Kaart: ${brand.name}, ${siteContact.city}`}
          src={embedUrl}
          className="w-full h-72 sm:h-80 border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <Button asChild variant="default" size="sm" className="font-semibold">
          <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
            Routebeschrijving
          </a>
        </Button>
        <Button asChild variant="outline" size="sm">
          <a href={placeUrl} target="_blank" rel="noopener noreferrer">
            Open in Google Maps
          </a>
        </Button>
      </div>
    </div>
  )
}
