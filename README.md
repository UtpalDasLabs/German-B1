# B1-Trainer — Zertifikat Deutsch B1

A study app for the German B1 exam (*Goethe-Zertifikat B1*, *telc Deutsch B1*,
*Deutsch-Test für Zuwanderer*). One codebase, three targets: **iOS**, **Android**
and a **static web app** that deploys to GitHub Pages.

It is the sibling of [German-Citizenship-App](https://github.com/UtpalDasLabs/German-Citizenship-App)
and shares its design system, its spaced-repetition engine and its offline-first
approach — but where that app studies a fixed catalogue of 460 questions, B1 has
no catalogue. It has four modules, and this app practises all four.

## What is in it

| | |
|---|---|
| **931 words** | 22 themes, each with article, plural or verb forms, an English gloss and a real sentence |
| **166 grammar drills** | one gap, four options, an explanation every single time |
| **22 grammar topics** | written explanations, conjugation tables, and the mistakes people actually make |
| **8 Lesen tasks** | all five Teil formats: blog post, press texts, small ads, opinions, rules |
| **6 Hören tasks** | all four Teil formats, spoken aloud by the device — no audio files needed |
| **9 Schreiben tasks** | informal email, forum post, formal email — with model answers and a marking checklist |
| **8 Sprechen tasks** | planning together, presentation, feedback — with prep clock and phrase banks |

That is **1,097 items on the spaced-repetition schedule** plus **31 full exam
tasks**.

## Features

- **Swipe to study** — Tinder-style vocabulary cards. Swipe right if you knew
  it, left to see it again. Arrow keys and screen-reader rotor actions do the
  same thing, so nobody is locked out.
- **Genders in colour** — der is blue, die is red, das is green, on every card.
  Costs nothing and sticks.
- **Hören without audio files** — the app speaks each listening script with the
  device's own German voice, line by line, a different pitch per speaker, and
  limits you to the number of plays the real exam allows. The transcript is
  folded away behind a warning, because reading first turns the hardest module
  into the easiest one.
- **Honest marking** — Lesen and Hören are scored against an answer key.
  Schreiben and Sprechen cannot be graded by a machine, so the app does not
  pretend to: it gives you the clock, the phrases, a model answer and the
  examiner's criteria as a checklist you apply to your own work. Self-assessed
  scores are labelled as such everywhere they appear.
- **A plan, not just a pile of cards** — tell it when your exam is and it works
  out how many items a day you need, or shows the projected ready date for each
  pace.
- **Three certificates** — pick Goethe, telc or DTZ and the facts, timings and
  official links change to match. The practice material is shared, because the
  task types overlap almost completely.
- **Built to be motivating** — XP, daily goals, a streak, a winding theme path,
  and Bruno the bear reacting to how you are doing.
- **Progress that survives** — installable as an app, asks the browser for
  durable storage, and can export/import a backup file. It also says in plain
  words what would lose your progress.
- **German, English or both**, light and dark, works offline.

## Try the web app

Once GitHub Pages is enabled (see below), the app is served at:

```
https://<your-github-username>.github.io/German-B1/
```

To run it locally:

```bash
npm install
npm run web          # dev server with fast refresh
```

Or build and serve the exact bundle that ships to Pages:

```bash
npm run build:web
npx http-server dist -p 8080
```

> The static build uses a base path of `/German-B1` (set in `app.json` under
> `experiments.baseUrl`). If you fork this repo under a different name, change
> that value to match, or the CSS and JS will 404 on Pages.

## Installing it as an app

There is no app store build and none is needed: the web app installs to a home
screen from the browser. Chromium offers a one-tap install button; on iOS you
get the actual taps (Share → Add to Home Screen), because Safari has never
implemented the install API.

Installing matters for more than convenience. An installed PWA with an active
service worker is treated as far more durable by browsers, which is what stops a
learner's progress being evicted after a few weeks away.

## Enabling GitHub Pages

The deploy workflow cannot create the Pages site for you — the default
`GITHUB_TOKEN` is not allowed to. Do it once by hand:

**Settings → Pages → Source: GitHub Actions.**

After that every push to `main` builds and deploys automatically.

## The study data

Everything in `src/data/` is generated. The source of truth is `data-source/`,
written as terse tuples because a thousand vocabulary entries typed as full
objects is unreviewable:

```
data-source/
  vocab/            22 theme files, one export per theme
  grammar/          22 topics grouped into five files
  reading.mjs       Lesen tasks
  listening.mjs     Hören scripts and questions
  writing.mjs       Schreiben tasks, models and checklists
  speaking.mjs      Sprechen tasks, models and checklists
```

Rebuild with:

```bash
npm run data
```

The build script validates as it goes and **refuses to write** on a problem: a
noun without an article, an answer index out of range, a verb whose principal
parts are malformed, a checklist with too few rows, or the same word claimed by
two themes. The last one matters most — a duplicate would be scheduled twice and
every count in the app would quietly be wrong.

## Architecture

```
app/                 expo-router routes; (tabs)/ is the five-tab shell
src/components/      UI primitives, the swipe deck, the audio player, the
                     shared comprehension runner used by Lesen and Hören
src/lib/             spaced repetition, forecasting, speech, i18n, exam facts
src/store/           two providers: settings and progress, both persisted
src/theme/           design tokens and the light/dark provider
scripts/             data build, icon generation, service-worker stamping
```

Two decisions are worth knowing about:

**The mock exam is a coordinator, not a container.** Each module already has a
screen that knows how to run its own format and record its own score, so the
exam sends you there and reads the result back out of your recorded attempts.
One implementation of each module instead of two, and a module sat inside the
exam counts exactly like one sat on its own.

**Spaced repetition covers words and grammar only.** The readiness percentage on
the home screen is an honest statement about the 1,097 scheduled items — it does
not silently fold in an essay you marked yourself. The four modules get their
own progress display on the plan screen.

## Not affiliated

This is an independent study app. It is not affiliated with, endorsed by, or a
product of the Goethe-Institut, telc gGmbH, g.a.s.t. or the BAMF. All texts,
names, companies and exam tasks in it were written for this app. Exam formats
and fees change — the official pages linked from the Exam tab are the source of
truth, not this README.

## Licence

Code and content in this repository are provided as-is for personal study.
