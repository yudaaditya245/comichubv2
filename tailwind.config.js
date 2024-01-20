/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        "darkblue-900" : "#0b1622",
        "darkblue-800" : "#152232",
      }
    },
  },
  plugins: [],
};
