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
        use: "babel-loader",
        test: /\.js$/
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/
      }
    ]
  }
};
module.exports = config;
