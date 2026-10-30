import type { ExamInfo, ExamProvider, Level, ModuleKey, ProviderInfo } from './types';

/**
 * The examining bodies a learner in Germany realistically sits, with the
 * published shape of each exam at each level.
 *
 * Formats here are the stable kind - how many parts, roughly how long, what has
 * to be produced. Timings and fees are the volatile part: every test centre
 * sets its own fee, and the bodies revise their papers. So every exam carries
 * the body's own page, and the Exam tab says out loud that the centre's page is
 * the source of truth rather than pretending these numbers are guaranteed.
 *
 * This app is independent. It is not affiliated with, endorsed by, or a
 * product of the Goethe-Institut, telc gGmbH, g.a.s.t. or the BAMF.
 */

const CHECK_OFFICIAL = {
  de: 'Zeiten und Gebühren sind Richtwerte. Verbindlich ist die Seite des Prüfungszentrums.',
  en: 'Timings and fees are indicative. The test centre\u2019s own page is binding.',
};

export const PROVIDERS: ProviderInfo[] = [
  {
    key: 'goethe',
    body: 'Goethe-Institut',
    who: {
      de: 'Der Standard für Studium, Arbeit und die Einbürgerung. Weltweit anerkannt.',
      en: 'The standard for study, work and naturalisation. Recognised worldwide.',
    },
    levels: ['A1', 'A2', 'B1', 'B2', 'C1'],
    exams: {
      A1: {
        name: 'Goethe-Zertifikat A1',
        full: { de: 'Goethe-Zertifikat A1: Start Deutsch 1', en: 'Goethe-Zertifikat A1: Start Deutsch 1' },
        minutes: { lesen: 25, hoeren: 20, schreiben: 20, sprechen: 15 },
        passPercent: 60,
        modular: false,
        costEur: '60-130 gesamt',
        url: 'https://www.goethe.de/de/spr/kup/prf/prf/gzsd1.html',
        notes: [
          {
            de: 'Der schriftliche Teil läuft ohne Pause durch: Hören, Lesen, Schreiben.',
            en: 'The written part runs without a break: listening, reading, writing.',
          },
          {
            de: 'Sprechen ist eine Gruppenprüfung: sich vorstellen, Fragen stellen, bitten.',
            en: 'Speaking is a group exam: introduce yourself, ask questions, make requests.',
          },
          {
            de: 'A1 reicht für den Ehegattennachzug, nicht für die Einbürgerung.',
            en: 'A1 is enough for a spousal visa, not for naturalisation.',
          },
          CHECK_OFFICIAL,
        ],
      },
      A2: {
        name: 'Goethe-Zertifikat A2',
        full: { de: 'Goethe-Zertifikat A2', en: 'Goethe-Zertifikat A2' },
        minutes: { lesen: 30, hoeren: 30, schreiben: 30, sprechen: 15 },
        passPercent: 60,
        modular: false,
        costEur: '70-140 gesamt',
        url: 'https://www.goethe.de/de/spr/kup/prf/prf/gza2.html',
        notes: [
          {
            de: 'Für Jugendliche gibt es eine eigene Variante, Goethe-Zertifikat A2 Fit in Deutsch.',
            en: 'There is a separate version for young people, Goethe-Zertifikat A2 Fit in Deutsch.',
          },
          {
            de: 'Schreiben verlangt eine kurze Mitteilung, keinen Aufsatz.',
            en: 'Writing asks for a short message, not an essay.',
          },
          CHECK_OFFICIAL,
        ],
      },
      B1: {
        name: 'Goethe-Zertifikat B1',
        full: {
          de: 'Goethe-Zertifikat B1 (Zertifikat Deutsch)',
          en: 'Goethe-Zertifikat B1 (Zertifikat Deutsch)',
        },
        minutes: { lesen: 65, hoeren: 40, schreiben: 60, sprechen: 15 },
        passPercent: 60,
        modular: true,
        costEur: '80-120 pro Modul',
        url: 'https://www.goethe.de/de/spr/kup/prf/prf/gzb1.html',
        notes: [
          {
            de: 'Modular: Du kannst die vier Teile einzeln ablegen und einzeln wiederholen.',
            en: 'Modular: you can sit the four parts separately and retake them separately.',
          },
          {
            de: 'Lesen hat 5 Teile, Hören 4 Teile, Schreiben 3 Aufgaben, Sprechen 3 Teile mit Partner.',
            en: 'Lesen has 5 parts, Hören 4, Schreiben 3 tasks, Sprechen 3 parts with a partner.',
          },
          {
            de: 'Bestanden ist ein Modul ab 60 von 100 Punkten.',
            en: 'A module is passed from 60 of 100 points.',
          },
          CHECK_OFFICIAL,
        ],
      },
      B2: {
        name: 'Goethe-Zertifikat B2',
        full: { de: 'Goethe-Zertifikat B2', en: 'Goethe-Zertifikat B2' },
        minutes: { lesen: 65, hoeren: 40, schreiben: 75, sprechen: 15 },
        passPercent: 60,
        modular: true,
        costEur: '90-140 pro Modul',
        url: 'https://www.goethe.de/de/spr/kup/prf/prf/gzb2.html',
        notes: [
          {
            de: 'Modular, wie B1. Viele Hochschulen und Pflegeberufe verlangen genau dieses Zertifikat.',
            en: 'Modular, like B1. Many universities and care professions ask for exactly this certificate.',
          },
          {
            de: 'Schreiben verlangt einen Forumsbeitrag und eine formelle Nachricht.',
            en: 'Writing asks for a forum post and a formal message.',
          },
          {
            de: 'Sprechen besteht aus einem Vortrag und einer Diskussion mit dem Partner.',
            en: 'Speaking consists of a presentation and a discussion with your partner.',
          },
          CHECK_OFFICIAL,
        ],
      },
      C1: {
        name: 'Goethe-Zertifikat C1',
        full: { de: 'Goethe-Zertifikat C1', en: 'Goethe-Zertifikat C1' },
        minutes: { lesen: 70, hoeren: 40, schreiben: 80, sprechen: 15 },
        passPercent: 60,
        modular: false,
        costEur: '230-280 gesamt',
        url: 'https://www.goethe.de/de/spr/kup/prf/prf/gzc1.html',
        notes: [
          {
            de: 'Nicht modular: alle vier Teile an einem Termin.',
            en: 'Not modular: all four parts at one sitting.',
          },
          {
            de: 'Schreiben verlangt einen zusammenhängenden Text aus Stichpunkten und eine Umformulierung.',
            en: 'Writing asks for a connected text from notes plus a rewriting task.',
          },
          CHECK_OFFICIAL,
        ],
      },
    },
  },
  {
    key: 'telc',
    body: 'telc gGmbH',
    who: {
      de: 'Häufig an Volkshochschulen und Sprachschulen. Gleichwertig anerkannt.',
      en: 'Common at Volkshochschulen and language schools. Equally recognised.',
    },
    levels: ['A1', 'A2', 'B1', 'B2', 'C1'],
    exams: {
      A1: {
        name: 'telc Deutsch A1',
        full: { de: 'telc Deutsch A1', en: 'telc Deutsch A1' },
        minutes: { lesen: 45, hoeren: 20, schreiben: 20, sprechen: 15 },
        passPercent: 60,
        modular: false,
        costEur: '80-120 gesamt',
        url: 'https://www.telc.net/pruefungsteilnehmende/sprachpruefungen/pruefungen/detail/telc-deutsch-a1.html',
        notes: [
          {
            de: 'Enthält Sprachbausteine, die bei Goethe fehlen: Lücken zu Grammatik und Wortschatz.',
            en: 'Includes Sprachbausteine, which Goethe does not have: gaps on grammar and vocabulary.',
          },
          CHECK_OFFICIAL,
        ],
      },
      A2: {
        name: 'telc Deutsch A2',
        full: { de: 'telc Deutsch A2', en: 'telc Deutsch A2' },
        minutes: { lesen: 45, hoeren: 20, schreiben: 30, sprechen: 15 },
        passPercent: 60,
        modular: false,
        costEur: '90-140 gesamt',
        url: 'https://www.telc.net/pruefungsteilnehmende/sprachpruefungen/pruefungen/detail/telc-deutsch-a2.html',
        notes: [
          {
            de: 'Die Zeit für Lesen deckt Leseverstehen und Sprachbausteine zusammen ab.',
            en: 'The reading time covers reading comprehension and Sprachbausteine together.',
          },
          CHECK_OFFICIAL,
        ],
      },
      B1: {
        name: 'telc Deutsch B1',
        full: { de: 'telc Deutsch B1 (Zertifikat Deutsch)', en: 'telc Deutsch B1 (Zertifikat Deutsch)' },
        minutes: { lesen: 90, hoeren: 30, schreiben: 30, sprechen: 15 },
        passPercent: 60,
        modular: false,
        costEur: '130-180 gesamt',
        url: 'https://www.telc.net/pruefungsteilnehmende/sprachpruefungen/pruefungen/detail/telc-deutsch-b1.html',
        notes: [
          {
            de: 'Enthält Sprachbausteine: zwei Lückentexte zu Grammatik und Wortschatz, die es bei Goethe nicht gibt.',
            en: 'Includes Sprachbausteine: two gap-fill sections on grammar and vocabulary that Goethe does not have.',
          },
          {
            de: 'Die 90 Minuten decken Leseverstehen und Sprachbausteine zusammen ab.',
            en: 'The 90 minutes cover reading comprehension and Sprachbausteine together.',
          },
          {
            de: 'Nicht modular: schriftlicher und mündlicher Teil müssen beide mindestens 60% erreichen.',
            en: 'Not modular: the written and the oral part must each reach at least 60%.',
          },
          CHECK_OFFICIAL,
        ],
      },
      B2: {
        name: 'telc Deutsch B2',
        full: { de: 'telc Deutsch B2', en: 'telc Deutsch B2' },
        minutes: { lesen: 90, hoeren: 20, schreiben: 30, sprechen: 15 },
        passPercent: 60,
        modular: false,
        costEur: '150-200 gesamt',
        url: 'https://www.telc.net/pruefungsteilnehmende/sprachpruefungen/pruefungen/detail/telc-deutsch-b2.html',
        notes: [
          {
            de: 'Es gibt eigene Varianten für Beruf und für Pflege; prüfe, welche dein Arbeitgeber verlangt.',
            en: 'There are separate versions for work and for nursing; check which one your employer wants.',
          },
          CHECK_OFFICIAL,
        ],
      },
      C1: {
        name: 'telc Deutsch C1 Hochschule',
        full: { de: 'telc Deutsch C1 Hochschule', en: 'telc Deutsch C1 Hochschule' },
        minutes: { lesen: 90, hoeren: 40, schreiben: 70, sprechen: 16 },
        passPercent: 60,
        modular: false,
        costEur: '180-250 gesamt',
        url: 'https://www.telc.net/pruefungsteilnehmende/sprachpruefungen/pruefungen/detail/telc-deutsch-c1-hochschule.html',
        notes: [
          {
            de: 'Von vielen Hochschulen als Zulassung anerkannt, gleichwertig zur DSH.',
            en: 'Accepted for admission by many universities, on a par with the DSH.',
          },
          CHECK_OFFICIAL,
        ],
      },
    },
  },
  {
    key: 'dtz',
    body: 'BAMF / g.a.s.t.',
    who: {
      de: 'Die Prüfung am Ende des Integrationskurses. Für das Zertifikat Integrationskurs brauchst du B1.',
      en: 'The exam at the end of the Integrationskurs. The course certificate needs B1.',
    },
    levels: ['A2', 'B1'],
    exams: {
      A2: {
        name: 'DTZ (A2-Ergebnis)',
        full: { de: 'Deutsch-Test für Zuwanderer, A2-Ergebnis', en: 'Deutsch-Test für Zuwanderer, A2 result' },
        minutes: { lesen: 45, hoeren: 25, schreiben: 30, sprechen: 16 },
        passPercent: 60,
        modular: false,
        costEur: '0 im Integrationskurs, sonst ca. 130',
        url: 'https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/Abschlusspruefung/abschlusspruefung-node.html',
        notes: [
          {
            de: 'Es ist eine Prüfung, kein eigener A2-Test: das Ergebnis sagt pro Fertigkeit A2 oder B1.',
            en: 'It is one exam, not a separate A2 test: the result says A2 or B1 per skill.',
          },
          {
            de: 'Ein A2-Ergebnis reicht nicht für das Zertifikat Integrationskurs.',
            en: 'An A2 result is not enough for the Integrationskurs certificate.',
          },
          CHECK_OFFICIAL,
        ],
      },
      B1: {
        name: 'DTZ (B1-Ergebnis)',
        full: {
          de: 'Deutsch-Test für Zuwanderer, B1-Ergebnis',
          en: 'Deutsch-Test für Zuwanderer, B1 result',
        },
        minutes: { lesen: 45, hoeren: 25, schreiben: 30, sprechen: 16 },
        passPercent: 60,
        modular: false,
        costEur: '0 im Integrationskurs, sonst ca. 130',
        url: 'https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/Abschlusspruefung/abschlusspruefung-node.html',
        notes: [
          {
            de: 'Skaliert von A2 bis B1: das Ergebnis sagt pro Fertigkeit, ob du A2 oder B1 erreicht hast.',
            en: 'Scaled from A2 to B1: the result says per skill whether you reached A2 or B1.',
          },
          {
            de: 'Sprechen Teil 1 ist ein Gespräch über dich selbst, Teil 2 eine Bildbeschreibung, Teil 3 gemeinsames Planen.',
            en: 'Sprechen part 1 is a conversation about you, part 2 describing a picture, part 3 planning together.',
          },
          {
            de: 'Für die Einbürgerung zählt B1 aus dem DTZ genauso wie ein Goethe- oder telc-Zertifikat.',
            en: 'For naturalisation, B1 from the DTZ counts the same as a Goethe or telc certificate.',
          },
          CHECK_OFFICIAL,
        ],
      },
    },
  },
];

