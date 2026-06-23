/** URL-safe slug from display text */

export function slugifyText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function locationSlugFor(cityName, market) {
  return `${slugifyText(cityName)}-${slugifyText(market)}`;
}
