import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: "#0F1115",
        surfaceMuted: "#11151c",
        foreground: "#F5F7FB",
        muted: "#9BA3AE",
        stroke: "rgba(255,255,255,0.08)",
        brand: {
          DEFAULT: "#B7F3D0",
          ink: "#0B1F17"
        }
      },
      boxShadow: {
        glow: "0 25px 70px -40px rgba(183, 243, 208, 0.6)",
        soft: "0 20px 50px -35px rgba(15, 17, 21, 0.8)"
      },
      borderRadius: {
        xl2: "1.5rem"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      animation: {
        blob: "blob 22s ease-in-out infinite",
        float: "float 12s ease-in-out infinite"
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate3d(0,0,0) scale(1)" },
          "33%": { transform: "translate3d(40px,-60px,0) scale(1.1)" },
          "66%": { transform: "translate3d(-30px,30px,0) scale(0.95)" },
          "100%": { transform: "translate3d(0,0,0) scale(1)" }
        },
        float: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-10px,0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
