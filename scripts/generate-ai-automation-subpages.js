const fs = require("fs");
const path = require("path");

const defs = [
  {
    slug: "power-bi-analytics",
    title: "Power BI Analytics",
    shortDesc:
      "Power BI dashboards, data models, and reporting that turn ERP, CRM, and operational data into clear decisions for Qatar teams.",
    focus: "powerbi",
    heroTitle: "Power BI\nAnalytics in Qatar",
    heroLead:
      "Design and deliver Power BI workspaces, semantic models, and executive dashboards so leaders and ops teams see the metrics that matter—securely and on schedule.",
    heroTitleMaxCh: "12ch",
    heading2: "Dashboards that leadership trusts and teams actually open",
    techLine2: "Power BI Expertise",
  },
  {
    slug: "business-intelligence-dashboards",
    title: "Business Intelligence Dashboards",
    shortDesc:
      "BI dashboards and reporting across Power BI, Tableau, Looker, and custom stacks—unified metrics for sales, finance, and operations.",
    focus: "bi",
    heroTitle: "Business Intelligence\nDashboards in Qatar",
    heroLead:
      "Build and modernize BI dashboards with governed KPIs, role-based views, and refresh pipelines across the tools your analysts already use.",
    heroTitleMaxCh: "20ch",
    heading2: "One source of truth for KPIs—not spreadsheet sprawl",
    techLine2: "BI Dashboard Expertise",
  },
  {
    slug: "predictive-analytics-forecasting",
    title: "Predictive Analytics & Forecasting",
    shortDesc:
      "Forecasting and predictive models for demand, revenue, churn, and operations—connected to your BI and decision workflows.",
    focus: "predictive",
    heroTitle: "Predictive Analytics &\nForecasting in Qatar",
    heroLead:
      "Move from historical reports to forward-looking forecasts with models that feed Power BI, ops tools, and planning cycles your teams already run.",
    heroTitleMaxCh: "20ch",
    heading2: "Forecasts that sit inside the tools you already use",
    techLine2: "Predictive Analytics Expertise",
  },
  {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation",
    shortDesc:
      "Intelligent workflow automation that connects tools, routes tasks, and uses AI where it speeds decisions for Qatar teams.",
    focus: "workflow",
    heroTitle: "AI Workflow\nAutomation in Qatar",
    heroLead:
      "Intelligent workflow automation that connects your stack, routes work, and applies AI at the right steps so operations move faster with fewer handoffs.",
    heroTitleMaxCh: "14ch",
    heading2: "Workflows that run with clarity, not chaos",
    techLine2: "AI Workflow Expertise",
  },
  {
    slug: "ai-chatbots-virtual-assistants",
    title: "AI Chatbots & Virtual Assistants",
    shortDesc:
      "Conversational assistants and copilots for web, WhatsApp, and internal tools—grounded in your policies and knowledge.",
    focus: "chatbot",
    heroTitle: "AI Chatbots &\nVirtual Assistants in Qatar",
    heroLead:
      "Conversational assistants and copilots for customers and staff, designed with guardrails, handoff to humans, and answers tied to your content.",
    heroTitleMaxCh: "18ch",
    heading2: "Assistants that sound like your brand, not a generic bot",
    techLine2: "Conversational AI Expertise",
  },
  {
    slug: "document-ai-data-extraction",
    title: "Document AI & Data Extraction",
    shortDesc:
      "Extract structured data from invoices, contracts, forms, and scans with review workflows and accuracy checks.",
    focus: "document",
    heroTitle: "Document AI &\nData Extraction in Qatar",
    heroLead:
      "Turn PDFs, scans, and forms into structured data your CRM, ERP, and ops teams can trust—with human review where stakes are high.",
    heroTitleMaxCh: "16ch",
    heading2: "Less manual typing, more reliable records",
    techLine2: "Document AI Expertise",
  },
  {
    slug: "custom-ai-agents",
    title: "Custom AI Agents",
    shortDesc:
      "Purpose-built AI agents that plan, call tools, and complete multi-step tasks inside your products and internal systems.",
    focus: "agents",
    heroTitle: "Custom AI\nAgents in Qatar",
    heroLead:
      "Agents tailored to your processes: they plan steps, use approved tools, and complete work with logging and oversight built in.",
    heroTitleMaxCh: "12ch",
    heading2: "Agents that do work, not just chat",
    techLine2: "AI Agent Expertise",
  },
  {
    slug: "rag-knowledge-systems",
    title: "RAG & Knowledge Systems",
    shortDesc:
      "Retrieval-augmented knowledge bases so copilots answer from your docs, policies, and product content—not the open web.",
    focus: "rag",
    heroTitle: "RAG & Knowledge\nSystems in Qatar",
    heroLead:
      "Search and Q&A over your manuals, SOPs, and product libraries with citations, access control, and refresh pipelines.",
    heroTitleMaxCh: "16ch",
    heading2: "Answers grounded in what your organization actually knows",
    techLine2: "RAG & Knowledge Expertise",
  },
  {
    slug: "ai-integration-apis",
    title: "AI Integration & APIs",
    shortDesc:
      "Wire OpenAI, Azure OpenAI, Anthropic, and local models into apps via secure APIs, webhooks, and event-driven pipelines.",
    focus: "integration",
    heroTitle: "AI Integration &\nAPIs in Qatar",
    heroLead:
      "Production AI integrations: model routing, rate limits, observability, and clean APIs so your product team ships AI features safely.",
    heroTitleMaxCh: "16ch",
    heading2: "AI in your stack, not bolted on the side",
    techLine2: "AI Integration Expertise",
  },
  {
    slug: "ai-content-operations",
    title: "AI Content Operations",
    shortDesc:
      "AI-assisted drafting, localization, and publishing workflows with editorial review for marketing and content teams.",
    focus: "content",
    heroTitle: "AI Content\nOperations in Qatar",
    heroLead:
      "Speed up briefs, drafts, variants, and localization while editors stay in control of tone, compliance, and what goes live.",
    heroTitleMaxCh: "14ch",
    heading2: "Faster content cycles without losing editorial judgment",
    techLine2: "Content Operations Expertise",
  },
  {
    slug: "ai-customer-support-automation",
    title: "AI Customer Support Automation",
    shortDesc:
      "Triage, suggested replies, knowledge surfacing, and escalation paths that help support teams resolve tickets faster.",
    focus: "support",
    heroTitle: "AI Customer Support\nAutomation in Qatar",
    heroLead:
      "Assist agents with summaries, draft responses, and policy-aware suggestions—while customers get quicker, consistent help.",
    heroTitleMaxCh: "20ch",
    heading2: "Support that's faster for customers and lighter for agents",
    techLine2: "Support Automation Expertise",
  },
  {
    slug: "ai-analytics-insights",
    title: "AI Analytics & Insights",
    shortDesc:
      "Natural-language analytics, anomaly surfacing, and narrative insights over your business data and dashboards.",
    focus: "analytics",
    heroTitle: "AI Analytics &\nInsights in Qatar",
    heroLead:
      "Ask questions of your metrics, get explained trends, and surface anomalies—connected to the warehouses and BI you already use.",
    heroTitleMaxCh: "14ch",
    heading2: "Insight teams can act on, not slides that stall",
    techLine2: "AI Analytics Expertise",
  },
  {
    slug: "ai-consultation-strategy",
    title: "AI Consultation & Strategy",
    shortDesc:
      "Use-case discovery, vendor and model fit, roadmaps, and governance for AI products and automation in Qatar and MENA.",
    focus: "consult",
    heroTitle: "AI Consultation &\nStrategy in Qatar",
    heroLead:
      "Practical AI strategy: what to build first, how to govern data and models, and how to align product, legal, and engineering.",
    heroTitleMaxCh: "18ch",
    heading2: "Strategy that turns AI interest into shipped outcomes",
    techLine2: "AI Strategy Expertise",
  },
  {
    slug: "ai-maintenance-support",
    title: "AI Maintenance & Support",
    shortDesc:
      "Monitoring, prompt and model updates, eval loops, and reliability support for AI features already in production.",
    focus: "maintain",
    heroTitle: "AI Maintenance &\nSupport in Qatar",
    heroLead:
      "Keep copilots, agents, and automations accurate after launch with observability, regression checks, and planned improvements.",
    heroTitleMaxCh: "14ch",
    heading2: "AI that stays trustworthy after go-live",
    techLine2: "AI Operations Expertise",
  },
];

