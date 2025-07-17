/** @type {import('tailwindcss').Config} */
export default {
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
  extend: {
    animation: {
      'spin-slow': 'spin 60s linear infinite',
    },
    fontFamily: {
      sans: ["'Playfair Display'", "serif"],
    },
    colors: {
      primary: "#1E293B",
      accent: "#F59E0B",
    },
  },
},
}

