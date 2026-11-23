"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-abis-blue text-white shadow-[0_4px_20px_rgba(32,109,247,0.4)] hover:bg-abis-blue-hover hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20"
      aria-label="Scroll back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
