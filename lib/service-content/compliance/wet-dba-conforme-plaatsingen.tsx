import Link from "next/link"
import type { RichServicePage } from "@/lib/service-content/types"
import { brand } from "@/lib/brand"

export const wetDbaContent: RichServicePage = {
  slug: "wet-dba-conforme-plaatsingen",
  seo: {
    title:
      "Wet DBA-conforme plaatsingen | ZZP in de zorg via ZorgpuntConnect",
    description:
      "Wet DBA-conforme plaatsingen van zorgprofessionals. ZorgpuntConnect adviseert over contractvorm, tussenkomst en documentatie. DBA- en VBAR-proof werken in de zorg.",
    h1: "Wet DBA-conforme plaatsingen: zekerheid bij inzet van zelfstandigen",
    primaryKeyword: "Wet DBA-conforme plaatsingen",
    imageAlts: [
      "Opdrachtgever bespreekt DBA-conforme plaatsing met ZorgpuntConnect adviseur",
      "Contractvorm en documentatie voor ZZP-zorgprofessional in overleg",
      "ZorgpuntConnect begeleidt DBA-conforme samenwerking in de zorg",
    ],
  },
  relatedSlugs: [
    "tussenkomst-zzp-zorgprofessionals",
    "bemiddeling-zzp-zorgprofessionals",
    "sna-nen-4400-1-gecertificeerde-bemiddeling",
  ],
  faqs: [
    {
      question: "Wat is de Wet DBA?",
      answer:
        "De Wet Deregulering Beoordeling Arbeidsrelaties (Wet DBA) regelt wanneer een opdrachtnemer als zelfstandige mag werken en wanneer sprake is van een dienstbetrekking. Opdrachtgevers en ZZP'ers lopen risico bij schijnzelfstandigheid.",
    },
    {
      question: "Hoe helpt ZorgpuntConnect bij DBA-conforme plaatsingen?",
      answer:
        "Wij adviseren over passende contractvormen, bemiddeling, tussenkomst of detachering, en zorgen voor documentatie en processen die aansluiten op geldende regels en best practices in de zorg.",
    },
    {
      question: "Is tussenkomst een alternatief voor directe ZZP-inzet?",
      answer:
        "Ja. Bij tussenkomst treedt ZorgpuntConnect op als intermediair. Dat biedt structuur rond contracten, planning en administratie, terwijl de professional zelfstandig blijft werken waar dat past.",
    },
    {
      question: "Wat is VBAR en hoe hangt dat samen met DBA?",
      answer:
        "VBAR (verklaring arbeidsrelatie) kan partijen zekerheid geven over de aard van de samenwerking. Wij werken DBA- en VBAR-proof waar van toepassing en bespreken dit in de raamovereenkomst.",
    },
    {
      question: "Welke documentatie is nodig voor DBA-conforme inzet?",
      answer:
        "Denk aan opdrachtbevestigingen, afspraken over zelfstandigheid, verzekeringen, VOG en waar relevant BIG-registratie. Via Mijn ZPC beheren en verifiëren wij documenten centraal.",
    },
    {
      question: "Geeft ZorgpuntConnect juridisch advies over DBA?",
      answer:
        "Wij begeleiden plaatsingen conform onze processen en sectorervaring. Voor specifieke juridische vragen verwijzen we waar nodig naar uw eigen adviseur, maar wij denken wel actief mee over passende vormen.",
    },
    {
      question: "Werkt DBA-compliance samen met SNA-certificering?",
      answer:
        "Ja. Onze SNA NEN 4400-1 certificering ondersteunt betrouwbare bedrijfsvoering rond bemiddeling en inlenen. Dat versterkt vertrouwen in processen die ook DBA-risico's helpen beperken.",
    },
    {
      question: "Hoe start ik met een DBA-conforme plaatsing?",
      answer:
        "Neem contact op voor een kennismaking. We inventariseren uw vraag, bespreken contractvorm en leggen afspraken vast in een raamovereenkomst voordat professionals worden ingezet.",
    },
  ],
  renderArticle: () => <WetDbaArticle />,
}

function WetDbaArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        <strong>Wet DBA-conforme plaatsingen</strong> zijn essentieel voor
        opdrachtgevers die zelfstandige zorgprofessionals willen inzetten zonder
        onnodig risico op schijnzelfstandigheid. De Wet DBA stelt eisen aan de
        arbeidsrelatie tussen opdrachtgever en ZZP&apos;er. {brand.name} begeleidt
        plaatsingen met oog voor contractvorm, documentatie en praktische
        werkwijze, als onderdeel van onze full service aanpak in de zorg.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Zoekintentie: waarom opdrachtgevers hier op zoeken
      </h2>
      <p>
        HR, inkoop en bestuur willen weten of ZZP-inzet veilig kan, welke
        contractvorm past en hoe ze risico&apos;s kunnen beperken. Ze zoeken een
        partner die niet alleen professionals levert, maar ook proces en
        documentatie op orde heeft. Deze pagina legt uit hoe {brand.name} dat
        organiseert, en hoe dat samenhangt met{" "}
        <Link
          href="/diensten/bemiddeling-zzp-zorgprofessionals"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          bemiddeling
        </Link>
        ,{" "}
        <Link
          href="/diensten/tussenkomst-zzp-zorgprofessionals"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          tussenkomst
        </Link>{" "}
        en{" "}
        detachering
        .
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wat houdt de Wet DBA in voor de zorg?
      </h2>
      <p>
        De Wet DBA bepaalt wanneer een opdrachtnemer als echte zelfstandige
        werkt en wanneer de Belastingdienst een dienstbetrekking kan aannemen.
        Voor opdrachtgevers betekent dat: letten op gezag, inbedding in het
        team, vervanging, gebruik van eigen middelen en de totale context van de
        opdracht. In de zorg, waar protocollen, roosters en teamverantwoordelijkheid
        centraal staan, vraagt dat extra aandacht.
      </p>
      <p>
        {brand.name} werkt DBA- en VBAR-proof waar van toepassing. Dat betekent
        niet dat elke situatie hetzelfde is, maar wel dat we bewust kiezen voor
        passende vormen en afspraken die op papier én in de praktijk kloppen.
      </p>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        Risico&apos;s bij schijnzelfstandigheid
      </h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Naheffingen loonheffingen en premies</li>
        <li>Discussie met de Belastingdienst over de aard van de relatie</li>
        <li>Reputatieschade bij audits of interne controles</li>
        <li>Onzekerheid voor zowel opdrachtgever als professional</li>
      </ul>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Vergelijking: bemiddeling, tussenkomst en detachering
      </h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Vorm
              </th>
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Rol ZorgpuntConnect
              </th>
              <th className="text-left py-2 font-semibold text-foreground">
                DBA-overweging
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">ZZP-bemiddeling</td>
              <td className="py-3 pr-4">Bemiddelaar tussen partijen</td>
              <td className="py-3">Duidelijke opdracht, zelfstandigheid borgen</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Tussenkomst</td>
              <td className="py-3 pr-4">Intermediair met administratief kader</td>
              <td className="py-3">Extra structuur rond contract en proces</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Detachering</td>
              <td className="py-3 pr-4">Werkgever of bemiddelingskader</td>
              <td className="py-3">Geen ZZP-relatie, andere juridische basis</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Onderaanneming</td>
              <td className="py-3 pr-4">Uitvoerende partij</td>
              <td className="py-3">Afspraken op project- of teamniveau</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Hoe ZorgpuntConnect DBA-conform werkt
      </h2>
      <p>
        Onze aanpak combineert advies, documentatie en operationele borging:
      </p>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Kennismaking en inventarisatie van uw personeelsvraag</li>
        <li>Keuze voor passende samenwerkingsvorm</li>
        <li>Raamovereenkomst met heldere afspraken</li>
        <li>Documentcontrole via Mijn ZPC vóór inzet</li>
        <li>Geautomatiseerde opdrachtovereenkomsten na goedkeuring</li>
        <li>Periodieke herbeoordeling bij wijzigingen in opdracht of wetgeving</li>
      </ol>
      <p>
        Centraal documentbeheer en strikte verificatie zijn geen luxe, maar
        voorwaarde. Enkel professionals met geldige documentatie gaan aan het
        werk. Zie ook onze pagina over{" "}
        documentbeheer en verificatie{" "}
        en{" "}
        kwaliteitscontrole
        .
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Certificering en betrouwbare processen
      </h2>
      <p>
        {brand.name} is SNA NEN 4400-1 gecertificeerd voor bemiddeling en
        detacheren. Die norm helpt opdrachtgevers vertrouwen te houden in
        financiële integriteit, procesbeheersing en naleving rond inlenen. Dat
        versterkt een DBA-bewuste aanpak. Meer hierover op onze pagina over{" "}
        SNA-gecertificeerde bemiddeling
        .
      </p>
      <p>
        Met meer dan 45 raamovereenkomsten en circa 1.500 aangesloten
        professionals verwerken wij jaarlijks grote volumes plaatsingen. Die
        schaal vraagt om consistente processen, niet om casuïstiek per
        opdrachtgever.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Administratie en facturatie
      </h2>
      <p>
        DBA-conform werken hangt ook samen met transparante administratie.
        Goedgekeurde uren, fee of factor en facturatiemomenten worden vastgelegd
        in Mijn ZPC. Via{" "}
        geautomatiseerde facturatie{" "}
        blijft de financiële keten aantoonbaar en voorspelbaar.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Checklist: DBA-bewust inzetten
      </h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Beoordeel of ZZP-inzet past bij de aard van de opdracht</li>
        <li>Kies bewust tussen bemiddeling, tussenkomst of detachering</li>
        <li>Leg afspraken schriftelijk vast in een raamovereenkomst</li>
        <li>Controleer documentatie vóór start</li>
        <li>Voorkom structurele inbedding die zelfstandigheid ondermijnt</li>
        <li>Evalueer periodiek bij wijzigingen in opdracht of team</li>
      </ol>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Laten we het testen
      </h2>
      <p>
        Onzekerheid over DBA hoeft geen reden te zijn om niets te doen. Vraag een
        gratis gesprek aan en bespreek welke vorm van samenwerking past bij uw
        organisatie. Lieke en het team denken mee over contractvorm, documentatie
        en een praktische route naar veilige plaatsingen in de zorg.
      </p>
    </>
  )
}
