import type { Metadata } from "next"
import Link from "next/link"
import { LegalPage } from "@/components/landing/legal-page"
import { brand } from "@/lib/brand"

export const metadata: Metadata = {
  title: `Cookiebeleid, ${brand.name}`,
  robots: { index: false, follow: true },
}

export default function CookiesPage() {
  return (
    <LegalPage title="Cookiebeleid">
      <p>
        {brand.name} gebruikt cookies en vergelijkbare technieken op{" "}
        <strong>www.zorgpuntconnect.nl</strong>. In dit cookiebeleid leggen wij
        uit welke cookies wij plaatsen, waarom, en hoe u uw keuze kunt maken of
        wijzigen.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-4">
        Wat zijn cookies?
      </h2>
      <p>
        Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen
        wanneer u onze website bezoekt. Sommige cookies zijn noodzakelijk voor
        het functioneren van de site; andere helpen ons statistieken bij te
        houden of advertenties te meten.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-4">
        Uw keuze via de cookiebanner
      </h2>
      <p>
        Bij uw eerste bezoek kunt u kiezen tussen{" "}
        <strong>Alles accepteren</strong> en{" "}
        <strong>Alleen noodzakelijk</strong>. Uw keuze slaan wij op in uw
        browser (localStorage en een cookie) voor maximaal 180 dagen.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-4">
        Soorten cookies die wij gebruiken
      </h2>

      <h3 className="text-base font-semibold text-foreground pt-3">
        1. Strikt noodzakelijk (altijd actief)
      </h3>
      <p>
        Deze cookies zijn nodig voor basisfuncties, zoals het onthouden van uw
        cookievoorkeur en een veilige werking van de website. Zonder deze
        cookies werkt de site niet goed.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>zpc_consent</strong> — onthoudt uw cookiekeuze (max. 180
          dagen)
        </li>
      </ul>

      <h3 className="text-base font-semibold text-foreground pt-3">
        2. Analyse &amp; marketing (alleen na toestemming)
      </h3>
      <p>
        Als u <strong>Alles accepteren</strong> kiest, kunnen wij via Google
        Tag Manager onder meer Google Analytics 4 en Google Ads gebruiken om
        bezoekgedrag en campagneresultaten te meten. Deze cookies worden pas
        geplaatst nadat u toestemming geeft.
      </p>

      <h3 className="text-base font-semibold text-foreground pt-3">
        3. Geanonimiseerde signalen bij weigering
      </h3>
      <p>
        Kiest u voor <strong>Alleen noodzakelijk</strong>, dan plaatsen wij geen
        marketing- of analysecookies. Via{" "}
        <strong>Google Consent Mode</strong> kan Google desondanks beperkte,
        geanonimiseerde en cookieless signalen ontvangen (bijv. voor
        geaggregeerde conversiemodellering). Dit bevat geen persoonlijke
        profilering of remarketing op basis van cookies.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-4">
        Google Tag Manager / Google Ads / Analytics
      </h2>
      <p>
        Wij gebruiken (of zullen gebruiken) Google Tag Manager om tags te
        beheren. Google kan gegevens verwerken als verwerker. Meer informatie
        over hoe Google omgaat met gegevens vindt u in het privacybeleid van
        Google en in ons{" "}
        <Link href="/privacy" className="text-brand-primary hover:text-brand-secondary">
          privacy statement
        </Link>
        .
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-4">
        Cookievoorkeur wijzigen
      </h2>
      <p>
        U kunt cookies verwijderen via uw browserinstellingen. Daarna wordt de
        cookiebanner opnieuw getoond bij uw volgende bezoek. U kunt cookies ook
        per browser blokkeren; sommige functies van de website werken dan
        mogelijk minder goed.
      </p>

      <h2 className="text-lg font-semibold text-foreground pt-4">
        Contact
      </h2>
      <p>
        Vragen over cookies of privacy? Neem contact op via{" "}
        <a
          href="mailto:info@zorgpuntconnect.nl"
          className="text-brand-primary hover:text-brand-secondary"
        >
          info@zorgpuntconnect.nl
        </a>{" "}
        of zie ons{" "}
        <Link href="/privacy" className="text-brand-primary hover:text-brand-secondary">
          privacy statement
        </Link>
        .
      </p>
    </LegalPage>
  )
}
