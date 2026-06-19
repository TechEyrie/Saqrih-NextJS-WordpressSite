/**
 * Eyrion markets — Qatar-based, Gulf & regional coverage.
 * Section 1: primary + extended markets. Section 2: local areas grouped by market.
 */

import { US_CITY_LINES } from "./usMarketCities";

/** Home base — featured first on /markets */
export const PRIMARY_MARKETS = ["Doha", "Lusail", "Qatar"];

/** Additional countries & cities we serve */
export const EXTENDED_MARKETS = [
  "Dubai",
  "Abu Dhabi",
  "Oman",
  "Bahrain",
  "Riyadh",
  "Jeddah",
  "Turkey",
  "Pakistan",
  "Spain",
  "United States",
];

/** All top-level markets (primary first) */
export const ALL_MARKETS = [...PRIMARY_MARKETS, ...EXTENDED_MARKETS];

/**
 * Local cities, districts, and areas within each market.
 * @type {{ market: string, cities: string[] }[]}
 */
export const LOCAL_AREAS_BY_MARKET = [
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

/** Flat list for optional local slug routes: "Area, Market" or "City, ST" */
export function getLocalCityLines() {
  const regional = LOCAL_AREAS_BY_MARKET.flatMap(({ market, cities }) =>
    cities.map((city) => `${city}, ${market}`),
  );
  return [...regional, ...US_CITY_LINES];
}
