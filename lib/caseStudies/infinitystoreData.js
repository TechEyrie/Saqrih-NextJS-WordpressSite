import { caseStudyImage } from "../caseStudyAssets";

const SLUG = "infinitystore";

export const INFINITYSTORE_CASE_STUDY = {
  slug: SLUG,
  name: "Infinity Store",
  domain: "infinitystore.lk",
  siteUrl: "https://infinitystore.lk",
  heroTitle: "Infinity Store",
  heroIntro:
    "Infinity Store is a Sri Lankan electronics retailer offering phones, laptops, audio gear, wearables, cameras, and lifestyle tech—with next-business-day delivery nationwide, brand spotlight deals, and installment-friendly checkout. Saqrih partnered with Infinity Store to design and develop a WooCommerce-powered WordPress e-commerce site that makes a vast product catalog easy to browse, search, and buy with a fast, responsive experience across every device.",
  meta: {
    industry: ["Consumer Electronics", "E-commerce Retail"],
    services: [
      "WordPress website design",
      "WooCommerce store development",
      "Custom theme development",
      "Product catalog architecture",
      "Responsive UI implementation",
      "Performance optimization",
    ],
    milestones: [
      "Discovery & category architecture",
      "Design system & page templates",
      "WooCommerce setup & merchandising",
      "Development & cross-device QA",
      "Launch & handoff",
    ],
    timeline: ["Multi-phase engagement", "High-volume retail catalog"],
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
      alt: "Infinity Store website on desktop, tablet, and mobile — light background",
      featured: true,
    },
    {
      src: caseStudyImage(SLUG, "all-devices-black"),
      alt: "Infinity Store responsive website mockup on dark background",
      featured: true,
    },
    { src: caseStudyImage(SLUG, "desktop"), alt: "Infinity Store desktop website design" },
    { src: caseStudyImage(SLUG, "laptop"), alt: "Infinity Store laptop website mockup" },
    { src: caseStudyImage(SLUG, "3-devices-white"), alt: "Infinity Store website across three devices" },
    {
      src: caseStudyImage(SLUG, "3-devices-black"),
      alt: "Infinity Store multi-device presentation on dark background",
    },
    { src: caseStudyImage(SLUG, "tablet-white"), alt: "Infinity Store tablet experience" },
    { src: caseStudyImage(SLUG, "tablet-black"), alt: "Infinity Store tablet mockup on dark background" },
    { src: caseStudyImage(SLUG, "mobile-white"), alt: "Infinity Store mobile website design" },
    { src: caseStudyImage(SLUG, "mobile-black"), alt: "Infinity Store mobile mockup on dark background" },
  ],
  story: {
    storyHeading: "Sri Lanka's tech destination, built to convert",
    clientOverview:
      "Infinity Store sells everything from flagship iPhones and Samsung Galaxy devices to earbuds, smartwatches, laptops, cameras, gaming consoles, and home appliances—backed by next-business-day delivery across Sri Lanka and a steady rotation of deals from brands like Anker, Baseus, WiWU, and Recci. The site needed to handle a deep category tree, flash-sale merchandising, and mobile-first shoppers comparing prices and installment options before they buy.",
    challenge: [
      "Organize a large catalog spanning mobile phones, laptops, audio, wearables, cameras, and lifestyle electronics without overwhelming shoppers.",
      "Surface time-sensitive promotions—countdown deals, brand spotlights, mega sales, and recommended products—in a way that drives discovery and conversion.",
      "Support Sri Lankan buying patterns with clear pricing, stock status, installment breakdowns, and fast paths to cart and checkout on mobile.",
      "Deliver a high-performance WooCommerce storefront that stays fast and responsive across desktop, tablet, and phone.",
    ],
    approach: [
      "Mapped navigation around top-level journeys: Mobile & Accessories, Laptops & Computers, Electronics & Lifestyle, Deals, and Shop All.",
      "Designed a retail-forward visual system with prominent category tiles, deal timers, and brand spotlight modules for merchandising flexibility.",
      "Built WooCommerce category architecture for phones, audio, wearables, laptops, cameras, pre-owned devices, and promotional collections.",
      "Developed reusable templates for product grids, sale badges, and footer support links (warranty, after-sales, corporate orders).",
      "Validated layouts across desktop, laptop, tablet, and mobile throughout QA using multi-device mockups.",
    ],
    outcomes: [
      "A launch-ready site at infinitystore.lk that presents Infinity Store's catalog, deals, and brand story in one cohesive shopping experience.",
      "Responsive layouts proven across desktop, laptop, tablet, and phone form factors.",
      "A scalable WooCommerce foundation ready for new arrivals, seasonal campaigns, and expanding product lines.",
      "A digital storefront that reflects Infinity Store's promise: next-business-day delivery and a trusted destination for tech across Sri Lanka.",
    ],
  },
  showcase: {
    eyebrow: "Responsive delivery",
    title: "Built to look sharp on every screen",
    galleryTitle: "Infinity Store across devices",
  },
};
