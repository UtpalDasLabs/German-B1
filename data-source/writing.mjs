/**
 * Schreiben: the three task types of the Goethe-Zertifikat B1.
 *
 * Teil 1  an informal email to someone you know, about 80 words, 20 minutes
 * Teil 2  a forum post giving and justifying an opinion, about 80 words, 25 minutes
 * Teil 3  a short formal email, about 40 words, 15 minutes
 *
 * A machine cannot grade a text at B1, so the app does not pretend to. Each
 * task ships a model answer written at a realistic B1 level - solid, not
 * brilliant - and a checklist the learner scores themselves against. The
 * checklist rows are the criteria a real examiner uses: all content points
 * covered, register, structure, range, accuracy.
 */
export const WRITING = [
  {
    id: 'w1a',
    teil: 1,
    minutes: 20,
    minWords: 80,
    register: 'informell',
    title: { de: 'Teil 1: Absage an eine Freundin', en: 'Part 1: cancelling on a friend' },
    situation:
      'Ihre Freundin Carla hat Sie zu ihrer Geburtstagsfeier am Samstag eingeladen. Sie können nicht kommen, weil Sie an diesem Tag arbeiten müssen. Schreiben Sie Carla eine E-Mail.',
    situationEn:
      'Your friend Carla has invited you to her birthday party on Saturday. You cannot come because you have to work that day. Write Carla an email.',
    bullets: [
      'Bedanken Sie sich für die Einladung.',
      'Erklären Sie, warum Sie nicht kommen können.',
      'Machen Sie einen Vorschlag für ein Treffen zu zweit.',
    ],
    model: `Liebe Carla,

vielen Dank für deine Einladung! Ich habe mich wirklich sehr gefreut.

Leider kann ich am Samstag nicht kommen. Meine Kollegin ist krank geworden, und ich muss ihre Schicht im Laden übernehmen. Ich arbeite bis zwanzig Uhr und wäre dann viel zu müde für eine Feier. Das tut mir sehr leid, denn ich hätte dich gern an deinem Geburtstag gesehen.

Hättest du vielleicht am Sonntag danach Zeit? Wir könnten in Ruhe zusammen frühstücken, und ich bringe dein Geschenk mit. Sag mir einfach Bescheid, was dir passt.

Ich wünsche dir eine schöne Feier!

Liebe Grüße
Amira`,
    checklist: [
      { de: 'Alle drei Leitpunkte kommen vor.', en: 'All three content points appear.' },
      { de: 'Anrede und Gruß sind informell (Liebe … / Liebe Grüße) und du wird durchgehend benutzt.', en: 'Greeting and sign-off are informal and du is used throughout.' },
      { de: 'Der Text hat Absätze und ist nicht ein einziger Block.', en: 'The text has paragraphs rather than being one block.' },
      { de: 'Mindestens drei Sätze sind durch weil, deshalb, obwohl oder dass verbunden.', en: 'At least three sentences are joined with weil, deshalb, obwohl or dass.' },
      { de: 'Der Vorschlag ist konkret: Tag, Uhrzeit oder Ort werden genannt.', en: 'The suggestion is concrete: a day, a time or a place is named.' },
      { de: 'Etwa 80 Wörter, nicht deutlich weniger.', en: 'Around 80 words, not noticeably fewer.' },
      { de: 'Verben stehen an der richtigen Stelle, besonders im Nebensatz.', en: 'Verbs are in the right position, especially in subordinate clauses.' },
    ],
    phrases: [
      {
        label: { de: 'Danken', en: 'Thanking' },
        items: [
          'Vielen Dank für deine Einladung!',
          'Ich habe mich sehr über deine Nachricht gefreut.',
          'Das ist wirklich lieb von dir.',
        ],
      },
      {
        label: { de: 'Absagen', en: 'Declining' },
        items: [
          'Leider kann ich nicht kommen, weil …',
          'Es tut mir sehr leid, aber …',
          'Ich würde gern kommen, aber es geht diesmal nicht.',
        ],
      },
      {
        label: { de: 'Vorschlagen', en: 'Suggesting' },
        items: [
          'Hättest du am Sonntag Zeit?',
          'Wollen wir uns stattdessen … treffen?',
          'Wie wäre es mit nächstem Wochenende?',
          'Sag mir einfach Bescheid, was dir passt.',
        ],
      },
    ],
  },

  {
    id: 'w1b',
    teil: 1,
    minutes: 20,
    minWords: 80,
    register: 'informell',
    title: { de: 'Teil 1: Bitte um Hilfe beim Umzug', en: 'Part 1: asking for help with a move' },
    situation:
      'Sie ziehen in zwei Wochen in eine neue Wohnung um. Schreiben Sie Ihrem Freund Malik eine E-Mail und bitten Sie ihn um Hilfe.',
    situationEn:
      'You are moving to a new flat in two weeks. Write your friend Malik an email and ask him for help.',
    bullets: [
      'Erzählen Sie kurz von der neuen Wohnung.',
      'Bitten Sie um Hilfe und sagen Sie, wann und wie lange.',
      'Bieten Sie etwas als Dank an.',
    ],
    model: `Hallo Malik,

endlich habe ich eine Wohnung gefunden! Sie liegt in der Nähe vom Stadtpark, hat zwei Zimmer und sogar einen kleinen Balkon. Die Miete ist etwas höher als vorher, aber der Weg zur Arbeit ist nur noch zehn Minuten.

Jetzt kommt die schwierige Frage: Hättest du am Samstag, dem achtzehnten, Zeit? Wir fangen um neun Uhr an und wären gegen drei Uhr fertig. Es sind vor allem Kisten und ein Schrank, den ich allein nicht tragen kann.

Als Dank koche ich abends für alle, und Getränke gibt es natürlich den ganzen Tag. Sag mir bitte bis Mittwoch Bescheid, damit ich planen kann.

Viele Grüße
Nikola`,
    checklist: [
      { de: 'Alle drei Leitpunkte kommen vor.', en: 'All three content points appear.' },
      { de: 'Die Bitte ist höflich formuliert, nicht als Befehl.', en: 'The request is phrased politely, not as an order.' },
      { de: 'Zeit und Dauer werden konkret genannt.', en: 'The time and how long it will take are stated concretely.' },
      { de: 'Anrede und Gruß sind informell und passen zusammen.', en: 'Greeting and sign-off are informal and match each other.' },
      { de: 'Es gibt mindestens einen Nebensatz mit weil, damit oder dass.', en: 'There is at least one subordinate clause with weil, damit or dass.' },
      { de: 'Etwa 80 Wörter.', en: 'Around 80 words.' },
    ],
    phrases: [
      {
        label: { de: 'Um Hilfe bitten', en: 'Asking for help' },
        items: [
          'Hättest du vielleicht am … Zeit?',
          'Könntest du mir am Samstag helfen?',
          'Ich würde mich sehr freuen, wenn du Zeit hättest.',
        ],
      },
      {
        label: { de: 'Etwas anbieten', en: 'Offering something' },
        items: [
          'Als Dank koche ich für alle.',
          'Für Essen und Getränke sorge ich.',
          'Ich revanchiere mich natürlich.',
        ],
      },
      {
        label: { de: 'Um Antwort bitten', en: 'Asking for a reply' },
        items: [
          'Sag mir bitte bis Mittwoch Bescheid.',
          'Melde dich kurz, wenn es klappt.',
          'Gib mir einfach Bescheid, damit ich planen kann.',
        ],
      },
    ],
  },

  {
    id: 'w1c',
    teil: 1,
    minutes: 20,
    minWords: 80,
    register: 'informell',
    title: { de: 'Teil 1: Bericht über den neuen Job', en: 'Part 1: news about the new job' },
    situation:
      'Sie haben vor einem Monat eine neue Stelle angefangen. Ihre Freundin Beata hat gefragt, wie es läuft. Schreiben Sie ihr eine E-Mail.',
    situationEn:
      'You started a new job a month ago. Your friend Beata has asked how it is going. Write her an email.',
    bullets: [
      'Beschreiben Sie Ihre Arbeit und Ihre Kollegen.',
      'Schreiben Sie, was Ihnen gefällt und was nicht.',
      'Fragen Sie nach Beatas Situation.',
    ],
    model: `Liebe Beata,

danke für deine Nachricht! Jetzt endlich die Antwort, die ich dir versprochen habe.

Der neue Job gefällt mir gut. Ich arbeite in einem kleinen Büro mit sechs Kolleginnen und Kollegen, und alle sind bisher sehr hilfsbereit. Besonders eine Kollegin nimmt sich viel Zeit für meine Fragen.

Gut finde ich, dass ich selbst entscheiden kann, wann ich anfange. Weniger schön ist der Weg: Ich brauche mit dem Bus fast eine Stunde, obwohl es nur zwölf Kilometer sind. Deshalb überlege ich, ab dem Frühling mit dem Rad zu fahren.

Und wie läuft es bei dir? Hast du inzwischen etwas von der Sprachschule gehört? Schreib mir mal wieder.

Liebe Grüße
Oleh`,
    checklist: [
      { de: 'Alle drei Leitpunkte kommen vor.', en: 'All three content points appear.' },
      { de: 'Es steht etwas Positives und etwas Negatives im Text.', en: 'Something positive and something negative both appear.' },
      { de: 'Am Ende steht eine echte Frage an die Freundin.', en: 'There is a genuine question to the friend at the end.' },
      { de: 'Der Text benutzt mindestens zwei verschiedene Konnektoren.', en: 'The text uses at least two different connectors.' },
      { de: 'Anrede, Gruß und du-Form sind durchgehend informell.', en: 'Greeting, sign-off and the du-form are consistently informal.' },
      { de: 'Etwa 80 Wörter.', en: 'Around 80 words.' },
    ],
    phrases: [
      {
        label: { de: 'Beschreiben', en: 'Describing' },
        items: [
          'Ich arbeite in einem kleinen Büro mit …',
          'Meine Aufgaben sind vor allem …',
          'Die Kollegen sind bisher sehr hilfsbereit.',
        ],
      },
      {
        label: { de: 'Gut und weniger gut', en: 'Good and less good' },
        items: [
          'Besonders gut gefällt mir, dass …',
          'Weniger schön ist …',
          'Was mich manchmal stört, ist …',
        ],
      },
      {
        label: { de: 'Nachfragen', en: 'Asking back' },
        items: [
          'Und wie läuft es bei dir?',
          'Hast du inzwischen etwas von … gehört?',
          'Schreib mir mal wieder!',
        ],
      },
    ],
  },

  {
    id: 'w2a',
    teil: 2,
    minutes: 25,
    minWords: 80,
    register: 'informell',
    title: { de: 'Teil 2: Forumsbeitrag – Handys in der Schule', en: 'Part 2: forum post - phones at school' },
    situation:
      'Im Online-Forum einer Zeitung lesen Sie einen Artikel über ein Handyverbot an Schulen. Schreiben Sie Ihre Meinung in das Forum.',
    situationEn:
      'In a newspaper’s online forum you read an article about banning phones at school. Write your opinion in the forum.',
    bullets: [
      'Nennen Sie Ihre Meinung zum Thema.',
      'Begründen Sie sie mit mindestens zwei Argumenten.',
      'Nennen Sie ein Beispiel aus Ihrem eigenen Leben oder Land.',
    ],
    model: `Ich habe den Artikel mit Interesse gelesen und finde ein Verbot während des Unterrichts richtig, ein komplettes Verbot auf dem Schulgelände aber übertrieben.

Erstens lernen Kinder besser, wenn sie sich auf eine Sache konzentrieren. Wenn das Gerät in der Tasche vibriert, hört niemand mehr richtig zu. Zweitens brauchen viele Schülerinnen und Schüler ihr Handy nach dem Unterricht, zum Beispiel um den Bus zu prüfen oder den Eltern Bescheid zu sagen.

In meinem Heimatland gab es an meiner Schule gar keine Regel. Das Ergebnis war, dass jede Lehrkraft etwas anderes gemacht hat, und wir haben in jeder Stunde neu diskutiert. Eine klare Regel für alle wäre besser gewesen.

Meiner Meinung nach sollten Schulen deshalb eine einfache Lösung wählen: Handy aus im Unterricht, erlaubt in der Pause.`,
    checklist: [
      { de: 'Die eigene Meinung steht klar und früh im Text.', en: 'Your own opinion is stated clearly and early.' },
      { de: 'Mindestens zwei Argumente werden genannt und begründet.', en: 'At least two arguments are named and justified.' },
      { de: 'Ein konkretes Beispiel aus dem eigenen Leben kommt vor.', en: 'A concrete example from your own life appears.' },
      { de: 'Der Text ist gegliedert: Meinung, Argumente, Beispiel, Schluss.', en: 'The text is structured: opinion, arguments, example, conclusion.' },
      { de: 'Es werden Meinungswendungen benutzt (meiner Meinung nach, ich finde, dass …).', en: 'Opinion phrases are used (meiner Meinung nach, ich finde, dass …).' },
      { de: 'Erstens / zweitens oder ähnliche Gliederungswörter ordnen die Argumente.', en: 'Words like erstens / zweitens order the arguments.' },
      { de: 'Etwa 80 Wörter.', en: 'Around 80 words.' },
    ],
    phrases: [
      {
        label: { de: 'Meinung äußern', en: 'Stating an opinion' },
        items: [
          'Meiner Meinung nach …',
          'Ich finde, dass …',
          'Ich bin der Ansicht, dass …',
          'Ich halte das für …',
        ],
      },
      {
        label: { de: 'Argumente ordnen', en: 'Ordering arguments' },
        items: [
          'Erstens …, zweitens …',
          'Einerseits …, andererseits …',
          'Dazu kommt, dass …',
          'Ein weiterer Punkt ist …',
        ],
      },
      {
        label: { de: 'Beispiel geben', en: 'Giving an example' },
        items: [
          'Zum Beispiel …',
          'In meinem Heimatland ist es so, dass …',
          'Aus eigener Erfahrung weiß ich, dass …',
        ],
      },
      {
        label: { de: 'Schluss', en: 'Concluding' },
        items: [
          'Zusammenfassend würde ich sagen, dass …',
          'Deshalb sollte man …',
          'Aus diesen Gründen bin ich dafür / dagegen.',
        ],
      },
    ],
  },

  {
    id: 'w2b',
    teil: 2,
    minutes: 25,
    minWords: 80,
    register: 'informell',
    title: { de: 'Teil 2: Forumsbeitrag – Autofreie Innenstadt', en: 'Part 2: forum post - car-free city centre' },
    situation:
      'Ihre Stadt diskutiert, ob die Innenstadt autofrei werden soll. In einem Forum schreiben Leute ihre Meinung. Schreiben Sie Ihren Beitrag.',
    situationEn:
      'Your city is debating whether the centre should become car-free. People are writing their opinions in a forum. Write your post.',
    bullets: [
      'Sagen Sie, ob Sie dafür oder dagegen sind.',
      'Nennen Sie Vorteile und Nachteile.',
      'Machen Sie einen eigenen Vorschlag.',
    ],
    model: `Ich bin grundsätzlich dafür, dass die Innenstadt autofrei wird, aber nicht von heute auf morgen.

Der größte Vorteil ist der Platz. Wo heute Autos parken, könnten Bäume, Bänke und breitere Gehwege stehen. Außerdem wäre die Luft besser, und für Kinder wäre der Weg zur Schule sicherer.

Es gibt aber auch einen klaren Nachteil: Menschen, die schlecht laufen können, und kleine Geschäfte, die beliefert werden müssen, brauchen die Zufahrt weiterhin. Ohne Lösung für diese Gruppen wäre das Projekt ungerecht.

Mein Vorschlag wäre deshalb, zuerst den Bus häufiger fahren zu lassen und erst danach zu sperren. Lieferverkehr sollte morgens bis elf Uhr erlaubt bleiben. So gewinnen alle etwas, und niemand verliert seinen Zugang zur Stadt.`,
    checklist: [
      { de: 'Die Position ist klar erkennbar.', en: 'The position taken is clearly recognisable.' },
      { de: 'Es stehen sowohl Vorteile als auch Nachteile im Text.', en: 'Both advantages and disadvantages appear.' },
      { de: 'Ein eigener, konkreter Vorschlag kommt vor.', en: 'A concrete suggestion of your own appears.' },
      { de: 'Absätze trennen Meinung, Argumente und Vorschlag.', en: 'Paragraphs separate opinion, arguments and suggestion.' },
      { de: 'Mindestens ein Konjunktiv-II-Satz (wäre, könnte, würde) kommt vor.', en: 'At least one Konjunktiv II sentence (wäre, könnte, würde) appears.' },
      { de: 'Etwa 80 Wörter.', en: 'Around 80 words.' },
    ],
    phrases: [
      {
        label: { de: 'Vorteile', en: 'Advantages' },
        items: [
          'Der größte Vorteil ist, dass …',
          'Ein Vorteil wäre …',
          'Dafür spricht, dass …',
        ],
      },
      {
        label: { de: 'Nachteile', en: 'Disadvantages' },
        items: [
          'Ein klarer Nachteil ist …',
          'Dagegen spricht, dass …',
          'Problematisch finde ich, dass …',
        ],
      },
      {
        label: { de: 'Vorschlagen', en: 'Suggesting' },
        items: [
          'Mein Vorschlag wäre, … zu …',
          'Man könnte zuerst … und danach …',
          'Sinnvoller wäre es, wenn …',
        ],
      },
    ],
  },

  {
    id: 'w2c',
    teil: 2,
    minutes: 25,
    minWords: 80,
    register: 'informell',
    title: { de: 'Teil 2: Forumsbeitrag – Ehrenamt', en: 'Part 2: forum post - volunteering' },
    situation:
      'In einem Forum wird diskutiert: "Sollte jeder Mensch einmal im Leben ein Ehrenamt übernehmen?" Schreiben Sie Ihre Meinung.',
    situationEn:
      'A forum is debating: "Should everyone take on voluntary work once in their life?" Write your opinion.',
    bullets: [
      'Nennen Sie Ihre Meinung.',
      'Begründen Sie sie mit zwei Argumenten.',
      'Schreiben Sie, was Menschen vom Ehrenamt abhält.',
    ],
    model: `Ich finde die Idee gut, aber eine Pflicht daraus zu machen halte ich für falsch.

Für ein Ehrenamt spricht viel. Erstens lernt man Menschen kennen, denen man sonst nie begegnen würde. Als ich neu in Deutschland war, habe ich beim Sportverein geholfen, und dort habe ich mehr Deutsch gelernt als in drei Monaten Kurs. Zweitens funktionieren viele Angebote in einer Stadt nur, weil es Freiwillige gibt: Sportvereine, Feuerwehr, Nachbarschaftshilfe.

Trotzdem verstehe ich, warum viele es nicht machen. Wer zwei Jobs hat oder kleine Kinder betreut, hat schlicht keine Zeit, und Zeit lässt sich nicht verordnen.

Deshalb wäre ich dafür, das Ehrenamt attraktiver zu machen, zum Beispiel durch einen freien Tag im Jahr, statt es vorzuschreiben.`,
    checklist: [
      { de: 'Die Meinung ist klar und wird nicht erst am Ende genannt.', en: 'The opinion is clear and not only revealed at the end.' },
      { de: 'Zwei Argumente werden ausgeführt, nicht nur aufgezählt.', en: 'Two arguments are developed, not just listed.' },
      { de: 'Der dritte Leitpunkt (was hält Menschen ab) ist beantwortet.', en: 'The third content point (what stops people) is answered.' },
      { de: 'Ein persönliches Beispiel macht den Text konkret.', en: 'A personal example makes the text concrete.' },
      { de: 'Der Schluss enthält eine eigene Idee, keine Wiederholung.', en: 'The conclusion contains an idea of your own, not a repetition.' },
      { de: 'Etwa 80 Wörter.', en: 'Around 80 words.' },
    ],
    phrases: [
      {
        label: { de: 'Zustimmen mit Einschränkung', en: 'Agreeing with a qualification' },
        items: [
          'Ich finde die Idee gut, aber …',
          'Grundsätzlich stimme ich zu, allerdings …',
          'Das ist richtig, trotzdem …',
        ],
      },
      {
        label: { de: 'Erfahrung erzählen', en: 'Telling an experience' },
        items: [
          'Als ich neu in Deutschland war, …',
          'Ich habe selbst erlebt, dass …',
          'Bei mir war es so, dass …',
        ],
      },
      {
        label: { de: 'Gegenargument einräumen', en: 'Conceding a counterpoint' },
        items: [
          'Trotzdem verstehe ich, warum …',
          'Man muss allerdings bedenken, dass …',
          'Nicht jeder hat die Möglichkeit, …',
        ],
      },
    ],
  },

  {
    id: 'w3a',
    teil: 3,
    minutes: 15,
    minWords: 40,
    register: 'formell',
    title: { de: 'Teil 3: Kurs verschieben', en: 'Part 3: postponing a course' },
    situation:
      'Sie haben sich für einen Deutschkurs angemeldet, der am Montag beginnt. Sie können erst zwei Wochen später anfangen. Schreiben Sie eine E-Mail an die Kursleitung, Frau Dr. Ebert.',
    situationEn:
      'You have registered for a German course starting on Monday. You can only start two weeks later. Write an email to the course director, Dr Ebert.',
    bullets: [
      'Nennen Sie den Grund für Ihre Nachricht.',
      'Erklären Sie, warum Sie später anfangen müssen.',
      'Fragen Sie, ob ein späterer Einstieg möglich ist.',
    ],
    model: `Sehr geehrte Frau Dr. Ebert,

ich habe mich für den Abendkurs B1 angemeldet, der am kommenden Montag beginnt.

Leider muss ich aus beruflichen Gründen zwei Wochen später anfangen: Ich vertrete bis zum achtzehnten März eine erkrankte Kollegin und arbeite in dieser Zeit abends.

Wäre ein späterer Einstieg in den laufenden Kurs möglich? Falls nicht, würde ich mich gern für den nächsten Termin anmelden.

Vielen Dank im Voraus für Ihre Antwort.

Mit freundlichen Grüßen
Tarek Haddad`,
    checklist: [
      { de: 'Anrede und Gruß sind formell (Sehr geehrte … / Mit freundlichen Grüßen).', en: 'Greeting and sign-off are formal.' },
      { de: 'Sie wird durchgehend benutzt, nie du.', en: 'Sie is used throughout, never du.' },
      { de: 'Alle drei Leitpunkte kommen vor.', en: 'All three content points appear.' },
      { de: 'Der Anlass steht im ersten Satz, nicht am Ende.', en: 'The reason for writing is in the first sentence, not at the end.' },
      { de: 'Die Bitte ist höflich formuliert, z. B. mit Konjunktiv II.', en: 'The request is polite, e.g. using Konjunktiv II.' },
      { de: 'Etwa 40 Wörter – kurz und sachlich, ohne Privates.', en: 'Around 40 words - short and factual, with nothing personal.' },
    ],
    phrases: [
      {
        label: { de: 'Anlass nennen', en: 'Stating the reason' },
        items: [
          'ich schreibe Ihnen, weil …',
          'ich habe mich für … angemeldet.',
          'ich beziehe mich auf Ihre E-Mail vom …',
        ],
      },
      {
        label: { de: 'Höflich bitten', en: 'Requesting politely' },
        items: [
          'Wäre es möglich, … zu …?',
          'Könnten Sie mir bitte mitteilen, ob …',
          'Ich würde Sie bitten, …',
        ],
      },
      {
        label: { de: 'Schluss', en: 'Closing' },
        items: [
          'Vielen Dank im Voraus.',
          'Über eine kurze Rückmeldung würde ich mich freuen.',
          'Für Rückfragen stehe ich gern zur Verfügung.',
          'Mit freundlichen Grüßen',
        ],
      },
    ],
  },

  {
    id: 'w3b',
    teil: 3,
    minutes: 15,
    minWords: 40,
    register: 'formell',
    title: { de: 'Teil 3: Reklamation einer Lieferung', en: 'Part 3: complaining about a delivery' },
    situation:
      'Sie haben online eine Kaffeemaschine bestellt. Das Gerät ist beschädigt angekommen. Schreiben Sie eine E-Mail an den Kundenservice.',
    situationEn:
      'You ordered a coffee machine online. It arrived damaged. Write an email to customer service.',
    bullets: [
      'Nennen Sie Bestellnummer und Datum.',
      'Beschreiben Sie das Problem.',
      'Sagen Sie, was Sie jetzt möchten.',
    ],
    model: `Sehr geehrte Damen und Herren,

am 3. Mai habe ich bei Ihnen eine Kaffeemaschine bestellt, Bestellnummer 48-2291.

Das Gerät ist gestern beschädigt bei mir angekommen: Das Gehäuse hat einen Riss, und der Wassertank ist undicht. Die Verpackung war bereits beim Empfang eingedrückt.

Ich möchte die Maschine gegen ein neues Gerät umtauschen. Bitte teilen Sie mir mit, wie ich die beschädigte Maschine zurücksenden kann.

Mit freundlichen Grüßen
Iryna Kovalenko`,
    checklist: [
      { de: 'Bestellnummer und Datum stehen im Text.', en: 'The order number and date appear in the text.' },
      { de: 'Das Problem ist sachlich beschrieben, ohne Ärger.', en: 'The problem is described factually, without anger.' },
      { de: 'Der eigene Wunsch ist eindeutig genannt (Umtausch, Geld zurück, Reparatur).', en: 'Your own request is unambiguous (exchange, refund, repair).' },
      { de: 'Anrede und Gruß sind formell.', en: 'Greeting and sign-off are formal.' },
      { de: 'Etwa 40 Wörter, kein Wort Privates.', en: 'Around 40 words, nothing personal.' },
    ],
    phrases: [
      {
        label: { de: 'Bestellung nennen', en: 'Referring to the order' },
        items: [
          'am … habe ich bei Ihnen … bestellt, Bestellnummer …',
          'ich beziehe mich auf meine Bestellung vom …',
        ],
      },
      {
        label: { de: 'Problem beschreiben', en: 'Describing the problem' },
        items: [
          'Das Gerät ist beschädigt angekommen.',
          'Leider funktioniert … nicht.',
          'Die Lieferung war unvollständig.',
        ],
      },
      {
        label: { de: 'Wunsch nennen', en: 'Stating your request' },
        items: [
          'Ich möchte das Gerät umtauschen.',
          'Ich bitte Sie, mir den Betrag zu erstatten.',
          'Bitte teilen Sie mir mit, wie ich …',
        ],
      },
    ],
  },

  {
    id: 'w3c',
    teil: 3,
    minutes: 15,
    minWords: 40,
    register: 'formell',
    title: { de: 'Teil 3: Termin beim Amt absagen', en: 'Part 3: cancelling an appointment at the authority' },
    situation:
      'Sie haben am Donnerstag einen Termin bei der Ausländerbehörde. Sie können nicht kommen, weil Ihr Kind krank ist. Schreiben Sie eine E-Mail an die Behörde.',
    situationEn:
      'You have an appointment at the immigration office on Thursday. You cannot come because your child is ill. Write an email to the authority.',
    bullets: [
      'Nennen Sie Termin und Aktenzeichen.',
      'Sagen Sie ab und nennen Sie den Grund.',
      'Bitten Sie um einen neuen Termin.',
    ],
    model: `Sehr geehrte Damen und Herren,

am Donnerstag, dem 12. September, um 10:30 Uhr habe ich einen Termin bei Ihnen, Aktenzeichen AB-7741.

Leider muss ich diesen Termin absagen, da mein Sohn erkrankt ist und ich ihn betreuen muss.

Ich bitte Sie um einen neuen Termin, möglichst noch im September. Vormittags bin ich flexibel.

Vielen Dank für Ihr Verständnis.

Mit freundlichen Grüßen
Samuel Osei`,
    checklist: [
      { de: 'Termin, Uhrzeit und Aktenzeichen sind genannt.', en: 'The date, time and reference number are named.' },
      { de: 'Die Absage steht klar und früh im Text.', en: 'The cancellation is stated clearly and early.' },
      { de: 'Der Grund ist kurz und sachlich.', en: 'The reason is brief and factual.' },
      { de: 'Die Bitte um einen neuen Termin ist konkret.', en: 'The request for a new appointment is concrete.' },
      { de: 'Formelle Anrede und formeller Gruß.', en: 'Formal greeting and formal sign-off.' },
      { de: 'Etwa 40 Wörter.', en: 'Around 40 words.' },
    ],
    phrases: [
      {
        label: { de: 'Termin nennen', en: 'Naming the appointment' },
        items: [
          'am … um … Uhr habe ich einen Termin bei Ihnen.',
          'Aktenzeichen …',
        ],
      },
      {
        label: { de: 'Absagen', en: 'Cancelling' },
        items: [
          'Leider muss ich den Termin absagen, da …',
          'Aus gesundheitlichen Gründen kann ich leider nicht kommen.',
        ],
      },
      {
        label: { de: 'Neuen Termin erbitten', en: 'Asking for a new appointment' },
        items: [
          'Ich bitte Sie um einen neuen Termin.',
          'Wäre ein Termin in der Woche vom … möglich?',
          'Vielen Dank für Ihr Verständnis.',
        ],
      },
    ],
  },
];
