/**
 * B2 vocabulary: the register of argument and working life.
 *
 * What changes at B2 is not the subject matter but the distance from it. A B1
 * learner says "Das ist ein Problem"; a B2 learner says "Das wirft die Frage
 * auf, ob …". So this list is heavy on nominalisations, verbs that take a
 * clause, and the vocabulary of qualification - the words that let you say how
 * sure you are, which is most of what examiners are listening for.
 *
 * Rows are [headword, plural or verb forms, English, example, example in English].
 */
export const B2 = {
  wirtschaft: {
    nouns: [
      ['das Unternehmen', '-', 'company, enterprise', 'Das Unternehmen beschäftigt 400 Menschen.', 'The company employs 400 people.'],
      ['der Umsatz', '-¨e', 'turnover', 'Der Umsatz ist um zwölf Prozent gestiegen.', 'Turnover rose by twelve per cent.'],
      ['der Gewinn', '-e', 'profit', 'Der Gewinn fließt in neue Maschinen.', 'The profit goes into new machinery.'],
      ['der Verlust', '-e', 'loss', 'Das Quartal endete mit einem Verlust.', 'The quarter ended with a loss.'],
      ['die Kosten', 'nur Plural', 'costs', 'Die Kosten sind aus dem Ruder gelaufen.', 'The costs have got out of hand.'],
      ['die Verhandlung', '-en', 'negotiation', 'Die Verhandlungen ziehen sich hin.', 'The negotiations are dragging on.'],
      ['der Lieferant', '-en', 'supplier', 'Der Lieferant hat den Termin nicht gehalten.', 'The supplier missed the deadline.'],
      ['die Zielgruppe', '-n', 'target group', 'Die Zielgruppe sind Berufseinsteiger.', 'The target group is people starting out.'],
      ['der Wettbewerb', '-e', 'competition', 'Der Wettbewerb ist härter geworden.', 'The competition has got tougher.'],
      ['die Nachfrage', '-n', 'demand', 'Die Nachfrage übersteigt das Angebot.', 'Demand exceeds supply.'],
      ['die Investition', '-en', 'investment', 'Die Investition rechnet sich in drei Jahren.', 'The investment pays for itself in three years.'],
      ['der Haushalt', '-e', 'budget, household', 'Der Haushalt für nächstes Jahr steht.', 'Next year’s budget is settled.'],
      ['die Bilanz', '-en', 'balance sheet, assessment', 'Die Bilanz des Jahres fällt gemischt aus.', 'The year’s assessment is mixed.'],
      ['die Tagesordnung', '-en', 'agenda', 'Das steht nicht auf der Tagesordnung.', 'That is not on the agenda.'],
      ['das Protokoll', '-e', 'minutes', 'Wer schreibt das Protokoll?', 'Who is taking the minutes?'],
      ['die Zuständigkeit', '-en', 'responsibility, remit', 'Das fällt nicht in meine Zuständigkeit.', 'That does not fall within my remit.'],
      ['die Konsequenz', '-en', 'consequence', 'Welche Konsequenzen hat das für uns?', 'What consequences does that have for us?'],
      ['die Kündigungsfrist', '-en', 'notice period', 'Die Kündigungsfrist beträgt drei Monate.', 'The notice period is three months.'],
    ],
    verbs: [
      ['beauftragen', null, 'to commission', 'Wir haben eine Agentur beauftragt.', 'We commissioned an agency.'],
      ['kalkulieren', null, 'to cost, calculate', 'Wir haben zu knapp kalkuliert.', 'We costed it too tightly.'],
      ['einführen', null, 'to introduce', 'Die Firma führt Gleitzeit ein.', 'The company is introducing flexitime.'],
      ['sich auszahlen', null, 'to pay off', 'Die Umstellung hat sich ausgezahlt.', 'The changeover paid off.'],
      ['umsetzen', null, 'to implement', 'Der Plan wird im Herbst umgesetzt.', 'The plan will be implemented in the autumn.'],
    ],
    phrases: [
      ['ein Angebot abgeben', null, 'to submit a quote', 'Wir geben bis Freitag ein Angebot ab.', 'We will submit a quote by Friday.'],
      ['eine Rechnung stellen', null, 'to invoice', 'Wir stellen die Rechnung zum Monatsende.', 'We invoice at the end of the month.'],
      ['eine Frist einhalten', null, 'to meet a deadline', 'Wir konnten die Frist einhalten.', 'We were able to meet the deadline.'],
    ],
    adjectives: [
      ['rentabel', null, 'profitable', 'Die Filiale ist nicht mehr rentabel.', 'The branch is no longer profitable.'],
      ['verbindlich', null, 'binding', 'Ist das Angebot verbindlich?', 'Is the quote binding?'],
    ],
  },

  wissenschaft: {
    nouns: [
      ['die Studie', '-n', 'study', 'Eine aktuelle Studie widerspricht dem.', 'A recent study contradicts that.'],
      ['die Fragestellung', '-en', 'the question under investigation', 'Die Fragestellung ist zu weit gefasst.', 'The question under investigation is too broadly framed.'],
      ['der Beleg', '-e', 'piece of evidence', 'Dafür gibt es keinen Beleg.', 'There is no evidence for that.'],
      ['der Beweis', '-e', 'proof', 'Das ist ein Hinweis, kein Beweis.', 'That is an indication, not proof.'],
      ['die These', '-n', 'thesis, claim', 'Seine These ist umstritten.', 'His thesis is disputed.'],
      ['die Annahme', '-n', 'assumption', 'Die Annahme hat sich nicht bestätigt.', 'The assumption was not confirmed.'],
      ['der Zweifel', '-', 'doubt', 'Daran habe ich erhebliche Zweifel.', 'I have considerable doubts about that.'],
      ['die Wechselwirkung', '-en', 'interaction, interplay', 'Die Wechselwirkung zwischen beiden ist unklar.', 'The interplay between the two is unclear.'],
      ['die Ausnahme', '-n', 'exception', 'Es gibt eine wichtige Ausnahme.', 'There is one important exception.'],
      ['die Tendenz', '-en', 'trend, tendency', 'Die Tendenz geht in die andere Richtung.', 'The trend is going the other way.'],
      ['der Anteil', '-e', 'proportion, share', 'Der Anteil ist auf 40 Prozent gestiegen.', 'The proportion has risen to 40 per cent.'],
      ['die Abweichung', '-en', 'deviation', 'Die Abweichung liegt im Rahmen.', 'The deviation is within the margin.'],
      ['die Schlussfolgerung', '-en', 'conclusion', 'Diese Schlussfolgerung ist voreilig.', 'That conclusion is premature.'],
      ['die Grundlage', '-n', 'basis', 'Auf dieser Grundlage lässt sich arbeiten.', 'You can work on that basis.'],
      ['der Ansatz', '-¨e', 'approach', 'Der Ansatz ist neu, aber plausibel.', 'The approach is new but plausible.'],
      ['das Verfahren', '-', 'procedure, method', 'Das Verfahren ist aufwendig.', 'The procedure is laborious.'],
      ['die Perspektive', '-n', 'perspective', 'Aus dieser Perspektive sieht es anders aus.', 'From this perspective it looks different.'],
    ],
    verbs: [
      ['belegen', null, 'to substantiate', 'Die Zahlen belegen das nicht.', 'The figures do not substantiate that.'],
      ['hinweisen', 'weist hin · wies hin · hat hingewiesen', 'to point out', 'Ich möchte darauf hinweisen, dass …', 'I would like to point out that …'],
      ['vermuten', null, 'to suspect, assume', 'Man vermutet einen Zusammenhang.', 'A connection is suspected.'],
      ['nachweisen', 'weist nach · wies nach · hat nachgewiesen', 'to demonstrate, prove', 'Das ließ sich nicht nachweisen.', 'That could not be demonstrated.'],
      ['verallgemeinern', null, 'to generalise', 'Das sollte man nicht verallgemeinern.', 'One should not generalise from that.'],
      ['einschränken', null, 'to qualify, restrict', 'Ich muss das etwas einschränken.', 'I have to qualify that somewhat.'],
      ['hervorheben', 'hebt hervor · hob hervor · hat hervorgehoben', 'to emphasise', 'Besonders hervorheben möchte ich …', 'I would particularly like to emphasise …'],
      ['abwägen', 'wägt ab · wog ab · hat abgewogen', 'to weigh up', 'Man muss beide Seiten abwägen.', 'You have to weigh up both sides.'],
      ['zurückführen auf', null, 'to attribute to', 'Das führt man auf das Wetter zurück.', 'That is attributed to the weather.'],
    ],
    adjectives: [
      ['plausibel', null, 'plausible', 'Die Erklärung klingt plausibel.', 'The explanation sounds plausible.'],
      ['eindeutig', null, 'unambiguous', 'Die Datenlage ist nicht eindeutig.', 'The data are not unambiguous.'],
      ['erheblich', null, 'considerable', 'Der Unterschied ist erheblich.', 'The difference is considerable.'],
      ['gering', null, 'slight, small', 'Der Effekt ist gering.', 'The effect is slight.'],
      ['nachvollziehbar', null, 'comprehensible, understandable', 'Die Entscheidung ist nachvollziehbar.', 'The decision is understandable.'],
      ['voreilig', null, 'premature, hasty', 'Das wäre eine voreilige Schlussfolgerung.', 'That would be a premature conclusion.'],
    ],
  },

  konnektoren: {
    connectors: [
      ['insofern', null, 'in that respect', 'Insofern hat er recht.', 'In that respect he is right.'],
      ['hingegen', null, 'by contrast', 'Die Kosten sanken, die Qualität hingegen auch.', 'Costs fell; the quality, by contrast, did too.'],
      ['demnach', null, 'accordingly', 'Demnach wäre der Plan hinfällig.', 'Accordingly the plan would be void.'],
      ['gleichwohl', null, 'nevertheless', 'Es war teuer, gleichwohl richtig.', 'It was expensive, nevertheless right.'],
      ['vorausgesetzt, dass', null, 'provided that', 'Vorausgesetzt, dass alle mitmachen, klappt es.', 'Provided everyone joins in, it will work.'],
      ['es sei denn', null, 'unless', 'Wir fahren, es sei denn, es schneit.', 'We are going, unless it snows.'],
      ['umso mehr, als', null, 'all the more so because', 'Das überrascht umso mehr, als er es wusste.', 'That is all the more surprising because he knew.'],
      ['im Übrigen', null, 'incidentally, besides', 'Im Übrigen war der Termin längst bekannt.', 'Besides, the date had been known for ages.'],
      ['geschweige denn', null, 'let alone', 'Er kam nicht, geschweige denn pünktlich.', 'He did not come, let alone on time.'],
      ['je nachdem', null, 'depending', 'Je nachdem, wie es läuft, bleiben wir länger.', 'Depending on how it goes, we will stay longer.'],
      ['letztlich', null, 'ultimately', 'Letztlich entscheidet der Preis.', 'Ultimately the price decides it.'],
      ['zumindest', null, 'at least', 'Zumindest war die Beratung gut.', 'At least the advice was good.'],
      ['ohnehin', null, 'anyway, in any case', 'Das war ohnehin geplant.', 'That was planned anyway.'],
      ['bekanntlich', null, 'as is well known', 'Bekanntlich dauert so etwas länger.', 'As is well known, that sort of thing takes longer.'],
      ['angesichts', null, 'in view of', 'Angesichts der Lage ist das verständlich.', 'In view of the situation that is understandable.'],
    ],
  },

  gesundheit: {
    nouns: [
      ['die Diagnose', '-n', 'diagnosis', 'Die Diagnose stand erst nach Wochen fest.', 'The diagnosis was only certain after weeks.'],
      ['die Vorsorge', 'ohne Plural', 'preventive care', 'Die Vorsorge zahlt die Kasse.', 'The health insurance pays for preventive care.'],
      ['die Nebenwirkung', '-en', 'side effect', 'Die Nebenwirkungen sind selten.', 'The side effects are rare.'],
      ['die Belastbarkeit', 'ohne Plural', 'resilience, capacity', 'Seine Belastbarkeit hat Grenzen.', 'His capacity has limits.'],
      ['der Pflegefall', '-¨e', 'person needing care', 'Die Mutter wurde zum Pflegefall.', 'The mother came to need care.'],
      ['die Sucht', '-¨e', 'addiction', 'Die Sucht begann schleichend.', 'The addiction crept up gradually.'],
      ['die Genesung', 'ohne Plural', 'recovery', 'Die Genesung dauert mehrere Monate.', 'Recovery takes several months.'],
      ['das Gesundheitswesen', 'ohne Plural', 'the health system', 'Das Gesundheitswesen steht unter Druck.', 'The health system is under pressure.'],
      ['die Wartezeit', '-en', 'waiting time', 'Die Wartezeit auf einen Termin ist lang.', 'The waiting time for an appointment is long.'],
    ],
    verbs: [
      ['sich auswirken auf', null, 'to affect', 'Schlaf wirkt sich auf alles aus.', 'Sleep affects everything.'],
      ['vorbeugen', null, 'to prevent', 'Bewegung beugt vielem vor.', 'Exercise prevents a lot of things.'],
    ],
  },

  umwelt: {
    nouns: [
      ['der Ausstoß', '-¨e', 'emissions', 'Der Ausstoß soll halbiert werden.', 'Emissions are to be halved.'],
      ['der Rohstoff', '-e', 'raw material', 'Die Rohstoffe werden knapper.', 'Raw materials are becoming scarcer.'],
      ['die Ressource', '-n', 'resource', 'Wasser ist die knappste Ressource.', 'Water is the scarcest resource.'],
      ['die Kreislaufwirtschaft', 'ohne Plural', 'circular economy', 'Die Kreislaufwirtschaft steckt in den Anfängen.', 'The circular economy is in its infancy.'],
      ['der Eingriff', '-e', 'intervention', 'Der Eingriff in die Natur war massiv.', 'The intervention in nature was massive.'],
      ['die Artenvielfalt', 'ohne Plural', 'biodiversity', 'Die Artenvielfalt nimmt rapide ab.', 'Biodiversity is declining rapidly.'],
      ['der Verbrauchsanstieg', '-e', 'rise in consumption', 'Der Verbrauchsanstieg war nicht vorhergesehen.', 'The rise in consumption was not foreseen.'],
      ['die Umstellung', '-en', 'changeover', 'Die Umstellung kostet Zeit und Geld.', 'The changeover costs time and money.'],
    ],
    verbs: [
      ['belasten', null, 'to burden, pollute', 'Der Verkehr belastet die Luft.', 'Traffic pollutes the air.'],
      ['eindämmen', null, 'to curb', 'Den Verbrauch muss man eindämmen.', 'Consumption has to be curbed.'],
      ['umdenken', 'denkt um · dachte um · hat umgedacht', 'to rethink', 'Hier muss die Branche umdenken.', 'The industry has to rethink here.'],
    ],
  },

  medien: {
    nouns: [
      ['die Berichterstattung', 'ohne Plural', 'reporting, coverage', 'Die Berichterstattung war einseitig.', 'The coverage was one-sided.'],
      ['die Glaubwürdigkeit', 'ohne Plural', 'credibility', 'Das kostet Glaubwürdigkeit.', 'That costs credibility.'],
      ['die Schlagzeile', '-n', 'headline', 'Die Schlagzeile war irreführend.', 'The headline was misleading.'],
      ['die Reichweite', '-n', 'reach', 'Die Reichweite ist größer als gedacht.', 'The reach is bigger than thought.'],
      ['der Algorithmus', 'Algorithmen', 'algorithm', 'Der Algorithmus bevorzugt Empörung.', 'The algorithm favours outrage.'],
      ['die Überwachung', 'ohne Plural', 'surveillance', 'Die Überwachung wurde ausgeweitet.', 'Surveillance was extended.'],
      ['die Anonymität', 'ohne Plural', 'anonymity', 'Anonymität senkt die Hemmschwelle.', 'Anonymity lowers inhibitions.'],
      ['die Falschmeldung', '-en', 'false report', 'Die Falschmeldung verbreitete sich schnell.', 'The false report spread quickly.'],
    ],
    verbs: [
      ['hinterfragen', null, 'to question critically', 'Man sollte solche Zahlen hinterfragen.', 'One should question such figures.'],
      ['verzerren', null, 'to distort', 'Die Auswahl verzerrt das Bild.', 'The selection distorts the picture.'],
      ['recherchieren', null, 'to research', 'Sie hat monatelang recherchiert.', 'She researched it for months.'],
    ],
  },

  arbeit: {
    nouns: [
      ['der Wohnort', '-e', 'place of residence', 'Der Wohnort entscheidet über den Arbeitsweg.', 'Where you live decides your commute.'],
      ['die Anwesenheit', 'ohne Plural', 'attendance, presence', 'Die Anwesenheit ist nicht verpflichtend.', 'Attendance is not compulsory.'],
      ['die Entfernung', '-en', 'distance', 'Die Entfernung beträgt 40 Kilometer.', 'The distance is 40 kilometres.'],
      ['die Differenz', '-en', 'difference, discrepancy', 'Die Differenz ist erheblich.', 'The discrepancy is considerable.'],
      ['das Umland', 'ohne Plural', 'surrounding area', 'Viele kommen aus dem Umland.', 'Many come from the surrounding area.'],
      ['die Produktivität', 'ohne Plural', 'productivity', 'Die Produktivität ist schwer zu messen.', 'Productivity is hard to measure.'],
      ['die Unzufriedenheit', 'ohne Plural', 'dissatisfaction', 'Die Unzufriedenheit wächst still.', 'Dissatisfaction is growing quietly.'],
      ['die Einstellung zu etwas', 'ohne Plural', 'attitude towards something', 'Seine Einstellung zur Arbeit hat sich gewandelt.', 'His attitude to work has shifted.'],
      ['die Führungskraft', '-¨e', 'manager', 'Führungskräfte brauchen andere Fähigkeiten.', 'Managers need different skills.'],
      ['die Personalabteilung', '-en', 'HR department', 'Die Personalabteilung meldet sich.', 'HR will be in touch.'],
      ['die Einarbeitung', 'ohne Plural', 'induction', 'Die Einarbeitung dauert sechs Wochen.', 'The induction takes six weeks.'],
      ['die Abfindung', '-en', 'severance payment', 'Er hat eine Abfindung bekommen.', 'He received a severance payment.'],
      ['die Arbeitsbelastung', '-en', 'workload', 'Die Arbeitsbelastung ist gestiegen.', 'The workload has risen.'],
      ['die Vereinbarkeit', 'ohne Plural', 'compatibility (of work and family)', 'Die Vereinbarkeit von Beruf und Familie bleibt schwierig.', 'Reconciling work and family remains difficult.'],
      ['der Fachkräftemangel', 'ohne Plural', 'shortage of skilled workers', 'Der Fachkräftemangel trifft die Pflege hart.', 'The shortage of skilled workers hits care hard.'],
      ['die Gleitzeit', 'ohne Plural', 'flexitime', 'Gleitzeit macht vieles leichter.', 'Flexitime makes a lot of things easier.'],
      ['das Betriebsklima', 'ohne Plural', 'working atmosphere', 'Das Betriebsklima hat sich verschlechtert.', 'The working atmosphere has deteriorated.'],
      ['die Beförderung', '-en', 'promotion', 'Die Beförderung kam überraschend.', 'The promotion came as a surprise.'],
    ],
    verbs: [
      ['sich einarbeiten', null, 'to get up to speed', 'Ich arbeite mich gerade ein.', 'I am just getting up to speed.'],
      ['delegieren', null, 'to delegate', 'Er kann schlecht delegieren.', 'He finds it hard to delegate.'],
      ['sich behaupten', null, 'to hold your own', 'Sie hat sich im Team behauptet.', 'She held her own in the team.'],
      ['auffallen', 'fällt auf · fiel auf · ist aufgefallen', 'to stand out, be noticed', 'Mir ist aufgefallen, dass …', 'It struck me that …'],
    ],
  },

  kommunikation: {
    nouns: [
      ['der Einwand', '-¨e', 'objection', 'Der Einwand ist berechtigt.', 'The objection is valid.'],
      ['die Debatte', '-n', 'debate', 'Die Debatte dreht sich im Kreis.', 'The debate is going round in circles.'],
      ['die Beobachtung', '-en', 'observation', 'Diese Beobachtung deckt sich mit meiner.', 'This observation matches mine.'],
      ['die Haltung', '-en', 'attitude, stance', 'Seine Haltung hat sich nicht geändert.', 'His stance has not changed.'],
      ['die Rückmeldung', '-en', 'feedback', 'Danke für die ehrliche Rückmeldung.', 'Thank you for the honest feedback.'],
      ['die Kritik', 'ohne Plural', 'criticism', 'Die Kritik war sachlich.', 'The criticism was factual.'],
      ['die Empfehlung', '-en', 'recommendation', 'Das ist eine Empfehlung, keine Vorschrift.', 'That is a recommendation, not a rule.'],
      ['die Klarheit', 'ohne Plural', 'clarity', 'Zur Klarheit trägt das wenig bei.', 'That contributes little to clarity.'],
      ['der Befehl', '-e', 'order, command', 'Das klang eher wie ein Befehl.', 'That sounded more like an order.'],
      ['die Höflichkeit', 'ohne Plural', 'politeness', 'Höflichkeit ist nicht überall dasselbe.', 'Politeness is not the same thing everywhere.'],
    ],
    verbs: [
      ['erwähnen', null, 'to mention', 'Das wurde nicht erwähnt.', 'That was not mentioned.'],
      ['anmerken', null, 'to remark, note', 'Dazu möchte ich etwas anmerken.', 'I would like to make a remark on that.'],
      ['einräumen', null, 'to concede', 'Das muss ich einräumen.', 'I have to concede that.'],
    ],
  },


  gefuehle: {
    nouns: [
      ['die Erschöpfung', 'ohne Plural', 'exhaustion', 'Die Erschöpfung kam schleichend.', 'The exhaustion crept up.'],
      ['die Gelassenheit', 'ohne Plural', 'equanimity', 'Gelassenheit lernt man spät.', 'Equanimity is learnt late.'],
      ['das Unbehagen', 'ohne Plural', 'unease', 'Ein gewisses Unbehagen bleibt.', 'A certain unease remains.'],
      ['die Erleichterung', 'ohne Plural', 'relief', 'Die Erleichterung war deutlich zu spüren.', 'The relief was palpable.'],
    ],
    adjectives: [
      ['überfordert', null, 'overwhelmed', 'Ich war schlicht überfordert.', 'I was simply overwhelmed.'],
      ['gleichgültig', null, 'indifferent', 'Das ist mir nicht gleichgültig.', 'I am not indifferent to that.'],
      ['verunsichert', null, 'unsettled', 'Die Nachricht hat viele verunsichert.', 'The news unsettled a lot of people.'],
      ['nachdenklich', null, 'thoughtful, pensive', 'Das hat mich nachdenklich gemacht.', 'That made me thoughtful.'],
      ['empört', null, 'outraged', 'Viele reagierten empört.', 'Many reacted with outrage.'],
      ['begeistert', null, 'enthusiastic', 'Das Publikum war begeistert.', 'The audience was enthusiastic.'],
    ],
  },

  stadt: {
    nouns: [
      ['die Zuwanderung', 'ohne Plural', 'immigration', 'Die Zuwanderung hat die Stadt verändert.', 'Immigration has changed the city.'],
      ['die Teilhabe', 'ohne Plural', 'participation', 'Es geht um Teilhabe, nicht um Geld.', 'It is about participation, not money.'],
      ['die Benachteiligung', '-en', 'disadvantage, discrimination', 'Die Benachteiligung ist messbar.', 'The disadvantage is measurable.'],
      ['der Wohnraum', '-¨e', 'housing', 'Bezahlbarer Wohnraum fehlt überall.', 'Affordable housing is missing everywhere.'],
      ['die Verdrängung', 'ohne Plural', 'displacement', 'Die Verdrängung trifft die Alteingesessenen.', 'The displacement hits long-term residents.'],
      ['die Ehrenamtlichkeit', 'ohne Plural', 'voluntary engagement', 'Ohne Ehrenamtlichkeit ginge wenig.', 'Little would work without volunteers.'],
      ['der Zusammenhalt', 'ohne Plural', 'cohesion', 'Der Zusammenhalt im Viertel ist stark.', 'Cohesion in the neighbourhood is strong.'],
      ['die Verwaltung', '-en', 'administration', 'Die Verwaltung arbeitet noch mit Papier.', 'The administration still works on paper.'],
    ],
  },

  bildung: {
    nouns: [
      ['die Chancengleichheit', 'ohne Plural', 'equality of opportunity', 'Von Chancengleichheit kann keine Rede sein.', 'There is no question of equality of opportunity.'],
      ['der Bildungsweg', '-e', 'educational path', 'Es gibt mehr als einen Bildungsweg.', 'There is more than one educational path.'],
      ['die Quereinsteigerin', '-nen', 'career changer (female)', 'Sie ist Quereinsteigerin im Lehrberuf.', 'She is a career changer into teaching.'],
      ['der Lehrplan', '-¨e', 'curriculum', 'Der Lehrplan wurde überarbeitet.', 'The curriculum was revised.'],
      ['die Nachhilfe', 'ohne Plural', 'private tuition', 'Nachhilfe können sich nicht alle leisten.', 'Not everyone can afford private tuition.'],
      ['der Abschlussgrad', '-e', 'level of qualification', 'Der Abschlussgrad entscheidet über das Gehalt.', 'The level of qualification determines the salary.'],
    ],
    verbs: [
      ['sich aneignen', null, 'to acquire (a skill)', 'Das habe ich mir selbst angeeignet.', 'I acquired that myself.'],
      ['vermitteln', null, 'to convey, teach', 'Die Schule vermittelt zu wenig davon.', 'School conveys too little of that.'],
      ['scheitern', null, 'to fail', 'Das Projekt ist an der Finanzierung gescheitert.', 'The project failed over the funding.'],
    ],
  },
};
