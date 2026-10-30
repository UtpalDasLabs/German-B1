/**
 * The course: ordered units, each with the goals it is there to deliver.
 *
 * A unit is a view over material, not a container for it. It names the themes,
 * grammar topics and exam tasks it draws on, so one word still belongs to one
 * theme at one level however many units point at it. The build script rejects a
 * unit that points at material which does not exist, and a unit that claims to
 * teach a grammar topic tagged at a different level.
 *
 * The can-do statements are the CEFR descriptors in the first person, cut down
 * until each one is small enough to tick off in a sitting. They are what makes
 * a goal legible: "72% of B1" tells a learner nothing they can act on, whereas
 * "I can describe my own flat" tells them exactly what to go and try.
 */
export const COURSE = [
  {
    level: 'A1',
    units: [
      {
        title: { de: 'Hallo! Ich bin …', en: 'Hello! I am …' },
        icon: '\u{1F44B}',
        blurb: {
          de: 'Sich vorstellen, jemanden begrüßen, den Namen buchstabieren.',
          en: 'Introduce yourself, greet someone, spell your name.',
        },
        canDos: [
          { area: 'sprechen', text: { de: 'Ich kann mich vorstellen: Name, Herkunft, Wohnort.', en: 'I can introduce myself: name, origin, where I live.' } },
          { area: 'sprechen', text: { de: 'Ich kann jemanden begrüßen und mich verabschieden.', en: 'I can greet someone and say goodbye.' } },
          { area: 'hoeren', text: { de: 'Ich kann einen Namen und eine Telefonnummer verstehen, wenn man sie buchstabiert.', en: 'I can understand a name and a phone number when they are spelled out.' } },
          { area: 'grammatik', text: { de: 'Ich kann Verben im Präsens richtig konjugieren.', en: 'I can conjugate verbs correctly in the present tense.' } },
        ],
        themes: ['familie', 'kommunikation'],
        grammar: ['praesens', 'wfragen'],
        tasks: ['s.a1.1'],
      },
      {
        title: { de: 'Mein Zuhause', en: 'My home' },
        icon: '\u{1F3E0}',
        blurb: {
          de: 'Die Wohnung beschreiben, sagen wo etwas ist, Möbel benennen.',
          en: 'Describe your flat, say where things are, name the furniture.',
        },
        canDos: [
          { area: 'sprechen', text: { de: 'Ich kann meine Wohnung beschreiben: Zimmer, Größe, Möbel.', en: 'I can describe my flat: rooms, size, furniture.' } },
          { area: 'wortschatz', text: { de: 'Ich kenne den Artikel zu den Wörtern, die ich lerne.', en: 'I know the article that goes with the words I learn.' } },
          { area: 'grammatik', text: { de: 'Ich kann der, die, das und ein, eine richtig verwenden.', en: 'I can use der, die, das and ein, eine correctly.' } },
        ],
        themes: ['wohnen'],
        grammar: ['artikel', 'possessiv'],
        tasks: [],
      },
      {
        title: { de: 'Einkaufen und essen', en: 'Shopping and eating' },
        icon: '\u{1F6D2}',
        blurb: {
          de: 'Im Laden und im Restaurant: bestellen, nach dem Preis fragen, bezahlen.',
          en: 'In the shop and the restaurant: order, ask the price, pay.',
        },
        canDos: [
          { area: 'sprechen', text: { de: 'Ich kann im Restaurant etwas bestellen und bezahlen.', en: 'I can order something in a restaurant and pay.' } },
          { area: 'sprechen', text: { de: 'Ich kann nach dem Preis fragen und die Antwort verstehen.', en: 'I can ask the price and understand the answer.' } },
          { area: 'grammatik', text: { de: 'Ich kann den Akkusativ nach haben, brauchen und möchten bilden.', en: 'I can form the accusative after haben, brauchen and möchten.' } },
          { area: 'grammatik', text: { de: 'Ich kann mit nicht und kein richtig verneinen.', en: 'I can negate correctly with nicht and kein.' } },
        ],
        themes: ['essen', 'einkaufen'],
        grammar: ['akkusativ', 'negation'],
        tasks: ['l.a1.2'],
      },
      {
        title: { de: 'Mein Tag', en: 'My day' },
        icon: '⏰',
        blurb: {
          de: 'Uhrzeit, Wochentage, Termine und der eigene Tagesablauf.',
          en: 'Telling the time, days of the week, appointments and your own routine.',
        },
        canDos: [
          { area: 'sprechen', text: { de: 'Ich kann die Uhrzeit sagen und nach ihr fragen.', en: 'I can tell the time and ask for it.' } },
          { area: 'sprechen', text: { de: 'Ich kann meinen Tagesablauf erzählen.', en: 'I can describe my daily routine.' } },
          { area: 'sprechen', text: { de: 'Ich kann einen Termin vereinbaren oder verschieben.', en: 'I can arrange or move an appointment.' } },
          { area: 'grammatik', text: { de: 'Ich kann trennbare Verben richtig stellen: "Ich stehe um sechs auf."', en: 'I can position separable verbs correctly: "Ich stehe um sechs auf."' } },
        ],
        themes: ['zeit', 'verben'],
        grammar: ['satzklammer', 'trennbar'],
        tasks: ['l.a1.1', 'w.a1.1'],
      },
      {
        title: { de: 'Unterwegs', en: 'Getting around' },
        icon: '\u{1F68C}',
        blurb: {
          de: 'Nach dem Weg fragen, Fahrkarten kaufen, Bus und Bahn benutzen.',
          en: 'Ask the way, buy tickets, use buses and trains.',
        },
        canDos: [
          { area: 'sprechen', text: { de: 'Ich kann nach dem Weg fragen und eine Wegbeschreibung verstehen.', en: 'I can ask the way and understand directions.' } },
          { area: 'sprechen', text: { de: 'Ich kann eine Fahrkarte kaufen und nach der Abfahrt fragen.', en: 'I can buy a ticket and ask when it leaves.' } },
          { area: 'hoeren', text: { de: 'Ich kann eine Ansage am Bahnhof in den Grundzügen verstehen.', en: 'I can get the gist of an announcement at the station.' } },
          { area: 'grammatik', text: { de: 'Ich kann höfliche Aufforderungen mit dem Imperativ bilden.', en: 'I can make polite requests with the imperative.' } },
        ],
        themes: ['verkehr', 'stadt'],
        grammar: ['imperativ'],
        tasks: ['h.a1.1'],
      },
      {
        title: { de: 'Gesundheit und Freizeit', en: 'Health and free time' },
        icon: '\u{1F3BE}',
        blurb: {
          de: 'Beim Arzt sagen, was fehlt. Über Hobbys und Pläne sprechen.',
          en: 'Tell the doctor what is wrong. Talk about hobbies and plans.',
        },
        canDos: [
          { area: 'sprechen', text: { de: 'Ich kann beim Arzt sagen, was mir fehlt.', en: 'I can tell the doctor what is wrong with me.' } },
          { area: 'sprechen', text: { de: 'Ich kann über meine Hobbys sprechen und sagen, was ich gern mache.', en: 'I can talk about my hobbies and say what I like doing.' } },
          { area: 'sprechen', text: { de: 'Ich kann mit können, müssen und möchten sagen, was möglich und nötig ist.', en: 'I can use können, müssen and möchten to say what is possible and necessary.' } },
          { area: 'lesen', text: { de: 'Ich kann einfache Schilder, Formulare und kurze Mitteilungen verstehen.', en: 'I can understand simple signs, forms and short notices.' } },
        ],
        themes: ['gesundheit', 'freizeit', 'behoerden'],
        grammar: ['modalverben'],
        tasks: [],
      },
    ],
  },

  {
    level: 'A2',
    units: [
      {
        title: { de: 'Erzählen, was passiert ist', en: 'Telling what happened' },
        icon: '\u23EA',
        blurb: {
          de: 'Das Perfekt für fast alles, war und hatte für den Rest.',
          en: 'The Perfekt for almost everything, war and hatte for the rest.',
        },
        canDos: [
          { area: 'sprechen', text: { de: 'Ich kann erzählen, was ich am Wochenende gemacht habe.', en: 'I can say what I did at the weekend.' } },
          { area: 'grammatik', text: { de: 'Ich weiß, wann ein Verb haben und wann es sein nimmt.', en: 'I know when a verb takes haben and when it takes sein.' } },
          { area: 'grammatik', text: { de: 'Ich benutze war, hatte und musste statt der Perfektform.', en: 'I use war, hatte and musste instead of the Perfekt form.' } },
          { area: 'schreiben', text: { de: 'Ich kann einer Freundin kurz schreiben, wie mein Urlaub war.', en: 'I can write a friend a short note about my holiday.' } },
        ],
        themes: ['zeit', 'verben'],
        grammar: ['perfekt', 'vergangenheita2'],
        tasks: [],
      },
      {
        title: { de: 'Wem? Der Dativ', en: 'To whom? The dative' },
        icon: '\u{1F449}',
        blurb: {
          de: 'Wer bekommt etwas, wem hilfst du, und wo steht das Fahrrad.',
          en: 'Who receives something, who you help, and where the bike is.',
        },
        canDos: [
          { area: 'grammatik', text: { de: 'Ich kann den Dativ nach mit, bei, nach, seit, von und zu bilden.', en: 'I can form the dative after mit, bei, nach, seit, von and zu.' } },
          { area: 'grammatik', text: { de: 'Ich unterscheide "in die Küche" von "in der Küche".', en: 'I can tell "in die Küche" from "in der Küche".' } },
          { area: 'sprechen', text: { de: 'Ich kann sagen, wo etwas ist und wohin ich gehe.', en: 'I can say where something is and where I am going.' } },
        ],
        themes: ['wohnen', 'verkehr'],
        grammar: ['dativ', 'wechselpraepositionen'],
        tasks: [],
      },
      {
        title: { de: 'Nachbarn und Probleme', en: 'Neighbours and problems' },
        icon: '\u{1F3E0}',
        blurb: {
          de: 'Sich beschweren, einen Schaden melden, einen Grund nennen.',
          en: 'Complain, report a fault, give a reason.',
        },
        canDos: [
          { area: 'schreiben', text: { de: 'Ich kann dem Vermieter einen Schaden schriftlich melden.', en: 'I can report a fault to the landlord in writing.' } },
          { area: 'grammatik', text: { de: 'Ich kann mit weil, dass und wenn Nebensätze bilden.', en: 'I can build subordinate clauses with weil, dass and wenn.' } },
          { area: 'sprechen', text: { de: 'Ich kann mich höflich beschweren, ohne unhöflich zu werden.', en: 'I can complain politely without being rude.' } },
        ],
        themes: ['wohnen', 'kommunikation'],
        grammar: ['nebensaetze'],
        tasks: ['w.a2.1', 'h.a2.1'],
      },
      {
        title: { de: 'Arbeit und Bewerbung', en: 'Work and applications' },
        icon: '\u{1F4BC}',
        blurb: {
          de: 'Eine Stelle suchen, sich bewerben, über Erfahrung sprechen.',
          en: 'Look for a job, apply, talk about your experience.',
        },
        canDos: [
          { area: 'lesen', text: { de: 'Ich kann einer Stellenanzeige entnehmen, was verlangt wird.', en: 'I can work out from a job advert what is being asked for.' } },
          { area: 'sprechen', text: { de: 'Ich kann im Vorstellungsgespräch über meine Erfahrung sprechen.', en: 'I can talk about my experience in a job interview.' } },
          { area: 'grammatik', text: { de: 'Ich kann Sätze mit "zu" und "um … zu" bilden.', en: 'I can build sentences with "zu" and "um … zu".' } },
        ],
        themes: ['arbeit', 'bildung'],
        grammar: ['infinitivsaetze'],
        tasks: ['l.a2.1'],
      },
      {
        title: { de: 'Gesundheit und Ämter', en: 'Health and officialdom' },
        icon: '\u{1F3E5}',
        blurb: {
          de: 'Beim Arzt und auf dem Amt: erklären, nachfragen, Termine machen.',
          en: 'At the doctor and the public office: explain, ask, make appointments.',
        },
        canDos: [
          { area: 'sprechen', text: { de: 'Ich kann beim Arzt genau beschreiben, was mir fehlt.', en: 'I can describe exactly what is wrong with me at the doctor\u2019s.' } },
          { area: 'hoeren', text: { de: 'Ich kann am Telefon einen Termin vereinbaren.', en: 'I can arrange an appointment on the phone.' } },
          { area: 'grammatik', text: { de: 'Ich kann reflexive Verben richtig verwenden: sich fühlen, sich anmelden.', en: 'I can use reflexive verbs correctly: sich fühlen, sich anmelden.' } },
          { area: 'lesen', text: { de: 'Ich kann einem Formular entnehmen, was ich eintragen muss.', en: 'I can work out from a form what I have to enter.' } },
        ],
        themes: ['gesundheit', 'behoerden'],
        grammar: ['reflexiv'],
        tasks: [],
      },
      {
        title: { de: 'Vergleichen und beschreiben', en: 'Comparing and describing' },
        icon: '\u2696\uFE0F',
        blurb: {
          de: 'Größer, am besten, der neue Mantel: Vergleich und Adjektivendung.',
          en: 'Bigger, best, the new coat: comparison and adjective endings.',
        },
        canDos: [
          { area: 'sprechen', text: { de: 'Ich kann zwei Dinge vergleichen und begründen, was ich nehme.', en: 'I can compare two things and say why I would take one.' } },
          { area: 'grammatik', text: { de: 'Ich kann Komparativ und Superlativ bilden, auch bei gut und viel.', en: 'I can form the comparative and superlative, including gut and viel.' } },
          { area: 'grammatik', text: { de: 'Ich setze die Adjektivendung nach der, ein und ohne Artikel richtig.', en: 'I get the adjective ending right after der, after ein and with no article.' } },
        ],
        themes: ['einkaufen', 'adjektive'],
        grammar: ['komparativ', 'adjektivdeklination'],
        tasks: ['s.a2.1'],
      },
    ],
  },
  {
    level: 'B1',
    units: [
      {
        title: { de: 'Erzählen, was war', en: 'Telling what happened' },
        icon: '\u{1F553}',
        blurb: {
          de: 'Die drei Vergangenheitsformen und wann man welche nimmt.',
          en: 'The three past tenses and when each one is used.',
        },
        canDos: [
          { area: 'schreiben', text: { de: 'Ich kann eine Geschichte in der Vergangenheit zusammenhängend erzählen.', en: 'I can tell a story in the past as a connected whole.' } },
          { area: 'grammatik', text: { de: 'Ich kann das Präteritum beim Schreiben statt des Perfekts verwenden.', en: 'I can use the Präteritum in writing in place of the Perfekt.' } },
          { area: 'grammatik', text: { de: 'Ich kann mit nachdem und Plusquamperfekt eine Reihenfolge klarmachen.', en: 'I can use nachdem and the Plusquamperfekt to make a sequence clear.' } },
        ],
        themes: ['verben', 'zeit'],
        grammar: ['praeteritum', 'plusquamperfekt', 'futur'],
        tasks: ['w1a', 's2a'],
      },
      {
        title: { de: 'Sätze verbinden', en: 'Joining sentences up' },
        icon: '\u{1F517}',
        blurb: {
          de: 'Relativsätze, deshalb und trotzdem, und die Satzstellung im Mittelfeld.',
          en: 'Relative clauses, deshalb and trotzdem, and word order in the middle field.',
        },
        canDos: [
          { area: 'schreiben', text: { de: 'Ich kann zwei Gedanken mit einem Relativsatz zu einem Satz machen.', en: 'I can join two thoughts into one sentence with a relative clause.' } },
          { area: 'grammatik', text: { de: 'Ich kann deshalb, trotzdem und denn mit der richtigen Wortstellung verwenden.', en: 'I can use deshalb, trotzdem and denn with the right word order.' } },
          { area: 'schreiben', text: { de: 'Ich kann einen Text schreiben, der nicht aus kurzen Hauptsätzen besteht.', en: 'I can write a text that is not just a run of short main clauses.' } },
        ],
        themes: ['konnektoren'],
        grammar: ['relativsaetze', 'konnektoren', 'wortstellung', 'zweiteilige'],
        tasks: ['l1a', 'w2a'],
      },
      {
        title: { de: 'Meinung und Hypothese', en: 'Opinion and hypothesis' },
        icon: '\u{1F4AD}',
        blurb: {
          de: 'Konjunktiv II für Höflichkeit, Ratschläge und das, was man täte.',
          en: 'Konjunktiv II for politeness, advice and what you would do.',
        },
        canDos: [
          { area: 'sprechen', text: { de: 'Ich kann einen Vorschlag höflich formulieren und begründen.', en: 'I can make a suggestion politely and give reasons for it.' } },
          { area: 'sprechen', text: { de: 'Ich kann einen Ratschlag geben: "Ich würde an deiner Stelle …"', en: 'I can give advice: "If I were you I would …"' } },
          { area: 'grammatik', text: { de: 'Ich kann würde, wäre, hätte und könnte sicher einsetzen.', en: 'I can use würde, wäre, hätte and könnte with confidence.' } },
        ],
        themes: ['gefuehle'],
        grammar: ['konjunktiv2'],
        tasks: ['s1a', 's1b'],
      },
      {
        title: { de: 'Sachlich schreiben', en: 'Writing impersonally' },
        icon: '\u{1F4C4}',
        blurb: {
          de: 'Passiv, Genitiv und die n-Deklination: der Ton von Formularen und Berichten.',
          en: 'The passive, the genitive and the weak masculines: the register of forms and reports.',
        },
        canDos: [
          { area: 'schreiben', text: { de: 'Ich kann eine formelle E-Mail in angemessenem Ton schreiben.', en: 'I can write a formal email in an appropriate register.' } },
          { area: 'grammatik', text: { de: 'Ich kann das Passiv bilden, wenn der Handelnde unwichtig ist.', en: 'I can form the passive when who did it does not matter.' } },
          { area: 'lesen', text: { de: 'Ich kann einen amtlichen Text lesen und die Pflichten daraus ablesen.', en: 'I can read an official text and work out what it requires of me.' } },
        ],
        themes: ['behoerden', 'arbeit'],
        grammar: ['passiv', 'genitiv', 'ndeklination'],
        tasks: ['w3a', 'l5a'],
      },
      {
        title: { de: 'Genau nachfragen', en: 'Asking precisely' },
        icon: '❓',
        blurb: {
          de: 'Verben mit Präposition, da- und wo-Formen und indirekte Fragen.',
          en: 'Verbs with prepositions, da- and wo- forms and indirect questions.',
        },
        canDos: [
          { area: 'sprechen', text: { de: 'Ich kann höflich nachfragen, ohne unhöflich direkt zu klingen.', en: 'I can ask for clarification politely rather than bluntly.' } },
          { area: 'grammatik', text: { de: 'Ich kenne die Präposition, die zu einem Verb gehört, und kann darauf verweisen.', en: 'I know which preposition goes with a verb and can refer back to it.' } },
          { area: 'hoeren', text: { de: 'Ich kann in einem Gespräch erkennen, worauf sich eine Nachfrage bezieht.', en: 'I can work out in a conversation what a follow-up question refers to.' } },
        ],
        themes: ['kommunikation', 'nomenverben'],
        grammar: ['daworpronomen', 'indirektefragen', 'temporalsaetze'],
        tasks: ['h2a', 'l2a'],
      },
      {
        title: { de: 'Arbeit und Ausbildung', en: 'Work and training' },
        icon: '\u{1F4BC}',
        blurb: {
          de: 'Bewerbung, Kollegen, Termine: der Wortschatz, auf dem das Leben hier läuft.',
          en: 'Applications, colleagues, appointments: the vocabulary daily life here runs on.',
        },
        canDos: [
          { area: 'schreiben', text: { de: 'Ich kann einen Termin verschieben oder absagen und mich entschuldigen.', en: 'I can move or cancel an appointment and apologise.' } },
          { area: 'sprechen', text: { de: 'Ich kann über meine Ausbildung und meine Arbeit zusammenhängend sprechen.', en: 'I can talk about my training and my work as a connected whole.' } },
          { area: 'lesen', text: { de: 'Ich kann Stellenanzeigen vergleichen und die passende finden.', en: 'I can compare job adverts and find the right one.' } },
        ],
        themes: ['arbeit', 'bildung'],
        grammar: [],
        tasks: ['w1b', 'l3a', 's2b'],
      },
      {
        title: { de: 'Gesellschaft und Umwelt', en: 'Society and the environment' },
        icon: '\u{1F30D}',
        blurb: {
          de: 'Die Themen, über die B1 eine Meinung verlangt: Umwelt, Medien, Stadt.',
          en: 'The topics B1 expects an opinion on: the environment, the media, the city.',
        },
        canDos: [
          { area: 'schreiben', text: { de: 'Ich kann in einem Forum meine Meinung begründen und auf andere eingehen.', en: 'I can justify my opinion in a forum and respond to other people.' } },
          { area: 'lesen', text: { de: 'Ich kann aus vier Meinungen die herausfinden, die zu einer Aussage passt.', en: 'I can pick out which of four opinions matches a given statement.' } },
          { area: 'sprechen', text: { de: 'Ich kann eine kurze Präsentation über ein Thema aus meinem Land halten.', en: 'I can give a short presentation on a topic from my own country.' } },
        ],
        themes: ['umwelt', 'medien', 'stadt'],
        grammar: [],
        tasks: ['w2b', 'l4a', 's2c'],
      },
      {
        title: { de: 'Prüfungsform', en: 'Exam shape' },
        icon: '\u{1F393}',
        blurb: {
          de: 'Alle vier Module unter Zeitdruck, in der Reihenfolge der echten Prüfung.',
          en: 'All four modules against the clock, in the order of the real paper.',
        },
        canDos: [
          { area: 'lesen', text: { de: 'Ich kann alle fünf Lesen-Teile in der vorgegebenen Zeit schaffen.', en: 'I can finish all five Lesen parts in the time allowed.' } },
          { area: 'hoeren', text: { de: 'Ich kann einen Text beim ersten Hören verstehen, auch ohne Transkript.', en: 'I can understand a text on first listening, without a transcript.' } },
          { area: 'schreiben', text: { de: 'Ich kann alle Leitpunkte abdecken und die Wortzahl erreichen.', en: 'I can cover every content point and reach the word count.' } },
          { area: 'sprechen', text: { de: 'Ich kann in der Vorbereitungszeit eine brauchbare Gliederung notieren.', en: 'I can note a workable outline in the preparation time.' } },
        ],
        themes: [],
        grammar: [],
        tasks: ['l4b', 'h4a', 'w3c', 's3a'],
      },
    ],
  },
];
