/**
 * Homepage-layout content for /services/ai-automation.
 * AI products, agents, copilots, and automation for Saqrih (Qatar SEO).
 */

export const AI_AUTOMATION_HOME = {
  path: "/services/ai-automation",
  title: "AI Automation",
  description:
    "AI automation in Qatar from Saqrih: custom agents, copilots, RAG knowledge systems, workflow automation, and secure integrations for businesses in Doha and MENA.",
};

export const AI_AUTOMATION_HOME_HERO = {
  titleLine1: "AI Automation Services",
  titleLine2: "in Doha, Qatar",
  showTrademark: false,
  description:
    "As a partner for AI products and agents in Qatar, Saqrih helps you ship copilots, workflow automation, and knowledge systems that connect to the tools your teams already use.",
};

export const AI_AUTOMATION_HOME_FAQ_HEADING = "AI Automation Qatar";

export const AI_AUTOMATION_HOME_FAQ_INTRO =
  "Answers about AI agents, copilots, RAG, integrations, governance, and getting started in Doha.";

export const AI_AUTOMATION_HOME_FAQS = [
  {
    question: "What is included in your AI automation services?",
    answer:
      "Our AI automation work in Qatar covers discovery, solution design, custom agents and copilots, RAG and knowledge bases, workflow automation, API integrations with major model providers, QA, launch, and optional ongoing AI operations support.",
  },
  {
    question: "Do you build chatbots, agents, or full AI products?",
    answer:
      "We build all three depending on your goal: customer-facing assistants, internal copilots, multi-step agents with tool use, and embedded AI features inside your existing web or mobile applications.",
  },
  {
    question: "Which AI technologies and providers do you use?",
    answer:
      "We work with OpenAI, Azure OpenAI, Anthropic, and open models where appropriate, plus orchestration with LangChain, LlamaIndex, vector databases, and your cloud (AWS, Azure, GCP). Choices depend on latency, language, data residency, and cost.",
  },
  {
    question: "How do you handle data privacy for AI in Qatar?",
    answer:
      "We scope what data enters models, use private endpoints or regional hosting when required, enforce access control, logging, and human review paths, and align with your internal governance before production launch.",
  },
  {
    question: "How can we get started with AI automation in Doha?",
    answer:
      "Contact our Doha team for a discovery session. We map high-value use cases, integration points, and a pragmatic roadmap—from pilot copilot to production agents.",
  },
];

export const AI_AUTOMATION_HOME_RTS =
  "AI Automation That Puts Products and Agents to Work";

export const AI_AUTOMATION_HOME_OPERATE =
  "AI only pays off when it ships inside real workflows. You need a partner who understands models, integrations, product UX, and how Qatar teams adopt new tools. Saqrih helps businesses move from experiments to production copilots, agents, RAG systems, and automation—without losing control of data or brand.";

export const AI_AUTOMATION_HOME_ADVANTAGE = {
  label: "Why choose Saqrih for AI automation in Qatar",
  headingLines: [
    "Product-minded AI,",
    "secure integrations,",
    "and governable launches.",
  ],
  paragraphs: [
    "We design what operations need: agents that call approved tools, copilots grounded in your documents, and automations that remove repetitive handoffs—not demos that stall in pilot.",
    "OpenAI, Azure OpenAI, Anthropic, vector search, and API-first wiring keep AI inside your stack, with observability and review steps your compliance team can understand.",
    "Our process runs from use-case discovery and architecture through build, eval, launch, and AI maintenance—so teams in Doha and across MENA adopt features that last.",
  ],
};

const BRANCH_BASE = "/services/ai-automation";

