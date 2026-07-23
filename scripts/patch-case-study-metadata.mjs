/**
 * Add canonical metadata + case-study JSON-LD to live case-study + portfolio layouts.
 * Run: node scripts/patch-case-study-metadata.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const CASE_STUDIES = [
  ["pathfinders", "pathfindersData", "PATHFINDERS_CASE_STUDY"],
  ["earthscape", "earthscapeData", "EARTHSCAPE_CASE_STUDY"],
  ["d-and-d-financial", "dAndDFinancialData", "D_AND_D_FINANCIAL_CASE_STUDY"],
  ["infinitystore", "infinitystoreData", "INFINITYSTORE_CASE_STUDY"],
  ["premieronesolutions", "premieronesolutionsData", "PREMIER_ONE_SOLUTIONS_CASE_STUDY"],
  ["cash-boys", "cashBoysData", "CASH_BOYS_CASE_STUDY"],
  ["sleepy-sloth-society", "sleepySlothSocietyData", "SLEEPY_SLOTH_SOCIETY_CASE_STUDY"],
  ["bay-clinic-of-chiropractic", "bayClinicOfChiropracticData", "BAY_CLINIC_OF_CHIROPRACTIC_CASE_STUDY"],
  ["amazed-home-care", "amazedHomeCareData", "AMAZED_HOME_CARE_CASE_STUDY"],
  ["expedition-labs", "expeditionLabsData", "EXPEDITION_LABS_CASE_STUDY"],
  ["kala-holdings", "kalaHoldingsData", "KALA_HOLDINGS_CASE_STUDY"],
];

const PORTFOLIO = [
  ["tiger", "Tiger Case Study", "Portfolio showcase: Tiger project by Saqrih."],
  ["acertus", "Acertus Case Study", "Portfolio showcase: Acertus project by Saqrih."],
  ["azelis-aes", "Azelis AES Case Study", "Portfolio showcase: Azelis AES project by Saqrih."],
  ["hrchitect", "HRchitect Case Study", "Portfolio showcase: HRchitect project by Saqrih."],
];

for (const [slug, file, exportName] of CASE_STUDIES) {
  const filePath = path.join(root, "src/app/case-studies", slug, "layout.js");
  const contents = `import { buildPageMetadata } from "../../../../lib/siteMetadata";
import { ${exportName} } from "../../../../lib/caseStudies/${file}";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, caseStudyJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: \`\${${exportName}.name} Case Study\`,
  description: ${exportName}.heroIntro,
  path: "/case-studies/${slug}",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Work", url: "/work" },
            { name: ${exportName}.name, url: "/case-studies/${slug}" },
          ]),
          caseStudyJsonLd({
            name: ${exportName}.name,
            description: ${exportName}.heroIntro,
            url: "/case-studies/${slug}",
          }),
        ]}
      />
      {children}
    </>
  );
}
`;
  fs.writeFileSync(filePath, contents);
  console.log("case-study", slug);
}

for (const [slug, title, description] of PORTFOLIO) {
  const filePath = path.join(root, "src/app/portfolio", slug, "layout.js");
  const contents = `import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, caseStudyJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "${title}",
  description: "${description}",
  path: "/portfolio/${slug}",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Work", url: "/work" },
            { name: "${title.replace(" Case Study", "")}", url: "/portfolio/${slug}" },
          ]),
          caseStudyJsonLd({
            name: "${title.replace(" Case Study", "")}",
            description: "${description}",
            url: "/portfolio/${slug}",
          }),
        ]}
      />
      {children}
    </>
  );
}
`;
  fs.writeFileSync(filePath, contents);
  console.log("portfolio", slug);
}

console.log("done");
