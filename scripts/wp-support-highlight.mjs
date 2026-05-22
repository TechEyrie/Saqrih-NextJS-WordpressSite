import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const slugs = [
  "ada-compliance",
  "compliance",
  "divi",
  "elementor",
  "gdpr-compliance",
  "marketing-pro",
  "migration",
  "pci-compliance",
  "sell-my-design-company",
  "speed-optimization",
  "support",
  "theme",
  "white-label-wordpress",
];

for (const slug of slugs) {
  const file = path.join(
    root,
    `components/icomat1-wordpress-${slug}/SupportHighlightSection.js`,
  );
  if (!fs.existsSync(file)) continue;
  let c = fs.readFileSync(file, "utf8");
  c = c.replace(
    /import \{ SUPPORT_HIGHLIGHT_IMAGE \} from "\.\.\/\.\.\/lib\/siteImages";\s*\n\s*const DEFAULT_IMAGE = SUPPORT_HIGHLIGHT_IMAGE;/,
    `import { getPagePic } from "../../lib/pageImages";\n\nconst DEFAULT_IMAGE = getPagePic("wp-${slug}", "supportHighlight");`,
  );
  fs.writeFileSync(file, c);
  console.log("support", slug);
}
