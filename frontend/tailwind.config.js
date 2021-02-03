const color = require("tailwindcss/colors")

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: color.gray,
      blue: color.blue,
      white: color.white,
      green: color.green,
      purple: color.purple,
      red: color.red
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "1024px",
      lg: "1280px"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
