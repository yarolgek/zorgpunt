# ZorgpuntConnect , openstaande taken (backlog)

Lopende lijst met dingen die later nog moeten gebeuren, zodat we niets vergeten.
Laatst bijgewerkt: 22 jun 2026.

---

## 1. Echte bedrijfsgegevens (NAP)

- [x] `lib/site.ts` , echte telefoon **+31 85 3038827** ingevuld.
- [x] `lib/site.ts` , echt KvK-nummer **81706723** ingevuld (bevestigd door klant).
- [x] Volledig adres (Zwartbroekpoort 2, 6041 LS Roermond) in footer + schema.
- [x] Statutaire vestigingsplaats: **Roermond** (voorwaarden aangepast, was Venray).
- [ ] Telefoon koppelen als klikbare `tel:` in CTA's buiten de footer.

## 2. Juridische teksten , controleren

- [x] Roermond vs. Venray in voorwaarden opgelost (rechtsforum + vestiging Roermond).
- [ ] Privacy Statement en Algemene Voorwaarden nog laten checken door de klant/jurist
      vóór publicatie. Tekst staat op `/privacy` (inhoud komt overeen met aangeleverde versie).

## 3. Werkgebieden (lokale SEO)

Rich hyperlocal pagina's klaar voor **alle 10 steden**: Eindhoven, Tilburg,
Breda, Nijmegen, Arnhem, 's-Hertogenbosch, Maastricht, Venlo, Sittard-Geleen,
Helmond.

Per werkgebied-pagina nog toe te voegen:

- [ ] **Google Maps embed + "Routebeschrijving"-knop** (nu alleen een tekst-tip als
      placeholder). Component bouwen met route Roermond → stad. **Blokker:** Google
      Cloud/host-account vereist creditcard voor Maps Embed API , later oppakken.
- [ ] **Lokale proof / E-E-A-T**: echte instellingen die we bemensen of
      geanonimiseerde klantverhalen per stad. Nu bewust geen verzonnen namen/quotes.
- [x] Unieke (lokale) afbeeldingen per stad i.p.v. de gedeelde `hero-team.jpg`
      (`public/images/werkgebieden/<stad>.png`).
- [ ] **LET OP , beeldrechten**: huidige stadsfoto's in
      `public/images/werkgebieden/` zijn waarschijnlijk auteursrechtelijk beschermd
      (van Google gehaald). Vóór livegang vervangen door licentievrije beelden
      (Unsplash/Pexels/Wikimedia CC0) of eigen foto's. `imageObject`/credit waar nodig.
- [x] Title tags omgezet naar BESTE-formule + keyword-eyebrow in H1-kicker.

## 4. Diensten , rich SEO-content

Alle 22 diensten hebben nu rich SEO-content (kern, sector, operationeel,
compliance). Kerndiensten afgerond:

- [x] Bemiddeling ZZP-zorgprofessionals
- [x] Tussenkomst ZZP-zorgprofessionals
- [x] Detachering zorgpersoneel
- [x] Onderaanneming zorgopdrachten
- [x] Werving & Selectie

## 5. Techniek & SEO

- [x] **`NEXT_PUBLIC_SITE_URL`** gezet via `.env.production` (zie ook `.env.example`).
      Fallback in code staat klaar via `lib/site-url.ts`.
- [x] `metadataBase` in `app/layout.tsx` gezet (gebruikt `NEXT_PUBLIC_SITE_URL`).
- [x] **Canonical URLs** toegevoegd op home, diensten(+detail), werkgebieden(+detail).
- [ ] `sitemap.ts` , `lastModified` staat hardcoded op `"2025-01-01"`. Eventueel
      dynamisch maken of bijwerken.
- [x] **Diensten-hubpagina** (`/diensten`) toegevoegd (zoals werkgebieden-hub),
      gelinkt vanuit header + footer, in sitemap + BreadcrumbList-schema.
- [x] **OG-/social share image**: dynamische, merk-eigen PNG via `next/og`
      (`app/opengraph-image.tsx` + `app/twitter-image.tsx`). Oude `og-image.svg`
      niet meer gebruikt (SVG werkt niet op social platforms).
- [x] **Stadsfoto's geoptimaliseerd**: PNG , WebP (~35-45% kleiner) in
      `public/images/werkgebieden/`. (Beeldrechten blijven nog open, zie sectie 3.)
- [x] **Schema `sameAs`**: Facebook, Instagram, LinkedIn en X ingevuld in
      `siteContact.socialProfiles` (`lib/site.ts`).
- [x] **WhatsApp chat-link** in footer + spoed-callout + zwevende mobiele knop
      (`WhatsAppFloatingButton`, site-wide via layout).
- [ ] **Schema `geo`**: exacte lat/long van kantoor Roermond verfijnen in
      `siteContact.geo` (nu bij benadering 51.1936, 5.9874).

- [x] **Reviews + schema**: Ilham, Yasmine, Sharon en Robin op homepage (gem. 4,5/5)
      + `AggregateRating`/`Review` in `LocalBusiness`-schema. Link naar Google reviews.

Schema dat nu actief is (JSON-LD via `lib/structured-data.ts`):
- Homepage: `Organization` + `LocalBusiness` (incl. geo, openingstijden,
  areaServed Limburg/Noord-Brabant) + `WebSite` + `FAQPage`
- Dienstpagina's: `Service` + `BreadcrumbList` + `FAQPage`
- Werkgebied-pagina's: `LocalBusiness` (incl. geo, image, openingstijden,
  areaServed) + `BreadcrumbList` + `FAQPage`

Openingstijden (Ma t/m vr 09:00-17:00, weekend gesloten) staan nu zowel
zichtbaar in de footer als in de `openingHoursSpecification` van de schema.

## 6. Content & media

- [ ] Echte teamfoto's / kantoorfoto Roermond.
- [ ] Telefoonnummer in CTA's koppelen aan klikbare `tel:`-link met het echte nummer.
- [ ] CONVOCORE chatbot: agent-ID en regio nog bevestigen voor productie.

---

> Tip: vink items af zodra ze klaar zijn en voeg nieuwe punten onderaan toe.

