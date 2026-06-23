/** Client logos in /public/company-logos — mixed formats supported via <img> */

/** @typedef {"colored" | "light-on-dark" | "none"} LogoFilterMode */

/**
 * @typedef {Object} CompanyLogo
 * @property {string} id
 * @property {string} label
 * @property {string} src
 * @property {LogoFilterMode} [filterMode] — light-on-dark for white marks on black PNGs
 * @property {number} [scale] — multiplier on default max dimensions
 * @property {number} [minWidth] — minimum rendered width in px
 */

/** @type {CompanyLogo[]} */
export const COMPANY_LOGOS = [
  {
    id: "syntaxstudios",
    label: "Syntax Studios",
    src: "/company-logos/syntaxstudios-logo.webp",
  },
  {
    id: "fueled",
    label: "Fueled",
    src: "/company-logos/fueled-logo.webp",
  },
  {
    id: "nectafy",
    label: "Nectafy",
    src: "/company-logos/nectafy-logo.svg",
  },
  {
    id: "fadna",
    label: "Fadna",
    src: "/company-logos/fadna-logo.avif",
    filterMode: "none",
    scale: 1.4,
  },
  {
    id: "echtsocial",
    label: "Echt Social",
    src: "/company-logos/echt-logo.avif",
    scale: 1.15,
  },
  {
    id: "cleindy",
    label: "CLE Indy",
    src: "/company-logos/cleindy-logo.png",
    scale: 1.2,
  },
  {
    id: "brincdrones",
    label: "BRINC",
    src: "/company-logos/brincdrones-logo.svg",
  },
  {
    id: "ufomammoot",
    label: "UFOMAMMOOT",
    src: "/company-logos/ufomammoot-logo.png",
    filterMode: "light-on-dark",
    scale: 2.35,
  },
];
