const fs = require("fs");
const path = require("path");

const defs = [
  {
    slug: "custom-saas-development",
    title: "Custom SaaS Development",
    shortDesc:
      "End-to-end development of cloud-based Software-as-a-Service products tailored to your business idea.",
    focus: "custom",
    heroTitle: "Custom SaaS\nDevelopment in Qatar",
    heroLead:
      "End-to-end development of cloud-based Software-as-a-Service products tailored to your business idea, from product strategy through launch.",
    heroTitleMaxCh: "14ch",
    heading2: "SaaS products shaped around your idea and market",
    techLine2: "Custom SaaS Expertise",
  },
  {
    slug: "saas-mvp-development",
    title: "SaaS MVP Development",
    shortDesc:
      "Rapid development of minimum viable products to validate ideas, attract investors, and launch quickly.",
    focus: "mvp",
    heroTitle: "SaaS MVP\nDevelopment in Qatar",
    heroLead:
      "Rapid development of minimum viable products to validate ideas, attract investors, and launch quickly without overbuilding.",
    heroTitleMaxCh: "12ch",
    heading2: "Focused MVPs that prove demand before you scale spend",
    techLine2: "SaaS MVP Expertise",
  },
  {
    slug: "multi-tenant-saas-development",
    title: "Multi-Tenant SaaS Development",
    shortDesc:
      "Build scalable multi-tenant architectures that securely serve multiple customers from a single platform.",
    focus: "multiTenant",
    heroTitle: "Multi-Tenant SaaS\nDevelopment in Qatar",
    heroLead:
      "Build scalable multi-tenant architectures that securely serve multiple customers from a single platform with clean isolation.",
    heroTitleMaxCh: "16ch",
    heading2: "One platform, many tenants, strong isolation",
    techLine2: "Multi-Tenant Expertise",
  },
  {
    slug: "saas-product-development",
    title: "SaaS Product Development",
    shortDesc:
      "Design, develop, and launch fully featured SaaS products with modern cloud architecture.",
    focus: "product",
    heroTitle: "SaaS Product\nDevelopment in Qatar",
    heroLead:
      "Design, develop, and launch fully featured SaaS products with modern cloud architecture built for real users and growth.",
    heroTitleMaxCh: "14ch",
    heading2: "Full-product SaaS delivery from UX to cloud ops",
    techLine2: "SaaS Product Expertise",
  },
  {
    slug: "saas-platform-modernization",
    title: "SaaS Platform Modernization",
    shortDesc:
      "Upgrade legacy SaaS applications with modern technologies, improved performance, and enhanced security.",
    focus: "modernize",
    heroTitle: "SaaS Platform\nModernization in Qatar",
    heroLead:
      "Upgrade legacy SaaS applications with modern technologies, improved performance, and enhanced security without losing what customers rely on.",
    heroTitleMaxCh: "14ch",
    heading2: "Modernize SaaS platforms without breaking customer trust",
    techLine2: "Modernization Expertise",
  },
  {
    slug: "saas-ui-ux-development",
    title: "SaaS UI/UX Development",
    shortDesc:
      "Create intuitive user interfaces and seamless user experiences that improve adoption and customer retention.",
    focus: "uiux",
    heroTitle: "SaaS UI/UX\nDevelopment in Qatar",
    heroLead:
      "Create intuitive user interfaces and seamless user experiences that improve adoption and customer retention across your product.",
    heroTitleMaxCh: "12ch",
    heading2: "Product UX that makes complex SaaS feel simple",
    techLine2: "SaaS UI/UX Expertise",
  },
  {
    slug: "subscription-billing-integration",
    title: "Subscription & Billing Integration",
    shortDesc:
      "Implement recurring payments, subscription plans, invoicing, coupons, upgrades, downgrades, and usage-based billing.",
    focus: "billing",
    heroTitle: "Subscription & Billing\nIntegration in Qatar",
    heroLead:
      "Implement recurring payments, subscription plans, invoicing, coupons, upgrades, downgrades, and usage-based billing that your finance team can trust.",
    heroTitleMaxCh: "18ch",
    heading2: "Billing rails that keep recurring revenue reliable",
    techLine2: "Billing Integration Expertise",
  },
  {
    slug: "user-authentication-access-management",
    title: "User Authentication & Access Management",
    shortDesc:
      "Secure login systems with role-based access control, Single Sign-On (SSO), Multi-Factor Authentication (MFA), and social login.",
    focus: "auth",
    heroTitle: "User Authentication &\nAccess Management in Qatar",
    heroLead:
      "Secure login systems with role-based access control, Single Sign-On (SSO), Multi-Factor Authentication (MFA), and social login for multi-user products.",
    heroTitleMaxCh: "20ch",
    heading2: "Auth and access designed for real multi-user SaaS",
    techLine2: "Auth & Access Expertise",
  },
  {
    slug: "saas-dashboard-development",
    title: "SaaS Dashboard Development",
    shortDesc:
      "Develop customer and administrator dashboards with analytics, reporting, and account management.",
    focus: "dashboard",
    heroTitle: "SaaS Dashboard\nDevelopment in Qatar",
    heroLead:
      "Develop customer and administrator dashboards with analytics, reporting, and account management that operators actually use daily.",
    heroTitleMaxCh: "14ch",
    heading2: "Dashboards that turn product data into action",
    techLine2: "Dashboard Expertise",
  },
  {
    slug: "api-development-third-party-integrations",
    title: "API Development & Third-Party Integrations",
    shortDesc:
      "Connect your SaaS platform with CRMs, ERPs, payment gateways, email platforms, cloud storage, AI services, and other external systems.",
    focus: "api",
    heroTitle: "API Development &\nIntegrations in Qatar",
    heroLead:
      "Connect your SaaS platform with CRMs, ERPs, payment gateways, email platforms, cloud storage, AI services, and other external systems.",
    heroTitleMaxCh: "16ch",
    heading2: "APIs and integrations that make your SaaS part of the stack",
    techLine2: "API & Integrations Expertise",
  },
  {
    slug: "saas-migration-scaling",
    title: "SaaS Migration & Scaling",
    shortDesc:
      "Migrate existing applications to SaaS architecture and optimize infrastructure for growing user bases.",
    focus: "scale",
    heroTitle: "SaaS Migration &\nScaling in Qatar",
    heroLead:
      "Migrate existing applications to SaaS architecture and optimize infrastructure for growing user bases without risky big-bang cutovers.",
    heroTitleMaxCh: "14ch",
    heading2: "Migrate to SaaS and scale with confidence",
    techLine2: "Migration & Scaling Expertise",
  },
  {
    slug: "saas-maintenance-support",
    title: "SaaS Maintenance & Support",
    shortDesc:
      "Provide ongoing updates, monitoring, performance optimization, security patches, and feature enhancements.",
    focus: "support",
    heroTitle: "SaaS Maintenance &\nSupport in Qatar",
    heroLead:
      "Ongoing updates, monitoring, performance optimization, security patches, and feature enhancements so your SaaS stays reliable after launch.",
    heroTitleMaxCh: "14ch",
    heading2: "Keep your SaaS healthy, secure, and improving",
    techLine2: "Maintenance Expertise",
  },
];

