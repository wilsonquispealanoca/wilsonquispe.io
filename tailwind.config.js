const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  future: 'all',
  experimental: 'all',
  content: ['./pages/**/*.{html,js,jsx}',
  './components/**/*.{html,js,jsx}', "./node_modules/prismjs/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-text": "#000000",
        "secondary-text": "#232323",
        "tertiary-text": "#1E263E",
        "shadow": "#AEB7B3",
        "card": "#FFFFFF",
        "cta": "#1FAD71",
        "accent": "#004e56",
        "background": "#FFFFFF",
        "card-top-color-1": "#D194AA",
        "card-bottom-color-1": "#8766CC",
        "card-top-color-2": "#F0D3A8",
        "card-bottom-color-2": "#E05285",
        "card-top-color-3": "#ADBFEB",
        "card-bottom-color-3": "#7CC25A",
        "cta-dark": "#499ED4",
        "background-dark": "#1E263E",
        "card-dark": "#2A324D",
        "shadow-dark": "#606C67",
        "tertiary-dark": "#6A76A1",
        "secondary-dark": "#a0aec0",
        "primary-dark": "#FFFFFF",
      },
      fontFamily: {
        means: ["Means-web"],
        sans: ['Nunito Sans', 'sans-serif'],  
      },
      spacing: {
        "border": '4px',
      },
      fontSize: {
        "45xl": '2.5rem',
      },
    },
  },
}
