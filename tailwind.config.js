export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        earth: {
          50: "#faf7f0",
          100: "#f4ede0",
          200: "#e8d9c1",
          300: "#d9c19a",
          400: "#c9a570",
          500: "#b8944f",
          600: "#a67c3a",
          700: "#8b6530",
          800: "#6f4f28",
          900: "#5a4024",
        },
        health: {
          50: "#f0f9f4",
          100: "#dcf2e4",
          200: "#bce5d0",
          300: "#8dd1b3",
          400: "#56b590",
          500: "#339970",
          600: "#257a5a",
          700: "#1f6249",
          800: "#1c4e3c",
          900: "#1a4032",
        },
        growth: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-grid": "20px 20px",
      },
    },
  },
  plugins: [],
};
