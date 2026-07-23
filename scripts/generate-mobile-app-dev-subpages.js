const fs = require("fs");
const path = require("path");

const defs = [
  {
    slug: "custom-mobile-app-development",
    title: "Custom Mobile App Development",
    shortDesc:
      "Build custom mobile applications tailored to your business goals, workflows, and user requirements.",
    focus: "custom",
    heroTitle: "Custom Mobile App\nDevelopment in Qatar",
    heroLead:
      "Build custom mobile applications tailored to your business goals, workflows, and user requirements, from MVP to production launch.",
    heroTitleMaxCh: "16ch",
    heading2: "Apps shaped around your goals, not generic templates",
    techLine2: "Custom Mobile Expertise",
  },
  {
    slug: "cross-platform-app-development",
    title: "Cross-Platform App Development",
    shortDesc:
      "Develop high-performance mobile apps for both iOS and Android using a single codebase.",
    focus: "crossplat",
    heroTitle: "Cross-Platform App\nDevelopment in Qatar",
    heroLead:
      "Develop high-performance mobile apps for both iOS and Android using a single codebase with Flutter or React Native.",
    heroTitleMaxCh: "16ch",
    heading2: "One codebase, two platforms, native-feeling polish",
    techLine2: "Cross-Platform Expertise",
  },
  {
    slug: "android-app-development",
    title: "Android App Development",
    shortDesc:
      "Create Android applications optimized for performance, usability, and scalability.",
    focus: "android",
    heroTitle: "Android App\nDevelopment in Qatar",
    heroLead:
      "Create Android applications optimized for performance, usability, and scalability across phones and tablets.",
    heroTitleMaxCh: "12ch",
    heading2: "Android apps built for speed, clarity, and growth",
    techLine2: "Android Expertise",
  },
  {
    slug: "ios-app-development",
    title: "iOS App Development",
    shortDesc:
      "Develop intuitive and secure iOS applications for iPhone and iPad users.",
    focus: "ios",
    heroTitle: "iOS App\nDevelopment in Qatar",
    heroLead:
      "Develop intuitive and secure iOS applications for iPhone and iPad users with App Store-ready quality.",
    heroTitleMaxCh: "10ch",
    heading2: "iOS apps that feel native, secure, and effortless",
    techLine2: "iOS Expertise",
  },
  {
    slug: "enterprise-mobile-app-development",
    title: "Enterprise Mobile App Development",
    shortDesc:
      "Build secure business applications for employees, field teams, operations, and enterprise workflows.",
    focus: "enterprise",
    heroTitle: "Enterprise Mobile App\nDevelopment in Qatar",
    heroLead:
      "Build secure business applications for employees, field teams, operations, and enterprise workflows that stay reliable in the field.",
    heroTitleMaxCh: "18ch",
    heading2: "Secure enterprise apps for teams that work on the move",
    techLine2: "Enterprise Mobile Expertise",
  },
  {
    slug: "ecommerce-mobile-app-development",
    title: "E-commerce Mobile App Development",
    shortDesc:
      "Develop shopping applications with product catalogs, secure checkout, order tracking, and customer accounts.",
    focus: "ecom",
    heroTitle: "E-commerce Mobile App\nDevelopment in Qatar",
    heroLead:
      "Develop shopping applications with product catalogs, secure checkout, order tracking, and customer accounts built for mobile conversion.",
    heroTitleMaxCh: "18ch",
    heading2: "Shopping apps that make browsing and buying feel effortless",
    techLine2: "Commerce Mobile Expertise",
  },
  {
    slug: "saas-mobile-app-development",
    title: "SaaS Mobile App Development",
    shortDesc:
      "Create companion mobile apps for SaaS platforms with real-time synchronization and user management.",
    focus: "saas",
    heroTitle: "SaaS Mobile App\nDevelopment in Qatar",
    heroLead:
      "Create companion mobile apps for SaaS platforms with real-time synchronization and user management your customers expect.",
    heroTitleMaxCh: "14ch",
    heading2: "SaaS companion apps that stay in sync with the product",
    techLine2: "SaaS Mobile Expertise",
  },
  {
    slug: "marketplace-app-development",
    title: "Marketplace App Development",
    shortDesc:
      "Build multi-vendor marketplace apps with vendor management, product listings, payments, and order tracking.",
    focus: "marketplace",
    heroTitle: "Marketplace App\nDevelopment in Qatar",
    heroLead:
      "Build multi-vendor marketplace apps with vendor management, product listings, payments, and order tracking on mobile.",
    heroTitleMaxCh: "14ch",
    heading2: "Marketplace apps with clear buyer, vendor, and admin flows",
    techLine2: "Marketplace App Expertise",
  },
  {
    slug: "booking-appointment-app-development",
    title: "Booking & Appointment App Development",
    shortDesc:
      "Develop mobile applications for scheduling appointments, reservations, ticketing, and service bookings.",
    focus: "booking",
    heroTitle: "Booking & Appointment\nApp Development in Qatar",
    heroLead:
      "Develop mobile applications for scheduling appointments, reservations, ticketing, and service bookings that reduce no-shows.",
    heroTitleMaxCh: "18ch",
    heading2: "Booking apps customers finish and teams can manage",
    techLine2: "Booking App Expertise",
  },
  {
    slug: "healthcare-mobile-app-development",
    title: "Healthcare Mobile App Development",
    shortDesc:
      "Build healthcare applications for appointments, telemedicine, patient management, and medical records.",
    focus: "health",
    heroTitle: "Healthcare Mobile App\nDevelopment in Qatar",
    heroLead:
      "Build healthcare applications for appointments, telemedicine, patient management, and medical records with privacy-minded design.",
    heroTitleMaxCh: "18ch",
    heading2: "Healthcare apps that support care journeys safely",
    techLine2: "Healthcare App Expertise",
  },
  {
    slug: "fintech-mobile-app-development",
    title: "Fintech Mobile App Development",
    shortDesc:
      "Develop secure financial applications with payments, wallets, banking integrations, and transaction management.",
    focus: "fintech",
    heroTitle: "Fintech Mobile App\nDevelopment in Qatar",
    heroLead:
      "Develop secure financial applications with payments, wallets, banking integrations, and transaction management users can trust.",
    heroTitleMaxCh: "16ch",
    heading2: "Fintech apps with security and clarity at every step",
    techLine2: "Fintech App Expertise",
  },
  {
    slug: "api-third-party-integrations",
    title: "API & Third-Party Integrations",
    shortDesc:
      "Integrate mobile applications with payment gateways, maps, cloud storage, CRMs, ERPs, push notifications, analytics, and external APIs.",
    focus: "api",
    heroTitle: "API & Third-Party\nIntegrations in Qatar",
    heroLead:
      "Integrate mobile applications with payment gateways, maps, cloud storage, CRMs, ERPs, push notifications, analytics, and external APIs.",
    heroTitleMaxCh: "16ch",
    heading2: "Integrations that make your mobile app part of the stack",
    techLine2: "Mobile Integrations Expertise",
  },
  {
    slug: "app-modernization-migration",
    title: "App Modernization & Migration",
    shortDesc:
      "Upgrade existing mobile applications, improve performance, migrate to modern frameworks, and add new features.",
    focus: "modernize",
    heroTitle: "App Modernization &\nMigration in Qatar",
    heroLead:
      "Upgrade existing mobile applications, improve performance, migrate to modern frameworks, and add new features without losing users.",
    heroTitleMaxCh: "16ch",
    heading2: "Modernize mobile apps without starting from zero",
    techLine2: "Modernization Expertise",
  },
  {
    slug: "app-maintenance-support",
    title: "App Maintenance & Support",
    shortDesc:
      "Provide ongoing updates, bug fixes, OS compatibility updates, security patches, performance optimization, and feature enhancements.",
    focus: "support",
    heroTitle: "App Maintenance &\nSupport in Qatar",
    heroLead:
      "Ongoing updates, bug fixes, OS compatibility updates, security patches, performance optimization, and feature enhancements after launch.",
    heroTitleMaxCh: "14ch",
    heading2: "Keep your app healthy through every OS release",
    techLine2: "Maintenance Expertise",
  },
];

