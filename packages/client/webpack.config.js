const path = require("path");
const merge = require("webpack-merge");

const parts = require("./webpack.parts");

const PATHS = {
  app: path.join(__dirname, "src"),
  build: path.join(__dirname, "dist"),
};

const commonConfig = merge([

]);

const productionConfig = merge([

]);

const developmentConfig = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),

]);

module.exports = mode => {
  if (mode === "production") {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};
