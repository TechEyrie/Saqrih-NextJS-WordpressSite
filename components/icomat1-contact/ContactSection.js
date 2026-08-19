"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import QuotePhoneInput from "../QuotePhoneInput";
import { validateContactPayload } from "../../lib/contactValidation";
import { CONTACT_INQUIRY_OPTIONS, SITE_CONTACT } from "../../lib/siteContact";
import { SVC, sectionPad, eyebrowStyle, h2Style, bodyStyle } from "../services/serviceTokens";

gsap.registerPlugin(ScrollTrigger);

const CONTACT_CARDS = [
  {
    id: "email",
    label: "Email",
    value: SITE_CONTACT.email,
    href: `mailto:${SITE_CONTACT.email}`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 7l8 5 8-5M4 7v10h16V7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "phone",
    label: "Phone",
    value: SITE_CONTACT.phone,
    href: SITE_CONTACT.phoneHref,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M6.5 4h3l1.5 5-2 1.2a11 11 0 005.3 5.3L17.5 14l5 1.5v3a2 2 0 01-2 2C10.5 20.5 3.5 13.5 4.5 6a2 2 0 012-2z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "office",
    label: "Office",
    value: SITE_CONTACT.address,
    sub: `${SITE_CONTACT.addressLocality}, ${SITE_CONTACT.addressCountry}`,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    id: "response",
    label: "Response",
    value: SITE_CONTACT.responseTime,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

function ContactCard({ card, index }) {
  const cardRef = useRef(null);
  const isLink = Boolean(card.href);
  const Tag = isLink ? "a" : "div";
  const isEmail = card.id === "email";

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out",
        delay: index * 0.06,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 92%",
          once: true,
        },
      }
    );
  }, [index]);

  return (
    <Tag
      ref={cardRef}
      href={isLink ? card.href : undefined}
      style={{
        opacity: 0,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: "clamp(20px, 2.2vw, 26px) clamp(20px, 2.2vw, 26px) clamp(24px, 2.6vw, 30px)",
        borderRadius: 18,
        background: SVC.white,
        border: `1px solid ${SVC.borderLight}`,
        boxShadow: "0 10px 40px rgba(22,45,36,0.04)",
        textDecoration: "none",
        color: "inherit",
        transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
      }}
      onMouseEnter={(e) => {
        if (!isLink) return;
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 16px 44px rgba(22,45,36,0.08)";
        e.currentTarget.style.borderColor = "rgba(200,240,74,0.45)";
      }}
      onMouseLeave={(e) => {
        if (!isLink) return;
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 10px 40px rgba(22,45,36,0.04)";
        e.currentTarget.style.borderColor = SVC.borderLight;
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(200,240,74,0.16)",
          color: SVC.forest,
        }}
      >
        {card.icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            margin: "0 0 8px",
            fontFamily: SVC.ui,
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(22,45,36,0.45)",
          }}
        >
          {card.label}
        </p>
        <p
          style={{
            margin: 0,
            fontFamily: SVC.heading,
            fontWeight: 600,
            fontSize: "clamp(0.98rem, 1.15vw, 1.05rem)",
            lineHeight: 1.5,
            color: SVC.forest,
            ...(isEmail
              ? {
                  whiteSpace: "nowrap",
                  letterSpacing: "-0.01em",
                }
              : {
                  overflowWrap: "break-word",
                }),
          }}
        >
          {card.value}
        </p>
        {card.sub ? (
          <p
            style={{
              margin: "8px 0 0",
              fontFamily: SVC.body,
              fontSize: "0.88rem",
              lineHeight: 1.45,
              color: SVC.mutedOnLight,
              paddingBottom: 2,
            }}
          >
            {card.sub}
          </p>
        ) : null}
      </div>
    </Tag>
  );
}

