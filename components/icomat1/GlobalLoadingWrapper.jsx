"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import LoadingScreen from "./LoadingScreen";
import ScrollToTopButton from "./ScrollToTopButton";

export default function GlobalLoadingWrapper({ children }) {
  const pathname = usePathname();
  const prevPathRef = useRef(pathname);
  const [showLoader, setShowLoader] = useState(true);
  const [loaderKey, setLoaderKey] = useState(0);
  const [portalTarget, setPortalTarget] = useState(null);

  useLayoutEffect(() => {
    setPortalTarget(document.body);
  }, []);

  // useLayoutEffect: show loader before paint so route changes don’t flash underlying page (or black layers)
  useLayoutEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      setShowLoader(true);
      setLoaderKey((v) => v + 1);
    }
  }, [pathname]);

  const loader =
    showLoader && portalTarget ? (
      <LoadingScreen
        key={`${pathname}-${loaderKey}`}
        onComplete={() => setShowLoader(false)}
      />
    ) : null;

  return (
    <>
      {portalTarget && loader ? createPortal(loader, portalTarget) : loader}
      {children}
      <ScrollToTopButton />
    </>
  );
}
