const fs = require("fs");
const path = require("path");

const defs = [
  {
    slug: "custom-web-application-development",
    title: "Custom Web Application Development",
    shortDesc:
      "Tailor-made web applications designed around your unique business processes and workflows.",
    focus: "custom",
    heroTitle: "Custom Web Application\nDevelopment in Qatar",
    heroLead:
      "Tailor-made web applications designed around your unique business processes and workflows. Built in Doha for real operations, not generic templates.",
    heroTitleMaxCh: "18ch",
    heading2: "Apps shaped around how your business actually works",
    techLine2: "Custom Web App Expertise",
  },
  {
    slug: "enterprise-web-application-development",
    title: "Enterprise Web Application Development",
    shortDesc:
      "Scalable applications for medium and large organizations with advanced security, user management, and integrations.",
    focus: "enterprise",
    heroTitle: "Enterprise Web Application\nDevelopment in Qatar",
    heroLead:
      "Scalable applications for medium and large organizations with advanced security, user management, and integrations that fit complex teams.",
    heroTitleMaxCh: "20ch",
    heading2: "Enterprise-grade apps with security and scale built in",
    techLine2: "Enterprise App Expertise",
  },
  {
    slug: "business-process-automation",
    title: "Business Process Automation",
    shortDesc:
      "Applications that streamline repetitive tasks, approvals, reporting, and internal operations.",
    focus: "automation",
    heroTitle: "Business Process\nAutomation in Qatar",
    heroLead:
      "Applications that streamline repetitive tasks, approvals, reporting, and internal operations so your team spends less time on busywork.",
    heroTitleMaxCh: "16ch",
    heading2: "Automate the work that slows your operations down",
    techLine2: "Automation Expertise",
  },
  {
    slug: "customer-portal-development",
    title: "Customer Portal Development",
    shortDesc:
      "Secure portals where customers can manage accounts, orders, documents, subscriptions, and support requests.",
    focus: "customerPortal",
    heroTitle: "Customer Portal\nDevelopment in Qatar",
    heroLead:
      "Secure portals where customers can manage accounts, orders, documents, subscriptions, and support requests in one place.",
    heroTitleMaxCh: "14ch",
    heading2: "Self-serve portals that reduce support load and raise trust",
    techLine2: "Customer Portal Expertise",
  },
  {
    slug: "employee-portal-development",
    title: "Employee Portal Development",
    shortDesc:
      "Internal platforms for HR, finance, project management, document sharing, and collaboration.",
    focus: "employeePortal",
    heroTitle: "Employee Portal\nDevelopment in Qatar",
    heroLead:
      "Internal platforms for HR, finance, project management, document sharing, and collaboration across your organization.",
    heroTitleMaxCh: "14ch",
    heading2: "Internal portals that keep teams aligned and productive",
    techLine2: "Employee Portal Expertise",
  },
  {
    slug: "admin-dashboard-development",
    title: "Admin Dashboard Development",
    shortDesc:
      "Custom administration panels with analytics, reporting, role management, and system controls.",
    focus: "admin",
    heroTitle: "Admin Dashboard\nDevelopment in Qatar",
    heroLead:
      "Custom administration panels with analytics, reporting, role management, and system controls built for operators who need clarity fast.",
    heroTitleMaxCh: "14ch",
    heading2: "Control centers designed for day-to-day decision making",
    techLine2: "Admin Dashboard Expertise",
  },
  {
    slug: "crm-development",
    title: "CRM Development",
    shortDesc:
      "Customer Relationship Management systems tailored to your sales and customer service processes.",
    focus: "crm",
    heroTitle: "CRM Development\nServices in Qatar",
    heroLead:
      "Customer Relationship Management systems tailored to your sales and customer service processes, not a one-size-fits-all CRM you have to fight.",
    heroTitleMaxCh: "14ch",
    heading2: "CRM built around your pipeline and service playbook",
    techLine2: "CRM Development Expertise",
  },
  {
    slug: "erp-development",
    title: "ERP Development",
    shortDesc:
      "Custom Enterprise Resource Planning systems for finance, inventory, procurement, HR, and operations.",
    focus: "erp",
    heroTitle: "ERP Development\nServices in Qatar",
    heroLead:
      "Custom Enterprise Resource Planning systems for finance, inventory, procurement, HR, and operations under one connected platform.",
    heroTitleMaxCh: "14ch",
    heading2: "Connected ERP modules that mirror your operating model",
    techLine2: "ERP Development Expertise",
  },
  {
    slug: "booking-reservation-systems",
    title: "Booking & Reservation Systems",
    shortDesc:
      "Online scheduling, appointment management, event booking, hotel reservations, and resource allocation systems.",
    focus: "booking",
    heroTitle: "Booking & Reservation\nSystems in Qatar",
    heroLead:
      "Online scheduling, appointment management, event booking, hotel reservations, and resource allocation systems that reduce no-shows and admin work.",
    heroTitleMaxCh: "18ch",
    heading2: "Booking flows that customers finish and teams can manage",
    techLine2: "Booking Systems Expertise",
  },
  {
    slug: "marketplace-development",
    title: "Marketplace Development",
    shortDesc:
      "Multi-vendor marketplaces with vendor management, payments, commissions, and order tracking.",
    focus: "marketplace",
    heroTitle: "Marketplace\nDevelopment in Qatar",
    heroLead:
      "Multi-vendor marketplaces with vendor management, payments, commissions, and order tracking built for growth.",
    heroTitleMaxCh: "12ch",
    heading2: "Multi-sided marketplaces with clean vendor and buyer flows",
    techLine2: "Marketplace Expertise",
  },
  {
    slug: "membership-subscription-platforms",
    title: "Membership & Subscription Platforms",
    shortDesc:
      "Platforms with user registration, subscriptions, gated content, recurring billing, and account management.",
    focus: "membership",
    heroTitle: "Membership & Subscription\nPlatforms in Qatar",
    heroLead:
      "Platforms with user registration, subscriptions, gated content, recurring billing, and account management for recurring revenue.",
    heroTitleMaxCh: "20ch",
    heading2: "Subscription platforms that retain members and bill cleanly",
    techLine2: "Membership Platform Expertise",
  },
  {
    slug: "learning-management-systems",
    title: "Learning Management Systems (LMS)",
    shortDesc:
      "Training platforms with courses, quizzes, progress tracking, certificates, and instructor management.",
    focus: "lms",
    heroTitle: "Learning Management\nSystems in Qatar",
    heroLead:
      "Training platforms with courses, quizzes, progress tracking, certificates, and instructor management for teams and customers.",
    heroTitleMaxCh: "16ch",
    heading2: "LMS platforms that make training measurable and engaging",
    techLine2: "LMS Expertise",
  },
  {
    slug: "workflow-management-systems",
    title: "Workflow Management Systems",
    shortDesc:
      "Applications for approvals, task assignments, project tracking, and operational workflows.",
    focus: "workflow",
    heroTitle: "Workflow Management\nSystems in Qatar",
    heroLead:
      "Applications for approvals, task assignments, project tracking, and operational workflows with clear ownership at every step.",
    heroTitleMaxCh: "16ch",
    heading2: "Workflows that move work forward without email chaos",
    techLine2: "Workflow Systems Expertise",
  },
  {
    slug: "inventory-asset-management-systems",
    title: "Inventory & Asset Management Systems",
    shortDesc:
      "Applications for managing stock, warehouses, equipment, and business assets.",
    focus: "inventory",
    heroTitle: "Inventory & Asset\nManagement in Qatar",
    heroLead:
      "Applications for managing stock, warehouses, equipment, and business assets with accurate visibility across locations.",
    heroTitleMaxCh: "16ch",
    heading2: "Inventory and asset systems that keep operations precise",
    techLine2: "Inventory Systems Expertise",
  },
  {
    slug: "reporting-analytics-applications",
    title: "Reporting & Analytics Applications",
    shortDesc:
      "Business intelligence dashboards, KPI reporting, financial reports, and real-time analytics.",
    focus: "analytics",
    heroTitle: "Reporting & Analytics\nApplications in Qatar",
    heroLead:
      "Business intelligence dashboards, KPI reporting, financial reports, and real-time analytics your leadership can act on.",
    heroTitleMaxCh: "18ch",
    heading2: "Analytics apps that turn data into clear decisions",
    techLine2: "Analytics App Expertise",
  },
  {
    slug: "legacy-application-modernization",
    title: "Legacy Application Modernization",
    shortDesc:
      "Upgrading older systems with modern technologies while preserving business functionality.",
    focus: "legacy",
    heroTitle: "Legacy Application\nModernization in Qatar",
    heroLead:
      "Upgrade older systems with modern technologies while preserving business functionality, data, and the processes your team already trusts.",
    heroTitleMaxCh: "16ch",
    heading2: "Modernize legacy systems without losing what still works",
    techLine2: "Modernization Expertise",
  },
];

