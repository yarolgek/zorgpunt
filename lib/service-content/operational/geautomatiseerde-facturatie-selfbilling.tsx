import Link from "next/link"
import Image from "next/image"
import type { RichServicePage } from "@/lib/service-content/types"
import { brand } from "@/lib/brand"

export const facturatieContent: RichServicePage = {
  slug: "geautomatiseerde-facturatie-selfbilling",
  seo: {
    title:
      "Geautomatiseerde facturatie en selfbilling | Mijn ZPC via ZorgpuntConnect",
    description:
      "Geautomatiseerde facturatie en selfbilling voor zorgopdrachten via Mijn ZPC. Klantspecifieke opmaak, betalingsbeheer en koppeling met urenregistratie. ZorgpuntConnect.",
    h1: "Geautomatiseerde facturatie en selfbilling: minder administratie, meer overzicht",
    primaryKeyword: "geautomatiseerde facturatie selfbilling",
    imageAlts: [
      "Facturatieoverzicht in Mijn ZPC portaal voor zorgopdrachtgever",
      "Zorgprofessional registreert uren voor geautomatiseerde facturatie",
      "ZorgpuntConnect automatiseert facturatie en betalingsbeheer in de zorg",
    ],
  },
  relatedSlugs: [
    "zpc-online-portaal-opdrachtgevers",
    "roosterplanning-personeelsbezetting",
    "documentbeheer-verificatie-zorgprofessionals",
    "bemiddeling-zzp-zorgprofessionals",
    "api-koppelingen-zorgsystemen",
  ],
  faqs: [
    {
      question: "Wat is selfbilling in de context van ZorgpuntConnect?",
      answer:
        "Selfbilling betekent dat facturatie automatisch wordt gegenereerd op basis van goedgekeurde uren en afspraken in Mijn ZPC, met klantspecifieke opmaak. Dat vermindert handmatig werk voor opdrachtgever en professional.",
    },
    {
      question: "Hoe hangt facturatie samen met urenregistratie?",
      answer:
        "Professionals registreren uren in Mijn ZPC. Na controle en goedkeuring vormen die uren de basis voor facturatie. Zo sluiten planning, uitvoering en financiële afhandeling op elkaar aan.",
    },
    {
      question: "Kan de factuur worden aangepast aan onze huisstijl of structuur?",
      answer:
        "Mijn ZPC ondersteunt klantspecifieke opmaak binnen de afspraken in de raamovereenkomst. Fee, factor en facturatiemomenten worden vooraf vastgelegd.",
    },
    {
      question: "Geldt BTW-vrijstelling voor zorgprestaties?",
      answer:
        "Bij bemiddeling van zorgprofessionals kan BTW-vrijstelling op geleverde prestaties van toepassing zijn, afhankelijk van de situatie. We bespreken dit in de raamovereenkomst en factureren conform afspraak.",
    },
    {
      question: "Wat is het verschil tussen bemiddelingsfee en detacheringsuurtarief?",
      answer:
        "Bij ZZP-bemiddeling geldt een afgesproken bemiddelingsfee over gepresteerde werkuren. Bij detachering en tussenkomst werken we met een uurtarief op basis van factor over het basisuurtarief, exclusief ORT, kilometervergoeding en BTW.",
    },
    {
      question: "Hoe snel moeten facturen worden betaald?",
      answer:
        "Standaard geldt een betalingstermijn van 14 dagen, tenzij schriftelijk anders overeengekomen. Dat staat in onze algemene voorwaarden en raamovereenkomsten.",
    },
    {
      question: "Werkt facturatie samen met API-koppelingen?",
      answer:
        "Waar mogelijk koppelen we Mijn ZPC aan uw systemen via API's, zodat uren en factuurgegevens niet dubbel hoeven te worden ingevoerd. Zie onze pagina over API-koppelingen voor meer informatie.",
    },
    {
      question: "Hoe start ik met geautomatiseerde facturatie?",
      answer:
        "Na kennismaking en raamovereenkomst wordt facturatie ingericht in Mijn ZPC. U krijgt portaaltoegang en inzicht in status en historie van facturen.",
    },
  ],
  renderArticle: () => <FacturatieArticle />,
}

function FacturatieArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        <strong>Geautomatiseerde facturatie en selfbilling</strong> nemen een
        groot deel van de administratieve last weg bij zorgbemiddeling. Uren,
        tarieven, toeslagen en afspraken uit de raamovereenkomst komen samen in
        Mijn ZPC tot een voorspelbaar facturatieproces. {brand.name} biedt dit
        als onderdeel van onze full service aanpak: één partner voor selectie,
        plaatsing, documentcontrole en betalingen.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Zoekintentie: wat u zoekt en wat deze pagina biedt
      </h2>
      <p>
        Financiële administrators en opdrachtgevers zoeken naar manieren om
        facturatie te versnellen, fouten te verminderen en discussie over uren
        te voorkomen. Deze pagina legt uit hoe {brand.name} facturatie
        automatiseert via het{" "}
        <Link
          href="/diensten/zpc-online-portaal-opdrachtgevers"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          ZPC Online portaal
        </Link>
        , welke afspraken daarvoor nodig zijn en hoe selfbilling in de praktijk
        werkt.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wat is geautomatiseerde facturatie in de zorgbemiddeling?
      </h2>
      <p>
        In traditionele situaties gaan urenlijsten, facturen en betalingen via
        mail en spreadsheets. Dat kost tijd en leidt tot fouten. Bij{" "}
        {brand.name} loopt het proces digitaal:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Professional registreert uren in Mijn ZPC</li>
        <li>Opdrachtgever controleert en keurt goed</li>
        <li>Systeem genereert factuur met klantspecifieke opmaak</li>
        <li>Betalingsbeheer volgens afgesproken termijn</li>
        <li>Inzicht in historie via het portaal</li>
      </ul>
      <p>
        Selfbilling betekent dat dit grotendeels automatisch verloopt op basis
        van vooraf vastgelegde regels, zonder dat elke factuur handmatig wordt
        opgesteld.
      </p>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        Automatisering als kern van Mijn ZPC
      </h3>
      <p>
        Ons portaal biedt naast documentbeheer ook geautomatiseerde
        opdrachtovereenkomsten en een geautomatiseerd facturatieproces. Dat past
        bij onze belofte van automatisering: minder papier, meer overzicht. Het
        hangt samen met{" "}
        <Link
          href="/diensten/documentbeheer-verificatie-zorgprofessionals"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          documentbeheer
        </Link>{" "}
        en{" "}
        <Link
          href="/diensten/roosterplanning-personeelsbezetting"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          roosterplanning
        </Link>
        , zodat de hele keten van opdracht tot betaling in één systeem zit.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Fee, factor en raamovereenkomst
      </h2>
      <p>
        Vóór facturatie legt {brand.name} afspraken vast in een
        raamovereenkomst. Afhankelijk van de vorm van samenwerking:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Bemiddeling ZZP:</strong> afgesproken bemiddelingsfee over
          gepresteerde werkuren; BTW-vrijstelling op zorgprestaties kan van
          toepassing zijn
        </li>
        <li>
          <strong>Tussenkomst en detachering:</strong> uurtarief op basis van
          factor over basisverloning; exclusief ORT, kilometervergoeding en BTW
        </li>
        <li>
          <strong>Onderaanneming:</strong> afspraken op project- of teambasis
          met periodieke evaluatie
        </li>
      </ul>
      <p>
        Bij detachering bepalen we samen met de opdrachtgever de factor op het
        basisuurtarief. Wijzigingen in basisverloning kunnen het
        detacheringsuurtarief beïnvloeden; dat communiceren we transparant.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Vergelijking facturatiemodellen
      </h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Samenwerking
              </th>
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Facturatiebasis
              </th>
              <th className="text-left py-2 font-semibold text-foreground">
                Typische frequentie
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">ZZP-bemiddeling</td>
              <td className="py-3 pr-4">Fee over goedgekeurde uren</td>
              <td className="py-3">Maandelijks</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Tussenkomst</td>
              <td className="py-3 pr-4">Uurtarief per dienst</td>
              <td className="py-3">Maandelijks</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Detachering</td>
              <td className="py-3 pr-4">Factor × basisuurloon</td>
              <td className="py-3">Maandelijks</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Onderaanneming</td>
              <td className="py-3 pr-4">Projectafspraak</td>
              <td className="py-3">Volgens contract</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Voordelen voor opdrachtgevers
      </h2>
      <p>
        Waarom kiezen meer dan 45 zorginstellingen voor een raamovereenkomst met{" "}
        {brand.name}? Onder meer omdat wij:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Eén partner zijn voor selectie, plaatsing en betalingen</li>
        <li>Marktconforme tarieven hanteren, al dan niet met BTW-vrijstelling</li>
        <li>DBA- en VBAR-proof werken waar van toepassing</li>
        <li>Jaarlijks circa 500.000 uur verwerken in bewezen processen</li>
        <li>Rapportage en analyse bieden voor managementinzicht</li>
      </ul>
      <p>
        Geautomatiseerde facturatie is daarbij geen losse module, maar onderdeel
        van dezelfde keten als{" "}
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
        <Link
          href="/diensten/detachering-zorgpersoneel"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          detachering
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Integratie en API-koppelingen
      </h2>
      <p>
        Grote opdrachtgevers willen factuurgegevens niet dubbel invoeren. Daarom
        ondersteunt {brand.name} waar mogelijk{" "}
        <Link
          href="/diensten/api-koppelingen-zorgsystemen"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          API-koppelingen met zorgsystemen
        </Link>
        . Automatisering en API-koppelingen staan expliciet in onze werkwijze
        na de raamovereenkomst: login opdrachtgever, inzicht in documentatie, en
        koppeling met uw bestaande IT-omgeving.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Betalingstermijn en betrouwbaarheid
      </h2>
      <p>
        Standaard hanteren wij een betalingstermijn van 14 dagen. Dat helpt ons
        voorfinanciering beheersbaar te houden en professionals tijdig te
        betalen. {brand.name} is SNA NEN 4400-1 gecertificeerd, wat vertrouwen
        geeft in financiële integriteit en procesbeheersing.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Checklist: facturatie goed ingericht
      </h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Raamovereenkomst met fee, factor en facturatiemoment vastleggen</li>
        <li>Portaaltoegang voor finance en planning regelen</li>
        <li>Afstemmen wie uren goedkeurt en binnen welke termijn</li>
        <li>Klantspecifieke factuurvereisten vooraf doorgeven</li>
        <li>Periodiek rapportages gebruiken voor analyse</li>
        <li>Bij wijzigingen in CAO of ORT: factor tijdig herijken</li>
      </ol>

      <figure className="my-8 rounded-xl overflow-hidden border border-border">
        <Image
          src="/images/app-preview.jpg"
          alt="Geautomatiseerd facturatieoverzicht in Mijn ZPC voor zorgopdrachtgevers"
          width={1200}
          height={675}
          className="w-full h-auto object-cover max-h-72"
        />
        <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/30">
          Facturatie, uren en afspraken komen samen in Mijn ZPC.
        </figcaption>
      </figure>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Laten we het testen
      </h2>
      <p>
        Zoals we zelf zeggen: laten we het gewoon eens testen. Vraag een gratis
        gesprek aan en ontdek hoe geautomatiseerde facturatie en selfbilling
        werken voor uw organisatie. Lieke en het team leggen uit welke
        samenwerkingsvorm past en hoe snel we kunnen starten.
      </p>
    </>
  )
}
