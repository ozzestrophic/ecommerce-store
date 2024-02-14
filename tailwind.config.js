/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        epicBlue: "#0074E3",
        epicBluer: {
          50: "#edfaff",
          100: "#d6f3ff",
          200: "#b5ecff",
          300: "#83e3ff",
          400: "#48d1ff",
          500: "#1eb3ff",
          600: "#0696ff",
          700: "#0074e3",
          800: "#0863c5",
          900: "#0d559b",
          950: "#0e345d",
        },
      },
      fontFamily: {
        Noto: ["Noto Serif", "serif"],
        PlusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },
      gridTemplateColumns: {
        // carousel template
        carousel: "6fr 2fr",
        product: "3fr 1fr",
      },
    },
  },
  plugins: [],
};
