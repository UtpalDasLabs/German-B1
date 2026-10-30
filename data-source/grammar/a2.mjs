/**
 * A2 grammar: the two things that separate A2 from A1.
 *
 * The first is the dative - without it you cannot say who you gave something
 * to, who you are helping, or where anything is. The second is being able to
 * talk about the past at all, which is what turns a learner who can describe
 * their flat into one who can tell you what happened at the Bürgeramt.
 *
 * Drill rows are [prompt, options, answerIndex, whyDe, whyEn].
 */
export const A2_GRAMMAR = [
  {
    key: 'dativ',
    level: 'A2',
    icon: '\u{1F449}',
    title: { de: 'Dativ', en: 'The dative' },
    summary: {
      de: 'Der Fall für das Ziel einer Handlung und für den Ort. der wird dem, die wird der.',
      en: 'The case for who something is done to, and for location. der becomes dem, die becomes der.',
    },
    body: {
      en: [
        'The accusative answers "what?"; the dative answers "to whom?". In "Ich gebe dem Kind das Buch", das Buch is what is given and dem Kind is who it is given to.',
        'The forms: der → dem, die → der, das → dem, plural die → den, and the plural noun itself adds -n unless it already ends in -n or -s. "mit den Kindern", "mit den Autos".',
        'A group of prepositions always takes the dative, and the list is short enough to memorise: aus, bei, mit, nach, seit, von, zu, gegenüber. Classrooms chant it to a tune; it works.',
        'A second group - the two-way prepositions in, an, auf, über, unter, vor, hinter, neben, zwischen - takes the dative when nothing is moving and the accusative when something is going somewhere. "Ich bin in der Küche" (dative, I am there) against "Ich gehe in die Küche" (accusative, I am going there).',
        'Some very common verbs take a dative object where English would use a direct one: helfen, danken, gefallen, gehören, passen, antworten, folgen. "Ich helfe dir", never "Ich helfe dich".',
      ],
      de: [
        'Der Akkusativ antwortet auf "was?", der Dativ auf "wem?". In "Ich gebe dem Kind das Buch" ist das Buch das Gegebene und dem Kind der Empfänger.',
        'Die Formen: der → dem, die → der, das → dem, Plural die → den, und das Nomen im Plural bekommt ein -n, wenn es nicht schon auf -n oder -s endet: "mit den Kindern", "mit den Autos".',
        'Eine Gruppe von Präpositionen steht immer mit Dativ: aus, bei, mit, nach, seit, von, zu, gegenüber.',
        'Die Wechselpräpositionen - in, an, auf, über, unter, vor, hinter, neben, zwischen - stehen mit Dativ, wenn nichts in Bewegung ist, und mit Akkusativ bei einer Richtung: "Ich bin in der Küche" gegen "Ich gehe in die Küche".',
        'Manche sehr häufigen Verben verlangen den Dativ, wo das Englische ein direktes Objekt hätte: helfen, danken, gefallen, gehören, passen, antworten, folgen. "Ich helfe dir", nie "Ich helfe dich".',
      ],
    },
    tables: [
      {
        caption: { de: 'Die Formen', en: 'The forms' },
        head: ['', 'Nominativ', 'Akkusativ', 'Dativ'],
        rows: [
          ['maskulin', 'der / ein', 'den / einen', 'dem / einem'],
          ['feminin', 'die / eine', 'die / eine', 'der / einer'],
          ['neutral', 'das / ein', 'das / ein', 'dem / einem'],
          ['Plural', 'die', 'die', 'den + -n'],
        ],
      },
      {
        caption: { de: 'Personalpronomen', en: 'Personal pronouns' },
        head: ['Nominativ', 'Akkusativ', 'Dativ'],
        rows: [
          ['ich', 'mich', 'mir'],
          ['du', 'dich', 'dir'],
          ['er / es', 'ihn / es', 'ihm'],
          ['sie', 'sie', 'ihr'],
          ['wir', 'uns', 'uns'],
          ['ihr', 'euch', 'euch'],
          ['sie / Sie', 'sie / Sie', 'ihnen / Ihnen'],
        ],
      },
      {
        caption: { de: 'Immer Dativ', en: 'Always dative' },
        head: ['Präposition', 'Beispiel'],
        rows: [
          ['aus', 'Ich komme aus der Türkei.'],
          ['bei', 'Ich wohne bei meinem Bruder.'],
          ['mit', 'Ich fahre mit dem Bus.'],
          ['nach', 'Nach der Arbeit gehe ich einkaufen.'],
          ['seit', 'Seit einem Jahr lerne ich Deutsch.'],
          ['von', 'Das ist von meiner Mutter.'],
          ['zu', 'Ich gehe zum Arzt.'],
        ],
      },
    ],
    examples: [
      { de: 'Ich helfe meiner Nachbarin.', en: 'I am helping my neighbour.' },
      { de: 'Das Buch gehört dem Kind.', en: 'The book belongs to the child.' },
      { de: 'Nach dem Essen trinken wir Kaffee.', en: 'After the meal we drink coffee.' },
      { de: 'Gibst du mir bitte das Salz?', en: 'Will you pass me the salt, please?' },
    ],
    pitfalls: [
      {
        wrong: 'Ich helfe dich.',
        right: 'Ich helfe dir.',
        why: {
          de: 'helfen verlangt den Dativ, obwohl es im Englischen ein direktes Objekt hat.',
          en: 'helfen takes the dative, even though English has a direct object there.',
        },
      },
      {
        wrong: 'mit die Kinder',
        right: 'mit den Kindern',
        why: {
          de: 'Dativ Plural ist den, und das Nomen bekommt ein -n.',
          en: 'The dative plural is den, and the noun adds -n.',
        },
      },
      {
        wrong: 'Ich gehe in der Stadt.',
        right: 'Ich gehe in die Stadt.',
        why: {
          de: 'Richtung heißt Akkusativ. Mit Dativ hieße es: ich gehe dort herum.',
          en: 'Direction means accusative. With the dative it would mean walking about there.',
        },
      },
    ],
    drills: [
      ['Ich fahre mit ___ Bus.', ['dem', 'den', 'der', 'das'], 0, 'mit + Dativ, maskulin: dem.', 'mit + dative, masculine: dem.'],
      ['Ich helfe ___ gern.', ['dir', 'dich', 'du', 'deiner'], 0, 'helfen verlangt Dativ: dir.', 'helfen takes the dative: dir.'],
      ['Das Auto gehört ___ Nachbarin.', ['der', 'die', 'den', 'dem'], 0, 'gehören + Dativ, feminin: der.', 'gehören + dative, feminine: der.'],
      ['Nach ___ Arbeit gehe ich schwimmen.', ['der', 'die', 'dem', 'den'], 0, 'nach + Dativ, die Arbeit → der.', 'nach + dative, die Arbeit → der.'],
      ['Wir spielen mit ___ Kindern.', ['den', 'die', 'dem', 'der'], 0, 'Dativ Plural: den, Nomen mit -n.', 'Dative plural: den, noun with -n.'],
      ['Gib ___ bitte das Buch!', ['mir', 'mich', 'ich', 'meiner'], 0, 'geben + Person im Dativ: mir.', 'geben + person in the dative: mir.'],
      ['Ich bin in ___ Küche.', ['der', 'die', 'den', 'dem'], 0, 'Kein Ortswechsel, also Dativ: in der Küche.', 'No change of place, so the dative: in der Küche.'],
      ['Seit ___ Monat wohne ich hier.', ['einem', 'einen', 'ein', 'einer'], 0, 'seit + Dativ, der Monat → einem.', 'seit + dative, der Monat → einem.'],
    ],
  },

  {
    key: 'vergangenheita2',
    level: 'A2',
    icon: '⏪',
    title: { de: 'war, hatte, konnte: die kurze Vergangenheit', en: 'war, hatte, konnte: the short past' },
    summary: {
      de: 'sein, haben und die Modalverben nimmt man im Präteritum, auch beim Sprechen.',
      en: 'sein, haben and the modals use the Präteritum, even in speech.',
    },
    body: {
      en: [
        'German has two past tenses, and at A2 the division of labour is simple. Almost every verb uses the Perfekt when you speak: "Ich habe gearbeitet", "Ich bin gefahren".',
        'But a small group sounds wrong in the Perfekt and is used in the Präteritum instead, in speech as well as in writing: sein (war), haben (hatte), and the modals (konnte, musste, wollte, durfte, sollte, mochte). Nobody says "Ich habe müssen arbeiten"; they say "Ich musste arbeiten".',
        'The Präteritum endings for these verbs are: ich -, du -st, er -, wir -en, ihr -t, sie -en. Note that the ich and er forms are identical and have no ending at all: ich war, er war; ich hatte, er hatte.',
        'The modals lose their umlaut in the past: können → konnte, müssen → musste, dürfen → durfte, mögen → mochte. wollen and sollen never had one: wollte, sollte.',
        'es gibt becomes es gab, which is worth learning as its own item - it comes up in every story about the past.',
      ],
      de: [
        'Deutsch hat zwei Vergangenheitsformen, und auf A2 ist die Aufteilung einfach: Fast jedes Verb nimmt beim Sprechen das Perfekt - "Ich habe gearbeitet", "Ich bin gefahren".',
        'Eine kleine Gruppe klingt im Perfekt aber falsch und steht im Präteritum, auch gesprochen: sein (war), haben (hatte) und die Modalverben (konnte, musste, wollte, durfte, sollte, mochte). Niemand sagt "Ich habe müssen arbeiten", sondern "Ich musste arbeiten".',
        'Die Endungen: ich -, du -st, er -, wir -en, ihr -t, sie -en. Die ich- und die er-Form sind gleich und haben gar keine Endung: ich war, er war.',
        'Die Modalverben verlieren im Präteritum den Umlaut: können → konnte, müssen → musste, dürfen → durfte, mögen → mochte. wollen und sollen hatten nie einen.',
        'es gibt wird zu es gab - ein eigener Merkposten, denn es kommt in jeder Erzählung vor.',
      ],
    },
    tables: [
      {
        caption: { de: 'sein und haben im Präteritum', en: 'sein and haben in the Präteritum' },
        head: ['Person', 'sein', 'haben'],
        rows: [
          ['ich', 'war', 'hatte'],
          ['du', 'warst', 'hattest'],
          ['er / sie / es', 'war', 'hatte'],
          ['wir', 'waren', 'hatten'],
          ['ihr', 'wart', 'hattet'],
          ['sie / Sie', 'waren', 'hatten'],
        ],
      },
      {
        caption: { de: 'Modalverben', en: 'Modal verbs' },
        head: ['Präsens', 'Präteritum', 'Beispiel'],
        rows: [
          ['können', 'konnte', 'Ich konnte nicht kommen.'],
          ['müssen', 'musste', 'Ich musste arbeiten.'],
          ['wollen', 'wollte', 'Ich wollte dich anrufen.'],
          ['dürfen', 'durfte', 'Wir durften nicht rein.'],
          ['sollen', 'sollte', 'Ich sollte das abgeben.'],
          ['mögen', 'mochte', 'Ich mochte das Essen nicht.'],
        ],
      },
      {
        caption: { de: 'Welche Form wann?', en: 'Which form when?' },
        head: ['Verb', 'gesprochen', 'Beispiel'],
        rows: [
          ['normales Verb', 'Perfekt', 'Ich habe gearbeitet.'],
          ['Bewegung', 'Perfekt mit sein', 'Ich bin gefahren.'],
          ['sein', 'Präteritum', 'Ich war krank.'],
          ['haben', 'Präteritum', 'Ich hatte keine Zeit.'],
          ['Modalverb', 'Präteritum', 'Ich musste arbeiten.'],
          ['es gibt', 'Präteritum', 'Es gab ein Problem.'],
        ],
      },
    ],
    examples: [
      { de: 'Gestern war ich beim Arzt.', en: 'Yesterday I was at the doctor’s.' },
      { de: 'Ich hatte leider keine Zeit.', en: 'Unfortunately I had no time.' },
      { de: 'Wir konnten den Zug nicht erreichen.', en: 'We could not catch the train.' },
      { de: 'Es gab ein Problem mit der Heizung.', en: 'There was a problem with the heating.' },
    ],
    pitfalls: [
      {
        wrong: 'Ich habe gestern krank gewesen.',
        right: 'Ich war gestern krank.',
        why: {
          de: 'sein steht gesprochen im Präteritum, nicht im Perfekt.',
          en: 'In speech sein uses the Präteritum, not the Perfekt.',
        },
      },
      {
        wrong: 'Ich habe arbeiten müssen.',
        right: 'Ich musste arbeiten.',
        why: {
          de: 'Modalverben nimmt man im Präteritum. Die Perfektform gibt es, klingt aber umständlich.',
          en: 'Modals use the Präteritum. The Perfekt form exists but sounds laboured.',
        },
      },
      {
        wrong: 'Ich könnte nicht kommen. (gestern)',
        right: 'Ich konnte nicht kommen.',
        why: {
          de: 'Mit Umlaut ist es Konjunktiv II ("ich könnte" = ich wäre in der Lage), ohne Umlaut Vergangenheit.',
          en: 'With the umlaut it is Konjunktiv II ("I would be able to"); without it, the past.',
        },
      },
    ],
    drills: [
      ['Gestern ___ ich krank.', ['war', 'bin', 'habe', 'wäre'], 0, 'sein im Präteritum: war.', 'sein in the Präteritum: war.'],
      ['Wir ___ leider keine Zeit.', ['hatten', 'haben', 'waren', 'hätten'], 0, 'haben im Präteritum: hatten.', 'haben in the Präteritum: hatten.'],
      ['Ich ___ bis acht arbeiten.', ['musste', 'müsste', 'habe gemusst', 'muss'], 0, 'Modalverb in der Vergangenheit, ohne Umlaut.', 'A modal in the past, with no umlaut.'],
      ['___ es gestern ein Problem?', ['Gab', 'Gibt', 'Hat gegeben', 'Gäbe'], 0, 'es gibt → es gab.', 'es gibt → es gab.'],
      ['Ich ___ gestern lange ___.', ['habe … gearbeitet', 'war … gearbeitet', 'arbeitete … –', 'bin … gearbeitet'], 0, 'Ein normales Verb nimmt gesprochen das Perfekt mit haben.', 'An ordinary verb uses the Perfekt with haben in speech.'],
      ['Wir ___ den Zug nicht ___.', ['haben … erreicht', 'sind … erreicht', 'hatten … erreichen', 'waren … erreicht'], 0, 'erreichen nimmt haben.', 'erreichen takes haben.'],
      ['Als Kind ___ ich kein Gemüse.', ['mochte', 'möchte', 'mag', 'habe gemocht'], 0, 'mögen im Präteritum: mochte, ohne Umlaut.', 'mögen in the Präteritum: mochte, no umlaut.'],
      ['Sie ___ gestern nach Berlin ___.', ['ist … gefahren', 'hat … gefahren', 'war … gefahren', 'ist … fahren'], 0, 'Bewegung von A nach B: Perfekt mit sein.', 'Movement from A to B: Perfekt with sein.'],
    ],
  },
];
