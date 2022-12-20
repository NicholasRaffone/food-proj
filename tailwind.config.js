/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'roboto': 'Roboto'
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(50vh)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        'slideIn': 'slideIn 300ms',
      }
    },
  },
  plugins: [],
}
