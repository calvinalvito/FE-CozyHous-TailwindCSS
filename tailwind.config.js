/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        colorButton: '#ACE17A',
        primaryBlack: '#212427',
        secondaryBlack: '#868686',
        colorStroke: '#DDDDDD'
      },
      maxWidth:{
        '8xl': '1320px'
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}