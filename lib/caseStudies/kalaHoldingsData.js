import { caseStudyImage } from "../caseStudyAssets";

const IMAGE_SLUG = "Kala-Holdings";
const SLUG = "kala-holdings";

export const KALA_HOLDINGS_CASE_STUDY = {
  slug: SLUG,
  name: "Kala Holdings",
  domain: "kalaholdings.com",
  siteUrl: "https://kalaholdings.com",
  heroTitle: "Kala Holdings",
  heroIntro:
    "Kala Holdings (The KALA Group) is one of Sri Lanka’s leading integrated commercial and industrial property companies—owning, developing, and managing logistics facilities, hospitality assets, and commercial real estate for blue-chip partners including John Keells Holdings and Dialog Axiata. Saqrih designed and developed a WordPress corporate site at kalaholdings.com that presents sectors, flagship projects, client partnerships, and community commitments—with a polished responsive experience across every device.",
  meta: {
    industry: ["Real Estate & Logistics", "Commercial Property"],
    services: [
      "WordPress website design",
      "Corporate site architecture",
      "Sector & project showcase templates",
      "Client testimonial integration",
      "Responsive UI implementation",
      "Multi-sector navigation design",
    ],
    milestones: [
      "Discovery & content architecture",
      "Sector & project page design",
      "Development & cross-device QA",
      "Launch at kalaholdings.com",
      "Ongoing content expansion support",
    ],
    timeline: ["Multi-sector corporate site", "Sri Lanka property & logistics brand"],
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
      alt: "Kala Holdings website on desktop, tablet, and mobile — light background",
      featured: true,
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "all-devices-black"),
      alt: "Kala Holdings responsive website mockup on dark background",
      featured: true,
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "desktop"),
      alt: "Kala Holdings desktop corporate website design",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "laptop"),
      alt: "Kala Holdings laptop website mockup",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "3-devices-white"),
      alt: "Kala Holdings corporate site across three devices",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "3-devices-black"),
      alt: "Kala Holdings multi-device presentation on dark background",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "tablet-white"),
      alt: "Kala Holdings tablet experience",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "tablet-black"),
      alt: "Kala Holdings tablet mockup on dark background",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "mobile-white"),
      alt: "Kala Holdings mobile website design",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "mobile-black"),
      alt: "Kala Holdings mobile mockup on dark background",
    },
  ],
  story: {
    storyHeading: "A corporate site built to showcase scale, sectors, and Sri Lankan market leadership",
    clientOverview:
      "The KALA Group needed a digital presence that matched its stature as one of Sri Lanka’s largest logistics and property partners—with over one million square feet of logistics space leased to market leaders across telecommunications, manufacturing, and conglomerate sectors. The site had to communicate three core pillars (logistics, hospitality, and property), highlight current and future developments, and reinforce long-term client relationships built on quality, innovation, and tailored property solutions.",
    challenge: [
      "Organize a multi-sector corporate offering—logistics, hospitality, property, and active development projects—into clear navigation for investors, tenants, and partners.",
      "Present flagship assets and developments such as KALA One Tower, KALA Industrial Park, and major logistics centers for Dialog Axiata and John Keells.",
      "Tell the KALA Group origin story—from Kala Traders in Pettah to post-2009 expansion into high-growth logistics and property sectors.",
      "Deliver a responsive WordPress site with client testimonials, community commitments, and accessible contact pathways.",
    ],
    approach: [
      "Structured the site around sectors, projects, clients, community, and about—aligned to KALA’s mission of tailored property solutions and long-term partnerships.",
      "Designed project showcase sections for current developments like KALA One Tower in Ward Place and future initiatives such as the Seeduwa industrial park.",
      "Built facility highlights for landmark complexes including the Central Port Complex, John Keells Logistics Center, and Dialog Logistics Center.",
      "Integrated testimonials from enterprise partners and CSR/sustainability content to support corporate credibility.",
      "Validated layouts across desktop, laptop, tablet, and mobile using multi-device mockups throughout QA.",
    ],
    outcomes: [
      "A launch-ready corporate site at kalaholdings.com presenting the KALA Group’s logistics, property, and hospitality portfolio in one cohesive experience.",
      "Responsive layouts proven across desktop, laptop, tablet, and phone form factors.",
      "Clear pathways for visitors to explore sectors, review projects, and contact the KALA team.",
      "A scalable WordPress foundation ready for new developments, client stories, and ongoing corporate communications in Sri Lanka.",
    ],
  },
  showcase: {
    eyebrow: "Responsive delivery",
    title: "Built to represent enterprise property on every screen",
    galleryTitle: "Kala Holdings across devices",
  },
};
