const fs = require("fs");
const path = require("path");

const defs = [
  {
    slug: "custom-api-development",
    title: "Custom API Development",
    shortDesc:
      "Design and develop secure, scalable APIs that enable seamless communication between applications, platforms, and services.",
    focus: "custom",
    heroTitle: "Custom API\nDevelopment in Qatar",
    heroLead:
      "Design and develop secure, scalable APIs that enable seamless communication between applications, platforms, and services.",
    heroTitleMaxCh: "12ch",
    heading2: "APIs shaped around how your systems actually exchange data",
    techLine2: "Custom API Expertise",
  },
  {
    slug: "rest-api-development",
    title: "REST API Development",
    shortDesc:
      "Build high-performance RESTful APIs for web applications, mobile apps, SaaS platforms, and enterprise systems.",
    focus: "rest",
    heroTitle: "REST API\nDevelopment in Qatar",
    heroLead:
      "Build high-performance RESTful APIs for web applications, mobile apps, SaaS platforms, and enterprise systems your partners can trust.",
    heroTitleMaxCh: "10ch",
    heading2: "RESTful APIs that stay clear, versioned, and fast",
    techLine2: "REST API Expertise",
  },
  {
    slug: "graphql-api-development",
    title: "GraphQL API Development",
    shortDesc:
      "Develop flexible GraphQL APIs that provide efficient data access and improved frontend performance.",
    focus: "graphql",
    heroTitle: "GraphQL API\nDevelopment in Qatar",
    heroLead:
      "Develop flexible GraphQL APIs that provide efficient data access and improved frontend performance without over-fetching.",
    heroTitleMaxCh: "12ch",
    heading2: "GraphQL APIs that give clients exactly the data they need",
    techLine2: "GraphQL Expertise",
  },
  {
    slug: "third-party-api-integration",
    title: "Third-Party API Integration",
    shortDesc:
      "Integrate your applications with payment gateways, CRMs, ERPs, accounting software, marketing platforms, cloud services, and other business tools.",
    focus: "thirdParty",
    heroTitle: "Third-Party API\nIntegration in Qatar",
    heroLead:
      "Integrate your applications with payment gateways, CRMs, ERPs, accounting software, marketing platforms, cloud services, and other business tools.",
    heroTitleMaxCh: "14ch",
    heading2: "Connect the tools your business already runs on",
    techLine2: "Third-Party Integration Expertise",
  },
  {
    slug: "payment-gateway-integration",
    title: "Payment Gateway Integration",
    shortDesc:
      "Implement secure payment processing with Stripe, PayPal, Apple Pay, Google Pay, and regional payment providers.",
    focus: "payments",
    heroTitle: "Payment Gateway\nIntegration in Qatar",
    heroLead:
      "Implement secure payment processing with Stripe, PayPal, Apple Pay, Google Pay, and regional payment providers wired into your product.",
    heroTitleMaxCh: "14ch",
    heading2: "Payment integrations customers finish and finance can trust",
    techLine2: "Payments Integration Expertise",
  },
  {
    slug: "crm-erp-integration",
    title: "CRM & ERP Integration",
    shortDesc:
      "Connect applications with CRM and ERP systems to synchronize customers, products, orders, inventory, finance, and business data.",
    focus: "crmErp",
    heroTitle: "CRM & ERP\nIntegration in Qatar",
    heroLead:
      "Connect applications with CRM and ERP systems to synchronize customers, products, orders, inventory, finance, and business data.",
    heroTitleMaxCh: "12ch",
    heading2: "Keep CRM and ERP data in sync with your products",
    techLine2: "CRM & ERP Expertise",
  },
  {
    slug: "ecommerce-api-integration",
    title: "E-commerce API Integration",
    shortDesc:
      "Integrate online stores with shipping providers, inventory systems, accounting software, marketplaces, and external business applications.",
    focus: "ecom",
    heroTitle: "E-commerce API\nIntegration in Qatar",
    heroLead:
      "Integrate online stores with shipping providers, inventory systems, accounting software, marketplaces, and external business applications.",
    heroTitleMaxCh: "14ch",
    heading2: "Commerce integrations that keep orders and stock accurate",
    techLine2: "Commerce Integration Expertise",
  },
  {
    slug: "authentication-sso",
    title: "Authentication & Single Sign-On (SSO)",
    shortDesc:
      "Implement secure authentication using OAuth, JWT, OpenID Connect, SAML, Single Sign-On (SSO), and Multi-Factor Authentication (MFA).",
    focus: "auth",
    heroTitle: "Authentication &\nSSO in Qatar",
    heroLead:
      "Implement secure authentication using OAuth, JWT, OpenID Connect, SAML, Single Sign-On (SSO), and Multi-Factor Authentication (MFA).",
    heroTitleMaxCh: "14ch",
    heading2: "Auth and SSO designed for real multi-app ecosystems",
    techLine2: "Auth & SSO Expertise",
  },
  {
    slug: "webhook-development-event-automation",
    title: "Webhook Development & Event Automation",
    shortDesc:
      "Build real-time webhook integrations and event-driven workflows for instant data synchronization across multiple platforms.",
    focus: "webhooks",
    heroTitle: "Webhook Development &\nEvent Automation in Qatar",
    heroLead:
      "Build real-time webhook integrations and event-driven workflows for instant data synchronization across multiple platforms.",
    heroTitleMaxCh: "18ch",
    heading2: "Event-driven sync that keeps systems updated in realtime",
    techLine2: "Webhooks & Events Expertise",
  },
  {
    slug: "api-modernization-legacy-integration",
    title: "API Modernization & Legacy Integration",
    shortDesc:
      "Modernize legacy APIs, migrate outdated integrations, and connect older systems with modern applications and cloud services.",
    focus: "legacy",
    heroTitle: "API Modernization &\nLegacy Integration in Qatar",
    heroLead:
      "Modernize legacy APIs, migrate outdated integrations, and connect older systems with modern applications and cloud services.",
    heroTitleMaxCh: "18ch",
    heading2: "Bring legacy systems into modern API ecosystems safely",
    techLine2: "API Modernization Expertise",
  },
  {
    slug: "api-testing-documentation-optimization",
    title: "API Testing, Documentation & Optimization",
    shortDesc:
      "Provide API testing, documentation, performance optimization, versioning, monitoring, and long-term maintenance.",
    focus: "docs",
    heroTitle: "API Testing, Docs &\nOptimization in Qatar",
    heroLead:
      "Provide API testing, documentation, performance optimization, versioning, monitoring, and long-term maintenance your engineers can rely on.",
    heroTitleMaxCh: "16ch",
    heading2: "APIs that are tested, documented, and ready to scale",
    techLine2: "API Quality Expertise",
  },
  {
    slug: "api-maintenance-support",
    title: "API Maintenance & Support",
    shortDesc:
      "Deliver ongoing monitoring, updates, security improvements, troubleshooting, and continuous support for API ecosystems.",
    focus: "support",
    heroTitle: "API Maintenance &\nSupport in Qatar",
    heroLead:
      "Ongoing monitoring, updates, security improvements, troubleshooting, and continuous support for API ecosystems after launch.",
    heroTitleMaxCh: "14ch",
    heading2: "Keep your API ecosystem healthy as partners and products grow",
    techLine2: "API Maintenance Expertise",
  },
];

