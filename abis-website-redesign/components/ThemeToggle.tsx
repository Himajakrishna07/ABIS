"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("light") ? "light" : "dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(next);
    root.style.colorScheme = next;
    try { localStorage.setItem("abis-theme", next); } catch {}
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      title={theme === "dark" ? "Light theme" : "Dark theme"}
      className="theme-toggle fixed bottom-5 right-5 z-[60] inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-abis-blue text-white shadow-lg shadow-black/30 transition hover:scale-105 hover:bg-abis-blue-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-abis-cyan"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
