/**
 * Sentence structure. This is where A2 and B1 visibly separate: the ability to
 * join two ideas into one sentence and still put the verb in the right place.
 */
export const SATZBAU = [
  {
    key: 'nebensaetze',
    icon: '\u{1F517}',
    title: { de: 'Nebensätze: dass, weil, ob', en: 'Subordinate clauses: dass, weil, ob' },
    summary: {
      de: 'Eine Regel, überall gleich: das konjugierte Verb geht ans Ende.',
      en: 'One rule, always the same: the conjugated verb goes to the end.',
    },
    body: {
      en: [
        'A subordinate clause is introduced by a subordinating conjunction - dass, weil, ob, wenn, obwohl, damit, während, bevor, nachdem, seitdem, falls, sobald - and its conjugated verb moves to the very end.',
        '"Ich komme später. Ich muss arbeiten." becomes "Ich komme später, weil ich arbeiten muss." Note the comma, and note that muss is now last.',
        'If the subordinate clause comes first, the whole clause counts as position one, so the main clause starts with its verb: "Weil ich arbeiten muss, komme ich später." Learners lose marks here more than anywhere else.',
        'With a separable verb the prefix rejoins the stem at the end: "… weil ich um sechs aufstehe." With a modal verb, the modal goes last and the infinitive sits just before it: "… weil ich früh aufstehen muss."',
        'Use ob, not wenn, for "whether": "Ich weiß nicht, ob er kommt." wenn means if in the sense of a condition, or whenever.',
      ],
      de: [
        'Ein Nebensatz beginnt mit einer unterordnenden Konjunktion - dass, weil, ob, wenn, obwohl, damit, während, bevor, nachdem, seitdem, falls, sobald - und das konjugierte Verb rutscht ganz ans Ende.',
        '"Ich komme später. Ich muss arbeiten." wird zu "Ich komme später, weil ich arbeiten muss." Achte auf das Komma und darauf, dass muss jetzt hinten steht.',
        'Steht der Nebensatz vorn, zählt er als Position eins, und der Hauptsatz beginnt mit dem Verb: "Weil ich arbeiten muss, komme ich später." Hier verlieren Lernende die meisten Punkte.',
        'Bei trennbaren Verben wächst die Vorsilbe am Ende wieder an: "… weil ich um sechs aufstehe." Bei Modalverben steht das Modalverb ganz hinten, der Infinitiv davor: "… weil ich früh aufstehen muss."',
        'Für "ob" gilt: ob heißt whether, wenn heißt if im Sinn einer Bedingung oder immer wenn. "Ich weiß nicht, ob er kommt."',
      ],
    },
    tables: [
      {
        caption: { de: 'Verbposition im Nebensatz', en: 'Verb position in the subordinate clause' },
        head: ['Typ', 'Beispiel'],
        rows: [
          ['einfaches Verb', '… weil ich jeden Tag lerne.'],
          ['trennbares Verb', '… weil ich um sechs aufstehe.'],
          ['Modalverb', '… weil ich früh aufstehen muss.'],
          ['Perfekt', '… weil ich lange gearbeitet habe.'],
          ['Nebensatz vorn', 'Weil ich lange gearbeitet habe, bin ich müde.'],
        ],
      },
    ],
    examples: [
      { de: 'Ich hoffe, dass Sie mir bald antworten können.', en: 'I hope that you can answer me soon.' },
      { de: 'Obwohl die Wohnung klein ist, gefällt sie uns gut.', en: 'Although the flat is small, we like it a lot.' },
      { de: 'Ich weiß noch nicht, ob ich am Samstag Zeit habe.', en: 'I do not know yet whether I have time on Saturday.' },
      { de: 'Sobald der Bescheid kommt, gebe ich dir Bescheid.', en: 'As soon as the decision arrives I will let you know.' },
    ],
    pitfalls: [
      {
        wrong: 'Ich komme später, weil ich muss arbeiten.',
        right: 'Ich komme später, weil ich arbeiten muss.',
        why: {
          de: 'Im Nebensatz steht das konjugierte Verb - hier muss - am Ende.',
          en: 'In a subordinate clause the conjugated verb - here muss - goes last.',
        },
      },
      {
        wrong: 'Weil ich krank war, ich bin zu Hause geblieben.',
        right: 'Weil ich krank war, bin ich zu Hause geblieben.',
        why: {
          de: 'Der Nebensatz besetzt Position eins, also folgt sofort das Verb des Hauptsatzes.',
          en: 'The subordinate clause fills position one, so the main clause verb comes straight after.',
        },
      },
      {
        wrong: 'Ich weiß nicht, wenn er kommt.',
        right: 'Ich weiß nicht, ob er kommt.',
        why: {
          de: 'Für whether steht ob; wenn ist eine Bedingung oder ein Zeitpunkt.',
          en: 'For whether you need ob; wenn is a condition or a point in time.',
        },
      },
    ],
    drills: [
      ['Ich kann nicht kommen, weil ich noch ___.', ['arbeiten muss', 'muss arbeiten', 'arbeite muss', 'muss arbeite'], 0, 'Im Nebensatz steht das Modalverb ganz hinten, der Infinitiv davor.', 'In a subordinate clause the modal verb goes last, with the infinitive before it.'],
      ['Weil der Zug Verspätung hatte, ___ ich zu spät.', ['kam', 'ich kam', 'bin gekommen ich', 'ich bin gekommen'], 0, 'Der Nebensatz ist Position eins, also folgt direkt das Verb.', 'The subordinate clause is position one, so the verb comes directly after.'],
      ['Ich weiß noch nicht, ___ ich am Samstag Zeit habe.', ['ob', 'wenn', 'dass', 'als'], 0, 'ob steht für whether nach Ausdrücken des Nichtwissens.', 'ob is used for whether after expressions of not knowing.'],
      ['Obwohl es geregnet ___, sind wir spazieren gegangen.', ['hat', 'hatte es', 'es hat', 'haben'], 0, 'Das Hilfsverb geht im Nebensatz ans Ende: geregnet hat.', 'The auxiliary goes to the end in a subordinate clause: geregnet hat.'],
      ['Er sagt, dass er den Termin ___.', ['vergessen hat', 'hat vergessen', 'vergisst hat', 'hat vergisst'], 0, 'Im Nebensatz steht das konjugierte hat nach dem Partizip.', 'In a subordinate clause the conjugated hat comes after the participle.'],
      ['Ich lerne jeden Tag, ___ ich die Prüfung bestehe.', ['damit', 'um', 'weil', 'obwohl'], 0, 'damit nennt den Zweck und leitet einen Nebensatz mit Verb am Ende ein.', 'damit states the purpose and introduces a subordinate clause with the verb at the end.'],
      ['Sobald der Bescheid ___, rufe ich dich an.', ['kommt', 'kommen', 'gekommen', 'kommt an'], 0, 'Einfaches Verb im Nebensatz: konjugiert und am Ende.', 'A simple verb in a subordinate clause: conjugated and at the end.'],
      ['Sie hat mir erzählt, dass sie nächsten Monat ___.', ['umzieht', 'zieht um', 'um zieht', 'umziehen'], 0, 'Trennbare Verben wachsen im Nebensatz wieder zusammen: umzieht.', 'Separable verbs rejoin in a subordinate clause: umzieht.'],
      ['Falls es morgen ___, bleiben wir zu Hause.', ['regnet', 'regnen', 'geregnet', 'es regnet'], 0, 'falls leitet einen Nebensatz ein: Verb am Ende, kein zweites Subjekt.', 'falls introduces a subordinate clause: verb at the end, no second subject.'],
    ],
  },

  {
    key: 'konnektoren',
    icon: '\u{1F9F5}',
    title: { de: 'deshalb, trotzdem, denn: Position zählt', en: 'deshalb, trotzdem, denn: position matters' },
    summary: {
      de: 'Drei Gruppen mit drei verschiedenen Verbpositionen. Hier trennt sich B1 von A2.',
      en: 'Three groups with three different verb positions. This is where B1 shows.',
    },
    body: {
      en: [
        'German connectors fall into three groups, and each does something different to the word order. Learning them in groups is far more efficient than learning them one by one.',
        'Group 1, position zero: und, aber, oder, denn, sondern. They stand outside the sentence and change nothing: "Ich bleibe zu Hause, denn ich bin müde."',
        'Group 2, position one: deshalb, deswegen, darum, trotzdem, dann, außerdem, sonst. They occupy the first slot, so the verb comes second and the subject third: "Ich bin müde, deshalb bleibe ich zu Hause."',
        'Group 3, subordinating: weil, obwohl, dass, wenn, damit, bevor, während. The verb goes to the end: "Ich bleibe zu Hause, weil ich müde bin."',
        'Note the pairs that mean almost the same thing but behave differently: denn and weil; trotzdem and obwohl. Getting the pair right is a reliable B1 marker.',
      ],
      de: [
        'Deutsche Konnektoren gehören zu drei Gruppen, und jede Gruppe macht etwas anderes mit der Wortstellung. In Gruppen zu lernen ist viel effizienter als Wort für Wort.',
        'Gruppe 1, Position null: und, aber, oder, denn, sondern. Sie stehen außerhalb des Satzes und ändern nichts: "Ich bleibe zu Hause, denn ich bin müde."',
        'Gruppe 2, Position eins: deshalb, deswegen, darum, trotzdem, dann, außerdem, sonst. Sie besetzen das erste Feld, das Verb steht also an zweiter Stelle und das Subjekt an dritter: "Ich bin müde, deshalb bleibe ich zu Hause."',
        'Gruppe 3, unterordnend: weil, obwohl, dass, wenn, damit, bevor, während. Das Verb geht ans Ende: "Ich bleibe zu Hause, weil ich müde bin."',
        'Achte auf die Paare mit fast gleicher Bedeutung, aber anderem Satzbau: denn und weil; trotzdem und obwohl. Wer das Paar richtig trifft, zeigt sicher B1.',
      ],
    },
    tables: [
      {
        caption: { de: 'Die drei Gruppen', en: 'The three groups' },
        head: ['Gruppe', 'Wörter', 'Verb steht'],
        rows: [
          ['Position 0', 'und, aber, oder, denn, sondern', 'wie im normalen Hauptsatz'],
          ['Position 1', 'deshalb, trotzdem, dann, außerdem, sonst', 'direkt danach (Position 2)'],
          ['Nebensatz', 'weil, obwohl, dass, wenn, damit, bevor', 'am Ende'],
        ],
      },
      {
        caption: { de: 'Dasselbe dreimal gesagt', en: 'The same thing said three ways' },
        head: ['Konnektor', 'Satz'],
        rows: [
          ['denn', 'Ich bleibe zu Hause, denn ich bin müde.'],
          ['deshalb', 'Ich bin müde, deshalb bleibe ich zu Hause.'],
          ['weil', 'Ich bleibe zu Hause, weil ich müde bin.'],
        ],
      },
    ],
    examples: [
      { de: 'Die Wohnung war teuer, trotzdem haben wir sie genommen.', en: 'The flat was expensive; nevertheless we took it.' },
      { de: 'Obwohl die Wohnung teuer war, haben wir sie genommen.', en: 'Although the flat was expensive, we took it.' },
      { de: 'Beeil dich, sonst verpassen wir den Zug.', en: 'Hurry up, otherwise we will miss the train.' },
    ],
    pitfalls: [
      {
        wrong: 'Ich bin müde, deshalb ich bleibe zu Hause.',
        right: 'Ich bin müde, deshalb bleibe ich zu Hause.',
        why: {
          de: 'deshalb steht auf Position eins, also folgt das Verb, nicht das Subjekt.',
          en: 'deshalb takes position one, so the verb follows, not the subject.',
        },
      },
      {
        wrong: 'Ich bleibe zu Hause, denn ich müde bin.',
        right: 'Ich bleibe zu Hause, denn ich bin müde.',
        why: {
          de: 'denn ändert nichts an der Wortstellung - es ist kein Nebensatz.',
          en: 'denn changes nothing about word order - it does not make a subordinate clause.',
        },
      },
    ],
    drills: [
      ['Es hat geregnet, deshalb ___ wir zu Hause geblieben.', ['sind', 'wir sind', 'haben', 'wir haben'], 0, 'deshalb besetzt Position eins, das Verb folgt direkt.', 'deshalb fills position one, so the verb follows immediately.'],
      ['Ich komme später, ___ ich noch einen Termin habe.', ['weil', 'denn ich', 'deshalb', 'trotzdem'], 0, 'Am Ende steht habe, also ist es ein Nebensatz mit weil.', 'habe stands at the end, so this is a subordinate clause with weil.'],
      ['Die Miete ist hoch, ___ die Lage ist perfekt.', ['aber', 'obwohl', 'weil', 'damit'], 0, 'aber steht auf Position null und lässt die Wortstellung unverändert.', 'aber sits in position zero and leaves the word order unchanged.'],
      ['___ es sehr kalt war, sind wir schwimmen gegangen.', ['Obwohl', 'Trotzdem', 'Deshalb', 'Denn'], 0, 'Vor dem Komma steht ein Nebensatz mit Verb am Ende: obwohl.', 'Before the comma there is a subordinate clause with the verb at the end: obwohl.'],
      ['Er hat wenig Zeit, ___ hilft er uns jedes Wochenende.', ['trotzdem', 'obwohl', 'weil', 'damit'], 0, 'trotzdem steht auf Position eins und das Verb folgt.', 'trotzdem sits in position one and the verb follows.'],
      ['Nimm einen Schirm mit, ___ wirst du nass.', ['sonst', 'damit', 'weil', 'obwohl'], 0, 'sonst nennt die unerwünschte Folge und steht auf Position eins.', 'sonst names the unwanted consequence and sits in position one.'],
      ['Wir haben abgesagt, ___ das Wetter zu schlecht war.', ['weil', 'denn das', 'deshalb', 'sonst'], 0, 'war steht am Ende: Nebensatz, also weil.', 'war is at the end: a subordinate clause, so weil.'],
      ['Der Kurs ist voll, ___ melde dich für den nächsten an.', ['deshalb', 'weil', 'obwohl', 'damit'], 0, 'deshalb zieht die Folge und lässt das Verb auf Position zwei stehen.', 'deshalb draws the consequence and keeps the verb in position two.'],
    ],
  },

  {
    key: 'relativsaetze',
    icon: '\u{1F3AF}',
    title: { de: 'Relativsätze', en: 'Relative clauses' },
    summary: {
      de: 'Ein Nomen genauer beschreiben, ohne einen zweiten Satz anzufangen.',
      en: 'Describing a noun more precisely without starting a second sentence.',
    },
    body: {
      en: [
        'A relative clause adds information about a noun. It is a subordinate clause, so the verb goes to the end, and it is always separated by commas.',
        'The relative pronoun takes its gender and number from the noun it refers to, but its case from its own clause. That split is the entire difficulty. "Der Mann, der dort steht" - masculine because Mann, nominative because he is the subject of steht. "Der Mann, den ich kenne" - masculine because Mann, accusative because he is the object of kenne.',
        'The forms are the definite article, with three exceptions: dative plural denen, and the genitive forms dessen and deren.',
        'After a preposition the preposition comes first and decides the case: "Die Kollegin, mit der ich arbeite" - mit takes dative. For things, you can also use wo(r)-: "das Thema, worüber wir gesprochen haben".',
      ],
      de: [
        'Ein Relativsatz gibt zusätzliche Information über ein Nomen. Er ist ein Nebensatz, das Verb steht also am Ende, und er wird immer durch Kommas abgetrennt.',
        'Das Relativpronomen übernimmt Genus und Numerus vom Bezugswort, aber den Kasus aus seinem eigenen Satz. Genau diese Trennung ist die ganze Schwierigkeit. "Der Mann, der dort steht" - maskulin wegen Mann, Nominativ, weil er Subjekt von steht ist. "Der Mann, den ich kenne" - maskulin wegen Mann, Akkusativ, weil er Objekt von kenne ist.',
        'Die Formen sind die des bestimmten Artikels, mit drei Ausnahmen: Dativ Plural denen sowie die Genitivformen dessen und deren.',
        'Nach einer Präposition steht die Präposition vorn und bestimmt den Kasus: "Die Kollegin, mit der ich arbeite" - mit verlangt Dativ. Bei Sachen geht auch wo(r)-: "das Thema, worüber wir gesprochen haben".',
      ],
    },
    tables: [
      {
        caption: { de: 'Relativpronomen', en: 'Relative pronouns' },
        head: ['Kasus', 'maskulin', 'feminin', 'neutrum', 'Plural'],
        rows: [
          ['Nominativ', 'der', 'die', 'das', 'die'],
          ['Akkusativ', 'den', 'die', 'das', 'die'],
          ['Dativ', 'dem', 'der', 'dem', 'denen'],
          ['Genitiv', 'dessen', 'deren', 'dessen', 'deren'],
        ],
      },
    ],
    examples: [
      { de: 'Das ist die Kollegin, die mir bei der Bewerbung geholfen hat.', en: 'That is the colleague who helped me with the application.' },
      { de: 'Der Kurs, den ich besuche, findet abends statt.', en: 'The course I am attending takes place in the evenings.' },
      { de: 'Die Nachbarn, denen wir den Schlüssel gegeben haben, gießen die Blumen.', en: 'The neighbours we gave the key to water the plants.' },
      { de: 'Das Formular, das Sie brauchen, gibt es auch online.', en: 'The form you need is also available online.' },
    ],
    pitfalls: [
      {
        wrong: 'Der Mann, der ich gesehen habe, war mein Nachbar.',
        right: 'Der Mann, den ich gesehen habe, war mein Nachbar.',
        why: {
          de: 'Im Relativsatz ist der Mann das Objekt von sehen: Akkusativ den.',
          en: 'In the relative clause the man is the object of sehen: accusative den.',
        },
      },
      {
        wrong: 'Die Leute, die ich geholfen habe, sind umgezogen.',
        right: 'Die Leute, denen ich geholfen habe, sind umgezogen.',
        why: {
          de: 'helfen verlangt Dativ, im Plural also denen.',
          en: 'helfen takes the dative, so in the plural it is denen.',
        },
      },
    ],
    drills: [
      ['Das ist der Kollege, ___ mir geholfen hat.', ['der', 'den', 'dem', 'dessen'], 0, 'Er ist Subjekt von hat geholfen: Nominativ der.', 'He is the subject of hat geholfen: nominative der.'],
      ['Der Film, ___ wir gestern gesehen haben, war spannend.', ['den', 'der', 'dem', 'das'], 0, 'Film ist maskulin und hier Akkusativobjekt von sehen: den.', 'Film is masculine and here the accusative object of sehen: den.'],
      ['Die Frau, ___ ich das Paket gegeben habe, wohnt oben.', ['der', 'die', 'den', 'deren'], 0, 'geben verlangt für die Person den Dativ; feminin Dativ ist der.', 'geben takes the dative for the person; feminine dative is der.'],
      ['Das Formular, ___ Sie ausfüllen müssen, liegt am Eingang.', ['das', 'der', 'dem', 'den'], 0, 'Formular ist neutrum und Akkusativobjekt: das.', 'Formular is neuter and the accusative object: das.'],
      ['Die Nachbarn, ___ wir den Schlüssel gegeben haben, sind sehr nett.', ['denen', 'die', 'der', 'deren'], 0, 'Dativ Plural im Relativsatz ist immer denen.', 'Dative plural in a relative clause is always denen.'],
      ['Die Kollegin, mit ___ ich das Projekt mache, kommt aus Polen.', ['der', 'die', 'dem', 'denen'], 0, 'mit verlangt Dativ, feminin also der.', 'mit takes the dative, so feminine is der.'],
      ['Das Haus, in ___ wir wohnen, wird renoviert.', ['dem', 'das', 'den', 'der'], 0, 'in + Ort ohne Bewegung verlangt Dativ; neutrum Dativ ist dem.', 'in + location without movement takes the dative; neuter dative is dem.'],
      ['Der Mann, ___ Auto hier steht, ist mein Vermieter.', ['dessen', 'deren', 'der', 'den'], 0, 'Besitz wird mit dem Genitiv ausgedrückt: maskulin dessen.', 'Possession is expressed with the genitive: masculine dessen.'],
    ],
  },

  {
    key: 'wortstellung',
    icon: '\u{1F9ED}',
    title: { de: 'Satzstellung im Mittelfeld', en: 'Word order in the middle field' },
    summary: {
      de: 'Te-Ka-Mo-Lo: temporal, kausal, modal, lokal - in dieser Reihenfolge.',
      en: 'Te-Ka-Mo-Lo: time, reason, manner, place - in that order.',
    },
    body: {
      en: [
        'The conjugated verb is in position two in a main statement. What comes before it is a single element of your choice - subject, time, place, an object - and putting something other than the subject there is a normal, good way to connect sentences.',
        'What sits between the verb and the sentence end follows a default order, remembered as Te-Ka-Mo-Lo: temporal (when), kausal (why), modal (how), lokal (where). "Ich fahre morgen wegen der Prüfung mit dem Zug nach Köln."',
        'Objects have their own rule: dative before accusative, unless the accusative is a pronoun, in which case the pronoun comes first. "Ich gebe dem Kind das Buch" but "Ich gebe es dem Kind".',
        'nicht goes before the element it negates, and at the end when it negates the whole sentence - but always before a separable prefix, an infinitive or a participle: "Ich rufe heute nicht an."',
      ],
      de: [
        'Im Aussagesatz steht das konjugierte Verb auf Position zwei. Davor steht genau ein Element deiner Wahl - Subjekt, Zeit, Ort, ein Objekt - und etwas anderes als das Subjekt dorthin zu stellen ist normal und verbindet Sätze gut.',
        'Zwischen Verb und Satzende gilt eine Grundfolge, als Te-Ka-Mo-Lo gemerkt: temporal (wann), kausal (warum), modal (wie), lokal (wo). "Ich fahre morgen wegen der Prüfung mit dem Zug nach Köln."',
        'Für Objekte gilt eine eigene Regel: Dativ vor Akkusativ, außer der Akkusativ ist ein Pronomen - dann steht das Pronomen zuerst. "Ich gebe dem Kind das Buch", aber "Ich gebe es dem Kind".',
        'nicht steht vor dem Element, das verneint wird, und am Ende, wenn der ganze Satz verneint wird - aber immer vor trennbarer Vorsilbe, Infinitiv oder Partizip: "Ich rufe heute nicht an."',
      ],
    },
    tables: [
      {
        caption: { de: 'Te-Ka-Mo-Lo', en: 'Te-Ka-Mo-Lo' },
        head: ['Feld', 'Frage', 'Beispiel'],
        rows: [
          ['temporal', 'wann?', 'morgen, um acht, seit Mai'],
          ['kausal', 'warum?', 'wegen der Prüfung, aus Angst'],
          ['modal', 'wie?', 'mit dem Zug, gern, schnell'],
          ['lokal', 'wo / wohin?', 'nach Köln, im Büro'],
        ],
      },
    ],
    examples: [
      { de: 'Ich gehe morgen früh mit meiner Tochter zum Arzt.', en: 'Tomorrow morning I am going to the doctor with my daughter.' },
      { de: 'Morgen früh gehe ich mit meiner Tochter zum Arzt.', en: 'Tomorrow morning I am going to the doctor with my daughter.' },
      { de: 'Ich habe ihr das Buch gestern gegeben.', en: 'I gave her the book yesterday.' },
      { de: 'Den Termin kann ich leider nicht wahrnehmen.', en: 'Unfortunately I cannot keep the appointment.' },
    ],
    pitfalls: [
      {
        wrong: 'Morgen ich fahre nach Köln.',
        right: 'Morgen fahre ich nach Köln.',
        why: {
          de: 'Steht die Zeitangabe vorn, folgt das Verb auf Position zwei, dann das Subjekt.',
          en: 'If the time expression comes first, the verb takes position two and the subject follows.',
        },
      },
      {
        wrong: 'Ich fahre nach Köln morgen.',
        right: 'Ich fahre morgen nach Köln.',
        why: {
          de: 'Nach Te-Ka-Mo-Lo steht die Zeit vor dem Ort.',
          en: 'Under Te-Ka-Mo-Lo, time comes before place.',
        },
      },
    ],
    drills: [
      ['Wähle den richtigen Satz.', ['Nächste Woche fahre ich nach Wien.', 'Nächste Woche ich fahre nach Wien.', 'Nächste Woche fahren ich nach Wien.', 'Nächste Woche nach Wien fahre ich.'], 0, 'Das konjugierte Verb steht auf Position zwei, das Subjekt danach.', 'The conjugated verb takes position two and the subject follows.'],
      ['Wähle den richtigen Satz.', ['Ich gehe heute Abend mit Freunden ins Kino.', 'Ich gehe ins Kino heute Abend mit Freunden.', 'Ich gehe mit Freunden heute Abend ins Kino.', 'Heute Abend ich gehe mit Freunden ins Kino.'], 0, 'Te-Ka-Mo-Lo: Zeit vor Art und Weise vor Ort.', 'Te-Ka-Mo-Lo: time before manner before place.'],
      ['Wähle den richtigen Satz.', ['Ich habe es ihm schon gesagt.', 'Ich habe ihm es schon gesagt.', 'Ich habe schon es ihm gesagt.', 'Ich es habe ihm schon gesagt.'], 0, 'Ist der Akkusativ ein Pronomen, steht er vor dem Dativ.', 'If the accusative is a pronoun, it comes before the dative.'],
      ['Wähle den richtigen Satz.', ['Ich rufe dich heute nicht an.', 'Ich rufe dich heute an nicht.', 'Ich nicht rufe dich heute an.', 'Ich rufe nicht dich heute an.'], 0, 'nicht steht vor der trennbaren Vorsilbe am Satzende.', 'nicht goes before the separable prefix at the end of the sentence.'],
      ['Wähle den richtigen Satz.', ['Wegen des Sturms fällt der Zug heute aus.', 'Wegen des Sturms der Zug fällt heute aus.', 'Wegen des Sturms fällt heute der Zug aus nicht.', 'Fällt wegen des Sturms der Zug heute aus.'], 0, 'Die kausale Angabe steht vorn, das Verb bleibt auf Position zwei.', 'The causal phrase goes first and the verb stays in position two.'],
      ['Wähle den richtigen Satz.', ['Sie hat ihrer Schwester das Auto geliehen.', 'Sie hat das Auto ihrer Schwester geliehen geliehen.', 'Sie hat geliehen ihrer Schwester das Auto.', 'Sie ihrer Schwester hat das Auto geliehen.'], 0, 'Zwei Nomen als Objekte: Dativ vor Akkusativ.', 'Two nouns as objects: dative before accusative.'],
    ],
  },
];
