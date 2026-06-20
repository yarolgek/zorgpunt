export type ServiceCategoryId =
  | "core-staffing"
  | "sector-specific"
  | "operational-support"
  | "compliance-quality"

export interface ServiceCategory {
  id: ServiceCategoryId
  label: string
}

export interface Service {
  slug: string
  title: string
  category: ServiceCategoryId
  metaDescription: string
  intro: string
  paragraphs: string[]
  benefits: string[]
  audience: string
}

export const serviceCategories: ServiceCategory[] = [
  { id: "core-staffing", label: "Kern diensten personeel" },
  { id: "sector-specific", label: "Sector-specifieke diensten" },
  { id: "operational-support", label: "Operationele & ondersteunende diensten" },
  { id: "compliance-quality", label: "Compliance & kwaliteitsdiensten" },
]

export const services: Service[] = [
  {
    slug: "bemiddeling-zzp-zorgprofessionals",
    title: "Bemiddeling ZZP-zorgprofessionals",
    category: "core-staffing",
    metaDescription:
      "ZorgpuntConnect bemiddelt gekwalificeerde ZZP-zorgprofessionals voor zorgorganisaties in heel Nederland. Snel, persoonlijk en betrouwbaar.",
    intro:
      "Wij brengen zorgorganisaties en zelfstandige zorgprofessionals samen, zodat u snel de juiste kracht op de juiste plek heeft.",
    paragraphs: [
      "Via onze bemiddeling vindt u ZZP'ers met de juiste diploma's, registraties en ervaring voor uw afdeling of instelling. Wij screenen kandidaten, stemmen verwachtingen af en begeleiden het traject van eerste contact tot start op de werkvloer.",
      "Voor zorgprofessionals betekent bemiddeling via ZorgpuntConnect toegang tot opdrachten die passen bij hun specialisme, beschikbaarheid en gewenste regio.",
    ],
    benefits: [
      "Snelle invulling van personeelstekorten",
      "Gescreende en gekwalificeerde ZZP'ers",
      "Persoonlijke begeleiding door Lieke en het team",
      "Flexibel inzetbaar per opdracht of periode",
    ],
    audience:
      "Zorgorganisaties, instellingen en afdelingen die tijdelijk of structureel ZZP-zorgprofessionals zoeken, en zelfstandige zorgverleners die opdrachten zoeken.",
  },
  {
    slug: "tussenkomst-zzp-zorgprofessionals",
    title: "Tussenkomst ZZP-zorgprofessionals",
    category: "core-staffing",
    metaDescription:
      "Tussenkomst van ZZP-zorgprofessionals via ZorgpuntConnect. Wij fungeren als betrouwbare schakel tussen opdrachtgever en zorgprofessional.",
    intro:
      "Bij tussenkomst treedt ZorgpuntConnect op als intermediair tussen uw organisatie en de zelfstandige zorgprofessional.",
    paragraphs: [
      "Deze vorm van samenwerking biedt zekerheid voor beide partijen: u werkt met een professionele partner die contracten, planning en administratie coördineert, terwijl de zorgprofessional zelfstandig blijft werken.",
      "Tussenkomst is geschikt wanneer u de voordelen van ZZP-inzet wilt combineren met een gestructureerd bemiddelings- en administratief kader.",
    ],
    benefits: [
      "Duidelijke afspraken tussen alle partijen",
      "Administratieve en contractuele ondersteuning",
      "Beperking van risico's rondom inzet",
      "Snelle schakeling bij wisselingen",
    ],
    audience:
      "Opdrachtgevers die ZZP-zorgprofessionals willen inzetten met ondersteuning van een ervaren bemiddelaar.",
  },
  {
    slug: "detachering-zorgpersoneel",
    title: "Detachering zorgpersoneel",
    category: "core-staffing",
    metaDescription:
      "Detachering van zorgpersoneel via ZorgpuntConnect. Flexibele inzet van gekwalificeerde zorgprofessionals bij uw organisatie.",
    intro:
      "Met detachering stelt u zorgprofessionals tijdelijk in bij uw organisatie, terwijl ZorgpuntConnect het werkgeverschap of bemiddelingskader verzorgt.",
    paragraphs: [
      "Detachering is ideaal bij langere projecten, structurele personeelstekorten of wanneer u snel capaciteit wilt opbouwen zonder directe werving. Wij zorgen voor matching op vakgebied, beschikbaarheid en cultuur.",
      "U behoudt regie over de werkzaamheden op de werkvloer; wij ontzorgen bij selectie, contractering en waar nodig verlenging of vervanging.",
    ],
    benefits: [
      "Snelle opschaling van teams",
      "Matching op specialisme en regio",
      "Flexibele duur per opdracht",
      "Continuïteit bij uitval of verloop",
    ],
    audience:
      "Zorginstellingen en organisaties met tijdelijke of langdurige behoefte aan extra zorgpersoneel.",
  },
  {
    slug: "onderaanneming-zorgopdrachten",
    title: "Onderaanneming zorgopdrachten",
    category: "core-staffing",
    metaDescription:
      "Onderaanneming van zorgopdrachten en complete zorgteams via ZorgpuntConnect. Volledige uitvoering van zorgtaken door ons netwerk.",
    intro:
      "Bij onderaanneming neemt ZorgpuntConnect (een deel van) uw zorgopdracht over en levert complete teams of capaciteit voor de uitvoering.",
    paragraphs: [
      "Dit is geschikt wanneer u een zorgvraag integraal wilt uitbesteden: van personeelsplanning tot bezetting op de werkvloer. Wij combineren ons netwerk van zorgprofessionals met operationele regie.",
      "U houdt grip op kwaliteit en afspraken via heldere contracten en rapportage, terwijl wij de dagelijkse personeelsinzet verzorgen.",
    ],
    benefits: [
      "Volledige teams of complete bezetting",
      "Minder interne druk op planning en werving",
      "Schaalbaar bij piekbelasting",
      "Eén aanspreekpunt voor de opdracht",
    ],
    audience:
      "Opdrachtgevers met grotere of doorlopende zorgopdrachten die personeel en uitvoering willen uitbesteden.",
  },
  {
    slug: "werving-en-selectie",
    title: "Werving & Selectie",
    category: "core-staffing",
    metaDescription:
      "Werving en selectie van zorgprofessionals door ZorgpuntConnect. Vind de juiste kandidaat voor vaste of tijdelijke functies in de zorg.",
    intro:
      "Wij werven en selecteren zorgprofessionals voor directe indiensttreding of langdurige samenwerking bij uw organisatie.",
    paragraphs: [
      "Ons team kent de zorgmarkt en spreekt de taal van zowel opdrachtgevers als kandidaten. We zoeken gericht op opleiding, ervaring, beschikbaarheid en persoonlijke fit.",
      "Van vacature-intake tot introductie en opvolging: u krijgt een transparant proces met duidelijke verwachtingen over doorlooptijd en resultaat.",
    ],
    benefits: [
      "Gerichte search in ons zorgnetwerk",
      "Screening op diploma's en referenties",
      "Korte lijnen en persoonlijk contact",
      "Geschikt voor vaste en tijdelijke functies",
    ],
    audience:
      "Zorgorganisaties die structureel of incidenteel nieuwe medewerkers of specialisten zoeken.",
  },
  {
    slug: "ggz-personeel",
    title: "GGZ personeel",
    category: "sector-specific",
    metaDescription:
      "GGZ personeel via ZorgpuntConnect. Bemiddeling van gekwalificeerde professionals voor geestelijke gezondheidszorg.",
    intro:
      "Wij leveren en bemiddelen personeel voor de geestelijke gezondheidszorg (GGZ), van verpleegkundigen tot begeleiders en therapeuten.",
    paragraphs: [
      "GGZ-instellingen hebben behoefte aan professionals die niet alleen vakbekwaam zijn, maar ook kunnen werken in complexe en dynamische settingen. Ons netwerk omvat ervaren krachten in ambulante en klinische GGZ.",
      "Wij stemmen inzet af op uw populatie, setting en teamcultuur, zodat nieuwe collega's snel bijdragen aan continuïteit van zorg.",
    ],
    benefits: [
      "Specialisten met GGZ-ervaring",
      "Inzet in ambulant en klinisch",
      "Snelle vervanging bij acute behoefte",
      "Kennis van BIG en sectorregels",
    ],
    audience:
      "GGZ-instellingen, FACT-teams, ambulante praktijken en afdelingen met behoefte aan GGZ-personeel.",
  },
  {
    slug: "vvt-personeel",
    title: "VVT personeel",
    category: "sector-specific",
    metaDescription:
      "VVT personeel voor verpleeg- en verzorgende thuiszorg. ZorgpuntConnect bemiddelt professionals voor ouderenzorg en thuiszorg.",
    intro:
      "Voor verpleeg- en verzorgende thuiszorg (VVT) bemiddelen wij verpleegkundigen, verzorgenden en ondersteunend personeel.",
    paragraphs: [
      "Thuiszorg en ouderenzorg vragen om betrouwbare professionals die zelfstandig kunnen werken én goed samenwerken in wijkteams. Wij kennen de regionale vraag en beschikbaarheid.",
      "Of het nu gaat om tijdelijke ondersteuning of langere opdrachten: wij helpen u snel aan gekwalificeerde krachten voor uw cliëntenbestand.",
    ],
    benefits: [
      "Verpleegkundigen en verzorgenden IG",
      "Regionale dekking in Nederland",
      "Flexibel per wijk of team",
      "Continuïteit voor uw cliënten",
    ],
    audience:
      "Thuiszorgorganisaties, wijkteams en aanbieders van verpleeg- en verzorgende thuiszorg.",
  },
  {
    slug: "ghz-personeel",
    title: "GHZ personeel",
    category: "sector-specific",
    metaDescription:
      "GHZ personeel voor gehandicaptenzorg. ZorgpuntConnect levert begeleiders en zorgprofessionals voor de gehandicaptenzorg.",
    intro:
      "In de gehandicaptenzorg (GHZ) bemiddelen wij begeleiders, verzorgenden en andere zorgprofessionals die passen bij uw doelgroep en zorgconcept.",
    paragraphs: [
      "Professionals in de GHZ moeten vaak werken met maatwerk, gedragsondersteuning en multidisciplinaire teams. Wij selecteren op ervaring, attitude en relevante certificeringen.",
      "Van beschermd wonen tot dagbesteding en ambulante begeleiding: wij denken mee over de juiste match voor uw organisatie.",
    ],
    benefits: [
      "Ervaring met diverse doelgroepen",
      "Begeleiders en verzorgenden",
      "Afstemming op zorgconcept",
      "Vervanging bij ziekte of verlof",
    ],
    audience:
      "Aanbieders van gehandicaptenzorg, AWBZ/Wlz-instellingen en organisaties met GHZ-personeelsbehoefte.",
  },
  {
    slug: "zorgbeveiliging",
    title: "Zorgbeveiliging",
    category: "sector-specific",
    metaDescription:
      "Zorgbeveiliging via ZorgpuntConnect. Gekwalificeerd personeel voor veiligheid en beveiliging in zorginstellingen.",
    intro:
      "Zorgbeveiliging vraagt om professionals die de balans kennen tussen veiligheid, de-escalatie en respectvolle omgang met cliënten en medewerkers.",
    paragraphs: [
      "Wij bemiddelen personeel voor beveiligingstaken binnen zorginstellingen, GGZ-settingen en andere zorgomgevingen waar veiligheid extra aandacht vraagt.",
      "Onze aanpak combineert screening op ervaring met aandacht voor teamdynamiek en protocollen binnen uw organisatie.",
    ],
    benefits: [
      "Ervaring in zorgomgevingen",
      "Inzet bij piekdrukte of speciale situaties",
      "Afstemming op uw veiligheidsbeleid",
      "Snelle beschikbaarheid",
    ],
    audience:
      "Zorginstellingen en organisaties die beveiligingscapaciteit nodig hebben binnen de zorgcontext.",
  },
  {
    slug: "jeugdzorg-personeel",
    title: "Jeugdzorg personeel",
    category: "sector-specific",
    metaDescription:
      "Jeugdzorg personeel via ZorgpuntConnect. Bemiddeling van jeugdhulpverleners en begeleiders voor de jeugdzorg.",
    intro:
      "Voor de jeugdzorg leveren wij jeugdhulpverleners, begeleiders en andere professionals die werken met kinderen, jongeren en gezinnen.",
    paragraphs: [
      "Jeugdzorg vraagt om betrokken professionals met oog voor ontwikkeling, veiligheid en samenwerking met ouders en ketenpartners. Ons netwerk omvat ervaring in ambulante en residentiële jeugdzorg.",
      "Wij werken samen met partners in de sector om snel de juiste krachten te vinden voor uw teams en locaties.",
    ],
    benefits: [
      "Jeugdhulpverleners en begeleiders",
      "Ambulant en residentieel",
      "Kennis van jeugdwet en ketenpartners",
      "Flexibele inzet per regio",
    ],
    audience:
      "Jeugdzorgaanbieders, woonvoorzieningen en organisaties met personeelsbehoefte in de jeugdhulp.",
  },
  {
    slug: "sociaal-werk",
    title: "Sociaal Werk",
    category: "sector-specific",
    metaDescription:
      "Sociaal werk professionals via ZorgpuntConnect. Bemiddeling van maatschappelijk werkers en sociaal werkers in de zorg.",
    intro:
      "Sociaal werk is onmisbaar in veel zorgketens. Wij bemiddelen maatschappelijk werkers en sociaal werkers voor opdrachten bij zorgorganisaties en gemeenten.",
    paragraphs: [
      "Onze professionals ondersteunen cliënten en gezinnen bij participatie, regie en verbinding met voorzieningen. Wij matchen op setting, doelgroep en werkervaring.",
      "Of u nu tijdelijke versterking zoekt of structurele capaciteit: wij helpen u aan de juiste sociaal werker voor uw team.",
    ],
    benefits: [
      "Maatschappelijk en sociaal werkers",
      "Ervaring met diverse doelgroepen",
      "Samenwerking in multidisciplinaire teams",
      "Regionale inzet mogelijk",
    ],
    audience:
      "Gemeenten, zorgorganisaties en teams met behoefte aan sociaal werk-capaciteit.",
  },
  {
    slug: "roosterplanning-personeelsbezetting",
    title: "Roosterplanning en personeelsbezetting",
    category: "operational-support",
    metaDescription:
      "Roosterplanning en personeelsbezetting via ZorgpuntConnect en Mijn ZPC. Efficiënte planning van zorgteams.",
    intro:
      "Goede roosterplanning is de basis voor stabiele zorg. Wij ondersteunen opdrachtgevers en zorgprofessionals met tools en proces voor bezetting en planning.",
    paragraphs: [
      "Via ons platform en begeleiding helpen we bij het afstemmen van beschikbaarheid, diensten en bezetting. Zo vermindert u last-minute gaten in het rooster.",
      "Onze aanpak sluit aan op de praktijk van zorgteams: heldere communicatie, inzicht in beschikbaarheid en snelle bijsturing bij wijzigingen.",
    ],
    benefits: [
      "Overzicht in beschikbaarheid en diensten",
      "Minder onverwachte gaten in het rooster",
      "Integratie met Mijn ZPC",
      "Ondersteuning bij piekperiodes",
    ],
    audience:
      "Zorgorganisaties en teamleiders die hun planning en bezetting willen verbeteren.",
  },
  {
    slug: "documentbeheer-verificatie-zorgprofessionals",
    title: "Documentbeheer en verificatie zorgprofessionals",
    category: "operational-support",
    metaDescription:
      "Documentbeheer en verificatie van zorgprofessionals. ZorgpuntConnect bewaakt diploma's, VOG en registraties.",
    intro:
      "Zorgprofessionals moeten voldoen aan strenge eisen rond diploma's, registraties en verklaringen. Wij beheren en verifiëren deze documenten centraal.",
    paragraphs: [
      "Van BIG-registratie tot VOG en beroepsaansprakelijkheidsverzekering: wij zorgen dat documentatie actueel is voordat iemand wordt ingezet. Dat geeft u als opdrachtgever zekerheid.",
      "Zorgprofessionals uploaden en onderhouden hun dossier via ons platform; wij signaleren wanneer verlenging of aanvulling nodig is.",
    ],
    benefits: [
      "Centraal en actueel dossier per professional",
      "Controle vóór start van opdracht",
      "Minder administratieve last voor opdrachtgevers",
      "Signaal bij verlopende documenten",
    ],
    audience:
      "Opdrachtgevers die zeker willen zijn van geldige en complete documentatie van ingezette zorgprofessionals.",
  },
  {
    slug: "geautomatiseerde-facturatie-selfbilling",
    title: "Geautomatiseerde facturatie en selfbilling",
    category: "operational-support",
    metaDescription:
      "Geautomatiseerde facturatie en selfbilling voor zorgopdrachten via ZorgpuntConnect en Mijn ZPC.",
    intro:
      "Facturatie hoort voorspelbaar en foutloos te zijn. Wij automatiseren het facturatieproces tussen opdrachtgever, zorgprofessional en ZorgpuntConnect.",
    paragraphs: [
      "Via selfbilling en gekoppelde urenregistratie worden facturen gegenereerd op basis van goedgekeurde uren en afspraken. Dat bespaart tijd en vermindert discussie achteraf.",
      "Opdrachtgevers en professionals houden inzicht in status en historie via het portaal.",
    ],
    benefits: [
      "Automatische factuurvorming",
      "Koppeling met urenregistratie",
      "Minder handmatig werk",
      "Transparantie voor alle partijen",
    ],
    audience:
      "Opdrachtgevers en zorgprofessionals die hun administratie willen vereenvoudigen.",
  },
  {
    slug: "zpc-online-portaal-opdrachtgevers",
    title: "ZPC Online portaal toegang voor opdrachtgevers",
    category: "operational-support",
    metaDescription:
      "ZPC Online portaal voor opdrachtgevers. Beheer opdrachten, planning en communicatie via Mijn ZPC.",
    intro:
      "Als opdrachtgever krijgt u toegang tot het ZPC Online portaal (Mijn ZPC) voor het beheer van opdrachten, professionals en communicatie.",
    paragraphs: [
      "In het portaal ziet u lopende en openstaande opdrachten, beschikbare professionals en relevante documentatie. U communiceert rechtstreeks met het team en met ingezette krachten waar nodig.",
      "Het portaal is ontworpen voor de dagelijkse praktijk van zorgorganisaties: overzichtelijk, veilig en altijd bereikbaar.",
    ],
    benefits: [
      "Centraal overzicht van opdrachten",
      "Toegang tot beschikbare professionals",
      "Veilige communicatie en documenten",
      "24/7 online beschikbaar",
    ],
    audience:
      "Opdrachtgevers die digitaal willen samenwerken met ZorgpuntConnect en ingezette zorgprofessionals.",
  },
  {
    slug: "api-koppelingen-zorgsystemen",
    title: "API-koppelingen met zorgsystemen",
    category: "operational-support",
    metaDescription:
      "API-koppelingen tussen ZorgpuntConnect en uw zorgsystemen. Integratie van planning, uren en personeelsdata.",
    intro:
      "Wij koppelen ons platform waar mogelijk aan bestaande zorgsystemen via API's, zodat data niet dubbel hoeft te worden ingevoerd.",
    paragraphs: [
      "Integraties kunnen betrekking hebben op planning, urenregistratie, HR-systemen of rapportage. Samen met uw IT of leverancier bepalen we wat haalbaar en veilig is.",
      "Minder handwerk betekent minder fouten en meer tijd voor zorg en leiding.",
    ],
    benefits: [
      "Minder dubbele invoer",
      "Betrouwbare data-uitwisseling",
      "Afstemming met uw IT-omgeving",
      "Schaalbaar bij groei",
    ],
    audience:
      "Grotere zorgorganisaties en opdrachtgevers met behoefte aan systeemintegratie.",
  },
  {
    slug: "rapportage-analyse-personeelsinzet",
    title: "Rapportage en analyse personeelsinzet",
    category: "operational-support",
    metaDescription:
      "Rapportage en analyse van personeelsinzet via ZorgpuntConnect. Inzicht in uren, kosten en bezetting.",
    intro:
      "Inzicht in personeelsinzet helpt bij sturen op kwaliteit en kosten. Wij bieden rapportages en analyses op basis van werkelijke uren en opdrachten.",
    paragraphs: [
      "U ziet waar capaciteit wordt ingezet, welke trends spelen en waar bijsturing nodig is. Rapportages sluiten aan op afspraken in uw contract en privacywetgeving.",
      "Geschikt voor teamleiders, planners en management die datagedreven willen werken.",
    ],
    benefits: [
      "Inzicht in uren en bezetting",
      "Ondersteuning bij budget en planning",
      "Periodieke of op-verzoek rapportages",
      "AVG-conforme verwerking",
    ],
    audience:
      "Opdrachtgevers die rapportage en analyse willen koppelen aan hun personeelsinzet via ZorgpuntConnect.",
  },
  {
    slug: "wet-dba-conforme-plaatsingen",
    title: "Wet DBA-conforme plaatsingen",
    category: "compliance-quality",
    metaDescription:
      "Wet DBA-conforme plaatsingen van zorgprofessionals. ZorgpuntConnect let op arbeidsrelatie en contractvorm.",
    intro:
      "De Wet DBA (Deregulering Beoordeling Arbeidsrelaties) stelt eisen aan de inzet van zelfstandigen. Wij begeleiden plaatsingen conform geldende regels en best practices.",
    paragraphs: [
      "Wij adviseren over passende contractvormen, tussenkomst en documentatie zodat opdrachtgever en zorgprofessional duidelijkheid hebben over hun relatie.",
      "Onze processen zijn ingericht om risico's rond schijnzelfstandigheid te beperken en afspraken aantoonbaar te maken.",
    ],
    benefits: [
      "Advies over contractvorm en inzet",
      "Documentatie en procesondersteuning",
      "Aansluiting op actuele wet- en regelgeving",
      "Minder onzekerheid voor beide partijen",
    ],
    audience:
      "Opdrachtgevers en ZZP'ers die DBA-conform willen samenwerken in de zorg.",
  },
  {
    slug: "sna-nen-4400-1-gecertificeerde-bemiddeling",
    title: "SNA NEN 4400-1 gecertificeerde bemiddeling",
    category: "compliance-quality",
    metaDescription:
      "SNA NEN 4400-1 gecertificeerde bemiddeling door ZorgpuntConnect. Betrouwbare en gecontroleerde personeelsbemiddeling.",
    intro:
      "ZorgpuntConnect werkt volgens de eisen van SNA NEN 4400-1, de norm voor betrouwbare bemiddeling en inlenersaansprakelijkheid.",
    paragraphs: [
      "Certificering onder deze norm geeft opdrachtgevers zekerheid over financiële integriteit, procesbeheersing en naleving van wet- en regelgeving rond inlenen en bemiddelen.",
      "Wij onderhouden onze certificering en laten periodiek toetsen uitvoeren door een onafhankelijke instelling.",
    ],
    benefits: [
      "Erkende kwaliteitsnorm",
      "Minder risico op inlenersaansprakelijkheid",
      "Transparante bedrijfsvoering",
      "Vertrouwen bij opdrachtgevers en professionals",
    ],
    audience:
      "Opdrachtgevers die bewust kiezen voor een gecertificeerde bemiddelaar in de zorg.",
  },
  {
    slug: "nbbu-gecertificeerde-uitzendbureau-diensten",
    title: "NBBU-gecertificeerde uitzendbureau diensten",
    category: "compliance-quality",
    metaDescription:
      "NBBU-gecertificeerde uitzendbureau diensten van ZorgpuntConnect. Uitzenden en detacheren volgens branchenormen.",
    intro:
      "Als NBBU-aangesloten organisatie bieden wij uitzend- en detacheringdiensten volgens de algemene voorwaarden en kwaliteitsstandaarden van de branche.",
    paragraphs: [
      "De NBBU-kaders borgen rechten van uitzendkrachten, duidelijke afspraken met opdrachtgevers en eerlijke arbeidsvoorwaarden. Wij passen deze standaarden toe in onze zorgbemiddeling.",
      "Opdrachtgevers profiteren van een bewezen model voor flexibele personeelsinzet in een gereguleerde sector.",
    ],
    benefits: [
      "Branche-erkenning en kaders",
      "Duidelijke arbeidsvoorwaarden",
      "Aansluiting op CAO Uitzendkrachten",
      "Betrouwbare partner voor flexibele inzet",
    ],
    audience:
      "Opdrachtgevers die uitzenden of detacheren via een NBBU-gecertificeerde partij zoeken.",
  },
  {
    slug: "kwaliteitscontrole-screening-zorgprofessionals",
    title: "Kwaliteitscontrole en screening zorgprofessionals",
    category: "compliance-quality",
    metaDescription:
      "Kwaliteitscontrole en screening van zorgprofessionals door ZorgpuntConnect. Veiligheid en vakbekwaamheid voorop.",
    intro:
      "Kwaliteit begint bij de juiste professional. Wij screenen zorgprofessionals op diploma's, ervaring, referenties en documentatie voordat zij worden voorgesteld.",
    paragraphs: [
      "Ons screeningproces omvat onder meer identiteitscontrole, VOG, BIG waar van toepassing, en verificatie van werkervaring. Periodiek herbeoordelen we of dossiers actueel blijven.",
      "Opdrachtgevers ontvangen alleen kandidaten die aan de afgesproken criteria voldoen.",
    ],
    benefits: [
      "Meerdere stappen screening",
      "Actueel kwaliteitsdossier",
      "Minder risico op ongeschikte inzet",
      "Transparante criteria",
    ],
    audience:
      "Alle opdrachtgevers die veilige en vakbekwame zorgprofessionals willen inzetten.",
  },
  {
    slug: "klachtenafhandeling-klachtenportaal-zorg",
    title: "Klachtenafhandeling via Klachtenportaal Zorg",
    category: "compliance-quality",
    metaDescription:
      "Klachtenafhandeling via het officiële Klachtenportaal Zorg. ZorgpuntConnect werkt conform sectorafspraken.",
    intro:
      "Klachten verdienen een zorgvuldige en transparante afhandeling. Wij sluiten aan bij het Klachtenportaal Zorg en sectorafspraken voor klachtenregistratie en -behandeling.",
    paragraphs: [
      "Professionals en opdrachtgevers weten waar ze terechtkunnen bij ontevredenheid. Wij documenteren, volgen op en leren van meldingen om onze dienstverlening te verbeteren.",
      "Deze aanpak past bij onze focus op kwaliteit, veiligheid en vertrouwen in de zorgketen.",
    ],
    benefits: [
      "Aansluiting op Klachtenportaal Zorg",
      "Transparant klachtenproces",
      "Verbetering van dienstverlening",
      "Vertrouwen voor cliënten en partners",
    ],
    audience:
      "Opdrachtgevers en zorgprofessionals die waarde hechten aan formele en eerlijke klachtenafhandeling.",
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getServicesByCategory(
  categoryId: ServiceCategoryId
): Service[] {
  return services.filter((s) => s.category === categoryId)
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}
