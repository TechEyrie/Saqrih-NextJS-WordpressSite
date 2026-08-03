const fs = require("fs");
const path = require("path");

const defs = [
  {
    slug: "business-website-development",
    title: "Business Website Development",
    shortDesc:
      "Professional websites for companies, startups, SMEs, and enterprises.",
    focus: "business",
    heroTitle: "Business Website\nDevelopment in Qatar",
    heroLead:
      "Professional websites for companies, startups, SMEs, and enterprises. Clear messaging, strong conversion paths, and a foundation built for growth in Doha and beyond.",
    heroTitleMaxCh: "16ch",
    heading2: "Websites that clarify your offer and convert visitors",
    techLine2: "Business Website Expertise",
  },
  {
    slug: "corporate-website-development",
    title: "Corporate Website Development",
    shortDesc:
      "Multi-page corporate websites with custom branding and content management.",
    focus: "corporate",
    heroTitle: "Corporate Website\nDevelopment in Qatar",
    heroLead:
      "Multi-page corporate websites with custom branding and content management. Built to communicate credibility, structure, and trust at scale.",
    heroTitleMaxCh: "16ch",
    heading2: "Corporate sites that reflect your organization with clarity",
    techLine2: "Corporate Web Expertise",
  },
  {
    slug: "custom-website-development",
    title: "Custom Website Development",
    shortDesc:
      "Tailor-made websites built to match specific business requirements.",
    focus: "custom",
    heroTitle: "Custom Website\nDevelopment in Qatar",
    heroLead:
      "Tailor-made websites built to match specific business requirements. Unique design systems, custom features, and performance tuned to how your team works.",
    heroTitleMaxCh: "16ch",
    heading2: "Bespoke builds beyond off-the-shelf templates",
    techLine2: "Custom Build Expertise",
  },
  {
    slug: "landing-page-development",
    title: "Landing Page Development",
    shortDesc:
      "High-converting landing pages for marketing campaigns and lead generation.",
    focus: "landing",
    heroTitle: "Landing Page\nDevelopment in Qatar",
    heroLead:
      "High-converting landing pages for marketing campaigns and lead generation. Focused messaging, fast loads, and layouts built to convert paid and organic traffic.",
    heroTitleMaxCh: "14ch",
    heading2: "Campaign pages engineered for conversion",
    techLine2: "Landing Page Expertise",
  },
  {
    slug: "portfolio-website-development",
    title: "Portfolio Website Development",
    shortDesc:
      "Portfolio websites for individuals, agencies, architects, photographers, and creative professionals.",
    focus: "portfolio",
    heroTitle: "Portfolio Website\nDevelopment in Qatar",
    heroLead:
      "Portfolio websites for individuals, agencies, architects, photographers, and creative professionals. Clean galleries, fast media, and a narrative that wins clients.",
    heroTitleMaxCh: "16ch",
    heading2: "Visual-first sites that put your best work forward",
    techLine2: "Portfolio Site Expertise",
  },
  {
    slug: "brochure-website-development",
    title: "Brochure Website Development",
    shortDesc:
      "Informational websites designed to showcase services, products, and company information.",
    focus: "brochure",
    heroTitle: "Brochure Website\nDevelopment in Qatar",
    heroLead:
      "Informational websites designed to showcase services, products, and company information with polish and clear contact paths.",
    heroTitleMaxCh: "16ch",
    heading2: "Clean multi-page sites that introduce your brand",
    techLine2: "Brochure Site Expertise",
  },
  {
    slug: "multilingual-website-development",
    title: "Multilingual Website Development",
    shortDesc: "Websites supporting multiple languages and regional content.",
    focus: "multilingual",
    heroTitle: "Multilingual Website\nDevelopment in Qatar",
    heroLead:
      "Websites supporting multiple languages and regional content. Localized structure, SEO, and UX that feel native in Arabic, English, and more.",
    heroTitleMaxCh: "18ch",
    heading2: "Localized experiences for regional and global audiences",
    techLine2: "Multilingual Expertise",
  },
  {
    slug: "headless-website-development",
    title: "Headless Website Development",
    shortDesc:
      "Modern websites using decoupled frontend and CMS architectures.",
    focus: "headless",
    heroTitle: "Headless Website\nDevelopment in Qatar",
    heroLead:
      "Modern websites using decoupled frontend and CMS architectures. Faster delivery, stronger performance, and editorial freedom for growing teams.",
    heroTitleMaxCh: "16ch",
    heading2: "API-driven sites built for speed and scale",
    techLine2: "Headless Web Expertise",
  },
  {
    slug: "pwa-development",
    title: "Progressive Web App (PWA) Development",
    shortDesc:
      "Websites that provide an app-like experience on mobile devices.",
    focus: "pwa",
    heroTitle: "Progressive Web App\nDevelopment in Qatar",
    heroLead:
      "Websites that provide an app-like experience on mobile devices. Fast loads, offline resilience, and installable experiences without app-store friction.",
    heroTitleMaxCh: "18ch",
    heading2: "App-like web experiences that reach every device",
    techLine2: "PWA Expertise",
  },
  {
    slug: "website-migration",
    title: "Website Migration",
    shortDesc:
      "Migration from one platform to another with SEO and content preserved.",
    focus: "migration",
    heroTitle: "Website Migration\nServices in Qatar",
    heroLead:
      "Safe migrations from one platform to another. Content, redirects, and SEO value preserved so you stay live and discoverable.",
    heroTitleMaxCh: "16ch",
    heading2: "Platform moves planned end to end with minimal downtime",
    techLine2: "Migration Expertise",
    examples: [
      "Joomla to WordPress",
      "Wix to WordPress",
      "Drupal to WordPress",
      "Static HTML to CMS",
      "WordPress to Webflow",
    ],
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    shortDesc:
      "Modernizing outdated websites while preserving existing content and SEO where appropriate.",
    focus: "redesign",
    heroTitle: "Website Redesign\nServices in Qatar",
    heroLead:
      "Modernize outdated websites while preserving existing content and SEO where appropriate. Cleaner structure, stronger performance, same hard-won equity.",
    heroTitleMaxCh: "14ch",
    heading2: "Refresh UX and visuals without losing rankings",
    techLine2: "Redesign Expertise",
  },
  {
    slug: "website-performance-optimization",
    title: "Website Performance Optimization",
    shortDesc:
      "Improving loading speed, Core Web Vitals, caching, and overall user experience.",
    focus: "performance",
    heroTitle: "Website Performance\nOptimization in Qatar",
    heroLead:
      "Improve loading speed, Core Web Vitals, caching, and overall user experience so your site feels instant for real visitors.",
    heroTitleMaxCh: "18ch",
    heading2: "Speed and Core Web Vitals treated as product features",
    techLine2: "Performance Expertise",
  },
  {
    slug: "accessibility-optimization",
    title: "Accessibility Optimization",
    shortDesc:
      "Ensuring websites meet accessibility standards such as WCAG.",
    focus: "accessibility",
    heroTitle: "Accessibility\nOptimization in Qatar",
    heroLead:
      "Ensure websites meet accessibility standards such as WCAG. Semantic structure, keyboard flows, contrast, and assistive-tech readiness.",
    heroTitleMaxCh: "14ch",
    heading2: "Inclusive experiences more people can use with confidence",
    techLine2: "Accessibility Expertise",
  },
  {
    slug: "website-security-hardening",
    title: "Website Security Hardening",
    shortDesc:
      "Implementing security best practices to protect websites from common threats.",
    focus: "security",
    heroTitle: "Website Security\nHardening in Qatar",
    heroLead:
      "Implement security best practices to protect websites from common threats. Hardened setups, monitoring, and restore-ready backups for peace of mind.",
    heroTitleMaxCh: "16ch",
    heading2: "Layered protection for business-critical web properties",
    techLine2: "Security Expertise",
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    shortDesc: "Ongoing updates, monitoring, backups, bug fixes, and support.",
    focus: "maintenance",
    heroTitle: "Website Maintenance\nServices in Qatar",
    heroLead:
      "Ongoing updates, monitoring, backups, bug fixes, and support so your site stays fast, secure, and current after launch.",
    heroTitleMaxCh: "16ch",
    heading2: "Hands-off care that keeps your website healthy",
    techLine2: "Maintenance Expertise",
  },
];

