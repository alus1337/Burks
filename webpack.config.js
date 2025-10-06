const path = require("path");

module.exports = {
  // The entry point file described above
  entry: {
    index: "./scripts/script.js",
    patty: "./scripts/patty.js",
  },
  // The location of the build folder described above
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  // Optional and for development only. This provides the ability to
  // map the built code back to the original source format when debugging.
  devtool: "eval-source-map",

  devServer: {
    static: path.resolve(__dirname, "./"),
    port: 8080,
    open: true,
  },
};
