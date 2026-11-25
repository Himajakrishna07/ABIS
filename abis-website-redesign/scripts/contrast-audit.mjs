/**
 * ABIS Light-Theme Contrast Audit
 * Usage:
 *   node scripts/contrast-audit.mjs [BASE_URL]
 *   BASE_URL defaults to http://localhost:3000
 *
 * Requirements: playwright must be installed
 *   npm i -D playwright && npx playwright install chromium
 *
 * Exits 0 if all checks pass, 1 if any WCAG AA failures found.
 */

import { chromium } from "playwright";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const BASE_URL = process.argv[2] || process.env.AUDIT_BASE_URL || "http://localhost:3000";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SHOTS_DIR = path.join(__dirname, "..", "tmp-shots");

const ROUTES = [
  "/",
  "/who-we-are",
  "/services",
  "/services/permanent-recruitment",
  "/services/contract-staffing",
  "/services/executive-search-rpo",
  "/services/corporate-training",
  "/services/hr-services",
  "/services/application-development",
  "/business-practices",
  "/life-at-abis",
  "/careers",
  "/contact",
];

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

/** sRGB -> relative luminance */
function relativeLuminance(r, g, b) {
  const toLinear = (c) => {
    const v = c / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

/** contrast ratio between two [r,g,b] triples */
function contrastRatio(fg, bg) {
  const L1 = relativeLuminance(...fg);
  const L2 = relativeLuminance(...bg);
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}

/** parse "rgb(r, g, b)" or "rgba(r, g, b, a)" -> [r,g,b,a] */
function parseRgb(str) {
  const m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (!m) return null;
  return [parseInt(m[1]), parseInt(m[2]), parseInt(m[3]), m[4] !== undefined ? parseFloat(m[4]) : 1];
}

/** blend fg [r,g,b,a] over bg [r,g,b] */
function blendOver(fg, bg) {
  const a = fg[3] ?? 1;
  return [
    Math.round(fg[0] * a + bg[0] * (1 - a)),
    Math.round(fg[1] * a + bg[1] * (1 - a)),
    Math.round(fg[2] * a + bg[2] * (1 - a)),
  ];
}

async function getEffectiveBg(page, element) {
  // Walk up ancestors to find first non-transparent background
  return page.evaluate((el) => {
    let node = el;
    while (node && node !== document.documentElement) {
      const style = window.getComputedStyle(node);
      const bg = style.backgroundColor;
      if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
        return bg;
      }
      node = node.parentElement;
    }
    // Fall back to body background
    return window.getComputedStyle(document.body).backgroundColor || "rgb(255,255,255)";
  }, element);
}

async function auditPage(page, url, theme) {
  await page.addInitScript((t) => {
    try { localStorage.setItem("abis-theme", t); } catch {}
  }, theme);

  await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });

  // Apply theme class if not already applied by the no-flash script
  await page.evaluate((t) => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(t);
    document.documentElement.style.colorScheme = t;
  }, theme);

  await page.waitForTimeout(500);

  const failures = await page.evaluate(() => {
    function relativeLuminance(r, g, b) {
      const toLinear = (c) => {
        const v = c / 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      };
      return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
    }

    function contrastRatio(L1, L2) {
      const lighter = Math.max(L1, L2);
      const darker = Math.min(L1, L2);
      return (lighter + 0.05) / (darker + 0.05);
    }

    function parseRgb(str) {
      const m = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
      if (!m) return null;
      return [parseInt(m[1]), parseInt(m[2]), parseInt(m[3]), m[4] !== undefined ? parseFloat(m[4]) : 1];
    }

    function blendOver(fg, bg) {
      const a = fg[3] ?? 1;
      if (a >= 1) return [fg[0], fg[1], fg[2]];
      return [
        Math.round(fg[0] * a + bg[0] * (1 - a)),
        Math.round(fg[1] * a + bg[1] * (1 - a)),
        Math.round(fg[2] * a + bg[2] * (1 - a)),
      ];
    }

    function getEffectiveBg(el) {
      let node = el.parentElement;
      let bgColor = [244, 246, 250]; // default page bg #F4F6FA
      while (node && node !== document.documentElement) {
        const style = window.getComputedStyle(node);
        const bg = style.backgroundColor;
        if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
          const parsed = parseRgb(bg);
          if (parsed) {
            if (parsed[3] >= 1) { bgColor = [parsed[0], parsed[1], parsed[2]]; break; }
            bgColor = blendOver(parsed, bgColor);
            if (parsed[3] >= 0.9) break;
          }
        }
        node = node.parentElement;
      }
      return bgColor;
    }

    const results = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    const seen = new Set();

    let textNode;
    while ((textNode = walker.nextNode())) {
      const text = textNode.textContent.trim();
      if (!text || text.length < 2) continue;
      const el = textNode.parentElement;
      if (!el || !el.isConnected) continue;

      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) continue;
      if (rect.bottom < 0 || rect.top > window.innerHeight * 3) continue; // only first 3 viewports

      const style = window.getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden" || parseFloat(style.opacity) < 0.1) continue;

      const fgStr = style.color;
      const fg = parseRgb(fgStr);
      if (!fg) continue;

      // Skip transparent fill (gradient text uses -webkit-text-fill-color transparent)
      const fill = style.webkitTextFillColor;
      if (fill === "transparent" || fill === "rgba(0, 0, 0, 0)") continue;

      const bg = getEffectiveBg(el);
      const fgSolid = blendOver(fg, bg);

      const L_fg = relativeLuminance(fgSolid[0], fgSolid[1], fgSolid[2]);
      const L_bg = relativeLuminance(bg[0], bg[1], bg[2]);
      const ratio = contrastRatio(L_fg, L_bg);

      const fontSize = parseFloat(style.fontSize);
      const fontWeight = parseInt(style.fontWeight);
      const isLargeText = fontSize >= 18.67 || (fontSize >= 14 && fontWeight >= 700);
      const threshold = isLargeText ? 3 : 4.5;

      if (ratio < threshold) {
        const key = `${fgStr}|${bg}|${text.slice(0, 20)}`;
        if (seen.has(key)) continue;
        seen.add(key);

        // Build a short selector
        const id = el.id ? `#${el.id}` : "";
        const cls = Array.from(el.classList).slice(0, 2).join(".");
        const selector = `${el.tagName.toLowerCase()}${id}${cls ? "." + cls : ""}`;

        results.push({
          selector,
          text: text.slice(0, 50),
          fg: fgStr,
          bg: `rgb(${bg.join(",")})`,
          ratio: Math.round(ratio * 100) / 100,
          threshold,
          isLargeText,
        });
      }
    }

    return results.slice(0, 50); // cap at 50 per page
  });

  return failures;
}

