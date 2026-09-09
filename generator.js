// ---- Zegswijze-generator ----
// Bedenkt een NIEUWE, fictieve zegswijze door woorden en patronen te combineren
// die kenmerkend zijn voor de echte collectie (dieren, ambachten, zeemanstaal,
// bijbelse beelden, middeleeuwse gebruiken). Werkt volledig lokaal, geen AI-API nodig.
// Alle gegenereerde content is duidelijk gelabeld als verzonnen, niet historisch.

const ZEGSWIJZE_GENERATOR = (function () {

  // Alle onderwerpen zijn "de"-woorden, zodat het lidwoord altijd klopt.
  const SUBJECTEN = [
    "kat", "hond", "wolf", "vos", "ezel", "geit", "koe", "mus",
    "kraai", "aap", "uil", "mol", "rat", "spin", "haan", "gans",
    "smid", "molenaar", "schipper", "boer", "koster"
  ];

  // Objecten krijgen altijd "een", dat werkt bij elk geslacht.
  const OBJECTEN = [
    "ladder", "emmer", "spijker", "bezem", "kaars", "net", "ketel",
    "mand", "korf", "zeis", "hooivork", "lantaarn", "molensteen",
    "kruik", "zadel", "juk", "anker", "weegschaal", "spinnenweb", "vlaggetje"
  ];

  const TEMPLATES = [
    (s, o) => `De ${s} en ${o} gaan niet samen`,
    (s, o) => `Wie de ${s} vertrouwt, moet ook ${o} durven dragen`,
    (s, o) => `Zolang de ${s} slaapt, blijft ${o} onaangeroerd`,
    (s, o) => `De ${s} die naar ${o} grijpt, laat de rest los`,
    (s, o) => `Beter een ${s} in de hand dan ${o} in het vooruitzicht`,
    (s, o) => `De ${s} ruikt ${o} van verre`,
    (s, o) => `Wie de ${s} de rug toekeert, ziet ${o} nooit meer terug`,
    (s, o) => `Een ${s} zonder ${o} is als een dag zonder avond`,
    (s, o) => `De ${s} en ${o} horen bij elkaar zoals de winter bij de kou`,
    (s, o) => `Pas als de ${s} valt, merkt men hoe zwaar ${o} woog`,
    (s, o) => `Men herkent de ${s} pas als ${o} breekt`,
    (s, o) => `De ${s} leert nooit van ${o}`,
  ];

  const BETEKENISSEN = [
    "Te veel tegelijk willen, waardoor je uiteindelijk niets overhoudt.",
    "Doen alsof een probleem er niet is, in de hoop dat het vanzelf overwaait.",
    "Op het verkeerde moment ingrijpen, waardoor het juist averechts werkt.",
    "Meer beloven dan je ooit waar kunt maken.",
    "Voorzichtig zijn met iets waar je eigenlijk geen verstand van hebt.",
    "Iets goeds voorbij laten gaan, uit angst voor het risico.",
    "Precies op tijd komen, maar om de verkeerde reden.",
    "Een klein voordeel behalen, terwijl het grotere plaatje verloren gaat.",
    "Iemand vertrouwen die het net iets te goed met je voorheeft.",
    "Wachten met iets tot het eigenlijk al te laat is.",
    "Je gedragen alsof niets je kan schelen, terwijl je juist alles in de gaten houdt.",
    "Iets kleins veel te zwaar laten wegen in een grotere beslissing.",
  ];

  const OORSPRONG_DOMEINEN = [
    (s, o) => `Vermoedelijk ontleend aan een oude fabel waarin de ${s} probeert ${o} te bemachtigen, maar daarbij zijn eigen positie verspeelt.`,
    (s, o) => `Mogelijk afkomstig uit een ambacht: een vakman die niet omzichtig omging met ${o}, kreeg al snel te maken met problemen die men vergeleek met een ${s}.`,
    (s, o) => `Vermoedelijk een zeemansuitdrukking: aan boord hield men de ${s} liever weg bij ${o}, uit vrees voor ongeluk op zee.`,
    (s, o) => `Mogelijk een verre echo van een bijbelse gelijkenis, waarin de ${s} en ${o} model staan voor de tegenstelling tussen hebzucht en tevredenheid.`,
    (s, o) => `Vermoedelijk ontstaan in de tijd van de gilden, toen een ${s} symbool stond voor onvoorzichtigheid en ${o} voor een welverdiende beloning.`,
    (s, o) => `Waarschijnlijk terug te voeren op een oud volksgeloof, waarin het zien van een ${s} in de buurt van ${o} als een voorteken gold.`,
  ];

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function pickTwoDifferent(arr) {
    const a = pick(arr);
    let b = pick(arr);
    while (b === a && arr.length > 1) b = pick(arr);
    return [a, b];
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function generate() {
    const [subject, subject2] = pickTwoDifferent(SUBJECTEN);
    const object = pick(OBJECTEN);
    const template = pick(TEMPLATES);
    // Sommige templates gebruiken maar 1 dier; een tweede staat klaar voor eventuele varianten.
    const tekst = capitalize(template(subject, `een ${object}`)) + ".";
    const betekenis = pick(BETEKENISSEN);
    const oorsprongFn = pick(OORSPRONG_DOMEINEN);
    const oorsprong = oorsprongFn(subject, `een ${object}`);
    return { tekst, betekenis, oorsprong };
  }

  return { generate };
})();
