/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   'sm': '480px',
    //   'md': '547px',
    //   'lg': '768px',
    //   'xl': '1024px',
    //   '2xl': '1200px',
    // },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Specify Roboto font with fallback to sans-serif
      },
    },
  },
  plugins: [require("daisyui")],
}

