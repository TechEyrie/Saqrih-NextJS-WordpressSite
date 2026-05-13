"use client";

const GREEN = "#155E46";
const BODY = "rgba(16,40,30,0.86)";
const BODY_CARD = "rgba(16,40,30,0.9)";

export default function ConversionCtaSection() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#F2EEE8",
        padding: "clamp(72px, 8vw, 116px) clamp(24px, 6vw, 88px)",
      }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: GREEN,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            fontSize: "clamp(2rem, 3.6vw, 3.4rem)",
            maxWidth: "min(100%, 28ch)",
          }}
        >
          Reporting – both before and after WordPress speed optimization
        </h2>

        <div
          className="security-conversion-cta-grid"
          style={{
            marginTop: "clamp(28px, 3.5vw, 44px)",
            display: "grid",
            gridTemplateColumns: "1fr minmax(280px, 420px)",
            gap: "clamp(24px, 4vw, 56px)",
            alignItems: "start",
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                color: BODY,
                fontSize: "clamp(1rem, 1.08vw, 1.12rem)",
                lineHeight: 1.8,
                maxWidth: "74ch",
              }}
            >
              We handle the technical work of improving your website speed, but we keep you fully informed throughout
              the process. Our WordPress speed optimization service includes both initial benchmarking reports and a
              final performance assessment, so you can clearly see the improvements made.
            </p>

            <p
              style={{
                margin: "1rem 0 0",
                color: BODY,
                fontSize: "clamp(1rem, 1.08vw, 1.12rem)",
                lineHeight: 1.8,
                maxWidth: "74ch",
              }}
            >
              These reports don&apos;t just document progress—they also help you understand what changed and why. We can
              walk you through each optimization decision and show how it impacted your site&apos;s performance metrics.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.72)",
              border: "1px solid rgba(21,94,70,0.12)",
              borderRadius: "18px",
              padding: "clamp(20px, 2.2vw, 28px)",
              boxShadow: "0 16px 36px rgba(21, 94, 70, 0.08)",
            }}
          >
            <p
              style={{
                margin: 0,
                color: BODY_CARD,
                fontSize: "clamp(1rem, 1.08vw, 1.12rem)",
                lineHeight: 1.8,
                fontWeight: 500,
              }}
            >
              This level of transparency helps you make better long-term decisions. For example, if a plugin is removed
              or replaced to improve load time, our reporting shows exactly how much performance improved, allowing you
              to decide whether reintroducing it is worth the trade-off.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .security-conversion-cta-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
