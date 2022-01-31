module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "64": "4rem"
      },
      colors: {
        "grey": "#C1C4C1",
        "light": "#FAFFF2",
        "lighter": "#FFFEF9",
        "dark": "#030202",
        "darkish": "#2B2E2D",
        "lightblue": "#D4ECFF"
      },
      fontFamily: {
        artifika: ['Artifika']
      },
      dropShadow: {
        '2xl': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        '3xl': '0px 10px 10px rgba(0, 0, 0, 0.5)',
        "light": '0px 4px 12px rgba(135, 201, 255, 0.2)'
      }
    },
  },
  plugins: [],
}
