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
        test: /\.js$/,
        use: "babel-loader"
      },
      {
        // For pure CSS (without CSS modules)
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
module.exports = config;