const featureSets = {
  custom: [
    { title: "Goals-first product design", desc: "We map workflows, users, and outcomes before choosing stack or screen layouts." },
    { title: "Native-feeling UX", desc: "Interfaces follow platform conventions so users feel at home on iOS and Android." },
    { title: "Solid backend foundations", desc: "Auth, APIs, and data patterns planned for real usage from day one." },
    { title: "Launch-ready delivery", desc: "QA, store submission support, and handover keep go-live orderly." },
  ],
  crossplat: [
    { title: "Single codebase efficiency", desc: "Flutter or React Native delivery that reaches both stores without doubling effort." },
    { title: "Shared design system", desc: "Consistent UI with platform-aware details where they matter." },
    { title: "Performance discipline", desc: "Lists, navigation, and media paths tuned so cross-platform still feels fast." },
    { title: "Faster iteration", desc: "One team ships features to iOS and Android on the same release rhythm." },
  ],
  android: [
    { title: "Android UX patterns", desc: "Material-aware layouts and navigation that feel natural on Google devices." },
    { title: "Performance on real devices", desc: "Testing across form factors so the app stays smooth beyond flagship phones." },
    { title: "Play Store readiness", desc: "Build, signing, and release habits suited to Android distribution." },
    { title: "Scalable architecture", desc: "Modules and APIs that grow with features and traffic." },
  ],
  ios: [
    { title: "Human Interface polish", desc: "Layouts and interactions that feel at home on iPhone and iPad." },
    { title: "Security-minded defaults", desc: "Secure storage, auth, and session patterns suited to Apple platforms." },
    { title: "App Store quality bar", desc: "Review-friendly flows, privacy clarity, and submission support." },
    { title: "iPad-aware experiences", desc: "Layouts that adapt when your product needs more than a phone screen." },
  ],
  enterprise: [
    { title: "Role and access control", desc: "Employee apps with permissions that match how your organization works." },
    { title: "Field-ready reliability", desc: "Offline-tolerant patterns and clear sync for teams away from the desk." },
    { title: "Secure enterprise foundations", desc: "SSO-ready auth, hardened APIs, and audit-friendly practices." },
    { title: "Ops workflow fit", desc: "Screens designed around daily tasks, not generic dashboards." },
  ],
  ecom: [
    { title: "Catalog and discovery UX", desc: "Browsing, search, and product detail flows built for mobile conversion." },
    { title: "Secure checkout", desc: "Payments and wallets wired carefully so purchase completion stays high." },
    { title: "Orders and accounts", desc: "Tracking, history, and profile tools that reduce support load." },
    { title: "Push and retention", desc: "Notifications and re-engagement paths that respect the shopper." },
  ],
  saas: [
    { title: "Companion product thinking", desc: "Mobile surfaces the SaaS journeys users need on the go." },
    { title: "Realtime synchronization", desc: "Data and status stay aligned with the web product where it matters." },
    { title: "User and role management", desc: "Accounts, invites, and permissions mirror the SaaS access model." },
    { title: "Push and deep links", desc: "Notifications and links bring users into the right screen fast." },
  ],
  marketplace: [
    { title: "Multi-sided mobile UX", desc: "Buyer and vendor experiences that stay clear on small screens." },
    { title: "Listings and discovery", desc: "Catalog tools and search that help vendors sell and buyers find." },
    { title: "Payments and orders", desc: "Checkout, commissions, and tracking designed for marketplace complexity." },
    { title: "Trust signals", desc: "Reviews, status, and support paths that protect marketplace reputation." },
  ],
  booking: [
    { title: "Frictionless scheduling", desc: "Availability, slots, and confirmations designed for mobile thumbs." },
    { title: "Reservations and tickets", desc: "Booking types that match services, events, or resource allocation." },
    { title: "Reminders that help", desc: "Push and notifications that reduce no-shows without spam." },
    { title: "Staff and customer views", desc: "Operators manage calendars while customers self-serve bookings." },
  ],
  health: [
    { title: "Care journey UX", desc: "Appointments, visits, and follow-ups organized for patients and staff." },
    { title: "Telemedicine-ready patterns", desc: "Remote care flows designed for clarity and trust on mobile." },
    { title: "Records with care", desc: "Patient data handling planned with privacy and access boundaries in mind." },
    { title: "Clinic operations fit", desc: "Scheduling and management tools that match real healthcare workflows." },
  ],
  fintech: [
    { title: "Security first", desc: "Auth, session, and transaction patterns designed for financial trust." },
    { title: "Payments and wallets", desc: "Checkout, transfers, and balance views that stay clear under pressure." },
    { title: "Banking integrations", desc: "External financial APIs connected with careful error handling." },
    { title: "Transaction clarity", desc: "History, status, and receipts that reduce support tickets." },
  ],
  api: [
    { title: "Payments and maps", desc: "Gateways, location, and routing wired cleanly into mobile journeys." },
    { title: "CRM, ERP, and cloud", desc: "Business systems and storage connected without fragile one-offs." },
    { title: "Push and analytics", desc: "FCM/APNs and product analytics that help you learn and re-engage." },
    { title: "Observable integrations", desc: "Logging and failure handling keep third-party links trustworthy." },
  ],
  modernize: [
    { title: "Preserve what users know", desc: "We upgrade stacks while keeping familiar journeys where they still work." },
    { title: "Framework migration", desc: "Move to Flutter, React Native, or modern native patterns with a phased plan." },
    { title: "Performance lifts", desc: "Startup, lists, and network paths improved as part of modernization." },
    { title: "Feature runway", desc: "Architecture cleaned so new capabilities are cheaper to ship." },
  ],
  support: [
    { title: "OS compatibility cadence", desc: "iOS and Android releases are monitored so the app stays compatible." },
    { title: "Security and patches", desc: "Dependencies and hardening stay current on a predictable rhythm." },
    { title: "Bug fixes and performance", desc: "Crashes, slow screens, and regressions get steady attention." },
    { title: "Feature enhancements", desc: "Roadmap delivery continues after launch so the product keeps winning users." },
  ],
};