export const PROVIDERS_BY_KEY = Object.fromEntries(PROVIDERS.map((p) => [p.key, p])) as Record<
  ExamProvider,
  ProviderInfo
>;

/**
 * The exam facts for one body at one level, flattened for display.
 *
 * Not every body certifies every level - the DTZ stops at B1 - so this falls
 * back to the body's nearest level rather than returning nothing: a learner who
 * picked the DTZ and then moved up to B2 should see a B2 paper, not an empty
 * screen, and `level` on the result tells the caller which paper they got.
 */
export function examFor(key: ExamProvider, level: Level): ExamInfo {
  const provider = PROVIDERS_BY_KEY[key];
  const actual = provider.exams[level] ? level : provider.levels[provider.levels.length - 1];
  const facts = provider.exams[actual];
  if (!facts) throw new Error(`${key} has no exam for ${actual}`);
  return { ...facts, key, body: provider.body, who: provider.who, level: actual };
}

/** The bodies that certify a given level. */
export function providersFor(level: Level): ProviderInfo[] {
  return PROVIDERS.filter((p) => p.levels.includes(level));
}

/** Links that are useful whichever certificate you sit. */
export const OFFICIAL = {
  /** What each CEFR level means, in the Council of Europe's own words. */
  cefr: 'https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale',
  /** Where B1 is required for naturalisation. */
  einbuergerung:
    'https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Einbuergerung/einbuergerung-node.html',
  /** BAMF page on the Integrationskurs final exam. */
  dtzInfo:
    'https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/Abschlusspruefung/abschlusspruefung-node.html',
} as const;

