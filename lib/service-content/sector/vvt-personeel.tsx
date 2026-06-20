import Link from "next/link"
import Image from "next/image"
import type { RichServicePage } from "@/lib/service-content/types"
import { brand } from "@/lib/brand"

export const vvtPersoneelContent: RichServicePage = {
  slug: "vvt-personeel",
  seo: {
    title:
      "VVT personeel inhuren | Verpleeg- en verzorgende thuiszorg via ZorgpuntConnect",
    description:
      "VVT personeel nodig voor thuiszorg of ouderenzorg? ZorgpuntConnect bemiddelt verpleegkundigen en verzorgenden IG in heel Nederland. Persoonlijk en snel.",
    h1: "VVT personeel: versterking voor thuiszorg en ouderenzorg",
    primaryKeyword: "VVT personeel",
    imageAlts: [
      "Verzorgende IG bezoekt cliënt aan huis voor thuiszorg in Nederland",
      "Wijkteam thuiszorg bespreekt planning en personeelsbezetting",
      "ZorgpuntConnect ondersteunt thuiszorgorganisatie bij personeelsbemiddeling",
    ],
  },
  relatedSlugs: [
    "ggz-personeel",
    "ghz-personeel",
    "bemiddeling-zzp-zorgprofessionals",
    "roosterplanning-personeelsbezetting",
    "documentbeheer-verificatie-zorgprofessionals",
  ],
  faqs: [
    {
      question: "Wat is VVT personeel precies?",
      answer:
        "VVT staat voor verpleeg- en verzorgende thuiszorg. Het gaat om professionals die zorg leveren bij mensen thuis: verpleegkundigen, verzorgenden IG en soms ondersteunend personeel in wijkteams of bij thuiszorgorganisaties.",
    },
    {
      question: "Kunnen jullie verzorgenden IG en verpleegkundigen leveren?",
      answer:
        "Ja. Wij bemiddelen beide groepen, afhankelijk van uw vraag. We stemmen diploma, ervaring met de doelgroep en regio af zodat de professional past bij uw cliëntenbestand.",
    },
    {
      question: "Hoe werkt bemiddeling voor wijkteams?",
      answer:
        "U geeft aan welk wijkteam of welke regio versterking nodig heeft, welke uren en welk type zorg. Wij zoeken kandidaten die zelfstandig kunnen werken in de wijk én goed samenwerken met collega's, huisartsen en mantelzorgers.",
    },
    {
      question: "Is VVT personeel ook beschikbaar als ZZP'er?",
      answer:
        "Ja, via onze ZZP-bemiddeling en tussenkomst kunnen zelfstandige professionals worden ingezet. Ook detachering is mogelijk bij langere opdrachten. We adviseren welke vorm past bij uw planning en contracten.",
    },
    {
      question: "Hoe zit het met KIWA-keurmerk en thuiszorgregistraties?",
      answer:
        "Voor thuiszorg gelden specifieke eisen. Wij vragen waar nodig om relevante registraties en documenten, zoals het KIWA-keurmerk voor individuele contractering in de thuiszorg, en controleren het dossier vóór inzet.",
    },
    {
      question: "Kunnen jullie helpen bij personeelstekort in de avond of het weekend?",
      answer:
        "Dat hangt van beschikbaarheid af, maar juist voor lastige diensten zoeken veel opdrachtgevers ons op. Hoe eerder u uw vraag doorgeeft, hoe groter de kans dat we een passende match vinden.",
    },
    {
      question: "Werken jullie met Mijn ZPC voor uren en planning?",
      answer:
        "Ja. Via Mijn ZPC kunnen opdrachtgevers en professionals uren registreren en communiceren. Dat ondersteunt onze diensten rond roosterplanning en facturatie.",
    },
    {
      question: "Wat is het eerste stap als ik VVT personeel zoek?",
      answer:
        "Vul het contactformulier in of vraag een gratis gesprek aan. Lieke neemt contact op om uw situatie te bespreken en een realistisch plan te maken voor invulling.",
    },
  ],
  renderArticle: () => <VvtPersoneelArticle />,
}

function VvtPersoneelArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        <strong>VVT personeel</strong> is voor veel thuiszorgorganisaties en
        wijkteams de spil van de dagelijkse zorg. Cliënten willen zorg thuis,
        teams lopen vol en verzuim of onverwachte uitval kan het rooster
        direct onder druk zetten. {brand.name} bemiddelt verpleegkundigen en
        verzorgenden IG die passen bij verpleeg- en verzorgende thuiszorg, met
        aandacht voor regio, zelfstandigheid en samenwerking in de keten.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Zoekintentie: wat u wilt weten vóór u inhuurt
      </h2>
      <p>
        Wie zoekt op &quot;VVT personeel&quot; wil meestal snel helderheid: wie
        kan ik inzetten, hoe snel, en kan de bemiddelaar thuiszorg? Op deze
        pagina leggen we uit wat VVT-bemiddeling inhoudt, welke professionals we
        leveren, hoe het traject bij {brand.name} werkt en waar u op moet letten
        als opdrachtgever in de thuiszorg of ouderenzorg.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wat valt onder verpleeg- en verzorgende thuiszorg?
      </h2>
      <p>
        VVT omvat zorg die bij mensen thuis wordt geleverd: persoonlijke
        verzorging, verpleegtechnische handelingen, begeleiding en
        coördinatie met huisarts en familie. Typische rollen die wij bemiddelen:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Verzorgenden IG (individueel gezondheidszorg)</li>
        <li>Wijkverpleegkundigen en generalistisch verpleegkundigen</li>
        <li>Ondersteunend personeel in wijkteams</li>
        <li>Tijdelijke vervanging bij ziekte of verlof</li>
      </ul>
      <p>
        Thuiszorg vraagt om professionals die routeplannen, tijd inschatten en
        zelfstandig beslissingen nemen aan de keukentafel, terwijl ze
        terugrapporteren aan het team. Die combinatie weegt zwaar in onze
        selectie.
      </p>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        Ouderenzorg en thuiszorg: dezelfde druk, andere accenten
      </h3>
      <p>
        Sommige teams richten zich op kwetsbare ouderen met complexe zorg;
        anderen op herstel na opname of chronische aandoeningen. Wij vragen naar
        uw populatie en zorgtypen (bijvoorbeeld palliatief, revalidatie,
        dementiezorg) zodat de match niet alleen op papier klopt.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Hoe {brand.name} VVT-personeel bemiddelt
      </h2>
      <p>
        Na uw aanvraag bespreken we planning, regio en contractvorm. Afhankelijk
        van uw behoefte schakelen we{" "}
        <Link
          href="/diensten/bemiddeling-zzp-zorgprofessionals"
          className="text-primary hover:underline"
        >
          ZZP-zorgprofessionals
        </Link>{" "}
        in, detacheren we voor langere periodes of denken we mee over structurele{" "}
        <Link
          href="/diensten/werving-en-selectie"
          className="text-primary hover:underline"
        >
          werving en selectie
        </Link>
        . Documentatie en screening lopen via ons vaste proces, zodat u niet
        per kandidaat opnieuw het wiel uitvindt.
      </p>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        Van intake tot eerste cliëntbezoek
      </h3>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Intake: team, regio, uren en type zorg</li>
        <li>Screening op diploma, VOG en thuiszorgervaring</li>
        <li>Voorstel kandidaat met toelichting</li>
        <li>Afstemming met teamleider of wijkverpleegkundige</li>
        <li>Inwerking en start in de wijk</li>
      </ol>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Overzicht: veelvoorkomende inzetvormen in VVT
      </h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Behoefte
              </th>
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Oplossing
              </th>
              <th className="text-left py-2 font-semibold text-foreground">
                Geschikt voor
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Ziekteverzuim in wijkteam</td>
              <td className="py-3 pr-4">Tijdelijke ZZP-inzet</td>
              <td className="py-3 pr-4">Korte tot middellange periodes</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Groei cliëntenbestand</td>
              <td className="py-3 pr-4">Detachering of meerdere ZZP&apos;ers</td>
              <td className="py-3 pr-4">Structurele versterking</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Vaste vacature wijkverpleegkundige</td>
              <td className="py-3 pr-4">Werving en selectie</td>
              <td className="py-3 pr-4">Lange termijn</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Rooster onder druk</td>
              <td className="py-3 pr-4">Flexpool via bemiddeling</td>
              <td className="py-3 pr-4">Avond, weekend, piekperiodes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Planning, uren en administratie
      </h2>
      <p>
        In thuiszorg is planning alles. Lege plekken in het rooster betekenen
        direct impact op cliënten. Daarom sluiten onze diensten aan op{" "}
        <Link
          href="/diensten/roosterplanning-personeelsbezetting"
          className="text-primary hover:underline"
        >
          roosterplanning en personeelsbezetting
        </Link>{" "}
        via Mijn ZPC. Urenregistratie en{" "}
        <Link
          href="/diensten/documentbeheer-verificatie-zorgprofessionals"
          className="text-primary hover:underline"
        >
          documentbeheer
        </Link>{" "}
        horen bij hetzelfde plaatje: minder zoekwerk, meer overzicht.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        De thuiszorgmarkt in Nederland
      </h2>
      <p>
        De vraag naar thuiszorg blijft stijgen terwijl het aanbod van
        professionals onder druk staat. Wijkteams moeten schipperen tussen
        kwaliteit, reistijd en kosten. In stedelijke regio&apos;s is concurrentie
        om hetzelfde personeel groot; in landelijke gebieden is reistijd een
        rem op beschikbaarheid. {brand.name} werkt landelijk, met sterke banden
        in Limburg en omliggende regio&apos;s, en zoekt realistische matches op
        afstand en beschikbaarheid.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Checklist voor opdrachtgevers in VVT
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Geef het wijkgebied en reistijdverwachting aan</li>
        <li>Benoem welke zorgtypen (Wlz, Zvw, particulier) voorkomen</li>
        <li>Wees helder over avond-, weekend- of nachtdiensten</li>
        <li>Deel wie de caseload overneemt en inwerkt</li>
        <li>Vraag tijdig bij piekperiodes (vakanties, griepgolf)</li>
        <li>Check of KIWA of andere sectorregistraties nodig zijn</li>
      </ul>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Gerelateerde sectoren
      </h2>
      <p>
        Thuiszorg raakt andere domeinen. Bekijk ook{" "}
        <Link
          href="/diensten/ggz-personeel"
          className="text-primary hover:underline"
        >
          GGZ personeel
        </Link>{" "}
        voor psychogeriatrie of{" "}
        <Link
          href="/diensten/ghz-personeel"
          className="text-primary hover:underline"
        >
          GHZ personeel
        </Link>{" "}
        wanneer cliënten met een handicap thuis worden begeleid. Eén
        aanspreekpunt voor meerdere sectoren scheelt tijd in HR en planning.
      </p>

      <figure className="my-8 rounded-xl overflow-hidden border border-border">
        <Image
          src="/images/hero-team.jpg"
          alt="Zorgteam in overleg over thuiszorg en personeelsplanning in Nederland"
          width={1200}
          height={675}
          className="w-full h-auto object-cover max-h-72"
        />
        <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/30">
          Goede bemiddeling begint met begrip van uw team en cliënten in de wijk.
        </figcaption>
      </figure>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Volgende stap
      </h2>
      <p>
        Heeft u VVT personeel nodig? Vraag een gratis gesprek aan. Lieke bespreekt
        uw situatie en geeft eerlijk aan wat haalbaar is qua timing, regio en
        type professional. Geen verplichtingen, wel duidelijkheid.
      </p>
    </>
  )
}
