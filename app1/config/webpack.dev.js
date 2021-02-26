const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const webpack = require('webpack');
const commonConfig = require('./webpack.common');

const devConfig = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8082/',
  },
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  devServer: {
    port: 8082,
    stats: 'minimal',
    quiet: true,
    historyApiFallback: true,
  },
  plugins: [
    new ErrorOverlayPlugin(),
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true,
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:8082'],
        notes: [
          'Some additional notes to be displayed upon successful compilation',
        ],
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
