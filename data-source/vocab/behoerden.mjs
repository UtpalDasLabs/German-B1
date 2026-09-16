export default {
  key: 'behoerden',
  label: { de: 'Ämter & Formulare', en: 'Authorities & paperwork' },
  icon: '\u{1F3DB}️',
  payoff: {
    de: 'Lesen Teil 5 (Regeln und Hinweise) und die formelle Mail im Schreiben.',
    en: 'Lesen part 5 (rules and notices) and the formal email in Schreiben.',
  },

  nouns: [
    ['die Behörde', '-n', 'public authority', 'Für diesen Antrag ist eine andere Behörde zuständig.', 'A different authority is responsible for this application.'],
    ['das Amt', '-¨er', 'office, agency', 'Das Amt hat nur vormittags geöffnet.', 'The office is only open in the mornings.'],
    ['das Bürgeramt', '-¨er', 'citizens’ office', 'Im Bürgeramt bekommst du die Meldebescheinigung.', 'At the citizens’ office you get the registration certificate.'],
    ['die Ausländerbehörde', '-n', 'immigration office', 'Die Ausländerbehörde verlängert den Aufenthaltstitel.', 'The immigration office extends the residence permit.'],
    ['der Antrag', '-¨e', 'application (formal)', 'Der Antrag muss vollständig ausgefüllt sein.', 'The application must be filled in completely.'],
    ['das Formular', '-e', 'form', 'Das Formular gibt es auch als PDF.', 'The form is also available as a PDF.'],
    ['die Unterlagen', 'nur Plural', 'documents', 'Bringen Sie bitte alle Unterlagen im Original mit.', 'Please bring all documents in the original.'],
    ['die Bescheinigung', '-en', 'certificate, confirmation', 'Die Bescheinigung gilt drei Monate.', 'The confirmation is valid for three months.'],
    ['der Nachweis', '-e', 'proof, evidence', 'Als Nachweis reicht die letzte Gehaltsabrechnung.', 'The last payslip is sufficient as proof.'],
    ['der Bescheid', '-e', 'official decision, notice', 'Der Bescheid kommt in etwa vier Wochen.', 'The decision will come in about four weeks.'],
    ['die Frist', '-en', 'deadline', 'Die Frist endet am 31. März.', 'The deadline ends on 31 March.'],
    ['die Abmeldung', '-en', 'deregistration', 'Vor dem Wegzug brauchst du eine Abmeldung.', 'Before leaving you need a deregistration.'],
    ['die Steuer', '-n', 'tax', 'Die Steuer wird direkt vom Lohn abgezogen.', 'The tax is deducted directly from the wage.'],
    ['die Steuererklärung', '-en', 'tax return', 'Die Steuererklärung mache ich online.', 'I do my tax return online.'],
    ['die Versicherungsnummer', '-n', 'insurance number', 'Ihre Versicherungsnummer steht auf der Karte.', 'Your insurance number is on the card.'],
    ['der Aufenthaltstitel', '-', 'residence permit', 'Mein Aufenthaltstitel läuft im November ab.', 'My residence permit expires in November.'],
    ['die Staatsangehörigkeit', '-en', 'nationality', 'Die Staatsangehörigkeit steht im Pass.', 'The nationality is in the passport.'],
    ['die Einbürgerung', '-en', 'naturalisation', 'Für die Einbürgerung brauchst du B1.', 'For naturalisation you need B1.'],
    ['die Beratung', '-en', 'advice, counselling', 'Die Beratung ist kostenlos und vertraulich.', 'The advice is free and confidential.'],
    ['der Widerspruch', '-¨e', 'objection, appeal', 'Gegen den Bescheid können Sie Widerspruch einlegen.', 'You can lodge an appeal against the decision.'],
  ],

  verbs: [
    ['ausfüllen', null, 'to fill in', 'Füllen Sie bitte beide Seiten aus.', 'Please fill in both sides.'],
    ['unterschreiben', 'unterschreibt · unterschrieb · hat unterschrieben', 'to sign', 'Unterschreiben Sie unten rechts.', 'Sign at the bottom right.'],
    ['vorlegen', null, 'to present, to produce', 'Bitte legen Sie Ihren Ausweis vor.', 'Please present your ID card.'],
    ['sich ausweisen', 'weist sich aus · wies sich aus · hat sich ausgewiesen', 'to identify oneself', 'Sie müssen sich am Schalter ausweisen.', 'You have to identify yourself at the counter.'],
    ['verlängern', null, 'to extend, to renew', 'Den Pass kann man online verlängern.', 'You can renew the passport online.'],
    ['ablehnen', null, 'to reject', 'Der Antrag wurde ohne Begründung abgelehnt.', 'The application was rejected without a reason.'],
    ['genehmigen', null, 'to approve', 'Der Urlaub wurde genehmigt.', 'The leave was approved.'],
    ['mitteilen', null, 'to notify, to inform', 'Bitte teilen Sie uns Ihre neue Adresse mit.', 'Please inform us of your new address.'],
    ['sich erkundigen nach', null, 'to enquire about', 'Ich erkundige mich nach dem Stand des Antrags.', 'I am enquiring about the status of the application.'],
    ['nachreichen', null, 'to submit later', 'Die Übersetzung können Sie nachreichen.', 'You can submit the translation later.'],
  ],

  adjectives: [
    ['gültig', null, 'valid', 'Der Ausweis ist noch zwei Jahre gültig.', 'The ID card is valid for another two years.'],
    ['vollständig', null, 'complete', 'Nur vollständige Anträge werden bearbeitet.', 'Only complete applications are processed.'],
    ['schriftlich', null, 'in writing', 'Der Widerspruch muss schriftlich erfolgen.', 'The objection must be made in writing.'],
    ['amtlich', null, 'official', 'Wir brauchen eine amtliche Übersetzung.', 'We need an official translation.'],
    ['erforderlich', null, 'required, necessary', 'Eine Voranmeldung ist erforderlich.', 'Prior registration is required.'],
  ],

  phrases: [
    ['einen Antrag stellen', null, 'to submit an application', 'Den Antrag habe ich im Januar gestellt.', 'I submitted the application in January.'],
    ['sich an jemanden wenden', null, 'to turn to someone', 'Bei Fragen wenden Sie sich an Frau Weber.', 'If you have questions, turn to Ms Weber.'],
    ['Sehr geehrte Damen und Herren', null, 'Dear Sir or Madam', 'Sehr geehrte Damen und Herren, hiermit beantrage ich …', 'Dear Sir or Madam, I hereby apply for …'],
  ],
};
