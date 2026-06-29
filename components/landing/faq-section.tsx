import { expansionNote } from "@/lib/regions"

export const faqs = [
  {
    question: "Hoe snel kan ik een freelance zorgverlener inzetten?",
    answer:
      "Na uw aanvraag neemt Lieke binnen 24 uur telefonisch contact met u op om uw wensen te bespreken. Dankzij ons brede netwerk kunnen we vaak al binnen enkele dagen (en bij spoed nog sneller) een gekwalificeerde zzp'er aan u voorstellen.",
  },
  {
    question: "Hoe worden de freelance zorgverleners gescreend?",
    answer:
      "Kwaliteit en veiligheid staan voorop. Alle zzp'ers in ons netwerk worden grondig gescreend. We controleren hun diploma's, eventuele KIWA-keurmerken, VOG, KvK-inschrijving, beroepsaansprakelijkheidsverzekering en we bellen referenties na.",
  },
  {
    question: "Wat kost de bemiddeling voor opdrachtgevers?",
    answer:
      "Het adviesgesprek is volledig gratis en vrijblijvend. Wij hanteren heldere afspraken zonder verrassingen achteraf. U betaalt pas wanneer er een succesvolle match is en de zzp'er daadwerkelijk bij u aan de slag gaat.",
  },
  {
    question: "Hoe kan ik me als zzp'er aanmelden en wat kost het?",
    answer:
      "Je kunt je eenvoudig aanmelden via ons contactformulier door te kiezen voor de optie 'Zzp'er'. Aanmelden en bemiddeld worden naar opdrachten is voor zzp'ers volledig gratis. Wij helpen je met het vinden van passende opdrachten en ontzorgen je administratief.",
  },
  {
    question: "In welke regio's en sectoren is ZorgpuntConnect actief?",
    answer:
      "Op dit moment zijn wij het sterkst vertegenwoordigd in Limburg, Noord-Brabant en Gelderland — onder meer via onze werkgebieden rond Roermond, Eindhoven, Tilburg, Nijmegen en Arnhem. We bemiddelen in Thuiszorg, Verpleging & Verzorging (VVT), Gehandicaptenzorg, GGZ, Jeugdzorg en Ouderenzorg. " +
      expansionNote,
  },
]

export function FaqSection() {
  return (
    <section className="py-16 lg:py-24 bg-card section-band" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 text-balance">
            Veelgestelde vragen
          </h2>
          <p className="text-muted-foreground">Antwoorden voor opdrachtgevers en zzp&apos;ers</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 0}
              className="group rounded-xl border border-border bg-background p-4 shadow-sm"
            >
              <summary
                className={
                  "cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden " +
                  "flex items-start justify-between gap-4 text-left text-sm font-medium " +
                  "text-foreground hover:text-primary transition-colors"
                }
              >
                <span className="pr-4">{faq.question}</span>
                <span aria-hidden className="text-primary font-semibold pt-0.5 shrink-0">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            Staat uw vraag er niet tussen?{" "}
            <a
              href="/contact#contact-form"
              className="text-brand-primary hover:text-brand-secondary font-medium transition-colors no-underline hover:no-underline"
            >
              Vraag een gratis gesprek aan met Lieke
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
