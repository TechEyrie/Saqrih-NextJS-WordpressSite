import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const pageDirs = [
  path.join(root, "src/app/icomat1/wordpress"),
  path.join(root, "src/app/wordpress"),
];

function discoverPages() {
  const files = [];
  for (const dir of pageDirs) {
    if (!fs.existsSync(dir)) continue;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        const pagePath = path.join(dir, entry.name, "page.js");
        if (fs.existsSync(pagePath)) files.push(pagePath);
      } else if (entry.name === "page.js") {
        files.push(path.join(dir, "page.js"));
      }
    }
  }
  return [...new Set(files)].filter((f) => {
    const content = fs.readFileSync(f, "utf8");
    return !content.trimStart().startsWith("export { default }");
  });
}

function indentOf(line) {
  const m = line.match(/^(\s*)/);
  return m ? m[1] : "        ";
}

function processPage(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  const original = content;
  const isHub = filePath.replace(/\\/g, "/").endsWith("src/app/wordpress/page.js");

  // Fix malformed Unlocking import
  content = content.replace(
    /^ import UnlockingSection/m,
    "import UnlockingSection",
  );

  // Uncomment UnlockingSection import
  content = content.replace(
    /^(\s*)\/\/ import UnlockingSection from (.+);$/m,
    "$1import UnlockingSection from $2;",
  );

  const hasFAQ = /^import FAQSection from/m.test(content);
  const hasFAQ2 = /^import FAQSection2 from/m.test(content);

  // Hosting: add UnlockingSection import if missing
  if (
    filePath.includes("hosting") &&
    !/^import UnlockingSection from/m.test(content)
  ) {
    content = content.replace(
      /^(import FAQSection from .+;\n)/m,
      `$1import UnlockingSection from "../../../../../components/icomat1-wordpress-hosting/UnlockingSection";\n`,
    );
  }

  if (isHub) {
    content = content.replace(
      /\{\/\*\s*<UnlockingSection\s*\/>\s*\*\/\}/g,
      "<UnlockingSection />",
    );
    if (content !== original) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log("updated (hub):", path.relative(root, filePath));
    }
    return;
  }

  // Uncomment CustomersSection inside comment blocks
  content = content.replace(
    /\{\/\*\s*<EndToEndSection([^>]*)\/>\s*\n\s*<CustomersSection\s*\/>\s*\*\/\}/g,
    "<EndToEndSection$1/>\n        <CustomersSection />",
  );
  content = content.replace(
    /\{\/\*\s*<CustomersSection\s*\/>\s*\*\/\}/g,
    "<CustomersSection />",
  );
  content = content.replace(
    /<CustomersSection\s*\/>\s*\*\/\}/g,
    "<CustomersSection />",
  );
  content = content.replace(
    /\{\/\*\s+<CustomersSection\s*\/>\s*\*\/\}/g,
    "<CustomersSection />",
  );

  // Split lines in return body for manipulation
  const returnStart = content.indexOf("return (");
  if (returnStart === -1) return;
  const header = content.slice(0, returnStart);
  let body = content.slice(returnStart);

  // Remove FAQ and Unlocking from body (will re-insert)
  body = body.replace(/^\s*<FAQSection2\s*\/>\s*$/gm, "");
  body = body.replace(/^\s*<FAQSection\s*\/>\s*$/gm, "");
  body = body.replace(/^\s*\{\/\*\s*<UnlockingSection\s*\/>\s*\*\/\}\s*$/gm, "");
  body = body.replace(/^\s*<UnlockingSection\s*\/>\s*$/gm, "");

  // Build FAQ insert
  const faqLines = [];
  if (hasFAQ) faqLines.push("<FAQSection />");
  if (hasFAQ2) faqLines.push("<FAQSection2 />");

  const bodyLines = body.split("\n");
  let customersIdx = -1;
  let customersIndent = "        ";

  for (let i = 0; i < bodyLines.length; i++) {
    if (/^\s*<CustomersSection\s*\/>\s*$/.test(bodyLines[i])) {
      customersIdx = i;
      customersIndent = indentOf(bodyLines[i]);
      break;
    }
  }

  if (customersIdx !== -1 && faqLines.length > 0) {
    const nextLine = bodyLines[customersIdx + 1]?.trim() ?? "";
    const alreadyHasFaq =
      nextLine === "<FAQSection />" || nextLine === "<FAQSection2 />";
    if (!alreadyHasFaq) {
      const insert = faqLines.map((l) => customersIndent + l);
      bodyLines.splice(customersIdx + 1, 0, ...insert);
    }
  }

  body = bodyLines.join("\n");

  // Insert UnlockingSection before CTASection
  if (/^import UnlockingSection from/m.test(header + body)) {
    const lines = body.split("\n");
    const ctaIdx = lines.findIndex((l) => /^\s*<CTASection/.test(l));
    if (ctaIdx !== -1) {
      const hasUnlocking = lines.some((l) => /^\s*<UnlockingSection\s*\/>\s*$/.test(l));
      if (!hasUnlocking) {
        const ctaIndent = indentOf(lines[ctaIdx]);
        lines.splice(ctaIdx, 0, `${ctaIndent}<UnlockingSection />`);
        body = lines.join("\n");
      }
    }
  }

  content = header + body;

  if (content !== original) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log("updated:", path.relative(root, filePath));
  }
}

for (const file of discoverPages()) {
  processPage(file);
}

console.log("done");
