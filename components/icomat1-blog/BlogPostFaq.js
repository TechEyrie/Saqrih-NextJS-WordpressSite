"use client";

const GREEN = "#162D24";
const HOVER_LIME = "#C5E838";
const FONT_HEADING = "var(--font-inter), Inter, Arial, sans-serif";
const FONT_BODY = "var(--font-montserrat), Montserrat, Arial, sans-serif";

/**
 * @param {{ items: { question: string; answer: string }[] }} props
 */
export default function BlogPostFaq({ items }) {
  if (!items?.length) return null;

  return (
    <div className="blog-post-faq">
      <h2
        style={{
          margin: "clamp(48px, 5vw, 64px) 0 clamp(24px, 2.8vw, 32px)",
          color: GREEN,
          fontFamily: FONT_HEADING,
          fontSize: "clamp(1.45rem, 2.2vw, 1.85rem)",
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
        }}
      >
        Frequently Asked Questions
      </h2>

      <div className="blog-faq-list">
        {items.map((item, i) => (
          <div
            key={i}
            className="blog-faq-item"
            style={{
              borderBottom: i < items.length - 1 ? "1px solid rgba(22, 45, 36, 0.1)" : "none",
            }}
          >
            <p
              style={{
                margin: 0,
                color: GREEN,
                fontFamily: FONT_HEADING,
                fontSize: "clamp(1rem, 1.1vw, 1.08rem)",
                fontWeight: 700,
                lineHeight: 1.45,
              }}
            >
              {item.question}
            </p>
            <p
              style={{
                margin: "clamp(10px, 1.2vw, 14px) 0 0",
                color: GREEN,
                fontFamily: FONT_BODY,
                fontSize: "clamp(0.98rem, 1.05vw, 1.05rem)",
                lineHeight: 1.7,
                opacity: 0.92,
              }}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .blog-faq-item {
          padding: clamp(18px, 2.2vw, 26px) clamp(4px, 0.6vw, 8px);
          margin: 0 clamp(-4px, -0.6vw, -8px);
          border-radius: clamp(10px, 1.2vw, 14px);
          background-color: transparent;
          transition:
            background-color 0.38s ease,
            padding 0.38s cubic-bezier(0.33, 1, 0.28, 1);
        }

        .blog-faq-item:hover {
          background-color: ${HOVER_LIME};
          padding-top: clamp(28px, 3.2vw, 36px);
          padding-bottom: clamp(28px, 3.2vw, 36px);
          padding-left: clamp(16px, 2vw, 22px);
          padding-right: clamp(16px, 2vw, 22px);
        }
      `}</style>
    </div>
  );
}