const featureSets = {
  custom: [
    { title: "Idea to architecture", desc: "We turn your product vision into a clear stack, module plan, and delivery roadmap before heavy build begins." },
    { title: "Cloud-native foundations", desc: "Hosting, environments, and deployment patterns designed for SaaS uptime and iteration speed." },
    { title: "Multi-user ready", desc: "Accounts, roles, and tenant-aware thinking are built into the product from the first release." },
    { title: "Launch with product care", desc: "QA, onboarding flows, and post-launch support keep early customers successful." },
  ],
  mvp: [
    { title: "Outcome-first scope", desc: "We define the smallest feature set that proves value for users and investors." },
    { title: "Fast validation loops", desc: "Prototypes and short build cycles surface feedback before you commit to a large backlog." },
    { title: "Investor-ready polish", desc: "Demos feel real: core journeys, basic billing or waitlists, and a clean narrative." },
    { title: "Path to scale", desc: "MVP architecture leaves room for tenancy, billing, and growth without a full rewrite." },
  ],
  multiTenant: [
    { title: "Tenant isolation models", desc: "Data and access boundaries designed for shared infrastructure without shared risk." },
    { title: "Efficient shared services", desc: "One platform serves many customers with clear configuration and branding options." },
    { title: "Admin and tenant ops", desc: "Operator tools for provisioning, billing status, and support across tenants." },
    { title: "Scale without chaos", desc: "Patterns for growth in customers, data volume, and feature flags per tenant." },
  ],
  product: [
    { title: "End-to-end product delivery", desc: "UX, engineering, cloud, and launch planning stay aligned as one product program." },
    { title: "Feature depth that ships", desc: "Roadmaps prioritize customer outcomes over vanity features." },
    { title: "Modern cloud architecture", desc: "Services, data, and environments structured for reliability and iteration." },
    { title: "Go-to-market ready", desc: "Onboarding, dashboards, and admin tools support real commercial use." },
  ],
  modernize: [
    { title: "Preserve what works", desc: "We keep critical business logic and customer workflows while upgrading the platform." },
    { title: "Performance and security lifts", desc: "Stack, hardening, and monitoring improvements reduce risk and slowdowns." },
    { title: "Phased cutovers", desc: "Modules move in stages so customers experience progress, not a risky freeze." },
    { title: "Future-ready foundations", desc: "APIs, tenancy, and maintainability improve for the next product cycle." },
  ],
  uiux: [
    { title: "Research-led product UX", desc: "Journeys are designed from real user tasks, not decorative screens." },
    { title: "Adoption-focused interfaces", desc: "Clarity, empty states, and progressive disclosure reduce drop-off." },
    { title: "Design systems for SaaS", desc: "Reusable patterns keep customer and admin UIs consistent as the product grows." },
    { title: "Retention through usability", desc: "Friction is removed from daily workflows that drive renewals." },
  ],
  billing: [
    { title: "Plan and entitlement logic", desc: "Trials, tiers, upgrades, and downgrades map cleanly to product access." },
    { title: "Recurring payment reliability", desc: "Stripe and modern billing rails with careful handling of failures and retries." },
    { title: "Invoices, coupons, usage", desc: "Commercial rules for invoicing, discounts, and usage-based charges when needed." },
    { title: "Finance-friendly reporting", desc: "Clear subscription state for support, ops, and finance teams." },
  ],
  auth: [
    { title: "Secure login foundations", desc: "Session handling, password flows, and social login designed for production SaaS." },
    { title: "RBAC that matches the product", desc: "Roles and permissions mirror how customers actually organize teams." },
    { title: "SSO and MFA ready", desc: "Enterprise access patterns without bolting security on later." },
    { title: "Audit-friendly access", desc: "Changes and privileged actions can be traced when accountability matters." },
  ],
  dashboard: [
    { title: "Customer and admin views", desc: "Separate experiences for end users and operators with the right density each needs." },
    { title: "Analytics that drive action", desc: "KPIs, filters, and trends tied to decisions, not vanity charts." },
    { title: "Account management clarity", desc: "Profiles, plans, and settings are easy to find and change." },
    { title: "Operator speed", desc: "Layouts built for frequent tasks so support and admins move faster." },
  ],
  api: [
    { title: "API-first product thinking", desc: "Stable endpoints and contracts so your SaaS connects cleanly to other systems." },
    { title: "CRM, ERP, and payments", desc: "Integrations with the tools your customers and ops teams already use." },
    { title: "Email, storage, and AI hooks", desc: "Connect notification, file, and AI services without fragile one-offs." },
    { title: "Observable integrations", desc: "Logging, retries, and failure handling keep third-party links trustworthy." },
  ],
  scale: [
    { title: "Migration roadmaps", desc: "Clear phases for moving from single-tenant or legacy apps into SaaS architecture." },
    { title: "Infrastructure for growth", desc: "Capacity, caching, and environment patterns tuned for rising usage." },
    { title: "Risk-managed cutovers", desc: "Data moves and parallel runs reduce downtime and surprise regressions." },
    { title: "Operate at the next stage", desc: "Monitoring and runbooks so scale does not outpace your team." },
  ],
  support: [
    { title: "Proactive monitoring", desc: "Uptime, errors, and performance signals catch issues before customers escalate." },
    { title: "Security and patch cadence", desc: "Dependencies and hardening stay current on a predictable rhythm." },
    { title: "Performance optimization", desc: "Ongoing tuning for slow queries, heavy pages, and peak traffic paths." },
    { title: "Feature enhancements", desc: "Roadmap delivery continues after launch so the product keeps winning renewals." },
  ],
};

