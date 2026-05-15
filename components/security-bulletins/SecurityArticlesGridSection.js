"use client";

import { useMemo, useState } from "react";
import { Bug, ChevronLeft, ChevronRight, Clock } from "lucide-react";

const GREEN = "#162D24";
const LIME = "#c8f04a";
const META = "rgba(22, 45, 36, 0.85)";
const CARD_TITLE = "rgba(255, 255, 255, 0.96)";
const CARD_META = "rgba(255, 255, 255, 0.88)";
const CARD_BODY = "rgba(255, 255, 255, 0.82)";
const CARD_BG = GREEN;
const SECTION_BG = "#f6f4ef";
const FONT_HEADING = "var(--font-inter), Inter, system-ui, sans-serif";
const FONT_PARA = "var(--font-montserrat), Montserrat, system-ui, sans-serif";

const PAGE_SIZE = 8;

const BULLETIN_CARDS = [
  {
    slug: "cve-2026-6514-infusedwoo-pro",
    title: "InfusedWoo Pro Plugin Vulnerability (CVE-2026-6514)",
    cve: "CVE-2026-6514",
    excerpt:
      "Security Alert Summary — The InfusedWoo Pro plugin for WordPress contains an arbitrary file read vulnerability in versions up to and including 5.1.2. An unauthenticated attacker may be able to exploit this issue to access sensitive files on affected systems.",
    href: "#",
  },
  {
    slug: "cve-2026-4029-database-backup",
    title: "Database Backup for WordPress Plugin Vulnerability (CVE-2026-4029)",
    cve: "CVE-2026-4029",
    excerpt:
      "Security Alert Summary — The Database Backup for WordPress plugin is vulnerable to unauthorized database export in versions up to and including 2.5.2 due to improper access control enforcement.",
    href: "#",
  },
  {
    slug: "cve-2026-6504-royal-elementor",
    title: "Royal Elementor Addons and Templates Plugin Vulnerability (CVE-2026-6504)",
    cve: "CVE-2026-6504",
    excerpt:
      "Security Alert Summary — The plugin contains a stored cross-site scripting (XSS) vulnerability via the title_tag parameter in versions up to and including 1.x, allowing malicious scripts to be stored and executed.",
    href: "#",
  },
  {
    slug: "cve-2026-6512-infusedwoo-pro",
    title: "InfusedWoo Pro Plugin Vulnerability (CVE-2026-6512)",
    cve: "CVE-2026-6512",
    excerpt:
      "Security Alert Summary — The plugin contains an authorization bypass vulnerability in versions up to and including 5.1.2, allowing improper access to restricted functionality.",
    href: "#",
  },
  {
    slug: "cve-2026-4031-database-backup",
    title: "Database Backup for WordPress Plugin Vulnerability (CVE-2026-4031)",
    cve: "CVE-2026-4031",
    excerpt:
      "Security Alert Summary — The plugin contains an authorization bypass issue allowing unauthorized influence over temporary backup operations in versions up to and including 2.5.2.",
    href: "#",
  },
  {
    slug: "cve-2026-4030-database-backup",
    title: "Database Backup for WordPress Plugin Vulnerability (CVE-2026-4030)",
    cve: "CVE-2026-4030",
    excerpt:
      "Security Alert Summary — The plugin contains a vulnerability that may allow unauthenticated attackers to read or delete arbitrary files in certain multisite configurations.",
    href: "#",
  },
  {
    slug: "cve-2026-7525-my-calendar",
    title: "My Calendar – Accessible Event Manager Plugin Vulnerability (CVE-2026-7525)",
    cve: "CVE-2026-7525",
    excerpt:
      "Security Alert Summary — The plugin contains an authorization bypass vulnerability allowing users with elevated roles to modify POST data improperly.",
    href: "#",
  },
  {
    slug: "cve-2026-6206-mw-wp-form",
    title: "MW WP Form Plugin Vulnerability (CVE-2026-6206)",
    cve: "CVE-2026-6206",
    excerpt:
      "Security Alert Summary — The plugin contains an information exposure vulnerability due to insufficient restriction in post selection logic.",
    href: "#",
  },
  {
    slug: "cve-2026-6225-taskbuilder",
    title: "Taskbuilder – Project Management Plugin Vulnerability (CVE-2026-6225)",
    cve: "CVE-2026-6225",
    excerpt:
      "Security Alert Summary — The plugin contains a time-based blind SQL injection vulnerability in the project_search parameter, allowing authenticated exploitation.",
    href: "#",
  },
  {
    slug: "cve-2026-6174-cc-child-pages",
    title: "CC Child Pages Plugin Vulnerability (CVE-2026-6174)",
    cve: "CVE-2026-6174",
    excerpt:
      "Security Alert Summary — The plugin contains a stored cross-site scripting (XSS) vulnerability via the more parameter in versions up to and including 2.1.1.",
    href: "#",
  },
  {
    slug: "cve-2026-5395-fluent-forms",
    title: "Fluent Forms Plugin Vulnerability (CVE-2026-5395)",
    cve: "CVE-2026-5395",
    excerpt:
      "Security Alert Summary — The plugin contains an insecure direct object reference vulnerability in the exportEntries function, potentially exposing form data.",
    href: "#",
  },
  {
    slug: "cve-2026-6145-user-registration-membership",
    title: "User Registration & Membership Plugin Vulnerability (CVE-2026-6145)",
    cve: "CVE-2026-6145",
    excerpt:
      "Security Alert Summary — The plugin contains a missing authorization vulnerability allowing bypass of admin approval during user registration.",
    href: "#",
  },
  {
    slug: "cve-2026-5365-latepoint",
    title: "LatePoint Plugin Vulnerability (CVE-2026-5365)",
    cve: "CVE-2026-5365",
    excerpt:
      "Security Alert Summary — The plugin contains a CSRF vulnerability due to missing verification checks in affected versions.",
    href: "#",
  },
  {
    slug: "cve-2026-6670-media-sync",
    title: "Media Sync Plugin Vulnerability (CVE-2026-6670)",
    cve: "CVE-2026-6670",
    excerpt:
      "Security Alert Summary — The plugin contains a path traversal vulnerability due to insufficient validation of user-supplied file paths.",
    href: "#",
  },
  {
    slug: "cve-2026-6271-career-section",
    title: "Career Section Plugin Vulnerability (CVE-2026-6271)",
    cve: "CVE-2026-6271",
    excerpt:
      "Security Alert Summary — The plugin contains an arbitrary file upload vulnerability due to missing file type validation in its CV upload handler.",
    href: "#",
  },
  {
    slug: "cve-2026-6506-infusedwoo-pro",
    title: "InfusedWoo Pro Plugin Vulnerability (CVE-2026-6506)",
    cve: "CVE-2026-6506",
    excerpt:
      "Security Alert Summary — The plugin contains a privilege escalation vulnerability allowing lower-level users to gain elevated access in affected versions.",
    href: "#",
  },
];

