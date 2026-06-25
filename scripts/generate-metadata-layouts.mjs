/**
 * Generate layout.js files with unique metadata for static routes.
 * Run: node scripts/generate-metadata-layouts.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { PATH_METADATA } from "../lib/siteMetadata.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.join(__dirname, "..", "src", "app");

const SKIP_ROUTES = new Set([
  "/",
  // dynamic routes — own layout.js with generateMetadata
]);

const SKIP_PREFIXES = [
  "/blog/",
  "/case-studies/",
  "/industries/",
  "/locations/",
  "/wordpress/industries/",
  "/wordpress/locations/",
  "/markets/",
];

function shouldSkip(route) {
  if (SKIP_ROUTES.has(route)) return true;
  return SKIP_PREFIXES.some(
    (prefix) => route.startsWith(prefix) && route !== "/wordpress/industries"
  );
}

function escapeJs(str) {
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function layoutContents(meta) {
  const title = escapeJs(meta.title);
  const description = escapeJs(meta.description);
  return `export const metadata = {
  title: "${title}",
  description: "${description}",
  openGraph: {
    title: "${title}",
    description: "${description}",
    type: "website",
  },
};

export default function Layout({ children }) {
  return children;
}
`;
}

let created = 0;
let skipped = 0;

for (const [route, meta] of Object.entries(PATH_METADATA)) {
  if (shouldSkip(route)) {
    skipped += 1;
    continue;
  }

  const segments = route.slice(1).split("/");
  const dir = path.join(appDir, ...segments);
  const layoutPath = path.join(dir, "layout.js");

  if (!fs.existsSync(dir)) {
    console.warn("skip missing dir:", route);
    skipped += 1;
    continue;
  }

  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(layoutPath, layoutContents(meta));
  created += 1;
}

console.log(`Wrote ${created} layout.js files (${skipped} skipped).`);
