import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const componentsDir = path.join(root, "components");

function listHeroFiles() {
  const files = [];
  for (const name of fs.readdirSync(componentsDir)) {
    if (!name.startsWith("icomat1-wordpress-")) continue;
    const hero = path.join(componentsDir, name, "HeroSection.js");
    if (fs.existsSync(hero)) files.push(hero);
  }
  const wordpressHero = path.join(componentsDir, "wordpress", "HeroSection.js");
  if (fs.existsSync(wordpressHero)) files.push(wordpressHero);
  return files;
}

function normalizeH1(h1Block) {
  return h1Block
    .replace(/<h1[\s\S]*?style=\{\{([^}]*)\}\}/, (match, styleBody) => {
      const maxWidth = styleBody.match(/maxWidth:\s*([^,\n}]+)/);
      const style = maxWidth ? ` style={{ maxWidth: ${maxWidth[1].trim()} }}` : "";
      return `<h1 className="wp-service-hero-title"${style}`;
    });
}

function normalizeP(pBlock) {
  return pBlock.replace(
    /<p\s+style=\{\{[\s\S]*?\}\}/g,
    (match) => {
      const maxWidth = match.match(/maxWidth:\s*([^,\n}]+)/);
      const style = maxWidth ? ` style={{ maxWidth: ${maxWidth[1].trim()} }}` : "";
      return `<p className="wp-service-hero-lead"${style}`;
    },
  );
}

function migrate(filePath) {
  const relImport = path
    .relative(path.dirname(filePath), path.join(componentsDir, "icomat1", "WordPressServiceHeroLayout.js"))
    .replace(/\\/g, "/")
    .replace(/\.js$/, "");

  const content = fs.readFileSync(filePath, "utf8");

  if (content.includes("WordPressServiceHeroLayout")) {
    console.log("skip (already migrated):", filePath);
    return;
  }

  const copyMatch = content.match(
    /<div style=\{\{\s*maxWidth:\s*([^}]+)\}\}>([\s\S]*?)<\/div>\s*\n\s*<div\s+className="wpd-stats-grid"/,
  );

  if (!copyMatch) {
    console.warn("no copy block:", filePath);
    return;
  }

  const copyMaxWidth = copyMatch[1].trim();
  let copyInner = copyMatch[2].trim();
  copyInner = normalizeH1(copyInner);
  copyInner = normalizeP(copyInner);

  const out = `"use client";

import WordPressServiceHeroLayout, {
  WordPressServiceHeroStats,
} from "${relImport.startsWith(".") ? relImport : `./${relImport}`}";

export default function HeroSection() {
  return (
    <WordPressServiceHeroLayout>
      <div className="wp-service-hero-copy" style={{ maxWidth: ${copyMaxWidth} }}>
        ${copyInner}
      </div>
      <WordPressServiceHeroStats />
    </WordPressServiceHeroLayout>
  );
}
`;

  fs.writeFileSync(filePath, out);
  console.log("migrated:", filePath);
}

for (const file of listHeroFiles()) {
  migrate(file);
}
