/**
 * Shared Get a Quote form validation (client + API).
 */

export const QUOTE_LIMITS = {
  fullName: { min: 2, max: 80 },
  email: { max: 160 },
  phone: { max: 40 },
  company: { min: 2, max: 120 },
  project: { min: 20, max: 5000 },
};

const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

/** Letters (incl. Arabic etc.), spaces, hyphen, apostrophe, period */
const NAME_RE = /^[\p{L}\p{M}][\p{L}\p{M}\s'.-]{0,78}[\p{L}\p{M}]$/u;
const NAME_RE_SHORT = /^[\p{L}\p{M}]{2}$/u;

const COMPANY_RE = /^[\p{L}\p{M}\p{N}][\p{L}\p{M}\p{N}\s&.,'+()\-/]{0,118}$/u;

export function cleanQuoteValue(value, max = 2000) {
  return String(value ?? "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .trim()
    .slice(0, max);
}

export function isValidQuoteEmail(email) {
  if (!email || email.length > QUOTE_LIMITS.email.max) return false;
  if (email.includes("..")) return false;
  return EMAIL_RE.test(email);
}

export function isValidQuoteName(name) {
  if (!name) return false;
  if (name.length < QUOTE_LIMITS.fullName.min) return false;
  if (name.length > QUOTE_LIMITS.fullName.max) return false;
  if (/\d/.test(name)) return false;
  if (NAME_RE_SHORT.test(name)) return true;
  return NAME_RE.test(name);
}

export function isValidQuoteCompany(company) {
  if (!company) return false;
  if (company.length < QUOTE_LIMITS.company.min) return false;
  if (company.length > QUOTE_LIMITS.company.max) return false;
  return COMPANY_RE.test(company);
}

/**
 * @returns {{ fieldErrors: Record<string, string>, values: object, ok: boolean }}
 */
export function validateQuotePayload(raw = {}) {
  const values = {
    fullName: cleanQuoteValue(raw.fullName, QUOTE_LIMITS.fullName.max),
    email: cleanQuoteValue(raw.email, QUOTE_LIMITS.email.max).toLowerCase(),
    phone: cleanQuoteValue(raw.phone, QUOTE_LIMITS.phone.max),
    company: cleanQuoteValue(raw.company, QUOTE_LIMITS.company.max),
    project: cleanQuoteValue(raw.project, QUOTE_LIMITS.project.max),
    // Honeypot — bots fill this; humans never see it
    website: cleanQuoteValue(raw.website, 200),
  };

  const fieldErrors = {};

  if (!values.fullName) {
    fieldErrors.fullName = "Required";
  } else if (values.fullName.length < QUOTE_LIMITS.fullName.min) {
    fieldErrors.fullName = `At least ${QUOTE_LIMITS.fullName.min} characters`;
  } else if (!isValidQuoteName(values.fullName)) {
    fieldErrors.fullName = "Enter a valid name (letters only)";
  }

  if (!values.email) {
    fieldErrors.email = "Required";
  } else if (!isValidQuoteEmail(values.email)) {
    fieldErrors.email = "Enter a valid email address";
  }

  // Phone is optional — no country-format validation (accept any entered value).

  if (!values.company) {
    fieldErrors.company = "Required";
  } else if (values.company.length < QUOTE_LIMITS.company.min) {
    fieldErrors.company = `At least ${QUOTE_LIMITS.company.min} characters`;
  } else if (!isValidQuoteCompany(values.company)) {
    fieldErrors.company = "Enter a valid company name";
  }

  if (!values.project) {
    fieldErrors.project = "Required";
  } else if (values.project.length < QUOTE_LIMITS.project.min) {
    fieldErrors.project = `Please add a bit more detail (min ${QUOTE_LIMITS.project.min} characters)`;
  }

  return {
    ok: Object.keys(fieldErrors).length === 0,
    fieldErrors,
    values,
    isSpam: Boolean(values.website),
  };
}
