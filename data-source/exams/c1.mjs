/**
 * The C1 exam, in the shape of Goethe-Zertifikat C1 and telc Deutsch C1.
 *
 * What is tested at C1 is not comprehension but reading between the lines.
 * The questions ask about attitude, implication and what a writer is careful
 * NOT to say, and every wrong answer is a reasonable reading of the text that
 * the text does not actually support.
 *
 * All names, institutions and studies are invented for this app.
 */
export const C1_READING = [
  {
    id: 'l.c1.1',
    level: 'C1',
    teil: 2,
    minutes: 22,
    title: { de: 'Teil 2: Ein Kommentar zur Sprachpolitik', en: 'Part 2: a comment piece on language policy' },
    instructions: {
      de: 'Lies den Kommentar. Welche Antwort entspricht dem Text?',
      en: 'Read the comment piece. Which answer matches the text?',
    },
    texts: [
      {
        heading: 'Die Sprachprüfung als Sortiermaschine',
        body: `Wer in Deutschland eingebürgert werden will, muss B1 nachweisen. Über die Höhe dieser Hürde wird regelmäßig gestritten, und beide Lager führen dabei Argumente, die mit der eigentlichen Frage wenig zu tun haben.

Die einen sagen, B1 sei zu niedrig: Wer an einer Debatte teilnehmen wolle, komme damit nicht weit. Das trifft zu, geht aber am Zweck vorbei. Eine Einbürgerung ist keine Zulassung zur Talkshow. Sie ist die Feststellung, dass jemand hier dauerhaft lebt - und das tun Menschen seit Jahrhunderten erfolgreich mit sehr unterschiedlichen Sprachständen.

Die anderen sagen, B1 sei zu hoch, weil die Prüfung Menschen ausschließe, die seit dreißig Jahren hier arbeiten. Auch das stimmt, ist aber ebenfalls kein Argument über das Niveau. Es ist eines über die Prüfungsform. Wer nie gelernt hat, in einer Prüfungssituation zu lesen, scheitert an einem Multiple-Choice-Bogen, nicht an der deutschen Sprache. Man kann einen Menschen treffen, der mit Behörden telefoniert, Verträge versteht und seinen Betrieb führt - und der durch den schriftlichen Teil fällt.

Der eigentliche Einwand ist deshalb ein anderer, und er wird selten laut gesagt: Die Prüfung misst nicht, was sie zu messen vorgibt. Sie misst Sprachstand und Prüfungsroutine in einer Zahl, die beides nicht trennt. Wer Abitur hat, besteht leichter, bei gleichem Deutsch.

Daraus folgt nicht, dass man die Anforderung streichen sollte. Es gibt gute Gründe dafür, dass ein Staat erwartet, verstanden zu werden. Es folgt aber, dass eine mündliche Alternative für Menschen über einem bestimmten Alter oder nach einer bestimmten Aufenthaltsdauer keine Aufweichung wäre, sondern eine Korrektur. Dass es sie nicht gibt, ist eine politische Entscheidung, keine fachliche.

Man sollte sie wenigstens als solche benennen.`,
      },
    ],
    items: [
      [
        'Wie bewertet der Autor das Argument, B1 sei zu niedrig?',
        [
          'Es ist sachlich richtig, trifft aber nicht den Zweck der Prüfung.',
          'Es ist sachlich falsch.',
          'Es ist das stärkste Argument in der Debatte.',
          'Es wird nur von Gegnern der Einbürgerung vorgebracht.',
        ],
        0,
        '"Das trifft zu, geht aber am Zweck vorbei."',
        '"That is true, but it misses the purpose."',
        'How does the author assess the claim that B1 is too low?',
      ],
      [
        'Was ist nach Ansicht des Autors das Problem bei Menschen, die seit Jahrzehnten hier arbeiten?',
        [
          'die Form der Prüfung, nicht ihr Niveau',
          'ihr Sprachstand',
          'die Dauer des Verfahrens',
          'die Kosten der Prüfung',
        ],
        0,
        '"Es ist eines über die Prüfungsform." Der Autor trennt Niveau und Form ausdrücklich.',
        '"It is one about the exam format." The author explicitly separates level and format.',
        'What, in the author’s view, is the problem for people who have worked here for decades?',
      ],
      [
        'Worin besteht der "eigentliche Einwand"?',
        [
          'Die Prüfung vermischt Sprachstand und Prüfungsroutine.',
          'Die Prüfung ist zu teuer.',
          'Die Prüfung ist zu kurz.',
          'Die Prüfung wird zu selten angeboten.',
        ],
        0,
        '"Sie misst Sprachstand und Prüfungsroutine in einer Zahl, die beides nicht trennt."',
        '"It measures language level and exam technique in one number that does not separate them."',
        'What is the "real objection"?',
      ],
      [
        'Was fordert der Autor?',
        [
          'eine mündliche Alternative für bestimmte Gruppen',
          'die Abschaffung der Sprachanforderung',
          'eine Anhebung auf B2',
          'eine Senkung auf A2',
        ],
        0,
        '"… eine mündliche Alternative … wäre keine Aufweichung, sondern eine Korrektur."',
        '"… an oral alternative … would not be a softening but a correction."',
        'What does the author call for?',
      ],
      [
        'Wie steht der Autor grundsätzlich zur Sprachanforderung?',
        [
          'Er hält sie für berechtigt.',
          'Er lehnt sie ab.',
          'Er äußert sich dazu nicht.',
          'Er hält sie für zweitrangig.',
        ],
        0,
        '"Es gibt gute Gründe dafür, dass ein Staat erwartet, verstanden zu werden."',
        '"There are good reasons for a state to expect to be understood."',
        'What is the author’s basic position on the language requirement?',
      ],
      [
        'Was ist mit dem letzten Satz gemeint?',
        [
          'Man sollte offen sagen, dass es eine politische und keine fachliche Entscheidung ist.',
          'Man sollte die Prüfung neu benennen.',
          'Man sollte das Thema nicht öffentlich diskutieren.',
          'Man sollte Fachleute entscheiden lassen.',
        ],
        0,
        'Der Satz bezieht sich auf "eine politische Entscheidung, keine fachliche".',
        'The sentence refers back to "a political decision, not a technical one".',
        'What does the last sentence mean?',
      ],
    ],
  },
];

