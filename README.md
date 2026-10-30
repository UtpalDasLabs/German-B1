# Deutsch-Trainer — German A1 to C1

A study app for German, from your first sentence to fluent. One codebase, three
targets: **iOS**, **Android** and a **static web app** that deploys to GitHub
Pages.

It is free, works offline and needs no account. Your progress never leaves your
browser: there is no backend, nothing is uploaded, and you can export the whole
lot to a file whenever you like. On the web the app asks once whether it may
send anonymised usage statistics; see **Privacy** below.

It is the sibling of [German-Citizenship-App](https://github.com/UtpalDasLabs/German-Citizenship-App)
and shares its design system and its spaced-repetition engine.

## What is in it

| | A1 | A2 | B1 | B2 | C1 | total |
|---|---|---|---|---|---|---|
| **Words** | 464 | 357 | 642 | 170 | 88 | 1,721 |
| **Grammar topics** | 10 | 9 | 14 | 6 | 4 | 43 |
| **Grammar drills** | 80 | 76 | 98 | 36 | 24 | 314 |
| **Exam tasks** | 5 | 4 | 31 | 4 | 4 | 48 |
| **Magazine articles** | 2 | 2 | 1 | 1 | 1 | 7 |
| **Course units** | 6 | 6 | 8 | 5 | 4 | 29 |

That is **2,035 items on the spaced-repetition schedule**, **98 can-do goals**,
and a **full mock exam at every level** — one task in each of Lesen, Hören,
Schreiben and Sprechen, at A1, A2, B1, B2 and C1.

## Features

- **A course with goals, not just a pile of cards.** Each level has ordered
  units, and each unit leads with what you will be able to do: "I can describe
  my own flat", "I can tell the doctor what is wrong with me". These are the
  CEFR descriptors in the first person, cut down until each is small enough to
  tick off in a sitting. Ticking one awards no XP — the moment a goal pays out
  it becomes worth ticking dishonestly and stops describing anything.
- **A magazine.** Short articles written at a level, where every highlighted
  word opens its dictionary entry over the text and every underlined phrase
  opens the grammar behind it. You never leave the sentence, which is the whole
  point: navigating away to look a word up and navigating back is what makes
  people stop reading German.
- **A placement test** built from the grammar drills themselves, because a
  drill tagged B1 is by construction a question only a B1 learner should get
  right. It places you on a ladder rather than an average, and "I do not know"
  is a first-class answer.
- **A dictionary** over the whole corpus, searchable in German or English, with
  the article, plural, verb forms, an example and pronunciation. Deliberately
  not scoped to your level: a dictionary that hides the word you just met is
  useless exactly when you need it.
- **Three trainers** for the parts of a German word a flashcard lets you believe
  you knew — the article, the plural and the verb forms. They generate questions
  from the corpus and draw distractors from other real entries.
- **Swipe to study** — Tinder-style vocabulary cards. Arrow keys and
  screen-reader rotor actions do the same thing, so nobody is locked out.
- **Genders in colour** — der is blue, die is red, das is green, on every card.
- **Hören without audio files** — the app speaks each listening script with the
  device's own German voice, line by line, a different pitch per speaker, and
  limits you to the number of plays the real exam allows.
- **Honest marking** — Lesen and Hören are scored against an answer key.
  Schreiben and Sprechen cannot be graded by a machine, so the app does not
  pretend to: it gives you the clock, the phrases, a model answer and the
  examiner's criteria as a checklist you apply to your own work. Self-assessed
  scores are labelled as such everywhere they appear.
- **A plan for today** — three things with honest minute figures, derived from
  how many cards are actually due and how long the article actually is. It
  solves the problem every study app has: you open it meaning to study and
  spend the session deciding what to study.
- **Word of the day**, deterministic from the date, so it is the same word all
  day on every device and changes at midnight with nothing stored.
- **Exam facts per level** — pick Goethe, telc or DTZ and the format, timings,
  fees and official links change to match the paper you will actually sit. The
  DTZ stops at B1 and says so.
- **An exam-date study plan** — tell it when your exam is and it works out how
  many items a day you need, or shows the projected ready date for each pace.
- **Progress that survives** — installable as an app, asks the browser for
  durable storage, exports and imports a backup file, and says in plain words
  what would lose your progress.
- **German, English or both**, light and dark, works offline.

## Privacy

Progress stays on the device and there is no account. On the web the app asks
before sending anonymised usage statistics (screens used, task and mock-exam
scores — never answers or anything you write) to Google Analytics. Nothing is
fetched from Google until you allow it, the choice can be changed any time on
the "You" tab, and native builds send nothing. See `src/lib/analytics.ts`.

## Try the web app

The app is served at **https://b1.utpaldas.com**, deployed by Vercel from `main`
(`vercel.json`).

To run it locally:

```bash
npm install
npm run web          # dev server with fast refresh
```

Or build and serve the exact bundle that ships:

```bash
npm run build:web
npx http-server dist -p 8080
```

> The static build uses a base path of `/German-B1` (set in `app.json` under
> `experiments.baseUrl`), which matches the repository name. If you fork this
> repo under a different name, change that value to match, or the CSS and JS
> will 404 on Pages.

## Installing it as an app

There is no app store build and none is needed: the web app installs to a home
screen from the browser. Chromium offers a one-tap install button; on iOS you
get the actual taps (Share → Add to Home Screen), because Safari has never
implemented the install API.

Installing matters for more than convenience. An installed PWA with an active
service worker is treated as far more durable by browsers, which is what stops a
learner's progress being evicted after a few weeks away.

## The study data

Everything in `src/data/` is generated. The source of truth is `data-source/`,
written as terse tuples because a thousand vocabulary entries typed as full
objects is unreviewable:

```
data-source/
  levels.mjs        the five CEFR levels and what each one means
  course.mjs        ordered units per level, with their can-do goals
  magazine.mjs      graded articles with inline word and grammar links
  vocab/
    *.mjs           24 themes, each with the B1 words written first
    levels/         A1, A2, B1, B2, C1 wordlists, merged onto the themes
  grammar/
    a1 a2 b2 c1     per-level topics; zeiten/satzbau/… hold the B1 ones
  exams/
    a1 a2 b2 c1     one Lesen, Hören, Schreiben and Sprechen task each
  reading.mjs       the B1 Lesen tasks, and similarly listening/writing/speaking
```

Rebuild with:

```bash
npm run data
```

### Why levels live where they do

Vocabulary for levels other than B1 is authored **one file per level** rather
than one file per theme. When you add a level, the question you have to answer
is "is this a sensible A1 wordlist?", and that is only answerable with the whole
level in front of you. Splitting it across 24 theme files would make it
unreviewable, which is the same mistake as writing the entries out as full
objects. The index merges the level files onto the themes.

A level tag records where a thing is **first taught**, never where it is still
useful. A word learnt at A1 is still needed at C1; tagging it twice would
schedule it twice and every count in the app would quietly be wrong. Studying a
level therefore means that level's own material, optionally stacked on
everything below it — which is the default, because vocabulary does not expire
when you pass a certificate.

### The build refuses to write

`scripts/build-data.mjs` validates as it goes and **refuses to write** on a
problem. The checks that have each caught real bugs:

- the same word claimed by two themes, or by two levels
- a theme key repeated inside one level file, where JavaScript silently keeps
  the last block and the earlier words vanish with no runtime symptom
- a noun without an article, an answer index out of range, a verb whose
  principal parts are malformed, a checklist with too few rows
- a course unit pointing at a theme, grammar topic or exam task that does not
  exist, or claiming to teach a topic tagged at a different level
- an article linking a word that does not exist, or one tagged above the
  article's own level
- leftover article markup, which otherwise renders as literal brackets in the
  middle of a sentence and nobody notices until a learner reports it

## Architecture

```
app/                 expo-router routes; (tabs)/ is the five-tab shell
src/components/      UI primitives, the swipe deck, the audio player, the
                     shared comprehension runner used by Lesen and Hören
src/lib/             spaced repetition, level scoping, forecasting, speech,
                     the trainers, the placement test, i18n, exam facts
src/store/           two providers: settings and progress, both persisted
src/theme/           design tokens and the light/dark provider
scripts/             data build, icon generation, service-worker stamping
```

Decisions worth knowing about:

**The mock exam is a coordinator, not a container.** Each module already has a
screen that knows how to run its own format and record its own score, so the
exam sends you there and reads the result back out of your recorded attempts.
One implementation of each module instead of two. A paper is all four modules or
none: a level missing a task in any module gets an honest empty state rather
than a half-sat exam that reports a pass on two modules and stays silent about
the other two.

**Articles are stored as tokens, not as strings with markup.** The parsing
happens once in the build script, where a word that does not resolve fails the
build. Doing it in the app would mean a typo shipping as an untappable word a
learner never gets an explanation for.

**Spaced repetition covers words and grammar only.** The readiness percentage is
an honest statement about the scheduled items at your level — it does not
silently fold in an essay you marked yourself. Magazine articles are recorded
outside the module attempts, because an article is not exam format and letting
it into the Lesen trend would make that trend answer a question nobody asked.

**The trainers grade the vocabulary card they came from.** The swipe deck
already shows the article and the plural and asks you to grade yourself on the
whole entry, so the trainers are the same question marked by the app instead of
by you.

## What this app deliberately does not do

- **No AI tutor, no AI writing correction, no pronunciation scoring.** All three
  need either a server, an API key, or sending your voice to a vendor. The
  self-assessment checklists are the honest local substitute, and they are built
  from the criteria a real examiner uses.
- **No accounts, no sync, no leaderboards.** These require a backend that would
  hold your work. Progress moves between devices as a file you export and
  import, never through a server.

## Not affiliated

This is an independent study app. It is not affiliated with, endorsed by, or a
product of the Goethe-Institut, telc gGmbH, g.a.s.t. or the BAMF. All texts,
names, companies, studies and exam tasks in it were written for this app. Exam
formats, timings and fees change — the official pages linked from the Exam tab
are the source of truth, not this README.

## Licence

Code and content in this repository are provided as-is for personal study.
