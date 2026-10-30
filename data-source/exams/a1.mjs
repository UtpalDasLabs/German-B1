/**
 * The A1 exam, in the shape of Goethe Start Deutsch 1 and telc Deutsch A1.
 *
 * A1 tasks are short and concrete, and that is the whole difficulty: the texts
 * are notices, messages and small ads, where the answer is one piece of
 * information you have to find rather than anything to work out. Writing is a
 * form and a three-line message, not an essay.
 *
 * All names, places and companies are invented for this app.
 */
export const A1_READING = [
  {
    id: 'l.a1.1',
    level: 'A1',
    teil: 1,
    minutes: 8,
    title: { de: 'Teil 1: Zwei kurze Nachrichten', en: 'Part 1: two short messages' },
    instructions: {
      de: 'Lies die zwei Texte. Sind die Aussagen richtig oder falsch?',
      en: 'Read the two texts. Are the statements true or false?',
    },
    texts: [
      {
        heading: 'Nachricht von Mehmet',
        body: `Hallo Lisa,

ich kann heute nicht um sechs kommen. Der Bus fährt erst um halb sieben. Ich bin also um sieben bei dir. Soll ich Brot mitbringen? Ich gehe sowieso zum Supermarkt.

Bis später!
Mehmet`,
      },
      {
        heading: 'Aushang im Haus',
        body: `Liebe Nachbarn,

am Freitag kommt der Hausmeister. Er repariert die Heizung im Keller. Von neun bis zwölf Uhr gibt es kein warmes Wasser.

Danke für Ihr Verständnis.
Familie Berger, Hausverwaltung`,
      },
    ],
    items: [
      ['Mehmet kommt später als geplant.', ['richtig', 'falsch'], 0, 'Er kommt um sieben statt um sechs.', 'He is coming at seven instead of six.'],
      ['Mehmet fährt mit dem Auto.', ['richtig', 'falsch'], 1, 'Im Text steht: "Der Bus fährt erst um halb sieben."', 'The text says the bus does not leave until half past six.'],
      ['Am Freitag gibt es den ganzen Tag kein warmes Wasser.', ['richtig', 'falsch'], 1, 'Nur von neun bis zwölf Uhr.', 'Only from nine to twelve.'],
      ['Der Hausmeister arbeitet im Keller.', ['richtig', 'falsch'], 0, '"Er repariert die Heizung im Keller."', '"Er repariert die Heizung im Keller."'],
    ],
  },
  {
    id: 'l.a1.2',
    level: 'A1',
    teil: 3,
    minutes: 8,
    title: { de: 'Teil 3: Schilder und Anzeigen', en: 'Part 3: signs and notices' },
    instructions: {
      de: 'Lies die Schilder. Welche Antwort ist richtig?',
      en: 'Read the signs. Which answer is correct?',
    },
    texts: [
      { heading: 'Bäckerei Hoff', body: 'Mo–Fr 6–18 Uhr · Sa 6–13 Uhr · Sonntag geschlossen' },
      { heading: 'Im Bus', body: 'Bitte vorne einsteigen und die Fahrkarte zeigen. Kinder unter 6 Jahren fahren frei.' },
      { heading: 'Arztpraxis Dr. Weiß', body: 'Urlaub vom 2. bis 16. August. Vertretung: Dr. Sommer, Lindenstraße 4, Telefon 0231 44 55 66.' },
    ],
    items: [
      [
        'Wann hat die Bäckerei zu?',
        ['am Sonntag', 'am Samstag', 'am Montag', 'nie'],
        0,
        '"Sonntag geschlossen."',
        '"Sonntag geschlossen."',
        'When is the bakery closed?',
      ],
      [
        'Wer bezahlt im Bus nichts?',
        ['Kinder unter sechs', 'alle Kinder', 'Erwachsene', 'niemand'],
        0,
        '"Kinder unter 6 Jahren fahren frei."',
        '"Kinder unter 6 Jahren fahren frei."',
        'Who pays nothing on the bus?',
      ],
      [
        'Sie sind am 10. August krank. Wohin gehen Sie?',
        ['zu Dr. Sommer', 'zu Dr. Weiß', 'in die Bäckerei', 'ins Krankenhaus'],
        0,
        'Dr. Weiß hat bis zum 16. August Urlaub; die Vertretung ist Dr. Sommer.',
        'Dr. Weiß is on holiday until 16 August; Dr. Sommer is the stand-in.',
        'You are ill on 10 August. Where do you go?',
      ],
      [
        'Wie lange hat die Bäckerei am Samstag offen?',
        ['sieben Stunden', 'zwölf Stunden', 'den ganzen Tag', 'gar nicht'],
        0,
        'Von 6 bis 13 Uhr sind sieben Stunden.',
        'From 6 a.m. to 1 p.m. is seven hours.',
        'How long is the bakery open on Saturday?',
      ],
    ],
  },
];

