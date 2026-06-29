import Link from "next/link"
import Image from "next/image"
import type { RichServicePage } from "@/lib/service-content/types"
import { brand } from "@/lib/brand"

export const roosterplanningContent: RichServicePage = {
  slug: "roosterplanning-personeelsbezetting",
  seo: {
    title:
      "Roosterplanning en personeelsbezetting | Mijn ZPC planning via ZorgpuntConnect",
    description:
      "Roosterplanning en personeelsbezetting voor zorgorganisaties via Mijn ZPC. ZorgpuntConnect ondersteunt planners met ~1.500 professionals en een digitaal portaal. Actief in Limburg en Noord-Brabant.",
    h1: "Roosterplanning en personeelsbezetting: grip op uw diensten en teams",
    primaryKeyword: "roosterplanning en personeelsbezetting",
    imageAlts: [
      "Planner bespreekt rooster en personeelsbezetting met zorgteam in Nederland",
      "Mijn ZPC portaal toont overzicht van diensten en beschikbare zorgprofessionals",
      "ZorgpuntConnect ondersteunt roosterplanning voor zorginstellingen in Limburg",
    ],
  },
  relatedSlugs: [
    "zpc-online-portaal-opdrachtgevers",
    "documentbeheer-verificatie-zorgprofessionals",
    "geautomatiseerde-facturatie-selfbilling",
  ],
  faqs: [
    {
      question: "Wat houdt roosterplanning via ZorgpuntConnect in?",
      answer:
        "Wij ondersteunen opdrachtgevers bij het invullen van roosters en personeelsbezetting via Mijn ZPC. U ziet beschikbaarheid, plant diensten en stemt af met ons netwerk van circa 1.500 aangesloten zorgprofessionals.",
    },
    {
      question: "Voor wie is deze dienst bedoeld?",
      answer:
        "Voor zorginstellingen en afdelingen die dagelijks worstelen met personeelsplanning, verzuim, piekdrukte of last-minute gaten in het rooster. Ook bij onderaanneming verzorgt ZPC roosterplanning en bezetting.",
    },
    {
      question: "Hoe helpt Mijn ZPC bij roosterbeheer?",
      answer:
        "Het portaal biedt gemakkelijke planning en roosterbeheer, inzicht in documentatie en kwalificaties, en overzicht voor analyse. Opdrachtgevers loggen in en zien wie beschikbaar is en welke diensten openstaan.",
    },
    {
      question: "Kunnen jullie snel schakelen bij ad hoc situaties?",
      answer:
        "Ja. Persoonlijk contact met onze planners en korte lijnen zijn expliciet onderdeel van onze werkwijze. Bij acute uitval of onverwachte piek proberen we snel een passende professional te vinden.",
    },
    {
      question: "Werkt roosterplanning samen met facturatie?",
      answer:
        "Ja. Geplande en gerealiseerde uren vormen de basis voor geautomatiseerde facturatie en selfbilling in Mijn ZPC. Zo loopt planning, uitvoering en administratie in één lijn door.",
    },
    {
      question: "Is roosterplanning ook onderdeel van onderaanneming?",
      answer:
        "Bij complete zorgteams in onderaanneming verzorgt ZPC roosterplanning en personeelsbezetting op regiebasis, zodat u zich kunt richten op uw kernwaarde: zorg bieden.",
    },
    {
      question: "In welke regio's zijn jullie het sterkst?",
      answer:
        "ZorgpuntConnect is gevestigd in Roermond en actief als top 3 speler in Limburg en Noord-Brabant, met raamovereenkomsten bij meer dan 45 zorginstellingen. Ook buiten deze regio's werken we met opdrachtgevers.",
    },
    {
      question: "Hoe start ik met roosterplanning via ZPC?",
      answer:
        "Na een kennismaking en raamovereenkomst krijgt u toegang tot het ZPC-portaal. Lieke en het team bespreken uw personeelsbehoefte en leggen afspraken vast over fee, factor en facturatie.",
    },
  ],
  renderArticle: () => <RoosterplanningArticle />,
}

function RoosterplanningArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        <strong>Roosterplanning en personeelsbezetting</strong> bepaalt of uw
        afdeling draait of telkens brandjes blust. Lege diensten, dubbele
        inplanningen en onduidelijkheid over beschikbaarheid kosten tijd én
        vertrouwen van cliënten. {brand.name} ondersteunt u bij dagelijkse
        personeelsplanning via Mijn ZPC, met persoonlijk contact met planners en
        toegang tot een netwerk van circa 1.500 zorgprofessionals.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Waarom deze pagina? Zoekintentie en wat u hier vindt
      </h2>
      <p>
        Planners en teamleiders zoeken op termen als roosterplanning,
        personeelsbezetting of zorgplanning omdat ze overzicht willen, sneller
        willen invullen en minder administratieve rompslomp. Deze pagina legt
        uit hoe {brand.name} dat aanpakt via het{" "}
        <Link
          href="/diensten/zpc-online-portaal-opdrachtgevers"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          ZPC Online portaal
        </Link>
        , welke processen daarbij horen en wanneer het slim is om met ons samen
        te werken.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wat roosterplanning in de zorg echt betekent
      </h2>
      <p>
        Roosterplanning is meer dan een Excel-sheet vullen. Het is afstemmen
        tussen beschikbaarheid van professionals, eisen van de afdeling,
        cliëntveiligheid en budget. In de praktijk betekent goede
        personeelsbezetting:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Inzicht in wie wanneer kan werken</li>
        <li>Snelle invulling bij ziekte, verlof of piekdrukte</li>
        <li>Duidelijke communicatie richting teams en professionals</li>
        <li>Koppeling tussen geplande en gerealiseerde uren</li>
        <li>Minder stress op de werkvloer door voorspelbaarheid</li>
      </ul>
      <p>
        {brand.name} is sinds 2022 opgericht door professionals uit de sector
        zelf en heeft zich in korte tijd ontwikkeld tot een vaste waarde in
        Limburg en Noord-Brabant. Kwaliteit, persoonlijke aanpak en warme
        contacten staan vanaf dag één centraal.
      </p>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        Dagelijkse uitdaging: de juiste professional op de juiste manier
      </h3>
      <p>
        Zoals in onze introductie staat: wij ondersteunen u tijdens de
        dagelijkse uitdaging van personeelsplanning, binnen uw afdeling in te
        vullen met de juiste professional op de gewenste manier. Dat kan via{" "}
        <Link
          href="/diensten/bemiddeling-zzp-zorgprofessionals"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          bemiddeling van ZZP&apos;ers
        </Link>
        ,{" "}
        detachering{" "}
        of bij complete teams via{" "}
        onderaanneming
        . De planningstool is daarbij het verbindende element.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Roosterbeheer in Mijn ZPC
      </h2>
      <p>
        Mijn ZPC is het op maat gemaakte digitale portaal voor opdrachtgevers en
        zelfstandige professionals. Voor planning en bezetting biedt het onder
        meer:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Gemakkelijke planning en roosterbeheer</li>
        <li>Overzicht en rapportage voor inzicht en analyse</li>
        <li>Inzicht in documentatie en kwalificaties van professionals</li>
        <li>Veilige en gebruikersvriendelijke interface</li>
        <li>Koppeling met geautomatiseerde opdrachtovereenkomsten</li>
      </ul>
      <p>
        Alleen professionals met geldige documentatie gaan aan het werk. Dat
        sluit direct aan op onze dienst{" "}
        documentbeheer en verificatie
        , zodat u bij het plannen niet apart hoeft na te denken over VOG,
        diploma&apos;s of verlopen certificaten.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Van kennismaking tot lopend rooster
      </h2>
      <p>Onze werkwijze start met begrip van uw organisatie:</p>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Kennismaking: wie bent u, welke zorgbehoefte en welke profielen?</li>
        <li>Keuze invulling: ZZP-bemiddeling, detachering of onderaanneming</li>
        <li>Raamovereenkomst met fee, factor en facturatie</li>
        <li>Toegang tot het ZPC-portaal voor opdrachtgevers</li>
        <li>Lopende planning met persoonlijk support bij ad hoc situaties</li>
      </ol>
      <p>
        Jaarlijks worden via {brand.name} circa 500.000 uren gerealiseerd. Die
        schaal betekent dat er vaak sneller een match is dan wanneer u alleen
        intern wervend bent.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wanneer welke aanpak? Overzicht
      </h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Situatie
              </th>
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Planning via ZPC
              </th>
              <th className="text-left py-2 font-semibold text-foreground">
                Voordeel
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Structurele gaten in het rooster</td>
              <td className="py-3 pr-4">Vaste pool + portaalinzicht</td>
              <td className="py-3">Continuïteit voor cliënten</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Acute uitval één dienst</td>
              <td className="py-3 pr-4">Snelle planner-lijn</td>
              <td className="py-3">Korte reactietijd</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Nieuwe locatie of team</td>
              <td className="py-3 pr-4">Onderaanneming + ZPC-rooster</td>
              <td className="py-3">Volledig ontzorgd</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Piekdrukte (vakantie, griep)</td>
              <td className="py-3 pr-4">Flexibele inzet uit netwerk</td>
              <td className="py-3">Opschalen zonder vaste contracten</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Koppeling met facturatie en rapportage
      </h2>
      <p>
        Geplande uren die daadwerkelijk worden gewerkt, vormen de basis voor{" "}
        geautomatiseerde facturatie en selfbilling
        . Dat voorkomt discussie achteraf en geeft management inzicht via
        rapportages. Voor opdrachtgevers met meer dan 45 raamovereenkomsten in
        ons netwerk is die integratie bewezen in de praktijk.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        De regionale context: Limburg en Noord-Brabant
      </h2>
      <p>
        Vanuit Roermond, centraal in de actieve regio, werkt {brand.name} als
        top 3 speler en voor diverse instellingen als preferred supplier. Dat
        betekent korte lijnen, kennis van lokale aanbieders en realistische
        verwachtingen over beschikbaarheid. Ook landelijk werken we met
        opdrachtgevers die onze planningstools en het professionalenetwerk
        waarderen.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Checklist voor planners en teamleiders
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Leg per dienst vast welk profiel en welke kwalificaties nodig zijn</li>
        <li>Plan vervanging vóór vakantieperiodes, niet erna</li>
        <li>Gebruik portaalinzicht voor beschikbaarheid, niet alleen bellen</li>
        <li>Controleer documentstatus vóór inplanning (automatisch in Mijn ZPC)</li>
        <li>Evalueer na piekperiodes: wat ging goed, wat kan strakker?</li>
        <li>Houd één aanspreekpunt bij ZPC voor ad hoc vragen</li>
      </ul>

      <figure className="my-8 rounded-xl overflow-hidden border border-border">
        <Image
          src="/images/app-preview.jpg"
          alt="Mijn ZPC portaal met overzicht van roosterplanning en personeelsbezetting"
          width={1200}
          height={675}
          className="w-full h-auto object-cover max-h-72"
        />
        <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/30">
          Mijn ZPC brengt planning, documenten en facturatie samen in één portaal.
        </figcaption>
      </figure>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Volgende stap
      </h2>
      <p>
        Wilt u roosterplanning en personeelsbezetting uitbesteden aan een partner
        die de zorguitdagingen snapt? Neem contact op met {brand.name}. Het
        eerste gesprek is gratis. Samen kijken we of onze aanpak past bij uw
        afdeling en hoe snel we kunnen starten.
      </p>
    </>
  )
}
