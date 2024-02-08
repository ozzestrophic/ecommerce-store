/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        epicBlue: "#0074E3",
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
