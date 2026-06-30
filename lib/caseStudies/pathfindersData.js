import { caseStudyImage } from "../caseStudyAssets";

const SLUG = "pathfinders";

export const PATHFINDERS_CASE_STUDY = {
  slug: SLUG,
  name: "Pathfinders Publications",
  domain: "pathfinderspublications.com",
  siteUrl: "https://pathfinderspublications.com",
  heroTitle: "Pathfinders Publications",
  heroIntro:
    "Pathfinders Publications creates Islamic educational literature for children—magazines, story books, activity books, a ten-year curriculum, and graded Quran readers that make faith-based learning creative and engaging. Saqrih partnered with Pathfinders to design and develop a WordPress e-commerce site that showcases their full product catalog, free learning activities, and brand story with a fast, responsive experience across every device.",
  meta: {
    industry: ["Islamic Children's Education", "Publishing & E-commerce"],
    services: [
      "WordPress website design",
      "WooCommerce store development",
      "Custom theme development",
      "Product catalog architecture",
      "Responsive UI implementation",
      "Performance optimization",
    ],
    milestones: [
      "Discovery & content architecture",
      "Design system & page templates",
      "Store setup & category mapping",
      "Development & cross-device QA",
      "Launch & handoff",
    ],
    timeline: ["Multi-phase engagement", "Ongoing publishing growth"],
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
      alt: "Pathfinders Publications website on desktop, tablet, and mobile — light background",
      featured: true,
    },
    {
      src: caseStudyImage(SLUG, "all-devices-black"),
      alt: "Pathfinders Publications responsive website mockup on dark background",
      featured: true,
    },
    { src: caseStudyImage(SLUG, "desktop"), alt: "Pathfinders Publications desktop website design" },
    { src: caseStudyImage(SLUG, "laptop"), alt: "Pathfinders Publications laptop website mockup" },
    { src: caseStudyImage(SLUG, "3-devices-white"), alt: "Pathfinders Publications website across three devices" },
    {
      src: caseStudyImage(SLUG, "3-devices-black"),
      alt: "Pathfinders Publications multi-device presentation on dark background",
    },
    { src: caseStudyImage(SLUG, "tablet-white"), alt: "Pathfinders Publications tablet experience" },
    { src: caseStudyImage(SLUG, "tablet-black"), alt: "Pathfinders Publications tablet mockup on dark background" },
    { src: caseStudyImage(SLUG, "mobile-white"), alt: "Pathfinders Publications mobile website design" },
    { src: caseStudyImage(SLUG, "mobile-black"), alt: "Pathfinders Publications mobile mockup on dark background" },
  ],
  story: {
    storyHeading: "Islamic learning made joyful for young readers",
    clientOverview:
      "Pathfinders Publications helps Muslim children learn through stories, puzzles, crafts, games, and curriculum rooted in the Quran and Sunnah. Their flagship Pathfinders Magazine reaches thousands of homes in Sri Lanka and subscribers abroad, while their growing catalog spans activity books, story books, a ten-year Islamic studies curriculum, graded Quran readers, educational posters, stickers, and stationery. The site needed to unite that breadth—commerce, free activities, and the founder's story—in one welcoming destination for parents, teachers, and young learners.",
    challenge: [
      "Organize a wide product range—from magazines and curriculum to Quran readers, posters, mugs, and wall frames—so families and educators can browse and buy with confidence.",
      "Present Pathfinders' educational mission and authentic Islamic values alongside a modern, child-friendly brand without cluttering the shopping experience.",
      "Surface free downloadable activities (worksheets, colouring pages, art and craft) alongside paid publications in a way that supports discovery and engagement.",
      "Deliver a fast, responsive WordPress storefront that works seamlessly on desktop, tablet, and mobile for local and international customers.",
    ],
    approach: [
      "Structured the site around clear journeys: store categories, activities hub, our story, and how to order—aligned to how parents and teachers actually shop and plan lessons.",
      "Designed a warm, illustration-led visual system that reflects Pathfinders' emphasis on creativity, curiosity, and positive Islamic messaging.",
      "Built WooCommerce category architecture for publications, curriculum, Arabic and Quran readers, posters, stickers, and gift items.",
      "Developed modular templates for product listings, activity categories, and editorial pages so the Pathfinders team can publish and merchandise independently.",
      "Validated layouts across desktop, laptop, tablet, and mobile throughout QA using multi-device mockups.",
    ],
    outcomes: [
      "A launch-ready site at pathfinderspublications.com that presents Pathfinders' catalog, free activities, and brand story in one cohesive experience.",
      "Responsive layouts proven across desktop, laptop, tablet, and phone form factors.",
      "A scalable WordPress and WooCommerce foundation ready for new issues, curriculum releases, and product lines.",
      "A digital presence that reflects Pathfinders' goal: enriching children's Islamic education through engaging, trustworthy, and beautifully presented learning resources.",
    ],
  },
  showcase: {
    eyebrow: "Responsive delivery",
    title: "Built to look sharp on every screen",
    galleryTitle: "Pathfinders Publications across devices",
  },
};
