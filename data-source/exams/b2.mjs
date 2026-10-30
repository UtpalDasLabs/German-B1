/**
 * The B2 exam, in the shape of Goethe-Zertifikat B2 and telc Deutsch B2.
 *
 * The step from B1 is that the text no longer tells you what it thinks. A B1
 * reading task asks whether the writer is for or against; a B2 one asks what
 * follows from what they said, and the wrong answers are all things the text
 * does say - just not the thing being asked about.
 *
 * All names, places, companies and studies are invented for this app.
 */
export const B2_READING = [
  {
    id: 'l.b2.1',
    level: 'B2',
    teil: 4,
    minutes: 18,
    title: { de: 'Teil 4: Vier Meinungen zur Vier-Tage-Woche', en: 'Part 4: four views on the four-day week' },
    instructions: {
      de: 'Lies die vier Beiträge. Welche Person sagt was?',
      en: 'Read the four contributions. Which person says what?',
    },
    texts: [
      {
        heading: 'Annika, Personalleiterin',
        body: 'Wir haben die Vier-Tage-Woche achtzehn Monate lang erprobt, bei gleichem Gehalt. Die Produktivität ist nicht gesunken, das stimmt. Was in den Berichten selten steht: Sie ist auch nicht gestiegen. Was tatsächlich gesunken ist, sind die Krankheitstage, und zwar deutlich. Ob das die Entlastung ist oder nur, dass man einen Arzttermin jetzt am freien Freitag unterbringt, lässt sich aus unseren Zahlen nicht beantworten. Ich halte das Modell für richtig, aber ich werbe nicht mehr damit, dass es sich rechnet.',
      },
      {
        heading: 'Bernd, Schichtleiter in der Pflege',
        body: 'Die Debatte wird von Leuten geführt, die am Schreibtisch sitzen. Bei uns in der Pflege ist eine Schicht eine Schicht, und wenn jemand einen Tag weniger kommt, fehlt diese Person am Bett. Vier Tage hieße bei uns entweder längere Schichten, was niemand will, oder mehr Personal, das es nicht gibt. Ich bin nicht dagegen. Ich sage nur, dass die Branche, die die Erschöpfung am dringendsten loswerden müsste, diejenige ist, in der das Modell am wenigsten funktioniert.',
      },
      {
        heading: 'Cem, selbstständiger Entwickler',
        body: 'Ich arbeite seit drei Jahren vier Tage und würde nicht zurück. Aber ich täusche mich nicht darüber, warum es geht: Ich entscheide selbst, was liegen bleibt. Ein Angestellter kann das nicht. Wenn man das Modell einführt, ohne gleichzeitig Aufgaben zu streichen, verteilt man dieselbe Arbeit auf weniger Tage und nennt es Fortschritt. Die Firmen, bei denen es gescheitert ist, haben fast alle genau das gemacht.',
      },
      {
        heading: 'Dorothea, Wirtschaftsforscherin',
        body: 'Die vorliegenden Studien sind methodisch schwach. Firmen, die freiwillig an so einem Versuch teilnehmen, sind nicht repräsentativ: Sie haben meistens schon vorher gut funktioniert. Ich erwarte, dass das Modell sich in Teilen der Wirtschaft durchsetzt und in anderen nicht, und dass wir in zehn Jahren über eine Spaltung des Arbeitsmarktes reden statt über Produktivität. Das ist keine Ablehnung, sondern eine Vorhersage.',
      },
    ],
    items: [
      [
        'Wer sagt, dass die eigenen Zahlen eine wichtige Frage nicht beantworten können?',
        ['Annika', 'Bernd', 'Cem', 'Dorothea'],
        0,
        'Annika: "… lässt sich aus unseren Zahlen nicht beantworten."',
        'Annika: "… cannot be answered from our figures."',
        'Who says their own figures cannot answer an important question?',
      ],
      [
        'Wer weist darauf hin, dass gerade die bedürftigste Branche am wenigsten profitiert?',
        ['Bernd', 'Annika', 'Cem', 'Dorothea'],
        0,
        'Bernd: "… die Branche, die die Erschöpfung am dringendsten loswerden müsste …"',
        'Bernd: "… the sector that most urgently needs to shed its exhaustion …"',
        'Who points out that the neediest sector benefits least?',
      ],
      [
        'Wer nennt einen Grund, warum die eigene gute Erfahrung nicht übertragbar ist?',
        ['Cem', 'Annika', 'Bernd', 'Dorothea'],
        0,
        'Cem: "Ich entscheide selbst, was liegen bleibt. Ein Angestellter kann das nicht."',
        'Cem: "I decide myself what gets left. An employee cannot."',
        'Who gives a reason why their own good experience does not transfer?',
      ],
      [
        'Wer kritisiert die Auswahl der untersuchten Firmen?',
        ['Dorothea', 'Annika', 'Bernd', 'Cem'],
        0,
        'Dorothea: "Firmen, die freiwillig … teilnehmen, sind nicht repräsentativ."',
        'Dorothea: "Companies that take part voluntarily are not representative."',
        'Who criticises the selection of the companies studied?',
      ],
      [
        'Wer unterstützt das Modell, hat aber das eigene Argument dafür aufgegeben?',
        ['Annika', 'Bernd', 'Cem', 'Dorothea'],
        0,
        'Annika hält es für richtig, wirbt aber nicht mehr damit, "dass es sich rechnet".',
        'Annika thinks it is right but no longer argues that it pays for itself.',
        'Who supports the model but has dropped their own argument for it?',
      ],
      [
        'Wer sagt ausdrücklich, dass die eigene Position keine Ablehnung ist?',
        ['Dorothea', 'Bernd', 'Annika', 'Cem'],
        0,
        'Dorothea: "Das ist keine Ablehnung, sondern eine Vorhersage." Bernd sagt "Ich bin nicht dagegen", nennt es aber nicht so.',
        'Dorothea: "That is not a rejection but a prediction." Bernd says he is not against it but does not put it that way.',
        'Who explicitly says their position is not a rejection?',
      ],
    ],
  },
];

