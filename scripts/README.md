Social share images live in `public/assets/og` and are committed so crawlers can fetch JPEGs without an image-generation service. They are 1200 × 630 pixels and use the same backgrounds and logos as the project heroes.

After changing a hero or logo, run `node scripts/generate-social-images.mjs` from the repository root and commit the updated images. The script uses Sharp supplied by Next.js.

`src/lib/metadata.ts` supplies page titles, descriptions, canonical URLs, Open Graph metadata, Twitter large-image cards, and `noindex, nofollow`. Resume and Projects share the homepage brand image. The root layout supplies defaults for other pages. `next.config.ts` also sends `X-Robots-Tag: noindex, nofollow` on all responses, including files.

Keep robots.txt crawlable so crawlers can read the noindex directives and social services can fetch preview images. Do not replace this with a blanket crawl block.