const featureSets = {
  custom: [
    { title: "Process-first discovery", desc: "We map your workflows, roles, and edge cases before writing code so the app fits the business, not the other way around." },
    { title: "Modular architecture", desc: "Features ship as maintainable modules so you can grow the product without rewriting the core." },
    { title: "Secure by default", desc: "Auth, permissions, and data handling are designed into the foundation from day one." },
    { title: "Integration ready", desc: "APIs and connectors keep your custom app talking to CRM, ERP, payments, and internal tools." },
  ],
  enterprise: [
    { title: "Role-based access control", desc: "Fine-grained permissions for departments, vendors, and admins with audit-friendly patterns." },
    { title: "Scalable infrastructure", desc: "Architecture planned for concurrent users, growth in data volume, and multi-team usage." },
    { title: "Enterprise integrations", desc: "Connect identity providers, finance systems, and operational tools without brittle glue code." },
    { title: "Compliance-minded delivery", desc: "Security reviews, logging, and environment separation suited to larger organizations." },
  ],
  automation: [
    { title: "Workflow mapping", desc: "We identify repetitive approvals, handoffs, and reporting loops that burn the most time." },
    { title: "Rule-driven automation", desc: "Triggers, conditions, and escalations keep processes moving without constant manual chasing." },
    { title: "Human-in-the-loop controls", desc: "Critical steps stay reviewable while routine work runs automatically." },
    { title: "Operational visibility", desc: "Dashboards show bottlenecks, completion rates, and exceptions in real time." },
  ],
  customerPortal: [
    { title: "Secure account experiences", desc: "Customers manage profiles, orders, and documents behind authenticated, permission-aware access." },
    { title: "Self-serve support paths", desc: "Tickets, FAQs, and status views reduce inbound pressure on your support team." },
    { title: "Subscription and billing clarity", desc: "Plans, invoices, and renewals are easy to understand and act on." },
    { title: "Brand-consistent UX", desc: "The portal feels like an extension of your product, not a generic third-party add-on." },
  ],
  employeePortal: [
    { title: "Department-ready modules", desc: "HR, finance, projects, and documents can live in one internal platform with clear navigation." },
    { title: "Collaboration without chaos", desc: "Shared files, updates, and requests stay organized with roles and permissions." },
    { title: "Mobile-friendly internal UX", desc: "Field and office teams can complete tasks without fighting desktop-only designs." },
    { title: "SSO-ready foundations", desc: "Identity patterns that fit how your organization already authenticates users." },
  ],
  admin: [
    { title: "Operator-first layouts", desc: "Dense information is organized so admins can act quickly without hunting through menus." },
    { title: "Roles and system controls", desc: "Permission models and settings panels keep power users productive and safe." },
    { title: "Reporting that matters", desc: "KPIs, filters, and exports match how leaders and operators actually review performance." },
    { title: "Audit-friendly actions", desc: "Important changes can be logged and reviewed when accountability matters." },
  ],
  crm: [
    { title: "Pipeline tailored to you", desc: "Stages, fields, and views mirror your sales motion instead of forcing a generic CRM shape." },
    { title: "Service and sales together", desc: "Customer history, tickets, and follow-ups stay connected for better handoffs." },
    { title: "Automation for follow-through", desc: "Reminders, assignments, and status updates reduce leads falling through cracks." },
    { title: "Reporting for revenue teams", desc: "Conversion, activity, and forecast views built around what your managers need weekly." },
  ],
  erp: [
    { title: "Modular ERP coverage", desc: "Finance, inventory, procurement, HR, and operations can be phased without boiling the ocean." },
    { title: "Single source of truth", desc: "Shared data models reduce duplicate entry across departments." },
    { title: "Process controls", desc: "Approvals, permissions, and audit trails support operational discipline." },
    { title: "Integration with existing tools", desc: "Banking, e-commerce, and warehouse systems can connect as your ERP grows." },
  ],
  booking: [
    { title: "Frictionless booking UX", desc: "Customers complete scheduling flows quickly on mobile and desktop." },
    { title: "Resource-aware calendars", desc: "Staff, rooms, inventory, and capacity rules prevent double booking." },
    { title: "Reminders and confirmations", desc: "Notifications reduce no-shows and keep both sides aligned." },
    { title: "Payments and deposits", desc: "Checkout patterns for paid bookings, deposits, and refunds when needed." },
  ],
  marketplace: [
    { title: "Vendor onboarding", desc: "Seller profiles, approvals, and catalog tools that keep marketplace quality high." },
    { title: "Payments and commissions", desc: "Checkout, payouts, and fee logic designed for multi-party transactions." },
    { title: "Order lifecycle tracking", desc: "Buyers, vendors, and admins share clear status across fulfillment." },
    { title: "Trust and moderation tools", desc: "Reviews, disputes, and admin controls that protect the marketplace brand." },
  ],
  membership: [
    { title: "Plan and access control", desc: "Tiers, gated content, and entitlements stay consistent across the member journey." },
    { title: "Recurring billing", desc: "Subscriptions, renewals, dunning, and account updates wired for reliability." },
    { title: "Member self-service", desc: "Users manage plans, invoices, and profile details without support tickets for every change." },
    { title: "Retention-ready insights", desc: "Usage and churn signals that help you improve offers and engagement." },
  ],
  lms: [
    { title: "Course and content structure", desc: "Modules, lessons, quizzes, and media organized for learners and instructors." },
    { title: "Progress and certificates", desc: "Tracking, completion rules, and credentials that prove learning outcomes." },
    { title: "Instructor tools", desc: "Content publishing, learner management, and assessment workflows for teaching teams." },
    { title: "Role-based learning access", desc: "Employees, customers, or partners see the right programs with the right permissions." },
  ],
  workflow: [
    { title: "Approval chains that stick", desc: "Configurable steps, assignees, and escalations replace scattered email threads." },
    { title: "Task ownership clarity", desc: "Everyone knows what is waiting, who owns it, and what happens next." },
    { title: "Project and ops tracking", desc: "Statuses, SLAs, and history stay visible across teams." },
    { title: "Notifications that help", desc: "Alerts fire when action is needed without flooding inboxes." },
  ],
  inventory: [
    { title: "Stock visibility", desc: "Quantities, locations, and movements stay accurate across warehouses and teams." },
    { title: "Asset lifecycle tracking", desc: "Equipment and assets can be assigned, maintained, and audited over time." },
    { title: "Receiving and fulfillment flows", desc: "Inbound, transfers, and outbound processes reduce manual spreadsheet risk." },
    { title: "Alerts and reconciliation", desc: "Low stock, mismatches, and exceptions surface before they become costly." },
  ],
  analytics: [
    { title: "KPI dashboards", desc: "Leadership views that highlight the metrics that drive weekly decisions." },
    { title: "Operational reporting", desc: "Filters, exports, and scheduled reports for finance, ops, and growth teams." },
    { title: "Real-time where it matters", desc: "Live signals for the journeys that cannot wait for overnight batch reports." },
    { title: "Trusted data pipelines", desc: "Clean models and definitions so teams argue less about whose numbers are right." },
  ],
  legacy: [
    { title: "Preserve business logic", desc: "We modernize platforms while keeping the workflows and rules your team depends on." },
    { title: "Phased migration", desc: "Risk is reduced by moving modules in stages with clear cutover plans." },
    { title: "Better UX without disruption", desc: "Interfaces improve while users can still complete familiar tasks." },
    { title: "Future-ready stack", desc: "APIs, security, and maintainability improved so the next decade is easier than the last." },
  ],
};

