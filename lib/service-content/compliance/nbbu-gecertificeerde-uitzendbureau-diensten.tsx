import Link from "next/link"
import type { RichServicePage } from "@/lib/service-content/types"
import { brand } from "@/lib/brand"

export const nbbuContent: RichServicePage = {
  slug: "nbbu-gecertificeerde-uitzendbureau-diensten",
  seo: {
    title:
      "NBBU-gecertificeerde uitzendbureau diensten | Detacheren via ZorgpuntConnect",
    description:
      "NBBU-gecertificeerde uitzendbureau diensten van ZorgpuntConnect. Uitzenden en detacheren volgens branchenormen en CAO Uitzendkrachten in de zorg.",
    h1: "NBBU-gecertificeerde uitzendbureau diensten: flexibel personeel met branchezekerheid",
    primaryKeyword: "NBBU-gecertificeerde uitzendbureau diensten",
    imageAlts: [
      "ZorgpuntConnect levert NBBU-conforme uitzend- en detacheringdiensten",
      "Uitzendkracht in zorginstelling via NBBU-gecertificeerde bemiddelaar",
      "Opdrachtgever bespreekt detachering met ZorgpuntConnect team",
    ],
  },
  relatedSlugs: [
    "detachering-zorgpersoneel",
    "sna-nen-4400-1-gecertificeerde-bemiddeling",
    "werving-en-selectie",
  ],
  faqs: [
    {
      question: "Wat is de NBBU?",
      answer:
        "De Nederlandse Bond van Bemiddelings- en Uitzendondernemingen (NBBU) is de brancheorganisatie voor uitzendbureaus. Lidmaatschap betekent dat algemene voorwaarden en kwaliteitsstandaarden van de branche worden toegepast.",
    },
    {
      question: "Is ZorgpuntConnect NBBU-aangesloten?",
      answer:
        "Ja. ZorgpuntConnect is aangesloten bij de NBBU en SNA-gecertificeerd. Onze aanvullende voorwaarden voor werving, uitzending en detachering zijn mede gebaseerd op de NBBU Algemene Voorwaarden.",
    },
    {
      question: "Wat is het verschil tussen uitzenden en detacheren?",
      answer:
        "Bij uitzenden is er een driehoeksverhouding: opdrachtgever, uitzendkracht en uitzendonderneming. Bij detachering werkt de professional tijdelijk bij u, terwijl ZorgpuntConnect het bemiddelings- of werkgeverskader verzorgt. Welke vorm past, bespreken we per situatie.",
    },
    {
      question: "Geldt de CAO Uitzendkrachten?",
      answer:
        "Voor uitzendkrachten gelden de rechten en plichten uit de CAO Uitzendkrachten en NBBU-kaders. Dat borgt eerlijke arbeidsvoorwaarden en duidelijke afspraken met opdrachtgevers.",
    },
    {
      question: "Kan ik via NBBU-diensten ook werven en selecteren?",
      answer:
        "Ja. Werving en selectie kan gericht zijn op uitzending, detachering of rechtstreekse indiensttreding. Bij uitzending en detachering is werving vaak opgenomen in het uurtarief.",
    },
    {
      question: "Hoe hangt NBBU samen met SNA?",
      answer:
        "NBBU borgt brancheafspraken rond uitzenden. SNA NEN 4400-1 toetst betrouwbaarheid en inlenersaansprakelijkheid. ZorgpuntConnect combineert beide voor een stevig compliance-kader.",
    },
    {
      question: "Werkt dit ook voor zorgprofessionals?",
      answer:
        "Ja. Wij passen NBBU- en SNA-kaders toe binnen onze zorgbemiddeling: verpleegkundigen, begeleiders en andere professionals voor GGZ, VVT, GHZ en meer.",
    },
    {
      question: "Hoe start ik met uitzenden of detacheren via ZPC?",
      answer:
        "Neem contact op voor een kennismaking. We bespreken uw personeelsvraag, leggen afspraken vast in een raamovereenkomst en regelen portaaltoegang en documentcontrole vóór inzet.",
    },
  ],
  renderArticle: () => <NbbuArticle />,
}

function NbbuArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        <strong>NBBU-gecertificeerde uitzendbureau diensten</strong> bieden
        opdrachtgevers in de zorg een bewezen model voor flexibele
        personeelsinzet. Uitzenden en detacheren via een NBBU-aangesloten
        organisatie betekent: duidelijke arbeidsvoorwaarden, erkende
        branchevoorwaarden en een driehoeksverhouding die juridisch is
        uitgewerkt. {brand.name} is NBBU-aangesloten en SNA-gecertificeerd,
        met persoonlijk contact en Mijn ZPC als digitaal fundament.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Zoekintentie: wanneer opdrachtgevers NBBU zoeken
      </h2>
      <p>
        HR en inkoop willen flexibel personeel zonder zelf alle juridische en
        CAO-complexiteit te dragen. Ze zoeken een partner die uitzenden en
        detacheren volgens branchenormen organiseert. Deze pagina legt uit wat
        NBBU-lidmaatschap inhoudt, hoe {brand.name} dat toepast in de zorg en
        hoe het samenhangt met{" "}
        <Link
          href="/diensten/detachering-zorgpersoneel"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          detachering
        </Link>
        ,{" "}
        <Link
          href="/diensten/werving-en-selectie"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          werving en selectie
        </Link>{" "}
        en{" "}
        SNA-certificering
        .
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wat betekent NBBU in de praktijk?
      </h2>
      <p>
        De NBBU stelt kaders voor uitzendondernemingen: algemene voorwaarden,
        afspraken met opdrachtgevers en bescherming van uitzendkrachten. Voor{" "}
        {brand.name} betekent dat dat onze aanvullende voorwaarden voor werving,
        uitzending en detachering mede zijn gebaseerd op de Algemene Voorwaarden
        voor het ter beschikking stellen van uitzendkrachten van de NBBU.
      </p>
      <p>
        Opdrachtgevers profiteren van een bewezen model: rechten van
        uitzendkrachten zijn geborgd, afspraken met de inlener zijn helder en
        er is aansluiting op de CAO Uitzendkrachten waar van toepassing.
      </p>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        De driehoeksverhouding
      </h3>
      <p>
        Bij uitzenden zijn drie partijen betrokken: de opdrachtgever, de
        medewerker en de uitzendonderneming. Die verhouding verschilt wezenlijk
        van directe ZZP-inzet of het leveren van goederen. Begrip van die
        driehoek is essentieel voor goede samenwerking en verwachtingsmanagement
        op de werkvloer.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Uitzenden vs. detacheren in de zorg
      </h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Vorm
              </th>
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Kenmerk
              </th>
              <th className="text-left py-2 font-semibold text-foreground">
                Wanneer geschikt
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Uitzenden</td>
              <td className="py-3 pr-4">Driehoeksverhouding, CAO Uitzendkrachten</td>
              <td className="py-3">Korte tot middellange flexibele inzet</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Detachering</td>
              <td className="py-3 pr-4">Tijdelijke inzet bij opdrachtgever</td>
              <td className="py-3">Langere projecten, structurele tekorten</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Werving & selectie</td>
              <td className="py-3 pr-4">Vaste of tijdelijke indiensttreding</td>
              <td className="py-3">Structurele versterking eigen personeel</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">ZZP-bemiddeling</td>
              <td className="py-3 pr-4">Zelfstandige professional</td>
              <td className="py-3">Flexibel, met aandacht voor DBA</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Werving, binding en overname
      </h2>
      <p>
        Bij uitzending en detachering is werving en selectie vaak opgenomen in
        het uurtarief. {brand.name} investeert in het vinden en binden van
        medewerkers. Daarom gelden afspraken over minimale inzetperiodes
        voordat een ingeleende medewerker direct in dienst kan worden genomen.
        Wil u eerder overnemen, dan is dat mogelijk tegen een afgesproken
        vergoeding. Transparantie hierover voorkomt verrassingen achteraf.
      </p>
      <p>
        Meer over onze aanpak bij{" "}
        werving en selectie
        .
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        NBBU, SNA en kwaliteit in één keten
      </h2>
      <p>
        NBBU-lidmaatschap en SNA NEN 4400-1 certificering versterken elkaar.
        Brancheafspraken rond uitzenden worden gecombineerd met extern
        gecontroleerde betrouwbaarheid. Daarbovenop geldt onze eigen
        kwaliteitslijn: screening, documentcontrole en alleen inzet na
        verificatie. Zie{" "}
        kwaliteitscontrole en screening{" "}
        en{" "}
        documentbeheer
        .
      </p>
      <p>
        Voor ZZP-inzet blijft{" "}
        DBA-conformiteit{" "}
        een apart aandachtspunt. NBBU-diensten en ZZP-bemiddeling vullen elkaar
        aan: afhankelijk van uw vraag kiezen we de passende vorm.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Operationele ondersteuning
      </h2>
      <p>
        NBBU-conform uitzenden betekent niet terug naar papieren urenstaten.
        Via Mijn ZPC regelen opdrachtgevers planning, documentatie en
        facturatie digitaal. Met meer dan 45 raamovereenkomsten en circa 1.500
        professionals in ons netwerk verwerken we jaarlijks grote volumes uren,
        vooral in Limburg en Noord-Brabant waar wij als top 3 speler actief
        zijn.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Checklist: NBBU-partner kiezen
      </h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Controleer NBBU-lidmaatschap en SNA-certificering</li>
        <li>Bespreek of uitzenden, detachering of werving past</li>
        <li>Leg tarief, factor en minimale periode vast</li>
        <li>Regel portaaltoegang voor planners en HR</li>
        <li>Stem documentatie-eisen af vóór eerste inzet</li>
        <li>Plan periodieke evaluatie van samenwerking</li>
      </ol>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Laten we het testen
      </h2>
      <p>
        Flexibel personeel in de zorg vraagt om een partner die branchekaders
        kent én de praktijk van zorgteams begrijpt. Vraag een gratis gesprek aan
        en ontdek hoe NBBU-gecertificeerde uitzend- en detacheringdiensten van
        {brand.name} werken voor uw organisatie.
      </p>
    </>
  )
}
