import Image from "next/image"
import { ContactForm } from "./contact-form"

export function HeroSection() {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Copy & Target Cards */}
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-foreground text-balance">
              De match die wél werkt in de zorg
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ZorgMatch brengt gekwalificeerde freelance zorgverleners (zzp'ers) en zorgorganisaties in heel Nederland samen. Snel, persoonlijk en betrouwbaar.
            </p>

            {/* Target Audience Entrance Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {/* Card for Employers */}
              <div className="p-5 rounded-xl border border-border bg-card/60 flex flex-col justify-between gap-3 shadow-sm hover:border-primary/40 transition-colors">
                <div>
                  <h3 className="font-semibold text-foreground text-sm">Voor Zorgorganisaties</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Snel gekwalificeerde zzp'ers nodig voor uw afdeling of instelling? Wij koppelen u snel aan gescreende professionals.
                  </p>
                </div>
                <a
                  href="#contact-form?role=opdrachtgever"
                  className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 mt-1"
                >
                  Vind zorgpersoneel &rarr;
                </a>
              </div>

              {/* Card for Freelancers */}
              <div className="p-5 rounded-xl border border-border bg-card/60 flex flex-col justify-between gap-3 shadow-sm hover:border-primary/40 transition-colors">
                <div>
                  <h3 className="font-semibold text-foreground text-sm">Voor Freelancers (ZZP)</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Op zoek naar flexibele en goedbetaalde opdrachten in de zorg? Bepaal zelf je uurtarief en waar je werkt.
                  </p>
                </div>
                <a
                  href="#contact-form?role=freelancer"
                  className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 mt-1"
                >
                  Meld je aan als zzp'er &rarr;
                </a>
              </div>
            </div>

            {/* Avatar with caption */}
            <div className="flex items-center gap-4 mt-2">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 shadow-md flex-shrink-0">
                <Image
                  src="/images/sanne-avatar.jpg"
                  alt="Lieke - Persoonlijke zorgadviseur"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-medium text-foreground">Lieke</p>
                <p className="text-xs text-muted-foreground italic">
                  &quot;Ik help u persoonlijk om de perfecte match te vinden.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:pl-8 lg:sticky lg:top-24">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