const processSets = {
  custom: [
    { number: "1", title: "Product and market discovery", body: "We clarify users, differentiation, constraints, and success metrics for your SaaS idea." },
    { number: "2", title: "Architecture and UX blueprint", body: "Stack, modules, and key journeys are designed before full development begins." },
    { number: "3", title: "Build and validate releases", body: "Iterative delivery with QA, demos, and feedback from early stakeholders." },
    { number: "4", title: "Launch and stabilize", body: "Go-live, monitoring, and optional ongoing product support in Qatar and beyond." },
  ],
  mvp: [
    { number: "1", title: "Define the validation goal", body: "We agree what must be proven for users or investors and cut everything else." },
    { number: "2", title: "Prototype the core journey", body: "Critical flows are designed and reviewed quickly for clarity and feasibility." },
    { number: "3", title: "Build the MVP slice", body: "A focused product ships with just enough polish to learn in the market." },
    { number: "4", title: "Measure and decide next", body: "Usage and feedback guide whether to iterate, pivot scope, or scale." },
  ],
  multiTenant: [
    { number: "1", title: "Tenancy model workshop", body: "Isolation, branding, and shared-service needs are decided up front." },
    { number: "2", title: "Design data and access boundaries", body: "Schemas, auth, and admin controls are planned for many customers safely." },
    { number: "3", title: "Build the multi-tenant core", body: "Provisioning, configuration, and shared platform features ship iteratively." },
    { number: "4", title: "Onboard tenants and harden", body: "First customers go live with monitoring and isolation verification." },
  ],
  product: [
    { number: "1", title: "Product strategy alignment", body: "Roadmap, personas, and commercial goals shape the delivery plan." },
    { number: "2", title: "Design the full product surface", body: "Customer UX, admin tools, and cloud architecture are designed together." },
    { number: "3", title: "Develop in milestone releases", body: "Features ship in testable increments with continuous QA." },
    { number: "4", title: "Launch and grow", body: "Release, onboarding, and a plan for the next product cycle." },
  ],
  modernize: [
    { number: "1", title: "Platform assessment", body: "We inventory stack debt, risks, and what customers cannot lose." },
    { number: "2", title: "Modernization roadmap", body: "Phased upgrades for performance, security, and maintainability." },
    { number: "3", title: "Rebuild and migrate", body: "Modules and data move with parallel testing where risk is high." },
    { number: "4", title: "Cut over and stabilize", body: "Customers land on the improved platform with close post-launch support." },
  ],
  uiux: [
    { number: "1", title: "User and workflow research", body: "We study how customers and admins complete core tasks today." },
    { number: "2", title: "Information architecture and prototypes", body: "Flows and UI patterns are validated before heavy engineering." },
    { number: "3", title: "Design system and UI build", body: "Interfaces ship with consistent components and accessibility basics." },
    { number: "4", title: "Usability iteration", body: "Post-launch insights refine the experiences that drive retention." },
  ],
  billing: [
    { number: "1", title: "Commercial rules workshop", body: "Plans, trials, taxes, coupons, and usage rules are documented clearly." },
    { number: "2", title: "Billing UX and provider design", body: "Checkout, portal, and Stripe or similar rails are designed for reliability." },
    { number: "3", title: "Implement entitlements and webhooks", body: "Access syncs with subscription state, failures, and plan changes." },
    { number: "4", title: "Reconcile and launch", body: "Finance checks, edge-case testing, and go-live monitoring for revenue flows." },
  ],
  auth: [
    { number: "1", title: "Access model discovery", body: "Roles, SSO needs, MFA, and social login requirements are mapped." },
    { number: "2", title: "Security and UX design", body: "Login, invite, and permission flows balance safety with usability." },
    { number: "3", title: "Implement identity and RBAC", body: "Auth providers, session patterns, and role enforcement are built carefully." },
    { number: "4", title: "Harden and hand over", body: "Testing, admin guides, and monitoring cover privilege and login paths." },
  ],
  dashboard: [
    { number: "1", title: "Operator and customer research", body: "We learn which metrics and actions matter daily for each audience." },
    { number: "2", title: "Dashboard information design", body: "Layouts prioritize clarity, filters, and fast task completion." },
    { number: "3", title: "Build analytics and account tools", body: "Charts, reports, and settings ship with performance in mind." },
    { number: "4", title: "Refine with real usage", body: "Post-launch tweaks improve the views teams open every day." },
  ],
  api: [
    { number: "1", title: "Integration map", body: "Systems, data flows, and failure modes are listed before coding." },
    { number: "2", title: "API and contract design", body: "Endpoints, auth, and versioning plans keep partners and clients stable." },
    { number: "3", title: "Build connectors and services", body: "CRM, ERP, payments, email, storage, and AI links are implemented with QA." },
    { number: "4", title: "Observe and maintain", body: "Logging, alerts, and runbooks keep integrations healthy in production." },
  ],
  scale: [
    { number: "1", title: "Current-state assessment", body: "App architecture, bottlenecks, and migration risks are documented." },
    { number: "2", title: "SaaS target architecture", body: "Tenancy, cloud, and scaling patterns are designed for the next growth stage." },
    { number: "3", title: "Migrate and optimize", body: "Workloads move in phases with performance and reliability improvements." },
    { number: "4", title: "Operate at scale", body: "Monitoring, capacity planning, and support stabilize the new stage." },
  ],
  support: [
    { number: "1", title: "Health and backlog baseline", body: "We review monitoring, debt, security posture, and product priorities." },
    { number: "2", title: "Support operating rhythm", body: "SLAs, patch cycles, and escalation paths are agreed with your team." },
    { number: "3", title: "Maintain and improve", body: "Updates, fixes, and enhancements ship on a predictable cadence." },
    { number: "4", title: "Report and plan ahead", body: "Regular reviews keep reliability and roadmap decisions transparent." },
  ],
};

