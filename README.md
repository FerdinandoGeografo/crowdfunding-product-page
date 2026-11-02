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

![Desktop](./screenshot.jpg)

### Links

- Repository: [GitHub Repository](https://github.com/FerdinandoGeografo/crowdfunding-product-page)
- Live Site URL: [Crowdfunding product page](https://crowdfunding-product-fg.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow with Flexbox
- [React 19](https://react.dev/) - JS library, with the [React Compiler](https://react.dev/learn/react-compiler)
- [TypeScript](https://www.typescriptlang.org/) - JS superset, in strict mode
- [Vite](https://vite.dev/) - Frontend build tool
- [Tailwind CSS 4](https://tailwindcss.com/) - For styles
- [Base UI](https://base-ui.com/) - Accessible primitives, through local [shadcn/ui](https://ui.shadcn.com/) wrappers

### How it works

- **State.** `ProductProvider` holds the campaign, bookmark included, in a `useReducer` with two actions, `pledge` and `toggleBookmark`. The reducer validates a pledge with the same `isValidPledge` rule the form uses: a reward must have stock left (`isOutOfStock`) and the amount must reach its minimum. The no-reward pledge never changes stock. The context exposes the product, `dispatch` and a `toggleBookmark` handler.
- **Contexts.** Each context lives in its own `*.context.ts` file, its provider in a `*Provider.tsx` file and its reader in a hook (`useProduct`, `useModal`). `ModalProvider` knows which dialog is open, which reward was picked and which button opened the flow.
- **Pledge flow.** "Back this project" and "Select Reward" open the same controlled dialog; the reward picked from a card arrives preselected. Confirming a pledge opens the thank-you dialog nested inside it, so only one backdrop is drawn. Closing it with "Got it!" or Escape returns focus to the button that started the flow.
- **Form.** Each pledge option is a radio named after its reward and described by its minimum, stock and text. The amount field appears only under the selected option, starts at the reward's minimum and is read with `FormData` on submit, so typing does not re-render the form. The field is described by the "Pledge $X or more" label, and native validation blocks empty or too-low amounts.
- **Accessibility.** Every control shows where the focus is: buttons, radios and the amount field get a ring, the navigation links an underline or a colour change. The mobile menu and the dialogs close with Escape and give focus back to their trigger, arrow keys move between pledge options and skip the one out of stock, and all transitions stop when reduced motion is requested.
- **Performance.** The hero image is a CSS background, so `index.html` preloads the right one for each layout. It ships as AVIF (about half the JPEG's weight) behind an `@supports` check, the header logo declares its size, and `vercel.json` caches the hashed JS and CSS for a year.
- **Components.** shadcn/ui primitives live in `src/components/ui` with lowercase names (`button.tsx`); app components sit in `src/components` with PascalCase names (`RewardCard.tsx`).

### What I learned

#### Measure the preload before keeping it

The hero is a CSS background inside a component, so the browser only finds it after the JavaScript has rendered the page. A preload per layout fixes the discovery:

```html
<link
  rel="preload"
  href="/image-hero-mobile.avif"
  as="image"
  type="image/avif"
  media="(width < 40rem)"
/>
```

#### Small details

- Rest-destructuring a discriminated union (`{ kind, ...attrs }`) loses the narrowing, so `attrs.unitsLeft` stops type-checking. Narrowing on the whole object (`option.kind === "paid"`) keeps it.
- Fast Refresh needs component files to export only components, so contexts and hooks live in their own files.
- Base UI's radio group moves the selection on arrow keys and does not treat `<input type="number">` as a text field, so the amount input inside a pledge card has to keep arrow keys to itself.
- An inset ring on top of a 1px border gives the selected card a 2px outline without shifting its content.
- The 20px menu button already offers a 32px target: its hover circle is a child of the button, and clicks on it reach the button.
- Base UI infers the radio group's value type from `value`, so `onValueChange={setSelectedId}` type-checks without a wrapper.

### Useful resources

- [Base UI documentation](https://base-ui.com/react/overview/quick-start) - Component APIs for Dialog, Popover, Radio Group, Toggle and Progress.
- [shadcn/ui documentation](https://ui.shadcn.com/docs) - CLI, component sources and the Base UI variants.
- [Tailwind CSS v4 documentation](https://tailwindcss.com/docs) - `@theme` tokens, `@utility` and variants such as `aria-pressed:` and `group-*`.
- [React Compiler](https://react.dev/learn/react-compiler) - What it memoizes and how to set it up with Vite.
- [`<Profiler>`](https://react.dev/reference/react/Profiler) - Measuring renders per scenario.
- [Preload responsive images](https://web.dev/articles/preload-responsive-images) - Preloads with `media` for images chosen by CSS.
- [image-set()](https://developer.mozilla.org/en-US/docs/Web/CSS/image/image-set) - Format fallbacks in a CSS background.
- [Vercel Cache-Control headers](https://vercel.com/docs/headers/cache-control-headers) - Default caching of static files and the recommended header for hashed assets.

### AI Collaboration

I used Claude, through Claude Code, as a pair programmer for the review, the migration and the pre-release checks, while keeping the decisions on my side. I approved the plan and the items to apply, and reviewed the resulting commits.

## Author

- Frontend Mentor - [@FerdinandoGeografo](https://www.frontendmentor.io/profile/FerdinandoGeografo)
- LinkedIn - [@FerdinandoGeografo](https://www.linkedin.com/in/ferdinandogeografo/)
- GitHub - [@FerdinandoGeografo](https://github.com/FerdinandoGeografo/)
