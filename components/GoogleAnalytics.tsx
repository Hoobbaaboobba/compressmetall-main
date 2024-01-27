"use client";

import { useEffect } from "react";
import initializeGA from "@/lib/google-analytics";

export default function GoogleAnalytics() {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initializeGA();
      window.GA_INITIALIZED = true;
    }
  }, []);
  return null;
}
