import { caseStudyImage } from "../caseStudyAssets";

const IMAGE_SLUG = "Amazed-home-care";
const SLUG = "amazed-home-care";

export const AMAZED_HOME_CARE_CASE_STUDY = {
  slug: SLUG,
  name: "Amazed Home Care",
  domain: "amazedhomecare.com",
  siteUrl: "https://amazedhomecare.com",
  heroTitle: "Amazed Home Care",
  heroIntro:
    "Amazed Home Care is a Houston, TX senior care provider delivering compassionate, tailored in-home support—from companionship and personal care to memory care and specialized recovery services. Saqrih designed and developed a WordPress site at amazedhomecare.com that presents 24/7 home care expertise, service breadth, trust signals, and clear booking pathways so families can find reliable care and schedule consultations across every device.",
  meta: {
    industry: ["Healthcare", "Senior & In-Home Care"],
    services: [
      "WordPress website design",
      "Healthcare service page architecture",
      "Blog & educational content hub",
      "Appointment booking CTAs",
      "Responsive UI implementation",
      "Local SEO for Houston, TX",
    ],
    milestones: [
      "Discovery & site architecture",
      "Service & trust section design",
      "Development & cross-device QA",
      "Launch at amazedhomecare.com",
      "Ongoing content expansion support",
    ],
    timeline: ["Multi-section healthcare site", "Local senior care marketing"],
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
      alt: "Amazed Home Care website on desktop, tablet, and mobile — light background",
      featured: true,
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "all-devices-black"),
      alt: "Amazed Home Care responsive website mockup on dark background",
      featured: true,
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "desktop"),
      alt: "Amazed Home Care desktop website design",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "laptop"),
      alt: "Amazed Home Care laptop website mockup",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "3-devices-white"),
      alt: "Amazed Home Care senior care site across three devices",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "3-devices-black"),
      alt: "Amazed Home Care multi-device presentation on dark background",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "tablet-white"),
      alt: "Amazed Home Care tablet experience",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "tablet-black"),
      alt: "Amazed Home Care tablet mockup on dark background",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "mobile-white"),
      alt: "Amazed Home Care mobile website design",
    },
    {
      src: caseStudyImage(IMAGE_SLUG, "mobile-black"),
      alt: "Amazed Home Care mobile mockup on dark background",
    },
  ],
  story: {
    storyHeading: "A senior care site built to earn trust and simplify care decisions",
    clientOverview:
      "Amazed Home Care needed a website that reflected more than a service list—it had to communicate compassion, professionalism, and decades of experience helping seniors live independently at home in Houston. Families researching home care, memory support, or specialized recovery services needed clear answers, trust signals, and an easy path to call or book an appointment—especially on mobile.",
    challenge: [
      "Present a broad in-home care offering—from companionship and daily activities to memory care, specialized recovery, and 24/7 live-in support—without overwhelming visitors.",
      "Build credibility through experience, medical-community trust, satisfaction guarantees, and a family-first care philosophy.",
      "Organize ancillary lifestyle services such as meal preparation, laundry, errands, transportation, and house cleaning into scannable sections.",
      "Deliver a responsive WordPress site with persistent Book Now and contact CTAs for Houston-area families.",
    ],
    approach: [
      "Structured the site around core patient and family journeys: services, about, blog education, and consultation booking.",
      "Designed trust-led hero and value sections highlighting 24/7 availability, vetted caregivers, 24+ years of experience, and medical-community referrals.",
      "Built dedicated service blocks for Home Care, Memory Care, Specialized Care, and Daily Activities with supporting lifestyle services.",
      "Integrated blog and health articles to support ongoing SEO and family education on topics like respite care and senior wellness.",
      "Validated layouts across desktop, laptop, tablet, and mobile using multi-device mockups throughout QA.",
    ],
    outcomes: [
      "A launch-ready marketing site at amazedhomecare.com presenting Amazed Home Care’s senior care services, values, and contact pathways in one cohesive experience.",
      "Responsive layouts proven across desktop, laptop, tablet, and phone form factors.",
      "Clear conversion paths for phone calls, appointment booking, and contact form inquiries.",
      "A scalable WordPress foundation ready for new service pages, blog posts, and local SEO growth in Houston, TX.",
    ],
  },
  showcase: {
    eyebrow: "Responsive delivery",
    title: "Built to support families on every screen",
    galleryTitle: "Amazed Home Care across devices",
  },
};
