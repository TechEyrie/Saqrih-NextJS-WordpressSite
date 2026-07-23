/**
 * Website Development — main service + sub-services.
 * Edit this file to add/rename sub-services; routes update automatically.
 */

export const WEBSITE_DEVELOPMENT = {
  slug: "website-development",
  path: "/services/website-development",
  title: "Website Development",
  heroTitleLines: ["Website", "development"],
  heroLead:
    "Our in-house team of skilled developers builds fast, conversion-focused websites tailored to your brand and business goals.",
  description:
    "Custom website development from Saqrih—design, build, and launch high-performance sites for businesses in Qatar and beyond.",
  serviceType: "Website development",
};

/** Sub-services nested under Website Development */
export const WEBSITE_DEVELOPMENT_SUB_SERVICES = [
  {
    slug: "business-website-development",
    title: "Business Website Development",
    shortDesc: "Conversion-ready sites that present your offer clearly and drive inquiries.",
    heroLead:
      "Business websites built to clarify your value, build trust, and turn visitors into leads—fast, polished, and easy to manage.",
    description:
      "Business website development from Saqrih—professional sites designed for growth, lead generation, and brand clarity.",
  },
  {
    slug: "corporate-website-development",
    title: "Corporate Website Development",
    shortDesc: "Enterprise-grade company sites that communicate credibility at scale.",
    heroLead:
      "Corporate websites that reflect your organization with clarity—structured navigation, strong messaging, and lead-ready UX.",
    description:
      "Corporate website development from Saqrih—professional company platforms for trust, clarity, and qualified inquiries.",
  },
  {
    slug: "custom-website-development",
    title: "Custom Website Development",
    shortDesc: "Bespoke builds tailored to your brand, workflows, and goals.",
    heroLead:
      "Fully custom website development—unique design systems, tailored features, and performance tuned to how your business actually works.",
    description:
      "Custom website development from Saqrih—bespoke design and engineering for brands that need more than a template.",
  },
  {
    slug: "landing-page-development",
    title: "Landing Page Development",
    shortDesc: "High-converting pages for ads, campaigns, and product launches.",
    heroLead:
      "Landing pages engineered for campaigns—focused messaging, fast loads, and layouts built to convert paid and organic traffic.",
    description:
      "Landing page development from Saqrih—campaign-ready pages optimized for speed, clarity, and conversions.",
  },
  {
    slug: "portfolio-website-development",
    title: "Portfolio Website Development",
    shortDesc: "Elegant showcases that put your best work front and center.",
    heroLead:
      "Portfolio websites that present your projects beautifully—clean galleries, fast media, and a narrative that wins clients.",
    description:
      "Portfolio website development from Saqrih—visual-first sites for creatives, agencies, and professionals.",
  },
  {
    slug: "brochure-website-development",
    title: "Brochure Website Development",
    shortDesc: "Clean multi-page sites that introduce your brand with polish.",
    heroLead:
      "Brochure websites that introduce who you are and what you offer—clear structure, strong visuals, and easy contact paths.",
    description:
      "Brochure website development from Saqrih—concise, professional sites for businesses that need a strong digital presence.",
  },
  {
    slug: "multilingual-website-development",
    title: "Multilingual Website Development",
    shortDesc: "Localized experiences for Arabic, English, and global audiences.",
    heroLead:
      "Multilingual websites for Qatar and international markets—localized structure, SEO, and UX that feel native in every language.",
    description:
      "Multilingual website development from Saqrih—localized sites for regional and global audiences.",
  },
  {
    slug: "headless-website-development",
    title: "Headless Website Development",
    shortDesc: "Decoupled frontends for speed, flexibility, and scale.",
    heroLead:
      "Headless website development with modern frontends and flexible CMS backends—faster delivery, better performance, future-ready architecture.",
    description:
      "Headless website development from Saqrih—API-driven sites built for speed, scalability, and editorial freedom.",
  },
  {
    slug: "pwa-development",
    title: "Progressive Web App (PWA) Development",
    shortDesc: "App-like experiences with offline support and installability.",
    heroLead:
      "Progressive Web Apps that feel native—fast loads, offline resilience, push-ready architecture, and installable experiences on any device.",
    description:
      "PWA development from Saqrih—progressive web apps that combine website reach with app-like performance.",
  },
  {
    slug: "website-migration",
    title: "Website Migration",
    shortDesc: "Safe moves to a new stack, host, or CMS without downtime drama.",
    heroLead:
      "Website migrations planned end-to-end—content, redirects, SEO preservation, and cutover handled so you stay live and discoverable.",
    description:
      "Website migration services from Saqrih—secure transfers across platforms, hosts, and CMS environments.",
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    shortDesc: "Modernize outdated sites without losing SEO equity.",
    heroLead:
      "Website redesigns that refresh UX and visuals while protecting rankings—cleaner structure, stronger performance, same hard-won equity.",
    description:
      "Website redesign services from Saqrih—modernize your site while protecting SEO and brand continuity.",
  },
  {
    slug: "website-performance-optimization",
    title: "Website Performance Optimization",
    shortDesc: "Faster loads, sharper Core Web Vitals, better conversions.",
    heroLead:
      "Performance optimization that makes your site feel instant—image strategy, code splitting, caching, and Core Web Vitals tuned for real users.",
    description:
      "Website performance optimization from Saqrih—speed and Core Web Vitals improvements that lift UX and SEO.",
  },
  {
    slug: "accessibility-optimization",
    title: "Accessibility Optimization",
    shortDesc: "Inclusive experiences that meet modern accessibility standards.",
    heroLead:
      "Accessibility optimization so more people can use your site—semantic structure, keyboard flows, contrast, and assistive-tech readiness.",
    description:
      "Accessibility optimization from Saqrih—inclusive website improvements aligned with modern a11y best practices.",
  },
  {
    slug: "website-security-hardening",
    title: "Website Security Hardening",
    shortDesc: "Hardened setups that reduce risk and keep attackers out.",
    heroLead:
      "Security hardening for production sites—updates, headers, access controls, backups, and monitoring that protect your brand and data.",
    description:
      "Website security hardening from Saqrih—proactive protection for business-critical web properties.",
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    shortDesc: "Ongoing care so your site stays fast, secure, and current.",
    heroLead:
      "Website maintenance retainers covering updates, backups, monitoring, and small improvements—so your site never quietly falls behind.",
    description:
      "Website maintenance from Saqrih—reliable ongoing support for performance, security, and content health.",
  },
];

