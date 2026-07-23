const fs = require("fs");
const path = require("path");

const defs = [
  {
    slug: "custom-ecommerce-development",
    title: "Custom E-commerce Development",
    shortDesc:
      "Build fully customized online stores tailored to your business model, products, and customer experience.",
    focus: "custom",
    heroTitle: "Custom E-commerce\nDevelopment in Qatar",
    heroLead:
      "Build fully customized online stores tailored to your business model, products, and customer experience, from catalog to checkout.",
    heroTitleMaxCh: "16ch",
    heading2: "Stores shaped around how you sell and how customers buy",
    techLine2: "Custom Commerce Expertise",
  },
  {
    slug: "woocommerce-development",
    title: "WooCommerce Development",
    shortDesc:
      "Develop, customize, and optimize WooCommerce stores with custom themes, plugins, and integrations.",
    focus: "woo",
    heroTitle: "WooCommerce\nDevelopment in Qatar",
    heroLead:
      "Develop, customize, and optimize WooCommerce stores with custom themes, plugins, and integrations that fit your brand.",
    heroTitleMaxCh: "12ch",
    heading2: "WooCommerce stores that convert and stay maintainable",
    techLine2: "WooCommerce Expertise",
  },
  {
    slug: "shopify-development",
    title: "Shopify Development",
    shortDesc:
      "Create scalable Shopify stores with custom themes, apps, and checkout experiences.",
    focus: "shopify",
    heroTitle: "Shopify\nDevelopment in Qatar",
    heroLead:
      "Create scalable Shopify stores with custom themes, apps, and checkout experiences built for growth.",
    heroTitleMaxCh: "10ch",
    heading2: "Shopify storefronts that look premium and sell smoothly",
    techLine2: "Shopify Expertise",
  },
  {
    slug: "magento-development",
    title: "Magento Development",
    shortDesc:
      "Develop enterprise-grade Magento stores for businesses requiring advanced features and scalability.",
    focus: "magento",
    heroTitle: "Magento\nDevelopment in Qatar",
    heroLead:
      "Develop enterprise-grade Magento stores for businesses requiring advanced features, complex catalogs, and scalability.",
    heroTitleMaxCh: "10ch",
    heading2: "Magento commerce for complex catalogs and enterprise needs",
    techLine2: "Magento Expertise",
  },
  {
    slug: "opencart-development",
    title: "OpenCart Development",
    shortDesc:
      "Build and customize OpenCart stores for small and medium-sized businesses.",
    focus: "opencart",
    heroTitle: "OpenCart\nDevelopment in Qatar",
    heroLead:
      "Build and customize OpenCart stores for small and medium-sized businesses that need a practical, flexible storefront.",
    heroTitleMaxCh: "10ch",
    heading2: "OpenCart stores that stay simple to run and easy to grow",
    techLine2: "OpenCart Expertise",
  },
  {
    slug: "multi-vendor-marketplace-development",
    title: "Multi-Vendor Marketplace Development",
    shortDesc:
      "Create marketplaces where multiple vendors can manage products, orders, commissions, and payments.",
    focus: "multivendor",
    heroTitle: "Multi-Vendor Marketplace\nDevelopment in Qatar",
    heroLead:
      "Create marketplaces where multiple vendors can manage products, orders, commissions, and payments from one platform.",
    heroTitleMaxCh: "20ch",
    heading2: "Marketplaces with clear vendor, buyer, and admin flows",
    techLine2: "Marketplace Expertise",
  },
  {
    slug: "b2b-ecommerce-solutions",
    title: "B2B E-commerce Solutions",
    shortDesc:
      "Develop wholesale portals with customer-specific pricing, quotation systems, bulk ordering, and account management.",
    focus: "b2b",
    heroTitle: "B2B E-commerce\nSolutions in Qatar",
    heroLead:
      "Develop wholesale portals with customer-specific pricing, quotation systems, bulk ordering, and account management for trade buyers.",
    heroTitleMaxCh: "14ch",
    heading2: "Wholesale portals built for pricing rules and bulk orders",
    techLine2: "B2B Commerce Expertise",
  },
  {
    slug: "subscription-commerce-development",
    title: "Subscription Commerce Development",
    shortDesc:
      "Build recurring subscription stores with automated billing, renewals, and customer self-service.",
    focus: "subscription",
    heroTitle: "Subscription Commerce\nDevelopment in Qatar",
    heroLead:
      "Build recurring subscription stores with automated billing, renewals, and customer self-service that reduce churn friction.",
    heroTitleMaxCh: "18ch",
    heading2: "Subscription stores that bill cleanly and retain members",
    techLine2: "Subscription Commerce Expertise",
  },
  {
    slug: "payment-gateway-integration",
    title: "Payment Gateway Integration",
    shortDesc:
      "Integrate secure payment solutions including Stripe, PayPal, local payment gateways, Apple Pay, Google Pay, and more.",
    focus: "payments",
    heroTitle: "Payment Gateway\nIntegration in Qatar",
    heroLead:
      "Integrate secure payment solutions including Stripe, PayPal, local payment gateways, Apple Pay, Google Pay, and more into checkout.",
    heroTitleMaxCh: "14ch",
    heading2: "Checkout payments that customers trust and finish",
    techLine2: "Payments Expertise",
  },
  {
    slug: "shipping-logistics-integration",
    title: "Shipping & Logistics Integration",
    shortDesc:
      "Connect stores with shipping carriers, order tracking, warehouse management, and fulfillment services.",
    focus: "shipping",
    heroTitle: "Shipping & Logistics\nIntegration in Qatar",
    heroLead:
      "Connect stores with shipping carriers, order tracking, warehouse management, and fulfillment services so orders keep moving.",
    heroTitleMaxCh: "16ch",
    heading2: "Shipping integrations that keep fulfillment accurate",
    techLine2: "Shipping Expertise",
  },
  {
    slug: "erp-crm-integration",
    title: "ERP & CRM Integration",
    shortDesc:
      "Integrate your online store with ERP, CRM, inventory, accounting, and marketing platforms.",
    focus: "erp",
    heroTitle: "ERP & CRM\nIntegration in Qatar",
    heroLead:
      "Integrate your online store with ERP, CRM, inventory, accounting, and marketing platforms so operations stay in sync.",
    heroTitleMaxCh: "12ch",
    heading2: "Connect commerce to the systems that run your business",
    techLine2: "ERP & CRM Expertise",
  },
  {
    slug: "ecommerce-migration",
    title: "E-commerce Migration",
    shortDesc:
      "Migrate stores from Shopify, Magento, OpenCart, Wix, Squarespace, or custom systems while preserving products, customers, orders, and SEO.",
    focus: "migrate",
    heroTitle: "E-commerce\nMigration in Qatar",
    heroLead:
      "Migrate stores from Shopify, Magento, OpenCart, Wix, Squarespace, or custom systems while preserving products, customers, orders, and SEO.",
    heroTitleMaxCh: "12ch",
    heading2: "Move platforms without losing catalog, customers, or rankings",
    techLine2: "Migration Expertise",
  },
  {
    slug: "store-performance-optimization",
    title: "Store Performance Optimization",
    shortDesc:
      "Improve loading speed, Core Web Vitals, database performance, caching, and overall user experience.",
    focus: "perf",
    heroTitle: "Store Performance\nOptimization in Qatar",
    heroLead:
      "Improve loading speed, Core Web Vitals, database performance, caching, and overall user experience so shoppers stay and convert.",
    heroTitleMaxCh: "16ch",
    heading2: "Faster stores that feel premium on every device",
    techLine2: "Performance Expertise",
  },
  {
    slug: "conversion-rate-optimization",
    title: "Conversion Rate Optimization (CRO)",
    shortDesc:
      "Optimize product pages, checkout flow, calls-to-action, and user experience to increase conversions.",
    focus: "cro",
    heroTitle: "Conversion Rate\nOptimization in Qatar",
    heroLead:
      "Optimize product pages, checkout flow, calls-to-action, and user experience to increase conversions without guessing.",
    heroTitleMaxCh: "14ch",
    heading2: "CRO that turns more browsers into paying customers",
    techLine2: "CRO Expertise",
  },
  {
    slug: "ecommerce-maintenance-support",
    title: "E-commerce Maintenance & Support",
    shortDesc:
      "Provide ongoing updates, security, backups, bug fixes, feature enhancements, and technical support.",
    focus: "support",
    heroTitle: "E-commerce Maintenance &\nSupport in Qatar",
    heroLead:
      "Ongoing updates, security, backups, bug fixes, feature enhancements, and technical support so your store stays reliable after launch.",
    heroTitleMaxCh: "18ch",
    heading2: "Keep your store secure, updated, and selling",
    techLine2: "Maintenance Expertise",
  },
];

