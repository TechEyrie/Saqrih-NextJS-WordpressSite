"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  CUSTOMER_SECTION_HEADING,
  CUSTOMER_TESTIMONIALS,
} from "../../lib/customerTestimonials";

const CLIENTS = CUSTOMER_TESTIMONIALS;

/** Keep in sync with CSS transitions below */
const OPEN_MS = 820;
const HOVER_INTENT_MS = 140;
const COLLAPSED_H = 54;
const GAP_PX = 8;

function ClientLogo({ client, dark = false }) {
  const color = dark ? "rgba(0,0,0,0.75)" : "rgba(255,255,255,0.75)";
  if (client.id === "joby") {
    return (
      <div className="flex items-center gap-2" style={{ color }}>
        <svg width="26" height="20" viewBox="0 0 28 22" fill="none" aria-hidden>
          <path
            d="M14 2C8 2 3 8 2 14C6 11 10 10 14 10C18 10 22 11 26 14C25 8 20 2 14 2Z"
            fill="currentColor"
            opacity="0.9"
          />
          <path
            d="M2 14C4 18 8 20 14 20C20 20 24 18 26 14C22 11 18 10 14 10C10 10 6 11 2 14Z"
            fill="currentColor"
            opacity="0.5"
          />
        </svg>
      </div>
    );
  }
  if (client.id === "pall") {
    return (
      <div className="flex items-center gap-2" style={{ color }}>
        <div className="rounded-full border border-current px-2 py-0.5 text-[9px] font-bold tracking-widest">
          PALL
        </div>
        <span className="text-[13px] font-medium">{client.logo}</span>
      </div>
    );
  }
  if (client.id === "niar") {
    return (
      <span
        className="font-black tracking-wide italic"
        style={{ fontSize: "clamp(1rem,1.5vw,1.4rem)", color }}
      >
        NIAR
      </span>
    );
  }
  return (
    <span
      className="font-black tracking-[0.06em] uppercase"
      style={{ fontSize: "clamp(0.8rem,1vw,1rem)", color }}
    >
      {client.logo}
    </span>
  );
}

