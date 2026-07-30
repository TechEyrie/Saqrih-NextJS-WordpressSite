/**
 * Homepage technology stack: union of tools from all /services/* hub pages.
 */

import { WDH_TECH_CATEGORIES } from "./websiteDevelopmentHome";
import { WAD_TECH_CATEGORIES } from "./webApplicationDevelopmentHome";
import { SAAS_TECH_CATEGORIES } from "./saasDevelopmentHome";
import { ECOM_TECH_CATEGORIES } from "./ecommerceDevelopmentHome";
import { MOBILE_HOME_TECH_CATEGORIES } from "./mobileAppDevelopmentHome";
import { CMS_HOME_TECH_CATEGORIES } from "./cmsHeadlessDevelopmentHome";
import { API_HOME_TECH_CATEGORIES } from "./apiIntegrationDevelopmentHome";
import { WSM_HOME_TECH_CATEGORIES } from "./websiteSupportMaintenanceHome";
import { WP_HOME_TECH_CATEGORIES } from "./wordpressDevelopmentTech";

/** Canonical homepage category order + metadata when merging. */
const GROUP_META = {
  cms: {
    id: "cms",
    label: "CMS",
    title: "CMS & Content Platforms",
    blurb:
      "Traditional, headless, enterprise, and visual CMS platforms editors can run and engineers can scale.",
    usedFor: "Corporate sites, publishing, multi-channel content",
    icon: "cms",
  },
  ecommerce: {
    id: "ecommerce",
    label: "Commerce",
    title: "E-commerce Platforms",
    blurb:
      "Store platforms chosen for catalog size, customization needs, and growth plans.",
    usedFor: "Online stores, marketplaces, checkout",
    icon: "layers",
  },
  frontend: {
    id: "frontend",
    label: "Frontend",
    title: "Frontend Technologies",
    blurb:
      "Interfaces that feel instant: modern frameworks, component systems, and design-ready styling.",
    usedFor: "Marketing sites, apps, design systems, PWAs",
    icon: "monitor",
  },
  mobile: {
    id: "mobile",
    label: "Mobile",
    title: "Mobile App Technologies",
    blurb:
      "Cross-platform and native-feeling stacks for iOS and Android products.",
    usedFor: "MVPs, product apps, companion mobile experiences",
    icon: "phone",
  },
  backend: {
    id: "backend",
    label: "Backend",
    title: "Backend Technologies",
    blurb:
      "APIs and services built for reliability, clean architecture, and room to grow.",
    usedFor: "Custom APIs, CMS backends, SaaS services",
    icon: "server",
  },
  databases: {
    id: "databases",
    label: "Data",
    title: "Databases",
    blurb:
      "Reliable data layers for products, catalogs, tenants, and analytics.",
    usedFor: "Apps, stores, SaaS, reporting",
    icon: "db",
  },
  auth: {
    id: "auth",
    label: "Auth",
    title: "Authentication & Security",
    blurb:
      "Secure access for teams and customers: OAuth, SSO, MFA, RBAC, and hardened patterns.",
    usedFor: "Login, roles, enterprise access",
    icon: "shield",
  },
  apis: {
    id: "apis",
    label: "APIs",
    title: "APIs & Integrations",
    blurb:
      "REST, GraphQL, webhooks, and connectors that keep your stack synchronized.",
    usedFor: "Partner APIs, product integrations, event sync",
    icon: "layers",
  },
  payments: {
    id: "payments",
    label: "Payments",
    title: "Payments & Billing",
    blurb:
      "Qatar-first and GCC/MENA gateways (QPAY, Mada, KNET, BENEFIT) plus global cards, wallets, and BNPL.",
    usedFor: "Checkout, local schemes, subscriptions, BNPL",
    icon: "layers",
  },
  shipping: {
    id: "shipping",
    label: "Fulfillment",
    title: "Shipping & Fulfillment",
    blurb: "Carrier and fulfillment connections that keep orders moving.",
    usedFor: "Rates, labels, tracking, warehouses",
    icon: "cloud",
  },
  erp: {
    id: "erp",
    label: "ERP/CRM",
    title: "ERP & CRM Integrations",
    blurb:
      "Connect products to sales, inventory, finance, and support systems.",
    usedFor: "Orders, inventory, CRM sync",
    icon: "layers",
  },
  maps: {
    id: "maps",
    label: "Maps",
    title: "Maps & Location",
    blurb: "Location services for booking, logistics, and field apps.",
    usedFor: "Maps, GPS, geofencing",
    icon: "search",
  },
  notify: {
    id: "notify",
    label: "Engage",
    title: "Notifications & Analytics",
    blurb: "Push, messaging, and product analytics that drive retention.",
    usedFor: "Push, FCM, product analytics",
    icon: "bolt",
  },
  cloud: {
    id: "cloud",
    label: "Cloud",
    title: "Cloud, Hosting & Deployment",
    blurb:
      "Hosting, edge delivery, and release pipelines tuned for uptime and scale.",
    usedFor: "Production hosting, CDN, CI/CD",
    icon: "cloud",
  },
  devops: {
    id: "devops",
    label: "DevOps",
    title: "DevOps & Version Control",
    blurb: "Git workflows and pipelines that keep releases predictable.",
    usedFor: "Source control, CI/CD, collaboration",
    icon: "layers",
  },
  qa: {
    id: "qa",
    label: "QA & Perf",
    title: "QA, Performance & Monitoring",
    blurb:
      "Testing, Core Web Vitals, and monitoring that protect quality after launch.",
    usedFor: "Automated tests, speed audits, uptime",
    icon: "search",
  },
  security: {
    id: "security",
    label: "Hardening",
    title: "Security Hardening",
    blurb:
      "SSL, WAF, malware scanning, backups, and hardening for production sites.",
    usedFor: "Maintenance, threat protection, recovery",
    icon: "shield",
  },
};