const featureSets = {
  business: [
    {
      title: "Clear value and conversion paths",
      desc: "We structure pages so visitors understand what you offer and how to get in touch, with CTAs placed for real inquiry flow.",
    },
    {
      title: "Mobile-first business UX",
      desc: "Layouts, forms, and navigation are tested for phones and desktops so Qatar audiences get a smooth experience everywhere.",
    },
    {
      title: "Easy content ownership",
      desc: "Your team can update services, news, and contact details without fighting the CMS or waiting on developers for every change.",
    },
    {
      title: "SEO-ready foundations",
      desc: "Clean structure, fast loads, and metadata so your business site can compete in local and industry search.",
    },
  ],
  corporate: [
    {
      title: "Brand-consistent multi-page architecture",
      desc: "Navigation, section templates, and visual systems that scale across departments, locations, and stakeholder pages.",
    },
    {
      title: "Credibility at every click",
      desc: "Leadership, case studies, compliance, and contact paths presented with the polish corporate buyers expect.",
    },
    {
      title: "Editor-friendly CMS workflows",
      desc: "Roles, permissions, and content models so marketing and communications teams publish safely.",
    },
    {
      title: "Enterprise-ready performance",
      desc: "Caching, media strategy, and hosting patterns suited to high-traffic corporate properties.",
    },
  ],
  custom: [
    {
      title: "Designed around your workflows",
      desc: "Features, integrations, and page types follow how your business actually operates, not a generic theme demo.",
    },
    {
      title: "Unique design systems",
      desc: "Components, typography, and interaction patterns built for your brand instead of recycled templates.",
    },
    {
      title: "Scalable engineering",
      desc: "Clean code and modular architecture so new sections and features can ship without rewriting the site.",
    },
    {
      title: "Transparent collaboration",
      desc: "Discovery, prototypes, and milestone reviews keep stakeholders aligned from kickoff to launch.",
    },
  ],
  landing: [
    {
      title: "Message-market fit on one page",
      desc: "Headline, proof, and CTA hierarchy tuned to your campaign offer and audience intent.",
    },
    {
      title: "Speed that protects ad spend",
      desc: "Lightweight builds and image strategy so paid traffic is not wasted on slow first paint.",
    },
    {
      title: "Tracking-ready structure",
      desc: "Events, forms, and thank-you flows set up cleanly for analytics and CRM capture.",
    },
    {
      title: "Rapid iteration",
      desc: "Layouts you can A/B and refine quickly as campaign learning comes in.",
    },
  ],
  portfolio: [
    {
      title: "Work-first storytelling",
      desc: "Project galleries and case layouts that highlight craft, process, and outcomes without clutter.",
    },
    {
      title: "Fast media delivery",
      desc: "Optimized images and lazy loading so large portfolios stay smooth on mobile.",
    },
    {
      title: "Inquiry paths that convert",
      desc: "Clear contact and briefing CTAs for clients ready to hire.",
    },
    {
      title: "Brand-forward presentation",
      desc: "Typography and spacing that feel premium for creatives, studios, and professional practices.",
    },
  ],
  brochure: [
    {
      title: "Services explained simply",
      desc: "Page structure that introduces who you are, what you offer, and how to contact you without overwhelm.",
    },
    {
      title: "Professional first impression",
      desc: "Visual polish and content hierarchy that build trust for visitors who are evaluating you online.",
    },
    {
      title: "Lightweight and maintainable",
      desc: "A focused page set that is easy to update as offers and team details change.",
    },
    {
      title: "Local SEO foundations",
      desc: "Location cues, schema-ready markup, and clean URLs for discovery in Qatar and regional markets.",
    },
  ],
  multilingual: [
    {
      title: "Language-aware IA",
      desc: "URL, menu, and content models planned for Arabic, English, and additional locales from day one.",
    },
    {
      title: "Native-feeling UX per locale",
      desc: "RTL support, typography, and layout adjustments so each language feels intentional, not bolted on.",
    },
    {
      title: "Localized SEO",
      desc: "Hreflang, metadata, and content patterns that help the right audience find the right language version.",
    },
    {
      title: "Editorial workflows",
      desc: "Translation and publishing processes that keep languages in sync without breaking production.",
    },
  ],
  headless: [
    {
      title: "Decoupled frontend freedom",
      desc: "React, Next.js, and modern UI stacks powered by CMS APIs for speed and flexibility.",
    },
    {
      title: "Editor experience preserved",
      desc: "Content models and previews that keep marketing teams productive even when the frontend is separate.",
    },
    {
      title: "Multi-channel ready",
      desc: "One content source that can feed websites, apps, and campaigns as you grow.",
    },
    {
      title: "Performance by architecture",
      desc: "Static generation, caching, and edge delivery patterns that keep pages fast under load.",
    },
  ],
  pwa: [
    {
      title: "Installable web experiences",
      desc: "Manifest, service workers, and UX patterns that make your site feel like an app on mobile.",
    },
    {
      title: "Offline resilience",
      desc: "Caching strategies that keep key journeys available when connectivity dips.",
    },
    {
      title: "Push-ready foundations",
      desc: "Architecture prepared for engagement features without forcing a native app rebuild.",
    },
    {
      title: "Store-free reach",
      desc: "Ship updates instantly to users while keeping SEO and web discoverability.",
    },
  ],
  migration: [
    {
      title: "Platform moves done carefully",
      desc: "Joomla, Wix, Drupal, static HTML, WordPress, Webflow, and more: we plan content, media, and URL mapping before cutover.",
    },
    {
      title: "SEO preservation",
      desc: "Redirect maps, metadata carryover, and crawl checks so rankings and inbound links are protected.",
    },
    {
      title: "Minimal downtime cutovers",
      desc: "Staging, dry runs, and rollback plans keep your business online during the switch.",
    },
    {
      title: "Post-migration stabilization",
      desc: "Forms, tracking, search, and performance verified after go-live so nothing silently breaks.",
    },
  ],
  redesign: [
    {
      title: "Modern UX without equity loss",
      desc: "We refresh layout and visuals while protecting valuable URLs and content where it still serves users.",
    },
    {
      title: "Conversion-focused IA",
      desc: "Navigation and page flow redesigned around how buyers actually evaluate your offer.",
    },
    {
      title: "Performance uplift",
      desc: "Heavier legacy patterns replaced with lighter components and better Core Web Vitals.",
    },
    {
      title: "Content continuity",
      desc: "Migrations of copy, media, and SEO signals planned so relaunch does not feel like starting from zero.",
    },
  ],
  performance: [
    {
      title: "Core Web Vitals focus",
      desc: "LCP, INP, and CLS improvements measured with lab and field data, then fixed where they matter.",
    },
    {
      title: "Caching and delivery",
      desc: "CDN, browser caching, and server strategies tuned to your stack and traffic patterns.",
    },
    {
      title: "Asset and code hygiene",
      desc: "Images, fonts, scripts, and unused CSS reduced so pages stay lean.",
    },
    {
      title: "Ongoing measurement",
      desc: "Baselines and retests so performance gains stick after content and marketing changes.",
    },
  ],
  accessibility: [
    {
      title: "WCAG-aligned improvements",
      desc: "Semantic HTML, labels, focus order, and contrast reviewed against practical accessibility standards.",
    },
    {
      title: "Keyboard and screen-reader flows",
      desc: "Critical journeys tested so assistive-tech users can complete forms and navigation.",
    },
    {
      title: "Inclusive media",
      desc: "Alt text, captions, and non-text alternatives planned into content workflows.",
    },
    {
      title: "Sustainable a11y practice",
      desc: "Guidance for your team so accessibility does not regress with every content update.",
    },
  ],
  security: [
    {
      title: "Hardened configurations",
      desc: "Least-privilege access, secure headers, and platform settings tightened for production risk.",
    },
    {
      title: "Patch and vulnerability hygiene",
      desc: "Core, plugin, and dependency updates managed with compatibility checks.",
    },
    {
      title: "Edge and application defense",
      desc: "WAF, SSL, and malware scanning patterns suited to your hosting environment.",
    },
    {
      title: "Backup and recovery readiness",
      desc: "Restore-tested backups so incidents do not become extended outages.",
    },
  ],
  maintenance: [
    {
      title: "Proactive updates",
      desc: "CMS, theme, plugin, and dependency updates applied on a cadence that fits your risk profile.",
    },
    {
      title: "Uptime and health monitoring",
      desc: "Availability, SSL, and critical error checks so issues are caught before customers complain.",
    },
    {
      title: "Backups you can trust",
      desc: "Automated backups with clear restore paths when something goes wrong.",
    },
    {
      title: "Responsive support",
      desc: "Bug fixes, small content changes, and technical guidance without long ticket queues.",
    },
  ],
};

