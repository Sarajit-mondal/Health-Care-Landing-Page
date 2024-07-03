/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
     
      "blue-400" :"#020043",
      "blue-300" :"#343268",
      "blue-200" :"#4D4C7B",
      "gold" :"#FFC637",
      "secondery-color":"#FFFFF5",
      "color-white":"#FFFFFF"
      
     },
     fontFamily: {
       Inter: ["Inter", "sans-serif"]
     },
  },
  plugins: [],
}