const GROUP_ORDER = Object.keys(GROUP_META);

/** Homepage-only: hide these practice areas (still available on service hubs). */
const HOMEPAGE_EXCLUDED_GROUPS = new Set([
  "auth",
  "apis",
  "shipping",
  "maps",
  "notify",
  "devops",
  "qa",
  "security",
]);

function resolveGroupId(cat) {
  const id = cat.id || "";
  const title = (cat.title || "").toLowerCase();
  const label = (cat.label || "").toLowerCase();

  if (id === "cross" || id === "languages" || title.includes("cross-platform") || title.includes("mobile language")) {
    return "mobile";
  }
  if (id === "maps" || title.includes("maps") || title.includes("location")) return "maps";
  if (id === "notify" || title.includes("notification") || title.includes("analytics")) return "notify";
  if (id === "shipping" || title.includes("shipping") || title.includes("fulfillment")) return "shipping";
  if (
    id === "erp" ||
    (id === "enterprise" && title.includes("business")) ||
    title.includes("erp") ||
    title.includes("crm integration")
  ) {
    return "erp";
  }
  if (
    id === "enterprise" &&
    (title.includes("cms") || title.includes("experience"))
  ) {
    return "cms";
  }
  if (
    id === "cms" ||
    id === "traditional" ||
    id === "headless" ||
    id === "builders" ||
    title.includes("cms") ||
    title.includes("builder")
  ) {
    return "cms";
  }
  if (id === "ecommerce" || id === "platforms" || title.includes("e-commerce") || title.includes("commerce platform")) {
    return "ecommerce";
  }
  if (id === "frontend" || id === "styling" || title.includes("frontend") || title.includes("styling")) {
    return "frontend";
  }
  if (id === "backend" || title.includes("backend")) return "backend";
  if (id === "databases" || title.includes("database")) return "databases";
  if (id === "auth" || (title.includes("authentication") && !title.includes("hardening"))) return "auth";
  if (id === "api-tech" || id === "apis" || title.includes("api")) return "apis";
  if (id === "payments" || title.includes("payment") || title.includes("subscription") || title.includes("billing")) {
    return "payments";
  }
  if (id === "cloud" || id === "hosting" || id === "deployment" || title.includes("cloud") || title.includes("hosting") || title.includes("deployment")) {
    return "cloud";
  }
  if (id === "devops" || id === "deploy" || id === "devtools" || title.includes("devops") || title.includes("version control") || title.includes("postman")) {
    return "devops";
  }
  if (
    id === "qa" ||
    id === "monitoring" ||
    id === "performance" ||
    title.includes("testing") ||
    title.includes("quality") ||
    title.includes("monitoring") ||
    title.includes("performance") ||
    title.includes("seo")
  ) {
    return "qa";
  }
  if (id === "security" || label === "security" || title === "security") return "security";
  return "apis";
}

