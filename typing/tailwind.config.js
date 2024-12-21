/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        back:'#333333'
      },
      wordspacing:{
        wide: '0.5rem'
      }
    },
  },
  plugins: [],
}

