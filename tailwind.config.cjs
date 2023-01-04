/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: 'url("./src/assets/media/img/home.png")',
      
      },
      fontFamily: {
        'dmsan': "dmsan",
        'inter': "inter",
        'interb': "interb",
        
      },
      colors: {
        primary : "#F4511E",
        secondary : "#18191F",
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },

  plugins: [],
}