const featureSets = {
  custom: [
    { title: "Business-model fit", desc: "Catalog, pricing, and checkout are designed around how you actually sell, not a generic demo store." },
    { title: "Conversion-minded UX", desc: "Product discovery, carts, and checkout reduce friction on mobile and desktop." },
    { title: "Integration-ready core", desc: "Payments, shipping, ERP, and CRM connections are planned into the build." },
    { title: "Launch with confidence", desc: "QA, go-live checklists, and handover keep opening day calm." },
  ],
  woo: [
    { title: "Theme and plugin craft", desc: "Custom themes and careful plugin choices keep WooCommerce fast and maintainable." },
    { title: "Checkout and catalog control", desc: "Product types, variations, and payment flows match your offering." },
    { title: "WordPress ecosystem strength", desc: "Content and commerce stay together for marketing-led storefronts." },
    { title: "Ongoing optimization", desc: "Speed, security, and feature work continue after launch when you need them." },
  ],
  shopify: [
    { title: "Custom theme experiences", desc: "Brand-led storefronts that still use Shopify strengths for scale and ops." },
    { title: "Apps with intention", desc: "We add apps where they help and avoid bloating checkout with noise." },
    { title: "Checkout polish", desc: "Flows designed to reduce drop-off and support local payment expectations." },
    { title: "Growth-ready setup", desc: "Collections, metafields, and ops patterns that support expanding catalogs." },
  ],
  magento: [
    { title: "Enterprise catalog depth", desc: "Complex products, pricing rules, and store views handled with Magento power." },
    { title: "Scalable architecture", desc: "Environments and modules planned for larger traffic and team workflows." },
    { title: "Advanced feature delivery", desc: "B2B rules, multi-store, and custom modules when standard themes are not enough." },
    { title: "Operational discipline", desc: "Deployments, testing, and performance care suited to Magento complexity." },
  ],
  opencart: [
    { title: "Practical SMB storefronts", desc: "OpenCart builds that stay approachable for smaller teams to run day to day." },
    { title: "Custom modules where needed", desc: "Extend OpenCart for local payments, shipping, or catalog needs." },
    { title: "Clean admin experience", desc: "Product and order management stays usable for non-technical staff." },
    { title: "Cost-aware delivery", desc: "Right-sized scope for businesses that need commerce without enterprise overhead." },
  ],
  multivendor: [
    { title: "Vendor onboarding", desc: "Seller profiles, approvals, and catalog tools that protect marketplace quality." },
    { title: "Commissions and payouts", desc: "Fee logic and payment flows designed for multi-party transactions." },
    { title: "Shared order lifecycle", desc: "Buyers, vendors, and admins share clear status across fulfillment." },
    { title: "Trust and moderation", desc: "Reviews, disputes, and admin controls that protect the marketplace brand." },
  ],
  b2b: [
    { title: "Account-based pricing", desc: "Customer-specific prices, tiers, and visibility rules for wholesale buyers." },
    { title: "Quotes and bulk orders", desc: "Quotation flows and bulk ordering patterns that match trade purchasing." },
    { title: "Buyer account management", desc: "Company accounts, roles, and order history for repeat B2B customers." },
    { title: "Ops alignment", desc: "Connect pricing and orders to ERP or CRM when wholesale volume demands it." },
  ],
  subscription: [
    { title: "Plan and renewal logic", desc: "Subscriptions, trials, and renewals map cleanly to product access and shipping." },
    { title: "Automated billing", desc: "Recurring charges with careful handling of failures and customer updates." },
    { title: "Self-serve account tools", desc: "Customers manage plans, skips, and payment methods without support tickets." },
    { title: "Retention-ready ops", desc: "Clear subscription state for support and finance teams." },
  ],
  payments: [
    { title: "Global and local rails", desc: "Stripe, PayPal, wallets, and regional gateways wired for your market." },
    { title: "Secure checkout patterns", desc: "PCI-aware integrations and failure handling that protect revenue and trust." },
    { title: "Wallets and BNPL options", desc: "Apple Pay, Google Pay, and flexible payment options where they lift conversion." },
    { title: "Reconcile-friendly setup", desc: "Clear payment states for ops and finance after go-live." },
  ],
  shipping: [
    { title: "Carrier connections", desc: "Rates, labels, and tracking tied to DHL, FedEx, UPS, Aramex, and more." },
    { title: "Fulfillment orchestration", desc: "Warehouse and multi-carrier tools like ShipStation or EasyPost when needed." },
    { title: "Customer tracking clarity", desc: "Order status and tracking that reduce where-is-my-order tickets." },
    { title: "Ops-ready workflows", desc: "Shipping rules that match how your warehouse actually packs and ships." },
  ],
  erp: [
    { title: "Order and inventory sync", desc: "Stock and orders stay accurate across store and back-office systems." },
    { title: "CRM and marketing links", desc: "Customer and campaign data flow into Salesforce, HubSpot, or similar tools." },
    { title: "Accounting alignment", desc: "Commerce events connect to finance processes with fewer manual exports." },
    { title: "Reliable integration design", desc: "Retries, logging, and failure handling keep syncs trustworthy." },
  ],
  migrate: [
    { title: "Preserve catalog and customers", desc: "Products, variants, customers, and order history move with careful mapping." },
    { title: "SEO continuity", desc: "URL maps and redirects protect rankings during platform changes." },
    { title: "Phased cutovers", desc: "Risk is reduced with parallel checks and clear go-live plans." },
    { title: "Post-migration hardening", desc: "QA, redirects, and monitoring stabilize the new store after launch." },
  ],
  perf: [
    { title: "Core Web Vitals focus", desc: "LCP, CLS, and interaction delays are treated as conversion problems, not vanity scores." },
    { title: "Caching and media", desc: "CDN, image, and cache strategies tuned for catalog-heavy pages." },
    { title: "Database and query care", desc: "Heavy product and cart paths are profiled and improved." },
    { title: "Mobile shopping speed", desc: "Performance work prioritizes the devices most shoppers actually use." },
  ],
  cro: [
    { title: "Product page clarity", desc: "Information hierarchy, trust signals, and CTAs designed to reduce hesitation." },
    { title: "Checkout friction removal", desc: "Steps, fields, and payment options tuned for completion." },
    { title: "Evidence-led changes", desc: "Hypothesis, test, and iterate instead of redesigning on opinion alone." },
    { title: "Mobile conversion paths", desc: "Thumb-friendly flows for the majority of store traffic in the region." },
  ],
  support: [
    { title: "Security and updates", desc: "Platform, plugin, and dependency updates on a predictable cadence." },
    { title: "Backups and recovery", desc: "Backup discipline and restore confidence when incidents happen." },
    { title: "Bug fixes and enhancements", desc: "Store issues and small feature work handled without derailing sales." },
    { title: "Technical support rhythm", desc: "Clear escalation and reporting so merchandising teams are never guessing." },
  ],
};