const processSets = {
  custom: [
    { number: "1", title: "Map processes and outcomes", body: "We document workflows, users, integrations, and success metrics before architecture decisions." },
    { number: "2", title: "Prototype critical journeys", body: "Key screens and flows are validated early so stakeholders align on UX and scope." },
    { number: "3", title: "Build in iterative releases", body: "Core modules ship first, then features expand with testing and feedback loops." },
    { number: "4", title: "Launch, train, and support", body: "Go-live includes QA, handover, and optional ongoing product care." },
  ],
  enterprise: [
    { number: "1", title: "Stakeholder and risk discovery", body: "Security, roles, compliance needs, and system boundaries are clarified up front." },
    { number: "2", title: "Architecture and governance", body: "We design scalable structure, environments, and permission models for enterprise use." },
    { number: "3", title: "Build and integrate", body: "Applications connect to identity, data, and operational systems with disciplined QA." },
    { number: "4", title: "Roll out and harden", body: "Phased launch, monitoring, and hardening keep large teams productive safely." },
  ],
  automation: [
    { number: "1", title: "Audit manual work", body: "We identify high-volume tasks, approvals, and reporting that should be automated." },
    { number: "2", title: "Design the rules", body: "Triggers, exceptions, and ownership models are defined before development." },
    { number: "3", title: "Implement and test flows", body: "Automation is built with clear audit trails and human review where needed." },
    { number: "4", title: "Measure and refine", body: "We track time saved and bottlenecks, then tune rules after real usage." },
  ],
  customerPortal: [
    { number: "1", title: "Define customer journeys", body: "Account, order, document, and support paths are prioritized by business impact." },
    { number: "2", title: "Design secure self-serve UX", body: "Interfaces balance ease of use with authentication and permission boundaries." },
    { number: "3", title: "Integrate backend systems", body: "CRM, billing, and support tools sync into one customer-facing experience." },
    { number: "4", title: "Launch and iterate", body: "Analytics and feedback guide the next portal improvements after go-live." },
  ],
  employeePortal: [
    { number: "1", title: "Department needs workshop", body: "HR, finance, ops, and project teams define what must live in the portal." },
    { number: "2", title: "Information architecture", body: "Menus, roles, and document structures are designed for daily internal use." },
    { number: "3", title: "Build and connect systems", body: "We develop modules and integrate identity, files, and internal tools." },
    { number: "4", title: "Onboard your workforce", body: "Training and permissions rollout help adoption without disrupting operations." },
  ],
  admin: [
    { number: "1", title: "Operator research", body: "We study how admins currently manage data, exceptions, and reporting." },
    { number: "2", title: "Dashboard information design", body: "Layouts prioritize actions, filters, and KPIs over decorative clutter." },
    { number: "3", title: "Build controls and reports", body: "Roles, settings, and analytics are implemented with careful QA." },
    { number: "4", title: "Refine with real usage", body: "Post-launch tweaks improve speed and clarity for power users." },
  ],
  crm: [
    { number: "1", title: "Sales and service mapping", body: "Pipeline stages, ownership rules, and customer touchpoints are documented." },
    { number: "2", title: "Data model and UX design", body: "Records, activities, and views are designed around how teams sell and support." },
    { number: "3", title: "Build automations and reports", body: "Follow-ups, assignments, and revenue reporting are implemented carefully." },
    { number: "4", title: "Migrate and adopt", body: "Existing contacts and history move in with training for the sales team." },
  ],
  erp: [
    { number: "1", title: "Operating model discovery", body: "Finance, inventory, procurement, and HR processes define module priorities." },
    { number: "2", title: "Blueprint the ERP core", body: "Shared data, permissions, and first modules are planned for phased delivery." },
    { number: "3", title: "Implement and integrate", body: "We build modules and connect external systems needed for daily operations." },
    { number: "4", title: "Cut over with controls", body: "Training, reconciliation, and support stabilize the ERP after launch." },
  ],
  booking: [
    { number: "1", title: "Booking rules workshop", body: "Services, resources, availability, and payment rules are defined clearly." },
    { number: "2", title: "Design the reservation UX", body: "Customer and staff flows are prototyped for speed and clarity." },
    { number: "3", title: "Build calendars and notifications", body: "Scheduling logic, confirmations, and admin tools are implemented." },
    { number: "4", title: "Launch and optimize", body: "We monitor conversion, no-shows, and staff feedback to refine the system." },
  ],
  marketplace: [
    { number: "1", title: "Marketplace model design", body: "Buyer, vendor, and admin roles plus commission logic are defined first." },
    { number: "2", title: "Catalog and checkout UX", body: "Discovery, vendor stores, and purchase flows are designed for trust and conversion." },
    { number: "3", title: "Build marketplace operations", body: "Payments, orders, moderation, and vendor tools are developed iteratively." },
    { number: "4", title: "Grow with governance", body: "Launch includes admin controls and a plan for onboarding more vendors safely." },
  ],
  membership: [
    { number: "1", title: "Offer and access planning", body: "Plans, gated content, and member benefits are structured before build." },
    { number: "2", title: "Account and billing UX", body: "Registration, upgrades, and self-serve account flows are designed carefully." },
    { number: "3", title: "Implement subscriptions", body: "Billing, entitlements, and member portals are built with testing around renewals." },
    { number: "4", title: "Retain and improve", body: "Usage insights guide content, pricing, and retention improvements after launch." },
  ],
  lms: [
    { number: "1", title: "Learning program design", body: "Audiences, course structure, and certification goals shape the LMS scope." },
    { number: "2", title: "Learner and instructor UX", body: "Content consumption, quizzes, and teaching tools are prototyped for clarity." },
    { number: "3", title: "Build the learning engine", body: "Courses, progress, assessments, and certificates are implemented with QA." },
    { number: "4", title: "Roll out training", body: "Admins publish programs and learners onboard with support for early cohorts." },
  ],
  workflow: [
    { number: "1", title: "Map current workflows", body: "Approvals, handoffs, and delays are documented across teams." },
    { number: "2", title: "Design the new process", body: "Steps, roles, SLAs, and exception paths are defined before coding." },
    { number: "3", title: "Build and notify", body: "Task boards, approvals, and alerts are implemented with audit history." },
    { number: "4", title: "Adopt and tune", body: "Teams start using the system and rules are adjusted based on real bottlenecks." },
  ],
  inventory: [
    { number: "1", title: "Inventory and asset audit", body: "Locations, SKUs, assets, and current pain points define requirements." },
    { number: "2", title: "Model stock and movements", body: "Data structures for receiving, transfers, and consumption are designed carefully." },
    { number: "3", title: "Build operational tools", body: "Dashboards, scans, alerts, and reports are developed for warehouse and ops teams." },
    { number: "4", title: "Reconcile and launch", body: "Opening balances and training ensure the system starts with trusted numbers." },
  ],
  analytics: [
    { number: "1", title: "Metric definition workshop", body: "KPIs and report owners are agreed so dashboards measure what matters." },
    { number: "2", title: "Data source mapping", body: "We identify systems, transforms, and freshness needs for each report." },
    { number: "3", title: "Build dashboards and reports", body: "Visualizations, filters, and exports are implemented with validation checks." },
    { number: "4", title: "Enable decision routines", body: "Teams get training and iteration cycles so analytics become part of operations." },
  ],
  legacy: [
    { number: "1", title: "Legacy system assessment", body: "We inventory features, data, risks, and what must be preserved versus replaced." },
    { number: "2", title: "Modernization roadmap", body: "Phased targets, architecture, and cutover strategy reduce migration risk." },
    { number: "3", title: "Rebuild and migrate", body: "New modules and data moves are delivered with parallel testing where needed." },
    { number: "4", title: "Cut over and stabilize", body: "Users move to the modern platform with monitoring and rapid issue response." },
  ],
};

