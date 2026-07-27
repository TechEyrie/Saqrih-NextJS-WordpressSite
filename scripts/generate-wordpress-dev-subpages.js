/**
 * Generates retained-style sub-pages for /services/wordpress-development/[slug]
 * from the WordPress service set that lives under /wordpress/*.
 */
const fs = require("fs");
const path = require("path");

const PARENT = {
  path: "/services/wordpress-development",
  title: "WordPress Development",
};

/** Mirrors /wordpress/* service pages (skips industries listing, typo maintainance, premium-support1 duplicate). */
const defs = [
  {
    slug: "design",
    title: "WordPress Website Design",
    shortDesc:
      "Beautiful, conversion-focused WordPress design from a team with deep brand and UX experience.",
    focus: "design",
    heroTitle: "WordPress Website\nDesign in Qatar",
    heroLead:
      "Beautiful, conversion-focused WordPress design shaped around your brand, audience, and business goals in Doha and beyond.",
    heroTitleMaxCh: "14ch",
    heading2: "WordPress design that looks premium and converts with intent",
    techLine2: "WordPress Design Expertise",
  },
  {
    slug: "development",
    title: "Custom WordPress Development",
    shortDesc:
      "Full WordPress development with custom themes, plugins, Gutenberg blocks, and hard technical depth.",
    focus: "development",
    heroTitle: "Custom WordPress\nDevelopment in Qatar",
    heroLead:
      "Full WordPress development with custom themes, plugins, Gutenberg blocks, and senior engineering for ambitious brands.",
    heroTitleMaxCh: "14ch",
    heading2: "WordPress engineering with real technical depth",
    techLine2: "WordPress Development Expertise",
  },
  {
    slug: "woocommerce",
    title: "WooCommerce Development",
    shortDesc:
      "Online stores on WooCommerce with clean checkout, catalog control, and payment integrations.",
    focus: "woocommerce",
    heroTitle: "WooCommerce\nDevelopment in Qatar",
    heroLead:
      "Online stores on WooCommerce engineered for catalog clarity, checkout conversion, and reliable payment flows.",
    heroTitleMaxCh: "12ch",
    heading2: "WooCommerce stores built to sell and scale",
    techLine2: "WooCommerce Expertise",
  },
  {
    slug: "hosting",
    title: "WordPress Managed Hosting",
    shortDesc:
      "High-level security, ultra-fast speeds, and fully managed updates for production WordPress sites.",
    focus: "hosting",
    heroTitle: "WordPress Managed\nHosting in Qatar",
    heroLead:
      "High-level security, ultra-fast speeds, and fully managed updates so your WordPress site stays production-ready.",
    heroTitleMaxCh: "14ch",
    heading2: "Hosting tuned for WordPress speed and uptime",
    techLine2: "Managed Hosting Expertise",
  },
  {
    slug: "maintenance",
    title: "WordPress Maintenance",
    shortDesc:
      "Dedicated, proactive maintenance so your site stays secured, updated, and fully functional.",
    focus: "maintenance",
    heroTitle: "WordPress\nMaintenance in Qatar",
    heroLead:
      "Dedicated, proactive WordPress maintenance so your site stays secured, updated, and fully functional.",
    heroTitleMaxCh: "12ch",
    heading2: "Proactive care that keeps WordPress healthy",
    techLine2: "WordPress Maintenance Expertise",
  },
  {
    slug: "support",
    title: "WordPress Support",
    shortDesc:
      "Ongoing WordPress support with clear communication and a team that knows your stack.",
    focus: "support",
    heroTitle: "WordPress\nSupport in Qatar",
    heroLead:
      "Ongoing WordPress support with clear communication and specialists who already understand your stack.",
    heroTitleMaxCh: "10ch",
    heading2: "Responsive WordPress support you can rely on",
    techLine2: "WordPress Support Expertise",
  },
  {
    slug: "premium-support",
    title: "Premium WordPress Support",
    shortDesc:
      "A dedicated point of contact, priority response, and retainer-grade WordPress care.",
    focus: "premium",
    heroTitle: "Premium WordPress\nSupport in Qatar",
    heroLead:
      "A dedicated point of contact, priority response, and retainer-grade WordPress care for teams that need more.",
    heroTitleMaxCh: "14ch",
    heading2: "Priority WordPress care with a named partner",
    techLine2: "Premium Support Expertise",
  },
  {
    slug: "retained-services",
    title: "WordPress Retained Services",
    shortDesc:
      "Ongoing WordPress retainers for development, improvements, and continuous digital care.",
    focus: "retained",
    heroTitle: "WordPress Retained\nServices in Qatar",
    heroLead:
      "Ongoing WordPress retainers for development, improvements, and continuous digital care on a predictable rhythm.",
    heroTitleMaxCh: "14ch",
    heading2: "A WordPress team on retainer, not just tickets",
    techLine2: "Retained Services Expertise",
  },
  {
    slug: "search-engine-optimization",
    title: "WordPress SEO",
    shortDesc:
      "Technical and on-page SEO programs that set your WordPress site up for search success.",
    focus: "seo",
    heroTitle: "WordPress SEO\nServices in Qatar",
    heroLead:
      "Technical and on-page SEO programs that set your WordPress site up for search success in Qatar and beyond.",
    heroTitleMaxCh: "12ch",
    heading2: "SEO built into WordPress architecture and content",
    techLine2: "WordPress SEO Expertise",
  },
  {
    slug: "migration",
    title: "WordPress Migration",
    shortDesc:
      "Safe migrations to or from WordPress with SEO, URLs, and content preserved.",
    focus: "migration",
    heroTitle: "WordPress\nMigration in Qatar",
    heroLead:
      "Safe migrations to or from WordPress with SEO equity, URLs, and content preserved carefully.",
    heroTitleMaxCh: "12ch",
    heading2: "Migrations that protect rankings and structure",
    techLine2: "WordPress Migration Expertise",
  },
  {
    slug: "security",
    title: "WordPress Security",
    shortDesc:
      "Hardening, malware response, WAF patterns, and monitoring built for WordPress threats.",
    focus: "security",
    heroTitle: "WordPress\nSecurity in Qatar",
    heroLead:
      "Hardening, malware response, WAF patterns, and monitoring built for real WordPress threat models.",
    heroTitleMaxCh: "10ch",
    heading2: "Layered WordPress security that holds under pressure",
    techLine2: "WordPress Security Expertise",
  },
  {
    slug: "speed-optimization",
    title: "WordPress Speed Optimization",
    shortDesc:
      "Caching, Core Web Vitals, asset pipelines, and hosting tuning for real-world speed.",
    focus: "speed",
    heroTitle: "WordPress Speed\nOptimization in Qatar",
    heroLead:
      "Caching, Core Web Vitals, asset pipelines, and hosting tuning so WordPress feels fast in the real world.",
    heroTitleMaxCh: "14ch",
    heading2: "WordPress performance treated as a product feature",
    techLine2: "Speed Optimization Expertise",
  },
  {
    slug: "backups",
    title: "WordPress Backups",
    shortDesc:
      "Reliable backup and restore systems so your WordPress site can recover quickly when needed.",
    focus: "backups",
    heroTitle: "WordPress\nBackups in Qatar",
    heroLead:
      "Reliable backup and restore systems so your WordPress site can recover quickly when something goes wrong.",
    heroTitleMaxCh: "10ch",
    heading2: "Restore-ready WordPress backups you can trust",
    techLine2: "WordPress Backup Expertise",
  },
  {
    slug: "elementor",
    title: "WordPress Elementor Development",
    shortDesc:
      "Elementor builds with design control for marketers and clean structure for long-term maintainability.",
    focus: "elementor",
    heroTitle: "WordPress Elementor\nDevelopment in Qatar",
    heroLead:
      "Elementor builds with design control for marketers and clean structure so the site stays maintainable.",
    heroTitleMaxCh: "16ch",
    heading2: "Elementor without the usual technical debt",
    techLine2: "Elementor Expertise",
  },
  {
    slug: "divi",
    title: "WordPress Divi Theme Experts",
    shortDesc:
      "Divi theme work that balances visual flexibility with performance and maintainable patterns.",
    focus: "divi",
    heroTitle: "WordPress Divi\nTheme Experts in Qatar",
    heroLead:
      "Divi theme work that balances visual flexibility with performance and maintainable WordPress patterns.",
    heroTitleMaxCh: "12ch",
    heading2: "Divi builds that stay fast and editable",
    techLine2: "Divi Theme Expertise",
  },
  {
    slug: "theme",
    title: "WordPress Theme Experts",
    shortDesc:
      "Custom and premium theme expertise for brand-aligned WordPress sites that editors can run.",
    focus: "theme",
    heroTitle: "WordPress Theme\nExperts in Qatar",
    heroLead:
      "Custom and premium theme expertise for brand-aligned WordPress sites that editors can actually run.",
    heroTitleMaxCh: "12ch",
    heading2: "Themes engineered for brand, speed, and editors",
    techLine2: "WordPress Theme Expertise",
  },
  {
    slug: "convert",
    title: "WordPress Conversion",
    shortDesc:
      "Convert existing sites or designs into clean, performant WordPress implementations.",
    focus: "convert",
    heroTitle: "WordPress\nConversion in Qatar",
    heroLead:
      "Convert existing sites or designs into clean, performant WordPress implementations without losing content or SEO.",
    heroTitleMaxCh: "12ch",
    heading2: "From static or legacy sites to production WordPress",
    techLine2: "WordPress Conversion Expertise",
  },
  {
    slug: "ada-compliance",
    title: "WordPress ADA Compliance",
    shortDesc:
      "Accessibility improvements so your WordPress site moves toward WCAG and ADA-minded standards.",
    focus: "ada",
    heroTitle: "WordPress ADA\nCompliance in Qatar",
    heroLead:
      "Accessibility improvements so your WordPress site moves toward WCAG and ADA-minded standards with practical fixes.",
    heroTitleMaxCh: "12ch",
    heading2: "Inclusive WordPress experiences by design",
    techLine2: "ADA Compliance Expertise",
  },
  {
    slug: "gdpr-compliance",
    title: "WordPress GDPR Compliance",
    shortDesc:
      "Privacy-minded WordPress setups covering consent, cookies, and data-handling practices.",
    focus: "gdpr",
    heroTitle: "WordPress GDPR\nCompliance in Qatar",
    heroLead:
      "Privacy-minded WordPress setups covering consent, cookies, and data-handling practices for GDPR-aware sites.",
    heroTitleMaxCh: "12ch",
    heading2: "WordPress privacy patterns teams can operate",
    techLine2: "GDPR Compliance Expertise",
  },
  {
    slug: "pci-compliance",
    title: "WordPress PCI Compliance",
    shortDesc:
      "PCI-minded WordPress and WooCommerce patterns that strengthen payment and cardholder data hygiene.",
    focus: "pci",
    heroTitle: "WordPress PCI\nCompliance in Qatar",
    heroLead:
      "PCI-minded WordPress and WooCommerce patterns that strengthen payment and cardholder data hygiene.",
    heroTitleMaxCh: "12ch",
    heading2: "Safer checkout foundations on WordPress",
    techLine2: "PCI Compliance Expertise",
  },
  {
    slug: "compliance",
    title: "WordPress Compliance",
    shortDesc:
      "Broader WordPress compliance support across accessibility, privacy, and security-minded requirements.",
    focus: "compliance",
    heroTitle: "WordPress\nCompliance in Qatar",
    heroLead:
      "Broader WordPress compliance support across accessibility, privacy, and security-minded requirements.",
    heroTitleMaxCh: "12ch",
    heading2: "Compliance support tailored to WordPress realities",
    techLine2: "WordPress Compliance Expertise",
  },
  {
    slug: "marketing-pro",
    title: "WordPress Marketing Pro",
    shortDesc:
      "WordPress marketing enhancements that help campaigns, landing pages, and conversion programs perform.",
    focus: "marketing",
    heroTitle: "WordPress Marketing\nPro in Qatar",
    heroLead:
      "WordPress marketing enhancements that help campaigns, landing pages, and conversion programs perform better.",
    heroTitleMaxCh: "14ch",
    heading2: "Marketing-ready WordPress without fragile hacks",
    techLine2: "Marketing Pro Expertise",
  },
  {
    slug: "white-label-wordpress",
    title: "White Label WordPress",
    shortDesc:
      "White-label WordPress delivery for agencies that need a reliable senior build and care partner.",
    focus: "whitelabel",
    heroTitle: "White Label\nWordPress in Qatar",
    heroLead:
      "White-label WordPress delivery for agencies that need a reliable senior build, support, and care partner.",
    heroTitleMaxCh: "12ch",
    heading2: "Agency-ready WordPress delivery behind your brand",
    techLine2: "White Label Expertise",
  },
];

