import Link from "next/link"
import Image from "next/image"
import { OfficeMapLink } from "@/components/landing/office-map-link"
import type { RichAreaPage } from "@/lib/service-area-content/types"
import { brand } from "@/lib/brand"

export const venloContent: RichAreaPage = {
  slug: "venlo",
  proximity: "circa 30 km van ons kantoor in Roermond, ongeveer 25 minuten via de A73",
  seo: {
    title:
      "Beste Zorgbemiddeling Venlo, ZorgpuntConnect | Zorgpersoneel inhuren, ZZP-zorgprofessionals, detachering en uitzendbureau voor de zorg in Venlo en omgeving (Noord-Limburg)",
    description:
      "Zorgpersoneel nodig in Venlo? ZorgpuntConnect bemiddelt en detacheert gekwalificeerde zorgprofessionals voor instellingen in Blerick, Tegelen, Belfeld en heel Noord-Limburg.",
    h1: "Zorgpersoneel in Venlo: bemiddeling en detachering voor Noord-Limburg",
    primaryKeyword: "zorgpersoneel Venlo",
    imageAlts: [
      "Zorgprofessional aan het werk in een zorginstelling in Venlo",
      "ZorgpuntConnect bemiddelt zorgpersoneel voor Blerick en Tegelen in Venlo",
      "Verpleegkundige ingezet via ZorgpuntConnect in de regio Noord-Limburg",
      "Zorgteam in Venlo ondersteund door ZorgpuntConnect uit Roermond",
    ],
  },
  relatedAreaSlugs: ["roermond", "sittard-geleen", "maastricht", "nijmegen", "eindhoven"],
  faqs: [
    {
      question: "Levert ZorgpuntConnect zorgpersoneel in heel Venlo?",
      answer:
        "Ja. Wij bemiddelen en detacheren zorgprofessionals voor instellingen in alle stadsdelen van Venlo, waaronder Blerick, Tegelen, Belfeld en het Centrum, plus omliggende plaatsen in Noord-Limburg zoals Venray, Horst aan de Maas en Peel en Maas.",
    },
    {
      question: "Hoe snel kan ik in Venlo een zorgprofessional inzetten?",
      answer:
        "Afhankelijk van functie en beschikbaarheid schakelen we snel via ons netwerk van circa 1.500 zorgprofessionals. Venlo ligt op slechts 25 minuten van ons kantoor in Roermond, direct via de A73, en valt midden in ons kerngebied in Limburg.",
    },
    {
      question: "Voor welke zorgsectoren bemiddelen jullie in Venlo?",
      answer:
        "Onder meer GGZ, VVT (ouderen- en thuiszorg), gehandicaptenzorg, jeugdzorg en sociaal werk. Venlo kent grote werkgevers zoals het VieCuri Medisch Centrum, GGZ-aanbieder Vincent van Gogh, ouderenzorgorganisatie De Zorggroep en Dichterbij in de gehandicaptenzorg.",
    },
    {
      question: "Werken jullie met ZZP'ers of met detachering in Venlo?",
      answer:
        "Beide. Via bemiddeling van ZZP-zorgprofessionals, tussenkomst, detachering of werving en selectie vinden we de vorm die past bij uw organisatie. We werken DBA- en VBAR-proof waar van toepassing.",
    },
    {
      question: "Heeft ZorgpuntConnect een kantoor in Venlo?",
      answer:
        "Ons kantoor staat in Roermond (Zwartbroekpoort 2, 6041 LS), op slechts een half uur rijden. Venlo ligt in ons directe thuisgebied in Limburg. We bedienen de stad met persoonlijk contact en korte lijnen, ondersteund door Mijn ZPC.",
    },
    {
      question: "Hoe wordt de kwaliteit van zorgpersoneel gecontroleerd?",
      answer:
        "Vóór inzet controleren we onder meer diploma's, BIG-registratie waar van toepassing, VOG en relevante certificaten. Enkel professionals met geldige documentatie gaan aan het werk, beheerd via Mijn ZPC.",
    },
    {
      question: "Kunnen jullie helpen bij piekdrukte of ziekteverzuim in Venlo?",
      answer:
        "Zeker. Veel opdrachtgevers in Noord-Limburg zoeken ons op voor tijdelijke versterking bij verzuim, vakanties of onverwachte uitval. Dankzij de nabijheid schakelen we snel.",
    },
    {
      question: "Wat kost het inhuren van zorgpersoneel in Venlo?",
      answer:
        "Tarief en vergoeding hangen af van functie, inzetvorm en duur. Bij ZZP-bemiddeling geldt een fee over gewerkte uren, bij detachering een uurtarief op basis van factor. Het eerste adviesgesprek is gratis en vrijblijvend.",
    },
    {
      question: "Hoe vraag ik zorgpersoneel voor Venlo aan?",
      answer:
        "Neem contact op via onze website of bel ons kantoor in Roermond. Na een korte kennismaking en raamovereenkomst krijgt u toegang tot Mijn ZPC en stellen we passende professionals voor.",
    },
  ],
  renderArticle: () => <VenloArticle />,
}

function VenloArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        Zoekt u <strong>zorgpersoneel in Venlo</strong> dat snel inzetbaar is en
        past bij uw team? Venlo is de grootste stad van Noord-Limburg en een
        logistiek en zorgknooppunt aan de Maas, vlak bij de Duitse grens. Met een
        vergrijzende bevolking en een aanhoudend personeelstekort in de zorg is
        betrouwbare bemiddeling onmisbaar. {brand.name} bemiddelt en detacheert
        gekwalificeerde zorgprofessionals voor instellingen in heel Venlo, van
        Blerick tot Tegelen en van Belfeld tot het Centrum, en kent de regio als
        geen ander.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Lokale zorgvraag in Venlo en Noord-Limburg
      </h2>
      <p>
        Venlo telt ruim 100.000 inwoners en is het verzorgingshart van
        Noord-Limburg. Grote werkgevers zoals het VieCuri Medisch Centrum,
        GGZ-aanbieder Vincent van Gogh, ouderenzorgorganisatie De Zorggroep en
        Dichterbij in de gehandicaptenzorg vragen voortdurend om gekwalificeerd
        personeel. De krapte op de arbeidsmarkt raakt vooral kleinere aanbieders,
        wijkteams en particuliere instellingen die niet kunnen wedijveren met de
        wervingskracht van de grote namen.
      </p>
      <p>
        Daar komt {brand.name} in beeld. Vanuit ons kantoor in Roermond, op
        slechts 25 minuten rijden direct via de A73, bedienen we opdrachtgevers in
        Noord-Limburg. Venlo ligt in ons directe thuisgebied: we zijn als top 3
        speler actief in Limburg en verwerken jaarlijks circa 500.000 uur voor
        meer dan 45 raamovereenkomsten.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Waarom Venlose zorgorganisaties voor ons kiezen
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
          <strong>Digitaal gemak:</strong> planning, documentatie en facturatie
          in één portaal, Mijn ZPC
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Onze diensten voor Venlo
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
        Onze professionals werken door heel Venlo en de omliggende plaatsen. Denk
        aan:
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
              <td className="py-3 pr-4">Centrum / Venlo-Oost</td>
              <td className="py-3 pr-4">Binnenstad aan de Maas</td>
              <td className="py-3">GGZ, sociaal werk</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Blerick</td>
              <td className="py-3 pr-4">Westelijk, groot</td>
              <td className="py-3">VVT, wijkzorg</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Tegelen</td>
              <td className="py-3 pr-4">Zuidelijk stadsdeel</td>
              <td className="py-3">Ouderenzorg, thuiszorg</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Belfeld / omgeving</td>
              <td className="py-3 pr-4">Dorps karakter</td>
              <td className="py-3">VVT, gehandicaptenzorg</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Ook in Venray, Horst aan de Maas, Peel en Maas en Beesel zetten wij
        professionals in. Grenst uw locatie aan Venlo? Dan valt u vrijwel zeker
        binnen ons werkgebied.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Bereikbaarheid en nabijheid
      </h2>
      <p>
        Ons kantoor staat aan de Zwartbroekpoort 2 in Roermond, op slechts een
        half uur rijden. Venlo ligt op circa 30 kilometer, ongeveer 25 minuten
        direct via de A73. Geen enkel werkgebied ligt dichter bij onze thuisbasis.
        We kennen de regio: van het stationsgebied en de Maasboulevard tot de
        woonwijken in Blerick en Tegelen. Voor kennismakingen reizen we naar u
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
          src="/images/werkgebieden/venlo.webp"
          alt="ZorgpuntConnect bemiddelt zorgpersoneel voor zorgorganisaties in Venlo"
          width={1200}
          height={675}
          className="w-full h-auto object-cover max-h-72"
        />
        <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/30">
          Gekwalificeerde zorgprofessionals voor Noord-Limburg.
        </figcaption>
      </figure>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Werken in de buurt: ook in omliggende steden
      </h2>
      <p>
        Venlo ligt centraal in Limburg, dicht bij onze thuisbasis. Bekijk ook onze
        pagina&apos;s voor{" "}
        <Link
          href="/werkgebieden/sittard-geleen"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          Sittard-Geleen
        </Link>{" "}
        en{" "}
        <Link
          href="/werkgebieden/maastricht"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          Maastricht
        </Link>
        . Veel professionals werken flexibel in meerdere gemeenten in de regio.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Klaar om de juiste match te vinden in Venlo?
      </h2>
      <p>
        Zoals we zelf zeggen: laten we het gewoon eens testen. Vraag een gratis,
        vrijblijvend adviesgesprek aan. Lieke en het team bespreken uw
        personeelsvraag in Venlo en leggen uit hoe snel we kunnen starten.
      </p>
    </>
  )
}
