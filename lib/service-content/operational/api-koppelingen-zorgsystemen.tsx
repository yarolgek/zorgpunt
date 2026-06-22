import Link from "next/link"
import type { RichServicePage } from "@/lib/service-content/types"
import { brand } from "@/lib/brand"

export const apiKoppelingenContent: RichServicePage = {
  slug: "api-koppelingen-zorgsystemen",
  seo: {
    title:
      "API-koppelingen met zorgsystemen | Integratie Mijn ZPC via ZorgpuntConnect",
    description:
      "API-koppelingen tussen Mijn ZPC en uw zorgsystemen. Minder dubbele invoer voor planning, uren en personeelsdata. ZorgpuntConnect werkt samen met uw IT.",
    h1: "API-koppelingen met zorgsystemen: Mijn ZPC naadloos in uw IT-landschap",
    primaryKeyword: "API-koppelingen zorgsystemen",
    imageAlts: [
      "IT-afdeling bespreekt API-koppeling tussen zorgsysteem en Mijn ZPC",
      "Data-uitwisseling tussen ZorgpuntConnect portaal en HR-software",
      "Zorgorganisatie integreert planning en uren via API met ZorgpuntConnect",
    ],
  },
  relatedSlugs: [
    "zpc-online-portaal-opdrachtgevers",
    "roosterplanning-personeelsbezetting",
    "geautomatiseerde-facturatie-selfbilling",
    "rapportage-analyse-personeelsinzet",
    "documentbeheer-verificatie-zorgprofessionals",
  ],
  faqs: [
    {
      question: "Wat zijn API-koppelingen in de context van ZorgpuntConnect?",
      answer:
        "API-koppelingen zijn technische verbindingen tussen Mijn ZPC en uw bestaande software, bijvoorbeeld planning, urenregistratie, HR of financiële systemen. Zo wisselen systemen gegevens uit zonder handmatige dubbele invoer.",
    },
    {
      question: "Welke gegevens kunnen worden gekoppeld?",
      answer:
        "Veelvoorkomende koppelingen betreffen planning en roosters, goedgekeurde uren, personeels- of opdrachtgegevens en factuurgegevens. Samen met uw IT bepalen we wat haalbaar en veilig is.",
    },
    {
      question: "Is een API-koppeling verplicht?",
      answer:
        "Nee. Veel opdrachtgevers werken volledig via het ZPC Online portaal. API-koppelingen zijn vooral interessant voor grotere organisaties met eigen zorgsystemen of centrale HR- en finance-omgevingen.",
    },
    {
      question: "Hoe verloopt een integratietraject?",
      answer:
        "Na raamovereenkomst en portaaltoegang bespreken we uw wensen met IT of leverancier. We inventariseren welke data uitwisseling nodig is, testen in een gecontroleerde omgeving en schakelen pas live na goedkeuring.",
    },
    {
      question: "Hoe zit het met privacy en AVG?",
      answer:
        "Alleen noodzakelijke gegevens worden uitgewisseld, conform afspraken in de raamovereenkomst en privacywetgeving. Toegang en logging worden afgestemd op uw compliance-eisen.",
    },
    {
      question: "Werkt API-koppeling samen met facturatie?",
      answer:
        "Ja. Goedgekeurde uren uit uw systeem of uit Mijn ZPC kunnen de basis vormen voor geautomatiseerde facturatie en selfbilling, zodat finance minder handwerk heeft.",
    },
    {
      question: "Kunnen jullie koppelen aan elk zorgsysteem?",
      answer:
        "Dat hangt af van de mogelijkheden van uw leverancier en de beschikbare API's. We zijn pragmatisch: we kijken samen wat technisch en organisatorisch haalbaar is, zonder onrealistische beloften.",
    },
    {
      question: "Wanneer bespreken we API-koppelingen?",
      answer:
        "Idealiter tijdens de startfase na kennismaking en raamovereenkomst, wanneer portaaltoegang en processen worden ingericht. Automatisering en API staan expliciet in onze werkwijze.",
    },
  ],
  renderArticle: () => <ApiKoppelingenArticle />,
}

function ApiKoppelingenArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        <strong>API-koppelingen met zorgsystemen</strong> zorgen dat Mijn ZPC
        niet naast, maar in uw bestaande IT-landschap werkt. {brand.name}{" "}
        verwerkt jaarlijks circa 500.000 uur voor meer dan 45
        raamovereenkomsten. Bij die schaal wil geen enkele organisatie uren,
        roosters of factuurgegevens twee keer invoeren. API-integratie is
        daarom een logische vervolgstap na portaaltoegang.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Zoekintentie: wanneer API-koppelingen relevant zijn
      </h2>
      <p>
        IT-afdelingen, applicatiebeheerders en financieel controllers zoeken naar
        betrouwbare koppelingen tussen bemiddelingspartners en eigen systemen.
        Ze willen weten welke data kan stromen, hoe veilig dat gebeurt en wat de
        implementatie vraagt. Deze pagina legt uit hoe {brand.name} API&apos;s
        inzet naast het{" "}
        <Link
          href="/diensten/zpc-online-portaal-opdrachtgevers"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          ZPC Online portaal
        </Link>
        , en hoe dat samenhangt met{" "}
        <Link
          href="/diensten/roosterplanning-personeelsbezetting"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          planning
        </Link>
        ,{" "}
        <Link
          href="/diensten/geautomatiseerde-facturatie-selfbilling"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          facturatie
        </Link>{" "}
        en{" "}
        <Link
          href="/diensten/rapportage-analyse-personeelsinzet"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          rapportage
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wat is een API-koppeling?
      </h2>
      <p>
        Een API (Application Programming Interface) is een gestandaardiseerde
        manier waarop twee systemen met elkaar praten. In plaats van dat een
        planner uren uit Mijn ZPC overtypt in een HR-systeem, wisselen de
        systemen die gegevens automatisch uit, volgens afgesproken regels en
        autorisaties.
      </p>
      <p>
        Voor opdrachtgevers betekent dit minder fouten, snellere doorlooptijd en
        meer vertrouwen in cijfers voor budget en sturing. Voor {brand.name} past
        het bij onze belofte van automatisering: na de raamovereenkomst volgen
        portaaltoegang, inzicht in documentatie en waar mogelijk koppeling met
        uw omgeving.
      </p>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        Typische koppelgebieden
      </h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Planning en roosterbeheer</li>
        <li>Urenregistratie en goedkeuringsstromen</li>
        <li>Personeels- en opdrachtgegevens</li>
        <li>Factuurgegevens en financiële export</li>
        <li>Rapportage en managementdashboards</li>
      </ul>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Vergelijking: handmatig portaal vs. API-integratie
      </h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Aspect
              </th>
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Alleen portaal
              </th>
              <th className="text-left py-2 font-semibold text-foreground">
                Met API-koppeling
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Invoerwerk</td>
              <td className="py-3 pr-4">Handmatig in Mijn ZPC</td>
              <td className="py-3">Grotendeels automatisch</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Foutkans</td>
              <td className="py-3 pr-4">Hoger bij veel volume</td>
              <td className="py-3">Lager door één bron van waarheid</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Implementatie</td>
              <td className="py-3 pr-4">Snel na raamovereenkomst</td>
              <td className="py-3">Extra afstemming met IT</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Geschikt voor</td>
              <td className="py-3 pr-4">Alle opdrachtgevers</td>
              <td className="py-3">Grotere of IT-gedreven organisaties</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Rapportage</td>
              <td className="py-3 pr-4">Via Mijn ZPC</td>
              <td className="py-3">Ook in eigen BI of ERP</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Onze werkwijze bij integratie
      </h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Kennismaking en raamovereenkomst</li>
        <li>Portaaltoegang en basisprocessen in Mijn ZPC</li>
        <li>Inventarisatie met uw IT of softwareleverancier</li>
        <li>Scope: welke data, welke richting, welke frequentie</li>
        <li>Testomgeving en validatie met planners en finance</li>
        <li>Livegang en monitoring</li>
      </ol>
      <p>
        Deze volgorde sluit aan op hoe {brand.name} nieuwe opdrachtgevers
        onboardt: eerst zekerheid over processen en documentatie via{" "}
        <Link
          href="/diensten/documentbeheer-verificatie-zorgprofessionals"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          documentbeheer en verificatie
        </Link>
        , daarna schaal en automatisering.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        API in de bredere dienstverlening
      </h2>
      <p>
        API-koppelingen zijn geen los product, maar onderdeel van onze
        operationele ondersteuning. Ze versterken vooral grotere trajecten zoals{" "}
        <Link
          href="/diensten/detachering-zorgpersoneel"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          detachering
        </Link>{" "}
        en{" "}
        <Link
          href="/diensten/onderaanneming-zorgopdrachten"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          onderaanneming
        </Link>
        , waar veel professionals en uren tegelijk lopen. Met circa 1.500
        aangesloten zorgprofessionals en sterke posities in Limburg en
        Noord-Brabant verwerken we volumes waarbij integratie echt verschil
        maakt.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Veiligheid, AVG en betrouwbaarheid
      </h2>
      <p>
        Gegevensuitwisseling gebeurt alleen op basis van noodzaak en afspraak.
        {brand.name} is SNA NEN 4400-1 gecertificeerd, wat vertrouwen geeft in
        procesbeheersing en financiële integriteit. Bij API-trajecten stemmen we
        toegangsrechten, logging en verwerkersafspraken af met uw
        privacy- of security officer.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Checklist: API-koppeling voorbereiden
      </h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Breng in kaart welke systemen bron zijn voor uren en planning</li>
        <li>Betrek IT of leverancier vroeg in het gesprek</li>
        <li>Definieer welke velden minimaal moeten worden uitgewisseld</li>
        <li>Leg intern vast wie goedkeurt en wie eigenaar is van data</li>
        <li>Test met een beperkte afdeling vóór brede uitrol</li>
        <li>Koppel livegang aan werkende rapportages voor controle</li>
      </ol>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Laten we het testen
      </h2>
      <p>
        Niet elke organisatie heeft dag één een API nodig, maar het helpt om
        integratie vroeg te bespreken. Vraag een gratis gesprek aan en ontdek
        welke koppelingen haalbaar zijn tussen Mijn ZPC en uw zorgsystemen.
        Lieke en het team denken mee over planning, automatisering en een
        pragmatische route naar minder dubbele invoer.
      </p>
    </>
  )
}
