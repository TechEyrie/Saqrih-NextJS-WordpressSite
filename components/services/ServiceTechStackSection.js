"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SVC, sectionPad } from "./serviceTokens";
import TechBrandIcon, { techIconTint, techIconColor } from "./TechBrandIcon";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  {
    id: "cms",
    label: "CMS",
    title: "CMS Platforms",
    blurb:
      "Content systems editors love and engineers trust—from WordPress to enterprise and headless.",
    usedFor: "Corporate sites, publishing, multi-brand content ops",
    icon: "cms",
    tools: [
      { name: "WordPress", tip: "Flexible content & plugins" },
      { name: "Drupal", tip: "Complex content models" },
      { name: "Craft CMS", tip: "Clean editorial UX" },
      { name: "Adobe Experience Manager (AEM)", tip: "Enterprise experience platforms" },
      { name: "Contentful", tip: "Headless content APIs" },
    ],
  },
  {
    id: "builders",
    label: "Builders",
    title: "Website Builders",
    blurb:
      "When speed-to-launch matters, we ship polished sites on modern visual builders—without sacrificing quality.",
    usedFor: "Campaign sites, brand microsites, rapid MVPs",
    icon: "layers",
    tools: [
      { name: "Webflow", tip: "Design-led production sites" },
      { name: "Wix", tip: "Fast small-business launches" },
      { name: "Squarespace", tip: "Elegant brand websites" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    title: "Frontend Technologies",
    blurb:
      "Interfaces that feel instant—semantic markup, modern frameworks, and component systems that scale.",
    usedFor: "Marketing sites, apps, design systems, PWAs",
    icon: "monitor",
    tools: [
      { name: "HTML5", tip: "Accessible, semantic structure" },
      { name: "CSS3", tip: "Responsive layout systems" },
      { name: "JavaScript", tip: "Interactive experiences" },
      { name: "TypeScript", tip: "Safer, scalable codebases" },
      { name: "React", tip: "Component-driven UIs" },
      { name: "Next.js", tip: "SSR / SSG performance" },
      { name: "Astro", tip: "Content-first, ultra-fast pages" },
      { name: "Vue.js", tip: "Lean, reactive apps" },
      { name: "Svelte", tip: "Compiled, lightweight UIs" },
    ],
  },
  {
    id: "styling",
    label: "Styling",
    title: "Styling",
    blurb:
      "Design systems that stay consistent—utility-first, component libraries, or crafted stylesheets.",
    usedFor: "Brand systems, responsive UI, design tokens",
    icon: "palette",
    tools: [
      { name: "Tailwind CSS", tip: "Rapid, consistent UI" },
      { name: "Bootstrap", tip: "Battle-tested components" },
      { name: "Sass", tip: "Structured CSS architecture" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    title: "Backend Technologies",
    blurb:
      "APIs and services built for reliability—clean architecture, secure auth, and room to grow.",
    usedFor: "Custom APIs, CMS backends, integrations",
    icon: "server",
    tools: [
      { name: "PHP", tip: "WordPress & custom apps" },
      { name: "Node.js", tip: "High-throughput services" },
      { name: "Python", tip: "Automation & data work" },
    ],
  },
  {
    id: "performance",
    label: "Perf & SEO",
    title: "Performance & SEO",
    blurb:
      "Fast, findable websites—Core Web Vitals, technical SEO, and delivery patterns that keep rankings strong.",
    usedFor: "Launch audits, ongoing optimization, organic growth",
    icon: "search",
    tools: [
      { name: "Core Web Vitals", tip: "Speed & UX signals" },
      { name: "Technical SEO", tip: "Crawlable architecture" },
      { name: "Schema Markup", tip: "Rich-result readiness" },
      { name: "Image Optimization", tip: "Lightweight media" },
      { name: "Lazy Loading", tip: "Faster first paint" },
      { name: "CDN Integration", tip: "Global edge delivery" },
    ],
  },
  {
    id: "deployment",
    label: "Deploy",
    title: "Deployment",
    blurb:
      "Reliable hosting and release pipelines—from serverless platforms to classic cPanel and cloud infra.",
    usedFor: "CI/CD, hosting, SSL, edge caching",
    icon: "cloud",
    tools: [
      { name: "Vercel", tip: "Next.js-native deploys" },
      { name: "Netlify", tip: "JAMstack hosting" },
      { name: "Cloudflare", tip: "CDN, DNS & security" },
      { name: "cPanel", tip: "Managed shared hosting" },
      { name: "AWS", tip: "Scalable cloud infrastructure" },
    ],
  },
];

const STATS = [
  { value: "35+", label: "Technologies in play" },
  { value: "7", label: "Core practice areas" },
  { value: "15+", label: "Years shipping products" },
];

const CAPABILITIES = [
  {
    title: "Performance-first",
    desc: "Core Web Vitals, lazy loading, CDN-ready builds.",
    icon: "bolt",
  },
  {
    title: "Security by default",
    desc: "Hardened stacks, SSL, backups, access control.",
    icon: "shield",
  },
  {
    title: "SEO foundations",
    desc: "Clean architecture, metadata, schema-ready markup.",
    icon: "search",
  },
  {
    title: "Built to scale",
    desc: "Modular code that grows with your product roadmap.",
    icon: "layers",
  },
];

const MARQUEE = [
  "WordPress", "Drupal", "Contentful", "Webflow", "React", "Next.js", "Astro",
  "Vue.js", "Svelte", "TypeScript", "Tailwind CSS", "Node.js", "PHP", "Python",
  "Core Web Vitals", "Schema Markup", "Vercel", "Netlify", "Cloudflare", "AWS",
];

function CategoryIcon({ type, color = SVC.lime, size = 28 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  };
  if (type === "monitor") {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="13" rx="2" stroke={color} strokeWidth="1.6" />
        <path d="M8 21h8M12 17v4" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "server") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="5" rx="1.4" stroke={color} strokeWidth="1.6" />
        <rect x="4" y="10" width="16" height="5" rx="1.4" stroke={color} strokeWidth="1.6" />
        <rect x="4" y="16" width="16" height="4" rx="1.4" stroke={color} strokeWidth="1.6" />
      </svg>
    );
  }
  if (type === "phone") {
    return (
      <svg {...common}>
        <rect x="8" y="3" width="8" height="18" rx="2" stroke={color} strokeWidth="1.6" />
        <path d="M11 18.5h2" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "db") {
    return (
      <svg {...common}>
        <ellipse cx="12" cy="6" rx="7" ry="3" stroke={color} strokeWidth="1.6" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" stroke={color} strokeWidth="1.6" />
        <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" stroke={color} strokeWidth="1.6" />
      </svg>
    );
  }
  if (type === "cms") {
    return (
      <svg {...common}>
        <path d="M4 7h16v11H4z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M4 10h16M9 7V4.8A1.8 1.8 0 0 1 10.8 3h2.4A1.8 1.8 0 0 1 15 4.8V7" stroke={color} strokeWidth="1.6" />
      </svg>
    );
  }
  if (type === "bolt") {
    return (
      <svg {...common}>
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "shield") {
    return (
      <svg {...common}>
        <path d="M12 3 5 6v5c0 4.5 3 8 7 9.5 4-1.5 7-5 7-9.5V6l-7-3z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "search") {
    return (
      <svg {...common}>
        <circle cx="11" cy="11" r="6" stroke={color} strokeWidth="1.6" />
        <path d="M16 16l4 4" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "layers") {
    return (
      <svg {...common}>
        <path d="M12 4 21 9l-9 5L3 9l9-5z" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M3 13l9 5 9-5M3 17l9 5 9-5" stroke={color} strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "palette") {
    return (
      <svg {...common}>
        <path
          d="M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 0-5H12a1.5 1.5 0 0 1 0-3h4.5A9 9 0 0 0 12 3z"
          stroke={color}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="8" cy="10" r="1.1" fill={color} />
        <circle cx="10.5" cy="7.5" r="1.1" fill={color} />
        <circle cx="14" cy="7.5" r="1.1" fill={color} />
      </svg>
    );
  }
  if (type === "cloud") {
    return (
      <svg {...common}>
        <path
          d="M8 18h9a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.5 1.6A3.5 3.5 0 0 0 8 18z"
          stroke={color}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx="10" cy="19" r="1.6" fill={color} />
      <circle cx="17" cy="19" r="1.6" fill={color} />
      <path d="M3 4h2.2l2.1 11h10.4l2-7.5H7.2" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Marquee({ items = MARQUEE }) {
  const trackRef = useRef(null);
  const track = [...items, ...items];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const tween = gsap.to(el, {
      xPercent: -50,
      duration: 38,
      ease: "none",
      repeat: -1,
    });
    return () => tween.kill();
  }, []);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        borderTop: `1px solid ${SVC.borderDark}`,
        borderBottom: `1px solid ${SVC.borderDark}`,
        background: "rgba(0,0,0,0.2)",
        marginBottom: "clamp(36px, 5vw, 52px)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, #000 7%, #000 93%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, #000 7%, #000 93%, transparent 100%)",
      }}
    >
      <div
        ref={trackRef}
        aria-hidden
        style={{
          display: "flex",
          width: "max-content",
          willChange: "transform",
          padding: "16px 0",
        }}
      >
        {track.map((name, i) => (
          <span
            key={`${name}-${i}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "0 20px",
              fontFamily: SVC.ui,
              fontWeight: 600,
              fontSize: "0.78rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: `${techIconTint(name)}22`,
                border: `1px solid ${techIconTint(name)}44`,
                flexShrink: 0,
              }}
            >
              <span style={{ display: "inline-flex", transform: "scale(0.85)" }}>
                <TechBrandIcon name={name} color={techIconColor(name)} />
              </span>
            </span>
            {name}
            <span style={{ color: SVC.lime, opacity: 0.65, fontSize: "0.55rem" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * Technology arsenal — interactive explorer (homepage forest/lime).
 */
export default function ServiceTechStackSection({
  categories = CATEGORIES,
  stats = STATS,
  capabilities = CAPABILITIES,
  marquee = MARQUEE,
  eyebrow = "Our technical arsenal",
  headingLine1 = "Technology Stack &",
  headingLine2 = "Development Expertise",
  body = "Modern platforms and frameworks we use to design, build, and ship high-performance websites for Qatar businesses.",
}) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? "cms");
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const panelRef = useRef(null);
  const capsRef = useRef(null);

  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  useEffect(() => {
    if (!categories.some((c) => c.id === activeId) && categories[0]) {
      setActiveId(categories[0].id);
    }
  }, [categories, activeId]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        capsRef.current?.children ?? [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: capsRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!panelRef.current) return;
    gsap.fromTo(
      panelRef.current,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );
  }, [activeId]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: SVC.forest, ...sectionPad, paddingTop: "clamp(80px, 11vw, 128px)" }}
    >
      {/* Atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 45% at 15% 10%, rgba(200,240,74,0.09), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 80%, rgba(32,58,49,0.85), transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto" style={{ maxWidth: "1180px", zIndex: 1 }}>
        {/* Header */}
        <div
          ref={headerRef}
          className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-16 items-end"
          style={{ marginBottom: "clamp(40px, 5vw, 56px)" }}
        >
          <div>
            <p
              style={{
                margin: "0 0 14px",
                color: SVC.lime,
                fontFamily: SVC.ui,
                fontWeight: 700,
                fontSize: "0.72rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              {eyebrow}
            </p>
            <h2
              style={{
                margin: "0 0 18px",
                color: SVC.white,
                fontFamily: SVC.heading,
                fontWeight: 600,
                fontSize: "clamp(2rem, 4.2vw, 3.2rem)",
                lineHeight: 1.12,
                letterSpacing: "-0.035em",
              }}
            >
              {headingLine1}
              <br />
              {headingLine2}
            </h2>
            <p
              style={{
                margin: 0,
                color: SVC.mutedOnDark,
                fontFamily: SVC.body,
                fontSize: "clamp(1rem, 1.2vw, 1.1rem)",
                lineHeight: 1.7,
                maxWidth: "42ch",
              }}
            >
              {body}
            </p>
          </div>

          <div className="grid grid-cols-3" style={{ gap: 12 }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  borderRadius: 16,
                  padding: "18px 14px",
                  background: "rgba(255,255,255,0.05)",
                  border: `1px solid ${SVC.borderDark}`,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: SVC.heading,
                    fontWeight: 700,
                    fontSize: "clamp(1.4rem, 2.4vw, 1.85rem)",
                    color: SVC.lime,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: SVC.ui,
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.3,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Marquee items={marquee} />

        {/* Explorer */}
        <div
          style={{
            borderRadius: 24,
            border: `1px solid ${SVC.borderDark}`,
            background: "rgba(255,255,255,0.04)",
            overflow: "hidden",
            marginBottom: "clamp(28px, 4vw, 40px)",
          }}
        >
          {/* Tabs */}
          <div
            className="flex flex-wrap"
            style={{
              gap: 6,
              padding: "14px 14px 0",
              borderBottom: `1px solid ${SVC.borderDark}`,
              background: "rgba(0,0,0,0.18)",
            }}
            role="tablist"
            aria-label="Technology categories"
          >
            {categories.map((cat) => {
              const on = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActiveId(cat.id)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 16px",
                    marginBottom: -1,
                    borderRadius: "12px 12px 0 0",
                    border: on ? `1px solid ${SVC.borderDark}` : "1px solid transparent",
                    borderBottom: on ? `1px solid ${SVC.forest}` : "1px solid transparent",
                    background: on ? "rgba(255,255,255,0.06)" : "transparent",
                    color: on ? SVC.lime : "rgba(255,255,255,0.55)",
                    fontFamily: SVC.ui,
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "color 0.2s ease, background 0.2s ease",
                  }}
                >
                  <CategoryIcon type={cat.icon} color={on ? SVC.lime : "rgba(255,255,255,0.4)"} size={16} />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div ref={panelRef} style={{ padding: "clamp(24px, 3vw, 36px)" }}>
            <div
              className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]"
              style={{ gap: "clamp(24px, 3vw, 40px)", alignItems: "start" }}
            >
              <div>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: SVC.lime,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                    boxShadow: "0 10px 28px rgba(200,240,74,0.28)",
                  }}
                >
                  <CategoryIcon type={active.icon} color={SVC.forest} size={28} />
                </div>
                <h3
                  style={{
                    margin: "0 0 12px",
                    color: SVC.white,
                    fontFamily: SVC.heading,
                    fontWeight: 600,
                    fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {active.title}
                </h3>
                <p
                  style={{
                    margin: "0 0 20px",
                    color: SVC.mutedOnDark,
                    fontFamily: SVC.body,
                    fontSize: "0.98rem",
                    lineHeight: 1.7,
                  }}
                >
                  {active.blurb}
                </p>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "flex-start",
                    gap: 10,
                    padding: "12px 14px",
                    borderRadius: 12,
                    background: "rgba(200,240,74,0.1)",
                    border: "1px solid rgba(200,240,74,0.22)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: SVC.ui,
                      fontWeight: 700,
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: SVC.lime,
                      paddingTop: 2,
                      flexShrink: 0,
                    }}
                  >
                    Used for
                  </span>
                  <span
                    style={{
                      fontFamily: SVC.body,
                      fontSize: "0.88rem",
                      color: "rgba(255,255,255,0.82)",
                      lineHeight: 1.45,
                    }}
                  >
                    {active.usedFor}
                  </span>
                </div>
              </div>

              <div
                className="grid grid-cols-1 sm:grid-cols-2"
                style={{ gap: 10 }}
              >
                {active.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="group"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "14px 14px",
                      borderRadius: 14,
                      background: "rgba(255,255,255,0.04)",
                      border: `1px solid ${SVC.borderDark}`,
                      transition: "border-color 0.2s ease, background 0.2s ease, transform 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(200,240,74,0.08)";
                      e.currentTarget.style.borderColor = "rgba(200,240,74,0.35)";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                      e.currentTarget.style.borderColor = SVC.borderDark;
                      e.currentTarget.style.transform = "none";
                    }}
                  >
                    <span
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        flexShrink: 0,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: `${techIconTint(tool.name)}1f`,
                        border: `1px solid ${techIconTint(tool.name)}44`,
                      }}
                    >
                      <TechBrandIcon
                        name={tool.name}
                        color={techIconColor(tool.name)}
                      />
                    </span>
                    <span style={{ minWidth: 0 }}>
                      <span
                        style={{
                          display: "block",
                          fontFamily: SVC.heading,
                          fontWeight: 600,
                          fontSize: "0.95rem",
                          color: SVC.white,
                          marginBottom: 2,
                        }}
                      >
                        {tool.name}
                      </span>
                      <span
                        style={{
                          display: "block",
                          fontFamily: SVC.body,
                          fontSize: "0.78rem",
                          color: "rgba(255,255,255,0.5)",
                          lineHeight: 1.35,
                        }}
                      >
                        {tool.tip}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div
          ref={capsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: 12 }}
        >
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              style={{
                borderRadius: 18,
                padding: "22px 20px",
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${SVC.borderDark}`,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "rgba(200,240,74,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 14,
                }}
              >
                <CategoryIcon type={cap.icon} color={SVC.lime} size={20} />
              </div>
              <h4
                style={{
                  margin: "0 0 8px",
                  fontFamily: SVC.heading,
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: SVC.white,
                }}
              >
                {cap.title}
              </h4>
              <p
                style={{
                  margin: 0,
                  fontFamily: SVC.body,
                  fontSize: "0.86rem",
                  lineHeight: 1.55,
                  color: "rgba(255,255,255,0.58)",
                }}
              >
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
