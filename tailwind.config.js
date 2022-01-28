module.exports = {
  content: ['./pages/**/*.{html,js,jsx}',
  './components/**/*.{html,js,jsx}',],
  theme: {
    extend: {
      colors: {
        "primary-text": "#222A27",
        "secondary-text": "#45544E",
        "tertiary-text": "#788781",
        "shadow": "#AEB7B3",
        "card": "#F2F3F2",
        "cta": "#1FAD71",
        "background": "#E3E8E6",
        "card-top-color-1": "#D194AA",
        "card-bottom-color-1": "#8766CC",
        "card-top-color-2": "#F0D3A8",
        "card-bottom-color-2": "#E05285",
        "card-top-color-3": "#ADBFEB",
        "card-bottom-color-3": "#33CC8B",
      },
      fontFamily: {
        means: ["Means-web", "sans-serif"]
      },
      spacing: {
        "border": '4px',
      },
    },
  },
  plugins: [],
}
