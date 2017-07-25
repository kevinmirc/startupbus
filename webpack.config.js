var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './docs/app.js',
  },
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'app.js',
  },
  plugins: [
    new CopyWebpackPlugin([{ from: 'src/index.html', to: 'index.html' }]),
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
};
