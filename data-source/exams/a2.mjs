/**
 * The A2 exam, in the shape of Goethe-Zertifikat A2 and telc Deutsch A2.
 *
 * The step up from A1 is that the answer is no longer sitting in one line of
 * the text. An A2 reading task asks you to match people to adverts, which means
 * holding two things in your head and rejecting the near-misses; the listening
 * is a real conversation rather than an announcement; and the writing asks for
 * a reason, not just a fact.
 *
 * All names, places and companies are invented for this app.
 */
export const A2_READING = [
  {
    id: 'l.a2.1',
    level: 'A2',
    teil: 2,
    minutes: 10,
    title: { de: 'Teil 2: Anzeigen und Personen', en: 'Part 2: adverts and people' },
    instructions: {
      de: 'Lies die Anzeigen und die Situationen. Welche Anzeige passt?',
      en: 'Read the adverts and the situations. Which advert fits?',
    },
    texts: [
      {
        heading: 'A — Deutsch am Abend',
        body: 'Deutschkurs A2, montags und mittwochs 18–20 Uhr, Volkshochschule Nord. 12 Wochen, 140 Euro. Auch für Berufstätige geeignet. Anmeldung online.',
      },
      {
        heading: 'B — Sprachcafé Kastanie',
        body: 'Jeden Freitag ab 17 Uhr Deutsch sprechen bei Kaffee und Kuchen. Kostenlos, keine Anmeldung, alle Niveaus willkommen. Kein Unterricht, nur Gespräche.',
      },
      {
        heading: 'C — Intensivkurs Sommer',
        body: 'Vier Wochen Deutsch, Montag bis Freitag 9–14 Uhr. Schnell von A2 nach B1. 620 Euro, Prüfung am Ende inklusive.',
      },
      {
        heading: 'D — Lernpatenschaft',
        body: 'Ehrenamtliche helfen beim Deutschlernen, einmal pro Woche, Zeit nach Absprache. Kostenlos. Für Eltern mit kleinen Kindern: Kinderbetreuung möglich.',
      },
    ],
    items: [
      [
        'Frau Nowak arbeitet tagsüber und möchte einen richtigen Kurs mit Unterricht.',
        ['A', 'B', 'C', 'D'],
        0,
        'A ist abends und ausdrücklich für Berufstätige. C ist tagsüber, B ist kein Unterricht.',
        'A is in the evening and explicitly for people in work. C is during the day; B is not a class.',
        'Mrs Nowak works during the day and wants a proper class.',
      ],
      [
        'Herr Said will nur sprechen üben und hat kein Geld dafür.',
        ['B', 'A', 'C', 'D'],
        0,
        'B ist kostenlos und ausdrücklich nur Gespräche.',
        'B is free and explicitly conversation only.',
        'Mr Said only wants speaking practice and has no money for it.',
      ],
      [
        'Frau Petrova hat im Sommer frei und will schnell die B1-Prüfung machen.',
        ['C', 'A', 'B', 'D'],
        0,
        'C führt in vier Wochen nach B1 und enthält die Prüfung.',
        'C goes to B1 in four weeks and includes the exam.',
        'Mrs Petrova is free in the summer and wants to take the B1 exam quickly.',
      ],
      [
        'Herr Demir ist zu Hause bei seinem kleinen Sohn und sucht etwas Flexibles.',
        ['D', 'A', 'B', 'C'],
        0,
        'D ist nach Absprache und bietet Kinderbetreuung.',
        'D is by arrangement and offers childcare.',
        'Mr Demir is at home with his small son and wants something flexible.',
      ],
      [
        'Welche Anzeige nennt keinen Preis?',
        ['B und D', 'nur B', 'nur D', 'A und C'],
        0,
        'B und D sind beide kostenlos; A kostet 140 Euro, C 620 Euro.',
        'B and D are both free; A costs 140 euros, C 620.',
        'Which adverts give no price?',
      ],
    ],
  },
];