export const AI_AUTOMATION_HOME_UNLOCKING = {
  headingLine1: "Premier AI Automation Partner",
  headingLine2: "for Teams in the Middle East",
  cards: [
    {
      id: "powerbi",
      eyebrow: "AI automation services in Qatar",
      title: "Power BI Analytics",
      desc: "Power BI models, workspaces, and executive dashboards your teams will use.",
      href: `${BRANCH_BASE}/power-bi-analytics`,
      isHero: true,
    },
    {
      id: "bi",
      title: "Business Intelligence Dashboards",
      desc: "Governed BI across Power BI, Tableau, Looker, and custom reporting.",
      href: `${BRANCH_BASE}/business-intelligence-dashboards`,
    },
    {
      id: "predictive",
      title: "Predictive Analytics & Forecasting",
      desc: "Demand, revenue, and ops forecasts that feed BI and planning workflows.",
      href: `${BRANCH_BASE}/predictive-analytics-forecasting`,
    },
    {
      id: "workflow",
      title: "AI Workflow Automation",
      desc: "Connect tools and apply AI at decision points so work moves faster with fewer errors.",
      href: `${BRANCH_BASE}/ai-workflow-automation`,
    },
    {
      id: "chatbots",
      title: "AI Chatbots & Virtual Assistants",
      desc: "Conversational assistants for customers and staff with guardrails and human handoff.",
      href: `${BRANCH_BASE}/ai-chatbots-virtual-assistants`,
    },
    {
      id: "document",
      title: "Document AI & Data Extraction",
      desc: "Turn invoices, contracts, and forms into structured data with review workflows.",
      href: `${BRANCH_BASE}/document-ai-data-extraction`,
    },
    {
      id: "agents",
      title: "Custom AI Agents",
      desc: "Agents that plan, use tools, and complete multi-step tasks in your products.",
      href: `${BRANCH_BASE}/custom-ai-agents`,
    },
    {
      id: "rag",
      title: "RAG & Knowledge Systems",
      desc: "Copilots that answer from your policies, manuals, and product content—with citations.",
      href: `${BRANCH_BASE}/rag-knowledge-systems`,
    },
    {
      id: "integration",
      title: "AI Integration & APIs",
      desc: "Secure model routing, webhooks, and production APIs for embedded AI features.",
      href: `${BRANCH_BASE}/ai-integration-apis`,
    },
    {
      id: "content",
      title: "AI Content Operations",
      desc: "Drafting and localization assists with editorial review before publish.",
      href: `${BRANCH_BASE}/ai-content-operations`,
    },
    {
      id: "support",
      title: "AI Customer Support Automation",
      desc: "Triage, copilot replies, and knowledge surfacing for faster ticket resolution.",
      href: `${BRANCH_BASE}/ai-customer-support-automation`,
    },
    {
      id: "analytics",
      title: "AI Analytics & Insights",
      desc: "Natural-language questions and narrative insights over governed business data.",
      href: `${BRANCH_BASE}/ai-analytics-insights`,
    },
    {
      id: "consult",
      title: "AI Consultation & Strategy",
      desc: "Use-case prioritization, roadmaps, and governance for AI products.",
      href: `${BRANCH_BASE}/ai-consultation-strategy`,
    },
    {
      id: "maintain",
      title: "AI Maintenance & Support",
      desc: "Monitoring, evals, and updates so production AI stays accurate.",
      href: `${BRANCH_BASE}/ai-maintenance-support`,
    },
  ],
};

const AI_PIC = (slug) => `/services-pics/ai-automation/${slug}.jpg`;