export const B2_LISTENING = [
  {
    id: 'h.b2.1',
    level: 'B2',
    teil: 4,
    minutes: 15,
    plays: 1,
    title: { de: 'Teil 4: Diskussion über Homeoffice', en: 'Part 4: a discussion about working from home' },
    instructions: {
      de: 'Du hörst eine Diskussion, einmal. Wer sagt was?',
      en: 'You will hear a discussion once. Who says what?',
    },
    script: [
      { speaker: 'Moderatorin', text: 'Willkommen zurück. Bei mir sind Frau Dr. Ohlsen, Arbeitspsychologin, und Herr Tiede, der eine Softwarefirma mit sechzig Beschäftigten führt. Herr Tiede, Sie haben Ihre Leute zurück ins Büro geholt. Warum?' },
      { speaker: 'Herr Tiede', text: 'Nicht ganz zurück. Zwei feste Tage im Büro, der Rest frei wählbar. Der Grund ist banal: Die Einarbeitung neuer Kolleginnen hat nicht mehr funktioniert. Erfahrene Leute arbeiten zu Hause genauso gut, teilweise besser. Aber jemand, der im März angefangen hat und bis Juli niemanden persönlich kennengelernt hat, kommt nicht an. Das sehen wir in den Zahlen zur Probezeit sehr deutlich.' },
      { speaker: 'Frau Dr. Ohlsen', text: 'Da würde ich zustimmen, allerdings mit einer anderen Begründung. Es geht weniger um Nähe als um Beiläufigkeit. Das Wissen, das man braucht, um in einem Team anzukommen, wird selten gesagt, es wird mitgehört. Wer nicht im Raum ist, hört nicht mit. Dafür braucht man aber keine festen Tage, sondern Anlässe.' },
      { speaker: 'Herr Tiede', text: 'Anlässe haben wir versucht. Freiwillige Treffen, Teamtage. Es kamen immer dieselben acht Leute. Feste Tage sind grober, aber sie wirken.' },
      { speaker: 'Frau Dr. Ohlsen', text: 'Dass sie wirken, bestreite ich nicht. Mich stört, dass sie alle gleich behandeln. Die Kollegin mit zwei kleinen Kindern und zwei Stunden Pendelweg zahlt für ein Problem, das sie nicht hat. In unseren Erhebungen ist die Unzufriedenheit mit festen Bürotagen fast vollständig ein Pendelproblem.' },
      { speaker: 'Moderatorin', text: 'Herr Tiede, trifft Sie das?' },
      { speaker: 'Herr Tiede', text: 'Ja, das ist der schwache Punkt, und ich habe keine saubere Lösung. Wir zahlen das Deutschlandticket und machen Ausnahmen, wenn jemand weiter weg wohnt. Das ist Flickwerk. Was ich nicht mehr glaube, ist, dass sich das rein freiwillig organisiert. Drei Jahre haben wir das versucht.' },
      { speaker: 'Frau Dr. Ohlsen', text: 'Und da sind wir weiter auseinander, als es klingt. Ich halte Freiwilligkeit auch für gescheitert. Nur folgt daraus für mich nicht Anwesenheitspflicht, sondern dass Teams das selbst verbindlich regeln - nicht das Unternehmen und nicht der Einzelne. Die mittlere Ebene ist die, die fast niemand nutzt.' },
    ],
    items: [
      [
        'Warum hat Herr Tiede feste Bürotage eingeführt?',
        [
          'Die Einarbeitung neuer Leute funktionierte nicht mehr.',
          'Die Produktivität der Erfahrenen sank.',
          'Die Kunden haben es verlangt.',
          'Das Büro stand sonst leer.',
        ],
        0,
        '"Die Einarbeitung neuer Kolleginnen hat nicht mehr funktioniert."',
        '"Inducting new colleagues stopped working."',
        'Why did Herr Tiede introduce fixed office days?',
      ],
      [
        'Wie begründet Frau Dr. Ohlsen dasselbe Problem?',
        [
          'Wichtiges Wissen wird mitgehört, nicht gesagt.',
          'Neue Leute trauen sich nicht zu fragen.',
          'Zu Hause fehlt die Technik.',
          'Vorgesetzte erklären zu wenig.',
        ],
        0,
        '"Das Wissen … wird selten gesagt, es wird mitgehört."',
        '"The knowledge … is rarely stated, it is overheard."',
        'How does Dr Ohlsen explain the same problem?',
      ],
      [
        'Was ist laut Frau Dr. Ohlsen die eigentliche Ursache der Unzufriedenheit?',
        ['das Pendeln', 'die Vorgesetzten', 'die festen Zeiten an sich', 'die Technik zu Hause'],
        0,
        '"… ist die Unzufriedenheit mit festen Bürotagen fast vollständig ein Pendelproblem."',
        '"… dissatisfaction with fixed office days is almost entirely a commuting problem."',
        'What, according to Dr Ohlsen, really causes the dissatisfaction?',
      ],
      [
        'Wie reagiert Herr Tiede auf diesen Einwand?',
        [
          'Er gibt zu, dass er keine saubere Lösung hat.',
          'Er weist ihn als unrealistisch zurück.',
          'Er verweist auf die Mehrheit der Beschäftigten.',
          'Er sagt, das Problem löse sich von selbst.',
        ],
        0,
        '"Ja, das ist der schwache Punkt, und ich habe keine saubere Lösung."',
        '"Yes, that is the weak point, and I have no clean solution."',
        'How does Herr Tiede respond to this objection?',
      ],
      [
        'Worin sind sich beide einig?',
        [
          'Rein freiwillige Regelungen funktionieren nicht.',
          'Es braucht eine Anwesenheitspflicht.',
          'Homeoffice senkt die Produktivität.',
          'Teamtage sind die beste Lösung.',
        ],
        0,
        'Beide halten die Freiwilligkeit für gescheitert; nur die Folgerung unterscheidet sich.',
        'Both consider the voluntary approach to have failed; only the conclusion differs.',
        'What do they both agree on?',
      ],
      [
        'Was schlägt Frau Dr. Ohlsen stattdessen vor?',
        [
          'dass die Teams es selbst verbindlich regeln',
          'dass das Unternehmen es festlegt',
          'dass jeder frei entscheidet',
          'dass die Bürotage abgeschafft werden',
        ],
        0,
        '"… dass Teams das selbst verbindlich regeln - nicht das Unternehmen und nicht der Einzelne."',
        '"… that teams settle it bindingly themselves - not the company and not the individual."',
        'What does Dr Ohlsen propose instead?',
      ],
    ],
  },
];

