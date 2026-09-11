/**
 * Adds missing SEO sub-service pages into hub SubPages + Home card catalogs.
 * Run: node scripts/add-missing-subservices.js
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

function noEmDash(s) {
  return String(s)
    .replace(/\u2014/g, ",")
    .replace(/\u2013/g, "-")
    .replace(/\s+—\s+/g, ", ")
    .replace(/\s+–\s+/g, " - ");
}

function deepClean(obj) {
  if (typeof obj === "string") return noEmDash(obj);
  if (Array.isArray(obj)) return obj.map(deepClean);
  if (obj && typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) out[k] = deepClean(v);
    return out;
  }
  return obj;
}

function buildPage(def, practiceLabel, techBodyHint) {
  const titleLower = def.title.toLowerCase();
  const page = {
    slug: def.slug,
    title: def.title,
    shortDesc: def.shortDesc,
    description: `${def.title} in Qatar from Saqrih. ${def.shortDesc} Built for performance, SEO, and growth in Doha and the wider Middle East.`,
    serviceType: def.title,
    heroTitle: def.heroTitle,
    heroLead: def.heroLead,
    heroTitleMaxCh: def.heroTitleMaxCh || "16ch",
    advantage: {
      label: `Why choose Saqrih for ${titleLower} in Doha`,
      heading: def.heading,
      intro: `Saqrih delivers ${titleLower} as part of our ${practiceLabel} practice in Qatar. ${def.shortDesc} We combine strategy, design, and engineering so your solution looks sharp and performs in market.`,
      rightTitle: `${def.title} engineered for clarity, speed, and measurable outcomes`,
      features: def.features,
    },
    process: {
      title: "How it works",
      items: def.process,
    },
    faqs: def.faqs,
    faqHeading: "Questions? We have answers",
    faqSubtitle: `Common questions about ${titleLower} for businesses in Qatar and the wider Middle East.`,
    techCopy: {
      eyebrow: "Technologies we use",
      headingLine1: "Technology Stack &",
      headingLine2: def.techLine2,
      body: techBodyHint,
    },
  };
  return deepClean(page);
}

const WD_PRACTICE = "Website Design";
const WA_PRACTICE = "Web Application Development";
const WSM_PRACTICE = "Website Support and Maintenance";

const websiteDesignDefs = [
  {
    slug: "web-design-and-development",
    title: "Web Design and Development",
    shortDesc:
      "End to end web design and development for brands that need a polished site and a solid technical foundation.",
    heroTitle: "Web Design and\nDevelopment in Qatar",
    heroLead:
      "End to end web design and development for brands that need a polished site and a solid technical foundation. Strategy, UX, visuals, and engineering delivered as one coherent build.",
    heroTitleMaxCh: "16ch",
    heading: "Design and engineering delivered as one practice",
    techLine2: "Web Design and Development Expertise",
    features: [
      {
        title: "Unified design and build",
        desc: "UX, visual design, and front end engineering stay aligned so the live site matches the approved experience.",
      },
      {
        title: "Conversion minded layouts",
        desc: "Page structure, hierarchy, and CTAs are planned to turn visitors into inquiries without clutter.",
      },
      {
        title: "Performance ready delivery",
        desc: "Clean code, responsive layouts, and image strategy so the site stays fast on mobile and desktop.",
      },
      {
        title: "SEO friendly structure",
        desc: "Semantic markup, metadata, and content models that help your pages compete in local and industry search.",
      },
    ],
    process: [
      {
        number: "1",
        title: "Discover and plan",
        body: "Goals, audiences, competitors, and content needs define the sitemap and design direction.",
      },
      {
        number: "2",
        title: "Design the experience",
        body: "Wireframes and visual design establish hierarchy, brand expression, and conversion paths.",
      },
      {
        number: "3",
        title: "Develop and integrate",
        body: "Responsive front end, CMS or stack setup, forms, and tracking are implemented carefully.",
      },
      {
        number: "4",
        title: "Launch and refine",
        body: "QA, go live support, and early optimizations keep the site stable after launch.",
      },
    ],
    faqs: [
      {
        question: "What is included in Web Design and Development from Saqrih?",
        answer:
          "Typical scope covers discovery, UX and visual design, front end development, CMS or stack setup, QA, and launch support. Exact scope is documented before work starts.",
      },
      {
        question: "Do you design and develop in the same project?",
        answer:
          "Yes. Design and development run as one workstream so handoffs stay clean and the shipped site matches the approved design.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Timelines depend on page count, integrations, and content readiness. Many business sites ship in weeks once scope and content are clear. We share a schedule after discovery.",
      },
      {
        question: "Will the site be optimized for search engines?",
        answer:
          "Yes. We build with clean structure, fast loads, metadata, and crawl friendly URLs so your site has a strong SEO foundation from day one.",
      },
      {
        question: "Can you work with our existing brand guidelines?",
        answer:
          "Absolutely. We can follow your brand system closely, or help refine messaging and layout patterns where needed.",
      },
      {
        question: "Do you offer support after launch?",
        answer:
          "Yes. Maintenance and support options cover updates, monitoring, backups, and small improvements after go live.",
      },
    ],
  },
  {
    slug: "free-consultation",
    title: "Free Consultation",
    shortDesc:
      "A no obligation consultation to clarify goals, scope, timelines, and the right digital approach for your business.",
    heroTitle: "Free Consultation\nfor Digital Projects in Qatar",
    heroLead:
      "A no obligation consultation to clarify goals, scope, timelines, and the right digital approach for your business. Leave with clear next steps you can act on.",
    heroTitleMaxCh: "16ch",
    heading: "Clarity before you commit to a build",
    techLine2: "Consultation Expertise",
    features: [
      {
        title: "Goal focused conversation",
        desc: "We focus on business outcomes, audience needs, and constraints so recommendations stay practical.",
      },
      {
        title: "Honest scope guidance",
        desc: "You get a clear view of what belongs in an MVP, what can wait, and what risks to plan for.",
      },
      {
        title: "Technology fit advice",
        desc: "We outline sensible stack and platform options for your team, budget, and growth plans.",
      },
      {
        title: "Actionable next steps",
        desc: "You leave with priorities, rough timeline thinking, and a path toward a formal proposal if you want one.",
      },
    ],
    process: [
      {
        number: "1",
        title: "Share your brief",
        body: "Tell us about your business, current site or product, goals, and any deadlines that matter.",
      },
      {
        number: "2",
        title: "Consult with specialists",
        body: "We walk through options for design, development, platforms, and delivery approach.",
      },
      {
        number: "3",
        title: "Receive clear recommendations",
        body: "You get prioritized guidance on scope, sequencing, and what success should look like.",
      },
      {
        number: "4",
        title: "Decide on next steps",
        body: "If you want to proceed, we prepare a proposal and project plan. If not, you still leave with useful clarity.",
      },
    ],
    faqs: [
      {
        question: "Is the consultation really free?",
        answer:
          "Yes. The initial consultation is free and designed to help you understand options before you commit to a project.",
      },
      {
        question: "How long does a Free Consultation usually take?",
        answer:
          "Most sessions run about 30 to 45 minutes depending on complexity. We can schedule longer when the brief needs more depth.",
      },
      {
        question: "What should I prepare before the call?",
        answer:
          "Bring your goals, target audience, examples you like, current site or product links, and any must have features or deadlines.",
      },
      {
        question: "Do I have to hire Saqrih after the consultation?",
        answer:
          "No. There is no obligation. Many clients use the session to decide whether to move forward, revise scope, or wait.",
      },
      {
        question: "Can you consult on redesign, new builds, and apps?",
        answer:
          "Yes. We advise on websites, web applications, SaaS ideas, e commerce, WordPress, and related digital initiatives.",
      },
      {
        question: "How do I book a Free Consultation?",
        answer:
          "Use the Get a Quote flow on the site or contact Saqrih directly. We will confirm a time that works for your team in Qatar or remote.",
      },
    ],
  },
  {
    slug: "law-firm-web-design",
    title: "Law Firm Web Design",
    shortDesc:
      "Professional websites for law firms that build trust, explain practice areas, and convert qualified inquiries.",
    heroTitle: "Law Firm Web Design\nServices in Qatar",
    heroLead:
      "Professional websites for law firms that build trust, explain practice areas, and convert qualified inquiries. Clear structure, credible tone, and discreet conversion paths.",
    heroTitleMaxCh: "16ch",
    heading: "Credibility first websites for legal practices",
    techLine2: "Law Firm Web Design Expertise",
    features: [
      {
        title: "Trust centered presentation",
        desc: "Practice areas, lawyers, and credentials are structured so prospective clients feel confident contacting you.",
      },
      {
        title: "Clear practice area pages",
        desc: "Each service line is explained with plain language that still respects professional standards.",
      },
      {
        title: "Inquiry paths that convert",
        desc: "Consultation CTAs, forms, and contact options are placed for serious prospects without aggressive sales tactics.",
      },
      {
        title: "Local SEO foundations",
        desc: "Location cues, structured content, and fast pages help your firm show up for relevant legal searches.",
      },
    ],
    process: [
      {
        number: "1",
        title: "Map practice areas and audiences",
        body: "We clarify which services, locations, and client types the site must prioritize.",
      },
      {
        number: "2",
        title: "Design for trust",
        body: "Layouts, photography direction, and typography are tuned for professional credibility.",
      },
      {
        number: "3",
        title: "Build and content structure",
        body: "Practice pages, attorney profiles, and inquiry flows are implemented with SEO friendly structure.",
      },
      {
        number: "4",
        title: "Launch and handoff",
        body: "QA, analytics, and editor training so your firm can update content safely after launch.",
      },
    ],
    faqs: [
      {
        question: "What makes Law Firm Web Design different from a generic business site?",
        answer:
          "Legal sites need stronger trust signals, clearer practice area education, and careful tone. We design around those needs while keeping conversion paths simple.",
      },
      {
        question: "Can you create pages for multiple practice areas?",
        answer:
          "Yes. We structure dedicated pages for each practice area with consistent templates that stay easy to maintain.",
      },
      {
        question: "Do you support attorney profile pages?",
        answer:
          "Yes. Profiles can include bios, specializations, languages, and contact options tailored to how your firm prefers to be contacted.",
      },
      {
        question: "Will the site help with local search visibility?",
        answer:
          "We build with technical SEO foundations, clear headings, fast performance, and location relevant content structure so local discovery is supported.",
      },
      {
        question: "Can the site include a consultation request form?",
        answer:
          "Yes. Forms can route to email, CRM, or practice management tools depending on your intake process.",
      },
      {
        question: "Do you redesign existing law firm websites?",
        answer:
          "Yes. We can modernize outdated sites while preserving strong content and redirecting important URLs where needed.",
      },
    ],
  },
  {
    slug: "real-estate-web-design",
    title: "Real Estate Web Design",
    shortDesc:
      "Property focused websites for brokerages, developers, and agencies with listings, lead capture, and brand presence.",
    heroTitle: "Real Estate Web Design\nServices in Qatar",
    heroLead:
      "Property focused websites for brokerages, developers, and agencies with listings, lead capture, and brand presence. Built to showcase inventory and convert serious buyers and tenants.",
    heroTitleMaxCh: "18ch",
    heading: "Property marketing sites that turn interest into leads",
    techLine2: "Real Estate Web Design Expertise",
    features: [
      {
        title: "Listing first experiences",
        desc: "Search, filters, and property detail layouts that make inventory easy to browse on mobile and desktop.",
      },
      {
        title: "Lead capture that fits sales teams",
        desc: "Inquiry forms, WhatsApp links, and call paths wired for how your agents actually follow up.",
      },
      {
        title: "Brand credibility for developers and agencies",
        desc: "Project storytelling, galleries, and company pages that support premium positioning.",
      },
      {
        title: "Integration ready structure",
        desc: "Architecture planned for CRM, MLS style feeds, or listing imports when your workflow needs them.",
      },
    ],
    process: [
      {
        number: "1",
        title: "Define inventory and lead goals",
        body: "We map listing types, audiences, and the inquiry outcomes your sales team wants.",
      },
      {
        number: "2",
        title: "Design browse and detail flows",
        body: "Search UX, property cards, and detail pages are designed for clarity and conversion.",
      },
      {
        number: "3",
        title: "Build and connect tools",
        body: "Front end, CMS or listing workflows, and lead routing are implemented carefully.",
      },
      {
        number: "4",
        title: "Launch and optimize",
        body: "Go live with tracking in place, then refine based on real inquiry behavior.",
      },
    ],
    faqs: [
      {
        question: "Can Real Estate Web Design include property listings?",
        answer:
          "Yes. We can build listing browse and detail experiences, whether content is managed manually or connected to an external feed.",
      },
      {
        question: "Do you support developer project websites?",
        answer:
          "Yes. Master plans, unit mixes, galleries, brochures, and inquiry flows are common for developer and project marketing sites.",
      },
      {
        question: "Can leads go to our CRM or WhatsApp?",
        answer:
          "Yes. Forms and contact actions can route to email, CRM, WhatsApp, or other tools your agents already use.",
      },
      {
        question: "Will the site work well on mobile?",
        answer:
          "Yes. Real estate browsing is heavily mobile. Layouts, filters, and forms are designed for phones first.",
      },
      {
        question: "Can you redesign our existing agency website?",
        answer:
          "Yes. We can refresh branding and UX while keeping strong listing content and improving lead capture.",
      },
      {
        question: "Do you help with SEO for property pages?",
        answer:
          "We implement technical SEO foundations, clean URL patterns, and content structure that support location and property related search.",
      },
    ],
  },
  {
    slug: "fintech-web-design",
    title: "FinTech Web Design",
    shortDesc:
      "Modern websites for FinTech brands that communicate trust, product clarity, and secure digital experiences.",
    heroTitle: "FinTech Web Design\nServices in Qatar",
    heroLead:
      "Modern websites for FinTech brands that communicate trust, product clarity, and secure digital experiences. Clean product storytelling for investors, partners, and customers.",
    heroTitleMaxCh: "14ch",
    heading: "Trust heavy design for financial technology brands",
    techLine2: "FinTech Web Design Expertise",
    features: [
      {
        title: "Product clarity without jargon overload",
        desc: "Complex offerings are explained with clear hierarchy, proof points, and audience specific messaging.",
      },
      {
        title: "Trust and compliance cues",
        desc: "Security, partnerships, and regulatory signals are presented in ways that support credibility.",
      },
      {
        title: "Conversion for demos and waitlists",
        desc: "CTA patterns for demos, waitlists, partner inquiries, and investor contact are designed intentionally.",
      },
      {
        title: "Performance and security minded builds",
        desc: "Fast pages and hardened delivery practices suited to brands that cannot afford a sloppy first impression.",
      },
    ],
    process: [
      {
        number: "1",
        title: "Align on product and audiences",
        body: "We clarify who the site must convince and which product stories matter most.",
      },
      {
        number: "2",
        title: "Design trust centered UX",
        body: "Information architecture and visuals are tuned for clarity, proof, and professional polish.",
      },
      {
        number: "3",
        title: "Develop and instrument",
        body: "Responsive build, forms, analytics, and integrations for demos or CRM capture.",
      },
      {
        number: "4",
        title: "Launch with care",
        body: "QA, accessibility checks, and go live support so the brand launches cleanly.",
      },
    ],
    faqs: [
      {
        question: "Is FinTech Web Design only for startups?",
        answer:
          "No. We work with startups, scale ups, and established financial technology companies that need clearer product and brand websites.",
      },
      {
        question: "Can you design product and marketing pages together?",
        answer:
          "Yes. Many FinTech sites need both brand storytelling and deeper product explanation pages. We plan both in one system.",
      },
      {
        question: "Do you handle secure form and demo request flows?",
        answer:
          "Yes. We implement secure form handling and can connect demos or waitlists to your CRM or email tools.",
      },
      {
        question: "Can the design reflect a complex multi product offering?",
        answer:
          "Yes. Information architecture can support multiple products, personas, and use cases without overwhelming visitors.",
      },
      {
        question: "Will the site be mobile friendly?",
        answer:
          "Yes. Responsive design is standard so product and trust content stay clear on phones and desktops.",
      },
      {
        question: "Do you also build FinTech mobile apps?",
        answer:
          "Mobile app development is available as a separate practice. FinTech Web Design focuses on the website experience. We can coordinate both when needed.",
      },
    ],
  },
  {
    slug: "startup-business-website",
    title: "Startup Business Website",
    shortDesc:
      "Fast, focused websites for startups that need a credible online presence, clear offer, and investor ready polish.",
    heroTitle: "Startup Business\nWebsite Services in Qatar",
    heroLead:
      "Fast, focused websites for startups that need a credible online presence, clear offer, and investor ready polish. Launch quickly without looking unfinished.",
    heroTitleMaxCh: "16ch",
    heading: "Lean websites that help startups look ready",
    techLine2: "Startup Website Expertise",
    features: [
      {
        title: "Speed to market",
        desc: "Focused page sets that get you live quickly while leaving room to expand as the product matures.",
      },
      {
        title: "Clear offer messaging",
        desc: "Homepage and product pages explain what you do, who it is for, and why it matters.",
      },
      {
        title: "Credibility for early audiences",
        desc: "Team, traction, and contact paths are presented so customers and partners take you seriously.",
      },
      {
        title: "Scalable foundation",
        desc: "Clean structure so you can add blogs, careers, docs, or product pages without starting over.",
      },
    ],
    process: [
      {
        number: "1",
        title: "Clarify the MVP site",
        body: "We define the smallest page set that still communicates your offer and converts interest.",
      },
      {
        number: "2",
        title: "Design for clarity",
        body: "Messaging hierarchy and visuals are designed to look intentional, not temporary.",
      },
      {
        number: "3",
        title: "Build and launch fast",
        body: "Responsive development, forms, analytics, and CMS basics ship on a practical timeline.",
      },
      {
        number: "4",
        title: "Iterate after feedback",
        body: "Early user and investor feedback informs the next content and feature improvements.",
      },
    ],
    faqs: [
      {
        question: "How is a Startup Business Website different from a corporate site?",
        answer:
          "Startup sites prioritize speed, clarity, and a lean page set. We focus on the essential story and conversion paths first, then expand later.",
      },
      {
        question: "Can you include waitlist or demo signup?",
        answer:
          "Yes. Waitlists, demo requests, and early access forms are common and can connect to email or CRM tools.",
      },
      {
        question: "Do you help with messaging if our copy is not ready?",
        answer:
          "We can help structure messaging and page outlines. Final product claims should still come from your team.",
      },
      {
        question: "Will the site be good enough for investors?",
        answer:
          "A clean, professional site with clear positioning helps first impressions. We design for credibility without overbuilding.",
      },
      {
        question: "Can we start small and add pages later?",
        answer:
          "Yes. That is the recommended path for many startups. The architecture is planned so expansion stays smooth.",
      },
      {
        question: "What platforms do you use for startup sites?",
        answer:
          "Depending on needs we may use WordPress, Next.js, or other modern stacks. We recommend based on speed, budget, and future product plans.",
      },
    ],
  },
];

const webAppDefs = [
  {
    slug: "application-development",
    title: "Application Development",
    shortDesc:
      "Custom application development for web based business tools, portals, and operational platforms.",
    heroTitle: "Application Development\nServices in Qatar",
    heroLead:
      "Custom application development for web based business tools, portals, and operational platforms. Built around real workflows, not generic templates.",
    heroTitleMaxCh: "18ch",
    heading: "Applications shaped around how your business works",
    techLine2: "Application Development Expertise",
    features: [
      {
        title: "Workflow first discovery",
        desc: "We map roles, processes, and pain points before writing code so the product fits operations.",
      },
      {
        title: "Secure by design",
        desc: "Authentication, permissions, and data handling are planned early for business critical use.",
      },
      {
        title: "Integrations that reduce double entry",
        desc: "APIs and third party connections keep your application connected to tools you already rely on.",
      },
      {
        title: "Maintainable architecture",
        desc: "Clean structure and documentation so the application can grow without becoming fragile.",
      },
    ],
    process: [
      {
        number: "1",
        title: "Discover requirements",
        body: "Stakeholders, workflows, and success metrics are documented into a clear product brief.",
      },
      {
        number: "2",
        title: "Design UX and data model",
        body: "Screens, roles, and data relationships are designed around daily operational use.",
      },
      {
        number: "3",
        title: "Build and integrate",
        body: "Application features, APIs, and admin tools are implemented in iterative milestones.",
      },
      {
        number: "4",
        title: "Test, launch, support",
        body: "QA, training, and post launch support help teams adopt the new application confidently.",
      },
    ],
    faqs: [
      {
        question: "What kinds of Application Development projects do you take on?",
        answer:
          "Common work includes business portals, internal tools, dashboards, workflow systems, and customer facing web applications tailored to your processes.",
      },
      {
        question: "Is this the same as buying off the shelf software?",
        answer:
          "No. Custom application development is for cases where packaged tools force too many workarounds or cannot match your process closely enough.",
      },
      {
        question: "Do you build mobile apps as well?",
        answer:
          "Mobile apps are covered under our Mobile App Development practice. Application Development here focuses on web based applications, and we can coordinate both when needed.",
      },
      {
        question: "How do you handle security?",
        answer:
          "We plan authentication, authorization, and secure data handling as part of architecture, then validate key flows during QA.",
      },
      {
        question: "Can you integrate with our existing systems?",
        answer:
          "Yes. Integrations with CRMs, ERPs, payment tools, and internal APIs are a core part of many application projects.",
      },
      {
        question: "Do you provide ongoing maintenance?",
        answer:
          "Yes. After launch we can support enhancements, monitoring, and technical improvements as your usage grows.",
      },
    ],
  },
  {
    slug: "software-development",
    title: "Software Development",
    shortDesc:
      "End to end software development for custom platforms, business systems, and digital products.",
    heroTitle: "Software Development\nServices in Qatar",
    heroLead:
      "End to end software development for custom platforms, business systems, and digital products. From discovery through launch with engineering discipline.",
    heroTitleMaxCh: "16ch",
    heading: "Software built for real business outcomes",
    techLine2: "Software Development Expertise",
    features: [
      {
        title: "Product minded engineering",
        desc: "We balance features, usability, and technical quality so the software stays useful after launch.",
      },
      {
        title: "Scalable architecture choices",
        desc: "Stack and structure decisions are made with growth, integrations, and maintainability in mind.",
      },
      {
        title: "Transparent delivery",
        desc: "Milestones, demos, and clear communication keep stakeholders aligned throughout the build.",
      },
      {
        title: "Quality focused release process",
        desc: "Testing, reviews, and deployment discipline reduce risk when software goes live.",
      },
    ],
    process: [
      {
        number: "1",
        title: "Scope and architecture",
        body: "Business goals and constraints shape the product scope and technical approach.",
      },
      {
        number: "2",
        title: "Design and plan sprints",
        body: "UX, backlog, and delivery plan are prepared so engineering can move with focus.",
      },
      {
        number: "3",
        title: "Develop iteratively",
        body: "Features ship in reviewable increments with continuous feedback from your team.",
      },
      {
        number: "4",
        title: "Release and improve",
        body: "Production launch is followed by monitoring, fixes, and prioritized enhancements.",
      },
    ],
    faqs: [
      {
        question: "What does Software Development from Saqrih typically include?",
        answer:
          "Discovery, solution design, development, QA, deployment support, and optional ongoing improvements depending on the engagement.",
      },
      {
        question: "Do you work with startups and established companies?",
        answer:
          "Yes. We support MVP style builds for startups and more complex systems for established organizations.",
      },
      {
        question: "Which technologies do you use?",
        answer:
          "Common stacks include modern JavaScript frameworks, Node.js, PHP and Laravel, Python, and popular databases. We choose based on product needs.",
      },
      {
        question: "Can you take over an existing codebase?",
        answer:
          "Often yes. We assess the current code, risks, and priorities before proposing a remediation or feature roadmap.",
      },
      {
        question: "How do you manage project communication?",
        answer:
          "We use milestone demos, shared trackers, and regular check ins so progress and decisions stay visible.",
      },
      {
        question: "Do you offer post launch support?",
        answer:
          "Yes. Support retainers and enhancement sprints are available after the initial release.",
      },
    ],
  },
  {
    slug: "mern-stack-development",
    title: "MERN Stack Development",
    shortDesc:
      "Full stack MERN development with MongoDB, Express, React, and Node.js for modern web applications.",
    heroTitle: "MERN Stack Development\nServices in Qatar",
    heroLead:
      "Full stack MERN development with MongoDB, Express, React, and Node.js for modern web applications. Fast iteration, API first architecture, and scalable JavaScript delivery.",
    heroTitleMaxCh: "18ch",
    heading: "JavaScript full stack builds that move quickly",
    techLine2: "MERN Stack Expertise",
    features: [
      {
        title: "One language across the stack",
        desc: "JavaScript and TypeScript across client and server speeds collaboration and reduces context switching.",
      },
      {
        title: "API first product structure",
        desc: "Express and Node services expose clean APIs that React front ends and future clients can share.",
      },
      {
        title: "Flexible data modeling",
        desc: "MongoDB supports evolving product schemas when requirements change during early growth.",
      },
      {
        title: "Modern React experiences",
        desc: "Component driven UIs with strong performance patterns for dashboards, portals, and SaaS style apps.",
      },
    ],
    process: [
      {
        number: "1",
        title: "Validate product fit for MERN",
        body: "We confirm that MERN is the right stack for your timeline, team skills, and product shape.",
      },
      {
        number: "2",
        title: "Design API and UI foundations",
        body: "Data models, endpoints, auth, and React information architecture are planned together.",
      },
      {
        number: "3",
        title: "Build full stack increments",
        body: "Features are delivered end to end across database, API, and interface in reviewable slices.",
      },
      {
        number: "4",
        title: "Deploy and harden",
        body: "Hosting, monitoring, and performance tuning prepare the application for real users.",
      },
    ],
    faqs: [
      {
        question: "What is included in MERN Stack Development?",
        answer:
          "We design and build applications using MongoDB, Express, React, and Node.js, including APIs, auth, UI, and deployment support as scoped.",
      },
      {
        question: "Is MERN a good fit for every project?",
        answer:
          "Not always. It is excellent for many modern web products, but we recommend alternatives when another stack is a better long term fit.",
      },
      {
        question: "Do you use TypeScript with MERN?",
        answer:
          "Often yes. TypeScript improves maintainability for larger codebases and team collaboration.",
      },
      {
        question: "Can you build SaaS products on MERN?",
        answer:
          "Yes. Multi tenant patterns, billing integrations, and admin dashboards are common MERN SaaS builds.",
      },
      {
        question: "Do you provide DevOps and hosting guidance?",
        answer:
          "Yes. We can help with deployment pipelines, environment setup, and production monitoring practices.",
      },
      {
        question: "Can you extend an existing MERN application?",
        answer:
          "Yes. We can audit the current app and add features, refactor weak areas, or improve performance and security.",
      },
    ],
  },
  {
    slug: "ai-and-automation",
    title: "AI and Automation",
    shortDesc:
      "Practical AI and automation solutions that reduce manual work and improve operational speed.",
    heroTitle: "AI and Automation\nServices in Qatar",
    heroLead:
      "Practical AI and automation solutions that reduce manual work and improve operational speed. Focused on useful workflows, not hype.",
    heroTitleMaxCh: "14ch",
    heading: "Automation that saves hours, not just headlines",
    techLine2: "AI and Automation Expertise",
    features: [
      {
        title: "Use case first approach",
        desc: "We start with the process to automate and the measurable time or error reduction you need.",
      },
      {
        title: "Human in the loop where needed",
        desc: "Approvals and review steps stay available when full autonomy would create risk.",
      },
      {
        title: "Integration with existing tools",
        desc: "Automations connect to CRMs, forms, email, databases, and internal systems you already use.",
      },
      {
        title: "Governed AI usage",
        desc: "Prompts, data access, and logging are designed carefully so AI features stay controllable.",
      },
    ],
    process: [
      {
        number: "1",
        title: "Identify high value workflows",
        body: "We find repetitive tasks and bottlenecks where automation will produce clear ROI.",
      },
      {
        number: "2",
        title: "Design the automation path",
        body: "Triggers, rules, AI assists, and exception handling are mapped before build.",
      },
      {
        number: "3",
        title: "Implement and validate",
        body: "Automations and AI features are built, tested against real scenarios, and refined.",
      },
      {
        number: "4",
        title: "Monitor and improve",
        body: "After launch we track outcomes and expand successful patterns across more workflows.",
      },
    ],
    faqs: [
      {
        question: "What kinds of AI and Automation projects do you deliver?",
        answer:
          "Examples include workflow automation, document assist, lead routing, content operations support, and AI assisted customer or internal tools.",
      },
      {
        question: "Do you only use generative AI?",
        answer:
          "No. Many wins come from classic automation and rules. We add AI where it clearly improves the outcome.",
      },
      {
        question: "Will automation replace our team?",
        answer:
          "The goal is usually to remove repetitive work so people can focus on higher value tasks, with review steps where judgment matters.",
      },
      {
        question: "How do you protect sensitive data?",
        answer:
          "We design data access carefully, limit what tools can see, and follow secure integration practices agreed with your team.",
      },
      {
        question: "Can AI features sit inside our existing application?",
        answer:
          "Yes. Many projects extend current portals or admin tools rather than creating a separate product.",
      },
      {
        question: "How do we measure success?",
        answer:
          "We define metrics up front such as time saved, error reduction, response speed, or conversion improvement, then review after launch.",
      },
    ],
  },
  {
    slug: "data-quality-management",
    title: "Data Quality Management",
    shortDesc:
      "Data quality management services that clean, validate, and govern business data for reliable decisions.",
    heroTitle: "Data Quality Management\nServices in Qatar",
    heroLead:
      "Data quality management services that clean, validate, and govern business data for reliable decisions. Better inputs for reporting, CRM, and operations.",
    heroTitleMaxCh: "18ch",
    heading: "Clean data that teams can trust",
    techLine2: "Data Quality Expertise",
    features: [
      {
        title: "Profile and find issues",
        desc: "We inspect duplicates, missing fields, inconsistent formats, and broken relationships across key systems.",
      },
      {
        title: "Validation rules that stick",
        desc: "Entry rules, normalization, and checks prevent bad data from re entering critical workflows.",
      },
      {
        title: "Source of truth alignment",
        desc: "Ownership and sync logic are clarified so CRM, ERP, and operational tools stop fighting each other.",
      },
      {
        title: "Reporting confidence",
        desc: "Dashboards and exports become more trustworthy when underlying records are consistent.",
      },
    ],
    process: [
      {
        number: "1",
        title: "Audit critical datasets",
        body: "We identify the records and fields that matter most to sales, finance, operations, or product teams.",
      },
      {
        number: "2",
        title: "Define quality standards",
        body: "Formats, required fields, uniqueness rules, and ownership are documented clearly.",
      },
      {
        number: "3",
        title: "Clean and remediate",
        body: "Duplicates, incomplete records, and inconsistencies are corrected with controlled processes.",
      },
      {
        number: "4",
        title: "Govern ongoing quality",
        body: "Monitoring, validation, and process changes keep quality from drifting after the cleanup.",
      },
    ],
    faqs: [
      {
        question: "What is Data Quality Management in practical terms?",
        answer:
          "It is the work of making business data accurate, complete, consistent, and usable across the systems your teams rely on every day.",
      },
      {
        question: "Which systems do you usually work with?",
        answer:
          "Common sources include CRMs, ERPs, e commerce platforms, spreadsheets, and custom databases tied to web applications.",
      },
      {
        question: "Can you help if our CRM is full of duplicates?",
        answer:
          "Yes. Duplicate detection, merge strategy, and prevention rules are a frequent part of data quality engagements.",
      },
      {
        question: "Is this only a one time cleanup?",
        answer:
          "Cleanup is often the first step. Lasting results need standards, validation, and ownership so quality does not decay again.",
      },
      {
        question: "Will this improve our reporting?",
        answer:
          "Usually yes. Cleaner source data reduces conflicting numbers and makes dashboards more reliable for decision making.",
      },
      {
        question: "Do you build tools as part of data quality work?",
        answer:
          "When useful, we can implement admin tools, validation workflows, or integration fixes that enforce quality automatically.",
      },
    ],
  },
  {
    slug: "big-data-consultation-and-implementation",
    title: "Big Data Consultation and Implementation",
    shortDesc:
      "Big data consultation and implementation for collection, processing, storage, and analytics at scale.",
    heroTitle: "Big Data Consultation\nand Implementation in Qatar",
    heroLead:
      "Big data consultation and implementation for collection, processing, storage, and analytics at scale. Practical architecture guidance with delivery support.",
    heroTitleMaxCh: "18ch",
    heading: "Scale ready data strategy with implementation support",
    techLine2: "Big Data Expertise",
    features: [
      {
        title: "Right sized architecture advice",
        desc: "We recommend platforms and patterns that match your volume and team maturity, not oversized complexity.",
      },
      {
        title: "Pipeline design that holds up",
        desc: "Ingestion, transformation, and storage flows are planned for reliability and observability.",
      },
      {
        title: "Analytics ready outputs",
        desc: "Models and datasets are shaped for reporting, product features, and operational use cases.",
      },
      {
        title: "Implementation partnership",
        desc: "Beyond slides, we help implement foundations and integrate them with applications your business already runs.",
      },
    ],
    process: [
      {
        number: "1",
        title: "Assess current state",
        body: "Sources, volumes, quality issues, and analytics goals are reviewed with stakeholders.",
      },
      {
        number: "2",
        title: "Recommend architecture",
        body: "Storage, processing, and serving patterns are proposed with clear tradeoffs.",
      },
      {
        number: "3",
        title: "Implement foundations",
        body: "Pipelines, schemas, and access patterns are built in controlled phases.",
      },
      {
        number: "4",
        title: "Enable analytics and iteration",
        body: "Dashboards, APIs, or product feeds go live with room to expand as needs grow.",
      },
    ],
    faqs: [
      {
        question: "Who is Big Data Consultation and Implementation for?",
        answer:
          "It suits organizations outgrowing spreadsheets or single databases and needing more reliable collection, processing, and analytics at larger scale.",
      },
      {
        question: "Do you only provide consulting, or also implementation?",
        answer:
          "Both. We can advise on strategy and architecture, then help implement the agreed foundations.",
      },
      {
        question: "What platforms might you recommend?",
        answer:
          "Recommendations depend on volume, budget, and team skills. Options can include cloud data warehouses, streaming pipelines, and modern analytics stacks.",
      },
      {
        question: "Can this connect to our existing web applications?",
        answer:
          "Yes. A common outcome is feeding cleaner analytics datasets or APIs back into products, portals, and reporting tools.",
      },
      {
        question: "How do you keep projects from becoming too complex?",
        answer:
          "We prioritize use cases with clear ROI and stage architecture so you do not overbuild before the business needs it.",
      },
      {
        question: "Do you help with data governance?",
        answer:
          "Yes. Access control, ownership, and quality practices are part of durable big data implementations.",
      },
    ],
  },
];

const wsmDefs = [
  {
    slug: "data-center-management",
    title: "Data Center Management",
    shortDesc:
      "Data center management support covering infrastructure health, uptime practices, and operational reliability.",
    heroTitle: "Data Center Management\nServices in Qatar",
    heroLead:
      "Data center management support covering infrastructure health, uptime practices, and operational reliability. Keep critical environments monitored, maintained, and ready to recover.",
    heroTitleMaxCh: "18ch",
    heading: "Infrastructure care for reliable operations",
    techLine2: "Data Center Management Expertise",
    features: [
      {
        title: "Operational visibility",
        desc: "Monitoring and alerting practices help teams catch capacity, availability, and health issues earlier.",
      },
      {
        title: "Maintenance discipline",
        desc: "Patching, configuration hygiene, and change control reduce avoidable downtime.",
      },
      {
        title: "Backup and recovery readiness",
        desc: "Restore paths are validated so incidents do not turn into prolonged outages.",
      },
      {
        title: "Security and access hygiene",
        desc: "Access reviews, hardening baselines, and logging support a safer operating posture.",
      },
    ],
    process: [
      {
        number: "1",
        title: "Assess environment and risks",
        body: "Inventory, dependencies, and current operational gaps are reviewed with your team.",
      },
      {
        number: "2",
        title: "Define operating standards",
        body: "Monitoring, patching, backup, and escalation practices are documented clearly.",
      },
      {
        number: "3",
        title: "Implement and stabilize",
        body: "Tooling, routines, and remediations are put in place to improve day to day reliability.",
      },
      {
        number: "4",
        title: "Run and improve",
        body: "Ongoing review cycles keep capacity, security, and recovery readiness aligned with business needs.",
      },
    ],
    faqs: [
      {
        question: "What does Data Center Management from Saqrih cover?",
        answer:
          "It focuses on operational reliability practices such as monitoring, maintenance routines, backup readiness, access hygiene, and improvement planning for critical environments.",
      },
      {
        question: "Do you manage physical facilities only?",
        answer:
          "Engagements may involve on premises, colocation, or hybrid environments depending on your setup. Scope is defined around the infrastructure you need supported.",
      },
      {
        question: "How is this different from Server and Hosting Management?",
        answer:
          "Server and Hosting Management often centers on website and application hosting. Data Center Management looks at broader infrastructure operations and reliability practices.",
      },
      {
        question: "Can you help with backup and disaster recovery planning?",
        answer:
          "Yes. Backup strategy, restore testing, and recovery readiness are common parts of the engagement.",
      },
      {
        question: "Do you provide 24/7 monitoring?",
        answer:
          "Monitoring and response models are scoped to your needs. We can design alerting and escalation paths that match how your team operates.",
      },
      {
        question: "Can this be combined with website support services?",
        answer:
          "Yes. Many clients pair infrastructure operational care with website support and maintenance for a more complete reliability posture.",
      },
    ],
  },
];

function insertBeforeArrayClose(filePath, exportName, pagesJsonSnippet) {
  let src = fs.readFileSync(filePath, "utf8");
  const marker = `\n];\n\nexport function`;
  const idx = src.lastIndexOf(marker);
  if (idx === -1) {
    throw new Error(`Could not find array close before export function in ${filePath}`);
  }
  // Ensure previous object ends with comma if needed
  const before = src.slice(0, idx).replace(/\s*$/, "");
  const needsComma = !before.endsWith(",");
  const injection =
    (needsComma ? "," : "") +
    "\n  " +
    pagesJsonSnippet.replace(/\n/g, "\n  ") +
    "\n";
  src = before + injection + src.slice(idx);
  fs.writeFileSync(filePath, src);
  console.log(`Updated SubPages: ${path.relative(ROOT, filePath)} (+${exportName})`);
}

function pagesToSnippet(pages) {
  // Serialize as JS array elements without wrapping brackets
  const json = JSON.stringify(pages, null, 2);
  // strip outer [ ]
  return json.trim().replace(/^\[/, "").replace(/\]$/, "").trim();
}

function insertHomeCards(filePath, unlockingEndIdHint, unlockingCards, rtsCards) {
  let src = fs.readFileSync(filePath, "utf8");

  // Insert unlocking cards before closing of UNLOCKING.cards array:
  // find the last `],\n};` that closes cards then unlocking object - fragile.
  // Better: find href of last known card and insert after that object.
  const unlockAnchor = unlockingEndIdHint;
  const unlockPos = src.indexOf(unlockAnchor);
  if (unlockPos === -1) throw new Error(`Unlock anchor not found: ${unlockAnchor}`);
  // Find end of that object: next `},` after anchor within unlocking section
  let insertAt = src.indexOf("},", unlockPos);
  if (insertAt === -1) throw new Error("Could not find unlocking card end");
  insertAt += 2;
  const unlockSnippet =
    "\n" +
    unlockingCards
      .map(
        (c) => `    {
      id: ${JSON.stringify(c.id)},
      title: ${JSON.stringify(c.title)},
      desc: ${JSON.stringify(c.desc)},
      href: ${JSON.stringify(c.href)},
    },`
      )
      .join("\n");
  src = src.slice(0, insertAt) + unlockSnippet + src.slice(insertAt);

  // Insert RTS cards before end of RTS_CARDS array: after last image line of last card
  // Find `export const ..._HOME_RTS_CARDS` then the final `];` of that array
  const rtsMatch = src.match(/export const \w+_HOME_RTS_CARDS = \[/);
  if (!rtsMatch) throw new Error("RTS_CARDS export not found");
  const rtsStart = rtsMatch.index;
  const afterRts = src.slice(rtsStart);
  const rtsEndRel = afterRts.indexOf("\n];");
  if (rtsEndRel === -1) throw new Error("RTS_CARDS array end not found");
  const rtsEnd = rtsStart + rtsEndRel;
  const rtsSnippet =
    "\n" +
    rtsCards
      .map(
        (c) => `  {
    badge: ${JSON.stringify(c.badge)},
    title: ${JSON.stringify(c.title)},
    desc: ${JSON.stringify(c.desc)},
    href: ${JSON.stringify(c.href)},
    image: ${JSON.stringify(c.image)},
  },`
      )
      .join("\n");
  src = src.slice(0, rtsEnd) + "," + rtsSnippet + src.slice(rtsEnd);

  fs.writeFileSync(filePath, src);
  console.log(`Updated Home cards: ${path.relative(ROOT, filePath)}`);
}

const wdPages = websiteDesignDefs.map((d) =>
  buildPage(
    d,
    WD_PRACTICE,
    "Tools and platforms we use for web design and development, spanning CMS, frontend, backend, hosting, performance, and security."
  )
);
const waPages = webAppDefs.map((d) =>
  buildPage(
    d,
    WA_PRACTICE,
    "Frontend, backend, data, auth, integrations, cloud, and QA tooling we use for application and software delivery."
  )
);
const wsmPages = wsmDefs.map((d) =>
  buildPage(
    d,
    WSM_PRACTICE,
    "Monitoring, infrastructure, security, backup, and operations tooling we use for reliable data center and hosting environments."
  )
);

insertBeforeArrayClose(
  path.join(ROOT, "lib/services/websiteDevelopmentSubPages.js"),
  "WEBSITE_DEV_SUB_PAGES",
  pagesToSnippet(wdPages)
);
insertBeforeArrayClose(
  path.join(ROOT, "lib/services/webApplicationDevelopmentSubPages.js"),
  "WEB_APP_DEV_SUB_PAGES",
  pagesToSnippet(waPages)
);
insertBeforeArrayClose(
  path.join(ROOT, "lib/services/websiteSupportMaintenanceSubPages.js"),
  "WSM_DEV_SUB_PAGES",
  pagesToSnippet(wsmPages)
);

insertHomeCards(
  path.join(ROOT, "lib/services/websiteDevelopmentHome.js"),
  'href: "/services/website-design/website-maintenance"',
  websiteDesignDefs.map((d) => ({
    id: d.slug,
    title: d.title,
    desc: d.shortDesc,
    href: `/services/website-design/${d.slug}`,
  })),
  [
    {
      badge: "Design",
      title: "Web Design and Development",
      desc: "End to end web design and development with a solid technical foundation.",
      href: "/services/website-design/web-design-and-development",
      image: "/services-pics/web-design/custom-design-clean.png",
    },
    {
      badge: "Consult",
      title: "Free Consultation",
      desc: "No obligation guidance on goals, scope, timelines, and approach.",
      href: "/services/website-design/free-consultation",
      image: "/services-pics/web-design/business-design-clean.png",
    },
    {
      badge: "Legal",
      title: "Law Firm Web Design",
      desc: "Trust building websites for law firms and practice area marketing.",
      href: "/services/website-design/law-firm-web-design",
      image: "/services-pics/web-design/corporate-design-clean.png",
    },
    {
      badge: "Property",
      title: "Real Estate Web Design",
      desc: "Listing focused sites for agencies, developers, and brokerages.",
      href: "/services/website-design/real-estate-web-design",
      image: "/services-pics/web-design/brochure-design-clean.png",
    },
    {
      badge: "FinTech",
      title: "FinTech Web Design",
      desc: "Trust heavy product websites for financial technology brands.",
      href: "/services/website-design/fintech-web-design",
      image: "/services-pics/web-design/headless-design-clean.png",
    },
    {
      badge: "Startup",
      title: "Startup Business Website",
      desc: "Fast, focused websites for startups that need credible presence.",
      href: "/services/website-design/startup-business-website",
      image: "/services-pics/web-design/landing-design-clean.png",
    },
  ]
);

insertHomeCards(
  path.join(ROOT, "lib/services/webApplicationDevelopmentHome.js"),
  'href: "/services/web-application-development/legacy-application-modernization"',
  webAppDefs.map((d) => ({
    id: d.slug,
    title: d.title,
    desc: d.shortDesc,
    href: `/services/web-application-development/${d.slug}`,
  })),
  [
    {
      badge: "Apps",
      title: "Application Development",
      desc: "Custom web applications for business tools, portals, and platforms.",
      href: "/services/web-application-development/application-development",
      image: "/services-pics/web-app/custom-app-clean.png",
    },
    {
      badge: "Software",
      title: "Software Development",
      desc: "End to end software development for custom platforms and products.",
      href: "/services/web-application-development/software-development",
      image: "/services-pics/web-app/enterprise-app-clean.png",
    },
    {
      badge: "MERN",
      title: "MERN Stack Development",
      desc: "MongoDB, Express, React, and Node.js full stack application builds.",
      href: "/services/web-application-development/mern-stack-development",
      image: "/services-pics/web-app/admin-dashboard-app-clean.png",
    },
    {
      badge: "AI",
      title: "AI and Automation",
      desc: "Practical AI and automation that reduces manual operational work.",
      href: "/services/web-application-development/ai-and-automation",
      image: "/services-pics/web-app/business-process-app-clean.png",
    },
    {
      badge: "Data",
      title: "Data Quality Management",
      desc: "Clean, validate, and govern business data for reliable decisions.",
      href: "/services/web-application-development/data-quality-management",
      image: "/services-pics/web-app/crm-app-clean.png",
    },
    {
      badge: "Big Data",
      title: "Big Data Consultation and Implementation",
      desc: "Consultation and implementation for data at scale and analytics.",
      href: "/services/web-application-development/big-data-consultation-and-implementation",
      image: "/services-pics/web-app/reporting-analytics-app-clean.png",
    },
  ]
);

insertHomeCards(
  path.join(ROOT, "lib/services/websiteSupportMaintenanceHome.js"),
  'href: "/services/website-support-maintenance/ongoing-support-technical-consultation"',
  wsmDefs.map((d) => ({
    id: d.slug,
    title: d.title,
    desc: d.shortDesc,
    href: `/services/website-support-maintenance/${d.slug}`,
  })),
  [
    {
      badge: "Infra",
      title: "Data Center Management",
      desc: "Infrastructure health, uptime practices, and operational reliability.",
      href: "/services/website-support-maintenance/data-center-management",
      image: "/services-pics/support/monitoring-support-clean.png",
    },
  ]
);

console.log("Done. Added", wdPages.length + waPages.length + wsmPages.length, "sub-services.");
