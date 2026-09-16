/**
 * Lesen: practice sets in the five task formats of the Goethe-Zertifikat B1.
 *
 * Teil 1  a blog or forum post, richtig/falsch
 * Teil 2  press texts, three-option multiple choice
 * Teil 3  small adverts, matched to people who are looking for something
 * Teil 4  opinions on one topic, for or against
 * Teil 5  rules and instructions, three-option multiple choice
 *
 * The telc Sprachbausteine section has no equivalent here; it is drilled in
 * the grammar module instead, which is what it actually tests.
 *
 * All texts, people and companies are invented for this app.
 */
export const READING = [
  {
    id: 'l1a',
    teil: 1,
    minutes: 10,
    title: { de: 'Teil 1: Blogeintrag – Ein Jahr ohne Auto', en: 'Part 1: blog post - A year without a car' },
    instructions: {
      de: 'Lies den Text. Sind die Aussagen richtig oder falsch?',
      en: 'Read the text. Are the statements true or false?',
    },
    texts: [
      {
        heading: 'Mein Jahr ohne Auto',
        body: `Vor genau einem Jahr habe ich mein Auto verkauft. Nicht, weil ich besonders umweltbewusst bin, sondern weil die Werkstatt mir eine Rechnung über 1.800 Euro geschrieben hat. In dem Moment habe ich gerechnet: Versicherung, Steuer, Reparaturen, Benzin, dazu 80 Euro im Monat für den Stellplatz. Und das für ein Auto, das die meiste Zeit vor dem Haus stand.

Der Anfang war hart. Ich wohne am Stadtrand, und der Bus fährt abends nur einmal pro Stunde. In der ersten Woche habe ich zweimal den letzten Bus verpasst und bin vierzig Minuten nach Hause gelaufen. Ich habe ernsthaft überlegt, wieder ein Auto zu kaufen.

Dann habe ich mir ein gebrauchtes Fahrrad gekauft, für 240 Euro. Seitdem fahre ich fast alles mit dem Rad: zur Arbeit, zum Einkaufen, zum Sport. Für den Großeinkauf am Samstag habe ich einen Anhänger. Wenn ich wirklich ein Auto brauche, zum Beispiel für den Umzug meiner Schwester, miete ich eins über eine Carsharing-App. Das habe ich im letzten Jahr genau viermal gemacht.

Was mich überrascht hat: Ich bin nicht langsamer geworden. Auf meiner Strecke zur Arbeit bin ich mit dem Rad sogar zwei Minuten schneller als früher mit dem Auto, weil ich nicht mehr im Stau stehe und keinen Parkplatz suche. Und ich bin seit Monaten nicht mehr erkältet gewesen.

Ehrlich gesagt vermisse ich das Auto nur im Winter, wenn es regnet und dunkel ist. Für diese Tage habe ich mir gute Regenkleidung gekauft. Das war teuer, aber immer noch billiger als ein Monat Autokosten.

Würde ich es wieder machen? Ja. Aber ich würde niemandem raten, der kleine Kinder hat oder auf dem Land wohnt, einfach so das Auto abzuschaffen. Bei mir hat es gepasst. Das ist keine Regel für alle.`,
      },
    ],
    items: [
      [
        'Der Autor hat sein Auto verkauft, weil er die Umwelt schützen wollte.',
        ['Richtig', 'Falsch'],
        1,
        'Im Text steht ausdrücklich: "Nicht, weil ich besonders umweltbewusst bin, sondern weil die Werkstatt mir eine Rechnung … geschrieben hat."',
        'The text says explicitly that it was not out of environmental concern but because of the repair bill.',
        'The author sold his car because he wanted to protect the environment.',
      ],
      [
        'In der ersten Zeit ohne Auto hatte der Autor Probleme mit dem Bus.',
        ['Richtig', 'Falsch'],
        0,
        'Er hat in der ersten Woche zweimal den letzten Bus verpasst und musste laufen.',
        'In the first week he missed the last bus twice and had to walk.',
        'In the early days without a car the author had problems with the bus.',
      ],
      [
        'Er hat sich ein neues Fahrrad gekauft.',
        ['Richtig', 'Falsch'],
        1,
        'Es war ein gebrauchtes Fahrrad für 240 Euro.',
        'It was a second-hand bicycle for 240 euros.',
        'He bought a new bicycle.',
      ],
      [
        'Er benutzt manchmal Carsharing.',
        ['Richtig', 'Falsch'],
        0,
        'Er mietet über eine App ein Auto, wenn er eins braucht – im letzten Jahr viermal.',
        'He rents a car through an app when he needs one - four times in the past year.',
        'He sometimes uses car sharing.',
      ],
      [
        'Der Weg zur Arbeit dauert mit dem Rad länger als früher mit dem Auto.',
        ['Richtig', 'Falsch'],
        1,
        'Er ist mit dem Rad sogar zwei Minuten schneller, weil er nicht im Stau steht.',
        'He is actually two minutes faster by bike because he is not stuck in traffic.',
        'The journey to work takes longer by bike than it used to by car.',
      ],
      [
        'Der Autor empfiehlt allen Menschen, ihr Auto abzuschaffen.',
        ['Richtig', 'Falsch'],
        1,
        'Am Ende sagt er ausdrücklich, dass das keine Regel für alle ist.',
        'At the end he says explicitly that this is not a rule for everyone.',
        'The author recommends that everyone should get rid of their car.',
      ],
    ],
  },

  {
    id: 'l1b',
    teil: 1,
    minutes: 10,
    title: { de: 'Teil 1: Forumsbeitrag – Die erste eigene Wohnung', en: 'Part 1: forum post - My first own flat' },
    instructions: {
      de: 'Lies den Text. Sind die Aussagen richtig oder falsch?',
      en: 'Read the text. Are the statements true or false?',
    },
    texts: [
      {
        heading: 'Wohnungssuche: Was ich gern vorher gewusst hätte',
        body: `Vier Monate, 61 Bewerbungen, elf Besichtigungen, eine Zusage. So sah meine Wohnungssuche in Leipzig aus. Ich schreibe das hier auf, weil mir am Anfang niemand gesagt hat, wie das eigentlich läuft.

Erstens: Die Unterlagen. Zu jeder Besichtigung solltest du eine Mappe mitbringen – Kopie vom Ausweis, die letzten drei Gehaltsabrechnungen, eine Schufa-Auskunft und die Mietschuldenfreiheitsbescheinigung vom alten Vermieter. Ich habe das bei den ersten Terminen nicht gemacht und wurde jedes Mal gefragt. Wer die Mappe dabei hat, wirkt vorbereitet, und das entscheidet manchmal mehr als das Gehalt.

Zweitens: Kalt- und Warmmiete. In den Anzeigen steht fast immer die Kaltmiete. Dazu kommen die Nebenkosten, also Heizung, Wasser, Müll, Hausreinigung. Bei meiner Wohnung sind das 140 Euro im Monat. Der Strom ist darin noch nicht enthalten, den meldet man selbst an. Rechne bei einer 60-Quadratmeter-Wohnung mit etwa 200 Euro zusätzlich, dann liegst du selten daneben.

Drittens: die Kaution. Der Vermieter darf höchstens drei Kaltmieten verlangen, und du darfst sie in drei Raten zahlen. Das wusste ich nicht und habe alles auf einmal überwiesen. Möglich wäre es anders gewesen.

Was mir wirklich geholfen hat, war kein Trick, sondern Geduld und ein kurzer, freundlicher Text in der ersten Nachricht: wer ich bin, was ich arbeite, ab wann ich einziehen kann. Keine Romane. Die Maklerin hat mir später gesagt, dass sie bei über hundert Anfragen nur die ersten drei Zeilen liest.

Die Wohnung ist kleiner als geplant und liegt nicht in dem Viertel, das ich wollte. Trotzdem bin ich zufrieden. Nach vier Monaten auf dem Sofa einer Freundin ist eine eigene Tür eine ziemlich große Sache.`,
      },
    ],
    items: [
      [
        'Die Autorin hat sich auf mehr als fünfzig Wohnungen beworben.',
        ['Richtig', 'Falsch'],
        0,
        'Im Text stehen 61 Bewerbungen.',
        'The text says 61 applications.',
        'The author applied for more than fifty flats.',
      ],
      [
        'Sie hatte von Anfang an alle Unterlagen dabei.',
        ['Richtig', 'Falsch'],
        1,
        'Sie schreibt, dass sie das bei den ersten Terminen nicht gemacht hat.',
        'She writes that she did not do this at the first viewings.',
        'She had all the documents with her from the start.',
      ],
      [
        'In den Wohnungsanzeigen steht meistens die Warmmiete.',
        ['Richtig', 'Falsch'],
        1,
        'Im Text steht: "In den Anzeigen steht fast immer die Kaltmiete."',
        'The text says the adverts almost always show the basic rent, not the full rent.',
        'Flat adverts usually show the full rent including bills.',
      ],
      [
        'Die Kaution darf man in Raten zahlen.',
        ['Richtig', 'Falsch'],
        0,
        'Der Text sagt, man darf sie in drei Raten zahlen – sie selbst hat es nur nicht gewusst.',
        'The text says it may be paid in three instalments; she simply did not know.',
        'The deposit may be paid in instalments.',
      ],
      [
        'Die Maklerin liest jede Anfrage komplett.',
        ['Richtig', 'Falsch'],
        1,
        'Die Maklerin liest bei über hundert Anfragen nur die ersten drei Zeilen.',
        'With over a hundred enquiries the agent only reads the first three lines.',
        'The letting agent reads every enquiry in full.',
      ],
      [
        'Die Autorin hat genau die Wohnung bekommen, die sie sich gewünscht hat.',
        ['Richtig', 'Falsch'],
        1,
        'Die Wohnung ist kleiner als geplant und im falschen Viertel – sie ist trotzdem zufrieden.',
        'The flat is smaller than planned and in the wrong district, though she is still happy.',
        'The author got exactly the flat she wanted.',
      ],
    ],
  },

  {
    id: 'l2a',
    teil: 2,
    minutes: 12,
    title: { de: 'Teil 2: Zwei Zeitungstexte', en: 'Part 2: two newspaper texts' },
    instructions: {
      de: 'Lies die beiden Texte und wähle jeweils die richtige Antwort.',
      en: 'Read both texts and choose the correct answer each time.',
    },
    texts: [
      {
        heading: 'Text 1: Bibliothek verlängert die Öffnungszeiten',
        body: `Die Stadtbibliothek Neustadt öffnet ab dem 1. September auch sonntags. Von 12 bis 18 Uhr können Besucherinnen und Besucher dann lesen, lernen und die Arbeitsplätze nutzen. Ausleihen und Rückgaben sind sonntags allerdings nicht möglich, weil an diesem Tag kein Personal am Schalter arbeitet. Wer Bücher zurückgeben will, kann den Automaten im Eingangsbereich benutzen.

Der Grund für die Änderung sind die Lernenden. "Wir haben im letzten Winter gezählt: An Samstagen waren durchgehend über achtzig Prozent der Arbeitsplätze belegt, und viele Leute mussten wieder gehen", sagt Bibliotheksleiterin Marlen Ruf. Besonders Schülerinnen und Schüler vor Prüfungen sowie Studierende hätten nach einem zusätzlichen Tag gefragt.

Bezahlt wird die Öffnung zunächst für ein Jahr aus einem Fördertopf des Landes. Ob es danach weitergeht, entscheidet der Stadtrat im nächsten Sommer. Ruf ist vorsichtig optimistisch: "Wenn die Plätze auch sonntags voll sind, ist das ein starkes Argument."`,
      },
      {
        heading: 'Text 2: Weniger Pakete, mehr Packstationen',
        body: `Immer mehr Menschen in Neustadt lassen ihre Pakete nicht mehr nach Hause liefern, sondern an eine Packstation. Nach Angaben der Stadt ist die Zahl der Automaten im Stadtgebiet in drei Jahren von neun auf 27 gestiegen. Der Grund ist einfach: Wer tagsüber arbeitet, ist nicht zu Hause, und das Paket landet beim Nachbarn oder geht zurück.

Für die Zustellerinnen und Zusteller bedeutet das eine spürbare Entlastung. Statt vier- oder fünfmal an derselben Adresse zu klingeln, bringen sie zwanzig Pakete an einen Automaten. Der Lieferverkehr in den Wohnstraßen hat nach einer Zählung der Stadt im Frühjahr um etwa ein Fünftel abgenommen.

Kritik kommt von Anwohnern einzelner Standorte. An der Packstation in der Gartenstraße halten auch nachts Autos, und die Automaten geben ein leises, aber dauerhaftes Geräusch von sich. Die Stadt prüft nun, ob die Station an eine andere Stelle umziehen kann.`,
      },
    ],
    items: [
      [
        'Was ist ab September in der Bibliothek sonntags möglich?',
        ['An einem Arbeitsplatz lernen.', 'Bücher am Schalter ausleihen.', 'Sich neu anmelden.'],
        0,
        'Sonntags kann man lesen, lernen und die Arbeitsplätze nutzen; Ausleihen geht nicht.',
        'On Sundays you can read, study and use the desks; borrowing is not possible.',
        'What will be possible in the library on Sundays from September?',
      ],
      [
        'Warum öffnet die Bibliothek zusätzlich?',
        ['Die Arbeitsplätze waren samstags oft voll.', 'Die Stadt hat mehr Personal eingestellt.', 'Es gibt weniger Besucher als früher.'],
        0,
        'Über achtzig Prozent der Plätze waren samstags belegt, viele mussten wieder gehen.',
        'Over eighty percent of the desks were taken on Saturdays and many people had to leave.',
        'Why is the library opening for longer?',
      ],
      [
        'Wie lange ist die Sonntagsöffnung bisher finanziert?',
        ['Für ein Jahr.', 'Dauerhaft.', 'Bis zum Ende des Winters.'],
        0,
        'Sie wird zunächst für ein Jahr aus einem Fördertopf des Landes bezahlt.',
        'It is funded for one year from a state grant to begin with.',
        'How long is Sunday opening funded for so far?',
      ],
      [
        'Warum nutzen viele Menschen Packstationen?',
        ['Sie sind tagsüber nicht zu Hause.', 'Die Lieferung nach Hause kostet extra.', 'Die Pakete kommen dort schneller an.'],
        0,
        'Wer tagsüber arbeitet, ist nicht zu Hause, und das Paket geht zurück oder zum Nachbarn.',
        'People who work during the day are not at home, so parcels go back or to a neighbour.',
        'Why do many people use parcel lockers?',
      ],
      [
        'Was hat sich für die Zustellerinnen und Zusteller geändert?',
        ['Ihre Arbeit ist leichter geworden.', 'Sie müssen längere Strecken fahren.', 'Sie liefern mehr Pakete als früher.'],
        0,
        'Der Text spricht von einer spürbaren Entlastung: zwanzig Pakete an einen Automaten statt mehrfach klingeln.',
        'The text speaks of a noticeable relief: twenty parcels to one machine instead of ringing repeatedly.',
        'What has changed for the delivery drivers?',
      ],
      [
        'Was ist das Problem in der Gartenstraße?',
        ['Anwohner stören sich an Lärm und Autos.', 'Die Packstation ist zu klein.', 'Die Automaten funktionieren nicht.'],
        0,
        'Nachts halten Autos, und die Automaten machen ein dauerhaftes Geräusch.',
        'Cars stop there at night and the machines make a constant noise.',
        'What is the problem in Gartenstraße?',
      ],
    ],
  },

  {
    id: 'l3a',
    teil: 3,
    minutes: 12,
    title: { de: 'Teil 3: Kleinanzeigen zuordnen', en: 'Part 3: matching small adverts' },
    instructions: {
      de: 'Sechs Personen suchen etwas. Lies die Anzeigen a bis i und wähle für jede Person die passende Anzeige. Wenn keine Anzeige passt, wähle "Keine Anzeige passt".',
      en: 'Six people are looking for something. Read adverts a to i and choose the right one for each person. If none fits, choose "No advert fits".',
    },
    texts: [
      {
        heading: 'a) Fahrradwerkstatt zum Selbermachen',
        body: 'Offene Werkstatt im Hinterhof der Lindenstraße 8. Jeden Mittwoch 16–20 Uhr. Werkzeug und Hilfe kostenlos, Ersatzteile zum Selbstkostenpreis. Wir reparieren nicht für dich, wir zeigen dir, wie es geht. Keine Anmeldung.',
      },
      {
        heading: 'b) Deutsch am Samstagvormittag',
        body: 'Konversationskurs B1/B2 für Berufstätige, samstags 9–11 Uhr, 12 Termine, 96 Euro. Kleine Gruppe, max. 8 Personen. Schwerpunkt: frei sprechen, keine Grammatikübungen. VHS Neustadt, Anmeldung online.',
      },
      {
        heading: 'c) Nachhilfe Mathematik',
        body: 'Lehramtsstudentin (7. Semester) gibt Nachhilfe in Mathe, Klasse 5–10. 18 Euro pro Stunde, bei dir zu Hause oder in der Bibliothek. Auch kurzfristig vor Klassenarbeiten. Nur Mathe, keine anderen Fächer.',
      },
      {
        heading: 'd) Umzugshelfer gesucht',
        body: 'Wir suchen für Samstag, 14. Juni, zwei kräftige Helfer für einen Umzug innerhalb der Stadt (3. Stock, kein Aufzug). 9–15 Uhr, 15 Euro pro Stunde, Essen und Getränke inklusive. Führerschein nicht nötig.',
      },
      {
        heading: 'e) Chor sucht Stimmen',
        body: 'Der Chor "Querbeet" probt dienstags 19–21 Uhr in der Aula der Grundschule Nord. Wir singen Pop und Volkslieder aus aller Welt. Noten lesen nicht nötig, Spaß am Singen reicht. Erste vier Proben zum Ausprobieren gratis.',
      },
      {
        heading: 'f) Kinderbetreuung am Nachmittag',
        body: 'Erfahrene Tagesmutter mit freiem Platz ab September, Montag bis Donnerstag 13–17 Uhr, für Kinder von 1 bis 3 Jahren. Eigener Garten, warmes Mittagessen. Nur ganze Nachmittage, keine einzelnen Stunden.',
      },
      {
        heading: 'g) Laufgruppe für Anfänger',
        body: 'Jeden Montag und Donnerstag um 18:30 Uhr am Eingang Stadtpark. Wir laufen 5 km in ruhigem Tempo, niemand wird zurückgelassen. Kostenlos, keine Anmeldung, einfach kommen. Auch bei Regen.',
      },
      {
        heading: 'h) Gebrauchte Möbel abzugeben',
        body: 'Wegen Umzug: Sofa (3 Sitze, grau, 4 Jahre alt), Esstisch mit vier Stühlen, zwei Regale. Alles gepflegt. Gegen Gebot an Selbstabholer, Abholung nur am Wochenende 5.–6. Juli, Erdgeschoss.',
      },
      {
        heading: 'i) Computerhilfe für Senioren',
        body: 'Ehrenamtliche Sprechstunde im Nachbarschaftszentrum, donnerstags 15–17 Uhr. Wir helfen bei Handy, Tablet und E-Mail. Bringen Sie Ihr Gerät mit. Kostenlos, ohne Termin, auch mehrmals.',
      },
    ],
    items: [
      [
        'Frau Sadiku arbeitet unter der Woche und möchte ihr gesprochenes Deutsch verbessern. Grammatikübungen hat sie genug gemacht.',
        ['b', 'i', 'c', 'Keine Anzeige passt'],
        0,
        'Anzeige b ist ein Konversationskurs am Samstag für Berufstätige, ausdrücklich ohne Grammatikübungen.',
        'Advert b is a Saturday conversation course for working people, explicitly without grammar exercises.',
      ],
      [
        'Herr Brandt hat ein altes Fahrrad, dessen Bremse nicht mehr funktioniert. Er will es selbst reparieren, weiß aber nicht wie.',
        ['a', 'g', 'h', 'Keine Anzeige passt'],
        0,
        'Anzeige a bietet Werkzeug und Anleitung, damit man selbst repariert.',
        'Advert a offers tools and guidance so you repair it yourself.',
      ],
      [
        'Familie Weber braucht ab September nachmittags eine Betreuung für ihre zweijährige Tochter, aber nur dienstags und donnerstags.',
        ['Keine Anzeige passt', 'f', 'c', 'i'],
        0,
        'Anzeige f nimmt nur ganze Nachmittage von Montag bis Donnerstag und keine einzelnen Tage.',
        'Advert f only takes whole afternoons Monday to Thursday and not individual days.',
      ],
      [
        'Frau Kern ist 71 und bekommt ihre E-Mails auf dem Tablet nicht mehr geöffnet. Einen Termin möchte sie nicht vereinbaren.',
        ['i', 'b', 'a', 'Keine Anzeige passt'],
        0,
        'Anzeige i ist eine kostenlose Sprechstunde für Handy, Tablet und E-Mail, ohne Termin.',
        'Advert i is a free drop-in session for phone, tablet and email, with no appointment.',
      ],
      [
        'Dawit möchte etwas für seine Kondition tun, hat aber seit Jahren keinen Sport gemacht und will nicht der Langsamste sein.',
        ['g', 'e', 'a', 'Keine Anzeige passt'],
        0,
        'Anzeige g ist ausdrücklich für Anfänger, ruhiges Tempo, niemand wird zurückgelassen.',
        'Advert g is explicitly for beginners, at a calm pace, and nobody is left behind.',
      ],
      [
        'Herr Lang sucht jemanden, der seinem Sohn in Klasse 9 in Englisch hilft, am liebsten schon nächste Woche.',
        ['Keine Anzeige passt', 'c', 'b', 'i'],
        0,
        'Anzeige c gibt ausdrücklich nur Mathe-Nachhilfe, keine anderen Fächer.',
        'Advert c explicitly offers maths tutoring only, no other subjects.',
      ],
    ],
  },

  {
    id: 'l4a',
    teil: 4,
    minutes: 12,
    title: { de: 'Teil 4: Meinungen – Handys in der Schule', en: 'Part 4: opinions - phones at school' },
    instructions: {
      de: 'Sechs Personen äußern sich zu einem Handyverbot an Schulen. Ist die Person dafür oder dagegen?',
      en: 'Six people comment on a phone ban at schools. Is the person for or against?',
    },
    texts: [
      {
        heading: 'Leserbriefe zum Thema: Sollen Handys an Schulen verboten werden?',
        body: `Nadja, 34, Lehrerin: In meiner Klasse liegen die Geräte seit einem Jahr während des Unterrichts in einer Box. Der Unterschied ist enorm. Die Kinder reden in der Pause wieder miteinander, statt nebeneinander auf Bildschirme zu schauen. Ich hätte nicht gedacht, dass eine so einfache Regel so viel bewirkt.

Tobias, 17, Schüler: Wer glaubt, dass ein Verbot uns weniger abhängig macht, hat sich noch nie mit uns unterhalten. Wir brauchen die Geräte für Stundenpläne, für Gruppenchats, für den Weg nach Hause. Statt sie wegzusperren, sollte die Schule uns beibringen, wie man sie sinnvoll benutzt. Verbote lernen nichts.

Frau Özkan, 45, Mutter: Meine Tochter fährt vierzig Minuten mit dem Bus zur Schule. Ich möchte, dass sie mich erreichen kann, wenn der Bus ausfällt. Ein Verbot während des Unterrichts finde ich in Ordnung, aber ein komplettes Verbot auf dem Schulgelände geht mir zu weit – deshalb bin ich dagegen.

Dr. Heim, 52, Kinderarzt: Ich sehe jede Woche Jugendliche, die nachts nicht schlafen, weil das Gerät neben dem Kopfkissen liegt. Die Schule ist einer der wenigen Orte, an denen Erwachsene noch eine klare Grenze ziehen können. Genau das sollte sie tun.

Milena, 29, Sozialarbeiterin: Nach einem Verbot an einer Schule in unserem Viertel ist das Mobbing nicht verschwunden, es hat nur den Ort gewechselt und findet jetzt abends statt. Das eigentliche Problem wird damit nicht gelöst, sondern nur aus dem Blickfeld geschoben.

Herr Grabowski, 61, Schulleiter: Wir haben es zwei Jahre ohne feste Regel versucht und jede Woche über Einzelfälle diskutiert. Seit die Regel für alle gilt, ist diese Diskussion vorbei, und wir haben Zeit für Wichtigeres. Ich würde es jeder Schule empfehlen.`,
      },
    ],
    items: [
      ['Nadja, Lehrerin', ['dafür', 'dagegen'], 0, 'Sie beschreibt nur positive Folgen der Regel und ist überrascht, wie viel sie bewirkt.', 'She describes only positive effects of the rule and is surprised how much it achieves.'],
      ['Tobias, Schüler', ['dafür', 'dagegen'], 1, 'Er sagt, Verbote lernen nichts, und fordert stattdessen, den Umgang zu lernen.', 'He says bans teach nothing and calls for learning how to use the devices instead.'],
      ['Frau Özkan, Mutter', ['dafür', 'dagegen'], 1, 'Sie sagt ausdrücklich, ein komplettes Verbot gehe ihr zu weit und sie sei dagegen.', 'She says explicitly that a complete ban goes too far and that she is against it.'],
      ['Dr. Heim, Kinderarzt', ['dafür', 'dagegen'], 0, 'Er findet, die Schule sollte genau diese Grenze ziehen.', 'He thinks the school should draw exactly that line.'],
      ['Milena, Sozialarbeiterin', ['dafür', 'dagegen'], 1, 'Sie sagt, das Problem werde nur verschoben, nicht gelöst.', 'She says the problem is merely displaced, not solved.'],
      ['Herr Grabowski, Schulleiter', ['dafür', 'dagegen'], 0, 'Er würde die Regel jeder Schule empfehlen.', 'He would recommend the rule to every school.'],
    ],
  },

  {
    id: 'l4b',
    teil: 4,
    minutes: 12,
    title: { de: 'Teil 4: Meinungen – Homeoffice', en: 'Part 4: opinions - working from home' },
    instructions: {
      de: 'Sechs Personen äußern sich zum Thema Homeoffice. Ist die Person dafür oder dagegen?',
      en: 'Six people comment on working from home. Is the person for or against?',
    },
    texts: [
      {
        heading: 'Umfrage: Sollen Firmen Homeoffice anbieten?',
        body: `Kerstin, 41, Buchhalterin: Ohne Homeoffice könnte ich diesen Job nicht machen. Ich spare täglich neunzig Minuten Fahrt und bin um halb vier bei meinem Sohn. Meine Zahlen sind seitdem nicht schlechter geworden, im Gegenteil.

Rasheed, 26, Berufseinsteiger: Ich habe im ersten Jahr fast nur zu Hause gearbeitet und dabei kaum etwas gelernt. Das Meiste lernt man nebenbei, wenn man hört, wie erfahrene Kolleginnen ein Problem lösen. Über einen Chat passiert das nicht. Ich gehe inzwischen freiwillig jeden Tag ins Büro und finde, gerade Anfänger sollten das auch.

Herr Vogt, 58, Abteilungsleiter: Ich habe mich lange gesträubt und gebe zu, dass ich falsch lag. Seit wir feste Bürotage und feste Homeoffice-Tage haben, sind die Besprechungen kürzer und die Ergebnisse besser. Zurück will bei uns niemand.

Frau Lindner, 37, Personalberaterin: Wer heute keine Homeoffice-Regelung anbietet, bekommt bestimmte Bewerbungen schlicht nicht mehr. Das ist keine Frage der Haltung, sondern eine Frage des Arbeitsmarkts. Firmen, die das ignorieren, suchen länger und zahlen am Ende mehr.

Jonas, 33, Softwareentwickler: In der Theorie klingt es gut, in meiner Wohnung nicht. Ich habe zweiundzwanzig Quadratmeter und keinen Schreibtisch, und abends sitze ich noch immer am selben Tisch, an dem ich gearbeitet habe. Ich brauche den Weg ins Büro, um Feierabend zu haben.

Frau Demir, 49, Teamleiterin: Wir haben es zwei Jahre gemacht und wieder abgeschafft. Neue Leute wurden nicht richtig Teil des Teams, und Probleme wurden zu spät bemerkt. Für meine Abteilung war es am Ende der falsche Weg.`,
      },
    ],
    items: [
      ['Kerstin, Buchhalterin', ['dafür', 'dagegen'], 0, 'Sie nennt gesparte Fahrzeit und gleichbleibende Leistung als Argumente dafür.', 'She cites saved travel time and unchanged performance as arguments in favour.'],
      ['Rasheed, Berufseinsteiger', ['dafür', 'dagegen'], 1, 'Er hat zu Hause kaum gelernt und findet, gerade Anfänger sollten ins Büro.', 'He learned little at home and thinks beginners in particular should go to the office.'],
      ['Herr Vogt, Abteilungsleiter', ['dafür', 'dagegen'], 0, 'Er gibt zu, dass er falsch lag; niemand will zurück.', 'He admits he was wrong; nobody wants to go back.'],
      ['Frau Lindner, Personalberaterin', ['dafür', 'dagegen'], 0, 'Sie argumentiert, ohne Homeoffice bekomme man bestimmte Bewerbungen nicht mehr.', 'She argues that without it you simply stop receiving certain applications.'],
      ['Jonas, Softwareentwickler', ['dafür', 'dagegen'], 1, 'Er braucht den Weg ins Büro, um Feierabend zu haben.', 'He needs the trip to the office in order to have an end to the working day.'],
      ['Frau Demir, Teamleiterin', ['dafür', 'dagegen'], 1, 'Sie hat es wieder abgeschafft und nennt es den falschen Weg.', 'She abolished it again and calls it the wrong approach.'],
    ],
  },

  {
    id: 'l5a',
    teil: 5,
    minutes: 8,
    title: { de: 'Teil 5: Hausordnung', en: 'Part 5: house rules' },
    instructions: {
      de: 'Lies die Hausordnung und wähle die richtige Antwort.',
      en: 'Read the house rules and choose the correct answer.',
    },
    texts: [
      {
        heading: 'Hausordnung – Ahornweg 12',
        body: `1. Ruhezeiten
Von 22:00 bis 7:00 Uhr sowie sonntags und an Feiertagen ganztägig ist Zimmerlautstärke einzuhalten. Musizieren ist werktags zwischen 9:00 und 12:00 sowie zwischen 15:00 und 20:00 Uhr für höchstens zwei Stunden täglich erlaubt.

2. Treppenhaus und Flure
Das Treppenhaus wird wöchentlich abwechselnd von den Mietparteien gereinigt; der Plan hängt im Erdgeschoss aus. Fluchtwege sind freizuhalten. Kinderwagen dürfen im dafür vorgesehenen Raum neben dem Fahrradkeller abgestellt werden, nicht im Treppenhaus.

3. Waschküche
Die Waschküche ist täglich von 7:00 bis 21:00 Uhr nutzbar. Bitte tragen Sie sich in die Liste an der Tür ein. Nach der Benutzung sind Maschine und Boden zu reinigen. Wäsche ist spätestens am Folgetag zu entfernen.

4. Müll
Papier, Verpackungen, Glas und Restmüll werden getrennt. Die Tonnen stehen im Hof. Sperrmüll darf nicht im Hof abgestellt werden; die Abholung meldet jede Partei selbst bei der Stadtreinigung an.

5. Haustiere
Kleintiere sind ohne Zustimmung erlaubt. Für Hunde und Katzen ist die schriftliche Zustimmung der Hausverwaltung nötig. Im Hof sind Hunde an der Leine zu führen.

6. Grillen
Auf Balkonen ist Grillen mit Holzkohle nicht gestattet. Elektrogrills sind erlaubt, sofern niemand belästigt wird.

7. Schäden
Schäden an gemeinsam genutzten Einrichtungen sind der Hausverwaltung unverzüglich zu melden, bei Gefahr im Verzug telefonisch unter der im Aushang genannten Nummer.`,
      },
    ],
    items: [
      [
        'Wann darf man im Haus musizieren?',
        ['Werktags vormittags und nachmittags, höchstens zwei Stunden.', 'Jeden Tag zwischen 9 und 20 Uhr.', 'Nur am Wochenende.'],
        0,
        'Punkt 1 erlaubt Musizieren werktags 9–12 und 15–20 Uhr für höchstens zwei Stunden täglich.',
        'Rule 1 allows music on weekdays 9-12 and 15-20 for a maximum of two hours a day.',
      ],
      [
        'Wo dürfen Kinderwagen abgestellt werden?',
        ['In einem eigenen Raum neben dem Fahrradkeller.', 'Im Treppenhaus, wenn sie nicht stören.', 'Im Hof neben den Mülltonnen.'],
        0,
        'Punkt 2 nennt den dafür vorgesehenen Raum und verbietet das Treppenhaus ausdrücklich.',
        'Rule 2 names the designated room and explicitly forbids the stairwell.',
      ],
      [
        'Was gilt für die Waschküche?',
        ['Man muss sich in eine Liste eintragen.', 'Sie ist rund um die Uhr geöffnet.', 'Die Wäsche kann eine Woche hängen bleiben.'],
        0,
        'Punkt 3 verlangt den Eintrag in die Liste an der Tür.',
        'Rule 3 requires you to enter your name on the list on the door.',
      ],
      [
        'Wer meldet die Abholung von Sperrmüll an?',
        ['Jede Mietpartei selbst.', 'Die Hausverwaltung.', 'Der Hausmeister.'],
        0,
        'Punkt 4: Die Abholung meldet jede Partei selbst bei der Stadtreinigung an.',
        'Rule 4: each household registers the collection with the city cleaning service itself.',
      ],
      [
        'Was braucht man für eine Katze?',
        ['Die schriftliche Zustimmung der Hausverwaltung.', 'Nichts, Haustiere sind frei erlaubt.', 'Die Zustimmung aller Nachbarn.'],
        0,
        'Punkt 5 verlangt für Hunde und Katzen die schriftliche Zustimmung der Hausverwaltung.',
        'Rule 5 requires written consent from the property management for dogs and cats.',
      ],
      [
        'Was ist auf dem Balkon erlaubt?',
        ['Ein Elektrogrill, wenn niemand belästigt wird.', 'Ein Holzkohlegrill am Wochenende.', 'Gar kein Grillen.'],
        0,
        'Punkt 6 verbietet Holzkohle und erlaubt Elektrogrills unter einer Bedingung.',
        'Rule 6 forbids charcoal and permits electric grills under one condition.',
      ],
    ],
  },

  {
    id: 'l2b',
    teil: 2,
    minutes: 12,
    title: { de: 'Teil 2: Aus der Zeitung – Arbeit und Ausbildung', en: 'Part 2: from the newspaper - work and training' },
    instructions: {
      de: 'Lies die beiden Texte und wähle jeweils die richtige Antwort.',
      en: 'Read both texts and choose the correct answer each time.',
    },
    texts: [
      {
        heading: 'Text 1: Zweite Ausbildung mit vierzig',
        body: `Als Ines Broll mit 39 ihre Stelle im Einzelhandel verlor, meldete sie sich bei der Agentur für Arbeit – und ging zwei Wochen später zum ersten Mal wieder in eine Berufsschule. Heute, drei Jahre später, arbeitet sie als Pflegefachkraft in einem Seniorenheim.

"Am schwersten war nicht der Stoff, sondern das Gefühl, mit 39 in einer Klasse mit Achtzehnjährigen zu sitzen", sagt Broll. Nach ein paar Wochen habe sich das gelegt. "Die Jungen haben mich gefragt, wie man mit schwierigen Kunden umgeht. Ich habe sie gefragt, wie die Lern-App funktioniert."

Wer eine Umschulung beginnt, bekommt in vielen Fällen die Kosten und einen Teil des Lebensunterhalts erstattet. Entscheidend ist ein Gespräch mit der Arbeitsagentur vor dem Start: Wer den Vertrag zuerst unterschreibt und dann fragt, geht meist leer aus. Broll rät außerdem, ein Praktikum zu machen, bevor man sich festlegt. "Drei Wochen im Heim haben mir mehr gesagt als jede Broschüre."`,
      },
      {
        heading: 'Text 2: Vier Tage arbeiten, fünf Tage bezahlt',
        body: `Ein Handwerksbetrieb aus Neustadt hat seit anderthalb Jahren die Vier-Tage-Woche – bei gleichem Lohn. Freitags bleibt die Werkstatt zu. Geschäftsführerin Antje Kort sagt, der Schritt sei keine Idee aus einem Managementbuch gewesen, sondern eine Notlösung: "Wir haben zwei Jahre keine Auszubildenden gefunden. Beim nächsten Mal hatten wir neun Bewerbungen."

Die Umstellung war nicht einfach. Termine mussten auf vier Tage verteilt werden, und in den ersten Monaten arbeiteten einige Beschäftigte heimlich freitags weiter. "Wir mussten wirklich darauf bestehen, dass niemand kommt", sagt Kort.

Der Umsatz ist nach Angaben des Betriebs leicht gestiegen, die Zahl der Krankheitstage um etwa ein Drittel gesunken. Kort warnt aber vor einfachen Schlüssen: "Wir sind achtzehn Leute und machen Aufträge, die wir selbst planen. In einem Krankenhaus würde das so nicht funktionieren."`,
      },
    ],
    items: [
      [
        'Was war für Ines Broll am Anfang das größte Problem?',
        ['Ihr Alter im Vergleich zu den Mitschülern.', 'Der schwierige Lernstoff.', 'Die lange Fahrt zur Berufsschule.'],
        0,
        'Sie sagt, am schwersten sei das Gefühl gewesen, mit 39 unter Achtzehnjährigen zu sitzen.',
        'She says the hardest thing was the feeling of sitting among eighteen-year-olds at 39.',
      ],
      [
        'Was rät sie Menschen, die eine Umschulung planen?',
        ['Vor dem Vertrag mit der Arbeitsagentur zu sprechen.', 'Möglichst schnell einen Vertrag zu unterschreiben.', 'Sich nur nach Broschüren zu richten.'],
        0,
        'Wer zuerst unterschreibt und dann fragt, geht meist leer aus.',
        'Those who sign first and ask afterwards usually get nothing.',
      ],
      [
        'Warum empfiehlt sie ein Praktikum?',
        ['Weil man den Beruf so realistisch kennenlernt.', 'Weil es für die Bewerbung nötig ist.', 'Weil es besser bezahlt wird.'],
        0,
        'Drei Wochen im Heim hätten ihr mehr gesagt als jede Broschüre.',
        'Three weeks in the home told her more than any brochure.',
      ],
      [
        'Warum hat der Betrieb die Vier-Tage-Woche eingeführt?',
        ['Er fand keine Auszubildenden.', 'Die Beschäftigten hatten gestreikt.', 'Ein Gesetz hat es verlangt.'],
        0,
        'Zwei Jahre lang gab es keine Auszubildenden; danach kamen neun Bewerbungen.',
        'For two years there were no apprentices; afterwards nine applications came in.',
      ],
      [
        'Was war in den ersten Monaten schwierig?',
        ['Einige Beschäftigte arbeiteten freitags trotzdem.', 'Die Kunden blieben aus.', 'Die Löhne mussten gesenkt werden.'],
        0,
        'Kort sagt, man habe darauf bestehen müssen, dass freitags niemand kommt.',
        'Kort says they had to insist that nobody came in on Fridays.',
      ],
      [
        'Wovor warnt die Geschäftsführerin?',
        ['Das Modell passt nicht zu jedem Betrieb.', 'Der Umsatz sinkt langfristig.', 'Die Beschäftigten werden häufiger krank.'],
        0,
        'In einem Krankenhaus würde es so nicht funktionieren, sagt sie.',
        'In a hospital it would not work like this, she says.',
      ],
    ],
  },
];
