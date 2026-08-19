import {
  cleanQuoteValue,
  isValidQuoteCompany,
  isValidQuoteEmail,
  isValidQuoteName,
  QUOTE_LIMITS,
} from "./quoteValidation";
import { CONTACT_INQUIRY_OPTIONS } from "./siteContact";

export const CONTACT_LIMITS = {
  fullName: QUOTE_LIMITS.fullName,
  email: QUOTE_LIMITS.email,
  phone: QUOTE_LIMITS.phone,
  company: QUOTE_LIMITS.company,
  message: { min: 20, max: 5000 },
};

const VALID_SUBJECTS = new Set(CONTACT_INQUIRY_OPTIONS.map((o) => o.value));

export function validateContactPayload(raw = {}) {
  const values = {
    fullName: cleanQuoteValue(raw.fullName, CONTACT_LIMITS.fullName.max),
    email: cleanQuoteValue(raw.email, CONTACT_LIMITS.email.max).toLowerCase(),
    phone: cleanQuoteValue(raw.phone, CONTACT_LIMITS.phone.max),
    company: cleanQuoteValue(raw.company, CONTACT_LIMITS.company.max),
    subject: cleanQuoteValue(raw.subject, 40),
    message: cleanQuoteValue(raw.message, CONTACT_LIMITS.message.max),
    website: cleanQuoteValue(raw.website, 200),
  };

  const fieldErrors = {};

  if (!values.fullName) {
    fieldErrors.fullName = "Required";
  } else if (values.fullName.length < CONTACT_LIMITS.fullName.min) {
    fieldErrors.fullName = `At least ${CONTACT_LIMITS.fullName.min} characters`;
  } else if (!isValidQuoteName(values.fullName)) {
    fieldErrors.fullName = "Enter a valid name (letters only)";
  }

  if (!values.email) {
    fieldErrors.email = "Required";
  } else if (!isValidQuoteEmail(values.email)) {
    fieldErrors.email = "Enter a valid email address";
  }

  if (values.company && !isValidQuoteCompany(values.company)) {
    fieldErrors.company = "Enter a valid company name";
  }

  if (!values.subject) {
    fieldErrors.subject = "Required";
  } else if (!VALID_SUBJECTS.has(values.subject)) {
    fieldErrors.subject = "Select a valid inquiry type";
  }

  if (!values.message) {
    fieldErrors.message = "Required";
  } else if (values.message.length < CONTACT_LIMITS.message.min) {
    fieldErrors.message = `Please add a bit more detail (min ${CONTACT_LIMITS.message.min} characters)`;
  }

  return {
    ok: Object.keys(fieldErrors).length === 0,
    fieldErrors,
    values,
    isSpam: Boolean(values.website),
  };
}

export function contactSubjectLabel(value) {
  return (
    CONTACT_INQUIRY_OPTIONS.find((option) => option.value === value)?.label ||
    value
  );
}
