import Link from "next/link"
import type { RichServicePage } from "@/lib/service-content/types"
import { brand } from "@/lib/brand"

export const documentbeheerContent: RichServicePage = {
  slug: "documentbeheer-verificatie-zorgprofessionals",
  seo: {
    title:
      "Documentbeheer en verificatie zorgprofessionals | 100% controle via Mijn ZPC",
    description:
      "Documentbeheer en strikte verificatie van zorgprofessionals via Mijn ZPC. Alleen professionals met geldige documentatie aan het werk. ZorgpuntConnect, SNA gecertificeerd.",
    h1: "Documentbeheer en verificatie: alleen bewezen professionals aan het werk",
    primaryKeyword: "documentbeheer verificatie zorgprofessionals",
    imageAlts: [
      "Zorgprofessional uploadt diploma en VOG in digitaal documentbeheersysteem",
      "Opdrachtgever controleert kwalificaties van zorgprofessional via ZPC portaal",
      "ZorgpuntConnect verifieert documentatie vóór inzet in zorginstelling",
    ],
  },
  relatedSlugs: [
    "kwaliteitscontrole-screening-zorgprofessionals",
    "zpc-online-portaal-opdrachtgevers",
    "geautomatiseerde-facturatie-selfbilling",
    "roosterplanning-personeelsbezetting",
    "wet-dba-conforme-plaatsingen",
  ],
  faqs: [
    {
      question: "Welke documenten worden gecontroleerd?",
      answer:
        "Denk aan diploma's, BIG-registratie waar van toepassing, VOG, identiteitsbewijs, beroepsaansprakelijkheidsverzekering, KIWA-keurmerk voor thuiszorg waar relevant, en overige sectorcertificaten. De exacte set hangt af van functie en opdrachtgever.",
    },
    {
      question: "Wat betekent 100% documentcontrole bij ZorgpuntConnect?",
      answer:
        "Mijn ZPC faciliteert en controleert het documentatieproces. Enkel professionals met geldige documentatie gaan aan het werk. Verlopen of ontbrekende stukken worden gesignaleerd vóór inzet.",
    },
    {
      question: "Kunnen opdrachtgevers documenten inzien?",
      answer:
        "Ja. Via het ZPC-portaal heeft de opdrachtgever inzicht in documentatie en kwalificaties van ingezette professionals, binnen de kaders van privacywetgeving.",
    },
    {
      question: "Hoe verhoudt dit zich tot kwaliteitscontrole?",
      answer:
        "Documentbeheer is het administratieve en verificatiedeel van onze bredere kwaliteitscontrole en screening. Beide diensten versterken elkaar: screening op inhoud, documentbeheer op actualiteit en volledigheid.",
    },
    {
      question: "Werkt documentbeheer samen met geautomatiseerde opdrachtovereenkomsten?",
      answer:
        "Ja. Mijn ZPC biedt geautomatiseerde opdrachtovereenkomsten. Pas als documentatie in orde is, kan een professional een opdracht accepteren en starten.",
    },
    {
      question: "Is ZorgpuntConnect gecertificeerd voor dit proces?",
      answer:
        "ZorgpuntConnect is voor bemiddeling en detacheren SNA NEN 4400-1 gecertificeerd. Dat ondersteunt betrouwbare bedrijfsvoering en gecontroleerde processen rond inlenen en bemiddelen.",
    },
    {
      question: "Wat gebeurt er als een document verloopt tijdens een opdracht?",
      answer:
        "Het systeem signaleert verlopen documenten. Professionals en ZPC worden gewaarschuwd om verlenging te regelen. Zonder actuele documentatie wordt geen nieuwe inzet toegestaan.",
    },
    {
      question: "Hoe start ik als opdrachtgever?",
      answer:
        "Na raamovereenkomst krijgt u portaaltoegang. Bij elke nieuwe inzet ziet u of documentatie compleet is. Voor vragen kunt u contact opnemen met Lieke en het team.",
    },
  ],
  renderArticle: () => <DocumentbeheerArticle />,
}

function DocumentbeheerArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        <strong>Documentbeheer en verificatie</strong> van zorgprofessionals is
        geen administratieve bijzaak. Het is de basis voor veilige zorg,
        aantoonbare kwaliteit en rust bij audits. {brand.name} faciliteert dit
        via Mijn ZPC met strikte verificatie: enkel professionals met geldige
        documentatie gaan aan het werk.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Zoekintentie: waarom opdrachtgevers hier op zoeken
      </h2>
      <p>
        HR, kwaliteitsmedewerkers en teamleiders willen weten of een bemiddelaar
        documenten echt controleert, niet alleen belooft. Ze zoeken naar
        processen rond VOG, BIG, diploma&apos;s en verzekeringen. Deze pagina
        legt uit hoe {brand.name} dat organiseert, hoe het{" "}
        <Link
          href="/diensten/zpc-online-portaal-opdrachtgevers"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          ZPC-portaal
        </Link>{" "}
        ondersteunt en hoe dit aansluit op certificering en wetgeving.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wat valt onder documentbeheer in de zorg?
      </h2>
      <p>
        Zorgprofessionals moeten aantonen dat ze bevoegd, geschikt en verzekerd
        zijn. Typische documenten in ons proces:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Diploma&apos;s en bewijs van beroepsopleiding</li>
        <li>BIG-registratie (indien van toepassing)</li>
        <li>Verklaring Omtrent Gedrag (VOG)</li>
        <li>Identiteitsbewijs en BSN</li>
        <li>Beroepsaansprakelijkheidsverzekering</li>
        <li>Sectorcertificaten (BHV, medicatie, KIWA thuiszorg, etc.)</li>
      </ul>
      <p>
        Documentbeheer betekent: verzamelen, opslaan, verifiëren, actueel houden
        en beschikbaar maken voor opdrachtgevers die dat nodig hebben. Verificatie
        betekent: controleren of documenten echt, geldig en passend zijn vóór
        inzet.
      </p>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        Strikte verificatie als kernbelofte
      </h3>
      <p>
        In onze dienstverlening staat expliciet: documentbeheer en strikte
        verificatie. Mijn ZPC biedt een documentenbeheersysteem waarin
        professionals hun dossier onderhouden en wij het proces bewaken. Dat
        sluit aan op onze bredere{" "}
        <Link
          href="/diensten/kwaliteitscontrole-screening-zorgprofessionals"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          kwaliteitscontrole en screening
        </Link>
        , waarin ook referenties en geschiktheid meewegen.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Hoe Mijn ZPC documentbeheer faciliteert
      </h2>
      <p>
        Het portaal is online toegankelijk voor opdrachtgevers en
        zelfstandige professionals. Belangrijke functies:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Centraal documentenbeheersysteem per professional</li>
        <li>Automatische opdrachtovereenkomsten na goedgekeurd dossier</li>
        <li>Inzicht voor opdrachtgevers in kwalificaties</li>
        <li>Signalering bij verlopen of ontbrekende documenten</li>
        <li>Koppeling met planning: geen inzet zonder groen licht</li>
      </ul>
      <p>
        Zo hoeft u als opdrachtgever niet per professional opnieuw hetzelfde
        papierwerk te controleren. Dat scheelt uren en verkleint het risico op
        oversights.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Werkwijze: van upload tot werkplek
      </h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Professional uploadt documenten in Mijn ZPC</li>
        <li>ZPC verifieert volledigheid en geldigheid</li>
        <li>Opdrachtgever ziet status via het portaal</li>
        <li>Bij match: geautomatiseerde opdrachtovereenkomst</li>
        <li>Start op locatie; periodieke hercontrole bij verloop</li>
      </ol>
      <p>
        Deze keten hangt samen met{" "}
        <Link
          href="/diensten/roosterplanning-personeelsbezetting"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          roosterplanning
        </Link>
        : pas wie administratief in orde is, wordt ingepland.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Overzicht: document vs. verificatiemoment
      </h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Document
              </th>
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Wanneer gecontroleerd
              </th>
              <th className="text-left py-2 font-semibold text-foreground">
                Bij verloop
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">VOG</td>
              <td className="py-3 pr-4">Vóór eerste inzet</td>
              <td className="py-3">Opnieuw aanvragen en uploaden</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">BIG-registratie</td>
              <td className="py-3 pr-4">Vóór eerste inzet</td>
              <td className="py-3">Hercontrole op actualiteit</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Diploma</td>
              <td className="py-3 pr-4">Bij inschrijving</td>
              <td className="py-3">Bij nieuwe functie-eisen herbeoordelen</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Aansprakelijkheidsverzekering</td>
              <td className="py-3 pr-4">Jaarlijks of per polis</td>
              <td className="py-3">Blokkade bij verlopen dekking</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Compliance, DBA en certificering
      </h2>
      <p>
        Correct documentbeheer ondersteunt ook{" "}
        <Link
          href="/diensten/wet-dba-conforme-plaatsingen"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          Wet DBA-conforme plaatsingen
        </Link>
        en afspraken rond VBAR. {brand.name} is SNA NEN 4400-1 gecertificeerd voor
        bemiddeling en detacheren. Dat versterkt vertrouwen dat processen
        rondom inlenersaansprakelijkheid en bedrijfsvoering op orde zijn. Zie
        ook onze pagina over{" "}
        <Link
          href="/diensten/sna-nen-4400-1-gecertificeerde-bemiddeling"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          SNA-gecertificeerde bemiddeling
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Waarom opdrachtgevers kiezen voor centraal documentbeheer
      </h2>
      <p>
        Met meer dan 45 raamovereenkomsten en circa 1.500 aangesloten
        professionals verwerkt {brand.name} grote volumes documentatie. Centraal
        beheer voorkomt versnippering: één partner voor selectie, plaatsing,
        documentcontrole en betalingen. Dat past bij onze rol als full service
        provider in de zorg.
      </p>
      <p>
        Opdrachtgevers die ook financiële afhandeling willen stroomlijnen,
        koppelen documentbeheer aan{" "}
        <Link
          href="/diensten/geautomatiseerde-facturatie-selfbilling"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          geautomatiseerde facturatie
        </Link>
        , zodat administratie van begin tot eind in één keten loopt.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Praktische tips voor opdrachtgevers
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Vraag bij intake welke documenten voor uw setting verplicht zijn</li>
        <li>Controleer portaalstatus vóór goedkeuring van een nieuwe dienst</li>
        <li>Plan tijdig hernieuwing van VOG bij langdurige inzet</li>
        <li>Leg intern vast wie eindverantwoordelijk is voor kwaliteitsdossiers</li>
        <li>Gebruik rapportages uit Mijn ZPC bij audits en accreditatie</li>
      </ul>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Volgende stap
      </h2>
      <p>
        Wilt u zeker weten dat alleen geverifieerde professionals bij u werken?
        Neem contact op met {brand.name}. We laten zien hoe documentbeheer in
        Mijn ZPC werkt en wat dat betekent voor uw afdeling. Het eerste gesprek
        is gratis en vrijblijvend.
      </p>
    </>
  )
}
