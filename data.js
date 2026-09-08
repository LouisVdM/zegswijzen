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
    oorsprong: "Verwijst naar het poetsen van de borstplaat (het harnas): een lafhartige soldaat die het gevecht wilde ontwijken, deed dat onder het voorwendsel dat hij zijn plaat moest gaan poetsen."
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
    oorsprong: "De bekendste verklaring verwijst naar de fabel van de aap die de kat gebruikt om kastanjes uit het vuur te halen, waarna de aap zelf de buit opeet. Taalkundige A. de Cock (1908) wijst daarnaast op een oudere Nederlandse route via 'het spits afbijten' (het scherpe, gevaarlijke uiteinde wegnemen): wie een ander 'het spits laat afbijten', laat die het gevaar lopen."
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
    oorsprong: "Volgens K. ter Laan oorspronkelijk letterlijk: iemand de duimschroeven aanzetten om de allerlaatste cent uit hem te persen — de uitdrukking is dus rechtstreeks familie van 'de duimschroeven aandraaien'."
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
    oorsprong: "Volgens A. de Cock (1908) gaat het hier niet om een koningskroon, maar om een erekrans of overwinningsteken zoals dat bij wedstrijden werd uitgereikt aan wie de anderen overtrof — die krans probeerde men de winnaar afhandig te maken door hem op zijn beurt te overtreffen."
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
    oorsprong: "Verwijst naar de duimschroef, een martelwerktuig dat verdachten letterlijk aan de duim werd aangelegd om een bekentenis af te dwingen — een praktijk die A. de Cock (1908) documenteert als onderdeel van de middeleeuwse pijnbank."
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
    oorsprong: "Gaat volgens A. de Cock (1908) terug op een oud gebruik waarbij een afgewezen minnaar symbolisch een blauwe huik (mantel) omgehangen kreeg als openbaar teken van afwijzing — de uitdrukking is al te vinden in een rederijkersbundel uit 1521."
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
  {
    tekst: "Iemand uit het veld slaan",
    betekenis: "Iemand van zijn stuk brengen, van zijn zekerheid beroven.",
    oorsprong: "Verwijst naar de middeleeuwse tornooien, waarbij een ridder die van zijn paard of uit het strijdperk (het veld) werd gedreven, verslagen was."
  },
  {
    tekst: "In het krijt treden",
    betekenis: "Deelnemen aan een strijd, wedstrijd of discussie.",
    oorsprong: "Het 'krijt' was de afgebakende cirkel of arena waarin middeleeuwse steekspelen plaatsvonden — wie 'in het krijt trad', begon de kamp."
  },
  {
    tekst: "Iemand paal en perk stellen",
    betekenis: "Grenzen opleggen aan iemands gedrag of aan een misstand.",
    oorsprong: "Verwijst naar de palen en omheiningen waarmee het middeleeuwse strijdperk, het toernooiveld, werd afgebakend."
  },
  {
    tekst: "Iemand in de steek laten",
    betekenis: "Iemand aan zijn lot overlaten in een moeilijke situatie.",
    oorsprong: "Gaat vermoedelijk terug op het steekspel: wie zijn medestrijder tijdens een lanssteek niet te hulp kwam, liet hem letterlijk 'in de steek'."
  },
  {
    tekst: "Voet bij stuk houden",
    betekenis: "Standvastig blijven, niet toegeven.",
    oorsprong: "Verwijst naar middeleeuwse kampvechters die bij een tweegevecht voet tegen voet zetten en niet terugweken uit het afgebakende strijdperk."
  },
  {
    tekst: "Een lans breken voor iemand",
    betekenis: "Het opnemen voor iemand, hem verdedigen.",
    oorsprong: "Letterlijk: voor iemand een ridderlijk duel aangaan met de speer (lans), zoals bij toernooien gebeurde ter verdediging van bijvoorbeeld een edelvrouw."
  },
  {
    tekst: "Veel ophef maken van iets",
    betekenis: "Overdreven drukte of aandacht ergens aan besteden.",
    oorsprong: "Verwijst naar het plechtig opheffen van de wapens vlak voor een middeleeuws tweegevecht."
  },
  {
    tekst: "Het voor iemand opnemen",
    betekenis: "Iemands partij kiezen, hem verdedigen.",
    oorsprong: "Letterlijk 'het wapen voor iemand opnemen' — diens kant kiezen in een gevecht."
  },
  {
    tekst: "Het spits afbijten",
    betekenis: "Als eerste het moeilijkste of gevaarlijkste deel van een taak op je nemen.",
    oorsprong: "Uit de middeleeuwse krijgskunst: soldaten die als eersten op de vijandelijke speerpunten ('het spits') afstormden, braken de aanval en maakten het minder gevaarlijk voor wie volgde."
  },
  {
    tekst: "Met open vizier strijden",
    betekenis: "Eerlijk en openlijk een conflict aangaan, zonder verborgen agenda.",
    oorsprong: "Bij toernooien vochten ridders met gesloten vizier; de regels verboden zelfs om het tijdens het gevecht te openen — 'met open vizier' strijden stond voor eerlijke, onverholen strijd."
  },
  {
    tekst: "Iemand tegen zich in het harnas jagen",
    betekenis: "Iemand kwaad maken, tot verzet aanzetten.",
    oorsprong: "Verwijst naar het aantrekken van het harnas, de wapenrusting, als voorbereiding op een gevecht."
  },
  {
    tekst: "Iemand uit het zadel lichten",
    betekenis: "Iemand van zijn positie of macht verdringen.",
    oorsprong: "Uit de ridderlijke tweegevechten, waarbij het erom ging de tegenstander met de lans van zijn paard te werpen."
  },
  {
    tekst: "Iemand weer in het zadel helpen",
    betekenis: "Iemands verwarde zaken weer op orde brengen.",
    oorsprong: "Letterlijk iemand die van zijn paard is gevallen er weer op helpen — later overdrachtelijk voor het herstellen van iemands positie."
  },
  {
    tekst: "Tot de tanden gewapend zijn",
    betekenis: "Volledig uitgerust of voorbereid zijn.",
    oorsprong: "Herinnering aan de middeleeuwse ridders, die van hoofd tot voet in een ijzeren wapenrusting gehuld waren."
  },
  {
    tekst: "Gelaarsd en gespoord",
    betekenis: "Helemaal klaar en gereed om te vertrekken.",
    oorsprong: "Verwijst naar de ridder die met laarzen en sporen aan volledig gereed stond om zijn strijdros te bestijgen."
  },
  {
    tekst: "Zijn sporen verdienen",
    betekenis: "Door prestaties bewijzen dat je iets waard bent.",
    oorsprong: "De gouden sporen waren een kenmerk van de ridderstand; men kon ze verdienen bij de ridderslag, maar ook door een heldendaad op het slagveld."
  },
  {
    tekst: "Iemand de handschoen toewerpen",
    betekenis: "Iemand uitdagen tot een strijd of wedstrijd.",
    oorsprong: "Een ridder die zijn handschoen voor de voeten van een ander wierp, daagde hem daarmee uit tot een tweegevecht; het oprapen van de handschoen betekende het aanvaarden van de uitdaging."
  },
  {
    tekst: "Iets in zijn schild voeren",
    betekenis: "Een vaak verborgen plan of bedoeling hebben.",
    oorsprong: "Ridders droegen op hun wapenschild een blazoen, een zinnebeeldige voorstelling die als herkenningsteken diende — wat iemand 'in zijn schild voerde' gaf een aanwijzing over zijn ware bedoelingen."
  },
  {
    tekst: "Iemand op het schild verheffen",
    betekenis: "Iemand tot leider uitroepen of eervol in het zonnetje zetten.",
    oorsprong: "Oud-Germaans gebruik waarbij een nieuwe leider op een schild werd geplaatst en door het verzamelde volk driemaal rondgedragen."
  },
  {
    tekst: "Voor iemand in de bres springen",
    betekenis: "Iemand te hulp komen, hem verdedigen.",
    oorsprong: "Een 'bres' was een opening die aanvallers in een vestingmuur hadden geslagen; wie 'in de bres sprong', stelde zich op die gevaarlijke, opengeslagen plek om de verdediging over te nemen."
  },
  {
    tekst: "Lont ruiken",
    betekenis: "Onraad vermoeden, gevaar aanvoelen.",
    oorsprong: "Voor het bestaan van vuursteen of lucifers stak men het buskruit van geweren en kanonnen aan met een brandende lont; de scherpe geur ervan verspreidde zich al voor het schot viel, en waarschuwde zo voor het dreigende gevaar."
  },
  {
    tekst: "Door de bank genomen",
    betekenis: "Gemiddeld, over het geheel genomen.",
    oorsprong: "Vermoedelijk afkomstig van de vlees- of visbank, waarbij de kwaliteit van alle uitgestalde waren 'door elkaar', dus gemiddeld, werd bekeken."
  },
  {
    tekst: "Iets op zijn duimpje kennen",
    betekenis: "Iets perfect beheersen of uit het hoofd kennen.",
    oorsprong: "Gaat terug op de tijd dat officiële stukken met een wassen zegel werden bekrachtigd, waarbij het tegenzegel soms met de duim werd vastgedrukt — vandaar 'op zijn duimpje' voor iets dat tot in de puntjes bekend is."
  },
  {
    tekst: "Kiezen of delen",
    betekenis: "Een keuze moeten maken, er is geen ontkomen aan.",
    oorsprong: "In het oude Hollandse recht bepaalde men bij een gezamenlijk bezit — een erfenis, een buit — dat de ene partij de verdeling maakte, terwijl de andere partij mocht kiezen welk deel ze kreeg."
  },
  {
    tekst: "De staf breken over iemand",
    betekenis: "Iemand hard en definitief veroordelen.",
    oorsprong: "Rechters braken vroeger letterlijk een houten staf in drieën boven een ter dood veroordeelde en wierpen hem de stukken voor de voeten, als teken dat het vonnis onherroepelijk was."
  },
  {
    tekst: "Te hooi en te gras",
    betekenis: "Onregelmatig, af en toe maar.",
    oorsprong: "Oorspronkelijk een middeleeuwse tijdsaanduiding voor rechtsdagen, die tweemaal per jaar plaatsvonden: in de hooitijd en in het voorjaar, als het jonge gras opkwam."
  },
  {
    tekst: "Jaar en dag",
    betekenis: "Een lange, onbepaalde tijd.",
    oorsprong: "Oorspronkelijk een juridische verjaringstermijn — doorgaans een jaar, zes weken en drie dagen — waarna een bezit niet meer betwist kon worden."
  },
  {
    tekst: "Iets op het tapijt brengen",
    betekenis: "Een onderwerp ter sprake brengen.",
    oorsprong: "Verwijst naar het tapijt dat over de vergadertafel van hooggeplaatste bestuurders lag — een zaak die 'op het tapijt' kwam, werd letterlijk op die tafel besproken."
  },
  {
    tekst: "Vogelvrij verklaard worden",
    betekenis: "Buiten de bescherming van de wet gesteld worden, aan ieders genade overgeleverd.",
    oorsprong: "Wie tot vogelvrij verklaard werd, mocht ongestraft gedood worden — vergelijkbaar met de vrijheid om vogels zonder eigenaar te bejagen."
  },
  {
    tekst: "Iemand op de pijnbank leggen",
    betekenis: "Iemand hevig kwellen, in grote onzekerheid of spanning laten zitten.",
    oorsprong: "Verwijst naar de letterlijke folterbank, waarop verdachten werden uitgerekt om een bekentenis af te dwingen."
  },
  {
    tekst: "Iemand aan de kaak stellen",
    betekenis: "Iemands wangedrag openlijk bekendmaken en veroordelen.",
    oorsprong: "De 'kaak' was een verhoging of schandpaal waarop veroordeelden met een ijzeren halsband werden vastgezet om publiekelijk te schande te staan."
  },
  {
    tekst: "De genadeslag geven",
    betekenis: "Iets of iemand definitief tot een einde brengen.",
    oorsprong: "Verwijst naar de laatste, dodelijke slag die een beul aan een gefolterde gaf om diens lijden te beëindigen."
  },
  {
    tekst: "De kogel is door de kerk",
    betekenis: "Er is eindelijk een knoop doorgehakt.",
    oorsprong: "Kerken en hun bezittingen werden bij middeleeuwse oorlogen en plunderingen doorgaans lang ontzien; pas als er niets anders meer overeind stond, kwamen zelfs zij aan de beurt — vandaar dat 'de kogel door de kerk' is als er echt niets meer aan te doen valt."
  },
  {
    tekst: "De kool en de geit sparen",
    betekenis: "Het iedereen naar de zin proberen te maken, geen van beide partijen voor het hoofd stoten.",
    oorsprong: "Volgens K. ter Laan gebaseerd op de fabel van een man die een kool, een geit en een wolf met een te klein bootje over een rivier moest overzetten, en daarbij telkens moest zorgen dat de geit niet alleen bij de kool of bij de wolf achterbleef."
  },
  {
    tekst: "Het ei van Columbus",
    betekenis: "Een zaak die heel eenvoudig lijkt zodra je weet hoe het moet.",
    oorsprong: "Verwijst naar het verhaal over Columbus, tot wie men zei dat de ontdekking van Amerika geen kunst was. Dat was evenmin een kunst, antwoordde hij, als een ei rechtop te laten staan — en liet vervolgens zien hoe."
  },
  {
    tekst: "De kat de bel aanbinden",
    betekenis: "Een gevaarlijke of netelige onderneming als eerste durven beginnen.",
    oorsprong: "Gaat terug op de klassieke fabel waarin de muizen besluiten een bel om de hals van de kat te binden, zodat ze hem voortaan horen aankomen — alleen durft geen enkele muis de bel daadwerkelijk vast te maken. De fabel werd historisch beroemd toen de Schotse edelman Archibald Douglas in 1482 aanbood om samenzweerders tegen de koning aan te pakken, en sindsdien de bijnaam 'Archibald Bell the Cat' droeg."
  },
  {
    tekst: "Een kat in de zak kopen",
    betekenis: "Bedrogen uitkomen, iets kopen zonder het vooraf goed bekeken te hebben.",
    oorsprong: "Ontleend aan een oud volksverhaal waarin de duivel iemand een wisseldaalder geeft in ruil voor een kat in een zak op een kruispunt — opent de duivel de zak later, dan blijkt er iets heel anders in te zitten dan gedacht."
  },
  {
    tekst: "De kat uit de boom kijken",
    betekenis: "Rustig afwachten hoe een situatie zich ontwikkelt voor je iets onderneemt.",
    oorsprong: "Zoals honden doen wanneer zij een kat vervolgen die in een boom is geklommen: ze wachten geduldig af tot het dier weer naar beneden komt."
  },
  {
    tekst: "Iemand iets op de mouw spelden",
    betekenis: "Iemand iets wijsmaken, misbruik maken van diens goedgelovigheid.",
    oorsprong: "Ontleend aan de oude gewoonte om kinderen als beloning een koek of ander geschenkje op de mouw te spelden of te binden."
  },
  {
    tekst: "Boter bij de vis",
    betekenis: "Direct betalen, zonder uitstel.",
    oorsprong: "Wil men vis stoven, dan moet de boter er al bij de hand zijn — beide horen bij elkaar en moeten er tegelijk zijn, net als bij een aankoop de betaling meteen bij de levering hoort."
  },
  {
    tekst: "Het is niet alle dagen vetpot",
    betekenis: "Het is niet altijd overvloed; soms moet je het met minder doen.",
    oorsprong: "Een 'vetpot' is een pot met vet, rijk voedsel — een beeld van overvloed en feestelijkheid, in tegenstelling tot de schaarsere, gewone dagen."
  },
  {
    tekst: "De klok heeft horen luiden maar weet niet waar de klepel hangt",
    betekenis: "Iemand heeft er wel iets over gehoord, maar kent de bijzonderheden niet.",
    oorsprong: "De klepel is het onderdeel dat de klok daadwerkelijk laat klinken; wie niet weet waar hij hangt, snapt niet hoe het geluid (het hele verhaal) precies tot stand komt."
  },
  {
    tekst: "In de aap gelogeerd zijn",
    betekenis: "In verlegenheid of een teleurstellende situatie verkeren.",
    oorsprong: "Volgens K. ter Laan zal 'de aap' oorspronkelijk het uithangbord van een (weinig chique) herberg zijn geweest — wie 'in de aap' overnachtte, zat dus aan een pover onderkomen vast."
  },
  {
    tekst: "De knoop doorhakken",
    betekenis: "Een einde maken aan getwijfel of gezeur door een definitieve beslissing te nemen.",
    oorsprong: "Verwijst naar de Gordiaanse knoop: toen niemand de ingewikkelde knoop van koning Gordius kon ontwarren, hakte Alexander de Grote hem simpelweg met zijn zwaard door."
  },
  {
    tekst: "Iemand de mantel uitvegen",
    betekenis: "Iemand flink de waarheid zeggen, hem hard terechtwijzen.",
    oorsprong: "Een schertsende uitdrukking waarbij men het kledingstuk (de mantel) noemt, maar eigenlijk de persoon zelf bedoelt."
  },
  {
    tekst: "Iets bedekken met de mantel der liefde",
    betekenis: "Een fout of misstap van een ander niet ruchtbaar maken.",
    oorsprong: "Een oud, mild-christelijk beeld: in plaats van andermans misstap bloot te leggen, hul je die liever in een beschermende 'mantel' van vergevingsgezindheid."
  },
  {
    tekst: "De rode draad",
    betekenis: "Het thema of idee dat steeds weer terugkeert doorheen een verhaal of betoog.",
    oorsprong: "Al het touwwerk voor de Britse marine, gemaakt in Portsmouth, had van oudsher een rode draad door het midden gevlochten, zodat elk stukje touw — hoe klein ook — als eigendom van de marine herkenbaar was."
  },
  {
    tekst: "De teerling is geworpen",
    betekenis: "Er is een onherroepelijke beslissing genomen, waarop niet valt terug te komen.",
    oorsprong: "Vertaling van de woorden die Julius Caesar zou hebben uitgesproken toen hij met zijn leger de rivier de Rubicon overstak — een 'teerling' is een dobbelsteen."
  },
  {
    tekst: "Het onderste uit de kan willen hebben",
    betekenis: "Buitensporig veeleisend zijn, alles tot het uiterste willen opeisen.",
    oorsprong: "Wie een kan tot de laatste druppel helemaal wil leegschenken, kantelt hem zo ver dat het deksel (het 'lid') hem tegen de neus kan slaan — wie te veeleisend is, komt er wel eens slecht van af."
  },
  {
    tekst: "De kip met de gouden eieren slachten",
    betekenis: "Door hebzucht de bron van je eigen inkomsten of voordeel vernietigen.",
    oorsprong: "Teruggaand op de bekende fabel van de kip (of gans) die gouden eieren legde, totdat de hebzuchtige eigenaar haar slachtte om in één keer aan alle eieren tegelijk te komen — waarna er nooit meer een goud ei kwam."
  },
  {
    tekst: "Een gegeven paard moet men niet in de bek kijken",
    betekenis: "Een cadeau moet je niet kritisch keuren of afwijzen.",
    oorsprong: "Verwijst naar het beoordelen van een paard aan zijn gebit om de leeftijd en gezondheid te bepalen voor je het koopt — bij een geschenk hoort dat wantrouwige nakijken niet."
  },
  {
    tekst: "Veel geschreeuw en weinig wol",
    betekenis: "Veel drukte en ophef maken over iets dat uiteindelijk weinig resultaat oplevert.",
    oorsprong: "Naar een oud gezegde: 'zei de duivel, toen hij een varken schoor' — een varken heeft geen wol, dus het scheren veroorzaakt alleen veel gepiep en geen enkele opbrengst."
  },
  {
    tekst: "Het ging van een leien dakje",
    betekenis: "Het verliep vlot en zonder haperingen.",
    oorsprong: "Regenwater glijdt moeiteloos van een glad leien dak af, zonder ergens vast te blijven zitten — een beeld voor iets dat soepel en zonder obstakels verloopt."
  },
  {
    tekst: "De knuppel in het hoenderhok gooien",
    betekenis: "Een netelig onderwerp aansnijden of onrust veroorzaken.",
    oorsprong: "Een knuppel die tussen de kippen in een hok wordt gegooid, veroorzaakt meteen paniek, kabaal en verwarring in het hele hok."
  },
  {
    tekst: "Het hemd is nader dan de rok",
    betekenis: "Je bent jezelf en de jouwen het naast, eigenbelang gaat voor.",
    oorsprong: "Het hemd wordt direct op de huid gedragen en zit dus letterlijk dichter bij het lichaam dan de rok die eroverheen komt — een beeld voor wat (of wie) je het dichtst aan het hart ligt."
  },
  {
    tekst: "Er geen doekjes om winden",
    betekenis: "Iets ronduit zeggen, zonder het te verzachten.",
    oorsprong: "Doekjes windt men om een wond of iets kwetsbaars, om het te beschermen — wie 'er geen doekjes om windt', slaat die verzachting bewust over en zegt precies waar het op staat."
  },
  {
    tekst: "Zijn kop in het zand steken",
    betekenis: "Een probleem willens en wetens negeren of ontkennen.",
    oorsprong: "Berust op de hardnekkige volksfabel dat struisvogels hun kop in het zand steken bij gevaar, in de veronderstelling dat wie de dreiging niet ziet, zelf ook niet gezien wordt."
  },
  {
    tekst: "Het kind van de rekening zijn",
    betekenis: "De nadelen van een situatie ondervinden, moeten opdraaien voor de gevolgen.",
    oorsprong: "Oorspronkelijk luidde het gezegde eenvoudigweg 'hij is het kind', in de zin van 'hij moet het ontgelden' — 'de rekening' is er pas later aan toegevoegd."
  },
  {
    tekst: "Door dik en dun met iemand meegaan",
    betekenis: "Iemand trouw blijven in alle omstandigheden, ook de moeilijke.",
    oorsprong: "Ontleend aan kwajongens die het liefst dwars door de modderigste wegen en de grootste plassen lopen, in plaats van eromheen — letterlijk door het dikke en het dunne slijk."
  },
  {
    tekst: "Een appeltje met iemand te schillen hebben",
    betekenis: "Nog een onopgeloste kwestie of ruzie met iemand hebben.",
    oorsprong: "Taalkundige K. ter Laan merkt op dat deze precieze vorm niet voorkomt bij oudere verzamelaars als Tuinman; die noteerde in plaats daarvan 'Ik heb een eitje met u te pellen' — 'appeltje schillen' lijkt een latere variant van dat oudere gezegde."
  },
  {
    tekst: "De hand in eigen boezem steken",
    betekenis: "Bij jezelf nagaan of je niet ook schuldig bent aan iets waar je een ander van beschuldigt.",
    oorsprong: "Bijbelse verwijzing (Exodus 4): God beveelt Mozes zijn hand in zijn boezem (de plooi van zijn kleed op de borst) te steken, als teken van een innerlijke, persoonlijke waarheid."
  },
  {
    tekst: "Op zijn elf-en-dertigst",
    betekenis: "Overdreven bedachtzaam, traag en nauwgezet te werk gaan.",
    oorsprong: "Een populaire verklaring koppelt dit aan de Friese Staten, met hun elf steden en dertig grietenijen. Taalkundige Stoett toonde echter aan dat de uitdrukking al vroeg in de 17e eeuw bestond en dus waarschijnlijk niets met die vergadering te maken heeft — de precieze herkomst blijft onzeker."
  },
  {
    tekst: "Van a tot z",
    betekenis: "Van het begin tot het einde, helemaal.",
    oorsprong: "De a is de eerste letter van het alfabet, de z de laatste — iets 'van a tot z' kennen of vertellen dekt dus het geheel, zonder iets over te slaan."
  },
  {
    tekst: "Wie A zegt, moet ook B zeggen",
    betekenis: "Wie ergens eenmaal aan begonnen is, moet ook doorgaan.",
    oorsprong: "Simpel beeld van het alfabet: wie de eerste letter uitspreekt, kan niet zomaar stoppen — de volgende hoort erbij."
  },
  {
    tekst: "De aap komt uit de mouw",
    betekenis: "De ware, vaak verborgen bedoeling komt alsnog aan het licht.",
    oorsprong: "Mogelijk ontleend aan goochelaars met wijde mouwen, die een aapje bij zich droegen en het op het juiste moment tevoorschijn lieten komen."
  },
  {
    tekst: "In goede aarde vallen",
    betekenis: "Goed ontvangen worden, aanslaan.",
    oorsprong: "Bijbelse gelijkenis van de zaaier (Marcus 4): het zaad dat op goede, vruchtbare aarde valt, komt tot volle wasdom, in tegenstelling tot het zaad dat op rotsgrond of tussen distels valt."
  },
  {
    tekst: "Iemand iets aansmeren",
    betekenis: "Iemand iets verkopen tegen een te hoge prijs door mooie praatjes.",
    oorsprong: "Letterlijk: iemand honing om de mond smeren — hem vleien om hem iets te laten afnemen."
  },
  {
    tekst: "Iemand aanklampen",
    betekenis: "Iemand aanspreken, vaak wat opdringerig.",
    oorsprong: "Ontleend aan zeegevechten met oude houten schepen: men haakte zich met een klamp aan het vijandelijke schip vast om vervolgens aan boord te springen."
  },
  {
    tekst: "Zijn Achilleshiel",
    betekenis: "Iemands zwakke plek.",
    oorsprong: "De held Achilles uit de Griekse mythologie was door zijn moeder in de rivier de Styx gedompeld en daardoor onkwetsbaar, behalve op de hiel waarbij zij hem had vastgehouden — precies daar werd hij later dodelijk getroffen."
  },
  {
    tekst: "Er schuilt een addertje onder het gras",
    betekenis: "Iets lijkt onschuldig of gunstig, maar er zit een verborgen gevaar of kwade bedoeling in.",
    oorsprong: "Een oud beeld, al uit het Latijn bekend: een gifslang die verscholen in het gras onopgemerkt kan toeslaan, terwijl alles er vredig uitziet."
  },
  {
    tekst: "Iemand afschepen",
    betekenis: "Iemand onverrichter zake wegsturen, hem met een mooi voorwendsel kwijt raken.",
    oorsprong: "Letterlijk 'afschepen' betekende verkochte waren per schip verzenden; de uitdrukking verschoof naar het wegwerken van een persoon zoals je een pakket wegstuurt."
  },
  {
    tekst: "De aftocht blazen",
    betekenis: "Zich terugtrekken omdat men het doel niet kan bereiken, de strijd opgeven.",
    oorsprong: "Gezegd van een leger dat zich terugtrekt op het signaal van de trompet."
  },
  {
    tekst: "Schitteren door zijn afwezigheid",
    betekenis: "Juist opvallen doordat men nergens te bekennen is.",
    oorsprong: "Uit het Frans overgenomen (Chénier: 'Brutus et Cassius brillaient par leur absence') — Brutus en Cassius vielen na de moord op Caesar juist op door hun afwezigheid bij de begrafenisstoet."
  },
  {
    tekst: "Wie zich aan een ander spiegelt, spiegelt zich zacht",
    betekenis: "Door van andermans fouten of ongeluk te leren, bespaar je jezelf eigen pijnlijke ervaringen.",
    oorsprong: "Beeld van een spiegel: door in het lot van een ander te kijken als in een spiegel, zie je zonder zelf schade te lijden wat je te wachten kan staan."
  },
  {
    tekst: "Hij heeft Abraham gezien",
    betekenis: "Hij is de vijftig jaar gepasseerd.",
    oorsprong: "Bijbelse verwijzing: de Joden vroegen spottend aan Jezus, die nog geen vijftig was, of hij dan Abraham al gezien had — vandaar dat 'Abraham gezien hebben' de vijftig jaar markeert."
  },
  {
    tekst: "Ergens de assepoester van zijn",
    betekenis: "Stelselmatig al het vervelende werk moeten doen terwijl je over het hoofd wordt gezien.",
    oorsprong: "Naar het sprookje van Assepoester, die al het vuile werk in huis moest doen terwijl haar zusters naar het bal mochten — de bekende 'glazen muiltjes' berusten overigens op een vertaalfout: in het Frans stond er 'pantoufle de vair' (van bont), niet 'de verre' (van glas)."
  },
  {
    tekst: "De Augiasstal reinigen",
    betekenis: "Een enorme, al lang verwaarloosde puinhoop opruimen.",
    oorsprong: "Koning Augias uit de Griekse mythologie had dertig jaar lang de mest van zijn drieduizend runderen niet laten opruimen; Hercules kreeg de schier onmogelijke taak om de stal te reinigen, en leidde er daarvoor twee rivieren doorheen."
  },
  {
    tekst: "Iemand met Argusogen in de gaten houden",
    betekenis: "Iemand zeer scherp en waakzaam observeren.",
    oorsprong: "Argus was in de Griekse mythologie een wachter met honderd ogen, aangesteld om nooit iets te missen."
  },
  {
    tekst: "Bakzeil halen",
    betekenis: "Terugkrabbelen, zijn woorden of eisen intrekken.",
    oorsprong: "Engelse zeeterm 'to back a sail': het zeil zo zetten dat de wind er van voren tegenin werkt, waardoor de vaart van het schip vermindert of stopt."
  },
  {
    tekst: "Geen blad voor de mond nemen",
    betekenis: "Precies zeggen waar het op staat, ook als dat onaangenaam is om te horen.",
    oorsprong: "Beeld van een spreker die geen blad papier voor zijn mond hoeft te houden om zich te verschuilen — hij zegt ronduit wat hij denkt."
  },
  {
    tekst: "Een blauwe maandag",
    betekenis: "Een heel korte periode.",
    oorsprong: "De precieze herkomst is onzeker. Een verklaring koppelt het aan de maandag voor de vastentijd, toen kerkbeelden met blauwe doeken werden bedekt; een andere ziet 'blauw' simpelweg als 'waardeloos, zonder betekenis' — beide theorieën blijven omstreden."
  },
  {
    tekst: "Zonder blikken of blozen",
    betekenis: "Vrijmoedig, onbeschaamd, zonder een spier te vertrekken.",
    oorsprong: "Letterlijk: zonder bleek te worden (blikken) of te blozen — geen enkel zichtbaar teken van schaamte of aarzeling."
  },
  {
    tekst: "In het land der blinden is éénoog koning",
    betekenis: "Waar iedereen onwetend is, geldt wie ook maar iets weet al als een expert.",
    oorsprong: "Een aloud gezegde, al bekend bij de Grieken en Romeinen."
  },
  {
    tekst: "Met blindheid geslagen zijn",
    betekenis: "Geen inzicht hebben, niet begrijpen wat er om je heen gebeurt.",
    oorsprong: "Bijbelse uitdrukking (Deuteronomium 28): 'De Here zal u slaan met blindheid' als aangekondigde straf."
  },
  {
    tekst: "Een blok aan het been hebben",
    betekenis: "Belemmerd zijn in wat je kunt doen of ondernemen.",
    oorsprong: "Ontleend aan paarden die een houten blok aan de poot kregen om te voorkomen dat ze wegliepen uit de wei; ook weeskinderen kregen vroeger zo'n blok als straf."
  },
  {
    tekst: "Het over een andere boeg gooien",
    betekenis: "Een andere aanpak proberen, van onderwerp of strategie veranderen.",
    oorsprong: "Zeemansterm: de boeg is de voorzijde van het schip; het schip 'over een andere boeg wenden' betekent een nieuwe koers inslaan."
  },
  {
    tekst: "Een boekje opendoen over iemand",
    betekenis: "Onthullen wat je over iemand weet, vaak iets minder gunstigs.",
    oorsprong: "Beeld van een boek dat tot dan toe gesloten bleef; door het open te slaan, komt de inhoud — het verhaal over iemand — alsnog naar buiten."
  },
  {
    tekst: "Boontje komt om zijn loontje",
    betekenis: "Iedereen krijgt uiteindelijk de straf of het gevolg dat hij verdient.",
    oorsprong: "Naar een oud sprookje waarin Boontje, Strootje en Kooltje-vuur samen op reis gaan en bij een water komen: Strootje gaat erover liggen als brug, Boontje komt veilig over, maar Kooltje-vuur verbrandt Strootje en zakt in het water — waarop Boontje zo hard lacht dat het barst."
  },
  {
    tekst: "Ieder moet zijn eigen boontjes doppen",
    betekenis: "Iedereen moet zelf voor zijn eigen zaken en problemen opkomen.",
    oorsprong: "Letterlijk beeld van het doppen (pellen) van boontjes: ieder moet dat zelf doen, niemand neemt het je uit handen."
  },
  {
    tekst: "Hij is ook geen heilig boontje",
    betekenis: "Hij is ook niet zo onschuldig of braaf als hij zich voordoet.",
    oorsprong: "De precieze herkomst is onzeker; mogelijk een ironische verbastering van 'heilig bontje' (een Amsterdamse weesjongen), of eenvoudig een grappige volksuitdrukking."
  },
  {
    tekst: "Iets voor een appel en een ei kopen",
    betekenis: "Iets voor een bespottelijk lage prijs kopen.",
    oorsprong: "Appels en eieren waren zulke alledaagse waar dat ze symbool stonden voor een verwaarloosbaar bedrag; de volksverbeelding vertelt graag verhalen van boerderijen die ooit letterlijk voor een appel en een ei verkocht zouden zijn."
  },
  {
    tekst: "Bot vangen",
    betekenis: "Geen succes hebben, afgewezen worden.",
    oorsprong: "Van het oude werkwoord 'botten' (stoten, slaan): letterlijk een klap of stoot krijgen — later versterkt door de associatie met de vis bot."
  },
  {
    tekst: "Dat is boter aan de galg gesmeerd",
    betekenis: "Dat is volkomen nutteloze moeite.",
    oorsprong: "Al smeer je een galg vol boter, hij blijft evengoed hetzelfde akelige ding — de moeite verandert er niets aan."
  },
  {
    tekst: "Met zijn neus in de boter vallen",
    betekenis: "Precies op het juiste moment ergens van profiteren, onverwacht geluk hebben.",
    oorsprong: "Beeld van iemand die toevallig in iets waardevols (boter, een teken van overvloed) terechtkomt zonder er zelf iets voor gedaan te hebben."
  },
  {
    tekst: "Voor je eigen deur vegen",
    betekenis: "Eerst je eigen fouten aanpakken voor je die van een ander bekritiseert.",
    oorsprong: "Letterlijk beeld: iedereen behoort in elk geval het stoepje voor zijn eigen huis schoon te vegen voor hij zich met andermans rommel bemoeit."
  },
  {
    tekst: "De gelegenheid maakt de dief",
    betekenis: "Als de omstandigheden er aanleiding toe geven, vervalt men gemakkelijker tot verkeerd gedrag.",
    oorsprong: "Een aloud gezegde dat stelt dat het niet zozeer iemands karakter is, maar de kans die zich voordoet, die tot diefstal (of ander wangedrag) verleidt."
  },
  {
    tekst: "Kleine dieven worden gehangen, maar de grote lopen vrij rond",
    betekenis: "Gewone mensen worden gestraft voor vergrijpen waar machtigen mee wegkomen.",
    oorsprong: "Een middeleeuwse spreuk die al eeuwenlang de ongelijke behandeling van arm en rijk voor de wet aan de kaak stelt."
  },
  {
    tekst: "Als een dief in de nacht",
    betekenis: "Onverwacht en zonder dat men zich ertegen kan verzetten.",
    oorsprong: "Bijbelse uitdrukking (Mattheus 24): 'Zo de heer des huizes geweten had, in welke nachtwake de dief komen zou, hij zou gewaakt hebben.'"
  },
  {
    tekst: "Te diep in het glaasje gekeken hebben",
    betekenis: "Te veel alcohol gedronken hebben.",
    oorsprong: "Beeld van iemand die letterlijk te lang en te vaak in zijn glas heeft gekeken (het heeft leeggedronken) om nog helder na te denken."
  },
  {
    tekst: "Naar Canossa gaan",
    betekenis: "Zich vernederend onderwerpen aan iemands gezag.",
    oorsprong: "Keizer Hendrik IV van Duitsland moest in 1077, na een verloren machtsstrijd met paus Gregorius VII, in boetekleding naar het kasteel Canossa reizen en daar dagenlang buiten in de kou wachten om vergiffenis te krijgen."
  },
  {
    tekst: "Op heterdaad betrapt worden",
    betekenis: "Betrapt worden terwijl je een misdaad of overtreding begaat.",
    oorsprong: "Vertaling van het Latijnse rechtsbegrip 'in flagranti delicto' — letterlijk 'terwijl het misdrijf nog brandt', dus op het moment zelf."
  },
  {
    tekst: "Men moet de dag niet vóór de avond prijzen",
    betekenis: "Je kunt pas beoordelen of iets goed is gegaan als het echt voorbij is.",
    oorsprong: "Simpel maar wijs beeld: hoe een dag zal aflopen weet je pas als de avond is aangebroken, niet eerder."
  },
  {
    tekst: "Onder één deken liggen met iemand",
    betekenis: "In het geheim met iemand samenspannen, het roerend met elkaar eens zijn.",
    oorsprong: "Beeld van twee mensen die letterlijk samen onder één deken liggen — even nauw verbonden als bedgenoten, vaak met een bijklank van gedeeld eigenbelang."
  },
  {
    tekst: "Dat stuit me tegen de borst",
    betekenis: "Dat keur ik sterk af, dat voelt verkeerd.",
    oorsprong: "Lichamelijk beeld: iets dat je letterlijk 'tegen de borst stuit', roept een fysieke weerstand op, alsof het lichaam er automatisch tegen protesteert."
  },
  {
    tekst: "De druiven zijn zuur",
    betekenis: "Doen alsof je iets niet wilt, terwijl je het eigenlijk niet kunt krijgen.",
    oorsprong: "Naar de fabel van Aesopus: een vos die de hoog hangende druiven niet kan bereiken, besluit dat hij ze toch niet lustte, want ze waren immers zuur."
  },
  {
    tekst: "Iemand uit de droom helpen",
    betekenis: "Iemand duidelijk maken dat hij zich vergist.",
    oorsprong: "Beeld van iemand die in een droom of illusie leeft; hem 'uit de droom helpen' betekent hem wakker maken met de werkelijkheid."
  },
  {
    tekst: "De laatste druppel doet de emmer overlopen",
    betekenis: "Na veel kleine ergernissen is de maat eindelijk vol.",
    oorsprong: "Letterlijk beeld van een emmer die al bijna vol is: één druppel meer is genoeg om hem te doen overlopen."
  },
  {
    tekst: "Een druppel in de emmer",
    betekenis: "Een verwaarloosbare hoeveelheid die niets aan de situatie verandert.",
    oorsprong: "Bijbelse vergelijking (Jesaja 40): de volkeren zijn voor God als 'een druppel aan een emmer' — onbeduidend klein in verhouding tot het geheel."
  },
  {
    tekst: "Een druppel op een gloeiende plaat",
    betekenis: "Een hulp of hoeveelheid die volkomen onvoldoende is.",
    oorsprong: "Beeld van een druppel water die op een gloeiend hete plaat valt: hij verdampt meteen, zonder enig blijvend effect."
  },
  {
    tekst: "Op elkaar lijken als twee druppels water",
    betekenis: "Sprekend op elkaar lijken.",
    oorsprong: "Twee druppels water zijn onderling vrijwel niet te onderscheiden — het ultieme beeld van gelijkenis."
  },
  {
    tekst: "In duigen vallen",
    betekenis: "Volledig mislukken, uiteenvallen.",
    oorsprong: "De duigen zijn de houten staven waaruit een vat is opgebouwd; vallen ze uit elkaar omdat de hoepels niet meer sluiten, dan stort het hele vat in."
  },
  {
    tekst: "Iemand onder de duim houden",
    betekenis: "Iemand stevig onder controle houden.",
    oorsprong: "De duim geldt als de sterkste vinger en is zo het zinnebeeld van macht en overwicht."
  },
  {
    tekst: "Iets uit zijn duim zuigen",
    betekenis: "Iets verzinnen, uit de losse pols beweren zonder dat het waar is.",
    oorsprong: "Mogelijk een verwijzing naar een klein kind dat op zijn duim zuigt bij gebrek aan de fles — al even inhoudsloos als een verzonnen verhaal."
  },
  {
    tekst: "Iemands doopceel lichten",
    betekenis: "Nagaan wat iemand op zijn kerfstok heeft, zijn verleden natrekken.",
    oorsprong: "Het doopceel was het geboortebriefje uit het kerkelijk doopregister — voor de invoering van de burgerlijke stand in 1812 de enige manier om na te gaan waar en wanneer iemand geboren was."
  },
  {
    tekst: "Dat geeft de doorslag",
    betekenis: "Dat is bepalend voor de uiteindelijke beslissing.",
    oorsprong: "Ontleend aan de weegschaal: het tongetje slaat door naar de kant die het zwaarst weegt."
  },
  {
    tekst: "Aan een zijden draad hangen",
    betekenis: "Van een piepklein toeval afhangen of iets goed of slecht afloopt.",
    oorsprong: "Het zwaard van Damocles: de tiran Dionysius liet een scherp zwaard aan een dunne, zijden draad ophangen boven het hoofd van zijn jaloerse hoveling Damocles, als les over hoe broos geluk en macht zijn."
  },
  {
    tekst: "De draad van Ariadne",
    betekenis: "Het middel om uit een uitzichtloze, verwarrende situatie de weg terug te vinden.",
    oorsprong: "Ariadne gaf haar minnaar Theseus een kluwen garen mee toen hij in het labyrint van Kreta moest afdalen om de Minotaurus te verslaan — de draad leidde hem na zijn overwinning weer naar de uitgang."
  },
  {
    tekst: "Eendracht maakt macht",
    betekenis: "Door samen te werken bereik je meer dan alleen.",
    oorsprong: "Vertaling van de Latijnse spreuk over eendracht die kleine dingen laat groeien, tegenover tweedracht die de grootste dingen te gronde richt — het devies van de voormalige Republiek der Verenigde Provinciën en later van België."
  },
  {
    tekst: "Ere wie ere toekomt",
    betekenis: "Geef iemand de erkenning die hij verdient.",
    oorsprong: "Bijbelse spreuk (Romeinen 13): 'geef aan ieder wat u schuldig bent... eer aan wie eer toekomt'."
  },
  {
    tekst: "Eerlijk duurt het langst",
    betekenis: "Bedrog en oneerlijkheid komen altijd uit; op termijn loont eerlijkheid het meest.",
    oorsprong: "Een aloud volksgezegde dat vertrouwen stelt in de uiteindelijke overwinning van de waarheid."
  },
  {
    tekst: "Die het eerst komt, het eerst maalt",
    betekenis: "Wie het eerst aan de beurt is, wordt ook het eerst geholpen.",
    oorsprong: "Uit het molenaarsbedrijf: wie met zijn koren het eerst bij de molen aankwam, werd ook het eerst geholpen."
  },
  {
    tekst: "Een ezel stoot zich geen tweemaal aan dezelfde steen",
    betekenis: "Wie eenmaal een fout heeft gemaakt, is voorzichtig om niet dezelfde fout te herhalen.",
    oorsprong: "Een aloude, uit het Latijn overgeleverde spreuk waarin de ezel — elders vaak als dom dier afgeschilderd — juist te slim wordt geacht om tweemaal in dezelfde valkuil te lopen."
  },
  {
    tekst: "Ezel geboren, ezel gebleven",
    betekenis: "Wie geen aanleg heeft, zal het nooit ver brengen, hoezeer hij ook zijn best doet.",
    oorsprong: "Beeld van een dier waarvan de aard vaststaat bij geboorte: een ezel kan zich nooit tot een ander, knapper dier ontwikkelen."
  },
  {
    tekst: "Eieren voor zijn geld kiezen",
    betekenis: "Genoegen nemen met minder, omdat je anders misschien niets zou krijgen.",
    oorsprong: "Op het platteland betaalde men vroeger vaak met eieren, omdat geld schaars was — genoegen nemen met eieren in plaats van geld was dus het zekere boven het onzekere kiezen."
  },
  {
    tekst: "Niet al je eieren onder één kip leggen",
    betekenis: "Niet je hele vermogen of al je kansen op één enkele zaak zetten.",
    oorsprong: "Beeld van een boer die zijn hele voorraad eieren onder één enkele broedse kip zou leggen: gaat dat mis, dan is alles in één keer verloren."
  },
  {
    tekst: "Het is daar koek en ei",
    betekenis: "Ze zijn dikke vrienden, het klikt uitstekend tussen hen.",
    oorsprong: "Koek en ei waren allebei feestelijk, gul voedsel — een huishouden waar het 'koek en ei' is, onthaalt elkaar met het beste wat er is."
  },
  {
    tekst: "Terugverlangen naar de vleespotten van Egypte",
    betekenis: "Heimwee hebben naar een vroegere, materieel betere situatie, ook al was die eigenlijk onvrij of ongezond.",
    oorsprong: "Bijbelse verwijzing (Exodus 16): de Israëlieten klaagden in de woestijn dat ze liever in slavernij in Egypte waren gestorven bij de vleespotten, dan van honger om te komen in de vrijheid."
  },
  {
    tekst: "Te elfder ure",
    betekenis: "Op het allerlaatste moment, nog net op tijd.",
    oorsprong: "Bijbelse gelijkenis (Mattheus 20) van de arbeiders in de wijngaard: wie pas om vijf uur 's middags — het elfde uur van de werkdag — begon te werken, kreeg toch hetzelfde loon als wie er al de hele dag stond."
  },
  {
    tekst: "Al doende leert men",
    betekenis: "Door ervaring op te doen, leer je hoe je iets moet aanpakken.",
    oorsprong: "Eenvoudig maar tijdloos inzicht: pas door iets daadwerkelijk te doen, ontdek je hoe het werkt."
  },
  {
    tekst: "In goeden doen zijn",
    betekenis: "Welgesteld zijn, er financieel goed voor staan.",
    oorsprong: "'Doen' in de oude betekenis van omstandigheden of toestand — wie 'in goeden doen' is, verkeert in een goede (financiële) toestand."
  },
  {
    tekst: "Zich van de domme houden",
    betekenis: "Doen alsof je nergens van weet of ergens niets mee te maken hebt.",
    oorsprong: "Letterlijk: zich gedragen alsof je tot de dommen ('de domme(n)') behoort, terwijl je in werkelijkheid best begrijpt waar het om gaat."
  },
  {
    tekst: "De gelegenheid bij de haren grijpen",
    betekenis: "Van een gunstig moment meteen gebruikmaken, voor het voorbij is.",
    oorsprong: "De Romeinse godin Fortuna, de godin van het geluk, werd afgebeeld met lang haar aan de voorkant van haar hoofd maar kaal vanachter — je moest haar dus grijpen vóór ze voorbijkwam, want daarna was er niets meer om vast te pakken."
  },
  {
    tekst: "Hinken op twee gedachten",
    betekenis: "Weifelen tussen twee mogelijkheden, geen keuze durven maken.",
    oorsprong: "Bijbelse uitdrukking (1 Koningen 18): de profeet Elia vraagt het volk waarom het maar blijft 'hinken op twee gedachten' in plaats van te kiezen tussen God en de afgod Baäl."
  },
  {
    tekst: "De geest is gewillig, maar het vlees is zwak",
    betekenis: "Je hebt wel de beste bedoelingen, maar je zwicht toch voor verleiding of gemakzucht.",
    oorsprong: "Bijbels citaat (Mattheus 26), door Jezus gesproken tot zijn slaperige discipelen in de hof van Gethsémané."
  },
  {
    tekst: "Iemand voor de gek houden",
    betekenis: "Iemand bespottelijk maken of misleiden voor de grap.",
    oorsprong: "Mogelijk een herinnering aan de tijd dat vorsten een hofnar (een 'gek') in dienst hadden, wiens taak het was om anderen te bespotten en voor de gek te houden."
  },
  {
    tekst: "Alle gekheid op een stokje",
    betekenis: "Even serieus zijn, genoeg gegrapt.",
    oorsprong: "Verwijst naar het stokje (de marot) van de hofnar: 'berg je zotternij nu maar op je stokje' — tijd om ermee te stoppen."
  },
  {
    tekst: "Men moet nooit goed geld naar kwaad geld gooien",
    betekenis: "Je moet geen extra geld steken in een zaak waarin je al verlies hebt geleden.",
    oorsprong: "Beeld van iemand die, om al verloren geld terug te winnen, alleen maar meer geld verspilt aan een hopeloze zaak."
  },
  {
    tekst: "Tijd is geld",
    betekenis: "Tijd heeft economische waarde, want je kunt er productief werk in verrichten.",
    oorsprong: "Vertaling van de Engelse uitdrukking 'time is money'."
  },
  {
    tekst: "Geld stinkt niet",
    betekenis: "Het maakt niet uit hoe je aan je geld gekomen bent, als je het maar hebt.",
    oorsprong: "Toegeschreven aan de Romeinse keizer Vespasianus: toen zijn zoon Titus bezwaar maakte tegen een belasting op openbare toiletten, antwoordde de keizer droogjes dat het geld toch niet stonk."
  },
  {
    tekst: "Geld is de zenuw van de oorlog",
    betekenis: "Zonder voldoende geldmiddelen kun je geen grote onderneming volhouden.",
    oorsprong: "Een aloude Romeinse spreuk over de noodzaak van financiering om een oorlog te kunnen voeren."
  },
  {
    tekst: "Wie in een glazen huis woont, moet niet met stenen gooien",
    betekenis: "Bekritiseer een ander niet voor iets waar je zelf ook schuldig aan bent.",
    oorsprong: "Wie zelf kwetsbaar is voor kritiek (zoals een huis van glas kwetsbaar is voor stenen) kan beter geen aanval op een ander beginnen, want die aanval kan net zo makkelijk op hemzelf worden teruggekaatst."
  },
  {
    tekst: "Leven als God in Frankrijk",
    betekenis: "Zorgeloos en in grote weelde leven.",
    oorsprong: "De precieze herkomst is onzeker; een verklaring wijst naar de losbandige Schotse huurlingen die in de 15e eeuw in Frans dienst vochten, een andere naar de Franse Revolutie, toen de kerkelijke moraal tijdelijk plaatsmaakte voor een verering van de Rede."
  },
  {
    tekst: "Iemand de deur wijzen",
    betekenis: "Iemand wegsturen, hem te kennen geven dat hij moet vertrekken.",
    oorsprong: "Letterlijk gebaar: iemand fysiek naar de uitgang wijzen als teken dat hij niet langer welkom is."
  },
  {
    tekst: "Iets in de gaten hebben",
    betekenis: "Iets al doorzien of opgemerkt hebben.",
    oorsprong: "'Gaten' werd hier gebruikt voor de ogen (oogkassen); iets 'in de gaten hebben' betekende dus letterlijk dat je het al met eigen ogen had gezien en begrepen."
  },
  {
    tekst: "Geld regeert de wereld",
    betekenis: "Wie genoeg geld heeft, kan de meeste zaken naar zijn hand zetten.",
    oorsprong: "Een cynische, eeuwenoude constatering over de macht van rijkdom in menselijke aangelegenheden."
  },
  {
    tekst: "Ergens op gebrand zijn",
    betekenis: "Iets heel graag willen, sterk naar iets verlangen.",
    oorsprong: "Het woord 'gebrand' had hier de betekenis van 'brandend', zoals ook in 'op elkaar gebeten zijn' voor 'bijtend' vijandig — een innerlijk vuur van verlangen."
  },
  {
    tekst: "Tussen hamer en aambeeld zitten",
    betekenis: "Klem zitten tussen twee partijen en van beide kanten de klappen opvangen.",
    oorsprong: "Beeld uit de smederij: het metaal dat bewerkt wordt, ligt letterlijk tussen de neerkomende hamer en het onwrikbare aambeeld in."
  },
  {
    tekst: "Veel handen maken licht werk",
    betekenis: "Als meerdere mensen meehelpen, valt een karwei iedereen minder zwaar.",
    oorsprong: "Eenvoudige rekensom: verdeel je hetzelfde werk over meer mensen, dan hoeft niemand het alleen te dragen."
  },
  {
    tekst: "De ene hand wast de andere",
    betekenis: "Als mensen elkaar over en weer helpen, hebben beiden er voordeel van.",
    oorsprong: "Letterlijk beeld: je kunt je handen pas goed wassen als de ene hand de andere schoonmaakt — wederzijdse hulp werkt het best."
  },
  {
    tekst: "Van de hand in de tand leven",
    betekenis: "Al je verdiende geld meteen weer moeten uitgeven, zonder ooit iets te kunnen sparen.",
    oorsprong: "Beeld van iemand die zo arm is dat het geld rechtstreeks van de hand naar de mond (de tand) gaat, zonder ooit opzij gelegd te worden."
  },
  {
    tekst: "Iemand de hand boven het hoofd houden",
    betekenis: "Iemand beschermen en zijn fouten door de vingers zien.",
    oorsprong: "Alsof men met de eigen hand de slagen afweert die iemand anders zouden kunnen treffen."
  },
  {
    tekst: "Zijn handen in onschuld wassen",
    betekenis: "Alle verantwoordelijkheid of schuld van je afschuiven.",
    oorsprong: "Bijbelse verwijzing naar Pontius Pilatus, die zijn handen waste voor de menigte om te tonen dat hij onschuldig was aan de veroordeling van Jezus."
  },
  {
    tekst: "Met de handen in het haar zitten",
    betekenis: "Radeloos zijn, geen idee hebben hoe een probleem op te lossen.",
    oorsprong: "Fysiek gebaar van wanhoop: je grijpt naar je eigen haar omdat je nergens meer raad mee weet."
  },
  {
    tekst: "De handen uit de mouwen steken",
    betekenis: "Flink aan het werk gaan, de schouders eronder zetten.",
    oorsprong: "Wie serieus aan de slag gaat, stroopt letterlijk zijn mouwen op en steekt zijn handen eruit om vrij te kunnen werken."
  },
  {
    tekst: "Met de handen in de schoot zitten",
    betekenis: "Niets doen, passief blijven terwijl er werk te doen is.",
    oorsprong: "Het tegenovergestelde gebaar van 'de handen uit de mouwen steken': de handen liggen werkloos gevouwen in de schoot."
  },
  {
    tekst: "Het hek is van de dam",
    betekenis: "Er is geen enkel toezicht meer, iedereen kan doen wat hij wil.",
    oorsprong: "Verwijst naar het hek bij de dam van een weiland: staat dat open, dan kunnen de dieren zomaar alle kanten op lopen."
  },
  {
    tekst: "Iemand over de hekel halen",
    betekenis: "Iemand scherp bekritiseren, hem hard beoordelen.",
    oorsprong: "De hekel was een werktuig met scherpe pinnen waarmee vlas of hennep gekamd (gehekeld) werd — een pijnlijke, doorborende bewerking."
  },
  {
    tekst: "Blaffende honden bijten niet",
    betekenis: "Mensen die veel dreigen en schelden, maken hun dreigementen meestal niet waar.",
    oorsprong: "Beeld uit de hondenwereld: een hond die blaft, gebruikt zijn energie al aan geluid maken en valt daardoor minder snel ook echt aan."
  },
  {
    tekst: "Als twee honden vechten om een been, loopt de derde ermee heen",
    betekenis: "Terwijl twee partijen ruzie maken over iets, gaat een derde partij er ongemerkt mee vandoor.",
    oorsprong: "Letterlijk beeld van twee honden die zo druk zijn met vechten om een bot, dat een derde hond het gewoon wegkaapt."
  },
  {
    tekst: "Men moet geen slapende honden wakker maken",
    betekenis: "Bemoei je niet ongevraagd met een sluimerend probleem, want dan roep je het juist weer op.",
    oorsprong: "Wie een slapende hond met rust laat, voorkomt dat het dier wakker schrikt en bijt — sommige zaken kun je beter niet oprakelen."
  },
  {
    tekst: "Zich in het hol van de leeuw wagen",
    betekenis: "Jezelf willens en wetens in een gevaarlijke of vijandige situatie begeven.",
    oorsprong: "Ontleend aan de fabel van de vos die zich in het hol van de leeuw waagt, recht in de bek van het gevaar."
  },
  {
    tekst: "Een homerisch gelach",
    betekenis: "Een enorm, aanstekelijk en niet te stoppen gelach.",
    oorsprong: "Verwijst naar het 'onuitblusselijke gelach' van de goden op de Olympus, zoals beschreven door de Griekse dichter Homerus in de Ilias en de Odyssee."
  },
  {
    tekst: "Elkaar in de haren zitten",
    betekenis: "Ruzie hebben, met elkaar overhoop liggen.",
    oorsprong: "Ontleend aan jongensgevechten waarbij men elkaar letterlijk bij de haren pakte en trok."
  },
  {
    tekst: "Haar op de tanden hebben",
    betekenis: "Assertief en onbevreesd zijn, voor jezelf durven opkomen.",
    oorsprong: "Gaat mogelijk terug op een oud woord 'haar' voor scherpe oneffenheden zoals bij een paardengebit — een stevig, 'ruw' gebit werd overgebracht op iemands karakter."
  },
  {
    tekst: "Het scheelde geen haar",
    betekenis: "Het was maar op een haartje na misgegaan, of net goed gekomen.",
    oorsprong: "Letterlijk: het verschil was niet groter dan de breedte van een haar — de kleinst denkbare marge."
  },
  {
    tekst: "Haantje de voorste zijn",
    betekenis: "Overal de eerste willen zijn, vooraan willen staan.",
    oorsprong: "Verwijst naar de haan die bij een gevecht tussen hanen altijd als eerste op zijn tegenstander afvliegt."
  },
  {
    tekst: "De hand op het hart leggen",
    betekenis: "Eerlijk bij jezelf nagaan of je naar eer en geweten gehandeld hebt.",
    oorsprong: "Fysiek gebaar: door de hand op de borst te leggen, luister je als het ware naar de rustige of onrustige slag van je eigen hart."
  },
  {
    tekst: "Hand- en spandiensten verlenen",
    betekenis: "Praktische hulp en klusjes verrichten om iemand te ondersteunen.",
    oorsprong: "Oorspronkelijk verplichte diensten voor het algemeen nut: wie een paard had, verrichtte 'spandiensten' (met trekdier), de rest 'handdiensten' (met de blote handen)."
  },
  {
    tekst: "Iets voor de hand liggen",
    betekenis: "Iets is meteen duidelijk of vanzelfsprekend.",
    oorsprong: "Beeld van koopwaar die letterlijk voor je op tafel ligt uitgestald — je hoeft er niet naar te zoeken, je ziet het meteen."
  },
  {
    tekst: "Iemands handel en wandel",
    betekenis: "Iemands hele doen en laten, zijn gedrag in het algemeen.",
    oorsprong: "Letterlijk: hoe iemand handelt en hoe hij door het leven gaat ('wandelt') — een samenvattend beeld van iemands hele levenswijze."
  },
  {
    tekst: "Met hart en ziel ergens achter staan",
    betekenis: "Iets met volledige overgave en toewijding doen.",
    oorsprong: "Bijbelse uitdrukking (Mattheus 22): God liefhebben 'met geheel uw hart en met geheel uw ziel' — de grootst mogelijke innerlijke inzet."
  },
  {
    tekst: "Zijn hart ophalen aan iets",
    betekenis: "Volop genieten van iets, je er helemaal in uitleven.",
    oorsprong: "Letterlijk: zijn gemoed verheffen en verfrissen door er diep van te 'ademen' — jezelf compleet laten opladen door iets waar je van houdt."
  },
  {
    tekst: "Waar het hart vol van is, loopt de mond van over",
    betekenis: "Waar je vol van bent, daar praat je vanzelf over.",
    oorsprong: "Beeld van een vat dat overloopt zodra het te vol is — emoties of gedachten die je bezighouden, ontsnappen vanzelf via je mond."
  },
  {
    tekst: "Het hart zinkt iemand in de schoenen",
    betekenis: "Alle moed en hoop op een goede afloop plotseling verliezen.",
    oorsprong: "Overdreven lichamelijk beeld: van pure schrik of tegenslag zakt het hart als het ware helemaal weg, tot in de schoenen."
  },
  {
    tekst: "Zijn hart uitstorten",
    betekenis: "Alles vertellen wat je dwarszit, je diepste gevoelens delen.",
    oorsprong: "Bijbelse uitdrukking (Psalm 62): 'stort ulieder hart uit voor Zijn aangezicht' — jezelf helemaal leeggieten bij een luisterend oor."
  },
  {
    tekst: "Zijn hart op de tong dragen",
    betekenis: "Openhartig zijn, precies zeggen wat je denkt en voelt.",
    oorsprong: "Beeld waarbij het hart (het gevoel) zich zo dicht bij de tong bevindt dat het er zonder omwegen uit rolt."
  },
  {
    tekst: "Als de kat van huis is, dansen de muizen",
    betekenis: "Zonder toezicht gaan ondergeschikten al snel hun eigen gang.",
    oorsprong: "Zolang de kat er niet is om ze te grijpen, voelen de muizen zich vrij om ongestoord rond te dansen."
  },
  {
    tekst: "In het donker zijn alle katten grauw",
    betekenis: "In het duister of bij onduidelijkheid zijn verschillen tussen mensen of zaken niet meer te zien.",
    oorsprong: "Letterlijk: in het donker is de kleur van een kat niet meer te onderscheiden — alles lijkt dan hetzelfde."
  },
  {
    tekst: "In katzwijm vallen",
    betekenis: "Kort buiten bewustzijn raken, flauwvallen.",
    oorsprong: "Vergelijking met een kat die na een lelijke val even versuft blijft liggen, maar al snel weer overeind krabbelt."
  },
  {
    tekst: "Een kat een kat noemen",
    betekenis: "Iets recht voor zijn raap zeggen, zonder het te verzachten.",
    oorsprong: "Vertaling van een Frans gezegde over het bij de juiste, onopgesmukte naam noemen van iets."
  },
  {
    tekst: "De heler is zo goed als de steler",
    betekenis: "Wie gestolen goed verhandelt, is even schuldig als wie het gestolen heeft.",
    oorsprong: "Een oud rechtsbeginsel: medeplichtigheid aan een misdrijf weegt net zo zwaar als het misdrijf zelf."
  },
  {
    tekst: "Onder het juk doorgaan",
    betekenis: "Je diep vernederd moeten onderwerpen aan de overwinnaar.",
    oorsprong: "Uit de Romeinse geschiedenis: na hun nederlaag bij Caudium moesten Romeinse soldaten doorlopen onder het 'Caudijnse juk' — twee opgestoken speren met een derde erover, als teken van de diepste vernedering."
  },
  {
    tekst: "Een Judaskus",
    betekenis: "Een schijnbaar liefdevol gebaar dat in werkelijkheid verraad verbergt.",
    oorsprong: "Verwijst naar de apostel Judas, die Jezus met een kus aan zijn vijanden overleverde."
  },
  {
    tekst: "Iemand in de kaart laten kijken",
    betekenis: "Onthullen wat je eigenlijk van plan bent.",
    oorsprong: "Uit het kaartspel: wie zijn kaarten aan een ander laat zien, geeft zijn strategie prijs."
  },
  {
    tekst: "Met open kaart spelen",
    betekenis: "Eerlijk en openlijk vertellen wat je van plan bent, zonder verborgen agenda.",
    oorsprong: "Uit het kaartspel: wie zijn kaarten open op tafel legt, verbergt niets voor de tegenstander."
  },
  {
    tekst: "Alles op één kaart zetten",
    betekenis: "Al je kansen op één enkele uitkomst laten afhangen, zonder achterdeur.",
    oorsprong: "Uit het kaartspel: wie zijn hele inzet op één kaart zet, verliest bij een verkeerde gok in één klap alles."
  },
  {
    tekst: "Een doorgestoken kaart",
    betekenis: "Een van tevoren afgesproken, vals opgezet plan.",
    oorsprong: "Uit het kaartspel: kaarten die vals geschud ('doorgestoken') zijn, zodat een van de spelers stiekem de beste kaarten krijgt."
  },
  {
    tekst: "Van het kastje naar de muur gestuurd worden",
    betekenis: "Steeds weer doorverwezen worden zonder ergens echt geholpen te worden.",
    oorsprong: "Beeld van iemand die telkens naar een andere plek of instantie verwezen wordt, zonder ooit bij de juiste persoon uit te komen."
  },
  {
    tekst: "Iemand de kast uitvegen",
    betekenis: "Iemand fors op zijn nummer zetten, hem een flinke uitbrander geven.",
    oorsprong: "Letterlijk beeld van een grondige schoonmaakbeurt: de hele kast eens goed leeghalen en uitvegen."
  },
  {
    tekst: "Alles over één kam scheren",
    betekenis: "Alles of iedereen zonder onderscheid gelijk behandelen.",
    oorsprong: "Ontleend aan de weverij: de breedte van een geweven stuk stof wordt bepaald door de kam die daarbij gebruikt wordt, waardoor alle draden identiek behandeld worden."
  },
  {
    tekst: "In de kaars vliegen",
    betekenis: "Zelf de oorzaak zijn van je eigen ondergang of ontmaskering.",
    oorsprong: "Beeld van een mot die steeds dichter om een brandende kaars blijft vliegen, tot ze uiteindelijk haar eigen vleugels verschroeit."
  },
  {
    tekst: "Kant en klaar",
    betekenis: "Helemaal afgewerkt en gebruiksklaar.",
    oorsprong: "'Kant' betekende oorspronkelijk netjes en zindelijk — de ruwe kantjes zijn eraf, dus helemaal in orde."
  },
  {
    tekst: "Dat raakt kant noch wal",
    betekenis: "Dat slaat nergens op, dat is volkomen mis.",
    oorsprong: "Uit de binnenvaart: 'kant' en 'wal' zijn allebei de oever waar een schip moet aanleggen — wie geen van beide raakt, mist zijn doel volledig."
  },
  {
    tekst: "Kennis is macht",
    betekenis: "Wie veel weet, staat sterker en komt verder in het leven.",
    oorsprong: "Vertaling van het Engelse 'knowledge is power', afkomstig uit een Nederlandse vertaling (1598) van de Heilige Overdenkingen van filosoof Francis Bacon."
  },
  {
    tekst: "Iets op de keper beschouwen",
    betekenis: "Iets heel nauwkeurig en grondig bekijken.",
    oorsprong: "De keper is de hoek die de schering en de inslag van een geweven stof met elkaar maken; om een stof goed te beoordelen, bekeek men precies hoe de draden overheen liepen."
  },
  {
    tekst: "Het kind met het badwater weggooien",
    betekenis: "Bij het afwijzen van iets slechts ook onbedoeld het goede erin weggooien.",
    oorsprong: "Beeld van een badje geven aan een kind in een teil water: gooi je achteraf achteloos alles weg, dan verlies je zonder na te denken ook het kind zelf mee."
  },
  {
    tekst: "Van kindsbeen af",
    betekenis: "Al vanaf de vroegste jeugd.",
    oorsprong: "'Been' betekende hier oorspronkelijk 'benen' in het meervoud — van kindsbeen af is dus letterlijk: vanaf dat je op je eigen kinderbeentjes liep."
  },
  {
    tekst: "Het kind bij de naam noemen",
    betekenis: "Ronduit zeggen waar het werkelijk om gaat, zonder het te verzachten.",
    oorsprong: "In plaats van iets met een vage omschrijving te omzeilen, noem je het onderwerp gewoon recht voor zijn raap bij zijn eigen naam."
  },
  {
    tekst: "Klaar is Kees",
    betekenis: "Zo, dat is gebeurd, alles is in orde.",
    oorsprong: "Kees is hier, net als in veel vergelijkbare zegswijzen (een brave Hendrik, een nieuwsgierig Aagje), een willekeurig gekozen naam om het gezegde persoonlijk en pakkend te maken."
  },
  {
    tekst: "Zo klaar als een klontje",
    betekenis: "Volkomen duidelijk.",
    oorsprong: "Verwijst naar een suikerklontje: zuiver en overzichtelijk van vorm — 'klaar' in de oude betekenis van 'helder'."
  },
  {
    tekst: "Een kink in de kabel",
    betekenis: "Een onverwachte complicatie of belemmering in een plan.",
    oorsprong: "Een 'kink' is een draai of knik in een touw (kabel), die het gladde afrollen ervan plotseling blokkeert."
  },
  {
    tekst: "Lopen als een kip zonder kop",
    betekenis: "Doelloos en paniekerig rondrennen, zonder helder na te denken.",
    oorsprong: "Verwijst naar het slachten van een kip: sloeg men het beest de kop af, dan bleef het lichaam soms nog een paar stappen doorlopen voor het omviel."
  },
  {
    tekst: "Iemand een kluitje in het riet sturen",
    betekenis: "Iemand afschepen met een nietszeggend, onbevredigend antwoord.",
    oorsprong: "Vermoedelijk ontleend aan het weggooien van een kluit in het riet voor een hond: vindt hij hem al, dan is de kluit toch niets waard."
  },
  {
    tekst: "Iets onder de knie hebben",
    betekenis: "Iets volledig beheersen, ergens heel bedreven in zijn.",
    oorsprong: "Ontleend aan het worstelen: wie zijn tegenstander onder zijn knie heeft, heeft hem volledig in bedwang."
  },
  {
    tekst: "Er is een vuiltje aan de knikker",
    betekenis: "Er is iets mis met de zaak, er zit een addertje onder het gras.",
    oorsprong: "Ontleend aan het knikkerspel: een knikker met een vuiltje of oneffenheid rolt niet zuiver, waardoor het spel niet eerlijk verloopt."
  },
  {
    tekst: "Geen knip voor de neus waard zijn",
    betekenis: "Volstrekt niets betekenen, waardeloos zijn.",
    oorsprong: "Een 'knip' met de duim voor iemands gezicht was een uiterst kleinerend gebaar van minachting."
  },
  {
    tekst: "Oude koeien uit de sloot halen",
    betekenis: "Onnodig een al lang afgesloten kwestie weer oprakelen.",
    oorsprong: "Het gaat hier niet om koeien die oud zijn, maar om koeien die al lang geleden in de sloot verdronken zijn — die haal je niet meer op, want daar heeft niemand meer iets aan."
  },
  {
    tekst: "Over koetjes en kalfjes praten",
    betekenis: "Over onbelangrijke, alledaagse dingen kletsen zonder serieuze onderwerpen aan te snijden.",
    oorsprong: "Verwijst naar het informele avondpraatje van boeren over hun vee, tegenover ernstiger gesprekken over zaken die er echt toe deden."
  },
  {
    tekst: "Op gloeiende kolen zitten",
    betekenis: "Vol ongeduldige spanning op iets wachten.",
    oorsprong: "Mogelijk een herinnering aan de pijniging waarbij een verdachte met blote voeten op hete kolen moest staan."
  },
  {
    tekst: "Vurige kolen op iemands hoofd stapelen",
    betekenis: "Iemand die je kwaad doet juist met goedheid overladen, zodat hij zich schaamt.",
    oorsprong: "Bijbelse uitdrukking (Spreuken 25): geef je vijand te eten en te drinken, 'want gij zult vurige kolen op zijn hoofd hopen' — hem zo dwingen zijn vijandschap te laten varen."
  },
  {
    tekst: "Dat spant de kroon",
    betekenis: "Dat is het toppunt, het beste (of het ergste) van allemaal.",
    oorsprong: "Middeleeuws beeld: de koning 'spande' (bond) letterlijk zijn kroon vast op zijn hoofd, en ook de winnaar van een wedstrijd kreeg zo zijn erekrans stevig opgezet."
  },
  {
    tekst: "De kruik gaat zo lang te water tot hij breekt",
    betekenis: "Als je iets riskants blijft herhalen, loopt het uiteindelijk toch een keer mis.",
    oorsprong: "Beeld van een aarden kruik die telkens weer water gaat halen bij de put — tot ze op een dag tegen de rand stoot en breekt."
  },
  {
    tekst: "Iets met een korreltje zout nemen",
    betekenis: "Iets niet helemaal serieus of letterlijk opvatten.",
    oorsprong: "Vertaling van de Latijnse uitdrukking 'cum grano salis' (met een korrel zout), gebruikt in de zin van: met een beetje gezond verstand, niet al te letterlijk."
  },
  {
    tekst: "Kort aangebonden zijn",
    betekenis: "Weinig geduldig zijn, snel geïrriteerd reageren.",
    oorsprong: "Oorspronkelijk gezegd van een kwaadaardige hond die kort aangelijnd moest worden gehouden om anderen niet te bijten."
  },
  {
    tekst: "Familie van de koude kant",
    betekenis: "Aangetrouwde familie, in plaats van bloedverwanten.",
    oorsprong: "Letterlijk: familie die je 'koud' laat, waarvoor je je niet warm maakt zoals voor je eigen bloedverwanten."
  },
  {
    tekst: "Krokodillentranen huilen",
    betekenis: "Doen alsof je verdrietig bent, terwijl je in werkelijkheid geen enkel medelijden voelt.",
    oorsprong: "Naar het aloude volksverhaal dat een krokodil tranen zou vergieten terwijl hij zijn prooi verslindt."
  },
  {
    tekst: "Krom liggen",
    betekenis: "Nauwelijks genoeg hebben om van rond te komen, je financieel flink moeten behelpen.",
    oorsprong: "Wie een te kort of te smal bed heeft, kan zich er niet in uitstrekken en moet zich letterlijk krom liggen om er toch in te passen."
  },
  {
    tekst: "Het gemeste kalf slachten",
    betekenis: "Groots feestvieren en het allerbeste opdissen voor een terugkerende dierbare.",
    oorsprong: "Bijbelse gelijkenis van de verloren zoon (Lukas 15): bij diens terugkeer beveelt de vader 'brengt het gemeste kalf, en slacht het; en laat ons eten en vrolijk zijn'."
  },
  {
    tekst: "Het gouden kalf aanbidden",
    betekenis: "Geld en rijkdom als het allerhoogste goed beschouwen.",
    oorsprong: "Bijbelse verwijzing (Exodus 32): terwijl Mozes op de berg was, liet het volk een gouden kalf gieten en aanbad dat als een god."
  },
  {
    tekst: "Zich koest houden",
    betekenis: "Stil zijn, je niet verzetten, geen kik geven.",
    oorsprong: "Afkomstig van het Franse 'couche!' ('ga liggen!'), van oudsher een commando tegen honden."
  },
  {
    tekst: "Flink uit de kluiten gewassen zijn",
    betekenis: "Stevig en groot uitgegroeid zijn.",
    oorsprong: "Beeld van jong koren dat flink opschiet tussen de aardkluiten van de akker."
  },
  {
    tekst: "De kluts kwijt zijn",
    betekenis: "In verwarring zijn, niet meer weten wat je moet doen.",
    oorsprong: "'Kluts' betekende oorspronkelijk 'de slag' — wie de kluts kwijt is, heeft het overzicht over de situatie verloren."
  },
  {
    tekst: "Het is kwaad kersen eten met de groten",
    betekenis: "In het gezelschap van machtige mensen loop je het risico ruw of oneerlijk behandeld te worden.",
    oorsprong: "Beeld van kersen eten met iemand die de pitten naar je toe gooit: omgaan met de groten der aarde kan onaangenaam uitpakken zodra het hun uitkomt."
  },
  {
    tekst: "Kruis of munt werpen",
    betekenis: "Door het opgooien van een muntstuk willekeurig een keuze laten beslissen.",
    oorsprong: "Middeleeuwse munten droegen aan de ene kant een kruis en aan de andere kant de beeltenis of waarde van de munt; men wedde welke kant boven zou komen."
  },
  {
    tekst: "Wie een kuil graaft voor een ander, valt er zelf in",
    betekenis: "Wie een ander kwaad probeert te doen, loopt zelf het risico daar het slachtoffer van te worden.",
    oorsprong: "Bijbelse spreuk (Spreuken 26): 'Die een kuil graaft, zal er in vallen, en die een steen wentelt, op hem zal hij wederkeren.'"
  },
  {
    tekst: "Je kruit droog houden",
    betekenis: "Ervoor zorgen dat je klaar en voorbereid bent voor het moment dat je in actie moet komen.",
    oorsprong: "Uit de tijd van de voorlaadgeweren: werd het buskruit nat, dan kon het niet meer worden afgevuurd."
  },
  {
    tekst: "Bij iemand in het krijt staan",
    betekenis: "Schulden bij iemand hebben, hem iets verschuldigd zijn.",
    oorsprong: "In de winkel werden schulden vroeger met krijt op een lei of bord bijgehouden."
  },
  {
    tekst: "Van twee kwaden het minste kiezen",
    betekenis: "Als beide opties onaangenaam zijn, kiezen voor de optie die het minste schade aanricht.",
    oorsprong: "Praktische levenswijsheid: soms is ontkomen aan het slechtste niet mogelijk, en moet je bewust het minst erge overhouden."
  },
  {
    tekst: "Een leugen om bestwil",
    betekenis: "Een onwaarheid die verteld wordt met een goede bedoeling, om iemand te sparen.",
    oorsprong: "Het idee dat zo'n leugen geen echte zonde is, omdat de bedoeling erachter juist zorgzaam is."
  },
  {
    tekst: "Leugens hebben korte benen",
    betekenis: "Een onwaarheid komt meestal snel aan het licht.",
    oorsprong: "Beeld van iemand met korte benen die niet ver of snel kan komen — een leugen houdt evenmin lang stand."
  },
  {
    tekst: "Wie het laatst lacht, lacht het best",
    betekenis: "Wees niet te vroeg blij met een overwinning; pas de uiteindelijke uitkomst telt echt.",
    oorsprong: "Waarschuwing tegen voorbarige vreugde: pas als de zaak helemaal voorbij is, weet je wie er werkelijk goed van afkomt."
  },
  {
    tekst: "Zo lang er leven is, is er hoop",
    betekenis: "Zolang iemand nog leeft, blijft er kans op een goede afloop of verbetering.",
    oorsprong: "Een oude troostspreuk voor wie in moeilijke omstandigheden of ziekte verkeert."
  },
  {
    tekst: "Er is geen leven in de brouwerij",
    betekenis: "Er is geen levendigheid of activiteit in een huis of onderneming.",
    oorsprong: "Volgens overlevering gezegd van de brouwerij van de schilder Jan Steen, die zijn zaak verwaarloosde ten faveure van zijn schilderskunst en huishouden vol drukte."
  },
  {
    tekst: "Men moet leven en laten leven",
    betekenis: "Bemoei je niet te veel met anderen; gun ieder zijn eigen manier van leven.",
    oorsprong: "Een oud beginsel van verdraagzaamheid: zorg voor jezelf, maar laat een ander evengoed op zijn eigen wijze bestaan."
  },
  {
    tekst: "Luchtkastelen bouwen",
    betekenis: "Dromen over onhaalbare plannen die nooit werkelijkheid zullen worden.",
    oorsprong: "Beeld van een indrukwekkend kasteel dat volledig uit lucht is opgetrokken — mooi om aan te denken, maar zonder enige grond onder de voeten."
  },
  {
    tekst: "Iemand een luis in de pels zijn",
    betekenis: "Iemand voortdurend hinderen en irriteren zonder dat hij je kwijt kan raken.",
    oorsprong: "Beeld van een luis die zich ongemerkt in de vachtjas (pels) nestelt en daar voortdurend voor jeuk en ongemak zorgt."
  },
  {
    tekst: "Met man en muis vergaan",
    betekenis: "Volledig te gronde gaan, met alles en iedereen die erbij hoorde.",
    oorsprong: "Zeemansuitdrukking voor een schip dat zinkt met de hele bemanning aan boord; 'muis' is er waarschijnlijk om het rijm bijgevoegd."
  },
  {
    tekst: "Met man en macht",
    betekenis: "Met alle beschikbare kracht en de hulp van iedereen die kan meehelpen.",
    oorsprong: "Oorspronkelijk 'met man en maag' — met alle leenmannen en bloedverwanten (magen) die men kon oproepen."
  },
  {
    tekst: "De rechte man op de rechte plaats",
    betekenis: "Iemand die precies past bij de taak of functie die hij vervult.",
    oorsprong: "Vertaling van de Engelse uitdrukking 'the right man on the right place', populair geworden na een 19e-eeuwse toespraak in het Engelse Lagerhuis."
  },
  {
    tekst: "Loon naar werken",
    betekenis: "Iedereen verdient een beloning die overeenkomt met de geleverde inspanning.",
    oorsprong: "Bijbelse gedachte (1 Kronieken 15): 'want er is loon naar uw werk' — rechtvaardige beloning voor geleverde arbeid."
  },
  {
    tekst: "Van Lotje getikt zijn",
    betekenis: "Niet goed bij zinnen zijn, gek doen.",
    oorsprong: "De precieze herkomst is nooit met zekerheid vastgesteld; er bestaan enkel losse vermoedens, zonder overtuigend bewijs."
  },
  {
    tekst: "Na veel loven en bieden",
    betekenis: "Na uitgebreid onderhandelen over een prijs of voorwaarde.",
    oorsprong: "'Loven' betekende oorspronkelijk: de prijs vragen voor je waar — de verkoper looft, de koper biedt, tot ze het eens worden."
  },
  {
    tekst: "De maat is vol",
    betekenis: "Er kan echt niets meer bij; het geduld is nu volledig op.",
    oorsprong: "Beeld van een vat of maatbeker die tot de rand gevuld is — nog één druppel erbij, en het loopt over."
  },
  {
    tekst: "Met twee maten meten",
    betekenis: "Verschillende mensen ongelijk beoordelen voor hetzelfde gedrag.",
    oorsprong: "Bijbelse uitdrukking (Deuteronomium 25): 'gij zult in uw huis geen tweeërlei efa (maateenheid) hebben, een grote en een kleine.'"
  },
  {
    tekst: "Anderhalve man en een paardenkop",
    betekenis: "Een verrassend klein aantal mensen, veel minder dan verwacht.",
    oorsprong: "Uit het volksboek van Tijl Uilenspiegel: als kind alleen thuis, ziet Tijl een ruiter met paard door de onderdeur kijken, en op de vraag of er iemand thuis is antwoordt hij: 'anderhalve man en een paardenkop' — hijzelf, de half zichtbare ruiter, en de kop van diens paard."
  },
  {
    tekst: "Men moet zijn licht niet onder de korenmaat zetten",
    betekenis: "Als je kennis of talent hebt waar anderen baat bij hebben, moet je dat niet verborgen houden.",
    oorsprong: "Bijbelse uitdrukking (Mattheus 5): men steekt geen kaars aan om die vervolgens onder een korenmaat te verbergen, maar zet hem juist op een standaard zodat hij licht geeft."
  },
  {
    tekst: "Er gaat me een licht op",
    betekenis: "Ineens wordt me iets helder en duidelijk.",
    oorsprong: "Beeld van een plotseling aangestoken licht dat het tot dan toe onduidelijke in één keer zichtbaar maakt."
  },
  {
    tekst: "Van alle markten thuis zijn",
    betekenis: "Overal ervaring mee hebben, in veel verschillende dingen goed onderlegd zijn.",
    oorsprong: "Letterlijk: overal geweest zijn en dus overal iets van weten — van elke markt in de streek de gewoonten en prijzen kennen."
  },
  {
    tekst: "Elke medaille heeft een keerzijde",
    betekenis: "Ook een op het eerste gezicht mooie zaak heeft altijd wel een minder gunstige kant.",
    oorsprong: "Een medaille heeft een voorzijde met het mooie ontwerp, maar ook een achterkant die vaak veel eenvoudiger of minder fraai is uitgevoerd."
  },
  {
    tekst: "Van een mug een olifant maken",
    betekenis: "Van een kleinigheid een enorme kwestie maken.",
    oorsprong: "Beeld van het grootste denkbare wanverhouding tussen een piepklein insect en het grootste landdier."
  },
  {
    tekst: "Een mug ziften en een kameel doorslikken",
    betekenis: "Overdreven kritisch zijn op kleine, onbeduidende dingen, terwijl je grote misstanden ongemoeid laat.",
    oorsprong: "Bijbelse uitdrukking (Mattheus 23): Jezus verwijt de Schriftgeleerden en Farizeeën dat ze 'de mug uitzijgen en de kemel doorzwelgen' — angstvallig muggen uit hun wijn zeven, maar achteloos een kameel wegslikken."
  },
  {
    tekst: "Iemand met gelijke munt betalen",
    betekenis: "Iemand op precies dezelfde manier behandelen als hij jou heeft behandeld.",
    oorsprong: "Beeld uit de geldhandel: je betaalt iemand terug met exact dezelfde soort munten die je van hem ontvangen hebt."
  },
  {
    tekst: "De muren hebben oren",
    betekenis: "Wees voorzichtig met wat je zegt, want je zou afgeluisterd kunnen worden.",
    oorsprong: "Een waarschuwing dat zelfs de ogenschijnlijk levenloze muren om je heen je geheimen kunnen 'horen' en verraden."
  },
  {
    tekst: "Met het hoofd tegen de muur lopen",
    betekenis: "Iets koppig proberen door te zetten tegen een overmacht in, met alleen maar pijnlijke gevolgen.",
    oorsprong: "Fysiek beeld van iemand die zichzelf pijn doet door tegen een onwrikbare muur op te botsen in plaats van er omheen te gaan."
  },
  {
    tekst: "Een muurbloem zijn",
    betekenis: "Op een feest of bal weinig aandacht krijgen en verlegen aan de kant blijven zitten.",
    oorsprong: "Beeld van iemand die de hele avond letterlijk tegen de muur blijft zitten, zonder ten dans gevraagd te worden."
  },
  {
    tekst: "Op het nippertje",
    betekenis: "Precies op het allerlaatste moment, net op tijd.",
    oorsprong: "Afgeleid van 'nijpen' (knijpen) — het moment waarop het echt begon te knellen."
  },
  {
    tekst: "Nood breekt wet",
    betekenis: "In een noodsituatie mag je soms afwijken van de normale regels.",
    oorsprong: "Een oud rechtsbeginsel: als de omstandigheden dringend genoeg zijn, wegen de gewone regels minder zwaar dan de acute noodzaak."
  },
  {
    tekst: "In de nood leert men zijn vrienden kennen",
    betekenis: "Pas als het echt moeilijk wordt, blijkt wie werkelijk bereid is te helpen.",
    oorsprong: "Alleen in tijden van tegenspoed onderscheiden oprechte vrienden zich van mensen die alleen in goede tijden in de buurt blijven."
  },
  {
    tekst: "Van de nood een deugd maken",
    betekenis: "Het beste maken van een onaangename, onvermijdelijke situatie.",
    oorsprong: "In plaats van te blijven klagen over een moeilijke omstandigheid, buig je die actief om tot iets waar je toch profijt van hebt."
  },
  {
    tekst: "Als de nood het hoogst is, is de redding nabij",
    betekenis: "Precies wanneer een situatie het meest hopeloos lijkt, komt er vaak toch nog uitkomst.",
    oorsprong: "Troostende volkswijsheid voor wie zich in de diepste ellende bevindt en de moed dreigt te verliezen."
  },
  {
    tekst: "Er is geen nieuws onder de zon",
    betekenis: "Alles wat nu gebeurt, is in wezen al eerder gebeurd; echt nieuwe dingen bestaan nauwelijks.",
    oorsprong: "Bijbelse uitspraak (Prediker 1): 'hetgeen er geweest is, hetzelve zal er zijn... zodat er niets nieuws is onder de zon.'"
  },
  {
    tekst: "Op zijn nopjes zijn",
    betekenis: "Erg in je schik zijn, blij en tevreden.",
    oorsprong: "Verwijst naar het dragen van je mooiste kleren, met de nopjes (het ruwe pluis) er nog op — je zondagse pak, voor speciale gelegenheden."
  },
  {
    tekst: "Niemand is een profeet in eigen land",
    betekenis: "Mensen uit je eigen omgeving erkennen je talent of gezag vaak minder snel dan buitenstaanders dat doen.",
    oorsprong: "Bijbelse uitspraak van Jezus, die in zijn eigen geboortestreek juist op ongeloof en weerstand stuitte."
  },
  {
    tekst: "Nieuwe bezems vegen schoon",
    betekenis: "Wie net ergens is begonnen, pakt de zaken vaak extra ijverig en grondig aan.",
    oorsprong: "Een nieuwe bezem heeft nog al zijn haren en veegt daarom bijzonder goed — precies zoals een nieuwe leidinggevende in het begin extra streng en secuur is."
  },
  {
    tekst: "Uit de mond der kinderen hoort men de waarheid",
    betekenis: "Kinderen zeggen vaak zonder omwegen precies wat ze denken, zonder het te verzachten.",
    oorsprong: "Bijbelse uitdrukking (Mattheus 21, ontleend aan Psalm 8): 'uit de mond der jonge kinderen en der zogelingen hebt Gij U lof toebereid.'"
  },
  {
    tekst: "Zich een naam maken",
    betekenis: "Bekendheid verwerven door goede prestaties of opvallende eigenschappen.",
    oorsprong: "Beeld van een reputatie die zich als het ware een eigen 'naam' verwerft binnen een gemeenschap, los van wie je in het begin was."
  },
  {
    tekst: "Er zit een luchtje aan",
    betekenis: "Er is iets verdachts of niet helemaal in de haak aan een zaak.",
    oorsprong: "Vergelijking met een onaangename geur die verraadt dat iets niet fris of eerlijk is, ook al is dat niet meteen zichtbaar."
  },
  {
    tekst: "Iemand op zijn nummer zetten",
    betekenis: "Iemand terechtwijzen wegens een aanmatigende of te grote houding.",
    oorsprong: "Uit militaire oefeningen: een soldaat kreeg zijn exacte plaats aangewezen in het gelid, zijn 'nummer' in de rij."
  },
  {
    tekst: "Olie op het vuur gooien",
    betekenis: "Een ruzie of conflict juist erger maken in plaats van te sussen.",
    oorsprong: "Beeld van olie die, in plaats van een vuur te blussen, het juist feller doet oplaaien."
  },
  {
    tekst: "Onbekend maakt onbemind",
    betekenis: "Mensen waarderen of vertrouwen minder snel iets of iemand die ze niet kennen.",
    oorsprong: "Eenvoudige menselijke observatie: onbekendheid roept eerder terughoudendheid op dan warmte."
  },
  {
    tekst: "Onkruid vergaat niet",
    betekenis: "Vervelende of slechte mensen (of dingen) blijken vaak hardnekkig te overleven.",
    oorsprong: "Vertaling van een Latijnse spreuk; onkruid is berucht om hoe moeilijk het uit te roeien is, in tegenstelling tot kwetsbare gewenste gewassen."
  },
  {
    tekst: "Een ongeluk komt zelden alleen",
    betekenis: "Als er iets misgaat, volgen er vaak al snel meer tegenslagen.",
    oorsprong: "Vertaling van een Latijns spreekwoord over de neiging van tegenslagen om zich op te stapelen."
  },
  {
    tekst: "Oog om oog, tand om tand",
    betekenis: "Vergelding die exact in verhouding staat tot het aangedane onrecht.",
    oorsprong: "Bijbels rechtsvoorschrift (Exodus 21) uit de Joodse wet, later door Jezus in de Bergrede juist bekritiseerd als beginsel om na te volgen."
  },
  {
    tekst: "De splinter in andermans oog zien, maar de balk in het eigen oog niet",
    betekenis: "Feilloos de kleine fouten van een ander opmerken, terwijl je blind bent voor je eigen veel grotere gebreken.",
    oorsprong: "Bijbelse uitspraak van Jezus (Mattheus 7) over het scherp beoordelen van anderen zonder eerst naar jezelf te kijken."
  },
  {
    tekst: "Uit het oog, uit het hart",
    betekenis: "Wie of wat je niet meer ziet, verdwijnt langzaam ook uit je gedachten en gevoelens.",
    oorsprong: "Eenvoudige observatie over hoe menselijke aandacht en genegenheid afhankelijk zijn van zichtbare aanwezigheid."
  },
  {
    tekst: "Door het oog van de naald gekropen zijn",
    betekenis: "Ternauwernood aan een groot gevaar of ongeluk zijn ontsnapt.",
    oorsprong: "Bijbelse beeldspraak (Mattheus 19): 'het is lichter dat een kemel ga door het oog van een naald, dan dat een rijke inga in het Koninkrijk Gods' — een onmogelijk nauwe doorgang."
  },
  {
    tekst: "Onder vier ogen",
    betekenis: "In een gesprek zonder dat er een derde persoon bij aanwezig is.",
    oorsprong: "Twee paar ogen — die van de twee gesprekspartners — vertegenwoordigen hier de volledige, besloten kring van het gesprek."
  },
  {
    tekst: "Iemand over het paard tillen",
    betekenis: "Iemand overmatig prijzen, met als gevolg dat hij te veel van zichzelf gaat denken.",
    oorsprong: "Beeld van iemand die letterlijk te hoog en te hard op een paard wordt getild, waardoor hij er aan de andere kant weer afvalt."
  },
  {
    tekst: "Het hinkende paard komt achteraan",
    betekenis: "Na de vreugde of het gemak komt vaak alsnog een minder aangenaam gevolg, zoals de rekening.",
    oorsprong: "Beeld van een bode met slecht nieuws die expres treuzelt, of van een kreupel paard dat als laatste over de finish komt."
  },
  {
    tekst: "Het Trojaanse paard binnenhalen",
    betekenis: "Onbewust een groot gevaar binnenhalen, vermomd als iets goeds of onschadelijks.",
    oorsprong: "De Grieken lieten tijdens de Trojaanse oorlog een groot houten paard vol verborgen soldaten achter; de Trojanen haalden het argeloos hun stad binnen en bezegelden daarmee hun eigen ondergang."
  },
  {
    tekst: "Paal en perk stellen aan iets",
    betekenis: "Grenzen opleggen om te voorkomen dat een misstand zich verder uitbreidt.",
    oorsprong: "'Paal' en 'perk' betekenen allebei 'grens' — een dubbele benadrukking door twee gelijkbetekenende woorden te combineren, zoals wel vaker in oude zegswijzen."
  },
  {
    tekst: "Dat staat als een paal boven water",
    betekenis: "Dat staat volkomen vast, daar valt niet aan te twijfelen.",
    oorsprong: "Verwijst naar een stevige meerpaal (ducdalf) in de haven, die onwrikbaar boven het water uitsteekt."
  },
  {
    tekst: "Parels voor de zwijnen werpen",
    betekenis: "Iets waardevols of moois geven aan iemand die het niet weet te waarderen.",
    oorsprong: "Bijbelse uitspraak van Jezus (Mattheus 7): 'werpt uw parelen niet voor de zwijnen, opdat zij die niet met hun voeten vertreden.'"
  },
  {
    tekst: "Een bittere pil om te slikken",
    betekenis: "Een pijnlijke, onaangename zaak die je toch moet accepteren.",
    oorsprong: "Vergelijking met een letterlijk bittere medicijnpil die, hoe onaangenaam ook, toch ingenomen moet worden."
  },
  {
    tekst: "De pil vergulden",
    betekenis: "Onaangenaam nieuws verzachten door het vriendelijk of met een gunst te brengen.",
    oorsprong: "Beeld van een bittere pil die met een suikerlaagje (verguldsel) bedekt wordt om hem makkelijker door te slikken."
  },
  {
    tekst: "Onder de plak zitten",
    betekenis: "Volledig onder invloed of gezag van een ander staan, zonder eigen inbreng.",
    oorsprong: "Verwijst naar de schoolplak waarmee een meester vroeger leerlingen pijnlijk op de hand sloeg — wie 'onder de plak zat', had niets in te brengen."
  },
  {
    tekst: "Pluimstrijken",
    betekenis: "Iemand overdreven vleien om in de gunst te komen.",
    oorsprong: "Letterlijk: de veren (pluimen) van iemands kleding gladstrijken — een zacht, vleiend gebaar dat symbool staat voor overdreven vleierij."
  },
  {
    tekst: "In de pekel zitten",
    betekenis: "In grote verlegenheid of moeilijkheden verkeren.",
    oorsprong: "Vergelijking met vlees dat in de pekel is gelegd om te bewaren, maar daarin juist bederft als het niet op tijd wordt uitgehaald."
  },
  {
    tekst: "De schepen achter zich verbranden",
    betekenis: "Jezelf willens en wetens de mogelijkheid ontnemen om terug te krabbelen.",
    oorsprong: "Verscheidene veroveraars door de geschiedenis heen — onder wie Willem de Veroveraar bij zijn landing in Engeland in 1066 — lieten hun eigen schepen in brand steken, zodat er voor hun troepen geen ontsnapping meer mogelijk was."
  },
  {
    tekst: "Schoon schip maken",
    betekenis: "Grondig orde op zaken stellen, vaak door met het verleden te breken.",
    oorsprong: "Zeemansbeeld van een schip dat helemaal schoongemaakt wordt, zodat er niets meer van de oude rommel overblijft."
  },
  {
    tekst: "De stoute schoenen aantrekken",
    betekenis: "Moed verzamelen om iets te doen waar je eigenlijk tegenop ziet.",
    oorsprong: "Beeld van het aantrekken van steviger schoeisel voor een zware, uitdagende tocht — jezelf letterlijk voorbereiden op iets moeilijks."
  },
  {
    tekst: "Elk weet zelf het best waar hem de schoen wringt",
    betekenis: "Iedereen is zich het meest bewust van zijn eigen problemen en moeilijkheden.",
    oorsprong: "Beeld van een schoen die ergens knelt: alleen de drager zelf voelt precies waar."
  },
  {
    tekst: "Wie de schoen past, trekt hem aan",
    betekenis: "Als een kritische opmerking op jou van toepassing blijkt, mag je die gerust op jezelf betrekken.",
    oorsprong: "Je hoeft geen namen te noemen om iemand te raken — wie zich herkent in de beschrijving, weet zelf wel dat het over hem gaat."
  },
  {
    tekst: "Schoenmaker, blijf bij je leest",
    betekenis: "Bemoei je niet met zaken waar je geen verstand van hebt, maar blijf bij je eigen vakgebied.",
    oorsprong: "Verhaal over de Griekse schilder Apelles: een schoenmaker wees hem terecht op een fout in een geschilderde sandaal, maar toen hij ook commentaar begon te geven op andere delen van het schilderij, wees Apelles hem terug naar zijn eigen vak."
  },
  {
    tekst: "Niet graag in iemands schoenen staan",
    betekenis: "Niet graag in iemands moeilijke of onaangename situatie willen verkeren.",
    oorsprong: "Beeld van het letterlijk overnemen van iemands positie door in zijn schoenen te gaan staan."
  },
  {
    tekst: "Het zwarte schaap zijn",
    betekenis: "Degene in een groep of familie die de schuld krijgt, wordt afgewezen of zich het meest afwijkend gedraagt.",
    oorsprong: "Mogelijk bijbels (Genesis 30): Jakob zonderde uit de kudde van Laban al het gespikkelde en bruine vee af — dat wat afweek van de rest."
  },
  {
    tekst: "Achter de schermen blijven",
    betekenis: "Wel invloed uitoefenen of meewerken aan iets, maar niet zelf zichtbaar op de voorgrond treden.",
    oorsprong: "Toneelterm: de regisseur regelt de hele voorstelling vanuit de coulissen, maar het publiek ziet alleen de acteurs op het podium."
  },
  {
    tekst: "Geen roos zonder doorn",
    betekenis: "Bij elk geluk hoort ook wel iets minder aangenaams.",
    oorsprong: "Beeld van de mooie roos die desondanks altijd scherpe doornen aan zijn steel heeft."
  },
  {
    tekst: "Iets onder de roos vertellen",
    betekenis: "Iets in het diepste vertrouwen en geheim delen.",
    oorsprong: "Vertaling van het Latijnse 'sub rosa': in de feestzaal van de Romeinen hing een geschilderde roos aan het plafond als teken dat alles wat daar gezegd werd geheim moest blijven."
  },
  {
    tekst: "Alle wegen leiden naar Rome",
    betekenis: "Er zijn veel verschillende manieren om hetzelfde doel te bereiken.",
    oorsprong: "In de Middeleeuwen kwam men, van welke richting men ook vertrok, via het uitgebreide Romeinse wegennet uiteindelijk altijd in Rome uit."
  },
  {
    tekst: "Waar rook is, is vuur",
    betekenis: "Als er over iets geruchten de ronde doen, zal er meestal wel een kern van waarheid in zitten.",
    oorsprong: "Simpel natuurkundig beeld: rook ontstaat zelden zonder dat er ook daadwerkelijk iets brandt."
  },
  {
    tekst: "Door schade en schande wordt men wijs",
    betekenis: "Mensen leren vooral van hun eigen fouten en pijnlijke ervaringen.",
    oorsprong: "Vertaling van een Latijnse spreuk over de leerzame, want pijnlijke, waarde van eigen mislukkingen."
  },
  {
    tekst: "Op rozen zitten",
    betekenis: "In een aangename, voorspoedige situatie verkeren.",
    oorsprong: "Beeld van een bruidspaar dat op hun trouwdag over een met rozen bestrooid pad loopt — een symbool van geluk en overvloed."
  },
  {
    tekst: "Roet in het eten gooien",
    betekenis: "Andermans plan of feestvreugde bederven.",
    oorsprong: "Beeld van roet dat in een pan met eten valt en de hele maaltijd onbruikbaar maakt."
  },
  {
    tekst: "Ruggespraak houden",
    betekenis: "Eerst overleggen met iemand anders voordat je een beslissing bekendmaakt.",
    oorsprong: "Uit de vaderlandse geschiedenis: afgevaardigden in de Staten-Generaal overlegden eerst met het stadsbestuur ('achter de rug') voor ze hun stem uitbrachten."
  },
  {
    tekst: "De Rubicon oversteken",
    betekenis: "Een beslissende, onomkeerbare stap zetten.",
    oorsprong: "Julius Caesar overschreed in 49 v.Chr. met zijn leger de rivier de Rubicon, de grens van zijn gebied — een daad die een burgeroorlog onvermijdelijk maakte en hem dwong door te zetten."
  },
  {
    tekst: "Naar iemands pijpen dansen",
    betekenis: "Volledig doen wat een ander wil, zonder eigen wil in te brengen.",
    oorsprong: "Letterlijk: bewegen op het fluitspel (het 'pijpen') van een ander, zoals een marionet aan de touwtjes van zijn bespeler."
  },
  {
    tekst: "Het vijfde wiel aan de wagen zijn",
    betekenis: "Overbodig zijn in een groep, iemand die eigenlijk gemist kan worden.",
    oorsprong: "Een wagen heeft maar vier wielen nodig om te rijden — een vijfde wiel hindert alleen maar en heeft geen enkele functie."
  },
  {
    tekst: "Een streep door de rekening",
    betekenis: "Een plan dat plotseling niet doorgaat, een grote teleurstelling.",
    oorsprong: "Uit de koopmanswereld: een winkelier trok een streep door de rekening van een klant zodra duidelijk was dat hij zijn geld toch niet zou krijgen."
  },
  {
    tekst: "Stuivertje wisselen",
    betekenis: "Van plaats of positie ruilen met iemand anders.",
    oorsprong: "Naar het oude kinderspel waarbij spelers elkaars plek proberen in te nemen, met de vraag of iemand 'een stuivertje wil wisselen'."
  },
  {
    tekst: "Op zijn stuk blijven staan",
    betekenis: "Vasthouden aan je standpunt of eis, ondanks druk om toe te geven.",
    oorsprong: "'Stuk' betekent hier het onderwerp of de zaak zelf — wie op zijn stuk blijft staan, wijkt niet af van de kern van zijn eis."
  },
  {
    tekst: "Van streek raken",
    betekenis: "In verwarring of overstuur raken.",
    oorsprong: "Zeemansterm: op het kompas staan de windstreken aangegeven; een schip dat afwijkt van zijn koers is 'van streek'."
  },
  {
    tekst: "Iemand een steek onder water geven",
    betekenis: "Iemand in bedekte termen iets onaangenaams laten voelen, zonder het direct te zeggen.",
    oorsprong: "Mogelijk een zeemansbeeld: een schot 'onder water' treft het schip op een plek die niet meteen zichtbaar is, net zoals een verholen opmerking net zo onopgemerkt hard aankomt."
  },
  {
    tekst: "Er is geen speld tussen te krijgen",
    betekenis: "Een redenering is zo goed onderbouwd dat er geen enkel tegenargument mogelijk is.",
    oorsprong: "Beeld van een betoog dat zo dicht en sluitend is als een stof waar zelfs een dunne speld niet doorheen kan."
  },
  {
    tekst: "De spijker op de kop slaan",
    betekenis: "Precies zeggen waar het op aankomt, de kern van de zaak treffen.",
    oorsprong: "Uit het timmervak: wie een spijker recht op zijn kop raakt, slaat hem in één keer goed en recht het hout in, zonder te verbuigen."
  },
  {
    tekst: "Spijkers op laag water zoeken",
    betekenis: "Kleinzielig naar onbeduidende bezwaren zoeken om ergens moeilijk over te doen.",
    oorsprong: "Op scheepswerven werden bij eb, als het water laag stond, de her en der gevallen spijkers opgezocht — het zoeken naar iets van nauwelijks enige waarde."
  },
  {
    tekst: "Spreken is zilver, zwijgen is goud",
    betekenis: "Het is vaak verstandiger om je mond te houden dan om te zeggen wat je denkt.",
    oorsprong: "Oud gezegde dat zwijgen als de kostbaarste (want zeldzaamste en moeilijkste) vorm van wijsheid beschouwt, boven het spreken zelf."
  },
  {
    tekst: "Wie zonder zonde is, werpe de eerste steen",
    betekenis: "Oordeel niet te snel over anderen als je zelf ook niet foutloos bent.",
    oorsprong: "Bijbelse uitspraak van Jezus (Johannes 8), gericht tot de mannen die een overspelige vrouw wilden stenigen."
  },
  {
    tekst: "Een rollende steen vergaart geen mos",
    betekenis: "Wie steeds van plaats, baan of omgeving verandert, bouwt nooit iets duurzaams op.",
    oorsprong: "Een steen die voortdurend beweegt, krijgt nooit de kans om mos te laten groeien — in tegenstelling tot een steen die op zijn plek blijft liggen."
  },
  {
    tekst: "Van stapel lopen",
    betekenis: "Van start gaan, beginnen te verlopen (goed of soepel).",
    oorsprong: "Zeemansbeeld: een nieuw gebouwd schip 'loopt van stapel' als het van de houten steun waarop het gebouwd werd, te water wordt gelaten."
  },
  {
    tekst: "Andere tijden, andere zeden",
    betekenis: "Wat vroeger normaal was, hoeft dat nu niet meer te zijn — gewoontes veranderen met de tijd.",
    oorsprong: "Eenvoudige constatering dat elke tijd zijn eigen gebruiken en opvattingen meebrengt."
  },
  {
    tekst: "Van uitstel komt afstel",
    betekenis: "Wat je te lang voor je uitschuift, gebeurt uiteindelijk vaak helemaal niet meer.",
    oorsprong: "Waarschuwing tegen het te lang op de lange baan schuiven van iets — uitstel glijdt maar al te makkelijk over in afstel."
  },
  {
    tekst: "Vergissen is menselijk",
    betekenis: "Iedereen maakt weleens fouten; dat hoort bij het mens-zijn.",
    oorsprong: "Vertaling van het Latijnse 'errare humanum est', een aloude troostende constatering over de menselijke onvolmaaktheid."
  },
  {
    tekst: "De vinger op de zere plek leggen",
    betekenis: "Precies aanwijzen waar het probleem zit, ook als dat pijnlijk is.",
    oorsprong: "Zoals een dokter met zijn vinger exact aangeeft waar een wond zich bevindt, zo wijst deze uitdrukking de kern van een probleem aan."
  },
  {
    tekst: "Iemand om je vinger winden",
    betekenis: "Iemand moeiteloos naar je hand kunnen zetten.",
    oorsprong: "Beeld van een draadje dat met het grootste gemak om een vinger wordt gewonden — net zo simpel weet iemand de ander te sturen."
  },
  {
    tekst: "Als je hem de vinger geeft, neemt hij de hele hand",
    betekenis: "Geef iemand een kleine toegeving, en hij eist steeds meer.",
    oorsprong: "Beeld van onbeperkte hebzucht: een kleine concessie wordt aangegrepen om alsmaar meer op te eisen."
  },
  {
    tekst: "Ergens je vingers bij aflikken",
    betekenis: "Iets zo heerlijk of aantrekkelijk vinden dat je er watertandend naar verlangt.",
    oorsprong: "Beeld van iemand die zo naar iets lekkers verlangt, dat hij zelfs zijn vingers ervan aflikt in de hoop nog een beetje van de smaak te proeven."
  },
  {
    tekst: "Iets op je vingers kunnen natellen",
    betekenis: "Iets is zo voorspelbaar of simpel dat je het met het grootste gemak van tevoren kunt beredeneren.",
    oorsprong: "Beeld van een berekening die zo eenvoudig is dat je er geen rekenpapier voor nodig hebt — de vingers van je hand volstaan."
  },
  {
    tekst: "Het veld ruimen",
    betekenis: "De strijd opgeven en zich terugtrekken.",
    oorsprong: "Militair beeld van een leger dat het slagveld verlaat na een nederlaag."
  },
  {
    tekst: "De verloren zoon",
    betekenis: "Iemand die na een periode van afdwalen weer terugkeert en met open armen ontvangen wordt.",
    oorsprong: "Bijbelse gelijkenis (Lukas 15) van een zoon die zijn erfdeel verkwist, maar bij zijn berouwvolle terugkeer alsnog feestelijk door zijn vader wordt onthaald."
  },
  {
    tekst: "Water naar de zee dragen",
    betekenis: "Iets volkomen overbodigs doen, omdat er al ruim voldoende van is.",
    oorsprong: "Beeld van de zinloosheid van water toevoegen aan iets dat al oneindig veel water bevat — vergelijkbaar met het klassieke beeld van uilen naar Athene brengen, de stad die al vol uilen zat."
  },
  {
    tekst: "Het spoor bijster zijn",
    betekenis: "Niet meer weten hoe je verder moet, de weg kwijt zijn.",
    oorsprong: "Jagersterm: wie het spoor van het opgejaagde wild kwijtraakt, weet niet meer waarheen te gaan."
  },
  {
    tekst: "Wie zich verhoogt, zal vernederd worden",
    betekenis: "Wie zichzelf te veel ophemelt, zal uiteindelijk juist een toontje lager moeten zingen.",
    oorsprong: "Bijbelse uitspraak van Jezus (Lukas 14 en 18) over hoogmoed die uiteindelijk ten val komt, tegenover nederigheid die juist verheven wordt."
  },
  {
    tekst: "Beter één vogel in de hand dan tien in de lucht",
    betekenis: "Wat je al zeker hebt, is meer waard dan een onzekere, veel grotere belofte.",
    oorsprong: "Eenvoudige vergelijking: een vogel die je al vastheeft, kun je niet meer kwijtraken — vogels die nog vliegen, kun je alsnog mislopen."
  },
  {
    tekst: "Stille wateren hebben diepe gronden",
    betekenis: "Mensen die weinig zeggen, hebben vaak een rijker innerlijk of verborgen bedoelingen dan je zou verwachten.",
    oorsprong: "Beeld van een rustig, kalm ogend wateroppervlak dat in werkelijkheid een verrassend diepe bodem verbergt."
  },
  {
    tekst: "De vlag dekt de lading",
    betekenis: "Iets wordt onder een mooiere naam verkocht of gepresenteerd dan het eigenlijk verdient.",
    oorsprong: "Oorlogsrecht ter zee: een schip dat onder een neutrale vlag voer, werd door strijdende partijen met rust gelaten — zo kon soms zelfs smokkelwaar veilig 'onder de vlag' vervoerd worden."
  },
  {
    tekst: "De vlag strijken",
    betekenis: "Zich gewonnen geven, de strijd opgeven.",
    oorsprong: "Bij een zeegevecht haalde het verliezende schip zijn vlag naar beneden als teken van overgave."
  },
  {
    tekst: "Met vlag en wimpel",
    betekenis: "Op glansrijke, overtuigende wijze slagen.",
    oorsprong: "Beeld van een overwinnend schip dat na een zeegevecht zijn vlag én zelfs de kleine wimpel op de mast heeft weten te behouden."
  },
  {
    tekst: "Iemand voor vol aanzien",
    betekenis: "Iemand serieus nemen, hem als volwaardig beschouwen.",
    oorsprong: "Mogelijk een herinnering aan munten die vroeger soms niet het volle voorgeschreven gewicht hadden — iemand 'voor vol' aanzien is hem het volle vertrouwen geven."
  },
  {
    tekst: "Op gespannen voet staan",
    betekenis: "Een moeizame relatie hebben die elk moment kan escaleren.",
    oorsprong: "Beeld van een strak gespannen touw: net als zo'n koord bij de minste extra spanning breekt, kan een gespannen relatie elk moment omslaan in ruzie."
  },
  {
    tekst: "Met één voet in het graf staan",
    betekenis: "Zeer oud of ernstig ziek zijn, niet lang meer te leven hebben.",
    oorsprong: "Beeld van iemand die al half over de drempel van de dood heen staat."
  },
  {
    tekst: "Zich uit de voeten maken",
    betekenis: "Er snel vandoor gaan, vluchten.",
    oorsprong: "Oorspronkelijk 'zich uit de paardenvoeten maken': zorgen dat je niet onder de hoeven van het paard terechtkomt."
  },
  {
    tekst: "Weer boven water komen",
    betekenis: "Na een moeilijke periode er weer bovenop komen.",
    oorsprong: "Beeld van een drenkeling die erin slaagt zich weer boven het wateroppervlak te redden."
  },
  {
    tekst: "In troebel water is het goed vissen",
    betekenis: "In een verwarde of onduidelijke situatie kun je gemakkelijk stiekem je eigen voordeel behalen.",
    oorsprong: "Wie het water in een sloot troebel maakt, brengt vissen in ademnood naar de oppervlakte, waar ze met de hand of een net makkelijk te vangen zijn."
  },
  {
    tekst: "Boven zijn theewater zijn",
    betekenis: "Een beetje aangeschoten zijn.",
    oorsprong: "Een schertsende regionale (Groningse) uitdrukking, gevormd naar het patroon van 'boven zijn bier zijn' — meer gedronken hebben dan je 'waterpeil' aankan."
  },
  {
    tekst: "Zijn hand in een wespennest steken",
    betekenis: "Je bemoeien met een zaak die alleen maar last en problemen zal opleveren.",
    oorsprong: "Wie letterlijk zijn hand in een wespennest steekt, kan alleen maar gestoken worden — beeld van een zelfgekozen, onnodige ellende."
  },
  {
    tekst: "De weg naar de hel is geplaveid met goede voornemens",
    betekenis: "Alleen maar van plan zijn iets goeds te doen is niet genoeg; zonder daadwerkelijke actie leidt het nergens toe.",
    oorsprong: "Toegeschreven aan de Engelse schrijver Samuel Johnson (18e eeuw): mensen nemen zich voortdurend voor beter te worden, maar komen er vaak nooit werkelijk toe."
  },
  {
    tekst: "Aan de weg timmeren",
    betekenis: "Nadrukkelijk en zichtbaar aan je reputatie of bekendheid werken.",
    oorsprong: "Wie zijn werk zichtbaar langs de openbare weg verricht, wordt door alle voorbijgangers gezien en beoordeeld — in tegenstelling tot wie ongezien binnenshuis werkt."
  },
  {
    tekst: "Er is werk aan de winkel",
    betekenis: "Er moet nu flink aangepakt worden, er is nog veel te doen.",
    oorsprong: "'Winkel' betekende hier oorspronkelijk de werkplaats van een ambachtsman, niet een verkooppunt — er ligt daar nog volop werk te wachten."
  },
  {
    tekst: "Gewogen en te licht bevonden",
    betekenis: "Bij nader onderzoek ontoereikend blijken, afgewezen worden.",
    oorsprong: "Bijbelse uitdrukking (Daniël 5): het mysterieuze schrift op de muur van koning Belsazar's paleis luidde onder meer 'tekel': 'gij zijt in de weegschaal gewogen en te licht bevonden'."
  },
  {
    tekst: "Dat gaat als een lopend vuurtje",
    betekenis: "Nieuws dat zich razendsnel verspreidt.",
    oorsprong: "Bij mijnaanvallen in oorlogstijd strooide men een spoor van buskruit over de grond tot aan de mijn; eenmaal aangestoken vloog het vuur razendsnel over die hele lijn naar zijn doel."
  },
  {
    tekst: "Met vuur spelen",
    betekenis: "Onvoorzichtig handelen in een situatie die grote risico's met zich meebrengt.",
    oorsprong: "Simpel en direct beeld: wie met open vuur speelt, riskeert een uit de hand gelopen brand."
  },
  {
    tekst: "Iemand het vuur aan de schenen leggen",
    betekenis: "Iemand onder grote druk zetten om een bekentenis of beslissing af te dwingen.",
    oorsprong: "Verwijst naar de middeleeuwse pijnbank, waarbij een verdachte met blote schenen dicht bij een vuur werd gehouden om hem tot bekennen te dwingen."
  },
  {
    tekst: "Zo gewonnen, zo geronnen",
    betekenis: "Wat je gemakkelijk hebt verkregen, ben je vaak ook net zo snel weer kwijt.",
    oorsprong: "'Geronnen' betekent hier letterlijk 'weggelopen' — wat zonder moeite binnenkwam, glipt er even moeiteloos weer vandoor."
  },
  {
    tekst: "In de wolken zijn",
    betekenis: "Buitengewoon gelukkig en opgetogen zijn.",
    oorsprong: "Mogelijk een bijbelse uitdrukking (1 Tessalonicenzen 4) over gelovigen die 'in de wolken' de Heer tegemoet gaan — een beeld van de hoogst mogelijke verheffing."
  },
  {
    tekst: "De wonderen zijn de wereld nog niet uit",
    betekenis: "Er kunnen altijd nog onverwachte, haast onmogelijke dingen gebeuren.",
    oorsprong: "Uitdrukking van verwondering dat zelfs de meest onwaarschijnlijke gebeurtenissen zich soms toch nog voordoen."
  },
  {
    tekst: "Het hoogste woord voeren",
    betekenis: "Het meest en het luidst aan het woord zijn, de boventoon voeren in een gesprek.",
    oorsprong: "Wie zich het meest gerechtigd voelt om te spreken, neemt vanzelfsprekend de belangrijkste plaats in het gesprek in."
  },
  {
    tekst: "Iemand te woord staan",
    betekenis: "Iemand aanhoren en antwoord geven.",
    oorsprong: "Letterlijk: gaan staan en luisteren naar iemands woorden."
  },
  {
    tekst: "Iets op een goudschaaltje wegen",
    betekenis: "Woorden of daden buitengewoon nauwkeurig en kritisch beoordelen.",
    oorsprong: "Beeld van een precisieweegschaal, zoals die gebruikt werd om kostbaar goud af te wegen — de kleinste afwijking telt al mee."
  },
  {
    tekst: "Een wolf in schaapskleren",
    betekenis: "Iemand met kwade bedoelingen die zich voordoet als onschuldig en goedaardig.",
    oorsprong: "Bijbelse waarschuwing van Jezus (Mattheus 7): 'Wacht u voor de valse profeten, welke in schaapsklederen tot u komen, maar van binnen zijn zij grijpende wolven.'"
  },
  {
    tekst: "In zak en as zitten",
    betekenis: "Diep ongelukkig en wanhopig zijn.",
    oorsprong: "Bijbels rouwgebruik: bij groot verdriet trokken de Joden een grove zak (een jak zonder mouwen) aan en strooiden as over hun hoofd."
  },
  {
    tekst: "Het ijs breken",
    betekenis: "De eerste, ongemakkelijke stap zetten om een stroeve situatie of stilte te doorbreken.",
    oorsprong: "Letterlijk: het opengebroken ijs op een bevroren water, zodat schepen er weer doorheen kunnen varen."
  },
  {
    tekst: "Het ijzer smeden als het heet is",
    betekenis: "Meteen van een gunstige gelegenheid gebruikmaken, zolang die zich voordoet.",
    oorsprong: "Uit de smederij: alleen wanneer het ijzer nog gloeiend heet is, laat het zich goed bewerken en vormen."
  },
  {
    tekst: "Zich op glad ijs begeven",
    betekenis: "Praten of handelen over iets waar je eigenlijk niet genoeg verstand van hebt, met risico op een misstap.",
    oorsprong: "Beeld van iemand die op glad, gevaarlijk ijs staat en elk moment kan uitglijden."
  },
  {
    tekst: "Wat men zaait, zal men maaien",
    betekenis: "De gevolgen van je daden, goed of slecht, komen uiteindelijk op jezelf terug.",
    oorsprong: "Bijbelse uitspraak (Galaten 6): 'Zo wat de mens zaait, dat zal hij ook maaien' — een landbouwbeeld voor oorzaak en gevolg."
  },
  {
    tekst: "Die zwijgt, stemt toe",
    betekenis: "Wie geen bezwaar maakt tegen iets, wordt geacht ermee in te stemmen.",
    oorsprong: "Oud rechtsbeginsel: wie de kans krijgt om tegen te spreken en dat niet doet, aanvaardt daarmee stilzwijgend wat er gezegd of besloten is."
  },
  {
    tekst: "Iets zwart op wit hebben",
    betekenis: "Een schriftelijk, onweerlegbaar bewijs van iets bezitten.",
    oorsprong: "Beeld van zwarte inkt op wit papier — een vastgelegde tekst die niet meer te ontkennen valt, in tegenstelling tot een mondelinge afspraak."
  },
  {
    tekst: "Het zwaard van Damocles boven iemands hoofd laten hangen",
    betekenis: "Een voortdurend dreigend gevaar dat elk moment kan toeslaan.",
    oorsprong: "Griekse legende: Damocles prees het geluk van zijn koning, waarop deze hem tijdens een feestmaal liet plaatsnemen onder een zwaard dat aan een dun haar boven zijn hoofd hing — zodat hij het broze van voorspoed en macht zelf zou voelen."
  },
  {
    tekst: "Wat gij niet wilt dat u geschiedt, doe dat ook een ander niet",
    betekenis: "Behandel anderen zoals je zelf behandeld zou willen worden.",
    oorsprong: "Bijbelse gulden regel (Lukas 6): 'Gelijk gij wilt, dat u de mensen doen zullen, doet gij hun ook desgelijks.'"
  },
  {
    tekst: "Waar een wil is, is ook een weg",
    betekenis: "Met genoeg vastberadenheid vind je altijd een manier om je doel te bereiken.",
    oorsprong: "Eenvoudige, krachtige levenswijsheid over de kracht van doorzettingsvermogen."
  },
  {
    tekst: "Alle beetjes helpen, zei de mug, en piste in de zee",
    betekenis: "Elke kleine bijdrage telt mee, hoe onbeduidend ze ook lijkt — vaak licht spottend gebruikt.",
    oorsprong: "Een van de vele 'zeispreuken' (ook wel wellerismen genoemd) uit de volksmond, waarin een dier of persoon een wijsheid uitspreekt in een situatie die de uitspraak juist ondermijnt of belachelijk maakt — hier de bespottelijk kleine bijdrage van een mug aan de onmetelijke zee."
  },
];
