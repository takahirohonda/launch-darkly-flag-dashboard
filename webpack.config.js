const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  devServer: {
      inline: true,
      contentBase: './public',
      // historyApiFallback: true,
      port: 3000
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: "ts-loader"},
      { test: /\.js$/, use: ["source-map-loader"], enforce: "pre" },
      // this will create css file in the dist folder and add <link> in index.html
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']}
      // { test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin(), new OptimizeCSSAssetsPlugin({})],
  },
  plugins:[
      new HtmlWebPackPlugin({
          template: "./public/index.html",
          filename: "index.html"
      }),
      new MiniCssExtractPlugin({filename: "app.css"}),
      new CopyWebpackPlugin([
        {from:'public/img',to:'img'}
    ])
  ]
};