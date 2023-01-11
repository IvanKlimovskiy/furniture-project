const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
  entry: {main: "./src/components/index.js"},
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: ""
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    compress: true,
    port: 8080,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "cabinets.html",
      template: './src/cabinets.html'
    }),
    new HtmlWebpackPlugin({
      filename: "contacts.html",
      template: './src/contacts.html'
    }),
    new HtmlWebpackPlugin({
      filename: "dressing-rooms.html",
      template: './src/dressing-rooms.html'
    }),
    new HtmlWebpackPlugin({
      filename: "how-to-order.html",
      template: './src/how-to-order.html'
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: "kitchen-living-rooms.html",
      template: './src/kitchen-living-rooms.html'
    }),
    new CleanWebpackPlugin(),
  ]
}
