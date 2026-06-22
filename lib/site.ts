/** Public contact & legal details (NAP). Keep consistent across site, footer & schema. */
import { brand } from "@/lib/brand"

export const siteSocialProfiles = [
  {
    label: "Facebook",
    url: "https://www.facebook.com/p/Zorgpuntconnect-100076449727871/",
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/zorgpuntconnect/",
  },
  {
    label: "LinkedIn",
    url: "https://nl.linkedin.com/company/zorgpuntconnect",
  },
  {
    label: "X",
    url: "https://twitter.com/zorgpuntconnect",
  },
] as const

export const siteContact = {
  phone: "+31853038827",
  phoneDisplay: "+31 85 3038827",
  email: "info@zorgpuntconnect.nl",
  street: "Zwartbroekpoort 2",
  postalCode: "6041 LS",
  city: "Roermond",
  region: "Roermond, Limburg & Noord-Brabant",
  kvk: "81706723",
  whatsappUrl:
    "https://wa.me/31630980424?text=Zorgpuntconnect%20Website%3A",
  // Approximate coordinates of the Roermond office (refine with exact lat/long later).
  geo: { latitude: 51.1936, longitude: 5.9874 },
  socialProfiles: siteSocialProfiles,
  // Openingstijden (kantoor). Weekend gesloten.
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
} as const

function formatOfficeAddress(): string {
  return `${siteContact.street}, ${siteContact.postalCode} ${siteContact.city}`
}

/** iframe embed URL (no API key required). */
export function getGoogleMapsEmbedUrl(): string {
  const q = encodeURIComponent(`${formatOfficeAddress()}, Netherlands`)
  return `https://maps.google.com/maps?q=${q}&z=16&output=embed`
}

/** Opens Google Maps directions to the office. */
export function getGoogleMapsDirectionsUrl(): string {
  const destination = encodeURIComponent(formatOfficeAddress())
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`
}

/** Public Google Maps place/search URL for schema hasMap and external links. */
export function getGoogleMapsPlaceUrl(): string {
  const q = encodeURIComponent(`${brand.name} ${formatOfficeAddress()}`)
  return `https://www.google.com/maps/search/?api=1&query=${q}`
}
