import Link from "next/link"
import Image from "next/image"
import type { RichServicePage } from "@/lib/service-content/types"
import { brand } from "@/lib/brand"

export const snaContent: RichServicePage = {
  slug: "sna-nen-4400-1-gecertificeerde-bemiddeling",
  seo: {
    title:
      "SNA NEN 4400-1 gecertificeerde bemiddeling | ZorgpuntConnect",
    description:
      "SNA NEN 4400-1 gecertificeerde bemiddeling en detachering door ZorgpuntConnect. Minder risico op inlenersaansprakelijkheid. Betrouwbare personeelsbemiddeling in de zorg.",
    h1: "SNA NEN 4400-1 gecertificeerde bemiddeling: vertrouwen in proces en integriteit",
    primaryKeyword: "SNA NEN 4400-1 gecertificeerde bemiddeling",
    imageAlts: [
      "ZorgpuntConnect SNA-gecertificeerde bemiddeling voor zorgorganisaties",
      "Opdrachtgever werkt samen met gecertificeerde bemiddelaar in de zorg",
      "Kwaliteitscontrole en certificering bij personeelsbemiddeling ZorgpuntConnect",
    ],
  },
  relatedSlugs: [
    "wet-dba-conforme-plaatsingen",
    "nbbu-gecertificeerde-uitzendbureau-diensten",
    "kwaliteitscontrole-screening-zorgprofessionals",
  ],
  faqs: [
    {
      question: "Wat is SNA NEN 4400-1?",
      answer:
        "SNA NEN 4400-1 is een erkende norm voor betrouwbare bemiddeling en detachering. Certificering toont aan dat een organisatie voldoet aan eisen rond financiële integriteit, procesbeheersing en naleving van wet- en regelgeving rond inlenen.",
    },
    {
      question: "Is ZorgpuntConnect SNA-gecertificeerd?",
      answer:
        "Ja. ZorgpuntConnect is voor bemiddeling en detacheren SNA NEN 4400-1 gecertificeerd. We onderhouden onze certificering en laten periodiek toetsen uitvoeren door een onafhankelijke instelling.",
    },
    {
      question: "Wat betekent SNA voor opdrachtgevers?",
      answer:
        "Het verkleint risico's rond inlenersaansprakelijkheid en geeft vertrouwen dat de bemiddelaar transparant en gecontroleerd werkt. Veel opdrachtgevers eisen SNA-certificering in aanbestedingen of raamovereenkomsten.",
    },
    {
      question: "Hoe hangt SNA samen met documentcontrole?",
      answer:
        "Certificering vraagt om beheerste processen. Ons documentbeheer in Mijn ZPC, met strikte verificatie vóór inzet, sluit daarop aan. Enkel professionals met geldige documentatie gaan aan het werk.",
    },
    {
      question: "Is SNA hetzelfde als NBBU-lidmaatschap?",
      answer:
        "Nee. SNA richt zich op betrouwbaarheid en inlenersaansprakelijkheid. NBBU is de brancheorganisatie voor uitzendbureaus met eigen algemene voorwaarden. ZorgpuntConnect is beide: SNA-gecertificeerd en NBBU-aangesloten.",
    },
    {
      question: "Helpt SNA bij DBA-vraagstukken?",
      answer:
        "SNA-certificering vervangt geen juridisch DBA-advies, maar ondersteunt wel betrouwbare bedrijfsvoering en gecontroleerde processen die DBA-risico's helpen beperken.",
    },
    {
      question: "Hoe vaak wordt certificering gecontroleerd?",
      answer:
        "Periodiek door een onafhankelijke certificerende instelling. Dat is onderdeel van het SNA-stelsel en zorgt dat normen niet alleen op papier bestaan.",
    },
    {
      question: "Hoe start ik met een SNA-gecertificeerde bemiddelaar?",
      answer:
        "Neem contact op voor een kennismaking. Na inventarisatie leggen we afspraken vast in een raamovereenkomst en starten we met portaaltoegang en gecontroleerde plaatsingen.",
    },
  ],
  renderArticle: () => <SnaArticle />,
}

function SnaArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        <strong>SNA NEN 4400-1 gecertificeerde bemiddeling</strong> geeft
        opdrachtgevers een objectieve maatstaf voor betrouwbaarheid. In een sector
        waar inlenersaansprakelijkheid, documentcontrole en financiële integriteit
        zwaar wegen, is certificering geen marketingterm maar een harde eis.
        {brand.name} is SNA-gecertificeerd voor bemiddeling en detacheren en
        combineert dat met persoonlijke service, Mijn ZPC en een netwerk van
        circa 1.500 zorgprofessionals.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Zoekintentie: waarom opdrachtgevers op SNA zoeken
      </h2>
      <p>
        Inkoop, HR en finance willen weten of een bemiddelaar gecontroleerd
        werkt en of risico op inlenersaansprakelijkheid beperkt is. Ze vergelijken
        partijen op certificering, proces en track record. Deze pagina legt uit
        wat SNA NEN 4400-1 inhoudt, waarom {brand.name} gecertificeerd is en
        hoe dat samenhangt met{" "}
        <Link
          href="/diensten/wet-dba-conforme-plaatsingen"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          DBA-conforme plaatsingen
        </Link>
        ,{" "}
        <Link
          href="/diensten/documentbeheer-verificatie-zorgprofessionals"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          documentbeheer
        </Link>{" "}
        en{" "}
        kwaliteitscontrole
        .
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wat is SNA NEN 4400-1?
      </h2>
      <p>
        SNA staat voor Stichting Normering Arbeid. De norm NEN 4400-1 richt zich
        op uitzend-, detacherings- en bemiddelingsorganisaties die willen
        aantonen dat zij betrouwbaar opereren. Certificering omvat onder meer:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Financiële integriteit en solvabiliteit</li>
        <li>Procesbeheersing rond inlenen en bemiddelen</li>
        <li>Naleving van wet- en regelgeving</li>
        <li>Periodieke externe toetsing</li>
        <li>Transparantie richting opdrachtgevers</li>
      </ul>
      <p>
        Voor opdrachtgevers in de zorg betekent dit: minder angst voor
        naheffingen, meer vertrouwen in de keten en een partner die audits en
        accreditaties serieus neemt.
      </p>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        Inlenersaansprakelijkheid in het kort
      </h3>
      <p>
        Wanneer een ingeleende kracht of onderaannemer zijn loonheffingen niet
        betaalt, kan de opdrachtgever aansprakelijk worden gesteld. Een
        SNA-gecertificeerde bemiddelaar helpt dat risico te beperken door
        gecontroleerde bedrijfsvoering en aantoonbare processen.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        SNA in de praktijk bij ZorgpuntConnect
      </h2>
      <p>
        Certificering is bij ons geen los label, maar onderdeel van dagelijkse
        werkwijze. Vanuit Roermond bedienen we opdrachtgevers in Limburg,
        Noord-Brabant en daarbuiten, met meer dan 45 raamovereenkomsten en
        jaarlijks circa 500.000 verwerkte uren. Die schaal vraagt om strakke
        processen:
      </p>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Kennismaking en raamovereenkomst</li>
        <li>Portaaltoegang via Mijn ZPC</li>
        <li>Documentcontrole vóór elke inzet</li>
        <li>Geautomatiseerde opdrachtovereenkomsten en facturatie</li>
        <li>Rapportage voor management en audits</li>
        <li>Persoonlijk contact bij ad hoc situaties</li>
      </ol>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Overzicht: SNA vs. eigen controle
      </h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Aspect
              </th>
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Zonder certificering
              </th>
              <th className="text-left py-2 font-semibold text-foreground">
                Met SNA NEN 4400-1
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Externe toetsing</td>
              <td className="py-3 pr-4">Niet verplicht</td>
              <td className="py-3">Periodiek door certificerende instelling</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Inlenersaansprakelijkheid</td>
              <td className="py-3 pr-4">Hoger onzekerheidsrisico</td>
              <td className="py-3">Aantoonbaar beheerste processen</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Aanbestedingen</td>
              <td className="py-3 pr-4">Vaak afwijzing</td>
              <td className="py-3">Voldoet aan gangbare eisen</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Vertrouwen opdrachtgever</td>
              <td className="py-3 pr-4">Afhankelijk van eigen due diligence</td>
              <td className="py-3">Onafhankelijk gecontroleerd</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Samenhang met andere diensten
      </h2>
      <p>
        SNA-certificering versterkt onze kernactiviteiten:{" "}
        bemiddeling van ZZP-zorgprofessionals
        ,{" "}
        detachering{" "}
        en onderaanneming. Het portaal Mijn ZPC maakt processen zichtbaar en
        aantoonbaar. Zie{" "}
        ZPC Online portaal{" "}
        voor de operationele kant.
      </p>
      <p>
        Voor uitzenden en detachering gelden daarnaast de NBBU-kaders.{" "}
        {brand.name} is NBBU-aangesloten. Meer daarover op onze pagina over{" "}
        NBBU-gecertificeerde uitzendbureau diensten
        .
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Checklist: kiezen voor een gecertificeerde bemiddelaar
      </h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Vraag naar actueel SNA-certificaat en scope</li>
        <li>Controleer of bemiddeling én detachering gedekt zijn</li>
        <li>Beoordeel document- en verificatieprocessen</li>
        <li>Leg afspraken vast in een raamovereenkomst</li>
        <li>Gebruik portaalrapportages bij interne audits</li>
        <li>Evalueer periodiek samenwerking en compliance</li>
      </ol>

      <figure className="my-8 rounded-xl overflow-hidden border border-border">
        <Image
          src="/images/hero-team.jpg"
          alt="ZorgpuntConnect team biedt SNA-gecertificeerde bemiddeling in de zorg"
          width={1200}
          height={675}
          className="w-full h-auto object-cover max-h-72"
        />
        <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/30">
          Certificering en persoonlijk contact gaan bij ons hand in hand.
        </figcaption>
      </figure>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Laten we het testen
      </h2>
      <p>
        Zoekt u een bemiddelaar die niet alleen professionals levert, maar ook
        gecontroleerd en transparant werkt? Vraag een gratis gesprek aan.
        {brand.name} legt uit hoe SNA-certificering in de praktijk werkt en welke
        samenwerkingsvorm past bij uw organisatie.
      </p>
    </>
  )
}
