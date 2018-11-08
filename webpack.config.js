/* eslint-disable */
const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'bundle'),
    publicPath: '/bundle/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
    ],
  },
  plugins: [
    // show friendly build errors
    new FriendlyErrorsWebpackPlugin(),
  ],
  resolve: {
    // allow import of js and jsx files
    extensions: ['.js', '.jsx'],
  },
  // limit verbose logging
  stats: {
    assets: true,
    modules: false,
    children: false,
  },
  devServer: {
    quiet: true,
    historyApiFallback: true,
    noInfo: false,
    contentBase: 'src',
  },
};