const processSets = {
  custom: [
    { number: "1", title: "Commerce discovery", body: "Products, buyers, operations, and success metrics shape the store blueprint." },
    { number: "2", title: "UX and architecture", body: "Catalog, cart, checkout, and integrations are designed before heavy build." },
    { number: "3", title: "Build and integrate", body: "Storefront, payments, shipping, and back-office links ship in tested increments." },
    { number: "4", title: "Launch and optimize", body: "Go-live QA, training, and a plan for CRO and performance after opening." },
  ],
  woo: [
    { number: "1", title: "Store and content audit", body: "Catalog needs, theme direction, and plugin constraints are clarified." },
    { number: "2", title: "Theme and checkout design", body: "Key shopping journeys are designed for conversion on WooCommerce." },
    { number: "3", title: "Develop and connect", body: "Custom theme work, plugins, and integrations are implemented with QA." },
    { number: "4", title: "Launch and harden", body: "Security, speed, and handover keep the store ready for real traffic." },
  ],
  shopify: [
    { number: "1", title: "Brand and catalog planning", body: "Collections, metafields, and merchandising goals define the Shopify build." },
    { number: "2", title: "Theme and app strategy", body: "Custom theme scope and essential apps are chosen carefully." },
    { number: "3", title: "Build checkout experiences", body: "Storefront and checkout polish ship with payment and shipping setup." },
    { number: "4", title: "Launch and grow", body: "Training and iteration support merchandising after go-live." },
  ],
  magento: [
    { number: "1", title: "Enterprise requirements workshop", body: "Catalog complexity, roles, and multi-store needs are documented." },
    { number: "2", title: "Architecture and module plan", body: "Environments, custom modules, and integration boundaries are designed." },
    { number: "3", title: "Develop and performance-test", body: "Features ship with Magento-appropriate QA and load awareness." },
    { number: "4", title: "Cut over and support", body: "Launch, monitoring, and stabilization for enterprise teams." },
  ],
  opencart: [
    { number: "1", title: "SMB commerce scoping", body: "Catalog size, payments, and admin needs set a right-sized plan." },
    { number: "2", title: "Storefront design", body: "Theme and key flows are designed for clarity and ease of use." },
    { number: "3", title: "Customize and integrate", body: "OpenCart modules, payments, and shipping are implemented." },
    { number: "4", title: "Launch and train", body: "Your team learns day-to-day catalog and order management." },
  ],
  multivendor: [
    { number: "1", title: "Marketplace model design", body: "Buyer, vendor, and admin roles plus commission logic are defined first." },
    { number: "2", title: "Catalog and checkout UX", body: "Discovery, vendor stores, and purchase flows are designed for trust." },
    { number: "3", title: "Build marketplace operations", body: "Payments, orders, moderation, and vendor tools ship iteratively." },
    { number: "4", title: "Grow with governance", body: "Launch includes admin controls and a safe vendor onboarding plan." },
  ],
  b2b: [
    { number: "1", title: "Wholesale rules workshop", body: "Pricing tiers, quotes, and account structures are documented." },
    { number: "2", title: "Portal UX design", body: "Bulk order and account journeys are designed for trade buyers." },
    { number: "3", title: "Build pricing and accounts", body: "Customer-specific pricing, quotes, and roles are implemented." },
    { number: "4", title: "Connect and launch", body: "ERP/CRM links and training stabilize wholesale operations." },
  ],
  subscription: [
    { number: "1", title: "Offer and billing rules", body: "Plans, renewals, skips, and cancellations are defined clearly." },
    { number: "2", title: "Account and checkout UX", body: "Subscribe flows and self-serve management are designed carefully." },
    { number: "3", title: "Implement recurring commerce", body: "Billing, entitlements, and customer portals are built with QA." },
    { number: "4", title: "Retain and improve", body: "Post-launch insights guide retention and plan improvements." },
  ],
  payments: [
    { number: "1", title: "Payment method planning", body: "Gateways, wallets, and local methods are chosen for your market." },
    { number: "2", title: "Checkout UX design", body: "Payment steps are designed for clarity and completion." },
    { number: "3", title: "Integrate and harden", body: "Gateways are wired with failure handling and security checks." },
    { number: "4", title: "Reconcile and launch", body: "Test transactions and ops handover before real traffic." },
  ],
  shipping: [
    { number: "1", title: "Carrier and warehouse mapping", body: "Shipping zones, carriers, and fulfillment partners are documented." },
    { number: "2", title: "Rate and tracking design", body: "Checkout shipping options and tracking experiences are planned." },
    { number: "3", title: "Integrate logistics tools", body: "Carriers and fulfillment platforms are connected with QA." },
    { number: "4", title: "Operate and tune", body: "Rules are adjusted after real order volume reveals edge cases." },
  ],
  erp: [
    { number: "1", title: "System and data map", body: "ERP, CRM, inventory, and marketing systems are inventoried." },
    { number: "2", title: "Sync contract design", body: "Objects, directions, and failure modes are defined before coding." },
    { number: "3", title: "Build integrations", body: "Connectors ship with logging, retries, and validation." },
    { number: "4", title: "Monitor and maintain", body: "Ops runbooks keep syncs healthy after launch." },
  ],
  migrate: [
    { number: "1", title: "Source platform audit", body: "Products, customers, orders, URLs, and SEO equity are inventoried." },
    { number: "2", title: "Migration roadmap", body: "Mapping, redirects, and cutover strategy reduce risk." },
    { number: "3", title: "Migrate and validate", body: "Data moves with parallel checks on catalog and checkout." },
    { number: "4", title: "Cut over and protect SEO", body: "Redirects, monitoring, and fixes stabilize the new store." },
  ],
  perf: [
    { number: "1", title: "Performance baseline", body: "Core Web Vitals, templates, and heavy queries are measured." },
    { number: "2", title: "Prioritize high-impact fixes", body: "Media, caching, and critical path improvements are planned first." },
    { number: "3", title: "Implement and retest", body: "Changes ship with before/after measurement on key pages." },
    { number: "4", title: "Guardrails", body: "Monitoring and release habits keep speed from regressing." },
  ],
  cro: [
    { number: "1", title: "Funnel and friction audit", body: "Product, cart, and checkout drop-off points are identified." },
    { number: "2", title: "Hypothesis and design", body: "UX changes are designed around measurable conversion goals." },
    { number: "3", title: "Implement and test", body: "Updates ship with analytics so results can be judged clearly." },
    { number: "4", title: "Iterate winners", body: "Successful changes expand; weak ones are revised or rolled back." },
  ],
  support: [
    { number: "1", title: "Store health baseline", body: "Security, backups, plugins, and backlog priorities are reviewed." },
    { number: "2", title: "Support operating rhythm", body: "SLAs, update cycles, and escalation paths are agreed." },
    { number: "3", title: "Maintain and improve", body: "Patches, fixes, and enhancements ship on a steady cadence." },
    { number: "4", title: "Report and plan", body: "Regular reviews keep merchandising and tech priorities aligned." },
  ],
};

