// Elke zegswijze heeft: tekst, betekenis, oorsprong.
// De oorsprong is telkens de meest gangbare verklaring die in omloop is —
// bij veel zegswijzen bestaat discussie of onzekerheid over de echte herkomst.
const ZEGSWIJZEN = [
  {
    tekst: "Iemand een rad voor ogen draaien",
    betekenis: "Iemand misleiden, de werkelijkheid verhullen.",
    oorsprong: "Verwijst naar een wiel dat zo snel ronddraait dat je de spaken niet meer onderscheidt — het zicht wordt erdoor vertroebeld."
  },
  {
    tekst: "De draak steken met iets",
    betekenis: "Iets belachelijk maken, ermee spotten.",
    oorsprong: "Middeleeuwse volksfeesten kenden een namaakdraak die bespot en symbolisch verslagen werd, als overwinning op het kwaad."
  },
  {
    tekst: "Iets door de vingers zien",
    betekenis: "Een fout vergeven, er niet te streng op reageren.",
    oorsprong: "Beeld van iemand die zijn hand voor de ogen houdt maar tussen de vingers door toch stiekem kijkt, alsof hij niet goed oplet."
  },
  {
    tekst: "Met de gebakken peren zitten",
    betekenis: "Opgezadeld zitten met de nadelige gevolgen van iets.",
    oorsprong: "Vermoedelijk terug te voeren op een verhaal waarin iemand oneerlijk het mindere deel — de al gebakken, minder verse peren — toebedeeld krijgt."
  },
  {
    tekst: "Iemand bij de neus nemen",
    betekenis: "Iemand voor de gek houden.",
    oorsprong: "Verwijst naar dieren die vroeger met een ring of touw door de neus werden geleid en zo overal naartoe gestuurd konden worden."
  },
  {
    tekst: "De plaat poetsen",
    betekenis: "Er stiekem vandoor gaan.",
    oorsprong: "Vermoedelijk uit het Bargoens (dieventaal), waar 'plaat' de voetzool aanduidde en 'poetsen' snel wegglippen betekende."
  },
  {
    tekst: "Iemand op zijn nummer zetten",
    betekenis: "Iemand terechtwijzen, op zijn plaats zetten.",
    oorsprong: "Onduidelijke herkomst; mogelijk een verwijzing naar het toewijzen van een rang of plek in een hiërarchie."
  },
  {
    tekst: "Voor Piet Snot spelen",
    betekenis: "Een onbeduidende, weinig serieuze rol vervullen.",
    oorsprong: "'Piet Snot' was een theaterpersonage dat weinig indruk maakte en vooral voor de grap fungeerde."
  },
  {
    tekst: "Op grote voet leven",
    betekenis: "Luxueus leven, boven zijn stand.",
    oorsprong: "In de middeleeuwse mode gold de lengte van de schoenpunt als teken van rijkdom en status."
  },
  {
    tekst: "Iets uit de losse pols doen",
    betekenis: "Iets moeiteloos en zonder veel voorbereiding doen.",
    oorsprong: "Verwijst naar tekenen of schrijven zonder de hand op tafel te steunen, enkel losjes bewegend vanuit de pols."
  },
  {
    tekst: "Iemand de kastanjes uit het vuur laten halen",
    betekenis: "Iemand het gevaarlijke werk laten doen terwijl een ander profiteert.",
    oorsprong: "Gebaseerd op de fabel van de aap die de kat gebruikt om kastanjes uit het vuur te halen, waarna de aap zelf de buit opeet."
  },
  {
    tekst: "Het achterste van zijn tong laten zien",
    betekenis: "Eindelijk je ware bedoelingen onthullen.",
    oorsprong: "Beeld van iemand die tot dan toe voorzichtig sprak en nu pas alles zegt wat hij werkelijk denkt."
  },
  {
    tekst: "De koe bij de horens vatten",
    betekenis: "Een probleem direct en vastberaden aanpakken.",
    oorsprong: "Verwijst naar het letterlijk vastpakken van een koe bij de horens om haar onder controle te krijgen, in plaats van eromheen te lopen."
  },
  {
    tekst: "Iets in de doofpot stoppen",
    betekenis: "Iets bewust verzwijgen.",
    oorsprong: "Een doofpot was een pot waarin gloeiende kooltjes gedoofd werden door hem af te sluiten — de zaak werd zo onzichtbaar gemaakt."
  },
  {
    tekst: "Voor galg en rad opgroeien",
    betekenis: "Een verwaarloosde opvoeding hebben die richting een slecht levenseinde lijkt te gaan.",
    oorsprong: "Galg en rad waren middeleeuwse werktuigen voor de doodstraf; wie 'ervoor opgroeide' leek voorbestemd voor zo'n einde."
  },
  {
    tekst: "Iets op de lange baan schuiven",
    betekenis: "Iets uitstellen.",
    oorsprong: "De 'lange baan' was een kist op de griffie waarin minder dringende rechtszaken werden bewaard, tegenover de korte baan voor spoedzaken."
  },
  {
    tekst: "Uit de school klappen",
    betekenis: "Geheimen doorvertellen die niet voor buitenstaanders bedoeld waren.",
    oorsprong: "Leerlingen die na schooltijd alsnog dingen doorvertelden die binnen de schoolmuren waren gezegd."
  },
  {
    tekst: "Het hoge woord eruit hebben",
    betekenis: "Eindelijk zeggen wat je al langer probeerde te vermijden.",
    oorsprong: "'Het hoge woord' verwijst naar iets dat moeilijk over de lippen komt vanwege het gewicht dat eraan hangt."
  },
  {
    tekst: "Iemand aan het lijntje houden",
    betekenis: "Iemand laten wachten zonder duidelijkheid te geven.",
    oorsprong: "Beeld van een vis die aan de hengellijn wordt gehouden: nog niet binnengehaald, maar ook niet losgelaten."
  },
  {
    tekst: "De hort op gaan",
    betekenis: "Erop uit trekken, plezier gaan maken.",
    oorsprong: "'Hort' verwees vroeger naar een weiland of buitengebied waar jongeren gingen rondtrekken."
  },
  {
    tekst: "Zich als een kat in het nauw gedreven voelen",
    betekenis: "Je wanhopig en klem voelen zitten.",
    oorsprong: "Een kat die in het nauw wordt gedreven, verdedigt zich fel en onvoorspelbaar uit pure noodzaak."
  },
  {
    tekst: "Iemand een hak zetten",
    betekenis: "Iemand dwarsbomen of benadelen.",
    oorsprong: "Uit het schermen of worstelen, waarbij een 'hak' (beentje) werd gebruikt om een tegenstander te doen struikelen."
  },
  {
    tekst: "Iets voor zoete koek slikken",
    betekenis: "Iets zonder kritische blik geloven.",
    oorsprong: "Zoete koek was makkelijk en zonder tegenzin te eten, in tegenstelling tot iets bitters dat weerstand oproept."
  },
  {
    tekst: "Op een houtje bijten",
    betekenis: "Het met erg weinig moeten stellen.",
    oorsprong: "Verwijst naar het bijten op een stuk hout om honger of pijn te verdragen bij gebrek aan eten."
  },
  {
    tekst: "Achter het net vissen",
    betekenis: "Iets net mislopen, te laat zijn.",
    oorsprong: "Een visser die aankomt net nadat het net al is opgehaald, vangt niets meer."
  },
  {
    tekst: "Iemand een loer draaien",
    betekenis: "Iemand een gemene streek leveren.",
    oorsprong: "'Loer' verwees naar een list of hinderlaag bij de jacht, waarbij een dier in de val werd gelokt."
  },
  {
    tekst: "Zich geen raad weten",
    betekenis: "Niet meer weten wat te doen.",
    oorsprong: "'Raad' in de oude betekenis van advies of oplossing; wie zich geen raad weet, vindt geen enkele uitweg meer."
  },
  {
    tekst: "In het gevlei komen bij iemand",
    betekenis: "Iemands gunst winnen.",
    oorsprong: "Mogelijk gerelateerd aan 'vleien'; je komt letterlijk in de nabijheid van iemand door zachtaardig, innemend gedrag."
  },
  {
    tekst: "De lakens uitdelen",
    betekenis: "De baas zijn, het voor het zeggen hebben.",
    oorsprong: "In een huishouden was het verdelen van beddengoed een taak van de heer of vrouwe des huizes, als teken van gezag."
  },
  {
    tekst: "Iets met de haren erbij slepen",
    betekenis: "Iets kunstmatig en ongepast in een verhaal betrekken.",
    oorsprong: "Beeld van iets dat niet vanzelf past en letterlijk 'aan de haren' erbij getrokken moet worden."
  },
  {
    tekst: "Op apengapen staan",
    betekenis: "Wijd openstaan, verbaasd kijken.",
    oorsprong: "Apen die hun mond wijd opensperren bij verbazing of dreiging dienden als beeld voor stomverbaasd kijken."
  },
  {
    tekst: "Iemand voor het blok zetten",
    betekenis: "Iemand dwingen meteen een beslissing te nemen.",
    oorsprong: "Verwijst naar het hakblok, waar iemand voor gezet werd zonder ontsnappingsmogelijkheid — een definitief moment."
  },
  {
    tekst: "Iemand naar de mond praten",
    betekenis: "Iemand vleien om in de gunst te komen.",
    oorsprong: "Letterlijk praten in de richting van iemands mond: precies zeggen wat die persoon graag wil horen."
  },
  {
    tekst: "Een storm in een glas water",
    betekenis: "Veel ophef over iets onbelangrijks.",
    oorsprong: "Beeld van een storm die onmogelijk groter kan zijn dan de rand van het glas waarin hij zogenaamd woedt."
  },
  {
    tekst: "Het ijzer smeden als het heet is",
    betekenis: "Een gunstige gelegenheid direct benutten.",
    oorsprong: "Uit het smeedvak: ijzer is alleen te bewerken zolang het gloeiend heet is, eenmaal afgekoeld lukt dat niet meer."
  },
  {
    tekst: "Iemand in de gaten houden",
    betekenis: "Iemand goed observeren.",
    oorsprong: "'Gaten' verwijst hier naar de ogen — iemand letterlijk nauwlettend in het vizier houden."
  },
  {
    tekst: "Op zijn tellen passen",
    betekenis: "Voorzichtig zijn, goed opletten.",
    oorsprong: "Bij het tellen van geld of stappen moest vroeger precies worden opgelet om geen fout te maken."
  },
  {
    tekst: "Alle registers opentrekken",
    betekenis: "Alle beschikbare middelen inzetten, alles op alles zetten.",
    oorsprong: "Uit de orgelbouw: het opentrekken van alle registers laat het instrument voluit en krachtig klinken."
  },
  {
    tekst: "Iemand het bloed onder de nagels vandaan halen",
    betekenis: "Iemand mateloos irriteren.",
    oorsprong: "Beeld van een ergernis die zo intens is dat die zelfs doordringt tot onder de nagels, een plek die moeilijk te bereiken is."
  },
  {
    tekst: "De beste stuurlui staan aan wal",
    betekenis: "Wie zelf niets doet, bekritiseert het gemakkelijkst.",
    oorsprong: "Verwijst naar mensen aan land die commentaar geven op een schip op zee, zonder zelf ooit het roer te hebben vastgehouden."
  },
  {
    tekst: "Iemand een hart onder de riem steken",
    betekenis: "Iemand bemoedigen.",
    oorsprong: "Soldaten droegen hun uitrusting aan een riem; iets 'onder de riem steken' gaf hen extra moed voor de strijd."
  },
  {
    tekst: "Iemand op de vingers kijken",
    betekenis: "Iemand nauwlettend controleren.",
    oorsprong: "Verwijst naar leermeesters die letterlijk toekeken op de handbewegingen van een leerling bij precisiewerk."
  },
  {
    tekst: "Zich in de nesten werken",
    betekenis: "Zichzelf in de problemen brengen.",
    oorsprong: "Beeld van een dier dat verstrikt raakt in de wirwar van takken en materiaal van een nest."
  },
  {
    tekst: "Iemand voor lul zetten",
    betekenis: "Iemand belachelijk maken.",
    oorsprong: "'Lul' had oorspronkelijk de bredere, minder grove betekenis van 'sufferd' — iemand zo neerzetten maakte hem bespottelijk."
  },
  {
    tekst: "Iets tussen neus en lippen door zeggen",
    betekenis: "Iets terloops en achteloos vermelden.",
    oorsprong: "Beeld van iets dat je bijna toevallig uitspreekt, zoals lucht die tussen neus en lippen ontsnapt."
  },
  {
    tekst: "De koek is op",
    betekenis: "De goede tijden of het geduld zijn voorbij.",
    oorsprong: "Koek als symbool voor iets lekkers en beperkts: is de koek op, dan is er niets aangenaams meer over."
  },
  {
    tekst: "Iemand iets door de strot duwen",
    betekenis: "Iemand iets opdringen tegen zijn wil.",
    oorsprong: "Beeld van letterlijk voedsel met kracht door iemands keel duwen, ongeacht of die persoon het wil."
  },
  {
    tekst: "Uit de kunst zijn",
    betekenis: "Uitstekend, subliem zijn.",
    oorsprong: "'Kunst' verwees vroeger naar vakmanschap; iets 'uit de kunst' overtreft het vakmanschap zelf in kwaliteit."
  },
  {
    tekst: "Er met de Franse slag doorheen gaan",
    betekenis: "Iets vluchtig en oppervlakkig uitvoeren.",
    oorsprong: "'Franse slag' verwees mogelijk naar een snelle, weinig zorgvuldige stijl die als typisch Frans werd gezien."
  },
  {
    tekst: "Iemand op het matje roepen",
    betekenis: "Iemand streng terechtwijzen.",
    oorsprong: "Wie bij de baas of leraar geroepen werd, moest op een (deur)matje voor het bureau gaan staan om een berisping te krijgen."
  },
  {
    tekst: "Zijn borst natmaken",
    betekenis: "Zich voorbereiden op iets onaangenaams.",
    oorsprong: "Verwijst naar zwemmers die hun borst nat maken voor ze het koude water in gaan — de eerste onaangename stap."
  },
  {
    tekst: "De poppen aan het dansen krijgen",
    betekenis: "Voor onrust of problemen zorgen.",
    oorsprong: "Beeld uit het poppenkasttheater, waar de poppen pas 'gaan dansen' als de poppenspeler ze chaotisch in actie brengt."
  },
  {
    tekst: "Zich er met een jantje-van-leiden van afmaken",
    betekenis: "Iets slordig en zonder inzet afhandelen.",
    oorsprong: "'Jantje van Leiden' zou een wat onhandige of onverschillige historische figuur zijn geweest wiens naam synoniem werd met halfslachtig werk."
  },
  {
    tekst: "Iets voor een habbekrats kopen",
    betekenis: "Iets voor een belachelijk lage prijs kopen.",
    oorsprong: "'Habbekrats' is mogelijk een verbastering van een Jiddische of Duitse term voor een schijntje geld."
  },
  {
    tekst: "Er het zwijgen toe doen",
    betekenis: "Bewust niets zeggen over iets.",
    oorsprong: "'Het zwijgen' wordt hier als actieve daad benadrukt: een bewuste keuze om stil te blijven, geen toevallige stilte."
  },
  {
    tekst: "In zak en as zitten",
    betekenis: "Erg bedroefd of wanhopig zijn.",
    oorsprong: "Bijbelse rouwrite waarbij mensen zich in een zak (grof gewaad) hulden en zich met as bestrooiden als teken van rouw."
  },
  {
    tekst: "Iemand naar de kroon steken",
    betekenis: "Iemand proberen te overtreffen.",
    oorsprong: "Verwijst naar het letterlijk reiken naar de kroon van een koning, als teken van rivaliteit om de hoogste positie."
  },
  {
    tekst: "Het onderspit delven",
    betekenis: "Verliezen, het afleggen tegen een ander.",
    oorsprong: "'Spit' verwijst naar omgespit land bij een gevecht; wie 'onder' kwam te liggen, verloor letterlijk het gevecht op de grond."
  },
  {
    tekst: "Iemand op de huid zitten",
    betekenis: "Iemand voortdurend achtervolgen of onder druk zetten.",
    oorsprong: "Jachthonden die een prooi zo dicht op de huid zitten dat ontsnappen onmogelijk wordt."
  },
  {
    tekst: "Ergens de vinger op leggen",
    betekenis: "Precies aanwijzen wat er aan de hand is.",
    oorsprong: "Het gebaar van een vinger op een specifieke plek leggen om iets exact aan te duiden, zoals op een kaart of document."
  },
  {
    tekst: "Zijn biezen pakken",
    betekenis: "Vertrekken, opstappen.",
    oorsprong: "'Biezen' waren de rieten matten waarop mensen vroeger sliepen; bij vertrek rolde je je biesmatras op en nam je die mee."
  },
  {
    tekst: "In de wolken zijn",
    betekenis: "Erg blij zijn.",
    oorsprong: "Beeld van iemand die zo gelukkig is dat hij zich als het ware hoog boven de aarde, tussen de wolken, bevindt."
  },
  {
    tekst: "Iemand het licht in de ogen niet gunnen",
    betekenis: "Extreem jaloers zijn op iemand.",
    oorsprong: "Een jaloezie zo groot dat je iemand zelfs het simpele feit van kunnen zien niet meer zou gunnen."
  },
  {
    tekst: "Iemand een poot uitdraaien",
    betekenis: "Iemand fors uitbuiten of bedriegen.",
    oorsprong: "Beeld van een dier waarvan letterlijk een poot wordt uitgedraaid — een teken van meedogenloze uitbuiting."
  },
  {
    tekst: "Van de os op de ezel springen",
    betekenis: "Abrupt van het ene onderwerp naar het andere overgaan.",
    oorsprong: "Middeleeuws beeld van iemand die zonder duidelijke reden wisselt tussen een groter dier (os) en een kleiner dier (ezel)."
  },
  {
    tekst: "Zich niet laten kennen",
    betekenis: "Laten zien dat je tegen iets bestand bent, je niet laten doen.",
    oorsprong: "Beeld van iemand die weigert zijn ware, kwetsbare gevoelens te tonen tegenover tegenslag."
  },
  {
    tekst: "Het gelag betalen",
    betekenis: "Opdraaien voor de gevolgen, vaak van andermans daden.",
    oorsprong: "In herbergen moest uiteindelijk iemand de rekening ('gelag') betalen voor de gezamenlijke consumpties."
  },
  {
    tekst: "Iemand op de kast jagen",
    betekenis: "Iemand flink irriteren.",
    oorsprong: "Een kat die 'op de kast' gejaagd wordt, klimt in het nauw gedreven naar een hoog punt — beeld voor iemand tot het uiterste drijven."
  },
  {
    tekst: "De puntjes op de i zetten",
    betekenis: "Iets tot in de perfectie afwerken.",
    oorsprong: "Verwijst naar het kalligraferen, waarbij de puntjes boven de letter i als laatste, verfijnende toets werden gezet."
  },
  {
    tekst: "Iets door de mangel halen",
    betekenis: "Iets grondig en streng doornemen of bekritiseren.",
    oorsprong: "Een mangel was een wasrol die kleding met kracht plette; iets 'door de mangel halen' betekende een harde, grondige behandeling."
  },
  {
    tekst: "Zich in allerlei bochten wringen",
    betekenis: "Grote moeite doen om iets te bereiken of te verantwoorden.",
    oorsprong: "Beeld van een lichaam dat zich onnatuurlijk moet verdraaien om ergens doorheen of uit te komen."
  },
  {
    tekst: "Iets voor lief nemen",
    betekenis: "Iets accepteren zonder er moeilijk over te doen.",
    oorsprong: "'Lief' in de oude betekenis van aangenaam of welgevallig; iets voor lief nemen betekende het gewillig aanvaarden."
  },
  {
    tekst: "De koorden in handen hebben",
    betekenis: "De controle hebben, alles regisseren.",
    oorsprong: "Verwijst naar poppenspelers die de touwtjes van marionetten vasthouden en zo elke beweging bepalen."
  },
  {
    tekst: "Iemand met de mond vol tanden laten staan",
    betekenis: "Iemand met stomheid slaan, geen weerwoord laten hebben.",
    oorsprong: "Beeld van iemand die zo verrast is dat zijn mond letterlijk 'vol tanden' blijft, zonder woorden te kunnen vormen."
  },
  {
    tekst: "Van een koude kermis thuiskomen",
    betekenis: "Tegenvallen, teleurgesteld terugkeren.",
    oorsprong: "Kermissen waren vroeger warme, drukke volksfeesten; wie van een tegenvallende kermis thuiskwam, had een deceptie beleefd."
  },
  {
    tekst: "Zijn kruit verschoten hebben",
    betekenis: "Geen kracht of middelen meer over hebben.",
    oorsprong: "Uit de wapenkunde: een soldaat zonder buskruit (munitie) kon niet meer vechten."
  },
  {
    tekst: "Voor de bijl gaan",
    betekenis: "Het slachtoffer worden, eraan gaan.",
    oorsprong: "Verwijst naar een boom die letterlijk voor de bijl gaat, oftewel geveld wordt zonder kans op ontsnapping."
  },
  {
    tekst: "Het gordijn valt",
    betekenis: "Iets is definitief afgelopen.",
    oorsprong: "Uit het theater, waar het vallen van het gordijn het einde van een voorstelling markeert."
  },
  {
    tekst: "Bij de pinken zijn",
    betekenis: "Alert en scherp zijn.",
    oorsprong: "Onduidelijke herkomst; mogelijk gerelateerd aan het scherp moeten waarnemen van jonge koeien (pinken) tussen de kudde."
  },
  {
    tekst: "Iemand een loefje afsteken",
    betekenis: "Iemand net iets te slim af zijn.",
    oorsprong: "Uit de scheepvaart: een schip dat 'de loef' (windzijde) van een ander schip afsteekt, ontneemt dat schip de wind en vaart sneller."
  },
  {
    tekst: "Zich geen buil vallen aan iets",
    betekenis: "Ergens geen nadelige gevolgen van ondervinden.",
    oorsprong: "Een 'buil' is een bult van een val; als je 'geen buil valt', loop je geen schade op, letterlijk noch figuurlijk."
  },
  {
    tekst: "Het paard achter de wagen spannen",
    betekenis: "Iets in de verkeerde volgorde aanpakken.",
    oorsprong: "Een paard hoort vóór de wagen te lopen om die te trekken; wie het paard erachter spant, keert de logische volgorde om."
  },
  {
    tekst: "Iets uit het hoofd praten",
    betekenis: "Iemand overtuigen iets niet te doen.",
    oorsprong: "Beeld van een idee dat letterlijk uit iemands gedachten verwijderd wordt door overtuigingskracht."
  },
  {
    tekst: "Iemand iets betaald zetten",
    betekenis: "Wraak nemen voor iets.",
    oorsprong: "Beeld van een schuld die letterlijk 'betaald' moet worden, hier toegepast op figuurlijke wraak of vergelding."
  },
  {
    tekst: "Alsof zijn neus bloedt",
    betekenis: "Alsof er niets aan de hand is, onaangedaan.",
    oorsprong: "Iemand met een bloedende neus die zich toch niet laat afleiden en gewoon doorgaat, als teken van onverstoorbaarheid."
  },
  {
    tekst: "Een appeltje voor de dorst bewaren",
    betekenis: "Iets achter de hand houden voor moeilijkere tijden.",
    oorsprong: "Appels werden vroeger bewaard voor de wintermaanden, als voorzorg voor tijden van schaarste."
  },
  {
    tekst: "Iemand zand in de ogen strooien",
    betekenis: "Iemand misleiden, de waarheid verbergen.",
    oorsprong: "Beeld van letterlijk zand in iemands ogen gooien zodat die tijdelijk niets meer kan zien."
  },
  {
    tekst: "Zijn hielen laten zien",
    betekenis: "Snel vluchten of vertrekken.",
    oorsprong: "Wie wegrent, laat de achterkant van zijn voeten (hielen) zien aan wie achterblijft."
  },
  {
    tekst: "Iemand de wind uit de zeilen nemen",
    betekenis: "Iemands enthousiasme of kracht wegnemen.",
    oorsprong: "Uit de zeilvaart: een schip dat de wind wegneemt van een ander schip, maakt varen voor dat schip onmogelijk."
  },
  {
    tekst: "Zich de haren uit het hoofd trekken",
    betekenis: "Wanhopig zijn over een fout of gemiste kans.",
    oorsprong: "Overdreven fysiek gebaar van wanhoop, waarbij iemand zich letterlijk aan zijn haren zou trekken van frustratie."
  },
  {
    tekst: "Het bijltje erbij neerleggen",
    betekenis: "Ergens mee stoppen, opgeven.",
    oorsprong: "Een houthakker die zijn bijl neerlegt, stopt met werken; het beeld werd overgenomen voor het opgeven van een taak."
  },
  {
    tekst: "Iemand de duimschroeven aandraaien",
    betekenis: "Iemand onder zware druk zetten.",
    oorsprong: "Verwijst naar een historisch martelwerktuig waarmee de duimen werden samengeknepen om een bekentenis af te dwingen."
  },
  {
    tekst: "Op eieren lopen",
    betekenis: "Heel voorzichtig te werk gaan in een gevoelige situatie.",
    oorsprong: "Beeld van iemand die letterlijk over eieren loopt en met elke stap moet oppassen ze niet te breken."
  },
  {
    tekst: "Zijn mond voorbijpraten",
    betekenis: "Per ongeluk iets verklappen.",
    oorsprong: "Beeld van woorden die sneller uit de mond komen dan het verstand ze kan tegenhouden."
  },
  {
    tekst: "Iemand een blauwtje laten lopen",
    betekenis: "Iemands liefde of avances afwijzen.",
    oorsprong: "Mogelijk gerelateerd aan de kleur blauw als symbool voor teleurstelling of afwijzing in oude kledingsymboliek."
  },
  {
    tekst: "Ergens geen gras over laten groeien",
    betekenis: "Iets snel en zonder uitstel aanpakken.",
    oorsprong: "Beeld van een pad dat pas overwoekerd raakt met gras als er lange tijd niemand overheen loopt — hier blijft dat uit."
  },
  {
    tekst: "Iemand op zijn donder geven",
    betekenis: "Iemand flink terechtwijzen of straffen.",
    oorsprong: "'Donder' verwijst hier waarschijnlijk naar het achterste; iemand 'op zijn donder geven' had oorspronkelijk een letterlijke, fysieke betekenis."
  },
  {
    tekst: "Zo goed als goud zijn",
    betekenis: "Heel betrouwbaar of waardevol zijn.",
    oorsprong: "Goud gold van oudsher als de meest stabiele en betrouwbare waardemaat, vandaar de vergelijking voor betrouwbaarheid."
  },
];
