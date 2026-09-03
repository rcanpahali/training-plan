# Gym Program Project

This project is a personal workout tracker. It has a simple mobile app (HTML file) that shows your gym program, with exercise images and quick links to YouTube/Google for each move.

## What's in this project

There are 2 files:

1. **`plan.md`** — This is the **source of truth**. It's a simple markdown file with the exercise list, sets/reps, and alternatives for each day.
2. **`index.html`** — This is the **mobile viewer**. It's the file you actually open on your phone. It's generated from the `.md` file above.

## How the HTML viewer works

- Bottom tab bar to switch between **Day 1 / Day 2 / Day 3**
- Each day shows a list of exercises with a small photo, name, and sets x reps
- Tap any exercise row to open a lightbox (popup) with:
  - A bigger image
  - The exercise name
  - A **YouTube** button (searches YouTube for that exercise)
  - A **Google** button (searches Google for that exercise)
- Images come from weighttraining.guide
- Training photos may be similar, no need to perfectly match, https://weighttraining.guide/?s=test search page can be used when

## Important rule: how to make changes

**Never edit the HTML file directly** for exercise changes (adding/removing/changing exercises, sets, reps).

Always do it in this order:

1. Update `gym_program_exercises_only.md` first
2. Regenerate `gym_program.html` from the updated markdown (with correct weighttraining.guide images and YouTube/Google search links)

This keeps the two files in sync and avoids mistakes.
