/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        man: ["Manrope", "sans-serif"],
      },
      colors: {
        bgPrimary: "hsl(217, 19%, 24%)",
        card: "hsl(217, 19%, 38%)",
        shadow: "hsl(218, 23%, 16%)",
        neonGreen: "hsl(150, 100%, 66%)",
        cyanLight: "hsl(193, 38%, 86%)",
      },
    },
  },
  plugins: [],
};
