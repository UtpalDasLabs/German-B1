/**
 * Tenses. Everything here is about telling a story or reporting an event,
 * which is what Schreiben Teil 1 and Sprechen Teil 2 actually ask for.
 *
 * Drill rows are [prompt, options, answerIndex, whyDe, whyEn].
 */
export const ZEITEN = [
  {
    key: 'perfekt',
    icon: '\u{1F553}',
    title: { de: 'Perfekt: haben oder sein', en: 'The Perfekt: haben or sein' },
    summary: {
      de: 'Die normale Vergangenheit beim Sprechen. Die ganze Kunst ist das Hilfsverb.',
      en: 'The everyday past tense in speech. The whole trick is the auxiliary verb.',
    },
    body: {
      en: [
        'In spoken German the Perfekt does almost all the work of the past. It is built from a conjugated auxiliary - haben or sein - plus the Partizip II at the very end of the sentence: "Ich habe gestern lange gearbeitet."',
        'Most verbs take haben. You need sein for two groups: verbs of movement from A to B (gehen, fahren, fliegen, kommen, umziehen) and verbs of change of state (aufstehen, einschlafen, aufwachsen, sterben). Three more take sein for no reason you can derive: sein, bleiben and werden.',
        'The Partizip II of weak verbs is ge- + stem + -t (gemacht, gearbeitet). Strong verbs take ge- + stem + -en, often with a vowel change (gesprochen, gefahren). Verbs ending in -ieren and verbs with an inseparable prefix (be-, er-, ver-, ent-, ge-, zer-) take no ge- at all: studiert, bekommen, verstanden.',
        'Separable verbs put the ge- in the middle: aufstehen becomes aufgestanden, einkaufen becomes eingekauft.',
      ],
      de: [
        'Im gesprochenen Deutsch erledigt das Perfekt fast die ganze Vergangenheit. Es besteht aus einem konjugierten Hilfsverb - haben oder sein - und dem Partizip II ganz am Satzende: "Ich habe gestern lange gearbeitet."',
        'Die meisten Verben nehmen haben. sein brauchst du bei zwei Gruppen: Verben der Bewegung von A nach B (gehen, fahren, fliegen, kommen, umziehen) und Verben der Zustandsänderung (aufstehen, einschlafen, aufwachsen, sterben). Dazu kommen sein, bleiben und werden.',
        'Das Partizip II schwacher Verben ist ge- + Stamm + -t (gemacht, gearbeitet). Starke Verben bilden ge- + Stamm + -en, oft mit Vokalwechsel (gesprochen, gefahren). Verben auf -ieren und Verben mit untrennbarer Vorsilbe (be-, er-, ver-, ent-, ge-, zer-) bekommen kein ge-: studiert, bekommen, verstanden.',
        'Trennbare Verben setzen das ge- in die Mitte: aufstehen wird zu aufgestanden, einkaufen zu eingekauft.',
      ],
    },
    tables: [
      {
        caption: { de: 'Hilfsverb im Perfekt', en: 'Auxiliary in the Perfekt' },
        head: ['Gruppe', 'Hilfsverb', 'Beispiel'],
        rows: [
          ['die meisten Verben', 'haben', 'Ich habe gegessen.'],
          ['Bewegung A → B', 'sein', 'Ich bin nach Hause gegangen.'],
          ['Zustandsänderung', 'sein', 'Er ist eingeschlafen.'],
          ['sein, bleiben, werden', 'sein', 'Sie ist Ärztin geworden.'],
          ['reflexive Verben', 'haben', 'Wir haben uns getroffen.'],
        ],
      },
      {
        caption: { de: 'Partizip II bilden', en: 'Forming the Partizip II' },
        head: ['Verbtyp', 'Muster', 'Beispiel'],
        rows: [
          ['schwach', 'ge- + Stamm + -t', 'machen → gemacht'],
          ['stark', 'ge- + Stamm + -en', 'sprechen → gesprochen'],
          ['trennbar', 'Vorsilbe + ge- + …', 'anrufen → angerufen'],
          ['untrennbar', 'ohne ge-', 'verstehen → verstanden'],
          ['auf -ieren', 'ohne ge-', 'studieren → studiert'],
        ],
      },
    ],
    examples: [
      { de: 'Wir haben das Formular gestern abgeschickt.', en: 'We sent the form off yesterday.' },
      { de: 'Sie ist letzte Woche nach Bremen umgezogen.', en: 'She moved to Bremen last week.' },
      { de: 'Ich bin um sechs aufgewacht und konnte nicht mehr einschlafen.', en: 'I woke up at six and could not get back to sleep.' },
      { de: 'Hast du dich schon für den Kurs angemeldet?', en: 'Have you already registered for the course?' },
    ],
    pitfalls: [
      {
        wrong: 'Ich habe nach Hause gegangen.',
        right: 'Ich bin nach Hause gegangen.',
        why: {
          de: 'gehen ist eine Bewegung von A nach B und nimmt deshalb sein.',
          en: 'gehen is movement from A to B, so it takes sein.',
        },
      },
      {
        wrong: 'Ich habe studiert Medizin.',
        right: 'Ich habe Medizin studiert.',
        why: {
          de: 'Das Partizip II steht immer ganz am Ende des Satzes.',
          en: 'The Partizip II always stands at the very end of the sentence.',
        },
      },
      {
        wrong: 'Er hat mich angeget rufen.',
        right: 'Er hat mich angerufen.',
        why: {
          de: 'Bei trennbaren Verben steht das ge- zwischen Vorsilbe und Stamm: an-ge-rufen.',
          en: 'With separable verbs the ge- goes between prefix and stem: an-ge-rufen.',
        },
      },
    ],
    drills: [
      ['Gestern ___ ich mit dem Zug nach Hamburg gefahren.', ['bin', 'habe', 'war', 'hatte'], 0, 'fahren ist eine Bewegung von A nach B: Perfekt mit sein.', 'fahren is movement from A to B, so the Perfekt uses sein.'],
      ['Wir ___ den ganzen Tag gearbeitet.', ['haben', 'sind', 'waren', 'werden'], 0, 'arbeiten ist keine Bewegung und keine Zustandsänderung: Perfekt mit haben.', 'arbeiten is neither movement nor change of state, so the Perfekt uses haben.'],
      ['Sie hat mich gestern ___.', ['angerufen', 'geanrufen', 'anrufen', 'angeruft'], 0, 'anrufen ist trennbar und stark: an + ge + rufen = angerufen.', 'anrufen is separable and strong: an + ge + rufen = angerufen.'],
      ['Ich habe drei Jahre in Köln ___.', ['studiert', 'gestudiert', 'studieren', 'gestudiere'], 0, 'Verben auf -ieren bilden das Partizip ohne ge-.', 'Verbs ending in -ieren form the participle without ge-.'],
      ['Der Vertrag ___ gestern angekommen.', ['ist', 'hat', 'war', 'wird'], 0, 'ankommen ist eine Bewegung an ein Ziel: Perfekt mit sein.', 'ankommen is movement to a destination, so the Perfekt uses sein.'],
      ['Nach dem Umzug ___ wir eine Woche lang nichts gefunden.', ['haben', 'sind', 'waren', 'hatten'], 0, 'finden nimmt haben; sind wäre nur bei Bewegung oder Zustandsänderung richtig.', 'finden takes haben; sind would only be right for movement or change of state.'],
      ['Er ___ letztes Jahr Vater geworden.', ['ist', 'hat', 'wurde', 'war'], 0, 'werden gehört zu den drei Verben, die immer sein nehmen.', 'werden is one of the three verbs that always take sein.'],
      ['Wir haben uns im Sprachkurs ___.', ['kennengelernt', 'kennenlernt', 'gekennenlernt', 'kennengelernen'], 0, 'kennenlernen ist trennbar: kennen + ge + lernt.', 'kennenlernen is separable: kennen + ge + lernt.'],
      ['Ich ___ den Termin leider vergessen.', ['habe', 'bin', 'war', 'hatte'], 0, 'vergessen ist untrennbar und nimmt haben; das Partizip hat kein ge-.', 'vergessen is inseparable and takes haben; the participle has no ge-.'],
      ['Wie lange ___ ihr in der Schlange gestanden?', ['habt', 'seid', 'wart', 'hattet'], 0, 'stehen beschreibt keinen Ortswechsel: im Hochdeutschen mit haben.', 'stehen describes no change of place, so standard German uses haben.'],
    ],
  },

  {
    key: 'praeteritum',
    icon: '\u{1F4DC}',
    title: { de: 'Präteritum: die Erzählzeit', en: 'Präteritum: the narrative past' },
    summary: {
      de: 'Die Schriftvergangenheit - plus die sechs Verben, die auch gesprochen so gehen.',
      en: 'The written past - plus the six verbs that use it in speech too.',
    },
    body: {
      en: [
        'The Präteritum is the past tense of written German: newspapers, reports, stories. In conversation most verbs use the Perfekt instead - but not all of them.',
        'sein, haben and the modal verbs are used in the Präteritum even when speaking, because "ich bin gewesen" and "ich habe gemusst" sound heavy. So: war, hatte, konnte, musste, wollte, durfte, sollte, mochte. Learn these six as the everyday exception.',
        'Weak verbs form the Präteritum with -te-: machen, machte, machtest, machte, machten. Strong verbs change the stem vowel and take no ending in the ich and er/sie/es forms: gehen, ich ging, er ging.',
        'For the B1 exam this matters twice over: you need to recognise it when reading, and you need war/hatte/konnte confidently when telling a story.',
      ],
      de: [
        'Das Präteritum ist die Vergangenheit der geschriebenen Sprache: Zeitung, Bericht, Erzählung. Im Gespräch benutzen die meisten Verben stattdessen das Perfekt - aber nicht alle.',
        'sein, haben und die Modalverben stehen auch beim Sprechen im Präteritum, weil "ich bin gewesen" und "ich habe gemusst" schwerfällig klingen. Also: war, hatte, konnte, musste, wollte, durfte, sollte, mochte. Lerne diese Gruppe als Alltagsausnahme.',
        'Schwache Verben bilden das Präteritum mit -te-: machen, machte, machtest, machte, machten. Starke Verben wechseln den Stammvokal und haben in der ich- und er/sie/es-Form keine Endung: gehen, ich ging, er ging.',
        'Für die B1-Prüfung zählt das doppelt: beim Lesen musst du es erkennen, beim Erzählen brauchst du war, hatte und konnte sicher.',
      ],
    },
    tables: [
      {
        caption: { de: 'Die wichtigsten Präteritumformen', en: 'The most important Präteritum forms' },
        head: ['Infinitiv', 'ich / er, sie, es', 'wir / sie'],
        rows: [
          ['sein', 'war', 'waren'],
          ['haben', 'hatte', 'hatten'],
          ['können', 'konnte', 'konnten'],
          ['müssen', 'musste', 'mussten'],
          ['wollen', 'wollte', 'wollten'],
          ['dürfen', 'durfte', 'durften'],
          ['werden', 'wurde', 'wurden'],
          ['gehen', 'ging', 'gingen'],
          ['kommen', 'kam', 'kamen'],
          ['geben', 'gab', 'gaben'],
        ],
      },
    ],
    examples: [
      { de: 'Als ich klein war, wohnten wir auf dem Land.', en: 'When I was little we lived in the countryside.' },
      { de: 'Ich musste den Termin leider absagen.', en: 'Unfortunately I had to cancel the appointment.' },
      { de: 'Die Stadt beschloss, die Straße zu sperren.', en: 'The city decided to close the road.' },
      { de: 'Es gab damals noch kein Internet.', en: 'Back then there was no internet yet.' },
    ],
    pitfalls: [
      {
        wrong: 'Ich habe gestern krank gewesen.',
        right: 'Ich war gestern krank.',
        why: {
          de: 'Bei sein benutzt man auch gesprochen das Präteritum: war.',
          en: 'With sein, even spoken German uses the Präteritum: war.',
        },
      },
      {
        wrong: 'Ich habe gestern arbeiten gemusst.',
        right: 'Ich musste gestern arbeiten.',
        why: {
          de: 'Modalverben stehen in der Vergangenheit fast immer im Präteritum.',
          en: 'Modal verbs are almost always in the Präteritum in the past.',
        },
      },
    ],
    drills: [
      ['Als ich klein ___, wohnten wir in Izmir.', ['war', 'bin gewesen', 'wäre', 'bin'], 0, 'sein steht in der Vergangenheit im Präteritum: war.', 'sein goes in the Präteritum in the past: war.'],
      ['Ich ___ gestern leider länger arbeiten.', ['musste', 'habe gemusst', 'muss', 'müsste'], 0, 'Modalverben nimmt man in der Vergangenheit im Präteritum.', 'Modal verbs go in the Präteritum in the past.'],
      ['Damals ___ es hier noch keine Straßenbahn.', ['gab', 'gibt', 'hat gegeben', 'gäbe'], 0, 'es gab ist die Präteritumform von es gibt.', 'es gab is the Präteritum of es gibt.'],
      ['Wir ___ 2019 nach Deutschland.', ['kamen', 'kommen', 'kämen', 'gekommen'], 0, 'kommen ist stark: ich kam, wir kamen.', 'kommen is strong: ich kam, wir kamen.'],
      ['Die Firma ___ im Frühjahr zwanzig Leute ein.', ['stellte', 'stellt', 'gestellt', 'stellen'], 0, 'einstellen ist schwach und trennbar: stellte … ein.', 'einstellen is weak and separable: stellte … ein.'],
      ['Er ___ keine Zeit, sich zu melden.', ['hatte', 'hat gehabt', 'hätte', 'haben'], 0, 'haben benutzt man in der Vergangenheit meist im Präteritum: hatte.', 'haben mostly uses the Präteritum in the past: hatte.'],
      ['Sie ___ erst mit dreißig Deutsch zu lernen.', ['begann', 'beginnt', 'begonnen', 'begänne'], 0, 'beginnen ist stark: ich begann, wir begannen.', 'beginnen is strong: ich begann, wir begannen.'],
      ['Der Bericht ___, dass die Mieten stark gestiegen sind.', ['zeigte', 'zeigt hat', 'gezeigt', 'zeigen'], 0, 'In einem Bericht steht die Vergangenheit im Präteritum: zeigte.', 'In a report the past goes in the Präteritum: zeigte.'],
    ],
  },

  {
    key: 'plusquamperfekt',
    icon: '⏪',
    title: { de: 'Plusquamperfekt und nachdem', en: 'Plusquamperfekt and nachdem' },
    summary: {
      de: 'Die Vorvergangenheit: was schon vorher passiert war.',
      en: 'The past before the past: what had already happened first.',
    },
    body: {
      en: [
        'The Plusquamperfekt says that one past event happened before another past event. It is the Perfekt with the auxiliary in the Präteritum: hatte gemacht, war gefahren.',
        'You will meet it most often with nachdem. The rule of thumb is a step down in tense: nachdem + Plusquamperfekt in the subordinate clause, Präteritum or Perfekt in the main clause. "Nachdem ich gegessen hatte, ging ich los."',
        'The other way round, bevor works with the same tense in both halves: "Bevor ich losging, aß ich noch etwas."',
        'At B1 you do not have to use it constantly. You do have to recognise it when reading, and one well-placed nachdem sentence in Schreiben Teil 1 shows a level of control that a chain of und-sentences does not.',
      ],
      de: [
        'Das Plusquamperfekt sagt, dass ein Ereignis vor einem anderen Ereignis in der Vergangenheit passiert ist. Es ist das Perfekt mit dem Hilfsverb im Präteritum: hatte gemacht, war gefahren.',
        'Am häufigsten triffst du es mit nachdem. Die Faustregel ist ein Zeitensprung: nachdem + Plusquamperfekt im Nebensatz, Präteritum oder Perfekt im Hauptsatz. "Nachdem ich gegessen hatte, ging ich los."',
        'Umgekehrt steht bei bevor in beiden Teilen dieselbe Zeit: "Bevor ich losging, aß ich noch etwas."',
        'Auf B1 musst du es nicht ständig benutzen. Du musst es beim Lesen erkennen - und ein gut gesetzter nachdem-Satz im Schreiben Teil 1 zeigt mehr Können als eine Kette von und-Sätzen.',
      ],
    },
    tables: [
      {
        caption: { de: 'Zeitensprung mit nachdem', en: 'The tense step with nachdem' },
        head: ['Nebensatz (zuerst)', 'Hauptsatz (danach)'],
        rows: [
          ['Nachdem ich gegessen hatte,', 'ging ich los.'],
          ['Nachdem sie umgezogen war,', 'suchte sie eine Arbeit.'],
          ['Nachdem wir den Vertrag gelesen hatten,', 'haben wir unterschrieben.'],
        ],
      },
    ],
    examples: [
      { de: 'Nachdem er sich angemeldet hatte, bekam er die Steuer-ID.', en: 'After he had registered, he received his tax ID.' },
      { de: 'Wir waren schon eingezogen, als der Vermieter anrief.', en: 'We had already moved in when the landlord called.' },
      { de: 'Sie hatte den Kurs abgeschlossen, bevor sie zu arbeiten anfing.', en: 'She had finished the course before she started working.' },
    ],
    pitfalls: [
      {
        wrong: 'Nachdem ich gegessen habe, ging ich los.',
        right: 'Nachdem ich gegessen hatte, ging ich los.',
        why: {
          de: 'Nach nachdem steht die frühere Zeit: Plusquamperfekt, nicht Perfekt.',
          en: 'After nachdem the earlier tense is used: Plusquamperfekt, not Perfekt.',
        },
      },
      {
        wrong: 'Bevor ich losgegangen war, aß ich.',
        right: 'Bevor ich losging, aß ich.',
        why: {
          de: 'bevor braucht keinen Zeitensprung - beide Teile stehen in derselben Zeit.',
          en: 'bevor needs no tense step - both halves stay in the same tense.',
        },
      },
    ],
    drills: [
      ['Nachdem wir die Wohnung besichtigt ___, haben wir sofort zugesagt.', ['hatten', 'haben', 'sind', 'waren'], 0, 'nachdem verlangt die frühere Zeit: Plusquamperfekt mit hatten.', 'nachdem requires the earlier tense: Plusquamperfekt with hatten.'],
      ['Nachdem sie nach Berlin gezogen ___, fand sie schnell Arbeit.', ['war', 'hatte', 'ist', 'hat'], 0, 'ziehen im Sinn von umziehen nimmt sein: war gezogen.', 'ziehen in the sense of moving takes sein: war gezogen.'],
      ['___ ich das Formular abgeschickt hatte, fiel mir der Fehler auf.', ['Nachdem', 'Bevor', 'Während', 'Seit'], 0, 'Das Plusquamperfekt im Nebensatz zeigt: dieses Ereignis war zuerst - also nachdem.', 'The Plusquamperfekt in the subordinate clause shows this event came first, so nachdem.'],
      ['Bevor ich zum Amt ___, habe ich alle Unterlagen kopiert.', ['ging', 'gegangen war', 'gehe', 'gehen würde'], 0, 'Nach bevor steht dieselbe Zeit wie im Hauptsatz, kein Plusquamperfekt.', 'After bevor the same tense as the main clause is used, not the Plusquamperfekt.'],
      ['Als der Bus endlich kam, ___ wir schon eine Stunde gewartet.', ['hatten', 'haben', 'waren', 'sind'], 0, 'Das Warten lag vor dem Kommen des Busses: Plusquamperfekt.', 'The waiting came before the bus arrived: Plusquamperfekt.'],
      ['Nachdem der Arzt mich untersucht ___, bekam ich ein Rezept.', ['hatte', 'war', 'ist', 'hat'], 0, 'untersuchen nimmt haben, und nachdem verlangt das Plusquamperfekt.', 'untersuchen takes haben, and nachdem requires the Plusquamperfekt.'],
    ],
  },

  {
    key: 'futur',
    icon: '\u{1F52E}',
    title: { de: 'Zukunft und Vermutung', en: 'Future and assumption' },
    summary: {
      de: 'Präsens reicht meistens. Futur I brauchst du für Vermutungen und Versprechen.',
      en: 'The present is usually enough. Futur I is for assumptions and promises.',
    },
    body: {
      en: [
        'German normally expresses the future with the present tense plus a time word: "Morgen fahre ich nach Köln." That is not lazy German, it is the standard.',
        'Futur I is werden + Infinitiv. You reach for it in three cases: a promise or firm intention ("Ich werde mich darum kümmern"), a prediction about something outside your control ("Es wird regnen"), and above all an assumption about the present.',
        'That last use catches learners out. "Er wird schon zu Hause sein" does not mean he will be home later - it means he is probably home now. Add wohl or wahrscheinlich and the guess becomes explicit.',
        'Futur II (werden + Partizip II + haben/sein) exists but is rare; you do not need to produce it at B1.',
      ],
      de: [
        'Deutsch drückt die Zukunft normalerweise mit Präsens und einer Zeitangabe aus: "Morgen fahre ich nach Köln." Das ist kein schlampiges Deutsch, sondern der Normalfall.',
        'Futur I ist werden + Infinitiv. Du brauchst es in drei Fällen: Versprechen oder feste Absicht ("Ich werde mich darum kümmern"), Prognose über etwas, das du nicht steuerst ("Es wird regnen"), und vor allem für Vermutungen über die Gegenwart.',
        'Der letzte Fall ist die Falle. "Er wird schon zu Hause sein" heißt nicht, dass er später zu Hause ist - es heißt, dass er wahrscheinlich jetzt zu Hause ist. Mit wohl oder wahrscheinlich wird die Vermutung deutlich.',
        'Futur II (werden + Partizip II + haben/sein) gibt es, ist aber selten; auf B1 musst du es nicht aktiv benutzen.',
      ],
    },
    tables: [
      {
        caption: { de: 'Wann welche Form?', en: 'Which form when?' },
        head: ['Situation', 'Form', 'Beispiel'],
        rows: [
          ['fester Plan', 'Präsens + Zeitangabe', 'Nächste Woche ziehe ich um.'],
          ['Versprechen', 'Futur I', 'Ich werde dich anrufen.'],
          ['Prognose', 'Futur I', 'Die Preise werden steigen.'],
          ['Vermutung (Gegenwart)', 'Futur I + wohl', 'Sie wird wohl im Stau stehen.'],
        ],
      },
    ],
    examples: [
      { de: 'Ich werde mich um die Anmeldung kümmern, versprochen.', en: 'I will take care of the registration, I promise.' },
      { de: 'Am Wochenende besuchen wir meine Schwester.', en: 'At the weekend we are visiting my sister.' },
      { de: 'Der Chef wird wohl noch in der Besprechung sein.', en: 'The boss is probably still in the meeting.' },
    ],
    pitfalls: [
      {
        wrong: 'Ich werde morgen zum Arzt gehen werden.',
        right: 'Ich gehe morgen zum Arzt.',
        why: {
          de: 'Bei einem festen Termin reicht das Präsens völlig aus.',
          en: 'For a fixed appointment the present tense is entirely enough.',
        },
      },
    ],
    drills: [
      ['Keine Sorge, ich ___ mich darum kümmern.', ['werde', 'wurde', 'würde', 'bin'], 0, 'Ein Versprechen steht im Futur I: werden + Infinitiv.', 'A promise goes in Futur I: werden + infinitive.'],
      ['Nächsten Montag ___ ich meinen neuen Job.', ['beginne', 'werde begonnen', 'begann', 'hätte begonnen'], 0, 'Fester Plan mit Zeitangabe: Präsens genügt.', 'A fixed plan with a time expression: the present is enough.'],
      ['Wo ist Ali? – Er ___ wohl noch im Stau stehen.', ['wird', 'würde', 'wurde', 'ist'], 0, 'Futur I mit wohl drückt eine Vermutung über die Gegenwart aus.', 'Futur I with wohl expresses an assumption about the present.'],
      ['Die Mieten ___ auch nächstes Jahr weiter steigen.', ['werden', 'wurden', 'würden', 'sind'], 0, 'Prognose über die Zukunft: Futur I mit werden.', 'A prediction about the future: Futur I with werden.'],
      ['___ du mir bitte Bescheid geben, wenn du ankommst?', ['Wirst', 'Wurdest', 'Bist', 'Hast'], 0, 'werden + Infinitiv, hier als höfliche Bitte um ein Versprechen.', 'werden + infinitive, here a polite request for a commitment.'],
    ],
  },
];
