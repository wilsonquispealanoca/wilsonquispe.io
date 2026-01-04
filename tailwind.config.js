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
        "btn-color": "#6a50f3",
        "detail-border-dark": "#ffffff1c",
        "bg-soft-dark": "#1D1E23",
        shadow: "#AEB7B3",
        card: "#FFFFFF",
        cta: "#1FAD71",
        accent: "#26bdbd",
        background: "#f6f5f9",
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
        "border-golden": "#e7a601",
        "text-golden": "#ae6903",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        firacode: ["FiraCode"],
        outfitsemibold: ["OutfitSemiBold", "sans-serif"],
        outfitlight: ["OutfitLight", "sans-serif"],
        letter: ["LetterForLearners"],
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
