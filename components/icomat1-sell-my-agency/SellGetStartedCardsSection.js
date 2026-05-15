"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const GREEN = "#162D24";
const SECTION_BG = "#f6f4ef";
const LABEL = "rgba(22, 45, 36, 0.55)";
const BODY = "rgba(22, 22, 22, 0.82)";
const FONT_HEADING = "var(--font-inter), Inter, system-ui, sans-serif";
const FONT_PARA = "var(--font-montserrat), Montserrat, system-ui, sans-serif";

const CARDS = [
  {
    id: "how-to-sell",
    title: "How to sell your digital agency",
    excerpt:
      "Selling a digital agency is not a single event. It is a structured process that unfolds over time through preparation, positioning, buyer conversations, negotiation, due diligence, legal documentation, and post-sale transition. Most…",
    href: "#",
  },
  {
    id: "valuation",
    title: "Digital agency valuation guide",
    excerpt:
      'One of the first questions agency owners ask when considering a sale is simple: "What is my agency worth?" The answer is not based on a single formula. Digital agency valuation depends…',
    href: "#",
  },
  {
    id: "prepare",
    title: "How to prepare your agency for sale",
    excerpt:
      "The strongest agency exits are rarely accidental. They are prepared. Preparation gives you more control over the process, reduces risk during due diligence, improves valuation, and increases the likelihood of a smooth…",
    href: "#",
  },
  {
    id: "due-diligence",
    title: "Agency due diligence guide",
    excerpt:
      "Due diligence is the stage where a buyer verifies everything about your agency before completing an acquisition. It is one of the most important parts of the process — and one of…",
    href: "#",
  },
];

function Pagination({ current, onChange }) {
  const items = [1, 2, 3, 4, "ellipsis", 11];

  return (
    <nav
      aria-label="Resource pages"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "clamp(6px, 1.2vw, 10px)",
        marginTop: "clamp(36px, 5vw, 52px)",
      }}
    >
      {items.map((item, i) => {
        if (item === "ellipsis") {
          return (
            <span
              key={`e-${i}`}
              style={{
                fontFamily: FONT_PARA,
                fontSize: "0.95rem",
                fontWeight: 500,
                color: BODY,
                padding: "0 4px",
                userSelect: "none",
              }}
            >
              …
            </span>
          );
        }
        const num = item;
        const active = current === num;
        return (
          <button
            key={num}
            type="button"
            onClick={() => onChange(num)}
            aria-current={active ? "page" : undefined}
            style={{
              width: active ? 40 : 36,
              height: active ? 40 : 36,
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: FONT_HEADING,
              fontSize: "0.95rem",
              fontWeight: active ? 700 : 500,
              color: active ? "#ffffff" : BODY,
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
        onClick={() => onChange(Math.min(11, current + 1))}
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "transparent",
          color: BODY,
        }}
      >
        <ChevronRight size={22} strokeWidth={2} aria-hidden />
      </button>
    </nav>
  );
}

export default function SellGetStartedCardsSection() {
  const [page, setPage] = useState(1);

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
          maxWidth: "min(1520px, 100%)",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            margin: "0 0 clamp(24px, 3.5vw, 36px)",
            fontFamily: FONT_HEADING,
            fontWeight: 700,
            fontSize: "clamp(1.5rem, 2.2vw, 1.85rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: GREEN,
          }}
        >
          Get started
        </h2>

        <div
          className="sell-get-started-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "clamp(18px, 2.5vw, 28px)",
            alignItems: "stretch",
          }}
        >
          {CARDS.map((card) => (
            <a
              key={card.id}
              className="sell-get-started-card"
              href={card.href}
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                minHeight: 0,
                padding: "clamp(22px, 2.8vw, 28px)",
                backgroundColor: "#ffffff",
                borderRadius: 14,
                border: "1px solid rgba(22, 45, 36, 0.08)",
                boxShadow: "0 10px 32px rgba(22, 45, 36, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04)",
                textDecoration: "none",
                color: "inherit",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
              }}
            >
              <span
                style={{
                  fontFamily: FONT_PARA,
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: LABEL,
                  marginBottom: 12,
                }}
              >
                Get started
              </span>
              <h3
                style={{
                  margin: "0 0 12px",
                  fontFamily: FONT_HEADING,
                  fontWeight: 700,
                  fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)",
                  lineHeight: 1.25,
                  color: GREEN,
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  flex: 1,
                  fontFamily: FONT_PARA,
                  fontSize: "clamp(0.92rem, 1vw, 1rem)",
                  lineHeight: 1.65,
                  color: BODY,
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {card.excerpt}
              </p>
            </a>
          ))}
        </div>

        <Pagination current={page} onChange={setPage} />
      </div>

      <style>{`
        @media (max-width: 720px) {
          .sell-get-started-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .sell-get-started-card:hover {
          box-shadow: 0 14px 40px rgba(22, 45, 36, 0.09), 0 4px 12px rgba(0, 0, 0, 0.05);
          transform: translateY(-2px);
        }
        .sell-get-started-card:focus-visible {
          outline: 2px solid ${GREEN};
          outline-offset: 3px;
        }
      `}</style>
    </section>
  );
}
