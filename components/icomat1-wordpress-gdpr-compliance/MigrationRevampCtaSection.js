"use client";

const GREEN = "#162D24";
const LIME = "#DFFB85";
const BODY = "rgba(22, 45, 36, 0.82)";

const FONT_H2 = "clamp(2rem, 3.8vw, 3.1rem)";
const FONT_BODY = "clamp(1.05rem, 1.25vw, 1.2rem)";
const FONT_FEATURE_H3 = "clamp(1.28rem, 1.55vw, 1.48rem)";

function RevampIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M17 3a2.85 2.85 0 114 4L7 21H3v-4L17 3z"
        stroke={GREEN}
        strokeWidth="1.85"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MigrationRevampCtaSection({ onQuoteClick }) {
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
          Give Your Site a Little Revamp Along the Way
        </h2>

        <p
          style={{
            margin: "clamp(18px, 2.5vw, 26px) auto 0",
            maxWidth: "72ch",
            color: BODY,
            fontSize: FONT_BODY,
            lineHeight: 1.78,
          }}
        >
          A WordPress migration is the ideal moment to improve more than just your hosting.
          It&apos;s a chance to refine layouts, update branding, and enhance how your content
          performs for users and search engines.
        </p>

        <p
          style={{
            margin: "clamp(14px, 2vw, 20px) auto 0",
            maxWidth: "72ch",
            color: BODY,
            fontSize: FONT_BODY,
            lineHeight: 1.78,
          }}
        >
          Eyrion can combine design and UX improvements directly into your migration project, so
          you launch not only on stronger infrastructure but also with a cleaner, more modern, and
          better-performing website.
        </p>

        <p
          style={{
            margin: "clamp(14px, 2vw, 20px) auto 0",
            maxWidth: "72ch",
            color: BODY,
            fontSize: FONT_BODY,
            lineHeight: 1.78,
          }}
        >
          If you want to explore improvements before moving, we can plan a combined migration and
          redesign strategy tailored to your goals and business needs.
        </p>

        <div
          style={{
            marginTop: "clamp(36px, 5vw, 52px)",
            textAlign: "left",
            backgroundColor: "#ffffff",
            borderRadius: "clamp(20px, 2.5vw, 28px)",
            padding: "clamp(22px, 3vw, 32px) clamp(20px, 3vw, 32px)",
            boxShadow: "0 12px 48px rgba(22, 45, 36, 0.1)",
            border: "1px solid rgba(22, 45, 36, 0.08)",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "clamp(18px, 2.5vw, 28px)",
          }}
          className="migration-revamp-card"
        >
          <div
            style={{
              flexShrink: 0,
              width: "clamp(88px, 8vw, 112px)",
              height: "clamp(88px, 8vw, 112px)",
              borderRadius: "18px",
              backgroundColor: LIME,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RevampIcon />
          </div>
          <div style={{ minWidth: 0 }}>
            <h3
              style={{
                margin: 0,
                color: GREEN,
                fontWeight: 700,
                fontSize: FONT_FEATURE_H3,
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
              }}
            >
              Pair Your WordPress Website Migration with a Fresh Look
            </h3>
            <p
              style={{
                margin: "clamp(10px, 1.4vw, 14px) 0 0",
                color: BODY,
                fontSize: FONT_BODY,
                lineHeight: 1.78,
              }}
            >
              From typography and spacing to page templates and WooCommerce user flows, Eyrion can
              enhance key parts of your website during the migration process. This helps you avoid
              duplicate work and ensures your launch delivers a complete, cohesive upgrade in one
              go.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "clamp(36px, 5vw, 48px)",
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <button
            type="button"
            onClick={onQuoteClick}
            className="migration-solid-quote inline-flex w-fit items-center justify-center rounded-[38px] px-12 py-6 text-[14px] sm:text-[15px] tracking-[0.09em] font-semibold uppercase"
            style={{
              lineHeight: 1,
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.12)",
              cursor: onQuoteClick ? "pointer" : "default",
              boxShadow: "0 8px 28px rgba(22, 45, 36, 0.22)",
            }}
          >
            Get a Quote
          </button>
        </div>
      </div>

      <style>{`
        .migration-solid-quote {
          background-color: ${GREEN};
          transition: background-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
        }
        .migration-solid-quote:hover {
          background-color: #1a3a2f;
          box-shadow: 0 10px 32px rgba(22, 45, 36, 0.28);
        }
        .migration-solid-quote:active {
          transform: scale(0.98);
        }
        @media (max-width: 560px) {
          .migration-revamp-card {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