export const B2_WRITING = [
  {
    id: 'w.b2.1',
    level: 'B2',
    teil: 1,
    minutes: 50,
    minWords: 150,
    register: 'formell',
    title: { de: 'Teil 1: Forumsbeitrag zur Vier-Tage-Woche', en: 'Part 1: forum post on the four-day week' },
    situation:
      'In einem Online-Forum wird diskutiert, ob Unternehmen die Vier-Tage-Woche einführen sollten. Schreiben Sie einen Beitrag von etwa 150 Wörtern. Gehen Sie auf mindestens zwei Argumente der Gegenseite ein.',
    situationEn:
      'An online forum is discussing whether companies should introduce the four-day week. Write a post of about 150 words. Address at least two arguments from the other side.',
    bullets: [
      'Nennen Sie Ihre Position klar, aber nicht im ersten Satz als Parole.',
      'Führen Sie zwei Argumente mit einem Beispiel oder einer Zahl aus.',
      'Gehen Sie auf einen Einwand ein und entkräften Sie ihn – oder räumen Sie ihn ein.',
      'Schließen Sie mit einer Folgerung, nicht mit einer Wiederholung.',
    ],
    model: `Die Debatte über die Vier-Tage-Woche krankt daran, dass beide Seiten über verschiedene Branchen sprechen. In der Wissensarbeit lässt sich ein Arbeitstag streichen, ohne dass dieselbe Menge Arbeit übrig bleibt, weil ein erheblicher Teil der Zeit ohnehin in Abstimmung verschwindet. In der Pflege oder im Einzelhandel gilt das nicht: Dort ist eine Schicht eine Schicht.

Daraus folgt für mich, dass eine allgemeine gesetzliche Regelung der falsche Weg wäre. Sinnvoller erscheint mir ein Anspruch, den Beschäftigte geltend machen können und den Arbeitgeber begründet ablehnen müssen.

Dem häufigsten Einwand, die Produktivität breche ein, widersprechen die vorliegenden Erfahrungen zwar, allerdings sind die untersuchten Betriebe kaum repräsentativ. Ernster nehme ich den zweiten Einwand: Wo Personal fehlt, verteilt eine Verkürzung dieselbe Arbeit auf weniger Tage. Das ist kein Argument gegen das Modell, sondern eines dafür, es nicht dort zuerst einzuführen, wo es am meisten gebraucht würde.`,
    checklist: [
      { de: 'Meine Position ist klar erkennbar, ohne reine Parole zu sein.', en: 'My position is clearly recognisable without being a slogan.' },
      { de: 'Ich habe mindestens zwei Argumente ausgeführt, nicht nur genannt.', en: 'I developed at least two arguments rather than just naming them.' },
      { de: 'Ich bin auf einen Einwand der Gegenseite eingegangen.', en: 'I addressed an objection from the other side.' },
      { de: 'Ich habe Konnektoren wie allerdings, zwar … aber, daraus folgt benutzt.', en: 'I used connectors such as allerdings, zwar … aber, daraus folgt.' },
      { de: 'Der Schluss zieht eine Folgerung und wiederholt nicht die Einleitung.', en: 'The ending draws a conclusion and does not repeat the opening.' },
      { de: 'Ich habe etwa 150 Wörter geschrieben.', en: 'I wrote about 150 words.' },
      { de: 'Ich habe Nominal- und Verbalstil gemischt, statt nur -ung-Nomen zu reihen.', en: 'I mixed nominal and verbal style instead of stringing -ung nouns together.' },
    ],
    phrases: [
      {
        label: { de: 'Position beziehen', en: 'Taking a position' },
        items: [
          'Daraus folgt für mich, dass …',
          'Sinnvoller erscheint mir …',
          'Ich halte … für den falschen Weg.',
          'Entscheidend ist aus meiner Sicht, dass …',
        ],
      },
      {
        label: { de: 'Einwände behandeln', en: 'Handling objections' },
        items: [
          'Dem Einwand, …, lässt sich entgegenhalten, dass …',
          'Das trifft zwar zu, allerdings …',
          'Ernster nehme ich den Einwand, dass …',
          'Hier muss ich einräumen, dass …',
        ],
      },
      {
        label: { de: 'Abwägen und schließen', en: 'Weighing up and concluding' },
        items: [
          'Beides gegeneinander abgewogen, …',
          'Das ist kein Argument gegen …, sondern eines dafür, …',
          'Unter diesen Bedingungen halte ich … für vertretbar.',
        ],
      },
    ],
  },
];

