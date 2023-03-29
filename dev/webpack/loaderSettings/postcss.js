const config = require("../../config.js");

const autoprefixer = require("autoprefixer");

// メディアクエリを最適化
const sortMediaQueries = require("postcss-sort-media-queries");

module.exports = {
  loader: "postcss-loader",
  options: {
    sourceMap: config.mode === "development",
    postcssOptions: {
      plugins: [sortMediaQueries(), autoprefixer(config.autoprefixerOpt)],
    },
  },
};
