import Link from "next/link"
import Image from "next/image"
import type { RichServicePage } from "@/lib/service-content/types"
import { brand } from "@/lib/brand"

export const detacheringContent: RichServicePage = {
  slug: "detachering-zorgpersoneel",
  seo: {
    title:
      "Detachering zorgpersoneel | Zorgprofessionals detacheren via ZorgpuntConnect",
    description:
      "Detachering van zorgpersoneel via ZorgpuntConnect. Flexibele, langdurige inzet van gekwalificeerde zorgprofessionals met werkgeverskader. SNA-gecertificeerd, persoonlijk en actief in Limburg en Noord-Brabant.",
    h1: "Detachering zorgpersoneel: structurele bezetting met flexibele zekerheid",
    primaryKeyword: "detachering zorgpersoneel",
    imageAlts: [
      "Gedetacheerde zorgprofessional aan het werk bij een zorginstelling",
      "ZorgpuntConnect detacheert gekwalificeerd zorgpersoneel voor langere opdrachten",
      "Verpleegkundige via detachering ingezet in Limburg en Noord-Brabant",
    ],
  },
  relatedSlugs: [
    "bemiddeling-zzp-zorgprofessionals",
    "tussenkomst-zzp-zorgprofessionals",
    "onderaanneming-zorgopdrachten",
  ],
  faqs: [
    {
      question: "Wat houdt detachering van zorgpersoneel in?",
      answer:
        "Bij detachering stelt ZorgpuntConnect een zorgprofessional tijdelijk bij uw organisatie te werk, terwijl wij het werkgeverschap of bemiddelingskader verzorgen. U stuurt op de werkvloer aan; wij regelen contract, salaris, planning en administratie.",
    },
    {
      question: "Wat is het verschil tussen detachering en ZZP-bemiddeling?",
      answer:
        "Bij detachering werkt de professional onder een arbeids- of detacheringsovereenkomst en draagt ZorgpuntConnect het werkgeversrisico. Bij bemiddeling van ZZP'ers gaat het om een zelfstandige ondernemer. Detachering is vooral geschikt voor langere, structurele inzet.",
    },
    {
      question: "Voor welke duur is detachering geschikt?",
      answer:
        "Detachering is ideaal bij langere projecten, structurele personeelstekorten of wanneer u snel capaciteit wilt opbouwen zonder direct zelf te werven. De duur stemmen we af per opdracht en kan indien nodig worden verlengd.",
    },
    {
      question: "Behoud ik regie over de werkzaamheden?",
      answer:
        "Ja. U houdt de dagelijkse aansturing en regie op de werkvloer. ZorgpuntConnect ontzorgt bij selectie, contractering, planning en waar nodig verlenging of vervanging bij uitval.",
    },
    {
      question: "Zijn gedetacheerde professionals gescreend?",
      answer:
        "Ja. Voor de start controleren wij via ons documentbeheer en verificatie diploma's, BIG-registratie, VOG en certificaten. Zo voldoet u aan uw zorgplicht en zijn de professionals direct inzetbaar.",
    },
    {
      question: "Werken jullie volgens erkende normen?",
      answer:
        "Wij werken NBBU-gecertificeerd en SNA NEN 4400-1 gecertificeerd, met duidelijke arbeidsvoorwaarden en correcte afdrachten. Dat beperkt risico's rond inlenersaansprakelijkheid en geeft zekerheid voor opdrachtgever en professional.",
    },
    {
      question: "In welke regio's detacheren jullie zorgpersoneel?",
      answer:
        "ZorgpuntConnect is gevestigd in Roermond en als top 3 speler actief in Limburg en Noord-Brabant, met raamovereenkomsten bij meer dan 45 zorginstellingen. Ook daarbuiten werken we met opdrachtgevers.",
    },
    {
      question: "Hoe start ik met detachering via ZorgpuntConnect?",
      answer:
        "Na een vrijblijvende kennismaking leggen we in een raamovereenkomst fee, factor en facturatie vast. U krijgt toegang tot het ZPC Online portaal en wij stellen passende, gescreende professionals voor. Het eerste gesprek is gratis.",
    },
  ],
  renderArticle: () => <DetacheringArticle />,
}

function DetacheringArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        <strong>Detachering van zorgpersoneel</strong> geeft uw organisatie
        structurele bezetting met de flexibiliteit van tijdelijke inzet. Bij
        detachering stelt {brand.name} een gekwalificeerde zorgprofessional bij u
        te werk, terwijl wij het werkgeverskader, de planning en de administratie
        verzorgen. U stuurt aan op de werkvloer; wij ontzorgen op alles
        daaromheen.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Waarom deze pagina? Zoekintentie en wat u hier vindt
      </h2>
      <p>
        Zorgmanagers en teamleiders zoeken op termen als &quot;zorgpersoneel
        detacheren&quot;, &quot;verpleegkundige detachering&quot; of
        &quot;structureel personeelstekort oplossen&quot; omdat ze langere tijd
        op extra capaciteit willen kunnen rekenen. Deze pagina legt uit hoe{" "}
        {brand.name} detachering aanpakt, wanneer het de beste keuze is en hoe u
        veilig en snel start.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wat detachering van zorgpersoneel precies betekent
      </h2>
      <p>
        Bij detachering werkt de zorgprofessional onder een arbeids- of
        detacheringsovereenkomst bij {brand.name}, en wordt hij of zij bij u
        ingezet. Daardoor draagt ZPC het werkgeversrisico en heeft u een
        betrouwbare, doorlopende kracht in uw team. In de praktijk betekent dit:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Snelle opschaling van teams zonder directe werving</li>
        <li>Matching op specialisme, ervaring, regio en cultuur</li>
        <li>Flexibele duur per opdracht, met optie tot verlenging</li>
        <li>Continuïteit bij uitval of verloop</li>
        <li>Werkgeverschap, planning en administratie uit handen</li>
      </ul>
      <p>
        {brand.name} is in 2022 opgericht door professionals uit de sector zelf
        en groeide uit tot een vaste waarde in Limburg en Noord-Brabant.
        Kwaliteit, een persoonlijke aanpak en warme contacten staan vanaf dag één
        centraal.
      </p>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        Detachering, bemiddeling of onderaanneming: wat past bij u?
      </h3>
      <p>
        Voor kortere of incidentele inzet kan{" "}
        <Link
          href="/diensten/bemiddeling-zzp-zorgprofessionals"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          bemiddeling van ZZP&apos;ers
        </Link>{" "}
        of{" "}
        <Link
          href="/diensten/tussenkomst-zzp-zorgprofessionals"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          tussenkomst
        </Link>{" "}
        beter passen. Wilt u juist een complete dienst of een heel team
        uitbesteden, kijk dan naar{" "}
        onderaanneming van zorgopdrachten
        . Detachering zit daar tussenin: structurele inzet van individuele
        professionals onder werkgeverskader.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Gecertificeerd en conform: NBBU en SNA
      </h2>
      <p>
        Detachering vraagt om correcte arbeidsvoorwaarden en afdrachten. Wij
        werken als{" "}
        NBBU-gecertificeerde organisatie{" "}
        en volgens de{" "}
        SNA NEN 4400-1 norm
        . Dat borgt de rechten van de professional, beperkt
        inlenersaansprakelijkheid en geeft u zekerheid over een nette
        bedrijfsvoering.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Van kennismaking tot lopende detachering
      </h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Kennismaking: welke functie, periode en profiel zoekt u?</li>
        <li>Raamovereenkomst met fee, factor en facturatie</li>
        <li>Toegang tot het ZPC Online portaal voor opdrachtgevers</li>
        <li>Wij stellen gescreende, beschikbare professionals voor</li>
        <li>Start, met persoonlijke begeleiding en snelle vervanging bij uitval</li>
      </ol>
      <p>
        Jaarlijks worden via {brand.name} circa 500.000 uren gerealiseerd. Het
        beheer van planning en uren loopt via het{" "}
        ZPC Online portaal
        , zodat planning, uitvoering en administratie in één lijn doorlopen.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wanneer kiest u voor detachering? Overzicht
      </h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Situatie
              </th>
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Aanpak via ZPC
              </th>
              <th className="text-left py-2 font-semibold text-foreground">
                Voordeel
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Structureel tekort op een functie</td>
              <td className="py-3 pr-4">Detachering voor langere periode</td>
              <td className="py-3">Stabiele bezetting</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Snel opschalen zonder werving</td>
              <td className="py-3 pr-4">Inzet uit netwerk + werkgeverskader</td>
              <td className="py-3">Geen wervingslast</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Project of nieuwe locatie</td>
              <td className="py-3 pr-4">Detachering op maat</td>
              <td className="py-3">Capaciteit zolang nodig</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Onzekerheid over vast contract</td>
              <td className="py-3 pr-4">Flexibele duur met verlengoptie</td>
              <td className="py-3">Risico bij ZPC, niet bij u</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        De regionale context: Limburg en Noord-Brabant
      </h2>
      <p>
        Vanuit Roermond werkt {brand.name} als top 3 speler en voor diverse
        instellingen als preferred supplier. Met meer dan 45 raamovereenkomsten
        kennen we de regionale vraag en beschikbaarheid, zodat we realistische
        verwachtingen kunnen waarmaken, in de regio én daarbuiten.
      </p>

      <figure className="my-8 rounded-xl overflow-hidden border border-border">
        <Image
          src="/images/hero-team.jpg"
          alt="ZorgpuntConnect detacheert gekwalificeerd zorgpersoneel voor zorgorganisaties"
          width={1200}
          height={675}
          className="w-full h-auto object-cover max-h-72"
        />
        <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/30">
          Detachering: structurele bezetting met de flexibiliteit van tijdelijke
          inzet.
        </figcaption>
      </figure>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Volgende stap
      </h2>
      <p>
        Wilt u uw team versterken met gedetacheerd zorgpersoneel zonder
        werkgeverszorgen? Neem contact op met {brand.name}. Het eerste gesprek is
        gratis. Samen kijken we welke professional past bij uw afdeling en hoe
        snel we kunnen starten.
      </p>
    </>
  )
}
