/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-deep": "var(--bg-deep)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        line: "var(--border)",
        "line-strong": "var(--border-strong)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        "on-dark": "var(--on-dark, #f5f4fa)",
        accent: {
          DEFAULT: "var(--accent)",
          bright: "var(--accent-bright)",
          deep: "var(--accent-deep)",
          ink: "var(--accent-ink)",
        },
        cream: {
          DEFAULT: "var(--cream)",
          ink: "var(--cream-ink)",
        },
      },
      fontFamily: {
        sans: ["geist", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["geistMono", "ui-monospace", "SF Mono", "monospace"],
      },
      maxWidth: {
        container: "75rem",
      },
      keyframes: {
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "orbit-spin": {
          to: { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
        "caret-blink": {
          "0%, 45%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(1.35)" },
        },
        "shine-sweep": {
          to: { transform: "skew(-22deg) translateX(420%)" },
        },
      },
      animation: {
        bob: "bob 6s ease-in-out infinite",
        "orbit-spin-slow": "orbit-spin 18s linear infinite",
        "caret-blink": "caret-blink 1.1s steps(1) infinite",
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
