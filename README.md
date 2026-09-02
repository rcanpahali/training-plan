# Gym Program Project

This project is a personal workout tracker. It's a React app that shows your gym program, with exercise images and quick links to YouTube/Google for each move.

Live app: **https://rcanpahali.github.io/training-plan/**

It's built with [Vite](https://vite.dev) and deployed automatically to GitHub Pages via GitHub Actions on every push to `main`.

## What's in this project

- **`plan.md`** — The **source of truth** for the program. A simple markdown file with the exercise list, sets/reps, and alternatives for each day.
- **`src/data/exercises.js`** — The same program data, structured for the app. Kept in sync with `plan.md` by hand.
- **`src/`** — The React app (components, weight-picker logic, lightbox).

## Development

```
npm install
npm run dev
```

## How the app works

- Bottom tab bar to switch between **Day 1 / Day 2 / Day 3**, each tagged with its own color
- Opens on today's day automatically if it's a training day
- Each day shows a list of exercises with a photo, name, sets x reps, and a weight picker with +/- nudge buttons
- Tap any exercise row to open a lightbox (popup) with:
  - A bigger image
  - The exercise name
  - A **YouTube** button (searches YouTube for that exercise)
  - A **Google** button (searches Google for that exercise)
- Images come from weighttraining.guide
- Installable to the home screen as a standalone app (manifest + themed status bar)

## Others

- 3 days per week, strength + aesthetics focus (shoulders and arms).
