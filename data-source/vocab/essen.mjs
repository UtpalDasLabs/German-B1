export default {
  key: 'essen',
  label: { de: 'Essen & Trinken', en: 'Food & eating out' },
  icon: '\u{1F37D}️',
  payoff: {
    de: 'Sprechen Teil 1: gemeinsam ein Essen oder eine Feier planen.',
    en: 'Sprechen part 1: planning a meal or a celebration together.',
  },

  nouns: [
    ['die Mahlzeit', '-en', 'meal', 'Die warme Mahlzeit gibt es bei uns abends.', 'We have the hot meal in the evening.'],
    ['die Zutat', '-en', 'ingredient', 'Für das Rezept brauchst du nur fünf Zutaten.', 'You only need five ingredients for the recipe.'],
    ['die Vorspeise', '-n', 'starter', 'Als Vorspeise nehmen wir eine Suppe.', 'As a starter we will have a soup.'],
    ['die Hauptspeise', '-n', 'main course', 'Die Hauptspeise kam erst nach vierzig Minuten.', 'The main course only came after forty minutes.'],
    ['die Nachspeise', '-n', 'dessert', 'Zur Nachspeise gibt es Eis.', 'For dessert there is ice cream.'],
    ['das Trinkgeld', '-er', 'tip', 'In Deutschland sind fünf bis zehn Prozent Trinkgeld üblich.', 'In Germany five to ten percent tip is usual.'],
    ['die Bedienung', '-en', 'service, waiter/waitress', 'Die Bedienung war freundlich, aber langsam.', 'The service was friendly but slow.'],
    ['die Gaststätte', '-n', 'restaurant, inn', 'In der Gaststätte am Markt gibt es regionale Küche.', 'The inn on the market square serves regional food.'],
    ['der Geschmack', '-¨er', 'taste, flavour', 'Der Geschmack ist ungewohnt, aber gut.', 'The taste is unfamiliar but good.'],
    ['das Gericht', '-e', 'dish', 'Dieses Gericht ist eine Spezialität aus Bayern.', 'This dish is a speciality from Bavaria.'],
    ['die Portion', '-en', 'portion', 'Die Portion war zu groß für mich.', 'The portion was too big for me.'],
    ['das Lebensmittel', '-', 'foodstuff, groceries', 'Lebensmittel sind im letzten Jahr teurer geworden.', 'Groceries have got more expensive in the last year.'],
    ['der Gast', '-¨e', 'guest', 'Am Samstag kommen zehn Gäste.', 'Ten guests are coming on Saturday.'],
    ['die Einladung', '-en', 'invitation', 'Vielen Dank für die Einladung zum Essen!', 'Many thanks for the dinner invitation!'],
    ['das Getränk', '-e', 'drink', 'Die Getränke bringe ich mit.', 'I will bring the drinks.'],
  ],

  verbs: [
    ['zubereiten', null, 'to prepare (food)', 'Das Gericht ist in zwanzig Minuten zubereitet.', 'The dish is prepared in twenty minutes.'],
    ['braten', 'brät · briet · hat gebraten', 'to fry, to roast', 'Die Zwiebeln kurz anbraten, dann alles zusammen braten.', 'Briefly fry the onions, then fry everything together.'],
    ['backen', 'bäckt · backte · hat gebacken', 'to bake', 'Sonntags backe ich manchmal Kuchen.', 'On Sundays I sometimes bake a cake.'],
    ['servieren', null, 'to serve', 'Das Essen wird ab zwölf Uhr serviert.', 'The food is served from twelve o’clock.'],
    ['verzichten auf', null, 'to do without', 'Ich verzichte abends auf Kaffee.', 'I do without coffee in the evenings.'],
    ['satt werden', 'wird satt · wurde satt · ist satt geworden', 'to get full', 'Von dem Salat allein werde ich nicht satt.', 'The salad alone does not fill me up.'],
  ],

  adjectives: [
    ['frisch', null, 'fresh', 'Frisches Brot riecht am besten.', 'Fresh bread smells best.'],
    ['scharf', null, 'spicy, hot', 'Mir ist das Essen zu scharf.', 'The food is too spicy for me.'],
    ['vegetarisch', null, 'vegetarian', 'Gibt es auch ein vegetarisches Gericht?', 'Is there a vegetarian dish as well?'],
    ['fettig', null, 'greasy, fatty', 'Abends esse ich nichts Fettiges.', 'In the evening I do not eat anything greasy.'],
  ],

  phrases: [
    ['einen Tisch reservieren', null, 'to book a table', 'Ich möchte einen Tisch für vier Personen reservieren.', 'I would like to book a table for four people.'],
    ['Guten Appetit!', null, 'Enjoy your meal!', 'Guten Appetit, lasst es euch schmecken.', 'Enjoy your meal, hope you like it.'],
    ['zum Mitnehmen', null, 'to take away', 'Einen Kaffee zum Mitnehmen, bitte.', 'A coffee to take away, please.'],
    ['Lust haben auf', null, 'to fancy (something)', 'Hast du Lust auf Pizza?', 'Do you fancy pizza?'],
  ],
};
