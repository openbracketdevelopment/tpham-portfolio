# App audit — 2026-11-07

Validated against a local production build, not the development server.

## Changes

- Removed the unused Font Awesome kit from the shared layout. SVGs already
  supply the icons, so this eliminates its third-party script and follow-up work
  on every route.
- Fonts use `font-display: swap` to keep text readable while loading.
- About's photo uses Next Image with responsive sizes instead of transferring
  the full original to every device.
- Typing stops offscreen and in hidden tabs; reduced motion shows a static label.
- Intro, navigation hover, résumé reveals, and smooth scrolling respect reduced
  motion. Bootstrap also handles unavailable session storage consistently.
- Intro asset timers and load listeners are cleaned up on route disposal.
- Closed mobile navigation is hidden from keyboard traversal; Escape closes it.
  Keyboard focus can reveal the header even after scrolling has hidden it.
- Playground target labels project on resize rather than every frame. Resting
  net geometry no longer uploads identical positions every frame.

## Validation

- Production build and strict TypeScript checks passed.
- 28 routes × 6 widths (320, 390, 768, 1024, 1440, 2240) passed: no horizontal
  overflow or loaded broken images; card sizing, featured order, metadata,
  sitemap, PDF download integrity, and expected 404s passed.
- Delayed-asset loader gate, session completion, contact destinations, scroll
  direction, About contrast, Escape, and reduced-motion regressions passed.
- Fixed-step physics passed at 30/60/120 fps, including energy loss, settling,
  and ballistic endpoints. Browser touch misses, successful landings, and reset
  cancellation passed for all three projectiles.
- CPU-throttled touch Chrome checks passed for responsive home images,
  offscreen marquee pausing, typing, and omission of the SVG filter tree.
- Résumé PDF content/reading-order/link checks passed (three pages).
- npm audit, including development dependencies, reported zero known advisories.
  This is a point-in-time advisory check, not a security guarantee.

## Remaining work and limits

Real iPhone/iPad Safari checks are still required for browser chrome resizing,
safe areas, WebGL behavior, and sustained scroll smoothness. Chrome emulation
does not validate WebKit. No before/after Core Web Vitals or Lighthouse score
was measured; do not treat structural optimizations as a quantified speed claim.

Legacy project components still use original image tags and older layout
patterns. They passed route checks, but migrating their large screenshots to
responsive images is a useful next performance pass. Older unused components
and their dependencies remain candidates for a separate removal pass after
confirming no content workflow relies on them.

The site's intentional noindex directives remain in place. Remove them only
when the site owner decides the portfolio should be indexed.

Run the checks using the commands in `scripts/README.md`. Browser tests need
Chrome; the PDF content check needs Python's `pypdf` package.
