import Link from "next/link"
import Image from "next/image"
import { OfficeMapLink } from "@/components/landing/office-map-link"
import type { RichAreaPage } from "@/lib/service-area-content/types"
import { brand } from "@/lib/brand"

export const tilburgContent: RichAreaPage = {
  slug: "tilburg",
  proximity: "circa 85 km van ons kantoor in Roermond, ongeveer een uur via de A67 en A58",
  seo: {
    title:
      "Beste Zorgbemiddeling Tilburg, ZorgpuntConnect | Zorgpersoneel inhuren, ZZP-zorgprofessionals, detachering en uitzendbureau voor de zorg in Tilburg en omgeving (Midden-Brabant)",
    description:
      "Zorgpersoneel nodig in Tilburg? ZorgpuntConnect bemiddelt en detacheert gekwalificeerde zorgprofessionals voor instellingen in Reeshof, Centrum, Berkel-Enschot en heel Midden-Brabant.",
    h1: "Zorgpersoneel in Tilburg: bemiddeling en detachering voor Midden-Brabant",
    primaryKeyword: "zorgpersoneel Tilburg",
    imageAlts: [
      "Zorgprofessional aan het werk in een zorginstelling in Tilburg",
      "ZorgpuntConnect bemiddelt zorgpersoneel voor Reeshof en Centrum Tilburg",
      "Verpleegkundige ingezet via ZorgpuntConnect in de regio Midden-Brabant",
      "Zorgteam in Tilburg ondersteund door ZorgpuntConnect uit Roermond",
    ],
  },
  relatedAreaSlugs: [
    "breda",
    "s-hertogenbosch",
    "eindhoven",
  ],
  faqs: [
    {
      question: "Levert ZorgpuntConnect zorgpersoneel in heel Tilburg?",
      answer:
        "Ja. Wij bemiddelen en detacheren zorgprofessionals voor instellingen in alle wijken van Tilburg, waaronder de Reeshof, Centrum, Oud-Noord, Korvel en Berkel-Enschot, plus omliggende plaatsen in Midden-Brabant zoals Goirle, Oisterwijk en Waalwijk.",
    },
    {
      question: "Hoe snel kan ik in Tilburg een zorgprofessional inzetten?",
      answer:
        "Afhankelijk van functie en beschikbaarheid schakelen we snel via ons netwerk van circa 1.500 zorgprofessionals. Tilburg ligt op ongeveer een uur van ons kantoor in Roermond en valt ruim binnen ons werkgebied in Noord-Brabant.",
    },
    {
      question: "Voor welke zorgsectoren bemiddelen jullie in Tilburg?",
      answer:
        "Onder meer GGZ, VVT (ouderen- en thuiszorg), gehandicaptenzorg, jeugdzorg en sociaal werk. Tilburg kent grote werkgevers zoals het ETZ (Elisabeth-TweeSteden Ziekenhuis), GGz Breburg, De Wever, Thebe en Amarant, waardoor de vraag naar gekwalificeerd personeel structureel hoog is.",
    },
    {
      question: "Werken jullie met ZZP'ers of met detachering in Tilburg?",
      answer:
        "Beide. Via bemiddeling van ZZP-zorgprofessionals, tussenkomst, detachering of werving en selectie vinden we de vorm die past bij uw organisatie. We werken DBA- en VBAR-proof waar van toepassing.",
    },
    {
      question: "Heeft ZorgpuntConnect een kantoor in Tilburg?",
      answer:
        "Ons kantoor staat in Roermond (Zwartbroekpoort 2, 6041 LS). Tilburg valt binnen ons werkgebied in Noord-Brabant, waar we als top 3 speler actief zijn. We bedienen de stad met persoonlijk contact en korte lijnen, ondersteund door ons portaal Mijn ZPC.",
    },
    {
      question: "Hoe wordt de kwaliteit van zorgpersoneel gecontroleerd?",
      answer:
        "Vóór inzet controleren we onder meer diploma's, BIG-registratie waar van toepassing, VOG en relevante certificaten. Enkel professionals met geldige documentatie gaan aan het werk, beheerd via Mijn ZPC.",
    },
    {
      question: "Kunnen jullie helpen bij piekdrukte of ziekteverzuim in Tilburg?",
      answer:
        "Zeker. Veel opdrachtgevers in Midden-Brabant zoeken ons op voor tijdelijke versterking bij verzuim, vakanties of onverwachte uitval. Snelheid en een goede match staan dan voorop.",
    },
    {
      question: "Wat kost het inhuren van zorgpersoneel in Tilburg?",
      answer:
        "Tarief en vergoeding hangen af van functie, inzetvorm en duur. Bij ZZP-bemiddeling geldt een fee over gewerkte uren, bij detachering een uurtarief op basis van factor. Het eerste adviesgesprek is gratis en vrijblijvend.",
    },
    {
      question: "Hoe vraag ik zorgpersoneel voor Tilburg aan?",
      answer:
        "Neem contact op via onze website of bel ons kantoor in Roermond. Na een korte kennismaking en raamovereenkomst krijgt u toegang tot Mijn ZPC en stellen we passende professionals voor.",
    },
  ],
  renderArticle: () => <TilburgArticle />,
}

function TilburgArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        Zoekt u <strong>zorgpersoneel in Tilburg</strong> dat snel inzetbaar is en
        past bij uw team? Tilburg is de zesde stad van Nederland en het
        zorgcentrum van Midden-Brabant. Met een groeiende en vergrijzende
        bevolking en een aanhoudend personeelstekort in de zorg is betrouwbare
        bemiddeling goud waard. {brand.name} bemiddelt en detacheert
        gekwalificeerde zorgprofessionals voor instellingen in heel Tilburg, van
        de Reeshof tot het Centrum en van Berkel-Enschot tot Korvel.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Lokale zorgvraag in Tilburg en Midden-Brabant
      </h2>
      <p>
        Tilburg telt ruim 225.000 inwoners en is een belangrijk knooppunt voor
        zorg en onderwijs. Grote werkgevers zoals het ETZ (Elisabeth-TweeSteden
        Ziekenhuis), GGz Breburg, ouderenzorgorganisatie De Wever,
        thuiszorgaanbieder Thebe en Amarant in de gehandicaptenzorg vragen
        voortdurend om gekwalificeerd personeel. De krapte op de arbeidsmarkt
        raakt vooral kleinere aanbieders, wijkteams en particuliere instellingen
        die niet kunnen wedijveren met de wervingskracht van de grote namen.
      </p>
      <p>
        Daar komt {brand.name} in beeld. Vanuit ons kantoor in Roermond, op
        ongeveer een uur rijden via de A67 en A58, bedienen we opdrachtgevers in
        Midden-Brabant. We zijn als top 3 speler actief in Limburg en
        Noord-Brabant en verwerken jaarlijks circa 500.000 uur voor meer dan 45
        raamovereenkomsten.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Waarom Tilburgse zorgorganisaties voor ons kiezen
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
        Onze diensten voor Tilburg
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
        Onze professionals werken door heel Tilburg en de omliggende plaatsen.
        Denk aan:
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
              <td className="py-3 pr-4">Reeshof</td>
              <td className="py-3 pr-4">Grootste woonwijk</td>
              <td className="py-3">VVT, wijkzorg, gezinnen</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Centrum</td>
              <td className="py-3 pr-4">Spoorzone, LocHal</td>
              <td className="py-3">GGZ, sociaal werk</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Oud-Noord / Goirke</td>
              <td className="py-3 pr-4">Stedelijk, divers</td>
              <td className="py-3">Ouderenzorg, thuiszorg</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Berkel-Enschot / Udenhout</td>
              <td className="py-3 pr-4">Dorps karakter</td>
              <td className="py-3">VVT, gehandicaptenzorg</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Ook in Goirle, Oisterwijk, Waalwijk en Loon op Zand zetten wij
        professionals in. Grenst uw locatie aan Tilburg? Dan valt u vrijwel zeker
        binnen ons werkgebied.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Bereikbaarheid en nabijheid
      </h2>
      <p>
        Ons kantoor staat aan de Zwartbroekpoort 2 in Roermond. Tilburg ligt op
        {" "}circa 85 kilometer, ongeveer een uur via de A67 en A58. We kennen de
        regio: van de Spoorzone en de Piushaven tot de woonwijken in de Reeshof.
        Voor kennismakingen reizen we naar u toe; de dagelijkse samenwerking
        verloopt digitaal via{" "}
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
          src="/images/werkgebieden/tilburg.webp"
          alt="ZorgpuntConnect bemiddelt zorgpersoneel voor zorgorganisaties in Tilburg"
          width={1200}
          height={675}
          className="w-full h-auto object-cover max-h-72"
        />
        <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/30">
          Gekwalificeerde zorgprofessionals voor Midden-Brabant.
        </figcaption>
      </figure>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Klaar om de juiste match te vinden in Tilburg?
      </h2>
      <p>
        Zoals we zelf zeggen: laten we het gewoon eens testen. Vraag een gratis,
        vrijblijvend adviesgesprek aan. Lieke en het team bespreken uw
        personeelsvraag in Tilburg en leggen uit hoe snel we kunnen starten.
      </p>
    </>
  )
}