const featureSets = {
  custom: [
    { title: "Contract-first design", desc: "Endpoints, payloads, and versioning are designed before brittle coding begins." },
    { title: "Secure by default", desc: "Auth, rate limits, and environment separation are built into the foundation." },
    { title: "Scalable service patterns", desc: "APIs structured to grow with traffic, partners, and new consumers." },
    { title: "Clear ownership", desc: "Monitoring and docs so your team can operate the API after launch." },
  ],
  rest: [
    { title: "Resource-oriented design", desc: "Clean REST resources and status codes that clients can predict." },
    { title: "Performance discipline", desc: "Caching, pagination, and query patterns tuned for real traffic." },
    { title: "Versioning strategy", desc: "Breaking changes are managed without surprising consumers." },
    { title: "OpenAPI clarity", desc: "Contracts and docs that frontend and partner teams can trust." },
  ],
  graphql: [
    { title: "Client-efficient queries", desc: "Schemas designed so frontends fetch what they need and nothing more." },
    { title: "Typed contracts", desc: "Clear types reduce guesswork between frontend and backend teams." },
    { title: "Performance guardrails", desc: "Complexity limits and resolvers planned to avoid costly queries." },
    { title: "Frontend velocity", desc: "Product UIs iterate faster when data access is flexible and stable." },
  ],
  thirdParty: [
    { title: "Business-tool coverage", desc: "Payments, CRM, ERP, accounting, marketing, and cloud services wired carefully." },
    { title: "Reliable connectors", desc: "Retries, logging, and failure handling keep syncs trustworthy." },
    { title: "Mapping that matches ops", desc: "Fields and workflows mirror how your teams actually use each tool." },
    { title: "Maintainable glue", desc: "Integrations stay upgrade-friendly as vendors change APIs." },
  ],
  payments: [
    { title: "Global and local rails", desc: "Stripe, PayPal, wallets, and regional gateways for your market." },
    { title: "Secure processing patterns", desc: "PCI-aware flows and careful handling of failures and refunds." },
    { title: "Wallet-ready checkout", desc: "Apple Pay and Google Pay where they lift conversion." },
    { title: "Finance-friendly states", desc: "Clear payment events for ops, support, and reconciliation." },
  ],
  crmErp: [
    { title: "Customer and order sync", desc: "CRM and ERP stay aligned with product, inventory, and finance data." },
    { title: "Bi-directional where needed", desc: "Updates flow in the directions your process actually requires." },
    { title: "Conflict handling", desc: "Duplicates and edge cases are planned, not discovered in production." },
    { title: "Ops visibility", desc: "Logs and alerts so teams know when sync drifts." },
  ],
  ecom: [
    { title: "Store operations sync", desc: "Shipping, inventory, accounting, and marketplaces stay connected to the store." },
    { title: "Order lifecycle clarity", desc: "Statuses move cleanly across fulfillment and finance tools." },
    { title: "Catalog accuracy", desc: "Products and stock updates reduce oversell and manual fixes." },
    { title: "Partner-ready connectors", desc: "External apps and marketplaces integrate without fragile one-offs." },
  ],
  auth: [
    { title: "Modern identity standards", desc: "OAuth, JWT, OpenID Connect, and SAML implemented with care." },
    { title: "SSO for multi-app stacks", desc: "Users sign in once across products without weak shared passwords." },
    { title: "MFA when risk requires it", desc: "Stronger authentication for sensitive apps and enterprise buyers." },
    { title: "Session and token hygiene", desc: "Expiry, refresh, and revocation patterns that hold up in production." },
  ],
  webhooks: [
    { title: "Realtime event delivery", desc: "Webhooks notify systems the moment something important changes." },
    { title: "Idempotent handlers", desc: "Duplicate events do not corrupt data or create double actions." },
    { title: "Observable pipelines", desc: "Retries, dead letters, and logs keep event flows diagnosable." },
    { title: "Automation that helps ops", desc: "Event-driven workflows reduce manual copy between platforms." },
  ],
  legacy: [
    { title: "Preserve critical logic", desc: "We modernize interfaces while keeping the business rules that still matter." },
    { title: "Phased migration", desc: "Adapters and cutovers reduce risk versus a big-bang rewrite." },
    { title: "Bridge old and new", desc: "Legacy systems talk to modern apps and cloud services cleanly." },
    { title: "Future-ready contracts", desc: "APIs improve so the next integrations are cheaper to ship." },
  ],
  docs: [
    { title: "Testing that catches drift", desc: "Automated and manual API checks before partners feel the pain." },
    { title: "Documentation teams use", desc: "OpenAPI and examples that reduce onboarding time." },
    { title: "Performance and versioning", desc: "Tuning and version strategy keep consumers stable as you grow." },
    { title: "Monitoring habits", desc: "Latency, errors, and uptime signals become part of operating the API." },
  ],
  support: [
    { title: "Proactive monitoring", desc: "Errors and latency spikes surface before customers escalate." },
    { title: "Security improvements", desc: "Patches and hardening stay current as threats and dependencies change." },
    { title: "Troubleshooting depth", desc: "Integration failures are diagnosed across apps, not guessed at." },
    { title: "Continuous care", desc: "Updates and support keep the API ecosystem healthy over time." },
  ],
};