const processSets = {
  business: [
    {
      number: "1",
      title: "Discover goals and audience",
      body: "We map your offer, competitors, and inquiry goals so the site structure supports real business outcomes in Qatar.",
    },
    {
      number: "2",
      title: "Design conversion-ready pages",
      body: "Wireframes and visual design focus on clarity, trust, and mobile usability before development begins.",
    },
    {
      number: "3",
      title: "Build and integrate",
      body: "We develop on a modern stack with CMS access, forms, analytics, and any required business integrations.",
    },
    {
      number: "4",
      title: "Launch and hand over",
      body: "QA, SEO checks, and training so your team can publish updates confidently after go-live.",
    },
  ],
  corporate: [
    {
      number: "1",
      title: "Stakeholder discovery",
      body: "We align departments on information architecture, brand rules, and publishing ownership.",
    },
    {
      number: "2",
      title: "System design",
      body: "Templates, navigation, and CMS models are designed for multi-page corporate scale.",
    },
    {
      number: "3",
      title: "Build and content migration",
      body: "Pages are developed and populated with structured content, media, and SEO metadata.",
    },
    {
      number: "4",
      title: "Governance and launch",
      body: "Roles, training, and launch checks ensure the corporate site stays consistent after release.",
    },
  ],
  custom: [
    {
      number: "1",
      title: "Requirements workshop",
      body: "We document features, integrations, and success metrics unique to your business.",
    },
    {
      number: "2",
      title: "Prototype and validate",
      body: "Interactive prototypes reduce risk before heavy engineering starts.",
    },
    {
      number: "3",
      title: "Custom development",
      body: "Design systems and features are built to your stack with performance and security in mind.",
    },
    {
      number: "4",
      title: "Iterate and launch",
      body: "Staging reviews, QA, and a controlled release with post-launch support options.",
    },
  ],
  landing: [
    {
      number: "1",
      title: "Campaign brief",
      body: "Offer, audience, traffic source, and conversion event define the page strategy.",
    },
    {
      number: "2",
      title: "Conversion design",
      body: "We craft a single-purpose layout with proof, objections handled, and a clear CTA.",
    },
    {
      number: "3",
      title: "Build and track",
      body: "Fast implementation with form or CRM wiring and analytics events ready for spend.",
    },
    {
      number: "4",
      title: "Launch and optimize",
      body: "Ship quickly, then refine copy and layout based on early campaign data.",
    },
  ],
  portfolio: [
    {
      number: "1",
      title: "Curate the work",
      body: "We help select projects and structure case stories that sell your craft.",
    },
    {
      number: "2",
      title: "Visual system",
      body: "Typography, grids, and gallery patterns designed for media-heavy portfolios.",
    },
    {
      number: "3",
      title: "Build and optimize media",
      body: "Development focuses on fast image delivery and smooth browsing on mobile.",
    },
    {
      number: "4",
      title: "Publish and promote",
      body: "Launch with clear hire CTAs and SEO basics for discovery.",
    },
  ],
  brochure: [
    {
      number: "1",
      title: "Define the essentials",
      body: "Services, about, and contact content are prioritized for a concise site map.",
    },
    {
      number: "2",
      title: "Design for clarity",
      body: "Layouts keep messaging readable and brand presentation professional.",
    },
    {
      number: "3",
      title: "Build a lean site",
      body: "We implement a maintainable brochure site with CMS where needed.",
    },
    {
      number: "4",
      title: "Launch with contact ready",
      body: "Forms, maps, and SEO basics verified before go-live.",
    },
  ],
  multilingual: [
    {
      number: "1",
      title: "Locale planning",
      body: "Languages, URL strategy, and content ownership are defined up front.",
    },
    {
      number: "2",
      title: "Bilingual UX design",
      body: "Layouts account for RTL and LTR typography and navigation differences.",
    },
    {
      number: "3",
      title: "Build localization workflows",
      body: "CMS models, translation flows, and hreflang are implemented carefully.",
    },
    {
      number: "4",
      title: "QA each language",
      body: "We test content, forms, and SEO signals per locale before launch.",
    },
  ],
  headless: [
    {
      number: "1",
      title: "Architecture decision",
      body: "We choose CMS and frontend patterns that fit your team and channels.",
    },
    {
      number: "2",
      title: "Content modeling",
      body: "Structured content and previews are designed for editors and engineers.",
    },
    {
      number: "3",
      title: "Frontend delivery",
      body: "Next.js or similar stacks consume APIs with performance and SEO in mind.",
    },
    {
      number: "4",
      title: "Launch and operate",
      body: "CI/CD, caching, and editorial training keep the headless system healthy.",
    },
  ],
  pwa: [
    {
      number: "1",
      title: "Experience mapping",
      body: "We identify which journeys benefit most from offline and installable behavior.",
    },
    {
      number: "2",
      title: "PWA foundation",
      body: "Manifest, service workers, and caching strategy are designed for your content.",
    },
    {
      number: "3",
      title: "Build and harden",
      body: "App-like UX is implemented with performance budgets and secure defaults.",
    },
    {
      number: "4",
      title: "Validate on devices",
      body: "Installability, offline paths, and mobile UX are tested before release.",
    },
  ],
  migration: [
    {
      number: "1",
      title: "Audit source and target",
      body: "We inventory pages, media, URLs, forms, and integrations on the current platform.",
    },
    {
      number: "2",
      title: "Migration plan and redirects",
      body: "Mapping, SEO redirects, and cutover timing are documented before work starts.",
    },
    {
      number: "3",
      title: "Migrate and rebuild where needed",
      body: "Content and templates move to the new stack with staging verification.",
    },
    {
      number: "4",
      title: "Cutover and stabilize",
      body: "DNS switch, monitoring, and post-migration fixes keep the business online.",
    },
  ],
  redesign: [
    {
      number: "1",
      title: "Audit the current site",
      body: "Analytics, SEO, UX issues, and content quality guide the redesign brief.",
    },
    {
      number: "2",
      title: "New IA and design",
      body: "We redesign structure and visuals while planning URL and content carryover.",
    },
    {
      number: "3",
      title: "Rebuild and migrate",
      body: "Pages are redeveloped with modern performance and CMS patterns.",
    },
    {
      number: "4",
      title: "Relaunch with redirects",
      body: "SEO redirects and QA protect equity when the new experience goes live.",
    },
  ],
  performance: [
    {
      number: "1",
      title: "Measure baselines",
      body: "Lighthouse, PageSpeed, and field data establish where time is lost.",
    },
    {
      number: "2",
      title: "Prioritize fixes",
      body: "We rank opportunities by impact on Core Web Vitals and conversion.",
    },
    {
      number: "3",
      title: "Optimize delivery",
      body: "Caching, assets, code, and server settings are improved in controlled releases.",
    },
    {
      number: "4",
      title: "Retest and monitor",
      body: "Gains are verified and watched so regressions are caught early.",
    },
  ],
  accessibility: [
    {
      number: "1",
      title: "Accessibility audit",
      body: "We review key templates and journeys against WCAG-oriented criteria.",
    },
    {
      number: "2",
      title: "Remediation plan",
      body: "Issues are prioritized by severity and user impact.",
    },
    {
      number: "3",
      title: "Implement fixes",
      body: "Markup, contrast, focus, and media alternatives are improved in code and content.",
    },
    {
      number: "4",
      title: "Retest and train",
      body: "We recheck flows and share practices so future edits stay inclusive.",
    },
  ],
  security: [
    {
      number: "1",
      title: "Security review",
      body: "Hosting, CMS, plugins, users, and headers are assessed for exposure.",
    },
    {
      number: "2",
      title: "Hardening plan",
      body: "We prioritize patches, access controls, and defensive controls for your stack.",
    },
    {
      number: "3",
      title: "Apply protections",
      body: "Updates, WAF rules, SSL, and backup improvements are implemented carefully.",
    },
    {
      number: "4",
      title: "Monitor and maintain",
      body: "Ongoing scanning and patch cadence keep defenses current.",
    },
  ],
  maintenance: [
    {
      number: "1",
      title: "Onboard and baseline",
      body: "We inventory your stack, access, backups, and current health risks.",
    },
    {
      number: "2",
      title: "Set the care cadence",
      body: "Update, monitoring, and reporting schedules match your site risk and traffic.",
    },
    {
      number: "3",
      title: "Operate and improve",
      body: "Updates, fixes, and small enhancements ship through a clear request workflow.",
    },
    {
      number: "4",
      title: "Report and advise",
      body: "You get visibility on health and recommendations as the business grows.",
    },
  ],
};