/**
 * The examining bodies' own free practice material and word lists, per level.
 *
 * These are the one thing this app cannot replace: real past papers, set by the
 * people who will mark yours. The app says so on the Exam tab rather than
 * quietly hoping you do not notice.
 */
export const SAMPLES: Record<Level, { wordlist: string | null; practice: string }> = {
  A1: {
    wordlist: 'https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_A1_Wortliste.pdf',
    practice: 'https://www.goethe.de/de/spr/kup/prf/prf/gzsd1/ueb.html',
  },
  A2: {
    wordlist: 'https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_A2_Wortliste.pdf',
    practice: 'https://www.goethe.de/de/spr/kup/prf/prf/gza2/ueb.html',
  },
  B1: {
    wordlist: 'https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_B1_Wortliste.pdf',
    practice: 'https://www.goethe.de/de/spr/kup/prf/prf/gzb1/ueb.html',
  },
  // Goethe publishes no word list above B1: at B2 and C1 the expectation is
  // that you read widely rather than work through a list.
  B2: { wordlist: null, practice: 'https://www.goethe.de/de/spr/kup/prf/prf/gzb2/ueb.html' },
  C1: { wordlist: null, practice: 'https://www.goethe.de/de/spr/kup/prf/prf/gzc1/ueb.html' },
};

/** Total sitting time for one exam, in minutes. */
export function totalMinutes(exam: { minutes: Record<ModuleKey, number> }): number {
  return exam.minutes.lesen + exam.minutes.hoeren + exam.minutes.schreiben + exam.minutes.sprechen;
}
