"use strict";
const webpack = require('webpack');
const path = require('path');
const loadersConf = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";


module.exports = {
  entry: [
    'core-js/fn/promise',
    'core-js/es6/object',
    'core-js/es6/array',

    './src/index.tsx'
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: loadersConf
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [
      path.join(__dirname, "src"),
      path.join(__dirname, "src"),
      path.join(__dirname, "node_modules"),
    ],
    alias: {
      "styles": path.resolve(__dirname, 'styles/'),
    }
  },
  devServer: {
    contentBase: "./public",
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      files: {
        css: ['style.css'],
        js: ["bundle.js"],
      }
    }),
  ]
};