const featureSets = {
  workflow: [
    { title: "Process mapping first", desc: "We document triggers, owners, and exceptions before automation or AI is applied." },
    { title: "Tool-to-tool orchestration", desc: "CRMs, email, databases, and internal apps connect with clear failure handling." },
    { title: "AI at decision points", desc: "Classification and routing use models only where they improve speed or quality." },
    { title: "Measurable throughput", desc: "Cycle time and error rates are tracked so you see operational impact." },
  ],
  chatbot: [
    { title: "Channel-ready assistants", desc: "Web, mobile embeds, and messaging channels with consistent behavior." },
    { title: "Grounded responses", desc: "Answers tied to approved content with escalation when confidence is low." },
    { title: "Human handoff", desc: "Live agents receive context so customers do not repeat themselves." },
    { title: "Arabic and English aware", desc: "Copy and flows suited to Qatar and regional audiences." },
  ],
  document: [
    { title: "Template-aware extraction", desc: "Invoices, IDs, contracts, and forms mapped to your field schemas." },
    { title: "Review queues", desc: "Low-confidence extractions route to staff before systems of record update." },
    { title: "API and batch paths", desc: "Upload portals, email ingestion, or scheduled batch for high volume." },
    { title: "Audit trail", desc: "Source files and extracted values stay traceable for compliance." },
  ],
  agents: [
    { title: "Tool permissions", desc: "Agents call only approved APIs and actions with scoped credentials." },
    { title: "Multi-step planning", desc: "Tasks decompose into steps with checkpoints and rollback options." },
    { title: "Observable runs", desc: "Logs show what the agent did and why for support and governance." },
    { title: "Product embedding", desc: "Agents live inside your app or admin—not a separate silo." },
  ],
  rag: [
    { title: "Ingestion pipelines", desc: "Docs, wikis, and exports stay synced with versioning and access rules." },
    { title: "Cited answers", desc: "Responses reference source snippets so teams can verify quickly." },
    { title: "Access-aware search", desc: "Users see only knowledge their role is allowed to read." },
    { title: "Eval and refresh", desc: "Quality checks when content or models change." },
  ],
  integration: [
    { title: "Model abstraction", desc: "Swap providers or models without rewriting product features." },
    { title: "Secure credentials", desc: "Keys, vault patterns, and environment separation for production AI." },
    { title: "Latency and cost controls", desc: "Caching, batching, and routing tuned to your SLA and budget." },
    { title: "Webhooks and events", desc: "Async AI jobs fit your existing backend patterns." },
  ],
  content: [
    { title: "Brief-to-draft flows", desc: "Structured inputs produce drafts that match brand and format rules." },
    { title: "Editorial gates", desc: "Nothing publishes without the review steps your team requires." },
    { title: "Localization assist", desc: "Arabic and English variants with glossary consistency." },
    { title: "CMS and DAM hooks", desc: "Works alongside WordPress, headless CMS, or asset libraries." },
  ],
  support: [
    { title: "Ticket triage", desc: "Priority, category, and routing suggestions based on content and history." },
    { title: "Agent copilot", desc: "Summaries and draft replies aligned to your macros and policies." },
    { title: "Knowledge surfacing", desc: "Relevant articles appear while agents work—less tab switching." },
    { title: "Quality monitoring", desc: "Sampled reviews to catch drift or off-policy suggestions." },
  ],
  analytics: [
    { title: "NL query layers", desc: "Business users ask questions in plain language over governed datasets." },
    { title: "Narrative explanations", desc: "Trends come with context—not just numbers on a chart." },
    { title: "Anomaly hints", desc: "Unusual movements flagged for analyst follow-up." },
    { title: "BI integration", desc: "Connects to warehouses, Looker, Power BI, or custom dashboards." },
  ],
  powerbi: [
    { title: "Semantic models that scale", desc: "Star schemas, measures, and relationships built for accurate, fast reports." },
    { title: "Executive and ops views", desc: "Role-based dashboards for leadership, finance, sales, and operations." },
    { title: "Secure workspaces", desc: "Row-level security, gateway setup, and Microsoft 365-aligned access." },
    { title: "Refresh you can trust", desc: "Scheduled refresh, failure alerts, and source documentation." },
  ],
  bi: [
    { title: "Tool-fit dashboards", desc: "Power BI, Tableau, Looker, or embedded reporting matched to your stack." },
    { title: "Governed KPI library", desc: "Shared definitions so sales, finance, and ops stop arguing over numbers." },
    { title: "Self-serve where it helps", desc: "Analyst-friendly models with guardrails for business users." },
    { title: "Migration and cleanup", desc: "Replace brittle Excel packs with maintainable BI assets." },
  ],
  predictive: [
    { title: "Business-first forecasts", desc: "Demand, revenue, churn, or capacity models tied to real decisions." },
    { title: "Feature and data readiness", desc: "Clean inputs from ERP, CRM, and ops systems before modeling." },
    { title: "Explainable outputs", desc: "Drivers and confidence surfaced for planners—not black-box scores alone." },
    { title: "BI and workflow hooks", desc: "Predictions land in Power BI, alerts, or planning tools your teams open daily." },
  ],
  consult: [
    { title: "Use-case prioritization", desc: "ROI, risk, and readiness scored so the first build is the right one." },
    { title: "Architecture options", desc: "Build vs buy, model choice, and data boundaries documented clearly." },
    { title: "Governance basics", desc: "Roles, data handling, and review practices suited to your industry." },
    { title: "Roadmap to production", desc: "Milestones from pilot to scale with engineering alignment." },
  ],
  maintain: [
    { title: "Production monitoring", desc: "Errors, latency, and usage tracked for AI endpoints and jobs." },
    { title: "Prompt and model updates", desc: "Controlled releases when providers or policies change." },
    { title: "Regression evals", desc: "Test sets catch quality drops before customers do." },
    { title: "Incident response", desc: "Runbooks for model outages, bad outputs, or integration failures." },
  ],
};