export const B2_SPEAKING = [
  {
    id: 's.b2.1',
    level: 'B2',
    teil: 1,
    minutes: 8,
    prepMinutes: 15,
    title: { de: 'Teil 1: Vortrag mit Diskussion', en: 'Part 1: presentation with discussion' },
    situation:
      'Halten Sie einen Vortrag von etwa vier Minuten zum Thema "Sollten Unternehmen Homeoffice vorschreiben, ermöglichen oder einschränken?" und beantworten Sie anschließend Rückfragen.',
    situationEn:
      'Give a presentation of about four minutes on "Should companies mandate, enable or restrict working from home?" and then answer follow-up questions.',
    bullets: [
      'Führen Sie ins Thema ein und sagen Sie, worüber Sie sprechen werden.',
      'Stellen Sie zwei Positionen dar, nicht nur Ihre eigene.',
      'Nennen Sie Vor- und Nachteile mit einem konkreten Beispiel.',
      'Kommen Sie zu einer eigenen, begründeten Position.',
      'Rechnen Sie mit einer Rückfrage, die Ihre schwächste Stelle trifft.',
    ],
    model: `Ich möchte heute über die Frage sprechen, wie Unternehmen mit Homeoffice umgehen sollten. Dabei werde ich zunächst zwei gegensätzliche Positionen darstellen und am Ende sagen, welche ich für tragfähig halte.

Die eine Seite argumentiert mit der Einarbeitung. Wer neu anfängt, lernt das Nötige beiläufig: im Raum, nebenbei, durch Mithören. Wer nicht da ist, hört nicht mit. Diese Position fordert deshalb feste Präsenztage.

Die andere Seite verweist auf das Pendeln. Feste Tage behandeln alle gleich und belasten diejenigen am stärksten, die weit weg wohnen oder Kinder betreuen - also oft genau die, die man halten möchte.

Beides gegeneinander abgewogen halte ich die Unternehmensebene für die falsche. Eine Regel für sechzig Leute wird entweder zu grob oder zu kompliziert. Sinnvoller erscheint mir, dass Teams sich verbindlich einigen, weil nur dort bekannt ist, wer gerade eingearbeitet wird.

Einräumen muss ich, dass das Konflikte in die Teams verlagert, statt sie zu lösen. Dafür habe ich keine saubere Antwort - ich halte den Konflikt an dieser Stelle nur für besser aufgehoben.`,
    checklist: [
      { de: 'Ich habe eingeleitet und gesagt, wie ich vorgehe.', en: 'I introduced the topic and said how I would proceed.' },
      { de: 'Ich habe zwei Positionen dargestellt, nicht nur meine.', en: 'I presented two positions, not just my own.' },
      { de: 'Ich habe mindestens ein konkretes Beispiel gebracht.', en: 'I gave at least one concrete example.' },
      { de: 'Ich bin zu einer eigenen, begründeten Position gekommen.', en: 'I reached my own reasoned position.' },
      { de: 'Ich habe eine Schwäche meiner Position selbst benannt.', en: 'I named a weakness in my own position myself.' },
      { de: 'Ich habe etwa vier Minuten frei gesprochen, nicht abgelesen.', en: 'I spoke freely for about four minutes rather than reading.' },
    ],
    phrases: [
      {
        label: { de: 'Gliedern', en: 'Structuring' },
        items: [
          'Ich möchte über die Frage sprechen, ob …',
          'Dabei werde ich zunächst … und anschließend …',
          'Ich komme nun zum zweiten Punkt.',
          'Zusammenfassend lässt sich sagen, dass …',
        ],
      },
      {
        label: { de: 'Positionen darstellen', en: 'Presenting positions' },
        items: [
          'Die eine Seite argumentiert damit, dass …',
          'Dagegen wird eingewandt, dass …',
          'Befürworter verweisen auf …',
          'Kritiker halten dem entgegen, dass …',
        ],
      },
      {
        label: { de: 'Auf Rückfragen reagieren', en: 'Responding to questions' },
        items: [
          'Das ist ein berechtigter Einwand.',
          'Darauf habe ich keine saubere Antwort, aber …',
          'Da müsste ich differenzieren: …',
          'Das würde ich so nicht sagen, weil …',
        ],
      },
    ],
  },
];
