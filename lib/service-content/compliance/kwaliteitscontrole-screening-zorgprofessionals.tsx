import Link from "next/link"
import Image from "next/image"
import type { RichServicePage } from "@/lib/service-content/types"
import { brand } from "@/lib/brand"

export const kwaliteitscontroleContent: RichServicePage = {
  slug: "kwaliteitscontrole-screening-zorgprofessionals",
  seo: {
    title:
      "Kwaliteitscontrole en screening zorgprofessionals | ZorgpuntConnect",
    description:
      "Kwaliteitscontrole en screening van zorgprofessionals door ZorgpuntConnect. VOG, BIG, diploma's en referenties vóór inzet. Enkel geverifieerde professionals aan het werk.",
    h1: "Kwaliteitscontrole en screening: veiligheid en vakbekwaamheid vóór de eerste dienst",
    primaryKeyword: "kwaliteitscontrole screening zorgprofessionals",
    imageAlts: [
      "ZorgpuntConnect screenet zorgprofessionals op diploma en VOG",
      "Kwaliteitscontrole dossier van zorgprofessional in Mijn ZPC",
      "Opdrachtgever ontvangt alleen gescreende zorgprofessionals via ZorgpuntConnect",
    ],
  },
  relatedSlugs: [
    "documentbeheer-verificatie-zorgprofessionals",
    "sna-nen-4400-1-gecertificeerde-bemiddeling",
    "bemiddeling-zzp-zorgprofessionals",
  ],
  faqs: [
    {
      question: "Wat houdt screening bij ZorgpuntConnect in?",
      answer:
        "Wij screenen zorgprofessionals op identiteit, diploma's, BIG-registratie waar van toepassing, VOG, verzekeringen, referenties en relevante certificaten. Pas na goedkeuring worden kandidaten voorgesteld of ingepland.",
    },
    {
      question: "Wanneer vindt kwaliteitscontrole plaats?",
      answer:
        "Vóór de eerste inzet en periodiek daarna. Bij verlopen documenten of gewijzigde functie-eisen wordt het dossier opnieuw beoordeeld. Enkel professionals met geldige documentatie gaan aan het werk.",
    },
    {
      question: "Hoe verschilt screening van documentbeheer?",
      answer:
        "Screening beoordeelt geschiktheid, ervaring en referenties. Documentbeheer bewaakt volledigheid en actualiteit van het dossier in Mijn ZPC. Beide diensten versterken elkaar in ons kwaliteitssysteem.",
    },
    {
      question: "Welke certificaten worden gecontroleerd?",
      answer:
        "Afhankelijk van de functie en sector, bijvoorbeeld BHV, medicatie, agressiehantering of KIWA thuiszorg. Voor jeugdzorg en kwetsbare doelgroepen gelden extra zorgvuldigheidseisen.",
    },
    {
      question: "Krijg ik als opdrachtgever inzicht in het dossier?",
      answer:
        "Ja. Via het ZPC Online portaal ziet u relevante kwalificaties en status van documentatie, conform afspraken in de raamovereenkomst en privacywetgeving.",
    },
    {
      question: "Hoe hangt screening samen met SNA-certificering?",
      answer:
        "SNA NEN 4400-1 vraagt om beheerste processen rond inlenen en bemiddelen. Ons screenings- en documentatieproces sluit daarop aan en wordt extern gecontroleerd.",
    },
    {
      question: "Wat gebeurt bij een negatieve uitkomst?",
      answer:
        "Een professional wordt niet ingezet zolang het dossier incompleet is of de screening niet voldoet. We communiceren helder wat ontbreekt en wat nodig is voor herbeoordeling.",
    },
    {
      question: "Hoe start ik met gescreende professionals?",
      answer:
        "Neem contact op voor een kennismaking. Na raamovereenkomst matchen we op uw criteria en stellen we alleen kandidaten voor die aan de afgesproken screeningseisen voldoen.",
    },
  ],
  renderArticle: () => <KwaliteitscontroleArticle />,
}

function KwaliteitscontroleArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        <strong>Kwaliteitscontrole en screening</strong> zijn de basis van veilige
        zorgbemiddeling. Opdrachtgevers willen niet hopen dat een professional
        geschikt is, ze willen het kunnen aantonen. {brand.name} screenet
        zorgprofessionals vóór elke inzet en houdt dossiers actueel via Mijn ZPC.
        Onze kernbelofte: enkel professionals met geldige documentatie gaan aan
        het werk.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Zoekintentie: waarom opdrachtgevers hier op zoeken
      </h2>
      <p>
        HR, kwaliteitsmedewerkers en teamleiders willen weten hoe grondig een
        bemiddelaar screenet, welke documenten worden gecontroleerd en of het
        proces herhaalbaar is bij audits. Deze pagina legt uit hoe{" "}
        {brand.name} kwaliteit borgt, en hoe dat samenhangt met{" "}
        <Link
          href="/diensten/documentbeheer-verificatie-zorgprofessionals"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          documentbeheer
        </Link>
        ,{" "}
        <Link
          href="/diensten/sna-nen-4400-1-gecertificeerde-bemiddeling"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          SNA-certificering
        </Link>{" "}
        en{" "}
        bemiddeling
        .
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wat valt onder kwaliteitscontrole?
      </h2>
      <p>
        Kwaliteitscontrole gaat verder dan een snelle CV-check. Wij beoordelen of
        een professional vakbekwaam, betrouwbaar en passend is voor uw setting:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Identiteitscontrole en BSN-verificatie</li>
        <li>Diploma&apos;s en beroepsregistraties</li>
        <li>BIG-registratie waar van toepassing</li>
        <li>Verklaring Omtrent Gedrag (VOG)</li>
        <li>Beroepsaansprakelijkheidsverzekering</li>
        <li>Referenties en relevante werkervaring</li>
        <li>Sectorcertificaten en aanvullende eisen per doelgroep</li>
      </ul>
      <p>
        Screening is de eerste poort. Documentbeheer in Mijn ZPC zorgt dat
        dossiers actueel blijven na de start.
      </p>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        Stappen in ons screeningsproces
      </h3>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Inschrijving en intake van de zorgprofessional</li>
        <li>Verzamelen en uploaden van documenten in Mijn ZPC</li>
        <li>Verificatie op echtheid, geldigheid en volledigheid</li>
        <li>Beoordeling van ervaring, referenties en geschiktheid</li>
        <li>Match met opdrachtgever op basis van uw criteria</li>
        <li>Periodieke hercontrole bij verloop of functiewijziging</li>
      </ol>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Overzicht: screening per documenttype
      </h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Onderdeel
              </th>
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Wanneer
              </th>
              <th className="text-left py-2 font-semibold text-foreground">
                Gevolg bij afwijzing
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">VOG</td>
              <td className="py-3 pr-4">Vóór eerste inzet</td>
              <td className="py-3">Geen plaatsing</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">BIG-registratie</td>
              <td className="py-3 pr-4">Bij BIG-plichtige functies</td>
              <td className="py-3">Geen plaatsing</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Referenties</td>
              <td className="py-3 pr-4">Vóór voordracht</td>
              <td className="py-3">Herbeoordeling of afwijzing</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Sectorcertificaten</td>
              <td className="py-3 pr-4">Per opdracht-eis</td>
              <td className="py-3">Geen match</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Verzekering</td>
              <td className="py-3 pr-4">Jaarlijks of per polis</td>
              <td className="py-3">Blokkade bij verlopen dekking</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Sector-specifieke zorgvuldigheid
      </h2>
      <p>
        Niet elke opdracht vraagt hetzelfde. Bij{" "}
        jeugdzorg{" "}
        en kwetsbare doelgroepen hanteren we extra aandacht voor geschiktheid en
        ervaring. Bij{" "}
        GGZ-personeel{" "}
        wegen de-escalatievaardigheden en settingervaring zwaar mee. Screening
        is maatwerk binnen een vast kader, niet een generieke checklist.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Mijn ZPC en 100% documentcontrole
      </h2>
      <p>
        Kwaliteitscontrole en documentbeheer lopen samen in Mijn ZPC. Opdrachtgevers
        met portaaltoegang zien status en kwalificaties. Zie{" "}
        ZPC Online portaal{" "}
        voor de operationele kant. Met circa 1.500 aangesloten professionals en
        meer dan 45 raamovereenkomsten verwerken wij grote volumes, vooral in
        Limburg en Noord-Brabant. Consistente screening is dan geen luxe maar
        noodzaak.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Compliance en klachten
      </h2>
      <p>
        Goede screening voorkomt problemen, maar sluit ze niet uit. Daarom
        combineren wij kwaliteitscontrole met een transparante aanpak rond{" "}
        klachtenafhandeling{" "}
        via het Klachtenportaal Zorg. Ook{" "}
        DBA-conforme plaatsingen{" "}
        profiteren van aantoonbare processen en complete dossiers.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Checklist: kwaliteit borgen als opdrachtgever
      </h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Formuleer duidelijke functie- en certificaateisen</li>
        <li>Vraag naar het screeningsproces vóór contractering</li>
        <li>Controleer portaaltoegang voor HR of kwaliteit</li>
        <li>Stem af wanneer dossiers opnieuw worden beoordeeld</li>
        <li>Gebruik rapportages bij interne audits</li>
        <li>Escaleer zorgen via het formele klachtenproces</li>
      </ol>

      <figure className="my-8 rounded-xl overflow-hidden border border-border">
        <Image
          src="/images/hero-team.jpg"
          alt="ZorgpuntConnect team voert kwaliteitscontrole uit op zorgprofessionals"
          width={1200}
          height={675}
          className="w-full h-auto object-cover max-h-72"
        />
        <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/30">
          Screening en persoonlijk contact gaan bij ons samen.
        </figcaption>
      </figure>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Laten we het testen
      </h2>
      <p>
        Kwaliteit begint vóór de eerste dienst. Vraag een gratis gesprek aan en
        ontdek hoe {brand.name} screenet, verifieert en alleen geverifieerde
        professionals inzet. Lieke en het team bespreken uw eisen en leggen uit
        hoe snel we kunnen starten.
      </p>
    </>
  )
}
