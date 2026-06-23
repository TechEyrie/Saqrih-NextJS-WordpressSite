/**
 * Eyrion markets — Qatar-based, Gulf & regional coverage.
 * Local area links are generated from lib/locations/locationRegistry.js
 */

import { US_CITY_LINES } from "./usMarketCities";
import { LOCAL_AREAS_BY_MARKET } from "../../lib/locations/locationRegistry";

export { LOCAL_AREAS_BY_MARKET };

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

/** Flat list for optional local slug routes: "Area, Market" or "City, ST" */
export function getLocalCityLines() {
  const regional = LOCAL_AREAS_BY_MARKET.flatMap(({ market, cities }) =>
    cities.map((city) => {
      const name = typeof city === "string" ? city : city.name;
      return `${name}, ${market}`;
    }),
  );
  return [...regional, ...US_CITY_LINES];
}