const processSets = {
  workflow: [
    { number: "1", title: "Map workflows and pain points", body: "We identify high-volume paths where automation and AI will save time." },
    { number: "2", title: "Design triggers and integrations", body: "Systems, rules, and AI touchpoints are specified with exception handling." },
    { number: "3", title: "Build and pilot", body: "Automations run in a controlled pilot with real data and owners." },
    { number: "4", title: "Scale and monitor", body: "Successful flows expand with logging and ongoing tuning." },
  ],
  chatbot: [
    { number: "1", title: "Define audiences and intents", body: "We clarify who chats, on which channels, and what success looks like." },
    { number: "2", title: "Content and guardrails", body: "Knowledge, tone, and escalation rules are configured before launch." },
    { number: "3", title: "Build and test conversations", body: "Flows are tested against real questions and edge cases." },
    { number: "4", title: "Launch and improve", body: "Transcripts and feedback refine answers and handoff behavior." },
  ],
  document: [
    { number: "1", title: "Sample and schema design", body: "Representative documents define fields and validation rules." },
    { number: "2", title: "Extraction pipeline", body: "OCR, models, and rules combine with confidence scoring." },
    { number: "3", title: "Review and integrate", body: "Staff approve edge cases; outputs sync to your systems." },
    { number: "4", title: "Operate at volume", body: "Batch and monitoring keep accuracy stable as volume grows." },
  ],
  agents: [
    { number: "1", title: "Agent scope and tools", body: "Allowed actions, data access, and outcomes are agreed up front." },
    { number: "2", title: "Orchestration design", body: "Planning, tool calls, and human checkpoints are modeled." },
    { number: "3", title: "Implement and red-team", body: "Agents are tested against misuse and failure scenarios." },
    { number: "4", title: "Deploy with observability", body: "Production runs are logged and improved on a cadence." },
  ],
  rag: [
    { number: "1", title: "Knowledge inventory", body: "Sources, freshness, and permissions are cataloged." },
    { number: "2", title: "Index and retrieve", body: "Chunking, embeddings, and search tuned to your content types." },
    { number: "3", title: "Copilot or API layer", body: "Q&A surfaces in your app or internal tools with citations." },
    { number: "4", title: "Evaluate and refresh", body: "New docs and model updates stay reflected in answers." },
  ],
  integration: [
    { number: "1", title: "Integration map", body: "Apps, events, and AI touchpoints are documented." },
    { number: "2", title: "API and security design", body: "Auth, quotas, and failure modes are planned for production." },
    { number: "3", title: "Implement and load-test", body: "Endpoints ship with monitoring and cost visibility." },
    { number: "4", title: "Handover and iterate", body: "Your team receives docs; we support enhancements as models evolve." },
  ],
  content: [
    { number: "1", title: "Workflow discovery", body: "Editorial steps, channels, and compliance needs are captured." },
    { number: "2", title: "Templates and AI assists", body: "Drafting aids match your voice and required approvals." },
    { number: "3", title: "Pilot with editors", body: "Real campaigns run through the flow with feedback loops." },
    { number: "4", title: "Scale content ops", body: "Playbooks and tooling expand to more teams and locales." },
  ],
  support: [
    { number: "1", title: "Support data review", body: "Tickets, macros, and KB articles inform triage and copilot design." },
    { number: "2", title: "Assist features build", body: "Suggestions and summaries integrate with your helpdesk." },
    { number: "3", title: "Agent training", body: "Teams learn when to accept, edit, or escalate AI output." },
    { number: "4", title: "Quality loop", body: "Sampling and metrics refine automation over time." },
  ],
  analytics: [
    { number: "1", title: "Data and questions workshop", body: "Metrics, sources, and user personas shape the experience." },
    { number: "2", title: "Semantic layer design", body: "Governed definitions power consistent NL answers." },
    { number: "3", title: "Build insights surface", body: "Chat, alerts, or embedded widgets connect to your BI." },
    { number: "4", title: "Adopt and refine", body: "Usage patterns guide new metrics and guardrails." },
  ],
  powerbi: [
    { number: "1", title: "Requirements and source map", body: "KPIs, audiences, and systems of record are documented." },
    { number: "2", title: "Model and measure design", body: "Semantic model, DAX measures, and security rules are specified." },
    { number: "3", title: "Dashboard build and UAT", body: "Reports are validated with stakeholders against known totals." },
    { number: "4", title: "Publish and handover", body: "Workspaces, refresh, and training leave your team self-sufficient." },
  ],
  bi: [
    { number: "1", title: "BI audit and tool choice", body: "Current reports, gaps, and platform fit are assessed." },
    { number: "2", title: "Metric and data contracts", body: "Shared KPIs and refresh SLAs are agreed across teams." },
    { number: "3", title: "Dashboard delivery", body: "Role-based views ship with documentation and access control." },
    { number: "4", title: "Enablement and iteration", body: "Analysts and owners learn the models; new views follow demand." },
  ],
  predictive: [
    { number: "1", title: "Forecast use-case workshop", body: "What you predict, for whom, and how it changes decisions." },
    { number: "2", title: "Data prep and baseline", body: "Historical accuracy and feature quality set the bar." },
    { number: "3", title: "Model and validate", body: "Models are tested against holdouts and business sense-checks." },
    { number: "4", title: "Operationalize", body: "Outputs feed BI, alerts, or planning workflows with monitoring." },
  ],
  consult: [
    { number: "1", title: "Discovery sessions", body: "Stakeholders align on goals, constraints, and existing systems." },
    { number: "2", title: "Options and roadmap", body: "Build paths, vendors, and phases are documented for decision-makers." },
    { number: "3", title: "Governance and team fit", body: "Roles, data rules, and skill gaps are addressed pragmatically." },
    { number: "4", title: "Kickoff or handoff", body: "You leave with a prioritized plan—we can execute or support internal teams." },
  ],
  maintain: [
    { number: "1", title: "Baseline health check", body: "We review logs, costs, evals, and incident history for live AI features." },
    { number: "2", title: "Operating agreement", body: "SLAs, update windows, and escalation paths are set." },
    { number: "3", title: "Ongoing care", body: "Patches, prompt updates, and eval runs on a steady rhythm." },
    { number: "4", title: "Improvement reports", body: "Regular summaries cover quality, usage, and recommended upgrades." },
  ],
};

