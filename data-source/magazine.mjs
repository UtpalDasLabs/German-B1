/**
 * The magazine: short articles written at a level, to be read rather than
 * answered.
 *
 * Everything else in this app is an exercise. An article is the one place the
 * learner meets German doing its actual job, which is why the words in it are
 * tappable and the grammar in it is linked: the moment you need an explanation
 * is the moment you hit the sentence, not later in a grammar list.
 *
 * Markup, resolved by the build script so a mistake fails the build:
 *
 *   [Kaution]            a word with a dictionary entry
 *   [bezahlt|bezahlen]   same, when the text has an inflected form
 *   {musst du bezahlen|modalverben}   a phrase that illustrates a topic
 *
 * Anything bracketed must resolve to a real entry at or below the article's
 * level, and any topic key must exist - an article that teaches above its own
 * level is a bug, not a bonus.
 *
 * Item rows are [prompt, options, answerIndex, whyDe, whyEn, promptEn?].
 */
export const MAGAZINE = [
  {
    id: 'mag.a1.wohnung',
    level: 'A1',
    theme: 'wohnen',
    minutes: 3,
    title: { de: 'Meine erste Wohnung', en: 'My first flat' },
    teaser: {
      de: 'Ein Zimmer, eine Küche, ein Bad - und viel zu viele Formulare.',
      en: 'One room, a kitchen, a bathroom – and far too many forms.',
    },
    paragraphs: [
      'Ich heiße Amina. Ich komme aus Marokko und ich {wohne|praesens} seit drei Monaten in Leipzig.',
      'Meine [Wohnung] ist klein. Sie hat ein [Zimmer], eine [Küche] und ein [Bad]. Das [Fenster] ist groß, deshalb ist das Zimmer sehr [hell]. Im Winter ist die [Heizung] leider nicht gut.',
      'Die [Miete] ist nicht teuer: 390 Euro. Aber ich [bezahle|bezahlen] auch 90 Euro extra. Das ist [Strom], [Wasser] und [Heizung].',
      'Meine [Nachbarn|der Nachbar] sind [nett]. Frau Köhler wohnt [unten]. Sie hat einen [Hund] und zwei [Katzen|die Katze]. Am [Samstag] sagt sie immer: "Guten Morgen, Amina!"',
      'Ich habe noch keinen [Tisch] und keinen [Schrank]. Meine [Kleidung] liegt in zwei [Koffern|der Koffer]. Am Wochenende [suche|suchen] ich [Möbel|die Möbel] auf dem [Markt].',
    ],
    items: [
      [
        'Wie viele Zimmer hat Aminas Wohnung?',
        ['ein Zimmer', 'zwei Zimmer', 'drei Zimmer', 'vier Zimmer'],
        0,
        'Im Text: "Sie hat ein Zimmer, eine Küche und ein Bad." Küche und Bad zählen nicht als Zimmer.',
        'The text says one room plus a kitchen and a bathroom. Kitchen and bathroom are not counted as rooms.',
        'How many rooms does Amina’s flat have?',
      ],
      [
        'Was bezahlt Amina im Monat insgesamt?',
        ['390 Euro', '480 Euro', '90 Euro', '300 Euro'],
        1,
        '390 Euro Miete plus 90 Euro Nebenkosten sind 480 Euro.',
        '390 euros rent plus 90 euros service charges makes 480 euros.',
        'What does Amina pay in total per month?',
      ],
      [
        'Warum ist das Zimmer hell?',
        ['Das Fenster ist groß.', 'Die Heizung ist gut.', 'Die Wohnung ist neu.', 'Die Lampe ist neu.'],
        0,
        '"Das Fenster ist groß, deshalb ist das Zimmer sehr hell."',
        '"Das Fenster ist groß, deshalb ist das Zimmer sehr hell."',
        'Why is the room bright?',
      ],
      [
        'Was fehlt Amina noch?',
        ['ein Tisch und ein Schrank', 'eine Küche', 'ein Fenster', 'Nachbarn'],
        0,
        '"Ich habe noch keinen Tisch und keinen Schrank."',
        '"Ich habe noch keinen Tisch und keinen Schrank."',
        'What does Amina still not have?',
      ],
      [
        'Wo liegt Aminas Kleidung?',
        ['in zwei Koffern', 'im Schrank', 'auf dem Tisch', 'im Bad'],
        0,
        '"Meine Kleidung liegt in zwei Koffern."',
        '"Meine Kleidung liegt in zwei Koffern."',
        'Where are Amina’s clothes?',
      ],
      [
        'Wer wohnt unten?',
        ['Frau Köhler', 'Amina', 'niemand', 'zwei Katzen'],
        0,
        '"Frau Köhler wohnt unten."',
        '"Frau Köhler wohnt unten."',
        'Who lives downstairs?',
      ],
    ],
  },

  {
    id: 'mag.a1.tag',
    level: 'A1',
    theme: 'zeit',
    minutes: 2,
    title: { de: 'Ein Tag bei der Post', en: 'A day at the post office' },
    teaser: {
      de: 'Halil steht um fünf auf. Warum er den Job trotzdem mag.',
      en: 'Halil gets up at five. Why he likes the job anyway.',
    },
    paragraphs: [
      'Halil arbeitet bei der [Post]. Er {steht um fünf Uhr auf|trennbar} - auch am [Samstag].',
      'Zuerst [trinkt|trinken] er einen [Kaffee]. Dann [fährt|fahren] er mit dem [Fahrrad] zur [Arbeit]. Der [Weg] ist nicht [weit], nur zehn [Minuten|die Minute].',
      'Um sechs [beginnt|anfangen] die Arbeit. Halil [nimmt|nehmen] die [Briefe|der Brief] und sortiert sie. Um neun ist [Pause]. Dann [isst|essen] er ein [Brötchen].',
      'Am [Mittag] ist er [fertig]. "Das ist [gut]", sagt er. "Ich habe am [Abend] [Zeit] für meine [Familie]." Er hat zwei [Kinder|das Kind]. Sie [spielen|spielen] gern [Fußball].',
      'Nur im [Winter] ist die Arbeit [schwer]. Es ist [kalt] und oft [dunkel]. Aber im [Sommer] {fährt er gern mit dem Fahrrad|praesens}.',
    ],
    items: [
      [
        'Wann steht Halil auf?',
        ['um fünf Uhr', 'um sechs Uhr', 'um neun Uhr', 'am Mittag'],
        0,
        '"Er steht um fünf Uhr auf."',
        '"Er steht um fünf Uhr auf."',
        'When does Halil get up?',
      ],
      [
        'Wie kommt Halil zur Arbeit?',
        ['mit dem Fahrrad', 'mit dem Bus', 'mit dem Auto', 'zu Fuß'],
        0,
        '"Dann fährt er mit dem Fahrrad zur Arbeit."',
        '"Dann fährt er mit dem Fahrrad zur Arbeit."',
        'How does Halil get to work?',
      ],
      [
        'Warum findet Halil die Arbeit gut?',
        [
          'Am Abend hat er Zeit für die Familie.',
          'Er verdient viel Geld.',
          'Die Arbeit ist leicht.',
          'Er arbeitet nicht am Samstag.',
        ],
        0,
        '"Ich habe am Abend Zeit für meine Familie."',
        '"Ich habe am Abend Zeit für meine Familie."',
        'Why does Halil like the job?',
      ],
      [
        'Wann ist die Arbeit schwer?',
        ['im Winter', 'im Sommer', 'am Samstag', 'am Mittag'],
        0,
        '"Nur im Winter ist die Arbeit schwer. Es ist kalt und oft dunkel."',
        '"Nur im Winter ist die Arbeit schwer. Es ist kalt und oft dunkel."',
        'When is the work hard?',
      ],
      [
        'Wie lange braucht Halil zur Arbeit?',
        ['zehn Minuten', 'eine Stunde', 'fünf Minuten', 'eine halbe Stunde'],
        0,
        '"Der Weg ist nicht weit, nur zehn Minuten."',
        '"Der Weg ist nicht weit, nur zehn Minuten."',
        'How long does Halil take to get to work?',
      ],
    ],
  },
];
