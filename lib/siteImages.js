/**
 * Eyrion brand photography — /public/pics/eyrion-1.png … eyrion-12.png
 * (eyrion-7.png may be missing; slot 7 uses eyrion-8.png)
 */

const EYRION_7_FALLBACK = 8;

/** @param {number} n — 1–12 */
export function eyrionPic(n) {
  const num = Math.max(1, Math.min(12, Math.floor(Number(n) || 1)));
  const fileNum = num === 7 ? EYRION_7_FALLBACK : num;
  return `/pics/eyrion-${fileNum}.png`;
}

/** Twelve logical slots for cycling (index 0 = eyrion-1). */
export const EYRION_PICS = Array.from({ length: 12 }, (_, i) => eyrionPic(i + 1));

/** @param {number} index — 0-based, wraps */
export function eyrionPicAt(index) {
  const i = ((Math.floor(index) % 12) + 12) % 12;
  return EYRION_PICS[i];
}

export const DEFAULT_SITE_IMAGE = eyrionPic(1);

/** Named references for section configs */
export const SITE_IMAGES = {
  pic1: eyrionPic(1),
  pic2: eyrionPic(2),
  pic3: eyrionPic(3),
  pic4: eyrionPic(4),
  pic5: eyrionPic(5),
  pic6: eyrionPic(6),
  pic7: eyrionPic(7),
  pic8: eyrionPic(8),
  pic9: eyrionPic(9),
  pic10: eyrionPic(10),
  pic11: eyrionPic(11),
  pic12: eyrionPic(12),
};

/** Pass-through for local paths (kept for existing call sites). */
export function siteImageUrl(src) {
  return src || DEFAULT_SITE_IMAGE;
}

/** Image tiles on UnlockingSection — not hero / not video cards */
export const UNLOCKING_IMAGE_CARDS = [
  {
    id: "work",
    label: "FEATURED PROJECTS",
    href: "/work",
    src: eyrionPic(2),
    alt: "Eyrion WordPress project work",
  },
  {
    id: "team",
    label: "OUR TEAM",
    href: "/about-us",
    src: eyrionPic(5),
    alt: "Eyrion team collaboration",
  },
];

/** Side image on WordPress service SupportHighlight sections */
export const SUPPORT_HIGHLIGHT_IMAGE = eyrionPic(3);
