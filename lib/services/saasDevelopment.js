/**
 * SaaS Development — hub meta, tech stack, sub-services, FAQs.
 * Content adapted/rephrased for Saqrih (Qatar) from SaaS product-dev themes.
 */

export const SAAS_DEVELOPMENT = {
  slug: "saas-development",
  path: "/services1/saas-development",
  title: "SaaS Development",
  heroTitleLines: ["SaaS", "Development"],
  heroLead:
    "Turn your software idea into a profitable product. From MVP to scale, Saqrih builds SaaS applications that users love and businesses rely on.",
  description:
    "SaaS development company in Qatar—Saqrih designs and builds multi-tenant SaaS products with scalable architecture, subscription billing, secure auth, and API-first systems.",
  serviceType: "SaaS development",
};

export const SAAS_INTRO = {
  badgeValue: "MVP+",
  badgeLabel: "Product to scale",
  heading:
    "SaaS Development Company in Qatar—Build Products Users Rely On",
  paragraphs: [
    "Building a SaaS product is a serious investment. You need a partner who understands code and product strategy, user experience, and the realities of running subscription software. Saqrih helps founders and teams in Doha and beyond ship SaaS platforms from focused MVPs to multi-tenant systems ready to grow.",
    "We combine product thinking with solid engineering—scalable architecture, clean APIs, billing integrations, and admin tooling—so your software business can launch faster, learn from real users, and scale without a full rewrite.",
  ],
};

export const SAAS_WHY_CHOOSE = {
  eyebrow: "Built for product teams",
  heading: "Why Choose Saqrih for SaaS Development in Doha",
  body: "We build SaaS with the same discipline as a product company—ruthless prioritization for MVP, architecture that scales, and systems for billing, roles, and operations.",
  features: [
    {
      title: "MVP Without Waste",
      desc: "Validate scope early. Ship the core product first, learn from users, then expand—without burning runway on the wrong features.",
      icon: "award",
    },
    {
      title: "Architecture That Scales",
      desc: "Infrastructure and data models designed for 100 users or 100,000—without forcing a complete rewrite later.",
      icon: "chart",
    },
    {
      title: "Multi-Tenant Done Right",
      desc: "Proper customer isolation with efficient shared infrastructure—secure, manageable, and cost-aware.",
      icon: "client",
    },
    {
      title: "Billing & Access Built In",
      desc: "Subscription flows, trials, roles, and auth patterns that make SaaS operable from day one.",
      icon: "code",
    },
  ],
};

export const SAAS_METHODOLOGY = {
  eyebrow: "What we build into the system",
  heading: "SaaS Capabilities That Make the Business Run Better",
  intro:
    "From first release to growth stage—the product layers that turn an idea into a reliable software business.",
  steps: [
    {
      num: "01",
      title: "MVP Development",
      desc: "A focused first version that tests your idea in market—without building everything at once.",
      icon: "discover",
    },
    {
      num: "02",
      title: "Scalable Architecture",
      desc: "Infrastructure and code structure that grow with demand, teams, and feature velocity.",
      icon: "design",
    },
    {
      num: "03",
      title: "Multi-Tenant & Billing",
      desc: "Tenant isolation, subscriptions, trials, and payment integrations that keep revenue flowing.",
      icon: "develop",
    },
    {
      num: "04",
      title: "APIs & Admin Systems",
      desc: "API-first design plus dashboards for users, analytics, and support—so operations stay clear.",
      icon: "launch",
    },
  ],
};

export const SAAS_EDGE = {
  eyebrow: "Our edge",
  heading: "SaaS Product Partners in Qatar",
  headingLine2: "Strategy Plus Execution",
  body: "Founders validating an MVP, teams shipping multi-user products, and software businesses that need product thinking with delivery—Saqrih covers the full path.",
};

