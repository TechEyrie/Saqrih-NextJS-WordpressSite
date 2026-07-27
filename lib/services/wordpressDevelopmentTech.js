/**
 * Shared WordPress tech stack for hub + /services/wordpress-development/[slug] subpages.
 */

import { MENA_PAYMENT_TOOLS, GLOBAL_PAYMENT_TOOLS } from "./menaPaymentTools";
/** Hardcore WordPress engineering stack */
export const WP_HOME_TECH_CATEGORIES = [
  {
    id: "cms",
    label: "Core",
    title: "WordPress Core & Architecture",
    blurb:
      "Production WordPress engineered for scale: modern PHP, Multisite, Composer-based installs, and maintainable theme/plugin architecture.",
    usedFor: "Custom WP builds, Multisite, agency platforms",
    icon: "cms",
    tools: [
      { name: "WordPress", tip: "Core CMS & application layer" },
      { name: "WordPress Multisite", tip: "Networked site fleets" },
      { name: "Gutenberg / Block Editor", tip: "Native block content" },
      { name: "WP-CLI", tip: "Scripted site operations" },
      { name: "Bedrock", tip: "Composer-based WP structure" },
      { name: "Roots Sage", tip: "Modern theme starter" },
      { name: "Advanced Custom Fields (ACF)", tip: "Structured field models" },
      { name: "Custom Post Types & Taxonomies", tip: "Domain content models" },
    ],
  },
  {
    id: "builders",
    label: "Builders",
    title: "Themes, Builders & Blocks",
    blurb:
      "When marketing needs speed without wrecking performance: controlled builders, custom blocks, and theme systems that stay maintainable.",
    usedFor: "Marketing sites, landing programs, brand systems",
    icon: "monitor",
    tools: [
      { name: "Custom PHP Themes", tip: "Hand-built theme systems" },
      { name: "Block Theme / FSE", tip: "Full Site Editing themes" },
      { name: "Elementor", tip: "Visual page building" },
      { name: "Divi", tip: "Theme builder workflows" },
      { name: "Gutenberg Custom Blocks", tip: "Reusable native blocks" },
      { name: "Timber / Twig", tip: "Cleaner theme templating" },
      { name: "GeneratePress / Kadence", tip: "Lean theme frameworks" },
    ],
  },
  {
    id: "ecommerce",
    label: "Commerce",
    title: "WooCommerce Platform",
    blurb:
      "WooCommerce commerce with modern order storage and subscription-ready catalog patterns.",
    usedFor: "Stores, subscriptions, B2B catalogs",
    icon: "layers",
    tools: [
      { name: "WooCommerce", tip: "WordPress commerce engine" },
      { name: "WooCommerce HPOS", tip: "High-performance order storage" },
      { name: "WooCommerce Subscriptions", tip: "Recurring revenue" },
    ],
  },
  {
    id: "payments",
    label: "Payments",
    title: "Payment Gateways",
    blurb:
      "Qatar-first and GCC/MENA checkout rails for WooCommerce, plus global cards and wallets.",
    usedFor: "Checkout, QPAY, Mada, KNET, BNPL, wallets",
    icon: "layers",
    tools: [...MENA_PAYMENT_TOOLS, ...GLOBAL_PAYMENT_TOOLS],
  },
  {
    id: "frontend",
    label: "Frontend",
    title: "Frontend & Headless WordPress",
    blurb:
      "Classic PHP themes when that fits, or headless WordPress with modern React/Next frontends when performance and multi-channel delivery matter.",
    usedFor: "Marketing sites, headless WP, PWAs",
    icon: "monitor",
    tools: [
      { name: "HTML5 / CSS3", tip: "Semantic, responsive markup" },
      { name: "JavaScript / TypeScript", tip: "Interactive UX & blocks" },
      { name: "React", tip: "Block & app UIs" },
      { name: "Next.js", tip: "SSR/SSG headless frontends" },
      { name: "Faust.js", tip: "Headless WordPress toolkit" },
      { name: "Tailwind CSS", tip: "Utility-first styling" },
      { name: "Sass / SCSS", tip: "Theme style systems" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    title: "PHP, APIs & Integrations",
    blurb:
      "Hard PHP craft plus REST/GraphQL APIs that connect WordPress to CRMs, ERPs, marketing tools, and custom products.",
    usedFor: "Plugins, APIs, CRM/ERP sync, custom logic",
    icon: "server",
    tools: [
      { name: "PHP 8.x", tip: "Modern WordPress runtime" },
      { name: "Composer", tip: "Dependency management" },
      { name: "WordPress REST API", tip: "Native HTTP APIs" },
      { name: "WPGraphQL", tip: "GraphQL for WordPress" },
      { name: "Laravel", tip: "Companion PHP services" },
      { name: "Node.js", tip: "Middleware & automation" },
      { name: "Webhooks", tip: "Event-driven sync" },
    ],
  },
  {
    id: "databases",
    label: "Data",
    title: "Databases & Object Cache",
    blurb:
      "MySQL/MariaDB tuned for WordPress query patterns, with Redis object caching so dynamic sites stay fast under load.",
    usedFor: "Production DBs, object cache, query tuning",
    icon: "db",
    tools: [
      { name: "MySQL", tip: "Primary WordPress database" },
      { name: "MariaDB", tip: "High-performance MySQL fork" },
      { name: "Redis Object Cache", tip: "Persistent object caching" },
      { name: "Memcached", tip: "Distributed cache layer" },
      { name: "Query Monitor", tip: "Query & hook diagnostics" },
    ],
  },
  {
    id: "cloud",
    label: "Hosting",
    title: "Managed Hosting & Cloud",
    blurb:
      "Ultra-fast, secure WordPress hosting: managed WP platforms, cloud VMs, CDN, and edge security for production reliability.",
    usedFor: "Production hosting, CDN, managed WP fleets",
    icon: "cloud",
    tools: [
      { name: "WP Engine", tip: "Managed WordPress hosting" },
      { name: "Kinsta", tip: "Google Cloud WP hosting" },
      { name: "Cloudways", tip: "Managed cloud WordPress" },
      { name: "AWS", tip: "Custom WP infrastructure" },
      { name: "DigitalOcean", tip: "Predictable cloud VMs" },
      { name: "Cloudflare", tip: "CDN, DNS & WAF" },
      { name: "LiteSpeed / OpenLiteSpeed", tip: "Server-level WP speed" },
      { name: "RunCloud / GridPane", tip: "Server control for WP fleets" },
    ],
  },
  {
    id: "qa",
    label: "Perf",
    title: "Performance, Caching & SEO",
    blurb:
      "We treat speed and discoverability as product features: page cache, asset pipelines, Core Web Vitals, and SEO tooling in the WordPress stack.",
    usedFor: "Speed programs, CWV, technical SEO",
    icon: "search",
    tools: [
      { name: "WP Rocket", tip: "Page & asset caching" },
      { name: "LiteSpeed Cache", tip: "Server-aware WP cache" },
      { name: "Cloudflare APO", tip: "Edge WordPress caching" },
      { name: "Core Web Vitals", tip: "UX performance signals" },
      { name: "Google Lighthouse", tip: "Quality & speed audits" },
      { name: "Yoast SEO", tip: "On-page SEO structure" },
      { name: "Rank Math", tip: "Schema & SEO workflows" },
      { name: "New Relic / APM", tip: "Runtime performance insight" },
    ],
  },
  {
    id: "security",
    label: "Security",
    title: "WordPress Security & Compliance",
    blurb:
      "Layered WordPress protection: WAF, malware scanning, least-privilege hardening, backups, and compliance patterns for ADA, GDPR, and PCI-minded builds.",
    usedFor: "Hardening, incident response, compliance",
    icon: "shield",
    tools: [
      { name: "Wordfence", tip: "Firewall & malware scan" },
      { name: "Sucuri", tip: "WAF & cleanup" },
      { name: "Cloudflare WAF", tip: "Edge threat blocking" },
      { name: "SSL / TLS", tip: "HTTPS & trust" },
      { name: "2FA / Least Privilege", tip: "Access hardening" },
      { name: "Automated Backups", tip: "Restore-ready copies" },
      { name: "Fail2Ban / SSH Hardening", tip: "Server intrusion control" },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    title: "Local Dev, Git & Deployment",
    blurb:
      "Disciplined WordPress delivery: local environments, Git workflows, Composer packages, and CI/CD so updates ship safely.",
    usedFor: "Safe deploys, reviews, multi-env WP",
    icon: "layers",
    tools: [
      { name: "Local WP / Laravel Valet", tip: "Local development" },
      { name: "Docker", tip: "Containerized WP stacks" },
      { name: "Git / GitHub", tip: "Source control & PRs" },
      { name: "GitHub Actions", tip: "CI/CD for WordPress" },
      { name: "DeployHQ / Buddy", tip: "Theme & plugin deploys" },
      { name: "Composer", tip: "Managed PHP packages" },
      { name: "PHPUnit / Playwright", tip: "Automated quality gates" },
    ],
  },
];

export const WP_HOME_TECH_STATS = [
  { value: "11", label: "Practice areas" },
  { value: "80+", label: "WP tools & platforms" },
  { value: "Hard", label: "Core engineering" },
];

export const WP_HOME_TECH_CAPABILITIES = [
  {
    title: "Core WordPress craft",
    desc: "Themes, plugins, Multisite, Gutenberg, and Composer-based architecture.",
    icon: "cms",
  },
  {
    title: "Commerce & headless",
    desc: "WooCommerce depth plus REST/GraphQL and Next.js frontends when needed.",
    icon: "layers",
  },
  {
    title: "Speed & security",
    desc: "Caching, Core Web Vitals, WAF, scanning, and restore-ready backups.",
    icon: "shield",
  },
  {
    title: "Release discipline",
    desc: "Git, Docker, CI/CD, and staging so WordPress updates ship safely.",
    icon: "search",
  },
];

export const WP_HOME_TECH_MARQUEE = [
  "WordPress",
  "WooCommerce",
  "SADAD",
  "Dibsy",
  "Tap Payments",
  "MyFatoorah",
  "PayTabs",
  "ACF",
  "Gutenberg",
  "Elementor",
  "WPGraphQL",
  "Next.js",
  "PHP 8",
  "Redis",
  "WP Engine",
  "Cloudflare",
  "Wordfence",
  "Core Web Vitals",
];

export const WP_HOME_TECH_COPY = {
  eyebrow: "Our WordPress arsenal",
  headingLine1: "Technology Stack &",
  headingLine2: "WordPress Engineering",
  body: "A hardcore WordPress stack: core architecture, builders, WooCommerce, headless frontends, hosting, caching, security, and DevOps chosen to ship sites that last.",
};
