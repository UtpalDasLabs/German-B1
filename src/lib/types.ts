/** The six areas the app studies: two foundations plus the four exam modules. */
export type AreaKey = 'wortschatz' | 'grammatik' | 'lesen' | 'hoeren' | 'schreiben' | 'sprechen';

/** The four modules that actually appear on the certificate. */
export type ModuleKey = 'lesen' | 'hoeren' | 'schreiben' | 'sprechen';

export const MODULE_KEYS: ModuleKey[] = ['lesen', 'hoeren', 'schreiben', 'sprechen'];

export type Bilingual = { de: string; en: string };

export type PartOfSpeech = 'noun' | 'verb' | 'adj' | 'adv' | 'phrase' | 'conj' | 'prep';

export type VocabEntry = {
  id: string;
  /** Headword without the article; nouns carry theirs in `article`. */
  de: string;
  article: 'der' | 'die' | 'das' | null;
  /** Plural ending as it is normally taught, e.g. "-en" or "-¨e". */
  plural: string | null;
  pos: PartOfSpeech;
  en: string;
  theme: string;
  example: Bilingual;
  /**
   * Principal parts for strong and irregular verbs, in the form German
   * classrooms drill them: "fährt · fuhr · ist gefahren".
   */
  forms: string | null;
};

export type VocabTheme = {
  key: string;
  label: Bilingual;
  icon: string;
  color: string;
  /** Which exam module this vocabulary pays off in first. */
  payoff: Bilingual;
};

export type GrammarTable = {
  caption: Bilingual;
  head: string[];
  rows: string[][];
};

export type GrammarTopic = {
  key: string;
  title: Bilingual;
  /** One line, shown in the list. */
  summary: Bilingual;
  icon: string;
  /** Roughly where this sits in a B1 course, used only for ordering. */
  order: number;
  body: { de: string[]; en: string[] };
  tables: GrammarTable[];
  examples: { de: string; en: string }[];
  /** The mistakes learners actually make, stated as a contrast. */
  pitfalls: { wrong: string; right: string; why: Bilingual }[];
};

/**
 * A single multiple-choice item. Used for grammar drills, vocabulary checks
 * and every comprehension question in Lesen and Hören, so one component can
 * render all of them.
 */
export type Item = {
  id: string;
  /** The question, or a sentence with a gap written as "___". */
  prompt: string;
  /** English gloss of the prompt, where the prompt itself is German. */
  promptEn: string | null;
  options: string[];
  /** Index into `options`. */
  answer: number;
  why: Bilingual;
};

export type Drill = Item & {
  /** Grammar topic key, or vocabulary theme key. */
  topic: string;
  kind: 'grammar' | 'vocab';
};

/** Lesen Teil 1-5 and Hören Teil 1-4 share this shape. */
export type ComprehensionTask = {
  id: string;
  module: 'lesen' | 'hoeren';
  teil: number;
  title: Bilingual;
  instructions: Bilingual;
  /** Roughly how long this part takes in the real exam. */
  minutes: number;
  items: Item[];
};

export type ReadingTask = ComprehensionTask & {
  module: 'lesen';
  texts: { heading: string | null; body: string }[];
};

export type ListeningTask = ComprehensionTask & {
  module: 'hoeren';
  /** Spoken by the device voice; `speaker` drives pitch so turns are distinct. */
  script: { speaker: string; text: string }[];
  /** How many times the recording is played in the real exam. */
  plays: 1 | 2;
  /** Shown only after answering - hearing it is the exercise. */
  transcriptHidden: boolean;
};

export type PhraseGroup = { label: Bilingual; items: string[] };

export type WritingTask = {
  id: string;
  teil: number;
  title: Bilingual;
  /** The scenario, in German as the exam states it. */
  situation: string;
  situationEn: string;
  /** Leitpunkte - the content points that must all be covered. */
  bullets: string[];
  register: 'formell' | 'informell';
  minWords: number;
  minutes: number;
  /** A model answer at a solid B1 level, not a perfect one. */
  model: string;
  /** Self-assessment rubric; each tick is worth the same. */
  checklist: Bilingual[];
  phrases: PhraseGroup[];
};

