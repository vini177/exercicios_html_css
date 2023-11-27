const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [ 
      {
        test:/\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'style.css'
  }), 
  new HtmlWebpackPlugin({
    template: './index.html',
    hash: true
  })],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000
  }
}