export function getWebsiteDevSubService(slug) {
  return WEBSITE_DEVELOPMENT_SUB_SERVICES.find((s) => s.slug === slug) ?? null;
}

export function getAllWebsiteDevSubServiceSlugs() {
  return WEBSITE_DEVELOPMENT_SUB_SERVICES.map((s) => s.slug);
}

/** FAQ copy for Website Development hub (UI + FAQPage JSON-LD) */
export const WEBSITE_DEVELOPMENT_FAQS = [
  {
    question:
      "What makes Saqrih the best website design company in Qatar?",
    answer:
      "Saqrih combines local Doha market knowledge with a full in-house team of designers, developers, and strategists. We focus on conversion-ready websites—not just visuals—so every project is tailored to Qatar’s business environment, bilingual audiences, and your commercial goals. Clear process, transparent proposals, and post-launch support set us apart from template-only agencies.",
  },
  {
    question: "How long does it take to design and develop a website?",
    answer:
      "Most marketing or corporate websites take 4–8 weeks from kickoff to launch, depending on scope, content readiness, and revision rounds. Landing pages can ship faster (often 1–3 weeks), while larger multilingual, e-commerce, or custom web application builds may take longer. We share a milestone timeline in your proposal so deadlines stay clear from day one.",
  },
  {
    question: "Do you provide ongoing support after the website launches?",
    answer:
      "Yes. After launch we offer maintenance and support options covering updates, security monitoring, backups, performance checks, and small content or feature changes. You can choose a retainer that matches how often your site needs attention, so your website stays secure, fast, and current without interrupting your team.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We redesign outdated or underperforming sites while protecting SEO equity—preserving valuable URLs where possible, improving structure and Core Web Vitals, and modernizing UX and visual design. We also migrate content carefully so you keep rankings, analytics history, and brand continuity.",
  },
  {
    question: "Do your websites work on mobile devices?",
    answer:
      "Yes. Every Saqrih website is built mobile-first and tested across phones, tablets, and desktops. Layouts, navigation, forms, and performance are optimized for real-world mobile use in Qatar, where many visitors browse primarily on smartphones.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Investment depends on pages, features, integrations, and whether you need e-commerce, multilingual support, or custom functionality. Starter brochure sites start at a lower range; advanced builds with CRM integrations or complex UX cost more. We provide a fixed-scope proposal after a short discovery call so pricing is transparent before work begins.",
  },
  {
    question: "Do you offer SEO services with website design?",
    answer:
      "Yes. Technical SEO foundations are built into our website projects—clean structure, fast loading, schema-ready markup, metadata, and mobile performance. We can also pair design with ongoing SEO support for content strategy, keyword targeting, and continuous optimization after launch.",
  },
  {
    question: "Can you help with content creation for my website?",
    answer:
      "Yes. We can draft or refine page copy, headlines, CTAs, and messaging aligned to your brand voice and audience. If you prefer to supply content, we guide structure and tone. For larger needs, we coordinate with writers or your internal team so design and content move together without delays.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work across corporate and professional services, retail and e-commerce, real estate, healthcare, education, construction, hospitality, food & beverage, automotive, and more. Our process adapts to each sector’s compliance needs, buyer journey, and local Qatar market expectations.",
  },
  {
    question: "Do you provide website hosting services?",
    answer:
      "Yes. We can recommend and manage reliable hosting suited to your stack—optimized for speed, SSL, backups, and uptime. Whether you prefer managed hosting through us or your own provider, we handle setup, deployment, and ongoing environment health so your site stays online and performant.",
  },
];

