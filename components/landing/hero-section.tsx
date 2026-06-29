import Link from "next/link"
import { HeroContactFlow } from "./hero-contact-flow"
import { brand } from "@/lib/brand"
import { activeRegionShort } from "@/lib/regions"

export function HeroSection() {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/hero-team-mobile.jpg')] sm:bg-[url('/images/hero-team.jpg')] sm:bg-[center_35%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/88 via-background/72 to-background/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-transparent to-background/80" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:gap-14">
          <div className="max-w-3xl lg:max-w-4xl flex flex-col gap-6">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-semibold leading-tight text-foreground text-balance">
              <span className="block text-sm sm:text-base font-semibold uppercase tracking-wide text-primary mb-2">
                Zorgbemiddeling in Roermond en omgeving
              </span>
              <span className="block">Vind de diensten die jij wilt.</span>
              <span className="block">Het personeel dat jij nodig hebt.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {brand.tagline}
            </p>
          </div>

          <HeroContactFlow />

          <p className="text-base sm:text-lg font-medium text-foreground/80 leading-relaxed max-w-3xl">
            Zorgpersoneel inhuren via{" "}
            <Link
              href="/diensten/bemiddeling-zzp-zorgprofessionals"
              className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
            >
              bemiddeling van ZZP-zorgprofessionals
            </Link>
            ,{" "}
            <Link
              href="/diensten/detachering-zorgpersoneel"
              className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
            >
              detachering
            </Link>{" "}
            en{" "}
            <Link
              href="/diensten/werving-en-selectie"
              className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
            >
              werving en selectie
            </Link>{" "}
            in Roermond en {activeRegionShort}.
          </p>
        </div>
      </div>
    </section>
  )
}
