// next-i18next.config.js
const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "ay"], // arunaka = idiomas
  },
  localePath: path.resolve("./public/locales"),
};
