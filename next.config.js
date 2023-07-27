const { i18n } = require("./next-i18next.config");

module.exports = {
  async rewrites() {
    return [
      ...i18n.locales.map((locale) => ({
        source: `/${locale !== i18n.defaultLocale ? locale : ""}/:path*`,
        destination: `/:path*`,
        locale: false,
      })),
    ];
  },
  publicRuntimeConfig: {
    localeSubpaths:
      typeof i18n.localeSubpaths === "object" ? i18n.localeSubpaths : {},
  },
};

/* module.exports = {
  reactStrictMode: true,
} */
