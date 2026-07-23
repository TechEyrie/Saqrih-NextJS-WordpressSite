/**
 * Swap content wrappers to <main id="main-content"> for skip-link targets.
 * Run: node scripts/add-main-content.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const FILES = [
  ...fs
    .readdirSync(path.join(root, "src/app/icomat1/wordpress"), { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => path.join(root, "src/app/icomat1/wordpress", d.name, "page.js")),
  path.join(root, "components/locations/QatarLocationPage.js"),
  path.join(root, "components/industries/IndustryPage.js"),
  path.join(root, "src/app/markets/page.js"),
  path.join(root, "src/app/icomat1-about-us/page.js"),
  path.join(root, "src/app/icomat1-work/page.js"),
  path.join(root, "src/app/home1/page.js"),
];

const OPEN_RE =
  /<div(\s+className="homepage-font-scope(?:[^"]*)"(?:\s+style=\{[^}]+\})?)>/;
const OPEN_REPL = `<main id="main-content"$1>`;

let changed = 0;
for (const file of FILES) {
  if (!fs.existsSync(file)) {
    console.warn("missing", path.relative(root, file));
    continue;
  }
  let src = fs.readFileSync(file, "utf8");
  if (src.includes('id="main-content"')) {
    console.log("skip (already):", path.relative(root, file));
    continue;
  }
  if (!OPEN_RE.test(src)) {
    console.warn("no match:", path.relative(root, file));
    continue;
  }
  // Reset regex lastIndex
  OPEN_RE.lastIndex = 0;
  const next = src.replace(OPEN_RE, OPEN_REPL);

  // Close the matching wrapper: first </div> that closes homepage-font-scope block
  // Pattern: FooterSection /> then </div> before outer </div>
  const closed = next.replace(
    /(<(?:FooterSection|CTASection)[^/]*\/>\s*)<\/div>(\s*<\/div>\s*\);\s*\})/,
    "$1</main>$2"
  );

  // Fallback: FooterSection self-closing then </div>
  let final = closed;
  if (final === next) {
    final = next.replace(
      /(<FooterSection\s*\/>\s*)<\/div>/,
      "$1</main>"
    );
  }

  if (final === src || !final.includes("</main>")) {
    console.warn("close failed:", path.relative(root, file));
    // Still write open tag change with manual-friendly marker
    continue;
  }

  fs.writeFileSync(file, final);
  changed += 1;
  console.log("updated", path.relative(root, file));
}

console.log(`\nUpdated ${changed} files.`);
