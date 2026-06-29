import Link from "next/link"
import Image from "next/image"
import type { RichServicePage } from "@/lib/service-content/types"
import { brand } from "@/lib/brand"

export const jeugdzorgPersoneelContent: RichServicePage = {
  slug: "jeugdzorg-personeel",
  seo: {
    title:
      "Jeugdzorg personeel inhuren | Jeugdhulpverleners via ZorgpuntConnect",
    description:
      "Jeugdzorg personeel nodig? ZorgpuntConnect bemiddelt jeugdhulpverleners en begeleiders voor ambulante en residentiële jeugdzorg in Nederland.",
    h1: "Jeugdzorg personeel: begeleiding voor kinderen, jongeren en gezinnen",
    primaryKeyword: "jeugdzorg personeel",
    imageAlts: [
      "Jeugdhulpverlener in gesprek met jongere in ambulante jeugdzorg",
      "Team jeugdzorg bespreekt begeleidingsplan in woonvoorziening",
      "ZorgpuntConnect bemiddelt jeugdzorg personeel voor opdrachtgevers in Nederland",
    ],
  },
  relatedSlugs: [
    "ggz-personeel",
    "sociaal-werk",
    "bemiddeling-zzp-zorgprofessionals",
  ],
  faqs: [
    {
      question: "Welke functies vallen onder jeugdzorg personeel?",
      answer:
        "Denk aan jeugdhulpverleners, pedagogisch medewerkers, begeleiders in woonvoorzieningen, ambulant werkers en ondersteunend personeel in jeugdteams. We stemmen af op ambulant of residentieel werk.",
    },
    {
      question: "Werken jullie samen met Via Jeugd of ketenpartners?",
      answer:
        "We kennen de jeugdzorgketen en werken met aanbieders die personeel nodig hebben voor jeugdhulp, gezinsondersteuning en woonbegeleiding. Concrete samenwerkingen verschillen per regio en opdracht.",
    },
    {
      question: "Hoe belangrijk is ervaring met de Jeugdwet?",
      answer:
        "Voor veel opdrachtgevers is kennis van regelgeving, regie en samenwerking met gemeenten belangrijk. We vragen naar uw verwachtingen en zoeken professionals met passende achtergrond.",
    },
    {
      question: "Kunnen jullie snel vervangen bij uitval in een woonlocatie?",
      answer:
        "Bij acute uitval proberen we snel te schakelen. Residentiële jeugdzorg vraagt vaak om specifieke ervaring; hoe eerder u uw vraag meldt, hoe beter we kunnen plannen.",
    },
    {
      question: "Is ZZP-inzet mogelijk in de jeugdzorg?",
      answer:
        "Ja, via bemiddeling en tussenkomst. Ook detachering en werving voor vaste functies behoren tot de mogelijkheden. We adviseren welke vorm past bij uw organisatie en duur van de opdracht.",
    },
    {
      question: "Hoe screenen jullie jeugdhulpverleners?",
      answer:
        "Met VOG, diploma's, referenties en waar nodig specifieke certificaten. Onze kwaliteitscontrole sluit aan op de eisen in de zorgsector.",
    },
    {
      question: "Wat is het verschil met GGZ of sociaal werk?",
      answer:
        "Jeugdzorg richt zich op minderjarigen en gezinnen; GGZ op geestelijke gezondheid; sociaal werk op participatie en maatschappelijke ondersteuning. De rollen overlappen soms; daarom hebben we aparte sectorpagina's.",
    },
    {
      question: "Hoe start ik een aanvraag?",
      answer:
        "Vul het contactformulier in of vraag een gratis gesprek. Lieke bespreekt uw vacature, locatie en planning.",
    },
  ],
  renderArticle: () => <JeugdzorgPersoneelArticle />,
}

