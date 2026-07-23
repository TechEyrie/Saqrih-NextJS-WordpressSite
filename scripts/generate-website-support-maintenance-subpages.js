const fs = require("fs");
const path = require("path");

const defs = [
  {
    slug: "website-maintenance-services",
    title: "Website Maintenance Services",
    shortDesc:
      "Keep your website secure, up to date, and performing at its best with regular maintenance and proactive monitoring.",
    focus: "maintenance",
    heroTitle: "Website Maintenance\nServices in Qatar",
    heroLead:
      "Keep your website secure, up to date, and performing at its best with regular maintenance and proactive monitoring from Saqrih.",
    heroTitleMaxCh: "16ch",
    heading2: "Ongoing care that keeps your site healthy every month",
    techLine2: "Website Maintenance Expertise",
  },
  {
    slug: "website-support-troubleshooting",
    title: "Website Support & Troubleshooting",
    shortDesc:
      "Identify and resolve technical issues, bugs, broken functionality, and unexpected website errors.",
    focus: "troubleshoot",
    heroTitle: "Website Support &\nTroubleshooting in Qatar",
    heroLead:
      "Identify and resolve technical issues, bugs, broken functionality, and unexpected website errors before they cost you customers.",
    heroTitleMaxCh: "16ch",
    heading2: "Fast, calm fixes when something on your site breaks",
    techLine2: "Support & Troubleshooting Expertise",
  },
  {
    slug: "security-updates-vulnerability-management",
    title: "Security Updates & Vulnerability Management",
    shortDesc:
      "Apply security patches, monitor vulnerabilities, implement best practices, and protect websites against cyber threats.",
    focus: "security",
    heroTitle: "Security Updates &\nVulnerability Management in Qatar",
    heroLead:
      "Apply security patches, monitor vulnerabilities, implement best practices, and protect websites against cyber threats.",
    heroTitleMaxCh: "18ch",
    heading2: "Proactive security so threats do not become incidents",
    techLine2: "Security Expertise",
  },
  {
    slug: "software-theme-plugin-updates",
    title: "Software, Theme & Plugin Updates",
    shortDesc:
      "Safely update CMS platforms, themes, plugins, frameworks, and third-party extensions while maintaining compatibility.",
    focus: "updates",
    heroTitle: "Software, Theme &\nPlugin Updates in Qatar",
    heroLead:
      "Safely update CMS platforms, themes, plugins, frameworks, and third-party extensions while maintaining compatibility.",
    heroTitleMaxCh: "16ch",
    heading2: "Updates done safely, without breaking the live site",
    techLine2: "Update Management Expertise",
  },
  {
    slug: "website-performance-optimization",
    title: "Website Performance Optimization",
    shortDesc:
      "Improve loading speed, Core Web Vitals, caching, database performance, and overall website responsiveness.",
    focus: "perf",
    heroTitle: "Website Performance\nOptimization in Qatar",
    heroLead:
      "Improve loading speed, Core Web Vitals, caching, database performance, and overall website responsiveness for visitors and search.",
    heroTitleMaxCh: "16ch",
    heading2: "Faster pages that feel premium and convert better",
    techLine2: "Performance Expertise",
  },
  {
    slug: "backup-disaster-recovery",
    title: "Backup & Disaster Recovery",
    shortDesc:
      "Implement automated backups and recovery strategies to ensure rapid restoration in the event of failures or data loss.",
    focus: "backup",
    heroTitle: "Backup & Disaster\nRecovery in Qatar",
    heroLead:
      "Implement automated backups and recovery strategies to ensure rapid restoration in the event of failures or data loss.",
    heroTitleMaxCh: "14ch",
    heading2: "Backups you can restore when something goes wrong",
    techLine2: "Backup & Recovery Expertise",
  },
  {
    slug: "website-monitoring-uptime-management",
    title: "Website Monitoring & Uptime Management",
    shortDesc:
      "Monitor website availability, performance, SSL certificates, server health, and receive alerts for critical issues.",
    focus: "uptime",
    heroTitle: "Website Monitoring &\nUptime Management in Qatar",
    heroLead:
      "Monitor website availability, performance, SSL certificates, server health, and receive alerts for critical issues.",
    heroTitleMaxCh: "16ch",
    heading2: "Know first when uptime, SSL, or speed starts to fail",
    techLine2: "Monitoring Expertise",
  },
  {
    slug: "content-website-updates",
    title: "Content & Website Updates",
    shortDesc:
      "Publish new pages, update content, replace images, upload documents, modify layouts, and maintain website information.",
    focus: "content",
    heroTitle: "Content & Website\nUpdates in Qatar",
    heroLead:
      "Publish new pages, update content, replace images, upload documents, modify layouts, and maintain website information without waiting on a big project.",
    heroTitleMaxCh: "14ch",
    heading2: "Content changes handled carefully and on schedule",
    techLine2: "Content Updates Expertise",
  },
  {
    slug: "technical-seo-maintenance",
    title: "Technical SEO Maintenance",
    shortDesc:
      "Maintain technical SEO health by monitoring indexing, fixing crawl issues, structured data, redirects, broken links, and Core Web Vitals.",
    focus: "seo",
    heroTitle: "Technical SEO\nMaintenance in Qatar",
    heroLead:
      "Maintain technical SEO health by monitoring indexing, fixing crawl issues, structured data, redirects, broken links, and Core Web Vitals.",
    heroTitleMaxCh: "14ch",
    heading2: "Keep technical SEO healthy as the site evolves",
    techLine2: "Technical SEO Expertise",
  },
  {
    slug: "server-hosting-management",
    title: "Server & Hosting Management",
    shortDesc:
      "Manage hosting environments, server configurations, SSL certificates, DNS settings, email configurations, and deployment processes.",
    focus: "hosting",
    heroTitle: "Server & Hosting\nManagement in Qatar",
    heroLead:
      "Manage hosting environments, server configurations, SSL certificates, DNS settings, email configurations, and deployment processes.",
    heroTitleMaxCh: "14ch",
    heading2: "Hosting and server care that keeps launches calm",
    techLine2: "Hosting Management Expertise",
  },
  {
    slug: "website-migration-services",
    title: "Website Migration Services",
    shortDesc:
      "Safely migrate websites between hosting providers, servers, domains, or CMS platforms with minimal downtime.",
    focus: "migrate",
    heroTitle: "Website Migration\nServices in Qatar",
    heroLead:
      "Safely migrate websites between hosting providers, servers, domains, or CMS platforms with minimal downtime.",
    heroTitleMaxCh: "14ch",
    heading2: "Move hosts, domains, or platforms without drama",
    techLine2: "Migration Expertise",
  },
  {
    slug: "ongoing-support-technical-consultation",
    title: "Ongoing Support & Technical Consultation",
    shortDesc:
      "Provide continuous technical support, website improvements, feature enhancements, and expert guidance as your business grows.",
    focus: "consult",
    heroTitle: "Ongoing Support &\nTechnical Consultation in Qatar",
    heroLead:
      "Continuous technical support, website improvements, feature enhancements, and expert guidance as your business grows.",
    heroTitleMaxCh: "16ch",
    heading2: "A technical partner as your website and business grow",
    techLine2: "Consultation Expertise",
  },
];

