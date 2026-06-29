import Link from "next/link"
import type { RichServicePage } from "@/lib/service-content/types"
import { brand } from "@/lib/brand"

export const sociaalWerkContent: RichServicePage = {
  slug: "sociaal-werk",
  seo: {
    title:
      "Sociaal werk personeel inhuren | Maatschappelijk werkers via ZorgpuntConnect",
    description:
      "Sociaal werk personeel nodig? ZorgpuntConnect bemiddelt maatschappelijk werkers en sociaal werkers voor zorgorganisaties en gemeenten in Nederland.",
    h1: "Sociaal werk: maatschappelijke ondersteuning in zorg en welzijn",
    primaryKeyword: "sociaal werk personeel",
    imageAlts: [
      "Maatschappelijk werker in gesprek met cliënt over participatie en ondersteuning",
      "Sociaal werk team bespreekt casus in multidisciplinair zorgoverleg",
      "ZorgpuntConnect bemiddelt sociaal werk professionals in Nederland",
    ],
  },
  relatedSlugs: [
    "jeugdzorg-personeel",
    "ghz-personeel",
    "vvt-personeel",
  ],
  faqs: [
    {
      question: "Wat is het verschil tussen maatschappelijk werk en sociaal werk?",
      answer:
        "In de praktijk worden de termen vaak door elkaar gebruikt. Beide richten zich op ondersteuning bij participatie, regie en verbinding met voorzieningen. Wij stemmen af op de functie-eisen van uw organisatie.",
    },
    {
      question: "Voor welke opdrachtgevers leveren jullie sociaal werk personeel?",
      answer:
        "Gemeenten, zorginstellingen, ziekenhuizen, revalidatiecentra en welzijnsorganisaties. We matchen op setting en doelgroep.",
    },
    {
      question: "Kunnen jullie tijdelijke vervanging regelen?",
      answer:
        "Ja. Bij verlof, ziekte of piek in caseload bemiddelen we tijdelijke inzet via ZZP of detachering, afhankelijk van uw wensen.",
    },
    {
      question: "Hoe belangrijk is ervaring met het sociaal domein?",
      answer:
        "Voor gemeentelijke opdrachtgevers vaak cruciaal: kennis van Wmo, participatiewet, schuldhulp en samenwerking met zorg. We vragen naar uw specifieke eisen.",
    },
    {
      question: "Werken jullie met ZZP'ers in sociaal werk?",
      answer:
        "Ja. Veel professionals werken zelfstandig; wij bemiddelen en ondersteunen met documentatie en contracten waar nodig.",
    },
    {
      question: "Hoe verloopt screening?",
      answer:
        "Zoals bij andere zorgprofessionals: VOG, diploma's, registraties waar van toepassing en referenties. Zie onze pagina kwaliteitscontrole.",
    },
    {
      question: "Kunnen jullie ook werven voor vaste functies?",
      answer:
        "Ja, via werving en selectie. Geschikt wanneer u structureel capaciteit wilt opbouwen in plaats van flexibele inzet.",
    },
    {
      question: "Hoe vraag ik sociaal werk personeel aan?",
      answer:
        "Via het contactformulier of een gratis gesprek. We bespreken functie, regio en startdatum.",
    },
  ],
  renderArticle: () => <SociaalWerkArticle />,
}

function SociaalWerkArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        <strong>Sociaal werk personeel</strong> verbindt mensen met zorg,
        welzijn en participatie. Of het nu gaat om een gemeentelijk team,
        ziekenhuismaatschappelijk werk of ondersteuning in de gehandicaptenzorg:
        de juiste professional maakt het verschil tussen papieren regie en
        echte hulp. {brand.name} bemiddelt maatschappelijk werkers en sociaal
        werkers die passen bij uw organisatie en doelgroep.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Zoekintentie: wat deze pagina u biedt
      </h2>
      <p>
        U zoekt waarschijnlijk naar betrouwbare sociaal werk-professionals,
        helderheid over inzetvormen en een partner die de sector kent. Deze
        pagina legt uit wat sociaal werk-bemiddeling bij {brand.name} inhoudt,
        voor wie het werkt en hoe u een goede match krijgt.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wat doet sociaal werk in de praktijk?
      </h2>
      <p>
        Sociaal werkers ondersteunen cliënten bij regie op hun leven:
        financiën, huisvesting, relaties, werk en toegang tot zorg. In
        multidisciplinaire teams werken ze samen met verpleegkundigen,
        behandelaars en begeleiders. Voorbeelden van inzet:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Maatschappelijk werk in ziekenhuizen of revalidatie</li>
        <li>Sociaal werk in gemeentelijke teams (Wmo, jeugd, schuldhulp)</li>
        <li>Ondersteuning in GHZ- of VVT-settingen bij complexe casuïstiek</li>
        <li>Tijdelijke versterking bij piek in aanmeldingen</li>
      </ul>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        Regie en netwerken: waarom ervaring telt
      </h3>
      <p>
        Een goede sociaal werker kent niet alleen wetgeving, maar ook de
        praktijk van verwijzingen, wachtlijsten en lokale aanbieders. Bij
        matching letten we op die praktijkervaring, niet alleen op het diploma.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Hoe {brand.name} sociaal werk bemiddelt
      </h2>
      <p>
        U beschrijft functie, regio, uren en samenwerkingspartners. Wij zoeken
        kandidaten via{" "}
        <Link
          href="/diensten/bemiddeling-zzp-zorgprofessionals"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          ZZP-bemiddeling
        </Link>
        ,{" "}
        <Link
          href="/diensten/detachering-zorgpersoneel"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          detachering
        </Link>{" "}
        of{" "}
        werving en selectie
        . Documentatie en screening zijn ingebed in ons standaardproces.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Vergelijking inzetvormen
      </h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Behoefte
              </th>
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Vaak gekozen vorm
              </th>
              <th className="text-left py-2 font-semibold text-foreground">
                Geschikt wanneer
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Vaste gemeentelijke functie</td>
              <td className="py-3 pr-4">Werving en selectie</td>
              <td className="py-3">Lange termijn, teamuitbreiding</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Verlof of zwangerschapsvervanging</td>
              <td className="py-3 pr-4">ZZP of detachering</td>
              <td className="py-3">Duidelijke einddatum</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Piek in complexe casuïstiek</td>
              <td className="py-3 pr-4">Flexibele inzet</td>
              <td className="py-3">Korte tot middellange periode</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Project (bijv. schuldhulp)</td>
              <td className="py-3 pr-4">Projectmatige detachering</td>
              <td className="py-3">Afbakening vooraf</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Kwaliteit en samenhang met andere sectoren
      </h2>
      <p>
        Sociaal werk raakt vaak{" "}
        jeugdzorg
        ,{" "}
        gehandicaptenzorg{" "}
        en{" "}
        thuiszorg
        . Eén bemiddelaar voor meerdere sectoren vereenvoudigt uw
        personeelsbeleid en zorgt voor consistente screening.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        De arbeidsmarkt voor sociaal werk in Nederland
      </h2>
      <p>
        Gemeenten en zorginstellingen concurreren om dezelfde professionals.
        Hoge caseloads en administratieve druk maken het vak uitdagend.
        Flexibele inzet helpt om pieken op te vangen. {brand.name} werkt met
        opdrachtgevers in heel Nederland en zoekt realistische matches op
        regio en specialisatie.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Praktische tips
      </h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Beschrijf de doelgroep en gemiddelde caseload</li>
        <li>Geef aan welke samenwerkingspartners cruciaal zijn</li>
        <li>Wees helder over rijgebied of regio voor ambulant werk</li>
        <li>Deel of BIG of specifieke registratie vereist is</li>
        <li>Plan een kennismaking met het team vóór start</li>
      </ol>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Volgende stap met Lieke
      </h2>
      <p>
        Heeft u sociaal werk personeel nodig? Vraag een gratis en vrijblijvend
        gesprek aan. We bespreken uw vraag en geven eerlijk advies over timing,
        beschikbaarheid en de beste inzetvorm.
      </p>
    </>
  )
}