const featureSets = {
  design: [
    { title: "Brand-first composition", desc: "Layouts and visual systems that put your brand ahead of generic templates." },
    { title: "Conversion-minded UX", desc: "Clear hierarchy, CTAs, and journeys shaped around real business goals." },
    { title: "Editor-friendly structure", desc: "Design systems editors can update without breaking the look." },
    { title: "Responsive polish", desc: "Desktop-to-mobile craft that stays sharp across devices." },
  ],
  development: [
    { title: "Custom themes and plugins", desc: "Code shaped around your content model, not rigid page builders alone." },
    { title: "Gutenberg and block craft", desc: "Reusable blocks and patterns that keep publishing fast and consistent." },
    { title: "Performance-aware builds", desc: "Queries, assets, and caching considered before launch, not after." },
    { title: "Maintainable architecture", desc: "Clean structure so updates and future features stay cheaper." },
  ],
  woocommerce: [
    { title: "Catalog and checkout UX", desc: "Product discovery and purchase flows tuned for conversion." },
    { title: "Payments wired carefully", desc: "Gateways and wallets integrated with clear error handling." },
    { title: "Order operations", desc: "Status, inventory hooks, and admin clarity that reduce support load." },
    { title: "Growth-ready commerce", desc: "Patterns that scale when catalogs and traffic grow." },
  ],
  hosting: [
    { title: "Speed-first hosting", desc: "Environments and edge delivery chosen for WordPress performance." },
    { title: "Security defaults", desc: "WAF, SSL, and least-privilege patterns baked into the stack." },
    { title: "Managed updates", desc: "Core, plugin, and environment updates handled with staging discipline." },
    { title: "Uptime focus", desc: "Monitoring and recovery habits that protect production availability." },
  ],
  maintenance: [
    { title: "Proactive update cadence", desc: "Core, themes, and plugins stay current on a planned rhythm." },
    { title: "Health monitoring", desc: "Uptime, errors, and regressions are watched before users feel them." },
    { title: "Security hygiene", desc: "Patches, scans, and hardening keep the site safer over time." },
    { title: "Content and fix support", desc: "Small changes and bug fixes handled without chaos." },
  ],
  support: [
    { title: "Clear communication", desc: "Requests are acknowledged and explained without jargon overload." },
    { title: "Stack familiarity", desc: "Support from people who understand WordPress deeply." },
    { title: "Fast triage", desc: "Issues are prioritized so critical breaks get attention first." },
    { title: "Knowledge continuity", desc: "Your site history stays with a team that remembers context." },
  ],
  premium: [
    { title: "Dedicated contact", desc: "A named point of contact who knows your WordPress environment." },
    { title: "Priority response", desc: "Urgent issues jump the queue when uptime or launches are on the line." },
    { title: "Retainer capacity", desc: "Planned hours for improvements, not only break-fix work." },
    { title: "Strategic check-ins", desc: "Regular reviews keep roadmap and reliability aligned." },
  ],
  retained: [
    { title: "Predictable capacity", desc: "Monthly hours for development and improvements you can plan around." },
    { title: "Continuous shipping", desc: "Features and fixes move on a steady cadence instead of project starts and stops." },
    { title: "Shared roadmap", desc: "Priorities stay visible between your team and ours." },
    { title: "Long-term ownership", desc: "The same specialists keep context as the product evolves." },
  ],
  seo: [
    { title: "Technical SEO foundations", desc: "Crawlability, indexing, schema, and site structure done properly." },
    { title: "On-page clarity", desc: "Titles, content hierarchy, and internal links that help search and users." },
    { title: "Core Web Vitals", desc: "Speed work treated as an SEO and UX requirement." },
    { title: "Measurement habits", desc: "Tracking and reporting that show what moved." },
  ],
  migration: [
    { title: "SEO preservation", desc: "Redirects, URLs, and metadata planned so equity is not thrown away." },
    { title: "Content integrity", desc: "Pages, media, and structure move with careful QA." },
    { title: "Staging cutovers", desc: "Rehearsed launches reduce downtime and surprise breakage." },
    { title: "Post-migration support", desc: "Close watch after go-live to catch edge cases fast." },
  ],
  security: [
    { title: "Hardening first", desc: "Least privilege, locked file permissions, and safe defaults." },
    { title: "WAF and scanning", desc: "Edge protection and malware checks suited to WordPress." },
    { title: "Incident readiness", desc: "Cleanup and restore paths when something goes wrong." },
    { title: "Ongoing vigilance", desc: "Monitoring that catches threats before they become outages." },
  ],
  speed: [
    { title: "Caching strategy", desc: "Page, object, and edge caching chosen for your WordPress setup." },
    { title: "Asset pipelines", desc: "Images, CSS, and JS trimmed so pages feel instant." },
    { title: "Core Web Vitals", desc: "Lab and field metrics used to guide real improvements." },
    { title: "Hosting alignment", desc: "Server and CDN choices that support the performance plan." },
  ],
  backups: [
    { title: "Automated schedules", desc: "Backups run on a cadence matched to how often content changes." },
    { title: "Offsite copies", desc: "Restore points live outside the production box when possible." },
    { title: "Tested restores", desc: "Recovery is verified so backups are not just theory." },
    { title: "Clear retention", desc: "How long copies are kept is documented and practical." },
  ],
  elementor: [
    { title: "Design control for marketers", desc: "Teams can edit layouts without waiting on every tiny change." },
    { title: "Performance guardrails", desc: "We avoid the heavy patterns that make Elementor sites feel slow." },
    { title: "Reusable sections", desc: "Templates and kits keep campaigns consistent." },
    { title: "Clean handoff", desc: "Editors get guidance so updates stay safe." },
  ],
  divi: [
    { title: "Flexible visual building", desc: "Divi layouts that marketing can iterate without starting from scratch." },
    { title: "Speed-aware Divi craft", desc: "Modules and assets chosen with performance in mind." },
    { title: "Brand consistency", desc: "Global styles keep the look coherent across pages." },
    { title: "Sustainable structure", desc: "Builds that stay editable months later, not only at launch." },
  ],
  theme: [
    { title: "Custom theme systems", desc: "Themes that match brand and content models precisely." },
    { title: "Premium theme mastery", desc: "When a premium base is right, we configure it without bloat." },
    { title: "Editor experience", desc: "Patterns and fields that make publishing feel natural." },
    { title: "Upgrade-safe habits", desc: "Child themes and custom code that survive updates." },
  ],
  convert: [
    { title: "Faithful redesign translation", desc: "Designs and existing sites become WordPress without losing intent." },
    { title: "Content migration care", desc: "Pages and media move with structure intact." },
    { title: "SEO continuity", desc: "URLs and redirects planned as part of conversion." },
    { title: "Clean WordPress foundations", desc: "Resulting builds are maintainable, not a fragile copy." },
  ],
  ada: [
    { title: "Practical accessibility fixes", desc: "Contrast, keyboard, focus, and semantic issues addressed systematically." },
    { title: "WCAG-minded patterns", desc: "Components built with inclusive interaction in mind." },
    { title: "Content guidance", desc: "Editors learn habits that keep accessibility from regressing." },
    { title: "Audit-driven roadmap", desc: "Priorities follow impact, not random checklist noise." },
  ],
  gdpr: [
    { title: "Consent and cookies", desc: "Banner and preference patterns that match how the site actually tracks." },
    { title: "Data handling clarity", desc: "Forms and plugins reviewed for privacy-sensitive flows." },
    { title: "Policy-friendly setup", desc: "Technical pieces support the privacy story your legal team needs." },
    { title: "Ongoing hygiene", desc: "New tools are checked so privacy posture does not silently drift." },
  ],
  pci: [
    { title: "Checkout hygiene", desc: "Payment flows designed to keep card data out of places it should not be." },
    { title: "WooCommerce hardening", desc: "Store plugins and hosting choices aligned with safer payments." },
    { title: "Access control", desc: "Admin and plugin access tightened around commerce operations." },
    { title: "Monitoring habits", desc: "Changes that affect payments are watched carefully." },
  ],
  compliance: [
    { title: "Requirement mapping", desc: "We translate compliance needs into concrete WordPress work." },
    { title: "Cross-cutting fixes", desc: "Accessibility, privacy, and security improvements coordinated together." },
    { title: "Documentation", desc: "What changed and why is clear for stakeholders." },
    { title: "Sustainable process", desc: "Compliance stays part of delivery, not a one-off scramble." },
  ],
  marketing: [
    { title: "Campaign-ready pages", desc: "Landing and offer pages that marketing can iterate quickly." },
    { title: "Tracking foundations", desc: "Analytics and events wired so campaigns can be measured." },
    { title: "Conversion UX", desc: "Forms, CTAs, and journeys tuned for lead and sales outcomes." },
    { title: "Stable marketing stack", desc: "Tools added without turning WordPress into a fragile mashup." },
  ],
  whitelabel: [
    { title: "Behind-your-brand delivery", desc: "We ship WordPress work that presents as your agency to the client." },
    { title: "Senior build quality", desc: "Themes, plugins, and care at a level agencies can trust." },
    { title: "Flexible capacity", desc: "Overflow development and maintenance when your bench is full." },
    { title: "Discreet partnership", desc: "Communication and process shaped for white-label relationships." },
  ],
};