export const SAAS_PROCESS = {
  eyebrow: "How the build moves",
  heading: "Our SaaS Process—From Product Strategy to Scale",
  steps: [
    {
      num: "01",
      title: "Product Strategy",
      description:
        "Define MVP scope, target users, and differentiators—so engineering starts with a clear product bet.",
      tone: "forest",
      angle: 130,
      side: "left",
    },
    {
      num: "02",
      title: "UX & Design",
      description:
        "User flows, wireframes, and high-fidelity UI that guide development and keep adoption high.",
      tone: "lime",
      angle: 180,
      side: "left",
    },
    {
      num: "03",
      title: "MVP Build",
      description:
        "Core features first. Get to market, instrument learning, and avoid overbuilding early.",
      tone: "forest",
      angle: 230,
      side: "left",
    },
    {
      num: "04",
      title: "Launch & Iterate",
      description:
        "Deploy, gather feedback, and ship what users actually need—tight loops, measurable outcomes.",
      tone: "lime",
      angle: 310,
      side: "right",
    },
    {
      num: "05",
      title: "Scale & Grow",
      description:
        "Add features, strengthen performance, harden security, and grow the user base with confidence.",
      tone: "forest",
      angle: 0,
      side: "right",
    },
    {
      num: "06",
      title: "Operate & Support",
      description:
        "Monitoring, maintenance, and roadmap support so the product stays reliable as usage climbs.",
      tone: "lime",
      angle: 50,
      side: "right",
    },
  ],
};

export const SAAS_WHY_QATAR = {
  eyebrow: "Qatar’s product edge",
  headingLead: "Why Founders in Qatar",
  headingAccent: "Build SaaS With Saqrih",
  body: "Local partnership with global engineering standards—product strategy, modern stacks, and delivery that gets you to market without wasting cycles.",
};

export const SAAS_TECH_CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    title: "Frontend",
    blurb:
      "Interfaces that feel fast and product-grade—component systems, typed apps, and responsive SaaS UX.",
    usedFor: "App UI, marketing shells, design systems",
    icon: "monitor",
    tools: [
      { name: "React", tip: "Component-driven product UI" },
      { name: "Next.js", tip: "SSR/SSG SaaS frontends" },
      { name: "Vue.js", tip: "Lean reactive interfaces" },
      { name: "TypeScript", tip: "Safer product codebases" },
      { name: "JavaScript", tip: "Interactive application logic" },
      { name: "HTML5", tip: "Semantic, accessible structure" },
      { name: "CSS3", tip: "Responsive layout systems" },
      { name: "Tailwind CSS", tip: "Rapid, consistent UI" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    title: "Backend",
    blurb:
      "APIs and services built for multi-user products—auth, billing hooks, jobs, and clean domain logic.",
    usedFor: "APIs, workers, integrations, domain services",
    icon: "server",
    tools: [
      { name: "Node.js", tip: "High-throughput services" },
      { name: "Express.js", tip: "Lean HTTP APIs" },
      { name: "NestJS", tip: "Structured Node backends" },
      { name: "PHP", tip: "Mature application backends" },
      { name: "Laravel", tip: "Rapid PHP product APIs" },
      { name: "Python", tip: "Services & automation" },
      { name: "Django", tip: "Batteries-included web apps" },
    ],
  },
  {
    id: "databases",
    label: "Data",
    title: "Databases",
    blurb:
      "Data layers chosen for reliability and growth—relational, document, and managed cloud options.",
    usedFor: "Tenants, billing records, analytics stores",
    icon: "db",
    tools: [
      { name: "PostgreSQL", tip: "Robust relational core" },
      { name: "MySQL", tip: "Proven transactional data" },
      { name: "MongoDB", tip: "Flexible document models" },
      { name: "Microsoft SQL Server", tip: "Enterprise SQL workloads" },
      { name: "Firebase", tip: "Realtime & managed backend" },
    ],
  },
  {
    id: "auth",
    label: "Auth",
    title: "Authentication & Security",
    blurb:
      "Identity and access patterns that protect tenant data—OAuth, JWT, SSO, MFA, and RBAC.",
    usedFor: "Login, roles, enterprise SSO, admin gates",
    icon: "shield",
    tools: [
      { name: "OAuth", tip: "Delegated sign-in flows" },
      { name: "JWT", tip: "Stateless API auth" },
      { name: "Single Sign-On (SSO)", tip: "Enterprise identity" },
      { name: "Multi-Factor Authentication (MFA)", tip: "Stronger account security" },
      { name: "Role-Based Access Control (RBAC)", tip: "Least-privilege permissions" },
    ],
  },
  {
    id: "payments",
    label: "Billing",
    title: "Payment & Subscription",
    blurb:
      "Subscription revenue plumbing—trials, plans, invoices, and payment providers your customers trust.",
    usedFor: "Plans, trials, usage billing, checkout",
    icon: "layers",
    tools: [
      { name: "Stripe", tip: "Subscriptions & payments" },
      { name: "PayPal", tip: "Global checkout options" },
      { name: "Paddle", tip: "Merchant-of-record billing" },
      { name: "Lemon Squeezy", tip: "SaaS payment platform" },
    ],
  },
];

