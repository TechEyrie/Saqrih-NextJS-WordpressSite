/**
 * Landscape hero backgrounds from /public/pics (width > height).
 * Used for all non-homepage hero sections instead of video.
 */

export const LANDSCAPE_HERO_PICS = [
  "/pics/saqrih-20.png",
  "/pics/saqrih-32.png",
  "/pics/saqrih-33.png",
  "/pics/saqrih-34.png",
  "/pics/saqrih-35.png",
  "/pics/saqrih-36.png",
  "/pics/saqrih-37.png",
];

/** Explicit hero backgrounds for specific routes (overrides hash pick). */
export const HERO_BACKGROUND_BY_PATH = {
  "/services/cms-headless-development": "/pics/saqrih-33.png",
  "/services/wordpress-development": "/pics/saqrih-34.png",
  "/contact": "/pics/saqrih-35.png",
};

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

/** Stable landscape pick per route — varies across pages, consistent on reload. */
export function landscapeHeroPicForPath(pathname = "/") {
  const seed = pathname || "/";
  if (HERO_BACKGROUND_BY_PATH[seed]) return HERO_BACKGROUND_BY_PATH[seed];
  const idx = hashString(seed) % LANDSCAPE_HERO_PICS.length;
  return LANDSCAPE_HERO_PICS[idx];
}
