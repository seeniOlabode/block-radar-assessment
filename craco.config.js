const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  style: {
    sass: {
      loaderOptions: {
        additionalData: `@import "src/css/mixins.scss";`,
      },
    },
  },
};
