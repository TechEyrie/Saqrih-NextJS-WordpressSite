const fs = require("fs");
const path = require("path");

const defs = [
  {
    slug: "custom-cms-development",
    title: "Custom CMS Development",
    shortDesc:
      "Build custom content management solutions tailored to your business, editorial workflows, and content strategy.",
    focus: "custom",
    heroTitle: "Custom CMS\nDevelopment in Qatar",
    heroLead:
      "Build custom content management solutions tailored to your business, editorial workflows, and content strategy, not a one-size-fits-all install.",
    heroTitleMaxCh: "12ch",
    heading2: "CMS platforms shaped around how your team publishes",
    techLine2: "Custom CMS Expertise",
  },
  {
    slug: "headless-cms-development",
    title: "Headless CMS Development",
    shortDesc:
      "Develop modern headless CMS solutions that deliver content seamlessly across websites, mobile apps, kiosks, and digital platforms.",
    focus: "headless",
    heroTitle: "Headless CMS\nDevelopment in Qatar",
    heroLead:
      "Develop modern headless CMS solutions that deliver content seamlessly across websites, mobile apps, kiosks, and digital platforms.",
    heroTitleMaxCh: "12ch",
    heading2: "One content source, many channels, modern frontends",
    techLine2: "Headless CMS Expertise",
  },
  {
    slug: "cms-implementation-setup",
    title: "CMS Implementation & Setup",
    shortDesc:
      "Configure and deploy CMS platforms with custom content structures, workflows, user roles, and permissions.",
    focus: "setup",
    heroTitle: "CMS Implementation &\nSetup in Qatar",
    heroLead:
      "Configure and deploy CMS platforms with custom content structures, workflows, user roles, and permissions that editors can actually use.",
    heroTitleMaxCh: "16ch",
    heading2: "CMS setup done right: models, roles, and workflows",
    techLine2: "CMS Setup Expertise",
  },
  {
    slug: "cms-migration-services",
    title: "CMS Migration Services",
    shortDesc:
      "Migrate websites and content from legacy or existing CMS platforms while preserving SEO, URLs, and content integrity.",
    focus: "migrate",
    heroTitle: "CMS Migration\nServices in Qatar",
    heroLead:
      "Migrate websites and content from legacy or existing CMS platforms while preserving SEO, URLs, and content integrity.",
    heroTitleMaxCh: "12ch",
    heading2: "Move CMS platforms without losing rankings or content",
    techLine2: "CMS Migration Expertise",
  },
  {
    slug: "enterprise-cms-development",
    title: "Enterprise CMS Development",
    shortDesc:
      "Implement scalable enterprise content management solutions for organizations with complex content publishing requirements.",
    focus: "enterprise",
    heroTitle: "Enterprise CMS\nDevelopment in Qatar",
    heroLead:
      "Implement scalable enterprise content management solutions for organizations with complex content publishing requirements.",
    heroTitleMaxCh: "14ch",
    heading2: "Enterprise CMS for complex teams and publishing rules",
    techLine2: "Enterprise CMS Expertise",
  },
  {
    slug: "cms-theme-template-development",
    title: "CMS Theme & Template Development",
    shortDesc:
      "Design and develop custom themes, templates, layouts, and reusable components that align with your brand.",
    focus: "theme",
    heroTitle: "CMS Theme & Template\nDevelopment in Qatar",
    heroLead:
      "Design and develop custom themes, templates, layouts, and reusable components that align with your brand and keep editors productive.",
    heroTitleMaxCh: "18ch",
    heading2: "Brand-true themes editors can publish into confidently",
    techLine2: "Theme & Template Expertise",
  },
  {
    slug: "cms-plugin-module-development",
    title: "CMS Plugin & Module Development",
    shortDesc:
      "Build custom plugins, modules, and extensions to add new functionality and integrate with business systems.",
    focus: "plugin",
    heroTitle: "CMS Plugin & Module\nDevelopment in Qatar",
    heroLead:
      "Build custom plugins, modules, and extensions to add new functionality and integrate with business systems without brittle hacks.",
    heroTitleMaxCh: "16ch",
    heading2: "Extensions that add features without breaking the CMS",
    techLine2: "Plugin & Module Expertise",
  },
  {
    slug: "headless-api-frontend-integration",
    title: "Headless API & Frontend Integration",
    shortDesc:
      "Connect headless CMS platforms with modern frontend frameworks, mobile applications, and third-party services.",
    focus: "api",
    heroTitle: "Headless API &\nFrontend Integration in Qatar",
    heroLead:
      "Connect headless CMS platforms with modern frontend frameworks, mobile applications, and third-party services for multi-channel delivery.",
    heroTitleMaxCh: "18ch",
    heading2: "Wire CMS APIs to fast frontends and product channels",
    techLine2: "API & Frontend Expertise",
  },
  {
    slug: "content-workflow-publishing-automation",
    title: "Content Workflow & Publishing Automation",
    shortDesc:
      "Streamline editorial workflows with approvals, scheduling, version control, multilingual publishing, and automation.",
    focus: "workflow",
    heroTitle: "Content Workflow &\nPublishing Automation in Qatar",
    heroLead:
      "Streamline editorial workflows with approvals, scheduling, version control, multilingual publishing, and automation that reduce bottlenecks.",
    heroTitleMaxCh: "18ch",
    heading2: "Editorial workflows that move content forward cleanly",
    techLine2: "Workflow Automation Expertise",
  },
  {
    slug: "multilingual-cms-development",
    title: "Multilingual CMS Development",
    shortDesc:
      "Develop multilingual content management systems with localization, regional content management, and translation workflows.",
    focus: "i18n",
    heroTitle: "Multilingual CMS\nDevelopment in Qatar",
    heroLead:
      "Develop multilingual content management systems with localization, regional content management, and translation workflows for Gulf and global audiences.",
    heroTitleMaxCh: "14ch",
    heading2: "Multilingual CMS that keeps regional content under control",
    techLine2: "Multilingual CMS Expertise",
  },
  {
    slug: "cms-performance-security-optimization",
    title: "CMS Performance & Security Optimization",
    shortDesc:
      "Improve CMS speed, Core Web Vitals, scalability, caching, and implement security best practices.",
    focus: "perf",
    heroTitle: "CMS Performance &\nSecurity Optimization in Qatar",
    heroLead:
      "Improve CMS speed, Core Web Vitals, scalability, caching, and implement security best practices so publishing stays fast and safe.",
    heroTitleMaxCh: "18ch",
    heading2: "Faster, harder CMS platforms your team can trust",
    techLine2: "Performance & Security Expertise",
  },
  {
    slug: "cms-maintenance-support",
    title: "CMS Maintenance & Support",
    shortDesc:
      "Provide ongoing updates, bug fixes, security patches, content assistance, backups, and long-term technical support.",
    focus: "support",
    heroTitle: "CMS Maintenance &\nSupport in Qatar",
    heroLead:
      "Ongoing updates, bug fixes, security patches, content assistance, backups, and long-term technical support after go-live.",
    heroTitleMaxCh: "14ch",
    heading2: "Keep your CMS healthy, secure, and editor-friendly",
    techLine2: "CMS Maintenance Expertise",
  },
];