export const C1_LISTENING = [
  {
    id: 'h.c1.1',
    level: 'C1',
    teil: 2,
    minutes: 15,
    plays: 1,
    title: { de: 'Teil 2: Vortrag über Mehrsprachigkeit', en: 'Part 2: a lecture on multilingualism' },
    instructions: {
      de: 'Du hörst einen Vortrag, einmal. Beantworte danach die Fragen.',
      en: 'You will hear a lecture once. Then answer the questions.',
    },
    script: [
      { speaker: 'Vortragende', text: 'Ich möchte heute über eine Behauptung sprechen, die so oft wiederholt wird, dass sie als gesichert gilt: Mehrsprachig aufwachsende Kinder seien kognitiv im Vorteil. Ich halte diese Behauptung für überdehnt, und ich sage gleich dazu, dass ich sie nicht für falsch halte.' },
      { speaker: 'Vortragende', text: 'Die Studienlage ist in einer bestimmten Hinsicht klar. In Aufgaben, bei denen man eine naheliegende Reaktion unterdrücken muss, schneiden mehrsprachige Kinder im Mittel etwas besser ab. Der Effekt ist reproduzierbar. Er ist allerdings klein, und er betrifft genau diese Art von Aufgabe.' },
      { speaker: 'Vortragende', text: 'Was daraus in der öffentlichen Darstellung geworden ist, ist etwas anderes: dass Mehrsprachigkeit generell klüger mache. Diesen Schritt geben die Daten nicht her. Zwischen "schneidet in einer Hemmungsaufgabe geringfügig besser ab" und "ist intelligenter" liegt eine Strecke, die niemand zurückgelegt hat.' },
      { speaker: 'Vortragende', text: 'Dazu kommt ein methodisches Problem, das lange unterschätzt wurde. Die früheren Studien verglichen häufig Kinder, die sich nicht nur in der Sprachzahl unterschieden, sondern auch im Einkommen der Eltern und in deren Bildungsabschluss. Neuere Arbeiten, die das kontrollieren, finden den Effekt kleiner, manche finden ihn gar nicht.' },
      { speaker: 'Vortragende', text: 'Warum ist mir das wichtig? Weil das Argument politisch benutzt wird, und zwar in beide Richtungen. Wer Mehrsprachigkeit fördern will, führt den kognitiven Vorteil an. Wenn dieser Vorteil dann schrumpft, scheint die Förderung ihre Grundlage zu verlieren. Das ist aber nur so, wenn man sie je damit begründet hat.' },
      { speaker: 'Vortragende', text: 'Die tragfähige Begründung ist viel einfacher und braucht keine Studie: Ein Kind, das die Sprache seiner Großeltern spricht, kann mit seinen Großeltern sprechen. Ein Erwachsener, der zwei Sprachen beherrscht, hat Zugang zu zwei Arbeitsmärkten. Das sind keine kognitiven Vorteile, sondern soziale und wirtschaftliche, und sie verschwinden nicht, wenn die nächste Metaanalyse erscheint.' },
      { speaker: 'Vortragende', text: 'Mein Punkt ist also nicht, dass die Forschung schlecht wäre. Er ist, dass wir eine gute Sache mit einem schwachen Argument verteidigen, obwohl wir ein starkes hätten.' },
    ],
    items: [
      [
        'Wie positioniert sich die Vortragende zur Eingangsbehauptung?',
        [
          'Sie hält sie für überdehnt, aber nicht für falsch.',
          'Sie hält sie für widerlegt.',
          'Sie stimmt ihr uneingeschränkt zu.',
          'Sie äußert sich dazu nicht.',
        ],
        0,
        '"Ich halte diese Behauptung für überdehnt … dass ich sie nicht für falsch halte."',
        '"I consider this claim overstretched … I do not consider it false."',
        'What is the speaker’s position on the opening claim?',
      ],
      [
        'Wie beschreibt sie den gemessenen Effekt?',
        [
          'reproduzierbar, aber klein und eng begrenzt',
          'groß und breit nachweisbar',
          'nicht reproduzierbar',
          'nur bei Erwachsenen messbar',
        ],
        0,
        '"Der Effekt ist reproduzierbar. Er ist allerdings klein, und er betrifft genau diese Art von Aufgabe."',
        '"The effect is reproducible. It is, however, small, and it concerns exactly this kind of task."',
        'How does she describe the measured effect?',
      ],
      [
        'Welches methodische Problem nennt sie?',
        [
          'Frühere Studien kontrollierten den sozialen Hintergrund nicht.',
          'Die Stichproben waren zu klein.',
          'Die Aufgaben waren zu leicht.',
          'Die Kinder waren zu jung.',
        ],
        0,
        '"… unterschieden sich nicht nur in der Sprachzahl, sondern auch im Einkommen der Eltern …"',
        '"… differed not only in the number of languages but also in parental income …"',
        'What methodological problem does she name?',
      ],
      [
        'Warum hält sie das Thema für politisch heikel?',
        [
          'Wenn der kognitive Vorteil schrumpft, scheint die Förderung ihre Grundlage zu verlieren.',
          'Weil die Forschung staatlich finanziert wird.',
          'Weil Eltern verunsichert werden.',
          'Weil Lehrkräfte die Studien nicht lesen.',
        ],
        0,
        '"Wenn dieser Vorteil dann schrumpft, scheint die Förderung ihre Grundlage zu verlieren."',
        '"If that advantage then shrinks, the support seems to lose its basis."',
        'Why does she consider the topic politically delicate?',
      ],
      [
        'Welche Begründung hält sie für tragfähig?',
        [
          'soziale und wirtschaftliche Vorteile',
          'kognitive Vorteile',
          'schulische Leistungen',
          'die Zahl der gesprochenen Sprachen',
        ],
        0,
        '"Das sind keine kognitiven Vorteile, sondern soziale und wirtschaftliche …"',
        '"Those are not cognitive advantages but social and economic ones …"',
        'Which justification does she consider sound?',
      ],
      [
        'Was ist ihr abschließender Punkt?',
        [
          'Eine gute Sache wird mit einem schwachen Argument verteidigt.',
          'Die Forschung ist methodisch schlecht.',
          'Mehrsprachigkeit sollte nicht gefördert werden.',
          'Metaanalysen sind unzuverlässig.',
        ],
        0,
        '"… dass wir eine gute Sache mit einem schwachen Argument verteidigen, obwohl wir ein starkes hätten."',
        '"… that we defend a good cause with a weak argument when we have a strong one."',
        'What is her concluding point?',
      ],
    ],
  },
];

