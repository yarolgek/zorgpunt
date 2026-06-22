import Link from "next/link"

/** Link to the homepage office map section (replaces internal placeholder tips). */
export function OfficeMapLink() {
  return (
    <p className="text-sm">
      <Link href="/#kantoor" className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline">
        Bekijk ons kantoor op de kaart in Roermond
      </Link>
      , inclusief routebeschrijving.
    </p>
  )
}
