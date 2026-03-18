"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setProgress(Math.min((window.scrollY / docHeight) * 100, 100));
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (progress === 0) return null;

  return (
    <div
      className="fixed top-14 left-0 h-[3px] z-40 bg-gradient-to-r from-primary via-accent to-pink-500 transition-[transform] duration-100"
      style={{ width: "100%", transform: `scaleX(${progress / 100})`, transformOrigin: "left" }}
    />
  );
}
