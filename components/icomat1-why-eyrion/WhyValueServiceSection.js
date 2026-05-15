"use client";

const GREEN = "#162D24";
const BODY = "rgba(22, 45, 36, 0.82)";

function WordPressMark({ size = 52 }) {
  return (
    <div
      aria-hidden
      style={{
        width: size,
        height: size,
        borderRadius: 12,
        backgroundColor: GREEN,
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: Math.round(size * 0.46),
        fontWeight: 800,
        fontFamily: "var(--font-inter), Inter, Arial, sans-serif",
        lineHeight: 1,
        letterSpacing: "-0.02em",
      }}
    >
      W
    </div>
  );
}

const CARDS = [
  {
    key: "team",
    background: "#EDE4F7",
    content: "stat",
    value: "50+",
    label: "Experienced team members",
  },
  {
    key: "wp",
    background: "#EEF6C5",
    content: "wordpress",
    label: "WordPress experts",
  },
  {
    key: "reviews",
    background: "#FFE8D4",
    content: "stat",
    value: "370+",
    label: "5-star Google reviews",
  },
  {
    key: "projects",
    background: "#DDE8FC",
    content: "stat",
    value: "2K+",
    label: "Projects completed",
  },
];

export default function WhyValueServiceSection() {
  return (
    <section
      className="why-value-service-section"
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        boxSizing: "border-box",
        padding: "clamp(80px, 10vw, 128px) clamp(24px, 6vw, 100px)",
      }}
    >
      <div
        className="why-value-service-inner"
        style={{
          maxWidth: "min(1200px, 100%)",
          margin: "0 auto",
        }}
      >
        <div className="why-value-service-cols">
          <div className="why-value-service-copy">
            <h2
              style={{
                margin: 0,
                fontWeight: 700,
                fontSize: "clamp(1.85rem, 3.4vw, 2.85rem)",
                lineHeight: 1.12,
                letterSpacing: "-0.025em",
                color: GREEN,
              }}
            >
              We&apos;re focused on creating value through service
            </h2>
            <p
              style={{
                margin: "clamp(16px, 2vw, 22px) 0 0",
                fontWeight: 400,
                fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)",
                lineHeight: 1.75,
                color: BODY,
                maxWidth: "min(68ch, 100%)",
              }}
            >
              At Eyrion, we believe we&apos;re a team of guides. We are focused on solving problems in
              order to make our clients&apos; lives easier and their work more effective. Every process
              we build, every system we implement, every team member we add, aims to further that
              mission.
            </p>
          </div>

          <div className="why-value-service-cards">
            {CARDS.map((card) => (
              <div
                key={card.key}
                className="why-value-service-card"
                style={{
                  backgroundColor: card.background,
                  borderRadius: 16,
                  padding: "clamp(20px, 2.4vw, 28px)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "clamp(10px, 1.2vw, 14px)",
                  minHeight: "clamp(140px, 18vw, 180px)",
                  boxSizing: "border-box",
                }}
              >
                {card.content === "wordpress" ? (
                  <WordPressMark size={52} />
                ) : (
                  <span
                    style={{
                      color: GREEN,
                      fontWeight: 700,
                      fontSize: "clamp(2rem, 3.3vw, 3.3rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {card.value}
                  </span>
                )}
                <span
                  style={{
                    color: BODY,
                    fontWeight: 500,
                    fontSize: "clamp(1rem, 1.15vw, 1.18rem)",
                    lineHeight: 1.35,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {card.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .why-value-service-cols {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: clamp(32px, 5vw, 64px);
          align-items: start;
        }
        .why-value-service-cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }
        @media (max-width: 900px) {
          .why-value-service-cols {
            grid-template-columns: 1fr;
          }
          .why-value-service-cards {
            max-width: 480px;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
        }
        @media (max-width: 420px) {
          .why-value-service-cards {
            grid-template-columns: 1fr;
            max-width: none;
          }
        }
      `}</style>
    </section>
  );
}