export const C1_WRITING = [
  {
    id: 'w.c1.1',
    level: 'C1',
    teil: 1,
    minutes: 70,
    minWords: 230,
    register: 'formell',
    title: { de: 'Teil 1: Stellungnahme aus Stichpunkten', en: 'Part 1: a position piece from notes' },
    situation:
      'Eine Fachzeitschrift bittet um eine Stellungnahme zu der Frage, ob der B1-Nachweis für die Einbürgerung durch eine mündliche Alternative ergänzt werden sollte. Ihnen liegen vier Stichpunkte vor: (1) schriftliche Prüfung misst auch Prüfungsroutine; (2) Betroffene oft seit Jahrzehnten erwerbstätig; (3) Einwand: Verwaltungsaufwand und Vergleichbarkeit; (4) Einwand: Signalwirkung einer Ausnahme. Schreiben Sie etwa 230 Wörter.',
    situationEn:
      'A specialist journal asks for a position piece on whether the B1 requirement for naturalisation should be supplemented by an oral alternative. You have four notes: (1) the written exam also measures exam technique; (2) those affected are often in work for decades; (3) objection: administrative cost and comparability; (4) objection: the signal an exception sends. Write about 230 words.',
    bullets: [
      'Formulieren Sie eine These, die mehr sagt als "dafür" oder "dagegen".',
      'Arbeiten Sie alle vier Stichpunkte ein, ohne sie abzuarbeiten.',
      'Nehmen Sie beide Einwände ernst; räumen Sie mindestens einen teilweise ein.',
      'Halten Sie den Textzusammenhang: Wiederaufnahme statt einer Kette von "das".',
      'Schließen Sie mit einer Folgerung, die aus dem Text folgt.',
    ],
    model: `Die Debatte über den B1-Nachweis leidet daran, dass zwei Fragen als eine behandelt werden: welches Sprachniveau verlangt werden soll und in welcher Form es nachzuweisen ist. Nur die zweite steht hier zur Debatte, und sie lässt sich beantworten, ohne die erste anzutasten.

Dass eine schriftliche Prüfung nicht allein Sprachstand misst, ist unter Fachleuten unstrittig. Sie misst zugleich Prüfungsroutine, also eine Fähigkeit, die mit der Bildungsbiografie korreliert und nicht mit dem Deutschen. Für Personen, die seit Jahrzehnten erwerbstätig sind, mit Behörden verhandeln und Verträge verstehen, erzeugt diese Vermischung ein Ergebnis, das über ihre Sprachkompetenz wenig aussagt.

Der Einwand des Verwaltungsaufwands ist berechtigt, und ich halte ihn für den gewichtigeren der beiden. Eine mündliche Prüfung ist teurer, schlechter standardisierbar und angreifbar, wenn Ergebnisse auseinandergehen. Entkräften lässt er sich nur, wenn die Alternative eng gefasst wird - etwa an eine Mindestaufenthaltsdauer gebunden und nach einem festen Protokoll geführt.

Der zweite Einwand, die Signalwirkung, überzeugt mich hingegen nicht. Er unterstellt, dass eine formbezogene Korrektur als Absenkung des Anspruchs gelesen wird. Das ist eine Frage der Kommunikation, nicht der Sache; mit demselben Argument ließe sich jede Nachbesserung verhindern.

Daraus folgt keine Abschaffung und keine Absenkung, sondern eine zweite Form desselben Nachweises für eine klar umrissene Gruppe. Dass diese Form fehlt, ist bislang keine fachliche, sondern eine politische Entscheidung - und sie sollte auch so begründet werden.`,
    checklist: [
      { de: 'Meine These sagt mehr als "dafür" oder "dagegen".', en: 'My thesis says more than "for" or "against".' },
      { de: 'Alle vier Stichpunkte sind eingearbeitet, nicht abgehakt.', en: 'All four notes are worked in, not ticked off.' },
      { de: 'Ich habe einen Einwand ausdrücklich als den stärkeren bezeichnet.', en: 'I explicitly identified one objection as the stronger one.' },
      { de: 'Ich habe einen Einwand teilweise eingeräumt, statt beide abzuweisen.', en: 'I partly conceded an objection rather than dismissing both.' },
      { de: 'Ich nehme Vorheriges mit Nominalphrasen wieder auf, nicht mit "das".', en: 'I take up what came before with noun phrases, not with "das".' },
      { de: 'Ich habe Konzessiv- und Funktionsverbgefüge gezielt eingesetzt, nicht gehäuft.', en: 'I used concessive and light-verb constructions deliberately, not in bulk.' },
      { de: 'Der Schluss folgt aus dem Text und wiederholt ihn nicht.', en: 'The conclusion follows from the text rather than repeating it.' },
      { de: 'Ich habe etwa 230 Wörter geschrieben.', en: 'I wrote about 230 words.' },
    ],
    phrases: [
      {
        label: { de: 'These und Rahmen', en: 'Thesis and framing' },
        items: [
          'Die Debatte leidet daran, dass zwei Fragen als eine behandelt werden.',
          'Nur die zweite Frage steht hier zur Debatte.',
          'Vorwegschicken möchte ich, dass …',
          'Es geht mir nicht um …, sondern um …',
        ],
      },
      {
        label: { de: 'Einwände gewichten', en: 'Weighing objections' },
        items: [
          'Ich halte ihn für den gewichtigeren der beiden.',
          'Entkräften lässt er sich nur, wenn …',
          'Dieser Einwand überzeugt mich hingegen nicht.',
          'Er unterstellt, dass …',
          'Mit demselben Argument ließe sich … verhindern.',
        ],
      },
      {
        label: { de: 'Schließen', en: 'Concluding' },
        items: [
          'Daraus folgt weder … noch …, sondern …',
          'Unter diesen Bedingungen halte ich … für vertretbar.',
          '… und sie sollte auch so begründet werden.',
        ],
      },
    ],
  },
];