function mergeTools(lists) {
  const seen = new Map();
  for (const tools of lists) {
    for (const tool of tools || []) {
      const key = String(tool.name || "").trim().toLowerCase();
      if (!key || seen.has(key)) continue;
      seen.set(key, { name: tool.name, tip: tool.tip || "" });
    }
  }
  return Array.from(seen.values());
}

/**
 * Homepage-only: always hide these tools (keep them on service hubs).
 */
const HOMEPAGE_EXCLUDED_TOOLS = new Set([
  "typescript",
  "astro",
  "strapi",
  "sanity",
  "webhooks",
  "memcached",
  "myfatoorah",
  "paddle",
]);

/** Homepage-only tools injected into a category after merge/prune. */
const HOMEPAGE_EXTRA_TOOLS = {
  payments: [
    { name: "Web3", tip: "Wallets, smart contracts & on-chain payments" },
  ],
};

/**
 * Homepage-only: keep platforms/frameworks, drop implied languages,
 * plugins, and nested tooling (e.g. WordPress → no Elementor/ACF;
 * Laravel → no PHP; Django/Flask → no Python).
 */
const HOMEPAGE_PRUNE_RULES = [
  {
    whenAny: ["wordpress"],
    remove: [
      "wordpress multisite",
      "gutenberg / block editor",
      "gutenberg custom blocks",
      "wp-cli",
      "bedrock",
      "roots sage",
      "advanced custom fields (acf)",
      "acf",
      "custom post types & taxonomies",
      "custom php themes",
      "block theme / fse",
      "elementor",
      "divi",
      "timber / twig",
      "generatepress / kadence",
      "woocommerce hpos",
      "woocommerce subscriptions",
      "faust.js",
      "wordpress rest api",
      "wpgraphql",
      "php 8.x",
      "composer",
      "query monitor",
      "redis object cache",
      "wp rocket",
      "litespeed cache",
      "cloudflare apo",
      "yoast seo",
      "rank math",
      "wordfence",
      "sucuri",
      "local wp / laravel valet",
      "deployhq / buddy",
      "phpunit / playwright",
      "litespeed / openlitespeed",
      "runcloud / gridpane",
      "wp engine",
      "kinsta",
      "cloudways",
    ],
  },
  {
    whenAny: ["woocommerce"],
    remove: ["woocommerce hpos", "woocommerce subscriptions"],
  },
  {
    whenAny: ["laravel"],
    remove: ["php", "php 8.x", "composer"],
  },
  {
    whenAny: ["django", "flask"],
    remove: ["python"],
  },
  {
    whenAny: ["nestjs", "express.js", "express"],
    remove: ["node.js"],
  },
  {
    whenAny: ["flutter"],
    remove: ["dart"],
  },
  {
    whenAny: [
      "react",
      "react native",
      "next.js",
      "vue.js",
      "svelte",
      "angular",
    ],
    remove: [
      "javascript",
      "javascript / typescript",
      "typescript",
      "html5",
      "html5 / css3",
      "css3",
    ],
  },
];

