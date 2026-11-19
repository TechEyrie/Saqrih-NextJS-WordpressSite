/**
 * Single source of truth for /services/ai-automation/power-bi-analytics (Saqrih, Qatar).
 */

export const POWER_BI_SLUG = "power-bi-analytics";

export const POWER_BI_PATH = `/services/ai-automation/${POWER_BI_SLUG}`;

export const POWER_BI = {
  slug: POWER_BI_SLUG,
  title: "Power BI Analytics",
  serviceType: "Power BI consulting and development",
  description:
    "Power BI consulting in Qatar from Saqrih: semantic models, DAX, governed dashboards, Fabric-ready workspaces, and secure refresh from ERP, CRM, and operational data.",
  shortDesc:
    "Power BI dashboards, data models, and reporting that turn ERP, CRM, and operational data into clear decisions for Qatar teams.",
};

export const POWER_BI_HERO = {
  title: "Power BI\nAnalytics in Qatar",
  titleMaxCh: "12ch",
  lead:
    "Saqrih designs and delivers Power BI semantic models, executive dashboards, and refresh pipelines so leaders and operations teams in Doha see metrics they trust—governed, secure, and ready for daily decisions.",
  stats: [
    { value: "6+", label: "Years shipping data products" },
    { value: "50+", label: "BI & analytics engagements" },
    { value: "15+", label: "Industries served in MENA" },
  ],
  backgroundImage: "/services-pics/ai-automation/power-bi-analytics.jpg",
};

export const POWER_BI_OFFERINGS_SECTION = {
  label: "What we deliver",
  heading: "Power BI services built for clarity, speed, and governance",
  intro:
    "From first workspace to enterprise scale, we help Qatar teams turn scattered spreadsheets into governed Power BI assets your executives and analysts will actually open.",
  items: [
    {
      title: "Power BI discovery & roadmap",
      desc: "KPI workshops, source-system mapping, and a phased plan that balances quick wins with long-term semantic model design.",
    },
    {
      title: "Semantic model architecture",
      desc: "Star schemas, relationships, calculation groups, and naming conventions that stay maintainable as new sources arrive.",
    },
    {
      title: "Dashboard & report development",
      desc: "Executive summaries, operational drill-downs, and mobile layouts tuned to how your teams review numbers each week.",
    },
    {
      title: "DAX & Power Query engineering",
      desc: "Measures, time intelligence, and M queries that reconcile to finance totals—with documentation your team can extend.",
    },
    {
      title: "Row-level & object-level security",
      desc: "Role-based access, dynamic RLS, and workspace policies aligned with Microsoft 365 groups and your org structure.",
    },
    {
      title: "Gateway & hybrid refresh",
      desc: "On-premises data gateway setup, credential management, and refresh schedules with failure alerts.",
    },
    {
      title: "Microsoft Fabric & migration",
      desc: "Lakehouse, warehouse, and workspace moves planned with minimal disruption to published reports.",
    },
    {
      title: "Embedded analytics & portals",
      desc: "Embed Power BI in internal portals or customer-facing apps with licensing and SSO patterns that fit your stack.",
    },
    {
      title: "Enablement & managed care",
      desc: "Analyst training, governance playbooks, and ongoing tuning after go-live so adoption sticks.",
    },
  ],
};

