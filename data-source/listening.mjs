/**
 * Hören: practice sets in the four task formats of the Goethe-Zertifikat B1.
 *
 * Teil 1  five short messages and announcements, heard once
 * Teil 2  a talk or guided tour, heard once
 * Teil 3  an informal conversation, heard once
 * Teil 4  a discussion with two guests, heard twice - who said what
 *
 * There are no audio files. The app speaks each script with the device voice,
 * one line at a time, with a different pitch per speaker. That is the honest
 * trade: a synthetic voice is cleaner than exam audio, but it keeps the
 * exercise real - you answer from listening, not from reading.
 *
 * All names, places and organisations are invented.
 */
export const LISTENING = [
  {
    id: 'h1a',
    teil: 1,
    minutes: 8,
    plays: 1,
    title: { de: 'Teil 1: Kurze Ansagen und Nachrichten', en: 'Part 1: short announcements and messages' },
    instructions: {
      de: 'Du hörst fünf kurze Texte, jeden einmal. Beantworte danach die Fragen.',
      en: 'You will hear five short texts, each once. Then answer the questions.',
    },
    script: [
      { speaker: 'Ansage', text: 'Sehr geehrte Fahrgäste am Gleis vier. Der Regionalexpress nach Erfurt, planmäßige Abfahrt achtzehn Uhr zwölf, fährt heute von Gleis sieben. Grund dafür ist eine Störung an der Weiche. Die Abfahrt verschiebt sich um etwa zehn Minuten.' },
      { speaker: 'Mailbox Yusuf', text: 'Hallo Sandra, hier ist Yusuf. Du, ich schaffe es heute Abend leider nicht ins Kino, mein Sohn ist krank geworden. Können wir auf Donnerstag verschieben? Die Karten kann man bis morgen Mittag kostenlos umtauschen, das mache ich dann. Melde dich kurz. Tschüss!' },
      { speaker: 'Praxis', text: 'Herzlich willkommen in der Praxis Doktor Lenz. Unsere Sprechzeiten sind montags bis freitags von acht bis zwölf Uhr und zusätzlich dienstags und donnerstags von fünfzehn bis achtzehn Uhr. Für einen Termin drücken Sie bitte die Eins. In dringenden Fällen außerhalb der Sprechzeiten wenden Sie sich bitte an den ärztlichen Bereitschaftsdienst unter der eins eins sechs, eins eins sieben.' },
      { speaker: 'Durchsage', text: 'Liebe Kundinnen und Kunden, unsere Filiale schließt heute bereits um achtzehn Uhr, da wir die neue Kühltheke einbauen. Ab morgen sind wir wieder zu den gewohnten Zeiten für Sie da. Wir bitten um Ihr Verständnis.' },
      { speaker: 'Radio', text: 'Und nun zum Wetter für morgen, Mittwoch. Am Vormittag bleibt es stark bewölkt, örtlich fällt leichter Regen. Ab dem frühen Nachmittag setzt sich die Sonne durch, die Temperaturen steigen auf bis zu dreiundzwanzig Grad. In der Nacht kühlt es auf elf Grad ab.' },
    ],
    items: [
      [
        'Von welchem Gleis fährt der Zug nach Erfurt?',
        ['Von Gleis sieben.', 'Von Gleis vier.', 'Von Gleis zwölf.'],
        0,
        'Die Ansage nennt Gleis sieben statt des geplanten Gleises vier.',
        'The announcement names platform seven instead of the planned platform four.',
      ],
      [
        'Warum sagt Yusuf den Kinobesuch ab?',
        ['Sein Sohn ist krank.', 'Er muss länger arbeiten.', 'Er hat die Karten verloren.'],
        0,
        'Er sagt ausdrücklich, sein Sohn sei krank geworden.',
        'He says explicitly that his son has fallen ill.',
      ],
      [
        'Wann hat die Praxis nachmittags geöffnet?',
        ['Dienstags und donnerstags.', 'Jeden Werktag.', 'Montags und mittwochs.'],
        0,
        'Nachmittagssprechstunde ist nur dienstags und donnerstags von fünfzehn bis achtzehn Uhr.',
        'The afternoon surgery is only on Tuesdays and Thursdays from 15:00 to 18:00.',
      ],
      [
        'Warum schließt die Filiale früher?',
        ['Wegen einer Baumaßnahme im Laden.', 'Wegen eines Feiertags.', 'Weil zu wenig Personal da ist.'],
        0,
        'Es wird eine neue Kühltheke eingebaut.',
        'A new refrigerated counter is being installed.',
      ],
      [
        'Wie wird das Wetter am Mittwochnachmittag?',
        ['Sonnig und bis zu 23 Grad.', 'Stark bewölkt mit Regen.', 'Kühl mit elf Grad.'],
        0,
        'Ab dem frühen Nachmittag setzt sich die Sonne durch, bis zu 23 Grad.',
        'From early afternoon the sun breaks through, up to 23 degrees.',
      ],
    ],
  },

  {
    id: 'h2a',
    teil: 2,
    minutes: 8,
    plays: 1,
    title: { de: 'Teil 2: Führung durch das Stadtarchiv', en: 'Part 2: a tour of the city archive' },
    instructions: {
      de: 'Du hörst einen Vortrag. Du hörst den Text einmal. Wähle die richtige Antwort.',
      en: 'You will hear a talk. You will hear the text once. Choose the correct answer.',
    },
    script: [
      { speaker: 'Frau Talheim', text: 'Herzlich willkommen im Stadtarchiv Neustadt. Mein Name ist Ulrike Talheim, ich leite hier den Lesesaal. Die Führung dauert etwa vierzig Minuten. Bitte lassen Sie Taschen und Getränke in den Schließfächern im Erdgeschoss, Flüssigkeiten und alte Akten vertragen sich schlecht.' },
      { speaker: 'Frau Talheim', text: 'Zuerst eine Zahl, die die meisten überrascht: Wir bewahren hier etwa zwölf Regalkilometer Papier auf. Das älteste Stück ist eine Urkunde von dreizehnhundertvier. Aber das Herz des Archivs sind nicht die alten Urkunden, sondern die Akten aus den letzten hundertfünfzig Jahren: Bauakten, Meldekarten, Schulzeugnisse.' },
      { speaker: 'Frau Talheim', text: 'Und genau deshalb kommen die meisten Besucherinnen und Besucher zu uns. Etwa siebzig Prozent unserer Anfragen betreffen Familienforschung. Menschen suchen ihre Großeltern, ihre Urgroßeltern, manchmal eine Adresse, an der die Familie einmal gewohnt hat.' },
      { speaker: 'Frau Talheim', text: 'Wichtig für Ihren nächsten Besuch: Der Lesesaal ist dienstags bis donnerstags von neun bis sechzehn Uhr geöffnet. Die Benutzung ist kostenlos, aber Sie brauchen einen Leseausweis, und den bekommen Sie nur mit Personalausweis oder Pass. Akten müssen Sie vorbestellen, am besten drei Werktage vorher, weil ein Teil der Bestände in einem Außenlager steht.' },
      { speaker: 'Frau Talheim', text: 'Fotografieren dürfen Sie ohne Blitz und für private Zwecke kostenlos. Wenn Sie etwas veröffentlichen möchten, sprechen Sie uns bitte vorher an. Und eine Bitte: Benutzen Sie nur Bleistifte. Kugelschreiber sind im Lesesaal nicht erlaubt, weil ein einziger Strich eine Akte dauerhaft beschädigt.' },
      { speaker: 'Frau Talheim', text: 'Seit letztem Jahr digitalisieren wir außerdem. Bisher sind knapp acht Prozent der Bestände online, vor allem die Meldekarten bis neunzehnhundertdreißig. Wer von zu Hause suchen möchte, findet den Zugang auf unserer Internetseite unter dem Punkt Recherche. Kommen Sie, wir gehen jetzt nach unten ins Magazin.' },
    ],
    items: [
      [
        'Was sollen die Besucher vor der Führung tun?',
        ['Taschen und Getränke ins Schließfach legen.', 'Einen Leseausweis beantragen.', 'Sich am Empfang anmelden.'],
        0,
        'Sie bittet darum, Taschen und Getränke in den Schließfächern im Erdgeschoss zu lassen.',
        'She asks people to leave bags and drinks in the lockers on the ground floor.',
      ],
      [
        'Weshalb kommen die meisten Besucher ins Archiv?',
        ['Wegen Familienforschung.', 'Wegen der alten Urkunden.', 'Wegen Bauarbeiten am Haus.'],
        0,
        'Etwa siebzig Prozent der Anfragen betreffen Familienforschung.',
        'About seventy percent of enquiries concern family research.',
      ],
      [
        'Was braucht man für einen Leseausweis?',
        ['Einen Personalausweis oder Pass.', 'Eine Gebühr von zehn Euro.', 'Eine schriftliche Anmeldung.'],
        0,
        'Der Ausweis ist kostenlos, aber nur mit Personalausweis oder Pass zu bekommen.',
        'The card is free but only issued on presentation of an ID card or passport.',
      ],
      [
        'Wie lange vorher sollte man Akten bestellen?',
        ['Etwa drei Werktage.', 'Einen Tag.', 'Zwei Wochen.'],
        0,
        'Am besten drei Werktage vorher, weil ein Teil im Außenlager steht.',
        'Best three working days in advance, because part of the holdings are off site.',
      ],
      [
        'Was ist im Lesesaal verboten?',
        ['Mit Kugelschreiber zu schreiben.', 'Zu fotografieren.', 'Bleistifte zu benutzen.'],
        0,
        'Kugelschreiber sind nicht erlaubt; Bleistifte und Fotos ohne Blitz schon.',
        'Ballpoint pens are not allowed; pencils and flash-free photos are.',
      ],
      [
        'Wie viel ist bisher digitalisiert?',
        ['Knapp acht Prozent.', 'Etwa siebzig Prozent.', 'Die Hälfte der Bestände.'],
        0,
        'Knapp acht Prozent, vor allem Meldekarten bis 1930.',
        'Just under eight percent, mainly registration cards up to 1930.',
      ],
    ],
  },

  {
    id: 'h3a',
    teil: 3,
    minutes: 8,
    plays: 1,
    title: { de: 'Teil 3: Gespräch – Nach dem ersten Arbeitstag', en: 'Part 3: conversation - after the first day at work' },
    instructions: {
      de: 'Du hörst ein Gespräch zwischen zwei Personen. Du hörst es einmal. Sind die Aussagen richtig oder falsch?',
      en: 'You will hear a conversation between two people, once. Are the statements true or false?',
    },
    script: [
      { speaker: 'Lena', text: 'Und? Wie war dein erster Tag? Ich habe den ganzen Nachmittag an dich gedacht.' },
      { speaker: 'Marek', text: 'Ehrlich? Anstrengend. Nicht die Arbeit selbst, sondern die vielen Namen. Ich habe morgens sechzehn Leute kennengelernt und weiß am Abend noch vier.' },
      { speaker: 'Lena', text: 'Das ist normal. Bei mir hat das drei Wochen gedauert. Und die Arbeit? Du warst doch so nervös wegen der Software.' },
      { speaker: 'Marek', text: 'Da hatte ich völlig umsonst Angst. Es ist fast dasselbe Programm wie in meinem alten Betrieb, nur die Oberfläche sieht anders aus. Nach einer Stunde ging es. Schlimmer war die Mittagspause.' },
      { speaker: 'Lena', text: 'Die Mittagspause? Wieso das denn?' },
      { speaker: 'Marek', text: 'Alle saßen schon in einer Gruppe zusammen und haben über eine Serie geredet, die ich nicht kenne. Ich habe zwanzig Minuten dagesessen und nichts gesagt. Das war unangenehm.' },
      { speaker: 'Lena', text: 'Hat denn niemand gefragt, wer du bist?' },
      { speaker: 'Marek', text: 'Doch, eine Kollegin, Frau Bilir. Sie hat sich neben mich gesetzt und mir erklärt, wie das mit den Schichten läuft. Sie hat auch gesagt, ich soll mich bei ihr melden, wenn etwas unklar ist. Das war der beste Moment des Tages.' },
      { speaker: 'Lena', text: 'Siehst du. Und die Chefin?' },
      { speaker: 'Marek', text: 'Die habe ich nur kurz gesehen. Sie war in Besprechungen. Sie hat mir am Telefon gesagt, wir machen am Freitag ein richtiges Gespräch, eine Stunde, in Ruhe.' },
      { speaker: 'Lena', text: 'Klingt doch gut. Und? Freust du dich auf morgen?' },
      { speaker: 'Marek', text: 'Ja, tatsächlich. Ich nehme mir vor, in der Pause einfach jemanden anzusprechen, statt zu warten. Und ich schreibe mir die Namen auf.' },
    ],
    items: [
      ['Marek fand die Arbeit selbst zu schwer.', ['Richtig', 'Falsch'], 1, 'Er sagt, nicht die Arbeit war anstrengend, sondern die vielen Namen.', 'He says it was not the work that was exhausting but all the names.'],
      ['Er hatte Angst vor der Software.', ['Richtig', 'Falsch'], 0, 'Lena erinnert ihn daran, und er bestätigt, dass er nervös war – wenn auch umsonst.', 'Lena reminds him and he confirms he was nervous, even if needlessly.'],
      ['Die Software war ganz neu für ihn.', ['Richtig', 'Falsch'], 1, 'Es ist fast dasselbe Programm wie im alten Betrieb, nur die Oberfläche ist anders.', 'It is almost the same program as at his old firm, only the interface differs.'],
      ['In der Mittagspause hat er sich unwohl gefühlt.', ['Richtig', 'Falsch'], 0, 'Er hat zwanzig Minuten dagesessen und nichts gesagt; das war unangenehm.', 'He sat for twenty minutes saying nothing; it was uncomfortable.'],
      ['Eine Kollegin hat ihm die Schichten erklärt.', ['Richtig', 'Falsch'], 0, 'Frau Bilir hat sich neben ihn gesetzt und es ihm erklärt.', 'Ms Bilir sat down next to him and explained it.'],
      ['Die Chefin hat sich eine Stunde für ihn Zeit genommen.', ['Richtig', 'Falsch'], 1, 'Das Gespräch findet erst am Freitag statt; am ersten Tag war sie in Besprechungen.', 'That conversation is only on Friday; on the first day she was in meetings.'],
      ['Marek will morgen von sich aus jemanden ansprechen.', ['Richtig', 'Falsch'], 0, 'Er nimmt sich vor, in der Pause jemanden anzusprechen, statt zu warten.', 'He intends to approach someone in the break rather than wait.'],
    ],
  },

  {
    id: 'h4a',
    teil: 4,
    minutes: 10,
    plays: 2,
    title: { de: 'Teil 4: Diskussion – Sollen Innenstädte autofrei werden?', en: 'Part 4: discussion - should city centres be car-free?' },
    instructions: {
      de: 'Du hörst eine Diskussion mit zwei Gästen. Du kannst sie zweimal hören. Wer sagt das: der Moderator, Frau Ritter oder Herr Adamczyk?',
      en: 'You will hear a discussion with two guests. You may listen twice. Who says this: the host, Ms Ritter or Mr Adamczyk?',
    },
    script: [
      { speaker: 'Moderator', text: 'Guten Abend und willkommen zu unserer Sendung. Unser Thema heute: Soll die Neustädter Innenstadt autofrei werden? Bei mir sind Frau Ritter vom Verein Lebenswerte Stadt und Herr Adamczyk, der in der Fußgängerzone ein Möbelgeschäft führt. Frau Ritter, warum brauchen wir das?' },
      { speaker: 'Frau Ritter', text: 'Weil wir den Platz anders brauchen. Ein geparktes Auto belegt zwölf Quadratmeter und steht dreiundzwanzig Stunden am Tag still. Auf derselben Fläche stehen zehn Fahrräder oder vier Bäume. Es geht mir nicht darum, jemanden zu ärgern, es geht um eine nüchterne Rechnung.' },
      { speaker: 'Herr Adamczyk', text: 'Die Rechnung kenne ich, und sie stimmt. Nur verkaufe ich Sofas. Meine Kundinnen kommen nicht mit dem Fahrrad, und sie tragen das Sofa nicht nach Hause. Wenn Sie mir die Zufahrt nehmen, nehmen Sie mir das Geschäft.' },
      { speaker: 'Moderator', text: 'Frau Ritter, das ist ein konkretes Argument. Was antworten Sie darauf?' },
      { speaker: 'Frau Ritter', text: 'Dass kein Konzept, das ich kenne, Lieferverkehr verbietet. In Gent, in Utrecht, in Groningen darf jeder Betrieb liefern, morgens bis elf und abends nach achtzehn Uhr. Was wegfällt, ist das Parken und das Durchfahren, nicht das Liefern.' },
      { speaker: 'Herr Adamczyk', text: 'Das klingt gut, aber meine Erfahrung ist eine andere. Als die Ringstraße zwei Jahre gesperrt war, ist mein Umsatz um ein Drittel eingebrochen. Er ist danach nicht wieder zurückgekommen. Solche Zahlen kann ich nicht ignorieren.' },
      { speaker: 'Moderator', text: 'Herr Adamczyk, würden Sie denn gar nichts ändern?' },
      { speaker: 'Herr Adamczyk', text: 'Doch, natürlich. Breitere Gehwege bin ich sofort dabei. Ich hätte gern mehr Bäume vor meinem Schaufenster. Was ich nicht will, ist eine Sperrung von heute auf morgen, ohne dass der Bus öfter fährt.' },
      { speaker: 'Frau Ritter', text: 'Da sind wir uns näher, als es klingt. Ich sage seit Jahren: Erst der Bus, dann die Sperrung. Wer die Reihenfolge umdreht, verliert die Leute, und dann ist das Projekt in zwei Jahren tot.' },
      { speaker: 'Moderator', text: 'Eine letzte Frage an Sie beide: Wie sieht die Neustädter Innenstadt in zehn Jahren aus?' },
      { speaker: 'Herr Adamczyk', text: 'Ich hoffe, sie hat noch Geschäfte. Wenn die letzten kleinen Läden zumachen, ist es egal, ob da Autos stehen oder nicht.' },
      { speaker: 'Frau Ritter', text: 'Und ich hoffe, dass wir in zehn Jahren nicht mehr über Parkplätze reden, sondern darüber, wo die nächsten Bäume hinkommen.' },
    ],
    items: [
      [
        'Ein geparktes Auto belegt viel Platz und wird kaum genutzt.',
        ['Frau Ritter', 'Herr Adamczyk', 'Der Moderator'],
        0,
        'Frau Ritter nennt die zwölf Quadratmeter und die dreiundzwanzig Stunden Stillstand.',
        'Ms Ritter cites the twelve square metres and twenty-three idle hours.',
      ],
      [
        'Meine Kunden brauchen ein Auto, um die Ware zu transportieren.',
        ['Herr Adamczyk', 'Frau Ritter', 'Der Moderator'],
        0,
        'Er verkauft Sofas; seine Kundinnen tragen sie nicht nach Hause.',
        'He sells sofas; his customers do not carry them home.',
      ],
      [
        'In anderen Städten ist Lieferverkehr weiterhin erlaubt.',
        ['Frau Ritter', 'Herr Adamczyk', 'Der Moderator'],
        0,
        'Sie nennt Gent, Utrecht und Groningen mit festen Lieferzeiten.',
        'She names Ghent, Utrecht and Groningen with fixed delivery times.',
      ],
      [
        'Eine frühere Sperrung hat meinem Geschäft dauerhaft geschadet.',
        ['Herr Adamczyk', 'Frau Ritter', 'Der Moderator'],
        0,
        'Sein Umsatz brach um ein Drittel ein und kam nicht zurück.',
        'His turnover fell by a third and never recovered.',
      ],
      [
        'Ich wäre für breitere Gehwege und mehr Bäume.',
        ['Herr Adamczyk', 'Frau Ritter', 'Der Moderator'],
        0,
        'Er sagt ausdrücklich, dabei sei er sofort dabei.',
        'He says explicitly that he would be in favour of that immediately.',
      ],
      [
        'Der Bus muss vor der Sperrung besser werden.',
        ['Beide Gäste', 'Nur Frau Ritter', 'Nur der Moderator'],
        0,
        'Herr Adamczyk nennt es als Bedingung, Frau Ritter sagt "Erst der Bus, dann die Sperrung".',
        'Mr Adamczyk names it as a condition and Ms Ritter says "first the bus, then the closure".',
      ],
      [
        'Ohne kleine Geschäfte ist die Frage nach Autos nicht mehr wichtig.',
        ['Herr Adamczyk', 'Frau Ritter', 'Der Moderator'],
        0,
        'Er sagt, wenn die letzten kleinen Läden zumachen, sei alles andere egal.',
        'He says that if the last small shops close, everything else is beside the point.',
      ],
    ],
  },

  {
    id: 'h1b',
    teil: 1,
    minutes: 8,
    plays: 1,
    title: { de: 'Teil 1: Nachrichten auf dem Anrufbeantworter', en: 'Part 1: messages on the answering machine' },
    instructions: {
      de: 'Du hörst fünf kurze Texte, jeden einmal. Beantworte danach die Fragen.',
      en: 'You will hear five short texts, each once. Then answer the questions.',
    },
    script: [
      { speaker: 'Werkstatt', text: 'Guten Tag, Frau Nowak, hier ist die Autowerkstatt Kremer. Ihr Wagen ist fertig, aber es ist teurer geworden als besprochen: Die Bremsen mussten auch gemacht werden, wir liegen jetzt bei vierhundertdreißig Euro. Rufen Sie bitte kurz zurück, bevor wir abrechnen. Abholen können Sie den Wagen ab morgen früh.' },
      { speaker: 'Schule', text: 'Guten Morgen, hier ist das Sekretariat der Grundschule Nord. Es geht um den Ausflug am Freitag. Wegen der Wettervorhersage verschieben wir ihn auf den übernächsten Mittwoch. Die bereits bezahlten sechs Euro behalten wir ein, Sie müssen nichts weiter tun. Bitte geben Sie Ihrem Kind am Mittwoch ein Lunchpaket mit.' },
      { speaker: 'Amina', text: 'Hi, ich bin es, Amina. Wir sind schon am See, die Wiese links vom großen Spielplatz. Bring bitte noch eine Decke mit, wir haben nur eine. Und falls du am Kiosk vorbeikommst: Eis wäre großartig. Bis gleich!' },
      { speaker: 'Hausverwaltung', text: 'Sehr geehrte Mieterinnen und Mieter, am Dienstag, den elften, wird zwischen acht und etwa vierzehn Uhr das Wasser abgestellt. Grund ist der Austausch der Leitung im Keller. Bitte lassen Sie an diesem Tag keine Waschmaschine laufen und stellen Sie sich Trinkwasser bereit.' },
      { speaker: 'Kursleitung', text: 'Hallo Herr Mensah, hier ist die Volkshochschule. Sie stehen auf der Warteliste für den Computerkurs. Es ist ein Platz frei geworden. Der Kurs beginnt kommenden Montag um achtzehn Uhr, Raum zwei null vier. Wenn Sie den Platz möchten, antworten Sie bitte bis Donnerstag, danach geht er an die nächste Person.' },
    ],
    items: [
      [
        'Warum soll Frau Nowak in der Werkstatt anrufen?',
        ['Die Reparatur ist teurer geworden.', 'Das Auto ist noch nicht fertig.', 'Ein Ersatzteil fehlt.'],
        0,
        'Die Bremsen mussten zusätzlich gemacht werden, jetzt sind es 430 Euro.',
        'The brakes had to be done as well, so it is now 430 euros.',
      ],
      [
        'Was passiert mit dem Schulausflug?',
        ['Er findet später statt.', 'Er fällt ganz aus.', 'Er kostet mehr Geld.'],
        0,
        'Er wird wegen des Wetters auf den übernächsten Mittwoch verschoben.',
        'It is postponed to the Wednesday after next because of the weather.',
      ],
      [
        'Worum bittet Amina?',
        ['Um eine Decke.', 'Um einen Sonnenschirm.', 'Um Getränke.'],
        0,
        'Sie haben nur eine Decke; Eis wäre zusätzlich schön.',
        'They only have one blanket; ice cream would be an extra bonus.',
      ],
      [
        'Was sollen die Mieter am elften tun?',
        ['Keine Waschmaschine laufen lassen.', 'Zu Hause bleiben.', 'Den Keller aufräumen.'],
        0,
        'Das Wasser ist abgestellt, deshalb keine Waschmaschine und Trinkwasser bereitstellen.',
        'The water is switched off, so no washing machine and drinking water should be put aside.',
      ],
      [
        'Bis wann muss Herr Mensah antworten?',
        ['Bis Donnerstag.', 'Bis Montag.', 'Bis zum Kursbeginn.'],
        0,
        'Danach geht der Platz an die nächste Person auf der Warteliste.',
        'After that the place goes to the next person on the waiting list.',
      ],
    ],
  },

  {
    id: 'h3b',
    teil: 3,
    minutes: 8,
    plays: 1,
    title: { de: 'Teil 3: Gespräch – Ein Kurs geht zu Ende', en: 'Part 3: conversation - a course is ending' },
    instructions: {
      de: 'Du hörst ein Gespräch zwischen zwei Personen. Du hörst es einmal. Sind die Aussagen richtig oder falsch?',
      en: 'You will hear a conversation between two people, once. Are the statements true or false?',
    },
    script: [
      { speaker: 'Hana', text: 'Kannst du glauben, dass nächste Woche die letzte Stunde ist? Neun Monate.' },
      { speaker: 'Tomás', text: 'Ich habe es gestern erst gemerkt, als die Anmeldung für die Prüfung kam. Hast du dich schon angemeldet?' },
      { speaker: 'Hana', text: 'Ja, für den Termin am achtzehnten. Du auch?' },
      { speaker: 'Tomás', text: 'Ich zögere noch. Beim Lesen und Hören bin ich in den Tests immer über achtzig Prozent. Aber beim Schreiben komme ich auf knapp sechzig, und das macht mir Angst.' },
      { speaker: 'Hana', text: 'Sechzig reicht doch zum Bestehen.' },
      { speaker: 'Tomás', text: 'Knapp reicht mir nicht. Wenn ich schon zahle, will ich nicht zittern. Ich überlege, im Juni statt im April zu gehen.' },
      { speaker: 'Hana', text: 'Verstehe ich. Aber weißt du, was mir geholfen hat? Nicht mehr lernen, sondern anders. Ich schreibe jetzt jede Woche genau eine Mail und lasse sie von meiner Nachbarin korrigieren. Sie ist Rentnerin und hat Zeit. Das hat mehr gebracht als drei Bücher.' },
      { speaker: 'Tomás', text: 'Das ist eine gute Idee. Ich habe niemanden, der korrigiert. Ich schreibe immer nur und weiß nie, ob es richtig war.' },
      { speaker: 'Hana', text: 'Dann schick sie mir. Ehrlich, ich lese das gern, und ich sehe die Fehler, die ich selbst mache, bei anderen viel schneller.' },
      { speaker: 'Tomás', text: 'Das würdest du machen? Gut, abgemacht. Aber dann korrigiere ich deine Sprechvorbereitung. Du redest zu schnell, wenn du nervös bist.' },
      { speaker: 'Hana', text: 'Das stimmt leider. Also, ab morgen: du schickst mir Texte, ich schicke dir Sprachnachrichten.' },
    ],
    items: [
      ['Der Kurs hat neun Monate gedauert.', ['Richtig', 'Falsch'], 0, 'Hana sagt am Anfang: "Neun Monate."', 'Hana says at the start: "Nine months."'],
      ['Hana hat sich schon für die Prüfung angemeldet.', ['Richtig', 'Falsch'], 0, 'Sie hat sich für den Termin am achtzehnten angemeldet.', 'She has registered for the exam on the eighteenth.'],
      ['Tomás hat Probleme mit dem Hörverstehen.', ['Richtig', 'Falsch'], 1, 'Beim Lesen und Hören liegt er über achtzig Prozent; das Schreiben ist das Problem.', 'In reading and listening he is over eighty percent; writing is the problem.'],
      ['Tomás möchte die Prüfung vielleicht später machen.', ['Richtig', 'Falsch'], 0, 'Er überlegt, im Juni statt im April zu gehen.', 'He is considering June instead of April.'],
      ['Hana lässt ihre Texte von einer Lehrerin korrigieren.', ['Richtig', 'Falsch'], 1, 'Es ist ihre Nachbarin, eine Rentnerin.', 'It is her neighbour, a pensioner.'],
      ['Hana bietet an, seine Texte zu lesen.', ['Richtig', 'Falsch'], 0, 'Sie sagt, sie lese das gern und sehe fremde Fehler schneller.', 'She says she enjoys it and spots other people’s mistakes faster.'],
      ['Tomás findet, dass Hana zu leise spricht.', ['Richtig', 'Falsch'], 1, 'Er sagt, sie rede zu schnell, wenn sie nervös ist.', 'He says she speaks too fast when she is nervous.'],
    ],
  },
];