export default function ContactSection() {
  const sectionRef = useRef(null);
  const introRef = useRef(null);
  const leftRef = useRef(null);
  const formWrapRef = useRef(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "new-website",
    message: "",
    website: "",
  });
  const [focused, setFocused] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        introRef.current,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.05,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );
      gsap.fromTo(
        formWrapRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          delay: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const fieldStyle = (field, multiline = false) => {
    const active = focused === field;
    return {
      width: "100%",
      boxSizing: "border-box",
      padding: multiline ? "14px 16px" : "13px 16px",
      minHeight: multiline ? 148 : undefined,
      resize: multiline ? "vertical" : undefined,
      borderRadius: 12,
      border: `1px solid ${active ? "rgba(200,240,74,0.65)" : SVC.borderLight}`,
      background: active ? "#ffffff" : "#fafaf8",
      color: SVC.forest,
      fontFamily: SVC.body,
      fontSize: "0.95rem",
      lineHeight: 1.5,
      outline: "none",
      transition: "border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
      boxShadow: active ? "0 0 0 3px rgba(200,240,74,0.14)" : "none",
    };
  };

  const labelStyle = {
    display: "block",
    marginBottom: 8,
    fontFamily: SVC.ui,
    fontSize: "0.72rem",
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "rgba(22,45,36,0.55)",
  };

  const errorStyle = {
    display: "block",
    marginTop: 6,
    fontFamily: SVC.ui,
    fontSize: "0.72rem",
    color: "#b54a3a",
  };

  const handleChange = (field) => (e) => {
    setForm((current) => ({ ...current, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { ok, fieldErrors, values } = validateContactPayload(form);
    if (!ok) {
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitError("");
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.fieldErrors) setErrors(data.fieldErrors);
        throw new Error(data.error || "Could not send your message.");
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err.message || "Could not send your message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full"
      style={{ backgroundColor: SVC.lightAlt, ...sectionPad }}
    >
      <div className="mx-auto contact-section-shell">
        <div ref={introRef} className="contact-section-intro">
          <p style={eyebrowStyle(false)}>Reach our team</p>
          <h2 style={{ ...h2Style(false), marginBottom: 16 }}>
            Let&apos;s talk about your next project
          </h2>
          <p style={{ ...bodyStyle(false), margin: 0 }}>
            Share a few details and we&apos;ll connect you with the right specialist.
            Prefer email or phone? Use the details below—we typically respond within
            one business day.
          </p>
        </div>

        <div className="contact-section-layout">
          <div ref={leftRef} className="contact-section-info">
            <div className="contact-cards-grid">
              {CONTACT_CARDS.map((card, index) => (
                <ContactCard key={card.id} card={card} index={index} />
              ))}
            </div>

            <div
              className="contact-registered-card"
              style={{
                borderRadius: 18,
                padding: "clamp(20px, 2.4vw, 26px)",
                background: SVC.forest,
                color: SVC.white,
              }}
            >
              <p
                style={{
                  margin: "0 0 10px",
                  fontFamily: SVC.ui,
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: SVC.lime,
                }}
              >
                Registered in Qatar
              </p>
              <p style={{ ...bodyStyle(true), margin: "0 0 6px", fontSize: "0.92rem" }}>
                CR: {SITE_CONTACT.cr}
              </p>
              <p style={{ ...bodyStyle(true), margin: 0, fontSize: "0.92rem" }}>
                VAT: {SITE_CONTACT.vat}
              </p>
            </div>
          </div>

          <div ref={formWrapRef} className="contact-section-form">
            <div
              className="contact-form-card"
              style={{
                borderRadius: 22,
                padding: "clamp(24px, 3vw, 36px)",
                background: SVC.white,
                border: `1px solid ${SVC.borderLight}`,
                boxShadow: "0 24px 70px rgba(22,45,36,0.07)",
              }}
            >
            {submitted ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "clamp(28px, 4vw, 48px) clamp(12px, 2vw, 20px)",
                  gap: 18,
                }}
              >
                <div
                  style={{
                    width: 76,
                    height: 76,
                    borderRadius: "50%",
                    background: "rgba(200,240,74,0.16)",
                    border: "1px solid rgba(200,240,74,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M5 12l5 5L20 7"
                      stroke={SVC.forest}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    style={{
                      margin: "0 0 8px",
                      fontFamily: SVC.heading,
                      fontWeight: 700,
                      fontSize: "clamp(1.35rem, 2vw, 1.6rem)",
                      color: SVC.forest,
                    }}
                  >
                    Message sent
                  </h3>
                  <p style={{ ...bodyStyle(false), margin: 0, maxWidth: "42ch" }}>
                    Thanks for reaching out. A member of our team will get back to you
                    within 24 hours on business days.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      fullName: "",
                      email: "",
                      phone: "",
                      company: "",
                      subject: "new-website",
                      message: "",
                      website: "",
                    });
                  }}
                  style={{
                    marginTop: 8,
                    padding: "13px 24px",
                    borderRadius: 10,
                    border: "none",
                    background: SVC.lime,
                    color: SVC.forest,
                    fontFamily: SVC.ui,
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    boxShadow: "0 4px 20px rgba(200,240,74,0.2)",
                    transition: "background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = SVC.limeHover;
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 28px rgba(200,240,74,0.32)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = SVC.lime;
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(200,240,74,0.2)";
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.transform = "translateY(1px)";
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: 24 }}>
                  <h3
                    style={{
                      margin: "0 0 8px",
                      fontFamily: SVC.heading,
                      fontWeight: 700,
                      fontSize: "clamp(1.25rem, 1.8vw, 1.45rem)",
                      color: SVC.forest,
                    }}
                  >
                    Send us a message
                  </h3>
                  <p style={{ ...bodyStyle(false), margin: 0, fontSize: "0.95rem" }}>
                    Fields marked with <span style={{ color: SVC.forest }}>*</span> are
                    required.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  noValidate
                  style={{ display: "flex", flexDirection: "column", gap: 18 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 18 }}>
                    <div>
                      <label style={labelStyle}>
                        Full name <span style={{ color: SVC.forest }}>*</span>
                      </label>
                      <input
                        type="text"
                        autoComplete="name"
                        placeholder="Jane Smith"
                        value={form.fullName}
                        onChange={handleChange("fullName")}
                        onFocus={() => setFocused("fullName")}
                        onBlur={() => setFocused(null)}
                        style={fieldStyle("fullName")}
                      />
                      {errors.fullName ? (
                        <span style={errorStyle}>{errors.fullName}</span>
                      ) : null}
                    </div>

                    <div>
                      <label style={labelStyle}>
                        Email <span style={{ color: SVC.forest }}>*</span>
                      </label>
                      <input
                        type="email"
                        autoComplete="email"
                        placeholder="jane@company.com"
                        value={form.email}
                        onChange={handleChange("email")}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        style={fieldStyle("email")}
                      />
                      {errors.email ? (
                        <span style={errorStyle}>{errors.email}</span>
                      ) : null}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 18 }}>
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <QuotePhoneInput
                        className="quote-phone-input quote-phone-input--light"
                        value={form.phone}
                        onChange={(phone) => {
                          setForm((current) => ({ ...current, phone }));
                          if (errors.phone) {
                            setErrors((currentErrors) => {
                              const next = { ...currentErrors };
                              delete next.phone;
                              return next;
                            });
                          }
                        }}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>

                    <div>
                      <label style={labelStyle}>Company</label>
                      <input
                        type="text"
                        autoComplete="organization"
                        placeholder="Acme Ltd."
                        value={form.company}
                        onChange={handleChange("company")}
                        onFocus={() => setFocused("company")}
                        onBlur={() => setFocused(null)}
                        style={fieldStyle("company")}
                      />
                      {errors.company ? (
                        <span style={errorStyle}>{errors.company}</span>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>
                      Inquiry type <span style={{ color: SVC.forest }}>*</span>
                    </label>
                    <select
                      value={form.subject}
                      onChange={handleChange("subject")}
                      onFocus={() => setFocused("subject")}
                      onBlur={() => setFocused(null)}
                      style={{
                        ...fieldStyle("subject"),
                        appearance: "none",
                        backgroundImage:
                          "linear-gradient(45deg, transparent 50%, #162D24 50%), linear-gradient(135deg, #162D24 50%, transparent 50%)",
                        backgroundPosition:
                          "calc(100% - 18px) calc(50% - 2px), calc(100% - 12px) calc(50% - 2px)",
                        backgroundSize: "6px 6px, 6px 6px",
                        backgroundRepeat: "no-repeat",
                        paddingRight: 40,
                      }}
                    >
                      {CONTACT_INQUIRY_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.subject ? (
                      <span style={errorStyle}>{errors.subject}</span>
                    ) : null}
                  </div>

                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      width: 1,
                      height: 1,
                      overflow: "hidden",
                    }}
                  >
                    <label htmlFor="contact-website">Website</label>
                    <input
                      id="contact-website"
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.website}
                      onChange={handleChange("website")}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>
                      Message <span style={{ color: SVC.forest }}>*</span>
                    </label>
                    <textarea
                      placeholder="Tell us about your goals, timeline, budget, or anything else you'd like us to know..."
                      value={form.message}
                      onChange={handleChange("message")}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      style={fieldStyle("message", true)}
                    />
                    {errors.message ? (
                      <span style={errorStyle}>{errors.message}</span>
                    ) : null}
                  </div>

                  {submitError ? (
                    <p
                      style={{
                        margin: 0,
                        fontFamily: SVC.ui,
                        fontSize: "0.82rem",
                        color: "#b54a3a",
                        textAlign: "center",
                      }}
                    >
                      {submitError}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={sending}
                    style={{
                      marginTop: "auto",
                      width: "100%",
                      padding: "16px 24px",
                      border: "none",
                      borderRadius: 12,
                      background: sending ? "rgba(200,240,74,0.55)" : SVC.lime,
                      color: SVC.forest,
                      fontFamily: SVC.ui,
                      fontWeight: 700,
                      fontSize: "0.78rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      cursor: sending ? "wait" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      boxShadow: sending
                        ? "0 4px 16px rgba(200,240,74,0.12)"
                        : "0 8px 28px rgba(200,240,74,0.22)",
                      opacity: sending ? 0.85 : 1,
                      transition:
                        "background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease, opacity 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (sending) return;
                      e.currentTarget.style.background = SVC.limeHover;
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 12px 32px rgba(200,240,74,0.34)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = sending
                        ? "rgba(200,240,74,0.55)"
                        : SVC.lime;
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = sending
                        ? "0 4px 16px rgba(200,240,74,0.12)"
                        : "0 8px 28px rgba(200,240,74,0.22)";
                    }}
                    onMouseDown={(e) => {
                      if (sending) return;
                      e.currentTarget.style.transform = "translateY(1px)";
                      e.currentTarget.style.boxShadow = "0 4px 16px rgba(200,240,74,0.18)";
                    }}
                    onMouseUp={(e) => {
                      if (sending) return;
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 12px 32px rgba(200,240,74,0.34)";
                    }}
                  >
                    {sending ? "Sending..." : "Send message"}
                    {!sending ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                        <path
                          d="M1 13L13 1M13 1H5M13 1V9"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : null}
                  </button>
                </form>
              </>
            )}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .contact-section-shell {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
        }

        .contact-section-intro {
          margin-bottom: clamp(32px, 4vw, 48px);
          max-width: 760px;
        }

        .contact-section-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: clamp(28px, 3.5vw, 48px);
          align-items: stretch;
        }

        .contact-section-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-width: 0;
        }

        .contact-cards-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 16px;
          align-items: stretch;
        }

        .contact-registered-card {
          margin-top: 0;
        }

        .contact-section-form {
          display: flex;
          min-width: 0;
        }

        .contact-form-card {
          flex: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .contact-form-card form {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .contact-form-card textarea {
          min-height: 168px;
        }

        @media (min-width: 640px) {
          .contact-cards-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: 1024px) {
          .contact-section-layout {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: clamp(36px, 3vw, 56px);
          }
        }
      `}</style>
    </section>
  );
}
