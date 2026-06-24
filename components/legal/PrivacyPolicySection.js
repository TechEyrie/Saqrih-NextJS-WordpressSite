"use client";

const GREEN = "#162D24";
const BODY = "rgba(22, 45, 36, 0.88)";
const FONT_H = "var(--font-inter), Inter, system-ui, sans-serif";
const FONT_P = "var(--font-montserrat), Montserrat, system-ui, sans-serif";

const h2 = {
  margin: "clamp(2.5rem, 4vw, 3.25rem) 0 clamp(0.85rem, 1.2vw, 1rem)",
  fontFamily: FONT_H,
  fontWeight: 700,
  fontSize: "clamp(1.35rem, 2vw, 1.65rem)",
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  color: GREEN,
};

const h3 = {
  margin: "clamp(1.35rem, 2vw, 1.65rem) 0 0.5rem",
  fontFamily: FONT_H,
  fontWeight: 700,
  fontSize: "clamp(1.05rem, 1.35vw, 1.2rem)",
  lineHeight: 1.3,
  color: GREEN,
};

const p = {
  margin: "0 0 clamp(1rem, 1.4vw, 1.2rem)",
  fontFamily: FONT_P,
  fontSize: "clamp(1rem, 1.1vw, 1.08rem)",
  lineHeight: 1.75,
  color: BODY,
};

const list = {
  margin: "0 0 clamp(1rem, 1.4vw, 1.2rem)",
  paddingLeft: "1.35rem",
  fontFamily: FONT_P,
  fontSize: "clamp(1rem, 1.1vw, 1.08rem)",
  lineHeight: 1.75,
  color: BODY,
};

