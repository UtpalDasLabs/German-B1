/**
 * Cases, endings and everything that hangs off a noun. Unglamorous, and the
 * single biggest source of lost marks in the written modules.
 */
export const NOMEN = [
  {
    key: 'adjektivdeklination',
    icon: '\u{1F58D}️',
    title: { de: 'Adjektivendungen', en: 'Adjective endings' },
    summary: {
      de: 'Eine Frage entscheidet alles: Zeigt der Artikel den Kasus schon?',
      en: 'One question decides everything: does the article already show the case?',
    },
    body: {
      en: [
        'An adjective before a noun always takes an ending. Which ending depends on what comes in front of the adjective, and there are only three situations.',
        'After a definite article (der, die, das, dieser, jeder, welcher) the article has already shown gender and case, so the adjective only needs -e or -en. The rule of thumb: -e in the five "easy" slots (nominative singular in all genders, and accusative for feminine and neuter), -en everywhere else.',
        'After an indefinite article (ein, kein, mein, dein …) there are three slots where the article shows nothing, so the adjective has to: der-Nominativ takes -er, das-Nominativ and das-Akkusativ take -es. The rest follows the definite pattern.',
        'With no article at all the adjective carries the full signal and takes the ending the definite article would have had: guter Kaffee, gutes Wetter, gute Milch, mit gutem Wetter.',
        'A practical shortcut for the exam: after any dative or genitive, and in any plural with an article, the ending is -en. That one line covers a large share of real cases.',
      ],
      de: [
        'Ein Adjektiv vor einem Nomen bekommt immer eine Endung. Welche, hängt davon ab, was davor steht - und es gibt nur drei Situationen.',
        'Nach bestimmtem Artikel (der, die, das, dieser, jeder, welcher) hat der Artikel Genus und Kasus schon gezeigt; das Adjektiv braucht dann nur -e oder -en. Faustregel: -e in den fünf "leichten" Feldern (Nominativ Singular in allen Genera sowie Akkusativ feminin und neutrum), sonst -en.',
        'Nach unbestimmtem Artikel (ein, kein, mein, dein …) gibt es drei Felder, in denen der Artikel nichts zeigt - dort muss das Adjektiv es tun: der-Nominativ bekommt -er, das-Nominativ und das-Akkusativ bekommen -es. Der Rest folgt dem bestimmten Muster.',
        'Ohne Artikel trägt das Adjektiv das ganze Signal und bekommt die Endung, die der bestimmte Artikel gehabt hätte: guter Kaffee, gutes Wetter, gute Milch, mit gutem Wetter.',
        'Eine praktische Abkürzung für die Prüfung: nach jedem Dativ und Genitiv und in jedem Plural mit Artikel steht -en. Diese eine Zeile deckt einen großen Teil der echten Fälle ab.',
      ],
    },
    tables: [
      {
        caption: { de: 'Nach bestimmtem Artikel', en: 'After a definite article' },
        head: ['Kasus', 'maskulin', 'feminin', 'neutrum', 'Plural'],
        rows: [
          ['Nominativ', 'der gute', 'die gute', 'das gute', 'die guten'],
          ['Akkusativ', 'den guten', 'die gute', 'das gute', 'die guten'],
          ['Dativ', 'dem guten', 'der guten', 'dem guten', 'den guten'],
        ],
      },
      {
        caption: { de: 'Nach unbestimmtem Artikel', en: 'After an indefinite article' },
        head: ['Kasus', 'maskulin', 'feminin', 'neutrum', 'Plural (kein)'],
        rows: [
          ['Nominativ', 'ein guter', 'eine gute', 'ein gutes', 'keine guten'],
          ['Akkusativ', 'einen guten', 'eine gute', 'ein gutes', 'keine guten'],
          ['Dativ', 'einem guten', 'einer guten', 'einem guten', 'keinen guten'],
        ],
      },
    ],
    examples: [
      { de: 'Wir suchen eine ruhige Wohnung mit einem kleinen Balkon.', en: 'We are looking for a quiet flat with a small balcony.' },
      { de: 'Der neue Kollege kommt aus Rumänien.', en: 'The new colleague is from Romania.' },
      { de: 'Nach einem langen Tag trinke ich gern einen starken Kaffee.', en: 'After a long day I like to drink a strong coffee.' },
      { de: 'Frisches Brot schmeckt am besten.', en: 'Fresh bread tastes best.' },
    ],
    pitfalls: [
      {
        wrong: 'Ich habe einen neuer Kollegen.',
        right: 'Ich habe einen neuen Kollegen.',
        why: {
          de: 'einen zeigt den Akkusativ maskulin schon; das Adjektiv nimmt -en.',
          en: 'einen already shows masculine accusative, so the adjective takes -en.',
        },
      },
      {
        wrong: 'mit dem gute Ergebnis',
        right: 'mit dem guten Ergebnis',
        why: {
          de: 'Im Dativ steht nach Artikel immer -en.',
          en: 'In the dative after an article the ending is always -en.',
        },
      },
    ],
    drills: [
      ['Wir suchen eine ruhig___ Wohnung.', ['ruhige', 'ruhigen', 'ruhiger', 'ruhiges'], 0, 'eine + feminin Akkusativ: das Adjektiv bekommt -e.', 'eine + feminine accusative: the adjective takes -e.'],
      ['Der neu___ Kollege spricht drei Sprachen.', ['neue', 'neuen', 'neuer', 'neues'], 0, 'Nach dem bestimmten Artikel im Nominativ Singular steht -e.', 'After a definite article in the nominative singular the ending is -e.'],
      ['Nach einem lang___ Tag bin ich müde.', ['langen', 'langem', 'lange', 'langer'], 0, 'Dativ nach Artikel: immer -en.', 'Dative after an article: always -en.'],
      ['Ich hätte gern ein groß___ Bier.', ['großes', 'großen', 'große', 'großer'], 0, 'ein + neutrum zeigt nichts, das Adjektiv übernimmt: -es.', 'ein + neuter shows nothing, so the adjective takes over: -es.'],
      ['Das ist ein sehr gut___ Vorschlag.', ['guter', 'guten', 'gutes', 'gute'], 0, 'ein + maskulin Nominativ: das Adjektiv bekommt -er.', 'ein + masculine nominative: the adjective takes -er.'],
      ['Die neu___ Regeln gelten ab Januar.', ['neuen', 'neue', 'neuer', 'neues'], 0, 'Plural nach bestimmtem Artikel: -en.', 'Plural after a definite article: -en.'],
      ['Frisch___ Brot riecht am besten.', ['Frisches', 'Frischer', 'Frische', 'Frischen'], 0, 'Ohne Artikel trägt das Adjektiv die Artikelendung: neutrum -es.', 'With no article the adjective carries the article ending: neuter -es.'],
      ['Ich fahre mit dem alt___ Fahrrad zur Arbeit.', ['alten', 'alte', 'altem', 'alter'], 0, 'Dativ nach dem: -en.', 'Dative after dem: -en.'],
      ['Sie hat einen interessant___ Beruf.', ['interessanten', 'interessanter', 'interessantes', 'interessante'], 0, 'einen zeigt Akkusativ maskulin, das Adjektiv folgt mit -en.', 'einen shows masculine accusative, so the adjective follows with -en.'],
    ],
  },

  {
    key: 'komparativ',
    icon: '\u{1F4CA}',
    title: { de: 'Vergleichen: Komparativ und Superlativ', en: 'Comparing: comparative and superlative' },
    summary: {
      de: 'so … wie, -er als, am -sten - und die fünf unregelmäßigen Formen.',
      en: 'so … wie, -er als, am -sten - and the five irregular forms.',
    },
    body: {
      en: [
        'For equality use so … wie: "Der Bus ist so teuer wie die Bahn." For inequality use the comparative with -er plus als: "Die Bahn ist teurer als der Bus." The classic mistake is mixing them: never "teurer wie".',
        'Short adjectives with a, o or u usually take an umlaut in the comparative and superlative: alt, älter, am ältesten; groß, größer, am größten; jung, jünger, am jüngsten.',
        'The superlative has two shapes. Standing alone after the verb it is am …sten: "Dieses Angebot ist am günstigsten." Before a noun it behaves like an adjective and takes an ending: "das günstigste Angebot".',
        'Five forms are irregular and worth learning outright: gut - besser - am besten; viel - mehr - am meisten; gern - lieber - am liebsten; hoch - höher - am höchsten; nah - näher - am nächsten.',
        'Two intensifiers are useful in a presentation: immer + comparative ("Es wird immer teurer") and je … desto ("Je öfter du übst, desto leichter wird es").',
      ],
      de: [
        'Für Gleichheit nimmst du so … wie: "Der Bus ist so teuer wie die Bahn." Für Ungleichheit den Komparativ auf -er plus als: "Die Bahn ist teurer als der Bus." Der Klassiker unter den Fehlern ist die Mischung: niemals "teurer wie".',
        'Kurze Adjektive mit a, o oder u bekommen im Komparativ und Superlativ meist einen Umlaut: alt, älter, am ältesten; groß, größer, am größten; jung, jünger, am jüngsten.',
        'Der Superlativ hat zwei Formen. Allein nach dem Verb steht am …sten: "Dieses Angebot ist am günstigsten." Vor einem Nomen verhält er sich wie ein Adjektiv und bekommt eine Endung: "das günstigste Angebot".',
        'Fünf Formen sind unregelmäßig und lernt man am besten auswendig: gut - besser - am besten; viel - mehr - am meisten; gern - lieber - am liebsten; hoch - höher - am höchsten; nah - näher - am nächsten.',
        'Zwei Verstärkungen helfen in der Präsentation: immer + Komparativ ("Es wird immer teurer") und je … desto ("Je öfter du übst, desto leichter wird es").',
      ],
    },
    tables: [
      {
        caption: { de: 'Unregelmäßige Steigerung', en: 'Irregular comparison' },
        head: ['Positiv', 'Komparativ', 'Superlativ'],
        rows: [
          ['gut', 'besser', 'am besten'],
          ['viel', 'mehr', 'am meisten'],
          ['gern', 'lieber', 'am liebsten'],
          ['hoch', 'höher', 'am höchsten'],
          ['nah', 'näher', 'am nächsten'],
          ['groß', 'größer', 'am größten'],
        ],
      },
    ],
    examples: [
      { de: 'Mit dem Rad bin ich schneller als mit dem Bus.', en: 'By bike I am faster than by bus.' },
      { de: 'Die Wohnung ist genauso groß wie unsere alte.', en: 'The flat is exactly as big as our old one.' },
      { de: 'Am liebsten lerne ich früh am Morgen.', en: 'I like studying early in the morning best.' },
      { de: 'Je länger ich hier lebe, desto leichter fällt mir das Sprechen.', en: 'The longer I live here, the easier speaking gets for me.' },
    ],
    pitfalls: [
      {
        wrong: 'Die Bahn ist teurer wie der Bus.',
        right: 'Die Bahn ist teurer als der Bus.',
        why: {
          de: 'Nach dem Komparativ steht als; wie steht nur bei so … wie.',
          en: 'After a comparative you use als; wie only appears in so … wie.',
        },
      },
      {
        wrong: 'Das ist das am besten Angebot.',
        right: 'Das ist das beste Angebot.',
        why: {
          de: 'Vor einem Nomen steht der Superlativ als Adjektiv mit Endung, nicht mit am.',
          en: 'Before a noun the superlative is an adjective with an ending, not am.',
        },
      },
    ],
    drills: [
      ['Die Bahn ist teurer ___ der Bus.', ['als', 'wie', 'wenn', 'so'], 0, 'Nach dem Komparativ steht immer als.', 'After a comparative it is always als.'],
      ['Die neue Wohnung ist genauso groß ___ die alte.', ['wie', 'als', 'denn', 'so'], 0, 'Gleichheit wird mit so … wie ausgedrückt.', 'Equality is expressed with so … wie.'],
      ['Von allen Angeboten ist dieses ___.', ['am günstigsten', 'der günstigste', 'am günstigste', 'günstigsten'], 0, 'Allein nach dem Verb steht der Superlativ als am …sten.', 'Standing alone after the verb the superlative is am …sten.'],
      ['Das ist das ___ Angebot von allen.', ['beste', 'am besten', 'bessere', 'gutste'], 0, 'Vor einem Nomen bekommt der Superlativ eine Adjektivendung.', 'Before a noun the superlative takes an adjective ending.'],
      ['Ich trinke ___ Tee als Kaffee.', ['lieber', 'gerner', 'mehr gern', 'am liebsten'], 0, 'Der Komparativ von gern ist lieber.', 'The comparative of gern is lieber.'],
      ['Mein Bruder ist zwei Jahre ___ als ich.', ['älter', 'alter', 'am ältesten', 'mehr alt'], 0, 'alt bekommt im Komparativ einen Umlaut: älter.', 'alt takes an umlaut in the comparative: älter.'],
      ['___ mehr ich übe, desto sicherer werde ich.', ['Je', 'Wie', 'So', 'Als'], 0, 'Das Paar heißt je … desto.', 'The pair is je … desto.'],
      ['Die Mieten werden ___ höher.', ['immer', 'mehr', 'am', 'sehr'], 0, 'immer + Komparativ drückt eine laufende Steigerung aus.', 'immer + comparative expresses an ongoing increase.'],
    ],
  },

  {
    key: 'genitiv',
    icon: '\u{1F511}',
    title: { de: 'Genitiv', en: 'The genitive' },
    summary: {
      de: 'Besitz und Zugehörigkeit im Schriftdeutsch - gesprochen oft mit von.',
      en: 'Possession in written German - in speech usually replaced by von.',
    },
    body: {
      en: [
        'The genitive answers wessen? and expresses belonging: "das Auto meines Bruders". Masculine and neuter nouns add -s or -es; feminine and plural nouns do not change.',
        'The articles are des and eines for masculine and neuter, der and einer for feminine and plural.',
        'In everyday speech people usually say von + dative instead: "das Auto von meinem Bruder". That is not wrong, but in a formal letter or a report the genitive reads better and is expected.',
        'Several prepositions govern the genitive and these are the ones to have ready at B1: wegen, während, trotz, innerhalb, außerhalb, aufgrund. "Wegen des Sturms fällt der Zug aus."',
        'You will also meet it in set phrases: die Höhe der Miete, das Ende des Monats, der Beginn der Veranstaltung.',
      ],
      de: [
        'Der Genitiv antwortet auf wessen? und drückt Zugehörigkeit aus: "das Auto meines Bruders". Maskuline und neutrale Nomen bekommen -s oder -es; feminine Nomen und Pluralformen ändern sich nicht.',
        'Die Artikel lauten des und eines für maskulin und neutrum, der und einer für feminin und Plural.',
        'Im Alltag sagt man meist von + Dativ: "das Auto von meinem Bruder". Das ist nicht falsch, aber in einem formellen Brief oder Bericht liest sich der Genitiv besser - und wird dort erwartet.',
        'Einige Präpositionen verlangen den Genitiv; diese solltest du auf B1 parat haben: wegen, während, trotz, innerhalb, außerhalb, aufgrund. "Wegen des Sturms fällt der Zug aus."',
        'Außerdem begegnet er dir in festen Wendungen: die Höhe der Miete, das Ende des Monats, der Beginn der Veranstaltung.',
      ],
    },
    tables: [
      {
        caption: { de: 'Genitivartikel', en: 'Genitive articles' },
        head: ['Genus', 'bestimmt', 'unbestimmt', 'Nomen'],
        rows: [
          ['maskulin', 'des', 'eines', '+ -s / -es'],
          ['neutrum', 'des', 'eines', '+ -s / -es'],
          ['feminin', 'der', 'einer', 'unverändert'],
          ['Plural', 'der', '–', 'unverändert'],
        ],
      },
    ],
    examples: [
      { de: 'Die Höhe der Miete steht im Vertrag.', en: 'The amount of the rent is in the contract.' },
      { de: 'Während des Kurses sprechen wir nur Deutsch.', en: 'During the course we speak only German.' },
      { de: 'Trotz des schlechten Wetters waren viele Leute da.', en: 'Despite the bad weather many people were there.' },
      { de: 'Innerhalb einer Woche bekommen Sie den Bescheid.', en: 'Within a week you will receive the decision.' },
    ],
    pitfalls: [
      {
        wrong: 'wegen dem Sturm',
        right: 'wegen des Sturms',
        why: {
          de: 'wegen verlangt im Schriftdeutsch den Genitiv.',
          en: 'wegen takes the genitive in written German.',
        },
      },
      {
        wrong: 'das Auto meiner Bruders',
        right: 'das Auto meines Bruders',
        why: {
          de: 'Bruder ist maskulin: meines Bruders, nicht meiner.',
          en: 'Bruder is masculine: meines Bruders, not meiner.',
        },
      },
    ],
    drills: [
      ['Wegen ___ Sturms fällt der Zug aus.', ['des', 'dem', 'den', 'der'], 0, 'wegen verlangt den Genitiv: des Sturms.', 'wegen takes the genitive: des Sturms.'],
      ['Während ___ Kurses sprechen wir nur Deutsch.', ['des', 'dem', 'der', 'den'], 0, 'während steht mit dem Genitiv, Kurs ist maskulin.', 'während takes the genitive and Kurs is masculine.'],
      ['Die Höhe ___ Miete steht im Vertrag.', ['der', 'des', 'dem', 'die'], 0, 'Miete ist feminin: Genitiv der Miete.', 'Miete is feminine: genitive der Miete.'],
      ['Trotz ___ schlechten Wetters kamen viele.', ['des', 'dem', 'der', 'das'], 0, 'trotz verlangt den Genitiv, Wetter ist neutrum.', 'trotz takes the genitive and Wetter is neuter.'],
      ['Innerhalb ___ Woche bekommen Sie Antwort.', ['einer', 'eines', 'einem', 'eine'], 0, 'Woche ist feminin: Genitiv einer Woche.', 'Woche is feminine: genitive einer Woche.'],
      ['Das ist das Büro ___ Chefin.', ['der', 'des', 'dem', 'die'], 0, 'Chefin ist feminin: Genitiv der Chefin.', 'Chefin is feminine: genitive der Chefin.'],
      ['Am Ende ___ Monats ist die Miete fällig.', ['des', 'dem', 'der', 'den'], 0, 'Monat ist maskulin: des Monats.', 'Monat is masculine: des Monats.'],
    ],
  },

  {
    key: 'wechselpraepositionen',
    icon: '\u{1F504}',
    title: { de: 'Wechselpräpositionen', en: 'Two-way prepositions' },
    summary: {
      de: 'Neun Präpositionen, zwei Kasus: wohin? Akkusativ. Wo? Dativ.',
      en: 'Nine prepositions, two cases: where to? accusative. Where? dative.',
    },
    body: {
      en: [
        'Nine prepositions take either the accusative or the dative: in, an, auf, über, unter, vor, hinter, neben, zwischen.',
        'The test is the question. If the answer is wohin? - there is movement to a new place - use the accusative: "Ich gehe in die Küche." If the answer is wo? - a position, no change of place - use the dative: "Ich bin in der Küche."',
        'Careful: movement inside a place is still wo. "Ich laufe im Park" means I am running around inside the park; "Ich laufe in den Park" means I am running into it.',
        'The same pair also works with verbs: stellen, legen, setzen, hängen with accusative for putting something somewhere; stehen, liegen, sitzen, hängen with dative for where it then is.',
        'Common contractions: in dem = im, in das = ins, an dem = am, an das = ans, auf das = aufs.',
      ],
      de: [
        'Neun Präpositionen stehen entweder mit dem Akkusativ oder mit dem Dativ: in, an, auf, über, unter, vor, hinter, neben, zwischen.',
        'Die Probe ist die Frage. Lautet die Antwort wohin? - es gibt eine Bewegung an einen neuen Ort -, steht der Akkusativ: "Ich gehe in die Küche." Lautet sie wo? - eine Position ohne Ortswechsel -, steht der Dativ: "Ich bin in der Küche."',
        'Achtung: Bewegung innerhalb eines Ortes bleibt wo. "Ich laufe im Park" heißt, dass ich im Park herumlaufe; "Ich laufe in den Park" heißt, dass ich hineinlaufe.',
        'Dasselbe Paar gilt bei Verben: stellen, legen, setzen, hängen mit Akkusativ für das Hinstellen; stehen, liegen, sitzen, hängen mit Dativ für das Danach.',
        'Häufige Verschmelzungen: in dem = im, in das = ins, an dem = am, an das = ans, auf das = aufs.',
      ],
    },
    tables: [
      {
        caption: { de: 'wohin oder wo?', en: 'where to or where?' },
        head: ['Frage', 'Kasus', 'Beispiel'],
        rows: [
          ['wohin?', 'Akkusativ', 'Ich hänge das Bild an die Wand.'],
          ['wo?', 'Dativ', 'Das Bild hängt an der Wand.'],
          ['wohin?', 'Akkusativ', 'Er legt das Buch auf den Tisch.'],
          ['wo?', 'Dativ', 'Das Buch liegt auf dem Tisch.'],
        ],
      },
    ],
    examples: [
      { de: 'Stell die Tasche bitte neben die Tür.', en: 'Please put the bag next to the door.' },
      { de: 'Die Tasche steht neben der Tür.', en: 'The bag is standing next to the door.' },
      { de: 'Wir treffen uns vor dem Kino.', en: 'We are meeting in front of the cinema.' },
      { de: 'Ich gehe gleich ins Büro.', en: 'I am going to the office in a moment.' },
    ],
    pitfalls: [
      {
        wrong: 'Ich gehe in der Küche.',
        right: 'Ich gehe in die Küche.',
        why: {
          de: 'gehen ist eine Bewegung zu einem Ziel: wohin, also Akkusativ.',
          en: 'gehen is movement to a destination: wohin, so accusative.',
        },
      },
      {
        wrong: 'Das Bild hängt an die Wand.',
        right: 'Das Bild hängt an der Wand.',
        why: {
          de: 'Hier gibt es keine Bewegung, sondern eine Position: wo, also Dativ.',
          en: 'There is no movement here, only a position: wo, so dative.',
        },
      },
    ],
    drills: [
      ['Ich gehe jetzt ___ Küche.', ['in die', 'in der', 'an die', 'auf der'], 0, 'Bewegung zu einem Ziel: wohin, also Akkusativ.', 'Movement to a destination: wohin, so accusative.'],
      ['Das Formular liegt ___ Tisch.', ['auf dem', 'auf den', 'an den', 'in den'], 0, 'Position ohne Bewegung: wo, also Dativ.', 'A position without movement: wo, so dative.'],
      ['Häng die Jacke bitte ___ Haken.', ['an den', 'an dem', 'auf dem', 'in dem'], 0, 'hängen mit Ziel: Akkusativ.', 'hängen with a destination: accusative.'],
      ['Wir treffen uns ___ Bahnhof.', ['vor dem', 'vor den', 'auf den', 'in den'], 0, 'Treffpunkt, keine Bewegung: Dativ.', 'A meeting point, no movement: dative.'],
      ['Stell die Flaschen bitte ___ Keller.', ['in den', 'in dem', 'im', 'an dem'], 0, 'stellen verlangt ein Ziel: Akkusativ in den Keller.', 'stellen requires a destination: accusative in den Keller.'],
      ['Die Kinder spielen ___ Garten.', ['im', 'in den', 'ins', 'an den'], 0, 'Spielen findet innerhalb des Gartens statt: wo, also Dativ.', 'Playing happens inside the garden: wo, so dative.'],
      ['Er setzt sich ___ Stuhl.', ['auf den', 'auf dem', 'an dem', 'unter dem'], 0, 'sich setzen ist eine Bewegung: Akkusativ.', 'sich setzen is movement: accusative.'],
      ['Der Schlüssel steckt ___ Tür.', ['in der', 'in die', 'an die', 'auf die'], 0, 'Der Schlüssel befindet sich dort schon: Dativ.', 'The key is already there: dative.'],
    ],
  },

  {
    key: 'ndeklination',
    icon: '\u{1F464}',
    title: { de: 'n-Deklination', en: 'The weak masculine nouns' },
    summary: {
      de: 'Der Kollege, den Kollegen: eine Gruppe maskuliner Nomen mit -n überall.',
      en: 'Der Kollege, den Kollegen: a group of masculine nouns with -n everywhere.',
    },
    body: {
      en: [
        'A group of masculine nouns adds -n or -en in every case except the nominative singular. They are often called weak masculine nouns, or the n-Deklination.',
        'Which nouns? Masculine nouns ending in -e that refer to people or animals (der Kollege, der Junge, der Kunde, der Name is a special case), plus masculine nouns ending in -ent, -ant, -ist, -ent, -oge, -at (der Student, der Praktikant, der Journalist, der Kollege, der Soldat), plus a short list including der Herr, der Mensch, der Nachbar, der Bauer.',
        'So: "Der Kollege kommt" but "Ich kenne den Kollegen", "Ich helfe dem Kollegen", "das Büro des Kollegen".',
        'This costs marks in writing because it looks like a typo but is not, and it is very common in exactly the words a B1 text uses: Kunde, Kollege, Nachbar, Student, Mensch.',
      ],
      de: [
        'Eine Gruppe maskuliner Nomen bekommt in allen Kasus außer dem Nominativ Singular ein -n oder -en. Man nennt sie schwache Maskulina oder n-Deklination.',
        'Welche Nomen? Maskuline Nomen auf -e, die Personen oder Tiere bezeichnen (der Kollege, der Junge, der Kunde), maskuline Nomen auf -ent, -ant, -ist, -oge, -at (der Student, der Praktikant, der Journalist, der Soldat) sowie eine kurze Liste mit der Herr, der Mensch, der Nachbar, der Bauer.',
        'Also: "Der Kollege kommt", aber "Ich kenne den Kollegen", "Ich helfe dem Kollegen", "das Büro des Kollegen".',
        'Das kostet im Schreiben Punkte, weil es wie ein Tippfehler aussieht und keiner ist - und weil es genau die Wörter trifft, die ein B1-Text ständig braucht: Kunde, Kollege, Nachbar, Student, Mensch.',
      ],
    },
    tables: [
      {
        caption: { de: 'der Kollege im Singular', en: 'der Kollege in the singular' },
        head: ['Kasus', 'Form'],
        rows: [
          ['Nominativ', 'der Kollege'],
          ['Akkusativ', 'den Kollegen'],
          ['Dativ', 'dem Kollegen'],
          ['Genitiv', 'des Kollegen'],
        ],
      },
      {
        caption: { de: 'Wer gehört dazu?', en: 'Which nouns belong?' },
        head: ['Gruppe', 'Beispiele'],
        rows: [
          ['maskulin auf -e (Person)', 'Kollege, Kunde, Junge, Experte'],
          ['auf -ent, -ant, -ist', 'Student, Praktikant, Journalist'],
          ['Sonderfälle', 'Herr, Mensch, Nachbar, Bauer'],
          ['auf -name', 'der Name → des Namens'],
        ],
      },
    ],
    examples: [
      { de: 'Ich habe dem Kunden eine Rechnung geschickt.', en: 'I sent the customer an invoice.' },
      { de: 'Fragen Sie bitte Herrn Özdemir.', en: 'Please ask Mr Özdemir.' },
      { de: 'Der Kurs ist für Studenten kostenlos.', en: 'The course is free for students.' },
      { de: 'Ich kenne meinen Nachbarn kaum.', en: 'I hardly know my neighbour.' },
    ],
    pitfalls: [
      {
        wrong: 'Ich kenne den Kollege.',
        right: 'Ich kenne den Kollegen.',
        why: {
          de: 'Kollege gehört zur n-Deklination und bekommt im Akkusativ ein -n.',
          en: 'Kollege belongs to the weak masculines and takes -n in the accusative.',
        },
      },
      {
        wrong: 'Guten Tag, Herr Weber. Ich habe Herr Weber gesucht.',
        right: 'Ich habe Herrn Weber gesucht.',
        why: {
          de: 'Herr wird im Akkusativ und Dativ zu Herrn.',
          en: 'Herr becomes Herrn in the accusative and dative.',
        },
      },
    ],
    drills: [
      ['Ich habe ___ Kollegen gestern getroffen.', ['den', 'der', 'dem', 'des'], 0, 'Akkusativ maskulin: den, und Kollege bekommt -n.', 'Masculine accusative: den, and Kollege takes -n.'],
      ['Bitte geben Sie das ___ Özdemir.', ['Herrn', 'Herr', 'Herren', 'Herres'], 0, 'Herr wird im Dativ zu Herrn.', 'Herr becomes Herrn in the dative.'],
      ['Der Kurs ist für ___ kostenlos.', ['Studenten', 'Student', 'Studentes', 'Studente'], 0, 'Student gehört zur n-Deklination und steht hier im Akkusativ Plural.', 'Student is a weak masculine and here stands in the accusative plural.'],
      ['Wir haben mit unserem ___ gesprochen.', ['Nachbarn', 'Nachbar', 'Nachbars', 'Nachbaren'], 0, 'Nachbar ist ein Sonderfall der n-Deklination: dem Nachbarn.', 'Nachbar is a special case of the weak masculines: dem Nachbarn.'],
      ['Wie ist der ___ Ihres Kindes?', ['Name', 'Namen', 'Namens', 'Nam'], 0, 'Im Nominativ Singular heißt es der Name, ohne -n.', 'In the nominative singular it is der Name, without -n.'],
      ['Das Büro des ___ ist im ersten Stock.', ['Praktikanten', 'Praktikant', 'Praktikants', 'Praktikante'], 0, 'Genitiv der n-Deklination: des Praktikanten.', 'Genitive of a weak masculine: des Praktikanten.'],
    ],
  },
];
