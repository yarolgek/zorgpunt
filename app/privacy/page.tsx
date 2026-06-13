import type { Metadata } from "next"
import { LegalPage } from "@/components/landing/legal-page"
import { brand } from "@/lib/brand"

export const metadata: Metadata = {
  title: `Privacy Statement — ${brand.name}`,
  robots: { index: false, follow: true },
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Statement">
      <p>
        {brand.name} wil de privacy van haar medewerkers, zorgprofessionals,
        kandidaten, opdrachtgevers en leveranciers zo zorgvuldig mogelijk
        waarborgen bij het vastleggen of verwerken van hun persoonsgegevens.
        Met dit privacy statement maken wij duidelijk waarom wij bepaalde
        informatie verzamelen, hoe wij de privacy beschermen, welke rechten er
        zijn en onder welke voorwaarden wij informatie aan anderen verstrekken.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-2">
        Wet- en Regelgeving
      </h2>
      <p>
        {brand.name} verwerkt (persoons)gegevens in overeenstemming met de wet
        Algemene Verordening Gegevensbescherming (AVG). Het voldoen aan deze
        wet betekent dat wij alleen (persoons)gegevens verzamelen voor een
        bepaald doel en dat wij de vertrouwelijkheid van de gegevens waarborgen.
      </p>
      <p>
        In sommige situaties maken wij gebruik van de dienstverlening van andere
        partijen die namens ons (persoons)gegevens verwerken (bijvoorbeeld ten
        behoeve van de salarisverwerking en het opleiden van medewerkers en
        zorgprofessionals). Wij sluiten verwerkersovereenkomsten af met deze
        partijen zodat ook zij zorgvuldig omgaan met deze (persoons)gegevens.
        Wij blijven immers verantwoordelijk voor bescherming van deze
        (persoons)gegevens.
      </p>
      <p>
        Daarnaast delen wij (persoons)gegevens met andere partijen waar wij dat
        vanuit wet- en regelgeving of op basis van een contractuele bepaling
        verplicht zijn (bijvoorbeeld met de belastingdienst). Ook kan het
        noodzakelijk zijn om (persoons)gegevens te delen met andere partijen
        als onderdeel van onze dienstverlening (bijvoorbeeld naar
        opdrachtgevers).
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-2">
        Doel van de verwerking
      </h2>
      <p>
        Wij verzamelen en verwerken alleen die (persoons)gegevens die voor de
        uitvoering van onze dienstverlening op het gebied van bemiddeling en
        detachering of in het kader van werkgeverschap daadwerkelijk nodig zijn.
      </p>
      <p>
        {brand.name} zal over medewerkers, zorgprofessionals en kandidaten
        daarom (persoons)gegevens verzamelen om te gebruiken voor de volgende
        doeleinden:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Om een medewerker-/werkgeversrelatie of een
          personeels-/arbeidsbemiddelingsrelatie aan te gaan en te onderhouden;
        </li>
        <li>
          Om geschiktheid voor een bepaalde functie of opdracht te beoordelen en
          de beschikbaarheid vast te leggen;
        </li>
        <li>
          Om te beoordelen of de medewerker voor een (premie)korting en/of
          subsidie in aanmerking komt of onder een (premie)korting- of
          subsidieregeling valt;
        </li>
        <li>Om re-integratieverplichtingen na te komen;</li>
        <li>
          Om toegang te kunnen verlenen tot en gebruik te kunnen laten maken van
          onze besloten web- en mijnomgevingen, portals en ons intranet;
        </li>
        <li>Om de geldende wet- en regelgeving na te kunnen komen.</li>
      </ul>

      <h2 className="text-lg font-semibold text-foreground pt-2">
        Welke (persoons)gegevens
      </h2>
      <p>
        {brand.name} verwerkt onder meer de volgende gegevens: NAW-gegevens,
        e-mailadres, telefoonnummer, contactgegevens, nationaliteit,
        geboortedatum- en plaats, geslacht, burgerlijke staat, curriculum vitae
        (CV), werkervaring, bankrekeningnummer,         opleiding- en scholingsgegevens, (kopie), gegevens over beschikbaarheid en
        verlof, getuigschriften,
        referenties, (kopie) pasfoto, (kopie) ID-bewijs, BSN, (kopie)
        werkvergunning, (kopie) verblijfsvergunning. Wanneer een gebruikersnaam
        en wachtwoord is verstrekt om toegang te verkrijgen tot onze besloten
        web- en mijnomgevingen, portals en/of ons intranet, worden deze gegevens
        eveneens door ons verwerkt.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-2">
        Zakelijke relaties en Opdrachtgevers
      </h2>
      <p>
        {brand.name} zal de over de zakelijke relaties en opdrachtgevers
        verzamelde gegevens voor de volgende doeleinden gebruiken:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Om hen gebruik te kunnen laten maken van onze dienstverlening of
          gebruik te kunnen maken van hun dienstverlening;
        </li>
        <li>Om een handelsrelatie aan te gaan en te onderhouden;</li>
        <li>Om opdrachten overeen te komen en/of uit te kunnen (laten) voeren;</li>
        <li>
          Om te informeren over onze dienstverlening en overige activiteiten
          (bijvoorbeeld via e-mail, nieuwsbrieven en bedrijfsmagazines);
        </li>
        <li>
          Om toegang te kunnen verlenen tot en gebruik te kunnen laten maken van
          mijn {brand.name}, onze besloten web-omgevingen en portals;
        </li>
        <li>Om geldende wet- en regelgeving na te kunnen komen.</li>
      </ul>

      <h2 className="text-lg font-semibold text-foreground pt-2">
        Welke gegevens
      </h2>
      <p>
        {brand.name} verwerkt onder meer de volgende gegevens: (zakelijke)
        NAW-gegevens (naam, adres, vestigings-/woonplaats), e-mailadres,
        gegevens voor het onderhouden van de relatie, functie- en
        contactgegevens. Wanneer een gebruikersnaam en wachtwoord is verstrekt
        om toegang te verkrijgen tot mijn {brand.name}, onze besloten web- en
        mijnomgevingen en portals, worden deze gegevens eveneens door ons
        verwerkt.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-2">Algemeen</h2>
      <p>
        Het verwerken van persoonsgegevens is te allen tijde gebaseerd op een in
        de AVG vastgelegde grondslag:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Uitvoering van een overeenkomst;</li>
        <li>Voldoen aan wettelijke verplichtingen;</li>
        <li>
          Gerechtvaardigd belang, waarbij wij eerst afwegen of ons belang dan
          echt zwaarder weegt dan de belangen van de betreffende persoon als het
          gaat om privacy.
        </li>
      </ul>

      <h2 className="text-lg font-semibold text-foreground pt-2">
        Bewaartermijn
      </h2>
      <p>
        Bij het bewaren van persoonsgegevens is het uitgangspunt dat wij gegevens
        niet langer bewaren dan noodzakelijk is voor het doel waarvoor wij ze
        verwerken en uiteraard worden daarbij de wettelijke bewaartermijnen in
        acht genomen.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-2">Rechten</h2>
      <p>
        Op grond van de AVG is er het recht om de persoonsgegevens die wij
        verwerken:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>In te zien;</li>
        <li>Kopie van te ontvangen;</li>
        <li>Te wijzigen;</li>
        <li>Aan te vullen;</li>
        <li>Te beperken;</li>
        <li>Over te laten dragen;</li>
        <li>Te laten verwijderen.</li>
      </ul>
      <p>
        Daarnaast kan informatie opgevraagd worden over de verwerking van
        persoonsgegevens door {brand.name}, kan bezwaar gemaakt worden tegen het
        gebruik van de persoonsgegevens en kan eerder gegeven toestemming
        ingetrokken worden.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-2">
        Beveiliging
      </h2>
      <p>
        {brand.name} heeft organisatorische en technische beveiligingsmaatregelen
        getroffen om de gegevens te beschermen.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-2">
        Vragen en contact
      </h2>
      <p>
        Bij vragen en/of opmerkingen met betrekking tot de verwerking van
        persoonsgegevens of voor het gebruik willen maken van rechten, kan een
        e-mail gestuurd worden naar onze Functionaris Gegevensbescherming:{" "}
        <a
          href="mailto:info@zorgpuntconnect.nl"
          className="text-primary hover:underline"
        >
          info@zorgpuntconnect.nl
        </a>
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-2">
        Datum en aanpassing van het privacy statement
      </h2>
      <p>
        Dit privacy statement dateert van en treedt in werking op 1 juni 2021.{" "}
        {brand.name} behoudt zich het recht voor dit privacy statement op enig
        moment aan te passen.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-2">Cookies</h2>
      <p>
        Deze website maakt gebruik van cookies. Wij gebruiken cookies om je
        ervaring te verbeteren. Wij zijn hierin graag transparant en duidelijk
        over wat we doen. We gaan ervan uit dat je hiermee akkoord gaat, maar je
        kunt je afmelden als je dat wilt.
      </p>
      <p>
        Met dit cookie statement informeren wij je over de plaatsing van deze
        cookies, omdat wij graag transparant en duidelijk zijn over wat we doen.
      </p>
      <p>
        Een cookie is een klein tekstbestand dat bij het eerste bezoek aan deze
        website kan worden opgeslagen in de browser van je computer, tablet of
        smartphone. We gebruiken 4 soorten cookies:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Ten eerste de noodzakelijke cookies met een puur technische
          functionaliteit. Deze zorgen ervoor dat de website naar behoren werkt.
        </li>
        <li>
          Daarnaast zijn er noodzakelijke analytische cookies, die
          geanonimiseerd gegevens verzamelen over het gebruik van onze website
          en ons helpen de site te optimaliseren.
        </li>
        <li>
          Adverteerders plaatsen namens {brand.name} promotionele content. Om de
          resultaten hiervan te kunnen meten, plaatsen we namens deze
          adverteerders performancecookies. We verzekeren je dat deze cookies
          nooit privacygevoelige informatie verzamelen.
        </li>
        <li>
          Tot slot plaatsen we personaliserende cookies, die jouw surfgedrag op
          onze website bijhouden.
        </li>
      </ul>
      <p>
        Je kunt je afmelden voor cookies van alle websites door je internetbrowser
        zo in te stellen dat deze geen cookies meer opslaat. Daarnaast kun je
        alle informatie die eerder is opgeslagen via de instellingen van je
        browser verwijderen. Als je deze cookies in je browser uitzet, kun je
        niet meer van alle functionaliteiten van www.zorgpuntconnect.nl gebruik
        maken. Het kan daardoor gebeuren dat de beleving van de site tegenvalt.
        Je kunt nadere informatie over de afzonderlijke cookies die wij gebruiken
        en de doelen waarvoor wij deze gebruiken hieronder vinden.
      </p>
      <p>
        In ons privacy beleid vind je meer informatie over wie we zijn, hoe je
        contact met ons kunt opnemen en hoe we persoonlijke gegevens verwerken.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-2">
        Cookieoverzicht
      </h2>
      <div className="overflow-x-auto -mx-1">
        <table className="w-full min-w-[32rem] border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Naam
              </th>
              <th className="text-left py-2 pr-4 font-semibold text-foreground">
                Type
              </th>
              <th className="text-left py-2 font-semibold text-foreground">
                URL
              </th>
            </tr>
          </thead>
          <tbody className="align-top">
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium text-foreground">
                Google Analytics
              </td>
              <td className="py-3 pr-4">
                Analytisch. Wij gebruiken Google Analytics bijvoorbeeld om te
                meten hoe u onze website heeft gevonden, en op welke manier u
                onze website gebruikt. Met deze informatie kunnen wij de werking
                van onze website optimaliseren.
              </td>
              <td className="py-3">
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  policies.google.com/privacy
                </a>
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium text-foreground">YouTube</td>
              <td className="py-3 pr-4">
                Functioneel. Wij gebruiken YouTube om video weer te geven op onze
                website.
              </td>
              <td className="py-3">
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  policies.google.com/privacy
                </a>
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium text-foreground">
                Double Click Retargeting
              </td>
              <td className="py-3 pr-4">
                Double Click maakt het mogelijk om te registreren welke
                advertenties effectief zijn en welke niet, zodat advertenties
                worden getoond die voor u zo relevant mogelijk zijn.
              </td>
              <td className="py-3">
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  policies.google.com/privacy
                </a>
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium text-foreground">LinkedIn</td>
              <td className="py-3 pr-4">
                Analytisch. Wij gebruiken LinkedIn om te adverteren bij onze
                doelgroep. Door cookies zijn we in staat om te analyseren welke
                advertenties goed werken.
              </td>
              <td className="py-3">
                <a
                  href="https://www.linkedin.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  linkedin.com/legal/privacy-policy
                </a>
              </td>
            </tr>
            <tr>
              <td className="py-3 pr-4 font-medium text-foreground">WhatsApp</td>
              <td className="py-3 pr-4">
                Wij gebruiken WhatsApp om met jullie direct in contact te blijven
                voor snellere reactie.
              </td>
              <td className="py-3">
                <a
                  href="https://www.whatsapp.com/legal/cookies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline break-all"
                >
                  whatsapp.com/legal/cookies
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </LegalPage>
  )
}