const featureSets = {
  maintenance: [
    { title: "Proactive monthly care", desc: "Updates, checks, and monitoring happen on a rhythm so small issues do not become outages." },
    { title: "Security and speed together", desc: "Maintenance covers hardening and performance, not just ticking update boxes." },
    { title: "Compatibility awareness", desc: "Changes are tested with an eye on themes, plugins, and critical journeys." },
    { title: "Clear reporting", desc: "You know what was checked, fixed, and planned next." },
  ],
  troubleshoot: [
    { title: "Root-cause fixing", desc: "We diagnose why something broke instead of only masking symptoms." },
    { title: "Priority for revenue paths", desc: "Checkout, forms, and key pages get attention first when downtime hurts." },
    { title: "Calm communication", desc: "Status and next steps stay clear while the issue is being resolved." },
    { title: "Prevention notes", desc: "Fixes include what to watch so the same failure is less likely next time." },
  ],
  security: [
    { title: "Patch discipline", desc: "Security updates are applied carefully and verified after deploy." },
    { title: "Vulnerability awareness", desc: "Monitoring and hardening reduce exposure before attackers find it." },
    { title: "Best-practice baselines", desc: "Access, backups, and environment hygiene support a stronger posture." },
    { title: "Incident readiness", desc: "When something looks wrong, response paths are already defined." },
  ],
  updates: [
    { title: "Safe update workflows", desc: "Staging or careful checks reduce the risk of breaking production." },
    { title: "Compatibility first", desc: "CMS, themes, plugins, and frameworks are updated with dependency awareness." },
    { title: "Rollback options", desc: "Backups and recovery paths exist before risky updates go live." },
    { title: "Less update debt", desc: "Regular cadence prevents giant, dangerous catch-up upgrades later." },
  ],
  perf: [
    { title: "Core Web Vitals focus", desc: "LCP, CLS, and responsiveness are treated as business metrics." },
    { title: "Caching and media", desc: "CDN, image, and cache strategies tuned for real templates." },
    { title: "Database care", desc: "Heavy queries and bloat are cleaned so pages stay responsive." },
    { title: "Mobile-first speed", desc: "Performance work prioritizes the devices most visitors use." },
  ],
  backup: [
    { title: "Automated backup rhythm", desc: "Backups run on a schedule suited to how often your content changes." },
    { title: "Restore confidence", desc: "Recovery is tested so backups are not just files you hope work." },
    { title: "Offsite resilience", desc: "Copies live where a single server failure cannot wipe everything." },
    { title: "Faster recovery plans", desc: "Clear steps reduce downtime when restore is required." },
  ],
  uptime: [
    { title: "Availability monitoring", desc: "Uptime checks catch downtime before customers tell you." },
    { title: "SSL and health signals", desc: "Certificates, server health, and performance alerts stay in view." },
    { title: "Critical-path alerts", desc: "You are notified when issues matter, not flooded with noise." },
    { title: "Faster response loops", desc: "Monitoring connects to support so fixes start sooner." },
  ],
  content: [
    { title: "Accurate publishing", desc: "Pages, images, and documents go live without layout surprises." },
    { title: "Brand-safe edits", desc: "Updates respect your design system and existing components." },
    { title: "Flexible request handling", desc: "Small changes do not require a full rebuild project." },
    { title: "Version awareness", desc: "What changed stays clear for stakeholders and future work." },
  ],
  seo: [
    { title: "Indexing health", desc: "Crawl and index issues are monitored so pages stay discoverable." },
    { title: "Technical fix cadence", desc: "Broken links, redirects, and schema problems get cleaned regularly." },
    { title: "Core Web Vitals care", desc: "Speed signals that affect SEO are maintained, not ignored." },
    { title: "Change-safe SEO", desc: "Site updates include checks that protect rankings during edits." },
  ],
  hosting: [
    { title: "Environment stewardship", desc: "Hosting configs stay aligned with how the site actually runs." },
    { title: "SSL, DNS, and email", desc: "Certificates, DNS, and related settings are handled carefully." },
    { title: "Deployment discipline", desc: "Releases follow processes that reduce surprise breakage." },
    { title: "Capacity awareness", desc: "Server health is watched so growth does not outpace infrastructure." },
  ],
  migrate: [
    { title: "Minimal downtime plans", desc: "Cutover steps are designed to keep the site available for visitors." },
    { title: "Data and URL care", desc: "Content, redirects, and DNS moves protect SEO and continuity." },
    { number: "3", title: "Host or CMS moves", desc: "Migrations cover hosting, servers, domains, and platform changes." },
    { title: "Post-move hardening", desc: "Checks after cutover catch SSL, forms, and tracking issues early." },
  ],
  consult: [
    { title: "Continuous technical partner", desc: "Support does not end after a ticket; guidance stays available as needs change." },
    { title: "Improvement backlog", desc: "Feature enhancements and refinements ship alongside care work." },
    { title: "Practical advice", desc: "Recommendations balance business goals with technical reality." },
    { title: "Growth-ready planning", desc: "As traffic and features grow, the site roadmap stays intentional." },
  ],
};

