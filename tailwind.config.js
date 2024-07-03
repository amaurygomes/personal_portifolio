/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {

      boxShadow:{
        'button': '0px 0px 58px 7px rgba(5, 150, 105, 0.4)',
      }
    },
    backgroundImage: {
      'hero-image': "url('/img/hero-bg-min.png')"
     },
  },
  plugins: [],
}
