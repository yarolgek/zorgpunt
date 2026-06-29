import Link from "next/link"
import Image from "next/image"
import type { RichServicePage } from "@/lib/service-content/types"
import { brand } from "@/lib/brand"

export const bemiddelingZzpContent: RichServicePage = {
  slug: "bemiddeling-zzp-zorgprofessionals",
  seo: {
    title:
      "Bemiddeling ZZP-zorgprofessionals | ZZP'ers inhuren in de zorg via ZorgpuntConnect",
    description:
      "Bemiddeling van gekwalificeerde ZZP-zorgprofessionals voor zorgorganisaties. ZorgpuntConnect koppelt u snel aan circa 1.500 zelfstandige zorgverleners. SNA-gecertificeerd, persoonlijk en actief in Limburg en Noord-Brabant.",
    h1: "Bemiddeling ZZP-zorgprofessionals: snel de juiste zelfstandige op de juiste plek",
    primaryKeyword: "bemiddeling ZZP-zorgprofessionals",
    imageAlts: [
      "ZZP-zorgprofessional aan het werk na bemiddeling door ZorgpuntConnect",
      "Team van ZorgpuntConnect bemiddelt zelfstandige zorgprofessionals voor zorgorganisaties",
      "Gekwalificeerde verpleegkundige ingezet via bemiddeling in Limburg en Noord-Brabant",
    ],
  },
  relatedSlugs: [
    "tussenkomst-zzp-zorgprofessionals",
    "detachering-zorgpersoneel",
    "werving-en-selectie",
  ],
  faqs: [
    {
      question: "Wat houdt bemiddeling van ZZP-zorgprofessionals in?",
      answer:
        "Bij bemiddeling brengt ZorgpuntConnect uw zorgorganisatie in contact met zelfstandige zorgprofessionals die passen bij uw vraag. Wij screenen kandidaten, stemmen verwachtingen af en begeleiden het traject van eerste contact tot start op de werkvloer. De ZZP'er werkt zelfstandig, u behoudt de regie op de zorg.",
    },
    {
      question: "Hoe snel kunnen jullie een ZZP'er voorstellen?",
      answer:
        "Dankzij een netwerk van circa 1.500 aangesloten zorgprofessionals kunnen wij vaak snel schakelen. Bij acute uitval of piekdrukte zoeken onze planners direct naar een passende, beschikbare professional in uw regio.",
    },
    {
      question: "Welke zorgprofessionals bemiddelen jullie?",
      answer:
        "Van verpleegkundigen (mbo en hbo), verzorgenden IG en begeleiders tot specialisten in GGZ, VVT, gehandicaptenzorg en jeugdzorg. We matchen op diploma, registratie, ervaring, beschikbaarheid en gewenste regio.",
    },
    {
      question: "Zijn de ZZP'ers gescreend en gekwalificeerd?",
      answer:
        "Ja. Voordat een professional wordt voorgesteld controleren wij diploma's, BIG-registratie (waar van toepassing), VOG en relevante certificaten. Dit gebeurt via ons documentbeheer en verificatie, zodat alleen professionals met geldige documentatie aan de slag gaan.",
    },
    {
      question: "Is bemiddeling Wet DBA-conform?",
      answer:
        "Wij richten onze plaatsingen in conform de Wet DBA en letten op een correcte arbeidsrelatie. Waar gewenst kiezen opdrachtgevers voor het tussenkomstmodel, waarbij ZorgpuntConnect als contractuele schakel optreedt.",
    },
    {
      question: "Wat kost bemiddeling van een ZZP-zorgprofessional?",
      answer:
        "De kosten hangen af van het profiel, de duur en de gekozen samenwerkingsvorm. In een raamovereenkomst leggen we fee, factor en facturatie vooraf transparant vast, zodat u nooit voor verrassingen komt te staan.",
    },
    {
      question: "In welke regio's zijn jullie actief?",
      answer:
        "ZorgpuntConnect is gevestigd in Roermond en als top 3 speler actief in Limburg en Noord-Brabant, met raamovereenkomsten bij meer dan 45 zorginstellingen. Ook daarbuiten werken we met opdrachtgevers en zelfstandige zorgprofessionals.",
    },
    {
      question: "Hoe start ik met bemiddeling via ZorgpuntConnect?",
      answer:
        "Na een vrijblijvende kennismaking en een raamovereenkomst krijgt u toegang tot het ZPC Online portaal. Lieke en het team bespreken uw personeelsbehoefte en stellen passende professionals voor. Het eerste gesprek is gratis.",
    },
  ],
  renderArticle: () => <BemiddelingArticle />,
}

function BemiddelingArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        <strong>Bemiddeling van ZZP-zorgprofessionals</strong> is de snelste
        manier om een personeelstekort op te lossen zonder zelf eindeloos te
        werven. {brand.name} brengt uw zorgorganisatie in contact met
        gekwalificeerde zelfstandige zorgverleners uit een netwerk van circa
        1.500 professionals. U houdt de regie op de zorg, wij regelen de match,
        de screening en de administratie eromheen.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Waarom deze pagina? Zoekintentie en wat u hier vindt
      </h2>
      <p>
        Teamleiders, planners en zorgmanagers zoeken op termen als
        &quot;ZZP&apos;er inhuren zorg&quot;, &quot;zelfstandige verpleegkundige
        bemiddeling&quot; of &quot;zorgpersoneel tekort oplossen&quot; omdat ze
        snel een betrouwbare kracht nodig hebben. Deze pagina legt uit hoe{" "}
        {brand.name} ZZP-bemiddeling aanpakt, wat het verschil is met andere
        vormen van inzet en hoe u veilig en snel start.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wat bemiddeling van ZZP-zorgprofessionals precies betekent
      </h2>
      <p>
        Bij bemiddeling koppelt {brand.name} een zelfstandige zorgprofessional
        aan uw opdracht. De ZZP&apos;er blijft zelfstandig ondernemer en werkt
        op basis van een opdrachtovereenkomst. Wij zorgen voor de juiste match en
        de randvoorwaarden, zodat u zich kunt richten op de zorg. Goede
        bemiddeling betekent in de praktijk:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Een professional die past op diploma, ervaring en setting</li>
        <li>Snelle invulling bij ziekte, verlof of piekdrukte</li>
        <li>Gecontroleerde documenten vóór de eerste dienst</li>
        <li>Heldere afspraken over tarief, inzet en bereikbaarheid</li>
        <li>Eén vast aanspreekpunt voor vragen en bijsturing</li>
      </ul>
      <p>
        {brand.name} is in 2022 opgericht door professionals uit de sector zelf
        en groeide in korte tijd uit tot een vaste waarde in Limburg en
        Noord-Brabant. Kwaliteit, een persoonlijke aanpak en warme contacten
        staan vanaf dag één centraal.
      </p>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        Bemiddeling, tussenkomst of detachering: wat past bij u?
      </h3>
      <p>
        Niet elke situatie vraagt om dezelfde oplossing. Naast bemiddeling kunt
        u kiezen voor{" "}
        <Link
          href="/diensten/tussenkomst-zzp-zorgprofessionals"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          tussenkomst van ZZP&apos;ers
        </Link>{" "}
        of voor{" "}
        <Link
          href="/diensten/detachering-zorgpersoneel"
          className="text-brand-primary hover:text-brand-secondary transition-colors no-underline hover:no-underline"
        >
          detachering van zorgpersoneel
        </Link>
        . Bij bemiddeling ligt de nadruk op het vinden van de juiste
        zelfstandige; bij tussenkomst neemt ZPC een grotere contractuele en
        administratieve rol op zich.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Screening en documentbeheer: zekerheid vóór de eerste dienst
      </h2>
      <p>
        Een ZZP&apos;er wordt pas voorgesteld als de papieren kloppen. Via onze
        dienst{" "}
        documentbeheer en verificatie{" "}
        controleren wij diploma&apos;s, BIG-registratie, VOG en certificaten, en
        signaleren we tijdig wanneer iets verloopt. Zo voldoet u aan uw
        zorgplicht en voorkomt u verrassingen op de werkvloer.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Veilig en conform: Wet DBA en gecertificeerde werkwijze
      </h2>
      <p>
        Inzet van zelfstandigen vraagt om aandacht voor de arbeidsrelatie. Wij
        richten plaatsingen in volgens de{" "}
        Wet DBA-conforme werkwijze{" "}
        en werken vanuit een gecertificeerde, transparante bedrijfsvoering. Dat
        beperkt risico&apos;s rond schijnzelfstandigheid en geeft beide partijen
        duidelijkheid.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Van kennismaking tot ingevulde dienst
      </h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Kennismaking: wie bent u, welke zorgbehoefte en welke profielen?</li>
        <li>Raamovereenkomst met fee, factor en facturatie</li>
        <li>Toegang tot het ZPC Online portaal voor opdrachtgevers</li>
        <li>Wij stellen gescreende, beschikbare ZZP&apos;ers voor</li>
        <li>Start op de werkvloer met persoonlijk support bij ad hoc vragen</li>
      </ol>
      <p>
        Jaarlijks worden via {brand.name} circa 500.000 uren gerealiseerd. Die
        schaal betekent dat er vaak sneller een match is dan wanneer u alleen
        intern werft. Het beheer van planning en uren loopt via het{" "}
        ZPC Online portaal
        .
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wanneer kiest u voor bemiddeling? Overzicht
      </h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Situatie
              </th>
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Aanpak via ZPC
              </th>
              <th className="text-left py-2 font-semibold text-foreground">
                Voordeel
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Acute uitval van een dienst</td>
              <td className="py-3 pr-4">Snelle match uit netwerk</td>
              <td className="py-3">Korte reactietijd</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Tijdelijke extra capaciteit</td>
              <td className="py-3 pr-4">Bemiddeling per opdracht</td>
              <td className="py-3">Flexibel zonder vast contract</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Specialistische vraag</td>
              <td className="py-3 pr-4">Gerichte search op profiel</td>
              <td className="py-3">Juiste expertise op de plek</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Piekdrukte (vakantie, griep)</td>
              <td className="py-3 pr-4">Flexibele inzet zelfstandigen</td>
              <td className="py-3">Opschalen wanneer nodig</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        De regionale context: Limburg en Noord-Brabant
      </h2>
      <p>
        Vanuit Roermond, centraal in de actieve regio, werkt {brand.name} als
        top 3 speler en voor diverse instellingen als preferred supplier. Dat
        betekent korte lijnen, kennis van lokale aanbieders en realistische
        verwachtingen over beschikbaarheid. Ook landelijk bemiddelen wij
        zelfstandige zorgprofessionals voor opdrachtgevers die onze
        persoonlijke aanpak waarderen.
      </p>

      <figure className="my-8 rounded-xl overflow-hidden border border-border">
        <Image
          src="/images/hero-team.jpg"
          alt="ZorgpuntConnect bemiddelt gekwalificeerde ZZP-zorgprofessionals voor zorgorganisaties"
          width={1200}
          height={675}
          className="w-full h-auto object-cover max-h-72"
        />
        <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/30">
          Persoonlijke bemiddeling: de juiste zelfstandige zorgprofessional op de
          juiste plek.
        </figcaption>
      </figure>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Volgende stap
      </h2>
      <p>
        Wilt u snel en zorgeloos een gekwalificeerde ZZP-zorgprofessional
        inhuren? Neem contact op met {brand.name}. Het eerste gesprek is gratis.
        Samen kijken we welke professional past bij uw afdeling en hoe snel we
        kunnen starten.
      </p>
    </>
  )
}
