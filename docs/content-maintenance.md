# Portfolio content maintenance

## Shared content

- `src/projects/software-data.ts`: the four independent projects. Cards, case
  studies and the résumé's Selected Software Projects section use this source.
  `resumeBullets` are the concise engineering evidence used in both web and PDF.
- `src/projects/work-data.ts`: professional work, curated order, collection,
  context, category and verified card tags. Categories describe the actual work:
  a website scroll video is not a motion project; Cintra is a UX prototype.
- `src/projects/project-data/Fidium.json`: Fidium's existing case study and
  screenshot gallery. Keep application ownership boundaries and the seven
  content consumers accurate.
- `src/views/Resume/resume-data.ts`: professional history, headline, summary,
  skills, contact details, education and certifications.
- `src/views/page-data/Home.json` and `Resume.json`: page metadata.

The homepage features Fidium Fiber, Diageo Innovation, ESPS Trailer Parts and Toro
Haven, followed by ByteDown, SitePaladin, Hook, Line & Sender, and Daguerrify.
`/work` and its category routes use the same cards; `/projects` remains available.
VetMotl has been removed from the collections, sitemap and public routes.
Other existing client case-study URLs are unchanged.
The homepage `#work` anchor is preserved.

## Evidence before copy

Verify each repository's README, manifest, relevant implementation and tests.
Do not promote roadmap features to implemented features, call a local demo
production-ready, or equate coding-assistant use with building LLM systems.
Only say tests passed when they were actually executed, and distinguish unit
tests from browser/database suites. Keep claims of performance improvement
qualitative unless measured evidence supports a number.

Independent project source baselines reviewed for this update:

- ByteDown: `e688c748bcce71478178224b5737ee137b6ea794`
- SitePaladin: `e7fa8164184e0578af427738363ef0c04c0f5c6b`
- Hook, Line & Sender: `be213ab684e851c0a4d72961cdeeee66077d473f`
- Daguerrify: `fa7f0ded20af35b6f4669b9f8099c9c8cf9c0b69`

Relevant evidence includes the projects' manifests and these source areas:
ByteDown's `internal/worker`, `internal/processing` and `internal/store`;
SitePaladin's `src/crawler.rs` and `src/session_store.rs`; Hookline's
`backend/app/services/events.py`, `delivery.py` and `security.py`; Daguerrify's
`src/editor/history`, `src/engine/rendering` and `tests/unit`.

### Validation performed for this update

- ByteDown: disposable local image optimization demo with genuinely completed
  JPEG/WebP/AVIF outputs from a synthetic landscape, not a benchmark.
- SitePaladin: offline fixture-enabled build and controlled local audit,
  completed with a configured 12-page limit and an explicit truncation notice.
- Hook, Line & Sender: isolated local delivery demo; two simulated HTTP 503
  retries followed by HTTP 200. Dashboard and attempt history were captured.
- Daguerrify: Svelte/TypeScript checks and 71 unit tests passed. Captures use
  the repository's illustrative landscape with an actual preset and exposure edit.

The full Go, Rust and Python suites and Daguerrify's full Playwright suite were
not rerun. All four projects have real screenshots; no invented dashboard or
project-cover fallback was needed. Disposable demo resources were removed,
without changing app repositories or existing services.

## Media

Use actual application screenshots only when the application can run safely
with disposable demo data. Preserve attribution on maps or third-party media.
Use the project's own synthetic image fixtures, not private photos.

When no safe runtime is available, leave `image` unset: the shared visual renders
a clearly labeled **Project cover**, not an invented application screen.
For a screenshot, set `image` and an accurate `imageAlt`; do not give designed
covers screenshot captions. Card images fill their locked 16:9 frames with
`object-fit: cover`, cropping rather than stretching or adding empty bands.
Full case-study screenshots retain their native proportions.
GitHub-linked app card screenshots are top-aligned to preserve logos and headers;
client artwork remains centered.
Three-column card grids span the desktop width with 2rem side gutters from
1024px upward. Tablet and mobile grids retain the shared content width; case-study
text remains constrained for readability.

