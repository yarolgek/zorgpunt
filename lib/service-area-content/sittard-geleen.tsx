import Link from "next/link"
import Image from "next/image"
import { OfficeMapLink } from "@/components/landing/office-map-link"
import type { RichAreaPage } from "@/lib/service-area-content/types"
import { brand } from "@/lib/brand"

export const sittardGeleenContent: RichAreaPage = {
  slug: "sittard-geleen",
  proximity: "circa 30 km van ons kantoor in Roermond, ongeveer 25 minuten via de A2",
  seo: {
    title:
      "Beste Zorgbemiddeling Sittard-Geleen, ZorgpuntConnect | Zorgpersoneel inhuren, ZZP-zorgprofessionals, detachering en uitzendbureau voor de zorg in Sittard-Geleen en omgeving (Westelijke Mijnstreek)",
    description:
      "Zorgpersoneel nodig in Sittard-Geleen? ZorgpuntConnect bemiddelt en detacheert gekwalificeerde zorgprofessionals voor instellingen in Sittard, Geleen, Born en heel de Westelijke Mijnstreek.",
    h1: "Zorgpersoneel in Sittard-Geleen: bemiddeling en detachering voor de Westelijke Mijnstreek",
    primaryKeyword: "zorgpersoneel Sittard-Geleen",
    imageAlts: [
      "Zorgprofessional aan het werk in een zorginstelling in Sittard-Geleen",
      "ZorgpuntConnect bemiddelt zorgpersoneel voor Sittard en Geleen",
      "Verpleegkundige ingezet via ZorgpuntConnect in de Westelijke Mijnstreek",
      "Zorgteam in Sittard-Geleen ondersteund door ZorgpuntConnect uit Roermond",
    ],
  },
  relatedAreaSlugs: ["roermond", "maastricht", "venlo", "eindhoven", "tilburg"],
  faqs: [
    {
      question: "Levert ZorgpuntConnect zorgpersoneel in heel Sittard-Geleen?",
      answer:
        "Ja. Wij bemiddelen en detacheren zorgprofessionals voor instellingen in de hele gemeente Sittard-Geleen, waaronder Sittard, Geleen, Born en de omliggende kernen, plus de bredere Westelijke Mijnstreek zoals Beek, Stein en Echt-Susteren.",
    },
    {
      question: "Hoe snel kan ik in Sittard-Geleen een zorgprofessional inzetten?",
      answer:
        "Afhankelijk van functie en beschikbaarheid schakelen we snel via ons netwerk van circa 1.500 zorgprofessionals. Sittard-Geleen ligt op slechts 25 minuten van ons kantoor in Roermond, direct via de A2, en valt midden in ons kerngebied in Limburg.",
    },
    {
      question: "Voor welke zorgsectoren bemiddelen jullie in Sittard-Geleen?",
      answer:
        "Onder meer GGZ, VVT (ouderen- en thuiszorg), gehandicaptenzorg, jeugdzorg en sociaal werk. Sittard-Geleen kent grote werkgevers zoals het Zuyderland Medisch Centrum, GGZ-aanbieder Mondriaan, ouderenzorgorganisatie Zuyderland en Pergamijn in de gehandicaptenzorg.",
    },
    {
      question: "Werken jullie met ZZP'ers of met detachering in Sittard-Geleen?",
      answer:
        "Beide. Via bemiddeling van ZZP-zorgprofessionals, tussenkomst, detachering of werving en selectie vinden we de vorm die past bij uw organisatie. We werken DBA- en VBAR-proof waar van toepassing.",
    },
    {
      question: "Heeft ZorgpuntConnect een kantoor in Sittard-Geleen?",
      answer:
        "Ons kantoor staat in Roermond (Zwartbroekpoort 2, 6041 LS), op slechts een half uur rijden in dezelfde provincie. Sittard-Geleen ligt in ons directe thuisgebied. We bedienen de regio met persoonlijk contact en korte lijnen, ondersteund door Mijn ZPC.",
    },
    {
      question: "Hoe wordt de kwaliteit van zorgpersoneel gecontroleerd?",
      answer:
        "Vóór inzet controleren we onder meer diploma's, BIG-registratie waar van toepassing, VOG en relevante certificaten. Enkel professionals met geldige documentatie gaan aan het werk, beheerd via Mijn ZPC.",
    },
    {
      question:
        "Kunnen jullie helpen bij piekdrukte of ziekteverzuim in Sittard-Geleen?",
      answer:
        "Zeker. Veel opdrachtgevers in de Westelijke Mijnstreek zoeken ons op voor tijdelijke versterking bij verzuim, vakanties of onverwachte uitval. Dankzij de nabijheid schakelen we snel.",
    },
    {
      question: "Wat kost het inhuren van zorgpersoneel in Sittard-Geleen?",
      answer:
        "Tarief en vergoeding hangen af van functie, inzetvorm en duur. Bij ZZP-bemiddeling geldt een fee over gewerkte uren, bij detachering een uurtarief op basis van factor. Het eerste adviesgesprek is gratis en vrijblijvend.",
    },
    {
      question: "Hoe vraag ik zorgpersoneel voor Sittard-Geleen aan?",
      answer:
        "Neem contact op via onze website of bel ons kantoor in Roermond. Na een korte kennismaking en raamovereenkomst krijgt u toegang tot Mijn ZPC en stellen we passende professionals voor.",
    },
  ],
  renderArticle: () => <SittardGeleenArticle />,
}

function SittardGeleenArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        Zoekt u <strong>zorgpersoneel in Sittard-Geleen</strong> dat snel
        inzetbaar is en past bij uw team? Sittard-Geleen is het hart van de
        Westelijke Mijnstreek en een belangrijk zorgcentrum in Zuid-Limburg. Met
        een sterk vergrijzende bevolking en een aanhoudend personeelstekort in de
        zorg is betrouwbare bemiddeling cruciaal. {brand.name} bemiddelt en
        detacheert gekwalificeerde zorgprofessionals voor instellingen in heel
        Sittard-Geleen, van Sittard tot Geleen en van Born tot de omliggende
        kernen.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Lokale zorgvraag in Sittard-Geleen en de Westelijke Mijnstreek
      </h2>
      <p>
        Sittard-Geleen telt ruim 90.000 inwoners en kent door de vergrijzing een
        bovengemiddelde zorgvraag. Grote werkgevers zoals het Zuyderland Medisch
        Centrum, GGZ-aanbieder Mondriaan, ouderenzorgorganisatie Zuyderland en
        Pergamijn in de gehandicaptenzorg vragen voortdurend om gekwalificeerd
        personeel. De krapte op de arbeidsmarkt raakt vooral kleinere aanbieders,
        wijkteams en particuliere instellingen die niet kunnen wedijveren met de
        wervingskracht van de grote namen.
      </p>
      <p>
        Daar komt {brand.name} in beeld. Vanuit ons kantoor in Roermond, op
        slechts 25 minuten rijden direct via de A2, bedienen we opdrachtgevers in
        de Westelijke Mijnstreek. Sittard-Geleen ligt in ons directe thuisgebied:
        we zijn als top 3 speler actief in Limburg en verwerken jaarlijks circa
        500.000 uur voor meer dan 45 raamovereenkomsten.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Waarom zorgorganisaties in Sittard-Geleen voor ons kiezen
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Vlakbij gevestigd:</strong> ons kantoor in Roermond ligt op een
          half uur rijden, korte lijnen gegarandeerd
        </li>
        <li>
          <strong>Snel schakelen:</strong> een netwerk van circa 1.500
          zorgprofessionals voor acute en structurele inzet
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
        Onze diensten voor Sittard-Geleen
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
        Kernen en omgeving die wij bedienen
      </h2>
      <p>
        Onze professionals werken door heel Sittard-Geleen en de omliggende
        plaatsen. Denk aan:
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Kern
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
              <td className="py-3 pr-4">Sittard</td>
              <td className="py-3 pr-4">Historisch centrum</td>
              <td className="py-3">GGZ, ouderenzorg, sociaal werk</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Geleen</td>
              <td className="py-3 pr-4">Industrieel verleden</td>
              <td className="py-3">VVT, wijkzorg</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Born</td>
              <td className="py-3 pr-4">Noordelijke kern</td>
              <td className="py-3">Thuiszorg, gehandicaptenzorg</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Beek / Stein</td>
              <td className="py-3 pr-4">Omliggend, Mijnstreek</td>
              <td className="py-3">VVT, wijkzorg</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Ook in Beek, Stein, Echt-Susteren en Beekdaelen zetten wij professionals
        in. Grenst uw locatie aan Sittard-Geleen? Dan valt u vrijwel zeker binnen
        ons werkgebied.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Bereikbaarheid en nabijheid
      </h2>
      <p>
        Ons kantoor staat aan de Zwartbroekpoort 2 in Roermond, in dezelfde
        provincie. Sittard-Geleen ligt op circa 30 kilometer, ongeveer 25 minuten
        direct via de A2. We kennen de regio: van het historische centrum van
        Sittard en de Markt van Geleen tot het Zuyderland-ziekenhuisterrein en de
        woonkernen rondom. Voor kennismakingen reizen we naar u toe; de dagelijkse
        samenwerking verloopt digitaal via{" "}
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
          src="/images/werkgebieden/sittard-geleen.webp"
          alt="ZorgpuntConnect bemiddelt zorgpersoneel voor zorgorganisaties in Sittard-Geleen"
          width={1200}
          height={675}
          className="w-full h-auto object-cover max-h-72"
        />
        <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/30">
          Gekwalificeerde zorgprofessionals voor de Westelijke Mijnstreek.
        </figcaption>
      </figure>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Werken in de buurt: ook in omliggende steden
      </h2>
      <p>
        Sittard-Geleen ligt centraal in Zuid-Limburg. Bekijk ook onze
        pagina&apos;s voor{" "}
        <Link
          href="/werkgebieden/maastricht"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          Maastricht
        </Link>{" "}
        en{" "}
        <Link href="/werkgebieden/venlo" className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline">
          Venlo
        </Link>
        . Veel professionals werken flexibel in meerdere gemeenten in de regio.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Klaar om de juiste match te vinden in Sittard-Geleen?
      </h2>
      <p>
        Zoals we zelf zeggen: laten we het gewoon eens testen. Vraag een gratis,
        vrijblijvend adviesgesprek aan. Lieke en het team bespreken uw
        personeelsvraag in Sittard-Geleen en leggen uit hoe snel we kunnen
        starten.
      </p>
    </>
  )
}
