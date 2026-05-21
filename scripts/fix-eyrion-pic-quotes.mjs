import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const files = [
  "components/icomat1-work/FeaturedProjectsSection.js",
  "components/icomat1-work/projectsData.js",
  "components/icomat/EndToEndSection.js",
  "components/icomat/IndustriesSection.js",
  "components/icomat/IcomatSolutionsSection.js",
  "components/icomat/UnlockingSection.js",
];

for (const rel of files) {
  const file = path.join(root, rel);
  let s = fs.readFileSync(file, "utf8");
  s = s.replace(/"(eyrionPicAt\(\d+\))"/g, "$1");
  s = s.replace(/from "\.\.\/lib\/siteImages"/g, 'from "../../lib/siteImages"');
  if (rel.includes("projectsData")) {
    if (!s.includes("import { eyrionPicAt }")) {
      s = `import { eyrionPicAt } from "../../lib/siteImages.js";\n\n${s}`;
    }
  }
  if (rel.includes("UnlockingSection")) {
    s = s.replace(
      /const IMAGE_CARDS = \[[\s\S]*?\];/,
      "const IMAGE_CARDS = UNLOCKING_IMAGE_CARDS;"
    );
    s = s.replace(
      /import \{ eyrionPic, UNLOCKING_IMAGE_CARDS \}/,
      "import { UNLOCKING_IMAGE_CARDS }"
    );
  }
  fs.writeFileSync(file, s);
  console.log("Fixed", rel);
}