export const C1_SPEAKING = [
  {
    id: 's.c1.1',
    level: 'C1',
    teil: 2,
    minutes: 10,
    prepMinutes: 15,
    title: { de: 'Teil 2: Vortrag und Verteidigung', en: 'Part 2: presentation and defence' },
    situation:
      'Halten Sie einen Vortrag von fünf bis sechs Minuten zu der Frage "Sollte Mehrsprachigkeit in Schulen stärker gefördert werden?" und verteidigen Sie Ihre Position anschließend gegen Nachfragen.',
    situationEn:
      'Give a five- to six-minute presentation on "Should multilingualism be promoted more strongly in schools?" and then defend your position against questions.',
    bullets: [
      'Grenzen Sie die Frage ein, bevor Sie sie beantworten.',
      'Trennen Sie, was empirisch belegt ist, von dem, was Wertung ist.',
      'Nennen Sie die stärkste Gegenposition in ihrer stärksten Form.',
      'Beziehen Sie eine Position, die Sie unter Nachfragen halten können.',
      'Sagen Sie selbst, was Ihre Position nicht leistet.',
    ],
    model: `Ich möchte die Frage zunächst eingrenzen, weil sie in dieser Form zwei sehr verschiedene Dinge meint: den Unterricht in Herkunftssprachen und den Fremdsprachenunterricht. Ich spreche über das Erste.

Zur Empirie: Dass mehrsprachig aufwachsende Kinder in bestimmten Aufgaben geringfügig besser abschneiden, ist belegt, aber der Effekt ist klein, und neuere Arbeiten, die den sozialen Hintergrund kontrollieren, finden ihn kleiner. Ich stütze meine Position deshalb ausdrücklich nicht darauf.

Das Argument, das trägt, ist ein anderes und braucht keine Studie. Ein Kind, das die Sprache seiner Großeltern verliert, verliert den Zugang zu ihnen. Das ist ein realer Verlust, und er ist vermeidbar.

Die stärkste Gegenposition lautet, dass Schulstunden endlich sind und jede Stunde Herkunftssprache eine Stunde Deutsch kostet - und dass Deutsch für die Chancen dieser Kinder entscheidender ist. Dieser Einwand ist ernst zu nehmen, und ich kann ihn nicht vollständig entkräften.

Was ich dagegen setzen kann, ist zweierlei. Erstens ist die Annahme, dass beides konkurriert, empirisch umstritten; eine gefestigte Erstsprache scheint den Zweitspracherwerb eher zu stützen. Zweitens geht es bei Herkunftssprachenunterricht häufig um Randstunden, nicht um Deutschstunden.

Was meine Position nicht leistet: Sie sagt nichts darüber, wie man das bei dreißig Herkunftssprachen an einer Schule organisiert. Das halte ich für das eigentliche Problem - ein organisatorisches, kein pädagogisches.`,
    checklist: [
      { de: 'Ich habe die Frage eingegrenzt, bevor ich sie beantwortet habe.', en: 'I narrowed the question before answering it.' },
      { de: 'Ich habe Empirie und Wertung getrennt.', en: 'I separated evidence from judgement.' },
      { de: 'Ich habe die Gegenposition in ihrer stärksten Form genannt.', en: 'I stated the counter-position in its strongest form.' },
      { de: 'Ich habe gesagt, was ich nicht entkräften kann.', en: 'I said what I cannot refute.' },
      { de: 'Ich habe die Grenzen meiner eigenen Position benannt.', en: 'I named the limits of my own position.' },
      { de: 'Ich habe fünf bis sechs Minuten frei gesprochen.', en: 'I spoke freely for five to six minutes.' },
      { de: 'Ich habe auf Nachfragen differenziert statt nachgegeben oder wiederholt.', en: 'I differentiated under questioning rather than conceding or repeating.' },
    ],
    phrases: [
      {
        label: { de: 'Eingrenzen', en: 'Narrowing' },
        items: [
          'Ich möchte die Frage zunächst eingrenzen, weil …',
          'In dieser Form meint sie zwei verschiedene Dinge.',
          'Ich spreche im Folgenden ausschließlich über …',
        ],
      },
      {
        label: { de: 'Belege einordnen', en: 'Placing evidence' },
        items: [
          'Das ist belegt, allerdings mit kleinem Effekt.',
          'Darauf stütze ich meine Position ausdrücklich nicht.',
          'Neuere Arbeiten, die … kontrollieren, finden …',
          'Das lässt sich aus den Daten nicht ableiten.',
        ],
      },
      {
        label: { de: 'Unter Nachfragen bestehen', en: 'Holding up under questioning' },
        items: [
          'Diesen Einwand kann ich nicht vollständig entkräften.',
          'Da müsste ich differenzieren: …',
          'Was meine Position nicht leistet, ist …',
          'Das würde ich so nicht stehen lassen, weil …',
        ],
      },
    ],
  },
];
