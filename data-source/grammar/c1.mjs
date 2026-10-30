/**
 * C1 grammar: the structures that are about register rather than meaning.
 *
 * Everything here has a plainer equivalent that a B2 learner already has. "Wie
 * teuer es auch sein mag" says what "obwohl es teuer ist" says. The difference
 * is not what you can express but where the sentence can appear - and at C1
 * that is the whole exam.
 *
 * Drill rows are [prompt, options, answerIndex, whyDe, whyEn].
 */
export const C1_GRAMMAR = [
  {
    key: 'konzessiv',
    level: 'C1',
    icon: '\u{1F300}',
    title: { de: 'Einräumen auf hohem Niveau', en: 'Conceding at a higher register' },
    summary: {
      de: 'so … auch, mag … auch, wenngleich: obwohl in gehobener Form.',
      en: 'so … auch, mag … auch, wenngleich: obwohl in a formal register.',
    },
    body: {
      en: [
        'German has a whole shelf of concessive constructions above obwohl, and C1 texts use them constantly. They all mean roughly "even though", and they differ in register and in how emphatic the concession is.',
        'so + adjective + auch is the most useful: "So teuer die Lösung auch ist, sie ist die einzige." The adjective moves to the front and the clause keeps verb-final order.',
        'mögen + auch concedes a point before overriding it: "Das mag stimmen, ändert aber nichts." This one is common in speech too and is worth producing, not just recognising.',
        'wenngleich, wiewohl and obschon are written-only and interchangeable with obwohl. Using one in conversation sounds like reading aloud.',
        'auch wenn differs from wenn auch: "Auch wenn es regnet" is conditional-concessive (even if it rains), while "Wenn es auch regnet" concedes a fact. In practice auch wenn is the safe one.',
        'The emphatic forms use a w-word plus auch immer: wer auch immer, was auch immer, wie auch immer. "Wie auch immer die Entscheidung ausfällt, wir sind vorbereitet."',
      ],
      de: [
        'Oberhalb von obwohl hat das Deutsche ein ganzes Regal konzessiver Konstruktionen, und C1-Texte nutzen sie ständig. Sie bedeuten alle ungefähr "obwohl" und unterscheiden sich in Register und Nachdruck.',
        'so + Adjektiv + auch ist die nützlichste: "So teuer die Lösung auch ist, sie ist die einzige." Das Adjektiv rückt nach vorn, der Satz bleibt verbletzt.',
        'mögen + auch räumt ein, um dann zu widersprechen: "Das mag stimmen, ändert aber nichts." Diese Form hört man auch im Gespräch.',
        'wenngleich, wiewohl und obschon sind schriftlich und mit obwohl austauschbar. Gesprochen klingen sie wie vorgelesen.',
        'auch wenn und wenn auch unterscheiden sich: "Auch wenn es regnet" ist konditional-konzessiv, "Wenn es auch regnet" räumt eine Tatsache ein. In der Praxis ist auch wenn die sichere Wahl.',
        'Nachdrücklich wird es mit W-Wort plus auch immer: wer auch immer, was auch immer, wie auch immer.',
      ],
    },
    tables: [
      {
        caption: { de: 'Konzessive Formen', en: 'Concessive forms' },
        head: ['Form', 'Register', 'Beispiel'],
        rows: [
          ['obwohl', 'neutral', 'Obwohl es teuer ist, …'],
          ['so … auch', 'gehoben, gesprochen möglich', 'So teuer es auch ist, …'],
          ['mag … auch', 'gesprochen und geschrieben', 'Das mag teuer sein, aber …'],
          ['wenngleich', 'nur schriftlich', 'Das Ergebnis ist gut, wenngleich spät.'],
          ['auch wenn', 'neutral, konditional', 'Auch wenn es regnet, gehen wir.'],
          ['wie auch immer', 'nachdrücklich', 'Wie auch immer es ausgeht …'],
        ],
      },
    ],
    examples: [
      { de: 'So überzeugend das Argument auch klingt, es beruht auf einer falschen Prämisse.', en: 'Convincing as the argument sounds, it rests on a false premise.' },
      { de: 'Das mag im Einzelfall zutreffen, lässt sich aber nicht verallgemeinern.', en: 'That may be true in an individual case but cannot be generalised.' },
      { de: 'Die Zahlen sind belastbar, wenngleich mit Einschränkungen.', en: 'The figures are robust, albeit with qualifications.' },
    ],
    pitfalls: [
      {
        wrong: 'So teuer es ist auch, …',
        right: 'So teuer es auch ist, …',
        why: {
          de: 'auch steht vor dem Verb, nicht dahinter; der Nebensatz bleibt verbletzt.',
          en: 'auch goes before the verb, not after; the clause stays verb-final.',
        },
      },
      {
        wrong: 'Obwohl wenngleich das stimmt, …',
        right: 'Wenngleich das stimmt, …',
        why: {
          de: 'wenngleich ersetzt obwohl, es ergänzt es nicht.',
          en: 'wenngleich replaces obwohl; it does not supplement it.',
        },
      },
    ],
    drills: [
      ['___ teuer die Lösung auch ist, sie ist die einzige.', ['So', 'Obwohl', 'Wenn', 'Wie'], 0, 'so + Adjektiv + auch; das Adjektiv folgt direkt.', 'so + adjective + auch; the adjective follows directly.'],
      ['Das ___ stimmen, ändert aber nichts.', ['mag', 'darf', 'soll', 'will'], 0, 'mögen räumt ein, bevor man widerspricht.', 'mögen concedes before you push back.'],
      ['So überzeugend es ___ klingt, …', ['auch', 'noch', 'doch', 'je'], 0, 'auch gehört fest zu dieser Konstruktion.', 'auch is a fixed part of this construction.'],
      ['___ die Entscheidung ausfällt, wir sind vorbereitet.', ['Wie auch immer', 'Wenn auch', 'Obwohl', 'So auch'], 0, 'W-Wort + auch immer für den nachdrücklichen Fall.', 'w-word + auch immer for the emphatic case.'],
      ['Das Ergebnis ist gut, ___ mit Einschränkungen.', ['wenngleich', 'sowie', 'indem', 'sofern'], 0, 'wenngleich = obwohl, nur schriftlich.', 'wenngleich = obwohl, written register only.'],
      ['___ es regnet, gehen wir spazieren.', ['Auch wenn', 'Wenn auch', 'So wenn', 'Obwohl wenn'], 0, 'Konditional-konzessiv: auch wenn.', 'Conditional-concessive: auch wenn.'],
    ],
  },

  {
    key: 'funktionsverben',
    level: 'C1',
    icon: '⚙️',
    title: { de: 'Funktionsverbgefüge', en: 'Light-verb constructions' },
    summary: {
      de: 'in Betracht ziehen, zur Anwendung kommen: wo das Nomen die Arbeit macht.',
      en: 'in Betracht ziehen, zur Anwendung kommen: where the noun does the work.',
    },
    body: {
      en: [
        'A Funktionsverbgefüge is a fixed pairing of a near-empty verb with a noun that carries the meaning: etwas in Betracht ziehen (= erwägen), zur Anwendung kommen (= angewendet werden), eine Entscheidung treffen (= entscheiden).',
        'The verb is doing grammatical work only - ziehen here has nothing to do with pulling - which is why these cannot be worked out and have to be learnt as units.',
        'They are the backbone of official and academic German. A Bescheid will say "Der Antrag kommt nicht in Betracht", never "Wir erwägen den Antrag nicht".',
        'Many of them carry a passive sense without using a passive: "zur Anwendung kommen", "in Kraft treten", "Berücksichtigung finden". That is part of why officialdom likes them - nobody has to be named as the actor.',
        'For your own writing the rule is simple: one or two give a text the right register; a paragraph of them is unreadable, and examiners mark it as such. In a Schreiben task, pick the two that fit and write the rest with verbs.',
      ],
      de: [
        'Ein Funktionsverbgefüge verbindet ein fast bedeutungsleeres Verb mit einem Nomen, das die Bedeutung trägt: etwas in Betracht ziehen (= erwägen), zur Anwendung kommen (= angewendet werden), eine Entscheidung treffen (= entscheiden).',
        'Das Verb leistet nur noch Grammatik - ziehen hat hier nichts mit Ziehen zu tun -, deshalb lassen sich diese Fügungen nicht erschließen, sondern nur als Einheit lernen.',
        'Sie sind das Rückgrat des Amts- und Wissenschaftsdeutschen. Ein Bescheid schreibt "Der Antrag kommt nicht in Betracht", nie "Wir erwägen den Antrag nicht".',
        'Viele tragen passivischen Sinn ohne Passiv: "zur Anwendung kommen", "in Kraft treten", "Berücksichtigung finden". Auch deshalb mag die Verwaltung sie: niemand muss als Handelnder genannt werden.',
        'Für eigene Texte gilt: ein, zwei geben das richtige Register, ein ganzer Absatz davon ist unlesbar. Wähle zwei passende und schreibe den Rest mit Verben.',
      ],
    },
    tables: [
      {
        caption: { de: 'Häufige Fügungen', en: 'Common constructions' },
        head: ['Funktionsverbgefüge', 'einfaches Verb'],
        rows: [
          ['in Betracht ziehen', 'erwägen'],
          ['zur Anwendung kommen', 'angewendet werden'],
          ['in Kraft treten', 'gelten'],
          ['Berücksichtigung finden', 'berücksichtigt werden'],
          ['zur Verfügung stellen', 'bereitstellen'],
          ['Kritik üben an', 'kritisieren'],
          ['eine Rolle spielen', 'wichtig sein'],
          ['in Anspruch nehmen', 'nutzen'],
          ['zum Ausdruck bringen', 'ausdrücken'],
          ['Abstand nehmen von', 'etwas nicht tun'],
        ],
      },
      {
        caption: { de: 'Welches Verb?', en: 'Which verb?' },
        head: ['Nomen', 'Verb', 'Beispiel'],
        rows: [
          ['Betracht', 'ziehen / kommen', 'in Betracht ziehen'],
          ['Anwendung', 'kommen / finden', 'zur Anwendung kommen'],
          ['Kraft', 'treten / setzen', 'in Kraft treten'],
          ['Kritik', 'üben', 'Kritik üben an'],
          ['Abstand', 'nehmen', 'Abstand nehmen von'],
          ['Ausdruck', 'bringen / finden', 'zum Ausdruck bringen'],
        ],
      },
    ],
    examples: [
      { de: 'Diese Möglichkeit sollte man ernsthaft in Betracht ziehen.', en: 'This option should be seriously considered.' },
      { de: 'Die neue Regelung tritt zum 1. Januar in Kraft.', en: 'The new rule comes into force on 1 January.' },
      { de: 'Die Behörde hat an dem Verfahren Kritik geübt.', en: 'The authority criticised the procedure.' },
      { de: 'Von einer Klage haben wir Abstand genommen.', en: 'We refrained from taking legal action.' },
    ],
    pitfalls: [
      {
        wrong: 'in Betracht nehmen',
        right: 'in Betracht ziehen',
        why: {
          de: 'Das Verb ist festgelegt. Ein anderes, auch ein sinnverwandtes, ist falsch.',
          en: 'The verb is fixed. Another one, even a near-synonym, is wrong.',
        },
      },
      {
        wrong: 'Kritik machen an',
        right: 'Kritik üben an',
        why: {
          de: 'machen passt fast nie; die Fügung verlangt üben.',
          en: 'machen almost never fits; this construction takes üben.',
        },
      },
    ],
    drills: [
      ['Diese Option sollten wir in Betracht ___.', ['ziehen', 'nehmen', 'halten', 'bringen'], 0, 'Feste Fügung: in Betracht ziehen.', 'Fixed construction: in Betracht ziehen.'],
      ['Die Regelung ___ zum 1. Juli in Kraft.', ['tritt', 'kommt', 'geht', 'setzt'], 0, 'in Kraft treten.', 'in Kraft treten.'],
      ['Die Opposition hat scharfe Kritik ___.', ['geübt', 'gemacht', 'gegeben', 'genommen'], 0, 'Kritik üben.', 'Kritik üben.'],
      ['Das Verfahren ___ nur selten zur Anwendung.', ['kommt', 'geht', 'macht', 'nimmt'], 0, 'zur Anwendung kommen.', 'zur Anwendung kommen.'],
      ['Von einer Klage haben wir Abstand ___.', ['genommen', 'gezogen', 'gemacht', 'gehalten'], 0, 'Abstand nehmen von.', 'Abstand nehmen von.'],
      ['Die Unterlagen werden Ihnen zur Verfügung ___.', ['gestellt', 'gegeben', 'gebracht', 'gesetzt'], 0, 'zur Verfügung stellen.', 'zur Verfügung stellen.'],
    ],
  },

  {
    key: 'wortbildung',
    level: 'C1',
    icon: '\u{1F9F1}',
    title: { de: 'Wortbildung: raten statt nachschlagen', en: 'Word formation: guessing instead of looking up' },
    summary: {
      de: 'Vorsilben und Endungen tragen Bedeutung. Wer sie kennt, braucht das Wörterbuch seltener.',
      en: 'Prefixes and suffixes carry meaning. Knowing them means reaching for the dictionary less.',
    },
    body: {
      en: [
        'At C1 you will meet words nobody taught you, in a text you cannot pause. The only workable strategy is to read the parts, and German is unusually generous about this because its word formation is regular.',
        'Verb prefixes shift meaning predictably. ver- often means wrong or away (sich verlaufen, verlernen); ent- means removal or beginning (entfernen, entstehen); zer- means to pieces (zerbrechen); be- makes an intransitive verb take an object (antworten → beantworten).',
        'Noun suffixes give you the gender for free: -ung, -heit, -keit, -schaft, -ion, -tät, -ur are die; -chen, -lein, -tum, -ment are das; -er, -ling, -ismus are der.',
        'Adjective suffixes tell you what kind of claim is being made. -bar and -lich mean possible (machbar, verständlich); -los means without (arbeitslos); -arm and -reich mean low and high in (kalorienarm, erfolgreich); -mäßig means in terms of.',
        'Compounds are read right to left: the last element is the thing, the rest describe it. Arbeitslosenversicherung is a Versicherung. Knowing that, you can hold the word in your head without decoding all of it.',
        'The limit: ver- also just means nothing in particular (verstehen, versprechen), and a guess is a hypothesis to check against the sentence. The skill is guessing fast and dropping the guess when the sentence disagrees.',
      ],
      de: [
        'Auf C1 begegnen dir Wörter, die dir niemand beigebracht hat, in Texten, die du nicht anhalten kannst. Die einzige brauchbare Strategie ist, die Teile zu lesen - und die deutsche Wortbildung ist dafür ungewöhnlich verlässlich.',
        'Verbvorsilben verschieben die Bedeutung regelhaft: ver- oft falsch oder weg (sich verlaufen, verlernen); ent- Entfernung oder Beginn (entfernen, entstehen); zer- in Stücke (zerbrechen); be- macht aus einem intransitiven Verb ein transitives (antworten → beantworten).',
        'Nomenendungen schenken dir das Genus: -ung, -heit, -keit, -schaft, -ion, -tät, -ur sind die; -chen, -lein, -tum, -ment sind das; -er, -ling, -ismus sind der.',
        'Adjektivendungen sagen, welche Art von Behauptung aufgestellt wird: -bar und -lich für Möglichkeit, -los für ohne, -arm und -reich für wenig und viel, -mäßig für "was … betrifft".',
        'Komposita liest man von rechts: das letzte Glied ist die Sache, der Rest beschreibt sie. Eine Arbeitslosenversicherung ist eine Versicherung.',
        'Die Grenze: ver- heißt auch oft gar nichts Bestimmtes (verstehen, versprechen). Eine Ableitung ist eine Hypothese, die der Satz bestätigen muss.',
      ],
    },
    tables: [
      {
        caption: { de: 'Verbvorsilben', en: 'Verb prefixes' },
        head: ['Vorsilbe', 'Sinn', 'Beispiel'],
        rows: [
          ['ver-', 'falsch, weg, Ende', 'sich verlaufen, verlernen'],
          ['ent-', 'weg, Beginn', 'entfernen, entstehen'],
          ['zer-', 'in Stücke', 'zerbrechen, zerstören'],
          ['be-', 'macht transitiv', 'beantworten, besprechen'],
          ['miss-', 'falsch, schlecht', 'missverstehen'],
          ['über-', 'zu viel, darüber', 'überschätzen, überdenken'],
          ['unter-', 'zu wenig', 'unterschätzen'],
        ],
      },
      {
        caption: { de: 'Endungen und Genus', en: 'Suffixes and gender' },
        head: ['Endung', 'Artikel', 'Beispiel'],
        rows: [
          ['-ung, -heit, -keit', 'die', 'die Zuspitzung'],
          ['-schaft, -ion, -tät, -ur', 'die', 'die Rentabilität'],
          ['-chen, -lein, -tum, -ment', 'das', 'das Eigentum'],
          ['-er, -ling, -ismus', 'der', 'der Prüfling, der Kapitalismus'],
          ['-bar, -lich', 'Adjektiv: möglich', 'vermeidbar, verständlich'],
          ['-los, -arm, -reich', 'Adjektiv: ohne / wenig / viel', 'folgenlos, kalorienarm'],
        ],
      },
    ],
    examples: [
      { de: 'Der Schaden war vermeidbar - also hätte man ihn vermeiden können.', en: 'The damage was avoidable - so it could have been avoided.' },
      { de: 'Die Maßnahme blieb folgenlos.', en: 'The measure had no consequences.' },
      { de: 'Wir sollten die Zahlen nicht überschätzen.', en: 'We should not overestimate the figures.' },
      { de: 'Er hat sich im Datum vertan.', en: 'He got the date wrong.' },
    ],
    pitfalls: [
      {
        wrong: 'Ich habe die Frage geantwortet.',
        right: 'Ich habe die Frage beantwortet.',
        why: {
          de: 'antworten ist intransitiv; be- macht daraus ein Verb mit Akkusativobjekt.',
          en: 'antworten is intransitive; be- turns it into a verb with an accusative object.',
        },
      },
      {
        wrong: 'Das Ergebnis war unterschätzt. (gemeint: zu niedrig angesetzt)',
        right: 'Das Ergebnis wurde unterschätzt.',
        why: {
          de: 'unterschätzen ist ein Vorgang und braucht hier das Vorgangspassiv.',
          en: 'unterschätzen is a process and needs the process passive here.',
        },
      },
    ],
    drills: [
      ['Den Fehler hätte man ___ können, er war ___.', ['vermeiden … vermeidbar', 'vermeidbar … vermeiden', 'vermeidend … vermeidet', 'vermeiden … vermeidlich'], 0, '-bar macht aus dem Verb das Adjektiv der Möglichkeit.', '-bar turns the verb into the adjective of possibility.'],
      ['Ich habe die Frage ___.', ['beantwortet', 'geantwortet', 'antwortet', 'verantwortet'], 0, 'be- macht antworten transitiv.', 'be- makes antworten transitive.'],
      ['Die Maßnahme blieb ___ – nichts ist passiert.', ['folgenlos', 'folgenreich', 'folgend', 'folglich'], 0, '-los heißt ohne.', '-los means without.'],
      ['Er hat sich auf dem Weg ___.', ['verlaufen', 'entlaufen', 'zerlaufen', 'belaufen'], 0, 'ver- trägt hier das "falsch".', 'ver- carries the "wrongly" here.'],
      ['Wir sollten den Effekt nicht ___.', ['überschätzen', 'unterschätzen lassen', 'schätzen über', 'beschätzen'], 0, 'über- heißt zu viel.', 'über- means too much.'],
      ['Eine Arbeitslosenversicherung ist vor allem eine ___.', ['Versicherung', 'Arbeit', 'Losigkeit', 'Arbeitslosigkeit'], 0, 'Komposita liest man von rechts: das letzte Glied ist die Sache.', 'Compounds are read from the right: the last element is the thing.'],
    ],
  },

  {
    key: 'textkohaesion',
    level: 'C1',
    icon: '\u{1F9F5}',
    title: { de: 'Textzusammenhang', en: 'Holding a text together' },
    summary: {
      de: 'Verweisen, wieder aufnehmen, voranstellen: wie aus Sätzen ein Text wird.',
      en: 'Referring back, taking up, fronting: how sentences become a text.',
    },
    body: {
      en: [
        'At C1 the complaint on a Schreiben script is rarely about grammar. It is that the text is a list of correct sentences rather than an argument, and the fix is cohesion.',
        'The main device is taking up what you just said with a different word. Having written "Die Kosten sind gestiegen", you continue with "Diese Entwicklung" or "Dieser Anstieg" - not "Das". A pronoun points; a noun phrase also interprets, and that is where the argument lives.',
        'da-compounds carry the reference without repeating the phrase: dadurch, dabei, darin, davon, demgegenüber, insofern. "Darin liegt das eigentliche Problem" is tighter than repeating the clause.',
        'The first position in a German sentence is where you put the link to what came before, not the new information. Starting a sentence with "Aus diesem Grund", "Demgegenüber" or "Was die Kosten betrifft" tells the reader where they are before you say anything new.',
        'Keep the thread in one place. If three consecutive sentences start with "Ich", the text reads as a list; varying the first position without changing the content is most of what makes a C1 text feel written rather than assembled.',
        'Signposting is cheap and works: "Dazu drei Punkte", "Zunächst", "Damit komme ich zum zweiten Einwand". Examiners can follow a signposted argument even when a sentence inside it goes wrong.',
      ],
      de: [
        'Auf C1 betrifft die Kritik an einem Schreiben selten die Grammatik. Sie lautet, der Text sei eine Reihe richtiger Sätze und keine Argumentation - und dagegen hilft Kohäsion.',
        'Das wichtigste Mittel ist die Wiederaufnahme mit einem anderen Wort. Nach "Die Kosten sind gestiegen" folgt "Diese Entwicklung" oder "Dieser Anstieg", nicht "Das". Ein Pronomen zeigt nur, eine Nominalphrase deutet zugleich.',
        'da-Komposita tragen den Bezug, ohne die Phrase zu wiederholen: dadurch, dabei, darin, davon, demgegenüber, insofern.',
        'Die erste Position im deutschen Satz gehört dem Anschluss an das Vorherige, nicht der neuen Information: "Aus diesem Grund", "Demgegenüber", "Was die Kosten betrifft".',
        'Halte den Faden an einer Stelle. Drei Sätze hintereinander mit "Ich" lesen sich wie eine Liste.',
        'Gliederungssignale sind billig und wirken: "Dazu drei Punkte", "Zunächst", "Damit komme ich zum zweiten Einwand".',
      ],
    },
    tables: [
      {
        caption: { de: 'Wiederaufnahme', en: 'Taking up what came before' },
        head: ['Vorher', 'Schwach', 'Besser'],
        rows: [
          ['Die Kosten sind gestiegen.', 'Das ist ein Problem.', 'Dieser Anstieg ist das eigentliche Problem.'],
          ['Viele kündigen.', 'Es liegt am Gehalt.', 'Diese Abwanderung liegt am Gehalt.'],
          ['Die Studie ist alt.', 'Darum ist sie schlecht.', 'Schon deshalb ist ihre Aussagekraft begrenzt.'],
        ],
      },
      {
        caption: { de: 'Anschluss auf Position 1', en: 'Links in first position' },
        head: ['Ausdruck', 'Funktion'],
        rows: [
          ['Aus diesem Grund', 'Folge'],
          ['Demgegenüber', 'Gegensatz'],
          ['Darüber hinaus', 'Ergänzung'],
          ['Was … betrifft', 'Themenwechsel'],
          ['Insofern', 'Einschränkung des Vorigen'],
          ['Damit komme ich zu …', 'Gliederung'],
        ],
      },
    ],
    examples: [
      { de: 'Die Zahlen stammen von 2019. Schon deshalb ist ihre Aussagekraft begrenzt.', en: 'The figures date from 2019. For that reason alone their value is limited.' },
      { de: 'Darin liegt der eigentliche Einwand.', en: 'Therein lies the real objection.' },
      { de: 'Was die Kosten betrifft, so sind sie kalkulierbar.', en: 'As far as the costs are concerned, they are calculable.' },
      { de: 'Demgegenüber steht ein Argument, das selten genannt wird.', en: 'Against that stands an argument that is rarely mentioned.' },
    ],
    pitfalls: [
      {
        wrong: 'Die Kosten sind gestiegen. Das ist schlecht. Das muss man ändern.',
        right: 'Die Kosten sind gestiegen. Dieser Anstieg ist auf Dauer nicht tragbar.',
        why: {
          de: 'Eine Kette aus "das" zeigt nur zurück und deutet nichts. Die Nominalphrase trägt das Argument.',
          en: 'A chain of "das" only points back and interprets nothing. The noun phrase carries the argument.',
        },
      },
      {
        wrong: 'Ich finde das gut. Ich habe drei Gründe. Ich fange mit dem ersten an.',
        right: 'Dafür sprechen drei Gründe. Der erste betrifft …',
        why: {
          de: 'Drei Sätze mit "Ich" auf Position 1 lesen sich als Liste, nicht als Argument.',
          en: 'Three sentences starting with "Ich" read as a list, not an argument.',
        },
      },
    ],
    drills: [
      ['Die Kosten sind stark gestiegen. ___ ist auf Dauer nicht tragbar.', ['Dieser Anstieg', 'Das', 'Es', 'Dort'], 0, 'Die Nominalphrase nimmt wieder auf und deutet zugleich.', 'The noun phrase takes up and interprets at once.'],
      ['Die Studie ist von 2015. Schon ___ ist ihre Aussagekraft begrenzt.', ['deshalb', 'dabei', 'dafür', 'davon'], 0, 'Kausaler Anschluss auf Position 1.', 'A causal link in first position.'],
      ['___ liegt der eigentliche Einwand.', ['Darin', 'Davon', 'Dabei', 'Dazu'], 0, 'in etwas liegen → darin.', 'in etwas liegen → darin.'],
      ['___ die Kosten betrifft, so sind sie kalkulierbar.', ['Was', 'Wie', 'Dass', 'Wenn'], 0, 'Feste Wendung für den Themenwechsel.', 'Fixed expression for a change of topic.'],
      ['Das Argument überzeugt. ___ steht jedoch ein Einwand.', ['Demgegenüber', 'Darüber hinaus', 'Insofern', 'Dadurch'], 0, 'Gegensatz auf Position 1.', 'A contrast in first position.'],
      ['Die Methode ist umstritten. ___ sind die Ergebnisse brauchbar.', ['Gleichwohl', 'Dadurch', 'Deshalb', 'Insofern'], 0, 'Konzessiver Anschluss: trotzdem.', 'A concessive link: nevertheless.'],
    ],
  },

  {
    key: 'kollokationen',
    level: 'C1',
    icon: '\u{1F91D}',
    title: { de: 'Kollokationen: welches Verb zu welchem Nomen', en: 'Collocations: which verb goes with which noun' },
    summary: {
      de: 'Eine Entscheidung trifft man, ein Urteil fällt man. Beides heißt entscheiden, nur eines ist richtig.',
      en: 'You treffen a decision and fällen a verdict. Both mean deciding; only one is right each time.',
    },
    body: {
      en: [
        'By C1 the grammar is rarely what gives a learner away. The collocations are. "Ich habe eine Entscheidung gemacht" is grammatically flawless and immediately marks you as a non-native, because a decision in German is getroffen, never gemacht.',
        'These pairings are not derivable and not quite idioms either - they are simply which word German happens to use. The only approach is to learn the pair rather than the two words.',
        'The verbs that collocate most widely are worth knowing as a set: treffen (Entscheidung, Vereinbarung, Maßnahmen), fällen (Urteil, Entscheidung in a legal sense), stellen (Frage, Antrag, Bedingung), erheben (Anspruch, Einspruch, Vorwurf, Gebühren), leisten (Beitrag, Arbeit, Widerstand, Hilfe), üben (Kritik, Druck, Verzicht), ziehen (Schluss, Bilanz, Vergleich, Konsequenzen).',
        'Adjective-plus-noun pairs matter just as much: ein triftiger Grund, ein schwerwiegender Fehler, eine herbe Niederlage, eine rege Beteiligung, erhebliche Zweifel. German will usually accept "großer" but a native would not write it.',
        'Intensifiers are collocational too, and getting them wrong sounds odd rather than wrong: schwer verletzt, streng verboten, dringend nötig, bitter nötig, hochgradig umstritten. "Sehr verletzt" is not how it is said.',
      ],
      de: [
        'Auf C1 verrät selten noch die Grammatik, sondern die Kollokation. "Ich habe eine Entscheidung gemacht" ist grammatisch fehlerfrei und sofort als nicht-muttersprachlich erkennbar: Eine Entscheidung wird getroffen, nie gemacht.',
        'Diese Verbindungen sind nicht ableitbar und auch keine Redewendungen - es ist schlicht das Wort, das das Deutsche nimmt. Man lernt das Paar, nicht die zwei Wörter.',
        'Die verbindungsfreudigsten Verben lohnen als Block: treffen (Entscheidung, Vereinbarung, Maßnahmen), fällen (Urteil), stellen (Frage, Antrag, Bedingung), erheben (Anspruch, Einspruch, Vorwurf), leisten (Beitrag, Widerstand, Hilfe), üben (Kritik, Druck), ziehen (Schluss, Bilanz, Vergleich).',
        'Ebenso wichtig sind Adjektiv-Nomen-Paare: ein triftiger Grund, ein schwerwiegender Fehler, eine herbe Niederlage, erhebliche Zweifel.',
        'Auch Verstärker sind kollokativ: schwer verletzt, streng verboten, dringend nötig, hochgradig umstritten. "Sehr verletzt" sagt man nicht.',
      ],
    },
    tables: [
      {
        caption: { de: 'Verb und Nomen', en: 'Verb and noun' },
        head: ['Nomen', 'Verb', 'nicht'],
        rows: [
          ['eine Entscheidung', 'treffen', 'machen'],
          ['ein Urteil', 'fällen', 'machen'],
          ['eine Frage', 'stellen', 'fragen / machen'],
          ['einen Antrag', 'stellen', 'machen'],
          ['Kritik', 'üben', 'machen'],
          ['einen Beitrag', 'leisten', 'machen'],
          ['Widerstand', 'leisten', 'geben'],
          ['einen Schluss', 'ziehen', 'nehmen'],
          ['Anspruch', 'erheben', 'nehmen'],
          ['eine Vereinbarung', 'treffen', 'machen'],
        ],
      },
      {
        caption: { de: 'Adjektiv und Verstärker', en: 'Adjective and intensifier' },
        head: ['Verbindung', 'statt'],
        rows: [
          ['ein triftiger Grund', 'ein guter Grund'],
          ['erhebliche Zweifel', 'große Zweifel'],
          ['ein schwerwiegender Fehler', 'ein großer Fehler'],
          ['schwer verletzt', 'sehr verletzt'],
          ['streng verboten', 'sehr verboten'],
          ['dringend nötig', 'sehr nötig'],
        ],
      },
    ],
    examples: [
      { de: 'Das Gericht hat sein Urteil gefällt.', en: 'The court has delivered its verdict.' },
      { de: 'Daran wurde erhebliche Kritik geübt.', en: 'Considerable criticism was levelled at that.' },
      { de: 'Daraus lässt sich kein Schluss ziehen.', en: 'No conclusion can be drawn from that.' },
      { de: 'Für eine Ausnahme gibt es keinen triftigen Grund.', en: 'There is no cogent reason for an exception.' },
    ],
    pitfalls: [
      {
        wrong: 'Ich habe eine Entscheidung gemacht.',
        right: 'Ich habe eine Entscheidung getroffen.',
        why: {
          de: 'Eine Entscheidung wird getroffen. Grammatisch ist beides richtig, üblich nur eines.',
          en: 'A decision is getroffen. Both are grammatical; only one is said.',
        },
      },
      {
        wrong: 'Er hat Kritik gemacht.',
        right: 'Er hat Kritik geübt.',
        why: {
          de: 'Kritik übt man.',
          en: 'Criticism is geübt.',
        },
      },
      {
        wrong: 'Sie wurde sehr verletzt.',
        right: 'Sie wurde schwer verletzt.',
        why: {
          de: 'Der feste Verstärker ist schwer, nicht sehr.',
          en: 'The fixed intensifier is schwer, not sehr.',
        },
      },
    ],
    drills: [
      ['Wir haben eine Entscheidung ___.', ['getroffen', 'gemacht', 'genommen', 'gestellt'], 0, 'eine Entscheidung treffen.', 'eine Entscheidung treffen.'],
      ['Das Gericht hat ein Urteil ___.', ['gefällt', 'getroffen', 'gemacht', 'gegeben'], 0, 'ein Urteil fällen.', 'ein Urteil fällen.'],
      ['Daran wurde scharfe Kritik ___.', ['geübt', 'gemacht', 'gegeben', 'gestellt'], 0, 'Kritik üben.', 'Kritik üben.'],
      ['Daraus lässt sich kein Schluss ___.', ['ziehen', 'nehmen', 'machen', 'treffen'], 0, 'einen Schluss ziehen.', 'einen Schluss ziehen.'],
      ['Dafür gibt es keinen ___ Grund.', ['triftigen', 'großen', 'starken', 'schweren'], 0, 'Feste Verbindung: ein triftiger Grund.', 'Fixed pairing: ein triftiger Grund.'],
      ['Zwei Personen wurden ___ verletzt.', ['schwer', 'sehr', 'stark', 'hoch'], 0, 'schwer verletzt ist die feste Verbindung.', 'schwer verletzt is the fixed pairing.'],
    ],
  },

  {
    key: 'emphase',
    level: 'C1',
    icon: '❗',
    title: { de: 'Betonen ohne lauter zu werden', en: 'Emphasis without raising your voice' },
    summary: {
      de: '"Was mich stört, ist …", das Vorfeld, und die Partikel, die ein Wort heraushebt.',
      en: '"Was mich stört, ist …", the first position, and the particles that lift one word out.',
    },
    body: {
      en: [
        'English emphasises with stress and with "it is X that". German has a stricter word order and compensates with structure, and at C1 the examiners are listening for exactly this.',
        'The cleft is the workhorse: "Was mich stört, ist der Ton" puts der Ton under a spotlight that "Der Ton stört mich" does not. Variants: "Wer das entschieden hat, ist …", "Worum es geht, ist …".',
        'The first position in the sentence is itself emphatic, and anything can go there: an object ("Diesen Punkt halte ich für zentral"), an adverbial, even a subordinate clause. Fronting an object is a strong move and feels formal.',
        'es as a placeholder in first position lets you delay the real subject and build suspense: "Es fehlt vor allem an Personal", "Es war der Zeitpunkt, der alles entschied".',
        'Focus particles pick out one element: sogar, selbst, gerade, ausgerechnet, nur, erst. They sit immediately before what they emphasise and moving them changes the meaning: "Nur er hat das gesagt" against "Er hat nur das gesagt".',
        'Finally, negation can emphasise: "nicht unerheblich", "nicht ohne Grund", "keineswegs". The double negative is a deliberate understatement and a very German way of making a strong claim quietly.',
      ],
      de: [
        'Das Englische betont mit Akzent und mit "it is X that". Das Deutsche hat eine strengere Wortstellung und gleicht das mit Struktur aus - und genau darauf hören Prüfer auf C1.',
        'Der Spaltsatz ist das Arbeitspferd: "Was mich stört, ist der Ton" stellt der Ton in ein Licht, das "Der Ton stört mich" nicht erzeugt.',
        'Die erste Position ist selbst schon betont, und dort kann alles stehen: ein Objekt ("Diesen Punkt halte ich für zentral"), eine Angabe, auch ein ganzer Nebensatz.',
        'es als Platzhalter im Vorfeld verzögert das eigentliche Subjekt: "Es fehlt vor allem an Personal."',
        'Fokuspartikeln heben ein Element heraus: sogar, selbst, gerade, ausgerechnet, nur, erst. Sie stehen direkt davor, und ihre Stellung ändert die Bedeutung: "Nur er hat das gesagt" gegen "Er hat nur das gesagt".',
        'Auch die Verneinung betont: "nicht unerheblich", "nicht ohne Grund", "keineswegs" - ein bewusstes Understatement, mit dem man leise stark behauptet.',
      ],
    },
    tables: [
      {
        caption: { de: 'Dasselbe, verschieden betont', en: 'The same thing, emphasised differently' },
        head: ['Form', 'Beispiel', 'Wirkung'],
        rows: [
          ['neutral', 'Der Ton stört mich.', 'Aussage'],
          ['Spaltsatz', 'Was mich stört, ist der Ton.', 'hebt den Ton heraus'],
          ['Vorfeld', 'Den Ton finde ich schwierig.', 'formell, kontrastiv'],
          ['es-Vorfeld', 'Es ist der Ton, der stört.', 'verzögert, baut auf'],
          ['Partikel', 'Gerade der Ton stört.', 'genau dieses und nichts anderes'],
          ['Litotes', 'Der Ton ist nicht unproblematisch.', 'leise, aber deutlich'],
        ],
      },
      {
        caption: { de: 'Fokuspartikeln', en: 'Focus particles' },
        head: ['Partikel', 'Sinn', 'Beispiel'],
        rows: [
          ['sogar', 'mehr als erwartet', 'Sogar der Chef kam.'],
          ['selbst', 'wie sogar, gehobener', 'Selbst Fachleute irren sich.'],
          ['gerade', 'genau dieses', 'Gerade darum geht es.'],
          ['ausgerechnet', 'ironisch: genau dieses', 'Ausgerechnet heute!'],
          ['nur', 'nicht mehr als', 'Nur zwei haben geantwortet.'],
          ['erst', 'später als erwartet', 'Er kam erst um zehn.'],
        ],
      },
    ],
    examples: [
      { de: 'Was mich daran stört, ist nicht die Höhe, sondern die Begründung.', en: 'What bothers me about it is not the amount but the justification.' },
      { de: 'Es fehlt vor allem an ausgebildetem Personal.', en: 'What is missing above all is trained staff.' },
      { de: 'Gerade darin liegt das Problem.', en: 'That is precisely where the problem lies.' },
      { de: 'Der Einwand ist nicht unberechtigt.', en: 'The objection is not without justification.' },
    ],
    pitfalls: [
      {
        wrong: 'Es ist der Ton was mich stört.',
        right: 'Es ist der Ton, der mich stört.',
        why: {
          de: 'Nach einem bestimmten Nomen steht der/die/das, nicht was.',
          en: 'After a definite noun the pronoun is der/die/das, not was.',
        },
      },
      {
        wrong: 'Er hat nur das gesagt. (gemeint: niemand sonst)',
        right: 'Nur er hat das gesagt.',
        why: {
          de: 'Die Partikel steht vor dem, was sie heraushebt. Ihre Stellung ist die Bedeutung.',
          en: 'The particle precedes what it emphasises. Its position is the meaning.',
        },
      },
    ],
    drills: [
      ['___ mich stört, ist der Ton.', ['Was', 'Das', 'Welches', 'Wie'], 0, 'Der Spaltsatz beginnt mit was.', 'The cleft begins with was.'],
      ['Es ist der Zeitpunkt, ___ alles entschied.', ['der', 'was', 'welches', 'den'], 0, 'Bestimmtes Nomen: der.', 'A definite noun: der.'],
      ['___ darin liegt das Problem.', ['Gerade', 'Nur', 'Erst', 'Sogar'], 0, 'gerade hebt "genau dieses" hervor.', 'gerade picks out "precisely this".'],
      ['Niemand sonst war dafür: ___ er hat zugestimmt.', ['nur', 'erst', 'sogar', 'gerade'], 0, 'nur vor dem Subjekt grenzt die Person ab.', 'nur before the subject restricts who it was.'],
      ['Der Vorwurf ist nicht ___.', ['unbegründet', 'begründet', 'ungerecht sehr', 'kein Grund'], 0, 'Litotes: nicht + Negativadjektiv heißt leise "doch".', 'Litotes: nicht plus a negative adjective quietly means "actually yes".'],
      ['___ fehlt es an Personal.', ['Es', 'Das', 'Dort', 'Man'], 0, 'es als Platzhalter im Vorfeld.', 'es as a placeholder in first position.'],
    ],
  },

  {
    key: 'hedging',
    level: 'C1',
    icon: '\u{1F39A}️',
    title: { de: 'Wie sicher bist du dir?', en: 'How sure are you?' },
    summary: {
      de: 'dürfte, mag sein, vermutlich, eher: die Abstufungen zwischen Behauptung und Vermutung.',
      en: 'dürfte, mag sein, vermutlich, eher – the gradations between a claim and a guess.',
    },
    body: {
      en: [
        'At C1 what separates a strong text from a weak one is often not the claim but the hedging. Saying something flatly that you cannot support is the fastest way to lose an examiner; saying it with the right amount of distance is the skill being tested.',
        'The modal verbs carry most of it, and in this use they say nothing about permission or ability. dürfte is the most useful and the least taught: "Das dürfte der Grund sein" means "that is probably the reason" with real confidence behind it. müsste is similar but inferential: "Er müsste längst da sein."',
        'können and mögen weaken: "Das kann stimmen" is open, "Das mag stimmen" concedes while signalling you are about to disagree. werden expresses a confident assumption about now: "Sie wird im Stau stehen."',
        'Adverbs grade it finely: zweifellos, sicherlich, höchstwahrscheinlich, vermutlich, womöglich, angeblich, vorgeblich. The last two are not hedges at all - angeblich marks a claim as someone else’s and signals doubt.',
        'Softening a judgement: eher, tendenziell, im Großen und Ganzen, weitgehend, in gewissem Maße, nicht unbedingt. "Das ist eher unwahrscheinlich" is weaker than "unwahrscheinlich" and far more usable in an argument you may have to defend.',
        'The mirror skill is noticing hedges when reading. A text saying "dürfte", "offenbar" and "angeblich" is making much weaker claims than one saying "ist", and C1 reading questions are frequently about exactly that difference.',
      ],
      de: [
        'Auf C1 unterscheidet oft nicht die Behauptung einen starken von einem schwachen Text, sondern die Abtönung. Etwas rundheraus zu behaupten, was man nicht belegen kann, kostet am schnellsten Punkte.',
        'Den größten Teil tragen die Modalverben, und sie sagen hier nichts über Erlaubnis oder Fähigkeit. dürfte ist das nützlichste und am wenigsten gelehrte: "Das dürfte der Grund sein" heißt "wahrscheinlich" mit Nachdruck. müsste schließt: "Er müsste längst da sein."',
        'können und mögen schwächen ab: "Das kann stimmen" ist offen, "Das mag stimmen" räumt ein und kündigt den Widerspruch an. werden drückt eine sichere Vermutung über jetzt aus.',
        'Adverbien stufen fein ab: zweifellos, sicherlich, höchstwahrscheinlich, vermutlich, womöglich, angeblich. Die letzten markieren fremde Behauptungen und signalisieren Zweifel.',
        'Urteile abschwächen: eher, tendenziell, im Großen und Ganzen, weitgehend, in gewissem Maße, nicht unbedingt.',
        'Die Gegenfähigkeit ist, Abtönung beim Lesen zu bemerken. Ein Text mit "dürfte", "offenbar" und "angeblich" behauptet viel weniger als einer mit "ist".',
      ],
    },
    tables: [
      {
        caption: { de: 'Von sicher zu unsicher', en: 'From certain to uncertain' },
        head: ['Ausdruck', 'Sicherheit', 'Beispiel'],
        rows: [
          ['zweifellos', 'sehr hoch', 'Das ist zweifellos richtig.'],
          ['dürfte', 'hoch', 'Das dürfte der Grund sein.'],
          ['wird wohl', 'hoch', 'Sie wird wohl im Stau stehen.'],
          ['vermutlich', 'mittel', 'Vermutlich war es ein Versehen.'],
          ['könnte', 'offen', 'Es könnte auch anders sein.'],
          ['mag sein', 'einräumend', 'Das mag sein, ändert aber nichts.'],
          ['angeblich', 'fremde Behauptung', 'Angeblich war niemand informiert.'],
        ],
      },
      {
        caption: { de: 'Urteile abschwächen', en: 'Softening a judgement' },
        head: ['Ausdruck', 'Wirkung'],
        rows: [
          ['eher', 'Tendenz statt Festlegung'],
          ['tendenziell', 'im Trend, nicht im Einzelfall'],
          ['weitgehend', 'fast ganz, aber nicht ganz'],
          ['in gewissem Maße', 'teilweise, vorsichtig'],
          ['nicht unbedingt', 'Widerspruch ohne Härte'],
          ['bedingt', 'nur unter Bedingungen'],
        ],
      },
    ],
    examples: [
      { de: 'Der Rückgang dürfte mehrere Ursachen haben.', en: 'The decline probably has several causes.' },
      { de: 'Das mag im Einzelfall zutreffen, ist aber nicht verallgemeinerbar.', en: 'That may be true in individual cases but cannot be generalised.' },
      { de: 'Angeblich lagen die Zahlen seit Monaten vor.', en: 'The figures had allegedly been available for months.' },
      { de: 'Ich halte das eher für unwahrscheinlich.', en: 'I consider that rather unlikely.' },
    ],
    pitfalls: [
      {
        wrong: 'Das dürfte der Grund sein dürfen.',
        right: 'Das dürfte der Grund sein.',
        why: {
          de: 'dürfte ist hier Konjunktiv II von dürfen in rein vermutender Bedeutung, nicht Erlaubnis.',
          en: 'dürfte here is Konjunktiv II of dürfen in a purely inferential sense, not permission.',
        },
      },
      {
        wrong: 'Angeblich stimmt das, und ich bin sicher.',
        right: 'Angeblich stimmt das – belegt ist es nicht.',
        why: {
          de: 'angeblich signalisiert Zweifel. Es mit Sicherheit zu kombinieren widerspricht sich.',
          en: 'angeblich signals doubt. Combining it with certainty contradicts itself.',
        },
      },
    ],
    drills: [
      ['Der Rückgang ___ mehrere Ursachen haben.', ['dürfte', 'darf', 'durfte', 'müsste dürfen'], 0, 'dürfte als starke Vermutung.', 'dürfte as a confident assumption.'],
      ['Das ___ stimmen, ändert aber nichts.', ['mag', 'muss', 'will', 'soll'], 0, 'mögen räumt ein und kündigt den Widerspruch an.', 'mögen concedes and announces the pushback.'],
      ['___ waren die Zahlen längst bekannt.', ['Angeblich', 'Zweifellos', 'Sicherlich', 'Offensichtlich'], 0, 'Fremde Behauptung mit Zweifel.', 'Someone else’s claim, with doubt attached.'],
      ['Ich halte das ___ für unwahrscheinlich.', ['eher', 'ganz', 'völlig', 'zweifellos'], 0, 'eher schwächt das Urteil ab.', 'eher softens the judgement.'],
      ['Sie ___ im Stau stehen – anders ist die Verspätung nicht zu erklären.', ['wird wohl', 'wird werden', 'möchte', 'soll wohl'], 0, 'werden + wohl für die sichere Vermutung über jetzt.', 'werden plus wohl for a confident assumption about now.'],
      ['Der Befund ist ___ übertragbar.', ['nur bedingt', 'nur unbedingt', 'bedingt nicht', 'unbedingt nur'], 0, 'bedingt heißt: nur unter Einschränkungen.', 'bedingt means: only with qualifications.'],
    ],
  },
];
