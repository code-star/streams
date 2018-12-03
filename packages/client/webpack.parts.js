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

