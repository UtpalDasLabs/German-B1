export default {
  key: 'kommunikation',
  label: { de: 'Meinung & Diskussion', en: 'Opinion & discussion' },
  icon: '\u{1F5E3}️',
  payoff: {
    de: 'Der Kern von Sprechen Teil 1 und 3: vorschlagen, zustimmen, widersprechen.',
    en: 'The core of Sprechen parts 1 and 3: suggesting, agreeing, disagreeing.',
  },

  nouns: [
    ['die Idee', '-n', 'idea', 'Das ist eine gute Idee, machen wir das so.', 'That is a good idea, let us do it that way.'],
    ['das Argument', '-e', 'argument, point', 'Dein Argument überzeugt mich nicht ganz.', 'Your point does not entirely convince me.'],
    ['der Vorteil', '-e', 'advantage', 'Ein Vorteil wäre, dass es billiger ist.', 'One advantage would be that it is cheaper.'],
    ['der Nachteil', '-e', 'disadvantage', 'Der Nachteil ist die weite Anfahrt.', 'The disadvantage is the long journey.'],
    ['das Gespräch', '-e', 'conversation', 'Das Gespräch hat viel geklärt.', 'The conversation clarified a lot.'],
    ['die Diskussion', '-en', 'discussion', 'Die Diskussion wurde ziemlich laut.', 'The discussion got quite loud.'],
    ['der Kompromiss', '-e', 'compromise', 'Am Ende haben wir einen Kompromiss gefunden.', 'In the end we found a compromise.'],
    ['die Absprache', '-n', 'arrangement, agreement', 'Nach Absprache ist auch Samstag möglich.', 'By arrangement Saturday is possible too.'],
    ['das Missverständnis', '-se', 'misunderstanding', 'Das war wohl ein Missverständnis.', 'That was probably a misunderstanding.'],
  ],

  verbs: [
    ['zustimmen', null, 'to agree', 'Da stimme ich dir völlig zu.', 'I completely agree with you there.'],
    ['widersprechen', 'widerspricht · widersprach · hat widersprochen', 'to contradict, to disagree', 'Ich muss dir da leider widersprechen.', 'I am afraid I have to disagree with you there.'],
    ['begründen', null, 'to justify, to give reasons', 'Kannst du deine Meinung kurz begründen?', 'Can you briefly justify your opinion?'],
    ['diskutieren', null, 'to discuss', 'Wir haben eine Stunde darüber diskutiert.', 'We discussed it for an hour.'],
    ['sich einigen', null, 'to reach agreement', 'Wir haben uns auf Samstag geeinigt.', 'We agreed on Saturday.'],
    ['überzeugen', null, 'to convince', 'Dein Argument hat mich überzeugt.', 'Your argument convinced me.'],
    ['bitten um', 'bittet · bat · hat gebeten', 'to ask for', 'Ich bitte Sie um eine kurze Rückmeldung.', 'I ask you for a brief reply.'],
    ['nachfragen', null, 'to ask, to follow up', 'Wenn etwas unklar ist, frag einfach nach.', 'If something is unclear, just ask.'],
  ],

  adjectives: [
    ['einverstanden', null, 'in agreement', 'Bist du damit einverstanden?', 'Are you in agreement with that?'],
    ['sinnvoll', null, 'sensible, useful', 'Es wäre sinnvoll, vorher anzurufen.', 'It would be sensible to call beforehand.'],
    ['überzeugend', null, 'convincing', 'Das klingt für mich überzeugend.', 'That sounds convincing to me.'],
    ['umstritten', null, 'controversial', 'Das Thema ist bei uns umstritten.', 'The topic is controversial among us.'],
  ],

  connectors: [
    ['einerseits … andererseits', null, 'on the one hand … on the other', 'Einerseits ist es teuer, andererseits spart man Zeit.', 'On the one hand it is expensive, on the other you save time.'],
    ['meiner Meinung nach', null, 'in my opinion', 'Meiner Meinung nach lohnt sich das nicht.', 'In my opinion that is not worth it.'],
    ['im Gegensatz dazu', null, 'in contrast to that', 'Im Gegensatz dazu ist der Bus viel billiger.', 'In contrast to that, the bus is much cheaper.'],
    ['das heißt', null, 'that is to say', 'Er kommt später, das heißt gegen acht.', 'He is coming later, that is to say around eight.'],
  ],
};
