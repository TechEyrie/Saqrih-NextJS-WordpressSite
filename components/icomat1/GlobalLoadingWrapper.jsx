"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import LoadingScreen from "./LoadingScreen";
import ScrollToTopButton from "./ScrollToTopButton";

export default function GlobalLoadingWrapper({ children }) {
  const pathname = usePathname();
  /** Last path the loader has finished revealing. */
  const [settledPath, setSettledPath] = useState(pathname);
  const [initialDone, setInitialDone] = useState(false);
  const [loaderKey, setLoaderKey] = useState(0);
  const [portalTarget, setPortalTarget] = useState(null);
  const wasLoadingRef = useRef(false);

  // Derived on every render — no effect needed, so no "page then loader" frame.
  const showLoader = !initialDone || pathname !== settledPath;

  useLayoutEffect(() => {
    setPortalTarget(document.body);
  }, []);

  useLayoutEffect(() => {
    if (showLoader && !wasLoadingRef.current) {
      setLoaderKey((v) => v + 1);
    }
    wasLoadingRef.current = showLoader;
  }, [showLoader]);

  useLayoutEffect(() => {
    document.body.style.overflow = showLoader ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showLoader]);

  const handleLoaderComplete = useCallback(() => {
    setSettledPath(pathname);
    setInitialDone(true);
  }, [pathname]);

  const loader =
    showLoader && portalTarget ? (
      <LoadingScreen
        key={`${pathname}-${loaderKey}`}
        onComplete={handleLoaderComplete}
      />
    ) : null;

  return (
    <>
      {portalTarget && loader ? createPortal(loader, portalTarget) : loader}
      <div
        className="global-loading-content"
        data-loading={showLoader ? "true" : "false"}
        aria-hidden={showLoader}
      >
        {children}
      </div>
      <ScrollToTopButton />
    </>
  );
}
