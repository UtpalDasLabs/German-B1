/**
 * The remaining B1 topics: temporal clauses, verbs with prepositions and their
 * da-/wo- forms, indirect questions and two-part connectors.
 */
export const SONSTIGES = [
  {
    key: 'temporalsaetze',
    icon: '\u{1F4C6}',
    title: { de: 'als, wenn, wann', en: 'als, wenn, wann' },
    summary: {
      de: 'Drei Wörter, ein englisches "when" - und eine Regel, die wirklich funktioniert.',
      en: 'Three words, one English "when" - and a rule that actually works.',
    },
    body: {
      en: [
        'English "when" splits three ways in German, and the split is systematic.',
        'als: one single event in the past. "Als ich nach Deutschland kam, sprach ich kein Wort Deutsch." One arrival, one time.',
        'wenn: repeated events in any tense, or anything in the present and future. "Wenn ich nach Hause komme, koche ich erst mal." Every time. Also conditional: "Wenn es regnet, bleiben wir da."',
        'wann: only in questions, direct or indirect. "Wann kommst du?" and "Ich weiß nicht, wann er kommt."',
        'Alongside these, the other temporal conjunctions are worth having ready: bevor, nachdem, während, seit / seitdem, bis, sobald. All of them send the verb to the end.',
      ],
      de: [
        'Das englische "when" teilt sich im Deutschen in drei Wörter auf - und die Aufteilung ist systematisch.',
        'als: ein einzelnes Ereignis in der Vergangenheit. "Als ich nach Deutschland kam, sprach ich kein Wort Deutsch." Eine Ankunft, ein Zeitpunkt.',
        'wenn: wiederholte Ereignisse in jeder Zeit sowie alles in Gegenwart und Zukunft. "Wenn ich nach Hause komme, koche ich erst mal." Jedes Mal. Außerdem konditional: "Wenn es regnet, bleiben wir da."',
        'wann: nur in Fragen, direkt oder indirekt. "Wann kommst du?" und "Ich weiß nicht, wann er kommt."',
        'Daneben lohnen sich die übrigen Temporalkonjunktionen: bevor, nachdem, während, seit / seitdem, bis, sobald. Alle schicken das Verb ans Ende.',
      ],
    },
    tables: [
      {
        caption: { de: 'als, wenn oder wann', en: 'als, wenn or wann' },
        head: ['Wort', 'Wann?', 'Beispiel'],
        rows: [
          ['als', 'einmal, Vergangenheit', 'Als ich ankam, regnete es.'],
          ['wenn', 'jedes Mal / Gegenwart / Zukunft', 'Wenn ich ankomme, rufe ich an.'],
          ['wenn', 'Bedingung', 'Wenn es regnet, bleiben wir zu Hause.'],
          ['wann', 'Frage', 'Weißt du, wann der Kurs beginnt?'],
        ],
      },
      {
        caption: { de: 'Weitere Temporalkonjunktionen', en: 'Other temporal conjunctions' },
        head: ['Wort', 'Bedeutung', 'Beispiel'],
        rows: [
          ['bevor', 'vorher', 'Bevor ich gehe, räume ich auf.'],
          ['nachdem', 'danach (Vorzeitigkeit)', 'Nachdem ich gegessen hatte, ging ich.'],
          ['während', 'gleichzeitig', 'Während ich koche, deckt er den Tisch.'],
          ['seit / seitdem', 'ab einem Punkt bis jetzt', 'Seitdem ich hier wohne, fahre ich Rad.'],
          ['bis', 'bis zu einem Punkt', 'Warte, bis ich fertig bin.'],
          ['sobald', 'sofort danach', 'Sobald ich es weiß, melde ich mich.'],
        ],
      },
    ],
    examples: [
      { de: 'Als ich das erste Mal beim Amt war, hatte ich alles falsch ausgefüllt.', en: 'The first time I was at the office I had filled everything in wrong.' },
      { de: 'Immer wenn ich nervös bin, spreche ich zu schnell.', en: 'Whenever I am nervous I speak too fast.' },
      { de: 'Können Sie mir sagen, wann der Bescheid kommt?', en: 'Can you tell me when the decision will arrive?' },
    ],
    pitfalls: [
      {
        wrong: 'Wenn ich 2019 nach Deutschland kam, sprach ich kein Deutsch.',
        right: 'Als ich 2019 nach Deutschland kam, sprach ich kein Deutsch.',
        why: {
          de: 'Ein einmaliges Ereignis in der Vergangenheit verlangt als.',
          en: 'A single event in the past requires als.',
        },
      },
      {
        wrong: 'Ich weiß nicht, wenn er kommt.',
        right: 'Ich weiß nicht, wann er kommt.',
        why: {
          de: 'In einer indirekten Frage steht wann.',
          en: 'In an indirect question you use wann.',
        },
      },
    ],
    drills: [
      ['___ ich 2018 nach Deutschland kam, sprach ich kein Wort Deutsch.', ['Als', 'Wenn', 'Wann', 'Ob'], 0, 'Einmaliges Ereignis in der Vergangenheit: als.', 'A single event in the past: als.'],
      ['Immer ___ ich Zeit habe, gehe ich schwimmen.', ['wenn', 'als', 'wann', 'ob'], 0, 'Wiederholte Handlung: wenn.', 'A repeated action: wenn.'],
      ['Weißt du, ___ der Kurs anfängt?', ['wann', 'wenn', 'als', 'ob'], 0, 'Indirekte Frage nach dem Zeitpunkt: wann.', 'An indirect question about a point in time: wann.'],
      ['___ ich unterschreibe, lese ich alles genau.', ['Bevor', 'Nachdem', 'Seitdem', 'Bis'], 0, 'Das Lesen kommt vor dem Unterschreiben: bevor.', 'The reading comes before the signing: bevor.'],
      ['___ ich hier wohne, fahre ich jeden Tag Rad.', ['Seitdem', 'Bevor', 'Bis', 'Als'], 0, 'Ein Zustand ab einem Punkt bis jetzt: seitdem.', 'A state from a point up to now: seitdem.'],
      ['___ ich koche, deckt mein Sohn den Tisch.', ['Während', 'Nachdem', 'Bevor', 'Als'], 0, 'Beides passiert gleichzeitig: während.', 'Both happen at the same time: während.'],
      ['___ es morgen regnet, bleiben wir zu Hause.', ['Wenn', 'Als', 'Wann', 'Seitdem'], 0, 'Bedingung in der Zukunft: wenn.', 'A condition in the future: wenn.'],
    ],
  },

  {
    key: 'daworpronomen',
    icon: '\u{1F517}',
    title: { de: 'Verben mit Präposition: da- und wo-', en: 'Verbs with prepositions: da- and wo-' },
    summary: {
      de: 'Worauf wartest du? – Darauf, dass der Bescheid kommt.',
      en: 'Worauf wartest du? – Darauf, dass der Bescheid kommt.',
    },
    body: {
      en: [
        'Many German verbs come with a fixed preposition that you cannot derive from English: warten auf, sich freuen auf, denken an, sich kümmern um, bestehen aus, teilnehmen an. Learn each verb together with its preposition and the case it takes.',
        'When the thing you refer to is an object rather than a person, German does not repeat the preposition with a pronoun. Instead it builds a da-word: für das becomes dafür, mit dem becomes damit, auf das becomes darauf. An r is inserted when the preposition starts with a vowel: an → daran, auf → darauf, über → darüber.',
        'The same applies to questions: wo + preposition, again with the linking r. "Worauf wartest du?" "Worüber habt ihr gesprochen?"',
        'For people the preposition keeps its normal pronoun: "Auf wen wartest du?" – "Auf meinen Bruder." Never "worauf" for a person.',
        'The da-word also announces a following dass-clause: "Ich freue mich darauf, dass du kommst."',
      ],
      de: [
        'Viele deutsche Verben haben eine feste Präposition, die man nicht aus dem Englischen ableiten kann: warten auf, sich freuen auf, denken an, sich kümmern um, bestehen aus, teilnehmen an. Lerne jedes Verb zusammen mit Präposition und Kasus.',
        'Wenn sich der Bezug auf eine Sache richtet und nicht auf eine Person, wiederholt das Deutsche die Präposition nicht mit einem Pronomen. Stattdessen entsteht ein da-Wort: für das wird dafür, mit dem wird damit, auf das wird darauf. Beginnt die Präposition mit einem Vokal, kommt ein r dazwischen: an → daran, auf → darauf, über → darüber.',
        'Genauso in Fragen: wo + Präposition, wieder mit dem Binde-r. "Worauf wartest du?" "Worüber habt ihr gesprochen?"',
        'Bei Personen bleibt die Präposition mit normalem Pronomen: "Auf wen wartest du?" – "Auf meinen Bruder." Niemals "worauf" für eine Person.',
        'Das da-Wort kündigt außerdem einen folgenden dass-Satz an: "Ich freue mich darauf, dass du kommst."',
      ],
    },
    tables: [
      {
        caption: { de: 'da- und wo-Formen', en: 'da- and wo- forms' },
        head: ['Präposition', 'Sache (da-)', 'Frage (wo-)', 'Person'],
        rows: [
          ['auf', 'darauf', 'worauf', 'auf wen'],
          ['an', 'daran', 'woran', 'an wen'],
          ['über', 'darüber', 'worüber', 'über wen'],
          ['für', 'dafür', 'wofür', 'für wen'],
          ['mit', 'damit', 'womit', 'mit wem'],
          ['um', 'darum', 'worum', 'um wen'],
          ['von', 'davon', 'wovon', 'von wem'],
        ],
      },
    ],
    examples: [
      { de: 'Worauf wartest du? – Auf den Bescheid. Ich warte schon seit Wochen darauf.', en: 'What are you waiting for? - For the decision. I have been waiting for it for weeks.' },
      { de: 'Woran denkst du gerade?', en: 'What are you thinking about right now?' },
      { de: 'Ich freue mich sehr darüber, dass es geklappt hat.', en: 'I am very glad that it worked out.' },
      { de: 'Mit wem hast du gesprochen?', en: 'Who did you speak to?' },
    ],
    pitfalls: [
      {
        wrong: 'Ich warte auf es.',
        right: 'Ich warte darauf.',
        why: {
          de: 'Für Sachen bildet man ein da-Wort statt Präposition plus Pronomen.',
          en: 'For things you form a da-word instead of preposition plus pronoun.',
        },
      },
      {
        wrong: 'Worauf wartest du? – Worauf meinen Bruder.',
        right: 'Auf wen wartest du? – Auf meinen Bruder.',
        why: {
          de: 'Bei Personen bleibt die Präposition: auf wen, nicht worauf.',
          en: 'With people the preposition stays: auf wen, not worauf.',
        },
      },
    ],
    drills: [
      ['___ wartest du? – Auf den Bus.', ['Worauf', 'Auf wen', 'Woran', 'Wofür'], 0, 'Der Bus ist eine Sache: Frage mit wo + r + auf.', 'The bus is a thing: the question uses wo + r + auf.'],
      ['___ wartest du? – Auf meine Schwester.', ['Auf wen', 'Worauf', 'Wovon', 'Womit'], 0, 'Bei Personen bleibt die Präposition mit Fragepronomen.', 'With people the preposition stays with the question pronoun.'],
      ['Ich interessiere mich sehr ___.', ['dafür', 'für es', 'darauf', 'davon'], 0, 'sich interessieren für + Sache wird zu dafür.', 'sich interessieren für + a thing becomes dafür.'],
      ['Ich freue mich ___, dass du kommst.', ['darauf', 'auf das', 'darüber es', 'dafür'], 0, 'Das da-Wort kündigt den dass-Satz an: sich freuen auf → darauf.', 'The da-word announces the dass-clause: sich freuen auf → darauf.'],
      ['___ habt ihr gesprochen? – Über den neuen Vertrag.', ['Worüber', 'Über wen', 'Wovon', 'Womit'], 0, 'Der Vertrag ist eine Sache: worüber.', 'The contract is a thing: worüber.'],
      ['Die Prüfung besteht ___ vier Teilen.', ['aus', 'von', 'in', 'mit'], 0, 'bestehen aus + Dativ ist die feste Verbindung.', 'bestehen aus + dative is the fixed combination.'],
      ['Das hängt ___ Wetter ab.', ['vom', 'auf dem', 'an dem', 'für das'], 0, 'abhängen von + Dativ: von dem wird vom.', 'abhängen von + dative: von dem becomes vom.'],
      ['Er kümmert sich ___ die Anmeldung.', ['um', 'für', 'an', 'über'], 0, 'sich kümmern um + Akkusativ.', 'sich kümmern um + accusative.'],
    ],
  },

  {
    key: 'indirektefragen',
    icon: '❓',
    title: { de: 'Indirekte Fragen', en: 'Indirect questions' },
    summary: {
      de: 'Höflicher fragen - und das Verb wandert ans Ende.',
      en: 'Asking more politely - and the verb moves to the end.',
    },
    body: {
      en: [
        'An indirect question is a question packed inside another sentence: "Können Sie mir sagen, wo der Eingang ist?" It is a subordinate clause, so the verb goes to the end.',
        'If the original question has a question word (wo, wann, wie, warum, wer, was), that word stays and introduces the clause. If there is no question word - a yes/no question - you introduce it with ob.',
        '"Kommt er heute?" becomes "Ich weiß nicht, ob er heute kommt." "Wann kommt er?" becomes "Ich weiß nicht, wann er kommt."',
        'This structure is worth real marks in Sprechen and in the formal email, because it is the natural way to ask a stranger something: "Ich würde gern wissen, ob …", "Könnten Sie mir mitteilen, wann …".',
      ],
      de: [
        'Eine indirekte Frage ist eine Frage in einem anderen Satz: "Können Sie mir sagen, wo der Eingang ist?" Sie ist ein Nebensatz, das Verb steht also am Ende.',
        'Hat die ursprüngliche Frage ein Fragewort (wo, wann, wie, warum, wer, was), bleibt dieses Wort und leitet den Nebensatz ein. Gibt es kein Fragewort - also eine Ja/Nein-Frage -, leitest du mit ob ein.',
        '"Kommt er heute?" wird zu "Ich weiß nicht, ob er heute kommt." "Wann kommt er?" wird zu "Ich weiß nicht, wann er kommt."',
        'Diese Struktur bringt im Sprechen und in der formellen Mail echte Punkte, weil sie die natürliche Art ist, jemand Fremden etwas zu fragen: "Ich würde gern wissen, ob …", "Könnten Sie mir mitteilen, wann …".',
      ],
    },
    tables: [
      {
        caption: { de: 'Direkt und indirekt', en: 'Direct and indirect' },
        head: ['Direkte Frage', 'Indirekte Frage'],
        rows: [
          ['Wo ist der Eingang?', 'Können Sie mir sagen, wo der Eingang ist?'],
          ['Kommt der Bus noch?', 'Wissen Sie, ob der Bus noch kommt?'],
          ['Wie lange dauert das?', 'Ich möchte wissen, wie lange das dauert.'],
          ['Haben Sie Zeit?', 'Ich frage mich, ob Sie Zeit haben.'],
        ],
      },
    ],
    examples: [
      { de: 'Könnten Sie mir bitte mitteilen, wann der Kurs beginnt?', en: 'Could you please tell me when the course starts?' },
      { de: 'Ich würde gern wissen, ob eine Anmeldung nötig ist.', en: 'I would like to know whether registration is necessary.' },
      { de: 'Wissen Sie, wie viel die Prüfung kostet?', en: 'Do you know how much the exam costs?' },
    ],
    pitfalls: [
      {
        wrong: 'Können Sie mir sagen, wo ist der Eingang?',
        right: 'Können Sie mir sagen, wo der Eingang ist?',
        why: {
          de: 'In der indirekten Frage steht das Verb am Ende.',
          en: 'In an indirect question the verb goes to the end.',
        },
      },
      {
        wrong: 'Ich weiß nicht, wenn er kommt.',
        right: 'Ich weiß nicht, ob er kommt.',
        why: {
          de: 'Ohne Fragewort leitet ob die indirekte Frage ein.',
          en: 'Without a question word, ob introduces the indirect question.',
        },
      },
    ],
    drills: [
      ['Können Sie mir sagen, wo der Ausgang ___?', ['ist', 'ist er', 'sein', 'ist es'], 0, 'In der indirekten Frage steht das Verb ganz hinten.', 'In an indirect question the verb goes at the very end.'],
      ['Ich weiß nicht, ___ der Kurs noch freie Plätze hat.', ['ob', 'wenn', 'wann', 'dass'], 0, 'Keine Fragewort-Frage, also ob.', 'No question word, so ob.'],
      ['Wissen Sie, ___ die Prüfung kostet?', ['wie viel', 'ob wie viel', 'wenn', 'dass'], 0, 'Das Fragewort bleibt erhalten und leitet den Nebensatz ein.', 'The question word is kept and introduces the subordinate clause.'],
      ['Ich würde gern wissen, ___ ich die Unterlagen per Mail schicken kann.', ['ob', 'wann', 'wenn', 'dass'], 0, 'Ja/Nein-Frage im Original: ob.', 'A yes/no question in the original: ob.'],
      ['Könnten Sie mir mitteilen, wann der Bescheid ___?', ['kommt', 'kommt er', 'kommen', 'ankommt er'], 0, 'Verb am Ende, kein zweites Subjekt.', 'Verb at the end, no second subject.'],
      ['Er hat gefragt, ___ wir am Samstag Zeit haben.', ['ob', 'wenn', 'was', 'dass'], 0, 'Indirekte Ja/Nein-Frage: ob.', 'An indirect yes/no question: ob.'],
    ],
  },

  {
    key: 'zweiteilige',
    icon: '↔️',
    title: { de: 'Zweiteilige Konnektoren', en: 'Two-part connectors' },
    summary: {
      de: 'sowohl … als auch, weder … noch, je … desto: klingt sofort nach B1.',
      en: 'sowohl … als auch, weder … noch, je … desto: instantly sounds like B1.',
    },
    body: {
      en: [
        'Two-part connectors join two ideas in a single move, and using one or two correctly is one of the quickest ways to lift a text from A2 to B1.',
        'sowohl … als auch = both … and. "Sie spricht sowohl Deutsch als auch Polnisch."',
        'nicht nur … sondern auch = not only … but also. "Das ist nicht nur billig, sondern auch praktisch."',
        'weder … noch = neither … nor, and it already contains the negation: never add nicht. "Ich habe weder Zeit noch Lust."',
        'entweder … oder = either … or. zwar … aber concedes a point before countering it: "Es ist zwar weit, aber schön."',
        'je … desto compares two rising quantities. It is the one with a tricky structure: je + comparative sends the verb to the end, then desto + comparative + verb. "Je länger ich hier lebe, desto besser verstehe ich die Leute."',
      ],
      de: [
        'Zweiteilige Konnektoren verbinden zwei Gedanken in einem Zug, und ein oder zwei richtig gesetzte heben einen Text schnell von A2 auf B1.',
        'sowohl … als auch = sowohl das eine wie das andere. "Sie spricht sowohl Deutsch als auch Polnisch."',
        'nicht nur … sondern auch = zusätzlich zum Ersten. "Das ist nicht nur billig, sondern auch praktisch."',
        'weder … noch = keins von beiden; die Verneinung steckt schon drin, also nie zusätzlich nicht. "Ich habe weder Zeit noch Lust."',
        'entweder … oder = eins von beiden. zwar … aber räumt etwas ein und widerspricht dann: "Es ist zwar weit, aber schön."',
        'je … desto vergleicht zwei wachsende Größen und hat als einziges einen kniffligen Bau: je + Komparativ schickt das Verb ans Ende, dann folgt desto + Komparativ + Verb. "Je länger ich hier lebe, desto besser verstehe ich die Leute."',
      ],
    },
    tables: [
      {
        caption: { de: 'Die wichtigsten Paare', en: 'The most important pairs' },
        head: ['Paar', 'Bedeutung', 'Beispiel'],
        rows: [
          ['sowohl … als auch', 'beides', 'sowohl morgens als auch abends'],
          ['nicht nur … sondern auch', 'zusätzlich', 'nicht nur günstig, sondern auch schnell'],
          ['weder … noch', 'keins von beiden', 'weder Zeit noch Geld'],
          ['entweder … oder', 'eins von beiden', 'entweder heute oder morgen'],
          ['zwar … aber', 'Einschränkung', 'zwar klein, aber gemütlich'],
          ['je … desto', 'Verhältnis', 'je mehr, desto besser'],
        ],
      },
    ],
    examples: [
      { de: 'Der Kurs ist sowohl für Anfänger als auch für Fortgeschrittene geeignet.', en: 'The course is suitable both for beginners and for advanced learners.' },
      { de: 'Ich habe weder eine Antwort noch eine Erklärung bekommen.', en: 'I received neither an answer nor an explanation.' },
      { de: 'Je früher Sie sich anmelden, desto günstiger wird es.', en: 'The earlier you register, the cheaper it gets.' },
      { de: 'Die Wohnung ist zwar klein, aber sehr hell.', en: 'The flat is small, admittedly, but very bright.' },
    ],
    pitfalls: [
      {
        wrong: 'Ich habe weder Zeit noch nicht Lust.',
        right: 'Ich habe weder Zeit noch Lust.',
        why: {
          de: 'weder … noch ist schon verneint, ein zusätzliches nicht ist falsch.',
          en: 'weder … noch is already negative, so an extra nicht is wrong.',
        },
      },
      {
        wrong: 'Je mehr ich übe, desto es wird leichter.',
        right: 'Je mehr ich übe, desto leichter wird es.',
        why: {
          de: 'Nach desto folgt der Komparativ, dann das Verb, dann das Subjekt.',
          en: 'After desto comes the comparative, then the verb, then the subject.',
        },
      },
    ],
    drills: [
      ['Sie spricht sowohl Deutsch ___ Türkisch.', ['als auch', 'sondern auch', 'noch', 'oder'], 0, 'Das Paar heißt sowohl … als auch.', 'The pair is sowohl … als auch.'],
      ['Ich habe weder Zeit ___ Lust.', ['noch', 'oder', 'als auch', 'aber'], 0, 'Das Paar heißt weder … noch.', 'The pair is weder … noch.'],
      ['Das Angebot ist nicht nur günstig, ___ auch schnell.', ['sondern', 'aber', 'als', 'noch'], 0, 'Nach nicht nur folgt sondern auch.', 'After nicht nur comes sondern auch.'],
      ['___ mehr ich übe, desto sicherer werde ich.', ['Je', 'Desto', 'So', 'Als'], 0, 'Der erste Teil des Paares ist je.', 'The first part of the pair is je.'],
      ['Je früher du anfängst, ___ leichter wird es.', ['desto', 'je', 'als', 'so'], 0, 'Der zweite Teil ist desto, gefolgt vom Komparativ.', 'The second part is desto, followed by the comparative.'],
      ['Wir fahren ___ heute oder gar nicht.', ['entweder', 'weder', 'sowohl', 'zwar'], 0, 'entweder … oder für die Wahl zwischen zwei Möglichkeiten.', 'entweder … oder for a choice between two options.'],
      ['Die Wohnung ist ___ klein, aber sehr hell.', ['zwar', 'weder', 'sowohl', 'entweder'], 0, 'zwar … aber räumt etwas ein und schränkt dann ein.', 'zwar … aber concedes a point and then qualifies it.'],
    ],
  },
];