// Fix migrate feature set - I accidentally put number in one feature. Let me fix in the object.
featureSets.migrate = [
  { title: "Minimal downtime plans", desc: "Cutover steps are designed to keep the site available for visitors." },
  { title: "Data and URL care", desc: "Content, redirects, and DNS moves protect SEO and continuity." },
  { title: "Host or CMS moves", desc: "Migrations cover hosting, servers, domains, and platform changes." },
  { title: "Post-move hardening", desc: "Checks after cutover catch SSL, forms, and tracking issues early." },
];

const processSets = {
  maintenance: [
    { number: "1", title: "Site health baseline", body: "We review platform, plugins, performance, and security posture." },
    { number: "2", title: "Care plan setup", body: "Update cadence, monitoring, and priorities are agreed." },
    { number: "3", title: "Maintain and report", body: "Regular work ships with clear notes on what changed." },
    { number: "4", title: "Improve continuously", body: "Findings feed the next round of hardening and speed work." },
  ],
  troubleshoot: [
    { number: "1", title: "Reproduce and prioritize", body: "Issues are confirmed and ranked by business impact." },
    { number: "2", title: "Diagnose root cause", body: "Logs, environments, and recent changes guide the investigation." },
    { number: "3", title: "Fix and verify", body: "Patches ship with checks on the journeys that matter." },
    { number: "4", title: "Prevent recurrence", body: "Notes and monitoring reduce the chance of a repeat failure." },
  ],
  security: [
    { number: "1", title: "Security assessment", body: "Patches owed, access risks, and monitoring gaps are listed." },
    { number: "2", title: "Hardening plan", body: "Update and configuration priorities are sequenced safely." },
    { number: "3", title: "Apply and verify", body: "Security work ships with functional checks afterward." },
    { number: "4", title: "Ongoing vigilance", body: "Monitoring and review keep the posture current." },
  ],
  updates: [
    { number: "1", title: "Inventory and risk review", body: "CMS, themes, plugins, and frameworks are catalogued." },
    { number: "2", title: "Safe update sequence", body: "Dependencies are ordered to reduce breakage risk." },
    { number: "3", title: "Update and test", body: "Changes ship with compatibility checks on key pages." },
    { number: "4", title: "Stabilize", body: "Any regressions are fixed quickly after release." },
  ],
  perf: [
    { number: "1", title: "Performance baseline", body: "Core Web Vitals and heavy templates are measured." },
    { number: "2", title: "Prioritize fixes", body: "Media, caching, and database wins are planned first." },
    { number: "3", title: "Implement and retest", body: "Changes ship with before/after measurement." },
    { number: "4", title: "Guard against regressions", body: "Monitoring keeps speed from drifting after new content." },
  ],
  backup: [
    { number: "1", title: "Recovery requirements", body: "How often content changes and restore targets are defined." },
    { number: "2", title: "Backup architecture", body: "Schedule, storage locations, and retention are designed." },
    { number: "3", title: "Automate and test restore", body: "Backups run automatically and restores are verified." },
    { number: "4", title: "Operate the plan", body: "Alerts and runbooks keep recovery ready when needed." },
  ],
  uptime: [
    { number: "1", title: "Monitoring scope", body: "URLs, SSL, and health signals that matter are selected." },
    { number: "2", title: "Alert design", body: "Thresholds and contacts are set to avoid noise." },
    { number: "3", title: "Connect to response", body: "Alerts route into support so issues get owners fast." },
    { number: "4", title: "Review and refine", body: "False positives and coverage gaps are tuned over time." },
  ],
  content: [
    { number: "1", title: "Request intake", body: "Pages, assets, and deadlines are clarified with stakeholders." },
    { number: "2", title: "Edit carefully", body: "Content and layout updates respect brand and structure." },
    { number: "3", title: "QA and publish", body: "Links, mobile layout, and forms are checked before go-live." },
    { number: "4", title: "Confirm with you", body: "Stakeholders review and further tweaks ship quickly." },
  ],
  seo: [
    { number: "1", title: "Technical SEO baseline", body: "Indexing, crawl, schema, and CWV issues are audited." },
    { number: "2", title: "Fix priority list", body: "High-impact technical issues are sequenced first." },
    { number: "3", title: "Implement and validate", body: "Fixes ship with Search Console and crawl checks." },
    { number: "4", title: "Maintain cadence", body: "Ongoing reviews catch new broken links and index problems." },
  ],
  hosting: [
    { number: "1", title: "Environment review", body: "Hosting, DNS, SSL, and deploy processes are assessed." },
    { number: "2", title: "Stabilize configuration", body: "Settings and certificates are corrected carefully." },
    { number: "3", title: "Operate deployments", body: "Releases follow a safer, repeatable process." },
    { number: "4", title: "Monitor capacity", body: "Server health stays visible as traffic and features grow." },
  ],
  migrate: [
    { number: "1", title: "Migration audit", body: "Host, domain, CMS, and SEO requirements are inventoried." },
    { number: "2", title: "Cutover plan", body: "DNS, redirects, and downtime windows are designed." },
    { number: "3", title: "Migrate and verify", body: "Content and configs move with parallel checks." },
    { number: "4", title: "Stabilize after move", body: "SSL, forms, email, and tracking are confirmed live." },
  ],
  consult: [
    { number: "1", title: "Goals and backlog", body: "Business priorities and technical debt are aligned." },
    { number: "2", title: "Support model", body: "Response expectations and improvement cadence are agreed." },
    { number: "3", title: "Deliver and advise", body: "Support tickets and enhancements ship with clear guidance." },
    { number: "4", title: "Plan the next stage", body: "Regular reviews keep the website roadmap intentional." },
  ],
};