export const A1_LISTENING = [
  {
    id: 'h.a1.1',
    level: 'A1',
    teil: 1,
    minutes: 8,
    plays: 2,
    title: { de: 'Teil 1: Kurze Ansagen', en: 'Part 1: short announcements' },
    instructions: {
      de: 'Du hörst vier kurze Texte, jeden zweimal. Beantworte danach die Fragen.',
      en: 'You will hear four short texts, each twice. Then answer the questions.',
    },
    script: [
      { speaker: 'Ansage', text: 'Achtung am Gleis zwei. Der Zug nach Dresden fährt heute um sechzehn Uhr zwanzig. Bitte steigen Sie ein.' },
      { speaker: 'Mailbox', text: 'Hallo, hier ist Nadja. Wir treffen uns morgen um halb vier vor dem Kino, nicht um vier. Bis dann!' },
      { speaker: 'Durchsage', text: 'Liebe Kunden, der Supermarkt schließt in zehn Minuten. Bitte kommen Sie zur Kasse.' },
      { speaker: 'Radio', text: 'Das Wetter am Donnerstag: Es regnet am Vormittag. Am Nachmittag scheint die Sonne. Es wird achtzehn Grad warm.' },
    ],
    items: [
      ['Wann fährt der Zug nach Dresden?', ['um 16:20', 'um 16:02', 'um 06:20', 'um 20:16'], 0, '"… um sechzehn Uhr zwanzig."', '"… at sixteen twenty."'],
      ['Wann treffen sich Nadja und ihre Freundin?', ['um halb vier', 'um vier', 'um halb fünf', 'um drei'], 0, '"… um halb vier, nicht um vier."', '"… at half past three, not at four."'],
      ['Was soll man im Supermarkt tun?', ['zur Kasse gehen', 'schneller einkaufen', 'morgen wiederkommen', 'draußen warten'], 0, '"Bitte kommen Sie zur Kasse."', '"Please come to the till."'],
      ['Wie ist das Wetter am Nachmittag?', ['sonnig', 'es regnet', 'es schneit', 'kalt'], 0, '"Am Nachmittag scheint die Sonne."', '"In the afternoon the sun shines."'],
    ],
  },
];

export const A1_WRITING = [
  {
    id: 'w.a1.1',
    level: 'A1',
    teil: 2,
    minutes: 15,
    minWords: 30,
    register: 'informell',
    title: { de: 'Teil 2: Kurze Nachricht an einen Freund', en: 'Part 2: short message to a friend' },
    situation:
      'Ihr Freund Paul hat Sie am Samstag zum Essen eingeladen. Sie können erst später kommen, weil Sie arbeiten. Schreiben Sie Paul eine kurze Nachricht.',
    situationEn:
      'Your friend Paul has invited you for a meal on Saturday. You can only come later because you are working. Write Paul a short message.',
    bullets: [
      'Bedanken Sie sich für die Einladung.',
      'Sagen Sie, warum Sie später kommen.',
      'Schreiben Sie, wann Sie da sind.',
    ],
    model: `Hallo Paul,

danke für die Einladung! Ich komme gern.

Leider muss ich am Samstag bis sieben Uhr arbeiten. Ich bin also erst um acht Uhr bei dir. Ist das okay?

Soll ich etwas mitbringen?

Liebe Grüße
Sara`,
    checklist: [
      { de: 'Ich habe mich für die Einladung bedankt.', en: 'I thanked them for the invitation.' },
      { de: 'Ich habe einen Grund genannt.', en: 'I gave a reason.' },
      { de: 'Ich habe eine Uhrzeit geschrieben.', en: 'I gave a time.' },
      { de: 'Ich habe Anrede und Gruß geschrieben.', en: 'I wrote a greeting and a sign-off.' },
      { de: 'Ich habe mindestens 30 Wörter geschrieben.', en: 'I wrote at least 30 words.' },
    ],
    phrases: [
      {
        label: { de: 'Anrede und Gruß', en: 'Greeting and sign-off' },
        items: ['Hallo …,', 'Liebe/Lieber …,', 'Liebe Grüße', 'Bis Samstag!'],
      },
      {
        label: { de: 'Danken und Grund', en: 'Thanking and reasons' },
        items: ['Danke für die Einladung!', 'Ich komme gern.', 'Leider muss ich arbeiten.', 'Ich bin erst um … Uhr da.'],
      },
    ],
  },
];

export const A1_SPEAKING = [
  {
    id: 's.a1.1',
    level: 'A1',
    teil: 1,
    minutes: 4,
    prepMinutes: 1,
    title: { de: 'Teil 1: Sich vorstellen', en: 'Part 1: introducing yourself' },
    situation:
      'Stellen Sie sich der Prüferin oder dem Prüfer vor. Sprechen Sie etwa eine Minute über sich.',
    situationEn: 'Introduce yourself to the examiner. Speak about yourself for about a minute.',
    bullets: [
      'Name, Alter, Land und Wohnort',
      'Sprachen, Beruf oder Studium',
      'Hobbys: was Sie gern machen',
    ],
    model: `Hallo, ich heiße Amina Yilmaz. Ich bin dreißig Jahre alt und komme aus der Türkei, aus Izmir.

Jetzt wohne ich in Leipzig, seit einem Jahr. Ich spreche Türkisch, Englisch und ein bisschen Deutsch. Ich arbeite in einem Café.

In meiner Freizeit koche ich gern und ich gehe oft spazieren. Am Wochenende treffe ich meine Freunde.

Danke schön.`,
    checklist: [
      { de: 'Ich habe meinen Namen und mein Alter genannt.', en: 'I gave my name and my age.' },
      { de: 'Ich habe gesagt, woher ich komme und wo ich wohne.', en: 'I said where I am from and where I live.' },
      { de: 'Ich habe über Beruf oder Studium gesprochen.', en: 'I talked about my job or studies.' },
      { de: 'Ich habe ein Hobby genannt.', en: 'I named a hobby.' },
      { de: 'Ich habe ungefähr eine Minute gesprochen.', en: 'I spoke for about a minute.' },
    ],
    phrases: [
      {
        label: { de: 'Sich vorstellen', en: 'Introducing yourself' },
        items: ['Ich heiße …', 'Ich bin … Jahre alt.', 'Ich komme aus …', 'Ich wohne in …', 'Ich spreche …'],
      },
      {
        label: { de: 'Beruf und Hobbys', en: 'Work and hobbies' },
        items: ['Ich arbeite als …', 'Ich studiere …', 'In meiner Freizeit …', 'Ich … gern.'],
      },
    ],
  },
];
