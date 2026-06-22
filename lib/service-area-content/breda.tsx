import Link from "next/link"
import Image from "next/image"
import { OfficeMapLink } from "@/components/landing/office-map-link"
import type { RichAreaPage } from "@/lib/service-area-content/types"
import { brand } from "@/lib/brand"

export const bredaContent: RichAreaPage = {
  slug: "breda",
  proximity: "circa 110 km van ons kantoor in Roermond, ongeveer 75 minuten via de A67 en A58",
  seo: {
    title:
      "Beste Zorgbemiddeling Breda, ZorgpuntConnect | Zorgpersoneel inhuren, ZZP-zorgprofessionals, detachering en uitzendbureau voor de zorg in Breda en omgeving (West-Brabant)",
    description:
      "Zorgpersoneel nodig in Breda? ZorgpuntConnect bemiddelt en detacheert gekwalificeerde zorgprofessionals voor instellingen in Ginneken, Princenhage, Haagse Beemden en heel West-Brabant.",
    h1: "Zorgpersoneel in Breda: bemiddeling en detachering voor West-Brabant",
    primaryKeyword: "zorgpersoneel Breda",
    imageAlts: [
      "Zorgprofessional aan het werk in een zorginstelling in Breda",
      "ZorgpuntConnect bemiddelt zorgpersoneel voor Ginneken en Princenhage Breda",
      "Verpleegkundige ingezet via ZorgpuntConnect in de regio West-Brabant",
      "Zorgteam in Breda ondersteund door ZorgpuntConnect uit Roermond",
    ],
  },
  relatedAreaSlugs: ["tilburg", "s-hertogenbosch", "eindhoven", "helmond"],
  faqs: [
    {
      question: "Levert ZorgpuntConnect zorgpersoneel in heel Breda?",
      answer:
        "Ja. Wij bemiddelen en detacheren zorgprofessionals voor instellingen in alle wijken van Breda, waaronder Ginneken, Princenhage, Haagse Beemden, Belcrum, Teteringen en het Centrum, plus omliggende plaatsen in West-Brabant zoals Oosterhout, Etten-Leur en Prinsenbeek.",
    },
    {
      question: "Hoe snel kan ik in Breda een zorgprofessional inzetten?",
      answer:
        "Afhankelijk van functie en beschikbaarheid schakelen we snel via ons netwerk van circa 1.500 zorgprofessionals. Breda valt binnen ons werkgebied in Noord-Brabant; we bedienen de stad vanuit ons kantoor in Roermond.",
    },
    {
      question: "Voor welke zorgsectoren bemiddelen jullie in Breda?",
      answer:
        "Onder meer GGZ, VVT (ouderen- en thuiszorg), gehandicaptenzorg, jeugdzorg en sociaal werk. Breda kent grote werkgevers zoals het Amphia Ziekenhuis, GGz Breburg, Surplus, Thebe en Prisma, waardoor de vraag naar gekwalificeerd personeel structureel hoog is.",
    },
    {
      question: "Werken jullie met ZZP'ers of met detachering in Breda?",
      answer:
        "Beide. Via bemiddeling van ZZP-zorgprofessionals, tussenkomst, detachering of werving en selectie vinden we de vorm die past bij uw organisatie. We werken DBA- en VBAR-proof waar van toepassing.",
    },
    {
      question: "Heeft ZorgpuntConnect een kantoor in Breda?",
      answer:
        "Ons kantoor staat in Roermond (Zwartbroekpoort 2, 6041 LS). Breda valt binnen ons werkgebied in Noord-Brabant, waar we als top 3 speler actief zijn. We bedienen de stad met persoonlijk contact en korte lijnen, ondersteund door ons portaal Mijn ZPC.",
    },
    {
      question: "Hoe wordt de kwaliteit van zorgpersoneel gecontroleerd?",
      answer:
        "Vóór inzet controleren we onder meer diploma's, BIG-registratie waar van toepassing, VOG en relevante certificaten. Enkel professionals met geldige documentatie gaan aan het werk, beheerd via Mijn ZPC.",
    },
    {
      question: "Kunnen jullie helpen bij piekdrukte of ziekteverzuim in Breda?",
      answer:
        "Zeker. Veel opdrachtgevers in West-Brabant zoeken ons op voor tijdelijke versterking bij verzuim, vakanties of onverwachte uitval. Snelheid en een goede match staan dan voorop.",
    },
    {
      question: "Wat kost het inhuren van zorgpersoneel in Breda?",
      answer:
        "Tarief en vergoeding hangen af van functie, inzetvorm en duur. Bij ZZP-bemiddeling geldt een fee over gewerkte uren, bij detachering een uurtarief op basis van factor. Het eerste adviesgesprek is gratis en vrijblijvend.",
    },
    {
      question: "Hoe vraag ik zorgpersoneel voor Breda aan?",
      answer:
        "Neem contact op via onze website of bel ons kantoor in Roermond. Na een korte kennismaking en raamovereenkomst krijgt u toegang tot Mijn ZPC en stellen we passende professionals voor.",
    },
  ],
  renderArticle: () => <BredaArticle />,
}

function BredaArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        Zoekt u <strong>zorgpersoneel in Breda</strong> dat snel inzetbaar is en
        past bij uw team? Breda is de grootste stad van West-Brabant en een
        belangrijk zorgcentrum in de regio. Met een vergrijzende bevolking en een
        aanhoudend personeelstekort in de zorg is betrouwbare bemiddeling
        cruciaal. {brand.name} bemiddelt en detacheert gekwalificeerde
        zorgprofessionals voor instellingen in heel Breda, van Ginneken tot de
        Haagse Beemden en van Princenhage tot het Centrum.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Lokale zorgvraag in Breda en West-Brabant
      </h2>
      <p>
        Breda telt ruim 185.000 inwoners en groeit gestaag. Grote werkgevers zoals
        het Amphia Ziekenhuis, GGz Breburg, ouderenzorgorganisatie Surplus,
        thuiszorgaanbieder Thebe en Prisma in de gehandicaptenzorg vragen
        voortdurend om gekwalificeerd personeel. De krapte op de arbeidsmarkt
        raakt vooral kleinere aanbieders, wijkteams en particuliere instellingen
        die niet kunnen wedijveren met de wervingskracht van de grote namen.
      </p>
      <p>
        Daar komt {brand.name} in beeld. Vanuit ons kantoor in Roermond, op
        ongeveer 75 minuten rijden via de A67 en A58, bedienen we opdrachtgevers
        in West-Brabant. We zijn als top 3 speler actief in Limburg en
        Noord-Brabant en verwerken jaarlijks circa 500.000 uur voor meer dan 45
        raamovereenkomsten.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Waarom Bredase zorgorganisaties voor ons kiezen
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
        Onze diensten voor Breda
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
        Onze professionals werken door heel Breda en de omliggende plaatsen. Denk
        aan:
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
              <td className="py-3 pr-4">Haagse Beemden</td>
              <td className="py-3 pr-4">Grote woonwijk</td>
              <td className="py-3">VVT, wijkzorg, gezinnen</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Ginneken</td>
              <td className="py-3 pr-4">Groen en gewild</td>
              <td className="py-3">Ouderenzorg, thuiszorg</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Centrum / Belcrum</td>
              <td className="py-3 pr-4">Stedelijk, station</td>
              <td className="py-3">GGZ, sociaal werk</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Princenhage / Teteringen</td>
              <td className="py-3 pr-4">Dorps karakter</td>
              <td className="py-3">VVT, gehandicaptenzorg</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Ook in Oosterhout, Etten-Leur, Prinsenbeek en Bavel zetten wij
        professionals in. Grenst uw locatie aan Breda? Dan valt u vrijwel zeker
        binnen ons werkgebied.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Bereikbaarheid en nabijheid
      </h2>
      <p>
        Ons kantoor staat aan de Zwartbroekpoort 2 in Roermond. Breda ligt op
        {" "}circa 110 kilometer, ongeveer 75 minuten via de A67 en A58. We kennen
        de regio: van het stationsgebied en de Grote Kerk tot de woonwijken in de
        Haagse Beemden. Voor kennismakingen reizen we naar u toe; de dagelijkse
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
          src="/images/werkgebieden/breda.webp"
          alt="ZorgpuntConnect bemiddelt zorgpersoneel voor zorgorganisaties in Breda"
          width={1200}
          height={675}
          className="w-full h-auto object-cover max-h-72"
        />
        <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/30">
          Gekwalificeerde zorgprofessionals voor West-Brabant.
        </figcaption>
      </figure>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Werken in de buurt: ook in omliggende steden
      </h2>
      <p>
        Breda vormt samen met omliggende steden één arbeidsmarkt in Noord-Brabant.
        Bekijk ook onze pagina&apos;s voor{" "}
        <Link href="/werkgebieden/tilburg" className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline">
          Tilburg
        </Link>{" "}
        en{" "}
        <Link
          href="/werkgebieden/s-hertogenbosch"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          &apos;s-Hertogenbosch
        </Link>
        . Veel professionals werken flexibel in meerdere gemeenten in de regio.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Klaar om de juiste match te vinden in Breda?
      </h2>
      <p>
        Zoals we zelf zeggen: laten we het gewoon eens testen. Vraag een gratis,
        vrijblijvend adviesgesprek aan. Lieke en het team bespreken uw
        personeelsvraag in Breda en leggen uit hoe snel we kunnen starten.
      </p>
    </>
  )
}
