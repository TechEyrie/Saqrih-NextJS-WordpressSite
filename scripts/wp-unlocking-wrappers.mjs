import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const slugs = [
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

const wrapper = (slug) => `"use client";

import UnlockingSectionBase from "../icomat1-wordpress-design/UnlockingSectionBase";

export default function UnlockingSection() {
  return <UnlockingSectionBase pageKey="wp-${slug}" />;
}
`;

for (const slug of slugs) {
  const file = path.join(
    root,
    `components/icomat1-wordpress-${slug}/UnlockingSection.js`,
  );
  if (slug === "design") {
    fs.writeFileSync(
      file,
      `"use client";

import UnlockingSectionBase from "./UnlockingSectionBase";

export default function UnlockingSection() {
  return <UnlockingSectionBase pageKey="wp-design" />;
}
`,
    );
  } else if (fs.existsSync(file)) {
    fs.writeFileSync(file, wrapper(slug));
  }
}

fs.writeFileSync(
  path.join(root, "components/wordpress/UnlockingSection.js"),
  `"use client";

import UnlockingSectionBase from "../icomat1-wordpress-design/UnlockingSectionBase";

export default function UnlockingSection() {
  return <UnlockingSectionBase pageKey="wordpress" />;
}
`,
);

console.log("Done");
