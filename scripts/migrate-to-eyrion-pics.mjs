/**
 * One-off: replace stock image URLs with saqrihPicAt(n) in data files.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const targets = [
  "components/icomat1-work/FeaturedProjectsSection.js",
  "components/icomat1-work/projectsData.js",
  "components/icomat/EndToEndSection.js",
  "components/icomat/IndustriesSection.js",
  "components/icomat/IcomatSolutionsSection.js",
  "components/icomat/UnlockingSection.js",
];

for (const rel of targets) {
  const file = path.join(root, rel);
  let s = fs.readFileSync(file, "utf8");
  if (!s.includes("unsplash.com")) continue;

  if (!s.includes("saqrihPicAt") && !s.includes("saqrihPic")) {
    const depth = rel.split("/").length - 2;
    const importPath = `${"../".repeat(depth)}lib/siteImages`;
    const useAt = rel.includes("Featured") || rel.includes("projectsData") || rel.includes("EndToEnd");
    const imp = useAt
      ? `import { saqrihPicAt } from "${importPath}";\n`
      : `import { saqrihPic, UNLOCKING_IMAGE_CARDS } from "${importPath}";\n`;
    s = s.replace(/^(["']use client["'];\n\n)/, `$1${imp}`);
  }

  let i = 0;
  s = s.replace(/https:\/\/images\.unsplash\.com\/[^"'\s]+/g, () => {
    const repl = `saqrihPicAt(${i})`;
    i += 1;
    return repl;
  });

  fs.writeFileSync(file, s);
  console.log(`Updated ${rel} (${i} replacements)`);
}
