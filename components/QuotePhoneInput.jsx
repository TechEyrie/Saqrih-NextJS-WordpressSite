"use client";

import { useId } from "react";
import PhoneInput, {
  getCountries,
  getCountryCallingCode,
} from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import englishLabels from "react-phone-number-input/locale/en";
import "react-phone-number-input/style.css";

const countryLabelsWithCodes = {
  ...englishLabels,
  ...Object.fromEntries(
    getCountries().map((country) => [
      country,
      `${englishLabels[country]} (+${getCountryCallingCode(country)})`,
    ]),
  ),
};

export default function QuotePhoneInput({
  value,
  onChange,
  onFocus,
  onBlur,
  className = "quote-phone-input",
}) {
  const phoneInputId = useId();

  return (
    <PhoneInput
      className={className}
      defaultCountry="QA"
      international
      countryCallingCodeEditable={false}
      flags={flags}
      labels={countryLabelsWithCodes}
      value={value || undefined}
      onChange={(nextValue) => onChange(nextValue || "")}
      onFocus={onFocus}
      onBlur={onBlur}
      numberInputProps={{
        id: phoneInputId,
        name: "phone",
        inputMode: "tel",
        autoComplete: "tel",
        "aria-label": "Phone number",
      }}
      countrySelectProps={{
        "aria-label": "Phone country",
      }}
    />
  );
}
