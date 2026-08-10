import { DEFAULT_OG_IMAGE_PATH } from "./siteOrigin.js";

const DEFAULT_DESCRIPTION =
  "Saqrih is a Qatar-based digital agency delivering website development, web apps, SaaS, e-commerce, mobile apps, WordPress, CMS, APIs, and ongoing support.";

function meta(title, description = DEFAULT_DESCRIPTION) {
  return { title, description };
}

/** WordPress service slugs → unique page titles (template adds " | Saqrih"). */
export const WORDPRESS_SERVICE_METADATA = {
  design: meta(
    "Beautiful WordPress Website Design",
    "Custom WordPress website design from Saqrih—Qatar-based experts in UX, branding, and conversion-focused layouts."
  ),
  development: meta(
    "WordPress Website Development",
    "Professional WordPress development from Saqrih—custom builds, integrations, and scalable architecture."
  ),
  hosting: meta(
    "Elite Managed WordPress Hosting",
    "Managed WordPress hosting with security, speed, and expert support from Saqrih."
  ),
  maintainance: meta(
    "WordPress Website Maintenance",
    "WordPress maintenance plans covering updates, monitoring, fixes, and proactive care from Saqrih."
  ),
  "premium-support": meta(
    "Saqrih+ Premium WordPress Support",
    "Priority WordPress support and proactive site care with Saqrih+ Premium Support."
  ),
  "premium-support1": meta(
    "Saqrih+ Premium Support Plans",
    "Explore Saqrih+ premium WordPress support tiers for agencies and growing businesses."
  ),
  "search-engine-optimization": meta(
    "WordPress SEO Services",
    "Search engine optimization for WordPress sites—technical SEO, content, and measurable growth."
  ),
  security: meta(
    "WordPress Security Services",
    "Hardening, monitoring, and incident response for WordPress sites from Saqrih security experts."
  ),
  support: meta(
    "WordPress Support Services",
    "Reliable WordPress support for fixes, updates, and day-to-day site management."
  ),
  backups: meta(
    "WordPress Backup Services",
    "Automated WordPress backups, restore testing, and disaster recovery from Saqrih."
  ),
  convert: meta(
    "Convert Your Website to WordPress",
    "Migrate and rebuild your site on WordPress with Saqrih's conversion specialists."
  ),
  compliance: meta(
    "WordPress Compliance Services",
    "Compliance-focused WordPress development and audits from Saqrih."
  ),
  "ada-compliance": meta(
    "WordPress ADA Compliance",
    "ADA accessibility audits and remediation for WordPress websites."
  ),
  "gdpr-compliance": meta(
    "WordPress GDPR Compliance",
    "GDPR-ready WordPress builds, policies, and compliance support from Saqrih."
  ),
  "pci-compliance": meta(
    "WordPress PCI Compliance",
    "PCI compliance for WordPress ecommerce and payment flows."
  ),
  divi: meta(
    "WordPress Divi Development",
    "Expert Divi theme development, customization, and performance optimization."
  ),
  elementor: meta(
    "WordPress Elementor Development",
    "Custom Elementor builds and theme development from certified WordPress experts."
  ),
  theme: meta(
    "WordPress Theme & Builder Services",
    "Custom WordPress themes and page-builder implementations from Saqrih."
  ),
  migration: meta(
    "WordPress Migration Services",
    "Safe WordPress migrations with minimal downtime and SEO preservation."
  ),
  "marketing-pro": meta(
    "WordPress Marketing Pro",
    "Marketing-focused WordPress services—landing pages, funnels, and growth experiments."
  ),
  "retained-services": meta(
    "WordPress Retained Services",
    "Dedicated WordPress design and development capacity on retainer."
  ),
  "sell-my-design-company": meta(
    "Sell Your WordPress Agency",
    "Saqrih acquires WordPress businesses and design agencies—get a fair valuation."
  ),
  "speed-optimization": meta(
    "WordPress Speed Optimization",
    "Core Web Vitals improvements, caching, and performance tuning for WordPress."
  ),
  "white-label-wordpress": meta(
    "White Label WordPress Services",
    "White-label WordPress design and development for agencies partnering with Saqrih."
  ),
  woocommerce: meta(
    "WooCommerce Development",
    "WooCommerce store design, development, and optimization from Saqrih."
  ),
};

function wordpressPaths(slug) {
  const entry = WORDPRESS_SERVICE_METADATA[slug];
  if (!entry) return {};
  return {
    [`/wordpress/${slug}`]: entry,
    [`/icomat1/wordpress/${slug}`]: entry,
  };
}

