import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "src", "app", "portfolio");

for (const slug of ["acertus", "azelis-aes", "hrchitect"]) {
  const file = path.join(root, slug, "page.js");
  let src = fs.readFileSync(file, "utf8");
  if (src.includes('id="main-content"')) {
    console.log("skip", slug);
    continue;
  }
  const next = src.replace(
    /(<Header\s*\/>\s*)([\s\S]*?)(\n\s*<\/div>\s*\n\s*\);\s*\n}\s*)$/,
    (_, header, body, close) =>
      `${header}<main id="main-content">\n${body.replace(/\n\s*$/, "")}\n      </main>${close}`
  );
  if (next === src) {
    console.log("fail", slug);
    continue;
  }
  fs.writeFileSync(file, next);
  console.log("ok", slug);
}
