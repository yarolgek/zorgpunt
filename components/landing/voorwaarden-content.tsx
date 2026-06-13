import { brand } from "@/lib/brand"

const h2 = "text-lg font-semibold text-foreground pt-4"
const h3 = "text-base font-semibold text-foreground pt-3"
const ul = "list-disc pl-5 space-y-1"

export function VoorwaardenContent() {
  return (
    <>
      <p>
        De algemene voorwaarden zijn van toepassing op alle dienstverlening van{" "}
        {brand.name}, te weten; het uitbesteden van zorgvragen, de bemiddeling,
        het uitzenden en het detacheren, bij het vervullen van zorgvragen door{" "}
        {brand.name} en de hiertoe gesloten overeenkomsten tussen {brand.name}{" "}
        en haar opdrachtgevers.
      </p>

      <h2 className={h2}>Artikel 1: Definities</h2>
      <p>1.1 {brand.name} is onderdeel van Interselection B.V.</p>
      <p>
        1.2 Opdrachtgever: De natuurlijke en/of rechtspersoon die zich door
        tussenkomst van {brand.name} voorziet van (tijdelijke) inzet
        Zorgprofessionals en/of zich bedient van het overnemen van zorgvragen
        door {brand.name}.
      </p>
      <p>
        1.3 Zorgvrager: De klant die zich, door tussenkomst van {brand.name} of
        Opdrachtgever, voorziet van (tijdelijke) inzet Zorgprofessionals voor
        haar zorgvraag.
      </p>
      <p>
        1.4 Opdracht: De mondelinge dan wel schriftelijke overeenkomst op grond
        waarvan {brand.name} de Opdrachtgever behulpzaam is bij het zoeken naar
        Zorgprofessionals die ofwel zelfstandig dan wel op grond van een
        arbeidsovereenkomst diensten verricht voor een opdrachtgever of een
        zorgvrager.
      </p>
      <p>
        1.5 Opdrachtnemer: Zorgprofessional, die door {brand.name} bij de
        opdrachtgever of zorgvrager wordt voorgesteld in het kader van
        bemiddeling, werving &amp; selectie, uitzenden, detacheren of het
        uitbesteden van zorgvragen.
      </p>
      <p>
        1.6 Overeenkomst van opdracht: De op schrift vastgelegde overeenkomst
        tot verlening van diensten.
      </p>
      <p>
        1.7 Diensten: De door {brand.name} ten behoeve van opdrachtgever te
        verrichten werkzaamheden gelegen op de volgende gebieden:
      </p>
      <ul className={ul}>
        <li>
          Als tussenpersoon werkzaam te zijn bij het tot stand brengen van een
          of meer overeenkomsten tussen de opdrachtgever en derden;
        </li>
        <li>
          Het selecteren van één of meer geschikt geachte kandidaten ten behoeve
          van directe indiensttreding bij de opdrachtgever en mondeling of
          schriftelijk introduceren van de kandidaten bij de opdrachtgever. Deze
          dienst wordt in de algemene voorwaarden aangeduid als &apos;werving en
          selectie&apos;. De uitvoerende persoon wordt aangeduid als
          &apos;recruiter&apos;.
        </li>
      </ul>

      <h2 className={h2}>Artikel 2: Toepasselijkheid</h2>
      <p>2.1 Alle opdrachten worden uitsluitend aanvaard door {brand.name}.</p>
      <p>
        2.2 Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten
        tussen de opdrachtgever en {brand.name}.
      </p>
      <p>
        2.3 Voor zover de opdrachtgever in zijn aanvaarding zou verwijzen naar
        andere algemene voorwaarden, wordt de toepasselijkheid daarvan
        uitdrukkelijk van de hand gewezen.
      </p>
      <p>
        2.4 Van deze algemene voorwaarden kan slechts schriftelijk worden
        afgeweken na instemming van {brand.name}.
      </p>
      <p>
        2.5 Indien enige bepaling van deze algemene voorwaarden nietig of
        vernietigd wordt verklaard dan zullen de overige bepalingen van deze
        algemene voorwaarden volledig van kracht blijven.
      </p>
      <p>
        2.6 {brand.name} behoudt zich het recht om de bepalingen van deze
        algemene voorwaarden eenzijdig te wijzigen. Na wijziging van deze
        algemene voorwaarden zal {brand.name} haar opdrachtgevers op de hoogte
        brengen.
      </p>
      <p>
        2.7 Indien onduidelijkheid bestaat omtrent de uitleg van één of
        meerdere bepalingen van deze algemene voorwaarden, dan dient de uitleg
        plaats te vinden &apos;naar de geest&apos; van deze bepalingen. Indien
        zich tussen partijen een situatie voordoet, die niet in deze algemene
        voorwaarden geregeld is, dan dient deze situatie te worden beoordeeld
        naar de geest van deze algemene voorwaarden.
      </p>

      <h2 className={h2}>
        Artikel 3: Vereiste documenten bij inschrijving van Zorgprofessional
        (opdrachten)
      </h2>
      <p>
        3.1 Om een samenwerking aan te gaan met {brand.name}, dient de
        Zorgprofessional minimaal de volgende documenten te overhandigen aan{" "}
        {brand.name}. Mogelijkerwijs door de veranderende regelgeving, toetsing,
        fiscaal kader, kan het zijn dat om meer documenten wordt gevraagd dan
        hieronder aangegeven.
      </p>
      <ul className={ul}>
        <li>
          Kopie diploma&apos;s van de beroepsopleidingen, die van toepassing
          zijn voor de uit te voeren werkzaamheden bij de opdrachtgevers.
        </li>
        <li>Geldige BIG-registratie (indien van toepassing);</li>
        <li>BSN-nummer;</li>
        <li>
          Indien van toepassing; Kopie officiële uittreksel Kamer van
          Koophandel;
        </li>
        <li>
          Indien van toepassing; Kopie polis van een lopende (beroeps-)
          aansprakelijkheidsverzekering. {brand.name} kan tevens bewijs vragen
          van een tijdige premiebetaling;
        </li>
        <li>
          Kopie Verklaring Omtrent Gedrag Natuurlijke Personen (VOG NP);
        </li>
        <li>
          Eventuele aanmelding KIWA-keurmerk Zorgprofessionals thuiszorg
          (individuele contractering) als zorgprofessional thuiszorg verleend;
        </li>
        <li>
          Indien van toepassing; Kopie inschrijvingsbewijs van de
          klachtenregeling volgens de WKKGZ. {brand.name} kan tevens bewijs
          vragen van een tijdige premiebetaling;
        </li>
        <li>Curriculum Vitae</li>
        <li>Vergewisverklaring</li>
        <li>Referenties</li>
        <li>Indien van toepassing; Registratie LRZA/WTZA</li>
        <li>Indien van toepassing; Kwaliteitssysteem</li>
        <li>Certificaten als BHV, Medicatie, Agressiehantering</li>
      </ul>

      <h2 className={h2}>Artikel 4: Uitvoering van de raamovereenkomst</h2>
      <p>
        4.1 {brand.name} selecteert voor het uitbesteden van zorgvragen en het
        vervullen van zorgvragen, zorgprofessionals op basis van aan{" "}
        {brand.name} bekende informatie over de criteria van opdrachtgever en
        zorgprofessional. {brand.name} zal daarbij de zorg van een goed
        opdrachtnemer in acht nemen en zich inspannen de overeengekomen
        diensten naar beste inzicht en vermogen te verrichten. Voor de
        werkzaamheden op het gebied van werving &amp; selectie heeft deze
        verplichting ook het karakter van een inspanningsverplichting omdat geen
        garantie gegeven wordt met betrekking tot het resultaat van de geleverde
        dienst.
      </p>
      <p>
        4.2 Van een succesvolle vervulling van werving &amp; selectieopdracht
        is sprake indien en zodra een door {brand.name} bij de opdrachtgever
        voorgestelde kandidaat aldaar in dienst treedt. Onder indiensttreding
        wordt bij werving &amp; selectieopdracht mede begrepen elke vergelijkbare
        vorm van feitelijke tewerkstelling van een door {brand.name}{" "}
        geïntroduceerde kandidaat al dan niet via een derde en al of niet bij
        een andere vestiging van opdrachtgever en/of bij een aan zijn
        organisatie gelieerde onderneming. Een succesvolle vervulling van de
        werving &amp; selectieopdracht wordt ook begrepen het geval dat een
        door {brand.name} aan de opdrachtgever voorgestelde kandidaat binnen 12
        (twaalf) maanden na die introductie – al dan niet na intrekking van de
        opdracht – in dienst treedt of anderszins, al dan niet via derden, op
        enigerlei wijze, in enigerlei functie, bij de opdrachtgever of een
        daaraan gelieerde onderneming werkzaam is. Tenzij opdrachtgever ter
        zake vooraf een uitdrukkelijk schriftelijk voorbehoud heeft gemaakt, is
        het honorarium eveneens verschuldigd indien de door {brand.name}{" "}
        geïntroduceerde kandidaat bekend mocht blijken te zijn.
      </p>
      <p>
        4.3 {brand.name} zal ervoor zorgdragen dat de overeenkomst wordt
        uitgevoerd door zorgprofessionals, die naar de mening van {brand.name}{" "}
        voldoende gekwalificeerd zijn.
      </p>
      <p>
        4.4 De opdrachtgever draagt er zorg voor dat alle gegevens, waarvan{" "}
        {brand.name} aangeeft dat deze noodzakelijk zijn of waarvan de
        opdrachtgever redelijkerwijs behoort te begrijpen dat deze noodzakelijk
        zijn voor het uitvoeren van de opdracht, deugdelijk, volledig en tijdig
        aan {brand.name} worden verstrekt. {brand.name} is niet aansprakelijk
        voor schade veroorzaakt door onvolledigheid van of gebrekkigheid en
        onjuistheid in de door of namens de opdrachtgever verstrekte
        informatie.
      </p>
      <p>
        4.5 Bij werving &amp; selectieopdracht is de opdrachtgever gehouden om
        binnen 14 (veertien) dagen na een daartoe gedaan verzoek aan{" "}
        {brand.name} de gegevens te verstrekken betreffende het bruto
        jaarsalaris en de startdatum van de geselecteerde kandidaat. Indien de
        opdrachtgever niet tijdig, onvoldoende of onjuiste gegevens verstrekt,
        is {brand.name} gerechtigd de hoogte van het bruto jaarsalaris en de
        startdatum te schatten en conform die schatting te factureren.
      </p>
      <p>
        4.6 Opdrachtgever vrijwaart {brand.name} voor eventuele aanspraken van
        derden, die in verband met de uitvoering van de overeenkomst schade
        lijden en welke aan opdrachtgever toerekenbaar is.
      </p>
      <p>
        4.7 Geheel of gedeeltelijke overdracht van de overeenkomst door
        opdrachtgever of enige daaruit voortvloeiende rechten of verplichtingen
        van opdrachtgever is slechts mogelijk na schriftelijke toestemming van{" "}
        {brand.name}.
      </p>
      <p>
        4.8 Een opdracht tot werving &amp; selectie eindigt in elk geval door
        succesvolle vervulling van de opdracht, door intrekking van de opdracht
        door {brand.name} of de opdrachtgever en – indien een termijn is
        afgesproken – door tijdsverloop. Het eindigen van een opdracht laat
        verplichtingen van de opdrachtgever jegens {brand.name} m.b.t. door{" "}
        {brand.name} bij opdrachtgever geïntroduceerde kandidaten onverlet.
      </p>
      <p>
        4.9 {brand.name} is niet aansprakelijk voor enige schade ten gevolge van
        onjuiste bemiddeling, tenzij het rechtstreekse gevolg is van opzet of
        bewuste roekeloosheid aan de zijde van {brand.name}.
      </p>
      <p>
        4.10 {brand.name} is niet gehouden tot enige vergoeding van schade
        indien:
      </p>
      <ul className={ul}>
        <li>
          A: De contacten tussen de opdrachtgever en {brand.name}, voorafgaande
          aan een mogelijke overeenkomst van opdracht, om welke reden dan ook
          niet leiden tot daadwerkelijke invulling van de aanvraag;
        </li>
        <li>
          B: {brand.name} een aanvraag van de opdrachtgever om een
          zorgprofessional te werk stellen, niet in behandeling neemt;
        </li>
        <li>
          C: {brand.name}, om welke reden dan ook, een zorgprofessional niet of
          niet langer conform de overeenkomst van opdracht kan aanbieden; en
        </li>
        <li>
          D: Indien de situatie zoals omschreven in lid 4.10 C. zich voordoet,
          houdt {brand.name} zich het recht voor en zal zich inspannen om een
          vervangende zorgprofessional te vinden.
        </li>
      </ul>
      <p>
        4.11 Opdrachtgever zal zich ten aanzien van de zorgprofessional bij de
        uitvoering van het werk gedragen als opdrachtgever en de
        zorgprofessional niet in behandeling nemen als een medewerker.
      </p>
      <p>
        4.12 Het is de opdrachtgever niet toegestaan de zorgprofessional,
        zonder voorafgaande schriftelijke toestemming van {brand.name} zelf, bij
        derden te bemiddelen, waaronder begrepen aan opdrachtgever gelieerde
        ondernemingen. Voor de gederfde inkomsten wordt de opdrachtgever
        aansprakelijk gesteld.
      </p>

      <h2 className={h2}>Artikel 5: Betaling</h2>
      <p>
        5.1 Voor de dienstverlening ontvangt {brand.name} een vergoeding wat
        afgesproken is per Opdrachtgever en is vastgelegd in de
        raamovereenkomst.
      </p>
      <p>
        5.2 Voor facturen van {brand.name} geldt een standaard betalingstermijn
        van 14 dagen, tenzij uitdrukkelijk schriftelijk anders is
        overeengekomen.
      </p>
      <p>
        5.3 Bij het uitblijven van de betalingen, is {brand.name} niet gehouden
        met de uitvoering van de overeenkomst en/of opdracht door te gaan,
        zonder dat zij daarmee op enigerlei wijze toerekenbaar te kort schiet.
      </p>
      <p>
        5.4 Indien de betaling van een factuur van {brand.name} niet binnen de
        betalingstermijn na factuurdatum is betaald, is de opdrachtgever vanaf
        dan zonder ingebrekestelling in verzuim en een rente verschuldigd over
        het openstaande bedrag van 2% per kalendermaand, een gedeelte van een
        maand wordt als gehele maand gerekend. Voorts behoudt {brand.name} zich
        het recht voor om bij overschrijding van de betalingstermijn haar
        verplichtingen uit de overeenkomst van opdracht op te schorten.
      </p>
      <p>
        5.5 De kosten van (buiten) gerechtelijke invorderingsmaatregelen
        bedragen tenminste 15% van het verschuldigde bedrag, met een minimum van
        € 150,00 en komen ten laste van de opdrachtgever.
      </p>
      <p>5.6 Uitsluitend betalingen aan {brand.name} werken bevrijdend.</p>
      <p>
        5.7 De door opdrachtgever gedane betalingen strekken in de eerste plaats
        in mindering van de kosten, vervolgens in mindering van de opengevallen
        rente en tenslotte in mindering van de hoofdsom en de lopende rente.
      </p>
      <p>
        5.8 Ten aanzien van de betalingsverplichtingen als bedoeld in dit
        artikel kan de opdrachtgever zich niet op enige korting, verrekening of
        opschorting beroepen.
      </p>

      <h2 className={h2}>Artikel 6: Tarieven</h2>
      <p>
        6.1 Alle door {brand.name} gehanteerde tarieven zijn exclusief,
        reiskosten, btw en overige kosten, tenzij uitdrukkelijk schriftelijk
        anders overeengekomen.
      </p>
      <p>
        6.2 Het tarief dat {brand.name} vaststelt, is onder andere gebaseerd op
        de informatie over de opdracht(en) die opdrachtgever heeft gegeven. Als
        er op enig moment wordt vastgesteld dat de zorgprofessional in
        werkelijkheid een opdracht uitvoert waar een hoger tarief bij hoort, dan
        zal {brand.name} het tarief corrigeren. De opdrachtgever is dit
        gecorrigeerde tarief vanaf het moment dat de werkzaamheden zijn
        aangepast aan {brand.name} verschuldigd.
      </p>
      <p>
        6.3 Het tarief kan per opdracht aangepast worden of per jaar met een
        inflatiecorrectie.
      </p>

      <h2 className={h2}>Artikel 7: Facturering</h2>
      <p>
        7.1 Facturering geschiedt op basis van de door de zorgprofessional
        ingediende factuur. Zorgprofessional zal eens in de maand de gewerkte
        uren ter controle toesturen naar {brand.name}, tenzij er schriftelijk
        anders is vastgesteld. De facturatie zal per maand plaats vinden.
      </p>
      <p>
        7.2 De hoeveelheid uren die per zorgprofessional in rekening worden
        gebracht, worden door {brand.name} vastgesteld aan de hand van mijnZPC,
        waar {brand.name} mee werkt.
      </p>

      <h2 className={h2}>Artikel 8: Software Mijn ZPC</h2>
      <p>
        {brand.name} werkt met een software genaamd Mijn ZPC. Zie bijlage 1
        voor de algemene Voorwaarden voor de serviceverlening van Mijn ZPC.
      </p>

      <h2 className={h2}>Artikel 9: Ziekmelding</h2>
      <p>
        9.1 Zorgprofessional zal uiterlijk een uur voordat de dienst begint de
        ziekmelding bekend maken aan {brand.name} en de desbetreffende
        opdrachtgever. Heeft de zorgprofessional een avond- of nachtdienst, dan
        zal de ziekmelding uiterlijk voor 10.00 uur in de ochtend zijn. Dit kan
        zowel via de mail, telefoon of sms.
      </p>
      <p>
        9.2 Bij onverwachte gebeurtenissen, zoals bij overmacht situaties,
        waardoor de zorgprofessional niet in staat is te werken zal de
        zorgprofessional zo snel mogelijk contact opnemen met {brand.name} en de
        opdrachtgever.
      </p>

      <h2 className={h2}>
        Artikel 10: Persoonsgegevens en geheimhouding
      </h2>
      <p>
        10.1 {brand.name} zal, ten aanzien van bedrijfs- en persoonsgegevens
        van de opdrachtgever en de zorgprofessional, discretie in acht nemen.
        Persoonsgegevens worden alleen verstrekt met toestemming van de
        zorgprofessional. Bedrijfsgegevens worden alleen verstrekt aan
        potentiële zorgprofessionals voor de onderhavige functie.
      </p>
      <p>
        10.2 Opdrachtgever zal alle persoonlijke gegevens van een
        zorgprofessional vertrouwelijk behandelen en zal in overeenstemming met
        de Wet Bescherming Persoonsgegevens (AVG) handelen.
      </p>
      <p>
        10.3 Opdrachtgever en {brand.name} staan ervoor in dat alle voor en na
        het aangaan van de overeenkomst en/of opdracht ontvangen informatie van
        vertrouwelijke aard geheim zal blijven, behoudens voor zover de wet
        vereist dat deze informatie zal worden prijsgegeven.
      </p>
      <p>
        10.4 {brand.name} beschermt de persoonsgegevens van de
        Zorgprofessionals (AVG) en heeft hiervoor een Privacy Statement
        geschreven.
      </p>
      <p>
        10.5 Indien {brand.name} persoonsgegevens verwerkt client gerelateerd,
        dan zal {brand.name} de NEN 7510 en de ISO 27001 nastreven.
      </p>

      <h2 className={h2}>
        Artikel 11: Aanbiedingen/ offertes/ uitbetalingen/ prijzen
      </h2>
      <p>
        11.1 Alle aanbiedingen, offertes en prijzen van {brand.name} waar ook
        gepubliceerd of hoe ook gedaan, zijn vrijblijvend tenzij uitdrukkelijk
        schriftelijk anders is overeengekomen.
      </p>

      <h2 className={h2}>Artikel 12: Overmacht</h2>
      <p>
        12.1 Onder overmacht wordt verstaan: elke van de wil van {brand.name}{" "}
        onafhankelijke omstandigheid, die nakoming van de opdracht door{" "}
        {brand.name} tijdelijk of blijvend verhindert en welke tekortkomingen in
        de nakoming niet aan {brand.name} kunnen worden toegerekend, daar zij
        niet te wijten zijn aan haar schuld, noch krachtens de wet, de
        overeenkomst of in het verkeer geldende opvattingen voor haar rekening
        komen.
      </p>
      <p>
        12.2 In het geval van overmacht zullen de verplichtingen van{" "}
        {brand.name} worden opgeschort, zolang de overmacht toestand voortduurt.
      </p>
      <p>
        12.3 In geval van overmacht heeft {brand.name} het recht de
        overeenkomst en/of opdracht alsnog binnen redelijke termijn uit te
        voeren ofwel- indien nakoming binnen een redelijk termijn niet mogelijk
        is – deze geheel of gedeeltelijk te ontbinden.
      </p>
      <p>
        12.4 De opdrachtgever dient in dat geval de door haar aan{" "}
        {brand.name} verschuldigde vergoedingen welke betrekking hebben op de
        periode vóór de overmacht toestand, aan {brand.name} te betalen.
      </p>

      <h2 className={h2}>
        Artikel 13: Voorwaarden, duur en beëindiging overeenkomst van Opdracht
      </h2>
      <p>
        13.1 De overeenkomst van opdracht wordt aangegaan voor een bepaalde
        tijd. Zorgprofessional accepteert een opdracht via het portaal, Mijn
        ZPC. Bij het accepteren van een opdracht gaat zorgprofessional akkoord
        met de (door het systeem automatisch gegenereerde) overeenkomst van
        opdracht (opgesteld namens opdrachtgever). Vooraf is de overeenkomst van
        opdracht inzichtelijk voor de zorgprofessional waarin voorwaarden,
        plichten, rechten en prijsafspraken staan vermeld.
      </p>
      <p>
        13.2 De overeenkomst van opdracht kan niet door {brand.name} en
        opdrachtgever tussentijds worden beëindigd, tenzij schriftelijk anders
        overeengekomen. Afrekening vindt plaats op basis van de bemiddelde uren
        en de gemaakte onkosten tot de dag waartegen is opgezegd.
      </p>
      <p>
        13.3 In het geval dat de opdrachtgever de overeenkomst van opdracht na
        het aangaan van de overeenkomst van opdracht maar voor de feitelijke
        tewerkstelling van de zorgprofessional opzegt, zal de opdrachtgever
        eventuele kosten die {brand.name} heeft gemaakt in het kader van de
        uitvoering van de overeenkomst van opdracht vergoeden.
      </p>
      <p>
        13.4 {brand.name} kan door de opdrachtgever nimmer aansprakelijk worden
        gesteld voor een beëindiging van de opdracht door de zorgprofessional,
        ook indien dit geschiedt zonder inachtneming van enige termijn.
      </p>
      <p>
        13.5 Annulering van een gegeven Werving- &amp; Selectieopdracht is
        mogelijk. Alle tot dan toe gemaakte kosten zullen in rekening worden
        gebracht naar de opdrachtgever. Het uurtarief van een {brand.name}{" "}
        consulent is € 50,00 per uur. Een Werving- &amp; selectieopdracht wordt
        als geannuleerd beschouwd:
      </p>
      <ul className={ul}>
        <li>
          A: Wanneer de opdrachtgever de opdracht intrekt binnen de afgesproken
          termijn;
        </li>
        <li>
          B: Wanneer de activiteiten tijdens de procedure door de opdrachtgever
          worden opgeschort voor een periode van zes weken of langer;
        </li>
        <li>
          C: Wanneer de opdrachtgever in de behandelde vacature voorziet door
          aanstelling van een niet door {brand.name} geselecteerde kandidaat,
          maar door zelf geworven kandidaat.
        </li>
      </ul>
      <p>
        13.6 Indien een uit een werving- &amp; selectieprocedure geresulteerde
        arbeidsovereenkomst voor de datum van indiensttreding door de
        opdrachtgever wordt geannuleerd of opgezegd, dient de volledige
        overeengekomen fee door opdrachtgever aan {brand.name} te worden
        voldaan.
      </p>
      <p>
        13.7 Voor het werven, selecteren en ter beschikking stellen van
        arbeidskrachten ofwel werving en selectie, uitzenden en detacheren heeft{" "}
        {brand.name} aanvullende algemene voorwaarden toegevoegd in bijlage 2.
      </p>

      <h2 className={h2}>Artikel 14: Wijziging van de overeenkomst</h2>
      <p>
        14.1 Indien tijdens de uitvoering van de overeenkomst blijkt dat de
        overeenkomst dient te worden gewijzigd naar omvang, tijdschema, inhoud,
        kosten of voorwaarden, dan zullen partijen tijdig en in onderling
        overleg de overeenkomst dienovereenkomstig aanpassen. Deze wijziging
        wordt geacht tot stand te zijn gekomen wanneer zowel {brand.name} als
        opdrachtgever deze wijziging schriftelijk hebben bevestigd.
      </p>

      <h2 className={h2}>
        Artikel 15: Onmiddellijke beëindiging van de overeenkomst van opdracht
      </h2>
      <p>
        15.1 {brand.name} is gerechtigd de overeenkomst van opdracht met
        onmiddellijke ingang te beëindigen, indien de opdrachtgever haar
        verplichtingen uit hoofde van de overeenkomst van opdracht en deze
        algemene voorwaarden niet nakomt, en, na daartoe schriftelijk in gebreke
        te zijn gesteld, haar verplichtingen niet alsnog binnen de door{" "}
        {brand.name} gestelde termijn heeft nagekomen.
      </p>
      <p>
        15.2 {brand.name} is bevoegd de overeenkomst van de opdracht met
        onmiddellijke ingang te beëindigen, zonder dat een ingebrekestelling
        nodig zal zijn, indien de opdrachtgever:
      </p>
      <ul className={ul}>
        <li>A: Surseance van betaling aanvraagt of indien deze haar wordt verleend;</li>
        <li>B: Onder curatele wordt gesteld;</li>
        <li>
          C: Haar eigen faillissement aanvraagt, een derde het faillissement
          aanvraagt dan wel in staat het faillissement wordt verklaard;
        </li>
        <li>
          D: Wordt ontbonden of geliquideerd of daartoe een aanvraag wordt
          ingediend;
        </li>
        <li>
          E: Op een aanmerkelijk deel van haar bezitting executoriaal beslag
          wordt gelegd dan wel conservatoir beslag en dit beslag niet binnen
          veertien (14) dagen na beslaglegging wordt opgeheven;
        </li>
      </ul>
      <p>
        15.3 In de lid 1 en 2 genoemde gevallen zijn alle vorderingen die{" "}
        {brand.name} op de opdrachtgever mocht hebben terstond volledig
        opeisbaar. De opdrachtgever is aansprakelijk voor alle schade, onder
        meer gederfde winst en gemaakte kosten, die {brand.name} ten gevolge van
        de beëindiging lijdt en zal lijden.
      </p>

      <h2 className={h2}>Artikel 16: Veiligheid en vrijwaring</h2>
      <p>
        16.1 De opdrachtgever vrijwaart {brand.name} tegen op deze bepalingen
        gebaseerde vorderingen of aanspraken van de professional op{" "}
        {brand.name}.
      </p>
      <p>
        16.2 Opdrachtgever zal aan de zorgprofessional voor aanvang van de
        werkzaamheden informatie verstrekken over de van de zorgprofessional
        verlangde beroepskwalificatie, alsmede een document bevattende de
        specifieke kenmerken van de uit te voeren opdracht.
      </p>
      <p>
        16.3 De zorgprofessional voert zijn taken uit overeenkomstig de opdracht,
        tenzij dit schriftelijk anders is vastgesteld.
      </p>

      <h2 className={h2}>Artikel 17: Aansprakelijkheid</h2>
      <p>
        17.1 {brand.name} spant zich bij het uitbesteden van zorgvragen en de
        bemiddeling bij het vervullen van zorgvragen in om een geschikte
        zorgprofessional te bemiddelen, doch versterkt geen enkele garantie met
        betrekking tot de geschiktheid van de zorgprofessional. {brand.name} is
        niet aansprakelijk voor eventuele schade die opdrachtgever in verband
        met de opdracht mocht lijden, ongeacht of deze wordt veroorzaakt door
        (achteraf gebleken) ongeschiktheid van de zorgprofessional of door
        andere factoren.
      </p>
      <p>
        17.2 {brand.name} is tegenover de opdrachtgever niet aansprakelijk voor
        schade en verliezen die zorgprofessional toebrengen aan de opdrachtgever
        of derden.
      </p>
      <p>
        17.3 Indien {brand.name} aansprakelijk mocht zijn voor enigerlei
        schade, dan is haar aansprakelijkheid beperkt tot maximaal eenmaal de
        factuurwaarde van de order, althans tot dat gedeelte van de order
        waarop de aansprakelijkheid betrekking heeft. De aansprakelijkheid is in
        ieder geval steeds beperkt tot het bedrag der uitkering van zijn
        verzekeraar in voorkomend geval. {brand.name} is uitsluitend
        aansprakelijk voor directe schade. Onder directe schade wordt
        uitsluitend verstaan de redelijke kosten ter vaststelling van de oorzaak
        en de omvang van de schade, voor zover de vaststelling betrekking heeft
        op schade in de zin van deze voorwaarden, de eventuele redelijke kosten
        gemaakt om de gebrekkige prestatie van {brand.name} aan de
        overeenkomst te laten beantwoorden, voor zoveel deze aan {brand.name}{" "}
        toegerekend kunnen worden en redelijke kosten, gemaakt ter voorkoming of
        beperking van schade, voor zover de Opdrachtgever aantoont dat deze
        kosten hebben geleid tot beperking van directe schade als bedoeld in
        deze algemene voorwaarden. {brand.name} is nimmer aansprakelijk voor
        indirecte schade, daaronder begrepen gevolgschade, gederfde winst,
        gemiste besparingen en schade door bedrijfsstagnatie.
      </p>
      <p>
        17.4 De in dit artikel opgenomen beperkingen van de aansprakelijkheid
        gelden niet indien de schade te wijten is aan opzet of grove schuld van
        Opdrachtnemer of zijn leidinggevende ondergeschikten.
      </p>
      <p>
        17.5 Opdrachtgever vrijwaart {brand.name} tegen eventuele aanspraken van
        derden in verband met de opdracht.
      </p>
      <p>
        17.6 Aansprakelijkheid van {brand.name} voor indirecte schade,
        daaronder begrepen gevolgschade, gederfde winst, gemiste besparingen en
        schade door bedrijfstagnatie, is in alle gevallen uitgesloten.
      </p>

      <h2 className={h2}>Artikel 18: Overnemen bemiddelde zorgprofessional</h2>
      <p>
        18.1 Het is de opdrachtgever en aan opdrachtgever gelieerde
        vennootschappen niet toegestaan na schriftelijke aanbieding van een
        kandidaat door {brand.name} rechtstreeks voor zich, middels en/ of voor
        derden, een relatie of overeenkomst van welke aard dan ook met de
        zorgprofessional aan te gaan, behoudens voor afgaande schriftelijke
        toestemming van {brand.name}.
      </p>
      <p>
        18.2 Het is de opdrachtgever, en aan de opdrachtgever gelieerde
        vennootschappen, tijdens een overeenkomst van opdracht en na afloop van
        de overeenkomst van opdracht niet toegestaan met de zorgprofessional
        bemiddeld door {brand.name} rechtstreeks voor zich, middels en/of voor
        derden een relatie van opdracht van welke aard dan ook aan te gaan,
        behoudens voorafgaande schriftelijke toestemming van {brand.name}.
      </p>
      <p>
        18.3 {brand.name} is gerechtigd om aan de in lid 1 en 2 bedoelde
        toestemming voorwaarden te verbinden.
      </p>

      <h2 className={h2}>Artikel 19: Adresbestanden</h2>
      <p>
        {brand.name} maakt gebruik van diverse (sociaal) media om (potentiële)
        opdrachtgevers te informeren. Door aanvaarding van deze algemene
        voorwaarden geeft opdrachtgever toestemming tot opname in de e-mail- en
        adressenbestanden van {brand.name}. Zij zal de bestanden vertrouwelijk
        behandelen en niet aan derden overdragen.
      </p>

      <h2 className={h2}>Artikel 20: Boetebeding</h2>
      <p>
        20.1 Indien de opdrachtgever het in de artikelen 17.1 en 17.2 bepaalde
        overtreedt en/ of niet nakomt, verbeurt hij aan {brand.name} een direct
        opeisbare boete ten bedrage van €10.000,00 voor iedere overtreding,
        alsmede een bedrag van €1.000,00 voor iedere dag – ongeacht of hierop
        gebruikelijk wordt gewerkt of niet – dat de overtreding/ niet nakoming
        voortduurt.
      </p>
      <p>
        20.2 De boete laat onverhinderd het recht van {brand.name} volledige
        schadevergoeding te vorderen.
      </p>

      <h2 className={h2}>Artikel 21: Uitschrijving zorgprofessional</h2>
      <p>
        21.1 Zorgprofessional kan schriftelijk opzeggen door middel van een
        aangetekende brief gericht aan {brand.name}, gevestigd op de
        Zwartbroekpoort 2, 6041 LS Roermond.
      </p>
      <p>21.2 De opzegtermijn bedraagt 14 werkdagen.</p>
      <p>
        21.3 De Zorgprofessional is verplicht zijn afgesproken diensten of
        opdracht te komen werken. Bij het niet-vervullen van deze diensten of
        opdracht zal {brand.name}, de daaraan verbonden kosten in rekening
        brengen aan de Zorgprofessional.
      </p>
      <p>
        21.4 De opdracht eindigt per direct door opzegging van de overeenkomst
        van opdracht op het moment dat de Zorgprofessional niet aan zijn
        verplichtingen jegens {brand.name} dan wel de opdrachtgever (kan)
        voldoen en derhalve in verzuim is of indien de relatie met de
        opdrachtgever zodanig is verstoord, dat voorzetting in alle redelijkheid
        niet van {brand.name} kan worden gevergd.
      </p>
      <p>
        21.5 Opzegging door {brand.name} van de met Zorgprofessional gesloten
        overeenkomst - al dan niet als gevolg van beëindiging van een opdracht
        door de Opdrachtgever -, lijdt nimmer tot enige aansprakelijkheid van{" "}
        {brand.name} dan wel haar opdrachtgevers jegens de Zorgprofessionals.
      </p>

      <h2 className={h2}>Artikel 22: Auteurs- &amp; Eigendomsrecht</h2>
      <p>
        22.1 Van alle bescheiden waarvan {brand.name} zich bij de uitvoering van
        haar werkzaamheden bedient, berust het auteursrecht bij {brand.name}.
      </p>
      <p>
        22.2 De in artikel 3.1 bedoelde bescheiden - voor zover betrekking
        hebbend op werving- en selectieprocedures - zijn eigendom van{" "}
        {brand.name}.
      </p>
      <p>
        22.3 Mede ter bescherming van de privacy van kandidaten/sollicitanten is{" "}
        {brand.name} nimmer gehouden tot afgifte van deze bescheiden of kopieën
        daarvan aan opdrachtgever.
      </p>

      <h2 className={h2}>
        Artikel 23: Vindplaats algemene voorwaarden en geschillen
      </h2>
      <p>
        23.1 Op alle overeenkomsten en/of opdrachten tussen de opdrachtgevers
        en {brand.name} is Nederlands recht van toepassing.
      </p>
      <p>
        23.2 Alle geschillen, verband houdende met overeenkomsten en/ of
        opdrachten tussen de opdrachtgever en {brand.name}, waarop deze
        voorwaarden van toepassing zijn, worden beslecht door de rechter in
        Roermond omdat {brand.name} is gevestigd in Venray. Partijen zullen pas
        een beroep op de rechter doen nadat zij zich hebben ingespannen een
        geschil in onderling overleg te beslechten.
      </p>
      <p>
        23.3 Deze voorwaarden zijn te vinden op de website van {brand.name}. Van
        toepassing is steeds de laatst gedeponeerde versie c.q. de versie zoals
        die gold ten tijde van de totstandkoming van de rechtsbetrekking met
        Opdrachtgever.
      </p>
    </>
  )
}
