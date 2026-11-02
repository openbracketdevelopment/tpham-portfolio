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
provides it. Inspect rendered images of **both** PDF pages after regeneration:
page count and text tests alone do not establish legibility or lack of clipping.
Check actual desktop/mobile screenshots and links as well.

Keep body text readable instead of shrinking it to force two pages. Consolidate
older roles while retaining official titles, employers and dates. Any print
content selection must continue to use the shared factual source.

## Publishing

This content update does not deploy anything. Review and commit only when ready.
The existing tagged-release workflow may auto-publish when its `AUTO_PUBLISH`
toggle is `"true"`; a new release tag is therefore a publishing action.
Do not push a tag as part of content verification.

Existing `noindex, nofollow` metadata and response headers are intentionally
preserved. A sitemap is provided for route consistency; changing search-indexing
policy is a separate owner decision.
