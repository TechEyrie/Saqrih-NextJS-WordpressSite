/** Homepage-aligned tokens for service hub sections */

export const SVC = {
  forest: "#162D24",
  forestMid: "#203a31",
  forestDeep: "#1B4732",
  lime: "#c8f04a",
  limeHover: "#d8ff5a",
  light: "#f7f7f5",
  lightAlt: "#f5f5f5",
  card: "#efefed",
  white: "#ffffff",
  ink: "#111111",
  mutedOnLight: "rgba(22, 45, 36, 0.62)",
  mutedOnDark: "rgba(255, 255, 255, 0.68)",
  borderLight: "rgba(22, 45, 36, 0.1)",
  borderDark: "rgba(255, 255, 255, 0.12)",
  heading: "var(--font-inter), Inter, Arial, sans-serif",
  body: "var(--font-montserrat), Montserrat, Arial, sans-serif",
  ui: "Inter, Arial, sans-serif",
};

export const sectionPad = {
  padding: "clamp(72px, 10vw, 120px) clamp(24px, 5vw, 80px)",
};

export const eyebrowStyle = (onDark = false) => ({
  margin: "0 0 14px",
  color: onDark ? SVC.lime : SVC.forest,
  fontFamily: SVC.ui,
  fontWeight: 700,
  fontSize: "0.72rem",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
});

export const h2Style = (onDark = false) => ({
  margin: 0,
  color: onDark ? SVC.white : SVC.forest,
  fontFamily: SVC.heading,
  fontWeight: 600,
  fontSize: "clamp(1.7rem, 3.4vw, 2.6rem)",
  lineHeight: 1.15,
  letterSpacing: "-0.03em",
});

export const bodyStyle = (onDark = false) => ({
  margin: 0,
  color: onDark ? SVC.mutedOnDark : SVC.mutedOnLight,
  fontFamily: SVC.body,
  fontWeight: 400,
  fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)",
  lineHeight: 1.7,
});