export const AI_AUTOMATION_HOME_RTS_CARDS = [
  {
    badge: "Power BI",
    title: "Power BI Analytics",
    desc: "Semantic models, security, and dashboards on Microsoft Power BI.",
    href: `${BRANCH_BASE}/power-bi-analytics`,
    image: AI_PIC("power-bi-analytics"),
  },
  {
    badge: "BI",
    title: "Business Intelligence Dashboards",
    desc: "Cross-platform BI with shared KPIs and reliable refresh.",
    href: `${BRANCH_BASE}/business-intelligence-dashboards`,
    image: AI_PIC("business-intelligence-dashboards"),
  },
  {
    badge: "Forecast",
    title: "Predictive Analytics & Forecasting",
    desc: "Forward-looking models tied into BI and planning tools.",
    href: `${BRANCH_BASE}/predictive-analytics-forecasting`,
    image: AI_PIC("predictive-analytics-forecasting"),
  },
  {
    badge: "Workflow",
    title: "AI Workflow Automation",
    desc: "Intelligent orchestration across CRM, email, databases, and internal apps.",
    href: `${BRANCH_BASE}/ai-workflow-automation`,
    image: AI_PIC("ai-workflow-automation"),
  },
  {
    badge: "Assistants",
    title: "AI Chatbots & Virtual Assistants",
    desc: "Web and messaging assistants with grounded answers and escalation.",
    href: `${BRANCH_BASE}/ai-chatbots-virtual-assistants`,
    image: AI_PIC("ai-chatbots-virtual-assistants"),
  },
  {
    badge: "Documents",
    title: "Document AI & Data Extraction",
    desc: "Structured data from PDFs and scans with human review.",
    href: `${BRANCH_BASE}/document-ai-data-extraction`,
    image: AI_PIC("document-ai-data-extraction"),
  },
  {
    badge: "Agents",
    title: "Custom AI Agents",
    desc: "Tool-using agents embedded in your products and ops.",
    href: `${BRANCH_BASE}/custom-ai-agents`,
    image: AI_PIC("custom-ai-agents"),
  },
  {
    badge: "RAG",
    title: "RAG & Knowledge Systems",
    desc: "Search and Q&A over your docs with access control.",
    href: `${BRANCH_BASE}/rag-knowledge-systems`,
    image: AI_PIC("rag-knowledge-systems"),
  },
  {
    badge: "APIs",
    title: "AI Integration & APIs",
    desc: "Production integrations with major model providers.",
    href: `${BRANCH_BASE}/ai-integration-apis`,
    image: AI_PIC("ai-integration-apis"),
  },
  {
    badge: "Content",
    title: "AI Content Operations",
    desc: "Editorial-aware drafting and localization workflows.",
    href: `${BRANCH_BASE}/ai-content-operations`,
    image: AI_PIC("ai-content-operations"),
  },
  {
    badge: "Support",
    title: "AI Customer Support Automation",
    desc: "Agent copilots and triage for helpdesk teams.",
    href: `${BRANCH_BASE}/ai-customer-support-automation`,
    image: AI_PIC("ai-customer-support-automation"),
  },
  {
    badge: "Insights",
    title: "AI Analytics & Insights",
    desc: "Ask questions of metrics; surface trends and anomalies.",
    href: `${BRANCH_BASE}/ai-analytics-insights`,
    image: AI_PIC("ai-analytics-insights"),
  },
  {
    badge: "Strategy",
    title: "AI Consultation & Strategy",
    desc: "Roadmaps and governance for AI products in MENA.",
    href: `${BRANCH_BASE}/ai-consultation-strategy`,
    image: AI_PIC("ai-consultation-strategy"),
  },
  {
    badge: "Care",
    title: "AI Maintenance & Support",
    desc: "Ongoing monitoring, evals, and model updates.",
    href: `${BRANCH_BASE}/ai-maintenance-support`,
    image: AI_PIC("ai-maintenance-support"),
  },
];

export const AI_AUTOMATION_HOME_RTS_INTRO =
  "Power BI analytics, BI dashboards, predictive forecasting, agents, RAG, and ongoing AI care.";