export type SpeakingTask = {
  id: string;
  teil: number;
  title: Bilingual;
  situation: string;
  situationEn: string;
  bullets: string[];
  /** Preparation time before you speak, in minutes. */
  prepMinutes: number;
  minutes: number;
  model: string;
  checklist: Bilingual[];
  phrases: PhraseGroup[];
};

/** The three B1 certificates a learner in Germany is likely to sit. */
export type ExamProvider = 'goethe' | 'telc' | 'dtz';

export type ProviderInfo = {
  key: ExamProvider;
  name: string;
  full: Bilingual;
  /** Who normally takes this one, in one line. */
  who: Bilingual;
  modular: boolean;
  /** Minutes per module, as published. */
  minutes: Record<ModuleKey, number>;
  /** Percentage needed to pass each module. */
  passPercent: number;
  costEur: string;
  url: string;
  notes: Bilingual[];
};

export type Meta = {
  themes: VocabTheme[];
  areas: Record<AreaKey, { label: Bilingual; icon: string; color: string }>;
  providers: ProviderInfo[];
  counts: {
    vocab: number;
    drills: number;
    grammar: number;
    reading: number;
    listening: number;
    writing: number;
    speaking: number;
    /** Everything the spaced-repetition schedule tracks. */
    reviewable: number;
  };
};

export type Language = 'de' | 'en' | 'both';
export type Appearance = 'system' | 'light' | 'dark';

/** Daily XP target. Named so the UI can show intent, not just a number. */
export type GoalId = 'casual' | 'regular' | 'serious' | 'intense';

export type Settings = {
  language: Language;
  appearance: Appearance;
  haptics: boolean;
  goal: GoalId;
  /** Which certificate you are working towards; changes the exam facts shown. */
  provider: ExamProvider;
  /** ISO yyyy-mm-dd of the planned exam date, or null if undecided. */
  examDate: string | null;
  /** Listening playback rate. Slower is a legitimate crutch early on. */
  slowAudio: boolean;
  /** Set once the intro has been seen, so it shows only on a first visit. */
  onboarded: boolean;
};

/**
 * Leitner-box scheduling state for a single reviewable item.
 * Box 0 = brand new, box 5 = mastered. A correct answer promotes, a wrong one
 * sends the card back to box 0.
 */
export type CardProgress = {
  box: number;
  seen: number;
  correct: number;
  /** epoch ms of the last review */
  last: number;
  /** epoch ms this card becomes due again */
  due: number;
};

/** One sitting of a practice module, scored out of 100 like the real thing. */
export type ModuleAttempt = {
  at: number;
  module: ModuleKey;
  /** 0-100. */
  score: number;
  /** True when the learner scored themselves against the checklist. */
  selfAssessed: boolean;
  /** Which task was sat, so the UI can avoid repeating it immediately. */
  taskId: string;
};

export type ExamResult = {
  at: number;
  /** 0-100 per module; a module not sat is absent. */
  scores: Partial<Record<ModuleKey, number>>;
  /** Passed means every module sat reached the provider's pass mark. */
  passed: boolean;
  /** seconds actually used */
  duration: number;
};

/** A saved answer to a Schreiben task, so drafts survive a reload. */
export type Draft = { text: string; at: number };

export type Progress = {
  cards: Record<string, CardProgress>;
  attempts: ModuleAttempt[];
  exams: ExamResult[];
  drafts: Record<string, Draft>;
  /** yyyy-mm-dd of the last day anything was studied */
  lastStudyDay: string | null;
  streak: number;
  bestStreak: number;
  /** Lifetime XP. */
  xp: number;
  /** XP earned on `xpDay`; resets when the day rolls over. */
  xpToday: number;
  xpDay: string | null;
  /** yyyy-mm-dd for each day the daily goal was met, newest first, capped. */
  goalDays: string[];
};
