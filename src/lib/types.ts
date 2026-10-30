/**
 * The CEFR levels the app covers.
 *
 * Every piece of study material carries the level at which it is first taught,
 * never the levels at which it is still useful - a word learnt at A1 is still
 * needed at C1, and duplicating it would schedule it twice. "Studying B1"
 * therefore means B1's own material, optionally stacked on everything below it;
 * that choice lives in `Settings.includeLower`.
 */
export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

export const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1'];

/** Index of a level, for "this level and everything below" comparisons. */
export function levelRank(level: Level): number {
  return LEVELS.indexOf(level);
}

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
  level: Level;
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
  /** The levels this theme actually holds words for, lowest first. */
  levels: Level[];
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
  level: Level;
  /** Roughly where this sits within its level, used only for ordering. */
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
  level: Level;
  kind: 'grammar' | 'vocab';
};

/** Lesen Teil 1-5 and Hören Teil 1-4 share this shape. */
export type ComprehensionTask = {
  id: string;
  module: 'lesen' | 'hoeren';
  teil: number;
  level: Level;
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
  level: Level;
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
  level: Level;
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

/**
 * One "can-do" statement: the CEFR descriptors, rewritten in the first person
 * and small enough to tick off in a sitting.
 *
 * These are the study goals. A percentage tells you how much you have covered;
 * a can-do tells you what you can now actually do with the language, which is
 * the only thing an exam board is measuring.
 */
export type CanDo = {
  id: string;
  text: Bilingual;
  /** Which skill it belongs to, so the UI can group them. */
  area: AreaKey;
};

/**
 * A unit of the course: the smallest chunk with a goal attached.
 *
 * A unit is a view over material that already exists rather than a container
 * for it. It names the vocabulary themes, grammar topics and exam tasks it
 * draws on, so a word belongs to exactly one theme and one level however many
 * units point at it.
 */
export type Unit = {
  key: string;
  level: Level;
  /** Position within the level, 1-based. */
  n: number;
  title: Bilingual;
  icon: string;
  /** One line on why this unit exists. */
  blurb: Bilingual;
  canDos: CanDo[];
  /** Vocabulary themes this unit draws its words from. */
  themes: string[];
  /** Grammar topic keys taught here. */
  grammar: string[];
  /** Ids of exam tasks that practise this unit, any module. */
  tasks: string[];
};

export type LevelInfo = {
  key: Level;
  /** The name a learner would recognise, e.g. "Breakthrough". */
  name: Bilingual;
  /** What you can do by the end of it, in one sentence. */
  summary: Bilingual;
  color: string;
  /** Words a learner is normally expected to know by the end of this level. */
  targetWords: number;
  /** The certificates sat at this level, as names. */
  certificates: string[];
};

/** The examining bodies a learner in Germany is likely to sit. */
export type ExamProvider = 'goethe' | 'telc' | 'dtz';

/**
 * One sitting of one certificate at one level, as published.
 *
 * Timings and fees are the volatile part of an exam, and they differ per level
 * far more than the format does - Goethe A1 is a single 60-minute paper, Goethe
 * C1 is most of a day. So the facts live per level, and the app links to the
 * examining body's own page rather than claiming these numbers are guaranteed.
 */
export type ExamFacts = {
  /** The certificate's own name, e.g. "Goethe-Zertifikat A1 (Start Deutsch 1)". */
  name: string;
  full: Bilingual;
  /** Minutes per module, as published. */
  minutes: Record<ModuleKey, number>;
  /** Percentage needed to pass. */
  passPercent: number;
  /** Whether the four modules can be sat and retaken separately. */
  modular: boolean;
  costEur: string;
  url: string;
  notes: Bilingual[];
};

/** An examining body, with the exam it offers at each level it covers. */
export type ProviderInfo = {
  key: ExamProvider;
  /** The body's short name, e.g. "Goethe-Institut". */
  body: string;
  /** Who normally takes this one, in one line. */
  who: Bilingual;
  /** The levels this body certifies; DTZ, for instance, stops at B1. */
  levels: Level[];
  exams: Partial<Record<Level, ExamFacts>>;
};

/** A provider's facts for one level, flattened for the screens that show them. */
export type ExamInfo = ExamFacts & {
  key: ExamProvider;
  body: string;
  who: Bilingual;
  level: Level;
};


export type Meta = {
  themes: VocabTheme[];
  levels: LevelInfo[];
  units: Unit[];
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
    articles: number;
    /** Everything the spaced-repetition schedule tracks. */
    reviewable: number;
  };
  /** The same counts again, per level, for the level picker. */
  byLevel: Record<Level, { vocab: number; drills: number; grammar: number; tasks: number; articles: number }>;
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
  /** The level being studied. Everything the app offers is scoped to it. */
  level: Level;
  /**
   * Whether study sessions also draw on the levels below the current one.
   * On by default: vocabulary does not expire when you pass a certificate, and
   * a B1 learner who has forgotten "der Kühlschrank" still needs it.
   */
  includeLower: boolean;
  /** Set once the placement test has been taken, so it is offered only once. */
  placed: boolean;
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


/* ------------------------------------------------------------- magazine */

/**
 * One run of article text.
 *
 * The article is stored as tokens rather than as a string with markup, because
 * the parsing happens once in the build script where a word that does not
 * resolve fails the build. Doing it in the app would mean a typo in an article
 * showing up as an untappable word a learner never gets an explanation for.
 */
export type Token =
  | { t: 'text'; s: string }
  /** A word with a dictionary entry behind it; `s` is the inflected surface form. */
  | { t: 'word'; s: string; id: string }
  /** A phrase that illustrates a grammar topic; `key` is the topic. */
  | { t: 'grammar'; s: string; key: string };

export type Article = {
  id: string;
  level: Level;
  /** Vocabulary theme, so the magazine can be browsed the way the path is. */
  theme: string;
  title: Bilingual;
  /** One line that says why this is worth reading, shown in the list. */
  teaser: Bilingual;
  /** Realistic reading time, in minutes. */
  minutes: number;
  paragraphs: Token[][];
  /** Plain text per paragraph, for the read-aloud player. */
  spoken: string[];
  /** Comprehension questions, asked after reading. */
  items: Item[];
};

/** A saved answer to a Schreiben task, so drafts survive a reload. */
export type Draft = { text: string; at: number };

export type Progress = {
  cards: Record<string, CardProgress>;
  /** Can-do ids the learner has ticked off. These are claims, not scores. */
  canDos: Record<string, boolean>;
  /** Vocabulary ids saved from the dictionary or an article, id -> epoch ms. */
  saved: Record<string, number>;
  /** Magazine articles read, with the comprehension score if the quiz was sat. */
  articles: Record<string, { at: number; score: number | null }>;
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