function faqsFor(d) {
  const lower = d.title.toLowerCase();
  return [
    {
      question: `What is included in ${d.title} from Saqrih?`,
      answer: `${d.title} typically includes discovery, solution design, implementation, integrations with your stack, QA, launch support, and documentation. Scope is tailored to your AI and automation goals in Qatar and agreed before build starts.`,
    },
    {
      question: `How long does ${lower} take?`,
      answer:
        "Timelines depend on data readiness, integrations, and whether you need a pilot or production rollout. Focused copilots or automations can ship in weeks; multi-agent or RAG platforms take longer. You receive a milestone plan in the proposal.",
    },
    {
      question: "Which AI models and platforms do you work with?",
      answer:
        "We work with OpenAI, Azure OpenAI, Anthropic, and open models where appropriate, plus orchestration tools such as LangChain and LlamaIndex. The choice depends on latency, data residency, language needs, and your existing cloud.",
    },
    {
      question: "How do you handle data privacy and governance?",
      answer:
        "We define what data may enter models, use private endpoints or regional hosting when required, and design access control, logging, and human review so AI features stay accountable.",
    },
    {
      question: "Can AI features integrate with our existing applications?",
      answer:
        "Yes. Most projects extend CRMs, portals, helpdesks, CMS, or custom apps via APIs and embedded copilots rather than replacing systems.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "Yes. AI Maintenance & Support covers monitoring, model updates, eval loops, and enhancements so copilots and agents stay accurate in production.",
    },
  ];
}