const processSets = {
  custom: [
    { number: "1", title: "Product discovery", body: "Goals, users, platforms, and success metrics shape the app blueprint." },
    { number: "2", title: "UX and architecture", body: "Key journeys and technical foundations are designed before heavy build." },
    { number: "3", title: "Build and test", body: "Iterative releases with device QA and stakeholder demos." },
    { number: "4", title: "Launch and support", body: "Store submission, monitoring, and optional ongoing product care." },
  ],
  crossplat: [
    { number: "1", title: "Platform strategy", body: "We confirm Flutter or React Native fit and shared feature scope." },
    { number: "2", title: "Shared UX system", body: "Designs balance shared components with platform-aware details." },
    { number: "3", title: "Dual-platform build", body: "One codebase ships to iOS and Android with continuous device testing." },
    { number: "4", title: "Store launch", body: "Both stores go live with a plan for shared release cycles." },
  ],
  android: [
    { number: "1", title: "Android requirements", body: "Devices, OS targets, and Google Play constraints are clarified." },
    { number: "2", title: "UX and module design", body: "Navigation and feature modules are designed for Android patterns." },
    { number: "3", title: "Develop and device QA", body: "Features ship with testing across representative Android devices." },
    { number: "4", title: "Play Store release", body: "Signing, listing, and rollout support for a clean launch." },
  ],
  ios: [
    { number: "1", title: "iOS requirements", body: "Devices, privacy needs, and App Store guidelines shape the plan." },
    { number: "2", title: "Interface design", body: "Flows follow Apple conventions for clarity and review success." },
    { number: "3", title: "Build and harden", body: "Features ship with security and device testing on iPhone and iPad." },
    { number: "4", title: "App Store release", body: "Submission support and post-launch monitoring for Apple users." },
  ],
  enterprise: [
    { number: "1", title: "Workflow and security workshop", body: "Roles, field needs, and identity requirements are documented." },
    { number: "2", title: "Architecture and access design", body: "SSO-ready auth, offline needs, and module boundaries are planned." },
    { number: "3", title: "Build for operators", body: "Employee-facing features ship with integration and QA discipline." },
    { number: "4", title: "Roll out to teams", body: "Training, permissions, and monitoring support enterprise adoption." },
  ],
  ecom: [
    { number: "1", title: "Commerce journey mapping", body: "Browse, cart, checkout, and account paths are prioritized." },
    { number: "2", title: "Mobile merchandising UX", body: "Catalog and product screens are designed for conversion." },
    { number: "3", title: "Payments and orders build", body: "Checkout, tracking, and accounts are implemented with QA." },
    { number: "4", title: "Launch and optimize", body: "Store release plus a plan for retention and performance." },
  ],
  saas: [
    { number: "1", title: "Product surface planning", body: "Which SaaS journeys belong on mobile is decided first." },
    { number: "2", title: "Sync and auth design", body: "Realtime needs, roles, and deep links are designed carefully." },
    { number: "3", title: "Build the companion app", body: "Features ship aligned with the web product APIs." },
    { number: "4", title: "Launch with the platform", body: "Release, push setup, and iteration alongside SaaS roadmap." },
  ],
  marketplace: [
    { number: "1", title: "Marketplace model design", body: "Buyer, vendor, and admin mobile roles are defined clearly." },
    { number: "2", title: "Discovery and listing UX", body: "Search, catalogs, and vendor tools are designed for trust." },
    { number: "3", title: "Payments and order build", body: "Checkout, commissions, and tracking ship iteratively." },
    { number: "4", title: "Grow with governance", body: "Launch includes moderation and vendor onboarding support." },
  ],
  booking: [
    { number: "1", title: "Booking rules workshop", body: "Services, availability, and payment rules are documented." },
    { number: "2", title: "Scheduling UX design", body: "Customer and staff flows are prototyped for speed." },
    { number: "3", title: "Build calendars and alerts", body: "Booking logic, confirmations, and push reminders are implemented." },
    { number: "4", title: "Launch and reduce no-shows", body: "We monitor completion and refine reminder rules after go-live." },
  ],
  health: [
    { number: "1", title: "Care workflow discovery", body: "Appointments, patients, and staff roles shape requirements." },
    { number: "2", title: "Privacy-minded UX design", body: "Sensitive journeys are designed for clarity and access control." },
    { number: "3", title: "Build clinical mobile features", body: "Scheduling, records, and telemedicine paths ship with careful QA." },
    { number: "4", title: "Roll out carefully", body: "Training and monitoring support safe adoption." },
  ],
  fintech: [
    { number: "1", title: "Risk and journey workshop", body: "Payments, wallets, and compliance needs are clarified early." },
    { number: "2", title: "Secure UX design", body: "Money movements are designed for clarity and confirmation." },
    { number: "3", title: "Integrate and harden", body: "Financial APIs and auth ship with rigorous testing." },
    { number: "4", title: "Launch with monitoring", body: "Transaction health and support playbooks stabilize go-live." },
  ],
  api: [
    { number: "1", title: "Integration map", body: "Payments, maps, CRM/ERP, push, and analytics needs are listed." },
    { number: "2", title: "API contract design", body: "Auth, payloads, and failure modes are defined before coding." },
    { number: "3", title: "Build connectors", body: "Third-party services are wired with logging and retries." },
    { number: "4", title: "Observe and maintain", body: "Alerts and runbooks keep integrations healthy in production." },
  ],
  modernize: [
    { number: "1", title: "App assessment", body: "Stack debt, crashes, and feature gaps are inventoried." },
    { number: "2", title: "Migration roadmap", body: "Framework targets and phased cutovers reduce risk." },
    { number: "3", title: "Rebuild and improve", body: "Modern modules and performance work ship with parallel testing." },
    { number: "4", title: "Cut over and stabilize", body: "Users land on the improved app with close post-launch support." },
  ],
  support: [
    { number: "1", title: "Health baseline", body: "Crash rates, OS targets, and backlog priorities are reviewed." },
    { number: "2", title: "Support operating rhythm", body: "SLAs, patch cycles, and escalation paths are agreed." },
    { number: "3", title: "Maintain and improve", body: "Updates, fixes, and enhancements ship on a steady cadence." },
    { number: "4", title: "Report and plan", body: "Regular reviews keep product and reliability priorities aligned." },
  ],
};