function faqsFor(d) {
  return [
    {
      question: `What is included in ${d.title} from Saqrih?`,
      answer: `${d.title} typically includes discovery, UX and solution design, development, integrations where needed, QA, and launch or handover support. Scope is tailored to your store goals in Qatar and documented before build starts.`,
    },
    {
      question: `How long does ${d.title.toLowerCase()} take?`,
      answer:
        "Timelines depend on catalog size, platform, payments, shipping, and integrations. Focused store builds can ship in weeks, while marketplaces, Magento, or complex migrations take longer. You receive a milestone plan in the proposal.",
    },
    {
      question: "Which e-commerce platforms do you work with?",
      answer:
        "We commonly work with WooCommerce, Shopify, Magento, OpenCart, and custom commerce stacks, plus marketplaces and B2B portals when your model needs them.",
    },
    {
      question: "Can you connect payments, shipping, and ERP/CRM?",
      answer:
        "Yes. Payment gateways, carriers, warehouse tools, and ERP/CRM integrations are a regular part of our e-commerce delivery so operations stay accurate as order volume grows.",
    },
    {
      question: "Will the store work well on mobile?",
      answer:
        "Yes. We design mobile-first shopping experiences, which matters for customers in Doha and across the region who often browse and buy on phones.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. We offer e-commerce maintenance and support for updates, security, backups, bug fixes, performance work, and feature enhancements.",
    },
  ];
}

