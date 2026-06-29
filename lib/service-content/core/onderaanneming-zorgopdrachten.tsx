import Link from "next/link"
import Image from "next/image"
import type { RichServicePage } from "@/lib/service-content/types"
import { brand } from "@/lib/brand"

export const onderaannemingContent: RichServicePage = {
  slug: "onderaanneming-zorgopdrachten",
  seo: {
    title:
      "Onderaanneming zorgopdrachten | Complete zorgteams uitbesteden via ZorgpuntConnect",
    description:
      "Onderaanneming van zorgopdrachten via ZorgpuntConnect. Wij leveren complete teams en nemen personeelsplanning en bezetting over. Eén aanspreekpunt, SNA-gecertificeerd, actief in Limburg en Noord-Brabant.",
    h1: "Onderaanneming zorgopdrachten: complete teams en uitvoering uitbesteed",
    primaryKeyword: "onderaanneming zorgopdrachten",
    imageAlts: [
      "Compleet zorgteam ingezet via onderaanneming door ZorgpuntConnect",
      "ZorgpuntConnect verzorgt onderaanneming van zorgopdrachten met regie en planning",
      "Zorgprofessionals werken samen binnen een uitbestede zorgopdracht in Limburg",
    ],
  },
  relatedSlugs: [
    "detachering-zorgpersoneel",
    "bemiddeling-zzp-zorgprofessionals",
    "roosterplanning-personeelsbezetting",
  ],
  faqs: [
    {
      question: "Wat houdt onderaanneming van zorgopdrachten in?",
      answer:
        "Bij onderaanneming neemt ZorgpuntConnect (een deel van) uw zorgopdracht over en levert complete teams of capaciteit voor de uitvoering. Wij verzorgen personeelsplanning en bezetting op regiebasis, zodat u een hele zorgvraag integraal kunt uitbesteden.",
    },
    {
      question: "Wat is het verschil met detachering?",
      answer:
        "Bij detachering zet u individuele professionals in onder uw eigen aansturing. Bij onderaanneming neemt ZorgpuntConnect de regie over de uitvoering en levert complete teams. U stuurt op resultaat en afspraken, wij op de dagelijkse personeelsinzet.",
    },
    {
      question: "Behoud ik grip op kwaliteit?",
      answer:
        "Ja. Via heldere contracten, duidelijke afspraken en periodieke rapportage houdt u grip op kwaliteit en resultaat, terwijl wij de dagelijkse planning en bezetting verzorgen.",
    },
    {
      question: "Voor wie is onderaanneming geschikt?",
      answer:
        "Voor opdrachtgevers met grotere of doorlopende zorgopdrachten die personeel én uitvoering willen uitbesteden, bijvoorbeeld bij een nieuwe locatie, een afdeling onder druk of een structureel capaciteitsvraagstuk.",
    },
    {
      question: "Hoe regelen jullie de personeelsplanning?",
      answer:
        "Wij verzorgen roosterplanning en personeelsbezetting via Mijn ZPC, met een netwerk van circa 1.500 zorgprofessionals. Zo borgen we continuïteit en kunnen we snel schakelen bij uitval of piekdrukte.",
    },
    {
      question: "Werken jullie volgens erkende normen?",
      answer:
        "Ja. Wij werken SNA NEN 4400-1 gecertificeerd en NBBU-gecertificeerd, met transparante bedrijfsvoering en correcte afdrachten. Dat beperkt risico's en geeft zekerheid bij het uitbesteden van een opdracht.",
    },
    {
      question: "In welke regio's verzorgen jullie onderaanneming?",
      answer:
        "ZorgpuntConnect is gevestigd in Roermond en als top 3 speler actief in Limburg en Noord-Brabant, met raamovereenkomsten bij meer dan 45 zorginstellingen. Ook daarbuiten werken we met opdrachtgevers.",
    },
    {
      question: "Hoe start ik met onderaanneming via ZorgpuntConnect?",
      answer:
        "Na een vrijblijvende kennismaking bepalen we samen de scope, kwaliteitseisen en rapportage. In een overeenkomst leggen we afspraken, fee en facturatie vast. Het eerste gesprek is gratis.",
    },
  ],
  renderArticle: () => <OnderaannemingArticle />,
}

function OnderaannemingArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        <strong>Onderaanneming van zorgopdrachten</strong> is de meest
        verregaande vorm van ontzorgen: u besteedt een hele zorgvraag uit en{" "}
        {brand.name} levert complete teams én de uitvoering. Van
        personeelsplanning tot bezetting op de werkvloer, wij nemen de
        operationele regie over zodat u zich kunt richten op uw kernwaarde: zorg
        bieden.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Waarom deze pagina? Zoekintentie en wat u hier vindt
      </h2>
      <p>
        Bestuurders en zorgmanagers zoeken op termen als &quot;zorgopdracht
        uitbesteden&quot;, &quot;compleet zorgteam inhuren&quot; of
        &quot;onderaanneming zorg&quot; omdat ze een afdeling of locatie volledig
        bemenst willen krijgen zonder zelf de planning te dragen. Deze pagina
        legt uit hoe {brand.name} onderaanneming aanpakt, wanneer het de beste
        keuze is en hoe u grip houdt op kwaliteit.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wat onderaanneming precies betekent
      </h2>
      <p>
        Bij onderaanneming neemt {brand.name} (een deel van) uw zorgopdracht over
        en is verantwoordelijk voor de uitvoering met eigen ingezette
        professionals. U stuurt op resultaat, afspraken en kwaliteit; wij sturen
        op de dagelijkse personeelsinzet. In de praktijk betekent dit:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Complete teams of volledige bezetting voor een opdracht</li>
        <li>Minder interne druk op planning en werving</li>
        <li>Schaalbaar bij piekbelasting of groei</li>
        <li>Eén aanspreekpunt voor de hele opdracht</li>
        <li>Heldere rapportage over inzet en resultaat</li>
      </ul>
      <p>
        {brand.name} is in 2022 opgericht door professionals uit de sector zelf
        en groeide uit tot een vaste waarde in Limburg en Noord-Brabant.
        Kwaliteit, een persoonlijke aanpak en warme contacten staan vanaf dag één
        centraal.
      </p>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        Onderaanneming, detachering of bemiddeling?
      </h3>
      <p>
        Zoekt u individuele krachten onder uw eigen aansturing, dan past{" "}
        <Link
          href="/diensten/detachering-zorgpersoneel"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          detachering van zorgpersoneel
        </Link>{" "}
        of{" "}
        <Link
          href="/diensten/bemiddeling-zzp-zorgprofessionals"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          bemiddeling van ZZP&apos;ers
        </Link>{" "}
        beter. Bij onderaanneming gaat het juist om het uitbesteden van een hele
        opdracht inclusief regie. Het is de keuze voor maximale ontzorging.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Planning en bezetting op regiebasis
      </h2>
      <p>
        De kern van onderaanneming is dat ZPC de bezetting borgt. Wij verzorgen{" "}
        roosterplanning en personeelsbezetting{" "}
        via Mijn ZPC, met een netwerk van circa 1.500 zorgprofessionals. Zo
        houden we continuïteit voor cliënten, ook bij uitval of piekdrukte, en
        kunt u rekenen op een stabiele uitvoering.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Grip op kwaliteit via rapportage
      </h2>
      <p>
        Uitbesteden betekent niet de regie verliezen. Via{" "}
        rapportage en analyse van personeelsinzet{" "}
        krijgt u inzicht in uren, bezetting en trends. Samen met heldere
        contractuele afspraken houdt u zo grip op kwaliteit, kosten en resultaat.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wanneer kiest u voor onderaanneming? Overzicht
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
              <td className="py-3 pr-4">Nieuwe locatie of afdeling opstarten</td>
              <td className="py-3 pr-4">Compleet team + ZPC-regie</td>
              <td className="py-3">Volledig ontzorgd</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Afdeling structureel onderbezet</td>
              <td className="py-3 pr-4">Bezetting op regiebasis</td>
              <td className="py-3">Continuïteit voor cliënten</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Geen interne planningscapaciteit</td>
              <td className="py-3 pr-4">Planning + rapportage door ZPC</td>
              <td className="py-3">Minder interne druk</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Tijdelijke piek of project</td>
              <td className="py-3 pr-4">Schaalbare teaminzet</td>
              <td className="py-3">Op- en afschalen wanneer nodig</td>
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
        en circa 500.000 gerealiseerde uren per jaar hebben wij de schaal en
        ervaring om complete zorgopdrachten betrouwbaar over te nemen, in de
        regio én daarbuiten.
      </p>

      <figure className="my-8 rounded-xl overflow-hidden border border-border">
        <Image
          src="/images/hero-team.jpg"
          alt="ZorgpuntConnect verzorgt onderaanneming van zorgopdrachten met complete teams"
          width={1200}
          height={675}
          className="w-full h-auto object-cover max-h-72"
        />
        <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/30">
          Onderaanneming: complete teams én uitvoering, met één aanspreekpunt.
        </figcaption>
      </figure>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Volgende stap
      </h2>
      <p>
        Wilt u een afdeling of opdracht volledig laten bemensen door een partner
        die de zorg snapt? Neem contact op met {brand.name}. Het eerste gesprek
        is gratis. Samen bepalen we de scope, kwaliteitseisen en hoe we de
        uitvoering inrichten.
      </p>
    </>
  )
}
