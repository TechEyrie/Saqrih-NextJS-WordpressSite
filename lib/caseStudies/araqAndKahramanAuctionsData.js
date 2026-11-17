import { caseStudyImage } from "../caseStudyAssets";

const IMAGE_SLUG = "araqandkahramanauctions";
const SLUG = "araq-and-kahraman-auctions";

export const ARAQ_AND_KAHRAMAN_AUCTIONS_CASE_STUDY = {
  slug: SLUG,
  name: "Araq & Kahraman Auctions",
  domain: "araqandkahramanauctions.qa",
  siteUrl: "https://araqandkahramanauctions.qa",
  heroTitle: "Araq & Kahraman Auctions",
  heroIntro:
    "Araq & Kahraman Auctions is a curated marketplace where inventory is published by an in-house team—visitors browse live auctions, fixed-price listings, and account checkout with AED pricing. Saqrih designed and developed a WordPress experience with gold-and-cream luxury styling, segmented Men’s, Women’s, and Unisex pathways, rich search and category filters, and trust-forward copy about safe browsing and bidding—responsive from desktop through mobile.",
  meta: {
    industry: ["Auctions & Marketplace", "Luxury Retail"],
    services: [
      "WordPress website design",
      "Marketplace & listing UX",
      "Search, filters & category architecture",
      "Auction & fixed-price flows",
      "Responsive UI implementation",
      "Localization & regional utility patterns",
    ],
    milestones: [
      "Marketplace IA & listing templates",
      "Search module & hero design",
      "Development & cross-device QA",
      "Launch-ready WordPress build",
      "Live auction surfacing patterns",
    ],
    timeline: ["Single-phase launch", "Curated Gulf-region marketplace"],
  },
  images: {
    hero: caseStudyImage(IMAGE_SLUG, "all-devices"),
    desktop: caseStudyImage(IMAGE_SLUG, "desktop"),
    laptop: caseStudyImage(IMAGE_SLUG, "laptop"),
    mobileWhite: caseStudyImage(IMAGE_SLUG, "mobile"),
    mobileBlack: caseStudyImage(IMAGE_SLUG, "mobile"),
    tabletWhite: caseStudyImage(IMAGE_SLUG, "tablet"),
    tabletBlack: caseStudyImage(IMAGE_SLUG, "tablet"),
    threeDevicesWhite: caseStudyImage(IMAGE_SLUG, "3-devices"),
    threeDevicesBlack: caseStudyImage(IMAGE_SLUG, "3-devices"),
    allDevicesWhite: caseStudyImage(IMAGE_SLUG, "all-devices"),
    allDevicesBlack: caseStudyImage(IMAGE_SLUG, "all-devices"),
  },
  gallery: [
    {
      src: caseStudyImage(IMAGE_SLUG, "all-devices"),
      alt: "Araq & Kahraman Auctions marketplace on desktop, laptop, tablet, and mobile",
      featured: true,
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "3-devices"),
      alt: "Araq & Kahraman Auctions browse, bid, and checkout experience across three devices",
      featured: true,
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "desktop"),
      alt: "Araq & Kahraman Auctions desktop homepage with search and curated marketplace hero",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "laptop"),
      alt: "Araq & Kahraman Auctions laptop view with ending-soon auctions section",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "tablet"),
      alt: "Araq & Kahraman Auctions tablet listing and filter layout",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "mobile"),
      alt: "Araq & Kahraman Auctions mobile marketplace navigation",
    },
  ],
  story: {
    storyHeading:
      "A curated auction marketplace built for trust, discovery, and segmented shopping",
    clientOverview:
      "The Araq & Kahraman team needed a digital front door that feels premium yet transparent—explaining that listings are team-published, bids and buy-now flows stay on-platform, and shoppers can filter by audience (Men, Women, Unisex) and category without wading through unvetted inventory. Regional touches such as prayer-time and weather utility bars, social follow links, and English-first navigation had to coexist with dense marketplace tools on every screen size.",
    challenge: [
      "Communicate “browse, bid, and checkout safely” while clarifying deposits, buyer premiums, and checkout rules without legal clutter in the hero.",
      "Expose powerful search—published listings, categories, and shop-for toggles—in a module that works on wide desktop and stacked mobile layouts.",
      "Organize navigation across auctions, accessories, sell-your-cars, how-it-works, and shop while keeping register and sign-in visible.",
      "Surface live urgency (ending-soon auctions) and popular search tags without overwhelming first-time visitors.",
      "Deliver a WordPress foundation that could grow with inventory, cities, and bilingual expansion.",
    ],
    approach: [
      "Framed the homepage with serif luxury typography, gold accents, and a split hero pairing narrative copy with a dark search card.",
      "Built audience shortcuts (Men’s, Women’s, Unisex listings) and popular tags to accelerate discovery from the first scroll.",
      "Designed listing modules and account entry points consistent with a managed marketplace—not an open classifieds feed.",
      "Integrated utility strips for weather, social updates, and prayer scheduling as lightweight trust and locality signals.",
      "Validated desktop, laptop, tablet, and mobile compositions against multi-device mockups through QA.",
    ],
    outcomes: [
      "A launch-ready marketplace experience that presents curated listings, search, and segmented shopping in one cohesive layout.",
      "Responsive layouts proven across desktop, laptop, tablet, and phone form factors.",
      "Clear pathways from hero search into categories, live auctions, and account registration.",
      "A scalable WordPress structure ready for inventory growth, city filters, and additional locales.",
    ],
  },
  showcase: {
    eyebrow: "Responsive delivery",
    title: "Built for confident browsing and bidding on every screen",
    galleryTitle: "Araq & Kahraman Auctions across devices",
  },
};