import { caseStudyImage } from "../caseStudyAssets";

const SLUG = "premieronesolutions";

export const PREMIER_ONE_SOLUTIONS_CASE_STUDY = {
  slug: SLUG,
  name: "Premier One Solutions",
  domain: "premieronesolutions.org",
  siteUrl: "https://premieronesolutions.org",
  heroTitle: "Premier One Solutions",
  heroIntro:
    "Premier One Solutions provides professional assistance to businesses and consumers through mediation, accounts receivable management, and consumer documentation—helping parties resolve civil matters and settle debts with trained guidance and clear repayment options. Saqrih partnered with Premier One Solutions to design and develop a WordPress site that presents their divisions, services, and contact pathways with a trustworthy, responsive experience across every device.",
  meta: {
    industry: ["Financial Services", "Mediation & Collections"],
    services: [
      "WordPress website design",
      "Custom theme development",
      "Multi-division page architecture",
      "Responsive UI implementation",
      "Performance optimization",
      "Contact & compliance flows",
    ],
    milestones: [
      "Discovery & content architecture",
      "Design system & page templates",
      "Division landing pages",
      "Development & cross-device QA",
      "Launch & handoff",
    ],
    timeline: ["Multi-phase engagement", "Consumer-facing services"],
  },
  images: {
    hero: caseStudyImage(SLUG, "all-devices-white"),
    desktop: caseStudyImage(SLUG, "desktop"),
    laptop: caseStudyImage(SLUG, "laptop"),
    mobileWhite: caseStudyImage(SLUG, "mobile-white"),
    mobileBlack: caseStudyImage(SLUG, "mobile-black"),
    tabletWhite: caseStudyImage(SLUG, "tablet-white"),
    tabletBlack: caseStudyImage(SLUG, "tablet-black"),
    threeDevicesWhite: caseStudyImage(SLUG, "3-devices-white"),
    threeDevicesBlack: caseStudyImage(SLUG, "3-devices-black"),
    allDevicesWhite: caseStudyImage(SLUG, "all-devices-white"),
    allDevicesBlack: caseStudyImage(SLUG, "all-devices-black"),
  },
  gallery: [
    {
      src: caseStudyImage(SLUG, "all-devices-white"),
      alt: "Premier One Solutions website on desktop, tablet, and mobile — light background",
      featured: true,
    },
    {
      src: caseStudyImage(SLUG, "all-devices-black"),
      alt: "Premier One Solutions responsive website mockup on dark background",
      featured: true,
    },
    { src: caseStudyImage(SLUG, "desktop"), alt: "Premier One Solutions desktop website design" },
    { src: caseStudyImage(SLUG, "laptop"), alt: "Premier One Solutions laptop website mockup" },
    { src: caseStudyImage(SLUG, "3-devices-white"), alt: "Premier One Solutions website across three devices" },
    {
      src: caseStudyImage(SLUG, "3-devices-black"),
      alt: "Premier One Solutions multi-device presentation on dark background",
    },
    { src: caseStudyImage(SLUG, "tablet-white"), alt: "Premier One Solutions tablet experience" },
    { src: caseStudyImage(SLUG, "tablet-black"), alt: "Premier One Solutions tablet mockup on dark background" },
    { src: caseStudyImage(SLUG, "mobile-white"), alt: "Premier One Solutions mobile website design" },
    { src: caseStudyImage(SLUG, "mobile-black"), alt: "Premier One Solutions mobile mockup on dark background" },
  ],
  story: {
    storyHeading: "Trusted financial services, clearly presented",
    clientOverview:
      "Premier One Solutions supports businesses and consumers through three core divisions: Mediation Services for pending civil matters, Accounts Receivable Management for structured debt resolution and repayment plans, and a Clerk Division that manages documentation, DocuSign agreements, and paid-in-full confirmations. The organization needed a site that explains each division clearly, routes consumers to the right contact channel, and reflects the professionalism expected in regulated financial communications.",
    challenge: [
      "Present three distinct service divisions—mediation, accounts receivable, and clerk operations—without confusing consumers about which team to contact.",
      "Communicate compliance-sensitive processes such as cease-and-desist requests, payment plans, and DocuSign agreements in plain, trustworthy language.",
      "Surface contact details, consultation CTAs, and payment options (Visa, Mastercard, Discover, American Express) for consumers ready to resolve accounts.",
      "Deliver a fast, responsive WordPress site that works seamlessly on desktop, tablet, and mobile for callers and email inquiries alike.",
    ],
    approach: [
      "Structured the site around dedicated paths for Mediation Services, Accounts Receivable Management, Clerk Division, and Opt-In—aligned to how consumers navigate their situation.",
      "Designed a clean, professional visual system that prioritizes clarity, accessibility, and confidence for financial services audiences.",
      "Built modular page templates for division overviews, consumer guidance, and contact blocks so the Premier One team can maintain content independently.",
      "Integrated clear CTAs for phone, mail, and written requests—including mediation cease-and-desist instructions with required firm and phone details.",
      "Validated layouts across desktop, laptop, tablet, and mobile throughout QA using multi-device mockups.",
    ],
    outcomes: [
      "A launch-ready site at premieronesolutions.org that presents Premier One Solutions' divisions and consumer pathways in one cohesive experience.",
      "Responsive layouts proven across desktop, laptop, tablet, and phone form factors.",
      "A scalable WordPress foundation ready for division updates, policy changes, and expanded consumer resources.",
      "A digital presence that reflects Premier One Solutions' mission: professional assistance to businesses and consumers, delivered with trained guidance and proper documentation.",
    ],
  },
  showcase: {
    eyebrow: "Responsive delivery",
    title: "Built to look sharp on every screen",
    galleryTitle: "Premier One Solutions across devices",
  },
};