const processSets = {
  custom: [
    { number: "1", title: "Data and consumer discovery", body: "Systems, partners, and success metrics shape the API blueprint." },
    { number: "2", title: "Contract and security design", body: "Endpoints, auth, and versioning are designed before heavy build." },
    { number: "3", title: "Build and harden", body: "Services ship with testing, logging, and performance checks." },
    { number: "4", title: "Launch and operate", body: "Docs, monitoring, and handover keep the API runnable day one." },
  ],
  rest: [
    { number: "1", title: "Resource modeling", body: "Entities, relationships, and access patterns are defined clearly." },
    { number: "2", title: "API contract design", body: "REST surfaces, errors, and OpenAPI docs are planned carefully." },
    { number: "3", title: "Implement and test", body: "Endpoints ship with automated checks and consumer scenarios." },
    { number: "4", title: "Release and version", body: "Deployment and versioning habits protect existing clients." },
  ],
  graphql: [
    { number: "1", title: "Schema discovery", body: "Client needs and domain entities shape the GraphQL schema." },
    { number: "2", title: "Resolver and guardrail design", body: "Performance limits and auth rules are planned early." },
    { number: "3", title: "Build and validate", body: "Schema and resolvers ship with query testing." },
    { number: "4", title: "Ship to frontends", body: "Clients adopt the API with docs and monitoring in place." },
  ],
  thirdParty: [
    { number: "1", title: "Integration map", body: "Vendors, data flows, and failure modes are inventoried." },
    { number: "2", title: "Mapping and auth design", body: "Field maps and credentials strategy are defined before coding." },
    { number: "3", title: "Build connectors", body: "Integrations ship with retries, logging, and QA." },
    { number: "4", title: "Monitor and maintain", body: "Alerts and runbooks keep third-party links healthy." },
  ],
  payments: [
    { number: "1", title: "Payment method planning", body: "Gateways, wallets, and regional methods are chosen for your market." },
    { number: "2", title: "Checkout and webhook design", body: "Payment events and failure paths are designed carefully." },
    { number: "3", title: "Integrate and harden", body: "Gateways ship with security checks and reconciliation support." },
    { number: "4", title: "Launch with monitoring", body: "Test transactions and alerts stabilize go-live." },
  ],
  crmErp: [
    { number: "1", title: "System and object workshop", body: "Customers, products, orders, and finance objects are mapped." },
    { number: "2", title: "Sync contract design", body: "Directions, cadence, and conflict rules are defined." },
    { number: "3", title: "Build CRM/ERP connectors", body: "Integrations ship with validation and logging." },
    { number: "4", title: "Operate with visibility", body: "Ops can see sync health and resolve exceptions quickly." },
  ],
  ecom: [
    { number: "1", title: "Commerce ops mapping", body: "Shipping, inventory, accounting, and marketplace needs are listed." },
    { number: "2", title: "Integration blueprint", body: "Order and catalog flows are designed across systems." },
    { number: "3", title: "Build store connectors", body: "APIs and webhooks ship with fulfillment and stock QA." },
    { number: "4", title: "Tune after real volume", body: "Rules adjust once live orders reveal edge cases." },
  ],
  auth: [
    { number: "1", title: "Identity requirements", body: "SSO, MFA, and provider needs are clarified with stakeholders." },
    { number: "2", title: "Auth architecture", body: "Protocols, sessions, and token lifecycles are designed." },
    { number: "3", title: "Implement and harden", body: "OAuth/OIDC/SAML flows ship with security testing." },
    { number: "4", title: "Roll out and document", body: "Apps adopt SSO with clear runbooks for admins." },
  ],
  webhooks: [
    { number: "1", title: "Event catalog", body: "Which events matter and who consumes them is documented." },
    { number: "2", title: "Delivery design", body: "Retries, signatures, and idempotency are planned." },
    { number: "3", title: "Build webhook pipelines", body: "Producers and consumers ship with end-to-end tests." },
    { number: "4", title: "Observe automation", body: "Monitoring keeps event-driven workflows reliable." },
  ],
  legacy: [
    { number: "1", title: "Legacy API assessment", body: "Contracts, risks, and what must be preserved are inventoried." },
    { number: "2", title: "Modernization roadmap", body: "Adapters, versions, and cutover phases reduce risk." },
    { number: "3", title: "Rebuild and bridge", body: "New APIs and legacy connectors ship with parallel testing." },
    { number: "4", title: "Cut over and stabilize", body: "Consumers move carefully with monitoring and rollback options." },
  ],
  docs: [
    { number: "1", title: "Quality baseline", body: "Coverage gaps, slow endpoints, and doc debt are measured." },
    { number: "2", title: "Test and docs plan", body: "Suites, OpenAPI, and versioning improvements are prioritized." },
    { number: "3", title: "Implement and optimize", body: "Tests, docs, and performance fixes ship together." },
    { number: "4", title: "Monitor continuously", body: "Dashboards and review habits keep quality from drifting." },
  ],
  support: [
    { number: "1", title: "Ecosystem health baseline", body: "Uptime, errors, and backlog priorities are reviewed." },
    { number: "2", title: "Support operating rhythm", body: "SLAs, patch cycles, and escalation paths are agreed." },
    { number: "3", title: "Maintain and improve", body: "Updates, security work, and fixes ship on a steady cadence." },
    { number: "4", title: "Report and plan", body: "Regular reviews keep API reliability and roadmap aligned." },
  ],
};

