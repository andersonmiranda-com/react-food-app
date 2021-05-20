module.exports = {
  entry: "./index.jsx",
  output: {
    filename: "dist/main.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["es2015", "react"],
        },
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
};
