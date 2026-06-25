"use client";

/** Load non-critical CSS without blocking first paint. */
export default function DeferredStylesheet({ href }) {
  return (
    <link
      rel="stylesheet"
      href={href}
      media="print"
      onLoad={(e) => {
        e.currentTarget.media = "all";
      }}
    />
  );
}
