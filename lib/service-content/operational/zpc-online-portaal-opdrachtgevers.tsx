import Link from "next/link"
import Image from "next/image"
import type { RichServicePage } from "@/lib/service-content/types"
import { brand } from "@/lib/brand"

export const portaalContent: RichServicePage = {
  slug: "zpc-online-portaal-opdrachtgevers",
  seo: {
    title:
      "ZPC Online portaal voor opdrachtgevers | Mijn ZPC via ZorgpuntConnect",
    description:
      "ZPC Online portaal (Mijn ZPC) voor opdrachtgevers: opdrachten, planning, documentatie en communicatie in één omgeving. 24/7 toegang via ZorgpuntConnect.",
    h1: "ZPC Online portaal voor opdrachtgevers: alles rond personeelsinzet op één plek",
    primaryKeyword: "ZPC Online portaal opdrachtgevers",
    imageAlts: [
      "Opdrachtgever bekijkt Mijn ZPC portaal met overzicht van zorgopdrachten",
      "Dashboard in ZPC Online portaal toont beschikbare zorgprofessionals",
      "ZorgpuntConnect biedt digitaal portaal voor zorgorganisaties in Nederland",
    ],
  },
  relatedSlugs: [
    "roosterplanning-personeelsbezetting",
    "documentbeheer-verificatie-zorgprofessionals",
    "geautomatiseerde-facturatie-selfbilling",
  ],
  faqs: [
    {
      question: "Wat is het ZPC Online portaal?",
      answer:
        "Het ZPC Online portaal, ook wel Mijn ZPC genoemd, is het digitale platform van ZorgpuntConnect. Opdrachtgevers loggen in om opdrachten, professionals, documentatie, planning en communicatie te beheren.",
    },
    {
      question: "Wie krijgt toegang tot het portaal?",
      answer:
        "Na een kennismaking en raamovereenkomst ontvangt uw organisatie login-gegevens. Meerdere collega's, bijvoorbeeld planners, HR en finance, kunnen toegang krijgen volgens afspraak.",
    },
    {
      question: "Is het portaal altijd bereikbaar?",
      answer:
        "Ja. Mijn ZPC is online en 24/7 beschikbaar, zodat u ook buiten kantooruren inzicht heeft in lopende opdrachten en beschikbaarheid.",
    },
    {
      question: "Welke functies zitten in Mijn ZPC voor opdrachtgevers?",
      answer:
        "Onder meer roosterbeheer, documentbeheer met strikte verificatie, geautomatiseerde opdrachtovereenkomsten, facturatie en selfbilling, rapportage en analyse, en waar mogelijk API-koppelingen met uw systemen.",
    },
    {
      question: "Hoe hangt het portaal samen met documentcontrole?",
      answer:
        "U ziet in het portaal of professionals een compleet en geldig dossier hebben. Enkel wie administratief in orde is, wordt ingezet. Dat sluit aan op onze belofte van 100% documentcontrole.",
    },
    {
      question: "Kan ik via het portaal communiceren met ZorgpuntConnect?",
      answer:
        "Ja. Het portaal is ontworpen voor de dagelijkse praktijk: overzicht, veilige documentuitwisseling en korte lijnen met ons team. Bij ad hoc situaties blijft persoonlijk contact met planners beschikbaar.",
    },
    {
      question: "Werkt Mijn ZPC samen met onze bestaande software?",
      answer:
        "Waar haalbaar koppelen we via API's aan planning-, HR- of financiële systemen, zodat u minder dubbele invoer heeft. Zie onze pagina over API-koppelingen voor de aanpak.",
    },
    {
      question: "Hoe start ik met portaaltoegang?",
      answer:
        "Neem contact op voor een kennismaking. Na raamovereenkomst regelen we login, leggen we processen vast en begeleiden we uw team bij de eerste stappen in Mijn ZPC.",
    },
  ],
  renderArticle: () => <PortaalArticle />,
}

function PortaalArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        Het <strong>ZPC Online portaal</strong> (Mijn ZPC) is het hart van de
        samenwerking tussen uw organisatie en {brand.name}. In plaats van losse
        mails, spreadsheets en telefoontjes krijgt u één omgeving voor
        opdrachten, professionals, documentatie en administratie. Meer dan 45
        zorginstellingen werken al via ons portaal, met jaarlijks circa 500.000
        verwerkte uren in bewezen processen.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Zoekintentie: wat opdrachtgevers zoeken
      </h2>
      <p>
        Planners, HR-medewerkers en managers zoeken een betrouwbaar portaal om
        personeelsinzet te regelen zonder administratieve chaos. Ze willen weten
        of ze opdrachten kunnen plaatsen, beschikbaarheid zien, documenten
        controleren en facturatie kunnen volgen. Deze pagina legt uit wat Mijn
        ZPC biedt, hoe toegang werkt en hoe het aansluit op{" "}
        <Link
          href="/diensten/roosterplanning-personeelsbezetting"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          roosterplanning
        </Link>
        ,{" "}
        <Link
          href="/diensten/documentbeheer-verificatie-zorgprofessionals"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          documentbeheer
        </Link>{" "}
        en{" "}
        facturatie
        .
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wat is Mijn ZPC?
      </h2>
      <p>
        Mijn ZPC is de software die {brand.name} inzet voor bemiddeling,
        detachering en onderaanneming in de zorg. Het portaal verbindt
        opdrachtgevers met ons netwerk van circa 1.500 zorgprofessionals en met
        ons team in Roermond. Vanuit Limburg en Noord-Brabant, waar wij als top
        3 speler actief zijn, bedienen we ook opdrachtgevers in andere regio's.
      </p>
      <p>
        Het portaal is geen losse tool, maar onderdeel van onze full service
        aanpak: selectie, plaatsing, documentcontrole, planning, betalingen en
        rapportage lopen in één keten.
      </p>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        Kernfuncties voor opdrachtgevers
      </h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Overzicht van lopende en openstaande opdrachten</li>
        <li>Inzicht in beschikbare en ingezette zorgprofessionals</li>
        <li>Documentbeheer met strikte verificatie vóór inzet</li>
        <li>Gemakkelijke planning en roosterbeheer</li>
        <li>Geautomatiseerde opdrachtovereenkomsten en facturatie</li>
        <li>Rapportage en analyse voor managementinzicht</li>
        <li>Veilige communicatie en documentuitwisseling</li>
      </ul>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Overzicht: portaalmodules en doelgroep
      </h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Module
              </th>
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Voor wie
              </th>
              <th className="text-left py-2 font-semibold text-foreground">
                Voordeel
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Opdrachtenbeheer</td>
              <td className="py-3 pr-4">Planners, teamleiders</td>
              <td className="py-3">Snel zien wat openstaat en loopt</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Roosterbeheer</td>
              <td className="py-3 pr-4">Planning, HR</td>
              <td className="py-3">Minder gaten in het rooster</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Documentatie</td>
              <td className="py-3 pr-4">Kwaliteit, compliance</td>
              <td className="py-3">Alleen geverifieerde professionals</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Facturatie</td>
              <td className="py-3 pr-4">Finance, administratie</td>
              <td className="py-3">Selfbilling op goedgekeurde uren</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Rapportage</td>
              <td className="py-3 pr-4">Management</td>
              <td className="py-3">Inzicht in uren en bezetting</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Werkwijze: van kennismaking tot portaaltoegang
      </h2>
      <p>
        {brand.name} werkt volgens een vaste route die in onze introductie en
        praktijk steeds terugkomt:
      </p>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Kennismaking en inventarisatie van uw personeelsbehoefte</li>
        <li>Raamovereenkomst met afspraken over fee, factor en facturatie</li>
        <li>Login opdrachtgever in Mijn ZPC</li>
        <li>Inzicht in documentatie en kwalificaties van professionals</li>
        <li>Automatisering en waar nodig API-koppeling met uw systemen</li>
        <li>Persoonlijk contact met planners bij ad hoc situaties</li>
      </ol>
      <p>
        Die laatste stap is belangrijk: digitaal werken betekent niet dat u
        alleen met software zit. Lieke en het team blijven bereikbaar wanneer het
        rooster schuift of een dienst last minute moet worden ingevuld.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Documentcontrole en kwaliteit in het portaal
      </h2>
      <p>
        Een kernbelofte van {brand.name}: enkel professionals met geldige
        documentatie gaan aan het werk. In Mijn ZPC ziet u of een dossier
        compleet is. Dat sluit aan op onze{" "}
        kwaliteitscontrole en screening
        , waarin ook referenties en geschiktheid meewegen. Voor opdrachtgevers
        betekent dit minder risico en minder eigen administratie.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Rapportage, API en verdere integratie
      </h2>
      <p>
        Het portaal levert niet alleen operationeel overzicht, maar ook data
        voor sturing. Via{" "}
        rapportage en analyse{" "}
        ziet u waar capaciteit wordt ingezet en welke trends spelen. Grotere
        organisaties koppelen Mijn ZPC via{" "}
        API-koppelingen{" "}
        aan bestaande zorgsystemen, zodat uren en personeelsdata niet dubbel
        hoeven te worden ingevoerd.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Voor welke samenwerkingsvormen?
      </h2>
      <p>
        Mijn ZPC ondersteunt alle kernvormen van {brand.name}, waaronder{" "}
        bemiddeling van ZZP-zorgprofessionals
        , tussenkomst, detachering en onderaanneming. Het portaal past zich aan
        de gekozen contractvorm aan: fee bij bemiddeling, factor bij
        detachering, projectafspraken bij onderaanneming.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Checklist: portaaltoegang goed ingericht
      </h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Bepaal wie in uw organisatie portaaltoegang nodig heeft</li>
        <li>Leg intern vast wie opdrachten plaatst en uren goedkeurt</li>
        <li>Stem documentatie-eisen af met kwaliteit of HR</li>
        <li>Test rooster- en facturatiestromen in een proefperiode</li>
        <li>Plan periodieke rapportages voor management</li>
        <li>Bespreek API-wensen vroeg met IT als u systemen wilt koppelen</li>
      </ol>

      <figure className="my-8 rounded-xl overflow-hidden border border-border">
        <Image
          src="/images/app-preview.jpg"
          alt="ZPC Online portaal Mijn ZPC met overzicht voor zorgopdrachtgevers"
          width={1200}
          height={675}
          className="w-full h-auto object-cover max-h-72"
        />
        <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/30">
          Mijn ZPC brengt opdrachten, documentatie en administratie samen.
        </figcaption>
      </figure>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Laten we het testen
      </h2>
      <p>
        Zoals we zelf zeggen: laten we het gewoon eens testen. Vraag een gratis
        gesprek aan en ontdek hoe het ZPC Online portaal werkt voor uw
        organisatie. Wij regelen toegang, leggen afspraken vast en begeleiden u
        bij de eerste stappen in Mijn ZPC.
      </p>
    </>
  )
}
