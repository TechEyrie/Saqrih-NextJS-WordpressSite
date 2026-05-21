/**
 * Unique eyrion pic slots for /icomat1 homepage sections.
 * Each number 1–12 appears at most once here (EndToEndSection manages its own set).
 */

import { eyrionPic } from "./siteImages";

export const HOMEPAGE_HOW_WE_OPERATE_IMAGES = [
  {
    src: eyrionPic(1),
    alt: "Eyrion design and development workflow",
  },
  {
    src: eyrionPic(2),
    alt: "Eyrion quality review and support process",
  },
];

export const HOMEPAGE_ICOMAT_SOLUTION_CARDS = [
  {
    id: "production",
    label: "WordPress website design",
    href: "/wordpress/design",
    src: eyrionPic(3),
    alt: "Design team presenting a WordPress website concept",
  },
  {
    id: "design",
    label: "WordPress development",
    href: "/wordpress/development",
    src: eyrionPic(4),
    alt: "Developers collaborating on WordPress code",
  },
  {
    id: "tailored",
    label: "Hosting, support, and SEO",
    href: "/wordpress/hosting",
    src: eyrionPic(5),
    alt: "Digital infrastructure and performance engineering",
  },
];

export const HOMEPAGE_INDUSTRIES = [
  {
    id: "services",
    label: "Services",
    heading: "Explore our\nWordPress website services.",
    subheading: "This is WordPress at its best.",
    src: eyrionPic(6),
    alt: "Team workshop planning WordPress services",
  },
  {
    id: "testimonials",
    label: "Testimonials",
    heading: "Testimonials from\nhappy customers.",
    subheading:
      '"Their team is highly responsive, thorough, and consultative in guiding us through a website technical optimization."',
    src: eyrionPic(9),
    alt: "Client team meeting at night",
  },
  {
    id: "projects",
    label: "Case studies",
    heading: "Featured projects",
    subheading: "HRchitect, Tiger, Azelis A&ES, and Acertus.",
    src: eyrionPic(12),
    alt: "Featured WordPress client projects and case studies",
  },
  {
    id: "technology",
    label: "Technology",
    heading: "Built for performance\nand scale.",
    subheading:
      "Secure hosting, speed optimization, and modern WordPress engineering for businesses across Qatar and the Gulf.",
    src: eyrionPic(11),
    alt: "Circuit board representing digital engineering",
  },
  {
    id: "flexibility",
    label: "How we work",
    heading: "A modern team,\nwherever you are.",
    subheading:
      "Distributed experts collaborating with your business — from Doha to Dubai, Riyadh, and beyond.",
    src: eyrionPic(8),
    alt: "Professional working remotely on a laptop outdoors",
  },
];

export const HOMEPAGE_UNLOCKING_IMAGE_CARDS = [
  {
    id: "work",
    label: "FEATURED PROJECTS",
    href: "/work",
    src: eyrionPic(10),
    alt: "Eyrion WordPress project work",
  },
  {
    id: "team",
    label: "OUR TEAM",
    href: "/about-us",
    src: eyrionPic(7),
    alt: "Eyrion team collaboration",
  },
];
