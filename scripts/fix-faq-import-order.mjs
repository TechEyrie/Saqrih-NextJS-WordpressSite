/**
 * Move getServiceFaqs import to the top of FAQSection files (after other imports).
 * Run: node scripts/fix-faq-import-order.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const components = path.join(__dirname, "..", "components");

const blockRe =
  /\nimport \{ getServiceFaqs \} from "\.\.\/\.\.\/lib\/wordpress\/serviceFaqs";\r?\n\r?\nconst (FAQS|ACCORDION_FAQS) = getServiceFaqs\("([^"]+)"\)\.map\(\(faq, index\) => \(\{\r?\n  id: index \+ 1,\r?\n  \.\.\.faq,\r?\n\}\)\);\r?\n/;

for (const dir of fs.readdirSync(components)) {
  if (!dir.startsWith("icomat1-wordpress-")) continue;
  const faqPath = path.join(components, dir, "FAQSection.js");
  if (!fs.existsSync(faqPath)) continue;

  let src = fs.readFileSync(faqPath, "utf8");
  const match = src.match(blockRe);
  if (!match) continue;

  const [, constName, slug] = match;
  src = src.replace(blockRe, "\n");

  const importLines = [...src.matchAll(/^import .+$/gm)];
  const lastImport = importLines[importLines.length - 1];
  if (!lastImport) continue;

  const insertPos = lastImport.index + lastImport[0].length;
  const injection = `\nimport { getServiceFaqs } from "../../lib/wordpress/serviceFaqs";\n\nconst ${constName} = getServiceFaqs("${slug}").map((faq, index) => ({\n  id: index + 1,\n  ...faq,\n}));\n`;

  src = src.slice(0, insertPos) + injection + src.slice(insertPos);
  fs.writeFileSync(faqPath, src);
  console.log("fixed", dir);
}
