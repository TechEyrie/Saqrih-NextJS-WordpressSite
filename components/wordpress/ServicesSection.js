"use client";

import Link from "next/link";

const SERVICES = [
  {
    title: "WordPress Development",
    description:
      "Custom, scalable websites and web apps tailored to your business goals.",
    href: "/icomat1/wordpress/development",
  },
  {
    title: "WordPress Design",
    description:
      "Conversion-focused interfaces crafted for performance, clarity, and brand identity.",
    href: "/icomat1/wordpress/design",
  },
  {
    title: "WordPress Hosting",
    description:
      "Fast, secure, and reliable hosting environments with proactive maintenance.",
    href: "/icomat1/wordpress/hosting",
  },
  {
    title: "WordPress SEO",
    description:
      "Technical and on-page SEO improvements that increase visibility and quality traffic.",
    href: "/icomat1/wordpress/search-engine-optimization",
  },
  {
    title: "WordPress Maintenance",
    description:
      "Ongoing updates, monitoring, and fixes to keep your website healthy and secure.",
    href: "/icomat1/wordpress/maintainance",
  },
  {
    title: "Premium Support",
    description:
      "Expert help on demand for urgent issues, feature requests, and growth initiatives.",
    href: "/icomat1/wordpress/premium-support",
  },
];

export default function ServicesSection() {
  return (
    <section
      style={{
        width: "100%",
        padding: "clamp(70px, 8vw, 120px) clamp(24px, 5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p
          style={{
            margin: 0,
            color: "rgba(255,255,255,0.65)",
            fontSize: "13px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Our Expertise
        </p>
        <h2
          style={{
            margin: "14px 0 0",
            color: "rgba(255,255,255,0.95)",
            fontSize: "clamp(2rem, 4.2vw, 3.6rem)",
            lineHeight: 1.04,
            letterSpacing: "-0.03em",
            maxWidth: "17ch",
          }}
        >
          End-to-end WordPress services under one roof
        </h2>

        <div
          className="wordpress-services-grid"
          style={{
            marginTop: "clamp(28px, 4vw, 48px)",
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "clamp(14px, 1.8vw, 22px)",
          }}
        >
          {SERVICES.map((service) => (
            <article
              key={service.title}
              style={{
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.14)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.06) 100%)",
                boxShadow: "0 20px 36px rgba(0,0,0,0.28)",
                padding: "clamp(18px, 2vw, 26px)",
                display: "flex",
                flexDirection: "column",
                minHeight: "220px",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  color: "#ffffff",
                  fontSize: "clamp(1.25rem, 1.7vw, 1.6rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  margin: "10px 0 0",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "16px",
                  lineHeight: 1.6,
                }}
              >
                {service.description}
              </p>
              <Link
                href={service.href}
                style={{
                  marginTop: "auto",
                  alignSelf: "flex-start",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "rgba(255,255,255,0.92)",
                  fontSize: "13px",
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  paddingTop: "24px",
                }}
              >
                Explore service
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .wordpress-services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 760px) {
          .wordpress-services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
