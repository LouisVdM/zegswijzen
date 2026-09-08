// Elke zegswijze heeft: tekst, betekenis, oorsprong.
// De oorsprong is telkens de meest gangbare verklaring die in omloop is —
// bij veel zegswijzen bestaat discussie of onzekerheid over de echte herkomst.
const ZEGSWIJZEN = [
  {
    tekst: "De kat uit de boom kijken",
    betekenis: "Rustig afwachten hoe een situatie zich ontwikkelt voor je iets onderneemt.",
    oorsprong: "Verwijst naar de jacht met honden: als een hond een kat de boom in jaagt, wacht hij geduldig af tot het dier weer naar beneden komt, in plaats van meteen te reageren."
  },
  {
    tekst: "Een appeltje met iemand te schillen hebben",
    betekenis: "Nog een onopgeloste kwestie of ruzie met iemand hebben.",
    oorsprong: "Vermoedelijk afgeleid van het gebruik om bij een geschil samen rustig een appel te schillen terwijl de zaak besproken werd, ver voor er sprake was van feitelijk 'ruzie maken'."
  },
  {
    tekst: "Boter bij de vis doen",
    betekenis: "Direct betalen, zonder uitstel.",
    oorsprong: "Op de vismarkt bedierf vis snel, dus moest de koper meteen afrekenen. Boter was destijds een waardevast betaalmiddel dat vaak als directe tegenprestatie diende."
  },
  {
    tekst: "De pot verwijt de ketel dat hij zwart ziet",
    betekenis: "Iemand bekritiseert een ander voor een fout die hijzelf ook heeft.",
    oorsprong: "Kookgerei boven een open haardvuur werd allebei zwart beroet. De pot die de ketel dit verwijt, is zelf al even zwart."
  },
  {
    tekst: "Iets met een korreltje zout nemen",
    betekenis: "Iets niet helemaal serieus of letterlijk nemen.",
    oorsprong: "Zout maakte voedsel vroeger beter verteerbaar. Iets 'met een korreltje zout nemen' betekende het verhaal makkelijker doorslikken door het niet te letterlijk op te vatten."
  },
  {
    tekst: "Een dubbeltje op zijn kant",
    betekenis: "Een zeer onzekere situatie die nog alle kanten op kan.",
    oorsprong: "Een oude Nederlandse munt die op zijn rand blijft staan in plaats van om te vallen: een zeldzame en wankele balans."
  },
  {
    tekst: "Iemand het vuur aan de schenen leggen",
    betekenis: "Iemand onder grote druk zetten om iets te bekennen of te doen.",
    oorsprong: "Zou teruggaan op een middeleeuwse martelpraktijk waarbij een verdachte met de voeten dicht bij het vuur werd gehouden om een bekentenis af te dwingen."
  },
  {
    tekst: "Met de deur in huis vallen",
    betekenis: "Meteen ter zake komen, zonder inleiding.",
    oorsprong: "Het beeld van iemand die zo haastig binnenkomt dat hij bijna letterlijk over de drempel struikelt, zonder tijd voor een beleefd welkom."
  },
  {
    tekst: "De handdoek in de ring gooien",
    betekenis: "Opgeven, jezelf gewonnen verklaren.",
    oorsprong: "Uit het boksen: de coach gooit een handdoek de ring in om de wedstrijd te stoppen wanneer zijn bokser niet meer verder kan."
  },
  {
    tekst: "Iets voor een appel en een ei kopen",
    betekenis: "Iets voor een zeer lage prijs kopen.",
    oorsprong: "Appels en eieren waren vroeger zulke alledaagse, goedkope waar dat ze symbool stonden voor een verwaarloosbaar bedrag."
  },
  {
    tekst: "Zo klaar als een klontje",
    betekenis: "Volkomen duidelijk.",
    oorsprong: "Verwijst naar een suikerklontje: zuiver en overzichtelijk van vorm — 'klaar' in de oude betekenis van 'helder'."
  },
  {
    tekst: "De kogel is door de kerk",
    betekenis: "Er is eindelijk een knoop doorgehakt.",
    oorsprong: "Zou teruggaan op een (vermeend) historisch voorval waarbij een kogel daadwerkelijk door een kerkgebouw vloog — het moment waarop een lang aanslepende kwestie plotseling beslecht werd."
  },
  {
    tekst: "Iemand een oor aannaaien",
    betekenis: "Iemand bedriegen of iets wijsmaken.",
    oorsprong: "Mogelijk een verwijzing naar het merken van vee door een inkeping in het oor: een teken dat iemand 'gemerkt', oftewel bedrogen is."
  },
  {
    tekst: "Op zijn elf-en-dertigst",
    betekenis: "Overdreven bedachtzaam, traag en nauwgezet te werk gaan.",
    oorsprong: "De precieze herkomst is onzeker; het getal 'elf-en-dertig' wordt gezien als beeld van overdreven nauwkeurig tellen of afwegen."
  },
  {
    tekst: "Iets achter de ellebogen hebben",
    betekenis: "Sluw of niet helemaal te vertrouwen zijn.",
    oorsprong: "Wie iets achter zijn ellebogen verbergt, houdt het buiten het zicht van de ander — een beeld voor heimelijk bedrog."
  },
  {
    tekst: "De hand op de knip houden",
    betekenis: "Zuinig zijn, niet snel geld uitgeven.",
    oorsprong: "Een 'knip' was vroeger een portemonnee met een metalen sluiting. Wie de hand erop hield, opende hem niet snel."
  },
  {
    tekst: "Iemand in de wielen rijden",
    betekenis: "Iemands plannen dwarsbomen of tegenwerken.",
    oorsprong: "Afgeleid van het letterlijk in de wielen van een rijtuig of fiets rijden, waardoor het voertuig tot stilstand komt."
  },
  {
    tekst: "Onder één hoedje spelen",
    betekenis: "In het geheim samenwerken, vaak met een oneerlijke bedoeling.",
    oorsprong: "Verwijst naar goochelaars die met een balletje onder een hoedje verborgen trucs uithalen om het publiek te misleiden."
  },
  {
    tekst: "Van de hak op de tak springen",
    betekenis: "Zonder duidelijke lijn van het ene onderwerp naar het andere overgaan.",
    oorsprong: "Het beeld van een dier dat van de ene houten balk (hak) naar de andere tak springt, zonder vaste route."
  },
  {
    tekst: "Iets in de wind slaan",
    betekenis: "Een waarschuwing of advies negeren.",
    oorsprong: "Vergelijkbaar met iets waardeloos weggooien, dat de wind zomaar meeneemt en doet verdwijnen."
  },
  {
    tekst: "Een oogje in het zeil houden",
    betekenis: "Opletten, iets goed in de gaten houden.",
    oorsprong: "Uit de scheepvaart: de bemanning hield de zeilen nauwlettend in de gaten om tijdig te kunnen bijsturen bij veranderend weer."
  },
  {
    tekst: "Op de blaren zitten",
    betekenis: "De nadelige gevolgen van je eigen daden ondervinden.",
    oorsprong: "Verwijst naar iemand die zo lang heeft rondgelopen dat hij letterlijk blaren op de voeten heeft overgehouden."
  },
  {
    tekst: "Peperduur",
    betekenis: "Extreem duur.",
    oorsprong: "Peper was in de middeleeuwen een kostbaar importproduct uit Azië, verhandeld voor hoge prijzen — synoniem voor onbetaalbaar."
  },
  {
    tekst: "Iets op zijn beloop laten",
    betekenis: "Iets niet actief sturen, de natuurlijke gang van zaken laten gebeuren.",
    oorsprong: "'Beloop' verwijst naar de loop van een rivier, die je z'n natuurlijke weg laat volgen zonder in te grijpen."
  },
  {
    tekst: "Voor spek en bonen meedoen",
    betekenis: "Meedoen zonder dat je bijdrage er echt toe doet.",
    oorsprong: "Bij kaartspellen werd soms 'voor spek en bonen' gespeeld: zonder inzet, puur voor de lol, zodat er niets op het spel stond."
  },
  {
    tekst: "De spijker op de kop slaan",
    betekenis: "Precies de kern van de zaak raken.",
    oorsprong: "Uit het timmervak: wie een spijker recht op de kop raakt, slaat hem in één keer goed in, zonder te verbuigen."
  },
  {
    tekst: "Van katoen geven",
    betekenis: "Er stevig tegenaan gaan, hard je best doen.",
    oorsprong: "Mogelijk uit de textielindustrie, waar katoen met kracht bewerkt of geklopt moest worden voordat het verwerkt kon worden."
  },
  {
    tekst: "Achter de geraniums zitten",
    betekenis: "Weinig actief zijn en veel thuis blijven, vaak gezegd over ouderen.",
    oorsprong: "Het beeld van iemand die de hele dag voor het raam zit, achter de geraniums op de vensterbank, uitkijkend naar buiten."
  },
  {
    tekst: "Zijn hand niet omdraaien voor iets",
    betekenis: "Iets moeiteloos en zonder aarzeling doen.",
    oorsprong: "Het simpele gebaar van een hand omdraaien staat symbool voor een minimale inspanning, iets waar je niet eens bij na hoeft te denken."
  },
  {
    tekst: "Iemand een poepje laten ruiken",
    betekenis: "Iemand laten zien wat je waard bent, vaak nadat je onderschat werd.",
    oorsprong: "De precieze herkomst is onzeker, maar het beeld van iets 'laten ruiken' verwijst naar iemands aanwezigheid of kunnen nadrukkelijk laten voelen."
  },
  {
    tekst: "Water bij de wijn doen",
    betekenis: "Concessies doen, gematigder worden in je eisen.",
    oorsprong: "Verwijst naar de oude gewoonte om sterke wijn met water te verdunnen, waardoor die minder krachtig en makkelijker te verteren werd."
  },
  {
    tekst: "De schaapjes op het droge hebben",
    betekenis: "Financieel onafhankelijk zijn, voor de rest van je leven verzekerd zijn.",
    oorsprong: "Schapen die veilig op het droge staan lopen geen gevaar meer om te verdrinken of weggespoeld te worden — een beeld voor veiligheid en zekerheid."
  },
];
