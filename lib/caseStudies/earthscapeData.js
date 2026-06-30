import { caseStudyImage } from "../caseStudyAssets";

const SLUG = "earthscape";

export const EARTHSCAPE_CASE_STUDY = {
  slug: SLUG,
  name: "Earthscape",
  domain: "earthscapesl.com",
  siteUrl: "https://earthscapesl.com",
  heroTitle: "Earthscape",
  heroIntro:
    "Earthscape is one of Sri Lanka's largest manufacturers and exporters of coir (coco peat) products for horticultural and agricultural applications—from grow bags and blocks to husk chips, disks, and erosion-control matting. Saqrih partnered with Earthscape to design and develop a WordPress marketing site that showcases their product range, sustainability story, and global export reach with a fast, responsive experience across every device.",
  meta: {
    industry: ["Coir & Horticulture", "Manufacturing & Export"],
    services: [
      "WordPress website design",
      "Custom theme development",
      "Product catalog architecture",
      "Responsive UI implementation",
      "Performance optimization",
      "Ongoing support & iteration",
    ],
    milestones: [
      "Discovery & content architecture",
      "Design system & page templates",
      "Product & sustainability sections",
      "Development & cross-device QA",
      "Launch & handoff",
    ],
    timeline: ["Multi-phase engagement", "Global B2B export focus"],
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
      alt: "Earthscape website on desktop, tablet, and mobile — light background",
      featured: true,
    },
    {
      src: caseStudyImage(SLUG, "all-devices-black"),
      alt: "Earthscape responsive website mockup on dark background",
      featured: true,
    },
    { src: caseStudyImage(SLUG, "desktop"), alt: "Earthscape desktop website design" },
    { src: caseStudyImage(SLUG, "laptop"), alt: "Earthscape laptop website mockup" },
    { src: caseStudyImage(SLUG, "3-devices-white"), alt: "Earthscape website across three devices" },
    {
      src: caseStudyImage(SLUG, "3-devices-black"),
      alt: "Earthscape multi-device presentation on dark background",
    },
    { src: caseStudyImage(SLUG, "tablet-white"), alt: "Earthscape tablet experience" },
    { src: caseStudyImage(SLUG, "tablet-black"), alt: "Earthscape tablet mockup on dark background" },
    { src: caseStudyImage(SLUG, "mobile-white"), alt: "Earthscape mobile website design" },
    { src: caseStudyImage(SLUG, "mobile-black"), alt: "Earthscape mobile mockup on dark background" },
  ],
  story: {
    storyHeading: "Sri Lankan coir expertise, presented to the world",
    clientOverview:
      "Based in Sri Lanka's coconut triangle, Earthscape manufactures and exports coir-based horticultural products trusted by growers across Europe, the Americas, and Asia. Their catalog spans grow bags, coir blocks, briquettes, husk chips, disks, weed-control matting, and customised substrates—backed by two decades of steady growth and a commitment to 100% natural, sustainable production. The site needed to communicate that depth of capability while making it easy for international buyers to explore products, sustainability credentials, and regional contact points.",
    challenge: [
      "Present a wide B2B product range—from grow bags and blocks to husk chips, disks, and geo-textiles—without overwhelming agricultural buyers and distributors.",
      "Convey Earthscape's sustainability story and natural coir credentials alongside factory capability, quality assurance, and global export experience.",
      "Support multiple regional contact journeys for Sri Lanka, the USA, and Mexico within one cohesive brand experience.",
      "Deliver a fast, responsive WordPress site that works flawlessly on desktop, tablet, and mobile for international prospects researching suppliers.",
    ],
    approach: [
      "Structured the site around clear paths: products, sustainability, customised offerings, gallery, and contact—aligned to how B2B buyers evaluate coir suppliers.",
      "Designed a clean, earth-toned visual system that reflects Earthscape's natural product positioning and manufacturing credibility.",
      "Built modular templates for product categories, sustainability pillars, and regional office details so the Earthscape team can update content independently.",
      "Highlighted export markets, factory locations, and quote-request flows to support international lead generation.",
      "Validated layouts across desktop, laptop, tablet, and mobile throughout QA using multi-device mockups.",
    ],
    outcomes: [
      "A launch-ready site at earthscapesl.com that presents Earthscape's products, sustainability story, and global reach in one cohesive experience.",
      "Responsive layouts proven across desktop, laptop, tablet, and phone form factors.",
      "A scalable WordPress foundation ready for new product lines, blog content, and regional expansions.",
      "A digital presence that reflects Earthscape's positioning: finest-quality coir products, manufactured in Sri Lanka and trusted worldwide.",
    ],
  },
  showcase: {
    eyebrow: "Responsive delivery",
    title: "Built to look sharp on every screen",
    galleryTitle: "Earthscape across devices",
  },
};
