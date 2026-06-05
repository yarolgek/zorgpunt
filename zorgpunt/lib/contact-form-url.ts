export type ContactRole = "opdrachtgever" | "freelancer"

export function parseRoleFromLocation(): ContactRole | null {
  if (typeof window === "undefined") return null

  const hash = window.location.hash.replace(/^#/, "")
  const hashQuery = hash.includes("?") ? hash.slice(hash.indexOf("?") + 1) : ""
  const params = new URLSearchParams(hashQuery || window.location.search)
  const role = params.get("role")

  if (role === "freelancer" || role === "zzp") return "freelancer"
  if (role === "opdrachtgever" || role === "werkgever") return "opdrachtgever"
  return null
}

export function syncRoleToUrl(role: ContactRole) {
  const path = window.location.pathname
  window.history.replaceState(null, "", `${path}#contact-form?role=${role}`)
}

export function scrollToContactForm(focus = false) {
  const el = document.getElementById("contact-form")
  if (!el) return

  el.scrollIntoView({ behavior: "smooth", block: "start" })

  if (!focus) return

  window.setTimeout(() => {
    const focusable = el.querySelector<HTMLElement>(
      'button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
    )
    focusable?.focus({ preventScroll: true })
  }, 400)
}
