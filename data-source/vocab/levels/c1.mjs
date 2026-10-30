/**
 * C1 vocabulary: precision, register and idiom.
 *
 * At C1 the gap is no longer what you can say but how exactly you can say it.
 * A B2 learner says "Das ist ein Problem"; a C1 learner picks between Problem,
 * Schwierigkeit, Haken, Mangel, Missstand and Zumutung, and the choice carries
 * most of the meaning. So this list is deliberately full of near-synonyms,
 * fixed expressions and words whose whole job is to mark how strongly you are
 * committing to a claim.
 *
 * Rows are [headword, plural or verb forms, English, example, example in English].
 */
export const C1 = {
  wissenschaft: {
    nouns: [
      ['die Nuance', '-n', 'nuance', 'Die Nuance geht in der Übersetzung verloren.', 'The nuance is lost in translation.'],
      ['der Vorbehalt', '-e', 'reservation, caveat', 'Ich stimme zu, allerdings unter Vorbehalt.', 'I agree, though with a caveat.'],
      ['die Einschränkung', '-en', 'qualification, restriction', 'Mit einer wichtigen Einschränkung: …', 'With one important qualification: …'],
      ['die Tragweite', 'ohne Plural', 'significance, implications', 'Die Tragweite der Entscheidung ist unklar.', 'The implications of the decision are unclear.'],
      ['der Sachverhalt', '-e', 'state of affairs, facts', 'Der Sachverhalt ist komplizierter.', 'The facts are more complicated.'],
      ['die Gewichtung', '-en', 'weighting, emphasis', 'Es geht um die Gewichtung, nicht um die Fakten.', 'It is about the weighting, not the facts.'],
      ['der Spielraum', '-¨e', 'latitude, scope', 'Der Spielraum ist eng geworden.', 'The scope has narrowed.'],
      ['die Verzerrung', '-en', 'distortion, bias', 'Die Auswahl erzeugt eine systematische Verzerrung.', 'The selection produces a systematic bias.'],
      ['der Trugschluss', '-¨e', 'fallacy', 'Das ist ein verbreiteter Trugschluss.', 'That is a common fallacy.'],
      ['die Prämisse', '-n', 'premise', 'Die Prämisse selbst ist fragwürdig.', 'The premise itself is questionable.'],
      ['der Gegenstand der Untersuchung', '-¨e', 'object of study', 'Der Gegenstand der Untersuchung hat sich verschoben.', 'The object of study has shifted.'],
      ['die Aussagekraft', 'ohne Plural', 'informative value', 'Die Aussagekraft der Zahlen ist begrenzt.', 'The informative value of the figures is limited.'],
      ['der Konsens', '-e', 'consensus', 'Der Konsens bröckelt seit Jahren.', 'The consensus has been crumbling for years.'],
      ['die Deutungshoheit', 'ohne Plural', 'power of interpretation', 'Es geht um die Deutungshoheit über den Begriff.', 'It is about who gets to define the term.'],
    ],
    verbs: [
      ['relativieren', null, 'to put into perspective', 'Diese Zahl muss man relativieren.', 'That figure has to be put into perspective.'],
      ['differenzieren', null, 'to differentiate', 'Hier müsste man stärker differenzieren.', 'One would have to differentiate more here.'],
      ['untermauern', null, 'to underpin', 'Die These ist gut untermauert.', 'The thesis is well underpinned.'],
      ['entkräften', null, 'to refute, weaken', 'Dieses Argument lässt sich leicht entkräften.', 'This argument is easily refuted.'],
      ['ausklammern', null, 'to leave aside', 'Diesen Aspekt klammere ich bewusst aus.', 'I am deliberately leaving this aspect aside.'],
      ['sich abzeichnen', null, 'to emerge, become apparent', 'Eine Lösung zeichnet sich nicht ab.', 'No solution is emerging.'],
      ['zutreffen', 'trifft zu · traf zu · hat zugetroffen', 'to apply, be the case', 'Das trifft nur bedingt zu.', 'That is only partly the case.'],
      ['naheliegen', 'liegt nahe · lag nahe · hat nahegelegen', 'to suggest itself', 'Dieser Schluss liegt nahe, ist aber falsch.', 'This conclusion suggests itself but is wrong.'],
    ],
    adjectives: [
      ['fragwürdig', null, 'questionable', 'Die Methode ist fragwürdig.', 'The method is questionable.'],
      ['stichhaltig', null, 'sound, valid', 'Das Argument ist nicht stichhaltig.', 'The argument is not sound.'],
      ['bedingt', null, 'qualified, only partly', 'Das stimmt nur bedingt.', 'That is only partly true.'],
      ['zwangsläufig', null, 'inevitable', 'Das Ergebnis war nicht zwangsläufig.', 'The result was not inevitable.'],
      ['hinreichend', null, 'sufficient', 'Die Belege sind nicht hinreichend.', 'The evidence is not sufficient.'],
      ['vermeintlich', null, 'supposed, alleged', 'Der vermeintliche Vorteil entfällt.', 'The supposed advantage falls away.'],
      ['ausschlaggebend', null, 'decisive', 'Ausschlaggebend war der Zeitpunkt.', 'The timing was decisive.'],
      ['marginal', null, 'marginal', 'Der Effekt ist marginal.', 'The effect is marginal.'],
    ],
  },

  gefuehle: {
    nouns: [
      ['die Zumutung', '-en', 'imposition, affront', 'Diese Frist ist eine Zumutung.', 'This deadline is an affront.'],
      ['der Missstand', '-¨e', 'abuse, bad state of affairs', 'Der Missstand ist seit Jahren bekannt.', 'The problem has been known for years.'],
      ['der Haken', '-', 'catch, snag', 'Die Sache hat einen Haken.', 'There is a catch.'],
      ['die Nachsicht', 'ohne Plural', 'forbearance', 'Ich bitte um Nachsicht.', 'I ask for your forbearance.'],
      ['die Genugtuung', 'ohne Plural', 'satisfaction (at being proved right)', 'Darüber empfinde ich keine Genugtuung.', 'I feel no satisfaction about it.'],
      ['der Überdruss', 'ohne Plural', 'weariness', 'Ein gewisser Überdruss ist spürbar.', 'A certain weariness is noticeable.'],
      ['die Wehmut', 'ohne Plural', 'wistfulness', 'Ich denke mit Wehmut daran zurück.', 'I look back on it wistfully.'],
    ],
    adjectives: [
      ['zwiespältig', null, 'ambivalent', 'Meine Haltung dazu ist zwiespältig.', 'My attitude to it is ambivalent.'],
      ['befremdlich', null, 'disconcerting', 'Die Reaktion fand ich befremdlich.', 'I found the reaction disconcerting.'],
      ['anmaßend', null, 'presumptuous', 'Das klingt anmaßend, ist aber ernst gemeint.', 'That sounds presumptuous but is meant seriously.'],
      ['beherzt', null, 'bold, spirited', 'Sie hat beherzt eingegriffen.', 'She intervened boldly.'],
      ['abgeklärt', null, 'unflappable, worldly-wise', 'Er reagierte erstaunlich abgeklärt.', 'He reacted remarkably unflappably.'],
      ['verhalten', null, 'restrained, muted', 'Die Reaktionen waren verhalten.', 'The reactions were muted.'],
    ],
  },

  kommunikation: {
    phrases: [
      ['aus dem Ruder laufen', null, 'to get out of hand', 'Die Kosten sind aus dem Ruder gelaufen.', 'The costs got out of hand.'],
      ['den Rahmen sprengen', null, 'to go beyond the scope', 'Das würde hier den Rahmen sprengen.', 'That would go beyond our scope here.'],
      ['auf der Hand liegen', null, 'to be obvious', 'Die Antwort liegt auf der Hand.', 'The answer is obvious.'],
      ['ins Gewicht fallen', null, 'to carry weight, matter', 'Dieser Posten fällt kaum ins Gewicht.', 'This item hardly matters.'],
      ['zur Debatte stehen', null, 'to be at issue', 'Das steht hier nicht zur Debatte.', 'That is not at issue here.'],
      ['die Oberhand gewinnen', null, 'to gain the upper hand', 'Die Vernunft hat die Oberhand gewonnen.', 'Reason gained the upper hand.'],
      ['ins Leere laufen', null, 'to come to nothing', 'Die Beschwerde ist ins Leere gelaufen.', 'The complaint came to nothing.'],
      ['auf dem Spiel stehen', null, 'to be at stake', 'Hier steht die Glaubwürdigkeit auf dem Spiel.', 'Credibility is at stake here.'],
      ['einen Schlussstrich ziehen', null, 'to draw a line under something', 'Irgendwann muss man einen Schlussstrich ziehen.', 'At some point you have to draw a line under it.'],
      ['Hand in Hand gehen', null, 'to go hand in hand', 'Beides geht Hand in Hand.', 'The two go hand in hand.'],
      ['jemandem entgegenkommen', null, 'to accommodate someone', 'Wir sind ihm beim Preis entgegengekommen.', 'We accommodated him on the price.'],
      ['etwas in Kauf nehmen', null, 'to accept something as a trade-off', 'Diesen Nachteil nehme ich in Kauf.', 'I accept that disadvantage as a trade-off.'],
      ['sich in Grenzen halten', null, 'to be limited', 'Meine Begeisterung hält sich in Grenzen.', 'My enthusiasm is limited.'],
      ['zu wünschen übrig lassen', null, 'to leave much to be desired', 'Die Umsetzung lässt zu wünschen übrig.', 'The implementation leaves much to be desired.'],
    ],
    nouns: [
      ['die Direktheit', 'ohne Plural', 'directness', 'Die Direktheit wird oft falsch gelesen.', 'The directness is often misread.'],
      ['die Verwechslung', '-en', 'confusion, mix-up', 'Die Verwechslung läuft in beide Richtungen.', 'The confusion runs in both directions.'],
      ['die Abwertung', '-en', 'disparagement, downgrading', 'Das liest sich als Abwertung.', 'That reads as disparagement.'],
      ['der Einwand von Gewicht', '-¨e', 'a weighty objection', 'Das ist ein Einwand von Gewicht.', 'That is a weighty objection.'],
      ['die Anspielung', '-en', 'allusion', 'Die Anspielung hat niemand verstanden.', 'Nobody got the allusion.'],
      ['der Beiklang', '-¨e', 'connotation', 'Das Wort hat einen abwertenden Beiklang.', 'The word has a pejorative connotation.'],
      ['die Zurückhaltung', 'ohne Plural', 'restraint, reticence', 'Seine Zurückhaltung war auffällig.', 'His reticence was striking.'],
      ['der Unterton', '-¨e', 'undertone', 'Da war ein ironischer Unterton.', 'There was an ironic undertone.'],
    ],
  },

  wirtschaft: {
    nouns: [
      ['die Rentabilität', 'ohne Plural', 'profitability', 'Die Rentabilität ist das kleinere Problem.', 'Profitability is the lesser problem.'],
      ['die Wertschöpfung', 'ohne Plural', 'value creation', 'Die Wertschöpfung findet woanders statt.', 'The value creation happens elsewhere.'],
      ['der Engpass', '-¨e', 'bottleneck', 'Der Engpass liegt in der Logistik.', 'The bottleneck is in logistics.'],
      ['die Rücklage', '-n', 'reserve', 'Die Rücklagen sind aufgebraucht.', 'The reserves are used up.'],
      ['die Auflage', '-n', 'condition, requirement', 'Die Förderung ist an Auflagen gebunden.', 'The funding is tied to conditions.'],
      ['der Anreiz', '-e', 'incentive', 'Der Anreiz wirkt in die falsche Richtung.', 'The incentive pulls the wrong way.'],
      ['die Abwägung', '-en', 'weighing-up', 'Es bleibt eine Abwägung zwischen Kosten und Risiko.', 'It remains a trade-off between cost and risk.'],
      ['der Verhandlungsspielraum', '-¨e', 'room for negotiation', 'Verhandlungsspielraum gibt es kaum noch.', 'There is barely any room for negotiation left.'],
      ['die Zuspitzung', '-en', 'escalation, sharpening', 'Die Zuspitzung war vermeidbar.', 'The escalation was avoidable.'],
    ],
    verbs: [
      ['abfedern', null, 'to cushion', 'Die Härten wurden abgefedert.', 'The hardships were cushioned.'],
      ['ausloten', null, 'to sound out, explore', 'Wir loten die Möglichkeiten aus.', 'We are sounding out the options.'],
      ['zuspitzen', null, 'to sharpen, escalate', 'Die Lage hat sich zugespitzt.', 'The situation has escalated.'],
      ['vorantreiben', 'treibt voran · trieb voran · hat vorangetrieben', 'to drive forward', 'Das Projekt wird zügig vorangetrieben.', 'The project is being driven forward briskly.'],
      ['hinauszögern', null, 'to delay, put off', 'Die Entscheidung wurde hinausgezögert.', 'The decision was put off.'],
    ],
  },

  stadt: {
    nouns: [
      ['der Strukturwandel', 'ohne Plural', 'structural change', 'Der Strukturwandel hat die Region geprägt.', 'Structural change has shaped the region.'],
      ['die Daseinsvorsorge', 'ohne Plural', 'provision of public services', 'Daseinsvorsorge ist keine Ware.', 'Public provision is not a commodity.'],
      ['das Gefälle', '-', 'disparity, gradient', 'Das Gefälle zwischen Stadt und Land wächst.', 'The urban-rural disparity is growing.'],
      ['die Polarisierung', 'ohne Plural', 'polarisation', 'Die Polarisierung nimmt messbar zu.', 'Polarisation is measurably increasing.'],
      ['der Umbruch', '-¨e', 'upheaval', 'Die Branche steckt im Umbruch.', 'The sector is in upheaval.'],
      ['die Nachverdichtung', 'ohne Plural', 'urban densification', 'Nachverdichtung ist umstritten.', 'Densification is contested.'],
    ],
    adjectives: [
      ['prekär', null, 'precarious', 'Die Lage ist prekär geworden.', 'The situation has become precarious.'],
      ['nachgelagert', null, 'downstream, secondary', 'Das ist ein nachgelagertes Problem.', 'That is a secondary problem.'],
      ['flächendeckend', null, 'across the board, nationwide', 'Eine flächendeckende Lösung fehlt.', 'A nationwide solution is missing.'],
    ],
  },
};