function metaDesc(d) {
  const raw = `${d.title} in Qatar from Saqrih. ${d.shortDesc}`;
  return raw.length > 158 ? `${raw.slice(0, 155)}...` : raw;
}

const pages = defs.map((d) => ({
  slug: d.slug,
  title: d.title,
  shortDesc: d.shortDesc,
  description: metaDesc(d),
  serviceType: d.title,
  heroTitle: d.heroTitle,
  heroLead: d.heroLead,
  heroTitleMaxCh: d.heroTitleMaxCh,
  advantage: {
    label: `Why choose Saqrih for ${d.title.toLowerCase()} in Doha`,
    heading: d.heading2,
    intro: `Saqrih delivers ${d.title.toLowerCase()} as part of our E-commerce Development practice in Qatar. ${d.shortDesc} We combine conversion-minded UX with reliable commerce engineering.`,
    rightTitle: `${d.title} engineered for clarity, conversion, and measurable outcomes`,
    features: featureSets[d.focus],
  },
  process: {
    title: "How it works",
    items: processSets[d.focus],
  },
  faqs: faqsFor(d),
  faqHeading: "Questions? We have answers",
  faqSubtitle: `Common questions about ${d.title.toLowerCase()} for brands in Qatar and the wider Middle East.`,
  techCopy: {
    eyebrow: "Technologies we use",
    headingLine1: "Technology Stack &",
    headingLine2: d.techLine2,
    body: `Commerce platforms, frontend, backend, payments, shipping, and integration tooling we use for ${d.title.toLowerCase()}.`,
  },
}));

