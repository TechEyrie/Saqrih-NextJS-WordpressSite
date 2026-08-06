/**
 * Homepage-layout content for /services/wordpress-development.
 * Copy rephrased for Saqrih (Qatar SEO) from https://freshysites.com/
 * Themes: WP design, development, hosting, maintenance, support, SEO, WooCommerce.
 */

import {
  WORDPRESS_DEV_PARENT,
  WORDPRESS_DEV_SUB_PAGES,
} from "./wordpressDevelopmentSubPages";

export const WORDPRESS_DEV_HOME = {
  path: "/services/wordpress-development",
  title: "WordPress Development",
  description:
    "WordPress development company in Qatar from Saqrih: custom WordPress design, development, WooCommerce, managed hosting, maintenance, security, SEO, and premium support for businesses in Doha and beyond.",
};

export const WORDPRESS_DEV_HOME_HERO = {
  titleLine1: "WordPress Development Agency",
  titleLine2: "You’ve Been Looking For",
  showTrademark: false,
  description:
    "US-grade WordPress craft with Qatar presence: design, development, hosting, maintenance, support, and SEO engineered for performance and growth.",
};

export const WORDPRESS_DEV_HOME_RTS =
  "The WordPress Partner Businesses in Qatar Trust to Ship and Scale";

export const WORDPRESS_DEV_HOME_OPERATE =
  "Saqrih is a WordPress specialist firm for ambitious brands in Doha and worldwide. We manage every layer of WordPress: custom design, deep technical development, managed hosting, proactive maintenance, retainer support, and SEO baked into the build. Our in-house experts deliver sites that stay secure, fast, and fully functional so you can focus on the business, not the CMS.";

export const WORDPRESS_DEV_HOME_ADVANTAGE = {
  label: "Why choose Saqrih as your WordPress agency in Doha",
  headingLines: [
    "Best-in-industry",
    "WordPress expertise",
    "and reliability.",
  ],
  paragraphs: [
    "WordPress is our core craft, not a side offering. From custom themes and plugins to WooCommerce, headless WordPress, and retained care, we bring senior engineering and clear communication to every project.",
    "We partner with startups, agencies, enterprises, and institutions across Qatar and the region to ship premium, professional, responsive WordPress websites tailored to brand, audience, and conversion goals.",
    "Launch is only the start. Managed hosting patterns, security hardening, Core Web Vitals work, and premium support keep your WordPress site always secured, always up, and always ready for growth.",
  ],
};

const UNLOCK_CARD_IDS = {
  design: "wp-design",
  development: "wp-dev",
  woocommerce: "woo",
  hosting: "hosting",
  maintenance: "wp-maintain",
  support: "support",
  "premium-support": "premium",
  "retained-services": "wp-retained",
  "search-engine-optimization": "seo",
  migration: "migrate",
  security: "security",
  "speed-optimization": "speed",
  backups: "wp-backups",
  elementor: "wp-elementor",
  divi: "wp-divi",
  theme: "wp-theme",
  convert: "wp-convert",
  "ada-compliance": "wp-ada",
  "gdpr-compliance": "wp-gdpr",
  "pci-compliance": "wp-pci",
  compliance: "wp-compliance",
  "marketing-pro": "wp-marketing",
  "white-label-wordpress": "wp-whitelabel",
};

const RTS_BADGES = {
  design: "Design",
  development: "Develop",
  woocommerce: "Commerce",
  hosting: "Hosting",
  maintenance: "Care",
  support: "Support",
  "premium-support": "Premium",
  "retained-services": "Retainer",
  "search-engine-optimization": "SEO",
  migration: "Migrate",
  security: "Secure",
  "speed-optimization": "Speed",
  backups: "Backups",
  elementor: "Elementor",
  divi: "Divi",
  theme: "Themes",
  convert: "Convert",
  "ada-compliance": "ADA",
  "gdpr-compliance": "GDPR",
  "pci-compliance": "PCI",
  compliance: "Compliance",
  "marketing-pro": "Marketing",
  "white-label-wordpress": "White label",
};

const RTS_IMAGES = {
  design: "/services-pics/wordpress/design-wordpress-clean.png",
  development: "/services-pics/wordpress/custom-wordpress-clean.png",
  woocommerce: "/services-pics/wordpress/woocommerce-wordpress-clean.png",
  hosting: "/services-pics/wordpress/hosting-wordpress-clean.png",
  maintenance: "/services-pics/wordpress/maintenance-wordpress-clean.png",
  support: "/services-pics/wordpress/support-wordpress-clean.png",
  "premium-support": "/services-pics/wordpress/premiumsupport-wordpress-clean.png",
  "retained-services": "/services-pics/wordpress/retained-wordpress-clean.png",
  "search-engine-optimization": "/services-pics/wordpress/seo-wordpress-clean.png",
  migration: "/services-pics/wordpress/migration-wordpress-clean.png",
  security: "/services-pics/wordpress/security-wordpress-clean.png",
  "speed-optimization": "/services-pics/wordpress/speed-wordpress-clean.png",
  backups: "/services-pics/wordpress/backups-wordpress-clean.png",
  elementor: "/services-pics/wordpress/elementor-wordpress-clean.png",
  divi: "/services-pics/wordpress/divi-wordpress-clean.png",
  theme: "/services-pics/wordpress/themeexperts-wordpress-clean.png",
  convert: "/services-pics/wordpress/conversion-wordpress-clean.png",
  "ada-compliance": "/services-pics/wordpress/ada-wordpress-clean.png",
  "gdpr-compliance": "/services-pics/wordpress/gdpr-wordpress-clean.png",
  "pci-compliance": "/services-pics/wordpress/pci-wordpress-clean.png",
  compliance: "/services-pics/wordpress/compliance-wordpress-clean.png",
  "marketing-pro": "/services-pics/wordpress/marketing-wordpress-clean.png",
  "white-label-wordpress": "/services-pics/wordpress/whitelabel-wordpress-clean.png",
};

export const WORDPRESS_DEV_HOME_UNLOCKING = {
  headingLine1: "Explore Our WordPress",
  headingLine2: "Website Services",
  cards: WORDPRESS_DEV_SUB_PAGES.map((s, i) => ({
    id: UNLOCK_CARD_IDS[s.slug] || s.slug,
    title: s.title,
    desc: s.shortDesc,
    href: `${WORDPRESS_DEV_PARENT.path}/${s.slug}`,
    ...(i === 0
      ? {
          isHero: true,
          eyebrow: "WordPress development services in Qatar",
        }
      : {}),
  })),
};

export const WORDPRESS_DEV_HOME_RTS_CARDS = WORDPRESS_DEV_SUB_PAGES.map((s) => ({
  badge: RTS_BADGES[s.slug] || "WordPress",
  title: s.title,
  desc: s.shortDesc,
  href: `${WORDPRESS_DEV_PARENT.path}/${s.slug}`,
  image: RTS_IMAGES[s.slug],
}));

export const WORDPRESS_DEV_HOME_RTS_INTRO =
  "WordPress design, custom development, WooCommerce, managed hosting, maintenance, support, retainers, SEO, migration, security, speed, builders, compliance, and white-label delivery.";
export {
  WP_HOME_TECH_CATEGORIES,
  WP_HOME_TECH_STATS,
  WP_HOME_TECH_CAPABILITIES,
  WP_HOME_TECH_MARQUEE,
  WP_HOME_TECH_COPY,
} from "./wordpressDevelopmentTech";