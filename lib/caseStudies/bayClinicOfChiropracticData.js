import { caseStudyImage } from "../caseStudyAssets";

const IMAGE_SLUG = "Bay-Clinic-of-Chiropractic";
const SLUG = "bay-clinic-of-chiropractic";

export const BAY_CLINIC_OF_CHIROPRACTIC_CASE_STUDY = {
  slug: SLUG,
  name: "Bay Clinic of Chiropractic",
  domain: "thebaydoctor.com",
  siteUrl: "https://thebaydoctor.com",
  heroTitle: "Bay Clinic of Chiropractic",
  heroIntro:
    "Bay Clinic of Chiropractic is a holistic chiropractic and functional medicine practice in Panama City, FL, led by Dr. Tony Salamay. Saqrih designed and developed a WordPress site at thebaydoctor.com that presents advanced chiropractic care, functional neurology, nutrition, and natural therapies—helping patients discover services, conditions treated, educational content, and clear paths to book a consultation across every device.",
  meta: {
    industry: ["Healthcare", "Chiropractic & Functional Medicine"],
    services: [
      "WordPress website design",
      "Healthcare service architecture",
      "Condition & treatment page templates",
      "Video & article content hubs",
      "Responsive UI implementation",
      "Local SEO & conversion CTAs",
    ],
    milestones: [
      "Discovery & site architecture",
      "Service & condition page design",
      "Development & cross-device QA",
      "Launch at thebaydoctor.com",
      "Ongoing content expansion support",
    ],
    timeline: ["Multi-section healthcare site", "Local practice marketing"],
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
      alt: "Bay Clinic of Chiropractic website on desktop, tablet, and mobile — light background",
      featured: true,
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "all-devices-black"),
      alt: "Bay Clinic of Chiropractic responsive website mockup on dark background",
      featured: true,
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "desktop"),
      alt: "Bay Clinic of Chiropractic desktop website design",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "laptop"),
      alt: "Bay Clinic of Chiropractic laptop website mockup",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "3-devices-white"),
      alt: "Bay Clinic of Chiropractic healthcare site across three devices",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "3-devices-black"),
      alt: "Bay Clinic of Chiropractic multi-device presentation on dark background",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "tablet-white"),
      alt: "Bay Clinic of Chiropractic tablet experience",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "tablet-black"),
      alt: "Bay Clinic of Chiropractic tablet mockup on dark background",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "mobile-white"),
      alt: "Bay Clinic of Chiropractic mobile website design",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "mobile-black"),
      alt: "Bay Clinic of Chiropractic mobile mockup on dark background",
    },
  ],
  story: {
    storyHeading: "A holistic healthcare site built to educate, build trust, and drive consultations",
    clientOverview:
      "Bay Clinic of Chiropractic needed a digital presence that reflected the depth of Dr. Tony Salamay’s practice—combining chiropractic care, functional medicine, functional neurology, and personalized nutrition under one holistic brand. The site had to help Panama City patients understand complex services, explore conditions treated, watch testimonials, and contact the clinic with confidence—without feeling clinical or overwhelming on mobile.",
    challenge: [
      "Organize a wide service offering—from family and prenatal chiropractic to functional medicine, spinal decompression, PEMF therapy, and clinical nutrition—into intuitive navigation.",
      "Present musculoskeletal, neurological, and chronic metabolic conditions in a way that educates patients and supports local search visibility.",
      "Build trust through doctor credentials, patient video testimonials, articles, and an educational video library.",
      "Deliver a fast, responsive WordPress site with clear call-to-action paths for phone, contact forms, and newsletter signups.",
    ],
    approach: [
      "Structured the site around core patient journeys: services, conditions helped, practice story, and contact—aligned to Bay Clinic’s holistic, root-cause philosophy.",
      "Designed scannable service and technique sections covering diversified adjustments, Gonstead, SOT, Thompson Drop, upper cervical care, and nutrition response testing.",
      "Built content hubs for health articles and educational videos to support ongoing SEO and patient education.",
      "Integrated testimonials, office hours, location details, and persistent Call Now CTAs for local conversion.",
      "Validated layouts across desktop, laptop, tablet, and mobile using multi-device mockups throughout QA.",
    ],
    outcomes: [
      "A launch-ready marketing site at thebaydoctor.com presenting Bay Clinic’s holistic chiropractic and functional medicine services in one cohesive experience.",
      "Responsive layouts proven across desktop, laptop, tablet, and phone form factors.",
      "Clear pathways for patients to explore conditions, watch testimonials, read articles, and schedule a consultation.",
      "A scalable WordPress foundation ready for new service pages, articles, videos, and local SEO growth in Panama City, FL.",
    ],
  },
  showcase: {
    eyebrow: "Responsive delivery",
    title: "Built to serve patients on every screen",
    galleryTitle: "Bay Clinic of Chiropractic across devices",
  },
};
