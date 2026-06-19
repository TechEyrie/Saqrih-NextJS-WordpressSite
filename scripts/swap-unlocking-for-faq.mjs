import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const pageDirs = [
  path.join(root, "src", "app", "icomat1", "wordpress"),
  path.join(root, "src", "app", "wordpress"),
];

function listPageFiles() {
  const files = [];
  for (const dir of pageDirs) {
    if (!fs.existsSync(dir)) continue;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const nested = path.join(dir, entry.name, "page.js");
        if (fs.existsSync(nested)) files.push(nested);
      } else if (entry.name === "page.js") {
        files.push(path.join(dir, entry.name));
      }
    }
  }
  return [...new Set(files)];
}

function commentImport(line) {
  const trimmed = line.trimStart();
  if (trimmed.startsWith("//") || trimmed.startsWith("/*")) return line;
  const indent = line.match(/^\s*/)[0];
  return `${indent}// ${trimmed}`;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  if (!content.includes("UnlockingSection")) {
    return false;
  }

  const hasFAQ = /import\s+FAQSection\b/.test(content);
  const hasFAQ2 = /import\s+FAQSection2\b/.test(content);

  // Comment UnlockingSection import
  content = content.replace(
    /^(\s*)import\s+UnlockingSection\s+from\s+.+;$/m,
    (match, indent) => `${indent}// ${match.trim()}`,
  );

  // Uncomment FAQ imports if they were commented (rare)
  content = content.replace(
    /^(\s*)\/\/\s*(import\s+FAQSection2?\s+from\s+.+;)$/m,
    "$1$2",
  );

  // Remove active FAQ lines (we'll re-insert at Unlocking slot)
  const faqLines = [];
  if (hasFAQ) {
    content = content.replace(/^\s*<FAQSection\s*\/>\s*$/gm, (match) => {
      faqLines.push("<FAQSection />");
      return "";
    });
  }
  if (hasFAQ2) {
    content = content.replace(/^\s*<FAQSection2\s*\/>\s*$/gm, (match) => {
      faqLines.push("<FAQSection2 />");
      return "";
    });
  }

  // Remove commented-only FAQ placeholders clutter
  content = content.replace(/^\s*\{\/\*\s*<FAQSection2?\s*\/>\s*\*\/\}\s*$/gm, "");

  // Comment UnlockingSection usage
  if (!content.includes("{/* <UnlockingSection /> */}")) {
    content = content.replace(
      /<UnlockingSection\s*\/>/g,
      "{/* <UnlockingSection /> */}",
    );
  }

  // Insert FAQ at first Unlocking comment position
  if (faqLines.length > 0) {
    const insert = faqLines.map((line) => `        ${line}`).join("\n");
    if (content.includes("{/* <UnlockingSection /> */}")) {
      content = content.replace(
        "{/* <UnlockingSection /> */}",
        `{/* <UnlockingSection /> */}\n${insert}`,
      );
    } else {
      // Unlocking was inside a larger comment block — append before CTASection or Footer
      content = content.replace(
        /(\s*)<CTASection/,
        `${insert}\n$1{/* <UnlockingSection /> */}\n$1<CTASection`,
      );
    }
  }

  // Clean up excessive blank lines in JSX body
  content = content.replace(/\n{3,}/g, "\n\n");

  fs.writeFileSync(filePath, content);
  return true;
}

let count = 0;
for (const file of listPageFiles()) {
  if (processFile(file)) {
    console.log("updated:", path.relative(root, file));
    count++;
  }
}
console.log(`done: ${count} files`);
