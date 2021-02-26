const HtmlWebpackPlugin = require('html-webpack-plugin');
const { generateMFconfig, doesMfConfigExist, resolveApp } = require('./utils');
const path = require("path");
const ESLintPlugin = require('eslint-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



const plugins = [
  new HtmlWebpackPlugin({
    template: "./public/index.html",
  }),
  new MiniCssExtractPlugin(),
  new ESLintPlugin({
    extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx'],
    formatter: require.resolve('react-dev-utils/eslintFormatter'),
    eslintPath: require.resolve('eslint'),
    emitWarning: true,
    context: resolveApp('src'),
    cache: true,
    cacheLocation: path.resolve(
      resolveApp('node_modules'),
      '.cache/.eslintcache'
    ),
    cwd: resolveApp('.'),
    resolvePluginsRelativeTo: __dirname,
  })
]


if(doesMfConfigExist) {
  plugins.push(new ModuleFederationPlugin(generateMFconfig()))
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          }
        },
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          "css-loader",
          "sass-loader",
        ],
      }
    ],
  },
  plugins
};