const featureSets = {
  custom: [
    { title: "Editorial-first models", desc: "Content types, taxonomies, and fields mirror how your team actually writes and publishes." },
    { title: "Workflow fit", desc: "Roles, drafts, and approvals are designed around real review chains." },
    { title: "Integration-ready CMS", desc: "APIs and connectors keep content talking to marketing, product, and ops tools." },
    { title: "Sustainable architecture", desc: "Custom does not mean fragile: maintainable structure for the long run." },
  ],
  headless: [
    { title: "API-first content", desc: "One CMS powers websites, apps, and campaigns from a shared content graph." },
    { title: "Channel flexibility", desc: "Frontends change without forcing editors to relearn a new CMS every time." },
    { title: "Modern delivery stacks", desc: "Contentful, Strapi, Sanity, Storyblok, and similar platforms chosen for fit." },
    { title: "Preview and publish clarity", desc: "Editors still see what ships, even when the frontend is decoupled." },
  ],
  setup: [
    { title: "Content structure done right", desc: "Models, relationships, and fields configured before chaos sets in." },
    { title: "Roles and permissions", desc: "Authors, editors, and admins get the access they need and nothing more." },
    { title: "Workflow configuration", desc: "Drafts, reviews, and publish steps match your editorial process." },
    { title: "Clean deployment", desc: "Environments, backups, and handover so the team can start publishing." },
  ],
  migrate: [
    { title: "Preserve SEO equity", desc: "URL maps and redirects protect rankings during CMS changes." },
    { title: "Content integrity", desc: "Pages, media, and metadata move with careful mapping and validation." },
    { title: "Phased cutovers", desc: "Risk is reduced with parallel checks and clear go-live plans." },
    { title: "Editor continuity", desc: "Training and familiar workflows reduce post-migration friction." },
  ],
  enterprise: [
    { title: "Complex publishing needs", desc: "Multi-site, multi-brand, and multi-team patterns handled with governance." },
    { title: "Scalable platforms", desc: "Architectures suited to high volume content and concurrent editors." },
    { title: "Security and access", desc: "Enterprise identity, roles, and environment practices planned early." },
    { title: "Integration breadth", desc: "Connect DAM, CRM, analytics, and marketing automation when required." },
  ],
  theme: [
    { title: "Brand-aligned design systems", desc: "Themes and templates that look like your brand, not a stock demo." },
    { title: "Reusable components", desc: "Blocks and layouts editors can assemble without developer tickets." },
    { title: "Responsive publishing", desc: "Layouts stay sharp on mobile, tablet, and desktop." },
    { title: "Maintainable frontend craft", desc: "Clean theme code that stays upgrade-friendly." },
  ],
  plugin: [
    { title: "Purpose-built extensions", desc: "Plugins and modules solve real gaps instead of stacking unused bloat." },
    { title: "Business system hooks", desc: "Connect CMS events to CRM, ERP, DAM, and marketing tools." },
    { title: "Safe upgrade paths", desc: "Custom code structured to survive platform updates." },
    { title: "Editor UX care", desc: "Admin screens stay usable when new capabilities are added." },
  ],
  api: [
    { title: "Stable content APIs", desc: "Contracts and caching patterns that keep frontends fast and predictable." },
    { title: "Modern frontend wiring", desc: "Next.js, React, and app clients consume CMS content cleanly." },
    { title: "Third-party services", desc: "Search, personalization, and marketing tools connect without fragile glue." },
    { title: "Preview and sync", desc: "Draft preview and publish webhooks keep teams aligned." },
  ],
  workflow: [
    { title: "Approvals that stick", desc: "Review chains replace scattered email threads and side documents." },
    { title: "Scheduling and versions", desc: "Publish timing and history stay visible and recoverable." },
    { title: "Multilingual publishing", desc: "Locale workflows reduce translation bottlenecks." },
    { title: "Automation where it helps", desc: "Repetitive steps are automated without removing editorial control." },
  ],
  i18n: [
    { title: "Locale-aware models", desc: "Content structures support languages and regional variants cleanly." },
    { title: "Translation workflows", desc: "Handoffs between authors and translators stay organized." },
    { title: "Regional publishing", desc: "Markets can ship content without breaking the global site." },
    { title: "URL and SEO care", desc: "Localized paths and metadata are planned for search visibility." },
  ],
  perf: [
    { title: "Core Web Vitals focus", desc: "Templates, media, and caching tuned for real user speed." },
    { title: "Scalable delivery", desc: "CDN, cache, and query patterns that survive traffic spikes." },
    { title: "Security hardening", desc: "Updates, access, and environment practices reduce CMS risk." },
    { title: "Editor performance too", desc: "Admin and preview stay usable as content volume grows." },
  ],
  support: [
    { title: "Update and patch cadence", desc: "Platform and plugin updates on a predictable rhythm." },
    { title: "Backups and recovery", desc: "Backup discipline and restore confidence when incidents happen." },
    { title: "Content assistance", desc: "Help for editors when structure, blocks, or publishing gets stuck." },
    { title: "Long-term technical care", desc: "Bug fixes and improvements so the CMS stays reliable year after year." },
  ],
};

