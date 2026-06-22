import Link from "next/link"
import Image from "next/image"
import type { RichServicePage } from "@/lib/service-content/types"
import { brand } from "@/lib/brand"

export const rapportageContent: RichServicePage = {
  slug: "rapportage-analyse-personeelsinzet",
  seo: {
    title:
      "Rapportage en analyse personeelsinzet | Inzicht via Mijn ZPC | ZorgpuntConnect",
    description:
      "Rapportage en analyse van personeelsinzet via Mijn ZPC. Inzicht in uren, bezetting en kosten voor zorgorganisaties. ZorgpuntConnect, actief in Limburg en Noord-Brabant.",
    h1: "Rapportage en analyse personeelsinzet: sturen op feiten, niet op gevoel",
    primaryKeyword: "rapportage analyse personeelsinzet",
    imageAlts: [
      "Management bekijkt rapportage over personeelsinzet in zorgorganisatie",
      "Overzicht van uren en bezetting in Mijn ZPC rapportagemodule",
      "ZorgpuntConnect levert analyse van personeelsinzet voor opdrachtgevers",
    ],
  },
  relatedSlugs: [
    "zpc-online-portaal-opdrachtgevers",
    "roosterplanning-personeelsbezetting",
    "geautomatiseerde-facturatie-selfbilling",
    "api-koppelingen-zorgsystemen",
    "onderaanneming-zorgopdrachten",
  ],
  faqs: [
    {
      question: "Welke rapportages biedt ZorgpuntConnect?",
      answer:
        "Via Mijn ZPC krijgt u inzicht in uren, bezetting, opdrachten en trends rond personeelsinzet. Rapportages kunnen periodiek of op verzoek worden opgesteld, afhankelijk van uw raamovereenkomst.",
    },
    {
      question: "Voor wie zijn rapportages bedoeld?",
      answer:
        "Voor planners, teamleiders, HR en management die willen sturen op capaciteit, kosten en kwaliteit. Ook nuttig bij evaluaties met onderaanneming of langdurige detachering.",
    },
    {
      question: "Waar komen de gegevens vandaan?",
      answer:
        "Rapportages baseren zich op werkelijke uren, goedgekeurde diensten en opdrachten in Mijn ZPC. Zo sluiten cijfers aan op facturatie en planning.",
    },
    {
      question: "Is rapportage AVG-conform?",
      answer:
        "Ja. We verwerken alleen wat nodig is voor de dienstverlening en delen persoonsgegevens conform afspraken en privacywetgeving. Aggregaten voor management zijn waar mogelijk geanonimiseerd.",
    },
    {
      question: "Kan ik rapportages exporteren of koppelen?",
      answer:
        "Waar mogelijk ondersteunen we export en API-koppelingen naar uw eigen BI- of financiële systemen, zodat u niet afhankelijk bent van alleen het portaal.",
    },
    {
      question: "Hoe helpt rapportage bij budgettering?",
      answer:
        "Door inzicht in uren per afdeling, periode of opdracht ziet u waar budget naartoe gaat en waar bijsturing nodig is. Dat ondersteunt gesprekken met finance en directie.",
    },
    {
      question: "Werkt analyse samen met roosterplanning?",
      answer:
        "Ja. Geplande versus gerealiseerde uren laten zien waar roosters goed lopen en waar structurele gaten of pieken zitten. Zo wordt planning datagedreven.",
    },
    {
      question: "Hoe vraag ik rapportages aan?",
      answer:
        "Na portaaltoegang kunt u standaardoverzichten gebruiken. Voor maatwerkrapportages neemt u contact op met uw vaste contactpersoon bij ZorgpuntConnect.",
    },
  ],
  renderArticle: () => <RapportageArticle />,
}

function RapportageArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        <strong>Rapportage en analyse van personeelsinzet</strong> maakt
        zichtbaar wat er echt gebeurt op de werkvloer: wie draait welke diensten,
        hoeveel uren worden gemaakt en waar capaciteit tekortschiet. {brand.name}{" "}
        verwerkt jaarlijks circa 500.000 uur voor meer dan 45
        raamovereenkomsten. Zonder heldere cijfers blijft personeelsbeleid
        giswerk. Mijn ZPC biedt opdrachtgevers overzicht en analyse als
        onderdeel van onze full service aanpak.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Zoekintentie: waarom managers hier op zoeken
      </h2>
      <p>
        Bestuurders, planners en financieel verantwoordelijken zoeken inzicht in
        flexibele inzet: uren, kosten, bezetting per afdeling en trends over
        tijd. Ze willen rapportages die aansluiten op contracten en audits, niet
        losse Excel-bestanden. Deze pagina legt uit hoe {brand.name} dat
        organiseert via het{" "}
        <Link
          href="/diensten/zpc-online-portaal-opdrachtgevers"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          ZPC Online portaal
        </Link>
        , en hoe dat samenhangt met{" "}
        <Link
          href="/diensten/roosterplanning-personeelsbezetting"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          roosterplanning
        </Link>{" "}
        en{" "}
        <Link
          href="/diensten/geautomatiseerde-facturatie-selfbilling"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          facturatie
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wat meet rapportage in de zorgbemiddeling?
      </h2>
      <p>
        Personeelsinzet via een bemiddelaar is dynamisch: ZZP&apos;ers,
        detachering en onderaanneming wisselen per periode. Goede rapportage
        beantwoordt vragen als:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Hoeveel uren zijn ingezet per afdeling, locatie of opdracht?</li>
        <li>Welke functies of specialismen komen het meest voor?</li>
        <li>Waar zijn structurele tekorten of pieken zichtbaar?</li>
        <li>Sluiten gerealiseerde uren aan op planning en budget?</li>
        <li>Hoe verhouden kosten zich tot afgesproken fee of factor?</li>
      </ul>
      <p>
        Omdat uren in Mijn ZPC ook de basis vormen voor facturatie, zijn
        rapportages niet los van de financiële keten. Dat verhoogt betrouwbaarheid
        ten opzichte van handmatige tellingen.
      </p>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        Van data naar beslissing
      </h3>
      <p>
        Rapportage is geen eindproduct op zich. Het ondersteunt gesprekken met
        teamleiders over roosters, met finance over budget en met {brand.name}{" "}
        over verlenging of opschaling. Bij{" "}
        <Link
          href="/diensten/onderaanneming-zorgopdrachten"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          onderaanneming
        </Link>{" "}
        en langdurige samenwerking zijn periodieke evaluaties standaard onderdeel
        van goed partnerschap.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Overzicht: rapportagetypen en gebruik
      </h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Rapportagetype
              </th>
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Typische gebruiker
              </th>
              <th className="text-left py-2 font-semibold text-foreground">
                Doel
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Uren per periode</td>
              <td className="py-3 pr-4">Planners, teamleiders</td>
              <td className="py-3">Controleren op bezetting en gaten</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Inzet per afdeling</td>
              <td className="py-3 pr-4">Management</td>
              <td className="py-3">Budget en capaciteitsplanning</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Trendanalyse</td>
              <td className="py-3 pr-4">HR, directie</td>
              <td className="py-3">Vroeg signaleren van tekorten</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Financiële samenvatting</td>
              <td className="py-3 pr-4">Finance</td>
              <td className="py-3">Afstemming met facturatie</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Maatwerk op verzoek</td>
              <td className="py-3 pr-4">Projectleiders</td>
              <td className="py-3">Evaluatie of auditvoorbereiding</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Mijn ZPC als bron van waarheid
      </h2>
      <p>
        In onze dienstverlening staat Mijn ZPC centraal voor roosterbeheer,
        documentbeheer, facturatie en rapportage. Opdrachtgevers met portaaltoegang
        zien niet alleen wie ingezet wordt, maar ook welke uren zijn
        geregistreerd en goedgekeurd. Dat sluit aan op onze werkwijze na
        raamovereenkomst: login, inzicht in documentatie, automatisering en
        waar nodig{" "}
        <Link
          href="/diensten/api-koppelingen-zorgsystemen"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          API-koppelingen
        </Link>{" "}
        naar eigen systemen.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Rapportage in verschillende samenwerkingsvormen
      </h2>
      <p>
        Of u nu werkt met{" "}
        <Link
          href="/diensten/bemiddeling-zzp-zorgprofessionals"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          ZZP-bemiddeling
        </Link>
        , detachering of complete teams: de behoefte aan inzicht blijft. Bij
        bemiddeling focust u op fee en uren per professional. Bij detachering
        op factor en basisverloning. Bij onderaanneming op teamresultaat en
        periodieke evaluatie. {brand.name} stemt rapportages af op de gekozen
        vorm.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Kwaliteit, certificering en vertrouwen
      </h2>
      <p>
        Betrouwbare cijfers ondersteunen ook compliance en audits.{" "}
        {brand.name} is SNA NEN 4400-1 gecertificeerd. Transparante rapportage
        versterkt vertrouwen in processen rond inlenersaansprakelijkheid en
        bedrijfsvoering. Zie ook onze pagina over{" "}
        <Link
          href="/diensten/sna-nen-4400-1-gecertificeerde-bemiddeling"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          SNA-gecertificeerde bemiddeling
        </Link>
        .
      </p>
      <p>
        Met circa 1.500 aangesloten zorgprofessionals en sterke posities in
        Limburg en Noord-Brabant verwerken we volumes waarbij analyse echt
        verschil maakt voor opdrachtgevers die preferred supplier willen zijn in
        hun eigen regio.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Checklist: rapportage effectief gebruiken
      </h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Bepaal welke KPI&apos;s uw organisatie wil volgen</li>
        <li>Koppel rapportage aan vaste evaluatiemomenten</li>
        <li>Vergelijk geplande en gerealiseerde uren structureel</li>
        <li>Betrek finance bij financiële samenvattingen</li>
        <li>Gebruik trends voor werving en langetermijnplanning</li>
        <li>Bespreek afwijkingen tijdig met uw contactpersoon bij ZPC</li>
      </ol>

      <figure className="my-8 rounded-xl overflow-hidden border border-border">
        <Image
          src="/images/app-preview.jpg"
          alt="Rapportage en analyse van personeelsinzet in Mijn ZPC portaal"
          width={1200}
          height={675}
          className="w-full h-auto object-cover max-h-72"
        />
        <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/30">
          Uren, bezetting en trends komen samen in Mijn ZPC.
        </figcaption>
      </figure>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Laten we het testen
      </h2>
      <p>
        Inzicht begint met goede data en een partner die processen op orde heeft.
        Vraag een gratis gesprek aan en ontdek welke rapportages en analyses
        {brand.name} voor uw organisatie kan leveren. Samen kijken we wat past
        bij uw planning, budget en manier van sturen.
      </p>
    </>
  )
}
