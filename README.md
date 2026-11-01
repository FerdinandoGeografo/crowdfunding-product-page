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
  - [Known trade-offs](#known-trade-offs)
  - [Getting started](#getting-started)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
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
- [React 19](https://react.dev/) - JS library, with the [React Compiler](https://react.dev/learn/react-compiler)
- [TypeScript](https://www.typescriptlang.org/) - JS superset, in strict mode
- [Vite](https://vite.dev/) - Frontend build tool
- [Tailwind CSS 4](https://tailwindcss.com/) - For styles, with the palette as `@theme` tokens and two custom utilities in `src/index.css`
- [shadcn/ui](https://ui.shadcn.com/) on [Base UI](https://base-ui.com/) - Button, Card, Dialog, Popover, Progress, Toggle, Radio Group, Field and Input, trimmed down to the styles the page uses
- [class-variance-authority](https://cva.style/) - Size variants of the button and of the units counter
- An inline SVG sprite - `IconSprite` defines the icons once as `<symbol>`s and `Icon` draws them with `<use>`
- Commissioner as a self-hosted variable font (latin subset, preloaded)
- A preloaded hero image served as AVIF, with the JPEG as fallback

### How it works

- **State.** `ProductProvider` holds the campaign in a `useReducer`, with a single `pledge` action. The reducer validates it with the same `isValidPledge` rule the form uses: a reward must have stock left (`isOutOfStock`) and the amount must reach its minimum. The no-reward pledge never changes stock. The bookmark is local state of `ProductHeader`, the only component that reads it.
- **Contexts.** Each context lives in its own `*.context.ts` file, its provider in a `*Provider.tsx` file and its reader in a hook (`useProduct`, `useModal`). `ModalProvider` knows which dialog is open, which reward was picked and which button opened the flow.
- **Pledge flow.** "Back this project" and "Select Reward" open the same controlled dialog; the reward picked from a card arrives preselected. Confirming a pledge opens the thank-you dialog nested inside it, so only one backdrop is drawn. Closing it with "Got it!" or Escape returns focus to the button that started the flow.
- **Form.** Each pledge option is a radio named after its reward and described by its minimum, stock and text. The amount field appears only under the selected option, starts at the reward's minimum and is read with `FormData` on submit, so typing does not re-render the form. The field is described by the "Pledge $X or more" label, and native validation blocks empty or too-low amounts.
- **Accessibility.** Every control shows where the focus is: buttons, radios and the amount field get a ring with at least 3:1 contrast (lower only on the faded sold-out card), the navigation links an underline or a colour change. The mobile menu and the dialogs close with Escape and give focus back to their trigger, arrow keys move between pledge options and skip the one out of stock, and all transitions stop when reduced motion is requested.
- **Performance.** The hero image is a CSS background, so `index.html` preloads the right one for each layout. It ships as AVIF (about half the JPEG's weight) behind an `@supports` check, the header logo declares its size, and `vercel.json` caches the hashed JS and CSS for a year.
- **Components.** shadcn/ui primitives live in `src/components/ui` with lowercase names (`button.tsx`); app components sit in `src/components` with PascalCase names (`RewardCard.tsx`).

### Known trade-offs

- **Colour contrast.** The page keeps the challenge's palette. The grey body text (`#7a7a7a`) reaches 4.29:1 on white, and the primary teal (`#3cb3ab`) reaches 2.55:1, both as text and behind white button labels, under the 4.5:1 that WCAG AA asks for small text. The card of the sold-out reward is faded to half opacity, as in the design. These are the only accessibility issues axe-core and Lighthouse report.
- **Client-side rendering.** The page is a single React bundle with no prerendering, so content appears once the JavaScript has run. With Lighthouse's mobile network throttling, the first and the largest paint arrive together at about 2.3s.
- **Navigation.** The three header links are placeholders (`href="#"`), since the page has no sections to point them to.

### Getting started

Requires Node.js 24.

```bash
npm install
npm run dev     # start the dev server
npm run build   # type-check and build for production
npm run preview # serve the production build
npm run lint    # run ESLint
```

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

My first version also had `fetchpriority="high"`. Lighthouse's simulated mobile run then reported a worse LCP (2257ms → 2406ms), because the image competed with the JavaScript bundle for bandwidth. Without the hint the simulated LCP stayed the same, and a run with real network throttling went from 2959ms to 2420ms.

#### A CSS fallback that survives the build

Tailwind's CSS pipeline (Lightning CSS) dropped a plain `url()` declared before `image-set()` in the same rule. That would have left browsers without `type()` support with no hero at all. Moving the AVIF version into `@supports` keeps the JPEG as a real fallback:

```css
@utility bg-hero {
  background-image: url("/image-hero-mobile.jpg");

  @supports (background-image: image-set("/" type("image/avif"))) {
    background-image: image-set(
      "/image-hero-mobile.avif" type("image/avif"),
      "/image-hero-mobile.jpg" type("image/jpeg")
    );
  }
}
```

#### Counting renders instead of guessing

A throwaway `<Profiler>` patch counted renders per component in five scenarios. It showed where state lived too high:

- The amount was state in the form, so three keystrokes caused 27 renders across the form, its four options and their children. An uncontrolled input read on submit brought that to zero. Because the field only renders under the selected option, switching reward remounts it and resets it to the new minimum without extra code.
- The bookmark was part of the product state, so toggling it re-rendered every component that read the product (14 renders). As local state of `ProductHeader` it costs one render with the React Compiler.
- The React Compiler cut the six measured scenarios from 82 to 55 renders, but it cannot skip components that read a context that changed: opening the dialog still re-renders the four components that read `ModalContext` (the header card and the three reward cards), even though they only need its stable `openBackProject` function.

#### Small details

- Rest-destructuring a discriminated union (`{ kind, ...attrs }`) loses the narrowing, so `attrs.unitsLeft` stops type-checking. Narrowing on the whole object (`option.kind === "paid"`) keeps it.
- Fast Refresh needs component files to export only components, so contexts and hooks live in their own files.
- Base UI's radio group moves the selection on arrow keys and does not treat `<input type="number">` as a text field, so the amount input inside a pledge card has to keep arrow keys to itself.
- An inset ring on top of a 1px border gives the selected card a 2px outline without shifting its content.
- The 20px menu button already offers a 32px target: its hover circle is a child of the button, and clicks on it reach the button.
- Base UI infers the radio group's value type from `value`, so `onValueChange={setSelectedId}` type-checks without a wrapper.

### Continued development

- Discuss the palette with whoever owns the design: a teal and a grey a few shades darker would pass WCAG AA with little visual change.
- Prerender the page at build time, so the content does not wait for the JavaScript bundle.
- Turn the measurement scripts I ran by hand (keyboard paths, axe-core, render counts) into automated tests.

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

- **Migration**: auditing the hand-made components and moving them to shadcn/ui one commit at a time. The arrow-key conflict in the pledge form and a mobile wrap of the amount row were caught by scripted runs in headless Chrome and fixed before committing.
- **Pre-release pass**: a baseline first (Lighthouse, bundle size, render counts, axe-core, keyboard paths at 375px and 1440px), then an audit table with measured evidence and a plan. I chose which items to apply: for example, I kept the challenge's colours and placeholder links, and turned down lazy-loading the dialog because it saved only about 9kB gzipped.
- **Checks**: after each change, lint, a production build, the keyboard and axe-core runs again, and a pixel comparison against the challenge's screenshots. Performance changes were kept only when they improved a number. All the measurement scripts stayed outside the repository.

## Author

- GitHub - [@FerdinandoGeografo](https://github.com/FerdinandoGeografo)
- Frontend Mentor - TODO
- LinkedIn - [@FerdinandoGeografo](https://www.linkedin.com/in/ferdinandogeografo/)
