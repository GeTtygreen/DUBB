module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      body:[ 'Shadows Into Light', ]
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')

  ],
}