const processSets = {
  custom: [
    { number: "1", title: "Editorial discovery", body: "Workflows, content types, and channel needs shape the CMS blueprint." },
    { number: "2", title: "Architecture and UX", body: "Models, roles, and publishing surfaces are designed before build." },
    { number: "3", title: "Build and configure", body: "Platform, themes, and integrations ship with editor-facing QA." },
    { number: "4", title: "Launch and train", body: "Go-live, training, and optional ongoing CMS care." },
  ],
  headless: [
    { number: "1", title: "Channel and content mapping", body: "Websites, apps, and other surfaces define the content model." },
    { number: "2", title: "Headless platform design", body: "CMS choice, APIs, and preview patterns are planned carefully." },
    { number: "3", title: "Build CMS and frontends", body: "Content APIs and consuming apps ship in tested increments." },
    { number: "4", title: "Publish and scale", body: "Editors onboard and channels expand from one content source." },
  ],
  setup: [
    { number: "1", title: "Requirements workshop", body: "Structures, roles, and workflows are documented with stakeholders." },
    { number: "2", title: "Environment and model setup", body: "Platforms are configured with clean content architecture." },
    { number: "3", title: "Permissions and workflows", body: "Access and publishing steps are tested with real editor scenarios." },
    { number: "4", title: "Handover", body: "Documentation and training so your team can operate day one." },
  ],
  migrate: [
    { number: "1", title: "Source CMS audit", body: "Content, URLs, media, and SEO equity are inventoried." },
    { number: "2", title: "Migration roadmap", body: "Mapping, redirects, and cutover strategy reduce risk." },
    { number: "3", title: "Migrate and validate", body: "Content moves with parallel checks on structure and links." },
    { number: "4", title: "Cut over and protect SEO", body: "Redirects, monitoring, and editor support stabilize the new CMS." },
  ],
  enterprise: [
    { number: "1", title: "Governance workshop", body: "Sites, brands, roles, and compliance needs are clarified." },
    { number: "2", title: "Enterprise architecture", body: "Platform, environments, and integration boundaries are designed." },
    { number: "3", title: "Implement and integrate", body: "Publishing features and system connections ship with QA." },
    { number: "4", title: "Roll out and harden", body: "Training, monitoring, and access reviews support large teams." },
  ],
  theme: [
    { number: "1", title: "Brand and content audit", body: "Design system needs and content patterns define template scope." },
    { number: "2", title: "Component and layout design", body: "Reusable blocks are designed for editors and brand consistency." },
    { number: "3", title: "Theme development", body: "Templates ship with responsive QA and CMS binding." },
    { number: "4", title: "Editor enablement", body: "Your team learns how to assemble pages without breaking the brand." },
  ],
  plugin: [
    { number: "1", title: "Capability gap analysis", body: "We identify what must be custom versus what should stay core." },
    { number: "2", title: "Extension design", body: "APIs, admin UX, and upgrade safety are planned before coding." },
    { number: "3", title: "Build and test", body: "Plugins or modules ship with regression checks against the CMS." },
    { number: "4", title: "Deploy and document", body: "Handover includes how to configure and maintain the extension." },
  ],
  api: [
    { number: "1", title: "Integration map", body: "Frontends, apps, and services that consume CMS content are listed." },
    { number: "2", title: "API and caching design", body: "Contracts, auth, and performance patterns are defined." },
    { number: "3", title: "Wire frontends and services", body: "Clients and webhooks are implemented with careful QA." },
    { number: "4", title: "Observe and improve", body: "Monitoring keeps delivery healthy as channels grow." },
  ],
  workflow: [
    { number: "1", title: "Map current publishing", body: "Approvals, delays, and handoffs are documented across teams." },
    { number: "2", title: "Design the new workflow", body: "Steps, roles, scheduling, and exceptions are defined clearly." },
    { number: "3", title: "Configure and automate", body: "CMS workflows and helpful automation ship with editor testing." },
    { number: "4", title: "Adopt and tune", body: "Teams start using the process and rules are refined after real use." },
  ],
  i18n: [
    { number: "1", title: "Language and market planning", body: "Locales, regions, and ownership models are agreed." },
    { number: "2", title: "Localization architecture", body: "Models, URLs, and translation workflows are designed." },
    { number: "3", title: "Build multilingual publishing", body: "CMS locale features and editor tools ship with QA." },
    { number: "4", title: "Launch by market", body: "Regions go live with training and SEO checks." },
  ],
  perf: [
    { number: "1", title: "Performance and security baseline", body: "Core Web Vitals, cache, and risk areas are measured." },
    { number: "2", title: "Prioritize high-impact fixes", body: "Media, queries, caching, and hardening are planned first." },
    { number: "3", title: "Implement and retest", body: "Changes ship with before/after measurement on key templates." },
    { number: "4", title: "Guardrails", body: "Monitoring and release habits keep speed and security from regressing." },
  ],
  support: [
    { number: "1", title: "CMS health baseline", body: "Updates, backups, plugins, and backlog priorities are reviewed." },
    { number: "2", title: "Support operating rhythm", body: "SLAs, patch cycles, and escalation paths are agreed." },
    { number: "3", title: "Maintain and assist", body: "Patches, fixes, and editor help ship on a steady cadence." },
    { number: "4", title: "Report and plan", body: "Regular reviews keep content and tech priorities aligned." },
  ],
};

