import Image from "next/image"
import { ContactForm } from "./contact-form"

export function HeroSection() {
  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Persona */}
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-foreground text-balance">
              Vind snel de juiste zorgverlener bij u in de buurt
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Het vinden van goede zorg kan overweldigend zijn. Daarom helpt
              Sanne u persoonlijk om de perfecte match te vinden. Geheel
              vrijblijvend en afgestemd op uw situatie.
            </p>

            {/* Avatar with caption */}
            <div className="flex items-center gap-4 mt-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 shadow-md flex-shrink-0">
                <Image
                  src="/images/sanne-avatar.jpg"
                  alt="Sanne - Persoonlijke zorgadviseur"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-medium text-foreground">Sanne</p>
                <p className="text-sm text-muted-foreground italic">
                  &quot;Ik help u persoonlijk om de perfecte match te vinden.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:pl-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
