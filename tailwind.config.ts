import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Barcelona inspired palette
        barca: {
          blue: {
            DEFAULT: "#004D98",
            dark: "#001F3D",
            light: "#1E5FA8",
          },
          red: {
            DEFAULT: "#A50044",
            dark: "#7A0033",
            light: "#C41E3A",
          },
          gold: {
            DEFAULT: "#EDBB00",
            dark: "#D4A500",
            light: "#FFCC00",
          },
        },
        // Dark theme
        background: {
          DEFAULT: "#0A0E1A",
          secondary: "#0F1420",
          tertiary: "#151B2B",
          card: "rgba(20, 28, 45, 0.8)",
        },
        // Tech theme
        tech: {
          cyan: "#00D9FF",
          purple: "#8B5CF6",
          green: "#10B981",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "barca-gradient": "linear-gradient(135deg, #004D98 0%, #A50044 100%)",
        "gold-gradient": "linear-gradient(135deg, #EDBB00 0%, #D4A500 100%)",
        "tech-gradient": "linear-gradient(135deg, #00D9FF 0%, #8B5CF6 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "fade-in": "fadeIn 0.6s ease-out",
        "bounce-slow": "bounce 3s infinite",
        "spin-slow": "spin 8s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