function faqsFor(d) {
  return [
    {
      question: `What is included in ${d.title} from Saqrih?`,
      answer: `${d.title} typically includes discovery, UX and solution design, development, integrations where needed, device QA, and launch or handover support. Scope is tailored to your mobile goals in Qatar and documented before build starts.`,
    },
    {
      question: `How long does ${d.title.toLowerCase()} take?`,
      answer:
        "Timelines depend on platforms, features, integrations, and store submission needs. Focused MVPs can ship in weeks, while enterprise, marketplace, or fintech apps take longer. You receive a milestone plan in the proposal.",
    },
    {
      question: "Do you build for iOS, Android, and cross-platform?",
      answer:
        "Yes. We deliver native-feeling iOS and Android apps as well as cross-platform products with Flutter or React Native when a shared codebase is the right fit.",
    },
    {
      question: "Can you integrate payments, maps, push, and business systems?",
      answer:
        "Yes. Payment gateways, maps, cloud storage, CRM/ERP, push notifications, analytics, and other APIs are a regular part of our mobile delivery.",
    },
    {
      question: "Will you help with App Store and Google Play launch?",
      answer:
        "Yes. We support preparation for store listings, builds, and common review requirements so your release process is clearer and less stressful.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. We offer app maintenance and support for OS updates, bug fixes, security patches, performance work, and feature enhancements.",
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
    intro: `Saqrih delivers ${d.title.toLowerCase()} as part of our Mobile App Development practice in Qatar. ${d.shortDesc} We combine product UX with solid mobile engineering.`,
    rightTitle: `${d.title} engineered for clarity, performance, and measurable outcomes`,
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
    body: `Cross-platform frameworks, backends, data, auth, payments, maps, analytics, cloud, and QA tooling we use for ${d.title.toLowerCase()}.`,
  },
}));

