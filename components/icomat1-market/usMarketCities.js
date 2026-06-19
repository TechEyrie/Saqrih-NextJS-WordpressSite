import US_CITY_LINES from "./market-cities.json";
import { US_STATES, stateSlug } from "./marketStates";

/** @type {Record<string, string>} */
export const STATE_ABBR_TO_NAME = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  DC: "District of Columbia",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming",
};

/** @type {Record<string, string>} */
const STATE_NAME_TO_ABBR = Object.fromEntries(
  Object.entries(STATE_ABBR_TO_NAME).map(([abbr, name]) => [name, abbr]),
);

export { US_CITY_LINES };

/** @returns {Record<string, string[]>} */
export function getUSCitiesGroupedByState() {
  /** @type {Record<string, string[]>} */
  const groups = {};
  for (const state of US_STATES) {
    groups[state] = [];
  }

  for (const line of US_CITY_LINES) {
    const match = line.match(/^(.+),\s*([A-Z]{2})$/);
    if (!match) continue;
    const [, city, abbr] = match;
    const state = STATE_ABBR_TO_NAME[abbr];
    if (!state) continue;
    if (!groups[state]) groups[state] = [];
    groups[state].push(city);
  }

  return groups;
}

/** @param {string} stateName */
export function getUSCitiesForState(stateName) {
  const abbr = STATE_NAME_TO_ABBR[stateName];
  if (!abbr) return [];
  return US_CITY_LINES.filter((line) => line.endsWith(`, ${abbr}`)).map((line) =>
    line.replace(/,\s*[A-Z]{2}$/, ""),
  );
}

/** @param {string} slug — from stateSlug() */
export function getStateNameFromSlug(slug) {
  return US_STATES.find((name) => stateSlug(name) === slug) ?? null;
}