const processSets = {
  design: [
    { number: "1", title: "Brand and goals", body: "Audience, positioning, and conversion goals shape the design brief." },
    { number: "2", title: "UX and visuals", body: "Wireframes and design systems are refined with your stakeholders." },
    { number: "3", title: "WordPress build", body: "Designs become editable WordPress templates, blocks, or builder layouts." },
    { number: "4", title: "Polish and handoff", body: "Responsive QA, content guidance, and launch support." },
  ],
  development: [
    { number: "1", title: "Discovery", body: "Content models, integrations, and success metrics define the build plan." },
    { number: "2", title: "Architecture", body: "Theme, plugin, and hosting choices are locked before heavy coding." },
    { number: "3", title: "Build and QA", body: "Iterative delivery with staging reviews and performance checks." },
    { number: "4", title: "Launch and care", body: "Go-live, monitoring, and optional retained support." },
  ],
  woocommerce: [
    { number: "1", title: "Commerce discovery", body: "Catalog, payments, shipping, and operations needs are mapped." },
    { number: "2", title: "Store architecture", body: "Product types, checkout, and integrations are designed." },
    { number: "3", title: "Build and test", body: "Storefront and order flows are QA'd across devices and gateways." },
    { number: "4", title: "Launch and optimize", body: "Go-live support plus speed and conversion improvements." },
  ],
  hosting: [
    { number: "1", title: "Environment audit", body: "Traffic, plugins, and security needs inform the hosting plan." },
    { number: "2", title: "Provision and harden", body: "Hosting, CDN, SSL, and access controls are configured." },
    { number: "3", title: "Migrate or deploy", body: "The site lands on the new stack with staging validation." },
    { number: "4", title: "Monitor and manage", body: "Updates, backups, and uptime become ongoing operations." },
  ],
  maintenance: [
    { number: "1", title: "Health baseline", body: "Plugins, themes, uptime, and risk areas are inventoried." },
    { number: "2", title: "Care plan", body: "Update cadence, backups, and SLAs are agreed." },
    { number: "3", title: "Operate", body: "Patches, fixes, and monitoring run on a steady rhythm." },
    { number: "4", title: "Report", body: "Regular summaries keep stakeholders informed." },
  ],
  support: [
    { number: "1", title: "Intake", body: "Issues and requests are logged with clear priority." },
    { number: "2", title: "Diagnose", body: "We reproduce problems and identify root causes." },
    { number: "3", title: "Resolve", body: "Fixes ship on staging first when risk is high." },
    { number: "4", title: "Confirm", body: "You get confirmation and notes so the fix stays durable." },
  ],
  premium: [
    { number: "1", title: "Onboarding", body: "We learn your stack, contacts, and priority channels." },
    { number: "2", title: "Operating rhythm", body: "SLAs, retainers, and escalation paths are set." },
    { number: "3", title: "Priority delivery", body: "Urgent work and planned improvements share clear capacity." },
    { number: "4", title: "Quarterly review", body: "Roadmap and reliability are realigned together." },
  ],
  retained: [
    { number: "1", title: "Retainer kickoff", body: "Hours, priorities, and communication cadence are defined." },
    { number: "2", title: "Backlog shaping", body: "Improvements and fixes are ordered by impact." },
    { number: "3", title: "Continuous delivery", body: "Work ships in small, reviewable increments." },
    { number: "4", title: "Monthly planning", body: "Results and next priorities stay transparent." },
  ],
  seo: [
    { number: "1", title: "Technical audit", body: "Crawl, index, speed, and structure issues are mapped." },
    { number: "2", title: "Priority plan", body: "Fixes are ordered by impact on visibility and UX." },
    { number: "3", title: "Implement", body: "On-page and technical changes ship with measurement in place." },
    { number: "4", title: "Iterate", body: "Results guide the next SEO sprint." },
  ],
  migration: [
    { number: "1", title: "Inventory", body: "Content, URLs, SEO assets, and integrations are catalogued." },
    { number: "2", title: "Migration map", body: "Redirects and cutover steps are documented." },
    { number: "3", title: "Staging move", body: "Full rehearsal on staging reduces launch risk." },
    { number: "4", title: "Cut over", body: "DNS and redirects go live with post-launch monitoring." },
  ],
  security: [
    { number: "1", title: "Risk assessment", body: "Plugins, access, hosting, and threat surface are reviewed." },
    { number: "2", title: "Hardening plan", body: "WAF, backups, and least-privilege changes are scoped." },
    { number: "3", title: "Implement", body: "Controls ship with staging validation where needed." },
    { number: "4", title: "Monitor", body: "Scanning and alerts become part of ongoing care." },
  ],
  speed: [
    { number: "1", title: "Performance baseline", body: "Lab and field metrics establish what is slow." },
    { number: "2", title: "Bottleneck plan", body: "Caching, assets, queries, and hosting levers are prioritized." },
    { number: "3", title: "Optimize", body: "Changes ship and are re-measured against Core Web Vitals." },
    { number: "4", title: "Guardrails", body: "Habits and monitoring keep speed from regressing." },
  ],
  backups: [
    { number: "1", title: "Risk and frequency", body: "How often content changes drives backup cadence." },
    { number: "2", title: "Configure", body: "Schedules, retention, and offsite storage are set." },
    { number: "3", title: "Test restore", body: "A restore drill proves the backup actually works." },
    { number: "4", title: "Operate", body: "Backups are monitored as part of ongoing care." },
  ],
  elementor: [
    { number: "1", title: "Design system", body: "Templates, fonts, and global styles are planned first." },
    { number: "2", title: "Build pages", body: "Reusable sections keep campaigns consistent." },
    { number: "3", title: "Performance pass", body: "Heavy widgets and assets are trimmed." },
    { number: "4", title: "Editor training", body: "Your team can update safely after launch." },
  ],
  divi: [
    { number: "1", title: "Theme setup", body: "Global styles and modules are configured for the brand." },
    { number: "2", title: "Page building", body: "Key templates and layouts are assembled in Divi." },
    { number: "3", title: "Optimize", body: "Performance and mobile polish are verified." },
    { number: "4", title: "Handoff", body: "Editors get clear update guidance." },
  ],
  theme: [
    { number: "1", title: "Theme strategy", body: "Custom vs premium theme fit is decided with trade-offs clear." },
    { number: "2", title: "Build", body: "Templates, fields, and patterns are implemented." },
    { number: "3", title: "QA", body: "Content and responsive checks happen on staging." },
    { number: "4", title: "Launch", body: "Handoff includes how to extend the theme safely." },
  ],
  convert: [
    { number: "1", title: "Source audit", body: "Existing site or design assets are inventoried." },
    { number: "2", title: "WordPress plan", body: "Templates, redirects, and content mapping are defined." },
    { number: "3", title: "Convert and migrate", body: "Pages become WordPress with SEO continuity." },
    { number: "4", title: "Validate launch", body: "QA and cutover confirm nothing critical was lost." },
  ],
  ada: [
    { number: "1", title: "Accessibility audit", body: "Key barriers are identified across templates and content." },
    { number: "2", title: "Fix roadmap", body: "Issues are prioritized by user impact." },
    { number: "3", title: "Remediate", body: "Code and content fixes ship with retesting." },
    { number: "4", title: "Sustain", body: "Editor habits and checks reduce future regressions." },
  ],
  gdpr: [
    { number: "1", title: "Privacy inventory", body: "Cookies, forms, and data flows are mapped." },
    { number: "2", title: "Controls plan", body: "Consent, retention, and plugin choices are defined." },
    { number: "3", title: "Implement", body: "Technical privacy controls ship on WordPress." },
    { number: "4", title: "Review", body: "New tools are checked so posture stays intact." },
  ],
  pci: [
    { number: "1", title: "Payment surface review", body: "Checkout, plugins, and hosting touchpoints are assessed." },
    { number: "2", title: "Hardening plan", body: "Safer payment patterns and access controls are scoped." },
    { number: "3", title: "Implement", body: "Changes ship with careful commerce QA." },
    { number: "4", title: "Monitor", body: "Payment-critical changes stay under watch." },
  ],
  compliance: [
    { number: "1", title: "Requirements workshop", body: "What compliance means for your WordPress site is clarified." },
    { number: "2", title: "Gap analysis", body: "Current state vs needed controls is documented." },
    { number: "3", title: "Remediation", body: "Fixes ship across accessibility, privacy, and security as needed." },
    { number: "4", title: "Ongoing checks", body: "Compliance stays part of maintenance, not a one-time event." },
  ],
  marketing: [
    { number: "1", title: "Campaign goals", body: "Offers, audiences, and conversion metrics are defined." },
    { number: "2", title: "Build assets", body: "Landing pages, forms, and tracking are assembled." },
    { number: "3", title: "Launch", body: "Pages go live with measurement confirmed." },
    { number: "4", title: "Optimize", body: "Results guide CRO and content iterations." },
  ],
  whitelabel: [
    { number: "1", title: "Partner onboarding", body: "Brand rules, communication, and delivery standards are set." },
    { number: "2", title: "Scoped delivery", body: "Builds or retainers run behind your client-facing brand." },
    { number: "3", title: "QA together", body: "Reviews happen in a way that protects your client relationship." },
    { number: "4", title: "Ongoing capacity", body: "Overflow care stays available as your agency grows." },
  ],
};

