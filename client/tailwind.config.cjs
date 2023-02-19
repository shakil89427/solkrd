/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: false,
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        darkblue: "#0053AB",
        mediumblue: "#0D82FF",
        lightblue: "#00A2FF",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
