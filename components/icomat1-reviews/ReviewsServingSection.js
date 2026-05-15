"use client";

import { Building2 } from "lucide-react";

/** WordPress agencies shown on /reviews (order preserved). */
export const AGENCIES = [
  "10up",
  "11thAgency",
  "1Digital Agency",
  "3 Media Web",
  "4CDesignWorks",
  "500 Designs",
  "97 Switch",
  "Absolute Web",
  "Abstrakt Marketing Group",
  "Adchitects",
  "Agency Jet",
  "Agency Partner Interactive",
  "Airdev",
  "Alliance Interactive",
  "ALMAX",
  "Alpha Efficiency",
  "Anchour",
  "Appinventiv",
  "AppMakers USA",
  "Aras Digital Products",
  "Arbisoft",
  "ArtVersion",
  "Aspire Digital Solutions",
  "Aten Design Group",
  "Atlas Marketing",
  "August Ash",
  "Azuro Digital",
  "Baunfire",
  "BECK",
  "BEXBRANDS",
  "Beyond",
  "Big Red Jelly",
  "Big Sea",
  "Bird Marketing",
  "Black Antelope",
  "Blue Whale Apps",
  "BlueLabel",
  "Bluetext",
  "BMG Media Co.",
  "Boldheart",
  "Boostability",
  "Bop Design",
  "Bounty Hunter",
  "BOWEN",
  "Brainvire Infotech",
  "Brand Vision",
  "Brian White Design",
  "BRIDGE",
  "Bright Bright Great",
  "Building Brands Marketing",
  "Cake & Arrow",
  "Campground",
  "Capsule",
  "Channel V Media",
  "Chase Design",
  "Chatterkick",
  "ChopDawg.com",
  "Clarion Technologies",
  "Clay",
  "Clique Studios",
  "Clockwork",
  "CloudMellow",
  "Coalesce",
  "Coalition Technologies",
  "Code 8",
  "CODECLOUDS",
  "Codup",
  "Cohere",
  "Commence Studio",
  "Computools",
  "Comrade",
  "Constructive",
  "Content Development Pros",
  "Contrast & Co.",
  "ControlF5",
  "Corecentrix Business Solutions",
  "Cozy Design",
  "Create Ape",
  "Creative Brand Design",
  "CUT THRU",
  "CXR.Agency",
  "CyberOptik",
  "Darwin",
  "DD.NYC®",
  "Design Force",
  "Design In DC",
  "Designity",
  "DesignX",
  "DianApps",
  "Digital Butlers",
  "Digital Dot",
  "Digital Present",
  "Digital Silk",
  "DIGITECH",
  "Distillery",
  "Divami Design Labs",
  "Dizzain",
  "Doctor Multimedia",
  "Dogtown Media",
  "Dotlogics",
  "Dragon Army",
  "Eatcaviar",
  "EbizON Digital",
  "Efir Media",
  "EIGHT25MEDIA",
  "ElephantMark",
  "Elevation",
  "Elsner Technologies",
  "EltexSoft",
  "Embark",
  "Emizen Tech",
  "Empat",
  "encite",
  "ENDERTECH",
  "Equal",
  "eSEOspace",
  "Essential Designs",
  "Evenbound",
  "EvinceDev",
  "Exemplifi",
  "ExpandX",
  "EZ Digital",
  "Fieldtrip",
  "First Pier",
  "Five Jars",
  "Flamingo Agency",
  "Flower Press Interactive",
  "Flying V Group",
  "Fruition",
  "Fuego UX",
  "Fullsend Solutions",
  "Funnel Boost Media",
  "Galaxy Weblinks",
  "Gatorworks",
  "GLIDE®",
  "Glow Design Agency",
  "Go Fish Digital",
  "Goji Labs",
  "GrayCyan",
  "Green Hat Web Solutions",
  "GreyBox Creative",
  "Groove Jones",
  "Groundwrk",
  "GrowthScribe",
  "HDC",
  "High Level Marketing",
  "HigherVisibility",
  "Hooked On Code",
  "HTMLPanda",
  "HUEMOR",
  "Human Made",
  "Hyperlink InfoSystem",
  "Idea Grove",
  "Idea Marketing Group",
  "Ideas Collide",
  "IKM",
  "Imarc",
  "Infinum",
  "Infront Webworks",
  "Jackrabbit Mobile",
  "Jacob Tyler",
  "Jordan Crown",
  "JOS",
  "JPLoft",
  "JVM Design",
  "KDG",
  "Kobe Digital",
  "Kona Made",
  "KrishaWeb",
  "Ladybugz Interactive Agency",
  "LanternSol",
  "LaunchPad Lab",
  "Lazarev.",
  "League Design Agency",
  "Left Hand Design",
  "Lform Design",
  "LightMix",
  "Lion's Share Digital",
  "Liventus",
  "LLT Group",
  "LookFar Labs",
  "Lounge Lizard",
  "M16 Marketing",
  "Mankato Web Design",
  "Mavlers",
  "Mayven Studios",
  "Mess",
  "Mighty Fine",
  "Mobcoder",
  "MOBIKASA",
  "Mobomo",
  "Moburst",
  "Modern Tribe",
  "Mojo Media",
  "Momentum Design Lab",
  "Momentum Digital",
  "MonogramGroup",
  "Motomtech",
  "Multidots",
  "Mystic Media",
  "Netalico Commerce",
  "New Perspective Marketing",
  "NEWMEDIA.COM",
  "Nika Digital Agency",
  "NIX",
  "Nixtio Digital Agency",
  "Noble Studios",
  "Nowspeed Marketing",
  "Olive Street Design",
  "On The Map Marketing",
  "Oomph, Inc.",
  "OpenSource Technologies",
  "Optimum7",
  "Orbit Media Studios",
  "Outcrowd",
  "OuterBox",
  "Outliant",
  "Outsmart Labs",
  "Oyova",
  "PageTraffic",
  "Paper Tiger",
  "Pattern",
  "Penji",
  "Perform Labs",
  "Perpetual",
  "Phenomenon Studio",
  "Pill Creative Studio",
  "Pixel-1",
  "PLATFORM",
  "Plego Technologies",
  "Plus972",
  "PopArt Studio",
  "Praxent",
  "Promet Source",
  "Pronto Marketing",
  "Proven",
  "RainCastle Communications",
  "Razor Rank",
  "Reaktiv",
  "Red Spot Design",
  "Revealize Inc.",
  "RevX",
  "Rightpoint",
  "RivalMind",
  "Rocket Farm Studios",
  "rtCamp",
  "Ruckus",
  "Savage Global Marketing",
  "Savas Labs",
  "Sayenko Design",
  "Seahawk Media",
  "Search Berg",
  "Seasia Infotech",
  "SeedX",
  "Seota Digital Marketing",
  "Sidebench",
  "SimbirSoft",
  "Simpalm",
  "Singlemind",
  "Site Nine Studios",
  "SiteCare",
  "Slam Media Lab",
  "SLAPS",
  "Slick",
  "Slingshot",
  "Social Driver",
  "Solid Digital",
  "Spire Agency",
  "SPLIT Development",
  "Starfish",
  "State Creative",
  "Storm Brain",
  "Substance",
  "SumatoSoft",
  "Svitla Systems",
  "SWARM",
  "Syrup",
  "Task Virtual",
  "Teal Media",
  "Tech9",
  "Tekglide",
  "Temper And Forge",
  "The 95 Agency",
  "The Alfam",
  "The Bureau Of Small Projects",
  "The Durkan Group",
  "The Free Website Guys",
  "The Label Collective",
  "The Miller Group",
  "Think Company",
  "Thompson & Prince",
  "Three29",
  "ThreeSixtyEight",
  "Thrive Design",
  "Thrive Internet Marketing Agency",
  "Tiny Frog Technologies",
  "TKG",
  "tkxel",
  "Together",
  "Top Notch Dezigns®",
  "Topflight Apps",
  "TopSpot Internet Marketing",
  "Toptal",
  "Trajectory",
  "Trango Tech",
  "Trigma",
  "Ultrashield Technology",
  "Underbelly",
  "Unified Infotech",
  "UPQODE",
  "UpTop",
  "Urban Insight",
  "Usman Group",
  "Utility",
  "VALMAX",
  "Viget",
  "Vinova",
  "Visceral",
  "Voltage",
  "VSA Partners",
  "Watson Creative",
  "Wax Creek",
  "WDG",
  "Web Design Glory",
  "Webinopoly",
  "Webskitters",
  "Webstacks",
  "weCreate",
  "Windmill Strategy",
  "Wolf&Whale",
  "Workhorse",
  "WP Pals",
  "WP Tangerine",
  "Wunderdogs",
  "Wve Labs",
  "Xfive",
  "XWP",
  "Yes&",
  "zö agency",
];