function faqsFor(d) {
  return [
    {
      question: `What is included in ${d.title} from Saqrih?`,
      answer: `${d.title} typically includes discovery, solution design, implementation on WordPress, QA, and launch or handover support. Scope is tailored to your goals in Qatar and documented before work starts.`,
    },
    {
      question: `How long does ${d.title.toLowerCase()} take?`,
      answer:
        "Timelines depend on site complexity, content volume, integrations, and review cycles. Focused engagements can move in weeks, while larger rebuilds or store projects take longer. You receive a milestone plan in the proposal.",
    },
    {
      question: "Do you work with Elementor, Divi, Gutenberg, and custom themes?",
      answer:
        "Yes. We deliver custom themes and plugins as well as Elementor, Divi, and Gutenberg-based builds when that is the right fit for your team.",
    },
    {
      question: "Can you handle WooCommerce, hosting, security, and SEO together?",
      answer:
        "Yes. Commerce, managed hosting patterns, hardening, speed, and SEO are all part of our WordPress practice and can be coordinated as one program.",
    },
    {
      question: "Will you migrate our existing site to WordPress?",
      answer:
        "Yes. We migrate from other platforms or older WordPress setups with redirects, content integrity, and SEO continuity planned carefully.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. We offer maintenance, premium support, and retained WordPress services for updates, monitoring, fixes, and ongoing improvements.",
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
    intro: `Saqrih delivers ${d.title.toLowerCase()} as part of our WordPress Development practice in Qatar. ${d.shortDesc} We combine senior WordPress craft with clear communication.`,
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
    body: `WordPress core, builders, WooCommerce, hosting, caching, security, and DevOps tooling we use for ${d.title.toLowerCase()}.`,
  },
}));