const target = path.join("lib", "services", "mobileAppDevelopmentSubPages.js");
const out = `/**
 * Retained-style sub-page content for /services/mobile-app-development/[slug].
 * Unique SEO copy per sub-service for Saqrih (Qatar).
 */

export const MOBILE_DEV_PARENT = {
  path: "/services/mobile-app-development",
  title: "Mobile App Development",
};

export const MOBILE_DEV_SUB_PAGES = ${JSON.stringify(pages, null, 2)};

export function getMobileDevSubPage(slug) {
  return MOBILE_DEV_SUB_PAGES.find((s) => s.slug === slug) ?? null;
}

export function getAllMobileDevSubPageSlugs() {
  return MOBILE_DEV_SUB_PAGES.map((s) => s.slug);
}

export function getMobileDevSiblingCards(currentSlug) {
  const others = MOBILE_DEV_SUB_PAGES.filter((s) => s.slug !== currentSlug);
  return others.map((s, i) => ({
    id: s.slug,
    title: s.title,
    desc: s.shortDesc,
    href: \`\${MOBILE_DEV_PARENT.path}/\${s.slug}\`,
    ...(i === 0
      ? { isHero: true, eyebrow: "More mobile app development services" }
      : {}),
  }));
}
`;

fs.writeFileSync(target, out);
console.log("wrote", pages.length, "to", target);
