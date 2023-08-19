/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        myOrange: "#ee6c4d",
        myGray: "#293241",
        blue100: "#e0fbfc",
        blue200: "#98c1d9", 
        blue300: "#3d5a80"
      },
   
    },
  },
  plugins: [],
}

