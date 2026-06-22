import Link from "next/link"
import type { RichServicePage } from "@/lib/service-content/types"
import { brand } from "@/lib/brand"

export const zorgbeveiligingContent: RichServicePage = {
  slug: "zorgbeveiliging",
  seo: {
    title:
      "Zorgbeveiliging personeel | Veiligheid in zorginstellingen via ZorgpuntConnect",
    description:
      "Zorgbeveiliging nodig in uw instelling? ZorgpuntConnect bemiddelt personeel met ervaring in de-escalatie en veiligheid in GGZ en zorgomgevingen.",
    h1: "Zorgbeveiliging: veiligheid met respect in zorginstellingen",
    primaryKeyword: "zorgbeveiliging",
    imageAlts: [
      "Beveiliger en zorgmedewerker overleggen over veiligheidsprotocol in zorginstelling",
      "De-escalatie in GGZ-setting met aandacht voor cliënt en medewerker",
      "ZorgpuntConnect adviseert over zorgbeveiliging en personeelsinzet",
    ],
  },
  relatedSlugs: [
    "ggz-personeel",
    "kwaliteitscontrole-screening-zorgprofessionals",
    "bemiddeling-zzp-zorgprofessionals",
    "klachtenafhandeling-klachtenportaal-zorg",
    "detachering-zorgpersoneel",
  ],
  faqs: [
    {
      question: "Wat is zorgbeveiliging precies?",
      answer:
        "Zorgbeveiliging gaat om het waarborgen van veiligheid voor cliënten, medewerkers en bezoekers in zorginstellingen, vaak in combinatie met de-escalatie, toezicht en naleving van protocollen. Het is geen generieke portierfunctie, maar werk binnen een zorgcontext.",
    },
    {
      question: "In welke settingen zetten jullie zorgbeveiliging in?",
      answer:
        "Veelal GGZ, crisisdiensten, gesloten afdelingen, maar ook andere zorginstellingen waar agressie-incidenten of veiligheidsrisico's spelen. We stemmen af op uw beleid en samenwerking met zorgteams.",
    },
    {
      question: "Hoe verschilt zorgbeveiliging van reguliere beveiliging?",
      answer:
        "In zorg draait het om de-escalatie, relationele vaardigheden en kennis van protocollen rondom dwang en privacy. Professionals moeten kunnen samenwerken met verpleging en behandelaars, niet alleen toezicht houden.",
    },
    {
      question: "Kunnen jullie snel personeel leveren bij incidenten of piekdrukte?",
      answer:
        "Bij acute behoefte schakelen we zo snel mogelijk. Beschikbaarheid hangt af van regio en profiel. Een vroege intake vergroot de kans op een goede match.",
    },
    {
      question: "Welke screening doorloopt zorgbeveiligingspersoneel?",
      answer:
        "Net als andere zorgprofessionals: identiteit, VOG, relevante ervaring en waar nodig certificaten. We sluiten aan op ons algemene kwaliteits- en screeningsproces.",
    },
    {
      question: "Werken jullie met vaste teams of flexibele inzet?",
      answer:
        "Beide. Sommige instellingen willen structurele bezetting; anderen tijdelijke versterking bij evenementen, verbouwingen of personeelstekort. We bespreken wat past bij uw situatie.",
    },
    {
      question: "Hoe sluit zorgbeveiliging aan op klachten en incidenten?",
      answer:
        "Heldere protocollen en rapportage zijn essentieel. Wij werken conform kwaliteitsafspraken en kunnen opdrachtgevers verwijzen naar onze aanpak rond klachtenafhandeling via het Klachtenportaal Zorg waar relevant.",
    },
    {
      question: "Hoe vraag ik zorgbeveiliging aan?",
      answer:
        "Neem contact op via het formulier of vraag een gratis gesprek. We bespreken uw locatie, uren, risico's en samenwerking met uw zorgteam.",
    },
  ],
  renderArticle: () => <ZorgbeveiligingArticle />,
}

function ZorgbeveiligingArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        <strong>Zorgbeveiliging</strong> is geen luxe, maar onderdeel van
        veilige zorg. In GGZ-instellingen, crisisdiensten en andere zorgomgevingen
        moet veiligheid samengaan met waardigheid en de-escalatie.{" "}
        {brand.name} bemiddelt personeel dat gewend is om in zorgcontext te
        werken, niet alleen &quot;te bewaken&quot;, maar mee te denken met teams
        over rust en voorspelbaarheid.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Zoekintentie: wat u zoekt als u zorgbeveiliging intext
      </h2>
      <p>
        Opdrachtgevers zoeken vaak naar partijen die snel kunnen leveren, de
        sector begrijpen en geen cowboy-mentaliteit meebrengen. Deze pagina
        legt uit wat zorgbeveiliging via {brand.name} inhoudt, wanneer het
        past, hoe we screenen en hoe u samenwerking met uw zorgteam organiseert.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wat houdt zorgbeveiliging in de praktijk in?
      </h2>
      <p>
        Zorgbeveiliging kan variëren van toezicht bij binnenkomst en
        routes op de afdeling tot ondersteuning bij agressie-incidenten,
        samenwerking met crisisdiensten of extra capaciteit bij
        speciale situaties. Gemeenschappelijk is dat de professional:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Protocollen van de instelling kent en volgt</li>
        <li>De-escalerend communiceert met cliënten en familie</li>
        <li>Samenwerkt met verpleging, behandelaars en leiding</li>
        <li>Incidenten helder rapporteert voor verbetering</li>
      </ul>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        GGZ en crisis: waar veiligheid extra zwaar weegt
      </h3>
      <p>
        In de geestelijke gezondheidszorg kunnen situaties snel omslaan.
        Zorgbeveiliging moet dan geen tegenpool van zorg zijn, maar een
        verlengstuk van het team. Daarom zoeken we mensen met ervaring in
        zorgomgevingen, vaak naast onze{" "}
        <Link
          href="/diensten/ggz-personeel"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          GGZ-personeelsbemiddeling
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Hoe {brand.name} zorgbeveiliging bemiddelt
      </h2>
      <p>
        We starten met uw risicobeeld: welke afdeling, welke uren, welke
        incidentgeschiedenis, welke protocollen. Vervolgens zoeken we
        professionals via{" "}
        <Link
          href="/diensten/bemiddeling-zzp-zorgprofessionals"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          bemiddeling
        </Link>{" "}
        of{" "}
        <Link
          href="/diensten/detachering-zorgpersoneel"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          detachering
        </Link>
        . Screening loopt via hetzelfde kwaliteitskader als andere
        zorgprofessionals.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wanneer welke inzet?
      </h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Situatie
              </th>
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Aanbevolen aanpak
              </th>
              <th className="text-left py-2 font-semibold text-foreground">
                Let op
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Structureel toezicht op afdeling</td>
              <td className="py-3 pr-4">Vaste bezetting of detachering</td>
              <td className="py-3">Inwerking in teamcultuur</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Tijdelijk na incidenten</td>
              <td className="py-3 pr-4">Flexibele ZZP-inzet</td>
              <td className="py-3">Duidelijke einddatum en evaluatie</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Evenement of verbouwing</td>
              <td className="py-3 pr-4">Korte opdracht</td>
              <td className="py-3">Afstemming met bezoekersstromen</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Nacht- of weekenddiensten</td>
              <td className="py-3 pr-4">Rooster met vaste pool</td>
              <td className="py-3">Beschikbaarheid vooraf plannen</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Kwaliteit, klachten en verantwoording
      </h2>
      <p>
        Veiligheid en kwaliteit horen bij elkaar. Onze{" "}
        <Link
          href="/diensten/kwaliteitscontrole-screening-zorgprofessionals"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          screening
        </Link>{" "}
        en afspraken rond{" "}
        <Link
          href="/diensten/klachtenafhandeling-klachtenportaal-zorg"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          klachtenafhandeling
        </Link>{" "}
        helpen opdrachtgevers verantwoording af te leggen richting toezicht en
        interne kwaliteitscommissies.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        De Nederlandse context
      </h2>
      <p>
        Instellingen krijgen steeds meer aandacht voor geweld-vrije zorg,
        persoonsgerichte beveiliging en preventie. Externe inzet moet daarbij
        aansluiten, niet tegenwerken. {brand.name} werkt met opdrachtgevers
        door heel Nederland en kent de spanning tussen veiligheidseisen en
        herstelgerichte GGZ.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Checklist voor opdrachtgevers
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Deel uw veiligheids- en de-escalatiebeleid vóór start</li>
        <li>Wijs een vast aanspreekpunt in het zorgteam aan</li>
        <li>Leg uit wanneer beveiliging escaleert naar behandeling</li>
        <li>Plan een korte evaluatie na de eerste week</li>
        <li>Documenteer incidenten conform intern protocol</li>
      </ul>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Volgende stap
      </h2>
      <p>
        Zoekt u zorgbeveiliging die past bij uw instelling? Vraag een gratis
        gesprek aan. We bespreken eerlijk wat mogelijk is en welke professional
        past bij uw team en cliënten.
      </p>
    </>
  )
}
