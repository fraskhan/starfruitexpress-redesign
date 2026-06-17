"use client";

import { useEffect, useState, useCallback } from "react";

interface ScrollState {
  scrollY: number;
  scrollDirection: "up" | "down" | null;
  isAtTop: boolean;
  isScrolled: boolean;
}

/**
 * useScroll — tracks window scroll position and direction.
 * Threshold: consider "scrolled" after 60px.
 */
export function useScroll(threshold = 60): ScrollState {
  const [state, setState] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: null,
    isAtTop: true,
    isScrolled: false,
  });

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    setState((prev) => ({
      scrollY: currentY,
      scrollDirection: currentY > prev.scrollY ? "down" : "up",
      isAtTop: currentY < 10,
      isScrolled: currentY > threshold,
    }));
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to get initial value
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return state;
}