function faqsFor(d) {
  return [
    {
      question: `What is included in ${d.title} from Saqrih?`,
      answer: `${d.title} typically includes discovery, API or integration design, implementation, security considerations, testing, documentation where needed, and launch or handover support. Scope is tailored to your systems in Qatar and documented before work starts.`,
    },
    {
      question: `How long does ${d.title.toLowerCase()} take?`,
      answer:
        "Timelines depend on systems involved, auth complexity, data volume, and partner APIs. Focused connectors can ship in weeks, while multi-system ecosystems or legacy modernization take longer. You receive a milestone plan in the proposal.",
    },
    {
      question: "Do you build REST, GraphQL, and webhooks?",
      answer:
        "Yes. We deliver REST and GraphQL APIs as well as webhook and event-driven integrations when realtime sync is required.",
    },
    {
      question: "Can you integrate payments, CRM, ERP, and e-commerce tools?",
      answer:
        "Yes. Payment gateways, CRM/ERP platforms, commerce systems, marketing tools, and cloud services are a regular part of our integration work.",
    },
    {
      question: "How do you handle authentication and SSO?",
      answer:
        "We implement OAuth, JWT, OpenID Connect, SAML, SSO, and MFA patterns suited to your apps and enterprise access needs.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. We offer API maintenance and support for monitoring, updates, security improvements, troubleshooting, and ongoing ecosystem care.",
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
    intro: `Saqrih delivers ${d.title.toLowerCase()} as part of our API & Integration Development practice in Qatar. ${d.shortDesc} We combine secure engineering with clear contracts and operable integrations.`,
    rightTitle: `${d.title} engineered for clarity, security, and measurable outcomes`,
    features: featureSets[d.focus],
  },
  process: {
    title: "How it works",
    items: processSets[d.focus],
  },
  faqs: faqsFor(d),
  faqHeading: "Questions? We have answers",
  faqSubtitle: `Common questions about ${d.title.toLowerCase()} for businesses in Qatar and the wider Middle East.`,
  techCopy: {
    eyebrow: "Technologies we use",
    headingLine1: "Technology Stack &",
    headingLine2: d.techLine2,
    body: `Backend, API styles, auth, payments, and integration tooling we use for ${d.title.toLowerCase()}.`,
  },
}));

const target = path.join("lib", "services", "apiIntegrationDevelopmentSubPages.js");
const out = `/**
 * Retained-style sub-page content for /services/api-integration-development/[slug].
 * Unique SEO copy per sub-service for Saqrih (Qatar).
 */

export const API_DEV_PARENT = {
  path: "/services/api-integration-development",
  title: "API & Integration Development",
};

export const API_DEV_SUB_PAGES = ${JSON.stringify(pages, null, 2)};

export function getApiDevSubPage(slug) {
  return API_DEV_SUB_PAGES.find((s) => s.slug === slug) ?? null;
}

export function getAllApiDevSubPageSlugs() {
  return API_DEV_SUB_PAGES.map((s) => s.slug);
}

export function getApiDevSiblingCards(currentSlug) {
  const others = API_DEV_SUB_PAGES.filter((s) => s.slug !== currentSlug);
  return others.map((s, i) => ({
    id: s.slug,
    title: s.title,
    desc: s.shortDesc,
    href: \`\${API_DEV_PARENT.path}/\${s.slug}\`,
    ...(i === 0
      ? { isHero: true, eyebrow: "More API & integration development services" }
      : {}),
  }));
}
`;

fs.writeFileSync(target, out);
console.log("wrote", pages.length, "to", target);
