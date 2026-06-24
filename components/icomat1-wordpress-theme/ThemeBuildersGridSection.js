"use client";

/**
 * Themes & builders grid — data uses m / g / l; icons vary by row (monitor↔wand, link↔stack).
 */

const GREEN = "#162D24";
const INK = "rgba(255,255,255,0.92)";
const INK_MUTED = "rgba(255,255,255,0.74)";

/** Match `SEOResultSection` on same theme page */
const FONT_H2 = "clamp(2.1rem, 3.8vw, 3.375rem)";
const FONT_INTRO = "clamp(1.02rem, 1.2vw, 1.2rem)";
const FONT_GRID = "clamp(1.05rem, 1.25vw, 1.2rem)";

const ICON = 22;

function IconMonitor() {
  return (
    <svg width={ICON} height={ICON} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="4" width="18" height="13" rx="1.5" stroke={INK} strokeWidth="1.6" />
      <path d="M8 21h8M12 17v4" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Theme-style alternate — magic wand + sparkles */
function IconWand() {
  return (
    <svg width={ICON} height={ICON} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 20l7-7M6.5 17.5L8 19"
        stroke={INK}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 10.5L19 2l1 1-8.5 9.5-2.5-2z"
        stroke={INK}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M17 14l1.2 1.2M20.5 11.5l1 1M14 17.5l.8.8"
        stroke={INK}
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Page builder — canvas + sidebar blocks (distinct from 2×2 grid) */
function IconBuilder() {
  return (
    <svg width={ICON} height={ICON} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="4" width="18" height="16" rx="1.5" stroke={INK} strokeWidth="1.55" />
      <path d="M8 4v16" stroke={INK} strokeWidth="1.35" />
      <rect x="10.5" y="7" width="8.5" height="4" rx="0.75" stroke={INK} strokeWidth="1.35" />
      <rect x="10.5" y="13" width="5" height="3.5" rx="0.65" stroke={INK} strokeWidth="1.35" />
    </svg>
  );
}

function IconLink() {
  return (
    <svg width={ICON} height={ICON} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M10 13a5 5 0 01-7-7l2-2a5 5 0 017 7M14 11a5 5 0 017 7l-2 2a5 5 0 01-7-7"
        stroke={INK}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 16l8-8" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Stack / layers — another neutral “toolkit” mark for link-type entries */
function IconStack() {
  return (
    <svg width={ICON} height={ICON} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l9 4.5v3L12 15 3 10.5v-3L12 3z"
        stroke={INK}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M3 14.5L12 19l9-4.5M3 18.5L12 23l9-4.5"
        stroke={INK}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconFor({ kind, index }) {
  if (kind === "g") return <IconBuilder />;
  if (kind === "l") return index % 2 === 0 ? <IconLink /> : <IconStack />;
  return index % 2 === 0 ? <IconMonitor /> : <IconWand />;
}

/** Block 1 — row-major, 7×4 */
const IMG1 = [
  ["Ashe Pro", "m"],
  ["Astra", "m"],
  ["Authority Pro", "m"],
  ["Avada", "m"],
  ["Beaver Builder", "g"],
  ["Betheme", "m"],
  ["Bifrost", "m"],
  ["Blockbase", "m"],
  ["Blocksy", "m"],
  ["BoldGrid Post and Page Builder", "g"],
  ["Botiga", "m"],
  ["Breakdance Builder", "g"],
  ["Bricks Builder", "g"],
  ["Bricksy", "m"],
  ["Bridge", "m"],
  ["Brizy", "m"],
  ["Brooklyn", "m"],
  ["Colibri WP", "m"],
  ["ColorMag", "m"],
  ["Customizr", "m"],
  ["Deep", "m"],
  ["Enfold", "m"],
  ["Exponent", "m"],
  ["Extendable", "m"],
  ["Extra", "m"],
  ["Flatsome", "m"],
  ["Folie", "m"],
  ["GeneratePress", "m"],
];

/** Block 2 — column-major in reference → row-major for CSS grid */
const IMG2_COL1 = [
  ["Genesis Pro", "m"],
  ["Gutenberg", "g"],
  ["Hub", "l"],
  ["Jupiter X", "l"],
  ["Litho", "l"],
  ["Monstroid2", "l"],
  ["Newspaper", "l"],
  ["Oxygen Builder", "g"],
  ["Real Homes", "l"],
  ["Schema", "l"],
  ["SiteOrigin Page Builder", "g"],
];
const IMG2_COL2 = [
  ["Go", "l"],
  ["Gutenix", "l"],
  ["Hueman", "l"],
  ["Kadence", "l"],
  ["LiveCanvas", "m"],
  ["Motopress Content Editor", "g"],
  ["OceanWP", "l"],
  ["Page Builder Framework", "l"],
  ["Rehub", "l"],
  ["SeedProd", "m"],
  ["Soledad", "l"],
];
const IMG2_COL3 = [
  ["Goya", "l"],
  ["Hello Elementor", "l"],
  ["Impreza", "l"],
  ["Kalium", "l"],
  ["Massive Dynamic", "l"],
  ["Neve", "l"],
  ["OnePress", "l"],
  ["Phlox", "l"],
  ["Rishi", "l"],
  ["Shapely", "l"],
  ["Spacious", "l"],
];
const IMG2_COL4 = [
  ["Greenshift WP", "m"],
  ["Hestia", "l"],
  ["Inspiro PRO", "l"],
  ["Kallyas", "l"],
  ["MH Magazine Lite", "l"],
  ["Neve FSE", "l"],
  ["Oshine", "l"],
  ["Porto", "l"],
  ["Salient", "l"],
  ["Shopkeeper", "l"],
  ["Spectra", "m"],
];

function img2Rows() {
  const rows = [];
  for (let i = 0; i < 11; i++) {
    rows.push(IMG2_COL1[i], IMG2_COL2[i], IMG2_COL3[i], IMG2_COL4[i]);
  }
  return rows;
}

/** Block 3 — row-major */
const IMG3 = [
  ["Storefront", "m"],
  ["Suki", "m"],
  ["Sydney", "m"],
  ["The7", "m"],
  ["Themify Builder", "g"],
  ["Thrive Architect", "g"],
  ["Total", "m"],
  ["Tove", "m"],
  ["Twenty Twenty-Five", "m"],
  ["Twenty Twenty-Four", "m"],
  ["Uncode", "m"],
  ["Vantage", "m"],
  ["Visual Composer", "g"],
  ["Voux", "m"],
  ["WoodMart", "m"],
  ["WPBakery Page Builder", "g"],
  ["X", "m"],
  ["YITH Proteo", "m"],
  ["Zakra", "m"],
  ["Zion Builder", "g"],
  ["Divi", "m"],
  ["Elementor", "g"],
];

const GRID_ITEMS = [...IMG1, ...img2Rows(), ...IMG3].map(([name, kind], i) => ({
  id: `${i}-${name}`,
  name,
  kind,
  index: i,
}));

function GridCell({ name, kind, index }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "clamp(12px, 1.5vw, 18px)",
        minWidth: 0,
      }}
    >
      <span style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
        <IconFor kind={kind} index={index} />
      </span>
      <span
        style={{
          color: INK_MUTED,
          fontSize: FONT_GRID,
          lineHeight: 1.45,
          fontWeight: 400,
        }}
      >
        {name}
      </span>
    </div>
  );
}

export default function ThemeBuildersGridSection() {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: GREEN,
        boxSizing: "border-box",
        padding: "clamp(64px, 8vw, 112px) clamp(24px, 6vw, 100px)",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <header
          style={{
            textAlign: "center",
            marginBottom: "clamp(48px, 5.5vw, 72px)",
            maxWidth: "980px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h2
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.96)",
              fontWeight: 700,
              fontSize: FONT_H2,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
            }}
          >
            We work with the top WordPress themes and builders
          </h2>
          <p
            style={{
              margin: "clamp(16px, 2vw, 22px) auto 0",
              maxWidth: "920px",
              color: "rgba(255,255,255,0.76)",
              fontSize: FONT_INTRO,
              lineHeight: 1.75,
            }}
          >
            Saqrih offers website design services utilizing your favorite WordPress themes and page
            builders. Our team is distributed and spread throughout the United States, and team
            member experiences are broad, yet deep.
          </p>
        </header>

        <div
          className="theme-builders-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            columnGap: "clamp(36px, 4.5vw, 64px)",
            rowGap: "clamp(22px, 2.6vw, 34px)",
            alignItems: "start",
          }}
        >
          {GRID_ITEMS.map((item) => (
            <GridCell key={item.id} name={item.name} kind={item.kind} index={item.index} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .theme-builders-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 520px) {
          .theme-builders-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
