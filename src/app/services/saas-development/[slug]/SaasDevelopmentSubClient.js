"use client";

import ServicePageShell from "../../../../../components/services/ServicePageShell";

export default function SaasDevelopmentSubClient({ sub }) {
  const words = sub.title.split(" ");
  const heroTitle =
    words.length > 2 ? (
      <>
        {words.slice(0, Math.ceil(words.length / 2)).join("\u00A0")}
        <br />
        {words.slice(Math.ceil(words.length / 2)).join("\u00A0")}
      </>
    ) : (
      <>{words.join("\u00A0")}</>
    );

  return (
    <ServicePageShell
      heroTitle={heroTitle}
      heroLead={sub.heroLead}
      heroTitleMaxCh="18ch"
      endToEndPageKey="wp-development"
    />
  );
}