function Pagination({ current, total, onChange }) {
  const pages = useMemo(() => {
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => ({ type: "page", value: i + 1 }));
    }
    return [
      { type: "page", value: 1 },
      { type: "page", value: 2 },
      { type: "ellipsis" },
      { type: "page", value: total },
    ];
  }, [total]);

  return (
    <nav
      aria-label="Security bulletin pages"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "clamp(6px, 1vw, 10px)",
        marginTop: "clamp(40px, 5vw, 56px)",
      }}
    >
      <button
        type="button"
        aria-label="Previous page"
        disabled={current <= 1}
        onClick={() => onChange((p) => Math.max(1, p - 1))}
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "none",
          cursor: current <= 1 ? "not-allowed" : "pointer",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
          color: current <= 1 ? "rgba(22,45,36,0.25)" : GREEN,
          opacity: current <= 1 ? 0.5 : 1,
        }}
      >
        <ChevronLeft size={22} strokeWidth={2} aria-hidden />
      </button>

      {pages.map((item, i) => {
        if (item.type === "ellipsis") {
          return (
            <span
              key={`e-${i}`}
              style={{
                fontFamily: FONT_PARA,
                fontSize: "0.95rem",
                fontWeight: 500,
                color: META,
                padding: "0 4px",
                userSelect: "none",
              }}
            >
              …
            </span>
          );
        }
        const num = item.value;
        const active = current === num;
        return (
          <button
            key={num}
            type="button"
            onClick={() => onChange(num)}
            aria-current={active ? "page" : undefined}
            style={{
              width: active ? 42 : 38,
              height: active ? 42 : 38,
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: FONT_HEADING,
              fontSize: "0.95rem",
              fontWeight: active ? 700 : 500,
              color: active ? "#ffffff" : META,
              backgroundColor: active ? GREEN : "transparent",
              transition: "background-color 0.15s ease, color 0.15s ease",
            }}
          >
            {num}
          </button>
        );
      })}

      <button
        type="button"
        aria-label="Next page"
        disabled={current >= total}
        onClick={() => onChange((p) => Math.min(total, p + 1))}
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "none",
          cursor: current >= total ? "not-allowed" : "pointer",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
          color: current >= total ? "rgba(22,45,36,0.25)" : GREEN,
          opacity: current >= total ? 0.5 : 1,
        }}
      >
        <ChevronRight size={22} strokeWidth={2} aria-hidden />
      </button>
    </nav>
  );
}