export const SAAS_TECH_STATS = [
  { value: "5", label: "Core tech layers" },
  { value: "MVP→", label: "Scale path" },
  { value: "API", label: "First by design" },
];

export const SAAS_TECH_CAPABILITIES = [
  {
    title: "Multi-tenant ready",
    desc: "Isolation, tenancy models, and admin controls built in.",
    icon: "layers",
  },
  {
    title: "Subscription-ready",
    desc: "Billing integrations for plans, trials, and renewals.",
    icon: "bolt",
  },
  {
    title: "Secure by default",
    desc: "Auth, RBAC, and hardening patterns for product data.",
    icon: "shield",
  },
  {
    title: "API-first",
    desc: "Clean APIs for your app and third-party ecosystems.",
    icon: "search",
  },
];

export const SAAS_TECH_MARQUEE = [
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "MongoDB",
  "OAuth",
  "JWT",
  "Stripe",
  "Paddle",
  "TypeScript",
  "Laravel",
  "Django",
  "Firebase",
];

export const SAAS_TECH_COPY = {
  eyebrow: "Technologies we use",
  headingLine1: "Technology Stack &",
  headingLine2: "SaaS Engineering",
  body: "Modern frontend, backend, data, auth, and billing tools—chosen to ship MVPs fast and scale products safely.",
};

export const SAAS_DEVELOPMENT_SUB_SERVICES = [
  {
    slug: "custom-saas-development",
    title: "Custom SaaS Development",
    shortDesc:
      "Bespoke SaaS platforms tailored to your domain, users, and growth model.",
    heroLead:
      "Custom SaaS development from idea to production—architecture, UX, and engineering built around your product vision.",
    description:
      "Custom SaaS development from Saqrih—product-ready platforms engineered for your market and roadmap.",
  },
  {
    slug: "saas-mvp-development",
    title: "SaaS MVP Development",
    shortDesc:
      "Focused first versions that validate demand without overbuilding.",
    heroLead:
      "SaaS MVP development that gets you to market fast with core features users can actually try.",
    description:
      "SaaS MVP development from Saqrih—lean launches designed to learn, iterate, and grow.",
  },
  {
    slug: "multi-tenant-saas-development",
    title: "Multi-Tenant SaaS Development",
    shortDesc:
      "Secure tenant isolation with efficient shared infrastructure.",
    heroLead:
      "Multi-tenant SaaS development with proper isolation, scalability, and operational clarity.",
    description:
      "Multi-tenant SaaS development from Saqrih—secure customer separation without sacrificing efficiency.",
  },
  {
    slug: "saas-product-development",
    title: "SaaS Product Development",
    shortDesc:
      "End-to-end product builds spanning strategy, UX, and engineering.",
    heroLead:
      "Full SaaS product development—from strategy and design through build, launch, and iteration.",
    description:
      "SaaS product development from Saqrih—strategy plus execution for software businesses.",
  },
  {
    slug: "saas-platform-modernization",
    title: "SaaS Platform Modernization",
    shortDesc:
      "Upgrade legacy SaaS stacks for performance, security, and maintainability.",
    heroLead:
      "SaaS platform modernization that refreshes architecture, UX, and delivery without losing momentum.",
    description:
      "SaaS modernization from Saqrih—evolve aging platforms into scalable, maintainable products.",
  },
  {
    slug: "saas-ui-ux-development",
    title: "SaaS UI/UX Development",
    shortDesc:
      "Product interfaces that drive adoption, clarity, and retention.",
    heroLead:
      "SaaS UI/UX development focused on user flows, usability, and conversion inside the product.",
    description:
      "SaaS UI/UX development from Saqrih—interfaces users understand and keep using.",
  },
  {
    slug: "subscription-billing-integration",
    title: "Subscription & Billing Integration",
    shortDesc:
      "Stripe, Paddle, and more—plans, trials, and recurring revenue flows.",
    heroLead:
      "Subscription and billing integration that connects plans, payments, and customer lifecycle cleanly.",
    description:
      "SaaS billing integration from Saqrih—reliable subscription systems for growing products.",
  },
  {
    slug: "user-authentication-access-management",
    title: "User Authentication & Access Management",
    shortDesc:
      "OAuth, JWT, SSO, MFA, and RBAC for secure multi-user products.",
    heroLead:
      "Authentication and access management that protect accounts while keeping sign-in smooth.",
    description:
      "SaaS authentication services from Saqrih—secure identity and role-based access for products.",
  },
  {
    slug: "saas-dashboard-development",
    title: "SaaS Dashboard Development",
    shortDesc:
      "Admin and user dashboards for analytics, support, and control.",
    heroLead:
      "SaaS dashboard development for operators and end users—clear data, actions, and workflows.",
    description:
      "SaaS dashboard development from Saqrih—purpose-built admin and product consoles.",
  },
  {
    slug: "api-development-third-party-integrations",
    title: "API Development & Third-Party Integrations",
    shortDesc:
      "Clean APIs and integrations that extend your product ecosystem.",
    heroLead:
      "API development and third-party integrations that keep your SaaS connected and extensible.",
    description:
      "SaaS API and integration services from Saqrih—reliable connections for product ecosystems.",
  },
  {
    slug: "saas-migration-scaling",
    title: "SaaS Migration & Scaling",
    shortDesc:
      "Move platforms, re-architect tenancy, and scale for growth.",
    heroLead:
      "SaaS migration and scaling engagements that reduce risk while unlocking the next growth stage.",
    description:
      "SaaS migration and scaling from Saqrih—safe transitions and performance under load.",
  },
  {
    slug: "saas-maintenance-support",
    title: "SaaS Maintenance & Support",
    shortDesc:
      "Ongoing product care—updates, monitoring, and technical partnership.",
    heroLead:
      "SaaS maintenance and support so your product stays secure, fast, and ready for the next release.",
    description:
      "SaaS maintenance and support from Saqrih—continuous care for live subscription products.",
  },
];

