/**
 * Site videos — /public/videos/
 * Hero backgrounds: eyrion (homepage) + services-hero (all other heroes).
 * Content sections: useful-video-1 … useful-video-3.
 */

export const USEFUL_VIDEO_1 = "/videos/useful-video-1.mp4";
export const USEFUL_VIDEO_2 = "/videos/useful-video-2.mp4";
export const USEFUL_VIDEO_3 = "/videos/useful-video-3.mp4";

export const USEFUL_VIDEOS = [
  USEFUL_VIDEO_1,
  USEFUL_VIDEO_2,
  USEFUL_VIDEO_3,
];

/** @param {number} index — 0-based, wraps */
export function usefulVideoAt(index) {
  const i = ((Math.floor(index) % 3) + 3) % 3;
  return USEFUL_VIDEOS[i];
}

/** Main homepage (icomat1) hero only */
export const HOMEPAGE_HERO_BACKGROUND_VIDEO =
  "/videos/eyrion-hero-background-video.mp4";

/** Service pages, markets, blog, reviews, and other hero sections */
export const SERVICES_HERO_BACKGROUND_VIDEO =
  "/videos/services-hero-video.mp4";

/** Large section / showcase / modal backgrounds */
export const SECTION_BACKGROUND_VIDEO = USEFUL_VIDEO_3;
