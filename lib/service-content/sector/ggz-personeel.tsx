import Link from "next/link"
import Image from "next/image"
import type { RichServicePage } from "@/lib/service-content/types"
import { brand } from "@/lib/brand"

export const ggzPersoneelContent: RichServicePage = {
  slug: "ggz-personeel",
  seo: {
    title:
      "GGZ personeel inhuren via ZorgpuntConnect | Bemiddeling geestelijke gezondheidszorg",
    description:
      "GGZ personeel nodig? ZorgpuntConnect bemiddelt verpleegkundigen, begeleiders en therapeuten voor ambulante en klinische GGZ in Nederland. Snel, gescreend en persoonlijk.",
    h1: "GGZ personeel: betrouwbare bemiddeling voor de geestelijke gezondheidszorg",
    primaryKeyword: "GGZ personeel",
    imageAlts: [
      "GGZ-team in overleg op een zorgafdeling in Nederland",
      "Verpleegkundige in gesprek met cliënt in ambulante geestelijke gezondheidszorg",
      "ZorgpuntConnect adviseur bespreekt GGZ-personeelsvraag met zorgorganisatie",
    ],
  },
  relatedSlugs: [
    "vvt-personeel",
    "jeugdzorg-personeel",
    "bemiddeling-zzp-zorgprofessionals",
    "detachering-zorgpersoneel",
    "kwaliteitscontrole-screening-zorgprofessionals",
  ],
  faqs: [
    {
      question: "Welke functies vallen onder GGZ personeel?",
      answer:
        "Denk aan GGZ-verpleegkundigen, verzorgenden met GGZ-ervaring, begeleiders, sociotherapeuten, psychiatrisch verpleegkundigen en ondersteunend personeel voor ambulante teams, FACT, crisisdiensten of klinische afdelingen. Wij stemmen de functie af op uw setting en populatie.",
    },
    {
      question: "Hoe snel kan ZorgpuntConnect GGZ personeel leveren?",
      answer:
        "Dat hangt af van specialisme, regio en beschikbaarheid. Bij acute tekorten schakelen we snel en denken we mee over vervanging of tijdelijke inzet. Na uw aanvraag neemt Lieke doorgaans binnen 24 uur contact op om verwachtingen en planning te bespreken.",
    },
    {
      question: "Werken jullie met ZZP'ers of detachering in de GGZ?",
      answer:
        "Beide. Via bemiddeling van ZZP-zorgprofessionals, tussenkomst, detachering of werving en selectie kunnen we een passende vorm vinden. Welke optie het beste past, bespreken we op basis van uw organisatie, duur van de opdracht en wettelijke kaders.",
    },
    {
      question: "Hoe controleren jullie diploma's en registraties?",
      answer:
        "Vóór inzet controleren we onder meer diploma's, BIG-registratie waar van toepassing, VOG en relevante certificaten. Ons documentbeheer en screeningsproces is ingericht om opdrachtgevers zekerheid te geven over vakbekwaamheid en actuele documentatie.",
    },
    {
      question: "Is GGZ personeel ook beschikbaar voor ambulante teams?",
      answer:
        "Ja. Wij bemiddelen voor ambulante GGZ, FACT-teams, poliklinieken, crisisdiensten en klinische settingen. We letten expliciet op ervaring met de juiste doelgroep en samenwerkingsvorm, zodat iemand niet alleen op papier past maar ook op de werkvloer.",
    },
    {
      question: "Wat kost het inhuren van GGZ personeel via ZorgpuntConnect?",
      answer:
        "Tarief en vergoeding hangen af van functie, inzetvorm en duur. Het eerste adviesgesprek is gratis en vrijblijvend. Daarin bespreken we uw vraag en geven we helderheid over de vervolgstappen en kostenstructuur.",
    },
    {
      question: "Kunnen jullie ook helpen bij piekdrukte of ziekteverzuim?",
      answer:
        "Zeker. Veel opdrachtgevers zoeken ons op voor tijdelijke versterking bij verzuim, vakanties of onverwachte uitval. Dan is snelheid en een goede match minstens zo belangrijk als prijs.",
    },
    {
      question: "Waar is ZorgpuntConnect actief voor GGZ-personeel?",
      answer:
        "Wij werken met opdrachtgevers in heel Nederland. Vanuit onze basis in Limburg (Roermond/Venray) kennen we de regionale arbeidsmarkt goed, maar ons netwerk reikt verder dan één provincie.",
    },
  ],
  renderArticle: () => <GgzPersoneelArticle />,
}

function GgzPersoneelArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        Zoekt u <strong>GGZ personeel</strong> dat past bij uw team, uw cliënten en
        de druk op de werkvloer? Dan bent u niet de enige. Instellingen in de
        geestelijke gezondheidszorg kampen met krappe arbeidsmarkten, wisselende
        instroom en de behoefte aan professionals die de-escalerend kunnen werken
        én goed samenwerken in multidisciplinaire teams. {brand.name} helpt u met
        gescreende zorgprofessionals voor ambulante én klinische GGZ, met persoonlijk
        contact en korte lijnen.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Waarom deze pagina? Zoekintentie en wat u hier vindt
      </h2>
      <p>
        Mensen die zoeken op &quot;GGZ personeel&quot; willen meestal weten welke
        opties er zijn, hoe snel inzet mogelijk is en of een bemiddelaar echt
        verstand heeft van de sector. Deze pagina is daarom opgezet als praktische
        gids: wat GGZ-personeelsbemiddeling inhoudt, welke functies we kunnen
        invullen, hoe {brand.name} werkt en waar u op moet letten als
        opdrachtgever. Geen vage beloftes, wel concrete stappen.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wat verstaan we onder GGZ personeel?
      </h2>
      <p>
        In de geestelijke gezondheidszorg gaat het om meer dan alleen
        &quot;handen aan het bed&quot;. GGZ-professionals werken met complexe
        problematiek, herstelgerichte zorg, crisisinterventies en langdurige
        begeleiding. Afhankelijk van uw organisatie kan dat betekenen:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>GGZ-verpleegkundigen en psychiatrisch verpleegkundigen</li>
        <li>Begeleiders en sociotherapeuten op afdelingen of in de wijk</li>
        <li>Verzorgenden met ervaring in psychogeriatrie of GGZ-settingen</li>
        <li>Ondersteunend personeel voor teams met hoge regiedruk</li>
      </ul>
      <p>
        Het verschil met algemene zorgbemiddeling zit in de context: protocollen,
        veiligheid, samenwerking met behandelaren en de manier waarop families en
        ketenpartners betrokken zijn. Daarom screenen we niet alleen op diploma,
        maar ook op setting en werkervaring.
      </p>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        Ambulant versus klinisch: andere eisen, andere match
      </h3>
      <p>
        In ambulante GGZ draait veel om zelfstandig werken, regie en reizen tussen
        cliënten. In klinische settingen tellen teamafstemming, structuur en
        ervaring met agressie- of crisispreventie zwaarder. Wij vragen daarom altijd
        naar uw populatie, het zorgconcept en de verwachtingen richting de
        professional voordat we kandidaten voorstellen.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Hoe {brand.name} GGZ-personeel bemiddelt
      </h2>
      <p>
        Onze aanpak begint met luisteren. U beschrijft de functie, het rooster, de
        regio en eventuele must-haves (bijvoorbeeld ervaring met forensische GGZ of
        FACT). Vervolgens zoeken we in ons netwerk naar passende
        zorgprofessionals. Afhankelijk van uw voorkeur kan dat via{" "}
        <Link
          href="/diensten/bemiddeling-zzp-zorgprofessionals"
          className="text-primary hover:underline"
        >
          bemiddeling van ZZP&apos;ers
        </Link>
        ,{" "}
        <Link
          href="/diensten/detachering-zorgpersoneel"
          className="text-primary hover:underline"
        >
          detachering
        </Link>{" "}
        of{" "}
        <Link
          href="/diensten/werving-en-selectie"
          className="text-primary hover:underline"
        >
          werving en selectie
        </Link>
        .
      </p>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        Stappen in het traject
      </h3>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Gratis intake: uw vraag, planning en randvoorwaarden</li>
        <li>Screening op diploma&apos;s, registraties en relevante ervaring</li>
        <li>Voorstel van kandidaat(en) met toelichting waarom de match past</li>
        <li>Afstemming met uw teamleider of HR</li>
        <li>Start op de werkvloer, met nazorg waar nodig</li>
      </ol>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Vergelijking: wanneer welke inzetvorm?
      </h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Situatie
              </th>
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Vaak passende oplossing
              </th>
              <th className="text-left py-2 font-semibold text-foreground">
                Voordeel
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Korte vervanging bij ziekte</td>
              <td className="py-3 pr-4">ZZP-bemiddeling of detachering</td>
              <td className="py-3">Snelle inzet, flexibel einde</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Langere opdracht op afdeling</td>
              <td className="py-3 pr-4">Detachering</td>
              <td className="py-3">Continuïteit en planningzekerheid</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Vaste functie invullen</td>
              <td className="py-3 pr-4">Werving en selectie</td>
              <td className="py-3">Structurele versterking van het team</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Piek in crisisdienst of weekenddienst</td>
              <td className="py-3 pr-4">Flexibele ZZP-pool</td>
              <td className="py-3">Opschalen zonder langdurig contract</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Kwaliteit en veiligheid: waar wij op letten
      </h2>
      <p>
        GGZ-werk vraagt om betrouwbare professionals. Via onze{" "}
        <Link
          href="/diensten/kwaliteitscontrole-screening-zorgprofessionals"
          className="text-primary hover:underline"
        >
          kwaliteitscontrole en screening
        </Link>{" "}
        controleren we documentatie en achtergrond vóór inzet. Denk aan BIG waar
        vereist, VOG, diploma&apos;s en waar relevant certificaten zoals
        agressiehantering of medicatie. Als opdrachtgever hoeft u niet zelf het
        hele dossier na te jagen; wij bewaken actualiteit.
      </p>
      <p>
        Daarnaast werken wij conform afspraken rond privacy en, waar van
        toepassing,{" "}
        <Link
          href="/diensten/wet-dba-conforme-plaatsingen"
          className="text-primary hover:underline"
        >
          Wet DBA-conforme plaatsingen
        </Link>
        . Dat geeft rust aan HR, teamleiders én de ingezette professional.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        De GGZ-arbeidsmarkt in Nederland: wat opdrachtgevers merken
      </h2>
      <p>
        De vraag naar GGZ-capaciteit blijft hoog. Wachtlijsten, personeelstekorten
        en uitstroom naar andere sectoren zorgen ervoor dat instellingen creatief
        moeten zijn met werving én flexibele inzet. In regio&apos;s met
        universitaire klinieken en grote ambulante aanbieders is concurrentie om
        hetzelfde personeel scherp; in dunner bevolkte gebieden speelt reistijd en
        beschikbaarheid per dagdeel een grote rol.
      </p>
      <p>
        {brand.name} kent die dynamiek vanuit dagelijkse praktijk. We zijn
        gevestigd in Limburg (Roermond) en werken met opdrachtgevers door heel
        Nederland. Dat betekent: we kijken verder dan alleen de postcode, maar
        wel realistisch naar reistijd en werk-privébalans van kandidaten.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Praktische tips voor opdrachtgevers
      </h2>
      <p>
        Wilt u sneller de juiste match? Deze checklist helpt bij een goede intake:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Beschrijf de populatie concreet (leeftijd, diagnosegroep, risiconiveau)</li>
        <li>Geef aan of het om dag-, avond- of weekenddiensten gaat</li>
        <li>Benoem must-haves versus nice-to-haves bij ervaring</li>
        <li>Deel wie de inwerking en supervisie verzorgt</li>
        <li>Wees helder over duur: vervanging, project of structureel</li>
        <li>Plan ruimte voor korte kennismaking vóór de eerste dienst</li>
      </ul>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Gerelateerde diensten in andere zorgsectoren
      </h2>
      <p>
        GGZ raakt vaak andere domeinen. Heeft u ook behoefte aan capaciteit in
        jeugdzorg of ouderenzorg? Bekijk dan onze pagina&apos;s over{" "}
        <Link
          href="/diensten/jeugdzorg-personeel"
          className="text-primary hover:underline"
        >
          jeugdzorg personeel
        </Link>{" "}
        en{" "}
        <Link
          href="/diensten/vvt-personeel"
          className="text-primary hover:underline"
        >
          VVT personeel
        </Link>
        . Zo bouwt u een consistent personeelsbeleid over sectoren heen, met één
        aanspreekpunt voor bemiddeling.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Gratis adviesgesprek
      </h2>
      <p>
        Twijfelt u of bemiddeling past bij uw GGZ-vraag? Neem contact op met{" "}
        {brand.name}. Lieke denkt mee over uw situatie en legt uit welke stappen
        logisch zijn, zonder verplichting.
      </p>

      <figure className="my-8 rounded-xl overflow-hidden border border-border">
        <Image
          src="/images/hero-team.jpg"
          alt="GGZ-zorgteam in overleg over personeelsplanning en cliëntenzorg in Nederland"
          width={1200}
          height={675}
          className="w-full h-auto object-cover max-h-72"
        />
        <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/30">
          De juiste match begint met begrip van uw team en uw cliëntenpopulatie.
        </figcaption>
      </figure>
    </>
  )
}
