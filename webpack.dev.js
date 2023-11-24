const path = require("path");
const ReactRefreshHotPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "webGame Setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx", ".tsx"],
  },
  entry: {
    app: "./src/index",
  },
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
        test: /\.tsx?/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
          },
        ],
        exclude: path.join(__dirname, "node_modules"),
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  },
  plugins: [new ReactRefreshHotPlugin()],
  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "app.js",
    publicPath: "/dist/",
  },
  devServer: {
    devMiddleware: { publicPath: "/dist" },
    static: { directory: path.join(__dirname, "src") },
    hot: true,
    historyApiFallback: true,
  },
};
