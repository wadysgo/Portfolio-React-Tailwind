/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'cl': '320px', // Define tu media query personalizada 'custom' con un ancho de 320px
      },
    },
  },
  plugins: [],
}

