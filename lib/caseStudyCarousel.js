/**
 * Shared case study carousel cards — single source for EndToEndSection and /work.
 * Toggle INCLUDE_HIDDEN_CASE_STUDIES to restore cards 01–07 in carousel + work page.
 */

export const INCLUDE_HIDDEN_CASE_STUDIES = false;

/** @typedef {{ num: string, label: string, sub: string, href: string, img: string, imgFit?: string }} CaseStudyCard */

/** icomat1 hidden 01–07: fueled → ufomammoot */
const HIDDEN_ICOMAT1_CARDS = [
  {
    num: "01",
    label: "FUELED",
    sub: "Enterprise marketing site for a digital product agency—AI, mobile, web, and WordPress VIP expertise showcased across every device.",
    href: "/case-studies/fueled",
    img: "/case-studies/fueled/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "02",
    label: "NECTAFY",
    sub: "WordPress marketing site for a human content agency—Content Credibility and HumanContent offerings, built for authenticity across every device.",
    href: "/case-studies/nectafy",
    img: "/case-studies/nectafy/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "03",
    label: "FADNA",
    sub: "E-commerce site for a Sri Lankan wellness brand—functional herbal teas and life-science products, responsive across every device.",
    href: "/case-studies/fadna",
    img: "/case-studies/fadna/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "04",
    label: "ECHT SOCIAL",
    sub: "Marketing site for a boutique Sri Lankan digital agency—social, design, SEO, and content services, responsive across every device.",
    href: "/case-studies/echtsocial",
    img: "/case-studies/echtsocial/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "05",
    label: "CLE INDY",
    sub: "Marketing site for a leadership and career consultancy—coaching, outplacement, and culture programs, responsive across every device.",
    href: "/case-studies/cleindy",
    img: "/case-studies/cleindy/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "06",
    label: "BRINC",
    sub: "Marketing site for a public safety drone company—hardware, software, and agency programs, responsive across every device.",
    href: "/case-studies/brincdrones",
    img: "/case-studies/brincdrones/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "07",
    label: "UFOMAMMOOT",
    sub: "Marketing site for a Berlin digital agency—interactive portfolio, AR/VR work, and creative technology, responsive across every device.",
    href: "/case-studies/ufomammoot",
    img: "/case-studies/ufomammoot/all-devices-white.png",
    imgFit: "contain",
  },
];

/** home1-only extra hidden card (syntax studios) */
const HIDDEN_HOME1_PREFIX_CARDS = [
  {
    num: "01",
    label: "SYNTAX STUDIOS",
    sub: "Custom WordPress marketing site for a US software agency — responsive across desktop, tablet, and mobile with ongoing partnership.",
    href: "/case-studies/syntaxstudios",
    img: "/case-studies/syntaxstudios/all-devices-white.png",
    imgFit: "contain",
  },
];