function faqsFor(d) {
  return [
    {
      question: `What is included in ${d.title} from Saqrih?`,
      answer: `${d.title} typically includes discovery, content model and workflow design, implementation, integrations where needed, QA, and launch or handover support. Scope is tailored to your publishing goals in Qatar and documented before work starts.`,
    },
    {
      question: `How long does ${d.title.toLowerCase()} take?`,
      answer:
        "Timelines depend on content volume, platforms, workflows, and frontend needs. Focused setups can ship in weeks, while enterprise, multilingual, or large migrations take longer. You receive a milestone plan in the proposal.",
    },
    {
      question: "Which CMS platforms do you work with?",
      answer:
        "We commonly work with WordPress, Drupal, Craft CMS, Contentful, Strapi, Sanity, Storyblok, and enterprise CMS platforms, choosing for editorial fit and technical needs.",
    },
    {
      question: "Can you support both traditional and headless CMS?",
      answer:
        "Yes. We deliver classic CMS builds as well as headless and hybrid architectures with modern frontend frameworks when multi-channel delivery is the goal.",
    },
    {
      question: "Will editors be trained on the new system?",
      answer:
        "Yes. Handover includes practical training so authors and editors can publish confidently without depending on developers for every change.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. We offer CMS maintenance and support for updates, security patches, backups, bug fixes, content assistance, and long-term technical care.",
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
    intro: `Saqrih delivers ${d.title.toLowerCase()} as part of our CMS & Headless Development practice in Qatar. ${d.shortDesc} We combine editorial clarity with modern content engineering.`,
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
    body: `Traditional CMS, headless platforms, frontend, APIs, and delivery tooling we use for ${d.title.toLowerCase()}.`,
  },
}));

