import Link from "next/link"
import type { RichServicePage } from "@/lib/service-content/types"
import { brand } from "@/lib/brand"

export const ghzPersoneelContent: RichServicePage = {
  slug: "ghz-personeel",
  seo: {
    title:
      "GHZ personeel inhuren | Gehandicaptenzorg bemiddeling via ZorgpuntConnect",
    description:
      "GHZ personeel nodig? ZorgpuntConnect bemiddelt begeleiders en verzorgenden voor gehandicaptenzorg, beschermd wonen en dagbesteding in Nederland.",
    h1: "GHZ personeel: begeleiding en zorg in de gehandicaptenzorg",
    primaryKeyword: "GHZ personeel",
    imageAlts: [
      "Begeleider ondersteunt cliënt bij dagbesteding in de gehandicaptenzorg",
      "Zorgteam bespreekt begeleidingsplan in instelling voor mensen met een beperking",
      "ZorgpuntConnect matcht GHZ-professional met zorgorganisatie in Nederland",
    ],
  },
  relatedSlugs: [
    "vvt-personeel",
    "sociaal-werk",
    "bemiddeling-zzp-zorgprofessionals",
    "kwaliteitscontrole-screening-zorgprofessionals",
    "onderaanneming-zorgopdrachten",
  ],
  faqs: [
    {
      question: "Wat houdt GHZ personeel in?",
      answer:
        "GHZ staat voor gehandicaptenzorg. Wij bemiddelen begeleiders, verzorgenden en andere zorgprofessionals die werken met mensen met een lichamelijke, verstandelijke of meervoudige beperking, in instellingen, beschermd wonen of ambulante settingen.",
    },
    {
      question: "Voor welke settingen leveren jullie GHZ-personeel?",
      answer:
        "Denk aan beschermd wonen, dagbesteding, ambulante begeleiding, groepswonen en zorginstellingen binnen de Wlz. We stemmen de kandidaat af op uw zorgconcept en doelgroep.",
    },
    {
      question: "Hoe belangrijk is ervaring met gedragsondersteuning?",
      answer:
        "In veel GHZ-organisaties is dat essentieel. We vragen naar uw aanpak (bijvoorbeeld PBS, low-arousal) en zoeken professionals met passende ervaring en training, zoals certificaten op het gebied van agressiehantering waar nodig.",
    },
    {
      question: "Kunnen jullie snel vervangen bij uitval?",
      answer:
        "Bij acute uitval doen we ons best om snel een vervanger te vinden. Hoe specifieker uw intake, hoe beter we kunnen schakelen. Bij zeer niche-ervaring kan het langer duren; daar zijn we transparant over.",
    },
    {
      question: "Werken jullie met ZZP'ers in de gehandicaptenzorg?",
      answer:
        "Ja. Veel opdrachtgevers combineren vaste teams met flexibele ZZP-inzet. Wij adviseren over bemiddeling, tussenkomst of detachering, afhankelijk van duur en uw interne beleid.",
    },
    {
      question: "Controleren jullie VOG en diploma's?",
      answer:
        "Altijd vóór inzet. Ons screeningsproces omvat onder meer identiteit, VOG, diploma's en relevante certificaten. Zie ook onze pagina over kwaliteitscontrole en screening.",
    },
    {
      question: "Wat is het verschil met VVT of jeugdzorg?",
      answer:
        "GHZ richt zich op mensen met een handicap of beperking, vaak langdurig en met maatwerk in begeleiding. VVT gaat over thuiszorg; jeugdzorg over kinderen en jongeren. De benodigde attitude en vaardigheden verschillen; daarom hebben we aparte sectorpagina's.",
    },
    {
      question: "Hoe start ik een aanvraag voor GHZ personeel?",
      answer:
        "Neem contact op via het formulier op de homepage of vraag een gratis gesprek aan. We bespreken uw vacature of vervangingsvraag en geven een realistisch beeld van beschikbaarheid.",
    },
  ],
  renderArticle: () => <GhzPersoneelArticle />,
}

function GhzPersoneelArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        <strong>GHZ personeel</strong> zoeken is meer dan een vacature invullen.
        In de gehandicaptenzorg draait het om maatwerk, vertrouwen en
        professionals die rust uitstralen in soms intensieve situaties.{" "}
        {brand.name} bemiddelt begeleiders, verzorgenden en andere
        zorgprofessionals die passen bij uw doelgroep, of dat nu beschermd
        wonen, dagbesteding of ambulante begeleiding is.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Waarom deze gids over GHZ-personeelsbemiddeling?
      </h2>
      <p>
        Opdrachtgevers die zoeken op &quot;GHZ personeel&quot; willen weten wie
        betrouwbaar is, wie snel kan starten en of een bemiddelaar de sector
        begrijpt. Deze pagina geeft antwoord op die vragen: welke rollen we
        invullen, hoe we matchen, welke kwaliteitseisen we hanteren en hoe u
        als organisatie het traject versnelt.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Kernbegrippen in de gehandicaptenzorg
      </h2>
      <p>
        De gehandicaptenzorg is breed. Cliënten kunnen ondersteuning nodig
        hebben bij wonen, werken, sociale contacten en persoonlijke verzorging.
        Professionals moeten vaak samenwerken met ouders, bewindvoerders,
        gedragsdeskundigen en gemeenten. Typische functies die wij bemiddelen:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Begeleiders in groepswonen of beschermd wonen</li>
        <li>Verzorgenden met ervaring in de GHZ</li>
        <li>Ambulant begeleiders met eigen caseload</li>
        <li>Ondersteunend personeel bij dagbesteding</li>
      </ul>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        Zorgconcept en cultuur: de match gaat verder dan het CV
      </h3>
      <p>
        Twee organisaties met dezelfde functietitel kunnen totaal andere
        cultuur hebben. De ene werkt strak protocolgericht, de andere meer
        relationeel. Wij vragen naar uw pedagogische of begeleidingsvisie en
        zoeken iemand die daar natuurlijk in past, niet alleen iemand die
        &quot;ervaring heeft&quot; op papier.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Onze werkwijze bij GHZ-personeel
      </h2>
      <p>
        U beschrijft de opdracht: locatie, doelgroep, uren, duur en speciale
        eisen. Wij zoeken in ons netwerk en stellen kandidaten voor die voldoen
        aan screening. Afhankelijk van uw wensen kan dat via{" "}
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
        of bij structurele behoefte{" "}
        <Link
          href="/diensten/werving-en-selectie"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          werving en selectie
        </Link>
        . Bij grotere opdrachten kan ook{" "}
        <Link
          href="/diensten/onderaanneming-zorgopdrachten"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          onderaanneming
        </Link>{" "}
        een optie zijn.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Tabel: veelvoorkomende GHZ-vragen en oplossingen
      </h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Uitdaging
              </th>
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Aanpak {brand.name}
              </th>
              <th className="text-left py-2 font-semibold text-foreground">
                Resultaat
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Vacature lang open</td>
              <td className="py-3 pr-4">Gerichte werving in netwerk</td>
              <td className="py-3">Snellere invulling</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Ziekte in vast team</td>
              <td className="py-3 pr-4">Tijdelijke ZZP-vervanging</td>
              <td className="py-3">Continuïteit voor cliënten</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Nieuwe locatie opent</td>
              <td className="py-3 pr-4">Meerdere professionals tegelijk</td>
              <td className="py-3">Team op sterkte bij start</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Niche-ervaring nodig</td>
              <td className="py-3 pr-4">Screening op specifieke training</td>
              <td className="py-3">Betere match op de werkvloer</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Kwaliteit, veiligheid en documentatie
      </h2>
      <p>
        Cliënten in de GHZ zijn vaak kwetsbaar. Daarom is{" "}
        <Link
          href="/diensten/kwaliteitscontrole-screening-zorgprofessionals"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          kwaliteitscontrole en screening
        </Link>{" "}
        geen bijzaak. VOG, diploma&apos;s, referenties en waar nodig
        certificaten worden gecontroleerd vóór de eerste werkdag. Opdrachtgevers
        weten wie er voor de deur staat.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        De GHZ-arbeidsmarkt in Nederland
      </h2>
      <p>
        Instellingen in de gehandicaptenzorg zoeken vaak hetzelfde profiel:
        betrokken, stabiel en trainbaar. Concurrentie met jeugdzorg, GGZ en
        thuiszorg maakt werving lastig. Flexibele inzet via bemiddeling helpt
        om pieken op te vangen zonder direct vaste contracten af te sluiten.
        {brand.name} werkt met opdrachtgevers in heel Nederland, met praktische
        kennis van regionale arbeidsmarkten.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Tips voor een succesvolle match
      </h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Beschrijf de doelgroep en het gedragsniveau concreet</li>
        <li>Deel uw begeleidingsmethode en wat u van mensen verwacht</li>
        <li>Wees eerlijk over fysieke belasting en werkdruk</li>
        <li>Plan een kennismaking vóór de eerste dienst</li>
        <li>Geef feedback na de eerste week; dat helpt bij verlenging</li>
      </ol>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Verbinding met andere diensten
      </h2>
      <p>
        GHZ overlapt soms met{" "}
        <Link
          href="/diensten/sociaal-werk"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          sociaal werk
        </Link>{" "}
        of{" "}
        <Link
          href="/diensten/vvt-personeel"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          VVT
        </Link>{" "}
        bij cliënten die thuis wonen. Eén partner voor meerdere sectoren
        vereenvoudigt uw personeelsbeleid.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Gratis adviesgesprek
      </h2>
      <p>
        Twijfelt u of bemiddeling past bij uw GHZ-vraag? Neem contact op met{" "}
        {brand.name}. Lieke denkt mee over uw situatie en legt uit welke stappen
        logisch zijn, zonder verplichting.
      </p>
    </>
  )
}