function faqsFor(d) {
  return [
    {
      question: `What is included in ${d.title} from Saqrih?`,
      answer: `${d.title} typically includes discovery, product and UX design, development, integrations where needed, QA, and launch or handover support. Scope is tailored to your SaaS goals in Qatar and documented before build starts.`,
    },
    {
      question: `How long does ${d.title.toLowerCase()} take?`,
      answer:
        "Timelines depend on product complexity, tenancy, billing, and integrations. Focused MVPs can ship in weeks, while multi-tenant platforms or migrations take longer. You receive a milestone plan in the proposal.",
    },
    {
      question: "Can you build multi-tenant and subscription billing?",
      answer:
        "Yes. Multi-tenant architecture, subscription billing, trials, plan changes, and usage-based models are common parts of our SaaS work when your product needs them.",
    },
    {
      question: "How do you handle security and user access?",
      answer:
        "Authentication, RBAC, SSO, MFA, and environment practices are planned early so access models match how your customers and admins actually work.",
    },
    {
      question: "Will the SaaS product work on mobile devices?",
      answer:
        "Yes. We design responsive product UIs that work across phones, tablets, and desktops, which matters for teams and customers in Doha who often work on the go.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. We offer SaaS maintenance and support for updates, monitoring, security patches, performance work, and feature enhancements as your user base grows.",
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
    intro: `Saqrih delivers ${d.title.toLowerCase()} as part of our SaaS Development practice in Qatar. ${d.shortDesc} We combine product strategy, UX, and engineering so you ship software customers keep using.`,
    rightTitle: `${d.title} engineered for clarity, security, and measurable outcomes`,
    features: featureSets[d.focus],
  },
  process: {
    title: "How it works",
    items: processSets[d.focus],
  },
  faqs: faqsFor(d),
  faqHeading: "Questions? We have answers",
  faqSubtitle: `Common questions about ${d.title.toLowerCase()} for product teams in Qatar and the wider Middle East.`,
  techCopy: {
    eyebrow: "Technologies we use",
    headingLine1: "Technology Stack &",
    headingLine2: d.techLine2,
    body: `Frontend, backend, data, auth, and subscription billing tooling we use for ${d.title.toLowerCase()}.`,
  },
}));

