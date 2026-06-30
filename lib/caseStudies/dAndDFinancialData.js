import { caseStudyImage } from "../caseStudyAssets";

const IMAGE_SLUG = "d&d-financial";
const SLUG = "d-and-d-financial";

export const D_AND_D_FINANCIAL_CASE_STUDY = {
  slug: SLUG,
  name: "D&D Financial",
  domain: "danddfinancial.org",
  siteUrl: "https://danddfinancial.org",
  heroTitle: "D&D Financial",
  heroIntro:
    "D&D Financial Services provides professional assistance to businesses and consumers through mediation, accounts receivable management, and consumer documentation—helping parties resolve civil matters and settle debts with trained guidance and clear repayment options. Saqrih partnered with D&D Financial to design and develop a WordPress site that presents their divisions, services, and contact pathways with a trustworthy, responsive experience across every device.",
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
    hero: caseStudyImage(IMAGE_SLUG, "all-devices-white"),
    desktop: caseStudyImage(IMAGE_SLUG, "desktop"),
    laptop: caseStudyImage(IMAGE_SLUG, "laptop"),
    mobileWhite: caseStudyImage(IMAGE_SLUG, "mobile-white"),
    mobileBlack: caseStudyImage(IMAGE_SLUG, "mobile-black"),
    tabletWhite: caseStudyImage(IMAGE_SLUG, "tablet-white"),
    tabletBlack: caseStudyImage(IMAGE_SLUG, "tablet-black"),
    threeDevicesWhite: caseStudyImage(IMAGE_SLUG, "3-devices-white"),
    threeDevicesBlack: caseStudyImage(IMAGE_SLUG, "3-devices-black"),
    allDevicesWhite: caseStudyImage(IMAGE_SLUG, "all-devices-white"),
    allDevicesBlack: caseStudyImage(IMAGE_SLUG, "all-devices-black"),
  },
  gallery: [
    {
      src: caseStudyImage(IMAGE_SLUG, "all-devices-white"),
      alt: "D&D Financial website on desktop, tablet, and mobile — light background",
      featured: true,
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "all-devices-black"),
      alt: "D&D Financial responsive website mockup on dark background",
      featured: true,
    },
    { src: caseStudyImage(IMAGE_SLUG, "desktop"), alt: "D&D Financial desktop website design" },
    { src: caseStudyImage(IMAGE_SLUG, "laptop"), alt: "D&D Financial laptop website mockup" },
    { src: caseStudyImage(IMAGE_SLUG, "3-devices-white"), alt: "D&D Financial website across three devices" },
    {
      src: caseStudyImage(IMAGE_SLUG, "3-devices-black"),
      alt: "D&D Financial multi-device presentation on dark background",
    },
    { src: caseStudyImage(IMAGE_SLUG, "tablet-white"), alt: "D&D Financial tablet experience" },
    { src: caseStudyImage(IMAGE_SLUG, "tablet-black"), alt: "D&D Financial tablet mockup on dark background" },
    { src: caseStudyImage(IMAGE_SLUG, "mobile-white"), alt: "D&D Financial mobile website design" },
    { src: caseStudyImage(IMAGE_SLUG, "mobile-black"), alt: "D&D Financial mobile mockup on dark background" },
  ],
  story: {
    storyHeading: "Professional financial services, clearly presented",
    clientOverview:
      "D&D Financial Services supports businesses and consumers through three core divisions: Mediation Services for pending civil matters, Accounts Receivable Management for structured debt resolution and repayment plans, and a Clerk Division that manages documentation, DocuSign agreements, and paid-in-full confirmations. The organization needed a site that explains each division clearly, routes consumers to the right contact channel, and reflects the professionalism expected in regulated financial communications.",
    challenge: [
      "Present three distinct service divisions—mediation, collections, and clerk operations—without confusing consumers about which team to contact.",
      "Communicate compliance-sensitive processes such as cease-and-desist requests, payment plans, and DocuSign agreements in plain, trustworthy language.",
      "Surface contact details, business hours, and payment options (Visa, Mastercard, Discover, American Express) for consumers ready to resolve accounts.",
      "Deliver a fast, responsive WordPress site that works seamlessly on desktop, tablet, and mobile for callers and email inquiries alike.",
    ],
    approach: [
      "Structured the site around dedicated paths for Mediation Services, Collections Division, Clerk Division, and Contact—aligned to how consumers navigate their situation.",
      "Designed a clean, professional visual system that prioritizes clarity, accessibility, and confidence for financial services audiences.",
      "Built modular page templates for division overviews, consumer guidance, and contact blocks so the D&D team can maintain content independently.",
      "Integrated clear CTAs for phone, email, and written requests—including mediation cease-and-desist instructions with required details.",
      "Validated layouts across desktop, laptop, tablet, and mobile throughout QA using multi-device mockups.",
    ],
    outcomes: [
      "A launch-ready site at danddfinancial.org that presents D&D Financial's divisions and consumer pathways in one cohesive experience.",
      "Responsive layouts proven across desktop, laptop, tablet, and phone form factors.",
      "A scalable WordPress foundation ready for division updates, policy changes, and expanded consumer resources.",
      "A digital presence that reflects D&D Financial's mission: professional assistance to businesses and consumers, delivered with trained guidance and proper documentation.",
    ],
  },
  showcase: {
    eyebrow: "Responsive delivery",
    title: "Built to look sharp on every screen",
    galleryTitle: "D&D Financial across devices",
  },
};
