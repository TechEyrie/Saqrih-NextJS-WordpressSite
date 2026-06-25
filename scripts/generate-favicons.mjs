/**
 * Regenerate favicons: white eagle on a black circular background.
 * Usage: node scripts/generate-favicons.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const logoPath = path.join(root, "public/logo/Saqrih_real_logo.png");

async function makeIcon(size) {
  const pad = Math.round(size * 0.1);
  const inner = size - pad * 2;

  const logo = await sharp(logoPath)
    .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 1 } })
    .png()
    .toBuffer();

  const circleSvg = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#000000"/>
  </svg>`;

  const base = await sharp(Buffer.from(circleSvg)).png().toBuffer();

  const composed = await sharp(base)
    .composite([{ input: logo, left: pad, top: pad }])
    .png()
    .toBuffer();

  const maskSvg = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#ffffff"/>
  </svg>`;

  const mask = await sharp(Buffer.from(maskSvg)).png().toBuffer();

  return sharp(composed).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer();
}

const outputs = [
  { file: "src/app/icon.png", size: 32 },
  { file: "public/favicon.png", size: 32 },
  { file: "src/app/apple-icon.png", size: 180 },
  { file: "public/apple-touch-icon.png", size: 180 },
];

for (const { file, size } of outputs) {
  const outPath = path.join(root, file);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  const buf = await makeIcon(size);
  await sharp(buf).toFile(outPath);
  console.log(`Wrote ${file} (${size}x${size})`);
}
