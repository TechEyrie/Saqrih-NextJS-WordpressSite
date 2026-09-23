/**
 * SEO geo aliases for selected service pages.
 * Each base gets a -qatar duplicate (content reused from source).
 */
export const QATAR_ALIAS_BASES = [
  {
    base: "web-design",
    title: "Website Design",
    description:
      "Website Design in Qatar from Saqrih. Strategy, UX, and high-performing websites for businesses in Doha and the wider Middle East.",
    serviceType: "Website design",
    kind: "hub",
    hub: "website-design",
  },
  {
    base: "web-development",
    title: "Web Application Development",
    description:
      "Web Application Development in Qatar from Saqrih. Custom web apps, portals, and business systems for teams in Doha and the region.",
    serviceType: "Web application development",
    kind: "hub",
    hub: "web-application-development",
  },
  {
    base: "wordpress-development",
    title: "WordPress Development",
    description:
      "WordPress Development in Qatar from Saqrih. Custom WordPress design, builds, WooCommerce, hosting, and ongoing care.",
    serviceType: "WordPress development",
    kind: "hub",
    hub: "wordpress-development",
  },
  {
    base: "ecommerce-development",
    title: "E-commerce Development",
    description:
      "E-commerce Development in Qatar from Saqrih. Custom stores, marketplaces, and commerce integrations built for growth.",
    serviceType: "E-commerce development",
    kind: "hub",
    hub: "ecommerce-development",
  },
  {
    base: "ai-automation",
    title: "AI and Automation",
    description:
      "AI and Automation in Qatar from Saqrih. Practical automation and AI workflows that reduce manual work for businesses.",
    serviceType: "AI and Automation",
    kind: "webapp-sub",
    subSlug: "ai-and-automation",
  },
  {
    base: "software-development",
    title: "Software Development",
    description:
      "Software Development in Qatar from Saqrih. End to end software builds for custom platforms and digital products.",
    serviceType: "Software Development",
    kind: "webapp-sub",
    subSlug: "software-development",
  },
];

export const QATAR_ALIAS_SUFFIXES = ["qatar"];

export function getAllQatarAliasPaths() {
  const paths = [];
  for (const item of QATAR_ALIAS_BASES) {
    for (const suffix of QATAR_ALIAS_SUFFIXES) {
      paths.push(`/${item.base}-${suffix}`);
    }
  }
  return paths;
}
