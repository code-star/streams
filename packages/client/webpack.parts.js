const webpack = require("webpack");

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    stats: "errors-only",

    host: host,
    port: port,
    open: true,

    overlay: true,

    watchOptions: {
      aggregateTimeout: 300,

      poll: 1000,
    },

    contentBase: './dist',
    hot: true
  },
});

exports.plugins = () => ({
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
});

exports.loadJavaScript = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,

        use: "babel-loader",
      },
    ],
  },
});
