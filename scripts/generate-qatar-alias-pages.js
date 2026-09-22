/**
 * Generates thin /{base}-qatar and /{base}-qaatar pages that reuse existing service clients.
 * Run: node scripts/generate-qatar-alias-pages.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const APP = path.join(ROOT, "src", "app");

const BASES = [
  {
    base: "web-design",
    titleExpr: "WEBSITE_DEV_HOME.title",
    descExpr: "WEBSITE_DEV_HOME.description",
    faqsExpr: "WEBSITE_DEV_HOME_FAQS",
    serviceType: "Website design",
    imports: `
import { WEBSITE_DEV_HOME, WEBSITE_DEV_HOME_FAQS } from "../../../lib/services/websiteDevelopmentHome";
import WebsiteDevelopmentHomeClient from "../services/website-design/WebsiteDevelopmentHomeClient";
`,
    child: "<WebsiteDevelopmentHomeClient />",
  },
  {
    base: "web-development",
    titleExpr: "WEB_APP_DEV_HOME.title",
    descExpr: "WEB_APP_DEV_HOME.description",
    faqsExpr: "WEB_APP_DEV_HOME_FAQS",
    serviceType: "Web application development",
    imports: `
import { WEB_APP_DEV_HOME, WEB_APP_DEV_HOME_FAQS } from "../../../lib/services/webApplicationDevelopmentHome";
import WebApplicationDevelopmentHomeClient from "../services/web-application-development/WebApplicationDevelopmentHomeClient";
`,
    child: "<WebApplicationDevelopmentHomeClient />",
  },
  {
    base: "wordpress-development",
    titleExpr: "WORDPRESS_DEV_HOME.title",
    descExpr: "WORDPRESS_DEV_HOME.description",
    faqsExpr: "WORDPRESS_DEV_HOME_FAQS",
    serviceType: "WordPress development",
    imports: `
import { WORDPRESS_DEV_HOME, WORDPRESS_DEV_HOME_FAQS } from "../../../lib/services/wordpressDevelopmentHome";
import WordpressDevelopmentHomeClient from "../services/wordpress-development/WordpressDevelopmentHomeClient";
`,
    child: "<WordpressDevelopmentHomeClient />",
  },
  {
    base: "ecommerce-development",
    titleExpr: "ECOM_DEV_HOME.title",
    descExpr: "ECOM_DEV_HOME.description",
    faqsExpr: "ECOM_DEV_HOME_FAQS",
    serviceType: "E-commerce development",
    imports: `
import { ECOM_DEV_HOME, ECOM_DEV_HOME_FAQS } from "../../../lib/services/ecommerceDevelopmentHome";
import EcommerceDevelopmentHomeClient from "../services/ecommerce-development/EcommerceDevelopmentHomeClient";
`,
    child: "<EcommerceDevelopmentHomeClient />",
  },
  {
    base: "ai-automation",
    titleExpr: "page.title",
    descExpr: "page.description",
    faqsExpr: "page.faqs",
    serviceType: "AI and Automation",
    imports: `
import { getWebAppDevSubPage } from "../../../lib/services/webApplicationDevelopmentSubPages";
import WebAppDevSubServiceHomeClient from "../services/web-application-development/[slug]/WebAppDevSubServiceHomeClient";

const page = getWebAppDevSubPage("ai-and-automation");
`,
    child: "<WebAppDevSubServiceHomeClient page={page} />",
    needsPageGuard: true,
  },
  {
    base: "software-development",
    titleExpr: "page.title",
    descExpr: "page.description",
    faqsExpr: "page.faqs",
    serviceType: "Software Development",
    imports: `
import { getWebAppDevSubPage } from "../../../lib/services/webApplicationDevelopmentSubPages";
import WebAppDevSubServiceHomeClient from "../services/web-application-development/[slug]/WebAppDevSubServiceHomeClient";

const page = getWebAppDevSubPage("software-development");
`,
    child: "<WebAppDevSubServiceHomeClient page={page} />",
    needsPageGuard: true,
  },
];

const SUFFIXES = ["qatar", "qaatar"];

function fileFor(base, suffix, cfg) {
  const routePath = `/${base}-${suffix}`;
  const label = suffix === "qatar" ? "Qatar" : "Qaatar";
  const titleLine =
    cfg.needsPageGuard
      ? `const TITLE = \`\${${cfg.titleExpr}} in ${label}\`;`
      : `const TITLE = \`\${${cfg.titleExpr}} in ${label}\`;`;

  return `import { buildPageMetadata } from "../../../lib/siteMetadata";
import QatarAliasPage from "../../../components/services/QatarAliasPage";
${cfg.imports.trim()}

const PATH = "${routePath}";
${titleLine}

export const metadata = buildPageMetadata({
  title: TITLE,
  description: ${cfg.descExpr},
  path: PATH,
});

export default function Page() {
  ${cfg.needsPageGuard ? "if (!page) return null;" : ""}
  return (
    <QatarAliasPage
      path={PATH}
      title={TITLE}
      description={${cfg.descExpr}}
      serviceType="${cfg.serviceType}"
      faqs={${cfg.faqsExpr}}
    >
      ${cfg.child}
    </QatarAliasPage>
  );
}
`;
}

for (const cfg of BASES) {
  for (const suffix of SUFFIXES) {
    const dir = path.join(APP, `${cfg.base}-${suffix}`);
    fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, "page.js");
    fs.writeFileSync(file, fileFor(cfg.base, suffix, cfg));
    console.log("wrote", path.relative(ROOT, file));
  }
}

console.log("done", BASES.length * SUFFIXES.length, "pages");
