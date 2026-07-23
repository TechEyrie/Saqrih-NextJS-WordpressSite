/**
 * Extract FAQ arrays from WordPress FAQSection.js files into lib/wordpress/serviceFaqs.js
 * and rewrite FAQSections to import from that module.
 * Run: node scripts/extract-service-faqs.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const components = path.join(root, "components");

const DIR_TO_SLUG = {
  "icomat1-wordpress-maintainance": "maintenance",
};

const dirs = fs
  .readdirSync(components)
  .filter((d) => d.startsWith("icomat1-wordpress-"));

/** @type {Record<string, { question: string; answer: string }[]>} */
const bySlug = {};

/** @type {{ dir: string; faqPath: string; src: string; slug: string; constName: string }[]} */
const pendingRewrites = [];

for (const dir of dirs) {
  const faqPath = path.join(components, dir, "FAQSection.js");
  if (!fs.existsSync(faqPath)) continue;

  const src = fs.readFileSync(faqPath, "utf8");
  if (src.includes("getServiceFaqs(")) {
    console.log("already migrated:", dir);
    continue;
  }

  const match = src.match(/const (?:FAQS|ACCORDION_FAQS)\s*=\s*(\[[\s\S]*?\]);/);
  if (!match) {
    console.warn("skip (no FAQ array):", dir);
    continue;
  }

  let arr;
  try {
    arr = Function(`"use strict"; return (${match[1]});`)();
  } catch (err) {
    console.warn("skip (parse fail):", dir, err.message);
    continue;
  }

  const slug = DIR_TO_SLUG[dir] || dir.replace(/^icomat1-wordpress-/, "");
  const faqs = arr
    .filter((item) => item?.question && item?.answer)
    .map(({ question, answer }) => ({ question, answer }));

  bySlug[slug] = faqs;
  if (slug === "maintenance") {
    bySlug.maintainance = faqs;
  }

  pendingRewrites.push({
    dir,
    faqPath,
    src,
    slug,
    constName: src.includes("ACCORDION_FAQS") ? "ACCORDION_FAQS" : "FAQS",
  });
}

const outPath = path.join(root, "lib", "wordpress", "serviceFaqs.js");
fs.mkdirSync(path.dirname(outPath), { recursive: true });

const header = `/**
 * FAQ copy for WordPress service pages (UI + FAQPage JSON-LD).
 * Source of truth — FAQSection components import from here.
 */

`;

const fileBody =
  header +
  `export const WORDPRESS_SERVICE_FAQS = ${JSON.stringify(bySlug, null, 2)};\n\n` +
  `/** @param {string} slug */\n` +
  `export function getServiceFaqs(slug) {\n` +
  `  return WORDPRESS_SERVICE_FAQS[slug] || [];\n` +
  `}\n`;

fs.writeFileSync(outPath, fileBody);
console.log(`Wrote ${outPath} (${Object.keys(bySlug).length} slug keys).`);

for (const { dir, faqPath, src, slug, constName } of pendingRewrites) {
  const replacement = `import { getServiceFaqs } from "../../lib/wordpress/serviceFaqs";

const ${constName} = getServiceFaqs("${slug}").map((faq, index) => ({
  id: index + 1,
  ...faq,
}));
`;

  const next = src.replace(
    /const (?:FAQS|ACCORDION_FAQS)\s*=\s*\[[\s\S]*?\];\r?\n/,
    replacement
  );

  if (next === src) {
    console.warn("rewrite failed:", dir);
  } else {
    fs.writeFileSync(faqPath, next);
    console.log("rewrote", dir, "→", slug);
  }
}
