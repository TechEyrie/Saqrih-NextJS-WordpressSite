import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

function write(file, content) {
  fs.writeFileSync(path.join(root, file), content);
}

// WP Unlocking wrappers with pageKey
const wpSlugs = [
  "design",
  "development",
  "hosting",
  "maintainance",
  "support",
  "security",
  "speed-optimization",
  "search-engine-optimization",
  "migration",
  "backups",
  "convert",
  "compliance",
  "ada-compliance",
  "gdpr-compliance",
  "pci-compliance",
  "elementor",
  "divi",
  "theme",
  "woocommerce",
  "marketing-pro",
  "premium-support",
  "retained-services",
  "white-label-wordpress",
  "sell-my-design-company",
];

for (const slug of wpSlugs) {
  const dir = `components/icomat1-wordpress-${slug}`;
  const unlockingPath = `${dir}/UnlockingSection.js`;
  if (fs.existsSync(path.join(root, unlockingPath))) {
    write(
      unlockingPath,
      `"use client";

import BaseUnlockingSection from "../icomat1-wordpress-design/UnlockingSection";

export default function UnlockingSection() {
  return <BaseUnlockingSection pageKey="wp-${slug}" />;
}
`,
    );
  }

  const supportPath = `${dir}/SupportHighlightSection.js`;
  if (fs.existsSync(path.join(root, supportPath))) {
    const content = fs.readFileSync(path.join(root, supportPath), "utf8");
    if (content.includes("SUPPORT_HIGHLIGHT_IMAGE")) {
      write(
        supportPath,
        `"use client";

import Image from "next/image";
import { getPagePic } from "../../lib/pageImages";

const DEFAULT_IMAGE = getPagePic("wp-${slug}", "supportHighlight");

export default function SupportHighlightSection({ imageSrc = DEFAULT_IMAGE }) {
${content.split("export default function SupportHighlightSection")[1].replace(/^\(\{ imageSrc = DEFAULT_IMAGE \}\)/, "({ imageSrc = DEFAULT_IMAGE })")}
`.replace(
          /^import[\s\S]*?export default function SupportHighlightSection/,
          "",
        ),
      );
    }
  }
}

console.log("WP wrappers: run manual fix for SupportHighlight - using simpler patch");