export const A2_LISTENING = [
  {
    id: 'h.a2.1',
    level: 'A2',
    teil: 3,
    minutes: 10,
    plays: 2,
    title: { de: 'Teil 3: Ein Gespräch beim Hausmeister', en: 'Part 3: a conversation with the caretaker' },
    instructions: {
      de: 'Du hörst ein Gespräch, zweimal. Beantworte danach die Fragen.',
      en: 'You will hear a conversation twice. Then answer the questions.',
    },
    script: [
      { speaker: 'Frau Ritter', text: 'Guten Morgen, Herr Kowal. Haben Sie kurz Zeit? Bei mir in der Wohnung ist seit gestern das Wasser kalt.' },
      { speaker: 'Herr Kowal', text: 'Guten Morgen. Seit gestern schon? Das haben Sie mir gar nicht gesagt. In welcher Wohnung sind Sie noch mal?' },
      { speaker: 'Frau Ritter', text: 'Dritter Stock links, Nummer zwölf. Ich habe gestern Abend angerufen, aber es ist niemand drangegangen.' },
      { speaker: 'Herr Kowal', text: 'Ach so, gestern Abend war ich beim Arzt. Also, kalt ist das Wasser nur bei Ihnen oder auch bei den Nachbarn?' },
      { speaker: 'Frau Ritter', text: 'Das weiß ich nicht. Frau Özdemir nebenan ist im Urlaub, und bei den anderen habe ich noch nicht gefragt.' },
      { speaker: 'Herr Kowal', text: 'Gut. Ich schaue mir heute Nachmittag die Heizung im Keller an. Wenn das Problem dort ist, dauert es bis morgen. Wenn es nur Ihre Wohnung ist, muss ein Installateur kommen, und das dauert leider länger.' },
      { speaker: 'Frau Ritter', text: 'Wie lange ungefähr?' },
      { speaker: 'Herr Kowal', text: 'Zwei, drei Tage. Ich melde mich auf jeden Fall heute Abend bei Ihnen. Haben Sie eine Handynummer?' },
      { speaker: 'Frau Ritter', text: 'Ja, ich schreibe sie Ihnen auf. Und können Sie mir das danach bitte auch schriftlich geben? Für den Vermieter.' },
      { speaker: 'Herr Kowal', text: 'Mache ich. Ich schicke Ihnen eine kurze E-Mail, sobald ich im Keller war.' },
    ],
    items: [
      [
        'Seit wann ist das Wasser kalt?',
        ['seit gestern', 'seit heute Morgen', 'seit einer Woche', 'seit drei Tagen'],
        0,
        '"… ist seit gestern das Wasser kalt."',
        '"… the water has been cold since yesterday."',
        'Since when has the water been cold?',
      ],
      [
        'Warum ist gestern Abend niemand ans Telefon gegangen?',
        ['Herr Kowal war beim Arzt.', 'Er hatte Urlaub.', 'Das Telefon war kaputt.', 'Er hat geschlafen.'],
        0,
        '"… gestern Abend war ich beim Arzt."',
        '"… last night I was at the doctor’s."',
        'Why did nobody answer the phone last night?',
      ],
      [
        'Was macht Herr Kowal als Nächstes?',
        [
          'Er sieht sich die Heizung im Keller an.',
          'Er ruft einen Installateur.',
          'Er fragt die Nachbarn.',
          'Er schreibt dem Vermieter.',
        ],
        0,
        '"Ich schaue mir heute Nachmittag die Heizung im Keller an."',
        '"I will look at the heating in the cellar this afternoon."',
        'What does Herr Kowal do next?',
      ],
      [
        'Wie lange dauert es, wenn ein Installateur kommen muss?',
        ['zwei bis drei Tage', 'bis morgen', 'eine Woche', 'einen Nachmittag'],
        0,
        '"Zwei, drei Tage."',
        '"Two or three days."',
        'How long does it take if a plumber has to come?',
      ],
      [
        'Warum will Frau Ritter etwas Schriftliches?',
        ['für den Vermieter', 'für die Versicherung', 'für den Installateur', 'für die Nachbarin'],
        0,
        '"… bitte auch schriftlich geben? Für den Vermieter."',
        '"… in writing too, please? For the landlord."',
        'Why does Frau Ritter want something in writing?',
      ],
    ],
  },
];