export const POWER_BI_TECH_CATEGORIES = [
  {
    id: "modeling",
    label: "Modeling",
    title: "Semantic models",
    blurb:
      "Import and DirectQuery models with clear star schemas, surrogate keys, and measure layers finance can sign off on.",
    usedFor: "Executive dashboards, self-serve",
    icon: "db",
    tools: [
      { name: "Power BI Desktop", tip: "Model, DAX, and report authoring" },
      { name: "Tabular Editor", tip: "Bulk model edits and best practices" },
      { name: "Calculation groups", tip: "Reusable time intelligence patterns" },
      { name: "Composite models", tip: "Mix import and DirectQuery where needed" },
    ],
  },
  {
    id: "dax",
    label: "DAX",
    title: "DAX & analytics logic",
    blurb:
      "Measures that match ledger totals, plus KPI definitions your teams reuse across reports.",
    usedFor: "Finance, sales, ops KPIs",
    icon: "layers",
    tools: [
      { name: "DAX", tip: "Measures, calculated columns, time intelligence" },
      { name: "DATATABLE", tip: "What-if and scenario parameters" },
      { name: "Field parameters", tip: "Flexible metric switching in reports" },
      { name: "Performance tuning", tip: "VertiPaq and query plan hygiene" },
    ],
  },
  {
    id: "powerquery",
    label: "Power Query",
    title: "Power Query & data prep",
    blurb:
      "Repeatable ETL in the service and Desktop—parameterized sources and documented transformations.",
    usedFor: "Staging, cleansing, merges",
    icon: "server",
    tools: [
      { name: "Power Query (M)", tip: "Transformations and incremental refresh" },
      { name: "Dataflows Gen2", tip: "Reusable data prep in the service" },
      { name: "Azure SQL", tip: "Governed warehouse feeds" },
      { name: "REST APIs", tip: "Operational systems without nightly exports" },
    ],
  },
  {
    id: "security",
    label: "Security",
    title: "RLS, OLS & governance",
    blurb:
      "Access that mirrors how your business is organized—not one-size-fits-all workspace sharing.",
    usedFor: "Multi-entity, franchise, regional rollups",
    icon: "shield",
    tools: [
      { name: "Row-level security (RLS)", tip: "Dynamic filters by role" },
      { name: "Object-level security (OLS)", tip: "Hide tables or columns by role" },
      { name: "Microsoft 365 groups", tip: "Workspace access patterns" },
      { name: "Sensitivity labels", tip: "Classification where policy requires" },
    ],
  },
  {
    id: "fabric",
    label: "Fabric",
    title: "Microsoft Fabric & service",
    blurb:
      "Capacity planning, workspaces, and pipelines that fit Fabric or classic Premium capacity.",
    usedFor: "Scale-out, lakehouse, warehousing",
    icon: "monitor",
    tools: [
      { name: "Microsoft Fabric", tip: "Lakehouse and warehouse paths" },
      { name: "Power BI service", tip: "Workspaces, apps, deployment pipelines" },
      { name: "Deployment pipelines", tip: "Dev, test, prod promotion" },
      { name: "XMLA endpoints", tip: "Programmatic model ops" },
    ],
  },
  {
    id: "copilot",
    label: "Copilot",
    title: "Copilot & self-serve",
    blurb:
      "Copilot-ready models and report layouts so natural-language questions stay grounded in governed metrics.",
    usedFor: "Analyst acceleration, exec Q&A",
    icon: "bolt",
    tools: [
      { name: "Copilot for Power BI", tip: "Narratives and report creation assist" },
      { name: "Q&A & synonyms", tip: "Curated business terms" },
      { name: "Metrics & goals", tip: "Scorecards tied to semantic models" },
      { name: "Mobile reports", tip: "Field teams on phones and tablets" },
    ],
  },
  {
    id: "gateway",
    label: "Gateway",
    title: "Gateways & hybrid data",
    blurb:
      "Reliable refresh from on-premises SQL, files, and ERP without surprise credential failures.",
    usedFor: "Hybrid Qatar / regional HQ data",
    icon: "layers",
    tools: [
      { name: "On-premises data gateway", tip: "Scheduled and on-demand refresh" },
      { name: "VNet data gateway", tip: "Private network paths in Azure" },
      { name: "Microsoft SQL Server", tip: "On-prem and Azure SQL sources" },
      { name: "SharePoint & files", tip: "Excel and document libraries" },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    title: "BI DevOps & lifecycle",
    blurb:
      "Version control, reviews, and promotion flows so report sprawl does not become your single source of truth.",
    usedFor: "Enterprise BI teams, regulated sectors",
    icon: "shield",
    tools: [
      { name: "Git integration", tip: "PBIP and model versioning" },
      { name: "Azure DevOps", tip: "Pipelines for datasets and reports" },
      { name: "ALM Toolkit", tip: "Selective deployment of artifacts" },
      { name: "Monitoring & alerts", tip: "Refresh failure and usage signals" },
    ],
  },
];

export const POWER_BI_TECH_STATS = [
  { value: "8", label: "Power BI practice areas" },
  { value: "DAX", label: "Measure-first modeling" },
  { value: "RLS", label: "Security by design" },
];

export const POWER_BI_TECH_CAPABILITIES = [
  {
    title: "Governed metrics",
    desc: "One definition of revenue, margin, and pipeline—reused across workspaces.",
    icon: "layers",
  },
  {
    title: "Hybrid refresh",
    desc: "Cloud and on-prem sources with documented gateway operations.",
    icon: "bolt",
  },
  {
    title: "Fabric-ready",
    desc: "Paths to lakehouse and warehouse without throwing away existing models.",
    icon: "shield",
  },
  {
    title: "Qatar delivery",
    desc: "English and Arabic stakeholder sessions; time zones that overlap Doha.",
    icon: "search",
  },
];

export const POWER_BI_TECH_MARQUEE = [
  "Power BI",
  "DAX",
  "Power Query",
  "Microsoft Fabric",
  "Azure",
  "SQL Server",
  "Dynamics 365",
  "Git",
  "Tabular Editor",
  "PostgreSQL",
];

export const POWER_BI_TECH_COPY = {
  eyebrow: "Technologies we use",
  headingLine1: "Technology Stack &",
  headingLine2: "Power BI Expertise",
  body: "Semantic modeling, DAX, Power Query, Fabric, gateways, and BI DevOps—selected so dashboards stay accurate after go-live, not just impressive in the kickoff demo.",
};

export const POWER_BI_INTEGRATIONS_SECTION = {
  label: "Data sources & platforms",
  heading: "Integrations your Power BI model can trust",
  intro:
    "We connect Power BI to the systems Qatar businesses already run—from finance and ERP to CRM, spreadsheets, and custom APIs.",
  items: [
    {
      name: "Microsoft Dynamics 365",
      desc: "Finance and operations entities with curated dimensions for leadership views.",
    },
    {
      name: "Microsoft SQL Server & Azure SQL",
      desc: "Warehouse and operational databases with import or DirectQuery patterns.",
    },
    {
      name: "Salesforce",
      desc: "Pipeline, account, and activity metrics aligned to sales leadership cadences.",
    },
    {
      name: "SharePoint & Excel",
      desc: "Controlled intake of planning files without breaking refresh discipline.",
    },
    {
      name: "Azure Data Lake & Synapse",
      desc: "Lakehouse feeds and large historical sets for Fabric or Premium capacity.",
    },
    {
      name: "PostgreSQL & MySQL",
      desc: "Product and ops databases common in modern Qatar stacks.",
    },
    {
      name: "REST & OData APIs",
      desc: "Operational apps, portals, and middleware without manual CSV exports.",
    },
    {
      name: "Google BigQuery",
      desc: "Marketing and product analytics alongside corporate ERP metrics.",
    },
    {
      name: "SAP (via warehouse or extracts)",
      desc: "Staging layers that reconcile to finance before measures go live.",
    },
    {
      name: "Custom ERP & line-of-business apps",
      desc: "Pragmatic connectors and incremental models when off-the-shelf views are not enough.",
    },
  ],
};

export const POWER_BI_PROCESS = {
  title: "How we deliver Power BI",
  items: [
    {
      number: "1",
      title: "Discovery & KPI alignment",
      body: "Stakeholders, systems of record, and success metrics are documented so every chart answers a real decision.",
    },
    {
      number: "2",
      title: "Data assessment & access",
      body: "Source quality, refresh windows, and credentials are validated before modeling begins.",
    },
    {
      number: "3",
      title: "Semantic model design",
      body: "Star schema, relationships, and security roles are drafted with finance and IT sign-off paths.",
    },
    {
      number: "4",
      title: "Measures & validation",
      body: "DAX reconciles to known totals; edge cases and grain mismatches are resolved in UAT.",
    },
    {
      number: "5",
      title: "Report & dashboard build",
      body: "Layouts, drill-through, and mobile views are tested with the people who will use them weekly.",
    },
    {
      number: "6",
      title: "Publish, gateway & refresh",
      body: "Workspaces, pipelines, and alerts go live with runbooks for your operators.",
    },
    {
      number: "7",
      title: "Enablement & iteration",
      body: "Training, governance notes, and a backlog for phase-two metrics keep adoption moving.",
    },
  ],
};

export const POWER_BI_INDUSTRIES_SECTION = {
  label: "Sectors we know",
  heading: "Power BI for Qatar industries",
  intro:
    "We tailor metrics, security, and refresh patterns to regulated, multi-entity, and operations-heavy environments common across the Gulf.",
  items: [
    {
      id: "government",
      title: "Government & public sector",
      bullets: [
        "Program and budget dashboards with auditable definitions",
        "Citizen-service KPIs tied to operational systems",
        "Strict workspace access and export controls",
      ],
    },
    {
      id: "energy",
      title: "Energy & industrial",
      bullets: [
        "Asset, maintenance, and production metrics in near real time",
        "HSE and compliance views for leadership reviews",
        "Hybrid data from plant systems and corporate ERP",
      ],
    },
    {
      id: "healthcare",
      title: "Healthcare & wellness",
      bullets: [
        "Clinic, occupancy, and revenue cycle views without PHI sprawl",
        "Role-based access for clinical vs administrative audiences",
        "Refresh aligned to billing and EMR cutoffs",
      ],
    },
    {
      id: "retail",
      title: "Retail & F&B",
      bullets: [
        "Store, channel, and basket metrics across franchises",
        "Inventory and wastage signals for operations leads",
        "Promotional performance compared to finance actuals",
      ],
    },
    {
      id: "realestate",
      title: "Real estate & property",
      bullets: [
        "Pipeline, leasing, and collection dashboards",
        "Project and contractor spend vs budget",
        "Investor-ready packs with consistent KPI language",
      ],
    },
    {
      id: "finance",
      title: "Finance & professional services",
      bullets: [
        "P&L, cash, and practice profitability in one model",
        "Client and matter profitability without spreadsheet forks",
        "Month-end close checkpoints built into refresh cadence",
      ],
    },
    {
      id: "education",
      title: "Education & training",
      bullets: [
        "Enrollment, attendance, and outcome tracking",
        "Campus and program views for leadership",
        "Self-serve for analysts with governed dimensions",
      ],
    },
  ],
};

export const POWER_BI_WHY_SAQRIH = {
  label: "Why Saqrih",
  heading: "A Qatar team that speaks both boardroom KPIs and DAX",
  intro:
    "We are not a generic offshore ticket queue. Saqrih pairs senior engineering with product discipline so Power BI assets survive real-world data messiness in Doha and the wider GCC.",
  items: [
    {
      title: "Model-first, not chart-first",
      desc: "We fix grain, relationships, and measures before polishing visuals—so totals still work after the next data import.",
    },
    {
      title: "Security you can explain to auditors",
      desc: "RLS and workspace design documented in plain language, not mystery DAX hidden in one analyst's laptop.",
    },
    {
      title: "Integration with how you already work",
      desc: "We extend ERP, CRM, portals, and data warehouses you already pay for instead of forcing a rip-and-replace.",
    },
    {
      title: "Honest about Microsoft licensing",
      desc: "We advise on Pro, Premium, and Fabric fit without inventing partner badges or promising discounts we cannot deliver.",
    },
    {
      title: "Six years of delivery discipline",
      desc: "The same craft we bring to WordPress and custom apps—clear milestones, demos, and handover your team can own.",
    },
    {
      title: "Regional working style",
      desc: "Sessions overlap Qatar business hours; Arabic and English facilitation for mixed leadership teams.",
    },
  ],
};

export const POWER_BI_FAQ_HEADING = "Questions? We have answers";
export const POWER_BI_FAQ_SUBTITLE =
  "Common questions about Power BI consulting, licensing, and delivery for businesses in Qatar and the Middle East.";

export const POWER_BI_FAQS = [
  {
    question: "What is included in Saqrih Power BI Analytics engagements?",
    answer:
      "Typical scope covers discovery, semantic model design, DAX and Power Query development, dashboard delivery, workspace setup, gateway configuration where needed, UAT, training, and documentation. We tailor the statement of work to your sources and governance requirements before build starts.",
  },
  {
    question: "How long does a Power BI project take in Qatar?",
    answer:
      "A focused executive dashboard on a clean warehouse can ship in a few weeks. Multi-source ERP models, RLS for many entities, or Fabric migration take longer. We provide a milestone plan after discovery so you know what lands in phase one versus phase two.",
  },
  {
    question: "Do you work with Microsoft Fabric or only classic Power BI?",
    answer:
      "Both. We design semantic models and reports that work in the Power BI service today and plan Fabric lakehouse or warehouse paths when they reduce duplicate prep or improve scale.",
  },
  {
    question: "Can you fix or rebuild an existing Power BI model that shows wrong totals?",
    answer:
      "Yes. We audit relationships, filter context, measure definitions, and refresh logic—then refactor or rebuild in stages so stakeholders keep working dashboards while critical metrics are corrected.",
  },
  {
    question: "How do you implement row-level security (RLS)?",
    answer:
      "We map your org structure and data grain to security roles, implement dynamic RLS where appropriate, test with sample users from each role, and document how to onboard new employees without breaking filters.",
  },
  {
    question: "Do you set up on-premises data gateways?",
    answer:
      "Yes. We install and configure standard or personal gateways as your architecture requires, document service accounts, define refresh windows, and configure failure notifications.",
  },
  {
    question: "Which data sources can Power BI connect to in our environment?",
    answer:
      "Common sources include SQL Server, Azure SQL, Dynamics 365, Salesforce, SharePoint, Excel, PostgreSQL, REST APIs, and cloud warehouses. If a source is uncommon, we assess connectors or staging options during discovery.",
  },
  {
    question: "Can you embed Power BI in our portal or custom application?",
    answer:
      "Yes. We implement embed tokens or user-owns-data patterns with SSO considerations, help you understand licensing implications, and coordinate with your product team on UX and performance.",
  },
  {
    question: "How do you handle Arabic reports and bilingual dashboards?",
    answer:
      "We plan layout direction, font choices, and bookmark or page variants so Arabic and English audiences can read the same governed metrics without maintaining two separate semantic models.",
  },
  {
    question: "Do you provide Power BI training for our analysts?",
    answer:
      "Yes. Hands-on sessions cover model basics, safe DAX patterns, publishing etiquette, and your governance playbook so internal teams can extend reports without undoing security.",
  },
  {
    question: "What licensing do we need for Power BI?",
    answer:
      "Licensing depends on sharing, embedding, and capacity needs—often a mix of Microsoft 365 licenses, Power BI Pro, Premium capacity, or Fabric SKU. We explain trade-offs in plain language; final licensing is purchased through Microsoft or your reseller.",
  },
  {
    question: "Are you an official Microsoft partner?",
    answer:
      "We do not display Microsoft partner badges or claim statuses we have not earned. We bring practical Power BI engineering experience and will involve your licensed Microsoft partner or account team when certification-specific benefits are required.",
  },
  {
    question: "Can you support Power BI after go-live?",
    answer:
      "Yes. We offer enhancement sprints, refresh monitoring, model tuning, and alignment with our AI Maintenance & Support practice when you combine BI with copilots or automation.",
  },
];

/** Text lines for UnlockingSection heading (render with line break in client). */
export const POWER_BI_UNLOCKING_HEADING_LINES = [
  "More AI Automation Services",
  "from Saqrih in Qatar",
];