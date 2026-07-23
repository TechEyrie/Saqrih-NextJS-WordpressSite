/**
 * Generate layout.js files with unique metadata + canonical + Service/FAQ JSON-LD.
 * Run: node scripts/generate-metadata-layouts.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { PATH_METADATA } from "../lib/siteMetadata.js";
import { getServiceFaqs } from "../lib/wordpress/serviceFaqs.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.join(__dirname, "..", "src", "app");

const SKIP_ROUTES = new Set(["/", "/llms.txt"]);

const SKIP_PREFIXES = [
  "/blog/",
  "/case-studies/",
  "/industries/",
  "/locations/",
  "/wordpress/industries/",
  "/wordpress/locations/",
  "/markets/",
];

const SKIP_LEGACY = new Set([
  "/icomat1",
  "/icomat",
  "/home1",
  "/icomat1-about-us",
  "/icomat1-work",
  "/icomat-work",
]);

function shouldSkip(route) {
  if (SKIP_ROUTES.has(route) || SKIP_LEGACY.has(route)) return true;
  if (route.startsWith("/icomat1/")) return true;
  // Typo / odd slugs are redirect-only shells — do not regenerate SEO layouts.
  if (
    route === "/wordpress/premium-support1" ||
    route === "/wordpress/maintainance"
  ) {
    return true;
  }
  return SKIP_PREFIXES.some(
    (prefix) => route.startsWith(prefix) && route !== "/wordpress/industries"
  );
}

function canonicalFor(route) {
  if (route === "/wordpress/maintainance") return "/wordpress/maintenance";
  if (route === "/wordpress/premium-support1") return "/wordpress/premium-support";
  return route;
}

function escapeJs(str) {
  return str.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function relativeImport(route, target) {
  const depth = route === "/" ? 0 : route.slice(1).split("/").length;
  return `${"../".repeat(depth + 2)}${target}`;
}

function breadcrumbItems(canonical, title) {
  const items = [{ name: "Home", url: "/" }];
  if (canonical.startsWith("/wordpress/") && canonical !== "/wordpress") {
    items.push({ name: "WordPress", url: "/wordpress" });
    items.push({ name: title, url: canonical });
  } else if (canonical === "/wordpress") {
    items.push({ name: "WordPress", url: "/wordpress" });
  } else {
    items.push({ name: title, url: canonical });
  }
  return items;
}

function layoutContents(meta, route) {
  const title = escapeJs(meta.title);
  const description = escapeJs(meta.description);
  const canonical = canonicalFor(route);
  const isWpService =
    canonical.startsWith("/wordpress/") &&
    canonical !== "/wordpress" &&
    !canonical.includes("/industries") &&
    !canonical.includes("/locations");

  const metaImport = relativeImport(route, "lib/siteMetadata");
  const jsonLdComp = relativeImport(route, "components/seo/JsonLd");
  const jsonLdLib = relativeImport(route, "lib/jsonLd");

  const crumbs = breadcrumbItems(canonical, meta.title);
  const crumbsLiteral = JSON.stringify(crumbs);

  if (isWpService) {
    const serviceSlug = canonical.replace(/^\/wordpress\//, "");
    const faqs = getServiceFaqs(serviceSlug);
    const faqsLiteral = JSON.stringify(faqs);
    const hasFaqs = faqs.length > 0;
    const jsonLdImports = hasFaqs
      ? "breadcrumbJsonLd, faqPageJsonLd, serviceJsonLd"
      : "breadcrumbJsonLd, serviceJsonLd";

    return `import { buildPageMetadata } from "${metaImport}";
import JsonLd from "${jsonLdComp}";
import { ${jsonLdImports} } from "${jsonLdLib}";

export const metadata = buildPageMetadata({
  title: "${title}",
  description: "${description}",
  path: "${canonical}",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(${crumbsLiteral}),
          serviceJsonLd({
            name: "${title}",
            description: "${description}",
            url: "${canonical}",
            serviceType: "WordPress services",
          }),
          ${hasFaqs ? `faqPageJsonLd(${faqsLiteral}),` : ""}
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
`;
  }

  // Hub / static pages: metadata only in layout.
  // Breadcrumb JSON-LD lives in page.js for hubs so leaf routes don't inherit a second BreadcrumbList.
  const isHubWithChildCrumbs =
    canonical === "/wordpress" ||
    canonical === "/industries" ||
    canonical === "/blog" ||
    canonical === "/markets";

  if (isHubWithChildCrumbs) {
    return `import { buildPageMetadata } from "${metaImport}";

export const metadata = buildPageMetadata({
  title: "${title}",
  description: "${description}",
  path: "${canonical}",
});

export default function Layout({ children }) {
  return children;
}
`;
  }

  return `import { buildPageMetadata } from "${metaImport}";
import JsonLd from "${jsonLdComp}";
import { breadcrumbJsonLd } from "${jsonLdLib}";

export const metadata = buildPageMetadata({
  title: "${title}",
  description: "${description}",
  path: "${canonical}",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(${crumbsLiteral})} />
      {children}
    </>
  );
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
  fs.writeFileSync(layoutPath, layoutContents(meta, route));
  created += 1;
}

console.log(`Wrote ${created} layout.js files (${skipped} skipped).`);
