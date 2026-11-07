Social share images live in `public/assets/og` and are committed so crawlers can fetch JPEGs without an image-generation service. They are 1200 × 630 pixels and use the same backgrounds and logos as the project heroes.

After changing a hero or logo, run `node scripts/generate-social-images.mjs` from the repository root and commit the updated images. The script uses Sharp supplied by Next.js.

`src/lib/metadata.ts` supplies page titles, descriptions, canonical URLs, Open Graph metadata, Twitter large-image cards, and `noindex, nofollow`. Resume and Projects share the homepage brand image. The root layout supplies defaults for other pages. `next.config.ts` also sends `X-Robots-Tag: noindex, nofollow` on all responses, including files.

Keep robots.txt crawlable so crawlers can read the noindex directives and social services can fetch preview images. Do not replace this with a blanket crawl block.

Résumé generation, PDF reading-order validation, responsive route checks and
shared content maintenance are documented in
[`docs/content-maintenance.md`](../docs/content-maintenance.md).

Run `npm test` for deterministic projectile physics tests (Node 26+).
For browser regressions, first run `npm run build` and `npm start`, then:

```sh
npm run test:routes -- http://localhost:3000
npm run test:motion -- http://localhost:3000
```

The browser checks use installed Google Chrome on macOS; set `CHROME_PATH`
for another Chrome installation. Routes cover 28 pages at six widths from
320–2240 px, sitemap entries, image frames, PDF download, and expected 404s.
Motion checks cover delayed-asset loading, session completion, SVG graphics,
contact links, header direction/contrast, Escape, and reduced motion.
They do not open contact destinations. Real iOS Safari and GPU performance
still require device testing; mobile Chrome emulation is not Safari.
