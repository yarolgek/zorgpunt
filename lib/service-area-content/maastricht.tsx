import Link from "next/link"
import Image from "next/image"
import { OfficeMapLink } from "@/components/landing/office-map-link"
import type { RichAreaPage } from "@/lib/service-area-content/types"
import { brand } from "@/lib/brand"

export const maastrichtContent: RichAreaPage = {
  slug: "maastricht",
  proximity: "circa 50 km van ons kantoor in Roermond, ongeveer 40 minuten via de A2",
  seo: {
    title:
      "Beste Zorgbemiddeling Maastricht, ZorgpuntConnect | Zorgpersoneel inhuren, ZZP-zorgprofessionals, detachering en uitzendbureau voor de zorg in Maastricht en omgeving (Zuid-Limburg)",
    description:
      "Zorgpersoneel nodig in Maastricht? ZorgpuntConnect bemiddelt en detacheert gekwalificeerde zorgprofessionals voor instellingen in Wyck, Heer, Malberg en heel Zuid-Limburg.",
    h1: "Zorgpersoneel in Maastricht: bemiddeling en detachering voor Zuid-Limburg",
    primaryKeyword: "zorgpersoneel Maastricht",
    imageAlts: [
      "Zorgprofessional aan het werk in een zorginstelling in Maastricht",
      "ZorgpuntConnect bemiddelt zorgpersoneel voor Wyck en Heer in Maastricht",
      "Verpleegkundige ingezet via ZorgpuntConnect in de regio Zuid-Limburg",
      "Zorgteam in Maastricht ondersteund door ZorgpuntConnect uit Roermond",
    ],
  },
  relatedAreaSlugs: [
    "roermond",
    "sittard-geleen",
    "venlo",
  ],
  faqs: [
    {
      question: "Levert ZorgpuntConnect zorgpersoneel in heel Maastricht?",
      answer:
        "Ja. Wij bemiddelen en detacheren zorgprofessionals voor instellingen in alle stadsdelen van Maastricht, waaronder Wyck, Heer, Malberg, Daalhof en het Centrum, plus omliggende plaatsen in Zuid-Limburg zoals Meerssen, Valkenburg en Eijsden-Margraten.",
    },
    {
      question: "Hoe snel kan ik in Maastricht een zorgprofessional inzetten?",
      answer:
        "Afhankelijk van functie en beschikbaarheid schakelen we snel via ons netwerk van circa 1.500 zorgprofessionals. Maastricht ligt op ongeveer 40 minuten van ons kantoor in Roermond, direct via de A2, en valt midden in ons kerngebied in Limburg.",
    },
    {
      question: "Voor welke zorgsectoren bemiddelen jullie in Maastricht?",
      answer:
        "Onder meer GGZ, VVT (ouderen- en thuiszorg), gehandicaptenzorg, jeugdzorg en sociaal werk. Maastricht kent grote werkgevers zoals het Maastricht UMC+, Mondriaan (GGZ), ouderenzorgorganisaties Envida en Sevagram en Radar in de gehandicaptenzorg.",
    },
    {
      question: "Werken jullie met ZZP'ers of met detachering in Maastricht?",
      answer:
        "Beide. Via bemiddeling van ZZP-zorgprofessionals, tussenkomst, detachering of werving en selectie vinden we de vorm die past bij uw organisatie. We werken DBA- en VBAR-proof waar van toepassing.",
    },
    {
      question: "Heeft ZorgpuntConnect een kantoor in Maastricht?",
      answer:
        "Ons kantoor staat in Roermond (Zwartbroekpoort 2, 6041 LS), in dezelfde provincie. Als top 3 speler in Limburg kennen we de Zuid-Limburgse zorgmarkt goed. We bedienen Maastricht met persoonlijk contact en korte lijnen, ondersteund door Mijn ZPC.",
    },
    {
      question: "Hoe wordt de kwaliteit van zorgpersoneel gecontroleerd?",
      answer:
        "Vóór inzet controleren we onder meer diploma's, BIG-registratie waar van toepassing, VOG en relevante certificaten. Enkel professionals met geldige documentatie gaan aan het werk, beheerd via Mijn ZPC.",
    },
    {
      question: "Kunnen jullie helpen bij piekdrukte of ziekteverzuim in Maastricht?",
      answer:
        "Zeker. Veel opdrachtgevers in Zuid-Limburg zoeken ons op voor tijdelijke versterking bij verzuim, vakanties of onverwachte uitval. Snelheid en een goede match staan dan voorop.",
    },
    {
      question: "Wat kost het inhuren van zorgpersoneel in Maastricht?",
      answer:
        "Tarief en vergoeding hangen af van functie, inzetvorm en duur. Bij ZZP-bemiddeling geldt een fee over gewerkte uren, bij detachering een uurtarief op basis van factor. Het eerste adviesgesprek is gratis en vrijblijvend.",
    },
    {
      question: "Hoe vraag ik zorgpersoneel voor Maastricht aan?",
      answer:
        "Neem contact op via onze website of bel ons kantoor in Roermond. Na een korte kennismaking en raamovereenkomst krijgt u toegang tot Mijn ZPC en stellen we passende professionals voor.",
    },
  ],
  renderArticle: () => <MaastrichtArticle />,
}

function MaastrichtArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        Zoekt u <strong>zorgpersoneel in Maastricht</strong> dat snel inzetbaar is
        en past bij uw team? Maastricht is de hoofdstad van Limburg en het
        zorgcentrum van het zuiden, met een sterk vergrijzende bevolking en een
        bijzondere grensligging bij België en Duitsland. Het personeelstekort in
        de zorg is er onverminderd hoog. {brand.name} bemiddelt en detacheert
        gekwalificeerde zorgprofessionals voor instellingen in heel Maastricht,
        van Wyck tot Heer en van Malberg tot het Centrum.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Lokale zorgvraag in Maastricht en Zuid-Limburg
      </h2>
      <p>
        Maastricht telt ruim 120.000 inwoners en kent door de vergrijzing een
        bovengemiddelde zorgvraag. Grote werkgevers zoals het Maastricht UMC+,
        GGZ-aanbieder Mondriaan, ouderenzorgorganisaties Envida en Sevagram en
        Radar in de gehandicaptenzorg vragen voortdurend om gekwalificeerd
        personeel. De krapte op de arbeidsmarkt raakt vooral kleinere aanbieders,
        wijkteams en particuliere instellingen die niet kunnen wedijveren met de
        wervingskracht van de grote namen.
      </p>
      <p>
        Daar komt {brand.name} in beeld. Vanuit ons kantoor in Roermond, op
        ongeveer 40 minuten rijden direct via de A2, bedienen we opdrachtgevers in
        Zuid-Limburg. We zijn als top 3 speler actief in Limburg en Noord-Brabant
        en verwerken jaarlijks circa 500.000 uur voor meer dan 45
        raamovereenkomsten. Maastricht ligt midden in ons kerngebied.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Waarom Maastrichtse zorgorganisaties voor ons kiezen
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
          <strong>Thuis in Limburg:</strong> we kennen de regionale arbeidsmarkt
          en beschikbaarheid als geen ander
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Onze diensten voor Maastricht
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
        Stadsdelen en omgeving die wij bedienen
      </h2>
      <p>
        Onze professionals werken door heel Maastricht en de omliggende plaatsen.
        Denk aan:
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Stadsdeel
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
              <td className="py-3 pr-4">Centrum / Wyck</td>
              <td className="py-3 pr-4">Historische binnenstad</td>
              <td className="py-3">GGZ, sociaal werk</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Heer / Amby</td>
              <td className="py-3 pr-4">Oostelijk, woonwijken</td>
              <td className="py-3">VVT, wijkzorg</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Malberg / Daalhof</td>
              <td className="py-3 pr-4">Maastricht-West</td>
              <td className="py-3">Ouderenzorg, thuiszorg</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Meerssen / Valkenburg</td>
              <td className="py-3 pr-4">Omliggend, heuvelland</td>
              <td className="py-3">VVT, gehandicaptenzorg</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Ook in Meerssen, Valkenburg aan de Geul, Eijsden-Margraten en Gulpen
        zetten wij professionals in. Grenst uw locatie aan Maastricht? Dan valt u
        vrijwel zeker binnen ons werkgebied.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Bereikbaarheid en nabijheid
      </h2>
      <p>
        Ons kantoor staat aan de Zwartbroekpoort 2 in Roermond, in dezelfde
        provincie. Maastricht ligt op circa 50 kilometer, ongeveer 40 minuten
        direct via de A2. We kennen de regio: van het Vrijthof en Wyck tot de
        campus van het Maastricht UMC+ en de woonwijken in Maastricht-West. Voor
        kennismakingen reizen we naar u toe; de dagelijkse samenwerking verloopt
        digitaal via{" "}
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
          src="/images/werkgebieden/maastricht.webp"
          alt="ZorgpuntConnect bemiddelt zorgpersoneel voor zorgorganisaties in Maastricht"
          width={1200}
          height={675}
          className="w-full h-auto object-cover max-h-72"
        />
        <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/30">
          Gekwalificeerde zorgprofessionals voor Zuid-Limburg.
        </figcaption>
      </figure>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Klaar om de juiste match te vinden in Maastricht?
      </h2>
      <p>
        Zoals we zelf zeggen: laten we het gewoon eens testen. Vraag een gratis,
        vrijblijvend adviesgesprek aan. Lieke en het team bespreken uw
        personeelsvraag in Maastricht en leggen uit hoe snel we kunnen starten.
      </p>
    </>
  )
}