function metaDesc(d) {
  const raw = `${d.title} in Qatar from Saqrih. ${d.shortDesc}`;
  return raw.length > 158 ? `${raw.slice(0, 155)}...` : raw;
}

/** Full page body lives in a dedicated route + lib/services/powerBiAnalyticsPage.js */
const DEDICATED_FULL_PAGE_SLUGS = new Set(["power-bi-analytics"]);

function buildSubPage(d) {
  const base = {
    slug: d.slug,
    title: d.title,
    shortDesc: d.shortDesc,
    description: metaDesc(d),
    serviceType: d.title,
  };
  if (DEDICATED_FULL_PAGE_SLUGS.has(d.slug)) {
    return base;
  }
  return {
    ...base,
    heroTitle: d.heroTitle,
    heroLead: d.heroLead,
    heroTitleMaxCh: d.heroTitleMaxCh,
    advantage: {
      label: `Why choose Saqrih for ${d.title.toLowerCase()} in Doha`,
      heading: d.heading2,
      intro: `Saqrih delivers ${d.title.toLowerCase()} as part of our AI Automation practice in Qatar. ${d.shortDesc} We combine product thinking, integrations, and engineering so you ship AI products and agents that teams actually use.`,
      rightTitle: `${d.title} engineered for clarity, governance, and measurable outcomes`,
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
      body: `LLMs, orchestration, vector search, APIs, and cloud tooling we use for ${d.title.toLowerCase()}.`,
    },
  };
}

