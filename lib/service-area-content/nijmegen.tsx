import Link from "next/link"
import Image from "next/image"
import { OfficeMapLink } from "@/components/landing/office-map-link"
import type { RichAreaPage } from "@/lib/service-area-content/types"
import { brand } from "@/lib/brand"

export const nijmegenContent: RichAreaPage = {
  slug: "nijmegen",
  proximity: "circa 75 km van ons kantoor in Roermond, ongeveer 50 minuten via de A73",
  seo: {
    title:
      "Beste Zorgbemiddeling Nijmegen, ZorgpuntConnect | Zorgpersoneel inhuren, ZZP-zorgprofessionals, detachering en uitzendbureau voor de zorg in Nijmegen en omgeving (Rijk van Nijmegen, Gelderland)",
    description:
      "Zorgpersoneel nodig in Nijmegen? ZorgpuntConnect bemiddelt en detacheert gekwalificeerde zorgprofessionals voor instellingen in Dukenburg, Nijmegen-Oost, Lent en heel het Rijk van Nijmegen.",
    h1: "Zorgpersoneel in Nijmegen: bemiddeling en detachering voor het Rijk van Nijmegen",
    primaryKeyword: "zorgpersoneel Nijmegen",
    imageAlts: [
      "Zorgprofessional aan het werk in een zorginstelling in Nijmegen",
      "ZorgpuntConnect bemiddelt zorgpersoneel voor Dukenburg en Nijmegen-Oost",
      "Verpleegkundige ingezet via ZorgpuntConnect in de regio Rijk van Nijmegen",
      "Zorgteam in Nijmegen ondersteund door ZorgpuntConnect uit Roermond",
    ],
  },
  relatedAreaSlugs: ["arnhem", "venlo", "s-hertogenbosch", "eindhoven"],
  faqs: [
    {
      question: "Levert ZorgpuntConnect zorgpersoneel in heel Nijmegen?",
      answer:
        "Ja. Wij bemiddelen en detacheren zorgprofessionals voor instellingen in alle stadsdelen van Nijmegen, waaronder Dukenburg, Lindenholt, Nijmegen-Oost, Hatert en de Waalsprong (Lent en Nijmegen-Noord), plus omliggende plaatsen zoals Wijchen, Beuningen en Groesbeek.",
    },
    {
      question: "Hoe snel kan ik in Nijmegen een zorgprofessional inzetten?",
      answer:
        "Afhankelijk van functie en beschikbaarheid schakelen we snel via ons netwerk van circa 1.500 zorgprofessionals. Nijmegen ligt op ongeveer 50 minuten van ons kantoor in Roermond, direct via de A73, en valt goed binnen ons werkgebied.",
    },
    {
      question: "Voor welke zorgsectoren bemiddelen jullie in Nijmegen?",
      answer:
        "Onder meer GGZ, VVT (ouderen- en thuiszorg), gehandicaptenzorg, jeugdzorg en sociaal werk. Nijmegen kent grote werkgevers zoals het Radboudumc, CWZ (Canisius Wilhelmina Ziekenhuis), Pro Persona, ZZG zorggroep en Pluryn, waardoor de vraag naar gekwalificeerd personeel structureel hoog is.",
    },
    {
      question: "Werken jullie met ZZP'ers of met detachering in Nijmegen?",
      answer:
        "Beide. Via bemiddeling van ZZP-zorgprofessionals, tussenkomst, detachering of werving en selectie vinden we de vorm die past bij uw organisatie. We werken DBA- en VBAR-proof waar van toepassing.",
    },
    {
      question: "Heeft ZorgpuntConnect een kantoor in Nijmegen?",
      answer:
        "Ons kantoor staat in Roermond (Zwartbroekpoort 2, 6041 LS). Nijmegen valt binnen ons werkgebied; dankzij de directe verbinding via de A73 zijn we snel ter plaatse. We bedienen de stad met persoonlijk contact en korte lijnen, ondersteund door Mijn ZPC.",
    },
    {
      question: "Hoe wordt de kwaliteit van zorgpersoneel gecontroleerd?",
      answer:
        "Vóór inzet controleren we onder meer diploma's, BIG-registratie waar van toepassing, VOG en relevante certificaten. Enkel professionals met geldige documentatie gaan aan het werk, beheerd via Mijn ZPC.",
    },
    {
      question: "Kunnen jullie helpen bij piekdrukte of ziekteverzuim in Nijmegen?",
      answer:
        "Zeker. Veel opdrachtgevers in het Rijk van Nijmegen zoeken ons op voor tijdelijke versterking bij verzuim, vakanties of onverwachte uitval. Snelheid en een goede match staan dan voorop.",
    },
    {
      question: "Wat kost het inhuren van zorgpersoneel in Nijmegen?",
      answer:
        "Tarief en vergoeding hangen af van functie, inzetvorm en duur. Bij ZZP-bemiddeling geldt een fee over gewerkte uren, bij detachering een uurtarief op basis van factor. Het eerste adviesgesprek is gratis en vrijblijvend.",
    },
    {
      question: "Hoe vraag ik zorgpersoneel voor Nijmegen aan?",
      answer:
        "Neem contact op via onze website of bel ons kantoor in Roermond. Na een korte kennismaking en raamovereenkomst krijgt u toegang tot Mijn ZPC en stellen we passende professionals voor.",
    },
  ],
  renderArticle: () => <NijmegenArticle />,
}

function NijmegenArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        Zoekt u <strong>zorgpersoneel in Nijmegen</strong> dat snel inzetbaar is
        en past bij uw team? Nijmegen is de oudste stad van Nederland en een
        belangrijk zorg- en kenniscentrum aan de Waal. Met een grote zorgsector,
        een groeiende Waalsprong en een aanhoudend personeelstekort is
        betrouwbare bemiddeling onmisbaar. {brand.name} bemiddelt en detacheert
        gekwalificeerde zorgprofessionals voor instellingen in heel Nijmegen, van
        Dukenburg tot Nijmegen-Oost en van Hatert tot Lent.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Lokale zorgvraag in Nijmegen en het Rijk van Nijmegen
      </h2>
      <p>
        Nijmegen telt ruim 180.000 inwoners en is dankzij het Radboudumc en de
        universiteit een zwaartepunt voor zorg en onderzoek. Grote werkgevers
        zoals het Radboudumc, het CWZ (Canisius Wilhelmina Ziekenhuis), GGZ-aanbieder
        Pro Persona, ouderenzorgorganisatie ZZG zorggroep en Pluryn in de
        gehandicaptenzorg vragen voortdurend om gekwalificeerd personeel. De
        krapte op de arbeidsmarkt raakt vooral kleinere aanbieders, wijkteams en
        particuliere instellingen.
      </p>
      <p>
        Daar komt {brand.name} in beeld. Vanuit ons kantoor in Roermond, op
        ongeveer 50 minuten rijden direct via de A73, bedienen we opdrachtgevers
        in het Rijk van Nijmegen. We verwerken jaarlijks circa 500.000 uur voor
        meer dan 45 raamovereenkomsten en kennen de regionale arbeidsmarkt goed.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Waarom Nijmeegse zorgorganisaties voor ons kiezen
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
        Onze diensten voor Nijmegen
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
        Onze professionals werken door heel Nijmegen en de omliggende plaatsen.
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
              <td className="py-3 pr-4">Dukenburg</td>
              <td className="py-3 pr-4">Groot, naoorlogs</td>
              <td className="py-3">VVT, wijkzorg, GGZ</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Nijmegen-Oost</td>
              <td className="py-3 pr-4">Stedelijk, universiteit</td>
              <td className="py-3">GGZ, sociaal werk</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Waalsprong (Lent)</td>
              <td className="py-3 pr-4">Nieuwbouw, jonge gezinnen</td>
              <td className="py-3">Wijkzorg, jeugdzorg</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Hatert / Lindenholt</td>
              <td className="py-3 pr-4">Woonwijken</td>
              <td className="py-3">Ouderenzorg, gehandicaptenzorg</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Ook in Wijchen, Beuningen, Groesbeek en Malden zetten wij professionals
        in. Grenst uw locatie aan Nijmegen? Dan valt u vrijwel zeker binnen ons
        werkgebied.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Bereikbaarheid en nabijheid
      </h2>
      <p>
        Ons kantoor staat aan de Zwartbroekpoort 2 in Roermond. Nijmegen ligt op
        {" "}circa 75 kilometer, ongeveer 50 minuten direct via de A73. We kennen
        de regio: van het Valkhof en de Waalkade tot de campus van het Radboudumc
        en de nieuwe wijken in de Waalsprong. Voor kennismakingen reizen we naar u
        toe; de dagelijkse samenwerking verloopt digitaal via{" "}
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
          src="/images/werkgebieden/nijmegen.webp"
          alt="ZorgpuntConnect bemiddelt zorgpersoneel voor zorgorganisaties in Nijmegen"
          width={1200}
          height={675}
          className="w-full h-auto object-cover max-h-72"
        />
        <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/30">
          Gekwalificeerde zorgprofessionals voor het Rijk van Nijmegen.
        </figcaption>
      </figure>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Werken in de buurt: ook in omliggende steden
      </h2>
      <p>
        Nijmegen en Arnhem vormen samen de stedelijke regio Arnhem-Nijmegen.
        Bekijk ook onze pagina&apos;s voor{" "}
        <Link href="/werkgebieden/arnhem" className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline">
          Arnhem
        </Link>{" "}
        en{" "}
        <Link href="/werkgebieden/venlo" className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline">
          Venlo
        </Link>
        . Veel professionals werken flexibel in meerdere gemeenten in de regio.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Klaar om de juiste match te vinden in Nijmegen?
      </h2>
      <p>
        Zoals we zelf zeggen: laten we het gewoon eens testen. Vraag een gratis,
        vrijblijvend adviesgesprek aan. Lieke en het team bespreken uw
        personeelsvraag in Nijmegen en leggen uit hoe snel we kunnen starten.
      </p>
    </>
  )
}
