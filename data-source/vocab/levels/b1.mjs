/**
 * B1 vocabulary added after the levels were separated out.
 *
 * When every word was tagged B1 by default, a third of the B1 list turned out
 * to be A1 and A2 material once it was looked at honestly. This file puts back
 * what B1 actually is: not more concrete nouns, but the vocabulary of opinion,
 * cause, consequence and qualification - the words you need to say why you
 * think something rather than only what you did.
 *
 * Rows are [headword, plural or verb forms, English, example, example in English].
 */
export const B1 = {
  gefuehle: {
    nouns: [
      ['die Einstellung', '-en', 'attitude', 'Seine Einstellung hat sich geändert.', 'His attitude has changed.'],
      ['der Eindruck', '-¨e', 'impression', 'Ich habe den Eindruck, dass es ihr besser geht.', 'I have the impression that she is better.'],
      ['der Druck', 'ohne Plural', 'pressure', 'Der Druck bei der Arbeit ist hoch.', 'The pressure at work is high.'],
    ],
    adjectives: [
      ['zufriedenstellend', null, 'satisfactory', 'Das Ergebnis ist zufriedenstellend.', 'The result is satisfactory.'],
      ['belastend', null, 'stressful, burdensome', 'Die Situation war sehr belastend.', 'The situation was very stressful.'],
      ['selbstbewusst', null, 'self-confident', 'Sie tritt sehr selbstbewusst auf.', 'She comes across as very self-confident.'],
      ['skeptisch', null, 'sceptical', 'Ich bin da eher skeptisch.', 'I am rather sceptical about that.'],
    ],
    verbs: [
      ['bereuen', null, 'to regret', 'Ich bereue die Entscheidung nicht.', 'I do not regret the decision.'],
      ['aushalten', 'hält aus · hielt aus · hat ausgehalten', 'to bear, stand', 'Den Lärm halte ich nicht mehr aus.', 'I cannot stand the noise any more.'],
    ],
  },

  konnektoren: {
    connectors: [
      ['dennoch', null, 'nonetheless', 'Es war schwer, dennoch hat es geklappt.', 'It was hard; nonetheless it worked.'],
      ['solange', null, 'as long as', 'Solange es regnet, bleiben wir hier.', 'As long as it rains we stay here.'],
      ['indem', null, 'by (doing)', 'Man spart Geld, indem man weniger heizt.', 'You save money by heating less.'],
      ['anstatt zu', null, 'instead of (doing)', 'Anstatt zu diskutieren, sollten wir handeln.', 'Instead of arguing we should act.'],
      ['folglich', null, 'consequently', 'Er kam zu spät, folglich war der Platz weg.', 'He came late; consequently the seat was gone.'],
      ['beziehungsweise', null, 'or rather, respectively', 'Montag beziehungsweise Dienstag geht beides.', 'Monday or Tuesday, either works.'],
    ],
  },

  arbeit: {
    nouns: [
      ['die Voraussetzung', '-en', 'requirement', 'Deutschkenntnisse sind Voraussetzung.', 'A knowledge of German is a requirement.'],
      ['die Fähigkeit', '-en', 'ability, skill', 'Soziale Fähigkeiten sind wichtig.', 'Social skills are important.'],
      ['die Verantwortung', '-en', 'responsibility', 'Ich übernehme die Verantwortung.', 'I take responsibility.'],
      ['die Zusammenarbeit', 'ohne Plural', 'cooperation', 'Die Zusammenarbeit läuft gut.', 'The cooperation is going well.'],
      ['die Belastung', '-en', 'strain, load', 'Die Belastung ist auf Dauer zu hoch.', 'The strain is too high in the long run.'],
      ['die Weiterentwicklung', '-en', 'development, progression', 'Die Firma bietet Weiterentwicklung.', 'The company offers progression.'],
      ['der Einstieg', '-e', 'entry, start', 'Der Einstieg war nicht leicht.', 'Getting started was not easy.'],
      ['die Teilzeit', 'ohne Plural', 'part-time work', 'Ich arbeite in Teilzeit.', 'I work part-time.'],
      ['die Selbstständigkeit', 'ohne Plural', 'self-employment', 'Die Selbstständigkeit hat Vor- und Nachteile.', 'Self-employment has pros and cons.'],
      ['die Branche', '-n', 'sector, industry', 'In unserer Branche fehlen Fachkräfte.', 'Our sector is short of skilled workers.'],
      ['die Fachkraft', '-¨e', 'skilled worker', 'Fachkräfte werden überall gesucht.', 'Skilled workers are wanted everywhere.'],
    ],
    verbs: [
      ['sich qualifizieren', null, 'to qualify', 'Mit dem Kurs qualifiziere ich mich weiter.', 'The course qualifies me further.'],
      ['übernehmen', 'übernimmt · übernahm · hat übernommen', 'to take over', 'Ich übernehme die Schicht.', 'I will take over the shift.'],
      ['sich durchsetzen', null, 'to assert oneself, prevail', 'Sie konnte sich im Team durchsetzen.', 'She was able to assert herself in the team.'],
    ],
  },

  umwelt: {
    nouns: [
      ['die Verschmutzung', 'ohne Plural', 'pollution', 'Die Verschmutzung der Luft nimmt zu.', 'Air pollution is increasing.'],
      ['die Maßnahme', '-n', 'measure', 'Die Maßnahme hat wenig gebracht.', 'The measure achieved little.'],
      ['die Entwicklung', '-en', 'development', 'Die Entwicklung ist besorgniserregend.', 'The development is worrying.'],
      ['der Verzicht', 'ohne Plural', 'going without', 'Verzicht allein reicht nicht.', 'Going without is not enough on its own.'],
      ['das Bewusstsein', 'ohne Plural', 'awareness', 'Das Bewusstsein dafür ist gewachsen.', 'Awareness of it has grown.'],
    ],
    verbs: [
      ['fördern', null, 'to promote, subsidise', 'Der Staat fördert den Umbau.', 'The state subsidises the conversion.'],
      ['sich auswirken', null, 'to have an effect', 'Das wirkt sich auf den Preis aus.', 'That has an effect on the price.'],
    ],
  },

  medien: {
    nouns: [
      ['der Bericht', '-e', 'report', 'Der Bericht stand in der Zeitung.', 'The report was in the paper.'],
      ['die Meldung', '-en', 'news item', 'Die Meldung hat sich nicht bestätigt.', 'The news item was not confirmed.'],
      ['die Öffentlichkeit', 'ohne Plural', 'the public', 'Die Zahlen sind öffentlich zugänglich.', 'The figures are publicly accessible.'],
      ['die Datenschutzerklärung', '-en', 'privacy policy', 'Lies die Datenschutzerklärung.', 'Read the privacy policy.'],
      ['der Einfluss', '-¨e', 'influence', 'Soziale Medien haben großen Einfluss.', 'Social media have a big influence.'],
      ['die Werbeanzeige', '-n', 'advertisement', 'Die Werbeanzeige war irreführend.', 'The advertisement was misleading.'],
    ],
    verbs: [
      ['behaupten', null, 'to claim', 'Er behauptet, nichts gewusst zu haben.', 'He claims to have known nothing.'],
      ['bestätigen', null, 'to confirm', 'Können Sie das bestätigen?', 'Can you confirm that?'],
    ],
  },

  nomenverben: {
    phrases: [
      ['Schluss machen', null, 'to call it a day, end it', 'Für heute machen wir Schluss.', 'We will call it a day.'],
      ['zur Sprache kommen', null, 'to come up (in discussion)', 'Das Thema kam gestern zur Sprache.', 'The topic came up yesterday.'],
    ],
  },

  bildung: {
    nouns: [
      ['die Anerkennung', '-en', 'recognition', 'Die Anerkennung dauert mehrere Monate.', 'Recognition takes several months.'],
      ['die Unterlage', '-n', 'document', 'Bitte alle Unterlagen mitbringen.', 'Please bring all the documents.'],
      ['die Bedingung', '-en', 'condition', 'Unter einer Bedingung mache ich mit.', 'I will join in on one condition.'],
      ['die Möglichkeit', '-en', 'possibility', 'Es gibt mehrere Möglichkeiten.', 'There are several possibilities.'],
      ['der Zusammenhang', '-¨e', 'connection, context', 'In diesem Zusammenhang ist das wichtig.', 'In this context that matters.'],
      ['der Unterschied', '-e', 'difference', 'Der Unterschied ist kaum zu merken.', 'The difference is hardly noticeable.'],
      ['die Ursache', '-n', 'cause', 'Die Ursache ist noch unklar.', 'The cause is still unclear.'],
      ['das Ziel', '-e', 'aim, goal', 'Mein Ziel ist das Zertifikat B1.', 'My goal is the B1 certificate.'],
      ['die Lösung', '-en', 'solution', 'Wir suchen eine praktische Lösung.', 'We are looking for a practical solution.'],
    ],
    verbs: [
      ['beschreiben', 'beschreibt · beschrieb · hat beschrieben', 'to describe', 'Beschreiben Sie bitte das Bild.', 'Please describe the picture.'],
      ['zusammenfassen', null, 'to summarise', 'Fass den Text kurz zusammen.', 'Summarise the text briefly.'],
      ['berücksichtigen', null, 'to take into account', 'Das müssen wir berücksichtigen.', 'We have to take that into account.'],
      ['voraussetzen', null, 'to presuppose, require', 'Der Kurs setzt A2 voraus.', 'The course requires A2.'],
    ],
  },

  stadt: {
    nouns: [
      ['die Gesellschaft', '-en', 'society', 'Die Gesellschaft verändert sich schnell.', 'Society is changing fast.'],
      ['die Bevölkerung', '-en', 'population', 'Die Bevölkerung wächst langsam.', 'The population is growing slowly.'],
      ['die Infrastruktur', '-en', 'infrastructure', 'Die Infrastruktur auf dem Land ist schlecht.', 'The infrastructure in the countryside is poor.'],
      ['der Mietspiegel', '-', 'rent index', 'Der Mietspiegel sagt, was üblich ist.', 'The rent index says what is usual.'],
      ['das Zusammenleben', 'ohne Plural', 'living together', 'Das Zusammenleben funktioniert gut.', 'Living together works well.'],
      ['die Integration', 'ohne Plural', 'integration', 'Integration ist keine Einbahnstraße.', 'Integration is not a one-way street.'],
      ['die Verkehrsanbindung', '-en', 'transport links', 'Die Verkehrsanbindung ist hervorragend.', 'The transport links are excellent.'],
      ['der Stadtrand', '-¨er', 'edge of town', 'Am Stadtrand ist es ruhiger.', 'It is quieter on the edge of town.'],
    ],
  },
};