function faqsFor(d) {
  return [
    {
      question: `What is included in ${d.title} from Saqrih?`,
      answer: `${d.title} typically includes discovery, UX and solution design, development, integrations, QA, and launch support. Scope is tailored to your processes in Qatar and documented before build starts.`,
    },
    {
      question: `How long does ${d.title.toLowerCase()} take?`,
      answer:
        "Timelines depend on modules, integrations, and data complexity. Focused portals or dashboards can ship in weeks, while ERP, marketplace, or multi-department platforms take longer. You receive a milestone plan in the proposal.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Yes. We commonly connect CRMs, ERPs, payment providers, identity systems, and internal APIs so your web application becomes part of the operating stack rather than another silo.",
    },
    {
      question: "How do you handle security and user permissions?",
      answer:
        "Authentication, role-based access, and environment practices are planned early. Enterprise and portal projects often include audit-friendly permissions, secure session handling, and hardening suited to the sensitivity of your data.",
    },
    {
      question: "Will the application work on mobile devices?",
      answer:
        "Yes. We design responsive web applications that work across phones, tablets, and desktops, which matters for teams and customers in Doha who often work on the go.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. We offer maintenance and product support for updates, monitoring, bug fixes, and feature enhancements so your application stays reliable as usage grows.",
    },
  ];
}

