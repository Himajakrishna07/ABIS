import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        "bg-alt": "rgb(var(--bg-alt) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2) / <alpha-value>)",
        "border-theme": "rgb(var(--border) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        "fg-muted": "rgb(var(--fg-muted) / <alpha-value>)",
        "fg-subtle": "rgb(var(--fg-subtle) / <alpha-value>)",
        "accent-fg": "rgb(var(--accent-fg) / <alpha-value>)",
        "on-accent": "rgb(var(--on-accent) / <alpha-value>)",
        abis: {
          navy: { DEFAULT: "#070C1E", deep: "#040714", card: "#0D1530", surface: "#111C40", border: "#1E2C5B" },
          blue: { DEFAULT: "#206DF7", hover: "#1858CA", light: "#4B89F9", soft: "#EAF1FE" },
          cyan: { DEFAULT: "#00C2FF", glow: "rgba(0, 194, 255, 0.15)" }, charcoal: "#1F2937", slate: "#64748B"
        }
      },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"], display: ["var(--font-display)", "system-ui", "-apple-system", "sans-serif"] },
      backgroundImage: { "gradient-radial": "radial-gradient(var(--tw-gradient-stops))", "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)" },
      animation: { "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards", "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite", marquee: "marquee 35s linear infinite", "marquee-reverse": "marquee-reverse 35s linear infinite" },
      keyframes: { fadeIn: { "0%": { opacity: "0", transform: "translateY(12px)" }, "100%": { opacity: "1", transform: "translateY(0)" } }, marquee: { "0%": { transform: "translateX(0%)" }, "100%": { transform: "translateX(-50%)" } }, "marquee-reverse": { "0%": { transform: "translateX(-50%)" }, "100%": { transform: "translateX(0%)" } } }
    }
  }, plugins: []
};
export default config;