const unlockIds = {
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

const target = path.join("lib", "services", "wordpressDevelopmentSubPages.js");
const out = `/**
 * Retained-style sub-page content for /services/wordpress-development/[slug].
 * Mapped from /wordpress/* service pages. Unique SEO copy for Saqrih (Qatar).
 */

export const WORDPRESS_DEV_PARENT = {
  path: "${PARENT.path}",
  title: "${PARENT.title}",
};

export const WORDPRESS_DEV_SUB_PAGES = ${JSON.stringify(pages, null, 2)};

export function getWordpressDevSubPage(slug) {
  return WORDPRESS_DEV_SUB_PAGES.find((s) => s.slug === slug) ?? null;
}

export function getAllWordpressDevSubPageSlugs() {
  return WORDPRESS_DEV_SUB_PAGES.map((s) => s.slug);
}

const UNLOCK_CARD_IDS = ${JSON.stringify(unlockIds, null, 2)};

export function getWordpressDevSiblingCards(currentSlug) {
  const others = WORDPRESS_DEV_SUB_PAGES.filter((s) => s.slug !== currentSlug);
  return others.map((s, i) => ({
    id: UNLOCK_CARD_IDS[s.slug] || s.slug,
    title: s.title,
    desc: s.shortDesc,
    href: \`\${WORDPRESS_DEV_PARENT.path}/\${s.slug}\`,
    ...(i === 0
      ? { isHero: true, eyebrow: "More WordPress development services" }
      : {}),
  }));
}
`;

fs.writeFileSync(target, out);
console.log("wrote", pages.length, "to", target);
