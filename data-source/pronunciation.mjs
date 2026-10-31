/**
 * Pronunciation: the contrasts German makes that most learners cannot hear yet,
 * and the phrases worth saying out loud.
 *
 * The design decision behind this file is that perception comes before
 * production. You cannot reliably produce a contrast you cannot hear, so the
 * first half of this data drives a listening trainer with no microphone at all:
 * the app says one of two words and you say which one it said. That is the
 * single highest-value pronunciation exercise there is and it needs no vendor,
 * no model and no recording.
 *
 * The second half is for shadowing. Each phrase carries its stressed syllables,
 * because stress is where learners of German diverge most and because it is
 * something the app can mark honestly without pretending to score anything.
 *
 * `tip` is articulatory: what the mouth does. It is knowledge, not measurement,
 * and it is the part a score would never give you.
 */
export const CONTRASTS = [
  {
    key: 'vokallaenge',
    level: 'A1',
    title: { de: 'Lang oder kurz', en: 'Long or short' },
    summary: {
      de: 'Im Deutschen unterscheidet die Vokallänge Wörter. Stadt und Staat sind nicht dasselbe.',
      en: 'In German vowel length distinguishes words. Stadt and Staat are not the same.',
    },
    tip: {
      de: 'Kurz heißt auch gespannt loslassen: Der Vokal bricht ab, weil zwei Konsonanten folgen. Lang heißt halten - oft steht ein h oder ein Doppelvokal da, der nicht gesprochen wird, sondern die Länge anzeigt.',
      en: 'Short also means cut off: the vowel stops because two consonants follow. Long means held - often an h or a doubled vowel is there not to be pronounced but to mark the length.',
    },
    pairs: [
      ['Stadt', 'Staat', { de: 'kurzes a', en: 'short a' }, { de: 'langes a', en: 'long a' }],
      ['Bett', 'Beet', { de: 'kurzes e', en: 'short e' }, { de: 'langes e', en: 'long e' }],
      ['in', 'ihn', { de: 'kurzes i', en: 'short i' }, { de: 'langes i', en: 'long i' }],
      ['Ofen', 'offen', { de: 'langes o', en: 'long o' }, { de: 'kurzes o', en: 'short o' }],
      ['Miete', 'Mitte', { de: 'langes i', en: 'long i' }, { de: 'kurzes i', en: 'short i' }],
      ['Wahl', 'Wall', { de: 'langes a', en: 'long a' }, { de: 'kurzes a', en: 'short a' }],
      ['Weg', 'weg', { de: 'langes e: der Weg', en: 'long e: der Weg' }, { de: 'kurzes e: weg sein', en: 'short e: weg sein' }],
      ['Schal', 'Schall', { de: 'langes a', en: 'long a' }, { de: 'kurzes a', en: 'short a' }],
    ],
  },
  {
    key: 'umlaut-u',
    level: 'A1',
    title: { de: 'u oder ü', en: 'u or ü' },
    summary: {
      de: 'Der häufigste Fehler überhaupt: ü wird zu u, und damit wird aus Müller ein Muller.',
      en: 'The commonest error of all: ü becomes u, and Müller turns into Muller.',
    },
    tip: {
      de: 'Sprich ein langes i und schiebe dann die Lippen zu einem Kuss nach vorn, ohne die Zunge zu bewegen. Genau das ist ü. Wer von u ausgeht, landet fast nie dort.',
      en: 'Say a long "ee" and then push your lips forward into a kiss without moving your tongue. That is ü. Starting from "oo" almost never gets you there.',
    },
    pairs: [
      ['Mutter', 'Mütter', { de: 'Singular', en: 'singular' }, { de: 'Plural', en: 'plural' }],
      ['Bruder', 'Brüder', { de: 'Singular', en: 'singular' }, { de: 'Plural', en: 'plural' }],
      ['musste', 'müsste', { de: 'Vergangenheit', en: 'past' }, { de: 'Konjunktiv II', en: 'Konjunktiv II' }],
      ['Buch', 'Bücher', { de: 'Singular', en: 'singular' }, { de: 'Plural', en: 'plural' }],
      ['Stuhl', 'Stühle', { de: 'Singular', en: 'singular' }, { de: 'Plural', en: 'plural' }],
      ['durfte', 'dürfte', { de: 'Vergangenheit', en: 'past' }, { de: 'Vermutung', en: 'assumption' }],
      ['Mull', 'Müll', { de: 'Stoff', en: 'gauze' }, { de: 'Abfall', en: 'rubbish' }],
    ],
  },
  {
    key: 'umlaut-o',
    level: 'A2',
    title: { de: 'o oder ö', en: 'o or ö' },
    summary: {
      de: 'schon und schön sind zwei Wörter, und der Unterschied trägt den ganzen Satz.',
      en: 'schon and schön are two words, and the difference carries the whole sentence.',
    },
    tip: {
      de: 'Sprich ein e wie in "Beet" und runde dann die Lippen, ohne die Zunge zu verschieben. Das ist ö. Von o aus kommt man nicht hin.',
      en: 'Say the vowel in "bay" and then round your lips without moving your tongue. That is ö. You cannot get there from "oh".',
    },
    pairs: [
      ['schon', 'schön', { de: 'bereits', en: 'already' }, { de: 'hübsch', en: 'beautiful' }],
      ['Ofen', 'öfter', { de: 'o', en: 'o' }, { de: 'ö', en: 'ö' }],
      ['konnte', 'könnte', { de: 'Vergangenheit', en: 'past' }, { de: 'Konjunktiv II', en: 'Konjunktiv II' }],
      ['Tochter', 'Töchter', { de: 'Singular', en: 'singular' }, { de: 'Plural', en: 'plural' }],
      ['Hofe', 'Höfe', { de: 'Dativ Singular', en: 'dative singular' }, { de: 'Plural', en: 'plural' }],
      ['Sohn', 'Söhne', { de: 'Singular', en: 'singular' }, { de: 'Plural', en: 'plural' }],
    ],
  },
  {
    key: 'umlaut-a',
    level: 'A2',
    title: { de: 'a, ä oder e', en: 'a, ä or e' },
    summary: {
      de: 'ä klingt wie ein e, nicht wie ein a - deshalb hört man den Plural oft nicht.',
      en: 'ä sounds like an e, not like an a – which is why the plural often goes unheard.',
    },
    tip: {
      de: 'Langes ä ist praktisch ein langes e. Der Unterschied zwischen Bären und Beeren ist im Alltag minimal; der zwischen Vater und Väter ist es nicht.',
      en: 'Long ä is practically a long e. The difference between Bären and Beeren is tiny in everyday speech; the one between Vater and Väter is not.',
    },
    pairs: [
      ['Vater', 'Väter', { de: 'Singular', en: 'singular' }, { de: 'Plural', en: 'plural' }],
      ['Garten', 'Gärten', { de: 'Singular', en: 'singular' }, { de: 'Plural', en: 'plural' }],
      ['Stadt', 'Städte', { de: 'Singular', en: 'singular' }, { de: 'Plural', en: 'plural' }],
      ['Mantel', 'Mäntel', { de: 'Singular', en: 'singular' }, { de: 'Plural', en: 'plural' }],
      ['Gast', 'Gäste', { de: 'Singular', en: 'singular' }, { de: 'Plural', en: 'plural' }],
      ['Hand', 'Hände', { de: 'Singular', en: 'singular' }, { de: 'Plural', en: 'plural' }],
    ],
  },
  {
    key: 'ch',
    level: 'A2',
    title: { de: 'ich-Laut und ach-Laut', en: 'The two ch sounds' },
    summary: {
      de: 'ch hat zwei Aussprachen, und welche gilt, entscheidet der Vokal davor.',
      en: 'ch has two pronunciations, and the vowel before it decides which.',
    },
    tip: {
      de: 'Nach a, o, u und au kommt der raue ach-Laut hinten im Hals. Nach allem anderen - i, e, ä, ö, ü, ei, eu und nach Konsonanten - kommt der weiche ich-Laut vorn, wie ein geflüstertes "hj". Es gibt keine Ausnahme, die man lernen müsste.',
      en: 'After a, o, u and au comes the rough ach sound at the back of the throat. After everything else – i, e, ä, ö, ü, ei, eu and after consonants – comes the soft ich sound at the front, like a whispered "hy". There is no exception to memorise.',
    },
    pairs: [
      ['ich', 'ach', { de: 'weich, vorn', en: 'soft, front' }, { de: 'rau, hinten', en: 'rough, back' }],
      ['Bücher', 'Buch', { de: 'weich', en: 'soft' }, { de: 'rau', en: 'rough' }],
      ['Nächte', 'Nacht', { de: 'weich', en: 'soft' }, { de: 'rau', en: 'rough' }],
      ['Löcher', 'Loch', { de: 'weich', en: 'soft' }, { de: 'rau', en: 'rough' }],
      ['Küche', 'Kuchen', { de: 'weich: Küche', en: 'soft: kitchen' }, { de: 'rau: Kuchen', en: 'rough: cake' }],
      ['Kirche', 'Kirsche', { de: 'ch', en: 'ch' }, { de: 'sch', en: 'sch' }],
      ['München', 'machen', { de: 'weich', en: 'soft' }, { de: 'rau', en: 'rough' }],
    ],
  },
  {
    key: 'auslaut',
    level: 'B1',
    title: { de: 'Auslautverhärtung', en: 'Final devoicing' },
    summary: {
      de: 'Am Wortende wird b zu p, d zu t und g zu k. Rad und Rat klingen gleich.',
      en: 'At the end of a word b becomes p, d becomes t and g becomes k. Rad and Rat sound identical.',
    },
    tip: {
      de: 'Das ist kein Fehler, den man vermeiden soll, sondern eine Regel, die man anwenden muss. Wer "Rad" mit hörbarem d spricht, klingt falsch. Der Unterschied kehrt im Plural zurück: Räder gegen Räte.',
      en: 'This is not an error to avoid but a rule to apply. Saying "Rad" with an audible d sounds wrong. The difference returns in the plural: Räder against Räte.',
    },
    pairs: [
      ['Rad', 'Räder', { de: 'klingt wie Rat', en: 'sounds like Rat' }, { de: 'hier hört man das d', en: 'here you hear the d' }],
      ['Hund', 'Hunde', { de: 'klingt wie Hunt', en: 'sounds like Hunt' }, { de: 'hier hört man das d', en: 'here you hear the d' }],
      ['Tag', 'Tage', { de: 'klingt wie Tak', en: 'sounds like Tak' }, { de: 'hier hört man das g', en: 'here you hear the g' }],
      ['halb', 'halbe', { de: 'klingt wie halp', en: 'sounds like halp' }, { de: 'hier hört man das b', en: 'here you hear the b' }],
      ['Weg', 'Wege', { de: 'klingt wie Wek', en: 'sounds like Wek' }, { de: 'hier hört man das g', en: 'here you hear the g' }],
      ['Kind', 'Kinder', { de: 'klingt wie Kint', en: 'sounds like Kint' }, { de: 'hier hört man das d', en: 'here you hear the d' }],
    ],
  },
  {
    key: 'zischlaute',
    level: 'A2',
    title: { de: 's, z und sch', en: 's, z and sch' },
    summary: {
      de: 'z ist immer ts, s am Wortanfang vor Vokal ist stimmhaft, und st- am Anfang ist scht-.',
      en: 'z is always ts, s before a vowel at the start of a word is voiced, and initial st- is scht-.',
    },
    tip: {
      de: 'Drei Regeln, die zusammen fast alles abdecken: z = ts, nie wie ein englisches z. s vor Vokal am Wortanfang summt (Sonne). sp- und st- am Wortanfang sind schp- und scht- (Stadt, spielen) - in der Wortmitte dagegen nicht (Fenster).',
      en: 'Three rules that cover almost everything: z = ts, never an English z. s before a vowel at the start of a word buzzes (Sonne). Initial sp- and st- are shp- and sht- (Stadt, spielen) – but not in the middle of a word (Fenster).',
    },
    pairs: [
      ['Zeit', 'seit', { de: 'ts', en: 'ts' }, { de: 'z wie im Englischen', en: 'English-style z' }],
      ['zahlen', 'Salon', { de: 'ts am Anfang', en: 'ts at the start' }, { de: 'stimmhaftes s', en: 'voiced s' }],
      ['Stadt', 'Fenster', { de: 'scht- am Anfang', en: 'sht- at the start' }, { de: 'st in der Mitte', en: 'st in the middle' }],
      ['spielen', 'Wespe', { de: 'schp- am Anfang', en: 'shp- at the start' }, { de: 'sp in der Mitte', en: 'sp in the middle' }],
      ['Sonne', 'Tasse', { de: 'stimmhaft', en: 'voiced' }, { de: 'stimmlos', en: 'voiceless' }],
      ['weiß', 'Weise', { de: 'scharfes s', en: 'sharp s' }, { de: 'stimmhaftes s', en: 'voiced s' }],
    ],
  },
  {
    key: 'r-vokalisiert',
    level: 'B1',
    title: { de: 'Das verschwindende r', en: 'The disappearing r' },
    summary: {
      de: 'Am Silbenende wird r kein Konsonant mehr, sondern ein Vokal. Vater endet auf ein schwaches a.',
      en: 'At the end of a syllable r stops being a consonant and becomes a vowel. Vater ends in a weak a.',
    },
    tip: {
      de: 'Vor einem Vokal rollt oder reibt das r (rot, Brot). Nach einem Vokal wird es zu einem kurzen a-Laut: Vater klingt wie "Fata", Uhr wie "Ua". Wer das r dort ausspricht, klingt vorgelesen.',
      en: 'Before a vowel the r is rolled or scraped (rot, Brot). After a vowel it turns into a short a-sound: Vater sounds like "Fata", Uhr like "Ooa". Pronouncing the r there sounds like reading aloud.',
    },
    pairs: [
      ['rot', 'Tor', { de: 'r vor Vokal: deutlich', en: 'r before a vowel: audible' }, { de: 'r am Ende: wie ein a', en: 'r at the end: like an a' }],
      ['Reise', 'Uhr', { de: 'deutliches r', en: 'audible r' }, { de: 'vokalisiert', en: 'vocalised' }],
      ['Brot', 'Vater', { de: 'deutliches r', en: 'audible r' }, { de: 'vokalisiert', en: 'vocalised' }],
      ['Frage', 'Bier', { de: 'deutliches r', en: 'audible r' }, { de: 'vokalisiert', en: 'vocalised' }],
    ],
  },
];