const target = path.join("lib", "services", "ecommerceDevelopmentSubPages.js");
const out = `/**
 * Retained-style sub-page content for /services/ecommerce-development/[slug].
 * Unique SEO copy per sub-service for Saqrih (Qatar).
 */

export const ECOM_DEV_PARENT = {
  path: "/services/ecommerce-development",
  title: "E-commerce Development",
};

export const ECOM_DEV_SUB_PAGES = ${JSON.stringify(pages, null, 2)};

export function getEcomDevSubPage(slug) {
  return ECOM_DEV_SUB_PAGES.find((s) => s.slug === slug) ?? null;
}

export function getAllEcomDevSubPageSlugs() {
  return ECOM_DEV_SUB_PAGES.map((s) => s.slug);
}

export function getEcomDevSiblingCards(currentSlug) {
  const others = ECOM_DEV_SUB_PAGES.filter((s) => s.slug !== currentSlug);
  return others.map((s, i) => ({
    id: s.slug,
    title: s.title,
    desc: s.shortDesc,
    href: \`\${ECOM_DEV_PARENT.path}/\${s.slug}\`,
    ...(i === 0
      ? { isHero: true, eyebrow: "More e-commerce development services" }
      : {}),
  }));
}
`;

fs.writeFileSync(target, out);
console.log("wrote", pages.length, "to", target);
