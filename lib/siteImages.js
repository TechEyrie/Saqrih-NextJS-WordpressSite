/**
 * Saqrih brand photography — /public/pics/saqrih-1.png … saqrih-37.png
 * (saqrih-7.png may be missing; slot 7 uses saqrih-8.png)
 */

export const SAQRIH_PIC_MAX = 37;
const SAQRIH_7_FALLBACK = 8;

/** @param {number} n — 1–37 */
export function saqrihPic(n) {
  const num = Math.max(1, Math.min(SAQRIH_PIC_MAX, Math.floor(Number(n) || 1)));
  const fileNum = num === 7 ? SAQRIH_7_FALLBACK : num;
  return `/pics/saqrih-${fileNum}.png`;
}

/** All logical slots (index 0 = saqrih-1). */
export const SAQRIH_PICS = Array.from({ length: SAQRIH_PIC_MAX }, (_, i) =>
  saqrihPic(i + 1),
);

/** @param {number} index — 0-based, wraps */
export function saqrihPicAt(index) {
  const i = ((Math.floor(index) % SAQRIH_PIC_MAX) + SAQRIH_PIC_MAX) % SAQRIH_PIC_MAX;
  return SAQRIH_PICS[i];
}

export const DEFAULT_SITE_IMAGE = saqrihPic(32);

/** Pass-through for local paths (kept for existing call sites). */
export function siteImageUrl(src) {
  return src || DEFAULT_SITE_IMAGE;
}
