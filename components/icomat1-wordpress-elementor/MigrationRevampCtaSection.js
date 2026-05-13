"use client";

const GREEN = "#162D24";
const BODY = "rgba(22, 45, 36, 0.82)";

const FONT_H2 = "clamp(2rem, 3.8vw, 3.1rem)";
const FONT_BODY = "clamp(1.05rem, 1.25vw, 1.2rem)";

export default function MigrationRevampCtaSection() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        boxSizing: "border-box",
        padding: "clamp(72px, 9vw, 120px) clamp(24px, 5vw, 72px)",
      }}
    >
      <div
        style={{
          maxWidth: "min(920px, 100%)",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: GREEN,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            fontSize: FONT_H2,
          }}
        >
          New to Web Accessibility Compliance?
        </h2>

        <p
          style={{
            margin: "clamp(18px, 2.5vw, 26px) auto 0",
            maxWidth: "72ch",
            color: GREEN,
            fontWeight: 600,
            fontSize: FONT_BODY,
            lineHeight: 1.55,
            letterSpacing: "-0.015em",
          }}
        >
          Qualify for financial assistance for accessibility compliance
        </p>

        <p
          style={{
            margin: "clamp(14px, 2vw, 20px) auto 0",
            maxWidth: "72ch",
            color: BODY,
            fontWeight: 400,
            fontSize: FONT_BODY,
            lineHeight: 1.78,
          }}
        >
          The IRS offers a Disabled Access Credit that may help offset the cost of making your WordPress website
          accessible. Eligible businesses may receive up to $15,000 per year in tax credits, depending on their
          situation.
        </p>
      </div>
    </section>
  );
}
