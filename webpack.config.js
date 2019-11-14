const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: [/.css$/],
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: require("html-webpack-template"),
      hash: true,
      title: "Webpack-tutorial",
      filename: "index.html",
      appMountId: "app-container"
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    compress: true,
    port: 3000,
    open: "Google Chrome",
    watchContentBase: true
  }
};
module.exports = config;
