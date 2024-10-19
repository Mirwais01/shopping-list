/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightAntique: "#FFEBB2",
        lightPink: "#E59BE9",
        lightViolet: "#D862BC",
        darkViolet: "#8644A2",
      },
      fontFamily: {
        Roboto: "Roboto",
      },
    },
  },
  plugins: [],
};
