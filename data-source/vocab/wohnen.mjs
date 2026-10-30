export default {
  key: 'wohnen',
  label: { de: 'Wohnen & Zuhause', en: 'Housing & home' },
  icon: '\u{1F3E0}',
  payoff: {
    de: 'Lesen Teil 3 (Anzeigen) und Schreiben: Wohnungssuche, Nachbarn, Vermieter.',
    en: 'Lesen part 3 (adverts) and Schreiben: flat hunting, neighbours, landlords.',
  },

  nouns: [
    ['das Möbelstück', '-e', 'piece of furniture', 'Das einzige teure Möbelstück ist das Sofa.', 'The only expensive piece of furniture is the sofa.'],
    ['die Einrichtung', '-en', 'furnishings, fittings', 'Die Einrichtung ist alt, aber gemütlich.', 'The furnishings are old but cosy.'],
    ['der Mangel', '-¨', 'defect, fault', 'Melde den Mangel schriftlich beim Vermieter.', 'Report the defect to the landlord in writing.'],
    ['die Wohngemeinschaft', '-en', 'shared flat, flatshare', 'In der Wohngemeinschaft kocht jeder einmal pro Woche.', 'In the flatshare everyone cooks once a week.'],
    ['die Nachbarschaft', '-en', 'neighbourhood', 'Die Nachbarschaft ist ruhig und grün.', 'The neighbourhood is quiet and green.'],
  ],

  verbs: [
    ['vermieten', null, 'to rent out, to let', 'Sie vermietet ein Zimmer an Studenten.', 'She rents out a room to students.'],
    ['einziehen', 'zieht ein · zog ein · ist eingezogen', 'to move in', 'Wir sind am Wochenende eingezogen.', 'We moved in at the weekend.'],
    ['renovieren', null, 'to renovate, to decorate', 'Vor dem Auszug müssen wir renovieren.', 'Before moving out we have to redecorate.'],
    ['einrichten', null, 'to furnish, to set up', 'Wir haben das Kinderzimmer neu eingerichtet.', 'We have refurnished the children’s room.'],
  ],

  adjectives: [
    ['zentral', null, 'central', 'Zentral wohnen kostet hier viel Geld.', 'Living centrally costs a lot of money here.'],
    ['renoviert', null, 'renovated', 'Das Bad wurde letztes Jahr komplett renoviert.', 'The bathroom was completely renovated last year.'],
    ['geräumig', null, 'spacious', 'Die Wohnung ist hell und geräumig.', 'The flat is bright and spacious.'],
    ['sauber', null, 'clean', 'Das Treppenhaus ist immer sauber.', 'The stairwell is always clean.'],
  ],

  phrases: [
    ['auf Wohnungssuche sein', null, 'to be flat hunting', 'Ich bin seit vier Monaten auf Wohnungssuche.', 'I have been flat hunting for four months.'],
    ['Rücksicht nehmen', null, 'to be considerate', 'Nach 22 Uhr nehmen wir Rücksicht auf die Nachbarn.', 'After 10 p.m. we are considerate towards the neighbours.'],
    ['die Miete überweisen', null, 'to transfer the rent', 'Die Miete überweise ich am Ersten jedes Monats.', 'I transfer the rent on the first of each month.'],
    ['in zentraler Lage', null, 'in a central location', 'Gesucht: 2 Zimmer in zentraler Lage.', 'Wanted: two rooms in a central location.'],
  ],
};