const STATIC_PATH_METADATA = {
  "/": meta(
    "Saqrih - Web and Software Development Company in Doha, Qatar",
    DEFAULT_DESCRIPTION
  ),
  "/about-us": meta(
    "About Saqrih",
    "Meet Saqrih—a Qatar-based digital agency delivering websites, apps, SaaS, e-commerce, WordPress, and ongoing support across the Gulf and beyond."
  ),
  "/icomat1-about-us": meta(
    "About Saqrih",
    "Meet the Saqrih team and our expertise across web, app, and WordPress delivery."
  ),
  "/work": meta(
    "Our Work",
    "Explore websites, applications, and digital products built by Saqrih."
  ),
  "/icomat1-work": meta(
    "Portfolio & Case Studies",
    "Selected web, app, and WordPress projects from Saqrih."
  ),
  "/icomat-work": meta(
    "Featured Projects",
    "Featured web and product projects from Saqrih."
  ),
  "/blog": meta(
    "Blog",
    "Insights from Saqrih on websites, apps, SaaS, e-commerce, CMS, WordPress, and digital product strategy."
  ),
  "/reviews": meta("Client Reviews", "Read what clients say about working with Saqrih."),
  "/resources": meta(
    "Resources",
    "Guides and resources for growing digital products and websites."
  ),
  "/security-bulletins": meta(
    "Security Bulletins",
    "Security updates and bulletins from Saqrih."
  ),
  "/sell-my-agency": meta(
    "Sell Your Agency",
    "Looking to sell your WordPress or design agency? Talk to Saqrih."
  ),
  "/why-saqrih": meta(
    "Why Saqrih",
    "Why businesses choose Saqrih for websites, apps, SaaS, e-commerce, WordPress, and ongoing support."
  ),
  "/privacy-policy": meta(
    "Privacy Policy",
    "Saqrih privacy policy and data handling practices."
  ),
  "/markets": meta(
    "Markets We Serve",
    "Saqrih serves clients in Qatar, the GCC, the United States, and worldwide."
  ),
  "/industries": meta(
    "Industries We Serve",
    "Digital solutions tailored to your industry—websites, apps, and platforms from Saqrih."
  ),
  "/wordpress": meta(
    "WordPress Services",
    "Full-service WordPress design, development, hosting, maintenance, and SEO from Saqrih."
  ),
  "/wordpress/industries": meta(
    "WordPress by Industry",
    "Industry-specific WordPress solutions from Saqrih."
  ),
  "/wordpress/maintenance": WORDPRESS_SERVICE_METADATA.maintainance,
  "/portfolio/tiger": meta("Tiger Case Study", "Portfolio showcase: Tiger project by Saqrih."),
  "/portfolio/acertus": meta("Acertus Case Study", "Portfolio showcase: Acertus project by Saqrih."),
  "/portfolio/azelis-aes": meta(
    "Azelis AES Case Study",
    "Portfolio showcase: Azelis AES project by Saqrih."
  ),
  "/portfolio/hrchitect": meta(
    "HRchitect Case Study",
    "Portfolio showcase: HRchitect project by Saqrih."
  ),
  "/llms.txt": meta(
    "LLMs.txt",
    "Machine-readable plain-text summary of Saqrih for AI systems."
  ),
  "/icomat1": meta("Saqrih Digital Agency", DEFAULT_DESCRIPTION),
  "/home1": meta("Saqrih Homepage", DEFAULT_DESCRIPTION),
  "/icomat": meta("Saqrih", DEFAULT_DESCRIPTION),
};

export const PATH_METADATA = {
  ...STATIC_PATH_METADATA,
  ...Object.keys(WORDPRESS_SERVICE_METADATA).reduce(
    (acc, slug) => Object.assign(acc, wordpressPaths(slug)),
    {}
  ),
};

export function normalizePathname(pathname) {
  if (!pathname) return "/";
  const path = pathname.split("?")[0].split("#")[0];
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path || "/";
}

/** Metadata for static routes; dynamic routes use segment layouts. */
export function getMetadataForPath(pathname) {
  const path = normalizePathname(pathname);
  return PATH_METADATA[path] ?? null;
}

/**
 * @param {{
 *   title: string;
 *   description?: string;
 *   path?: string; // absolute path e.g. "/wordpress/design" → canonical
 *   robots?: import("next").Metadata["robots"];
 *   image?: string; // OG/Twitter image path
 *   type?: "website" | "article";
 * }} opts
 */
export function buildPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  robots,
  image = DEFAULT_OG_IMAGE_PATH,
  type = "website",
}) {
  const ogImage = {
    url: image,
    width: 1200,
    height: 630,
    alt: title,
  };

  /** @type {import("next").Metadata} */
  const metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      type,
      siteName: "Saqrih",
      images: [ogImage],
      ...(path ? { url: path } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };

  if (path) {
    metadata.alternates = { canonical: path };
  }
  if (robots != null) {
    metadata.robots = robots;
  }

  return metadata;
}

export { DEFAULT_DESCRIPTION };
