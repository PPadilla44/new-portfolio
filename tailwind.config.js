module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#01847F",
        "light": "#FFFEF9",
        "dark": "#11021F",
      },
      fontFamily: {
        artifika: ['Artifika']
      },
      dropShadow: {
        '2xl' : '0px 4px 4px rgba(0, 0, 0, 0.25)',
        '3xl' : '0px 10px 10px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [],
}