function faqsFor(d) {
  return [
    {
      question: `What is included in ${d.title} from Saqrih?`,
      answer: `${d.title} typically includes discovery of your current setup, a clear care or delivery plan, hands-on technical work, verification on key pages, and reporting or handover notes. Scope is tailored to your website in Qatar and documented before work starts.`,
    },
    {
      question: `How quickly can you start ${d.title.toLowerCase()}?`,
      answer:
        "Urgent troubleshooting can often begin quickly once we have access and priorities. Ongoing maintenance plans usually start after a short baseline review. Timelines for larger migrations or performance programs are confirmed in the proposal.",
    },
    {
      question: "Which platforms do you support?",
      answer:
        "We commonly support WordPress, Drupal, Craft, Webflow, WooCommerce, Shopify, Magento, and related hosting stacks, plus custom sites that need monitoring and care.",
    },
    {
      question: "Do you handle security, backups, and uptime monitoring?",
      answer:
        "Yes. Security updates, vulnerability awareness, backups, disaster recovery planning, and uptime monitoring are core parts of our Website Support & Maintenance practice.",
    },
    {
      question: "Can you help with content updates and technical SEO?",
      answer:
        "Yes. We handle content and layout updates as well as technical SEO maintenance such as crawl issues, redirects, broken links, structured data, and Core Web Vitals care.",
    },
    {
      question: "Is this a one-time project or ongoing care?",
      answer:
        "Both. Some work is project-based, such as migrations or performance sprints. Most clients benefit from ongoing maintenance and support so the site stays secure and reliable month after month.",
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
    intro: `Saqrih delivers ${d.title.toLowerCase()} as part of our Website Support & Maintenance practice in Qatar. ${d.shortDesc} We combine proactive care with responsive technical support.`,
    rightTitle: `${d.title} engineered for clarity, reliability, and measurable outcomes`,
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
    body: `CMS, commerce, hosting, monitoring, and performance tooling we use for ${d.title.toLowerCase()}.`,
  },
}));

