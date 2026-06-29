import Link from "next/link"
import type { RichServicePage } from "@/lib/service-content/types"
import { brand } from "@/lib/brand"

export const klachtenContent: RichServicePage = {
  slug: "klachtenafhandeling-klachtenportaal-zorg",
  seo: {
    title:
      "Klachtenafhandeling via Klachtenportaal Zorg | ZorgpuntConnect",
    description:
      "Klachtenafhandeling via het Klachtenportaal Zorg. ZorgpuntConnect werkt conform sectorafspraken voor transparante klachtenregistratie en -behandeling in de zorg.",
    h1: "Klachtenafhandeling via Klachtenportaal Zorg: transparant en zorgvuldig",
    primaryKeyword: "klachtenafhandeling Klachtenportaal Zorg",
    imageAlts: [
      "ZorgpuntConnect klachtenafhandeling conform Klachtenportaal Zorg",
      "Opdrachtgever en zorgprofessional bij transparant klachtenproces",
      "Kwaliteitsverbetering door zorgvuldige klachtenregistratie in de zorg",
    ],
  },
  relatedSlugs: [
    "kwaliteitscontrole-screening-zorgprofessionals",
    "sna-nen-4400-1-gecertificeerde-bemiddeling",
    "documentbeheer-verificatie-zorgprofessionals",
  ],
  faqs: [
    {
      question: "Wat is het Klachtenportaal Zorg?",
      answer:
        "Het Klachtenportaal Zorg is het officiële landelijke portaal waar consumenten en betrokkenen een klacht kunnen indienen over zorgaanbieders en aanverwante partijen. Het ondersteunt een eenduidige en transparante klachtenafhandeling in de zorg.",
    },
    {
      question: "Hoe sluit ZorgpuntConnect aan bij het Klachtenportaal Zorg?",
      answer:
        "Wij werken conform sectorafspraken voor klachtenregistratie en -behandeling. Professionals en opdrachtgevers weten waar ze terechtkunnen bij ontevredenheid. Meldingen worden zorgvuldig behandeld en waar nodig geregistreerd.",
    },
    {
      question: "Voor wie is deze dienst bedoeld?",
      answer:
        "Voor opdrachtgevers, zorgprofessionals en andere betrokkenen die waarde hechten aan een formeel en eerlijk klachtenproces. Ook relevant bij samenwerking met instellingen die eisen stellen aan kwaliteitsborging.",
    },
    {
      question: "Wat gebeurt er na een klacht?",
      answer:
        "We nemen meldingen serieus: registratie, onderzoek, terugkoppeling en waar nodig verbetermaatregelen. Het doel is niet alleen afhandeling, maar ook leren en het verbeteren van onze dienstverlening.",
    },
    {
      question: "Hoe hangt klachtenafhandeling samen met screening?",
      answer:
        "Sterke screening en documentcontrole voorkomen veel problemen, maar sluiten klachten niet uit. Een goed klachtenproces vult kwaliteitscontrole aan en geeft opdrachtgevers vertrouwen dat incidenten professioneel worden opgepakt.",
    },
    {
      question: "Is er aansluiting op de WKKGZ?",
      answer:
        "In de zorg gelden strenge eisen rond kwaliteit en klachtenafhandeling. Onze processen sluiten aan op geldende wet- en regelgeving en sectorafspraken, waaronder aandacht voor klachtenregeling conform de WKKGZ waar van toepassing.",
    },
    {
      question: "Kan ik als opdrachtgever een klacht melden?",
      answer:
        "Ja. Opdrachtgevers die met ons samenwerken kunnen zorgen of ontevredenheid melden via de afgesproken kanalen. We behandelen meldingen vertrouwelijk en volgens ons klachtenproces.",
    },
    {
      question: "Hoe draagt dit bij aan vertrouwen?",
      answer:
        "Transparante klachtenafhandeling laat zien dat ZorgpuntConnect verantwoording aflegt en verbetert. Dat versterkt vertrouwen bij opdrachtgevers, professionals en uiteindelijk cliënten in de zorgketen.",
    },
  ],
  renderArticle: () => <KlachtenArticle />,
}

function KlachtenArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        <strong>Klachtenafhandeling via het Klachtenportaal Zorg</strong> toont
        dat {brand.name} kwaliteit en verantwoording serieus neemt. Klachten
        horen niet onder het tapijt te verdwijnen. Ze verdienen registratie,
        onderzoek en een heldere terugkoppeling. Wij sluiten aan bij het
        Klachtenportaal Zorg en sectorafspraken, als onderdeel van onze bredere
        focus op veiligheid, screening en betrouwbare processen.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Zoekintentie: waarom deze pagina bestaat
      </h2>
      <p>
        Opdrachtgevers en professionals willen weten hoe een bemiddelaar omgaat
        met ontevredenheid, incidenten en formele klachten. Ze zoeken zekerheid
        dat er een transparant proces is, niet alleen een algemene belofte over
        kwaliteit. Deze pagina legt uit hoe {brand.name} klachten behandelt en
        hoe dat samenhangt met{" "}
        <Link
          href="/diensten/kwaliteitscontrole-screening-zorgprofessionals"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          kwaliteitscontrole
        </Link>
        ,{" "}
        <Link
          href="/diensten/sna-nen-4400-1-gecertificeerde-bemiddeling"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          SNA-certificering
        </Link>{" "}
        en{" "}
        documentbeheer
        .
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wat is het Klachtenportaal Zorg?
      </h2>
      <p>
        Het Klachtenportaal Zorg is het landelijke platform voor het indienen en
        volgen van klachten in de zorg. Het helpt consumenten en betrokkenen een
        centrale route te vinden wanneer zij ontevreden zijn over zorg of
        aanverwante dienstverlening. Voor organisaties in de zorgketen betekent
        aansluiting op dit stelsel: werken volgens herkenbare afspraken over
        registratie, behandeling en verantwoording.
      </p>
      <p>
        {brand.name} neemt klachten serieus omdat vertrouwen in de keten essentieel
        is. Wij bemiddelen tussen opdrachtgevers en circa 1.500
        zorgprofessionals. Dat brengt verantwoordelijkheid met zich mee: heldere
        communicatie, snelle opvolging en verbetering waar nodig.
      </p>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        Waarom formele klachtenafhandeling belangrijk is
      </h3>
      <ul className="list-disc pl-5 space-y-2">
        <li>Betrokkenen weten waar ze terechtkunnen</li>
        <li>Meldingen worden gedocumenteerd en opgevolgd</li>
        <li>Organisaties kunnen leren en processen verbeteren</li>
        <li>Vertrouwen in de bemiddelaar en de zorgketen groeit</li>
        <li>Aansluiting bij sectornormen en wetgeving</li>
      </ul>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Onze aanpak bij klachten
      </h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Ontvangst en registratie van de melding</li>
        <li>Beoordeling van urgentie en betrokken partijen</li>
        <li>Onderzoek en contact met opdrachtgever of professional</li>
        <li>Terugkoppeling aan indiener</li>
        <li>Eventuele verbetermaatregelen en opvolging</li>
        <li>Leren en borgen in processen en rapportage</li>
      </ol>
      <p>
        Dit sluit aan bij onze werkwijze als full service provider: niet alleen
        plaatsen, maar ook verantwoorden. Rapportage en analyse helpen trends te
        zien. Zie{" "}
        rapportage en analyse{" "}
        voor managementinzicht.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Overzicht: preventie vs. correctie
      </h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Maatregel
              </th>
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Doel
              </th>
              <th className="text-left py-2 font-semibold text-foreground">
                Voorbeeld bij ZPC
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Screening vóór inzet</td>
              <td className="py-3 pr-4">Risico verlagen</td>
              <td className="py-3">VOG, BIG, referenties</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Documentcontrole</td>
              <td className="py-3 pr-4">Aantoonbare kwaliteit</td>
              <td className="py-3">Mijn ZPC, 100% controle</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Klachtenregistratie</td>
              <td className="py-3 pr-4">Transparantie</td>
              <td className="py-3">Klachtenportaal Zorg</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Opvolging</td>
              <td className="py-3 pr-4">Verbetering</td>
              <td className="py-3">Procesaanpassing, training</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Rapportage</td>
              <td className="py-3 pr-4">Sturing</td>
              <td className="py-3">Trends en evaluaties</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Kwaliteit, veiligheid en speciale settings
      </h2>
      <p>
        In settings waar veiligheid extra aandacht vraagt, zoals{" "}
        zorgbeveiliging
        , GGZ of jeugdzorg, zijn heldere protocollen en klachtenroutes
        essentieel. {brand.name} werkt met opdrachtgevers die hoge eisen stellen
        aan kwaliteitsborging. SNA NEN 4400-1 certificering en NBBU-kaders
        versterken dat vertrouwen.
      </p>
      <p>
        Opdrachtgevers die digitaal willen samenwerken, gebruiken het{" "}
        ZPC Online portaal{" "}
        voor overzicht en communicatie. Klachtenafhandeling is daar een
        aanvulling op, geen vervanging van goede screening en dagelijkse
        afstemming op de werkvloer.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        WKKGZ en sectorafspraken
      </h2>
      <p>
        De Wet kwaliteit, klachten en geschillen zorg (WKKGZ) stelt eisen aan
        kwaliteitszorg en klachtenregeling bij zorgaanbieders. Als bemiddelaar
        in de zorgketen sluiten wij aan bij relevante sectorafspraken. Bij
        samenwerking via{" "}
        bemiddeling{" "}
        of detachering bespreken we met opdrachtgevers welke verantwoordelijkheden
        waar liggen en hoe meldingen worden afgehandeld.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Checklist: klachtenproces als opdrachtgever
      </h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Vraag naar het klachtenproces vóór contractering</li>
        <li>Leg intern vast wie meldingen ontvangt en doorzet</li>
        <li>Combineer preventie (screening) met correctie (klachtenroute)</li>
        <li>Documenteer incidenten en gedeelde lessen</li>
        <li>Evalueer periodiek samenwerking met ZorgpuntConnect</li>
        <li>Gebruik rapportages voor trendanalyse</li>
      </ol>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Laten we het testen
      </h2>
      <p>
        Vertrouwen in een bemiddelaar gaat verder dan snelle plaatsing. Vraag een
        gratis gesprek aan en bespreek hoe {brand.name} kwaliteit borgt, van
        screening tot klachtenafhandeling. Wij leggen uit welke afspraken gelden
        en hoe we samenwerken aan veilige en transparante zorgbemiddeling.
      </p>
    </>
  )
}
