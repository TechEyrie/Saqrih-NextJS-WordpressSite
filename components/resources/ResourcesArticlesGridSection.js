"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Clock, User } from "lucide-react";

const GREEN = "#162D24";
const LIME = "#c8f04a";
const META = "rgba(22, 45, 36, 0.85)";
/** Text on dark green cards */
const CARD_TITLE = "rgba(255, 255, 255, 0.96)";
const CARD_META = "rgba(255, 255, 255, 0.88)";
const CARD_BODY = "rgba(255, 255, 255, 0.82)";
/** Card uses site primary green */
const CARD_BG = GREEN;
const SECTION_BG = "#f6f4ef";
const FONT_HEADING = "var(--font-inter), Inter, system-ui, sans-serif";
const FONT_PARA = "var(--font-montserrat), Montserrat, system-ui, sans-serif";

const PAGE_SIZE = 8;

const RESOURCE_CARDS = [
  {
    slug: "wordpress-white-screen-of-death",
    title: "Fixing the WordPress white screen of death",
    date: "April 16, 2026",
    author: "Nathan Chapman",
    excerpt:
      "A blank admin or front-end usually means a PHP fatal error, memory limit, or a bad plugin. Learn how to enable debugging, narrow the culprit, and get your site visible again without guesswork.",
    href: "#",
  },
  {
    slug: "safe-wordpress-updates",
    title: "How to safely update WordPress core, themes, and plugins",
    date: "April 14, 2026",
    author: "Nathan Chapman",
    excerpt:
      "Updates keep your site secure, but rushing them on production can break layouts or checkout flows. We walk through staging checks, backups, and a sensible order: core, plugins, then theme.",
    href: "#",
  },
  {
    slug: "database-connection-errors",
    title: "WordPress database connection errors explained",
    date: "April 11, 2026",
    author: "Team Saqrih",
    excerpt:
      "When WordPress cannot reach MySQL, visitors see an error instead of your content. This guide covers wp-config credentials, host endpoints, corrupted tables, and when to involve your host.",
    href: "#",
  },
  {
    slug: "restore-wordpress-backup",
    title: "Restoring WordPress from a backup the right way",
    date: "April 9, 2026",
    author: "Nathan Chapman",
    excerpt:
      "Whether you use a plugin snapshot or host-level backups, a restore touches files and the database. Here is how to verify integrity, avoid URL mismatches, and confirm the site before you cut over DNS.",
    href: "#",
  },
  {
    slug: "slow-wordpress-admin",
    title: "Troubleshooting a slow WordPress admin dashboard",
    date: "April 6, 2026",
    author: "Team Saqrih",
    excerpt:
      "A sluggish wp-admin is often heartbeat calls, admin-ajax spikes, or remote block editor requests. We show how to profile with Query Monitor, tame cron noise, and rule out hosting contention.",
    href: "#",
  },
  {
    slug: "mixed-content-ssl-wordpress",
    title: "Mixed content and SSL warnings in WordPress",
    date: "April 3, 2026",
    author: "Nathan Chapman",
    excerpt:
      "After moving to HTTPS, browsers may still load HTTP assets. Learn how to search the database for hard-coded URLs, fix siteurl/home mismatches, and use SSL plugins without creating redirect loops.",
    href: "#",
  },
  {
    slug: "404-permalinks-wordpress",
    title: "404 errors and permalink structure in WordPress",
    date: "March 28, 2026",
    author: "Team Saqrih",
    excerpt:
      "Pretty permalinks rely on rewrite rules. If posts suddenly 404, .htaccess may be missing rules, or Nginx try_files need a tweak. We cover flushing permalinks and server configs that commonly fix it.",
    href: "#",
  },
  {
    slug: "file-permissions-wordpress",
    title: "Managing file permissions on WordPress hosting",
    date: "March 24, 2026",
    author: "Nathan Chapman",
    excerpt:
      "Too-open permissions are a security risk; too-strict ones break updates and media uploads. Understand owner/group for PHP-FPM, recommended modes for wp-content, and when 644 versus 640 matters.",
    href: "#",
  },
  {
    slug: "plugin-conflicts-debugging",
    title: "Debugging plugin conflicts without downtime",
    date: "March 19, 2026",
    author: "Team Saqrih",
    excerpt:
      "Disable-all binary search is the classic approach, but you can work faster with staging, health check mode, and error logs. This resource outlines a repeatable process teams can follow under pressure.",
    href: "#",
  },
  {
    slug: "wordpress-login-hardening",
    title: "Hardening WordPress login and access control",
    date: "March 12, 2026",
    author: "Nathan Chapman",
    excerpt:
      "Brute force and credential stuffing target wp-login.php daily. Combine rate limits, MFA where possible, least-privilege roles, and sensible session handling to reduce risk without locking out editors.",
    href: "#",
  },
  {
    slug: "wordpress-cron-scheduled-tasks",
    title: "WordPress cron, Action Scheduler, and stuck background jobs",
    date: "March 8, 2026",
    author: "Team Saqrih",
    excerpt:
      "Missed webhooks, stuck queues, and duplicate scheduled events can quietly break memberships, email, and sync jobs. Learn how WP-Cron differs from real server cron, how to inspect hooks, and when to move triggers off-request.",
    href: "#",
  },
  {
    slug: "wordpress-malware-cleanup",
    title: "Cleaning malware from a WordPress site without losing trust",
    date: "March 1, 2026",
    author: "Nathan Chapman",
    excerpt:
      "Indicators range from injected scripts in the database to rogue admin users and obfuscated PHP. This resource covers containment, integrity scans, clean redeploys, and post-incident hardening so you can relaunch with confidence.",
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
      aria-label="Resource list pages"
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

export default function ResourcesArticlesGridSection() {
  const totalPages = Math.max(1, Math.ceil(RESOURCE_CARDS.length / PAGE_SIZE));
  const [page, setPage] = useState(1);

  const visible = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return RESOURCE_CARDS.slice(start, start + PAGE_SIZE);
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
        <div
          className="resources-articles-grid"
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
              <h2
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
              </h2>

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
                  {card.date}
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <User size={21} strokeWidth={2} aria-hidden style={{ opacity: 0.9 }} />
                  {card.author}
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
                  WebkitLineClamp: 5,
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
                  className="resources-read-resource-btn"
                >
                  Read resource
                </a>
              </div>
            </article>
          ))}
        </div>

        <Pagination
          current={page}
          total={totalPages}
          onChange={setPage}
        />
      </div>

      <style>{`
        @media (max-width: 800px) {
          .resources-articles-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .resources-read-resource-btn:hover {
          background-color: ${LIME};
          color: ${GREEN};
          border-color: ${LIME};
        }
        .resources-read-resource-btn:focus-visible {
          outline: 2px solid ${LIME};
          outline-offset: 3px;
        }
      `}</style>
    </section>
  );
}