export function getSaasDevelopmentSubService(slug) {
  return SAAS_DEVELOPMENT_SUB_SERVICES.find((s) => s.slug === slug) ?? null;
}

export function getAllSaasDevelopmentSubServiceSlugs() {
  return SAAS_DEVELOPMENT_SUB_SERVICES.map((s) => s.slug);
}

export const SAAS_DEVELOPMENT_FAQS = [
  {
    question: "How much does it cost to build a SaaS product?",
    answer:
      "SaaS builds are custom-scoped. MVPs typically start in a mid investment range and grow with complexity—integrations, multi-tenancy, billing, and compliance all affect cost. We help you prioritize ruthlessly: launch with core features, validate with real users, then expand.",
  },
  {
    question: "How long does it take to launch an MVP?",
    answer:
      "Most SaaS MVPs take about 2–4 months depending on scope and integrations. Complex products with many third-party systems may take longer. We focus on getting a usable core to market so you can start learning quickly.",
  },
  {
    question: "What tech stack do you use for SaaS?",
    answer:
      "Common stacks include React or Next.js on the frontend, Node.js, NestJS, Laravel, or Django on the backend, PostgreSQL or MongoDB for data, and cloud hosting suited to your growth plan. We choose based on your product needs—not a one-size template.",
  },
  {
    question: "Do you help with product strategy?",
    answer:
      "Yes. We help define MVP scope, prioritize features, and shape a practical roadmap based on experience shipping SaaS products—so engineering time maps to business outcomes.",
  },
  {
    question: "Can you work with technical co-founders?",
    answer:
      "Absolutely. We collaborate well with technical founders and in-house teams—complementing existing expertise or filling specific gaps in design, backend, billing, or delivery.",
  },
  {
    question: "Do you build multi-tenant SaaS?",
    answer:
      "Yes. Multi-tenant design is a core SaaS capability we deliver—proper isolation between customers while keeping operations efficient and secure.",
  },
  {
    question: "Can you integrate subscription billing?",
    answer:
      "Yes. We integrate providers such as Stripe, PayPal, Paddle, and Lemon Squeezy for plans, trials, renewals, and related subscription workflows.",
  },
  {
    question: "What if I need something simpler first?",
    answer:
      "Not ready for a full SaaS build? We also deliver marketing sites, landing pages, and simpler web apps. Many products start there, then evolve into a full SaaS platform with Saqrih.",
  },
];
