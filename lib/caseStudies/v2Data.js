import { caseStudyImage } from "../caseStudyAssets";

const IMAGE_SLUG = "v2";
const SLUG = "v2";

export const V2_CASE_STUDY = {
  slug: SLUG,
  name: "V2 3D Printing",
  domain: "v23dprinting.com",
  siteUrl: "https://v23dprinting.com",
  heroTitle: "V2 3D Printing",
  heroIntro:
    "V2 is a 3D printing and custom toys brand built around the promise “Your idea, printed.” Saqrih designed and developed a WordPress commerce site with cinematic product storytelling, bilingual-ready navigation, promotional banners, and shop pathways—from hero through catalog—with a bold red-and-dark identity that reads clearly on desktop, laptop, tablet, and mobile.",
  meta: {
    industry: ["3D Printing", "E-commerce & Consumer Goods"],
    services: [
      "WordPress website design",
      "E-commerce storefront UX",
      "Promotional banner & countdown patterns",
      "Product hero & catalog sections",
      "Responsive UI implementation",
      "WhatsApp & contact integration",
    ],
    milestones: [
      "Brand & shop information architecture",
      "Hero & catalog visual design",
      "Development & cross-device QA",
      "Launch-ready WordPress build",
      "Promo campaign layout support",
    ],
    timeline: ["Single-phase launch", "Custom toys & 3D print brand"],
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
      alt: "V2 3D printing and custom toys website across desktop, laptop, tablet, and mobile",
      featured: true,
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "3-devices"),
      alt: "V2 shop and product hero across three device sizes",
      featured: true,
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "desktop"),
      alt: "V2 desktop homepage — Your idea, printed hero and shop navigation",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "laptop"),
      alt: "V2 laptop website mockup with promotional banner",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "tablet"),
      alt: "V2 tablet storefront experience",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "mobile"),
      alt: "V2 mobile shop layout with contact shortcuts",
    },
  ],
  story: {
    storyHeading: "A print-on-demand brand site built to turn ideas into shoppable products",
    clientOverview:
      "V2 needed a digital storefront that feels as physical and inventive as 3D printing itself—a place where visitors immediately understand custom toys and printed goods, can browse collections, and are nudged toward purchase during promotions. The experience had to carry a strong maker aesthetic (dark photography, red logo accents, uppercase headlines) while staying practical for everyday shopping on phone and desktop.",
    challenge: [
      "Lead with a memorable value proposition—“Made just for you” and “Your idea, printed”—without burying shop and contact paths beneath visual drama.",
      "Support time-bound offers (promotional top banner and countdown-style messaging) without cluttering navigation or breaking responsive layouts.",
      "Balance shop, contact, and language selection in a minimal header that still scales down to mobile.",
      "Deliver a WordPress build the V2 team could extend with new products, seasonal campaigns, and localized copy.",
    ],
    approach: [
      "Structured the homepage around a full-bleed hero with workshop imagery, centered messaging, and a primary CTA toward the toy catalog.",
      "Designed a high-contrast promo strip and navigation pairing shop and contact with centered brand lockup and language toggle patterns.",
      "Built modular sections for collections, offers, and exploration CTAs so campaigns could swap visuals without reworking the page skeleton.",
      "Tuned typography and spacing for small screens—stacked hero, compact nav, and thumb-friendly actions including messaging shortcuts on mobile.",
      "Validated layouts across desktop, laptop, tablet, and mobile using the supplied multi-device mockups through QA.",
    ],
    outcomes: [
      "A cohesive brand and shop experience that presents V2’s custom print positioning in one scrollable flow.",
      "Responsive layouts proven across desktop, laptop, tablet, and phone form factors.",
      "Clear pathways from hero and promotional messaging into shop exploration and contact.",
      "A scalable WordPress foundation ready for new SKUs, seasonal promos, and bilingual content expansion.",
    ],
  },
  showcase: {
    eyebrow: "Responsive delivery",
    title: "Built to showcase custom print products on every screen",
    galleryTitle: "V2 3D Printing across devices",
  },
};