const target = path.join("lib", "services", "cmsHeadlessDevelopmentSubPages.js");
const out = `/**
 * Retained-style sub-page content for /services/cms-headless-development/[slug].
 * Unique SEO copy per sub-service for Saqrih (Qatar).
 */

export const CMS_DEV_PARENT = {
  path: "/services/cms-headless-development",
  title: "CMS & Headless Development",
};

export const CMS_DEV_SUB_PAGES = ${JSON.stringify(pages, null, 2)};

export function getCmsDevSubPage(slug) {
  return CMS_DEV_SUB_PAGES.find((s) => s.slug === slug) ?? null;
}

export function getAllCmsDevSubPageSlugs() {
  return CMS_DEV_SUB_PAGES.map((s) => s.slug);
}

export function getCmsDevSiblingCards(currentSlug) {
  const others = CMS_DEV_SUB_PAGES.filter((s) => s.slug !== currentSlug);
  return others.map((s, i) => ({
    id: s.slug,
    title: s.title,
    desc: s.shortDesc,
    href: \`\${CMS_DEV_PARENT.path}/\${s.slug}\`,
    ...(i === 0
      ? { isHero: true, eyebrow: "More CMS & headless development services" }
      : {}),
  }));
}
`;

fs.writeFileSync(target, out);
console.log("wrote", pages.length, "to", target);