/** Active carousel / work page cards (icomat1 — pathfinders → kala) */
const VISIBLE_ICOMAT1_CARDS = [
  {
    num: "01",
    label: "PATHFINDERS",
    sub: "WordPress e-commerce site for an Islamic children's publisher—magazines, curriculum, Quran readers, and learning activities, responsive across every device.",
    href: "/case-studies/pathfinders",
    img: "/case-studies/pathfinders/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "02",
    label: "EARTHSCAPE",
    sub: "WordPress marketing site for a Sri Lankan coir manufacturer—horticultural products, sustainability story, and global export reach, responsive across every device.",
    href: "/case-studies/earthscape",
    img: "/case-studies/earthscape/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "03",
    label: "D&D FINANCIAL",
    sub: "WordPress site for a financial services organization—mediation, accounts receivable, and consumer documentation divisions, responsive across every device.",
    href: "/case-studies/d-and-d-financial",
    img: "/case-studies/d&d-financial/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "04",
    label: "INFINITY STORE",
    sub: "WooCommerce electronics store for a Sri Lankan retailer—phones, laptops, accessories, and nationwide delivery, responsive across every device.",
    href: "/case-studies/infinitystore",
    img: "/case-studies/infinitystore/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "05",
    label: "PREMIER ONE SOLUTIONS",
    sub: "WordPress site for a financial services organization—mediation, accounts receivable, and clerk divisions, responsive across every device.",
    href: "/case-studies/premieronesolutions",
    img: "/case-studies/premieronesolutions/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "06",
    label: "CASH BOYS",
    sub: "Web3 marketing site for an NFT community brand—roadmap, team, methods, and yield storytelling built for conversion across every device.",
    href: "/case-studies/cash-boys",
    img: "/case-studies/Cash-Boys/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "07",
    label: "SLEEPY SLOTH SOCIETY",
    sub: "WordPress Web3 site for an NFT collectible brand—splash entry, Outcasts mint storytelling, map, gallery, and whitepaper access across every device.",
    href: "/case-studies/sleepy-sloth-society",
    img: "/case-studies/Sleepy-Sloth-Society/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "08",
    label: "BAY CLINIC OF CHIROPRACTIC",
    sub: "WordPress healthcare site for a Panama City, FL chiropractic practice—holistic care, functional medicine, conditions, articles, and patient testimonials across every device.",
    href: "/case-studies/bay-clinic-of-chiropractic",
    img: "/case-studies/Bay-Clinic-of-Chiropractic/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "09",
    label: "AMAZED HOME CARE",
    sub: "WordPress senior care site for a Houston, TX provider—home care, memory care, specialized support, blog education, and appointment booking across every device.",
    href: "/case-studies/amazed-home-care",
    img: "/case-studies/Amazed-home-care/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "10",
    label: "EXPEDITION LABS",
    sub: "Product marketing site for an AI workflow automation company—autonomous agents, document intelligence, operational copilots, and industry positioning across every device.",
    href: "/case-studies/expedition-labs",
    img: "/case-studies/Expedition-labs/all-devices-white.png",
    imgFit: "contain",
  },
  {
    num: "11",
    label: "KALA HOLDINGS",
    sub: "WordPress corporate site for a Sri Lankan property & logistics group—sectors, flagship projects, client partnerships, and community commitments across every device.",
    href: "/case-studies/kala-holdings",
    img: "/case-studies/Kala-Holdings/all-devices-white.png",
    imgFit: "contain",
  },
];

/** home1 visible when hidden off: ufomammoot + pathfinders → kala */
const VISIBLE_HOME1_CARDS = [
  HIDDEN_ICOMAT1_CARDS[6],
  ...VISIBLE_ICOMAT1_CARDS,
];

function renumberCards(cards) {
  return cards.map((card, index) => ({
    ...card,
    num: String(index + 1).padStart(2, "0"),
  }));
}

/** @param {"icomat1" | "home1"} [variant] */
export function getCaseStudyCarouselCards(variant = "icomat1") {
  if (INCLUDE_HIDDEN_CASE_STUDIES) {
    if (variant === "home1") {
      return renumberCards([
        ...HIDDEN_HOME1_PREFIX_CARDS,
        ...HIDDEN_ICOMAT1_CARDS.slice(1),
        ...VISIBLE_ICOMAT1_CARDS,
      ]);
    }
    return renumberCards([...HIDDEN_ICOMAT1_CARDS, ...VISIBLE_ICOMAT1_CARDS]);
  }

  if (variant === "home1") {
    return renumberCards(VISIBLE_HOME1_CARDS);
  }

  return VISIBLE_ICOMAT1_CARDS;
}

/** Pair indices for /work grid layout — big hero rows + side-by-side pairs */
const WORK_PAIR_INDICES = new Set([1, 2, 4, 5, 7, 8]);

/** @param {"icomat1" | "home1"} [variant] */
export function getCaseStudyWorkProjects(variant = "icomat1") {
  return getCaseStudyCarouselCards(variant).map((card, index) => {
    const slug = card.href.replace(/^\/case-studies\//, "");
    return {
      id: slug,
      category: card.label,
      title: card.sub,
      href: card.href,
      image: card.img,
      imageAlt: `${card.label} responsive website mockups`,
      layout: WORK_PAIR_INDICES.has(index) ? "pair" : "big",
    };
  });
}
