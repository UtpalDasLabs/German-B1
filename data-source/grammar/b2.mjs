/**
 * B2 grammar: the structures that let you write at a distance from yourself.
 *
 * B1 is about saying what you think and why. B2 is about reporting what someone
 * else said without endorsing it, packing a clause into a phrase, saying what
 * would have happened, and sounding like a person rather than a textbook. All
 * six topics here do one of those four things.
 *
 * Drill rows are [prompt, options, answerIndex, whyDe, whyEn].
 */
export const B2_GRAMMAR = [
  {
    key: 'konjunktiv1',
    level: 'B2',
    icon: '\u{1F5EF}️',
    title: { de: 'Konjunktiv I: indirekte Rede', en: 'Konjunktiv I: reported speech' },
    summary: {
      de: 'Berichten, was jemand gesagt hat, ohne es selbst zu behaupten.',
      en: 'Reporting what someone said without claiming it yourself.',
    },
    body: {
      en: [
        'Konjunktiv I is the form German uses to report someone else’s words while staying neutral about whether they are true. "Der Minister sagt, die Zahlen seien korrekt" says the minister claims it; "sind korrekt" would say the writer agrees.',
        'It is built from the infinitive stem plus -e, -est, -e, -en, -et, -en. In practice only the er/sie/es form is distinctive - er sage, er habe, er komme - because the others are identical to the present tense.',
        'When the Konjunktiv I form would look like the present tense, German switches to Konjunktiv II instead: "sie haben" would be ambiguous, so you write "sie hätten". This is not sloppiness; it is the rule.',
        'sein is the exception that is worth learning whole, because it is irregular and distinctive in every person: ich sei, du seist, er sei, wir seien, ihr seiet, sie seien.',
        'You meet this form constantly in journalism and almost never in conversation, where "Er hat gesagt, dass …" does the job. Recognising it reliably matters more than producing it.',
      ],
      de: [
        'Der Konjunktiv I berichtet fremde Worte, ohne sich sie zu eigen zu machen. "Der Minister sagt, die Zahlen seien korrekt" heißt: er behauptet es. "sind korrekt" hieße: der Schreiber stimmt zu.',
        'Gebildet wird er aus dem Infinitivstamm plus -e, -est, -e, -en, -et, -en. Deutlich ist praktisch nur die er/sie/es-Form - er sage, er habe, er komme -, weil die übrigen mit dem Präsens zusammenfallen.',
        'Wäre die Form mit dem Präsens identisch, weicht man auf den Konjunktiv II aus: statt "sie haben" schreibt man "sie hätten". Das ist die Regel, keine Nachlässigkeit.',
        'sein ist die Ausnahme, die man ganz lernt: ich sei, du seist, er sei, wir seien, ihr seiet, sie seien.',
        'In Zeitungstexten begegnet die Form ständig, im Gespräch fast nie - dort genügt "Er hat gesagt, dass …". Sicher erkennen ist wichtiger als selbst bilden.',
      ],
    },
    tables: [
      {
        caption: { de: 'Konjunktiv I', en: 'Konjunktiv I' },
        head: ['Person', 'sein', 'haben', 'kommen'],
        rows: [
          ['ich', 'sei', 'hätte*', 'käme*'],
          ['er / sie / es', 'sei', 'habe', 'komme'],
          ['sie (Plural)', 'seien', 'hätten*', 'kämen*'],
        ],
      },
      {
        caption: { de: 'Direkt und indirekt', en: 'Direct and reported' },
        head: ['direkte Rede', 'indirekte Rede'],
        rows: [
          ['"Ich bin müde."', 'Er sagt, er sei müde.'],
          ['"Ich habe keine Zeit."', 'Sie sagt, sie habe keine Zeit.'],
          ['"Wir kommen später."', 'Sie sagen, sie kämen später.'],
          ['"Ich habe das gelesen."', 'Er sagt, er habe das gelesen.'],
        ],
      },
    ],
    examples: [
      { de: 'Die Sprecherin erklärte, der Termin stehe noch nicht fest.', en: 'The spokeswoman explained that the date was not yet fixed.' },
      { de: 'Er behauptet, er habe davon nichts gewusst.', en: 'He claims he knew nothing about it.' },
      { de: 'Laut Bericht seien die Kosten gestiegen.', en: 'According to the report, the costs have risen.' },
    ],
    pitfalls: [
      {
        wrong: 'Er sagt, er ist krank.',
        right: 'Er sagt, er sei krank.',
        why: {
          de: 'Mit "ist" übernimmt der Schreiber die Aussage. Der Konjunktiv I hält Distanz.',
          en: 'With "ist" the writer adopts the claim. Konjunktiv I keeps a distance.',
        },
      },
      {
        wrong: 'Sie sagen, sie haben keine Zeit.',
        right: 'Sie sagen, sie hätten keine Zeit.',
        why: {
          de: 'Die Konjunktiv-I-Form wäre mit dem Präsens identisch, also weicht man auf den Konjunktiv II aus.',
          en: 'The Konjunktiv I form would be identical to the present, so you switch to Konjunktiv II.',
        },
      },
    ],
    drills: [
      ['Er sagt, er ___ heute keine Zeit.', ['habe', 'hat', 'hätte', 'haben'], 0, 'er-Form im Konjunktiv I: habe.', 'The er form in Konjunktiv I: habe.'],
      ['Sie erklärte, das Problem ___ gelöst.', ['sei', 'ist', 'wäre', 'sein'], 0, 'sein im Konjunktiv I, er/sie/es: sei.', 'sein in Konjunktiv I, er/sie/es: sei.'],
      ['Die Gäste sagten, sie ___ später.', ['kämen', 'kommen', 'kommten', 'käme'], 0, 'Die Pluralform fiele mit dem Präsens zusammen, also Konjunktiv II.', 'The plural would match the present, so Konjunktiv II.'],
      ['Er behauptet, er ___ nichts gewusst.', ['habe', 'hat', 'hatte', 'hätte'], 0, 'Vergangenheit in indirekter Rede: habe + Partizip.', 'Past in reported speech: habe plus participle.'],
      ['Laut der Firma ___ die Lieferung unterwegs.', ['sei', 'ist', 'wäre', 'war'], 0, '"Laut" leitet fremde Rede ein, also Konjunktiv I.', '"Laut" introduces someone else’s words, so Konjunktiv I.'],
      ['Sie sagt, sie ___ morgen an.', ['rufe', 'ruft', 'riefe', 'rufen'], 0, 'rufen, er/sie/es: rufe … an.', 'rufen, er/sie/es: rufe … an.'],
    ],
  },

  {
    key: 'irreal',
    level: 'B2',
    icon: '\u{1F504}',
    title: { de: 'Konjunktiv II der Vergangenheit', en: 'Konjunktiv II in the past' },
    summary: {
      de: 'Was gewesen wäre: hätte gemacht, wäre gekommen, hätte kommen können.',
      en: 'What would have been: hätte gemacht, wäre gekommen, hätte kommen können.',
    },
    body: {
      en: [
        'B1 gets you "Ich würde das machen". B2 needs "Ich hätte das gemacht" - the thing you would have done but did not, which is the tense regret and criticism live in.',
        'The form is simple: hätte or wäre plus the Partizip II. Which auxiliary follows exactly the same rule as the Perfekt: "Ich habe gemacht" → "Ich hätte gemacht"; "Ich bin gekommen" → "Ich wäre gekommen".',
        'With a modal verb it gets its own shape, and this one has to be learnt rather than derived: hätte + infinitive + modal infinitive. "Ich hätte früher kommen können." Not "gekonnt" - the double infinitive is what the construction looks like.',
        'wenn-clauses drop the wenn and invert in careful writing: "Hätte ich das gewusst, wäre ich gekommen" is the same as "Wenn ich das gewusst hätte, wäre ich gekommen" and sounds better.',
        'beinahe and fast go with this tense to say something nearly happened: "Ich wäre beinahe gestürzt." You did not fall.',
      ],
      de: [
        'Auf B1 reicht "Ich würde das machen". B2 braucht "Ich hätte das gemacht" - das, was man getan hätte, aber nicht getan hat. In dieser Form stecken Bedauern und Kritik.',
        'Die Form ist einfach: hätte oder wäre plus Partizip II. Welches Hilfsverb, entscheidet genau dieselbe Regel wie beim Perfekt: "Ich habe gemacht" → "Ich hätte gemacht"; "Ich bin gekommen" → "Ich wäre gekommen".',
        'Mit Modalverb hat die Konstruktion eine eigene Gestalt, die man lernen muss: hätte + Infinitiv + Modalinfinitiv. "Ich hätte früher kommen können." Nicht "gekonnt".',
        'Im gepflegten Schriftdeutsch fällt das wenn weg, und der Satz beginnt mit dem Verb: "Hätte ich das gewusst, wäre ich gekommen."',
        'beinahe und fast gehören zu dieser Zeitform: "Ich wäre beinahe gestürzt." Gestürzt ist man nicht.',
      ],
    },
    tables: [
      {
        caption: { de: 'Gegenwart und Vergangenheit', en: 'Present and past' },
        head: ['Zeit', 'Form', 'Beispiel'],
        rows: [
          ['Gegenwart', 'würde + Infinitiv', 'Ich würde das machen.'],
          ['Gegenwart (sein/haben)', 'wäre / hätte', 'Ich wäre froh. / Ich hätte Zeit.'],
          ['Vergangenheit', 'hätte + Partizip II', 'Ich hätte das gemacht.'],
          ['Vergangenheit (Bewegung)', 'wäre + Partizip II', 'Ich wäre gekommen.'],
          ['mit Modalverb', 'hätte + Inf. + Modalinf.', 'Ich hätte kommen können.'],
        ],
      },
    ],
    examples: [
      { de: 'Wenn ich das gewusst hätte, hätte ich dir geschrieben.', en: 'If I had known, I would have written to you.' },
      { de: 'Du hättest mich ruhig anrufen können.', en: 'You could perfectly well have called me.' },
      { de: 'Ohne den Stau wären wir pünktlich gewesen.', en: 'Without the traffic jam we would have been on time.' },
      { de: 'Das hätte auch schiefgehen können.', en: 'That could have gone wrong too.' },
    ],
    pitfalls: [
      {
        wrong: 'Ich hätte früher kommen gekonnt.',
        right: 'Ich hätte früher kommen können.',
        why: {
          de: 'Mit Modalverb steht der Infinitiv, nicht das Partizip: der doppelte Infinitiv.',
          en: 'With a modal the infinitive is used, not the participle: the double infinitive.',
        },
      },
      {
        wrong: 'Wenn ich Zeit hätte, wäre ich gekommen.',
        right: 'Wenn ich Zeit gehabt hätte, wäre ich gekommen.',
        why: {
          de: 'Beide Hälften müssen in derselben Zeit stehen, wenn beides vorbei ist.',
          en: 'Both halves have to be in the same tense when both are in the past.',
        },
      },
      {
        wrong: 'Ich würde das gemacht haben.',
        right: 'Ich hätte das gemacht.',
        why: {
          de: 'Die würde-Umschreibung ist in der Vergangenheit unüblich und schwerfällig.',
          en: 'The würde paraphrase is unusual and clumsy in the past.',
        },
      },
    ],
    drills: [
      ['Wenn ich das gewusst ___, ___ ich angerufen.', ['hätte … hätte', 'habe … habe', 'wäre … wäre', 'hätte … wäre'], 0, 'wissen und anrufen nehmen beide haben.', 'Both wissen and anrufen take haben.'],
      ['Ohne den Stau ___ wir pünktlich ___.', ['wären … gewesen', 'hätten … gewesen', 'wären … sein', 'würden … sein'], 0, 'sein nimmt wäre.', 'sein takes wäre.'],
      ['Du ___ mich ruhig anrufen ___.', ['hättest … können', 'hättest … gekonnt', 'wärst … können', 'würdest … können'], 0, 'Doppelter Infinitiv beim Modalverb.', 'Double infinitive with the modal.'],
      ['Ich ___ beinahe den Zug verpasst.', ['hätte', 'wäre', 'würde', 'war'], 0, 'verpassen nimmt haben.', 'verpassen takes haben.'],
      ['___ ich das geahnt, wäre ich zu Hause geblieben.', ['Hätte', 'Wenn hätte', 'Würde', 'Wäre'], 0, 'Ohne wenn beginnt der Satz mit dem Verb.', 'Without wenn the clause begins with the verb.'],
      ['Sie ___ fast zu spät ___.', ['wäre … gekommen', 'hätte … gekommen', 'wäre … kommen', 'würde … kommen'], 0, 'kommen ist Bewegung: wäre.', 'kommen is movement: wäre.'],
    ],
  },

  {
    key: 'nominalstil',
    level: 'B2',
    icon: '\u{1F4D0}',
    title: { de: 'Nominalstil und Verbalstil', en: 'Nominal and verbal style' },
    summary: {
      de: 'Amtsdeutsch packt ganze Sätze in Nomen. Beides lesen, eines schreiben.',
      en: 'Official German packs whole clauses into nouns. Read both; write one.',
    },
    body: {
      en: [
        'German officialdom and academia compress clauses into noun phrases. "Weil die Kosten gestiegen sind" becomes "Wegen des Kostenanstiegs". The information is identical; the grammar is not.',
        'This matters in both directions. Reading at B2 means unpacking the nominal style fast enough to follow the argument. Writing at B2 means choosing: the verbal style is clearer and almost always the better choice unless you are deliberately writing a formal report.',
        'The usual swaps are small and learnable. weil → wegen + genitive; nachdem → nach + dative; wenn → bei + dative; obwohl → trotz + genitive; um … zu → zur / zum + noun.',
        'Watch the preposition’s case: wegen and trotz take the genitive in writing (wegen des Wetters), bei and nach take the dative (bei Regen, nach der Prüfung).',
        'The giveaway of over-nominalised German is a string of nouns ending in -ung joined by prepositions: "zur Verbesserung der Durchführung der Maßnahme". If you write that, you can almost always improve it with a verb.',
      ],
      de: [
        'Amts- und Wissenschaftsdeutsch packt Nebensätze in Nominalphrasen. Aus "Weil die Kosten gestiegen sind" wird "Wegen des Kostenanstiegs". Die Information bleibt, die Grammatik nicht.',
        'Das zählt in beide Richtungen: Lesen auf B2 heißt, den Nominalstil schnell genug aufzulösen; Schreiben auf B2 heißt, zu wählen. Der Verbalstil ist klarer und fast immer die bessere Wahl.',
        'Die üblichen Umformungen sind klein und lernbar: weil → wegen + Genitiv; nachdem → nach + Dativ; wenn → bei + Dativ; obwohl → trotz + Genitiv; um … zu → zur/zum + Nomen.',
        'Achte auf den Kasus: wegen und trotz stehen schriftlich mit Genitiv, bei und nach mit Dativ.',
        'Das Kennzeichen übertriebenen Nominalstils ist eine Kette von -ung-Nomen: "zur Verbesserung der Durchführung der Maßnahme". Das lässt sich fast immer mit einem Verb verbessern.',
      ],
    },
    tables: [
      {
        caption: { de: 'Umformungen', en: 'Transformations' },
        head: ['Nebensatz', 'Nominalphrase'],
        rows: [
          ['weil es regnete', 'wegen des Regens'],
          ['nachdem er angekommen war', 'nach seiner Ankunft'],
          ['wenn es regnet', 'bei Regen'],
          ['obwohl es teuer war', 'trotz der hohen Kosten'],
          ['um sich zu bewerben', 'zur Bewerbung'],
          ['während wir warteten', 'während des Wartens'],
        ],
      },
      {
        caption: { de: 'Kasus nach Präposition', en: 'Case after the preposition' },
        head: ['Präposition', 'Kasus', 'Beispiel'],
        rows: [
          ['wegen', 'Genitiv', 'wegen des Wetters'],
          ['trotz', 'Genitiv', 'trotz der Kosten'],
          ['während', 'Genitiv', 'während der Sitzung'],
          ['nach', 'Dativ', 'nach der Prüfung'],
          ['bei', 'Dativ', 'bei Regen'],
          ['zu', 'Dativ', 'zur Anmeldung'],
        ],
      },
    ],
    examples: [
      { de: 'Wegen des Kostenanstiegs wurde das Projekt gestoppt.', en: 'Because of the rise in costs the project was stopped.' },
      { de: 'Nach Abschluss der Arbeiten öffnet die Straße wieder.', en: 'After the works are completed the road will reopen.' },
      { de: 'Bei Nichtzahlung erlischt der Anspruch.', en: 'In the event of non-payment the claim lapses.' },
    ],
    pitfalls: [
      {
        wrong: 'wegen dem Wetter (geschrieben)',
        right: 'wegen des Wetters',
        why: {
          de: 'Gesprochen hört man den Dativ ständig, geschrieben verlangt wegen den Genitiv.',
          en: 'The dative is everywhere in speech; in writing wegen takes the genitive.',
        },
      },
      {
        wrong: 'Zur Verbesserung der Durchführung der Maßnahme …',
        right: 'Damit die Maßnahme besser durchgeführt wird, …',
        why: {
          de: 'Drei Nomen hintereinander sind kein Stil, sondern ein Fehler, den man noch retten kann.',
          en: 'Three nouns in a row is not a style, it is a mistake you can still fix.',
        },
      },
    ],
    drills: [
      ['Weil es regnete → ___ fiel das Spiel aus.', ['Wegen des Regens', 'Wegen dem Regen', 'Weil des Regens', 'Trotz des Regens'], 0, 'wegen + Genitiv, und die Bedeutung bleibt kausal.', 'wegen + genitive, and the meaning stays causal.'],
      ['Nachdem er angekommen war → ___ rief er an.', ['Nach seiner Ankunft', 'Nach seine Ankunft', 'Bei seiner Ankunft', 'Wegen seiner Ankunft'], 0, 'nach + Dativ, und nachdem wird nach.', 'nach + dative, and nachdem becomes nach.'],
      ['Obwohl es teuer war → ___ haben wir es gekauft.', ['Trotz der hohen Kosten', 'Wegen der hohen Kosten', 'Trotz die hohen Kosten', 'Bei hohen Kosten'], 0, 'obwohl wird trotz + Genitiv.', 'obwohl becomes trotz + genitive.'],
      ['Wenn es regnet → ___ findet es drinnen statt.', ['Bei Regen', 'Wegen Regen', 'Trotz Regen', 'Nach Regen'], 0, 'Konditional wird bei + Dativ.', 'A conditional becomes bei + dative.'],
      ['Während der ___ wurde nicht gesprochen.', ['Sitzung', 'Sitzungen', 'Sitzung war', 'Sitzen'], 0, 'während + Genitiv Singular: der Sitzung.', 'während + genitive singular: der Sitzung.'],
      ['Um sich zu bewerben → ___ brauchen Sie drei Unterlagen.', ['Zur Bewerbung', 'Für Bewerbung', 'Wegen Bewerbung', 'Bei Bewerbung'], 0, 'Zweck wird zu + Dativ.', 'Purpose becomes zu + dative.'],
    ],
  },

  {
    key: 'passiversatz',
    level: 'B2',
    icon: '\u{1F501}',
    title: { de: 'Passiv-Ersatzformen', en: 'Alternatives to the passive' },
    summary: {
      de: 'man, sich lassen, sein + zu: dasselbe sagen, ohne Passiv zu schreiben.',
      en: 'man, sich lassen, sein + zu: saying the same thing without a passive.',
    },
    body: {
      en: [
        'B1 teaches the passive. B2 teaches the three ways German avoids it, all of which are more common in speech and more natural in writing.',
        'man + active is the everyday one: "Das macht man so" instead of "Das wird so gemacht". It is unmarked and almost always available.',
        'sich lassen says something can be done: "Das lässt sich reparieren" = "Das kann repariert werden". Only this one carries the sense of possibility, which is why it is not simply a stylistic variant.',
        'sein + zu + infinitive carries either possibility or obligation, and context decides which: "Die Rechnung ist bis Freitag zu bezahlen" is an instruction; "Das ist leicht zu erklären" is a possibility.',
        'An adjective in -bar does the same job in one word: machbar, lesbar, erreichbar, vermeidbar. "Der Fehler war vermeidbar" is tighter than "hätte vermieden werden können".',
      ],
      de: [
        'B1 lehrt das Passiv. B2 lehrt die drei Wege, es zu umgehen - alle drei häufiger im Gespräch und natürlicher im Text.',
        'man + Aktiv ist der Alltagsfall: "Das macht man so" statt "Das wird so gemacht".',
        'sich lassen drückt Möglichkeit aus: "Das lässt sich reparieren" = "Das kann repariert werden". Nur diese Form trägt die Möglichkeit mit, sie ist also keine bloße Stilvariante.',
        'sein + zu + Infinitiv trägt Möglichkeit oder Notwendigkeit, der Kontext entscheidet: "Die Rechnung ist bis Freitag zu bezahlen" ist eine Anweisung, "Das ist leicht zu erklären" eine Möglichkeit.',
        'Ein Adjektiv auf -bar leistet dasselbe in einem Wort: machbar, lesbar, erreichbar, vermeidbar.',
      ],
    },
    tables: [
      {
        caption: { de: 'Vier Wege, dasselbe zu sagen', en: 'Four ways to say the same thing' },
        head: ['Form', 'Beispiel', 'Sinn'],
        rows: [
          ['Passiv', 'Das kann repariert werden.', 'neutral'],
          ['man', 'Das kann man reparieren.', 'alltäglich'],
          ['sich lassen', 'Das lässt sich reparieren.', 'Möglichkeit'],
          ['sein + zu', 'Das ist zu reparieren.', 'Möglichkeit oder Pflicht'],
          ['-bar', 'Das ist reparierbar.', 'Möglichkeit, knapp'],
        ],
      },
    ],
    examples: [
      { de: 'Der Antrag lässt sich auch online stellen.', en: 'The application can also be made online.' },
      { de: 'Die Unterlagen sind bis Montag einzureichen.', en: 'The documents are to be submitted by Monday.' },
      { de: 'So etwas macht man hier nicht.', en: 'That sort of thing is not done here.' },
      { de: 'Der Fehler wäre vermeidbar gewesen.', en: 'The mistake would have been avoidable.' },
    ],
    pitfalls: [
      {
        wrong: 'Das lässt sich gemacht werden.',
        right: 'Das lässt sich machen.',
        why: {
          de: 'Nach sich lassen steht der aktive Infinitiv, kein Passiv.',
          en: 'sich lassen is followed by an active infinitive, not a passive one.',
        },
      },
      {
        wrong: 'Die Rechnung ist zu bezahlen werden.',
        right: 'Die Rechnung ist zu bezahlen.',
        why: {
          de: 'sein + zu + Infinitiv ist bereits passivisch; werden wäre doppelt gemoppelt.',
          en: 'sein + zu + infinitive is already passive in sense; werden doubles it.',
        },
      },
    ],
    drills: [
      ['Das Problem ___ sich schnell lösen.', ['lässt', 'wird', 'ist', 'hat'], 0, 'sich lassen + Infinitiv: lässt sich lösen.', 'sich lassen + infinitive: lässt sich lösen.'],
      ['Die Formulare sind bis Freitag ___.', ['abzugeben', 'abgegeben', 'abgeben werden', 'abzugeben werden'], 0, 'sein + zu + Infinitiv.', 'sein + zu + infinitive.'],
      ['"Das wird hier nicht gemacht." = "Das ___ hier nicht."', ['macht man', 'lässt man', 'ist man', 'wird man'], 0, 'man + Aktiv ersetzt das Passiv am einfachsten.', 'man + active is the simplest replacement.'],
      ['Der Fehler war ___.', ['vermeidbar', 'vermeiden', 'vermieden', 'zu vermeiden werden'], 0, '-bar drückt die Möglichkeit in einem Wort aus.', '-bar expresses the possibility in one word.'],
      ['"Das kann man nicht ändern." = "Das ___ sich nicht ändern."', ['lässt', 'wird', 'ist', 'hat'], 0, 'Möglichkeit, also sich lassen.', 'Possibility, so sich lassen.'],
      ['Die Tür ___ nur von innen zu öffnen.', ['ist', 'wird', 'lässt', 'hat'], 0, 'sein + zu + Infinitiv, hier als Möglichkeit.', 'sein + zu + infinitive, here as possibility.'],
    ],
  },

  {
    key: 'partizipial',
    level: 'B2',
    icon: '\u{1F4CE}',
    title: { de: 'Partizipien als Attribut', en: 'Participles as attributes' },
    summary: {
      de: 'Ein Relativsatz, zusammengefaltet und vor das Nomen geschoben.',
      en: 'A relative clause, folded up and pushed in front of the noun.',
    },
    body: {
      en: [
        'German can take a relative clause and put it in front of the noun as an adjective. "Die Kosten, die stark gestiegen sind" becomes "die stark gestiegenen Kosten". This is everywhere in written German and almost absent from speech.',
        'Partizip I (stem + -end) is active and ongoing: "die steigenden Kosten" = costs that are rising. Partizip II is passive or completed: "die gestiegenen Kosten" = costs that have risen; "der geprüfte Antrag" = the application that has been checked.',
        'The participle takes a normal adjective ending, which is why this is worth learning only once the adjective endings are automatic.',
        'The phrase can grow: "die in den letzten Jahren stark gestiegenen Kosten". When reading, the trick is to find the noun first and then read backwards - everything between the article and the noun describes it.',
        'zu + Partizip I carries obligation or possibility, the same as sein + zu: "die zu bezahlende Rechnung" is the bill that has to be paid.',
      ],
      de: [
        'Deutsch kann einen Relativsatz zusammenfalten und als Attribut vor das Nomen stellen: aus "Die Kosten, die stark gestiegen sind" wird "die stark gestiegenen Kosten". Im Schriftdeutsch ist das überall, im Gespräch fast nie.',
        'Das Partizip I (Stamm + -end) ist aktiv und laufend: "die steigenden Kosten". Das Partizip II ist passiv oder abgeschlossen: "die gestiegenen Kosten", "der geprüfte Antrag".',
        'Das Partizip bekommt eine normale Adjektivendung - deshalb lohnt dieses Thema erst, wenn die Endungen sitzen.',
        'Die Phrase kann wachsen: "die in den letzten Jahren stark gestiegenen Kosten". Beim Lesen sucht man zuerst das Nomen und liest dann rückwärts.',
        'zu + Partizip I trägt Pflicht oder Möglichkeit wie sein + zu: "die zu bezahlende Rechnung".',
      ],
    },
    tables: [
      {
        caption: { de: 'Relativsatz und Partizip', en: 'Relative clause and participle' },
        head: ['Relativsatz', 'Partizipialattribut'],
        rows: [
          ['die Kosten, die steigen', 'die steigenden Kosten'],
          ['die Kosten, die gestiegen sind', 'die gestiegenen Kosten'],
          ['der Antrag, der geprüft wurde', 'der geprüfte Antrag'],
          ['das Kind, das weint', 'das weinende Kind'],
          ['die Rechnung, die bezahlt werden muss', 'die zu bezahlende Rechnung'],
        ],
      },
      {
        caption: { de: 'Welches Partizip?', en: 'Which participle?' },
        head: ['Partizip', 'Bildung', 'Sinn'],
        rows: [
          ['Partizip I', 'Stamm + -end', 'aktiv, läuft gerade'],
          ['Partizip II', 'ge- … -t / -en', 'passiv oder abgeschlossen'],
          ['zu + Partizip I', 'zu … -end', 'muss / kann getan werden'],
        ],
      },
    ],
    examples: [
      { de: 'Die in der Studie genannten Zahlen sind veraltet.', en: 'The figures named in the study are out of date.' },
      { de: 'Das seit Jahren leerstehende Gebäude wird abgerissen.', en: 'The building, empty for years, is being demolished.' },
      { de: 'Die noch zu klärende Frage ist die Finanzierung.', en: 'The question still to be clarified is the funding.' },
    ],
    pitfalls: [
      {
        wrong: 'die gestiegende Kosten',
        right: 'die gestiegenen Kosten',
        why: {
          de: 'Hier ist das Partizip II gemeint - gestiegen, nicht steigend -, plus Adjektivendung.',
          en: 'The Partizip II is meant here - gestiegen, not steigend - plus the adjective ending.',
        },
      },
      {
        wrong: 'das weinend Kind',
        right: 'das weinende Kind',
        why: {
          de: 'Das Partizip steht vor dem Nomen und braucht die Adjektivendung.',
          en: 'Before a noun the participle needs the adjective ending.',
        },
      },
    ],
    drills: [
      ['die Kosten, die stark gestiegen sind → die stark ___ Kosten', ['gestiegenen', 'steigenden', 'gestiegende', 'steigende'], 0, 'Abgeschlossen, also Partizip II plus Endung.', 'Completed, so Partizip II plus ending.'],
      ['das Kind, das weint → das ___ Kind', ['weinende', 'geweinte', 'weinend', 'weinenden'], 0, 'Laufend und aktiv: Partizip I.', 'Ongoing and active: Partizip I.'],
      ['der Antrag, der geprüft wurde → der ___ Antrag', ['geprüfte', 'prüfende', 'geprüft', 'zu prüfende'], 0, 'Passiv und abgeschlossen: Partizip II.', 'Passive and completed: Partizip II.'],
      ['die Rechnung, die bezahlt werden muss → die zu ___ Rechnung', ['bezahlende', 'bezahlte', 'bezahlen', 'bezahlend'], 0, 'zu + Partizip I für die Pflicht.', 'zu + Partizip I for the obligation.'],
      ['die in der Studie ___ Zahlen', ['genannten', 'nennenden', 'genannte', 'nennende'], 0, 'Passiv: die Zahlen wurden genannt.', 'Passive: the figures were named.'],
      ['das seit Jahren ___ Gebäude', ['leerstehende', 'leergestandene', 'leerstehend', 'leerstehenden'], 0, 'Zustand, der andauert: Partizip I.', 'A state that continues: Partizip I.'],
    ],
  },

  {
    key: 'modalpartikeln',
    level: 'B2',
    icon: '\u{1F4AC}',
    title: { de: 'Modalpartikeln: doch, ja, mal, eben', en: 'Modal particles: doch, ja, mal, eben' },
    summary: {
      de: 'Kleine Wörter ohne Übersetzung, die den Ton eines Satzes tragen.',
      en: 'Small untranslatable words that carry a sentence’s tone.',
    },
    body: {
      en: [
        'These words have no dictionary meaning in this use and cannot be translated one-for-one. What they carry is attitude - surprise, impatience, shared knowledge, resignation - and German without them sounds correct and faintly robotic.',
        'doch contradicts an expectation or softens a request. "Komm doch mit" is warmer than "Komm mit". "Das weißt du doch" means you knew this already.',
        'ja marks something as known to both of you: "Das ist ja interessant" (I did not expect it), "Du weißt ja, wie das ist" (we both know).',
        'mal makes a request small and casual: "Kannst du mal helfen?" is a favour; without mal it is closer to an instruction. "Moment mal" buys you a second.',
        'eben and halt express resignation - this is how things are: "Das ist eben so." eben is standard everywhere; halt is southern and now common in speech generally.',
        'They sit in the middle field, after the subject and the verb, never at the front. Two can stack in a fixed order: "Mach das doch mal", not "mal doch".',
      ],
      de: [
        'Diese Wörter haben in dieser Verwendung keine Wörterbuchbedeutung und lassen sich nicht eins zu eins übersetzen. Sie tragen Haltung - Überraschung, Ungeduld, geteiltes Wissen, Resignation. Deutsch ohne sie klingt korrekt und ein wenig mechanisch.',
        'doch widerspricht einer Erwartung oder macht eine Bitte weicher: "Komm doch mit" ist wärmer als "Komm mit".',
        'ja markiert Bekanntes: "Das ist ja interessant" (das hatte ich nicht erwartet), "Du weißt ja, wie das ist".',
        'mal macht eine Bitte klein: "Kannst du mal helfen?" ist eine Gefälligkeit, ohne mal fast eine Anweisung.',
        'eben und halt drücken Resignation aus: "Das ist eben so." eben gilt überall, halt kommt aus dem Süden und ist inzwischen allgemein gesprochen.',
        'Sie stehen im Mittelfeld, hinter Subjekt und Verb, nie am Satzanfang. Zwei können sich stapeln, in fester Reihenfolge: "Mach das doch mal", nicht "mal doch".',
      ],
    },
    tables: [
      {
        caption: { de: 'Was sie tragen', en: 'What they carry' },
        head: ['Partikel', 'Haltung', 'Beispiel'],
        rows: [
          ['doch', 'Widerspruch, weiche Bitte', 'Komm doch mit!'],
          ['ja', 'das wissen wir beide', 'Du weißt ja, wie es ist.'],
          ['mal', 'kurz, unverbindlich', 'Kannst du mal helfen?'],
          ['eben / halt', 'so ist es nun einmal', 'Das ist eben so.'],
          ['denn', 'echtes Interesse in der Frage', 'Wo warst du denn?'],
          ['wohl', 'Vermutung', 'Er hat es wohl vergessen.'],
        ],
      },
    ],
    examples: [
      { de: 'Setz dich doch!', en: 'Do sit down!' },
      { de: 'Das war ja klar.', en: 'Well, that was obvious.' },
      { de: 'Warte mal kurz.', en: 'Hang on a second.' },
      { de: 'Dann machen wir es eben anders.', en: 'Then we will just do it differently.' },
    ],
    pitfalls: [
      {
        wrong: 'Doch komm mit!',
        right: 'Komm doch mit!',
        why: {
          de: 'Modalpartikeln stehen nie auf Position 1.',
          en: 'Modal particles never stand in first position.',
        },
      },
      {
        wrong: 'Kannst du helfen mal?',
        right: 'Kannst du mal helfen?',
        why: {
          de: 'Die Partikel steht im Mittelfeld, vor dem Infinitiv.',
          en: 'The particle goes in the middle field, before the infinitive.',
        },
      },
    ],
    drills: [
      ['Komm ___ mit, es wird lustig!', ['doch', 'ja', 'wohl', 'denn'], 0, 'doch macht die Einladung freundlicher.', 'doch makes the invitation friendlier.'],
      ['Wo warst du ___ so lange?', ['denn', 'doch', 'eben', 'mal'], 0, 'denn zeigt echtes Interesse in einer Frage.', 'denn shows genuine interest in a question.'],
      ['Kannst du mir ___ kurz helfen?', ['mal', 'ja', 'eben', 'wohl'], 0, 'mal macht die Bitte klein und unverbindlich.', 'mal makes the request small and casual.'],
      ['Dann fahren wir ___ morgen.', ['eben', 'ja', 'denn', 'doch mal'], 0, 'eben drückt die Resignation aus.', 'eben expresses the resignation.'],
      ['Du kennst ihn ___, oder?', ['ja', 'mal', 'denn', 'wohl'], 0, 'ja markiert geteiltes Wissen.', 'ja marks shared knowledge.'],
      ['Er hat den Termin ___ vergessen.', ['wohl', 'mal', 'denn', 'ja'], 0, 'wohl drückt eine Vermutung aus.', 'wohl expresses an assumption.'],
    ],
  },
];