const pages = defs.map(buildSubPage);

const target = path.join("lib", "services", "aiAutomationSubPages.js");
const out = `/**
 * Retained-style sub-page content for /services/ai-automation/[slug].
 * Unique SEO copy per sub-service for Saqrih (Qatar).
 */

export const AI_AUTOMATION_PARENT = {
  path: "/services/ai-automation",
  title: "AI Automation",
};

export const AI_AUTOMATION_SUB_PAGES = ${JSON.stringify(pages, null, 2)};

export function getAiAutomationSubPage(slug) {
  return AI_AUTOMATION_SUB_PAGES.find((s) => s.slug === slug) ?? null;
}

export function getAllAiAutomationSubPageSlugs() {
  return AI_AUTOMATION_SUB_PAGES.map((s) => s.slug);
}

export function getAiAutomationSiblingCards(currentSlug) {
  const others = AI_AUTOMATION_SUB_PAGES.filter((s) => s.slug !== currentSlug);
  return others.map((s, i) => ({
    id: s.slug,
    title: s.title,
    desc: s.shortDesc,
    href: \`\${AI_AUTOMATION_PARENT.path}/\${s.slug}\`,
    ...(i === 0
      ? { isHero: true, eyebrow: "More AI automation services" }
      : {}),
  }));
}
`;

fs.writeFileSync(target, out);
console.log("wrote", pages.length, "to", target);