function faqsFor(d) {
  return [
    {
      question: `What is included in ${d.title} from Saqrih?`,
      answer: `${d.title} covers discovery, UX and visual design, development, QA, and launch support. Scope is aligned to your goals in Qatar and documented before build starts.`,
    },
    {
      question: `How long does ${d.title.toLowerCase()} take?`,
      answer: `Timelines depend on pages, content readiness, and integrations. Many focused projects ship in a few weeks, while larger multilingual or custom builds take longer. You receive a milestone plan in the proposal.`,
    },
    {
      question: "Will the website work well on mobile?",
      answer:
        "Yes. Every Saqrih website project is built mobile-first and tested across phones, tablets, and desktops, which matters for audiences in Doha who often browse on smartphones.",
    },
    {
      question: `Do you handle SEO as part of ${d.title.toLowerCase()}?`,
      answer:
        "Technical SEO foundations are included: clean structure, metadata, performance, and crawl-friendly markup. Ongoing SEO programs can be added after launch if you want continuous growth work.",
    },
    {
      question: "Can you work with our existing branding and content?",
      answer:
        "Absolutely. We can use your brand guidelines and existing copy, or help refine messaging and content structure so the site is clearer and easier to maintain.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. Maintenance and support options cover updates, monitoring, backups, and small improvements so your site stays secure and current after go-live.",
    },
  ];
}