async function main() {
  await mkdir(SHOTS_DIR, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const allFailures = [];
  let totalChecked = 0;

  for (const { name: vpName, width, height } of VIEWPORTS) {
    for (const route of ROUTES) {
      const url = `${BASE_URL}${route}`;
      const page = await browser.newPage();
      await page.setViewportSize({ width, height });

      try {
        // ---- LIGHT MODE AUDIT ----
        const lightFails = await auditPage(page, url, "light");
        const shotPath = path.join(SHOTS_DIR, `${vpName}-light-${route.replace(/\//g, "_") || "home"}.png`);
        await page.screenshot({ path: shotPath, fullPage: false });

        for (const f of lightFails) {
          allFailures.push({ route, viewport: vpName, theme: "light", ...f });
        }
        totalChecked++;

        console.log(`[${vpName}] ${route} LIGHT: ${lightFails.length} failures`);
      } catch (err) {
        console.error(`Error on ${url} (${vpName}):`, err.message);
      } finally {
        await page.close();
      }
    }
  }

  await browser.close();

  // Print failure table
  if (allFailures.length > 0) {
    console.log("\n=== CONTRAST FAILURES ===");
    console.log(
      ["Route", "VP", "Theme", "Selector", "Text", "FG", "BG", "Ratio", "Min"]
        .map((h) => h.padEnd(30))
        .join(" | ")
    );
    console.log("-".repeat(200));
    for (const f of allFailures) {
      console.log(
        [f.route, f.viewport, f.theme, f.selector, f.text, f.fg, f.bg,
          f.ratio.toFixed(2), f.threshold]
          .map((v) => String(v).padEnd(30))
          .join(" | ")
      );
    }
    console.log(`\nTotal failures: ${allFailures.length} across ${totalChecked} page/viewport combos`);
    console.log(`Screenshots saved to: ${SHOTS_DIR}`);
    process.exit(1);
  } else {
    console.log(`\n✅ Zero contrast failures across ${totalChecked} page/viewport combos`);
    console.log(`Screenshots saved to: ${SHOTS_DIR}`);
    process.exit(0);
  }
}

main().catch((err) => {
  console.error("Audit error:", err);
  process.exit(1);
});
