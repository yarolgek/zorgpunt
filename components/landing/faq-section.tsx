import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
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
      "Je kunt je eenvoudig aanmelden via ons contactformulier door te kiezen voor de optie 'Freelancer'. Aanmelden en bemiddeld worden naar opdrachten is voor zzp'ers volledig gratis. Wij helpen je met het vinden van passende opdrachten en ontzorgen je administratief.",
  },
  {
    question: "In welke zorgsectoren is ZorgMatch actief?",
    answer:
      "Wij zijn actief in heel Nederland en bemiddelen in sectoren zoals Thuiszorg, Verpleging & Verzorging (VVT), Gehandicaptenzorg, Geestelijke Gezondheidszorg (GGZ), Jeugdzorg en Ouderenzorg.",
  },
]

export function FaqSection() {
  return (
    <section className="py-16 lg:py-24 bg-card" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3 text-balance">
            Veelgestelde vragen
          </h2>
          <p className="text-muted-foreground">
            Alles wat u moet weten over onze ondersteuning
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA #2 */}
        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            Staat uw vraag er niet tussen?{" "}
            <a
              href="#contact-form"
              className="text-primary hover:underline font-medium"
            >
              Vraag een gratis gesprek aan met Lieke
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
