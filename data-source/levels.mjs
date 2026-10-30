/**
 * The five CEFR levels the app teaches, with the facts a learner actually
 * decides on: what they will be able to do, roughly how many words that takes,
 * and which certificate sits at the end of it.
 *
 * `targetWords` is the figure the examining bodies publish for their own
 * wordlists, cumulative. It is here so the app can say "you know 410 of the
 * ~650 words an A1 candidate is expected to have" rather than inventing a
 * percentage out of its own catalogue.
 */
export const LEVEL_INFO = [
  {
    key: 'A1',
    name: { de: 'Anfänger', en: 'Beginner' },
    summary: {
      de: 'Sich vorstellen, einkaufen, nach dem Weg fragen. Einfache Sätze über sich selbst.',
      en: 'Introduce yourself, shop, ask directions. Simple sentences about yourself.',
    },
    color: '#18B98A',
    targetWords: 650,
    certificates: ['Goethe-Zertifikat A1 (Start Deutsch 1)', 'telc Deutsch A1'],
  },
  {
    key: 'A2',
    name: { de: 'Grundlagen', en: 'Elementary' },
    summary: {
      de: 'Über Alltag, Arbeit und Vergangenheit sprechen. Termine machen, sich beschweren.',
      en: 'Talk about daily life, work and the past. Make appointments, complain.',
    },
    color: '#2BB3F3',
    targetWords: 1300,
    certificates: ['Goethe-Zertifikat A2', 'telc Deutsch A2'],
  },
  {
    key: 'B1',
    name: { de: 'Selbstständig', en: 'Independent' },
    summary: {
      de: 'Meinungen begründen, erzählen, mit Behörden umgehen. Das Niveau für Einbürgerung und Ausbildung.',
      en: 'Justify opinions, tell a story, deal with officialdom. The level for naturalisation and training.',
    },
    color: '#FF9F1C',
    targetWords: 2400,
    certificates: ['Goethe-Zertifikat B1', 'telc Deutsch B1', 'Deutsch-Test für Zuwanderer'],
  },
  {
    key: 'B2',
    name: { de: 'Fortgeschritten', en: 'Upper intermediate' },
    summary: {
      de: 'Abstrakt diskutieren, argumentieren, Fachtexte lesen. Das Niveau für Studium und viele Berufe.',
      en: 'Discuss abstractly, argue a case, read specialist texts. The level for university and many professions.',
    },
    color: '#A472F0',
    targetWords: 4000,
    certificates: ['Goethe-Zertifikat B2', 'telc Deutsch B2'],
  },
  {
    key: 'C1',
    name: { de: 'Kompetent', en: 'Advanced' },
    summary: {
      de: 'Fließend und differenziert, auch bei komplexen Themen. Nuancen, Stil, Ironie.',
      en: 'Fluent and nuanced, even on complex topics. Register, style, irony.',
    },
    color: '#F45D9C',
    targetWords: 6000,
    certificates: ['Goethe-Zertifikat C1', 'telc Deutsch C1 Hochschule'],
  },
];
