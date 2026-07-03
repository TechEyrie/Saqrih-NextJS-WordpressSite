import { caseStudyImage } from "../caseStudyAssets";

const IMAGE_SLUG = "Expedition-labs";
const SLUG = "expedition-labs";

export const EXPEDITION_LABS_CASE_STUDY = {
  slug: SLUG,
  name: "Expedition Labs",
  domain: "expeditionlabs.ai",
  siteUrl: "https://expeditionlabs.ai",
  heroTitle: "Expedition Labs",
  heroIntro:
    "Expedition Labs builds AI software that replaces entire workflows—not dashboards that add to manual work. Saqrih designed and developed a product marketing site at expeditionlabs.ai that communicates autonomous agents for finance, healthcare, legal, and operations teams, with interactive capability showcases, industry positioning, and a clear path to contact—responsive across desktop, tablet, and mobile.",
  meta: {
    industry: ["AI & Software", "Enterprise Automation"],
    services: [
      "Product marketing site design",
      "Interactive capability showcases",
      "Technical storytelling & UX",
      "Responsive UI implementation",
      "Performance optimization",
      "Conversion-focused contact flows",
    ],
    milestones: [
      "Discovery & messaging architecture",
      "Capability section design",
      "Development & cross-device QA",
      "Launch at expeditionlabs.ai",
      "Ongoing iteration support",
    ],
    timeline: ["Product-led marketing site", "AI workflow automation brand"],
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
      alt: "Expedition Labs website on desktop, tablet, and mobile — light background",
      featured: true,
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "all-devices-black"),
      alt: "Expedition Labs responsive website mockup on dark background",
      featured: true,
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "desktop"),
      alt: "Expedition Labs desktop product marketing site design",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "laptop"),
      alt: "Expedition Labs laptop website mockup",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "3-devices-white"),
      alt: "Expedition Labs AI software marketing site across three devices",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "3-devices-black"),
      alt: "Expedition Labs multi-device presentation on dark background",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "tablet-white"),
      alt: "Expedition Labs tablet experience",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "tablet-black"),
      alt: "Expedition Labs tablet mockup on dark background",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "mobile-white"),
      alt: "Expedition Labs mobile website design",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "mobile-black"),
      alt: "Expedition Labs mobile mockup on dark background",
    },
  ],
  story: {
    storyHeading: "Product marketing for AI that eliminates manual workflows",
    clientOverview:
      "Expedition Labs needed a site that could sell a bold thesis: operations teams do not need another dashboard—they need the workflow replaced entirely. From autonomous portal navigation and fund reconciliation to document intelligence and operational copilots, the marketing experience had to make complex AI capabilities tangible for buyers in financial services, healthcare, legal, and recruiting—without drowning visitors in jargon.",
    challenge: [
      "Translate advanced AI product capabilities—MFA portal agents, TB/GL reconciliation, LLM document extraction, and pipeline orchestration—into clear, credible marketing sections.",
      "Communicate a differentiated positioning: eliminate manual copy-paste workflows rather than augment them with another tool.",
      "Present industry focus across finance, healthcare, talent, legal, and technology in a scannable, enterprise-ready layout.",
      "Deliver a fast, responsive marketing site with scroll-driven storytelling and a direct path to contact.",
    ],
    approach: [
      "Anchored the homepage around a sharp value proposition—software that replaces entire workflows—with scroll-to-explore navigation suited to a technical audience.",
      "Designed interactive-style capability blocks for portal navigation, multi-entity reconciliation, document intelligence, operational copilots, intelligent search, and data pipelines.",
      "Built a thesis section that reinforces Expedition Labs’ philosophy: if a human is copying data between systems, something is broken.",
      "Structured industry coverage and contact pathways so enterprise prospects can quickly assess fit and reach contact@expeditionlabs.ai.",
      "Validated layouts across desktop, laptop, tablet, and mobile using multi-device mockups throughout QA.",
    ],
    outcomes: [
      "A launch-ready marketing site at expeditionlabs.ai presenting Expedition Labs’ AI workflow automation platform and industry focus in one cohesive experience.",
      "Responsive layouts proven across desktop, laptop, tablet, and phone form factors.",
      "Clear storytelling for six core product capabilities and five target industries.",
      "A scalable marketing foundation ready for case studies, product updates, and enterprise lead generation.",
    ],
  },
  showcase: {
    eyebrow: "Responsive delivery",
    title: "Built to sell complex AI on every screen",
    galleryTitle: "Expedition Labs across devices",
  },
};
