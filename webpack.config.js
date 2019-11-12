const path = require("path");

const config = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  mode: "development",
  module: {
    rules: [
      {
        use: { loader: "babel-loader" },
        test: /\.js$/
      }
    ]
  }
};
module.exports = config;