function toolKey(name) {
  return String(name || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function hasToolMatch(keys, needle) {
  const n = toolKey(needle);
  return keys.some(
    (k) =>
      k === n ||
      k.startsWith(`${n} `) ||
      k.startsWith(`${n}/`) ||
      k.startsWith(`${n}.`)
  );
}

function pruneRedundantHomepageTools(tools, parentKeys = null) {
  const keys = tools.map((t) => toolKey(t.name));
  const parents = parentKeys || keys;
  const drop = new Set();

  for (const key of keys) {
    if (HOMEPAGE_EXCLUDED_TOOLS.has(key)) drop.add(key);
  }

  for (const rule of HOMEPAGE_PRUNE_RULES) {
    const parentPresent = rule.whenAny.some((parent) =>
      hasToolMatch(parents, parent)
    );
    if (!parentPresent) continue;
    for (const child of rule.remove) {
      const childKey = toolKey(child);
      for (const key of keys) {
        if (
          key === childKey ||
          key.startsWith(`${childKey} `) ||
          key.startsWith(`${childKey}/`) ||
          key.startsWith(`${childKey}.`)
        ) {
          drop.add(key);
        }
      }
    }
  }

  return tools.filter((t) => !drop.has(toolKey(t.name)));
}

function buildCombinedCategories() {
  const buckets = Object.fromEntries(GROUP_ORDER.map((id) => [id, []]));

  const sources = [
    WDH_TECH_CATEGORIES,
    WAD_TECH_CATEGORIES,
    SAAS_TECH_CATEGORIES,
    ECOM_TECH_CATEGORIES,
    MOBILE_HOME_TECH_CATEGORIES,
    CMS_HOME_TECH_CATEGORIES,
    API_HOME_TECH_CATEGORIES,
    WSM_HOME_TECH_CATEGORIES,
    WP_HOME_TECH_CATEGORIES,
  ];

  for (const cats of sources) {
    for (const cat of cats) {
      const groupId = resolveGroupId(cat);
      if (!buckets[groupId]) buckets[groupId] = [];
      buckets[groupId].push(cat.tools || []);
    }
  }

  const merged = GROUP_ORDER.map((id) => {
    if (HOMEPAGE_EXCLUDED_GROUPS.has(id)) return null;
    const meta = GROUP_META[id];
    const tools = mergeTools(buckets[id] || []);
    if (!tools.length) return null;
    return { ...meta, tools };
  }).filter(Boolean);

  const globalKeys = merged.flatMap((c) => c.tools.map((t) => toolKey(t.name)));

  return merged
    .map((cat) => {
      const extras = HOMEPAGE_EXTRA_TOOLS[cat.id] || [];
      const tools = pruneRedundantHomepageTools(cat.tools, globalKeys);
      const mergedTools = mergeTools([tools, extras]);
      return { ...cat, tools: mergedTools };
    })
    .filter((cat) => cat.tools.length);
}

export const HOMEPAGE_TECH_CATEGORIES = buildCombinedCategories();

export const HOMEPAGE_TECH_STATS = [
  {
    value: String(
      new Set(
        HOMEPAGE_TECH_CATEGORIES.flatMap((c) =>
          c.tools.map((t) => t.name.toLowerCase())
        )
      ).size
    ) + "+",
    label: "Technologies in play",
  },
  { value: String(HOMEPAGE_TECH_CATEGORIES.length), label: "Practice areas" },
  { value: "9", label: "Service stacks combined" },
];

export const HOMEPAGE_TECH_CAPABILITIES = [
  {
    title: "Full-stack coverage",
    desc: "Web, WordPress, commerce, mobile, SaaS, CMS, APIs, and ongoing care in one toolkit.",
    icon: "layers",
  },
  {
    title: "Performance-first",
    desc: "Core Web Vitals, caching, CDN, and QA patterns that protect UX.",
    icon: "bolt",
  },
  {
    title: "Secure by default",
    desc: "Auth, SSO, hardening, backups, and monitoring built into delivery.",
    icon: "shield",
  },
  {
    title: "Integration ready",
    desc: "Payments, ERP/CRM, maps, push, and third-party APIs wired cleanly.",
    icon: "search",
  },
];

export const HOMEPAGE_TECH_MARQUEE = (() => {
  const preferred = [
    "WordPress",
    "SADAD",
    "Dibsy",
    "Tap Payments",
    "PayTabs",
    "HyperPay",
    "Moyasar",
    "Shopify",
    "React",
    "Next.js",
    "Flutter",
    "React Native",
    "NestJS",
    "Laravel",
    "Django",
    "PostgreSQL",
    "Stripe",
    "Contentful",
    "GraphQL",
    "Web3",
    "AWS",
    "Docker",
    "Cloudflare",
    "Firebase",
    "Salesforce",
    "Tabby",
    "Core Web Vitals",
  ];
  const allNames = HOMEPAGE_TECH_CATEGORIES.flatMap((c) =>
    c.tools.map((t) => t.name)
  );
  const byLower = new Map(allNames.map((n) => [n.toLowerCase(), n]));
  const picked = [];
  const used = new Set();
  for (const name of preferred) {
    const real = byLower.get(name.toLowerCase());
    if (real && !used.has(real.toLowerCase())) {
      picked.push(real);
      used.add(real.toLowerCase());
    }
  }
  for (const name of allNames) {
    if (picked.length >= 28) break;
    if (!used.has(name.toLowerCase())) {
      picked.push(name);
      used.add(name.toLowerCase());
    }
  }
  return picked;
})();

export const HOMEPAGE_TECH_COPY = {
  eyebrow: "Technologies we use",
  headingLine1: "Technology Stack &",
  headingLine2: "Full Delivery Expertise",
  body: "A combined toolkit from our website, WordPress, web app, SaaS, e-commerce, mobile, CMS, API, and maintenance practices, including Qatar-first and GCC payment gateways, chosen to ship products that last.",
};
