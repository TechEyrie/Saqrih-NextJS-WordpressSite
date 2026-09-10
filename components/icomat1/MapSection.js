"use client";

export const SAQRIH_MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d901.8918238699429!2d51.54373222852061!3d25.28513749859758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c5ca37b0e30b%3A0x453499950409d678!2sSaqrih%20Website%20Design%20Qatar!5e0!3m2!1sen!2sqa!4v1789072075574!5m2!1sen!2sqa";

const MAPS_LINK =
  "https://www.google.com/maps/place/Saqrih+Website+Design+Qatar/@25.2851375,51.5437322,17z";

/**
 * Google Maps embed — homepage (before footer) + contact (after form).
 */
export default function MapSection({
  eyebrow = "Visit us",
  title = "Find Saqrih in Doha",
  description = "Our office is in Qatar. Drop by, or open the map for directions.",
}) {
  return (
    <section
      data-header="light"
      className="saqrih-map-section"
      aria-label="Saqrih office location map"
    >
      <div className="saqrih-map-inner">
        <div className="saqrih-map-copy">
          <p className="saqrih-map-eyebrow">{eyebrow}</p>
          <h2 className="saqrih-map-title">{title}</h2>
          <p className="saqrih-map-desc">{description}</p>
          <a
            className="saqrih-map-link"
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M1 13L13 1M13 1H5M13 1V9"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="saqrih-map-frame">
          <iframe
            title="Saqrih Website Design Qatar on Google Maps"
            src={SAQRIH_MAP_EMBED_SRC}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="saqrih-map-iframe"
          />
        </div>
      </div>

      <style jsx>{`
        .saqrih-map-section {
          position: relative;
          width: 100%;
          background: #f7f7f5;
          padding: clamp(3.5rem, 8vh, 5.5rem) clamp(1.25rem, 4vw, 3rem)
            clamp(4.5rem, 10vh, 7rem);
          overflow: clip;
        }

        .saqrih-map-inner {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.35fr);
          gap: clamp(1.75rem, 4vw, 3.25rem);
          align-items: center;
        }

        .saqrih-map-copy {
          max-width: 28rem;
        }

        .saqrih-map-eyebrow {
          margin: 0 0 0.75rem;
          font-family: var(--font-inter), Inter, Arial, sans-serif;
          font-size: 0.72rem;
          font-weight: 650;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(22, 45, 36, 0.55);
        }

        .saqrih-map-title {
          margin: 0;
          font-family: var(--font-inter), Inter, Arial, sans-serif;
          font-size: clamp(1.85rem, 3.4vw, 2.75rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.08;
          color: #162d24;
        }

        .saqrih-map-desc {
          margin: 1rem 0 0;
          font-family: var(--font-inter), Inter, Arial, sans-serif;
          font-size: clamp(0.95rem, 1.3vw, 1.08rem);
          line-height: 1.55;
          color: rgba(22, 45, 36, 0.7);
        }

        .saqrih-map-link {
          margin-top: 1.5rem;
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          font-family: var(--font-inter), Inter, Arial, sans-serif;
          font-size: 0.92rem;
          font-weight: 650;
          color: #162d24;
          text-decoration: underline;
          text-decoration-color: #c8f04a;
          text-decoration-thickness: 2px;
          text-underline-offset: 0.28em;
          transition: color 0.2s ease;
        }

        .saqrih-map-link:hover {
          color: #0f1f18;
        }

        .saqrih-map-frame {
          position: relative;
          width: 100%;
          border-radius: 18px;
          overflow: hidden;
          background: #e8ebe6;
          border: 1px solid rgba(22, 45, 36, 0.08);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.7) inset,
            0 22px 48px rgba(22, 45, 36, 0.1);
          aspect-ratio: 16 / 11;
          min-height: 320px;
        }

        .saqrih-map-frame::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: inherit;
          box-shadow: inset 0 0 0 1px rgba(22, 45, 36, 0.04);
        }

        :global(.saqrih-map-iframe) {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }

        @media (max-width: 900px) {
          .saqrih-map-inner {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .saqrih-map-copy {
            max-width: 36rem;
          }

          .saqrih-map-frame {
            aspect-ratio: 4 / 3;
            min-height: 280px;
          }
        }

        @media (max-width: 560px) {
          .saqrih-map-frame {
            aspect-ratio: 1 / 1.05;
            min-height: 260px;
            border-radius: 14px;
          }
        }
      `}</style>
    </section>
  );
}
