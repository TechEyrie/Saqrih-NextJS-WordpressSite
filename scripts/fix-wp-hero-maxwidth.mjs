import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const componentsDir = path.join(
  path.resolve(path.dirname(fileURLToPath(import.meta.url)), ".."),
  "components",
);

for (const name of fs.readdirSync(componentsDir)) {
  if (!name.startsWith("icomat1-wordpress-")) continue;
  const file = path.join(componentsDir, name, "HeroSection.js");
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, "utf8");
  const next = content.replace(
    /maxWidth: "min\((\d+ch) \}\}/g,
    'maxWidth: "min($1, 100%)" }}',
  );
  if (next !== content) {
    fs.writeFileSync(file, next);
    console.log("fixed:", file);
  }
}
