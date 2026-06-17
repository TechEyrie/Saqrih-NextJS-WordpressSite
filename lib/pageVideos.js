/**
 * Resolve per-page content video URLs (cards / sections, not heroes).
 */

import { usefulVideo } from "./siteVideos";
import { PAGE_VIDEO_SLOTS } from "./pageVideoAllocations";

/** @param {string} pageKey @param {string} section @param {number} [index] */
export function getPageVideoNum(pageKey, section, index = 0) {
  const slots = PAGE_VIDEO_SLOTS[pageKey]?.[section];
  if (slots == null) return 1;
  if (Array.isArray(slots)) return slots[index] ?? slots[0];
  return slots;
}

/** @param {string} pageKey @param {string} section @param {number} [index] */
export function getPageVideo(pageKey, section, index = 0) {
  return usefulVideo(getPageVideoNum(pageKey, section, index));
}

/** @param {string} pageKey */
export function getRtsCombinedCardVideos(pageKey) {
  const slots = PAGE_VIDEO_SLOTS[pageKey]?.rtsCombinedCards;
  const nums = Array.isArray(slots) ? slots : consecutiveFallback(6, 1);
  return nums.map((n) => usefulVideo(n));
}

/** @param {string} pageKey */
export function getRtsCombinedPanelVideo(pageKey) {
  return getPageVideo(pageKey, "rtsCombinedPanel");
}

/** @param {string} pageKey */
export function getCustomerSectionVideos(pageKey) {
  return {
    background: getPageVideo(pageKey, "customerBackground"),
    modal: getPageVideo(pageKey, "customerModal"),
  };
}

/** @param {string} pageKey — null when the page uses images instead */
export function getIcomatSolutionCardVideos(pageKey) {
  const slots = PAGE_VIDEO_SLOTS[pageKey]?.icomatSolutions;
  if (slots == null) return null;
  const nums = Array.isArray(slots) ? slots : [slots];
  return nums.map((n) => usefulVideo(n));
}

/** @param {number} count @param {number} start */
function consecutiveFallback(count, start) {
  const out = [];
  for (let i = 0; i < count; i++) out.push(start + i);
  return out;
}
