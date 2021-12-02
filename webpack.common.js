const path = require("path");

module.exports = {
  name: "webGame Setting",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: "./src/index",
  },
  output: {
    path: path.resolve(__dirname + "/dist"),
    filename: "app.js",
    publicPath: "/",
  },
};
