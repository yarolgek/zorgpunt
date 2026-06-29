"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  applyGoogleConsentUpdate,
  persistConsentChoice,
  readStoredConsent,
  type ConsentChoice,
} from "@/lib/cookie-consent"

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = readStoredConsent()
    if (stored) {
      applyGoogleConsentUpdate(stored)
      return
    }
    setVisible(true)
  }, [])

  function choose(choice: ConsentChoice) {
    persistConsentChoice(choice)
    applyGoogleConsentUpdate(choice)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-background/98 backdrop-blur-sm shadow-[0_-8px_30px_rgba(0,0,0,0.08)] pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="max-w-3xl text-sm text-muted-foreground leading-relaxed">
            <p
              id="cookie-consent-title"
              className="font-semibold text-foreground mb-1"
            >
              Cookies en meetpixels
            </p>
            <p id="cookie-consent-description">
              Wij gebruiken noodzakelijke cookies voor een veilige website. Met
              uw toestemming meten wij bezoek en advertenties via Google
              (Analytics / Ads). Kiest u voor{" "}
              <strong className="text-foreground font-medium">
                alleen noodzakelijk
              </strong>
              , dan plaatsen wij geen marketing- of analysecookies; Google kan
              dan nog wel beperkte, geanonimiseerde signalen ontvangen voor
              statistische modellering. Lees meer in ons{" "}
              <Link
                href="/cookies"
                className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
              >
                cookiebeleid
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 shrink-0 w-full sm:w-auto">
            <Button
              type="button"
              variant="outline"
              className="font-semibold w-full sm:w-auto"
              onClick={() => choose("declined")}
            >
              Alleen noodzakelijk
            </Button>
            <Button
              type="button"
              className="font-semibold w-full sm:w-auto bg-brand-primary text-white hover:bg-brand-secondary"
              onClick={() => choose("accepted")}
            >
              Alles accepteren
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
