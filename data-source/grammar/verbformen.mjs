/**
 * Verb constructions that carry meaning rather than tense: passive, Konjunktiv
 * II, modals, reflexives and zu-infinitives.
 */
export const VERBFORMEN = [
  {
    key: 'passiv',
    icon: '\u{1F504}',
    title: { de: 'Passiv', en: 'The passive' },
    summary: {
      de: 'Wenn die Handlung zählt und nicht, wer sie macht - die Sprache der Ämter.',
      en: 'When the action matters and not who does it - the language of officialdom.',
    },
    body: {
      en: [
        'The passive is built with werden + Partizip II. The object of the active sentence becomes the subject: "Der Mechaniker repariert das Auto" becomes "Das Auto wird repariert."',
        'The tenses follow werden: Präsens wird repariert, Präteritum wurde repariert, Perfekt ist repariert worden. Note that the participle of werden in the passive is worden, not geworden.',
        'With a modal verb the pattern is modal + Partizip II + werden: "Das Formular muss ausgefüllt werden."',
        'If you do want to name the agent, use von + dative for a person and durch + accusative for a cause: "Der Antrag wurde von der Sachbearbeiterin geprüft", "Die Straße wurde durch den Sturm beschädigt."',
        'Where this pays off at B1: reading notices and official letters, which are written almost entirely in the passive, and writing your own formal email.',
      ],
      de: [
        'Das Passiv besteht aus werden + Partizip II. Das Objekt des Aktivsatzes wird zum Subjekt: "Der Mechaniker repariert das Auto" wird zu "Das Auto wird repariert."',
        'Die Zeiten laufen über werden: Präsens wird repariert, Präteritum wurde repariert, Perfekt ist repariert worden. Achtung: Das Partizip von werden heißt im Passiv worden, nicht geworden.',
        'Mit Modalverb lautet das Muster Modalverb + Partizip II + werden: "Das Formular muss ausgefüllt werden."',
        'Wer die handelnde Person doch nennen will, nimmt von + Dativ für Personen und durch + Akkusativ für Ursachen: "Der Antrag wurde von der Sachbearbeiterin geprüft", "Die Straße wurde durch den Sturm beschädigt."',
        'Der Nutzen auf B1: Aushänge und Behördenbriefe stehen fast durchgehend im Passiv - und deine eigene formelle Mail klingt damit sofort erwachsener.',
      ],
    },
    tables: [
      {
        caption: { de: 'Passiv in den Zeiten', en: 'The passive across tenses' },
        head: ['Zeit', 'Form', 'Beispiel'],
        rows: [
          ['Präsens', 'wird + Partizip II', 'Das Haus wird gebaut.'],
          ['Präteritum', 'wurde + Partizip II', 'Das Haus wurde gebaut.'],
          ['Perfekt', 'ist + Partizip II + worden', 'Das Haus ist gebaut worden.'],
          ['mit Modalverb', 'muss + Partizip II + werden', 'Das Haus muss gebaut werden.'],
        ],
      },
    ],
    examples: [
      { de: 'Die Unterlagen werden geprüft und Sie erhalten einen Bescheid.', en: 'The documents are being checked and you will receive a decision.' },
      { de: 'Der Termin wurde auf nächste Woche verschoben.', en: 'The appointment was postponed to next week.' },
      { de: 'Das Formular muss vollständig ausgefüllt werden.', en: 'The form must be filled in completely.' },
      { de: 'Die Wohnung ist letztes Jahr renoviert worden.', en: 'The flat was renovated last year.' },
    ],
    pitfalls: [
      {
        wrong: 'Die Wohnung ist renoviert geworden.',
        right: 'Die Wohnung ist renoviert worden.',
        why: {
          de: 'Im Passiv heißt das Partizip von werden worden, ohne ge-.',
          en: 'In the passive the participle of werden is worden, with no ge-.',
        },
      },
      {
        wrong: 'Das Formular muss ausgefüllt sein werden.',
        right: 'Das Formular muss ausgefüllt werden.',
        why: {
          de: 'Modalverb + Partizip II + werden - dazwischen kommt kein sein.',
          en: 'Modal + Partizip II + werden - no sein goes in between.',
        },
      },
    ],
    drills: [
      ['Das Formular ___ am Schalter abgegeben.', ['wird', 'ist', 'hat', 'wurde sein'], 0, 'Passiv Präsens: wird + Partizip II.', 'Present passive: wird + Partizip II.'],
      ['Die Straße ___ letztes Jahr gesperrt.', ['wurde', 'ist', 'hat', 'wird worden'], 0, 'Passiv Präteritum: wurde + Partizip II.', 'Past passive: wurde + Partizip II.'],
      ['Der Antrag ist schon bearbeitet ___.', ['worden', 'geworden', 'werden', 'gewesen'], 0, 'Im Perfekt Passiv steht worden, nicht geworden.', 'In the perfect passive it is worden, not geworden.'],
      ['Die Rechnung muss bis Freitag bezahlt ___.', ['werden', 'worden', 'wird', 'sein'], 0, 'Modalverb + Partizip II + Infinitiv werden.', 'Modal + Partizip II + the infinitive werden.'],
      ['Der Antrag wurde ___ der Sachbearbeiterin geprüft.', ['von', 'durch', 'mit', 'bei'], 0, 'Handelnde Personen stehen mit von + Dativ.', 'The acting person is introduced with von + dative.'],
      ['Das Dach wurde ___ den Sturm beschädigt.', ['durch', 'von', 'mit', 'für'], 0, 'Ursachen und Mittel stehen mit durch + Akkusativ.', 'Causes and means are introduced with durch + accusative.'],
      ['Hier ___ nicht geraucht.', ['wird', 'ist', 'hat', 'werden'], 0, 'Unpersönliches Passiv im Präsens: wird + Partizip II.', 'Impersonal passive in the present: wird + Partizip II.'],
      ['Die Ergebnisse ___ nächste Woche veröffentlicht.', ['werden', 'wird', 'sind', 'haben'], 0, 'Plural-Subjekt verlangt werden.', 'A plural subject requires werden.'],
    ],
  },

  {
    key: 'konjunktiv2',
    icon: '\u{1F91D}',
    title: { de: 'Konjunktiv II: höflich und hypothetisch', en: 'Konjunktiv II: polite and hypothetical' },
    summary: {
      de: 'würde, hätte, wäre, könnte - die Form, die Bitten freundlich macht.',
      en: 'würde, hätte, wäre, könnte - the form that makes a request friendly.',
    },
    body: {
      en: [
        'Konjunktiv II does two jobs: it makes requests polite, and it talks about things that are not real.',
        'For most verbs you build it with würde + Infinitiv: "Ich würde gern einen Termin vereinbaren." For a small group you use the real Konjunktiv II form instead, because würde sounds clumsy: wäre, hätte, könnte, müsste, sollte, dürfte, wüsste, gäbe.',
        'Politeness is the bread-and-butter use and it is worth marks in Schreiben Teil 3 and Sprechen: "Könnten Sie mir bitte helfen?" is a different register from "Helfen Sie mir."',
        'For the unreal past there is one form: hätte or wäre + Partizip II. "Wenn ich das gewusst hätte, wäre ich früher gekommen."',
        'In a wenn-clause the verb still goes to the end, and the main clause often starts with dann.',
      ],
      de: [
        'Der Konjunktiv II hat zwei Aufgaben: Er macht Bitten höflich, und er spricht über etwas, das nicht real ist.',
        'Bei den meisten Verben bildest du ihn mit würde + Infinitiv: "Ich würde gern einen Termin vereinbaren." Bei einer kleinen Gruppe nimmst du die echte Konjunktiv-II-Form, weil würde dort schwerfällig klingt: wäre, hätte, könnte, müsste, sollte, dürfte, wüsste, gäbe.',
        'Höflichkeit ist der Alltagsfall und bringt in Schreiben Teil 3 und im Sprechen Punkte: "Könnten Sie mir bitte helfen?" ist ein anderes Register als "Helfen Sie mir."',
        'Für die irreale Vergangenheit gibt es genau eine Form: hätte oder wäre + Partizip II. "Wenn ich das gewusst hätte, wäre ich früher gekommen."',
        'Im wenn-Satz steht das Verb weiterhin am Ende, und der Hauptsatz beginnt oft mit dann.',
      ],
    },
    tables: [
      {
        caption: { de: 'Die Formen, die man ohne würde bildet', en: 'The forms built without würde' },
        head: ['Verb', 'Konjunktiv II', 'Beispiel'],
        rows: [
          ['sein', 'wäre', 'Das wäre super.'],
          ['haben', 'hätte', 'Ich hätte eine Frage.'],
          ['können', 'könnte', 'Könnten Sie mir helfen?'],
          ['müssen', 'müsste', 'Ich müsste früher los.'],
          ['sollen', 'sollte', 'Du solltest dich melden.'],
          ['dürfen', 'dürfte', 'Dürfte ich kurz stören?'],
          ['werden', 'würde', 'Ich würde gern kommen.'],
          ['wissen', 'wüsste', 'Ich wüsste gern mehr.'],
        ],
      },
    ],
    examples: [
      { de: 'Könnten Sie mir bitte sagen, wo der Eingang ist?', en: 'Could you please tell me where the entrance is?' },
      { de: 'Ich hätte eine Bitte an Sie.', en: 'I have a request for you.' },
      { de: 'An deiner Stelle würde ich noch einmal anrufen.', en: 'In your place I would call again.' },
      { de: 'Wenn ich mehr Zeit hätte, würde ich einen Kurs machen.', en: 'If I had more time I would take a course.' },
      { de: 'Wenn ich das gewusst hätte, wäre ich nicht gekommen.', en: 'If I had known that I would not have come.' },
    ],
    pitfalls: [
      {
        wrong: 'Ich würde eine Frage haben.',
        right: 'Ich hätte eine Frage.',
        why: {
          de: 'Bei haben, sein und den Modalverben nimmt man die echte Form, nicht würde.',
          en: 'With haben, sein and the modals you use the real form, not würde.',
        },
      },
      {
        wrong: 'Wenn ich Zeit hätte, ich würde kommen.',
        right: 'Wenn ich Zeit hätte, würde ich kommen.',
        why: {
          de: 'Der wenn-Satz steht auf Position eins, also folgt das Verb direkt.',
          en: 'The wenn-clause fills position one, so the verb comes straight after.',
        },
      },
    ],
    drills: [
      ['___ Sie mir bitte kurz helfen?', ['Könnten', 'Konnten', 'Können würde', 'Hätten'], 0, 'Höfliche Bitte mit der Konjunktiv-II-Form von können.', 'A polite request with the Konjunktiv II form of können.'],
      ['Ich ___ gern einen Termin am Dienstag.', ['hätte', 'würde haben', 'habe', 'hatte'], 0, 'Bei haben nimmt man hätte statt würde haben.', 'With haben you use hätte rather than würde haben.'],
      ['Wenn ich mehr Zeit ___, würde ich einen Kurs besuchen.', ['hätte', 'habe', 'hatte', 'haben würde'], 0, 'Irreale Bedingung in der Gegenwart: hätte.', 'An unreal condition in the present: hätte.'],
      ['Das ___ wirklich nett von Ihnen.', ['wäre', 'würde sein', 'war', 'ist gewesen'], 0, 'Bei sein nimmt man wäre, nicht würde sein.', 'With sein you use wäre, not würde sein.'],
      ['An deiner Stelle ___ ich noch einmal nachfragen.', ['würde', 'werde', 'wurde', 'wäre'], 0, 'Ratschlag mit würde + Infinitiv.', 'Advice with würde + infinitive.'],
      ['Wenn ich das gewusst hätte, ___ ich früher gekommen.', ['wäre', 'hätte', 'würde', 'war'], 0, 'kommen nimmt sein, in der irrealen Vergangenheit also wäre + Partizip.', 'kommen takes sein, so the unreal past is wäre + participle.'],
      ['Du ___ dich unbedingt beim Amt melden.', ['solltest', 'sollst', 'wolltest', 'würdest sollen'], 0, 'Ratschlag mit der Konjunktiv-II-Form von sollen.', 'Advice with the Konjunktiv II form of sollen.'],
      ['___ ich Sie kurz stören?', ['Dürfte', 'Durfte', 'Würde dürfen', 'Darf würde'], 0, 'Sehr höfliche Bitte um Erlaubnis: dürfte.', 'A very polite request for permission: dürfte.'],
    ],
  },

  {
    key: 'modalverben',
    icon: '\u{1F511}',
    title: { de: 'Modalverben', en: 'Modal verbs' },
    summary: {
      de: 'Sechs Verben für Erlaubnis, Pflicht, Fähigkeit und Wunsch - plus nicht müssen.',
      en: 'Six verbs for permission, duty, ability and wish - plus the nicht müssen trap.',
    },
    body: {
      en: [
        'Modal verbs are conjugated and stand in position two; the main verb goes to the end as a bare infinitive: "Ich muss heute länger arbeiten."',
        'The core meanings: können ability or possibility, müssen necessity, dürfen permission, sollen an instruction from someone else, wollen intention, mögen or möchte liking and wanting.',
        'Two negations are regularly confused. nicht dürfen means must not, it is forbidden. nicht müssen means do not have to, it is not necessary. "Sie dürfen hier nicht parken" and "Sie müssen hier nicht parken" are opposites.',
        'In the past, modals use the Präteritum in speech as well: konnte, musste, wollte, durfte, sollte.',
        'sollen also reports someone else’s wish or instruction: "Ich soll mich beim Hausmeister melden" - somebody told me to.',
      ],
      de: [
        'Modalverben werden konjugiert und stehen auf Position zwei; das Hauptverb steht als reiner Infinitiv am Ende: "Ich muss heute länger arbeiten."',
        'Die Grundbedeutungen: können Fähigkeit oder Möglichkeit, müssen Notwendigkeit, dürfen Erlaubnis, sollen Auftrag von jemand anderem, wollen Absicht, mögen beziehungsweise möchte Vorliebe und Wunsch.',
        'Zwei Verneinungen werden ständig verwechselt. nicht dürfen heißt: es ist verboten. nicht müssen heißt: es ist nicht nötig. "Sie dürfen hier nicht parken" und "Sie müssen hier nicht parken" sind Gegenteile.',
        'In der Vergangenheit stehen Modalverben auch gesprochen im Präteritum: konnte, musste, wollte, durfte, sollte.',
        'sollen gibt außerdem den Auftrag oder Wunsch einer anderen Person wieder: "Ich soll mich beim Hausmeister melden" - jemand hat es mir gesagt.',
      ],
    },
    tables: [
      {
        caption: { de: 'Bedeutung und Verneinung', en: 'Meaning and negation' },
        head: ['Verb', 'Bedeutung', 'verneint'],
        rows: [
          ['können', 'Fähigkeit / Möglichkeit', 'nicht können = nicht in der Lage'],
          ['müssen', 'Notwendigkeit', 'nicht müssen = nicht nötig'],
          ['dürfen', 'Erlaubnis', 'nicht dürfen = verboten'],
          ['sollen', 'Auftrag von anderen', 'nicht sollen = man rät ab'],
          ['wollen', 'eigene Absicht', 'nicht wollen = keine Absicht'],
          ['möchten', 'höflicher Wunsch', 'nicht möchten = kein Wunsch'],
        ],
      },
    ],
    examples: [
      { de: 'Sie dürfen hier nicht parken, das ist eine Feuerwehrzufahrt.', en: 'You must not park here, this is a fire brigade access.' },
      { de: 'Sie müssen nicht warten, Sie bekommen den Bescheid per Post.', en: 'You do not have to wait, you will get the decision by post.' },
      { de: 'Ich soll Ihnen von Frau Weber Grüße ausrichten.', en: 'I am to pass on greetings to you from Ms Weber.' },
      { de: 'Als Kind konnte ich noch kein Deutsch.', en: 'As a child I could not speak German yet.' },
    ],
    pitfalls: [
      {
        wrong: 'Sie müssen hier nicht rauchen. (gemeint: verboten)',
        right: 'Sie dürfen hier nicht rauchen.',
        why: {
          de: 'nicht müssen heißt nur "nicht nötig". Ein Verbot verlangt nicht dürfen.',
          en: 'nicht müssen only means "not necessary". A prohibition needs nicht dürfen.',
        },
      },
      {
        wrong: 'Ich muss zu arbeiten.',
        right: 'Ich muss arbeiten.',
        why: {
          de: 'Nach einem Modalverb steht der reine Infinitiv ohne zu.',
          en: 'After a modal verb comes the bare infinitive, without zu.',
        },
      },
    ],
    drills: [
      ['Hier ist ein Kinderspielplatz. Sie ___ hier nicht rauchen.', ['dürfen', 'müssen', 'können', 'sollen'], 0, 'Ein Verbot wird mit nicht dürfen ausgedrückt.', 'A prohibition is expressed with nicht dürfen.'],
      ['Der Bescheid kommt per Post. Sie ___ nicht extra herkommen.', ['müssen', 'dürfen', 'sollen', 'wollen'], 0, 'nicht müssen heißt: es ist nicht nötig.', 'nicht müssen means: it is not necessary.'],
      ['Ich ___ mich laut Vermieter beim Hausmeister melden.', ['soll', 'will', 'darf', 'mag'], 0, 'sollen gibt den Auftrag einer anderen Person wieder.', 'sollen reports an instruction from someone else.'],
      ['Als Kind ___ ich noch nicht schwimmen.', ['konnte', 'könnte', 'habe gekonnt', 'kann'], 0, 'Modalverben stehen in der Vergangenheit im Präteritum.', 'Modal verbs go in the Präteritum in the past.'],
      ['___ ich Sie kurz etwas fragen?', ['Darf', 'Soll', 'Muss', 'Will'], 0, 'Um Erlaubnis bittet man mit dürfen.', 'You ask for permission with dürfen.'],
      ['Wir ___ am Samstag in die Berge fahren, wenn das Wetter passt.', ['wollen', 'sollen', 'dürfen', 'müssen'], 0, 'Eigene Absicht: wollen.', 'Your own intention: wollen.'],
      ['Sie ___ das Formular unterschreiben, sonst wird es nicht bearbeitet.', ['müssen', 'dürfen', 'mögen', 'können'], 0, 'Notwendigkeit mit Konsequenz: müssen.', 'A necessity with a consequence: müssen.'],
      ['Ich ___ bitte einen Kaffee mit Milch.', ['möchte', 'mag', 'will haben', 'muss'], 0, 'möchte ist die höfliche Form für einen Wunsch.', 'möchte is the polite form for a wish.'],
    ],
  },

  {
    key: 'infinitivsaetze',
    icon: '✒️',
    title: { de: 'Infinitiv mit zu, um … zu', en: 'Infinitive with zu, um … zu' },
    summary: {
      de: 'Zwei Sätze zu einem machen, wenn das Subjekt gleich bleibt.',
      en: 'Turning two sentences into one when the subject stays the same.',
    },
    body: {
      en: [
        'Many verbs and expressions are followed by an infinitive with zu: versuchen, vergessen, anfangen, aufhören, vorhaben, Lust haben, Zeit haben, es ist wichtig. The zu-infinitive goes at the end: "Ich habe vergessen, dich anzurufen."',
        'With a separable verb the zu slots inside: anrufen becomes anzurufen, aufstehen becomes aufzustehen.',
        'um … zu expresses purpose and is only possible when both halves share a subject: "Ich lerne jeden Tag, um die Prüfung zu bestehen." If the subjects differ you need damit: "Ich erkläre es noch einmal, damit alle es verstehen."',
        'Two more patterns worth having: ohne … zu ("Er ging, ohne sich zu verabschieden") and statt … zu ("Statt zu diskutieren, sollten wir handeln").',
        'No zu after modal verbs, and none after lassen, sehen, hören, gehen and bleiben: "Ich lasse das Auto reparieren."',
      ],
      de: [
        'Viele Verben und Ausdrücke verlangen einen Infinitiv mit zu: versuchen, vergessen, anfangen, aufhören, vorhaben, Lust haben, Zeit haben, es ist wichtig. Der zu-Infinitiv steht am Ende: "Ich habe vergessen, dich anzurufen."',
        'Bei trennbaren Verben rutscht das zu in die Mitte: anrufen wird zu anzurufen, aufstehen zu aufzustehen.',
        'um … zu nennt den Zweck und geht nur, wenn beide Teile dasselbe Subjekt haben: "Ich lerne jeden Tag, um die Prüfung zu bestehen." Bei verschiedenen Subjekten brauchst du damit: "Ich erkläre es noch einmal, damit alle es verstehen."',
        'Zwei weitere nützliche Muster: ohne … zu ("Er ging, ohne sich zu verabschieden") und statt … zu ("Statt zu diskutieren, sollten wir handeln").',
        'Kein zu nach Modalverben und keins nach lassen, sehen, hören, gehen und bleiben: "Ich lasse das Auto reparieren."',
      ],
    },
    tables: [
      {
        caption: { de: 'um … zu oder damit?', en: 'um … zu or damit?' },
        head: ['Subjekte', 'Form', 'Beispiel'],
        rows: [
          ['gleich', 'um … zu', 'Ich spare, um ein Auto zu kaufen.'],
          ['verschieden', 'damit', 'Ich spare, damit meine Tochter studieren kann.'],
        ],
      },
    ],
    examples: [
      { de: 'Ich habe vergessen, das Formular mitzubringen.', en: 'I forgot to bring the form.' },
      { de: 'Es ist wichtig, sich rechtzeitig anzumelden.', en: 'It is important to register in good time.' },
      { de: 'Sie fährt mit dem Rad, um Geld zu sparen.', en: 'She cycles in order to save money.' },
      { de: 'Er ging, ohne etwas zu sagen.', en: 'He left without saying anything.' },
    ],
    pitfalls: [
      {
        wrong: 'Ich habe vergessen, dich zu anrufen.',
        right: 'Ich habe vergessen, dich anzurufen.',
        why: {
          de: 'Bei trennbaren Verben steht das zu zwischen Vorsilbe und Stamm.',
          en: 'With separable verbs the zu goes between prefix and stem.',
        },
      },
      {
        wrong: 'Ich erkläre es noch einmal, um alle es verstehen.',
        right: 'Ich erkläre es noch einmal, damit alle es verstehen.',
        why: {
          de: 'Die Subjekte sind verschieden (ich / alle), also damit statt um … zu.',
          en: 'The subjects differ (ich / alle), so damit rather than um … zu.',
        },
      },
    ],
    drills: [
      ['Ich habe vergessen, dich ___.', ['anzurufen', 'zu anrufen', 'anrufen zu', 'anrufen'], 0, 'Trennbares Verb: das zu steht in der Mitte.', 'Separable verb: the zu goes in the middle.'],
      ['Ich fahre mit dem Rad, ___ Geld zu sparen.', ['um', 'damit', 'für', 'dass'], 0, 'Gleiches Subjekt und Zweck: um … zu.', 'Same subject and a purpose: um … zu.'],
      ['Ich spreche langsam, ___ mich alle verstehen.', ['damit', 'um', 'ohne', 'statt'], 0, 'Die Subjekte sind verschieden, also damit.', 'The subjects differ, so damit.'],
      ['Es ist wichtig, die Frist ___.', ['einzuhalten', 'zu einhalten', 'einhalten', 'einhalten zu'], 0, 'einhalten ist trennbar: ein-zu-halten.', 'einhalten is separable: ein-zu-halten.'],
      ['Er ging, ohne sich ___.', ['zu verabschieden', 'verabschieden zu', 'verabschieden', 'zu verabschiedet'], 0, 'ohne … zu verlangt den zu-Infinitiv am Ende.', 'ohne … zu requires the zu-infinitive at the end.'],
      ['Ich lasse das Auto morgen ___.', ['reparieren', 'zu reparieren', 'repariert', 'zu reparieren zu'], 0, 'Nach lassen steht der reine Infinitiv ohne zu.', 'After lassen comes the bare infinitive without zu.'],
      ['Hast du Lust, heute Abend ___?', ['essen zu gehen', 'zu essen gehen', 'essen gehen', 'zu essen zu gehen'], 0, 'Lust haben verlangt zu; bei essen gehen steht das zu vor gehen.', 'Lust haben requires zu; with essen gehen the zu goes before gehen.'],
      ['Statt ___, sollten wir handeln.', ['zu diskutieren', 'diskutieren zu', 'diskutieren', 'zu diskutiert'], 0, 'statt … zu bildet man wie ohne … zu.', 'statt … zu is formed like ohne … zu.'],
    ],
  },

  {
    key: 'reflexiv',
    icon: '\u{1FA9E}',
    title: { de: 'Reflexive Verben', en: 'Reflexive verbs' },
    summary: {
      de: 'sich freuen, sich melden, sich kümmern - und wann das Pronomen im Dativ steht.',
      en: 'sich freuen, sich melden, sich kümmern - and when the pronoun is dative.',
    },
    body: {
      en: [
        'A reflexive verb carries a pronoun that points back at the subject: ich freue mich, du freust dich, er freut sich. Only the third person has a special form, sich; the rest are the ordinary object pronouns.',
        'Most reflexive verbs take the accusative. The pronoun goes right after the conjugated verb in a main clause, or right after the subject in a subordinate clause: "… weil ich mich freue."',
        'The dative appears when there is already an accusative object in the sentence: "Ich wasche mich" but "Ich wasche mir die Hände". The only forms that differ are mir and dir.',
        'Many reflexive verbs come with a fixed preposition, which is where most mistakes happen: sich freuen auf, sich freuen über, sich interessieren für, sich kümmern um, sich erinnern an, sich bewerben um. Learn the verb and the preposition as one item.',
      ],
      de: [
        'Ein reflexives Verb trägt ein Pronomen, das auf das Subjekt zurückweist: ich freue mich, du freust dich, er freut sich. Nur die dritte Person hat mit sich eine eigene Form, der Rest sind die normalen Objektpronomen.',
        'Die meisten reflexiven Verben stehen mit dem Akkusativ. Das Pronomen folgt im Hauptsatz direkt auf das konjugierte Verb, im Nebensatz direkt auf das Subjekt: "… weil ich mich freue."',
        'Der Dativ kommt, wenn im Satz schon ein Akkusativobjekt steht: "Ich wasche mich", aber "Ich wasche mir die Hände". Unterschiedlich sind nur mir und dir.',
        'Viele reflexive Verben haben eine feste Präposition, und genau dort passieren die meisten Fehler: sich freuen auf, sich freuen über, sich interessieren für, sich kümmern um, sich erinnern an, sich bewerben um. Lerne Verb und Präposition als eine Einheit.',
      ],
    },
    tables: [
      {
        caption: { de: 'Reflexivpronomen', en: 'Reflexive pronouns' },
        head: ['Person', 'Akkusativ', 'Dativ'],
        rows: [
          ['ich', 'mich', 'mir'],
          ['du', 'dich', 'dir'],
          ['er / sie / es', 'sich', 'sich'],
          ['wir', 'uns', 'uns'],
          ['ihr', 'euch', 'euch'],
          ['sie / Sie', 'sich', 'sich'],
        ],
      },
    ],
    examples: [
      { de: 'Ich freue mich sehr auf das Wochenende.', en: 'I am really looking forward to the weekend.' },
      { de: 'Bitte melden Sie sich bis Freitag bei mir.', en: 'Please get in touch with me by Friday.' },
      { de: 'Ich kann mir die Regel einfach nicht merken.', en: 'I simply cannot remember the rule.' },
      { de: 'Wir haben uns im Integrationskurs kennengelernt.', en: 'We got to know each other in the integration course.' },
    ],
    pitfalls: [
      {
        wrong: 'Ich freue mich über das Wochenende.',
        right: 'Ich freue mich auf das Wochenende.',
        why: {
          de: 'auf zeigt nach vorn, über zurück: sich freuen auf etwas Kommendes.',
          en: 'auf points forwards, über backwards: sich freuen auf for something still to come.',
        },
      },
      {
        wrong: 'Ich wasche mich die Hände.',
        right: 'Ich wasche mir die Hände.',
        why: {
          de: 'die Hände ist schon Akkusativ, das Reflexivpronomen steht im Dativ.',
          en: 'die Hände is already accusative, so the reflexive pronoun is dative.',
        },
      },
    ],
    drills: [
      ['Ich freue ___ sehr auf deinen Besuch.', ['mich', 'mir', 'sich', 'dich'], 0, 'sich freuen steht mit dem Akkusativ: mich.', 'sich freuen takes the accusative: mich.'],
      ['Bitte melden Sie ___ bis Freitag.', ['sich', 'Ihnen', 'euch', 'ihn'], 0, 'Die Sie-Form des Reflexivpronomens ist sich.', 'The Sie-form of the reflexive pronoun is sich.'],
      ['Ich kann ___ den Namen einfach nicht merken.', ['mir', 'mich', 'sich', 'meiner'], 0, 'den Namen ist Akkusativ, also steht das Reflexivpronomen im Dativ.', 'den Namen is accusative, so the reflexive pronoun is dative.'],
      ['Er interessiert sich sehr ___ Geschichte.', ['für', 'auf', 'über', 'an'], 0, 'sich interessieren steht fest mit für.', 'sich interessieren goes with für.'],
      ['Wir haben ___ im Kurs kennengelernt.', ['uns', 'sich', 'euch', 'unser'], 0, 'wir-Form des Reflexivpronomens ist uns.', 'The wir-form of the reflexive pronoun is uns.'],
      ['Sie kümmert sich ___ ihre kranke Mutter.', ['um', 'für', 'an', 'über'], 0, 'sich kümmern steht fest mit um + Akkusativ.', 'sich kümmern goes with um + accusative.'],
      ['Ich ärgere mich ___ den Fehler im Formular.', ['über', 'auf', 'für', 'von'], 0, 'sich ärgern steht mit über + Akkusativ.', 'sich ärgern goes with über + accusative.'],
      ['Erinnerst du ___ noch an unseren ersten Tag?', ['dich', 'dir', 'sich', 'du'], 0, 'sich erinnern steht mit dem Akkusativ: dich.', 'sich erinnern takes the accusative: dich.'],
    ],
  },
];
