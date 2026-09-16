/**
 * Sprechen: the three task types of the Goethe-Zertifikat B1.
 *
 * Teil 1  planning something together with a partner, about 3 minutes
 * Teil 2  a short presentation on a topic from your own life, about 3 minutes
 * Teil 3  reacting to the partner's presentation and asking a question
 *
 * The exam is taken in pairs, and this app is one person. What it can do is
 * the half that is actually hard alone: the preparation clock, the structure,
 * the phrases, and a model answer to compare against after you have spoken.
 * For Teil 1 and 3 the partner's turns are written out so the task still has
 * two voices.
 */
export const SPEAKING = [
  {
    id: 's1a',
    teil: 1,
    minutes: 3,
    prepMinutes: 0,
    title: { de: 'Teil 1: Ein Abschiedsfest planen', en: 'Part 1: planning a farewell party' },
    situation:
      'Eine Kollegin aus Ihrem Team verlässt die Firma. Sie sollen zusammen mit Ihrer Partnerin oder Ihrem Partner ein kleines Abschiedsfest planen. Sprechen Sie über die Punkte, machen Sie Vorschläge und reagieren Sie auf die Vorschläge der anderen Person. Am Ende müssen Sie sich einigen.',
    situationEn:
      'A colleague is leaving your team. Together with your partner you are to plan a small farewell party. Talk through the points, make suggestions, react to the other person’s suggestions, and agree at the end.',
    bullets: [
      'Wann und wo soll das Fest stattfinden?',
      'Was gibt es zu essen und zu trinken?',
      'Wer organisiert was?',
      'Welches Geschenk kaufen wir?',
      'Wie laden wir die anderen ein?',
    ],
    model: `A: Also, fangen wir mit dem Termin an. Ich würde den letzten Freitag vor ihrem Abschied vorschlagen, also den siebenundzwanzigsten, nach der Arbeit.

B: Freitag ist gut, aber nach der Arbeit sind viele müde. Wie wäre es, wenn wir schon um vier anfangen und den Nachmittag nutzen?

A: Einverstanden, das ist eine gute Idee. Und wo? Im Pausenraum ist es eng.

B: Ich hätte einen Vorschlag: Der Innenhof ist frei, und bei gutem Wetter sitzt es sich dort viel schöner.

A: Das gefällt mir. Falls es regnet, weichen wir in den Besprechungsraum aus. Was das Essen angeht, würde ich sagen: jeder bringt etwas mit.

B: Da bin ich nicht ganz deiner Meinung. Dann haben wir am Ende fünf Kartoffelsalate. Ich würde lieber eine Liste aufhängen, in die sich jeder einträgt.

A: Stimmt, das ist besser. Die Liste kannst du machen, und ich kümmere mich um Getränke.

B: Abgemacht. Und das Geschenk? Sie fährt gern Rad. Vielleicht ein Gutschein für den Radladen?

A: Perfekt. Ich frage die Kollegen nach je zehn Euro, und du schreibst die Einladung in den Team-Chat. Dann hätten wir alles.

B: Genau. Also: Freitag um vier im Innenhof, Liste für das Essen, Gutschein als Geschenk, Einladung im Chat.`,
    checklist: [
      { de: 'Ich habe zu jedem Leitpunkt etwas gesagt.', en: 'I said something on every content point.' },
      { de: 'Ich habe mindestens drei eigene Vorschläge gemacht.', en: 'I made at least three suggestions of my own.' },
      { de: 'Ich habe auf die Vorschläge der anderen Person reagiert, nicht nur meine vorgetragen.', en: 'I reacted to the other person’s suggestions instead of only presenting mine.' },
      { de: 'Ich habe einmal höflich widersprochen und eine Alternative genannt.', en: 'I disagreed politely once and offered an alternative.' },
      { de: 'Am Ende stand eine gemeinsame Entscheidung.', en: 'There was a joint decision at the end.' },
      { de: 'Ich habe drei Minuten gesprochen, ohne lange Pausen.', en: 'I spoke for three minutes without long pauses.' },
    ],
    phrases: [
      {
        label: { de: 'Vorschlagen', en: 'Suggesting' },
        items: [
          'Ich würde vorschlagen, dass wir …',
          'Wie wäre es, wenn wir …?',
          'Was hältst du davon, … zu …?',
          'Ich hätte da einen Vorschlag: …',
        ],
      },
      {
        label: { de: 'Zustimmen', en: 'Agreeing' },
        items: [
          'Das ist eine gute Idee.',
          'Da bin ich ganz deiner Meinung.',
          'Einverstanden, machen wir das so.',
          'Gut, abgemacht.',
        ],
      },
      {
        label: { de: 'Höflich widersprechen', en: 'Disagreeing politely' },
        items: [
          'Da bin ich nicht ganz deiner Meinung.',
          'Das sehe ich etwas anders, weil …',
          'Ich würde lieber …',
          'Vielleicht wäre es besser, wenn …',
        ],
      },
      {
        label: { de: 'Zusammenfassen', en: 'Summing up' },
        items: [
          'Also, wir hätten dann: …',
          'Fassen wir zusammen: …',
          'Dann bleibt es dabei.',
        ],
      },
    ],
  },

  {
    id: 's1b',
    teil: 1,
    minutes: 3,
    prepMinutes: 0,
    title: { de: 'Teil 1: Einen Ausflug für den Kurs planen', en: 'Part 1: planning a class outing' },
    situation:
      'Ihr Deutschkurs endet bald. Sie planen mit Ihrer Partnerin oder Ihrem Partner einen gemeinsamen Ausflug für die Gruppe. Sprechen Sie über die Punkte und einigen Sie sich.',
    situationEn:
      'Your German course is ending soon. With your partner, plan a group outing. Talk through the points and reach agreement.',
    bullets: [
      'Wohin soll der Ausflug gehen?',
      'Wann und wie lange?',
      'Wie kommen alle dorthin?',
      'Was kostet es und wer bezahlt?',
      'Wen fragen wir noch?',
    ],
    model: `A: Mein erster Gedanke wäre ein Ausflug an den Stausee. Man kann dort laufen, schwimmen und grillen, und es kostet nichts.

B: Das klingt gut, aber der Weg ist weit. Ich würde eher etwas in der Stadt vorschlagen, damit alle mitkommen können, auch die mit kleinen Kindern.

A: Da hast du recht, daran hatte ich nicht gedacht. Wie wäre es mit dem Stadtpark? Es gibt Grillplätze und einen Spielplatz.

B: Perfekt. Und wann? Samstagnachmittag wäre mein Vorschlag, so von zwei bis sechs.

A: Einverstanden. Wie kommen alle hin? Der Park liegt an der Straßenbahnlinie drei, das ist für die meisten einfach.

B: Gut. Dann zu den Kosten: Grillen ist kostenlos, wir müssen nur Essen und Kohle kaufen. Ich schätze fünf Euro pro Person.

A: Das ist in Ordnung. Ich würde vorschlagen, dass wir das Geld vorher einsammeln, sonst rechnen wir am Ende ewig.

B: Genau. Und sollen wir unsere Lehrerin einladen?

A: Unbedingt. Ich frage sie am Montag, und du schreibst die Nachricht an die Gruppe. Also: Samstag um zwei im Stadtpark, fünf Euro, Straßenbahn drei.`,
    checklist: [
      { de: 'Ich habe zu jedem Leitpunkt etwas gesagt.', en: 'I said something on every content point.' },
      { de: 'Ich habe Vorschläge begründet, nicht nur genannt.', en: 'I justified my suggestions rather than only naming them.' },
      { de: 'Ich habe die andere Person mindestens zweimal etwas gefragt.', en: 'I asked the other person something at least twice.' },
      { de: 'Ich habe einen Einwand der anderen Person aufgenommen.', en: 'I took up an objection from the other person.' },
      { de: 'Am Ende habe ich das Ergebnis zusammengefasst.', en: 'At the end I summarised the result.' },
    ],
    phrases: [
      {
        label: { de: 'Ideen einbringen', en: 'Bringing in ideas' },
        items: [
          'Mein erster Gedanke wäre …',
          'Man könnte auch …',
          'Was meinst du zu …?',
        ],
      },
      {
        label: { de: 'Einwand aufnehmen', en: 'Taking up an objection' },
        items: [
          'Da hast du recht, daran hatte ich nicht gedacht.',
          'Guter Punkt. Dann sollten wir lieber …',
          'Das stimmt, also anders: …',
        ],
      },
      {
        label: { de: 'Aufgaben verteilen', en: 'Dividing up tasks' },
        items: [
          'Ich kümmere mich um …, und du …?',
          'Übernimmst du …?',
          'Ich frage sie, du schreibst der Gruppe.',
        ],
      },
    ],
  },

  {
    id: 's2a',
    teil: 2,
    minutes: 3,
    prepMinutes: 15,
    title: { de: 'Teil 2: Präsentation – Leben in einer Großstadt oder auf dem Land?', en: 'Part 2: presentation - city or countryside?' },
    situation:
      'Halten Sie eine kurze Präsentation zum Thema "Leben in einer Großstadt oder auf dem Land?". Folgen Sie den fünf Folien. Sie haben Zeit zur Vorbereitung und sprechen danach etwa drei Minuten.',
    situationEn:
      'Give a short presentation on "Living in a big city or in the countryside?". Follow the five slides. You have preparation time and then speak for about three minutes.',
    bullets: [
      'Folie 1: Nennen Sie Ihr Thema und sagen Sie, worüber Sie sprechen.',
      'Folie 2: Berichten Sie von Ihrer eigenen Erfahrung.',
      'Folie 3: Wie ist die Situation in Ihrem Heimatland?',
      'Folie 4: Nennen Sie Vorteile und Nachteile.',
      'Folie 5: Sagen Sie Ihre Meinung und beenden Sie die Präsentation.',
    ],
    model: `Folie 1. Mein Thema heute ist: Leben in einer Großstadt oder auf dem Land? Ich möchte zuerst von meiner eigenen Erfahrung berichten, dann etwas über mein Heimatland sagen, danach Vorteile und Nachteile nennen und am Schluss meine Meinung sagen.

Folie 2. Ich selbst habe beides erlebt. Die ersten zwanzig Jahre habe ich in einem Dorf mit vierhundert Einwohnern gelebt. Seit sechs Jahren wohne ich in Leipzig. Am Anfang war die Stadt für mich sehr laut, und ich habe mich einsam gefühlt, obwohl überall Menschen waren. Heute möchte ich nicht mehr zurück.

Folie 3. In meinem Heimatland ziehen sehr viele junge Menschen in die Hauptstadt, weil es dort Arbeit und Universitäten gibt. In den Dörfern bleiben oft nur die Älteren. Das ist ein großes Thema bei uns, weil Schulen und Arztpraxen auf dem Land schließen.

Folie 4. Die Stadt hat klare Vorteile: Arbeit, Busse und Bahnen, Kurse, Ärzte, Kultur. Der größte Nachteil sind die Mieten. Auf dem Land ist Wohnen billiger und die Luft besser, aber ohne Auto ist man verloren, und abends fährt kein Bus mehr.

Folie 5. Meiner Meinung nach hängt es vom Lebensabschnitt ab. Wer eine Ausbildung machen will, ist in der Stadt besser aufgehoben. Mit kleinen Kindern oder im Alter kann das Land angenehmer sein. Ich persönlich bleibe vorerst in der Stadt. Vielen Dank für Ihre Aufmerksamkeit.`,
    checklist: [
      { de: 'Ich habe alle fünf Folien abgedeckt.', en: 'I covered all five slides.' },
      { de: 'Ich habe am Anfang angekündigt, worüber ich spreche.', en: 'At the start I announced what I was going to talk about.' },
      { de: 'Meine eigene Erfahrung war konkret, mit Beispiel oder Zahl.', en: 'My own experience was concrete, with an example or a number.' },
      { de: 'Vorteile und Nachteile kamen beide vor.', en: 'Both advantages and disadvantages appeared.' },
      { de: 'Am Ende stand eine klare eigene Meinung.', en: 'There was a clear opinion of my own at the end.' },
      { de: 'Ich habe mich bedankt und die Präsentation sauber beendet.', en: 'I thanked the audience and ended the presentation cleanly.' },
      { de: 'Ich habe etwa drei Minuten gesprochen.', en: 'I spoke for about three minutes.' },
    ],
    phrases: [
      {
        label: { de: 'Anfangen', en: 'Starting' },
        items: [
          'Mein Thema heute ist …',
          'Ich möchte zuerst …, dann … und am Schluss …',
          'In meiner Präsentation geht es um …',
        ],
      },
      {
        label: { de: 'Erfahrung erzählen', en: 'Telling an experience' },
        items: [
          'Ich selbst habe erlebt, dass …',
          'Als ich … war, …',
          'Bei mir war es so: …',
        ],
      },
      {
        label: { de: 'Über das Heimatland', en: 'About your home country' },
        items: [
          'In meinem Heimatland ist es üblich, dass …',
          'Bei uns ist die Situation anders: …',
          'Im Vergleich zu Deutschland …',
        ],
      },
      {
        label: { de: 'Überleiten', en: 'Moving on' },
        items: [
          'Jetzt komme ich zu …',
          'Damit sind wir beim nächsten Punkt.',
          'Soweit zu …, nun zu …',
        ],
      },
      {
        label: { de: 'Beenden', en: 'Finishing' },
        items: [
          'Zusammenfassend würde ich sagen …',
          'Meiner Meinung nach …',
          'Vielen Dank für Ihre Aufmerksamkeit.',
        ],
      },
    ],
  },

  {
    id: 's2b',
    teil: 2,
    minutes: 3,
    prepMinutes: 15,
    title: { de: 'Teil 2: Präsentation – Eine Fremdsprache lernen', en: 'Part 2: presentation - learning a foreign language' },
    situation:
      'Halten Sie eine kurze Präsentation zum Thema "Eine Fremdsprache lernen". Folgen Sie den fünf Folien.',
    situationEn: 'Give a short presentation on "Learning a foreign language". Follow the five slides.',
    bullets: [
      'Folie 1: Thema vorstellen und Ablauf ankündigen.',
      'Folie 2: Ihre eigenen Erfahrungen mit dem Sprachenlernen.',
      'Folie 3: Wie lernt man in Ihrem Heimatland Sprachen?',
      'Folie 4: Was hilft beim Lernen, was nicht?',
      'Folie 5: Ihre Meinung und ein Rat an andere.',
    ],
    model: `Folie 1. Ich spreche heute über das Thema "Eine Fremdsprache lernen". Ich erzähle zuerst von meinen eigenen Erfahrungen, dann von der Situation in meinem Heimatland, danach sage ich, was wirklich hilft, und zum Schluss gebe ich einen Rat.

Folie 2. Ich lerne seit zwei Jahren Deutsch. Angefangen habe ich mit einer App, und ehrlich gesagt hat das nicht viel gebracht: Ich konnte Wörter, aber ich konnte nicht sprechen. Der Durchbruch kam, als ich angefangen habe, mit meiner Nachbarin einmal pro Woche Kaffee zu trinken. Da musste ich reden, und es war anstrengend, aber danach ging es schnell.

Folie 3. In meinem Heimatland lernt fast jedes Kind Englisch in der Schule, aber meistens sehr theoretisch: viel Grammatik, wenig Sprechen. Deshalb verstehen viele Leute Englisch gut, trauen sich aber nicht zu sprechen. Genau diesen Fehler habe ich am Anfang beim Deutschen wiederholt.

Folie 4. Was mir geholfen hat: jeden Tag ein bisschen statt einmal in der Woche viel, Filme mit deutschen Untertiteln und ein Heft, in das ich nur Sätze schreibe, die ich wirklich brauche. Was nicht geholfen hat: lange Vokabellisten ohne Zusammenhang und die Angst, Fehler zu machen.

Folie 5. Meiner Meinung nach lernt man eine Sprache nicht im Kurs, sondern zwischen den Kursen. Mein Rat wäre deshalb: Sucht euch eine Situation, in der ihr sprechen müsst, auch wenn es unangenehm ist. Vielen Dank für Ihre Aufmerksamkeit.`,
    checklist: [
      { de: 'Alle fünf Folien kamen vor, in der richtigen Reihenfolge.', en: 'All five slides appeared, in the right order.' },
      { de: 'Ich habe konkrete Beispiele gegeben, nicht nur allgemeine Sätze.', en: 'I gave concrete examples, not just general statements.' },
      { de: 'Ich habe Vergangenheit korrekt benutzt, um zu erzählen.', en: 'I used the past correctly to narrate.' },
      { de: 'Der Rat am Ende war konkret und umsetzbar.', en: 'The advice at the end was concrete and actionable.' },
      { de: 'Ich habe Überleitungen zwischen den Folien benutzt.', en: 'I used transitions between the slides.' },
    ],
    phrases: [
      {
        label: { de: 'Erfahrungen bewerten', en: 'Evaluating experiences' },
        items: [
          'Das hat mir sehr geholfen.',
          'Ehrlich gesagt hat das nicht viel gebracht.',
          'Der Durchbruch kam, als …',
        ],
      },
      {
        label: { de: 'Rat geben', en: 'Giving advice' },
        items: [
          'Mein Rat wäre: …',
          'Ich würde jedem empfehlen, … zu …',
          'An eurer Stelle würde ich …',
        ],
      },
    ],
  },

  {
    id: 's2c',
    teil: 2,
    minutes: 3,
    prepMinutes: 15,
    title: { de: 'Teil 2: Präsentation – Gesund leben im Alltag', en: 'Part 2: presentation - staying healthy in daily life' },
    situation:
      'Halten Sie eine kurze Präsentation zum Thema "Gesund leben im Alltag". Folgen Sie den fünf Folien.',
    situationEn: 'Give a short presentation on "Staying healthy in daily life". Follow the five slides.',
    bullets: [
      'Folie 1: Thema und Ablauf.',
      'Folie 2: Ihre persönliche Erfahrung.',
      'Folie 3: Die Situation in Ihrem Heimatland.',
      'Folie 4: Was ist schwierig daran?',
      'Folie 5: Ihre Meinung und Ihr Schluss.',
    ],
    model: `Folie 1. Mein Thema ist "Gesund leben im Alltag". Ich spreche zuerst über meine eigene Situation, dann über mein Heimatland, danach über die Schwierigkeiten, und am Ende sage ich meine Meinung.

Folie 2. Ich arbeite acht Stunden am Schreibtisch und habe zwei Kinder. Früher habe ich gedacht, gesund leben bedeutet, dreimal pro Woche ins Fitnessstudio zu gehen. Das habe ich genau einen Monat durchgehalten. Seit einem Jahr mache ich etwas anderes: Ich fahre mit dem Rad zur Arbeit, das sind zwanzig Minuten pro Strecke. Das kostet mich keine extra Zeit und funktioniert seitdem jeden Tag.

Folie 3. In meinem Heimatland isst man traditionell viel Gemüse und kocht fast immer selbst. Das ist ein großer Vorteil. Auf der anderen Seite gehen viele Leute erst zum Arzt, wenn es wirklich weh tut. Vorsorgeuntersuchungen sind weniger üblich als hier.

Folie 4. Das Schwierigste ist für mich die Zeit, oder besser gesagt die Reihenfolge. Nach der Arbeit sind die Kinder da, dann das Abendessen, dann bin ich müde. Was ich nicht morgens erledige, erledige ich gar nicht. Dazu kommt, dass gesundes Essen mehr Vorbereitung braucht.

Folie 5. Meiner Meinung nach funktionieren nur die Dinge, die man nicht extra einplanen muss. Deshalb würde ich sagen: lieber eine kleine Änderung, die bleibt, als ein großer Plan für zwei Wochen. Danke für Ihre Aufmerksamkeit.`,
    checklist: [
      { de: 'Alle fünf Folien wurden behandelt.', en: 'All five slides were covered.' },
      { de: 'Die persönliche Folie enthielt eine echte Geschichte.', en: 'The personal slide contained a real story.' },
      { de: 'Die Schwierigkeiten wurden benannt, nicht übergangen.', en: 'The difficulties were named rather than skipped.' },
      { de: 'Es gab einen klaren Schluss mit eigener Meinung.', en: 'There was a clear ending with an opinion of my own.' },
      { de: 'Ich habe nicht abgelesen, sondern frei gesprochen.', en: 'I spoke freely rather than reading out.' },
    ],
    phrases: [
      {
        label: { de: 'Gewohnheiten beschreiben', en: 'Describing habits' },
        items: [
          'Früher habe ich …, heute …',
          'Seit einem Jahr mache ich es so: …',
          'Das funktioniert bei mir seitdem jeden Tag.',
        ],
      },
      {
        label: { de: 'Schwierigkeiten nennen', en: 'Naming difficulties' },
        items: [
          'Das Schwierigste ist für mich …',
          'Dazu kommt, dass …',
          'Was mir am meisten fehlt, ist …',
        ],
      },
    ],
  },

  {
    id: 's3a',
    teil: 3,
    minutes: 2,
    prepMinutes: 0,
    title: { de: 'Teil 3: Rückmeldung und Fragen', en: 'Part 3: feedback and questions' },
    situation:
      'Ihre Partnerin hat gerade eine Präsentation über "Leben in einer Großstadt oder auf dem Land" gehalten. Geben Sie eine kurze Rückmeldung, stellen Sie eine Frage zum Inhalt, und beantworten Sie anschließend eine Frage zu Ihrer eigenen Präsentation.',
    situationEn:
      'Your partner has just given a presentation on "City or countryside". Give brief feedback, ask a question about the content, and then answer a question about your own presentation.',
    bullets: [
      'Sagen Sie kurz, wie Ihnen die Präsentation gefallen hat.',
      'Stellen Sie eine Frage zum Inhalt, keine allgemeine Frage.',
      'Beantworten Sie die Frage der anderen Person ausführlich.',
    ],
    model: `A: Vielen Dank für deine Präsentation, sie war sehr anschaulich. Besonders interessant fand ich den Teil über dein Dorf mit vierhundert Einwohnern, weil man da den Unterschied wirklich versteht.

Eine Frage hätte ich: Du hast gesagt, dass du am Anfang einsam warst, obwohl überall Menschen waren. Was hat sich denn geändert, dass es heute anders ist?

B: Danke für die Frage. Geändert hat sich vor allem, dass ich angefangen habe, in einem Verein mitzumachen. Vorher kannte ich niemanden außer den Kollegen. Im Verein sieht man dieselben Leute jede Woche, und daraus sind Freundschaften geworden. Ich glaube, in einer Großstadt muss man sich seine Nachbarschaft selbst suchen; im Dorf ist sie einfach da.

B: Und ich hätte auch eine Frage an dich: Du hast in deiner Präsentation gesagt, dass Vorsorgeuntersuchungen in deinem Heimatland weniger üblich sind. Woran liegt das deiner Meinung nach?

A: Das hat verschiedene Gründe. Erstens muss man oft weit fahren, weil es auf dem Land kaum Fachärzte gibt. Zweitens kostet vieles Geld, das nicht jeder hat. Und drittens gibt es eine Haltung, die ich auch aus meiner Familie kenne: Man geht zum Arzt, wenn etwas kaputt ist, nicht vorher. Ich finde, das ändert sich gerade bei den Jüngeren, aber langsam.`,
    checklist: [
      { de: 'Die Rückmeldung war konkret und nannte einen Teil der Präsentation.', en: 'The feedback was concrete and referred to a specific part.' },
      { de: 'Meine Frage bezog sich auf den Inhalt, nicht auf Allgemeines.', en: 'My question was about the content, not something generic.' },
      { de: 'Ich habe meine Antwort begründet und nicht nur ja oder nein gesagt.', en: 'I justified my answer instead of only saying yes or no.' },
      { de: 'Ich habe mich für die Frage bedankt.', en: 'I thanked the other person for the question.' },
      { de: 'Die Antwort hatte mindestens zwei Gründe oder Beispiele.', en: 'The answer contained at least two reasons or examples.' },
    ],
    phrases: [
      {
        label: { de: 'Rückmeldung geben', en: 'Giving feedback' },
        items: [
          'Vielen Dank für deine Präsentation.',
          'Besonders interessant fand ich …',
          'Mir hat gefallen, dass du …',
          'Das war gut erklärt.',
        ],
      },
      {
        label: { de: 'Fragen stellen', en: 'Asking questions' },
        items: [
          'Eine Frage hätte ich noch: …',
          'Du hast gesagt, dass … Wie meinst du das genau?',
          'Könntest du das an einem Beispiel erklären?',
          'Mich würde interessieren, ob …',
        ],
      },
      {
        label: { de: 'Antworten', en: 'Answering' },
        items: [
          'Danke für die Frage.',
          'Das hat verschiedene Gründe. Erstens …',
          'Bei mir war es konkret so: …',
          'Ich glaube, das liegt daran, dass …',
        ],
      },
    ],
  },

  {
    id: 's3b',
    teil: 3,
    minutes: 2,
    prepMinutes: 0,
    title: { de: 'Teil 3: Nachfragen zur Präsentation', en: 'Part 3: following up on a presentation' },
    situation:
      'Ihr Partner hat eine Präsentation über "Eine Fremdsprache lernen" gehalten. Geben Sie Rückmeldung, fragen Sie nach, und beantworten Sie danach seine Frage zu Ihrer Präsentation.',
    situationEn:
      'Your partner gave a presentation on "Learning a foreign language". Give feedback, ask a follow-up, then answer his question about your presentation.',
    bullets: [
      'Geben Sie eine kurze, konkrete Rückmeldung.',
      'Fragen Sie nach einem Punkt, den Sie genauer wissen möchten.',
      'Beantworten Sie die Gegenfrage mit Begründung und Beispiel.',
    ],
    model: `A: Danke für die Präsentation, ich habe mich in einigen Punkten wiedererkannt. Vor allem der Satz, dass man eine Sprache zwischen den Kursen lernt, ist mir hängen geblieben.

Darf ich nachfragen? Du hast von deinem Heft gesprochen, in das du nur Sätze schreibst, die du wirklich brauchst. Wie entscheidest du, welcher Satz da hineinkommt?

B: Gute Frage. Die Regel ist einfach: Ein Satz kommt ins Heft, wenn ich ihn in derselben Woche schon zweimal gebraucht hätte. Also zum Beispiel "Könnten Sie das bitte wiederholen?" oder "Ich hätte gern einen Termin". Keine schönen Sätze aus dem Buch, sondern die, die mir im Mund gefehlt haben. Deshalb ist mein Heft sehr unordentlich, aber jeder Satz darin ist bezahlt worden, sozusagen.

B: Ich hätte auch eine Frage: Du hast gesagt, dass dir das Fitnessstudio nicht geholfen hat, das Radfahren aber schon. Würdest du sagen, dass das an der Zeit lag oder an etwas anderem?

A: Ich glaube, es lag weniger an der Zeit als an der Entscheidung. Für das Fitnessstudio musste ich mich jeden Tag neu entscheiden, und irgendwann habe ich mich dagegen entschieden. Auf dem Weg zur Arbeit gibt es diese Entscheidung nicht, ich muss ja sowieso hin. Deshalb würde ich sagen: Was eine tägliche Entscheidung braucht, hält bei mir nicht lange.`,
    checklist: [
      { de: 'Die Rückmeldung nannte einen konkreten Punkt aus der Präsentation.', en: 'The feedback named a concrete point from the presentation.' },
      { de: 'Die Frage ging in die Tiefe, statt nur zu wiederholen.', en: 'The question went deeper instead of merely repeating.' },
      { de: 'Die Antwort enthielt ein Beispiel.', en: 'The answer contained an example.' },
      { de: 'Ich habe natürlich reagiert, nicht nur abgelesen.', en: 'I reacted naturally rather than reading out.' },
    ],
    phrases: [
      {
        label: { de: 'Nachfragen', en: 'Following up' },
        items: [
          'Darf ich kurz nachfragen?',
          'Wie entscheidest du, ob …?',
          'Was genau meinst du mit …?',
          'Hättest du dafür ein Beispiel?',
        ],
      },
      {
        label: { de: 'Abwägend antworten', en: 'Answering with nuance' },
        items: [
          'Ich glaube, es lag weniger an … als an …',
          'Teilweise ja, aber …',
          'Deshalb würde ich sagen, dass …',
        ],
      },
    ],
  },

  {
    id: 's1c',
    teil: 1,
    minutes: 3,
    prepMinutes: 0,
    title: { de: 'Teil 1: Einen Besuch organisieren', en: 'Part 1: organising a visit' },
    situation:
      'Eine Freundin aus Ihrem Heimatland besucht Sie und Ihre Partnerin bzw. Ihren Partner für ein Wochenende. Planen Sie gemeinsam den Besuch.',
    situationEn:
      'A friend from your home country is visiting you and your partner for a weekend. Plan the visit together.',
    bullets: [
      'Wie holen wir sie ab?',
      'Wo schläft sie?',
      'Was zeigen wir ihr in der Stadt?',
      'Was kochen wir oder wo essen wir?',
      'Was machen wir, wenn es regnet?',
    ],
    model: `A: Sie kommt am Freitag um acht Uhr abends am Hauptbahnhof an. Ich würde sie abholen, mit dem Auto ist es nur eine Viertelstunde.

B: Gute Idee, dann muss sie nicht mit dem Gepäck umsteigen. Und wo schläft sie? Bei mir ist das Sofa ziemlich unbequem.

A: Bei mir ist das Zimmer meines Sohnes frei, er ist übers Wochenende bei seinem Vater. Das wäre die beste Lösung.

B: Perfekt. Was zeigen wir ihr? Samstagvormittag würde ich den Markt vorschlagen und danach einen Spaziergang am Fluss.

A: Einverstanden. Nachmittags könnten wir ins Museum gehen, das ist samstags nach vier kostenlos.

B: Und das Essen? Ich würde am Samstagabend gern selbst kochen, dann sitzen wir in Ruhe zusammen.

A: Sehr gern. Ich bringe den Nachtisch mit. Und falls es regnet?

B: Dann fällt der Spaziergang aus, und wir gehen stattdessen länger ins Museum oder in das Café am Markt. So oder so wird es ein schönes Wochenende.

A: Also: Ich hole sie ab, sie schläft bei mir, Samstag Markt und Fluss, abends kochen wir bei dir, und bei Regen weichen wir ins Museum aus.`,
    checklist: [
      { de: 'Alle fünf Punkte wurden besprochen.', en: 'All five points were discussed.' },
      { de: 'Ich habe eine Alternative für den Regenfall genannt.', en: 'I named an alternative for the rainy case.' },
      { de: 'Wir haben die Aufgaben klar verteilt.', en: 'We divided the tasks clearly.' },
      { de: 'Am Ende habe ich das Ergebnis zusammengefasst.', en: 'At the end I summarised the outcome.' },
      { de: 'Ich habe nicht nur zugestimmt, sondern auch eigene Ideen eingebracht.', en: 'I did not only agree but also brought in my own ideas.' },
    ],
    phrases: [
      {
        label: { de: 'Planen', en: 'Planning' },
        items: [
          'Ich würde vorschlagen, dass ich …',
          'Wir könnten am Samstagvormittag …',
          'Was hältst du davon, wenn wir …?',
        ],
      },
      {
        label: { de: 'Für den Notfall planen', en: 'Planning for contingencies' },
        items: [
          'Und falls es regnet?',
          'Dann weichen wir auf … aus.',
          'Als Alternative hätten wir noch …',
        ],
      },
    ],
  },
];
