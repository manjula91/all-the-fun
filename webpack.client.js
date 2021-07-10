const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const alias = require('./alias');

const buildPath = path.join(__dirname, 'public', 'build');

console.log(path.resolve(__dirname, 'reactor/components'))

module.exports = {
  entry: {
    client: './reactor/client.js',
    style: ['./public/assets/css/styles.css', './public/assets/css/header.css'],
  },
  target: 'web',
  output: {
    path: buildPath,
    filename: '[name].[contentHash].js',
    chunkFilename: '[name].[contentHash].js',
    publicPath: '/build/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  ...alias,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ['/node_modules/'],
        loaders: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(jpg|png|svg|jpeg)$/,
        use: 'ignore-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
    new StatsWriterPlugin({
      filename: 'stats.json',
    }),
    new GenerateSW({
      swDest: '../app-sw.js',
      exclude: [/\.html$/],
      modifyUrlPrefix: {
        '/': '/build/',
      },
      skipWaiting: true,
    }),
  ],
};
