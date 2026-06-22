import Link from "next/link"
import Image from "next/image"
import { GoogleMapEmbed } from "@/components/landing/google-map-embed"
import type { RichAreaPage } from "@/lib/service-area-content/types"
import { brand } from "@/lib/brand"

export const roermondContent: RichAreaPage = {
  slug: "roermond",
  proximity:
    "ons kantoor staat aan de Zwartbroekpoort 2 in het centrum van Roermond",
  seo: {
    title:
      "Beste Zorgbemiddeling Roermond, ZorgpuntConnect | Zorgpersoneel inhuren, ZZP-zorgprofessionals, detachering en uitzendbureau voor de zorg in Roermond en Midden-Limburg",
    description:
      "Zorgpersoneel nodig in Roermond? ZorgpuntConnect bemiddelt en detacheert gekwalificeerde zorgprofessionals vanuit ons kantoor in het centrum van Roermond. Snel, persoonlijk en SNA-gecertificeerd.",
    h1: "Zorgpersoneel in Roermond: bemiddeling en detachering vanuit ons Limburgse hoofdkantoor",
    primaryKeyword: "zorgpersoneel Roermond",
    imageAlts: [
      "Zorgprofessional aan het werk in een zorginstelling in Roermond",
      "ZorgpuntConnect bemiddelt zorgpersoneel in Roermond en Midden-Limburg",
      "Verpleegkundige ingezet via ZorgpuntConnect in de regio Roermond",
      "Zorgteam in Roermond ondersteund door ZorgpuntConnect",
    ],
  },
  relatedAreaSlugs: ["venlo", "maastricht", "sittard-geleen", "helmond", "eindhoven"],
  faqs: [
    {
      question: "Levert ZorgpuntConnect zorgpersoneel in heel Roermond?",
      answer:
        "Ja. Wij bemiddelen en detacheren zorgprofessionals voor instellingen in Roermond en omliggende gemeenten in Midden-Limburg, waaronder Swalmen, Herten, Maasgouw, Roerdalen en de regio rond het Maasziekenhuis.",
    },
    {
      question: "Heeft ZorgpuntConnect een kantoor in Roermond?",
      answer:
        "Ja. Ons kantoor staat aan de Zwartbroekpoort 2, 6041 LS Roermond, in het centrum van de stad. Roermond is onze thuisbasis: hier werken Lieke en het team, en vanuit hier bedienen we opdrachtgevers in Limburg en Noord-Brabant.",
    },
    {
      question: "Hoe snel kan ik in Roermond een zorgprofessional inzetten?",
      answer:
        "Afhankelijk van functie en beschikbaarheid schakelen we snel via ons netwerk van circa 1.500 zorgprofessionals. Omdat wij in Roermond gevestigd zijn, zijn korte lijnen en persoonlijk contact vanzelfsprekend.",
    },
    {
      question: "Voor welke zorgsectoren bemiddelen jullie in Roermond?",
      answer:
        "Onder meer GGZ, VVT (ouderen- en thuiszorg), gehandicaptenzorg, jeugdzorg en sociaal werk. Roermond kent onder meer het Maasziekenhuis Pantein, GGZ-aanbieders, ouderenzorgorganisaties en instellingen in de gehandicaptenzorg.",
    },
    {
      question: "Werken jullie met ZZP'ers of met detachering in Roermond?",
      answer:
        "Beide. Via bemiddeling van ZZP-zorgprofessionals, tussenkomst, detachering of werving en selectie vinden we de vorm die past bij uw organisatie. We werken DBA- en VBAR-proof waar van toepassing.",
    },
    {
      question: "Hoe wordt de kwaliteit van zorgpersoneel gecontroleerd?",
      answer:
        "Vóór inzet controleren we onder meer diploma's, BIG-registratie waar van toepassing, VOG en relevante certificaten. Enkel professionals met geldige documentatie gaan aan het werk, beheerd via Mijn ZPC.",
    },
    {
      question: "Kunnen jullie helpen bij piekdrukte of ziekteverzuim in Roermond?",
      answer:
        "Zeker. Veel opdrachtgevers in Midden-Limburg zoeken ons op voor tijdelijke versterking bij verzuim, vakanties of onverwachte uitval. Dankzij onze lokale aanwezigheid schakelen we snel.",
    },
    {
      question: "Wat kost het inhuren van zorgpersoneel in Roermond?",
      answer:
        "Tarief en vergoeding hangen af van functie, inzetvorm en duur. Bij ZZP-bemiddeling geldt een fee over gewerkte uren, bij detachering een uurtarief op basis van factor. Het eerste adviesgesprek is gratis en vrijblijvend.",
    },
    {
      question: "Hoe vraag ik zorgpersoneel voor Roermond aan?",
      answer:
        "Neem contact op via onze website, bel ons kantoor of kom langs op de Zwartbroekpoort. Na een korte kennismaking en raamovereenkomst krijgt u toegang tot Mijn ZPC en stellen we passende professionals voor.",
    },
  ],
  renderArticle: () => <RoermondArticle />,
}

function RoermondArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        Zoekt u <strong>zorgpersoneel in Roermond</strong> dat snel inzetbaar is
        en past bij uw team? {brand.name} is hier gevestigd, aan de
        Zwartbroekpoort in het centrum van de stad. Roermond is onze thuisbasis
        in Midden-Limburg: vanuit dit kantoor bemiddelen en detacheren wij
        gekwalificeerde zorgprofessionals voor instellingen in de stad en de
        omliggende regio, met persoonlijk contact en korte lijnen.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Lokale zorgvraag in Roermond en Midden-Limburg
      </h2>
      <p>
        Roermond telt ruim 60.000 inwoners en fungeert als regionaal centrum
        voor Midden-Limburg. Het Maasziekenhuis Pantein, GGZ-aanbieders,
        ouderenzorgorganisaties en instellingen in de gehandicaptenzorg vragen
        voortdurend om gekwalificeerd personeel. De krapte op de
        zorgarbeidsmarkt raakt ook kleinere aanbieders, wijkteams en
        particuliere instellingen die niet altijd kunnen wedijveren met grote
        wervingscampagnes.
      </p>
      <p>
        Als top 3 speler in Limburg kennen wij de Roermondse zorgmarkt van
        binnenuit. Wij verwerken jaarlijks circa 500.000 uur voor meer dan 45
        raamovereenkomsten en werken met een netwerk van circa 1.500
        zorgprofessionals.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Waarom Roermondse zorgorganisaties voor ons kiezen
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Lokaal kantoor:</strong> wij zitten midden in Roermond, geen
          verre callcenter-partij
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
        Onze diensten voor Roermond
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
        Roermond en omgeving die wij bedienen
      </h2>
      <p>
        Vanuit ons kantoor in het centrum werken wij voor instellingen in Roermond
        en omliggende gemeenten. Denk aan:
      </p>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Gebied
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
              <td className="py-3 pr-4">Roermond centrum</td>
              <td className="py-3 pr-4">Historische binnenstad, Maas</td>
              <td className="py-3">GGZ, sociaal werk</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Roermond-Noord / -Oost</td>
              <td className="py-3 pr-4">Woonwijken, station</td>
              <td className="py-3">VVT, wijkzorg</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Swalmen / Herten</td>
              <td className="py-3 pr-4">Omliggende dorpen</td>
              <td className="py-3">Thuiszorg, ouderenzorg</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Maasgouw / Roerdalen</td>
              <td className="py-3 pr-4">Landelijk Midden-Limburg</td>
              <td className="py-3">VVT, gehandicaptenzorg</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Ons kantoor in Roermond
      </h2>
      <p>
        {brand.name} is gevestigd aan de Zwartbroekpoort 2, op loopafstand van
        het centrum en het station. U bent welkom voor een vrijblijvend
        gesprek. De dagelijkse samenwerking met opdrachtgevers verloopt ook
        digitaal via{" "}
        <Link
          href="/diensten/zpc-online-portaal-opdrachtgevers"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          Mijn ZPC
        </Link>
        .
      </p>

      <GoogleMapEmbed
        title="Bezoek ons in Roermond"
        description="Ma t/m vr 09:00–17:00. Bellen kan altijd."
        className="my-8"
      />

      <figure className="my-8 rounded-xl overflow-hidden border border-border">
        <Image
          src="/images/werkgebieden/roermond.webp"
          alt="ZorgpuntConnect bemiddelt zorgpersoneel voor zorgorganisaties in Roermond"
          width={1200}
          height={675}
          className="w-full h-auto object-cover max-h-72"
        />
        <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/30">
          Zorgbemiddeling vanuit Roermond, het hart van Midden-Limburg.
        </figcaption>
      </figure>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Ook actief in omliggende steden
      </h2>
      <p>
        Vanuit Roermond bedienen we heel Limburg en Noord-Brabant. Bekijk ook
        onze pagina&apos;s voor{" "}
        <Link href="/werkgebieden/venlo" className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline">
          Venlo
        </Link>
        ,{" "}
        <Link
          href="/werkgebieden/maastricht"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          Maastricht
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
        Klaar om de juiste match te vinden in Roermond?
      </h2>
      <p>
        Zoals we zelf zeggen: laten we het gewoon eens testen. Vraag een gratis,
        vrijblijvend adviesgesprek aan, kom langs op kantoor of bel ons. Lieke
        en het team bespreken uw personeelsvraag in Roermond en leggen uit hoe
        snel we kunnen starten.
      </p>
    </>
  )
}
