/* eslint global-require: 0 */
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const GitRevisionPlugin = require("git-revision-webpack-plugin")
const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin")
const DotenvPlugin = require('dotenv-webpack')
const path = require("path")

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    stats: "errors-only",

    host,
    port,
    open: true,

    overlay: true,

    watchOptions: {
      aggregateTimeout: 300,

      poll: 1000,
    },

    contentBase: './build',
    hot: true,
  },
})

exports.output = () => ({
  output: {
    path: path.join(__dirname, './build'),
    filename: 'streams-client.js',
  },
})

exports.pluginsDevelop = () => ({
  plugins: [
    new DotenvPlugin({
      path: path.resolve(__dirname, './.env.develop'),
    }),
    new HtmlWebpackPlugin({
      title: "Codestar Streams Client",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
})

exports.pluginsRelease = () => ({
  plugins: [
    new DotenvPlugin({
      path: path.resolve(__dirname, './.env.release'),
    }),
    new HtmlWebpackPlugin({
      title: "Codestar Streams Client",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
})

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
})

exports.clean = pathToClean => ({
  plugins: [new CleanWebpackPlugin([pathToClean])],
})

exports.attachRevision = () => ({
  plugins: [
    new webpack.BannerPlugin({
      banner: new GitRevisionPlugin().version(),
    }),
  ],
})

exports.minifyJavaScript = () => ({
  optimization: {
    minimizer: [new UglifyWebpackPlugin({ sourceMap: true })],
  },
})

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
        {
          test: /\.css$/,
          include,
          exclude,

          use: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [require("postcss-cssnext")()],
              },
            },
          ],
        },
        {
          test: /\.less$/,
          use: ["style-loader", "css-loader", "less-loader"],
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.styl$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "stylus-loader",
              options: {
                use: [require("yeticss")],
              },
            },
          ],
        },
    ],
  },
})
