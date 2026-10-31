# Frontend Mentor - Crowdfunding product page solution

This is a solution to the [Crowdfunding product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [How it works](#how-it-works)
  - [Getting started](#getting-started)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked

### Screenshot

![Desktop view of the crowdfunding product page](./screenshot.jpg)

### Links

- Repository: [github.com/FerdinandoGeografo/crowdfunding-product-page](https://github.com/FerdinandoGeografo/crowdfunding-product-page)
- Solution URL: TODO
- Live Site URL: TODO

## My process

### Built with

- Semantic HTML5 markup and ARIA where native elements are not enough
- Mobile-first workflow with a single `sm` (640px) breakpoint
- [React 19](https://react.dev/) with strict TypeScript
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/), with the design palette as `@theme` tokens
- [shadcn/ui](https://ui.shadcn.com/) on [Base UI](https://base-ui.com/) primitives: Button, Card, Dialog, Progress, Toggle, Radio Group, Field and Input, trimmed down to the styles the design uses
- Commissioner as a self-hosted variable font (latin subset, preloaded)

### How it works

- **State.** `ProductProvider` holds the product in a `useReducer`. The pledge action is validated in the reducer with the same `isValidPledge` rule the form uses: a reward must have stock left and the amount must reach its minimum. The no-reward pledge never changes stock.
- **Pledge flow.** "Back this project" and "Select Reward" open a controlled dialog; the reward picked from a card arrives preselected. Confirming a pledge switches to the thank-you dialog, and closing it returns focus to the button that started the flow.
- **Form.** Each pledge option is a radio in a radio group, named after its reward. The amount panel sits next to the radio's label rather than inside it, the amount can be cleared while typing, and native validation blocks empty or too-low amounts.
- **Components.** shadcn/ui primitives live in `src/components/ui` with lowercase names (`button.tsx`); app components sit in `src/components` with PascalCase names (`RewardCard.tsx`).

### Getting started

```bash
npm install
npm run dev     # start the dev server
npm run build   # type-check and build for production
npm run lint    # run ESLint
```

### What I learned

- Rest-destructuring a discriminated union (`{ kind, ...attrs }`) loses the narrowing, so `attrs.unitsLeft` stops type-checking. Narrowing on the whole object (`option.kind === "paid"`) keeps it.
- Fast Refresh needs component files to export only components, so contexts and hooks live in their own files.
- Base UI's radio group moves the selection on arrow keys and does not treat `<input type="number">` as a text field, so the amount input inside a pledge card has to keep arrow keys to itself.
- An inset ring on top of a 1px border gives the selected card a 2px outline without shifting its content.

### Useful resources

- [Base UI documentation](https://base-ui.com/react/overview/quick-start) - component APIs for Dialog, Radio Group, Toggle and Progress.
- [shadcn/ui documentation](https://ui.shadcn.com/docs) - CLI, component sources and the Base UI variants.
- [Tailwind CSS v4 documentation](https://tailwindcss.com/docs) - `@theme` tokens and variants such as `aria-pressed:` and `group-*`.

### AI Collaboration

- **Tool:** Claude Code.
- **Use:** auditing the existing code, then migrating the hand-made components to shadcn/ui one commit at a time, each commit reviewed and approved before it was made. Changes were checked with lint, a production build, and scripted runs in headless Chrome at 375px and 1440px.
- **Findings from those runs:** the arrow-key conflict in the pledge form and a mobile wrap of the amount row were caught by the browser checks and fixed before committing.

## Author

- GitHub - [@FerdinandoGeografo](https://github.com/FerdinandoGeografo)
- Frontend Mentor - TODO
