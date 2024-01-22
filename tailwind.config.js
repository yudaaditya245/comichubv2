/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        "dark-900" : "#010919",
        "dark-800" : "#161e2c",
        "primary" : "#4e86f4",
      },
      screens : {
        "xxs" : "240px",
        "xs" : "480px"
      }
    },
  },
  plugins: [],
};

// "blue-900" : "#0b1622",
// "blue-800" : "#152232",
