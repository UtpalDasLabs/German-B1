export default {
  key: 'einkaufen',
  label: { de: 'Einkaufen & Geld', en: 'Shopping & money' },
  icon: '\u{1F6D2}',
  payoff: {
    de: 'Schreiben Teil 3: Beschwerde, Umtausch, Reklamation an eine Firma.',
    en: 'Schreiben part 3: complaints, exchanges and returns to a company.',
  },

  nouns: [
    ['der Kunde', '-n', 'customer', 'Der Kunde hat Anspruch auf eine Quittung.', 'The customer is entitled to a receipt.'],
    ['der Kassenbon', '-s', 'till receipt', 'Bitte bewahren Sie den Kassenbon auf.', 'Please keep the till receipt.'],
    ['die Reklamation', '-en', 'complaint (about goods)', 'Ich möchte eine Reklamation aufgeben.', 'I would like to make a complaint.'],
    ['das Bargeld', 'ohne Plural', 'cash', 'Auf dem Markt brauchst du Bargeld.', 'At the market you need cash.'],
    ['die Karte', '-n', 'card (bank, credit)', 'Kann ich mit Karte zahlen?', 'Can I pay by card?'],
    ['das Konto', 'Konten', 'bank account', 'Das Geld ist gestern auf dem Konto eingegangen.', 'The money arrived in the account yesterday.'],
    ['die Schulden', 'nur Plural', 'debts', 'Nach dem Umzug hatten wir kurz Schulden.', 'After the move we were briefly in debt.'],
    ['das Sonderangebot', '-e', 'special offer', 'Sonderangebote gelten nur solange der Vorrat reicht.', 'Special offers apply only while stocks last.'],
    ['die Öffnungszeiten', 'nur Plural', 'opening hours', 'Die Öffnungszeiten stehen an der Tür.', 'The opening hours are on the door.'],
  ],

  verbs: [
    ['reklamieren', null, 'to make a complaint about goods', 'Das defekte Gerät habe ich sofort reklamiert.', 'I complained about the faulty device immediately.'],
    ['ausgeben', 'gibt aus · gab aus · hat ausgegeben', 'to spend', 'Für Lebensmittel gebe ich 300 Euro im Monat aus.', 'I spend 300 euros a month on food.'],
    ['überweisen', 'überweist · überwies · hat überwiesen', 'to transfer (money)', 'Den Betrag überweise ich morgen.', 'I will transfer the amount tomorrow.'],
    ['abheben', 'hebt ab · hob ab · hat abgehoben', 'to withdraw (cash)', 'Am Automaten hebe ich 100 Euro ab.', 'I withdraw 100 euros at the cash machine.'],
    ['sich leisten', null, 'to afford', 'Ein Auto können wir uns gerade nicht leisten.', 'We cannot afford a car at the moment.'],
    ['vergleichen', 'vergleicht · verglich · hat verglichen', 'to compare', 'Vergleich die Preise, bevor du kaufst.', 'Compare the prices before you buy.'],
  ],

  adjectives: [
    ['preiswert', null, 'good value', 'Das Angebot ist wirklich preiswert.', 'The offer is really good value.'],
    ['defekt', null, 'faulty, broken', 'Das Gerät kam schon defekt an.', 'The device already arrived faulty.'],
    ['begrenzt', null, 'limited', 'Das Angebot ist zeitlich begrenzt.', 'The offer is limited in time.'],
    ['sparsam', null, 'thrifty, economical', 'Sie lebt sehr sparsam.', 'She lives very thriftily.'],
  ],

  phrases: [
    ['im Angebot sein', null, 'to be on offer', 'Diese Woche ist Käse im Angebot.', 'This week cheese is on offer.'],
    ['Geld überweisen', null, 'to transfer money', 'Ich überweise das Geld noch heute.', 'I will transfer the money today.'],
    ['in Raten zahlen', null, 'to pay in instalments', 'Die Waschmaschine zahle ich in Raten.', 'I am paying for the washing machine in instalments.'],
    ['auf Rechnung kaufen', null, 'to buy on account', 'Online kaufe ich am liebsten auf Rechnung.', 'Online I prefer to buy on account.'],
  ],
};
