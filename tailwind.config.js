/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Noto: ["Noto Serif", "serif"],
        PlusJakartaSans: ["Plus Jakarta Sans", "sans-serif"],
      },
      gridTemplateColumns: {
        // carousel template
        carousel: "4fr 1fr",
      },
    },
  },
  plugins: [],
};
