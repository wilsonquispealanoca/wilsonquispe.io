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
        "primary-text": "#251D16",
        "secondary-text": "#837F7B",
        "tertiary-text": "#C5C4C2",
        "brand-beige": "#f9f4da",
        "brand-coal": "#0f0d0e",
        "brand-charcoal": "#231f20",
        "brand-charcoal-muted": "#1b1918",
        "brand-yellow": "#fcba28",
        "brand-pink": "#f38ba3",
        shadow: "#AEB7B3",
        card: "#FFFFFF",
        cta: "#1FAD71",
        accent: "#12b5e5",
        background: "#FFFFFF",
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
        sans: ["Nunito Sans", "sans-serif"],
        averia: ["Averia Serif Libre"],
        outfit: ["Outfit", "sans-serif"],
        firacode: ["FiraCode"],
      },
      spacing: {
        border: "4px",
      },
      fontSize: {
        "45xl": "2.5rem",
      },
    },
  },
};
