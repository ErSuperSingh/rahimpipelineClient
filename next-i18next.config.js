const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "jp", "de", "ar"],
    localePath: path.resolve("./public/locales"),
  },
};
