/**
 * Footer "Our services" — 32 links total across 9 hubs.
 * Primary hubs (mega-menu / homepage order 1–5): 4 each
 * Secondary hubs (6–9): 3 each
 * 5×4 + 4×3 = 32
 */

const FOOTER_SERVICE_GROUPS = [
  {
    hub: "Website Design",
    href: "/services/website-design",
    count: 4,
    links: [
      { label: "Business Website Development", href: "/services/website-design/business-website-development" },
      { label: "Custom Website Development", href: "/services/website-design/custom-website-development" },
      { label: "Corporate Website Development", href: "/services/website-design/corporate-website-development" },
      { label: "Website Redesign", href: "/services/website-design/website-redesign" },
    ],
  },
  {
    hub: "Web Application Development",
    href: "/services/web-application-development",
    count: 4,
    links: [
      { label: "Custom Web Application Development", href: "/services/web-application-development/custom-web-application-development" },
      { label: "Enterprise Web Application Development", href: "/services/web-application-development/enterprise-web-application-development" },
      { label: "CRM Development", href: "/services/web-application-development/crm-development" },
      { label: "Admin Dashboard Development", href: "/services/web-application-development/admin-dashboard-development" },
    ],
  },
  {
    hub: "SaaS Development",
    href: "/services/saas-development",
    count: 4,
    links: [
      { label: "Custom SaaS Development", href: "/services/saas-development/custom-saas-development" },
      { label: "SaaS MVP Development", href: "/services/saas-development/saas-mvp-development" },
      { label: "Multi-Tenant SaaS Development", href: "/services/saas-development/multi-tenant-saas-development" },
      { label: "Subscription & Billing Integration", href: "/services/saas-development/subscription-billing-integration" },
    ],
  },
  {
    hub: "E-commerce Development",
    href: "/services/ecommerce-development",
    count: 4,
    links: [
      { label: "Custom E-commerce Development", href: "/services/ecommerce-development/custom-ecommerce-development" },
      { label: "WooCommerce Development", href: "/services/ecommerce-development/woocommerce-development" },
      { label: "Shopify Development", href: "/services/ecommerce-development/shopify-development" },
      { label: "Payment Gateway Integration", href: "/services/ecommerce-development/payment-gateway-integration" },
    ],
  },
  {
    hub: "Mobile App Development",
    href: "/services/mobile-app-development",
    count: 4,
    links: [
      { label: "Custom Mobile App Development", href: "/services/mobile-app-development/custom-mobile-app-development" },
      { label: "Cross-Platform App Development", href: "/services/mobile-app-development/cross-platform-app-development" },
      { label: "iOS App Development", href: "/services/mobile-app-development/ios-app-development" },
      { label: "Android App Development", href: "/services/mobile-app-development/android-app-development" },
    ],
  },
  {
    hub: "CMS & Headless Development",
    href: "/services/cms-headless-development",
    count: 3,
    links: [
      { label: "Custom CMS Development", href: "/services/cms-headless-development/custom-cms-development" },
      { label: "Headless CMS Development", href: "/services/cms-headless-development/headless-cms-development" },
      { label: "CMS Migration Services", href: "/services/cms-headless-development/cms-migration-services" },
    ],
  },
  {
    hub: "API & Integration Development",
    href: "/services/api-integration-development",
    count: 3,
    links: [
      { label: "Custom API Development", href: "/services/api-integration-development/custom-api-development" },
      { label: "REST API Development", href: "/services/api-integration-development/rest-api-development" },
      { label: "Third-Party API Integration", href: "/services/api-integration-development/third-party-api-integration" },
    ],
  },
  {
    hub: "Website Support & Maintenance",
    href: "/services/website-support-maintenance",
    count: 3,
    links: [
      { label: "Website Maintenance Services", href: "/services/website-support-maintenance/website-maintenance-services" },
      { label: "Security Updates & Vulnerability Management", href: "/services/website-support-maintenance/security-updates-vulnerability-management" },
      { label: "Website Performance Optimization", href: "/services/website-support-maintenance/website-performance-optimization" },
    ],
  },
  {
    hub: "WordPress Development",
    href: "/services/wordpress-development",
    count: 3,
    links: [
      { label: "Custom WordPress Development", href: "/services/wordpress-development/development" },
      { label: "WordPress Website Design", href: "/services/wordpress-development/design" },
      { label: "WooCommerce Development", href: "/services/wordpress-development/woocommerce" },
    ],
  },
];

/** Flat 32-link list for the existing footer mega columns. */
export const FOOTER_SERVICE_LINKS = FOOTER_SERVICE_GROUPS.flatMap((g) => g.links);

export { FOOTER_SERVICE_GROUPS };