function JeugdzorgPersoneelArticle() {
  return (
    <>
      <p className="text-base text-foreground leading-relaxed">
        <strong>Jeugdzorg personeel</strong> is schaars en veelgevraagd.
        Jongeren en gezinnen verdienen stabiele begeleiding, terwijl teams te
        maken hebben met wisselende caseloads, regeldruk en soms acute
        plaatsingen. {brand.name} bemiddelt jeugdhulpverleners en begeleiders
        voor ambulante en residentiële jeugdzorg, met persoonlijk contact en
        sectorkennis.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Waarom deze pagina over jeugdzorg-personeelsbemiddeling?
      </h2>
      <p>
        Wie zoekt op &quot;jeugdzorg personeel&quot; wil weten wie betrouwbaar
        is, wie past bij kwetsbare jongeren en of de bemiddelaar de jeugdhulp
        begrijpt. Hier leest u wat we leveren, hoe we matchen, welke kwaliteit we
        eisen en hoe u het traject met {brand.name} aanpakt.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Wat valt onder jeugdzorg personeel?
      </h2>
      <p>
        De jeugdhulp is breed: van ambulante gezinsondersteuning tot
        woonvoorzieningen en behandelsettingen. Typische rollen:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Jeugdhulpverleners in wijk- of gezinsteams</li>
        <li>Pedagogisch medewerkers op woonlocaties</li>
        <li>Ambulant begeleiders met caseload</li>
        <li>Ondersteunend personeel bij dag- en nachtdiensten</li>
      </ul>
      <p>
        Professionals moeten kunnen werken met ouders, scholen, gemeenten en
        soms justitie. Die context weegt mee in elke match.
      </p>

      <h3 className="text-lg font-semibold text-foreground pt-6">
        Ambulant versus residentieel
      </h3>
      <p>
        Ambulant werken vraagt om regie, planning en reizen; residentieel om
        teamafstemming, nachtdiensten en intensieve begeleiding op locatie. Wij
        vragen expliciet welke setting u zoekt, zodat kandidaten niet
        &quot;toevallig&quot; worden voorgesteld.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Werkwijze {brand.name}
      </h2>
      <p>
        Na intake zoeken we in ons netwerk naar passende professionals. Dat kan
        via{" "}
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
        of{" "}
        werving en selectie{" "}
        voor vaste functies. Screening en documentatie lopen centraal.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Overzicht: veelvoorkomende situaties
      </h2>
      <div className="overflow-x-auto my-4">
        <table className="w-full min-w-[28rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Situatie
              </th>
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Oplossing
              </th>
              <th className="text-left py-2 font-semibold text-foreground">
                Tip
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Openstaande vacature woonlocatie</td>
              <td className="py-3 pr-4">Werving en selectie</td>
              <td className="py-3">Start vroeg met profielschets</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Ziekte in vast team</td>
              <td className="py-3 pr-4">Tijdelijke ZZP-inzet</td>
              <td className="py-3">Deel nacht/weekend verwachting</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4">Nieuwe wijkpost</td>
              <td className="py-3 pr-4">Meerdere professionals</td>
              <td className="py-3">Plan inwerking met teamleider</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Piek bij crisisplaatsingen</td>
              <td className="py-3 pr-4">Flexpool</td>
              <td className="py-3">Houd back-up lijst actueel</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Kwaliteit en veiligheid
      </h2>
      <p>
        Werken met minderjarigen vraagt om strikte screening. Onze{" "}
        kwaliteitscontrole{" "}
        omvat onder meer VOG en verificatie van diploma&apos;s. Opdrachtgevers
        weten wie ze binnenhalen.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Jeugdzorg in Nederland: wat opdrachtgevers merken
      </h2>
      <p>
        Gemeenten en aanbieders zoeken dezelfde professionals: betrokken,
        stabiel en goed in samenwerking. Regeldruk en administratieve last
        maken het werk zwaar; daardoor is verloop een reëel probleem.
        Flexibele inzet via bemiddeling helpt om gaten op te vangen zonder
        direct nieuwe vaste contracten. {brand.name} werkt landelijk met
        aandacht voor regionale jeugdhulpmarkten.
      </p>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Samenhang met andere sectoren
      </h2>
      <p>
        Jongeren raken ook GGZ of sociaal werk. Bekijk{" "}
        GGZ personeel{" "}
        en{" "}
        sociaal werk{" "}
        als u multidisciplinaire teams samenstelt.
      </p>

      <figure className="my-8 rounded-xl overflow-hidden border border-border">
        <Image
          src="/images/hero-team.jpg"
          alt="Jeugdzorgteam in overleg over begeleiding en personeelsplanning"
          width={1200}
          height={675}
          className="w-full h-auto object-cover max-h-72"
        />
        <figcaption className="text-xs text-muted-foreground px-4 py-2 bg-muted/30">
          Stabiele teams maken het verschil voor jongeren en gezinnen.
        </figcaption>
      </figure>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Checklist voor uw aanvraag
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Beschrijf doelgroep en leeftijdscategorie</li>
        <li>Geef aan of het ambulant of residentieel is</li>
        <li>Deel verwachtingen rond nacht- en weekenddiensten</li>
        <li>Benoem samenwerking met gemeente of ketenpartners</li>
        <li>Plan ruimte voor inwerking en supervisie</li>
      </ul>

      <h2 className="text-xl font-semibold text-foreground pt-8">
        Gratis gesprek
      </h2>
      <p>
        Zoekt u jeugdzorg personeel? Neem contact op met {brand.name}. Lieke
        bespreekt uw vraag en geeft een eerlijk beeld van mogelijkheden en
        timing.
      </p>
    </>
  )
}
