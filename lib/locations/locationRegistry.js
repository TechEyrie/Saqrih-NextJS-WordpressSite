import { locationSlugFor } from "./locationSlug";

/** Legacy Qatar municipality slugs (keep existing URLs) */
const QATAR_LEGACY_SLUGS = {
  "Al Rayyan": "al-rayyan",
  "Al Wakrah": "al-wakkrah",
  "Al Khor": "al-khor",
  Mesaieed: "mesaieed",
  "Umm Salal": "umm-salal",
  "Al Shamal": "al-shamal",
};

export const MARKET_REGIONS = {
  Qatar: {
    seoCountry: "Qatar",
    countryLabel: "Qatar",
    areaLabel: "Qatar and the GCC",
    hub: "Doha",
    agencyBase: "Qatar-based",
  },
  Doha: {
    seoCountry: "Qatar",
    countryLabel: "Qatar",
    areaLabel: "Doha and wider Qatar",
    hub: "Doha",
    agencyBase: "Qatar-based",
  },
  Lusail: {
    seoCountry: "Qatar",
    countryLabel: "Qatar",
    areaLabel: "Lusail and wider Qatar",
    hub: "Lusail",
    agencyBase: "Qatar-based",
  },
  Dubai: {
    seoCountry: "UAE",
    countryLabel: "the UAE",
    areaLabel: "Dubai and the wider UAE",
    hub: "Dubai",
    agencyBase: "UAE-focused",
  },
  "Abu Dhabi": {
    seoCountry: "UAE",
    countryLabel: "the UAE",
    areaLabel: "Abu Dhabi and the wider UAE",
    hub: "Abu Dhabi",
    agencyBase: "UAE-focused",
  },
  Oman: {
    seoCountry: "Oman",
    countryLabel: "Oman",
    areaLabel: "Oman and the Gulf region",
    hub: "Muscat",
    agencyBase: "Gulf-based",
  },
  Bahrain: {
    seoCountry: "Bahrain",
    countryLabel: "Bahrain",
    areaLabel: "Bahrain and the Gulf region",
    hub: "Manama",
    agencyBase: "Gulf-based",
  },
  Riyadh: {
    seoCountry: "Saudi Arabia",
    countryLabel: "Saudi Arabia",
    areaLabel: "Riyadh and across Saudi Arabia",
    hub: "Riyadh",
    agencyBase: "Gulf-based",
  },
  Jeddah: {
    seoCountry: "Saudi Arabia",
    countryLabel: "Saudi Arabia",
    areaLabel: "Jeddah and across Saudi Arabia",
    hub: "Jeddah",
    agencyBase: "Gulf-based",
  },
  Turkey: {
    seoCountry: "Turkey",
    countryLabel: "Turkey",
    areaLabel: "Turkey and surrounding markets",
    hub: "Istanbul",
    agencyBase: "international",
  },
  Pakistan: {
    seoCountry: "Pakistan",
    countryLabel: "Pakistan",
    areaLabel: "Pakistan and international clients",
    hub: "Karachi",
    agencyBase: "international",
  },
  Spain: {
    seoCountry: "Spain",
    countryLabel: "Spain",
    areaLabel: "Spain and European markets",
    hub: "Madrid",
    agencyBase: "international",
  },
};

