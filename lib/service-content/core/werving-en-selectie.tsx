import Link from "next/link"
import Image from "next/image"
import type { RichServicePage } from "@/lib/service-content/types"
import { brand } from "@/lib/brand"

export const wervingSelectieContent: RichServicePage = {
  slug: "werving-en-selectie",
  seo: {
    title:
      "Werving & Selectie zorg | Zorgprofessionals werven via ZorgpuntConnect",
    description:
      "Werving en selectie van zorgprofessionals via ZorgpuntConnect. Wij vinden de juiste kandidaat voor vaste of tijdelijke functies in de zorg. Gerichte search, screening en persoonlijk contact in Limburg en Noord-Brabant.",
    h1: "Werving & Selectie in de zorg: de juiste kandidaat voor een blijvende match",
    primaryKeyword: "werving en selectie zorg",
    imageAlts: [
      "Recruiter van ZorgpuntConnect voert wervings- en selectiegesprek met zorgprofessional",
      "ZorgpuntConnect werft en selecteert zorgprofessionals voor vaste functies",
      "Nieuwe zorgmedewerker verwelkomd na werving en selectie in Limburg",
    ],
  },
  relatedSlugs: [
    "detachering-zorgpersoneel",
    "bemiddeling-zzp-zorgprofessionals",
    "kwaliteitscontrole-screening-zorgprofessionals",
  ],
  faqs: [
    {
      question: "Wat houdt werving en selectie in de zorg in?",
      answer:
        "Bij werving en selectie zoekt ZorgpuntConnect gericht naar zorgprofessionals voor directe indiensttreding of langdurige samenwerking bij uw organisatie. We werven, screenen en stellen kandidaten voor die passen op opleiding, ervaring, beschikbaarheid en persoonlijke fit.",
    },
    {
      question: "Wat is het verschil met detachering of bemiddeling?",
      answer:
        "Bij werving en selectie komt de kandidaat doorgaans rechtstreeks bij u in dienst. Bij detachering blijft de professional bij ZorgpuntConnect in dienst en bij bemiddeling gaat het om een zelfstandige. Werving en selectie is gericht op een blijvende, vaste invulling.",
    },
    {
      question: "Voor welke functies werven jullie?",
      answer:
        "Van verpleegkundigen, verzorgenden IG en begeleiders tot specialisten in GGZ, VVT, gehandicaptenzorg en jeugdzorg. We werven voor zowel vaste als tijdelijke functies, op verschillende niveaus.",
    },
    {
      question: "Hoe verloopt het selectieproces?",
      answer:
        "We starten met een vacature-intake, doen een gerichte search in ons zorgnetwerk en screenen op diploma's en referenties. U krijgt een transparant proces met heldere verwachtingen over doorlooptijd en resultaat, inclusief introductie en opvolging.",
    },
    {
      question: "Worden kandidaten gescreend?",
      answer:
        "Ja. Via onze kwaliteitscontrole en screening en ons documentbeheer controleren we diploma's, BIG-registratie, VOG en referenties. Zo weet u zeker dat een kandidaat vakbekwaam en betrouwbaar is voordat u aanneemt.",
    },
    {
      question: "Werken jullie ook regiogericht?",
      answer:
        "Zeker. ZorgpuntConnect is gevestigd in Roermond en als top 3 speler actief in Limburg en Noord-Brabant. We kennen de regionale arbeidsmarkt en beschikbaarheid, wat gericht werven aanzienlijk versnelt.",
    },
    {
      question: "Wat als een kandidaat toch niet past?",
      answer:
        "We investeren vooraf in een goede match op vakgebied én cultuur om dat te voorkomen. Over garanties en opvolging maken we vooraf duidelijke afspraken, zodat u nooit voor verrassingen komt te staan.",
    },
    {
      question: "Hoe start ik met werving en selectie via ZorgpuntConnect?",
      answer:
        "Na een vrijblijvende kennismaking bespreken we het functieprofiel en de verwachtingen. We leggen afspraken vast en starten de search. Het eerste gesprek is gratis.",
    },
  ],
  renderArticle: () => <WervingSelectieArticle />,
}

function WervingSelectieArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        <strong>Werving en selectie in de zorg</strong> draait om meer dan een
        vacature vullen: u zoekt een professional die blijft en past in uw team.
        {" "}
        {brand.name} werft en selecteert zorgprofessionals voor vaste of
        langdurige functies, met een gerichte search in ons netwerk, grondige
        screening en persoonlijk contact met zowel opdrachtgever als kandidaat.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Waarom deze pagina? Zoekintentie en wat u hier vindt
      </h2>
      <p>
        HR-adviseurs en zorgmanagers zoeken op termen als &quot;werving en
        selectie zorg&quot;, &quot;zorgpersoneel werven&quot; of &quot;recruitment
        verpleegkundige&quot; omdat ze structureel een functie willen invullen
        met de juiste persoon. Deze pagina legt uit hoe {brand.name} werving en
        selectie aanpakt, wat het verschil is met flexibele inzet en hoe u tot
        een blijvende match komt.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wat werving en selectie precies betekent
      </h2>
      <p>
        Bij werving en selectie zoekt {brand.name} gericht naar een kandidaat die
        rechtstreeks bij u in dienst komt of langdurig samenwerkt. Ons team kent
        de zorgmarkt en spreekt de taal van zowel opdrachtgevers als kandidaten.
        In de praktijk betekent dit:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Gerichte search in ons zorgnetwerk en daarbuiten</li>
        <li>Selectie op opleiding, ervaring, beschikbaarheid en fit</li>
        <li>Screening op diploma&apos;s en referenties</li>
        <li>Korte lijnen en persoonlijk contact</li>
        <li>Geschikt voor vaste en tijdelijke functies</li>
      </ul>
      <p>
        {brand.name} is in 2022 opgericht door professionals uit de sector zelf
        en groeide uit tot een vaste waarde in Limburg en Noord-Brabant.
        Kwaliteit, een persoonlijke aanpak en warme contacten staan vanaf dag één
        centraal.
      </p>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        Werving & selectie of flexibele inzet?
      </h3>
      <p>
        Zoekt u juist tijdelijke of flexibele capaciteit, dan past{" "}
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
        beter. Werving en selectie is de keuze wanneer u een functie structureel
        en blijvend wilt invullen, met iemand die onderdeel wordt van uw vaste
        team.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Zekerheid over kwaliteit: screening en documenten
      </h2>
      <p>
        Een goede match begint bij een betrouwbare kandidaat. Via onze{" "}
        kwaliteitscontrole en screening{" "}
        en ons{" "}
        documentbeheer en verificatie{" "}
        controleren we diploma&apos;s, BIG-registratie, VOG en referenties. Zo
        weet u zeker dat u een vakbekwame en betrouwbare professional aanneemt.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Het wervings- en selectieproces stap voor stap
      </h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Vacature-intake: functie, eisen, team en cultuur in beeld</li>
        <li>Gerichte search in ons netwerk en de regionale markt</li>
        <li>Screening op diploma&apos;s, registraties en referenties</li>
        <li>Voorstellen van kandidaten met een onderbouwd advies</li>
        <li>Introductie, afronding en opvolging na indiensttreding</li>
      </ol>
      <p>
        Doordat {brand.name} dagelijks met een netwerk van circa 1.500
        zorgprofessionals werkt, hebben we vaak sneller zicht op passende
        kandidaten dan via een reguliere vacature alleen.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wanneer kiest u voor werving & selectie? Overzicht
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
              <td className="py-3 pr-4">Vaste functie structureel invullen</td>
              <td className="py-3 pr-4">Gerichte search + selectie</td>
              <td className="py-3">Blijvende match</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Moeilijk vervulbare vacature</td>
              <td className="py-3 pr-4">Netwerk + regiokennis</td>
              <td className="py-3">Sneller de juiste kandidaat</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Specialistisch profiel</td>
              <td className="py-3 pr-4">Selectie op ervaring en fit</td>
              <td className="py-3">Juiste expertise in vaste dienst</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Weinig interne wervingscapaciteit</td>
              <td className="py-3 pr-4">Volledig wervingsproces uit handen</td>
              <td className="py-3">Tijd terug voor de zorg</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        De regionale context: Limburg en Noord-Brabant
      </h2>
      <p>
        Vanuit Roermond werkt {brand.name} als top 3 speler en voor diverse
        instellingen als preferred supplier. We kennen de regionale
        arbeidsmarkt, de lokale aanbieders en de beschikbaarheid, waardoor we
        gericht en realistisch kunnen werven, in de regio én daarbuiten.
      </p>

      <figure className="my-8 rounded-xl overflow-hidden border border-border">
        <Image
          src="/images/hero-team.jpg"
          alt="ZorgpuntConnect werft en selecteert zorgprofessionals voor vaste functies"
          width={1200}
          height={675}
          className="w-full h-auto object-cover max-h-72"
        />
        <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/30">
          Werving & selectie: de juiste kandidaat voor een blijvende match.
        </figcaption>
      </figure>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Volgende stap
      </h2>
      <p>
        Wilt u een vaste functie invullen met de juiste zorgprofessional? Neem
        contact op met {brand.name}. Het eerste gesprek is gratis. Samen
        bespreken we het profiel en starten we een gerichte search.
      </p>
    </>
  )
}