export default function SecurityArticlesGridSection() {
  const totalPages = Math.max(1, Math.ceil(BULLETIN_CARDS.length / PAGE_SIZE));
  const [page, setPage] = useState(1);

  const visible = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return BULLETIN_CARDS.slice(start, start + PAGE_SIZE);
  }, [page]);

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: SECTION_BG,
        boxSizing: "border-box",
        padding: "clamp(48px, 6vw, 88px) clamp(20px, 5vw, 72px)",
      }}
    >
      <div
        style={{
          maxWidth: "min(1560px, 100%)",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            margin: "0 0 clamp(14px, 2vw, 18px)",
            fontFamily: FONT_HEADING,
            fontWeight: 700,
            fontSize: "clamp(1.75rem, 2.4vw, 2.25rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: GREEN,
          }}
        >
          WordPress security bulletins
        </h2>
        <p
          style={{
            margin: "0 0 clamp(32px, 4vw, 44px)",
            maxWidth: "min(72ch, 100%)",
            fontFamily: FONT_PARA,
            fontSize: "clamp(1.05rem, 1.2vw, 1.15rem)",
            lineHeight: 1.7,
            color: "rgba(22, 45, 36, 0.88)",
          }}
        >
          Stay up to date with the latest WordPress CVE security alerts affecting plugins, themes, and site
          components so you can quickly understand risks and take action when needed.
        </p>

        <div
          className="security-bulletins-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "clamp(26px, 3.65vw, 36px)",
            alignItems: "stretch",
          }}
        >
          {visible.map((card) => (
            <article
              key={card.slug}
              style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100%",
                padding: "clamp(29px, 3.4vw, 37px)",
                backgroundColor: CARD_BG,
                borderRadius: 21,
                border: "1px solid rgba(255, 255, 255, 0.14)",
                boxShadow: "0 16px 42px rgba(0, 0, 0, 0.24)",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontFamily: FONT_HEADING,
                  fontWeight: 700,
                  fontSize: "clamp(1.5rem, 1.9vw, 1.76rem)",
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                  color: CARD_TITLE,
                }}
              >
                {card.title}
              </h3>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "18px 26px",
                  marginTop: 18,
                  fontFamily: FONT_PARA,
                  fontSize: "1.14rem",
                  fontWeight: 500,
                  color: CARD_META,
                }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <Clock size={21} strokeWidth={2} aria-hidden style={{ opacity: 0.9 }} />
                  Security bulletin
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <Bug size={21} strokeWidth={2} aria-hidden style={{ opacity: 0.9 }} />
                  {card.cve}
                </span>
              </div>

              <p
                style={{
                  margin: "18px 0 0",
                  flex: 1,
                  fontFamily: FONT_PARA,
                  fontSize: "clamp(1.2rem, 1.3vw, 1.3rem)",
                  lineHeight: 1.65,
                  color: CARD_BODY,
                  display: "-webkit-box",
                  WebkitLineClamp: 6,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {card.excerpt}
              </p>

              <div style={{ marginTop: 26 }}>
                <a
                  href={card.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "13px 29px",
                    borderRadius: 999,
                    border: "2px solid rgba(255, 255, 255, 0.85)",
                    backgroundColor: "transparent",
                    color: CARD_TITLE,
                    fontFamily: FONT_HEADING,
                    fontWeight: 600,
                    fontSize: "1.14rem",
                    textDecoration: "none",
                    transition: "background-color 0.15s ease, color 0.15s ease",
                  }}
                  className="security-bulletin-read-btn"
                >
                  Read bulletin
                </a>
              </div>
            </article>
          ))}
        </div>

        <Pagination current={page} total={totalPages} onChange={setPage} />
      </div>

      <style>{`
        @media (max-width: 800px) {
          .security-bulletins-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .security-bulletin-read-btn:hover {
          background-color: ${LIME};
          color: ${GREEN};
          border-color: ${LIME};
        }
        .security-bulletin-read-btn:focus-visible {
          outline: 2px solid ${LIME};
          outline-offset: 3px;
        }
      `}</style>
    </section>
  );
}
