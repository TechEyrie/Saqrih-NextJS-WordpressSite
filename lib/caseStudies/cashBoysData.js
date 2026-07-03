import { caseStudyImage } from "../caseStudyAssets";

const IMAGE_SLUG = "Cash-Boys";
const SLUG = "cash-boys";

export const CASH_BOYS_CASE_STUDY = {
  slug: SLUG,
  name: "Cash Boys",
  domain: "cb.thetecheyrie.com",
  siteUrl: "https://cb.thetecheyrie.com",
  heroTitle: "Cash Boys",
  heroIntro:
    "Cash Boys is a Web3 NFT brand built around community, yield, and a bold “only NFT that makes you money” positioning. Saqrih designed and developed a high-impact marketing site at cb.thetecheyrie.com that introduces the project, maps the roadmap, showcases the team, and drives visitors toward Discord and Twitter—with a responsive experience across desktop, tablet, and mobile.",
  meta: {
    industry: ["Web3 & NFT", "Digital Community"],
    services: [
      "WordPress website design",
      "Landing page development",
      "Roadmap & content sections",
      "Responsive UI implementation",
      "Community CTA integration",
      "Performance optimization",
    ],
    milestones: [
      "Brand & page architecture",
      "Visual design & section templates",
      "Development & cross-device QA",
      "Launch at cb.thetecheyrie.com",
      "Community funnel optimization",
    ],
    timeline: ["Single-phase launch", "Web3 marketing site"],
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
      alt: "Cash Boys website on desktop, tablet, and mobile — light background",
      featured: true,
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "all-devices-black"),
      alt: "Cash Boys responsive website mockup on dark background",
      featured: true,
    },
    { src: caseStudyImage(IMAGE_SLUG, "desktop"), alt: "Cash Boys desktop landing page design" },
    { src: caseStudyImage(IMAGE_SLUG, "laptop"), alt: "Cash Boys laptop website mockup" },
    {
      src: caseStudyImage(IMAGE_SLUG, "3-devices-white"),
      alt: "Cash Boys Web3 marketing site across three devices",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "3-devices-black"),
      alt: "Cash Boys multi-device presentation on dark background",
    },
    { src: caseStudyImage(IMAGE_SLUG, "tablet-white"), alt: "Cash Boys tablet experience" },
    { src: caseStudyImage(IMAGE_SLUG, "tablet-black"), alt: "Cash Boys tablet mockup on dark background" },
    { src: caseStudyImage(IMAGE_SLUG, "mobile-white"), alt: "Cash Boys mobile landing page design" },
    { src: caseStudyImage(IMAGE_SLUG, "mobile-black"), alt: "Cash Boys mobile mockup on dark background" },
  ],
  story: {
    storyHeading: "A Web3 landing page built to convert curiosity into community",
    clientOverview:
      "Cash Boys needed more than a generic NFT template—a marketing site that could explain the project’s value proposition, walk visitors through a quarterly roadmap, introduce the team, and channel interest into active community channels. The experience had to feel energetic and credible on every screen, from first-time visitors discovering the brand to returning holders checking updates.",
    challenge: [
      "Communicate a distinctive NFT value proposition—“the only NFT that makes you money”—without relying on dense crypto jargon.",
      "Structure long-form marketing content (about, roadmap, team, methods, returns) into scannable sections that keep momentum on mobile.",
      "Design bold hero and CTA moments that drive joins on Discord and Twitter while maintaining brand consistency.",
      "Deliver a fast, responsive WordPress build the Cash Boys team could update as roadmap milestones and community campaigns evolved.",
    ],
    approach: [
      "Mapped the visitor journey from hero introduction through roadmap, team credibility, methods, unique NFT highlights, and returns storytelling.",
      "Designed high-contrast typography and section rhythm suited to Web3 audiences—clear headlines, strong CTAs, and visual breaks between quarterly roadmap blocks.",
      "Built modular page sections for About, Roadmap, Team, Methods, and Returns so content could be refreshed without rebuilding layouts.",
      "Integrated persistent community entry points—Join Us, Learn More, and social links—for Discord and Twitter throughout the experience.",
      "Validated layouts across desktop, laptop, tablet, and mobile using multi-device mockups during QA.",
    ],
    outcomes: [
      "A launch-ready marketing site at cb.thetecheyrie.com presenting Cash Boys’ brand story, roadmap, team, and community pathways in one cohesive flow.",
      "Responsive layouts proven across desktop, laptop, tablet, and phone form factors.",
      "Clear conversion paths from landing sections to Discord and Twitter community channels.",
      "A scalable WordPress foundation ready for roadmap updates, new NFT drops, and ongoing Web3 campaign content.",
    ],
  },
  showcase: {
    eyebrow: "Responsive delivery",
    title: "Built to engage holders on every screen",
    galleryTitle: "Cash Boys across devices",
  },
};