const target = path.join("lib", "services", "websiteSupportMaintenanceSubPages.js");
const out = `/**
 * Retained-style sub-page content for /services/website-support-maintenance/[slug].
 * Unique SEO copy per sub-service for Saqrih (Qatar).
 */

export const WSM_DEV_PARENT = {
  path: "/services/website-support-maintenance",
  title: "Website Support & Maintenance",
};

export const WSM_DEV_SUB_PAGES = ${JSON.stringify(pages, null, 2)};

export function getWsmDevSubPage(slug) {
  return WSM_DEV_SUB_PAGES.find((s) => s.slug === slug) ?? null;
}

export function getAllWsmDevSubPageSlugs() {
  return WSM_DEV_SUB_PAGES.map((s) => s.slug);
}

export function getWsmDevSiblingCards(currentSlug) {
  const others = WSM_DEV_SUB_PAGES.filter((s) => s.slug !== currentSlug);
  return others.map((s, i) => ({
    id: s.slug,
    title: s.title,
    desc: s.shortDesc,
    href: \`\${WSM_DEV_PARENT.path}/\${s.slug}\`,
    ...(i === 0
      ? { isHero: true, eyebrow: "More website support & maintenance services" }
      : {}),
  }));
}
`;

fs.writeFileSync(target, out);
console.log("wrote", pages.length, "to", target);