/**
 * Phrases for shadowing, with the stressed syllables marked.
 *
 * A stressed syllable is wrapped in square brackets, which is the only
 * convention here that cannot be misread: a single marker before the syllable
 * would say where the stress starts and nothing about where it ends, and the
 * parser would have to guess the rest of the syllable.
 *
 * Marking stress is the thing the app can state honestly. It knows where the
 * stress belongs; it does not know where yours fell. The screen draws your
 * recording and leaves the comparison to your ear, which is what a teacher
 * would do.
 */
export const SHADOW = [
  { level: 'A1', text: 'Ich [kom]me aus Ma[rok]ko.', note: { de: 'Wortakzent auf der ersten Silbe von kommen.', en: 'Word stress on the first syllable of kommen.' } },
  { level: 'A1', text: 'Wie [spät] ist es, [bit]te?', note: { de: 'Die Frage steigt am Ende.', en: 'The question rises at the end.' } },
  { level: 'A1', text: 'Ich [ste]he um [sechs] [auf].', note: { de: 'Die trennbare Vorsilbe am Ende trägt einen eigenen Akzent.', en: 'The separable prefix at the end carries its own stress.' } },
  { level: 'A2', text: '[Könn]ten Sie das [bit]te wieder[ho]len?', note: { de: 'Höflich heißt hier: nicht lauter, sondern flacher.', en: 'Polite here means flatter, not louder.' } },
  { level: 'A2', text: 'Die [Hei]zung funktio[niert] seit [Mon]tag [nicht].', note: { de: 'nicht am Ende trägt den Satzakzent.', en: 'nicht at the end carries the sentence stress.' } },
  { level: 'B1', text: 'Meiner [Mei]nung nach ist das der [fal]sche Weg.', note: { de: 'Der Akzent liegt auf falsche, nicht auf Weg.', en: 'The stress is on falsche, not on Weg.' } },
  { level: 'B1', text: 'Ich [hät]te das [an]ders ge[macht].', note: { de: 'anders trägt den Kontrast und damit den Akzent.', en: 'anders carries the contrast and so the stress.' } },
  { level: 'B2', text: 'Das [mag] im [Ein]zelfall zu[tref]fen, [lässt] sich aber nicht verallge[mei]nern.', note: { de: 'Zwei Akzentgipfel: Einzelfall und verallgemeinern.', en: 'Two stress peaks: Einzelfall and verallgemeinern.' } },
  { level: 'B2', text: 'Da[rin] liegt das [ei]gentliche Pro[blem].', note: { de: 'Darin trägt den Akzent, weil es zurückverweist.', en: 'Darin carries the stress because it points back.' } },
  { level: 'C1', text: 'So über[zeu]gend das Argu[ment] auch [klingt], es be[ruht] auf einer [fal]schen [Prä]misse.', note: { de: 'Der Konzessivsatz fällt, der Hauptsatz hebt wieder an.', en: 'The concessive clause falls; the main clause lifts again.' } },
  { level: 'C1', text: 'Ich [hal]te das [e]her für unwahr[schein]lich.', note: { de: 'eher ist die Abtönung und bekommt deshalb Gewicht.', en: 'eher is the hedge and therefore takes weight.' } },
];