function metaDesc(d) {
  const raw = `${d.title} in Qatar from Saqrih. ${d.shortDesc} Built for performance, SEO, and growth in Doha.`;
  return raw.length > 158 ? raw.slice(0, 155) + "..." : raw;
}

const pages = defs.map((d) => {
  const page = {
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
      intro: `Saqrih delivers ${d.title.toLowerCase()} as part of our Website Development practice in Qatar. ${d.shortDesc} We combine strategy, design, and engineering so your site looks sharp and performs in market.`,
      rightTitle: `${d.title} engineered for clarity, speed, and measurable outcomes`,
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
      body: `Tools and platforms we use for ${d.title.toLowerCase()}, spanning CMS, frontend, backend, hosting, performance, and security.`,
    },
  };
  if (d.examples) page.examples = d.examples;
  return page;
});

const target = path.join(
  "lib",
  "services",
  "websiteDevelopmentSubPages.js"
);

const out = `/**
 * Retained-style sub-page content for /services/website-design/[slug].
 * Unique SEO copy per sub-service for Saqrih (Qatar).
 */

export const WEBSITE_DEV_PARENT = {
  path: "/services/website-design",
  title: "Website Development",
};

export const WEBSITE_DEV_SUB_PAGES = ${JSON.stringify(pages, null, 2)};

export function getWebsiteDevSubPage(slug) {
  return WEBSITE_DEV_SUB_PAGES.find((s) => s.slug === slug) ?? null;
}

export function getAllWebsiteDevSubPageSlugs() {
  return WEBSITE_DEV_SUB_PAGES.map((s) => s.slug);
}

export function getWebsiteDevSiblingCards(currentSlug) {
  const others = WEBSITE_DEV_SUB_PAGES.filter((s) => s.slug !== currentSlug).slice(
    0,
    8
  );
  return others.map((s, i) => ({
    id: s.slug,
    title: s.title,
    desc: s.shortDesc,
    href: \`\${WEBSITE_DEV_PARENT.path}/\${s.slug}\`,
    ...(i === 0
      ? { isHero: true, eyebrow: "More website development services" }
      : {}),
  }));
}
`;

fs.writeFileSync(target, out);
console.log("wrote", pages.length, "to", target);