## PDF and validation

The PDF is generated from `/resume` and its print stylesheet, not a separate
document with duplicate facts. Print styles use Arial, ordinary document flow
and native list bullets to preserve extraction order.

```sh
npm run build
npm run start -- --port 3127
```

In another terminal:

```sh
node scripts/generate-resume-pdf.mjs http://localhost:3127
python3 scripts/verify-resume-pdf.py
node scripts/verify-portfolio.mjs http://localhost:3127
git diff --check
```

The browser scripts use Chrome on macOS by default. Set `CHROME_PATH` to a
Chrome/Chromium executable on other systems. PDF text validation requires
`pypdf` in the chosen Python environment; use the environment that already
provides it. Inspect rendered images of **all three** PDF pages after regeneration:
page count and text tests alone do not establish legibility or lack of clipping.
Check actual desktop/mobile screenshots and links as well.

The full résumé uses three pages to retain detailed descriptions and key
achievements for all seven jobs alongside the newer software projects. Keep
body text readable and preserve that detail when updating the layout. The web
page and PDF must continue to use the shared factual source.

## Publishing

This content update does not deploy anything. Review and commit only when ready.
The existing tagged-release workflow may auto-publish when its `AUTO_PUBLISH`
toggle is `"true"`; a new release tag is therefore a publishing action.
Do not push a tag as part of content verification.

Existing `noindex, nofollow` metadata and response headers are intentionally
preserved. A sitemap is provided for route consistency; changing search-indexing
policy is a separate owner decision.

## Connect playground

`/connect` lazy-loads a procedural Three.js/WebGL court from
`src/components/ConnectPlayground`. The selected projectile uses a previewed
gravity-based flight path, with a small target snap radius. Drag backward and
release, or select a target and press Enter / the shoot button. A successful
shot animates the target and opens its configured destination. Reset cancels
pending navigation. `targets.ts` is the shared source for destination links.
Direct links remain available without WebGL. Rendering pauses out of view and
all WebGL resources and event handlers are disposed on navigation.

The root layout renders the shared Connect footer once on every page except
`/connect`, which already provides its own contact links. Do not
add copies to individual pages. The footer is hidden when printing the résumé.

The projectile changes with the selected or snapped target: paper football for
email, basketball for GitHub, and a direction-aligned dart for LinkedIn. Touch
uses pointer capture, an enlarged pickup radius, and a single active finger.

Each target has its own landing sequence before destination navigation: the
paper football slides into the hollow, envelope-filled mailbox, whose door
opens as the shot approaches and closes after insertion; the basketball
passes through an anchored diamond-cord net with localized stretch and a soft
rebound, then bounces with gravity and restitution; the dart embeds its needle in
the bullseye and stays there. Reset/Escape cancels both flight and landing
animations as well as pending navigation. Basketball pebbling is a procedural
bump texture and is disposed with the scene. Paper footballs spin on launch;
darts spin around their shaft while their nose follows the flight direction.

`projectilePhysics.ts` integrates ground contact at 120 Hz independently of
render frame rate. Basketballs rebound, lose energy, and roll with friction;
paper has high drag and nearly zero restitution; missed darts track velocity
nose-first, then lose energy and settle sideways. Short-throw previews use the
same ballistic plan as the actual flight. Reset also clears active physics and
impact deformation tweens.

Home-page performance: touch/coarse-pointer devices use a static, responsive
hero image instead of mounting the SVG displacement effects. The desktop
liquid effect remains available for fine pointers with motion enabled. The
compressed WebP is shared by both paths; project covers use Next Image sizes.
Marquee headings pause outside the viewport and in hidden tabs, and stop for
reduced motion. Touch logo swaps use opacity fades instead of SVG filters.