const target = path.join("lib", "services", "saasDevelopmentSubPages.js");
const out = `/**
 * Retained-style sub-page content for /services/saas-development/[slug].
 * Unique SEO copy per sub-service for Saqrih (Qatar).
 */

export const SAAS_DEV_PARENT = {
  path: "/services/saas-development",
  title: "SaaS Development",
};

export const SAAS_DEV_SUB_PAGES = ${JSON.stringify(pages, null, 2)};

export function getSaasDevSubPage(slug) {
  return SAAS_DEV_SUB_PAGES.find((s) => s.slug === slug) ?? null;
}

export function getAllSaasDevSubPageSlugs() {
  return SAAS_DEV_SUB_PAGES.map((s) => s.slug);
}

export function getSaasDevSiblingCards(currentSlug) {
  const others = SAAS_DEV_SUB_PAGES.filter((s) => s.slug !== currentSlug);
  return others.map((s, i) => ({
    id: s.slug,
    title: s.title,
    desc: s.shortDesc,
    href: \`\${SAAS_DEV_PARENT.path}/\${s.slug}\`,
    ...(i === 0
      ? { isHero: true, eyebrow: "More SaaS development services" }
      : {}),
  }));
}
`;

fs.writeFileSync(target, out);
console.log("wrote", pages.length, "to", target);
