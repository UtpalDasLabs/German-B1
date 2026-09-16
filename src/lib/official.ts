import type { ProviderInfo } from './types';

/**
 * The three B1 certificates a learner in Germany realistically sits, with the
 * published shape of each exam.
 *
 * Formats here are the stable kind - how many parts, roughly how long, what
 * has to be produced. Fees are given as ranges because every test centre sets
 * its own, and the app says out loud that the centre's own page is the source
 * of truth rather than pretending these numbers are guaranteed.
 *
 * This app is independent. It is not affiliated with, endorsed by, or a
 * product of the Goethe-Institut, telc gGmbH, g.a.s.t. or the BAMF.
 */
export const PROVIDERS: ProviderInfo[] = [
  {
    key: 'goethe',
    name: 'Goethe-Zertifikat B1',
    full: {
      de: 'Goethe-Zertifikat B1 (Zertifikat Deutsch)',
      en: 'Goethe-Zertifikat B1 (Zertifikat Deutsch)',
    },
    who: {
      de: 'Der Standard für Studium, Arbeit und die Einbürgerung. Weltweit anerkannt.',
      en: 'The standard for study, work and naturalisation. Recognised worldwide.',
    },
    modular: true,
    minutes: { lesen: 65, hoeren: 40, schreiben: 60, sprechen: 15 },
    passPercent: 60,
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
    ],
  },
  {
    key: 'telc',
    name: 'telc Deutsch B1',
    full: { de: 'telc Deutsch B1 (Zertifikat Deutsch)', en: 'telc Deutsch B1 (Zertifikat Deutsch)' },
    who: {
      de: 'Häufig an Volkshochschulen und Sprachschulen. Gleichwertig anerkannt.',
      en: 'Common at Volkshochschulen and language schools. Equally recognised.',
    },
    modular: false,
    minutes: { lesen: 90, hoeren: 30, schreiben: 30, sprechen: 15 },
    passPercent: 60,
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
    ],
  },
  {
    key: 'dtz',
    name: 'DTZ',
    full: {
      de: 'Deutsch-Test für Zuwanderer (A2-B1)',
      en: 'Deutsch-Test für Zuwanderer (A2-B1)',
    },
    who: {
      de: 'Die Prüfung am Ende des Integrationskurses. Für das Zertifikat Integrationskurs brauchst du B1.',
      en: 'The exam at the end of the Integrationskurs. The course certificate needs B1.',
    },
    modular: false,
    minutes: { lesen: 45, hoeren: 25, schreiben: 30, sprechen: 16 },
    passPercent: 60,
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
    ],
  },
];

export const PROVIDERS_BY_KEY = Object.fromEntries(PROVIDERS.map((p) => [p.key, p])) as Record<
  ProviderInfo['key'],
  ProviderInfo
>;

/** Links that are useful whichever certificate you sit. */
export const OFFICIAL = {
  /** The Goethe-Institut's own free practice material. */
  goetheSample: 'https://www.goethe.de/de/spr/kup/prf/prf/gzb1/ueb.html',
  /** telc's free mock papers. */
  telcSample: 'https://www.telc.net/pruefungsteilnehmende/sprachpruefungen/pruefungen/detail/telc-deutsch-b1.html',
  /** BAMF page on the Integrationskurs final exam. */
  dtzInfo:
    'https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Integrationskurse/Abschlusspruefung/abschlusspruefung-node.html',
  /** The official word list the Goethe B1 vocabulary is drawn from. */
  wordlist: 'https://www.goethe.de/pro/relaunch/prf/de/Goethe-Zertifikat_B1_Wortliste.pdf',
  /** What B1 means, in the Council of Europe's own words. */
  cefr: 'https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale',
  /** Where B1 is required for naturalisation. */
  einbuergerung:
    'https://www.bamf.de/DE/Themen/Integration/ZugewanderteTeilnehmende/Einbuergerung/einbuergerung-node.html',
} as const;

/** Total sitting time for one provider, in minutes. */
export function totalMinutes(provider: ProviderInfo): number {
  return provider.minutes.lesen + provider.minutes.hoeren + provider.minutes.schreiben + provider.minutes.sprechen;
}
