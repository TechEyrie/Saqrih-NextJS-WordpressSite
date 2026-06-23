/** Canonical industry list — order matches /industries grid */

export const INDUSTRY_NAMES = [
  "Agriculture & Farming",
  "Architecture",
  "Attorney",
  "B2B",
  "Café",
  "Catholic Parish",
  "Charity",
  "Church",
  "City",
  "College",
  "Construction",
  "Consulting",
  "Contractor",
  "Corporate",
  "Dental",
  "Education",
  "Environment",
  "Fashion",
  "Finance",
  "Gym & Fitness",
  "Hair Extensions",
  "Handyman",
  "Health & Wellness",
  "Healthcare",
  "Hospitality",
  "Hotel",
  "IT Services",
  "Landscaping",
  "Law Firm",
  "Medical",
  "Non-Profit",
  "Orthodontist",
  "Real Estate",
  "Restaurant",
  "SaaS",
  "School",
  "Small Business",
  "Startup",
  "Tech",
  "Tourism",
  "Travel",
  "University",
  "Wedding Venue",
];

export function industryNameToSlug(name) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const INDUSTRY_ENTRIES = INDUSTRY_NAMES.map((name) => ({
  name,
  slug: industryNameToSlug(name),
}));

export const INDUSTRY_SLUGS = INDUSTRY_ENTRIES.map((entry) => entry.slug);

export const INDUSTRY_BY_SLUG = Object.fromEntries(
  INDUSTRY_ENTRIES.map((entry) => [entry.slug, entry]),
);

export function getIndustryHref(slug) {
  return `/industries/${slug}`;
}
