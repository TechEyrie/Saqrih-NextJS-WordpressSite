import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const componentsDir = path.join(root, "components");
const exclude = path.join(componentsDir, "icomat1", "HeroSection.js");

const OLD_SRC =
  /src="\/wp-content\/uploads\/icomat-cdn\/(?:aWEfyAIvOtkhBOsl_ICOMAT-TECHHEROVIDEO_1|aWZQUwIvOtkhBcXM_ICOMAT-HOMEPAGE_1)\.mp4"/g;
const NEW_SRC = "src={SERVICES_HERO_BACKGROUND_VIDEO}";
const IMPORT =
  'import { SERVICES_HERO_BACKGROUND_VIDEO } from "../../lib/siteVideos";\n';

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (/Hero.*\.js$/.test(ent.name) || ent.name === "MarketHeroSection.js")
      out.push(p);
  }
  return out;
}

let updated = 0;
for (const file of walk(componentsDir)) {
  if (path.resolve(file) === path.resolve(exclude)) continue;
  let content = fs.readFileSync(file, "utf8");
  if (!OLD_SRC.test(content)) {
    OLD_SRC.lastIndex = 0;
    continue;
  }
  OLD_SRC.lastIndex = 0;
  if (!content.includes("<video")) continue;

  content = content.replace(OLD_SRC, NEW_SRC);
  if (!content.includes("siteVideos")) {
    if (content.startsWith('"use client";')) {
      content = content.replace(
        '"use client";\n',
        `"use client";\n\n${IMPORT}`,
      );
    } else {
      content = `${IMPORT}\n${content}`;
    }
  }
  fs.writeFileSync(file, content);
  updated++;
  console.log("updated:", path.relative(root, file));
}

console.log(`Done. ${updated} hero files updated.`);
