import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const portfolios = ["hrchitect", "tiger", "azelis-aes", "acertus"];

for (const slug of portfolios) {
  const file = path.join(
    root,
    `components/portfolio/${slug}/PortfolioShowcaseSection.js`,
  );
  let c = fs.readFileSync(file, "utf8");
  if (!c.includes("saqrih-") && !c.includes("getPagePic")) continue;

  if (!c.includes("getPagePic")) {
    c = c.replace(
      '"use client";\n\n',
      `"use client";\n\nimport { getPagePic } from "../../../lib/pageImages";\n\nconst SHOWCASE_IMG_1 = getPagePic("portfolio-${slug}", "showcase", 0);\nconst SHOWCASE_IMG_2 = getPagePic("portfolio-${slug}", "showcase", 1);\n\n`,
    );
  }

  c = c.replace(/url\('\/pics\/saqrih-\d+\.png'\)/g, (match, offset) => {
    const before = c.slice(0, offset);
    const count = (before.match(/SHOWCASE_IMG/g) || []).length;
    return count === 0 ? "url('" + `\${SHOWCASE_IMG_1}` + "')" : "url('" + `\${SHOWCASE_IMG_2}` + "')";
  });

  // Fix template - use direct variable in style strings
  c = c.replace(
    /url\('\/pics\/saqrih-6\.png'\)/g,
    "url('\" + SHOWCASE_IMG_1 + \"')",
  );
  c = c.replace(
    /url\('\/pics\/saqrih-8\.png'\)/g,
    "url('\" + SHOWCASE_IMG_2 + \"')",
  );

  // Use template literals in JSX - read approach: replace with ${SHOWCASE_IMG_1} in template string style

  fs.writeFileSync(file, c);
  console.log(slug);
}
