import { caseStudyImage } from "../caseStudyAssets";

const IMAGE_SLUG = "Sleepy-Sloth-Society";
const SLUG = "sleepy-sloth-society";

export const SLEEPY_SLOTH_SOCIETY_CASE_STUDY = {
  slug: SLUG,
  name: "Sleepy Sloth Society",
  domain: "sleepyslothsociety.io",
  siteUrl: "https://sleepyslothsociety.io",
  heroTitle: "Sleepy Sloth Society",
  heroIntro:
    "Sleepy Sloth Society is a Web3 NFT brand from Zzz Labs—built around a playful sloth universe, collectible Outcasts, and an evolving ecosystem tied to the Fable of the Society. Saqrih designed and developed a WordPress marketing experience at sleepyslothsociety.io with cinematic splash entry, map and gallery exploration, whitepaper access, and deep mint storytelling for the Outcasts collection—responsive across desktop, tablet, and mobile.",
  meta: {
    industry: ["Web3 & NFT", "Digital Collectibles"],
    services: [
      "WordPress website design",
      "Splash landing page development",
      "NFT collection & mint storytelling",
      "Interactive map & gallery sections",
      "Responsive UI implementation",
      "Web3 CTA & whitepaper integration",
    ],
    milestones: [
      "Brand & splash page architecture",
      "Outcasts collection page design",
      "Evolution pass & mint flow content",
      "Development & cross-device QA",
      "Launch at sleepyslothsociety.io",
    ],
    timeline: ["Multi-section Web3 launch", "NFT ecosystem marketing site"],
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
      alt: "Sleepy Sloth Society website on desktop, tablet, and mobile — light background",
      featured: true,
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "all-devices-black"),
      alt: "Sleepy Sloth Society responsive website mockup on dark background",
      featured: true,
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "desktop"),
      alt: "Sleepy Sloth Society desktop landing page design",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "laptop"),
      alt: "Sleepy Sloth Society laptop website mockup",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "3-devices-white"),
      alt: "Sleepy Sloth Society Web3 marketing site across three devices",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "3-devices-black"),
      alt: "Sleepy Sloth Society multi-device presentation on dark background",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "tablet-white"),
      alt: "Sleepy Sloth Society tablet experience",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "tablet-black"),
      alt: "Sleepy Sloth Society tablet mockup on dark background",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "mobile-white"),
      alt: "Sleepy Sloth Society mobile splash page design",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "mobile-black"),
      alt: "Sleepy Sloth Society mobile mockup on dark background",
    },
  ],
  story: {
    storyHeading: "Immersive Web3 storytelling for a collectible sloth universe",
    clientOverview:
      "Sleepy Sloth Society needed a marketing site that could do more than list mint details—it had to welcome visitors through a branded splash experience, introduce the world via map and gallery exploration, and explain the Outcasts collection, evolution passes, and ThirdPortal benefits in language collectors could trust. Built on WordPress for Zzz Labs, the site balances playful brand personality with the precision Web3 audiences expect around supply, pricing, and wallet flows.",
    challenge: [
      "Create a memorable first impression with a splash entry and clear pathways into the main experience, map, gallery, and Outcasts collection.",
      "Explain a complex mint model—four evolution passes, burn mechanics, and up to 5,000 unique Outcasts—without overwhelming first-time visitors.",
      "Present pricing, supply, and whitelist details for passes like the Vial of Sleep and EtherElixir in a scannable, credible format.",
      "Deliver a responsive WordPress build that could support ongoing drops, whitepaper updates, and ecosystem expansions like ThirdPortal access.",
    ],
    approach: [
      "Designed a cinematic home splash with Enter CTAs that funnel visitors into the core Sleepy Sloth Society experience and Outcasts storytelling.",
      "Structured the Outcasts page around narrative, mint mechanics, and pass distribution—Flask of Sleepiness, Vial of Sleep, EtherElixir, and the limited 777 Vessel.",
      "Built dedicated exploration touchpoints for the interactive map and Sleepy Gallery to deepen world-building beyond the mint page.",
      "Integrated whitepaper and portal CTAs so collectors could move from discovery to documentation and wallet-connected actions with confidence.",
      "Validated layouts across desktop, laptop, tablet, and mobile using multi-device mockups throughout QA.",
    ],
    outcomes: [
      "A launch-ready marketing site at sleepyslothsociety.io presenting the Sleepy Sloth Society brand, Outcasts collection, and ecosystem entry points in one cohesive experience.",
      "Responsive layouts proven across desktop, laptop, tablet, and phone form factors.",
      "Clear storytelling for evolution passes, supply caps, and ThirdPortal benefits ahead of mint.",
      "A scalable WordPress foundation ready for new drops, rarity rankings, and ongoing Web3 campaign updates.",
    ],
  },
  showcase: {
    eyebrow: "Responsive delivery",
    title: "Built to welcome collectors on every screen",
    galleryTitle: "Sleepy Sloth Society across devices",
  },
};
