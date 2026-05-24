import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Hoe snel kan ik een zorgverlener verwachten?",
    answer:
      "Na uw aanvraag neemt Sanne binnen 24 uur telefonisch contact met u op. Afhankelijk van uw specifieke wensen en regio kunnen we vaak binnen een week een geschikte zorgverlener voorstellen.",
  },
  {
    question: "Wat kost het adviesgesprek?",
    answer:
      "Het adviesgesprek is volledig gratis en geheel vrijblijvend. Wij brengen pas kosten in rekening wanneer u daadwerkelijk met een van onze zorgverleners in zee gaat.",
  },
  {
    question: "Zijn de zorgverleners gecertificeerd?",
    answer:
      "Ja, alle zorgverleners in ons netwerk zijn geverifieerd en hebben de juiste diploma's en certificeringen. Wij controleren referenties en zorgen dat iedereen voldoet aan de Nederlandse zorgnormen.",
  },
  {
    question: "Wat als de match niet goed blijkt te zijn?",
    answer:
      "Wij staan achter onze matches. Mocht de zorgverlener toch niet goed passen, dan zoeken we kosteloos naar een alternatief. Uw tevredenheid staat voorop.",
  },
]

export function FaqSection() {
  return (
    <section className="py-16 lg:py-24 bg-card">
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

        {/* CTA #2 - Scroll to top link */}
        <div className="mt-10 text-center">
          <p className="text-muted-foreground">
            Staat uw vraag er niet tussen?{" "}
            <a
              href="#contact-form"
              className="text-primary hover:underline font-medium"
            >
              Scroll naar boven en stuur Sanne een bericht
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
