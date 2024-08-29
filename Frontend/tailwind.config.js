/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "1/2": "50%",
        "3/4": "75%",
        "9/10": "90%", // Agregando 90% como ejemplo
        full: "100%",
      },
    },
  },
  plugins: [],
};
