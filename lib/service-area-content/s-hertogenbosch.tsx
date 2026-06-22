import Link from "next/link"
import Image from "next/image"
import { OfficeMapLink } from "@/components/landing/office-map-link"
import type { RichAreaPage } from "@/lib/service-area-content/types"
import { brand } from "@/lib/brand"

export const denBoschContent: RichAreaPage = {
  slug: "s-hertogenbosch",
  proximity: "circa 90 km van ons kantoor in Roermond, ongeveer een uur via de A2",
  seo: {
    title:
      "Beste Zorgbemiddeling 's-Hertogenbosch, ZorgpuntConnect | Zorgpersoneel inhuren, ZZP-zorgprofessionals, detachering en uitzendbureau voor de zorg in 's-Hertogenbosch en omgeving (Noord-Brabant)",
    description:
      "Zorgpersoneel nodig in 's-Hertogenbosch? ZorgpuntConnect bemiddelt en detacheert gekwalificeerde zorgprofessionals voor instellingen in Den Bosch, Rosmalen, Engelen en heel de regio.",
    h1: "Zorgpersoneel in 's-Hertogenbosch: bemiddeling en detachering voor Den Bosch",
    primaryKeyword: "zorgpersoneel 's-Hertogenbosch",
    imageAlts: [
      "Zorgprofessional aan het werk in een zorginstelling in 's-Hertogenbosch",
      "ZorgpuntConnect bemiddelt zorgpersoneel voor Den Bosch en Rosmalen",
      "Verpleegkundige ingezet via ZorgpuntConnect in de regio 's-Hertogenbosch",
      "Zorgteam in Den Bosch ondersteund door ZorgpuntConnect uit Roermond",
    ],
  },
  relatedAreaSlugs: ["eindhoven", "tilburg", "nijmegen", "helmond"],
  faqs: [
    {
      question: "Levert ZorgpuntConnect zorgpersoneel in heel 's-Hertogenbosch?",
      answer:
        "Ja. Wij bemiddelen en detacheren zorgprofessionals voor instellingen in alle wijken van 's-Hertogenbosch, waaronder het Centrum, Rosmalen, Engelen, Maaspoort en de Groote Wielen, plus omliggende plaatsen zoals Vught, Berlicum en Sint-Michielsgestel.",
    },
    {
      question: "Hoe snel kan ik in Den Bosch een zorgprofessional inzetten?",
      answer:
        "Afhankelijk van functie en beschikbaarheid schakelen we snel via ons netwerk van circa 1.500 zorgprofessionals. 's-Hertogenbosch ligt op ongeveer een uur van ons kantoor in Roermond, direct via de A2, en valt binnen ons werkgebied in Noord-Brabant.",
    },
    {
      question: "Voor welke zorgsectoren bemiddelen jullie in Den Bosch?",
      answer:
        "Onder meer GGZ, VVT (ouderen- en thuiszorg), gehandicaptenzorg, jeugdzorg en sociaal werk. 's-Hertogenbosch kent grote werkgevers zoals het Jeroen Bosch Ziekenhuis, GGZ Oost Brabant, Reinier van Arkel, ouderenzorgorganisatie Van Neynsel en Cello in de gehandicaptenzorg.",
    },
    {
      question: "Werken jullie met ZZP'ers of met detachering in Den Bosch?",
      answer:
        "Beide. Via bemiddeling van ZZP-zorgprofessionals, tussenkomst, detachering of werving en selectie vinden we de vorm die past bij uw organisatie. We werken DBA- en VBAR-proof waar van toepassing.",
    },
    {
      question: "Heeft ZorgpuntConnect een kantoor in 's-Hertogenbosch?",
      answer:
        "Ons kantoor staat in Roermond (Zwartbroekpoort 2, 6041 LS). 's-Hertogenbosch valt binnen ons werkgebied in Noord-Brabant, waar we als top 3 speler actief zijn. We bedienen de stad met persoonlijk contact en korte lijnen, ondersteund door Mijn ZPC.",
    },
    {
      question: "Hoe wordt de kwaliteit van zorgpersoneel gecontroleerd?",
      answer:
        "Vóór inzet controleren we onder meer diploma's, BIG-registratie waar van toepassing, VOG en relevante certificaten. Enkel professionals met geldige documentatie gaan aan het werk, beheerd via Mijn ZPC.",
    },
    {
      question: "Kunnen jullie helpen bij piekdrukte of ziekteverzuim in Den Bosch?",
      answer:
        "Zeker. Veel opdrachtgevers in de regio 's-Hertogenbosch zoeken ons op voor tijdelijke versterking bij verzuim, vakanties of onverwachte uitval. Snelheid en een goede match staan dan voorop.",
    },
    {
      question: "Wat kost het inhuren van zorgpersoneel in Den Bosch?",
      answer:
        "Tarief en vergoeding hangen af van functie, inzetvorm en duur. Bij ZZP-bemiddeling geldt een fee over gewerkte uren, bij detachering een uurtarief op basis van factor. Het eerste adviesgesprek is gratis en vrijblijvend.",
    },
    {
      question: "Hoe vraag ik zorgpersoneel voor 's-Hertogenbosch aan?",
      answer:
        "Neem contact op via onze website of bel ons kantoor in Roermond. Na een korte kennismaking en raamovereenkomst krijgt u toegang tot Mijn ZPC en stellen we passende professionals voor.",
    },
  ],
  renderArticle: () => <DenBoschArticle />,
}

function DenBoschArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        Zoekt u <strong>zorgpersoneel in &apos;s-Hertogenbosch</strong> dat snel
        inzetbaar is en past bij uw team? Den Bosch is de hoofdstad van
        Noord-Brabant en een belangrijk zorgknooppunt. Met een groeiende stad,
        nieuwbouw in de Groote Wielen en een aanhoudend personeelstekort in de
        zorg is betrouwbare bemiddeling cruciaal. {brand.name} bemiddelt en
        detacheert gekwalificeerde zorgprofessionals voor instellingen in heel
        &apos;s-Hertogenbosch, van het Centrum tot Rosmalen en van Engelen tot de
        Maaspoort.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Lokale zorgvraag in 's-Hertogenbosch en omgeving
      </h2>
      <p>
        &apos;s-Hertogenbosch telt ruim 155.000 inwoners en groeit gestaag. Grote
        werkgevers zoals het Jeroen Bosch Ziekenhuis, GGZ-aanbieders Reinier van
        Arkel en GGZ Oost Brabant, ouderenzorgorganisatie Van Neynsel en Cello in
        de gehandicaptenzorg vragen voortdurend om gekwalificeerd personeel. De
        krapte op de arbeidsmarkt raakt vooral kleinere aanbieders, wijkteams en
        particuliere instellingen die niet kunnen wedijveren met de wervingskracht
        van de grote namen.
      </p>
      <p>
        Daar komt {brand.name} in beeld. Vanuit ons kantoor in Roermond, op
        ongeveer een uur rijden direct via de A2, bedienen we opdrachtgevers in de
        regio &apos;s-Hertogenbosch. We zijn als top 3 speler actief in Limburg en
        Noord-Brabant en verwerken jaarlijks circa 500.000 uur voor meer dan 45
        raamovereenkomsten.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Waarom Bossche zorgorganisaties voor ons kiezen
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Snel schakelen:</strong> een netwerk van circa 1.500
          zorgprofessionals voor acute en structurele inzet
        </li>
        <li>
          <strong>Persoonlijk contact:</strong> korte lijnen met een vaste
          planner, ook bij ad hoc situaties
        </li>
        <li>
          <strong>100% documentcontrole:</strong> enkel professionals met geldige
          papieren gaan aan het werk
        </li>
        <li>
          <strong>SNA NEN 4400-1 gecertificeerd</strong> en NBBU-aangesloten:
          betrouwbaar en gecontroleerd
        </li>
        <li>
          <strong>Digitaal gemak:</strong> planning, documentatie en facturatie
          in één portaal, Mijn ZPC
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Onze diensten voor 's-Hertogenbosch
      </h2>
      <p>
        Of u nu structureel personeel zoekt of een gat in het rooster moet
        vullen, wij stemmen de vorm af op uw situatie:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <Link
            href="/diensten/bemiddeling-zzp-zorgprofessionals"
            className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
          >
            Bemiddeling van ZZP-zorgprofessionals
          </Link>{" "}
          voor flexibele inzet
        </li>
        <li>
          <Link
            href="/diensten/detachering-zorgpersoneel"
            className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
          >
            Detachering van zorgpersoneel
          </Link>{" "}
          bij langere opdrachten
        </li>
        <li>
          <Link
            href="/diensten/ggz-personeel"
            className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
          >
            GGZ personeel
          </Link>{" "}
          voor ambulante en klinische settingen
        </li>
        <li>
          <Link
            href="/diensten/vvt-personeel"
            className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
          >
            VVT personeel
          </Link>{" "}
          voor ouderen- en thuiszorg
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wijken en omgeving die wij bedienen
      </h2>
      <p>
        Onze professionals werken door heel &apos;s-Hertogenbosch en de
        omliggende plaatsen. Denk aan:
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Wijk
              </th>
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Kenmerk
              </th>
              <th className="text-left py-2 font-semibold text-foreground">
                Typische zorgvraag
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Rosmalen</td>
              <td className="py-3 pr-4">Grote woonkern</td>
              <td className="py-3">VVT, wijkzorg, gezinnen</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Centrum</td>
              <td className="py-3 pr-4">Historische binnenstad</td>
              <td className="py-3">GGZ, sociaal werk</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Maaspoort</td>
              <td className="py-3 pr-4">Naoorlogse wijk</td>
              <td className="py-3">Ouderenzorg, thuiszorg</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Engelen / Groote Wielen</td>
              <td className="py-3 pr-4">Nieuwbouw, dorps</td>
              <td className="py-3">VVT, gehandicaptenzorg</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Ook in Vught, Berlicum, Sint-Michielsgestel en Heusden zetten wij
        professionals in. Grenst uw locatie aan &apos;s-Hertogenbosch? Dan valt u
        vrijwel zeker binnen ons werkgebied.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Bereikbaarheid en nabijheid
      </h2>
      <p>
        Ons kantoor staat aan de Zwartbroekpoort 2 in Roermond.
        &apos;s-Hertogenbosch ligt op circa 90 kilometer, ongeveer een uur direct
        via de A2. We kennen de regio: van de Markt en de Sint-Jan tot de
        woonwijken in Rosmalen en de Maaspoort. Voor kennismakingen reizen we naar
        u toe; de dagelijkse samenwerking verloopt digitaal via{" "}
        <Link
          href="/diensten/zpc-online-portaal-opdrachtgevers"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          Mijn ZPC
        </Link>
        .
      </p>
      <OfficeMapLink />

      <figure className="my-8 rounded-xl overflow-hidden border border-border">
        <Image
          src="/images/werkgebieden/s-hertogenbosch.webp"
          alt="ZorgpuntConnect bemiddelt zorgpersoneel voor zorgorganisaties in 's-Hertogenbosch"
          width={1200}
          height={675}
          className="w-full h-auto object-cover max-h-72"
        />
        <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/30">
          Gekwalificeerde zorgprofessionals voor de regio Den Bosch.
        </figcaption>
      </figure>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Werken in de buurt: ook in omliggende steden
      </h2>
      <p>
        &apos;s-Hertogenbosch ligt centraal in Noord-Brabant. Bekijk ook onze
        pagina&apos;s voor{" "}
        <Link href="/werkgebieden/tilburg" className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline">
          Tilburg
        </Link>{" "}
        en{" "}
        <Link
          href="/werkgebieden/eindhoven"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          Eindhoven
        </Link>
        . Veel professionals werken flexibel in meerdere gemeenten in de regio.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Klaar om de juiste match te vinden in 's-Hertogenbosch?
      </h2>
      <p>
        Zoals we zelf zeggen: laten we het gewoon eens testen. Vraag een gratis,
        vrijblijvend adviesgesprek aan. Lieke en het team bespreken uw
        personeelsvraag in &apos;s-Hertogenbosch en leggen uit hoe snel we kunnen
        starten.
      </p>
    </>
  )
}
