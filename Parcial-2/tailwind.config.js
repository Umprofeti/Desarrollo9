/** @type {import('tailwindcss').Config} */
module.exports = {
 content:[
  "./views/**/*.{html,ejs}"
 ],
  theme: {
    extend: {
      colors: {
        customBackground: '#3A3535',
        customText: '#FF7315',
        pageBackground: '#F4F4F4',
      },
      fontFamily: {
        Krylon:['Krylon', 'Georgia'] 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}