export const AI_TECH_CATEGORIES = [
  {
    id: "models",
    label: "Models",
    title: "LLMs & providers",
    blurb:
      "Model choice tuned to language, latency, cost, and where data must stay.",
    usedFor: "Copilots, agents, classification",
    icon: "layers",
    tools: [
      { name: "OpenAI", tip: "GPT-family APIs and assistants" },
      { name: "Azure OpenAI", tip: "Enterprise and regional hosting" },
      { name: "Anthropic", tip: "Claude for reasoning-heavy tasks" },
      { name: "Open models", tip: "Self-hosted where policy requires" },
    ],
  },
  {
    id: "orchestration",
    label: "Orchestration",
    title: "Agents & chains",
    blurb:
      "Tool use, retries, and workflows that keep AI features maintainable.",
    usedFor: "Agents, RAG pipelines, automations",
    icon: "server",
    tools: [
      { name: "LangChain", tip: "Chains and tool orchestration" },
      { name: "LlamaIndex", tip: "Data frameworks for LLM apps" },
      { name: "Semantic Kernel", tip: "Enterprise agent patterns" },
      { name: "Custom Node/Python", tip: "API services you own" },
    ],
  },
  {
    id: "data",
    label: "Data",
    title: "Vector & data stores",
    blurb:
      "Embeddings, search, and warehouses for grounded AI answers.",
    usedFor: "RAG, analytics copilots",
    icon: "db",
    tools: [
      { name: "pgvector", tip: "Postgres vector search" },
      { name: "Pinecone", tip: "Managed vector index" },
      { name: "Weaviate", tip: "Hybrid search and vectors" },
      { name: "MongoDB Atlas", tip: "Document + vector workloads" },
    ],
  },
  {
    id: "integrations",
    label: "Integrate",
    title: "Apps & APIs",
    blurb:
      "Embed AI in CRMs, portals, helpdesks, CMS, and custom backends.",
    usedFor: "Product features, webhooks",
    icon: "shield",
    tools: [
      { name: "REST & GraphQL", tip: "Service boundaries" },
      { name: "Webhooks", tip: "Event-driven AI jobs" },
      { name: "Zapier / Make", tip: "Ops automation bridges" },
      { name: "WhatsApp Business", tip: "Regional messaging channels" },
    ],
  },
  {
    id: "bi",
    label: "BI",
    title: "Analytics & BI",
    blurb:
      "Dashboards and forecasts that sit on governed data your teams already trust.",
    usedFor: "Power BI, Tableau, forecasting",
    icon: "monitor",
    tools: [
      { name: "Power BI", tip: "Models, DAX, workspaces, RLS" },
      { name: "Tableau", tip: "Visual analytics and publishing" },
      { name: "Looker", tip: "LookML and embedded BI" },
      { name: "Python / SQL", tip: "Forecasting and data prep" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    title: "Cloud & observability",
    blurb:
      "Deploy, monitor, and cost-manage AI workloads in production.",
    usedFor: "Hosting, logs, evals",
    icon: "monitor",
    tools: [
      { name: "AWS", tip: "Bedrock and compute" },
      { name: "Microsoft Azure", tip: "OpenAI and enterprise IAM" },
      { name: "Google Cloud", tip: "Vertex and data services" },
      { name: "OpenTelemetry", tip: "Traces for AI calls" },
    ],
  },
];

export const AI_TECH_STATS = [
  { value: "6", label: "Stack areas" },
  { value: "BI", label: "Power BI ready" },
  { value: "API", label: "Integration first" },
];

export const AI_TECH_CAPABILITIES = [
  {
    title: "Agents & copilots",
    desc: "Multi-step agents and assistants embedded in your products.",
    icon: "bolt",
  },
  {
    title: "Grounded answers",
    desc: "RAG and citations so teams trust what AI returns.",
    icon: "layers",
  },
  {
    title: "Governed launches",
    desc: "Access control, logging, and review paths by design.",
    icon: "shield",
  },
  {
    title: "MENA-ready",
    desc: "Arabic and English flows for Qatar and regional users.",
    icon: "search",
  },
];

export const AI_TECH_MARQUEE = [
  "OpenAI",
  "Azure OpenAI",
  "Anthropic",
  "LangChain",
  "LlamaIndex",
  "pgvector",
  "Python",
  "Node.js",
  "Next.js",
  "PostgreSQL",
];

export const AI_TECH_COPY = {
  eyebrow: "Technologies we use",
  headingLine1: "Technology Stack &",
  headingLine2: "AI Automation Expertise",
  body: "Models, orchestration, vector search, APIs, and cloud—selected to ship agents and copilots that integrate with how your business already runs.",
};