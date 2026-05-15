"use client";

import { useState } from "react";
import { Handshake, Minus, Plus } from "lucide-react";

const GREEN = "#162D24";
const BODY = "rgba(22, 45, 36, 0.88)";
const CREAM = "#f6f4ef";
const CTA_BOX_BG = "#e8f2c8";
const LIME_BTN = "#c8f04a";
const FONT_H = "var(--font-inter), Inter, Arial, sans-serif";
const FONT_P = "var(--font-montserrat), Montserrat, Arial, sans-serif";

const h2 = {
  margin: "clamp(2.25rem, 4vw, 3rem) 0 clamp(0.75rem, 1.2vw, 1rem)",
  fontFamily: FONT_H,
  fontWeight: 700,
  fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
  lineHeight: 1.15,
  letterSpacing: "-0.02em",
  color: GREEN,
};

const h3 = {
  margin: "clamp(1.35rem, 2vw, 1.75rem) 0 0.5rem",
  fontFamily: FONT_H,
  fontWeight: 700,
  fontSize: "clamp(1.05rem, 1.35vw, 1.2rem)",
  lineHeight: 1.25,
  color: GREEN,
};

const p = {
  margin: "0 0 clamp(1rem, 1.4vw, 1.25rem)",
  fontFamily: FONT_P,
  fontSize: "clamp(1rem, 1.1vw, 1.08rem)",
  lineHeight: 1.75,
  color: BODY,
  maxWidth: "82ch",
};

function LeftColumn() {
  return (
    <div className="sell-resource-left">
      <h2 style={{ ...h2, marginTop: 0 }}>
        A complete resource for agency owners considering a sale
      </h2>
      <p style={p}>
        If you own a WordPress agency, Shopify agency, SEO agency, PPC agency,
        creative studio, social media agency, email marketing agency, CRM
        agency, or full-service digital agency, many of the fundamentals behind
        a successful sale remain the same.
      </p>
      <p style={p}>
        Buyers want to know whether the business is valuable, transferable, and
        capable of operating successfully after the founder steps back. That
        means they evaluate more than just revenue—they look at client
        retention, recurring income, operational systems, team structure,
        founder involvement, and long-term scalability.
      </p>
      <p style={p}>
        Most agency owners only go through the sale process once, while buyers
        evaluate agencies regularly. This creates a major information gap. Our
        goal is to help founders better understand how agencies are valued, how
        diligence works, how deals are structured, and what happens after a
        transaction closes.
      </p>

      <h2 style={h2}>Where to start if you are thinking about selling</h2>
      <p style={p}>
        If you are early in the process, begin by understanding how agency sales
        typically work—from valuation and offers to due diligence, closing, and
        transition planning.
      </p>
      <p style={p}>
        If your biggest question is valuation, focus on understanding factors
        like adjusted EBITDA, recurring revenue, client retention, service mix,
        operational maturity, and founder dependency.
      </p>
      <p style={p}>
        If you are not ready to sell yet, improving operational structure,
        documentation, recurring revenue, and delivery systems ahead of time can
        significantly improve buyer confidence and reduce friction later.
      </p>
      <p style={p}>
        If you are already speaking with buyers, it becomes important to
        understand diligence requirements, deal structures, transition
        expectations, and post-sale integration planning.
      </p>

      <h2 style={h2}>What makes an agency attractive to buyers?</h2>
      <p style={p}>
        Buyers are not simply purchasing revenue—they are purchasing future
        client relationships, operational systems, service delivery
        capabilities, and long-term growth opportunities.
      </p>
      <p style={p}>
        Agencies with stable recurring revenue, low client churn, organized
        systems, and reduced founder dependency are generally easier to value,
        transition, and scale.
      </p>

      <h3 style={h3}>Recurring revenue</h3>
      <p style={p}>
        Hosting, maintenance, SEO retainers, PPC retainers, website support
        plans, email marketing retainers, and ongoing service contracts create
        predictable and reliable revenue streams.
      </p>
      <h3 style={h3}>Client retention</h3>
      <p style={p}>
        Long-term client relationships with low churn reduce transition risk and
        improve confidence in future revenue stability.
      </p>
      <h3 style={h3}>Operational clarity</h3>
      <p style={p}>
        Clear scopes, pricing models, documentation, workflows, and delivery
        systems make the agency easier to manage and integrate.
      </p>
      <h3 style={h3}>Client diversification</h3>
      <p style={p}>
        A diversified client portfolio reduces risk compared to agencies heavily
        dependent on one or two major accounts.
      </p>
      <h3 style={h3}>Founder independence</h3>
      <p style={p}>
        Agencies that operate successfully without constant founder involvement
        are typically more transferable and attractive to buyers.
      </p>
      <h3 style={h3}>Service alignment</h3>
      <p style={p}>
        Agencies with services that align well with a buyer&apos;s existing
        capabilities are often easier to scale and integrate after acquisition.
      </p>

      <h2 style={h2}>The main parts of an agency sale</h2>
      <p style={p}>
        An agency sale typically begins with determining strategic fit between
        buyer and seller. Buyers then review high-level financial and
        operational information to understand the agency&apos;s value and
        structure.
      </p>
      <p style={p}>
        If both sides decide to proceed, a letter of intent may follow. After
        that comes due diligence, where buyers review contracts, financials,
        client data, operational systems, team structures, and potential risks
        in detail.
      </p>
      <p style={p}>
        Once diligence is complete, legal agreements are finalized and the
        transaction closes. However, the transition period after closing is
        often just as important, including client communication, onboarding,
        operational alignment, billing migration, and continuity planning.
      </p>

      <h2 style={h2}>Why deal structure matters as much as valuation</h2>
      <p style={p}>
        Two offers with the same headline valuation can produce very different
        outcomes depending on how the deal is structured.
      </p>
      <p style={p}>
        A larger upfront cash payment may provide greater certainty, while
        earnouts may offer additional upside but introduce more risk. Seller
        financing and equity rollovers can also impact how value is realized
        over time.
      </p>
      <p style={p}>
        Deal structure determines how payments are made, what portions are
        guaranteed, what remains contingent, and how risk is shared between
        buyer and seller.
      </p>

      <h2 style={h2}>Eyrion&apos;s perspective on agency acquisitions</h2>
      <p style={p}>
        Eyrion approaches acquisitions as experienced operators who understand
        the realities of running and scaling digital agencies day to day.
      </p>
      <p style={p}>
        We evaluate areas such as service alignment, recurring revenue quality,
        operational organization, delivery systems, client stability, and
        transition readiness.
      </p>
      <p style={p}>
        Not every agency needs to be perfect. However, agencies with cleaner
        operations, organized systems, and stronger client foundations are
        generally easier to transition successfully while preserving long-term
        value.
      </p>

      <h2 style={h2}>Thinking about selling your agency?</h2>
      <p style={p}>
        Whether you are actively exploring a sale or simply want to understand
        what your agency may be worth, starting with a confidential conversation
        can help you evaluate your options and better understand the market.
      </p>

      <h2 style={h2}>Frequently asked questions</h2>
      <h3
        style={{
          ...h3,
          marginTop: "clamp(0.5rem, 1vw, 1rem)",
        }}
      >
        How do I start the process of selling my agency?
      </h3>
      <p style={p}>
        Start by understanding your goals, your agency&apos;s valuation range,
        revenue quality, client concentration, operational readiness, and the
        type of buyer most likely to be a strong fit.
      </p>
      <h3 style={h3}>What types of agencies can be sold?</h3>
      <p style={p}>
        Many digital service businesses can be sold, including WordPress
        agencies, Shopify agencies, SEO firms, PPC agencies, creative studios,
        branding agencies, CRM agencies, social media agencies, and full-service
        digital agencies.
      </p>
      <h3 style={h3}>What do buyers look for in a digital agency?</h3>
      <p style={{ ...p, marginBottom: 0 }}>
        Buyers typically look for recurring revenue, long-term client retention,
        organized financials, scalable systems, operational consistency, capable
        teams, and reduced founder dependency.
      </p>
    </div>
  );
}

