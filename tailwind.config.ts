/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        tera: {
          500: "#156064",
        },
        background: {
          DEFAULT: "#050505",
          subtle: "#0A0A0A",
          muted: "#121212",
        },
        foreground: {
          DEFAULT: "#FAFAFA",
          subtle: "#A1A1AA",
          muted: "#71717A",
        },
        primary: {
          DEFAULT: "#0284C7",
          hover: "#0369A1",
        },
        accent: {
          DEFAULT: "#9333EA",
          hover: "#7E22CE",
        },
        success: "#22C55E",
        warning: "#FBBF24",
        error: "#EF4444",
      },
      screens: {
        xs: "360px",
      },
      dropShadow: {
        teralight: "0 0 1em rgb(45,212,191)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
