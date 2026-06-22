import Link from "next/link"
import Image from "next/image"
import type { RichServicePage } from "@/lib/service-content/types"
import { brand } from "@/lib/brand"

export const tussenkomstZzpContent: RichServicePage = {
  slug: "tussenkomst-zzp-zorgprofessionals",
  seo: {
    title:
      "Tussenkomst ZZP-zorgprofessionals | Tussenkomstmodel zorg via ZorgpuntConnect",
    description:
      "Tussenkomst van ZZP-zorgprofessionals via ZorgpuntConnect. Wij treden op als betrouwbare contractuele schakel tussen opdrachtgever en zelfstandige: contracten, planning en facturatie geregeld. SNA-gecertificeerd in Limburg en Noord-Brabant.",
    h1: "Tussenkomst ZZP-zorgprofessionals: zekerheid via één betrouwbare schakel",
    primaryKeyword: "tussenkomst ZZP-zorgprofessionals",
    imageAlts: [
      "ZorgpuntConnect verzorgt tussenkomst tussen opdrachtgever en ZZP-zorgprofessional",
      "Mijn ZPC portaal toont contracten en facturatie bij tussenkomst van zelfstandigen",
      "Zelfstandige zorgprofessional werkt via het tussenkomstmodel in Limburg",
    ],
  },
  relatedSlugs: [
    "bemiddeling-zzp-zorgprofessionals",
    "detachering-zorgpersoneel",
    "wet-dba-conforme-plaatsingen",
    "sna-nen-4400-1-gecertificeerde-bemiddeling",
    "geautomatiseerde-facturatie-selfbilling",
  ],
  faqs: [
    {
      question: "Wat is tussenkomst van ZZP-zorgprofessionals?",
      answer:
        "Bij tussenkomst treedt ZorgpuntConnect op als contractuele schakel tussen uw organisatie en de zelfstandige zorgprofessional. Wij sluiten de overeenkomsten, coördineren planning en verzorgen de facturatie. De ZZP'er blijft zelfstandig ondernemer; u werkt met één betrouwbare partner.",
    },
    {
      question: "Wat is het verschil tussen bemiddeling en tussenkomst?",
      answer:
        "Bij bemiddeling brengen wij u in contact met een zelfstandige en sluit u zelf de overeenkomst. Bij tussenkomst neemt ZorgpuntConnect de contractuele en administratieve rol over: de professional contracteert met ons, en wij met u. Dat geeft extra zekerheid en ontzorging.",
    },
    {
      question: "Is het tussenkomstmodel Wet DBA-conform?",
      answer:
        "Wij richten tussenkomst in volgens de Wet DBA en letten op een correcte arbeidsrelatie. Heldere opdrachtovereenkomsten, vastgelegde afspraken en transparante facturatie beperken het risico op schijnzelfstandigheid voor beide partijen.",
    },
    {
      question: "Voor wie is tussenkomst geschikt?",
      answer:
        "Voor opdrachtgevers die de flexibiliteit van ZZP-inzet willen combineren met een gestructureerd contractueel en administratief kader. Het is ideaal als u meerdere zelfstandigen inzet en de administratie en het risicobeheer wilt uitbesteden.",
    },
    {
      question: "Hoe verloopt de facturatie bij tussenkomst?",
      answer:
        "Op basis van goedgekeurde uren verzorgt ZorgpuntConnect de facturatie via geautomatiseerde facturatie en selfbilling in Mijn ZPC. U ontvangt één heldere factuur en de zorgprofessional wordt correct betaald, zonder discussie achteraf.",
    },
    {
      question: "Welke zekerheid biedt tussenkomst mij als opdrachtgever?",
      answer:
        "U werkt met een SNA NEN 4400-1 gecertificeerde partner. Dat beperkt risico's rond inlenersaansprakelijkheid en geeft zekerheid over financiële integriteit, contracten en naleving van wet- en regelgeving.",
    },
    {
      question: "In welke regio's verzorgen jullie tussenkomst?",
      answer:
        "ZorgpuntConnect is gevestigd in Roermond en als top 3 speler actief in Limburg en Noord-Brabant, met raamovereenkomsten bij meer dan 45 zorginstellingen. Ook daarbuiten werken we met opdrachtgevers en zelfstandige zorgprofessionals.",
    },
    {
      question: "Hoe start ik met tussenkomst via ZorgpuntConnect?",
      answer:
        "Na een vrijblijvende kennismaking leggen we in een raamovereenkomst fee, factor en facturatie vast. U krijgt toegang tot het ZPC Online portaal en wij regelen de contracten en planning. Het eerste gesprek is gratis.",
    },
  ],
  renderArticle: () => <TussenkomstArticle />,
}

function TussenkomstArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        <strong>Tussenkomst van ZZP-zorgprofessionals</strong> combineert de
        flexibiliteit van zelfstandige inzet met de zekerheid van één
        professionele partner. Bij het tussenkomstmodel treedt {brand.name} op
        als contractuele schakel tussen uw organisatie en de zorgprofessional:
        wij regelen de overeenkomsten, de planning en de facturatie, terwijl de
        ZZP&apos;er zelfstandig blijft werken.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Waarom deze pagina? Zoekintentie en wat u hier vindt
      </h2>
      <p>
        Opdrachtgevers zoeken op termen als &quot;tussenkomstmodel zorg&quot;,
        &quot;ZZP via tussenkomst&quot; of &quot;intermediair zelfstandige
        zorg&quot; omdat ze de voordelen van ZZP-inzet willen, maar zonder de
        administratieve last en het risico zelf te dragen. Deze pagina legt uit
        hoe tussenkomst bij {brand.name} werkt, wat het verschil is met
        bemiddeling en welke zekerheden u krijgt.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wat tussenkomst precies betekent
      </h2>
      <p>
        Bij tussenkomst zit {brand.name} contractueel tussen u en de
        zelfstandige. De zorgprofessional sluit een opdrachtovereenkomst met ons,
        en wij met u. Daardoor heeft u te maken met één partij voor contracten,
        planning, uren en facturatie. In de praktijk betekent dit:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Eén aanspreekpunt en één contract in plaats van losse afspraken</li>
        <li>Gecoördineerde planning en uitwisseling van beschikbaarheid</li>
        <li>Eén heldere factuur op basis van goedgekeurde uren</li>
        <li>Vastgelegde afspraken die de arbeidsrelatie duidelijk maken</li>
        <li>Minder administratieve druk op uw eigen organisatie</li>
      </ul>
      <p>
        {brand.name} is in 2022 opgericht door professionals uit de sector zelf
        en groeide uit tot een vaste waarde in Limburg en Noord-Brabant.
        Kwaliteit, een persoonlijke aanpak en warme contacten staan daarbij
        centraal.
      </p>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        Bemiddeling versus tussenkomst
      </h3>
      <p>
        Het verschil zit in de rol die {brand.name} op zich neemt. Bij{" "}
        <Link
          href="/diensten/bemiddeling-zzp-zorgprofessionals"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          bemiddeling van ZZP&apos;ers
        </Link>{" "}
        brengen wij u in contact met een zelfstandige en maakt u zelf de
        afspraken. Bij tussenkomst nemen wij de contractuele en administratieve
        rol over. Zoekt u juist langere, structurele inzet met werkgeverskader,
        dan kan{" "}
        <Link
          href="/diensten/detachering-zorgpersoneel"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          detachering van zorgpersoneel
        </Link>{" "}
        een betere keuze zijn.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wet DBA en een veilige arbeidsrelatie
      </h2>
      <p>
        Het tussenkomstmodel is bij uitstek geschikt om inzet van zelfstandigen
        zorgvuldig en aantoonbaar in te richten. Wij werken volgens een{" "}
        <Link
          href="/diensten/wet-dba-conforme-plaatsingen"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          Wet DBA-conforme werkwijze
        </Link>{" "}
        met heldere opdrachtovereenkomsten en vastgelegde afspraken, zodat het
        risico op schijnzelfstandigheid voor beide partijen beperkt blijft.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Gecertificeerde zekerheid: SNA NEN 4400-1
      </h2>
      <p>
        Als opdrachtgever wilt u zeker weten dat afdrachten en contracten op orde
        zijn. Onze{" "}
        <Link
          href="/diensten/sna-nen-4400-1-gecertificeerde-bemiddeling"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          SNA NEN 4400-1 gecertificeerde werkwijze
        </Link>{" "}
        beperkt risico&apos;s rond inlenersaansprakelijkheid en geeft zekerheid
        over financiële integriteit en naleving van wet- en regelgeving. Bij
        tussenkomst is dat extra waardevol, omdat wij de contractuele schakel
        vormen.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Contracten, uren en facturatie in één lijn
      </h2>
      <p>
        Tussenkomst betekent dat administratie geen los proces meer is. Geplande
        en gerealiseerde uren vormen de basis voor{" "}
        <Link
          href="/diensten/geautomatiseerde-facturatie-selfbilling"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          geautomatiseerde facturatie en selfbilling
        </Link>
        . U ontvangt één overzichtelijke factuur, de zorgprofessional wordt
        correct betaald en alle partijen houden inzicht via het portaal.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wanneer kiest u voor tussenkomst? Overzicht
      </h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Situatie
              </th>
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Rol van ZPC
              </th>
              <th className="text-left py-2 font-semibold text-foreground">
                Voordeel
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Meerdere ZZP&apos;ers tegelijk inzetten</td>
              <td className="py-3 pr-4">Eén contract en facturatie</td>
              <td className="py-3">Minder administratie</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Onzekerheid over arbeidsrelatie</td>
              <td className="py-3 pr-4">DBA-conforme overeenkomsten</td>
              <td className="py-3">Minder risico</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Behoefte aan financiële zekerheid</td>
              <td className="py-3 pr-4">SNA-gecertificeerde schakel</td>
              <td className="py-3">Geen inlenersaansprakelijkheid-zorgen</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Flexibele, doorlopende inzet</td>
              <td className="py-3 pr-4">Coördinatie van planning en uren</td>
              <td className="py-3">Continuïteit zonder rompslomp</td>
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
        ervaring om tussenkomst soepel en betrouwbaar in te richten, in de regio
        én daarbuiten.
      </p>

      <figure className="my-8 rounded-xl overflow-hidden border border-border">
        <Image
          src="/images/app-preview.jpg"
          alt="Mijn ZPC portaal toont contracten, planning en facturatie bij tussenkomst van ZZP-zorgprofessionals"
          width={1200}
          height={675}
          className="w-full h-auto object-cover max-h-72"
        />
        <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/30">
          Bij tussenkomst lopen contracten, planning en facturatie samen in één
          portaal.
        </figcaption>
      </figure>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Volgende stap
      </h2>
      <p>
        Wilt u zelfstandige zorgprofessionals inzetten met de zekerheid van één
        betrouwbare schakel? Neem contact op met {brand.name}. Het eerste gesprek
        is gratis. Samen bekijken we of het tussenkomstmodel past bij uw
        organisatie en hoe we de contracten en planning inrichten.
      </p>
    </>
  )
}
