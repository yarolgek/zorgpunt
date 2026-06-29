/** User choice for marketing/analytics cookies (AVG opt-in). */
export type ConsentChoice = "accepted" | "declined"

export const CONSENT_STORAGE_KEY = "zpc-cookie-consent"
export const CONSENT_COOKIE_NAME = "zpc_consent"
const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 180 // 180 days

export type GoogleConsentState = {
  ad_storage: "granted" | "denied"
  ad_user_data: "granted" | "denied"
  ad_personalization: "granted" | "denied"
  analytics_storage: "granted" | "denied"
}

export function consentStateForChoice(
  choice: ConsentChoice
): GoogleConsentState {
  if (choice === "accepted") {
    return {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
    }
  }

  return {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  }
}

export function readStoredConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null

  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (stored === "accepted" || stored === "declined") return stored
  } catch {
    // localStorage blocked (private mode, etc.)
  }

  const match = document.cookie.match(
    new RegExp(`(?:^|; )${CONSENT_COOKIE_NAME}=([^;]*)`)
  )
  const value = match?.[1]
  if (value === "accepted" || value === "declined") return value

  return null
}

export function persistConsentChoice(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice)
  } catch {
    // ignore
  }

  document.cookie = `${CONSENT_COOKIE_NAME}=${choice}; path=/; max-age=${CONSENT_MAX_AGE_SECONDS}; SameSite=Lax`
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    __zpcApplyConsent?: (choice: ConsentChoice) => void
  }
}

/** Push Google Consent Mode v2 update (GTM / gtag). */
export function applyGoogleConsentUpdate(choice: ConsentChoice): void {
  const state = consentStateForChoice(choice)
  window.gtag?.("consent", "update", state)
  window.dataLayer?.push(["consent", "update", state])
}