function BulletList({ items }) {
  return (
    <ul style={list}>
      {items.map((item) => (
        <li key={item} style={{ marginBottom: "0.35rem" }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicySection() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        boxSizing: "border-box",
        padding: "clamp(72px, 10vw, 120px) clamp(20px, 5vw, 48px) clamp(80px, 10vw, 128px)",
      }}
    >
      <h1
        style={{
          margin: 0,
          textAlign: "center",
          fontFamily: FONT_H,
          fontWeight: 700,
          fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          color: GREEN,
        }}
      >
        Privacy Policy
      </h1>

      <div
        style={{
          maxWidth: "min(1400px, 100%)",
          margin: "clamp(56px, 8vw, 96px) auto 0",
        }}
      >
        <p
          style={{
            ...p,
            marginTop: 0,
            marginBottom: "clamp(1.5rem, 2vw, 2rem)",
          }}
        >
          Last updated on: May 27, 2025
        </p>

        <h2 style={{ ...h2, marginTop: 0 }}>Introduction</h2>
        <p style={p}>
          Welcome to Saqrih. We respect your privacy and are committed to protecting your personal
          information. This privacy policy explains how we collect, use, disclose, and safeguard your
          information when you visit our website.
        </p>

        <h2 style={h2}>Information we collect</h2>

        <h3 style={h3}>Personal information</h3>
        <p style={p}>
          We may collect personal information you voluntarily provide through forms or inquiries,
          including:
        </p>
        <BulletList
          items={["Name", "Email address", "Company name", "Phone number"]}
        />

        <h3 style={h3}>Automatically collected information</h3>
        <p style={p}>
          When you visit our website, certain information may be collected automatically, including:
        </p>
        <BulletList
          items={[
            "IP address",
            "Browser type",
            "Device information",
            "Pages visited",
            "Time spent on pages",
            "Referring website addresses",
          ]}
        />

        <h2 style={h2}>How we use your information</h2>
        <p style={p}>We use collected information to:</p>
        <BulletList
          items={[
            "Respond to inquiries and provide support",
            "Prepare proposals and relevant service materials",
            "Improve website functionality and user experience",
            "Analyze website performance and usage trends",
            "Deliver relevant advertising and marketing campaigns",
            "Maintain website security and reliability",
          ]}
        />

        <h2 style={h2}>Tracking technologies</h2>

        <h3 style={h3}>Cookies</h3>
        <p style={p}>
          We use cookies and similar technologies to improve website functionality and user experience.
          Cookies are small files stored on your device during browsing sessions.
        </p>

        <h3 style={h3}>Analytics and advertising</h3>
        <p style={p}>
          We may use third-party analytics and advertising platforms, including:
        </p>
        <BulletList
          items={[
            "Google Analytics 4 (GA4)",
            "Google Ads",
            "Google Tag Manager",
            "Microsoft Advertising",
            "LinkedIn Insight Tag",
            "Meta Pixel",
          ]}
        />
        <p style={p}>
          These services may collect browsing data such as IP addresses, visited pages, device details,
          and interaction metrics.
        </p>

        <h2 style={h2}>Third-party disclosure</h2>
        <p style={p}>
          We do not sell personal information to third parties. Information may be shared with:
        </p>
        <BulletList
          items={[
            "Trusted service providers assisting with website operations, analytics, marketing, or customer support",
            "Legal authorities when required by law or necessary to protect our rights and services",
          ]}
        />

        <h2 style={h2}>Your rights</h2>
        <p style={p}>
          Depending on your location, you may have rights regarding your personal information,
          including:
        </p>
        <BulletList
          items={[
            "Access to the information we hold about you",
            "Correction of inaccurate information",
            "Request deletion of your data",
            "Object to data processing",
            "Request data portability",
          ]}
        />
        <p style={p}>
          To exercise these rights, please contact us using the information below.
        </p>

        <h2 style={h2}>Opt-out options</h2>
        <p style={p}>
          You may limit certain tracking and advertising activities by:
        </p>
        <BulletList
          items={[
            "Disabling or deleting cookies in your browser settings",
            "Using the Google Analytics Opt-out Browser Add-on",
            "Managing advertising preferences through supported advertising platforms and privacy tools",
          ]}
        />

        <h2 style={h2}>Children&apos;s privacy</h2>
        <p style={p}>
          Our website is not intended for children under 13 years of age, and we do not knowingly collect
          personal information from children.
        </p>

        <h2 style={h2}>Changes to this privacy policy</h2>
        <p style={p}>
          We may update this privacy policy periodically. Any updates will be posted on this page along
          with the revised &ldquo;Last updated&rdquo; date.
        </p>

        <h2 style={h2}>Contact information</h2>
        <p style={p}>
          If you have questions about this privacy policy or our data practices, please contact us:
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(20px, 2.5vw, 28px)",
            marginTop: "clamp(8px, 1vw, 12px)",
          }}
        >
          <div>
            <p
              style={{
                ...p,
                margin: "0 0 0.35rem",
                fontFamily: FONT_H,
                fontWeight: 700,
                fontSize: "clamp(1rem, 1.1vw, 1.08rem)",
                color: GREEN,
              }}
            >
              Email
            </p>
            <a
              href="mailto:privacy@saqrih.com"
              style={{
                fontFamily: FONT_P,
                fontSize: "clamp(1rem, 1.1vw, 1.08rem)",
                lineHeight: 1.75,
                color: BODY,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              privacy@saqrih.com
            </a>
          </div>

          <div>
            <p
              style={{
                ...p,
                margin: "0 0 0.35rem",
                fontFamily: FONT_H,
                fontWeight: 700,
                fontSize: "clamp(1rem, 1.1vw, 1.08rem)",
                color: GREEN,
              }}
            >
              Address
            </p>
            <p style={{ ...p, margin: 0 }}>
              37 Front St, Binghamton, NY 13905
            </p>
          </div>

          <div>
            <p
              style={{
                ...p,
                margin: "0 0 0.35rem",
                fontFamily: FONT_H,
                fontWeight: 700,
                fontSize: "clamp(1rem, 1.1vw, 1.08rem)",
                color: GREEN,
              }}
            >
              Phone
            </p>
            <a
              href="tel:+16072382789"
              style={{
                fontFamily: FONT_P,
                fontSize: "clamp(1rem, 1.1vw, 1.08rem)",
                lineHeight: 1.75,
                color: BODY,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              607-238-2789
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
