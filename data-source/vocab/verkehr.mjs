export default {
  key: 'verkehr',
  label: { de: 'Verkehr & Unterwegs', en: 'Transport & getting around' },
  icon: '\u{1F686}',
  payoff: {
    de: 'Hören Teil 1: Durchsagen am Bahnhof, Flughafen und im Zug.',
    en: 'Hören part 1: announcements at stations, airports and on trains.',
  },

  nouns: [
    ['der Verkehr', 'ohne Plural', 'traffic', 'Morgens ist der Verkehr am dichtesten.', 'In the mornings the traffic is heaviest.'],
    ['die Verbindung', '-en', 'connection', 'Es gibt eine direkte Verbindung ohne Umsteigen.', 'There is a direct connection with no changes.'],
    ['der Bahnsteig', '-e', 'platform', 'Der Zug fährt heute von Bahnsteig 7 ab.', 'The train departs from platform 7 today.'],
    ['die Ermäßigung', '-en', 'reduction, concession', 'Mit Schwerbehindertenausweis gibt es eine Ermäßigung.', 'With a disability card there is a concession.'],
    ['die Durchsage', '-n', 'announcement', 'Die Durchsage war kaum zu verstehen.', 'The announcement was barely audible.'],
    ['der Umstieg', '-e', 'change (of train)', 'Der Umstieg in Fulda dauert nur sechs Minuten.', 'The change in Fulda only takes six minutes.'],
    ['die Umleitung', '-en', 'diversion', 'Die Umleitung ist gelb ausgeschildert.', 'The diversion is signposted in yellow.'],
    ['die Geschwindigkeit', '-en', 'speed', 'Innerorts ist die Geschwindigkeit auf 50 begrenzt.', 'In town the speed is limited to 50.'],
    ['das Ticket', '-s', 'ticket', 'Das Ticket kannst du in der App kaufen.', 'You can buy the ticket in the app.'],
    ['der Fahrgast', '-¨e', 'passenger', 'Alle Fahrgäste bitte aussteigen.', 'All passengers please get off.'],
  ],

  verbs: [
    ['entwerten', null, 'to validate (a ticket)', 'Vergiss nicht, die Karte zu entwerten.', 'Do not forget to validate the ticket.'],
    ['überholen', null, 'to overtake', 'Bei Nebel überholt man besser nicht.', 'In fog it is better not to overtake.'],
    ['bremsen', null, 'to brake', 'Er musste plötzlich stark bremsen.', 'He had to brake hard suddenly.'],
    ['ausfallen', 'fällt aus · fiel aus · ist ausgefallen', 'to be cancelled', 'Der Zug um 8:12 Uhr fällt heute aus.', 'The 8:12 train is cancelled today.'],
  ],

  adjectives: [
    ['verspätet', null, 'delayed', 'Der Flug ist um zwei Stunden verspätet.', 'The flight is two hours delayed.'],
    ['gesperrt', null, 'closed, blocked', 'Die Straße ist bis Freitag gesperrt.', 'The road is closed until Friday.'],
    ['öffentlich', null, 'public', 'Öffentliche Verkehrsmittel sind hier gut ausgebaut.', 'Public transport is well developed here.'],
    ['direkt', null, 'direct', 'Es gibt eine direkte Verbindung nach Wien.', 'There is a direct connection to Vienna.'],
    ['überfüllt', null, 'overcrowded', 'Der Zug war völlig überfüllt.', 'The train was completely overcrowded.'],
  ],

  phrases: [
    ['zu Fuß gehen', null, 'to walk, to go on foot', 'Zum Markt gehe ich lieber zu Fuß.', 'I prefer to walk to the market.'],
    ['mit dem Rad fahren', null, 'to cycle', 'Bei gutem Wetter fahre ich mit dem Rad.', 'In good weather I cycle.'],
    ['im Stau stehen', null, 'to be stuck in traffic', 'Wir standen eine Stunde im Stau.', 'We were stuck in traffic for an hour.'],
    ['Bescheid geben', null, 'to let someone know', 'Gib Bescheid, wenn du losfährst.', 'Let me know when you set off.'],
  ],
};
