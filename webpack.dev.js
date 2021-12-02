const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ReactRefreshHotPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval",
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["react-refresh/babel"],
        },
        exclude: path.join(__dirname, "node_modules"),
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        options: { minimize: true },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new ReactRefreshHotPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    devMiddleware: { publicPath: "/dist" },
    static: { directory: path.join(__dirname, "src") },
    hot: true,
    historyApiFallback: true,
  },
});