export const A2_WRITING = [
  {
    id: 'w.a2.1',
    level: 'A2',
    teil: 1,
    minutes: 25,
    minWords: 50,
    register: 'formell',
    title: { de: 'Teil 1: E-Mail an den Vermieter', en: 'Part 1: email to the landlord' },
    situation:
      'In Ihrer Wohnung ist seit drei Tagen die Heizung kalt. Sie haben den Hausmeister schon angerufen, aber nichts ist passiert. Schreiben Sie eine E-Mail an Ihren Vermieter, Herrn Brandt.',
    situationEn:
      'The heating in your flat has been cold for three days. You have already called the caretaker, but nothing has happened. Write an email to your landlord, Mr Brandt.',
    bullets: [
      'Beschreiben Sie das Problem genau.',
      'Schreiben Sie, was Sie schon gemacht haben.',
      'Bitten Sie um eine schnelle Reparatur und nennen Sie eine Frist.',
    ],
    model: `Sehr geehrter Herr Brandt,

mein Name ist Carla Mendes, ich wohne in der Lessingstraße 8, Wohnung 12.

seit Montag ist die Heizung in meiner Wohnung kalt. Im Wohnzimmer sind es nur noch 15 Grad. Ich habe am Montag und am Dienstag den Hausmeister angerufen, aber bisher ist leider niemand gekommen.

Ich bitte Sie, die Heizung bis Freitag reparieren zu lassen. Ich bin von Montag bis Freitag ab 16 Uhr zu Hause und am Wochenende den ganzen Tag.

Vielen Dank im Voraus.

Mit freundlichen Grüßen
Carla Mendes`,
    checklist: [
      { de: 'Ich habe die höfliche Anrede "Sehr geehrter Herr …" benutzt.', en: 'I used the formal greeting "Sehr geehrter Herr …".' },
      { de: 'Ich habe das Problem genau beschrieben, nicht nur "kaputt".', en: 'I described the problem precisely, not just "broken".' },
      { de: 'Ich habe geschrieben, was ich schon versucht habe.', en: 'I wrote what I had already tried.' },
      { de: 'Ich habe eine Frist oder eine Zeit genannt.', en: 'I named a deadline or a time.' },
      { de: 'Ich habe mit "Mit freundlichen Grüßen" und meinem Namen geschlossen.', en: 'I closed with "Mit freundlichen Grüßen" and my name.' },
      { de: 'Ich habe mindestens 50 Wörter geschrieben.', en: 'I wrote at least 50 words.' },
    ],
    phrases: [
      {
        label: { de: 'Formelle Anrede und Schluss', en: 'Formal greeting and sign-off' },
        items: [
          'Sehr geehrte Frau …, / Sehr geehrter Herr …,',
          'Mit freundlichen Grüßen',
          'Vielen Dank im Voraus.',
        ],
      },
      {
        label: { de: 'Problem beschreiben', en: 'Describing the problem' },
        items: [
          'Seit … funktioniert … nicht.',
          'Das Problem ist, dass …',
          'Ich habe schon … angerufen.',
          'Bisher ist leider nichts passiert.',
        ],
      },
      {
        label: { de: 'Höflich bitten', en: 'Asking politely' },
        items: [
          'Ich bitte Sie, … zu reparieren.',
          'Könnten Sie bitte …?',
          'Ich wäre Ihnen dankbar, wenn …',
        ],
      },
    ],
  },
];

export const A2_SPEAKING = [
  {
    id: 's.a2.1',
    level: 'A2',
    teil: 3,
    minutes: 5,
    prepMinutes: 2,
    title: { de: 'Teil 3: Etwas zusammen planen', en: 'Part 3: planning something together' },
    situation:
      'Eine Kollegin verlässt die Firma. Sie wollen zusammen mit Ihrem Partner einen kleinen Abschied organisieren. Sprechen Sie darüber und einigen Sie sich.',
    situationEn:
      'A colleague is leaving the company. You and your partner want to organise a small send-off. Talk it over and agree on a plan.',
    bullets: [
      'Wann und wo? Machen Sie einen Vorschlag.',
      'Was essen und trinken Sie? Wer kauft ein?',
      'Was schenken Sie? Was kostet es?',
    ],
    model: `A: Wollen wir für Frau Lange etwas machen? Sie geht ja Ende des Monats.

B: Ja, gute Idee. Wann passt es denn? Am Freitagnachmittag?

A: Freitag ist gut. Vielleicht um vier Uhr im Pausenraum? Dann sind alle noch da.

B: Einverstanden. Und was essen wir? Ich könnte einen Kuchen backen.

A: Super. Dann kaufe ich Getränke und Becher. Kaffee haben wir ja im Büro.

B: Und ein Geschenk? Ich schlage einen Gutschein vor, vielleicht fünfzig Euro.

A: Das finde ich gut. Wenn zehn Leute mitmachen, sind das nur fünf Euro pro Person.

B: Perfekt. Ich frage die Kollegen, und du bestellst den Gutschein. Abgemacht?

A: Abgemacht.`,
    checklist: [
      { de: 'Ich habe einen Vorschlag für Zeit und Ort gemacht.', en: 'I made a suggestion about time and place.' },
      { de: 'Ich habe auf die Vorschläge meines Partners reagiert.', en: 'I responded to my partner’s suggestions.' },
      { de: 'Ich habe alle drei Punkte besprochen.', en: 'I covered all three points.' },
      { de: 'Wir sind am Ende zu einer Einigung gekommen.', en: 'We reached an agreement at the end.' },
      { de: 'Ich habe nicht nur zugestimmt, sondern auch selbst etwas vorgeschlagen.', en: 'I did not just agree – I suggested things myself.' },
    ],
    phrases: [
      {
        label: { de: 'Vorschlagen', en: 'Suggesting' },
        items: ['Wollen wir …?', 'Ich schlage vor, …', 'Wie wäre es mit …?', 'Vielleicht könnten wir …'],
      },
      {
        label: { de: 'Zustimmen und ablehnen', en: 'Agreeing and disagreeing' },
        items: ['Das finde ich gut.', 'Einverstanden.', 'Das ist eine gute Idee.', 'Hm, lieber nicht. Wie wäre es stattdessen …?'],
      },
      {
        label: { de: 'Abschließen', en: 'Wrapping up' },
        items: ['Abgemacht.', 'Dann machen wir das so.', 'Wer macht was?', 'Ich kümmere mich um …'],
      },
    ],
  },
];
