import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (ent.name === "page.js") out.push(p);
  }
  return out;
}

function pageKeyFromPath(filePath) {
  const rel = path.relative(path.join(root, "src/app"), filePath).replace(/\\/g, "/");
  if (rel === "icomat1/page.js") return "homepage";
  if (rel === "icomat1-about-us/page.js") return "aboutUs";
  if (rel === "icomat/page.js") return "icomat";
  if (rel === "icomat-work/page.js" || rel === "icomat1-work/page.js") return "icomatWork";
  if (rel === "blog/page.js") return "blog";
  if (rel === "wordpress/page.js") return "wordpress";
  if (rel === "why-eyrion/page.js") return "whyEyrion";
  if (rel.startsWith("portfolio/")) {
    const slug = rel.split("/")[1];
    return `portfolio-${slug}`;
  }
  const wpMatch = rel.match(/^icomat1\/wordpress\/([^/]+)\/page\.js$/);
  if (wpMatch) return `wp-${wpMatch[1]}`;
  return null;
}

for (const file of walk(path.join(root, "src/app"))) {
  const pageKey = pageKeyFromPath(file);
  if (!pageKey) continue;
  let c = fs.readFileSync(file, "utf8");
  const before = c;

  c = c.replace(
    /<EndToEndSection(\s+theme="[^"]+")?\s*\/>/g,
    (_, theme) =>
      `<EndToEndSection pageKey="${pageKey}"${theme ?? ""} />`,
  );
  c = c.replace(
    /<IcomatSolutionSection\s*\/>/g,
    `<IcomatSolutionSection pageKey="${pageKey}" />`,
  );

  if (c !== before) {
    fs.writeFileSync(file, c);
    console.log(pageKey, path.relative(root, file));
  }
}
