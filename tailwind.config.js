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
        "primary-text": "#222A27",
        "secondary-text": "#45544E",
        "tertiary-text": "#788781",
        "shadow": "#AEB7B3",
        "card": "#F1F1F1",
        "cta": "#1FAD71",
        "accent": "#004e56",
        "background": "#E3E8E6",
        "card-top-color-1": "#D194AA",
        "card-bottom-color-1": "#8766CC",
        "card-top-color-2": "#F0D3A8",
        "card-bottom-color-2": "#E05285",
        "card-top-color-3": "#ADBFEB",
        "card-bottom-color-3": "#33CC8B",
        "cta-dark": "#75F0BC",
        "background-dark": "#161D1A",
        "card-dark": "#222A27",
        "shadow-dark": "#606C67",
        "tertiary-dark": "#939F9A",
        "secondary-dark": "#CACECC",
        "primary-dark": "#F2F3F2",
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
  plugins: [require('@tailwindcss/typography')]
}
