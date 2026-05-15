/** URL slug for a "City, ST" line (used with `/markets/local/[slug]`). */
export function cityLineSlug(line) {
  return line
    .toLowerCase()
    .replace(/,/g, " ")
    .replace(/[^a-z0-9\s]/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .join("-");
}