function metaDesc(d) {
  const raw = `${d.title} in Qatar from Saqrih. ${d.shortDesc} Secure, scalable web apps for Doha businesses.`;
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
    intro: `Saqrih delivers ${d.title.toLowerCase()} as part of our Web Application Development practice in Qatar. ${d.shortDesc} We combine product thinking, UX, and engineering so the application fits real operations.`,
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
    body: `Frontend, backend, data, auth, integrations, cloud, and QA tooling we use for ${d.title.toLowerCase()}.`,
  },
}));

const target = path.join("lib", "services", "webApplicationDevelopmentSubPages.js");
const out = `/**
 * Retained-style sub-page content for /services/web-application-development/[slug].
 * Unique SEO copy per sub-service for Saqrih (Qatar).
 */

export const WEB_APP_DEV_PARENT = {
  path: "/services/web-application-development",
  title: "Web Application Development",
};

export const WEB_APP_DEV_SUB_PAGES = ${JSON.stringify(pages, null, 2)};

export function getWebAppDevSubPage(slug) {
  return WEB_APP_DEV_SUB_PAGES.find((s) => s.slug === slug) ?? null;
}

export function getAllWebAppDevSubPageSlugs() {
  return WEB_APP_DEV_SUB_PAGES.map((s) => s.slug);
}

export function getWebAppDevSiblingCards(currentSlug) {
  const others = WEB_APP_DEV_SUB_PAGES.filter((s) => s.slug !== currentSlug).slice(
    0,
    8
  );
  return others.map((s, i) => ({
    id: s.slug,
    title: s.title,
    desc: s.shortDesc,
    href: \`\${WEB_APP_DEV_PARENT.path}/\${s.slug}\`,
    ...(i === 0
      ? { isHero: true, eyebrow: "More web application development services" }
      : {}),
  }));
}
`;

fs.writeFileSync(target, out);
console.log("wrote", pages.length, "to", target);
