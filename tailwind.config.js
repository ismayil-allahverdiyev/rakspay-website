/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#B9EC2E',
        'custom-grey': '#808080',
        'custom-grey-light': '#F2F2F2',
        'custom-grey-dark': '#303030',
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        title: ["Montserrat", "sans-serif"],
        opensans: ["Open San", "sans-serif"],
      },

    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".font-outline-2": {
          "-webkit-text-stroke": "2px #F2F2F2",
        },
        ".font-outline-4": {
          "-webkit-text-stroke": "4px #F2F2F2",
        }
      })
    }
  ],
}