const GUIDE_OTHER_ROWS = [
  "Types of agency buyers",
  "Timeline of an agency sale",
  "The Eyrion acquisition model",
  "FAQ",
];

const GET_STARTED_CHILDREN = [
  { id: "sell-my-agency", label: "Sell my agency", active: true },
  { id: "how-to-sell", label: "How to sell", active: false },
  { id: "valuation", label: "Valuation", expandable: true },
  { id: "prepare", label: "Prepare for sale", expandable: true },
  { id: "due-diligence", label: "Due diligence", active: false },
  { id: "deal-structure", label: "Deal structure", active: false },
  { id: "transition", label: "Transition", active: false },
];

function GuideNav() {
  const [getStartedOpen, setGetStartedOpen] = useState(true);
  const [nested, setNested] = useState(() => ({ valuation: false, prepare: false }));

  const rowBorder = { borderBottom: "1px solid rgba(22, 45, 36, 0.12)" };
  const rowFlex = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: "14px 0",
    ...rowBorder,
    fontFamily: FONT_H,
    fontWeight: 600,
    fontSize: "0.95rem",
    color: GREEN,
    textAlign: "left",
  };

  return (
    <nav aria-label="How to sell your agency guide">
      <h3
        style={{
          margin: "0 0 clamp(14px, 2vw, 18px)",
          fontFamily: FONT_H,
          fontWeight: 700,
          fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)",
          color: GREEN,
          lineHeight: 1.2,
        }}
      >
        How to sell your agency guide
      </h3>

      <div>
        <button
          type="button"
          onClick={() => setGetStartedOpen((o) => !o)}
          aria-expanded={getStartedOpen}
          style={{
            ...rowFlex,
            border: "none",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          <span>Get started</span>
          {getStartedOpen ? (
            <Minus size={18} strokeWidth={2} aria-hidden />
          ) : (
            <Plus size={18} strokeWidth={2} aria-hidden />
          )}
        </button>

        {getStartedOpen && (
          <div style={{ paddingBottom: 4 }}>
            {GET_STARTED_CHILDREN.map((ch) => (
              <div key={ch.id}>
                {ch.expandable ? (
                  <button
                    type="button"
                    aria-expanded={Boolean(nested[ch.id])}
                    onClick={() =>
                      setNested((n) => ({
                        ...n,
                        [ch.id]: !n[ch.id],
                      }))
                    }
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "11px 12px",
                      marginLeft: 4,
                      border: "none",
                      borderRadius: 8,
                      background: "transparent",
                      cursor: "pointer",
                      fontFamily: FONT_P,
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      color: GREEN,
                      textAlign: "left",
                    }}
                  >
                    <span>{ch.label}</span>
                    {nested[ch.id] ? (
                      <Minus size={16} strokeWidth={2} aria-hidden />
                    ) : (
                      <Plus size={16} strokeWidth={2} aria-hidden />
                    )}
                  </button>
                ) : (
                  <div
                    style={{
                      padding: "10px 12px",
                      margin: "2px 0 2px 4px",
                      borderRadius: 8,
                      backgroundColor: ch.active ? GREEN : "transparent",
                      color: ch.active ? "#ffffff" : GREEN,
                      fontFamily: FONT_P,
                      fontSize: "0.9rem",
                      fontWeight: ch.active ? 600 : 500,
                      lineHeight: 1.35,
                    }}
                  >
                    {ch.label}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {GUIDE_OTHER_ROWS.map((label) => (
        <div key={label} style={rowFlex}>
          <span>{label}</span>
          <Plus size={18} strokeWidth={2} aria-hidden />
        </div>
      ))}
    </nav>
  );
}

function RightColumn() {
  return (
    <aside className="sell-resource-aside">
      {/* The entire right grid column is sticky */}
      <div className="sell-resource-sticky-column">
        <div
          style={{
            backgroundColor: CTA_BOX_BG,
            borderRadius: 16,
            padding: "clamp(20px, 2.4vw, 26px)",
            border: "1px solid rgba(22, 45, 36, 0.08)",
            marginBottom: "clamp(20px, 3vw, 28px)",
          }}
        >
          <Handshake
            size={36}
            strokeWidth={1.4}
            color={GREEN}
            style={{ marginBottom: 14 }}
            aria-hidden
          />
          <h3
            style={{
              margin: 0,
              fontFamily: FONT_H,
              fontWeight: 700,
              fontSize: "clamp(1.1rem, 1.4vw, 1.35rem)",
              lineHeight: 1.2,
              color: GREEN,
              letterSpacing: "-0.02em",
            }}
          >
            Selling your WordPress agency doesn&apos;t have to be complicated
          </h3>
          <p
            style={{
              margin: "12px 0 0",
              fontFamily: FONT_P,
              fontSize: "0.95rem",
              lineHeight: 1.65,
              color: GREEN,
              opacity: 0.92,
            }}
          >
            We handle the transition so you can move forward with confidence.
          </p>
          <a
            href="#"
            style={{
              display: "inline-flex",
              marginTop: 18,
              alignItems: "center",
              justifyContent: "center",
              padding: "11px 24px",
              borderRadius: 999,
              backgroundColor: LIME_BTN,
              color: GREEN,
              fontFamily: FONT_H,
              fontWeight: 700,
              fontSize: "0.9rem",
              textDecoration: "none",
              border: "1px solid rgba(22, 45, 36, 0.12)",
            }}
          >
            Let&apos;s chat
          </a>
        </div>

        <GuideNav />
      </div>
    </aside>
  );
}

export default function SellResourceHubSection() {
  return (
    <section
      className="sell-resource-section"
      style={{
        width: "100%",
        backgroundColor: CREAM,
        boxSizing: "border-box",
        padding: "clamp(56px, 7vw, 96px) clamp(20px, 5vw, 72px)",
      }}
    >
      <div
        className="sell-resource-grid"
        style={{
          maxWidth: "min(1520px, 100%)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(320px, 420px)",
          gap: "clamp(32px, 5vw, 56px)",
          alignItems: "start",
        }}
      >
        <LeftColumn />
        <RightColumn />
      </div>

      <style>{`
        /* IMPORTANT: no overflow clipping on ancestors */
        .sell-resource-section,
        .sell-resource-grid {
          overflow: visible;
        }

        .sell-resource-aside {
          align-self: start;
        }

        /* Sticky right column */
        .sell-resource-sticky-column {
          position: sticky;
          top: 72px; /* adjust to your header height */
        }

        @media (max-width: 960px) {
          .sell-resource-grid {
            grid-template-columns: 1fr !important;
          }
          .sell-resource-aside {
            max-width: min(520px, 100%);
          }
          .sell-resource-sticky-column {
            position: static !important;
            top: auto !important;
          }
        }
      `}</style>
    </section>
  );
}