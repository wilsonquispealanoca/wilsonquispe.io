module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./node_modules/prismjs/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "primary-text": "#1E1F2B",
        "secondary-text": "#36424D",
        "tertiary-text": "#b9b9b9",
        "quaternary-color-text": "#4B5563",
        "btn-color": "#ff7655",
        "detail-border-dark": "#ffffff1c",
        "bg-soft-dark": "#1D1E23",
        "background": "#f3f4f5",
        "background-dark": "#1E263E",
        "card-dark": "#2A324D",
        "shadow-dark": "#606C67",
        "tertiary-dark": "#6A76A1",
        "secondary-dark": "#a0aec0",
        "border-golden": "#e7a601",
        "text-golden": "#ae6903",
        "black": "#242424",
        "purple-soft": "#484a8c",
        "purple-hover": "#7275de",
        "grayw": "#ddd",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        firacode: ["FiraCode"],
        outfitsemibold: ["OutfitSemiBold", "sans-serif"],
        outfitlight: ["OutfitLight", "sans-serif"],
        letter: ["LetterForLearners"],
        target2000: ["Target2000"],
        rivetto: ["Rivetto"],
      },
      spacing: {
        border: "4px",
      },
      fontSize: {
        "45xl": "2.5rem",
      },
      transitionProperty: {
        'clip-path': 'clip-path'
      },
    },
  },
};
