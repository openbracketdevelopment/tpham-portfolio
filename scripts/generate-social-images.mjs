import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

// Run from the repository root with: node scripts/generate-social-images.mjs
const output = 'public/assets/og';
await fs.mkdir(output, { recursive: true });
async function generate(slug, background, logo, home = false) {
  const base = await sharp(path.join('public', background)).resize(1200, 630, { fit: 'cover' }).toBuffer();
  const mark = await sharp(path.join('public', logo), { density: 300 })
    .trim().resize(home ? 270 : 540, home ? 270 : 240, { fit: 'inside' }).png().toBuffer();
  await sharp(base).composite([
    { input: Buffer.from(`<svg width="1200" height="630"><rect width="1200" height="630" fill="black" opacity="${home ? 0.28 : 0.48}"/></svg>`) },
    { input: mark, gravity: 'centre' },
  ]).jpeg({ quality: 90, mozjpeg: true }).toFile(`${output}/${slug}.jpg`);
  console.log(`Generated ${slug}.jpg`);
}
await generate('home', '/assets/images/abstract-bg.jpg', '/assets/images/logo.svg', true);
for (const file of await fs.readdir('src/app')) {
  const routeFile = `src/app/${file}/page.tsx`;
  let source;
  try { source = await fs.readFile(routeFile, 'utf8'); } catch { continue; }
  const match = source.match(/import data from "\.\.\/\.\.\/projects\/project-data\/(.*?)"/);
  if (!match) continue;
  const data = JSON.parse(await fs.readFile(`src/projects/project-data/${match[1]}`, 'utf8'));
  await generate(file, data.workHeroImagePath || data.workImagePath, data.workLogo);
}