const GREEN = "#162D24";
const BODY = "rgba(22, 45, 36, 0.82)";
const MUTED = "rgba(22, 45, 36, 0.45)";

export default function ReviewsServingSection() {
  return (
    <section
      className="reviews-serving-section"
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        boxSizing: "border-box",
        padding: "clamp(56px, 7vw, 96px) clamp(16px, 4vw, 72px) clamp(64px, 8vw, 112px)",
      }}
    >
      <div
        style={{
          maxWidth: "min(1400px, 100%)",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
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
          Compare 300+ top WordPress agencies side by side
        </h2>
        <p
          style={{
            margin: "clamp(16px, 2vw, 22px) auto 0",
            maxWidth: "min(72ch, 100%)",
            fontWeight: 400,
            fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)",
            lineHeight: 1.75,
            color: BODY,
          }}
        >
          Explore detailed comparisons of leading WordPress design and development agencies, including
          strengths, weaknesses, client feedback, pricing insights, alternative options, and Eyrion
          versus-agency scorecards.
        </p>
        <p
          style={{
            margin: "clamp(12px, 1.5vw, 18px) auto 0",
            maxWidth: "min(72ch, 100%)",
            fontWeight: 400,
            fontSize: "clamp(1.05rem, 1.25vw, 1.2rem)",
            lineHeight: 1.75,
            color: BODY,
          }}
        >
          Browse individual company breakdowns to compare capabilities, support quality, project costs,
          and long-term value—helping you decide which WordPress team best fits your business goals.
        </p>
      </div>

      <div
        style={{
          maxWidth: "min(1400px, 100%)",
          margin: "clamp(40px, 5vw, 56px) auto 0",
        }}
      >
        <div className="reviews-serving-grid">
          {AGENCIES.map((name) => (
            <div
              key={name}
              className="reviews-serving-cell"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "clamp(10px, 1.2vw, 14px)",
                minHeight: "52px",
                padding: "clamp(10px, 1.2vw, 14px) 0",
                color: "rgba(22, 45, 36, 0.9)",
                fontSize: "clamp(0.92rem, 1.05vw, 1.05rem)",
                fontWeight: 500,
                letterSpacing: "-0.01em",
                lineHeight: 1.35,
                borderRadius: "6px",
              }}
            >
              <Building2
                size={18}
                strokeWidth={1.65}
                color={MUTED}
                aria-hidden
                style={{ flexShrink: 0 }}
              />
              <span className="reviews-serving-label">{name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .reviews-serving-grid {
          display: grid;
          width: 100%;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          column-gap: clamp(28px, 4.2vw, 64px);
          row-gap: clamp(16px, 2.4vw, 32px);
          align-items: start;
        }
        @media (max-width: 1100px) {
          .reviews-serving-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 780px) {
          .reviews-serving-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 520px) {
          .reviews-serving-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 340px) {
          .reviews-serving-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
