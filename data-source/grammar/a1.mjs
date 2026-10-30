/**
 * A1 grammar: the machinery you need before you can say anything at all.
 *
 * Everything here is chosen on one test - can the learner build a correct
 * sentence about their own life without it? Present tense, the three articles,
 * the accusative, questions, word order, negation. Nothing is here because it
 * is interesting.
 *
 * Drill rows are [prompt, options, answerIndex, whyDe, whyEn].
 */
export const A1_GRAMMAR = [
  {
    key: 'praesens',
    level: 'A1',
    icon: '\u{1F4CD}',
    title: { de: 'Präsens', en: 'The present tense' },
    summary: {
      de: 'Eine Zeitform für Gegenwart und Zukunft. Die Endung richtet sich nach der Person.',
      en: 'One tense for now and for later. The ending follows the person.',
    },
    body: {
      en: [
        'German has one present tense, and it covers both "I work" and "I am working". There is no continuous form to learn, which is the single biggest gift German gives an English speaker.',
        'Take the infinitive, drop the -en, and add the ending for the person: ich arbeit-e, du arbeit-est, er arbeit-et, wir arbeit-en, ihr arbeit-et, sie arbeit-en.',
        'The present tense also does the future when a time word makes the timing clear: "Morgen fahre ich nach Berlin" is how a German speaker says "I am going to Berlin tomorrow". You do not need a future tense at A1.',
        'A small group of common verbs changes its stem vowel in the du and er/sie/es forms: fahren becomes du fährst, er fährt; sprechen becomes du sprichst, er spricht; sehen becomes du siehst, er sieht. The wir and sie forms never change.',
        'sein and haben are irregular and are worth learning as whole sets, because almost every sentence you say will contain one of them.',
      ],
      de: [
        'Deutsch hat eine Präsensform, und sie deckt sowohl "ich arbeite" als auch "ich bin dabei zu arbeiten" ab. Es gibt keine Verlaufsform wie im Englischen.',
        'Nimm den Infinitiv, streiche das -en und hänge die Endung der Person an: ich arbeit-e, du arbeit-est, er arbeit-et, wir arbeit-en, ihr arbeit-et, sie arbeit-en.',
        'Das Präsens übernimmt auch die Zukunft, wenn ein Zeitwort die Zeit klar macht: "Morgen fahre ich nach Berlin." Eine Futurform brauchst du auf A1 nicht.',
        'Eine kleine Gruppe häufiger Verben wechselt den Stammvokal in der du- und er/sie/es-Form: fahren wird zu du fährst, er fährt; sprechen zu du sprichst, er spricht; sehen zu du siehst, er sieht. Die wir- und sie-Form ändert sich nie.',
        'sein und haben sind unregelmäßig und sollte man als ganze Reihe lernen, denn fast jeder Satz enthält eines von beiden.',
      ],
    },
    tables: [
      {
        caption: { de: 'Regelmäßige Endungen', en: 'Regular endings' },
        head: ['Person', 'Endung', 'wohnen', 'arbeiten'],
        rows: [
          ['ich', '-e', 'wohne', 'arbeite'],
          ['du', '-st', 'wohnst', 'arbeitest'],
          ['er / sie / es', '-t', 'wohnt', 'arbeitet'],
          ['wir', '-en', 'wohnen', 'arbeiten'],
          ['ihr', '-t', 'wohnt', 'arbeitet'],
          ['sie / Sie', '-en', 'wohnen', 'arbeiten'],
        ],
      },
      {
        caption: { de: 'sein und haben', en: 'sein and haben' },
        head: ['Person', 'sein', 'haben'],
        rows: [
          ['ich', 'bin', 'habe'],
          ['du', 'bist', 'hast'],
          ['er / sie / es', 'ist', 'hat'],
          ['wir', 'sind', 'haben'],
          ['ihr', 'seid', 'habt'],
          ['sie / Sie', 'sind', 'haben'],
        ],
      },
      {
        caption: { de: 'Vokalwechsel', en: 'Stem-vowel change' },
        head: ['Verb', 'du', 'er / sie / es'],
        rows: [
          ['fahren (a → ä)', 'fährst', 'fährt'],
          ['sprechen (e → i)', 'sprichst', 'spricht'],
          ['sehen (e → ie)', 'siehst', 'sieht'],
          ['nehmen', 'nimmst', 'nimmt'],
          ['essen', 'isst', 'isst'],
        ],
      },
    ],
    examples: [
      { de: 'Ich arbeite bei einer kleinen Firma.', en: 'I work at a small company.' },
      { de: 'Sprichst du Deutsch?', en: 'Do you speak German?' },
      { de: 'Morgen fahre ich nach Hamburg.', en: 'Tomorrow I am going to Hamburg.' },
      { de: 'Sie hat zwei Kinder.', en: 'She has two children.' },
    ],
    pitfalls: [
      {
        wrong: 'Ich bin arbeiten.',
        right: 'Ich arbeite.',
        why: {
          de: 'Es gibt keine Verlaufsform. "Ich arbeite" heißt beides.',
          en: 'There is no continuous form. "Ich arbeite" means both "I work" and "I am working".',
        },
      },
      {
        wrong: 'Er sprecht Deutsch.',
        right: 'Er spricht Deutsch.',
        why: {
          de: 'sprechen wechselt e → i in der er-Form.',
          en: 'sprechen changes e → i in the er form.',
        },
      },
      {
        wrong: 'Du arbeitst hier.',
        right: 'Du arbeitest hier.',
        why: {
          de: 'Nach -t oder -d schiebt man ein -e- ein, sonst ist es nicht sprechbar.',
          en: 'After a stem in -t or -d an -e- is inserted, or the ending is unpronounceable.',
        },
      },
    ],
    drills: [
      ['Ich ___ in München.', ['wohne', 'wohnst', 'wohnt', 'wohnen'], 0, 'ich → -e.', 'ich takes -e.'],
      ['Du ___ sehr gut Deutsch.', ['sprichst', 'sprechst', 'sprecht', 'sprichtst'], 0, 'sprechen wechselt e → i: du sprichst.', 'sprechen changes e → i: du sprichst.'],
      ['Er ___ heute nicht.', ['arbeitet', 'arbeitt', 'arbeite', 'arbeiten'], 0, 'Stamm auf -t: er arbeitet.', 'Stem in -t: er arbeitet.'],
      ['Wir ___ aus Spanien.', ['kommen', 'kommt', 'komme', 'kommst'], 0, 'wir → -en.', 'wir takes -en.'],
      ['Ihr ___ zu spät.', ['seid', 'sind', 'bist', 'ist'], 0, 'ihr seid. Die Form wird oft mit "sind" verwechselt.', 'ihr seid. It is often confused with "sind".'],
      ['Sie ___ keine Zeit.', ['hat', 'hast', 'habt', 'haben'], 0, 'sie (Singular) → hat.', 'sie (singular) takes hat.'],
      ['___ du den Film?', ['Siehst', 'Sehst', 'Seht', 'Sieht'], 0, 'sehen wechselt e → ie: du siehst.', 'sehen changes e → ie: du siehst.'],
      ['Morgen ___ ich nach Köln.', ['fahre', 'werde fahren', 'fahren', 'fuhr'], 0, 'Präsens plus Zeitwort reicht für die Zukunft.', 'Present tense plus a time word is enough for the future.'],
    ],
  },

  {
    key: 'artikel',
    level: 'A1',
    icon: '\u{1F518}',
    title: { de: 'der, die, das und ein, eine', en: 'der, die, das and ein, eine' },
    summary: {
      de: 'Jedes Nomen hat ein Geschlecht. Es ist nicht logisch, also lernt man es mit dem Wort.',
      en: 'Every noun has a gender. It is not logical, so you learn it with the word.',
    },
    body: {
      en: [
        'Every German noun is masculine (der), feminine (die) or neuter (das). The gender is a property of the word, not of the thing: der Tisch, die Lampe, das Fenster. "das Mädchen" is neuter even though a girl is not.',
        'This is why every vocabulary list in this app shows the article, and why you should learn "die Wohnung" rather than "Wohnung". Learning the word without its article means learning it twice.',
        'A few endings are reliable enough to trust: -ung, -heit, -keit, -schaft, -ion and -e are almost always die; -chen and -lein are always das; -er for a person doing something and -ismus are der.',
        'ein and eine are the indefinite articles - "a". They follow the gender too: ein Tisch, eine Lampe, ein Fenster. There is no plural form of ein; the plural of "ein Tisch" is just "Tische".',
        'In the plural all three genders collapse into one article: die. die Tische, die Lampen, die Fenster.',
      ],
      de: [
        'Jedes deutsche Nomen ist maskulin (der), feminin (die) oder neutral (das). Das Geschlecht gehört zum Wort, nicht zur Sache: der Tisch, die Lampe, das Fenster. "das Mädchen" ist neutral, obwohl ein Mädchen weiblich ist.',
        'Deshalb zeigt jede Wortliste in dieser App den Artikel. Lerne "die Wohnung", nicht "Wohnung" - sonst lernst du das Wort zweimal.',
        'Ein paar Endungen sind verlässlich: -ung, -heit, -keit, -schaft, -ion und -e sind fast immer die; -chen und -lein immer das; -er bei Personen und -ismus sind der.',
        'ein und eine sind die unbestimmten Artikel. Sie folgen demselben Geschlecht: ein Tisch, eine Lampe, ein Fenster. Einen Plural von ein gibt es nicht: der Plural von "ein Tisch" ist einfach "Tische".',
        'Im Plural haben alle drei Geschlechter denselben Artikel: die.',
      ],
    },
    tables: [
      {
        caption: { de: 'Nominativ', en: 'Nominative' },
        head: ['Geschlecht', 'bestimmt', 'unbestimmt', 'Beispiel'],
        rows: [
          ['maskulin', 'der', 'ein', 'der / ein Tisch'],
          ['feminin', 'die', 'eine', 'die / eine Lampe'],
          ['neutral', 'das', 'ein', 'das / ein Fenster'],
          ['Plural', 'die', '–', 'die Tische'],
        ],
      },
      {
        caption: { de: 'Endungen, auf die man sich verlassen kann', en: 'Endings you can trust' },
        head: ['Endung', 'Artikel', 'Beispiel'],
        rows: [
          ['-ung, -heit, -keit', 'die', 'die Wohnung, die Gesundheit'],
          ['-schaft, -ion, -tät', 'die', 'die Freundschaft, die Nation'],
          ['-e (meist)', 'die', 'die Sprache, die Lampe'],
          ['-chen, -lein', 'das', 'das Mädchen, das Brötchen'],
          ['-er (Person)', 'der', 'der Lehrer, der Verkäufer'],
          ['-ment, -um', 'das', 'das Dokument, das Museum'],
        ],
      },
    ],
    examples: [
      { de: 'Der Schlüssel liegt auf dem Tisch.', en: 'The key is on the table.' },
      { de: 'Ich suche eine Wohnung.', en: 'I am looking for a flat.' },
      { de: 'Das ist ein Problem.', en: 'That is a problem.' },
      { de: 'Die Kinder sind im Garten.', en: 'The children are in the garden.' },
    ],
    pitfalls: [
      {
        wrong: 'die Mädchen (Singular)',
        right: 'das Mädchen',
        why: {
          de: 'Alles auf -chen ist das, auch wenn die Person weiblich ist.',
          en: 'Anything ending in -chen is das, whatever the person’s gender.',
        },
      },
      {
        wrong: 'Ich habe eine Hunger.',
        right: 'Ich habe Hunger.',
        why: {
          de: 'Bei Hunger, Durst, Zeit, Geld steht kein Artikel.',
          en: 'Hunger, Durst, Zeit and Geld take no article in these set phrases.',
        },
      },
      {
        wrong: 'ein Lampe',
        right: 'eine Lampe',
        why: {
          de: 'Lampe ist feminin, also eine.',
          en: 'Lampe is feminine, so eine.',
        },
      },
    ],
    drills: [
      ['___ Wohnung ist klein.', ['Die', 'Der', 'Das', 'Den'], 0, '-ung ist immer die.', 'Nouns in -ung are always die.'],
      ['___ Mädchen heißt Lena.', ['Das', 'Die', 'Der', 'Dem'], 0, '-chen ist immer das.', 'Nouns in -chen are always das.'],
      ['Ich brauche ___ Stuhl.', ['einen', 'ein', 'eine', 'einem'], 0, 'der Stuhl im Akkusativ: einen.', 'der Stuhl in the accusative: einen.'],
      ['___ Fenster ist offen.', ['Das', 'Der', 'Die', 'Dem'], 0, 'das Fenster.', 'It is das Fenster.'],
      ['Hast du ___ Frage?', ['eine', 'ein', 'einen', 'einem'], 0, 'die Frage ist feminin; Akkusativ feminin ist auch eine.', 'die Frage is feminine, and the feminine accusative is also eine.'],
      ['___ Lehrer kommt zu spät.', ['Der', 'Die', 'Das', 'Den'], 0, '-er bei Personen ist der.', '-er for a person is der.'],
      ['___ Bücher liegen hier.', ['Die', 'Der', 'Das', 'Den'], 0, 'Plural ist immer die.', 'The plural article is always die.'],
      ['Das ist ___ Museum.', ['ein', 'eine', 'einen', 'einem'], 0, 'das Museum, also ein.', 'das Museum, so ein.'],
    ],
  },

  {
    key: 'akkusativ',
    level: 'A1',
    icon: '\u{1F3AF}',
    title: { de: 'Akkusativ', en: 'The accusative' },
    summary: {
      de: 'Der Fall des Objekts. Sichtbar ist er fast nur im Maskulinum: der wird den.',
      en: 'The object case. It is visible almost only in the masculine: der becomes den.',
    },
    body: {
      en: [
        'The subject of a sentence stands in the nominative; the thing the verb is done to stands in the accusative. "Der Mann liest das Buch" - der Mann is doing, das Buch is being read.',
        'The good news: only the masculine changes. der → den, ein → einen, mein → meinen. Feminine, neuter and plural look exactly the same as the nominative, which is why "Ich sehe die Frau" and "Die Frau kommt" use the same word.',
        'Some verbs are followed by the accusative so reliably that it is worth learning them as a set: haben, brauchen, suchen, kaufen, essen, trinken, sehen, nehmen, möchten.',
        'A group of prepositions always takes the accusative, with no exceptions: durch, für, gegen, ohne, um. The classroom mnemonic is "durch-für-gegen-ohne-um", chanted in that order.',
        'es gibt is always followed by the accusative: "Hier gibt es einen Supermarkt."',
      ],
      de: [
        'Das Subjekt steht im Nominativ, das Ziel der Handlung im Akkusativ: "Der Mann liest das Buch." Der Mann handelt, das Buch wird gelesen.',
        'Die gute Nachricht: nur das Maskulinum ändert sich. der → den, ein → einen, mein → meinen. Feminin, neutral und Plural sehen genauso aus wie im Nominativ.',
        'Manche Verben verlangen so verlässlich den Akkusativ, dass man sie als Gruppe lernt: haben, brauchen, suchen, kaufen, essen, trinken, sehen, nehmen, möchten.',
        'Eine Gruppe von Präpositionen steht immer mit Akkusativ, ohne Ausnahme: durch, für, gegen, ohne, um.',
        'Nach "es gibt" steht immer der Akkusativ: "Hier gibt es einen Supermarkt."',
      ],
    },
    tables: [
      {
        caption: { de: 'Nominativ und Akkusativ', en: 'Nominative and accusative' },
        head: ['Geschlecht', 'Nominativ', 'Akkusativ'],
        rows: [
          ['maskulin', 'der / ein / mein Tisch', 'den / einen / meinen Tisch'],
          ['feminin', 'die / eine / meine Lampe', 'die / eine / meine Lampe'],
          ['neutral', 'das / ein / mein Buch', 'das / ein / mein Buch'],
          ['Plural', 'die / meine Bücher', 'die / meine Bücher'],
        ],
      },
      {
        caption: { de: 'Präpositionen mit Akkusativ', en: 'Prepositions with the accusative' },
        head: ['Präposition', 'Bedeutung', 'Beispiel'],
        rows: [
          ['durch', 'through', 'Wir gehen durch den Park.'],
          ['für', 'for', 'Das ist für meinen Bruder.'],
          ['gegen', 'against, around', 'Ich bin gegen den Plan.'],
          ['ohne', 'without', 'Ein Kaffee ohne Milch.'],
          ['um', 'around, at', 'Wir sitzen um den Tisch.'],
        ],
      },
    ],
    examples: [
      { de: 'Ich suche den Schlüssel.', en: 'I am looking for the key.' },
      { de: 'Sie kauft einen Computer.', en: 'She is buying a computer.' },
      { de: 'Das Geschenk ist für meine Mutter.', en: 'The present is for my mother.' },
      { de: 'Es gibt hier keinen Aufzug.', en: 'There is no lift here.' },
    ],
    pitfalls: [
      {
        wrong: 'Ich habe ein Bruder.',
        right: 'Ich habe einen Bruder.',
        why: {
          de: 'haben verlangt Akkusativ, und maskulin wird einen.',
          en: 'haben takes the accusative, and the masculine becomes einen.',
        },
      },
      {
        wrong: 'Das ist für der Lehrer.',
        right: 'Das ist für den Lehrer.',
        why: {
          de: 'für steht immer mit Akkusativ.',
          en: 'für always takes the accusative.',
        },
      },
      {
        wrong: 'Ich sehe den Frau.',
        right: 'Ich sehe die Frau.',
        why: {
          de: 'Nur Maskulinum ändert sich. Feminin bleibt die.',
          en: 'Only the masculine changes. The feminine stays die.',
        },
      },
    ],
    drills: [
      ['Ich brauche ___ Stift.', ['einen', 'ein', 'eine', 'einem'], 0, 'der Stift, Akkusativ maskulin: einen.', 'der Stift, masculine accusative: einen.'],
      ['Wir gehen durch ___ Park.', ['den', 'der', 'dem', 'das'], 0, 'durch verlangt Akkusativ: den Park.', 'durch takes the accusative: den Park.'],
      ['Sie liest ___ Zeitung.', ['die', 'den', 'dem', 'der'], 0, 'Feminin bleibt im Akkusativ die.', 'The feminine stays die in the accusative.'],
      ['Das Geschenk ist für ___ Vater.', ['meinen', 'mein', 'meine', 'meinem'], 0, 'für + Akkusativ, maskulin: meinen.', 'für + accusative, masculine: meinen.'],
      ['Es gibt hier ___ Bahnhof.', ['einen', 'ein', 'eine', 'einem'], 0, 'Nach es gibt steht der Akkusativ.', 'es gibt is followed by the accusative.'],
      ['Ich trinke ___ Kaffee ohne Zucker.', ['den', 'der', 'dem', 'des'], 0, 'trinken verlangt Akkusativ: den Kaffee.', 'trinken takes the accusative: den Kaffee.'],
      ['Nimm ___ Stuhl!', ['den', 'der', 'dem', 'des'], 0, 'nehmen verlangt Akkusativ.', 'nehmen takes the accusative.'],
      ['___ Fenster ist offen. Ich schließe ___ Fenster.', ['Das … das', 'Das … den', 'Der … den', 'Die … die'], 0, 'Neutral sieht in beiden Fällen gleich aus.', 'The neuter looks the same in both cases.'],
    ],
  },

  {
    key: 'possessiv',
    level: 'A1',
    icon: '\u{1F511}',
    title: { de: 'mein, dein, sein: Possessivartikel', en: 'mein, dein, sein: possessives' },
    summary: {
      de: 'Sie zeigen den Besitzer und richten sich trotzdem nach dem Nomen danach.',
      en: 'They name the owner but take their ending from the noun that follows.',
    },
    body: {
      en: [
        'The possessive says who owns the thing: mein (my), dein (your, informal), sein (his / its), ihr (her), unser (our), euer (your, plural), ihr (their), Ihr (your, formal).',
        'The trap is that the ending has nothing to do with the owner and everything to do with the noun being owned. "Her brother" is ihr Bruder, "her sister" is ihre Schwester - ihr changes, she does not.',
        'The endings are exactly the ones ein takes, which is why these are called ein-words: mein Bruder, meine Schwester, mein Kind, meine Kinder. In the accusative the masculine adds -en, like einen: meinen Bruder.',
        'euer drops its second e before an ending: euer Haus, but eure Wohnung, euren Bruder.',
        'Ihr meaning "your (formal)" is always capitalised, which is the only way to tell it from ihr meaning "her" or "their" in writing.',
      ],
      de: [
        'Der Possessivartikel nennt den Besitzer: mein, dein, sein, ihr, unser, euer, ihr, Ihr.',
        'Die Falle: die Endung hat nichts mit dem Besitzer zu tun, sondern mit dem Nomen danach. "Ihr Bruder" und "ihre Schwester" - ihr verändert sich, sie nicht.',
        'Die Endungen sind genau die von ein, deshalb heißen sie ein-Wörter: mein Bruder, meine Schwester, mein Kind, meine Kinder. Im Akkusativ bekommt das Maskulinum -en: meinen Bruder.',
        'euer verliert das zweite e vor einer Endung: euer Haus, aber eure Wohnung, euren Bruder.',
        'Ihr für die höfliche Anrede schreibt man immer groß - in der Schrift ist das der einzige Unterschied zu ihr (= ihr/ihre).',
      ],
    },
    tables: [
      {
        caption: { de: 'Endungen von mein', en: 'Endings of mein' },
        head: ['', 'maskulin', 'feminin', 'neutral', 'Plural'],
        rows: [
          ['Nominativ', 'mein', 'meine', 'mein', 'meine'],
          ['Akkusativ', 'meinen', 'meine', 'mein', 'meine'],
        ],
      },
      {
        caption: { de: 'Wer besitzt?', en: 'Who owns it?' },
        head: ['Person', 'Possessivartikel', 'Beispiel'],
        rows: [
          ['ich', 'mein', 'mein Auto'],
          ['du', 'dein', 'dein Auto'],
          ['er / es', 'sein', 'sein Auto'],
          ['sie', 'ihr', 'ihr Auto'],
          ['wir', 'unser', 'unser Auto'],
          ['ihr', 'euer / eure', 'euer Auto, eure Wohnung'],
          ['sie (Plural)', 'ihr', 'ihr Auto'],
          ['Sie (höflich)', 'Ihr', 'Ihr Auto'],
        ],
      },
    ],
    examples: [
      { de: 'Mein Bruder wohnt in Leipzig.', en: 'My brother lives in Leipzig.' },
      { de: 'Wie ist deine Telefonnummer?', en: 'What is your telephone number?' },
      { de: 'Ich kenne ihre Schwester nicht.', en: 'I do not know her sister.' },
      { de: 'Haben Sie Ihren Ausweis dabei?', en: 'Do you have your ID with you?' },
    ],
    pitfalls: [
      {
        wrong: 'ihr Schwester',
        right: 'ihre Schwester',
        why: {
          de: 'Die Endung richtet sich nach Schwester (feminin), nicht nach der Besitzerin.',
          en: 'The ending follows Schwester (feminine), not the owner.',
        },
      },
      {
        wrong: 'Ich sehe mein Bruder.',
        right: 'Ich sehe meinen Bruder.',
        why: {
          de: 'sehen verlangt Akkusativ; maskulin wird meinen.',
          en: 'sehen takes the accusative; the masculine becomes meinen.',
        },
      },
      {
        wrong: 'euer Wohnung',
        right: 'eure Wohnung',
        why: {
          de: 'Vor einer Endung fällt das zweite e von euer weg.',
          en: 'Before an ending, euer loses its second e.',
        },
      },
    ],
    drills: [
      ['Das ist ___ Schwester.', ['meine', 'mein', 'meinen', 'meinem'], 0, 'Schwester ist feminin: meine.', 'Schwester is feminine: meine.'],
      ['Ich besuche ___ Bruder.', ['meinen', 'mein', 'meine', 'meinem'], 0, 'Akkusativ maskulin: meinen.', 'Masculine accusative: meinen.'],
      ['Wo ist ___ Auto?', ['dein', 'deine', 'deinen', 'deinem'], 0, 'das Auto ist neutral: dein.', 'das Auto is neuter: dein.'],
      ['Sie liebt ___ Kinder.', ['ihre', 'ihr', 'ihren', 'ihrem'], 0, 'Plural: ihre.', 'Plural: ihre.'],
      ['Haben Sie ___ Pass dabei?', ['Ihren', 'Ihr', 'Ihre', 'ihren'], 0, 'Höflich und Akkusativ maskulin: Ihren, groß geschrieben.', 'Formal and masculine accusative: Ihren, capitalised.'],
      ['___ Wohnung ist sehr schön.', ['Eure', 'Euer', 'Euren', 'Eurem'], 0, 'Vor der Endung fällt das e weg: eure Wohnung.', 'The e drops before the ending: eure Wohnung.'],
      ['Er sucht ___ Schlüssel.', ['seinen', 'sein', 'seine', 'seinem'], 0, 'der Schlüssel im Akkusativ: seinen.', 'der Schlüssel in the accusative: seinen.'],
      ['___ Lehrer heißt Herr Bach.', ['Unser', 'Unsere', 'Unseren', 'Unserem'], 0, 'der Lehrer im Nominativ: unser.', 'der Lehrer in the nominative: unser.'],
    ],
  },

  {
    key: 'wfragen',
    level: 'A1',
    icon: '❓',
    title: { de: 'Fragen stellen', en: 'Asking questions' },
    summary: {
      de: 'Zwei Fragetypen, zwei Wortstellungen. Mit W-Wort: Verb auf Position 2. Ohne: Verb zuerst.',
      en: 'Two question types, two word orders. With a question word the verb is second; without one it comes first.',
    },
    body: {
      en: [
        'A question with a question word puts the question word first and the verb second: "Wo wohnst du?" "Wann kommt der Bus?" "Was machst du heute?" This is the same verb-second rule that governs statements.',
        'A yes/no question has no question word, so the verb moves to the front: "Wohnst du in Berlin?" "Kommt der Bus bald?" Nothing else changes.',
        'The question words worth learning as a block are: wer (who), was (what), wo (where), wohin (where to), woher (where from), wann (when), wie (how), warum (why), wie viel / wie viele (how much / many), welcher (which).',
        'wer declines like der: wer (nominative), wen (accusative), wem (dative). "Wen siehst du?" is "Whom do you see?"',
        'wie combines with adjectives to ask for a measurement: wie alt, wie lang, wie teuer, wie weit. "Wie alt bist du?" is the normal way to ask someone’s age.',
      ],
      de: [
        'Eine Frage mit W-Wort stellt das W-Wort an Position 1 und das Verb an Position 2: "Wo wohnst du?" "Wann kommt der Bus?" Das ist dieselbe Regel wie im Aussagesatz.',
        'Eine Ja/Nein-Frage hat kein W-Wort, deshalb rückt das Verb nach vorn: "Wohnst du in Berlin?" Sonst ändert sich nichts.',
        'Die wichtigsten W-Wörter: wer, was, wo, wohin, woher, wann, wie, warum, wie viel / wie viele, welcher.',
        'wer wird dekliniert wie der: wer, wen, wem. "Wen siehst du?"',
        'wie verbindet sich mit Adjektiven zu einer Maßfrage: wie alt, wie lang, wie teuer, wie weit.',
      ],
    },
    tables: [
      {
        caption: { de: 'Zwei Wortstellungen', en: 'Two word orders' },
        head: ['Typ', 'Position 1', 'Position 2', 'Rest'],
        rows: [
          ['W-Frage', 'Wo', 'wohnst', 'du?'],
          ['W-Frage', 'Wann', 'beginnt', 'der Kurs?'],
          ['Ja/Nein', 'Wohnst', 'du', 'in Berlin?'],
          ['Ja/Nein', 'Hast', 'du', 'Zeit?'],
        ],
      },
      {
        caption: { de: 'W-Wörter', en: 'Question words' },
        head: ['W-Wort', 'fragt nach', 'Beispiel'],
        rows: [
          ['wer / wen / wem', 'Person', 'Wer ist das?'],
          ['was', 'Sache', 'Was kostet das?'],
          ['wo', 'Ort', 'Wo ist die Post?'],
          ['wohin', 'Richtung', 'Wohin fährst du?'],
          ['woher', 'Herkunft', 'Woher kommst du?'],
          ['wann', 'Zeit', 'Wann hast du Zeit?'],
          ['wie', 'Art, Maß', 'Wie alt bist du?'],
          ['warum', 'Grund', 'Warum lernst du Deutsch?'],
        ],
      },
    ],
    examples: [
      { de: 'Woher kommen Sie?', en: 'Where are you from?' },
      { de: 'Wie viel kostet die Fahrkarte?', en: 'How much does the ticket cost?' },
      { de: 'Sprechen Sie Englisch?', en: 'Do you speak English?' },
      { de: 'Warum bist du so müde?', en: 'Why are you so tired?' },
    ],
    pitfalls: [
      {
        wrong: 'Wo du wohnst?',
        right: 'Wo wohnst du?',
        why: {
          de: 'Nach dem W-Wort steht das Verb, nicht das Subjekt.',
          en: 'The verb, not the subject, follows the question word.',
        },
      },
      {
        wrong: 'Du hast Zeit?',
        right: 'Hast du Zeit?',
        why: {
          de: 'In der Ja/Nein-Frage steht das Verb zuerst. Mit Subjekt zuerst klingt es wie eine erstaunte Rückfrage.',
          en: 'A yes/no question puts the verb first. Subject first sounds like a surprised echo.',
        },
      },
      {
        wrong: 'Wo gehst du?',
        right: 'Wohin gehst du?',
        why: {
          de: 'wo fragt nach dem Ort, wohin nach der Richtung.',
          en: 'wo asks about location, wohin about direction.',
        },
      },
    ],
    drills: [
      ['___ wohnst du?', ['Wo', 'Wohin', 'Woher', 'Wann'], 0, 'wohnen heißt bleiben, also Ort: wo.', 'wohnen is about location, so wo.'],
      ['___ kommst du? – Aus Indien.', ['Woher', 'Wohin', 'Wo', 'Wer'], 0, 'Die Antwort nennt die Herkunft: woher.', 'The answer gives an origin: woher.'],
      ['___ du heute Zeit?', ['Hast', 'Du hast', 'Wann hast', 'Hast du'], 0, 'Ja/Nein-Frage: Verb zuerst.', 'Yes/no question: verb first.'],
      ['___ kostet das Ticket?', ['Wie viel', 'Wie viele', 'Wie', 'Was für'], 0, 'Geld ist nicht zählbar: wie viel.', 'Money is uncountable: wie viel.'],
      ['___ fährst du im Sommer?', ['Wohin', 'Wo', 'Woher', 'Wie'], 0, 'fahren nennt eine Richtung: wohin.', 'fahren implies direction: wohin.'],
      ['___ siehst du da? – Meinen Chef.', ['Wen', 'Wer', 'Wem', 'Was'], 0, 'Die Antwort steht im Akkusativ, also wen.', 'The answer is accusative, so wen.'],
      ['___ beginnt der Film?', ['Wann', 'Wo', 'Wie', 'Warum'], 0, 'Frage nach der Zeit: wann.', 'Asking about time: wann.'],
      ['___ heißt das auf Deutsch?', ['Wie', 'Was', 'Wer', 'Wo'], 0, 'Feste Wendung: Wie heißt das auf Deutsch?', 'Set phrase: Wie heißt das auf Deutsch?'],
    ],
  },

  {
    key: 'satzklammer',
    level: 'A1',
    icon: '\u{1F517}',
    title: { de: 'Satzklammer: Verb 2, Rest ans Ende', en: 'The sentence bracket: verb second, rest at the end' },
    summary: {
      de: 'Das konjugierte Verb steht auf Position 2. Alles Weitere vom Verb geht ganz nach hinten.',
      en: 'The conjugated verb sits in position two. Anything else belonging to it goes right to the end.',
    },
    body: {
      en: [
        'In a German statement the conjugated verb is the second element. Not the second word - the second element: "Am Montag gehe ich zum Arzt" has a three-word first element, and gehe is still second.',
        'This is what lets German start a sentence with almost anything. Put the time, the place or the object first for emphasis, and the subject simply slides in after the verb: "Heute arbeite ich nicht."',
        'When a sentence has two verb parts - a modal plus an infinitive, or a separable prefix - they split, and the second part goes to the very end. The conjugated part holds position two and the other part closes the sentence: "Ich muss heute lange arbeiten." "Ich stehe um sechs auf."',
        'This gap between the two halves is the Satzklammer, the sentence bracket. Everything else in the sentence lives inside it, which is why German sentences can feel like they withhold the point until the last word.',
        'The one thing that never happens in a statement is the verb in position three. If you find yourself writing "Heute ich arbeite", the sentence is wrong.',
      ],
      de: [
        'Im Aussagesatz steht das konjugierte Verb an zweiter Stelle. Nicht als zweites Wort, sondern als zweites Element: "Am Montag gehe ich zum Arzt" - das erste Element hat drei Wörter, gehe steht trotzdem auf Position 2.',
        'Deshalb kann ein deutscher Satz mit fast allem beginnen. Stell die Zeit, den Ort oder das Objekt nach vorn, und das Subjekt rutscht hinter das Verb: "Heute arbeite ich nicht."',
        'Hat ein Satz zwei Verbteile - ein Modalverb plus Infinitiv oder eine trennbare Vorsilbe -, dann trennen sie sich, und der zweite Teil geht ganz nach hinten: "Ich muss heute lange arbeiten." "Ich stehe um sechs auf."',
        'Diese Lücke zwischen den beiden Hälften ist die Satzklammer. Alles andere steht dazwischen.',
        'Was im Aussagesatz nie passiert: das Verb auf Position 3. "Heute ich arbeite" ist falsch.',
      ],
    },
    tables: [
      {
        caption: { de: 'Position 2 bleibt Position 2', en: 'Position two stays position two' },
        head: ['Position 1', 'Verb', 'Mitte', 'Ende'],
        rows: [
          ['Ich', 'gehe', 'heute zum Arzt', '–'],
          ['Heute', 'gehe', 'ich zum Arzt', '–'],
          ['Zum Arzt', 'gehe', 'ich heute', '–'],
          ['Ich', 'muss', 'heute zum Arzt', 'gehen.'],
          ['Ich', 'stehe', 'um sechs', 'auf.'],
          ['Morgen', 'kann', 'ich nicht', 'kommen.'],
        ],
      },
    ],
    examples: [
      { de: 'Am Wochenende besuche ich meine Eltern.', en: 'At the weekend I visit my parents.' },
      { de: 'Ich möchte einen Termin machen.', en: 'I would like to make an appointment.' },
      { de: 'Der Kurs fängt um neun an.', en: 'The course starts at nine.' },
      { de: 'Heute kann ich leider nicht kommen.', en: 'Unfortunately I cannot come today.' },
    ],
    pitfalls: [
      {
        wrong: 'Heute ich gehe ins Kino.',
        right: 'Heute gehe ich ins Kino.',
        why: {
          de: 'Nach dem ersten Element kommt das Verb, dann das Subjekt.',
          en: 'The verb follows the first element; the subject comes after it.',
        },
      },
      {
        wrong: 'Ich muss arbeiten heute.',
        right: 'Ich muss heute arbeiten.',
        why: {
          de: 'Der Infinitiv schließt den Satz ab; Zeitangaben stehen davor.',
          en: 'The infinitive closes the sentence; time expressions go before it.',
        },
      },
      {
        wrong: 'Ich aufstehe um sechs.',
        right: 'Ich stehe um sechs auf.',
        why: {
          de: 'Die trennbare Vorsilbe geht ans Satzende.',
          en: 'The separable prefix goes to the end of the sentence.',
        },
      },
    ],
    drills: [
      ['Morgen ___ ich nach Berlin.', ['fahre', 'ich fahre', 'fahren', 'fährt'], 0, 'Position 2 ist das Verb, dann das Subjekt.', 'Position two is the verb, then the subject.'],
      ['Ich ___ heute nicht arbeiten.', ['kann', 'kann nicht', 'arbeite', 'arbeiten'], 0, 'Das Modalverb steht auf 2, der Infinitiv am Ende.', 'The modal goes second, the infinitive last.'],
      ['Der Film ___ um acht ___.', ['fängt … an', 'anfängt … –', 'fängt an … –', 'an … fängt'], 0, 'anfangen ist trennbar: fängt … an.', 'anfangen is separable: fängt … an.'],
      ['Am Samstag ___ wir unsere Freunde.', ['treffen', 'wir treffen', 'trefft', 'getroffen'], 0, 'Nach der Zeitangabe folgt das Verb.', 'The verb follows the time expression.'],
      ['Wo ___ du ___?', ['steigst … um', 'umsteigst … –', 'steigst um … –', 'um … steigst'], 0, 'umsteigen ist trennbar, auch in der Frage.', 'umsteigen is separable, in questions too.'],
      ['Ich ___ meinen Pass ___.', ['habe … vergessen', 'vergessen … habe', 'habe vergessen … –', 'vergesse … habe'], 0, 'Das Partizip schließt den Satz.', 'The participle closes the sentence.'],
      ['Leider ___ ich keine Zeit.', ['habe', 'ich habe', 'haben', 'hat'], 0, 'Auch nach "leider" steht das Verb auf 2.', 'Even after "leider" the verb is second.'],
      ['Wir ___ am Wochenende ins Kino ___.', ['wollen … gehen', 'gehen … wollen', 'wollen gehen … –', 'gehen wollen … –'], 0, 'Modalverb auf 2, Infinitiv ans Ende.', 'Modal second, infinitive at the end.'],
    ],
  },

  {
    key: 'negation',
    level: 'A1',
    icon: '\u{1F6AB}',
    title: { de: 'nicht oder kein', en: 'nicht or kein' },
    summary: {
      de: 'kein verneint ein Nomen mit unbestimmtem Artikel oder ohne Artikel. Sonst nicht.',
      en: 'kein negates a noun that has ein or no article. Everything else takes nicht.',
    },
    body: {
      en: [
        'German has two words for "not", and which one you need depends on what you are negating.',
        'Use kein when you are negating a noun that would otherwise have ein, or no article at all: "Ich habe ein Auto" → "Ich habe kein Auto"; "Ich habe Zeit" → "Ich habe keine Zeit". kein takes exactly the endings of ein.',
        'Use nicht for everything else: verbs ("Ich arbeite nicht"), adjectives ("Das ist nicht teuer"), adverbs, and nouns that have a definite article or a possessive ("Das ist nicht mein Auto").',
        'Where nicht stands matters. It goes at the end of a simple sentence, but before the element it is actually negating, and always before the second half of the sentence bracket: "Ich kann heute nicht kommen", not "Ich kann heute kommen nicht".',
        'Two useful extras: nichts is "nothing" and niemand is "nobody" - both are words in their own right, not negations of something else.',
      ],
      de: [
        'Deutsch hat zwei Wörter für "nicht", und welches du brauchst, hängt davon ab, was du verneinst.',
        'kein nimmst du, wenn du ein Nomen verneinst, das sonst ein oder keinen Artikel hätte: "Ich habe ein Auto" → "Ich habe kein Auto"; "Ich habe Zeit" → "Ich habe keine Zeit". kein hat genau die Endungen von ein.',
        'nicht nimmst du für alles andere: Verben ("Ich arbeite nicht"), Adjektive ("Das ist nicht teuer"), Adverbien und Nomen mit bestimmtem Artikel oder Possessivartikel ("Das ist nicht mein Auto").',
        'Die Position von nicht ist wichtig. Es steht am Satzende, aber vor dem Element, das es verneint, und immer vor dem zweiten Teil der Satzklammer: "Ich kann heute nicht kommen."',
        'Dazu: nichts heißt "nichts" und niemand "niemand" - eigene Wörter, keine Verneinungen.',
      ],
    },
    tables: [
      {
        caption: { de: 'kein wie ein', en: 'kein takes ein’s endings' },
        head: ['', 'maskulin', 'feminin', 'neutral', 'Plural'],
        rows: [
          ['Nominativ', 'kein', 'keine', 'kein', 'keine'],
          ['Akkusativ', 'keinen', 'keine', 'kein', 'keine'],
        ],
      },
      {
        caption: { de: 'Welches Wort?', en: 'Which word?' },
        head: ['Was wird verneint?', 'Wort', 'Beispiel'],
        rows: [
          ['Nomen mit ein', 'kein', 'Ich habe keinen Hund.'],
          ['Nomen ohne Artikel', 'kein', 'Ich habe keine Zeit.'],
          ['Nomen mit der/die/das', 'nicht', 'Das ist nicht der Chef.'],
          ['Nomen mit mein/dein', 'nicht', 'Das ist nicht mein Platz.'],
          ['Verb', 'nicht', 'Ich rauche nicht.'],
          ['Adjektiv', 'nicht', 'Das ist nicht billig.'],
        ],
      },
    ],
    examples: [
      { de: 'Ich habe keinen Bruder.', en: 'I do not have a brother.' },
      { de: 'Heute arbeite ich nicht.', en: 'I am not working today.' },
      { de: 'Das ist nicht meine Tasche.', en: 'That is not my bag.' },
      { de: 'Wir haben leider keine Zeit.', en: 'Unfortunately we have no time.' },
    ],
    pitfalls: [
      {
        wrong: 'Ich habe nicht Zeit.',
        right: 'Ich habe keine Zeit.',
        why: {
          de: 'Zeit steht ohne Artikel, also kein-.',
          en: 'Zeit has no article, so kein-.',
        },
      },
      {
        wrong: 'Das ist kein mein Auto.',
        right: 'Das ist nicht mein Auto.',
        why: {
          de: 'Mit Possessivartikel verneint man mit nicht.',
          en: 'With a possessive you negate with nicht.',
        },
      },
      {
        wrong: 'Ich kann heute kommen nicht.',
        right: 'Ich kann heute nicht kommen.',
        why: {
          de: 'nicht steht vor dem Infinitiv, nicht dahinter.',
          en: 'nicht goes before the infinitive, not after it.',
        },
      },
    ],
    drills: [
      ['Ich habe ___ Auto.', ['kein', 'nicht', 'keinen', 'nichts'], 0, 'das Auto mit ein → kein.', 'das Auto with ein → kein.'],
      ['Er hat ___ Bruder.', ['keinen', 'kein', 'keine', 'nicht'], 0, 'der Bruder im Akkusativ: keinen.', 'der Bruder in the accusative: keinen.'],
      ['Das ist ___ mein Platz.', ['nicht', 'kein', 'keinen', 'nichts'], 0, 'Possessivartikel → nicht.', 'Possessive → nicht.'],
      ['Ich habe heute ___ Zeit.', ['keine', 'nicht', 'kein', 'keinen'], 0, 'Zeit ist feminin und ohne Artikel: keine.', 'Zeit is feminine and article-less: keine.'],
      ['Die Suppe ist ___ warm.', ['nicht', 'kein', 'keine', 'nichts'], 0, 'Adjektiv → nicht.', 'Adjective → nicht.'],
      ['Ich kann morgen ___ kommen.', ['nicht', 'kein', 'nichts', 'keine'], 0, 'Verneinung des Verbs, vor dem Infinitiv.', 'Negating the verb, before the infinitive.'],
      ['Wir haben ___ Kinder.', ['keine', 'kein', 'nicht', 'keinen'], 0, 'Plural ohne Artikel: keine.', 'Plural with no article: keine.'],
      ['Ich habe ___ gesagt.', ['nichts', 'nicht', 'kein', 'keine'], 0, 'nichts ist ein eigenes Wort für "gar nichts".', 'nichts is its own word for "nothing at all".'],
    ],
  },

  {
    key: 'imperativ',
    level: 'A1',
    icon: '\u{1F4E3}',
    title: { de: 'Imperativ', en: 'The imperative' },
    summary: {
      de: 'Drei Formen: du, ihr und Sie. Nur die Sie-Form behält das Pronomen.',
      en: 'Three forms: du, ihr and Sie. Only the Sie form keeps its pronoun.',
    },
    body: {
      en: [
        'The imperative tells someone to do something, and German has one form per way of addressing them.',
        'For du, take the du form of the present tense and drop both the -st and the pronoun: du kommst → Komm! du gehst → Geh! Verbs with a stem in -t or -d keep an -e: du arbeitest → Arbeite!',
        'For ihr, the imperative is simply the ihr form with the pronoun dropped: ihr kommt → Kommt!',
        'For Sie, you keep the pronoun and put the verb first: Kommen Sie! This is the form you will use most as an adult learner, and it is the easiest, because nothing changes except the order.',
        'Verbs that change e → i keep that change in the du imperative: du sprichst → Sprich! But verbs that change a → ä lose it: du fährst → Fahr!',
        'sein is irregular throughout: Sei! Seid! Seien Sie! And bitte is not optional politeness in German - an imperative without it sounds abrupt in almost every situation.',
      ],
      de: [
        'Der Imperativ fordert jemanden auf, etwas zu tun, und es gibt eine Form pro Anrede.',
        'Für du nimmst du die du-Form im Präsens und streichst -st und das Pronomen: du kommst → Komm! Verben mit Stamm auf -t oder -d behalten ein -e: du arbeitest → Arbeite!',
        'Für ihr ist der Imperativ einfach die ihr-Form ohne Pronomen: ihr kommt → Kommt!',
        'Für Sie behältst du das Pronomen und stellst das Verb nach vorn: Kommen Sie!',
        'Verben mit e → i behalten den Wechsel: du sprichst → Sprich! Verben mit a → ä verlieren ihn: du fährst → Fahr!',
        'sein ist durchgehend unregelmäßig: Sei! Seid! Seien Sie! Und bitte ist im Deutschen fast Pflicht - ein Imperativ ohne bitte klingt schroff.',
      ],
    },
    tables: [
      {
        caption: { de: 'Die drei Formen', en: 'The three forms' },
        head: ['Infinitiv', 'du', 'ihr', 'Sie'],
        rows: [
          ['kommen', 'Komm!', 'Kommt!', 'Kommen Sie!'],
          ['warten', 'Warte!', 'Wartet!', 'Warten Sie!'],
          ['sprechen', 'Sprich!', 'Sprecht!', 'Sprechen Sie!'],
          ['fahren', 'Fahr!', 'Fahrt!', 'Fahren Sie!'],
          ['nehmen', 'Nimm!', 'Nehmt!', 'Nehmen Sie!'],
          ['sein', 'Sei!', 'Seid!', 'Seien Sie!'],
        ],
      },
    ],
    examples: [
      { de: 'Komm bitte um acht!', en: 'Please come at eight!' },
      { de: 'Sprechen Sie bitte langsamer.', en: 'Please speak more slowly.' },
      { de: 'Nehmt die Linie 5!', en: 'Take the number 5!' },
      { de: 'Sei vorsichtig!', en: 'Be careful!' },
    ],
    pitfalls: [
      {
        wrong: 'Du komm!',
        right: 'Komm!',
        why: {
          de: 'Die du-Form steht ohne Pronomen. Nur Sie behält es.',
          en: 'The du form drops the pronoun. Only Sie keeps it.',
        },
      },
      {
        wrong: 'Fähr schneller!',
        right: 'Fahr schneller!',
        why: {
          de: 'Der Umlaut a → ä fällt im Imperativ weg.',
          en: 'The a → ä umlaut disappears in the imperative.',
        },
      },
      {
        wrong: 'Sprech lauter!',
        right: 'Sprich lauter!',
        why: {
          de: 'Der Wechsel e → i bleibt dagegen erhalten.',
          en: 'The e → i change, by contrast, is kept.',
        },
      },
    ],
    drills: [
      ['___ bitte die Tür zu! (du, zumachen)', ['Mach', 'Machst', 'Machen', 'Macht'], 0, 'du-Imperativ: Stamm ohne -st.', 'du imperative: stem without -st.'],
      ['___ Sie bitte hier!', ['Warten', 'Wartet', 'Warte', 'Warten Sie bitte'], 0, 'Sie-Form: Verb plus Sie.', 'Sie form: verb plus Sie.'],
      ['___ lauter, bitte! (du, sprechen)', ['Sprich', 'Sprech', 'Sprecht', 'Sprechen'], 0, 'e → i bleibt: Sprich!', 'The e → i change stays: Sprich!'],
      ['___ nicht so schnell! (du, fahren)', ['Fahr', 'Fähr', 'Fahrt', 'Fahren'], 0, 'a → ä fällt weg: Fahr!', 'The a → ä change drops: Fahr!'],
      ['___ bitte ruhig, Kinder!', ['Seid', 'Sei', 'Seien', 'Sind'], 0, 'Mehrere Kinder, also ihr: Seid!', 'Several children, so ihr: Seid!'],
      ['___ einen Moment, bitte. (du, warten)', ['Warte', 'Wart', 'Wartet', 'Warten'], 0, 'Stamm auf -t behält das -e.', 'A stem in -t keeps the -e.'],
      ['___ Sie bitte das Formular aus!', ['Füllen', 'Füllt', 'Füll', 'Ausfüllen'], 0, 'Trennbar: Füllen Sie … aus.', 'Separable: Füllen Sie … aus.'],
      ['___ mir bitte! (du, helfen)', ['Hilf', 'Helf', 'Helft', 'Helfen'], 0, 'helfen wechselt e → i: Hilf!', 'helfen changes e → i: Hilf!'],
    ],
  },

  {
    key: 'trennbar',
    level: 'A1',
    icon: '✂️',
    title: { de: 'Trennbare Verben', en: 'Separable verbs' },
    summary: {
      de: 'Die Vorsilbe löst sich und geht ans Satzende. Die Betonung verrät, ob sie das tut.',
      en: 'The prefix detaches and goes to the end. Where the stress falls tells you whether it will.',
    },
    body: {
      en: [
        'Many German verbs are built from a prefix plus a verb: aufstehen, einkaufen, anrufen, mitkommen, fernsehen. In a main clause the prefix comes off and goes to the very end: "Ich stehe um sechs auf."',
        'The prefix is not decoration. It changes the meaning completely: stehen is to stand, aufstehen is to get up; kommen is to come, mitkommen is to come along, ankommen is to arrive, bekommen is to receive.',
        'The reliable test is stress. If the prefix is stressed, it separates: AUFstehen, EINkaufen, ANrufen. If the verb is stressed, it does not: beKOMmen, verSTEhen, erKLÄren. The inseparable prefixes are be-, emp-, ent-, er-, ge-, ver-, zer- and usually miss-.',
        'In the Perfekt a separable verb puts ge- in the middle: aufgestanden, eingekauft, angerufen. An inseparable verb takes no ge- at all: bekommen, verstanden, erklärt.',
        'With a modal verb nothing separates, because the whole infinitive goes to the end as one word: "Ich muss früh aufstehen."',
      ],
      de: [
        'Viele deutsche Verben bestehen aus Vorsilbe und Verb: aufstehen, einkaufen, anrufen, mitkommen, fernsehen. Im Hauptsatz löst sich die Vorsilbe und geht ans Satzende: "Ich stehe um sechs auf."',
        'Die Vorsilbe ist keine Zierde. Sie ändert die Bedeutung völlig: stehen - aufstehen; kommen - mitkommen - ankommen - bekommen.',
        'Der verlässliche Test ist die Betonung. Betonte Vorsilbe heißt trennbar: AUFstehen, EINkaufen, ANrufen. Betontes Verb heißt untrennbar: beKOMmen, verSTEhen, erKLÄren. Untrennbar sind be-, emp-, ent-, er-, ge-, ver-, zer- und meist miss-.',
        'Im Perfekt steht das ge- bei trennbaren Verben in der Mitte: aufgestanden, eingekauft, angerufen. Untrennbare Verben haben kein ge-: bekommen, verstanden, erklärt.',
        'Mit Modalverb trennt sich nichts, weil der ganze Infinitiv als ein Wort ans Ende geht: "Ich muss früh aufstehen."',
      ],
    },
    tables: [
      {
        caption: { de: 'Trennbar oder nicht', en: 'Separable or not' },
        head: ['Verb', 'Betonung', 'Hauptsatz', 'Perfekt'],
        rows: [
          ['aufstehen', 'AUF-', 'Ich stehe auf.', 'aufgestanden'],
          ['einkaufen', 'EIN-', 'Ich kaufe ein.', 'eingekauft'],
          ['anrufen', 'AN-', 'Ich rufe an.', 'angerufen'],
          ['bekommen', '-KOM-', 'Ich bekomme es.', 'bekommen'],
          ['verstehen', '-STE-', 'Ich verstehe es.', 'verstanden'],
          ['erklären', '-KLÄ-', 'Ich erkläre es.', 'erklärt'],
        ],
      },
      {
        caption: { de: 'Häufige trennbare Vorsilben', en: 'Common separable prefixes' },
        head: ['Vorsilbe', 'Sinn', 'Beispiel'],
        rows: [
          ['auf-', 'nach oben, öffnen', 'aufstehen, aufmachen'],
          ['an-', 'Beginn, Kontakt', 'anfangen, anrufen'],
          ['aus-', 'heraus, beenden', 'ausgehen, ausfüllen'],
          ['ein-', 'hinein', 'einkaufen, einsteigen'],
          ['mit-', 'zusammen', 'mitkommen, mitbringen'],
          ['ab-', 'weg', 'abfahren, abholen'],
          ['zu-', 'schließen, hin', 'zumachen, zuhören'],
        ],
      },
    ],
    examples: [
      { de: 'Ich stehe jeden Tag um sechs auf.', en: 'I get up at six every day.' },
      { de: 'Rufst du mich heute Abend an?', en: 'Will you call me this evening?' },
      { de: 'Wir kaufen am Freitag ein.', en: 'We do the shopping on Friday.' },
      { de: 'Ich muss früh aufstehen.', en: 'I have to get up early.' },
    ],
    pitfalls: [
      {
        wrong: 'Ich aufstehe um sechs.',
        right: 'Ich stehe um sechs auf.',
        why: {
          de: 'Im Hauptsatz muss die Vorsilbe ans Ende.',
          en: 'In a main clause the prefix has to go to the end.',
        },
      },
      {
        wrong: 'Ich habe das nicht gebekommen.',
        right: 'Ich habe das nicht bekommen.',
        why: {
          de: 'be- ist untrennbar und bekommt kein ge-.',
          en: 'be- is inseparable and takes no ge-.',
        },
      },
      {
        wrong: 'Ich muss auf früh stehen.',
        right: 'Ich muss früh aufstehen.',
        why: {
          de: 'Mit Modalverb bleibt der Infinitiv ein Wort.',
          en: 'With a modal the infinitive stays one word.',
        },
      },
    ],
    drills: [
      ['Ich ___ um sieben ___. (aufstehen)', ['stehe … auf', 'aufstehe … –', 'stehe auf … –', 'auf … stehe'], 0, 'Trennbar: Verb auf 2, Vorsilbe ans Ende.', 'Separable: verb second, prefix last.'],
      ['___ du mich morgen ___? (anrufen)', ['Rufst … an', 'Anrufst … –', 'Rufst an … –', 'An … rufst'], 0, 'Auch in der Frage trennt sich die Vorsilbe.', 'The prefix separates in questions too.'],
      ['Ich ___ das Problem nicht. (verstehen)', ['verstehe', 'stehe ver', 'verstehe nicht', 'stehe verstehe'], 0, 'ver- ist untrennbar.', 'ver- is inseparable.'],
      ['Wir ___ morgen um acht ___. (abfahren)', ['fahren … ab', 'abfahren … –', 'fahren ab … –', 'ab … fahren'], 0, 'ab- ist betont, also trennbar.', 'ab- is stressed, so separable.'],
      ['Ich habe gestern ___. (einkaufen, Perfekt)', ['eingekauft', 'gekauft ein', 'geeinkauft', 'einkaufen'], 0, 'Das ge- steht in der Mitte: eingekauft.', 'The ge- goes in the middle: eingekauft.'],
      ['Sie hat mir alles ___. (erklären, Perfekt)', ['erklärt', 'geerklärt', 'erkläregt', 'klärt er'], 0, 'er- ist untrennbar: kein ge-.', 'er- is inseparable: no ge-.'],
      ['Ich möchte heute früh ___. (aufstehen)', ['aufstehen', 'stehe auf', 'auf stehen', 'aufgestanden'], 0, 'Nach dem Modalverb bleibt der Infinitiv ganz.', 'After a modal the infinitive stays whole.'],
      ['Wann ___ der Zug ___? (ankommen)', ['kommt … an', 'ankommt … –', 'kommt an … –', 'an … kommt'], 0, 'an- ist trennbar.', 'an- is separable.'],
    ],
  },
];