function AccordionCard({
  client,
  open,
  panelHeight,
  onIntentOpen,
  panelId,
  buttonId,
}) {
  return (
    <article
      className="customers-accordion-card relative overflow-hidden rounded-2xl"
      data-open={open ? "true" : "false"}
      style={{
        background: open
          ? "linear-gradient(135deg,#e8eaed 0%,#d0d4da 100%)"
          : "rgba(255,255,255,0.07)",
        border: open
          ? "1px solid rgba(255,255,255,0.2)"
          : "1px solid rgba(255,255,255,0.1)",
        transition:
          "background 0.75s ease, border-color 0.75s ease, box-shadow 0.75s ease",
        boxShadow: open ? "0 18px 40px rgba(0,0,0,0.22)" : "none",
      }}
    >
      <button
        id={buttonId}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onMouseEnter={onIntentOpen}
        onFocus={onIntentOpen}
        onClick={onIntentOpen}
        className="customers-accordion-trigger flex w-full items-center justify-between gap-4 px-5 text-left"
        style={{
          height: COLLAPSED_H,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: open ? "rgba(0,0,0,0.75)" : "rgba(255,255,255,0.75)",
        }}
      >
        <ClientLogo client={client} dark={open} />
        <span
          aria-hidden
          style={{
            width: 22,
            height: 22,
            borderRadius: "50%",
            border: open
              ? "1px solid rgba(0,0,0,0.18)"
              : "1px solid rgba(255,255,255,0.2)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "transform 0.75s ease, border-color 0.75s ease",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M5 1v8M1 5h8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="customers-accordion-panel"
        style={{
          height: open ? panelHeight : 0,
          overflow: "hidden",
          transition: `height ${OPEN_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
          pointerEvents: "none",
        }}
      >
        <div
          className="customers-accordion-panel-inner flex flex-col gap-5 px-5 pb-6 pt-1 sm:gap-6 sm:px-7 sm:pb-7"
          style={{
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(-8px)",
            transition: `opacity ${Math.round(OPEN_MS * 0.65)}ms ease ${open ? "120ms" : "0ms"}, transform ${Math.round(OPEN_MS * 0.65)}ms ease ${open ? "120ms" : "0ms"}`,
          }}
        >
          <p
            className="font-semibold leading-relaxed"
            style={{
              fontSize: "clamp(0.95rem,1.15vw,1.15rem)",
              color: "rgba(0,0,0,0.82)",
            }}
          >
            {client.quote}
          </p>
          <p
            className="font-semibold tracking-[0.13em] uppercase"
            style={{
              fontSize: "clamp(0.65rem,0.75vw,0.75rem)",
              color: "rgba(0,0,0,0.4)",
            }}
          >
            {client.author}
          </p>
        </div>
      </div>
    </article>
  );
}

/**
 * Homepage-only testimonials accordion.
 * Same content as CustomersSection, without GSAP pin / scroll scrub.
 * Hover (or click/focus) expands one card and collapses the others.
 */
export default function CustomersAccordionSection() {
  const baseId = useId();
  const [activeId, setActiveId] = useState(CLIENTS[0]?.id ?? null);
  const [panelHeight, setPanelHeight] = useState(240);

  const listRef = useRef(null);
  const measureRef = useRef(null);
  const intentTimerRef = useRef(0);
  const unlockTimerRef = useRef(0);
  const activeIdRef = useRef(activeId);
  const lockedRef = useRef(false);
  const pendingIdRef = useRef(null);

  useEffect(() => {
    activeIdRef.current = activeId;
  }, [activeId]);

  // One shared open height (tallest quote) so swapping cards keeps list height stable.
  useEffect(() => {
    const root = measureRef.current;
    if (!root) return;

    const measure = () => {
      let max = 0;
      CLIENTS.forEach((client) => {
        const el = root.querySelector(`[data-measure-id="${client.id}"]`);
        if (el) max = Math.max(max, Math.ceil(el.getBoundingClientRect().height));
      });
      if (max > 0) setPanelHeight(max);
    };

    // Match measure width to the live accordion column.
    const syncWidth = () => {
      const w = listRef.current?.getBoundingClientRect().width;
      if (w && measureRef.current) {
        measureRef.current.style.width = `${Math.round(w)}px`;
      }
      measure();
    };

    syncWidth();
    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(syncWidth)
        : null;
    if (listRef.current) ro?.observe(listRef.current);
    window.addEventListener("resize", syncWidth);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", syncWidth);
    };
  }, []);

  useEffect(() => {
    return () => {
      window.clearTimeout(intentTimerRef.current);
      window.clearTimeout(unlockTimerRef.current);
    };
  }, []);

  const commitOpen = (id) => {
    if (!id || id === activeIdRef.current) return;

    setActiveId(id);
    lockedRef.current = true;
    pendingIdRef.current = null;

    window.clearTimeout(unlockTimerRef.current);
    unlockTimerRef.current = window.setTimeout(() => {
      lockedRef.current = false;
      // After layout settles, open whichever header the cursor ended on.
      const pending = pendingIdRef.current;
      pendingIdRef.current = null;
      if (pending && pending !== activeIdRef.current) {
        commitOpen(pending);
      }
    }, OPEN_MS + 60);
  };

  const requestOpen = (id, immediate = false) => {
    if (!id) return;

    if (lockedRef.current) {
      pendingIdRef.current = id;
      return;
    }

    window.clearTimeout(intentTimerRef.current);
    if (immediate) {
      commitOpen(id);
      return;
    }
    intentTimerRef.current = window.setTimeout(() => {
      if (lockedRef.current) {
        pendingIdRef.current = id;
        return;
      }
      commitOpen(id);
    }, HOVER_INTENT_MS);
  };

  const listMinHeight =
    CLIENTS.length * COLLAPSED_H +
    (CLIENTS.length - 1) * GAP_PX +
    panelHeight;

  return (
    <section
      data-header="dark"
      className="customers-accordion-section"
      style={{
        background: "#162D24",
        position: "relative",
        overflowX: "clip",
        maxWidth: "100%",
      }}
    >
      <div
        ref={measureRef}
        aria-hidden
        style={{
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none",
          left: 0,
          top: 0,
          width: 480,
          height: 0,
          overflow: "hidden",
        }}
      >
        {CLIENTS.map((client) => (
          <div
            key={client.id}
            data-measure-id={client.id}
            className="flex flex-col gap-5 px-5 pb-6 pt-1 sm:gap-6 sm:px-7 sm:pb-7"
          >
            <p
              className="font-semibold leading-relaxed"
              style={{ fontSize: "clamp(0.95rem,1.15vw,1.15rem)" }}
            >
              {client.quote}
            </p>
            <p
              className="font-semibold tracking-[0.13em] uppercase"
              style={{ fontSize: "clamp(0.65rem,0.75vw,0.75rem)" }}
            >
              {client.author}
            </p>
          </div>
        ))}
      </div>

      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          background: `
            radial-gradient(ellipse 55% 40% at 50% 50%,
              rgba(67, 87, 44, 0.24) 0%,
              rgba(67, 87, 44, 0.12) 45%,
              transparent 70%
            ),
            radial-gradient(ellipse 55% 28% at 50% 110%,
              rgba(67, 87, 44, 0.45) 0%,
              rgba(67, 87, 44, 0.22) 40%,
              transparent 68%
            )
          `,
        }}
      />

      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
          mixBlendMode: "overlay",
        }}
      />

      <div className="relative z-10 flex items-center px-5 py-16 sm:px-10 md:px-16 md:py-24 lg:px-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start md:items-center">
          <div>
            <h2
              className="text-white font-bold leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.2rem,4vw,4.2rem)" }}
            >
              {CUSTOMER_SECTION_HEADING.title}
            </h2>
            <p
              className="font-medium"
              style={{
                marginTop: "clamp(12px, 1.4vw, 16px)",
                fontSize: "clamp(1rem, 1.25vw, 1.2rem)",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              {CUSTOMER_SECTION_HEADING.subtitle}
            </p>
          </div>

          <div className="flex flex-col">
            <p
              className="text-[12px] font-medium mb-4 hidden md:block"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Hover a name to read the full endorsement ↓
            </p>
            <div
              ref={listRef}
              className="flex flex-col"
              style={{ gap: GAP_PX, minHeight: listMinHeight }}
            >
              {CLIENTS.map((client, i) => {
                const open = client.id === activeId;
                return (
                  <AccordionCard
                    key={client.id}
                    client={client}
                    open={open}
                    panelHeight={panelHeight}
                    onIntentOpen={(e) =>
                      requestOpen(
                        client.id,
                        e?.type === "click" || e?.type === "focus"
                      )
                    }
                    panelId={`${baseId}-panel-${i}`}
                    buttonId={`${baseId}-trigger-${i}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
