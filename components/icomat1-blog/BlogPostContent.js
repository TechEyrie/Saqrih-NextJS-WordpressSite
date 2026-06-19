"use client";

import Link from "next/link";

const GREEN = "#162D24";
const PALE_PANEL = "#F4F9E2";
const FONT_HEADING = "var(--font-inter), Inter, Arial, sans-serif";
const FONT_BODY = "var(--font-montserrat), Montserrat, Arial, sans-serif";

const bodyStyle = {
  margin: 0,
  color: "#2a2a2a",
  fontFamily: FONT_BODY,
  fontSize: "clamp(1rem, 1.08vw, 1.08rem)",
  lineHeight: 1.75,
  maxWidth: "68ch",
};

const headingStyle = {
  margin: "clamp(36px, 4vw, 52px) 0 clamp(16px, 2vw, 22px)",
  color: GREEN,
  fontFamily: FONT_HEADING,
  fontSize: "clamp(1.45rem, 2.2vw, 1.85rem)",
  fontWeight: 700,
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
};

const HOVER_LIME = "#C5E838";

const sharedPanelStyles = `
  .blog-panel-list {
    background-color: ${PALE_PANEL};
    border-radius: clamp(14px, 1.6vw, 18px);
    overflow: hidden;
  }

  .blog-panel-list--features {
    margin-top: clamp(28px, 3.2vw, 40px);
  }

  .blog-panel-list--steps {
    margin-top: clamp(24px, 2.8vw, 32px);
  }

  .blog-panel-item {
    display: flex;
    align-items: flex-start;
    gap: clamp(14px, 1.8vw, 20px);
    padding: clamp(18px, 2.2vw, 26px) clamp(20px, 2.4vw, 28px);
    background-color: transparent;
    transition:
      background-color 0.38s ease,
      padding 0.38s cubic-bezier(0.33, 1, 0.28, 1);
  }

  .blog-panel-list--steps .blog-panel-item {
    padding: clamp(20px, 2.4vw, 28px) clamp(20px, 2.4vw, 28px);
  }

  .blog-panel-item:hover {
    background-color: ${HOVER_LIME};
    padding-top: clamp(30px, 3.4vw, 40px);
    padding-bottom: clamp(30px, 3.4vw, 40px);
  }

  .blog-comparison-table-wrap {
    margin-top: clamp(24px, 2.8vw, 32px);
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: clamp(14px, 1.6vw, 18px);
  }

  .blog-comparison-table tbody tr {
    background-color: transparent;
    transition: background-color 0.38s ease;
  }

  .blog-comparison-table tbody td {
    transition: padding 0.38s cubic-bezier(0.33, 1, 0.28, 1);
  }

  .blog-comparison-table tbody tr:hover {
    background-color: ${HOVER_LIME};
  }

  .blog-comparison-table tbody tr:hover td {
    padding-top: clamp(20px, 2.2vw, 26px);
    padding-bottom: clamp(20px, 2.2vw, 26px);
  }
`;

function LimeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden style={{ flexShrink: 0 }}>
      <circle cx="14" cy="14" r="13" fill={GREEN} />
      <path
        d="M14 18V10M14 10l-4 4M14 10l4 4"
        stroke="#ffffff"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ParagraphsBlock({ items }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "clamp(18px, 2.2vw, 26px)" }}>
      {items.map((text, i) => (
        <p key={i} style={bodyStyle}>
          {text}
        </p>
      ))}
    </div>
  );
}

function HeadingBlock({ text }) {
  return <h2 style={{ ...headingStyle, marginTop: "clamp(40px, 4.5vw, 56px)" }}>{text}</h2>;
}

function FeatureListBlock({ items }) {
  return (
    <div className="blog-panel-list blog-panel-list--features">
      {items.map((item, i) => (
        <div
          key={i}
          className="blog-panel-item"
          style={{
            borderBottom: i < items.length - 1 ? "1px solid rgba(22, 45, 36, 0.12)" : "none",
          }}
        >
          <LimeIcon />
          <p style={{ ...bodyStyle, maxWidth: "none", color: GREEN, margin: 0 }}>
            <strong style={{ fontWeight: 700 }}>{item.title}</strong>
            {" – "}
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}

function TableBlock({ headers, rows }) {
  return (
    <div className="blog-comparison-table-wrap">
      <table
        className="blog-comparison-table"
        style={{
          width: "100%",
          minWidth: 520,
          borderCollapse: "collapse",
          fontFamily: FONT_BODY,
          fontSize: "clamp(0.92rem, 1vw, 1rem)",
          lineHeight: 1.55,
          color: "#2a2a2a",
        }}
      >
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                style={{
                  textAlign: "left",
                  padding: "14px 16px",
                  border: "1px solid rgba(22, 45, 36, 0.22)",
                  backgroundColor: "rgba(244, 249, 226, 0.65)",
                  fontFamily: FONT_HEADING,
                  fontWeight: 700,
                  color: GREEN,
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  style={{
                    verticalAlign: "top",
                    padding: "14px 16px",
                    border: "1px solid rgba(22, 45, 36, 0.22)",
                    fontWeight: j === 0 ? 700 : 400,
                    color: j === 0 ? GREEN : "#2a2a2a",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CtaLineBlock({ prefix, link }) {
  return (
    <p style={{ ...bodyStyle, marginTop: "clamp(36px, 4vw, 52px)" }}>
      <strong style={{ color: GREEN, fontWeight: 700 }}>{prefix}</strong>{" "}
      <Link href={link.href} style={{ color: GREEN, fontWeight: 600, textDecoration: "underline" }}>
        {link.label}
      </Link>
      {link.suffix ? `, ${link.suffix}` : ""}
    </p>
  );
}

function NumberedStepsBlock({ items }) {
  return (
    <div className="blog-panel-list blog-panel-list--steps">
      {items.map((item, i) => (
        <div
          key={i}
          className="blog-panel-item"
          style={{
            borderBottom: i < items.length - 1 ? "1px solid rgba(22, 45, 36, 0.12)" : "none",
          }}
        >
          <span
            style={{
              flexShrink: 0,
              width: 32,
              height: 32,
              borderRadius: "50%",
              backgroundColor: GREEN,
              color: "#ffffff",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: FONT_HEADING,
              fontSize: "0.9rem",
              fontWeight: 700,
            }}
          >
            {i + 1}
          </span>
          <p style={{ ...bodyStyle, maxWidth: "none", margin: 0, color: GREEN }}>
            <strong style={{ fontWeight: 700 }}>{item.title}</strong>
            {" – "}
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}

/**
 * @param {{ blocks: Array<object> }} props
 */
export default function BlogPostContent({ blocks }) {
  return (
    <div className="blog-post-blocks">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraphs":
            return <ParagraphsBlock key={i} items={block.items} />;
          case "heading":
            return <HeadingBlock key={i} text={block.text} />;
          case "featureList":
            return <FeatureListBlock key={i} items={block.items} />;
          case "table":
            return <TableBlock key={i} headers={block.headers} rows={block.rows} />;
          case "ctaLine":
            return <CtaLineBlock key={i} prefix={block.prefix} link={block.link} />;
          case "numberedSteps":
            return <NumberedStepsBlock key={i} items={block.items} />;
          default:
            return null;
        }
      })}

      <style>{sharedPanelStyles}</style>
    </div>
  );
}