const RAW_LOCAL_AREAS = [
  {
    market: "Qatar",
    cities: [
      "Al Rayyan",
      "Al Wakrah",
      "Al Khor",
      "Mesaieed",
      "Umm Salal",
      "Al Shamal",
    ],
  },
  {
    market: "Doha",
    cities: [
      "West Bay",
      "The Pearl",
      "Al Sadd",
      "Msheireb",
      "Katara",
      "Corniche",
      "Lusail City",
    ],
  },
  {
    market: "Lusail",
    cities: [
      "Lusail Marina",
      "Fox Hills",
      "Marina District",
      "Energy City",
      "Waterfront",
    ],
  },
  {
    market: "Dubai",
    cities: [
      "Downtown Dubai",
      "Dubai Marina",
      "Jumeirah",
      "Business Bay",
      "JBR",
      "Deira",
      "Dubai Internet City",
    ],
  },
  {
    market: "Abu Dhabi",
    cities: [
      "Al Reem Island",
      "Saadiyat Island",
      "Yas Island",
      "Khalifa City",
      "Al Maryah Island",
      "Al Ain",
    ],
  },
  {
    market: "Oman",
    cities: ["Muscat", "Salalah", "Sohar", "Nizwa", "Sur", "Barka"],
  },
  {
    market: "Bahrain",
    cities: ["Manama", "Riffa", "Muharraq", "Isa Town", "Hamad Town", "Sitra"],
  },
  {
    market: "Riyadh",
    cities: [
      "Al Olaya",
      "King Abdullah Financial District",
      "Diplomatic Quarter",
      "Al Malaz",
      "Al Nakheel",
    ],
  },
  {
    market: "Jeddah",
    cities: [
      "Al Hamra",
      "Al Rawdah",
      "Corniche",
      "Obhur",
      "Al Andalus",
      "King Abdulaziz University area",
    ],
  },
  {
    market: "Turkey",
    cities: [
      "Istanbul",
      "Ankara",
      "Izmir",
      "Bursa",
      "Antalya",
      "Gaziantep",
      "Adana",
      "Beyoğlu",
      "Kadıköy",
      "Şişli",
      "Beşiktaş",
      "Fatih",
      "Üsküdar",
      "Ataşehir",
    ],
  },
  {
    market: "Pakistan",
    cities: [
      "Karachi",
      "Lahore",
      "Islamabad",
      "Rawalpindi",
      "Faisalabad",
      "Multan",
      "Peshawar",
      "Quetta",
      "Gujranwala",
      "Hyderabad",
      "Sialkot",
      "Abbottabad",
      "Sargodha",
      "Bahawalpur",
      "Sukkur",
      "Murree",
      "Gwadar",
    ],
  },
  {
    market: "Spain",
    cities: [
      "Madrid",
      "Barcelona",
      "Valencia",
      "Seville",
      "Zaragoza",
      "Málaga",
      "Murcia",
      "Palma",
      "Bilbao",
      "Alicante",
      "Córdoba",
      "Granada",
      "Valladolid",
      "Vigo",
      "Gijón",
      "San Sebastián",
      "Santa Cruz de Tenerife",
      "Pamplona",
      "Oviedo",
      "Santander",
    ],
  },
];

function resolveSlug(cityName, market) {
  if (market === "Qatar" && QATAR_LEGACY_SLUGS[cityName]) {
    return QATAR_LEGACY_SLUGS[cityName];
  }
  return locationSlugFor(cityName, market);
}

function displayPlace(cityName, market, region) {
  const countryMarkets = new Set(["Qatar", "Oman", "Bahrain", "Turkey", "Pakistan", "Spain"]);
  if (countryMarkets.has(market)) {
    return `${cityName}, ${region.seoCountry}`;
  }
  return `${cityName}, ${market}`;
}

export const LOCATION_ENTRIES = RAW_LOCAL_AREAS.flatMap(({ market, cities }) => {
  const region = MARKET_REGIONS[market];
  return cities.map((cityName) => {
    const slug = resolveSlug(cityName, market);
    return {
      slug,
      name: cityName,
      market,
      region,
      placeLabel: displayPlace(cityName, market, region),
      href: `/locations/${slug}`,
    };
  });
});

export const LOCATION_SLUGS = LOCATION_ENTRIES.map((entry) => entry.slug);

export const LOCATION_BY_SLUG = Object.fromEntries(
  LOCATION_ENTRIES.map((entry) => [entry.slug, entry]),
);

/** Grouped for /markets local cities section */
export const LOCAL_AREAS_BY_MARKET = RAW_LOCAL_AREAS.map(({ market, cities }) => ({
  market,
  cities: cities.map((cityName) => {
    const slug = resolveSlug(cityName, market);
    const entry = LOCATION_BY_SLUG[slug];
    return {
      name: entry.name,
      href: entry.href,
    };
  }),
}));

export const QATAR_LOCATION_MARKET_CITIES = LOCAL_AREAS_BY_MARKET.find(
  (group) => group.market === "Qatar",
).cities;

export function getAllMarketLocationSlugs() {
  return LOCATION_SLUGS;
}

export function locationExists(slug) {
  return Boolean(LOCATION_BY_SLUG[slug]);
}

export function getLocationEntry(slug) {
  return LOCATION_BY_SLUG[slug] ?? null;
}
